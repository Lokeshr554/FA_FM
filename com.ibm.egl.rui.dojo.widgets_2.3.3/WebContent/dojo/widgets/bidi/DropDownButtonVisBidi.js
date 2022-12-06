/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/form/DropDownButton","dojox/string/BidiEngine"], function(declare, has , button, BidiEngine){
	var bidiEngine = new BidiEngine(); 
	return declare("bidi.DropDownButtonVisBidi",[button],{
				
		postCreate: function(){
			this.setLabel(this.get("label"));
			this.inherited(arguments);     
		},
		setLabel: function(label) {
			var visChForBidiFormat = (this.isVisualMode == true) ? "V" : "I";						
			var swappingBidiFormat = (this.isVisualMode == true) ? "N" : "Y";
			label = bidiEngine.bidiTransform (label, visChForBidiFormat + "L" + swappingBidiFormat + "NN", "ILYNN");						
			if(this.dir == "rtl")
				label = "\u202A" + label;
			
			this.inherited(arguments);
		}
	});
}); 