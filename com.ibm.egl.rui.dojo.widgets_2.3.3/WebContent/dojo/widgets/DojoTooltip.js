/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoTooltip',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"constructor" : function() {
		dojo.require("dijit.Tooltip"); 
	},
	"createDojoWidget" : function(parent) {
		this._args = {
			connectId: this.target || [],
            label: this.contents || "",
            showDelay: this.delay || 10,
            defaultPosition: this.defaultPosition || []
		};
		this.dojoWidget = new dijit.Tooltip(this._args);
		this.dojoWidget.startup();
	},
	"setTarget" : function(target) {
		this.target = target;
		if(this.dojoWidget){
			this.dojoWidget.set("connectId", target);
		}else{ // The target may not be attached to the Dom, so suspend
			var eglWidget = this;
			setTimeout(function() {
				eglWidget.renderWhenDojoIsDoneLoading();
			},1);
		}		
	},
	"setContents" : function(contents){
		this.contents = contents;
		if(this.dojoWidget){
			this.dojoWidget.set("label", this.contents);
		}
	},
	"setDefaultPosition" : function(defaultPosition){
		this.defaultPosition = defaultPosition;
		if(this.dojoWidget){
			this.dojoWidget.set("defaultPosition", this.defaultPosition);
		}
	},
	"setDelay" : function(delay){
		this.delay = delay;
		if(this.dojoWidget){
			this.dojoWidget.set("showDelay", this.delay);
		}
	}
});
