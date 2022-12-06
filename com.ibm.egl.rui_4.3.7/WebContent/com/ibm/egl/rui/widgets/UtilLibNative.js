/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineClass("com.ibm.egl.rui.widgets", "UtilLibNative", {
	
	"getWidgetVariableName" : function(widget) {
		if (widget != null && widget.eze$$variableName != undefined) {
			return widget.eze$$variableName;
		} 
		return "";
	},
	"destroyWidget" : function(widget) {
		egl.destroyWidget(widget);
	},
	"destroyWidgetChildren" : function(widget) {
		egl.destroyWidgetChildren(widget);
	},
	"destroyRUIHandler" : function(ruiHandler) {
		if(ruiHandler == null)
			return;
		if(ruiHandler.eze$$superClass == egl.egl.ui.rui.View)
			egl.destroyRUIHandler(ruiHandler);
		else
			throw egl.createRuntimeException( "CRRUI2007E", ["UtilLib.destroyRUIHandler("+ ruiHandler +")"]);
	},
	"clearHTMLString" : function(){
		this.HTMLBuffer = [];
		this.htmlStringCount = 0;
	},
	"appendHTMLString" : function(str) {
		this.HTMLBuffer[this.htmlStringCount++] = str;
	},
	
	"getHTMLString" : function(){
		return this.HTMLBuffer.join("");
	},
	
	"encodeString" : function(str){
		return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}
});

