/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/PopupMenuItem", "bidi/MenuItemVisBidi", "dojox/string/BidiEngine"], function(declare, has , popupMenuItem, menuItemBidi, BidiEngine){
	var bidiEngine = new BidiEngine(); 
	return declare("bidi.PopupMenuItemVisBidi",[popupMenuItem, menuItemBidi],{			
	});
}); 
