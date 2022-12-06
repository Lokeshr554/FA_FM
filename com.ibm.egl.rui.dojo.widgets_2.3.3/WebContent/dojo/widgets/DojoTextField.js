/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoTextField',
	'dojo.widgets', 'DojoValidationBase',  	
	'div',									
{
	"constructor" : function() {
		dojo.require("dijit.form.ValidationTextBox");		
		this.validators = [];
		this.isBidi = false;
		this.renderWhenDojoIsDoneLoading();
	},
	"createDojoWidget" : function(parent){	
		this._setCommonProp();
		if(this.required === undefined){
			this._args.required = false;
		}
		if (!this.isBidi) {
			this.dojoWidget = new dijit.form.ValidationTextBox( this._args , parent);
		} else {
			this._args.isVisualMode = this.textLayoutThis == "Visual";
			if (this.widgetOrientationThis == "rtl")
				this._args.dir="rtl";
			else
				this._args.dir="ltr";
			dojo.require("bidi.ValidationTextBoxVisBidi"); 
			this.dojoWidget = new bidi.ValidationTextBoxVisBidi(this._args, parent);
		}
		
		this.setValidators(this.validators);
		this._setTextboxStyle();
		this.dojoWidget.startup();
	},
	"setBiDiMarkers" : function (){
		if (!this.isBidi) {
				if (this.reverseTextDirectionThis == "Yes" ||
					this.widgetOrientationThis == "rtl" ||
					this.textLayoutThis == "Visual")
					this.isBidi = true;
		} else if (this.isBidi && this.dojoWidget){
			this.eze$$DOMElement.removeChild(this.dojoWidget);
			this.createDojoWidget(this.parent);
		}
	}
});
