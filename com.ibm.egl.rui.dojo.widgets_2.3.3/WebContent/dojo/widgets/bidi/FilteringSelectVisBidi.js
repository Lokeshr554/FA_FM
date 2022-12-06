/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/form/FilteringSelect", "./ComboBoxVisBidi"], 
	function(declare, has , select ,bidiCombo){
	
	return declare("bidi.FilteringSelectVisBidi",[bidiCombo, select],{
	postCreate: function() {
		if(this.dir == "rtl")
			this.set("placeHolder", "\u202A" + this.placeHolder);

		if(this.isVisualMode)		
			this.autoComplete = false;
		
		this.inherited(arguments);
        	
	},
	_updatePlaceHolder: function(){
		if(this._phspan){
			var value = this.textbox.value;
			if(this.isRealIE && (value.charAt(0) == this.LRO || value.charAt(0) == this.RLO))
				value = value.substring(1);
			
			this._phspan.style.display=(this.placeHolder&&!this.focused&&!value)?"":"none";
		}
	},
	isValid: function(){
		var dispValue = this.get('displayedValue');
		if(this.isRealIE && (dispValue.charAt(0) == this.LRO || dispValue.charAt(0) == this.RLO))
			dispValue = dispValue.substring(1);
		
		return !!this.item || (!this.required && dispValue == "");
	},
	_isEmpty: function(value){
		if(this.isRealIE && (value.charAt(0) == this.LRO || value.charAt(0) == this.RLO))
			value = value.substring(1);
		
		return this.inherited(arguments);
	}
	});
}); 
