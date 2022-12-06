/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoDateTextBox',
	'dojo.widgets', 'DojoValidationBase',
	'div',
{
	"constructor" : function() {
		dojo.require("dijit.form.DateTextBox");
		var eglwidget = this;
		setTimeout(function(){
			eglwidget.renderWhenDojoIsDoneLoading();
		},1)
	},
	"createDojoWidget" : function(parent){
		var eglWidget = this;
		var widgetOrienattion = this.getWidgetOrientation();
		if (!widgetOrienattion)
			widgetOrienattion = null;
  		this._mergeArgs({
			id : this.id || "ddtb"  + (++egl._dojoSerial),
			type : "text", 
			method : "post",
			onMouseOver: function() {
				eglWidget.selectionEnabled = egl.egl.ui.rui.RUILib['$inst'].getTextSelectionEnabled();
				egl.egl.ui.rui.RUILib['$inst'].setTextSelectionEnabled(true);
			}, 
			onMouseOut: function() { 
				egl.egl.ui.rui.RUILib['$inst'].setTextSelectionEnabled(eglWidget.selectionEnabled);
			},
			dir: widgetOrienattion,
			constraints: {
				formatLength: this.formatLength || "short"
			}
		});
  		this._setCommonProp();
  		if (this.date){
  			this._args.value = this.date;
  		}
  		this.dojoWidget = new dijit.form.DateTextBox( this._args, parent);
  		// Set min/max from EGL constraints to Dojo constraints
  		this.setConstraints(this.constraints);
  		this.setValidators(this.validators);
  		this._setTextboxStyle();
  		this.dojoWidget.startup();  		
  	},
  	"clear" : function () {
  		if (this.dojoWidget) {
  			this.dojoWidget.setDisplayedValue("");
  		}
	},  	
  	"setValue" : function( date ){
  		this.date = date;
		if (this.dojoWidget) {
//			var s = this.dojoWidget.format(date, this.dojoWidget.constraints );
//			this.dojoWidget.setDisplayedValue(s);
			this.dojoWidget.set("value", date, !this.suppressChangeEvent);
		}
  	},
  	"getValue" : function(){
  		if (this.dojoWidget) {
  			return this.dojoWidget.get("value");
  		}
  		else{
  			return this.date
  		}  			
  	},
  	"setConstraints" : function( constraints ) {		
		this.constraints = constraints;		
		if(this.dojoWidget){
			if(!(this.dojoWidget.constraints)){
				this.dojoWidget.constraints = {};
			}
			if(constraints.min){
				this.dojoWidget.constraints.min = constraints.min.eze$$value;
			}
			if(constraints.max){
				this.dojoWidget.constraints.max = constraints.max.eze$$value;
			}
		}
	},
  	"setFormatLength" : function ( format ) {
  		this.formatLength = format;
		if (this.dojoWidget){
			var value = this.dojoWidget.get("value");
			this.dojoWidget.constraints.formatLength = format;
			this.dojoWidget.set("value", value);
		}			
  	},
  	"getFormatLength" : function(){
  		return this.formatLength;
  	},
  	"getText" : function(){
  		return egl.egl.core.$StrLib.formatDate(this.getValue()); 
  	},
  	"setText" : function(date){
  		this.setValue(egl.egl.core.$DateTimeLib.dateValue(date));
  	},
  	"getValueAsText" : function(){
  		var date = this.getValue();
  		return date ? egl.egl.core.$StrLib.formatDate(date) : "";
  	},
  	"setValueAsText" : function(date){
  		this.setValue(date ? egl.egl.core.$DateTimeLib.dateValue(date) : null);
  	}
});
