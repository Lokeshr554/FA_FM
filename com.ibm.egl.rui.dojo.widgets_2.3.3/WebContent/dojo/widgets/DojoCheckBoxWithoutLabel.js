/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoCheckBoxWithoutLabel',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"constructor" : function() {		
		dojo.require("dijit.form.CheckBox");
		this.setData("");
	},
	"createDojoWidget" : function(parent) {
		var eglWidget = this;
		this._mergeArgs({
			checked: this.selected || false,
			disabled: this.disabled || false			
		});
		this.dojoWidget = new dijit.form.CheckBox(this._args, parent);
	},
	"getSelected" : function () {
  		return this.dojoWidget && this.dojoWidget.getValue()!=false;
  	},
  	"setSelected" : function ( selected ) {
  		this.selected = selected;
  		if (this.dojoWidget)
  			this.dojoWidget.setChecked( selected );
  	},
	"getDisabled": function() {
		return Boolean(this.disabled);
	},
	"setDisabled": function(disabled) {
		this.disabled = disabled;
		if (this.dojoWidget){
			this.dojoWidget.set("disabled", disabled);
		}
	},
	"setWidgetOrientation" : function(value) {
		this.setStyle("margin-left: 2px; margin-right: 0");
	}
});
