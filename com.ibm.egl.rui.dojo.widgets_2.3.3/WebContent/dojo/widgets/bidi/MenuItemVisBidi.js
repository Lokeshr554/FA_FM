/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/MenuItem","dojox/string/BidiEngine"], function(declare, has , menuItem, BidiEngine){
	var bidiEngine = new BidiEngine(); 
	return declare("bidi.MenuItemVisBidi",[menuItem],{
		set: function(name, value){
			if (name == "label"){
				var visChForBidiFormat = (this.isVisualMode == true) ? "V" : "I";
				var swappingBidiFormat = (this.isVisualMode == true) ? "N" : "Y"					
				value = bidiEngine.bidiTransform (value, visChForBidiFormat + "L" + swappingBidiFormat + "NN", "ILYNN");
				if(this.dir == "rtl")
					value = "\u202A" + value;
			}
			this.inherited(arguments);
		}
	});
}); 
