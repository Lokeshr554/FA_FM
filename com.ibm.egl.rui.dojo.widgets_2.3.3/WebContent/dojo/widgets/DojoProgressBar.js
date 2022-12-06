/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoProgressBar',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"constructor" : function() {
		dojo.require("dijit.ProgressBar");
	},
	"createDojoWidget" : function(parent){
		var eglWidget = this;
		this._mergeArgs({
			indeterminate: this.indeterminate || false,
			maximum: this.maximum || 100,
			progress: this.progress || 0,
			places: 0
		});
		this.dojoWidget = new dijit.ProgressBar(this._args, parent);
		this.dojoWidget.startup();
	},
	"setMaximum" : function( max ){
		this.maximum = max;
		if(this.dojoWidget)
			this.dojoWidget.update({maximum:this.maximum});
	},
	"getMaximum" : function(){
		return this.maximum;
	},
	"setProgress" : function( progress ){
		if(progress<0){
			progress = 0;
		}
		if(progress>this.maximum){
			progress = this.maximum;
		}
		this.progress = progress;
		if(this.dojoWidget)
			this.dojoWidget.update({ progress:this.progress});
		else
			this.setData(progress);
	},
	"getProgress" : function(){
		return this.progress;
	},
	"setIndeterminate" : function( v ) {
		this.indeterminate = v;
		if(this.dojoWidget)
			this.dojoWidget.update({ indeterminate:this.indeterminate});		
	}
});
