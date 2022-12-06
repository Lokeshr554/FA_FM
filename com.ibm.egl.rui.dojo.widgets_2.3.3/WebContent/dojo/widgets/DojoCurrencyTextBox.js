/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoCurrencyTextBox',
	'dojo.widgets', 'DojoValidationBase',  	
	'div',									
{
	"constructor" : function() {
		dojo.require("dojo.date.locale");
		dojo.require("dijit.form.CurrencyTextBox");
	},
	"createDojoWidget" : function(parent){
		var eglWidget = this;
		this._mergeArgs({
			id : this.id || "egl.DCTB" + (++egl._dojoSerial),
			type : "text", 
			method : "post",
			currency : this.currency || "USD"
		});
		this._setCommonProp();
		this.dojoWidget = new dijit.form.CurrencyTextBox( this._args , parent);
		this.setValidators(this.validators);
		this._setTextboxStyle();
		this.dojoWidget.startup();
		if(this.value){
			this.setValue(this.value);
		}
	},
	"setText" : function( text ) {
		this.value = text;
		if(this.dojoWidget){
			var dojoWidget = this.dojoWidget,
			isFocused = dojoWidget.focused;
			//The parse method will parse digit format when focused is true; parse string with currency symbol format when focused is false
			dojoWidget.focused = true;
			this.value = dojoWidget.parse( text, dojoWidget.constraints);
			dojoWidget.focused = isFocused;
			dojoWidget.set("value", this.value, !this.suppressChangeEvent);			
		}	
	},
	"setValue" : function( text ) {
		this.setText(text);
	},
	"getValue" : function() {
		return(this.getText());
	},
	"setCurrency" : function(currency){
		this.currency = currency;
		this.renderWhenDojoIsDoneLoading();
	}
});
