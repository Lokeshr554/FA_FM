/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoToggleButton',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"constructor" : function() {
		dojo.require("dijit.form.Button");
		this.text = "";
		this.checkedText = "";
		var eglWidget = this;
		this.isBidi = false;
		this.renderWhenDojoIsDoneLoading();
	},
	"createDojoWidget" : function(parent) {
		this.readBiDiParams();
		this.runEventHandlers = function() { }; // turn off EGL basic event handlers
		var eglWidget = this;
		this._mergeArgs({
			label: this.text,
			disabled: this.disabled || false,
			onChange: function(val){
				if (val){
					this.attr('label', eglWidget.checkedText); 
				}else{
					this.attr('label', eglWidget.text); 
				}
			}
		});
		if (!this.isBidi) {
			this.dojoWidget = new dijit.form.ToggleButton(this._args, parent);
		} else {
			this.setBiDiParams(this._args);
			dojo.require("bidi.ToggleButtonVisBidi"); 
			this.dojoWidget = new bidi.ToggleButtonVisBidi(this._args, parent);
		}
		
		this.dojoWidget.setDisabled(this.disabled ? true : false);
		this.dojoWidget.domNode.firstChild.style.display = "block";
		if(this.height){
			this.dojoWidget.domNode.firstChild.style.height = ( parseInt(this.height) - 8 ) + "px";
		}
	},
	"setID" : function(id) {
		if(id){
			this._setProperty("id", "id", id);
			this.eze$$DOMElement.id = "widget_" + id;
		}		
	},
	"getID" : function() {
		return this._getProperty("id","id");
	},
	"setHeight" : function(height){
		egl.dojo.widgets.DojoBase.prototype.setHeight.call(this, height);
		if(this.dojoWidget){
			this.dojoWidget.domNode.firstChild.style.height = (parseInt(height)-8) + "px";
		}
	},
	"isChecked" : function() {
		if (this.dojoWidget)
			return this.dojoWidget.attr('checked');
	},
	"setText": function(text) {
		this.text = text;
		this.setBiDiMarkers();
		if (this.dojoWidget)
			this.dojoWidget.setLabel(text);
	},
	"setCheckedText" : function(text) {
		this.checkedText = text;		
	},
	"setDisabled" : function(disabled){
		this._setProperty("disabled", "disabled", disabled);
	},
	"getDisabled" : function(){
		return this._getProperty("disabled","disabled");
	},
	"getText" : function() {
		return this.text;
	},
	"getCheckedText" : function() {
		return this.checkedText;
	}
});
