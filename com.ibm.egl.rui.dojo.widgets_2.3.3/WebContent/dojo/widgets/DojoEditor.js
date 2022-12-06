/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoEditor',
	'dojo.widgets', 'DojoBase',
	'div',
{
	widgetOrientationThis: "",
	textLayoutThis: "",
	reverseTextDirectionThis: "",	
	"constructor" : function() {
		dojo.require("dijit.Editor");		
		dojo.require("dijit.layout._LayoutWidget");
		this.height = 300;
		this.width = 300;
		this.value = "";
		this.renderWhenDojoIsDoneLoading();
		
	},
	"createDojoWidget" : function(parent) {
		var eglWidget = this;
		var isVisualMode = (this.textLayoutThis == "Visual");		
		if(isVisualMode || (this.widgetOrientationThis != "")) {
			dojo.require("bidi.EditorVisBidi"); 
			this._mergeArgs({
				isVisualMode: (this.textLayoutThis == "Visual"), 
				dir: this.widgetOrientationThis,isTextReversed: (this.reverseTextDirectionThis == "Yes")
			});
			this.dojoWidget = new bidi.EditorVisBidi(this._args, parent);
		} else {
			this._mergeArgs({
				value : this.value,
				disabled: this.disabled || false
			});
			this.dojoWidget = new dijit.Editor(this._args, parent);		
		}
		
		this.dojoWidget.startup();
		// Ensure dom tree has completed its construction
		// in the initial phase
		setTimeout(
			function(){
				dojo.addOnLoad(eglWidget.dojoWidget, function() {
					eglWidget.dojoWidget.resize({w: eglWidget.width, h: eglWidget.height });	
				});
			}, 1
		);
	},
	"setHeight" : function(height) {
		this.height = height;
		if(this.dojoWidget){
			this.dojoWidget.resize({h: this.height});
		}
	},
	"getHeight" : function(){
		return this.height;
	},
	"setWidth" : function(width) {
		this.width = width;
		if(this.dojoWidget){
			this.dojoWidget.resize({w: this.width});
		}
	},
	"getWidth" : function(){
		return this.width;
	},
	"getContents" : function() {
		if (this.dojoWidget) {
			if(this.textLayoutThis == "Visual")
				return this.dojoWidget.getValue(true);
			else			
				return this.dojoWidget.get("value");
		} else{
			return this.value;
		}
	},
	"setContents" : function(value) {
		this.value = value;
		if (this.dojoWidget){
			this.dojoWidget.set("value", value);
		}			
	},
	"setDisabled" : function(disabled){
		this._setProperty("disabled", "disabled", disabled);
	},
	"getDisabled" : function(){
		return this._getProperty("disabled","disabled");
	},
	"setWidgetOrientation" : function(value) {
		this.widgetOrientationThis = value;
	},
	"getWidgetOrientation" : function() {
		return this.widgetOrientationThis;
	},
	"setTextLayout" : function(value){
		this.textLayoutThis = value;
	},
	"getTextLayout" : function(){
		return this.textLayoutThis;
	},
	"setReverseTextDirection" : function(value){
		this.reverseTextDirectionThis = value;	
	},
	"getReverseTextDirection" : function(){
		return this.reverseTextDirectionThis;
	}
});
