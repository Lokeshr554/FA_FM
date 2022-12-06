/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineClass('dojo.widgets', 'DojoValidatorLib',
{
	"constructor" : function(){
		dojo.require("dojox.validate");
		dojo.require("dojox.validate.web");
	},
	"getFlag" : function(constraints){
		var flag = {};
		var keys = egl.getKeys(constraints);
		for(var i=0;i<keys.length;i++){
			flag[keys[i]] = constraints[keys[i]].eze$$value;
		}
		return flag;
	},
	"IPValidator" : function(input, constraints){
		var flag = this.getFlag(constraints);
		for(var c in flag){
			switch(c){
				case "allowdotteddecimal" : flag.allowDottedDecimal = flag[c];
				case "allowdottedhex" : flag.allowDottedHex = flag[c];
				case "allowdottedoctal" : flag.allowDottedOctal = flag[c];
				case "allowipv6" : flag.allowIPv6 = flag[c];
				case "allowhex" : flag.allowHex = flag[c];
				case "allowhybrid" : flag.allowHybrid = flag[c];
				case "allowdecimal" : flag.allowDecimal = flag[c];
			}
		}
		return dojox.validate.isIpAddress(input, flag);
	},
	"UrlValidator" : function(input, constraints){
		var flag = this.getFlag(constraints);
		for(var c in flag){
			switch(c){			
				case "allowip" : flag.allowIP = flag[c];
				case "allowlocal" : flag.allowLocal = flag[c];
				case "allowport" : flag.allowPort = flag[c];
				case "allownamed" : flag.allowNamed = flag[c];
				
				case "allowdotteddecimal" : flag.allowDottedDecimal = flag[c];
				case "allowdottedhex" : flag.allowDottedHex = flag[c];
				case "allowdottedoctal" : flag.allowDottedOctal = flag[c];
				case "allowipv6" : flag.allowIPv6 = flag[c];
				case "allowhex" : flag.allowHex = flag[c];
				case "allowhybrid" : flag.allowHybrid = flag[c];
				case "allowdecimal" : flag.allowDecimal = flag[c];			
			}
		}
		return dojox.validate.isUrl(input, flag);
	},
	"EmailValidator" : function(input, constraints){
		var flag = this.getFlag(constraints);
		for(var c in flag){
			switch(c){
				case "allowcruft" : flag.allowCruft = flag[c];
				
				case "allowip" : flag.allowIP = flag[c];
				case "allowlocal" : flag.allowLocal = flag[c];
				case "allownamed" : flag.allowNamed = flag[c];
				
				case "allowdotteddecimal" : flag.allowDottedDecimal = flag[c];
				case "allowdottedhex" : flag.allowDottedHex = flag[c];
				case "allowdottedoctal" : flag.allowDottedOctal = flag[c];
				case "allowipv6" : flag.allowIPv6 = flag[c];
				case "allowhex" : flag.allowHex = flag[c];
				case "allowhybrid" : flag.allowHybrid = flag[c];
				case "allowdecimal" : flag.allowDecimal = flag[c];			
			}
		}
		return dojox.validate.isEmailAddress(input, flag);
	},
	"TextValidator" : function(input, constraints){	
		var flag = this.getFlag(constraints);
		return dojox.validate.isText(input, flag);
	},
	"RangeValidator" : function(input, constraints){		
		var flag = this.getFlag(constraints);
		return dojox.validate.isInRange(input, flag);
	},
	"NumberFormatValidator" : function(input, constraints){	
		var flag = this.getFlag(constraints);
		return dojox.validate.isNumberFormat(input, flag);
	},
	"PatternValidator" : function(input, pattern){
		return (new RegExp("^(?:" + pattern + ")"+"$")).test(input);
	}
});
