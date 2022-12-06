/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoTextArea',
	'dojo.widgets', 'DojoTextBase',
	'textarea',
{
	"constructor" : function() {
		dojo.require("dijit.form.SimpleTextarea");
		this.renderWhenDojoIsDoneLoading();
	},
	"createDojoWidget" : function(parent) {
		var eglWidget = this;		
		this._mergeArgs({
			cols : this.cols ? ""+this.cols : "100",
			rows : this.rows ? ""+this.rows : "10"
		});
		this._setCommonProp();
		this.dojoWidget = new dijit.form.SimpleTextarea( this._args, parent);
		this.dojoWidget.startup();		
	},
	"setNumRows" : function( numRows ) {
		this.rows = numRows;
		if(this.dojoWidget){
			this.dojoWidget.set("rows","" + numRows);
		}
	},
	"getNumRows" : function(){
		return this.rows;
	},
	"setNumColumns" : function( numColumns ) {
		this.cols = numColumns;
		if(this.dojoWidget){
			this.dojoWidget.set("cols","" + numColumns);
		}
	},
	"getNumColumns" : function(){
		return this.cols;
	}
});
