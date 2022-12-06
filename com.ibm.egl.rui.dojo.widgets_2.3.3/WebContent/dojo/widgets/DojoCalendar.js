/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoCalendar',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"constructor" : function() {
		dojo.require("dijit._Calendar"); 
		this.renderWhenDojoIsDoneLoading();
	},
	"createDojoWidget" : function(parent) {
		var date = this.value ? this.value : new Date();
		var eglWidget = this;
		this._mergeArgs({
			onValueSelected :  function() {
				eglWidget.handleEvent(eglWidget.getOnSelect(), "onSelect", null);
			}
		});
		this.eze$$DOMElement.style.borderCollapse = "separate";
		this.dojoWidget = new dijit._Calendar(this._args, parent);
		
		if( date )
			this.setValue( date );
		
		this.dojoWidget.startup();
  	},
	"setValue": function(value) {
		if (this.dojoWidget)
			this.dojoWidget.set("value",value);
		this.value = value;
	},
	"getValue" : function() {
		if (this.dojoWidget)
			return this.dojoWidget.get("value");
		else
			return null;
	},
	"isSelectorOpen" : function(){
		if(this.dojoWidget && this.dojoWidget.monthWidget && this.dojoWidget.monthWidget._opened){
			return true;
		}
		return false;
	}
});
