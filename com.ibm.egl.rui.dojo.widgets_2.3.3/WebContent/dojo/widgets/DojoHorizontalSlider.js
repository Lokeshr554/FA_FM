/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoHorizontalSlider',  	// this class
	'dojo.widgets', 'DojoBase',  			// the super class
	'div',									// dom element type name
{
	"constructor" : function() {
		this.minimum = 0;
		this.maximum = 100;
		this.step = 0;
		dojo.require("dijit.form.Slider");
	},
	"createDojoWidget" : function(parent){
		var eglWidget = this;
		if (this.showLabels && !this.step) {
			var error = egl.createChild(this.eze$$DOMElement, "div");
			error.style.color = "red";
			error.style.whitespace = "nowrap";
			error.innerHTML = "Error: \"showLabels==true\' requires a value for \"step\""
		}
		count = Math.min(count, this.getPixelWidth()/25);
		this.step = this.step || 1;
		var count = Math.round((this.maximum-this.minimum)/this.step - 0.5) + 1;
		while (parent.firstChild)
			parent.removeChild(parent.firstChild);
		if (this.showLabels) {
			new dijit.form.HorizontalRule({
				count: count,
				style: "height:5px",
				container: "bottomDecoration"
			}, egl.createChild(parent, "div"));
			new dijit.form.HorizontalRuleLabels({
				count: count,
				minimum: this.minimum,
				maximum: this.maximum,
				style: "height:1.2em;font-size:75%;",
				constraints: "{pattern:'#'}",
				container: "bottomDecoration"
			}, egl.createChild(parent, "div"));
		}
		this._mergeArgs({
			value: this.data,
			minimum: this.minimum,
			maximum: this.maximum,
			discreteValues: count,
			sliderDuration: 500,
			intermediateChanges: true,
			disabled: this.disabled || false
		});
		this.dojoWidget = new dijit.form.HorizontalSlider(this._args, parent);
	},
	"setValue" : function( /*int*/ value) {
		if (this.dojoWidget) 
			this.dojoWidget.setValue(value);
		else {
			this.setData(value);
		}
  	},
   	"getValue" : function() {
		if (this.dojoWidget)
			return this.dojoWidget.value;
		else
			return this.data;
  	},
  	"setDisabled" : function(disabled){
		this._setProperty("disabled", "disabled", disabled);
	},
	"getDisabled" : function(){
		return this._getProperty("disabled","disabled");
	}
});
