/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/form/CurrencyTextBox","dojox/string/BidiEngine"], function(declare, has , currency, BidiEngine){
	var bidiEngine = new BidiEngine(); 
	var LRM = String.fromCharCode(8206);
	var LRO = String.fromCharCode(8237);
	var RLO = String.fromCharCode(8238);
	var PDF = String.fromCharCode(8236);
	var US = String.fromCharCode(31);
	return declare("bidi.CurrencyTextBoxVisBidi",[currency],{
				
		postCreate: function(){
			if (this.isVisualMode == true)
				this.constraints.currency = ((this.textDir == "rtl") ? RLO : LRO) + this.constraints.currency + PDF + LRM;
			else {
				if (this.textDir == "rtl")
					this.constraints.currency = this.constraints.currency + US;
				else
					this.constraints.currency = this.constraints.currency + LRM;
			}
			this.inherited(arguments);    
		}

	});
}); 
