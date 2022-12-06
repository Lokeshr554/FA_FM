/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoValidationBase',
	'dojo.widgets', 'DojoTextBase',
	'div',
{
	"_setCommonProp" : function() {
		egl.dojo.widgets.DojoTextBase.prototype._setCommonProp.call(this);
		var eglWidget = this;
		this._args = this._args || {};		
		if (typeof(this.promptMessage) == "string"){
			this._args.promptMessage = this.promptMessage;
		}
		if (typeof(this.invalidMessage) == "string"){
			this._args.invalidMessage = this.invalidMessage;
		}else{
			this.invalidMessage = "$_unset_$";
		}
		if (typeof(this.missingMessage) == "string"){
			this._args.missingMessage = this.missingMessage;
		}
		if ( this.tooltipPosition ){
			this._args.tooltipPosition = this.tooltipPosition;
		}
		this._args.required = this.required === undefined ? true : this.required;

		this.constraints = this.constraints || [];
		this.validators = this.validators || [];
		//TODO: change the private method of Dojo, check when updating Dojo
		this._args._refreshState = function(){
			if(this.textbox){
				this.validate(this._focused);
				if(this.state == "Error" && this._focused && !eglWidget._isMVCView()){
					this.displayMessage(this.getErrorMessage());
				}
			}					
		};
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
	"_setTextboxStyle" : function(){
		if(egl.IE && egl.IEVersion <= 7 && this.fontWeight){
			this.setFontWeight(this.fontWeight);
		}
		if(egl.IE && egl.IEVersion == 8 && this.opacity ){
			this.setOpacity(this.opacity);
		}
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
  	"setPromptMessage" : function( promptMessage ) {
  		this.promptMessage = promptMessage;
  		if (this.dojoWidget){
  			this.dojoWidget.set("promptMessage", promptMessage);
  		}  			
  	},
  	"getPromptMessage" : function() {
  		return this.promptMessage || "";
  	},
  	/* This error message will only be used for once. This method won't change the errorMessage property for DojoDate/Time/CurrencyTextBox */
  	"_setErrorMessage" : function( errorMessage ) {
  		if (this.dojoWidget){
  			this.dojoWidget.set("invalidMessage", errorMessage);
  		}  			
  	},
  	"setErrorMessage" : function( errorMessage ) {
  		this.invalidMessage = errorMessage;  		
  		if (this.dojoWidget){
  			this.dojoWidget.set("invalidMessage", errorMessage);
  		}  			
  	},
  	"getErrorMessage" : function() {
  		return this.invalidMessage || "";
  	},
  	"setInputRequired" : function(required){
		this.required = required;
		if(this.dojoWidget){
			this.dojoWidget.set("required",required);
		}
	},
	"isInputRequired" : function() {
		return this.required;
	},	
  	"setInputRequiredMessage" : function( missingMessage ) {
  		this.missingMessage = missingMessage;
  		if (this.dojoWidget){
  			this.dojoWidget.set("missingMessage", missingMessage);
  		}  			
  	},
  	"getInputRequiredMessage" : function() {
  		return this.missingMessage || "";
  	},
  	"setTooltipPosition" : function(tooltipPosition) {
  		this.tooltipPosition = tooltipPosition;
  		if (this.dojoWidget){
  			this.dojoWidget.set("tooltipPosition", tooltipPosition);
  		}  		
  	},
  	"getTooltipPosition" : function() {
  		return this.tooltipPosition;
  	},
  	/**
  	 * This function is for use by EGL Controller.
  	 * The purpose is to get the valid state without changing any underlying status like hasBeenBlured
  	 * Run validate in case the validator depends on other field
  	 */
  	"getValidState" : function() {
  		if(this.dojoWidget){
  			this.dojoWidget.validate();
  			if(this.dojoWidget.state != ''){
  				this.dojoWidget.state = "Error";
  				this.dojoWidget._setStateClass();
  				return this.dojoWidget.getErrorMessage();
  			}
  		}  		
  		return null;
  	},
  	"setConstraints" : function( constraints ) {		
		this.constraints = constraints;
	},
	"getConstraints" : function() {
		return this.constraints;
	},
  	"showErrorMessage" : function(msg, calledByController) {
  		if(this.dojoWidget){
 			var focused = this.dojoWidget._focused;
  			this.dojoWidget._focused = true;
  			this._setErrorMessage( msg );
  			this.dojoWidget.displayMessage(msg);
			this.dojoWidget._focused = focused;
  		}
  		this.validateOnlyIfModified = this.validateOnlyIfModified || !calledByController;
  	},
 	"showErrorIndicator" : function(show, calledByController ) {
  		if(this.dojoWidget){
  			if(show){
  	  			this.dojoWidget.state = "Error";
  	  			this.dojoWidget._setStateClass();
  			}else{
  	  			this.dojoWidget.state = "";
  	  			this.dojoWidget._setStateClass();
  			}
  			this.lastValidState = this.dojoWidget.state;
  		}
  		//If called by the user, skip the dojo validator for backward compatibility
  		this.validateOnlyIfModified = this.validateOnlyIfModified || !calledByController;
  		
  	},
  	"setValidators" : function( validators ) {
		this.validators = validators;
		if(this.dojoWidget){
			var eglWidget = this, dojoWidget = this.dojoWidget, builtInValidator = dojoWidget.get("validator");
			//Dojo private: copy from dojo and modified, need to revisit after dojo update
			doValidate = function(isFocused){
				var message = "";
				var isValid = this.isValid(isFocused); //Change here, allow disable
				if(isValid){ this._maskValidSubsetError = true; }
				var isEmpty = this._isEmpty(this.textbox.value);
				var isValidSubset = !isValid && isFocused && this._isValidSubset();
				this._set("state", isValid ? "" : (((((!this._hasBeenBlurred || isFocused) && isEmpty) || isValidSubset) && (this._maskValidSubsetError || (isValidSubset && !this._hasBeenBlurred && isFocused))) ? "Incomplete" : "Error"));
				this.focusNode.setAttribute("aria-invalid", this.state == "Error" ? "true" : "false");

				if(this.state == "Error"){
					this._maskValidSubsetError = isFocused && isValidSubset; // we want the error to show up after a blur and refocus
					message = this.getErrorMessage(isFocused);
				}else if(this.state == "Incomplete"){
					message = this.getPromptMessage(isFocused); // show the prompt whenever the value is not yet complete
					this._maskValidSubsetError = !this._hasBeenBlurred || isFocused; // no Incomplete warnings while focused
				}else if(isEmpty){
					message = this.getPromptMessage(isFocused); // show the prompt whenever there's no error and no text
				}
				this.set("message", message);

				return isValid;
			};
			dojoWidget.validate = function(){  // Only validate the changed value. Prevent the validation result from non-validator to be overridden
				//Convert value to string in case the value is date or time
				var newValue = '' + this.get("value"), oldValue = '' + eglWidget.lastValidatedValue;
				eglWidget.lastValidatedValue = newValue;				
				if(eglWidget.validateOnlyIfModified){								
					if(oldValue !== newValue || !eglWidget.lastValidState || this.state != eglWidget.lastValidState ){
						doValidate.apply( this, arguments );
						if(this.state == "" || this.state == "error"){
							eglWidget.lastValidState = this.state;
						}					
					}
				}else{
					doValidate.apply( this, arguments );
				}						
			};
			this.dojoWidget.set("validator", function(value, constraints){				
				if(dojoWidget && dojoWidget._isEmpty(value)){
					if(dojoWidget.required ){
						return false;
					}else{
						return true;
					}
				}
				
				if(this.regExpGen && !(new RegExp("^(?:" + this.regExpGen(constraints) + ")?$")).test(value)){
					if(eglWidget.invalidMessage == "$_unset_$"){
						eglWidget.invalidMessage = dojoWidget.messages.invalidMessage;
					}
					eglWidget._setErrorMessage(eglWidget.invalidMessage);
					return false;
				}
				
				if( typeof builtInValidator === "function" && !builtInValidator.apply(dojoWidget, arguments) ){
					eglWidget._setErrorMessage(dojoWidget.invalidMessage);
		  			return false;
				}
				
				/* EGL constraint has a different type with the internal constraint object */
				this._maskValidSubsetError = false;
				if(eglWidget.validators != null && eglWidget.validators.length>0 ){
					if(!(constraints instanceof egl.egl.Dictionary)){
						constraints = eglWidget.constraints;
					}				
					for(var i=0;i<eglWidget.validators.length;i++){
						var message = eglWidget.validators[i](value, constraints);
						if( message ){						
							eglWidget._setErrorMessage(message);
							return false;
						}
					}
				}								
				return true;
			});
		}
	},
	"getValidators" : function() {
		return this.validators;
	},
	"reset" : function() {
		if(this.dojoWidget){
			var _d = this.dojoWidget;
			_d._hasBeenBlurred = false;
			_d._setValueAttr(_d._resetValue, !this.suppressChangeEvent);
		}
	}
});
