/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/form/ToggleButton","dojox/string/BidiEngine"], function(declare, has , button, BidiEngine){
	var bidiEngine = new BidiEngine(); 
	return declare("bidi.ToggleButtonVisBidi",[button],{
		set: function(name, value){
			if (name == "label")
				value = this.bidiGetLabelAttr(value);

			this.inherited(arguments); 
		},		
		bidiGetLabelAttr: function(label){
			var visChForBidiFormat = (this.isVisualMode == true) ? "V" : "I";
			var swappingBidiFormat = (this.isVisualMode == true) ? "N" : "Y";		
			return bidiEngine.bidiTransform(label, visChForBidiFormat + "L" + swappingBidiFormat + "NN", "ILYNN");
		}

	});
}); 