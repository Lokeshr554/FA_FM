/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/Menu","dojox/string/BidiEngine"], function(declare, has , menu, BidiEngine){
	var bidiEngine = new BidiEngine(); 
	return declare("bidi.MenuVisBidi",[menu],{
	});
}); 