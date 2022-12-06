/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/TitlePane","dojox/string/BidiEngine"], function(declare, has , titlePane, BidiEngine){
	var bidiEngine = new BidiEngine(); 
	return declare("bidi.TitlePaneVisBidi",[titlePane],{
		set: function(name, value){
			if (name == "title")
				value = this.bidiGetTitleAttr(value);

			this.inherited(arguments); 
		},
		bidiGetTitleAttr: function(title) {
			var visChForBidiFormat = (this.isVisualMode == true) ? "V" : "I";
			var swappingBidiFormat = (this.isVisualMode == true) ? "N" : "Y";
			title = bidiEngine.bidiTransform (title, visChForBidiFormat + "L" + swappingBidiFormat + "NN", "ILYNN");
			if(this.dir == "rtl")
				title = "\u202A" + title;
			
			return title;
		}		
	});
}); 
