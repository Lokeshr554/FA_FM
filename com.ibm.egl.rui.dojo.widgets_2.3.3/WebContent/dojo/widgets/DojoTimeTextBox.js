/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoTimeTextBox',
	'dojo.widgets', 'DojoValidationBase',
	'div',
{
	"constructor" : function() {
		dojo.require("dijit.form.TimeTextBox");
		this.timePattern = "hh:mm a";
		this.renderWhenDojoIsDoneLoading();
	},
	"createDojoWidget" : function(parent) {
		var eglWidget = this;
		this._mergeArgs({
			id : this.id || "egl.DojoTimeTextBox" + (++egl._dojoSerial),
			type : "text", 
			selector : 'time'
		});
		this._setCommonProp();
		this.dojoWidget = new dijit.form.TimeTextBox( this._args, parent);
		this.dojoWidget.constraints.visibleIncrement = this.visibleIncrement || "T01:00";
		this.dojoWidget.constraints.timePattern = this.timePattern;
		this.dojoWidget.constraints.clickableIncrement = this.clickableIncrement || "T00:15";
		this.dojoWidget.constraints.visibleRange = this.visibleRange || "T03:00";
		this.setValidators(this.validators);
		this._setTextboxStyle();
		this.dojoWidget.startup();
		
		if (this.time) 
			this.setValue(this.time);
	},
	"setValue" : function( time ){
		this.time = time;
		if (this.dojoWidget){
			if( time ){
				this.dojoWidget.set('displayedValue',this.convertEGLTimeToDojoTime(time), !this.suppressChangeEvent);	
			}
			else{
				this.dojoWidget.set('displayedValue', "", !this.suppressChangeEvent );
			}
		}
	},
	"convertEGLTimeToDojoTime" : function(eglTime) {
		return egl.egl.core.$StrLib.formatTime( eglTime, this.timePattern);
	},
	"getValue" : function(){
		if (this.dojoWidget) { 
        	var dojoTime = this.dojoWidget.get("value");
        	if( dojoTime != null ){
        		try {
                    var s = "" + this.twoDigits(dojoTime.getHours()) + 
                        this.twoDigits(dojoTime.getMinutes()) +
                        this.twoDigits(dojoTime.getSeconds());
                    return egl.egl.core.$DateTimeLib.timeValue(s);
                }
                catch (e) {
                    egl.printError("Cannot convert time "+time, e);
                }
        	}
        }else{
            return this.time;
        }
    },
    "setText" : function( time ){
    	this.setValueAsText(time);
  	},
  	"getText" : function(){
  		return(this.getValueAsText());
  	},
    "twoDigits" : function(value) {
    	value = parseInt(value);
    	return "" + (value < 10 ? "0" : "") + value;			
    },
    "setTimePattern" : function( pattern ){
        this.timePattern = pattern;
        if (this.dojoWidget) {
            this.dojoWidget.constraints.timePattern = pattern;
            this.dojoWidget.set('displayedValue',this.convertEGLTimeToDojoTime(this.time));
        }
    },	
	"getTimePattern" : function(){
		return this.timePattern;
	},
	"setClickableIncrement" : function( increment ){
		this.clickableIncrement = increment;
		if (this.dojoWidget)
			this.dojoWidget.constraints.clickableIncrement = increment;
	},
	"getClickableIncrement" : function(){
		return this.clickableIncrement;
	},
	"setVisibleIncrement" : function( increment ){
		this.visibleIncrement = increment;
		if (this.dojoWidget)
			this.dojoWidget.constraints.visibleIncrement = increment;
	},
	"getVisibleIncrement" : function(){
		return this.visibleIncrement;
	},
	"setVisibleRange" : function( range ){
		this.visibleRange = range;
		if (this.dojoWidget)
			this.dojoWidget.constraints.visibleRange = range;
	},
	"getVisibleRange" : function(){
		return this.visibleRange;
	},
	"getValueAsText" : function(){
		var time = this.getValue();
		return time ? egl.egl.core.$StrLib.formatTime(time) : "";
	},
	"setValueAsText" : function(time){
		this.setValue(egl.egl.core.$DateTimeLib.timeValue(time));
	}
});
