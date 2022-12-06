/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2010, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
 define(["dojo/_base/declare", "dojo/has", "dijit/form/ComboBox", "./TextBoxVisBidi"], function(declare, has, combo, bidiText){
/**
	 * @name idx.bidi.visual.ComboBoxVisBidi
	 * @class idx.bidi.visual.ComboBoxVisBidi is implemented according requirements for IBM Visual Data Widgets <b><a href="https://w3-connections.ibm.com/communities/service/html/communityview?lang=en_US&communityUuid=dca0e714-6eee-4f05-ba6d-13d845546ac1"></a></b>.
	 * It is a composite widget which enhanced dijit.form.ComboBox and is based on idx.bidi.viaual.TextBoxVisBidi with following features:
	 * <ul>
	 * <li>Visual text layout</li>
	 * <li>AutoPush mode switch</li>
	 * <li>Start/End Push mode</li>
	 * </ul>
	 * @augments dijit.form.ComboBox
	 * @augments idx.bidi.visual.TextBoxVisBidi
	 */
	
	return declare("bidi.ComboBoxVisBidi",[bidiText, combo],{
		LRO: "\u202d",
		RLO: "\u202e",		
		shouldAutoComplete: false,	
        postCreate: function(){
        	if(this.isVisualMode) {
	            this.queryExpr = "*${0}*";
	            var options = this.store.data;
	            if (!this.searchAttr)
	            	this.searchAttr = name;
	            
	            for (var k = 0; k < options.length; k++) {
	            	var text = options[k][this.searchAttr];
	            	options[k][this.searchAttr] = this.LRO + text;
	            }            
            }
            this.inherited(arguments); 
            if(this.isVisualMode) {
                this.focusNode.style.direction = "ltr";
                if(this.isRealIE && this.dir == "rtl")
                	this.focusNode.value = this.LRO + this.focusNode.value.substring(1);
            }
        },
        
        _reverseText: function(text){ 
            var temp = "";
            var len = text.length;            
            for(var i = 0;i < len;i++)  {
                symbol = text.charAt(len - i - 1);
                symbol = this.doSymSwap(symbol);
                temp += symbol;
            }	            
            return temp;           
        },

    	_startSearch: function(key){	    		
    		if(this.isVisualMode && key.length > 0) {			
	    		if(this.isRealIE && (key.charAt(0) == this.LRO || key.charAt(0) == this.RLO))
	    			key = key.substring(1);
	    		
	    		if(this.focusNode.style.direction == "rtl")
	    			key = this._reverseText(key);
    		}		
			this.inherited(arguments);
    	},
    	//following 2 methods are important, called for Bidi field in order to enable autosearch		  	
    	_onKeyPressBidi: function(event) {
        	if(this.isVisualMode && !has("ie"))
        		this._processInput(event);
    	
        	this.inherited(arguments); 
        },
        
    	_processInput: function(evt){
    		this.inherited(arguments);
    	},

    	_autoCompleteText: function(text){   		
    		if(this.isVisualMode) {
	    		this.focusNode.style.direction = "ltr";
	    		text = text.substring(1);	    		
	    		if(this.isRealIE)
	    			text = this.LRO + text;
    		}
    		this.inherited(arguments);
    	}

	});
});	
	
