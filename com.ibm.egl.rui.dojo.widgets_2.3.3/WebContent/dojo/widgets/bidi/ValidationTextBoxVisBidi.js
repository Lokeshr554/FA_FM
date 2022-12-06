/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/form/ValidationTextBox", "./TextBoxVisBidi"], function(declare, has , validationText ,bidiText){

	return declare("bidi.ValidationTextBoxVisBidi",[bidiText, validationText],{
		isValid: function(/*Boolean*/ /*===== isFocused =====*/){
			var text = this.getValue();
			if(this.isVisualMode) {
				text = this.bidiTransform (text, "V" + this.dirChForBidiFormat + "YNN", "I" + this.dirChForBidiFormat + "YNN");
				return this.validator(text, this.constraints);
			}
			else 
				return this.inherited(arguments);
		},	
		_isEmpty: function(value){
			//if(has("ie")) 
			//	value = value.substring(1);
			return this.inherited(arguments);
		}


	});
}); 