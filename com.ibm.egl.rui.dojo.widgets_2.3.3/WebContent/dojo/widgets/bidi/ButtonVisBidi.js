/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/form/Button","dojox/string/BidiEngine"], function(declare, has , button, BidiEngine){
	var bidiEngine = new BidiEngine(); 
	return declare("bidi.ButtonVisBidi",[button],{
				
		postCreate: function(){
			this.setLabel(this.get("label"));
			this.inherited(arguments);    
		},
		setLabel: function(label) {
			var visChForBidiFormat = (this.isVisualMode == true) ? "V" : "I";
			var swappingBidiFormat = (this.isVisualMode == true) ? "N" : "Y";
			label = bidiEngine.bidiTransform(label, visChForBidiFormat + "L" + swappingBidiFormat + "NN", "ILYNN");
			this.inherited(arguments);
		}
	});
}); 
