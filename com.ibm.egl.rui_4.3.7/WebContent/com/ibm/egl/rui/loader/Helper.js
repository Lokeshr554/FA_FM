/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.helperStart = new Date().getTime();

egl.defineClass(
	'com.ibm.egl.rui.loader', 'Helper',
{
	"eval" : function(script){
		try {
			if (script == "")
				return;				
			script = script.replace(/<!-- Generated[^-]*-->/g, "");
			var index = script.indexOf("<script>");
			if (index != -1)
				script = script.substring(index+8);
			try {
				if ( egl.IE && egl.IEVersion < 9 ) {
					window.execScript( script );
				} else {
				    var geval = function() {
				    	window.eval.call( window, script );
				    };
				    geval();
				}
			}
			catch (e) {
				egl.println("oops: "+e);
				script = script.replace(/</g, "&lt;");
				egl.println("<pre>"+script+"</pre>");
			}
		}
		catch (e) {
			throw "could not eval script: "+e.message;
		}
	},
	"createHandler" : function(handlerName) {
		var handler;
		try {
			handler = eval("new egl." + handlerName + "()");
		}
		catch (e) {
			throw "Cannot instantiate handler '" + handlerName + "' due to " + e.message;
		}
		return handler;
	},
	"getField" : function(handler, fieldName) {
		if (fieldName in handler)
			return handler[fieldName];
		else
			throw "No field with name "+fieldName+" declared in "+handler;
	},
	"getContext" : function() {
		var url = document.location.toString();
		url = url.substring(url.indexOf("/", 8)+1);
		url = url.substring(0, url.indexOf("/"));
		return (url);
	},
	"getPortNumber" : function() {
		var port = window.location.protocol.indexOf("https") == 0 ? 443 : 80;
		return document.location.port ? document.location.port : port;
	},
	"getCurrentMillis" : function() {
		return new Date().getTime();
	},
	"getStartMillis" : function() {
		return egl.helperStart;
	},
	"getBrowserName" : function() {
		return window.navigator.userAgent;
	},
	"notYetLoaded" : function(name) {
		if (name.match(/.*.js/)) {
			name = name.replace(/(.*).js$/, "$1");
			name = name.replace(/\//g, ".");
			if(this.handlerLoaded(name)){
				return(false);
			}
		}
		return true;
	},	
	"unload" : function(name) {
		if (name.match(/.*.js/)) {
			name = name.replace(/(.*).js$/, "$1");
			name = name.replace(/\//g, ".");
		    var pkg = this.getPackage( name );
		    name = this.getHandlerName(name);
		    if(null != pkg[name] && pkg[name].eze$isLibrary){
		    	return false;
		    }
		    pkg[name] = null;	
	    	return true;
		}
	},
	"setDefaultConstructor" : function(name) {
		var pkg = name.replace(/(.*)\.[^\.]*/g, "$1");
		var handler = this.getHandlerName(name);
		 egl.initDynamicLoadingHandler(pkg, handler);
	},
	"getLocale" : function() {
		return window.egl__htmlLocale;
	},
	"alert" : function(message) {
		alert(message);
	},
	"getBaseURL" : function() {
		var pathStr = window.location.pathname;
		var pIndex = pathStr.indexOf("/",1);
		return (window.location.protocol + "//" + window.location.host + pathStr.substring(0,pIndex+1));
	},
	"replaceAll" : function(source, target, replacement) {
		var len = target.length;
		var index = source.indexOf(target);
		while (index != -1) {
			source = source.substring(0, index) + replacement + source.substring(index+len);
			index = source.indexOf(target);
		}
		return source;
	},
	"inDeploymentMode" : function() {
		return !("egl__contextAware" in window);
	},
	"supportsHTML5" : function() {
		return typeof(window.openDatabase) !== "undefined";
	},
	"loadFile" : function(url, handler) {
		var asynchronous = egl.eze$$dynamicLoadAsynch == undefined ? true : egl.eze$$dynamicLoadAsynch;
		var xmlhttp = egl.newXMLHttpRequest();
	    if (xmlhttp && asynchronous) {
	        xmlhttp.onreadystatechange = function() {
	            if (xmlhttp.readyState==4) {
            		handler(xmlhttp.responseText);
	            }
	        }
        }
    	xmlhttp.open( 'GET', url, asynchronous);
		xmlhttp.send( null );
		
		if(!asynchronous){
			handler(xmlhttp.responseText);
		}
	},
	"getDynamicLoadingList" : function(){
		return(window.egl__dynamicLoadHandlers);
	},
	"split" : function(aStr, delimiters){
		return(aStr.split(delimiters));
	},
	"handlerLoaded" : function(fullHandlerName){
		var pkg = this.getPackage(fullHandlerName);
		var handlerName = this.getHandlerName(fullHandlerName);
		  if(pkg[handlerName] && (!pkg[handlerName]["needDynamicLoading"])){
	    	return(true);
	    }
	    
	    return(false);
	},
	"getPackage" : function(handlerName){
		var pkgName = handlerName.replace(/(.*)\.[^\.]*/g, "$1");
		var pkg = egl.makePackage( pkgName );
		return(pkg);
	},
	"getHandlerName" : function(fullHandlerName){
		return(fullHandlerName.replace(/.*\.([^\.]*)/g, "$1"));
	},
	"deleteDefaultConstructor" : function(handlerName){
		var pkg = this.getPackage(handlerName);
		var handler = this.getHandlerName(handlerName);
		if(pkg[handler] && pkg[handler]["needDynamicLoading"]){
			pkg[handler] = null;	
		}
	},
	"configureServiceWrapper" : function(svcWrapper){
		svcWrapper.eze$$asynch = egl.eze$$dynamicLoadAsynch == undefined ? true : egl.eze$$dynamicLoadAsynch;
	}
});
