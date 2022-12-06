/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoContentPane',
	'dojo.widgets', 'DojoContainer',
	'div',
{
	"constructor" : function() {
		this.isBidi = false;
	},
	"createDojoWidget" : function(parent) {
		this.readBiDiParams();
		this.renderingStep = 4.1;
		this.assert(dijit.layout.ContentPane, "dijit.layout.ContentPane is undefined");
		this._mergeArgs({
			region: this.region || "",
			title: this.title || "", 
			refreshOnShow: true, 
			closable: this.closable || "", 
			disabled: !!this.disabled,
			splitter: this.splitter || false
		});
		if(this.id){
			this._args.id = this.id;
		}
		if (!this.isBidi) {
			this.dojoWidget = new dijit.layout.ContentPane(this._args, parent);
		} else {
			this.setBiDiParams(this._args);
			dojo.require("bidi.ContentPaneVisBidi"); 
			this.dojoWidget = new bidi.ContentPaneVisBidi(this._args,parent);
		}
		this.renderingStep = 4.2;
		try {
			this.setChildren(this.children);
		}
		catch(e) {
			throw "Could not set DojoContentPane children: "+e.message;
		}
	},
	"destroy" : function(){
		var domNode = this.eze$$DOMElement;
		var parentWidget = null;
		while(domNode.parentNode){
			domNode = domNode.parentNode;
			if(domNode.eze$$widget){
				parentWidget = domNode.eze$$widget;
				break;
			}		
		}
		if(parentWidget && parentWidget.dojoWidget && parentWidget.dojoWidget.domNode && this.dojoWidget && this.dojoWidget.domNode && parentWidget.dojoWidget.removeChild){
			//RTC 102330: Workaround for Dojo bug, layout.layoutChildren have error when children length is 0
			if(parentWidget.dojoWidget.tablist && parentWidget.children.length<=1 ){
				 parentWidget.dojoWidget.doLayout =false;
			}
			parentWidget.dojoWidget.removeChild(this.dojoWidget);
		}
		if(parentWidget && egl.isa(parentWidget, "Tdojo/widgets/dojotabcontainer;") && this.dojoWidget && this.dojoWidget.domNode
				&& parentWidget.dojoWidget && parentWidget.dojoWidget.tablist){
			parentWidget.dojoWidget.tablist.removeChild(this.dojoWidget);
		}			
		var children = this.children;
		if(egl.IE && children){
			for(var i=children.length - 1; i>=0; i--){
				egl.destroyWidget(children[i]);
			}	
		}
		egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
	},
	"setChildren" : function(children) {
		this.children = children;
		if (this.dojoWidget) {
			this.assert(this.dojoWidget.domNode, "dijit.layout.ContentPane has no domNode"); 
			this.renderingStep = 4.3;
			this.removeAllChildren();
			for (var n=0; n<children.length; n++)
				this.dojoWidget.domNode.appendChild(children[n].eze$$DOMElement);
			try {
				this.dojoWidget.startup();
			}
			catch (e) {
				throw "dijit.layout.ContentPane could not be started: "+e.message;
			}
		}
		else {
			this.renderWhenDojoIsDoneLoadingSafely();
		}
	},
	"appendChild" : function(child) {
		this.dojoWidget.domNode.appendChild(child.eze$$DOMElement);
	},
	"addChild" : function(child, index) {
	},
	"removeAllChildren" : function() {
		while (this.dojoWidget.domNode.firstChild)
			this.dojoWidget.domNode.removeChild(this.dojoWidget.domNode.firstChild);
	},
	"copyStyle" : function(style) {
	},
	"setTitle" : function(val) {
		this.title = val;
		if (this.dojoWidget) {
			this.dojoWidget.attr("title",val);
		}
	},
	"getTitle" : function() {
		return(this.title || "");
	},
	"setRegion" : function(region) {
		this.region = region;
	},
	"setSplitter" : function(split) {
		this.splitter = split;
	},
	"setTextLayout" : function(textLayout){
		this.textLayoutThis = textLayout;
	},
	"setReverseTextDirection" : function (reverseTextDirection){
		this.reverseTextDirectionThis = reverseTextDirection;
	},
	"setDisabled" : function(d){
		this._setProperty( 'disabled', 'disabled', !!d );
	},
	"getDisabled" : function(){
		return this._getProperty( 'disabled', 'disabled' );
	}
	
});
