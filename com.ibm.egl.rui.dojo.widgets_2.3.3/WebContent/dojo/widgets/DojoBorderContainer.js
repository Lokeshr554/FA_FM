/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoBorderContainer',
	'dojo.widgets', 'DojoContainer',
	'div',
	{
	"constructor" : function() {
		this.setChildType("dojo.widgets.DojoContentPane");
		this.width = 800;
		this.height = 450;
		dojo.require("dijit.layout.BorderContainer");
		dojo.require("dijit.layout.ContentPane");
	},
	"createDojoWidget" : function(parent) {
		this.dojoID = "egl.DojoBorderContainer"  + (++egl._dojoSerial);
		this._mergeArgs({
			id: this.id || this.dojoID,
			gutters: this.borders===true?true:false,
			style: "width:"+egl.toPX(this.width)+";height:"+egl.toPX(this.height)
		});
		this.dojoWidget = new dijit.layout.BorderContainer(this._args, parent);
		this.dojoWidget.startup();
	},
	"addChild" : function(child, index) {
		egl.dojo.widgets.DojoContainer.prototype.addChild.call(this, child);
	},
	"setBorders" : function(val) {
		// borders cannot be set dynamically
		if(this.borders!=val){
			this.borders=val;
			if(this.dojoWidget){
				this.setChildren(this.children);
			}			
		}
	},
	"isBorders" : function() {
		return this.borders;
	}
});
