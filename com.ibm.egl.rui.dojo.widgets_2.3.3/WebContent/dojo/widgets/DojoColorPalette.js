/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoColorPalette',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"constructor" : function() {
		dojo.require("dijit.ColorPalette");
		this.renderWhenDojoIsDoneLoading();
	},
	"createDojoWidget" : function(parent) {
		var eglWidget = this;
		this._mergeArgs({
			palette: this.small ? "3x4" : "7x10",
		});
		if(this.value){
			this._args.value = this.value;
		}
		this.dojoWidget = new dijit.ColorPalette(this._args, parent);
	},
	"setValue": function(value) {
		this.value = value;
		if (this.dojoWidget)
			this.dojoWidget.set("value", value);
	},
	"getValue" : function() {
		if (this.dojoWidget)
			return this.dojoWidget.value;
		else
			return this.value || "";
	}
});
