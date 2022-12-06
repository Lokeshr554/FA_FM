/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoComboBox',
	'dojo.widgets', 'DojoBase',
	'select',
{
	"constructor" : function() {
		dojo.require('dijit.form.ComboBox');
		this.pageSize = -1;
		this.isBidi = false;
		this.isFocused = false;
		this.editable = true;
	},
	"createDojoWidget" : function(parent) {
		this.setBiDiMarkers();		
		this.runEventHandlers = function() { }; // turn off EGL basic event handlers
		var eglWidget = this;		
		if (this.data)
			for (var n=0; n<this.data.length; n++)
				egl.createChild(this.eze$$DOMElement, "option").innerHTML = this.data[n]; 
		this._mergeArgs({
			value: this.value == undefined ? this.data[0] : this.value, 
			autoComplete: false,
			selectOnClick: true,
			disabled: this.disabled || false,
			onChange: function() {	
				eglWidget._handleChange();
			}
		});		
		if (this.pageSize != -1) {
			this._args.pageSize = this.pageSize;
		}
		if (!this.isBidi) {
			this.dojoWidget = new dijit.form.ComboBox(this._args, this.eze$$DOMElement);
		} else {
			this.setBiDiParams(this._args);
			dojo.require("bidi.ComboBoxVisBidi"); 
			this.dojoWidget = new bidi.ComboBoxVisBidi(this._args, this.eze$$DOMElement);
		}
		this.eze$$DOMElement.style.display = "inline-block";
		if(this.isFocused){
			dijit.selectInputText(this.dojoWidget.textbox);
		}
		this.setEditable(this.editable);
		if(egl.IE && egl.IEVersion <= 7 && this.fontWeight){
			this.setFontWeight(this.fontWeight);
		}
		if(egl.IE && egl.IEVersion == 8 && this.opacity ){
			this.setOpacity(this.opacity);
		}	
	},
	"_setEvent" : function( htmlEventName, eglEventName, dojoEventName){
		var eglWidget = this;
		var func = function(e) {		
			eglWidget.handleEvent(eglWidget["getOn" + eglEventName](), "on" + eglEventName, e);
		}; 
		if(htmlEventName == "blur"){			
			func = function(e) {
				eglWidget.isFocused = false;			
				egl.egl.ui.rui.RUILib.$inst.setTextSelectionEnabled(false);
				eglWidget.handleEvent(eglWidget.getOnFocusLost(), "onFocusLost", null);
	        };		    	
		}else if(htmlEventName == "focus"){
			func = function(e) {
				if(egl.IE){
					setTimeout(function() {
						eglWidget._handleFocus();
						dijit.selectInputText(eglWidget.dojoWidget.textbox);
					},1);
				}else{
					eglWidget._handleFocus();
				}
			};
		}else if(htmlEventName == "mousedown"){
			func = function(e){
				egl.egl.ui.rui.RUILib.$inst.setTextSelectionEnabled(true); 
				eglWidget.handleEvent(eglWidget.getOnMouseDown(), "onMouseDown", e);
			}			
		}
		this._setEventWithFunc(htmlEventName, eglEventName, dojoEventName, func);
	},
	"_handleChange" : function(){
		this.value = this.dojoWidget.getValue();
		if(this.isFocused){
			dijit.selectInputText(this.dojoWidget.textbox);
		}
	},
	"_handleFocus" : function(){
		this.isFocused = true;
		this.textEnabled = egl.egl.ui.rui.RUILib.$inst.getTextSelectionEnabled();
		egl.egl.ui.rui.RUILib.$inst.setTextSelectionEnabled(true);
		this.handleEvent(this.getOnFocusGained(), "onFocusGained", null);		
	},
	"setFontWeight" : function(fontWeight){
		egl.egl.ui.rui.Widget.prototype.setFontWeight.call(this, fontWeight);
		this.fontWeight = fontWeight;
		if(egl.IE && egl.IEVersion <= 7 && this.dojoWidget ){
			this.dojoWidget.textbox.style.fontWeight = fontWeight;
		}
	},
	"setOpacity" : function(opacity){
		egl.egl.ui.rui.Widget.prototype.setOpacity.call(this, opacity);
		this.opacity = opacity;
		if(egl.IE && egl.IEVersion == 8 && this.dojoWidget ){
			this.dojoWidget.textbox.style.opacity = opacity;
			this.dojoWidget.textbox.style.filter = (opacity >= 0.90) ? "''" : "alpha(opacity="+(100*opacity)+")";
		}
	},
	"setValue": function(value) {
		this.value = value;
		if (this.dojoWidget)
			this.dojoWidget.setValue(value);
	},
	"getValue" : function() {
		return this._getProperty("value","value");
	},
	"setValues": function(values) {	
		this.values = values;
		this.value = this.getValue();
		this.setData(this.values);
	},
	"getValues" : function() {
		return this.values;
	},
	"setEditable" : function(editable) {
		this.editable = editable;
		if(this.dojoWidget){
			this.dojoWidget.textbox.readOnly = !editable;
		}		
	},
	"getEditable" : function(){
		if(this.dojoWidget){
			return !this.dojoWidget.textbox.readOnly;
		}else{
			return this.editable;
		}
	},
	"setDisabled" : function(disabled){
		this._setProperty("disabled", "disabled", disabled);
	},
	"getDisabled" : function(){
		return this._getProperty("disabled","disabled");
	},
	"setReverseTextDirection" : function(reverseTextDirection) {
		//just to override DojoBase's method
	},
	"setBiDiMarkers" : function (){
		if (!this.isBidi) {
				if (this.reverseTextDirectionThis == "Yes" ||
					this.widgetOrientationThis == "rtl" ||
					this.textLayoutThis == "Visual")
					this.isBidi = true;
		} else if (this.isBidi && this.dojoWidget){
			this.eze$$DOMElement.removeChild(this.dojoWidget);
			this.createDojoWidget(this.eze$$DOMElement);
		}
	},
	"setValueAsText" : function(value){
		this.setValue(value);
	},
	"getValueAsText" : function(){
		return(this.getValue());
	}
});
