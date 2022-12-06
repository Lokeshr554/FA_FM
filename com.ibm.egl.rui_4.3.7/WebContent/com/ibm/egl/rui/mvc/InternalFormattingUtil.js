/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
egl.defineClass('com.ibm.egl.rui.mvc', 'InternalFormattingUtil',
{
	"decimalValueIsValid" : function(value, length, decimals) {
		if (value instanceof egl.javascript.BigDecimal) {
			var limit = "";
			for (var len = length; len > 0; len--) {
				limit += "9";
			}
			if (decimals > 0) {
				limit = limit.substring(0, length - decimals) + '.' + limit.substring(length - decimals);
			}
			limit = new egl.javascript.BigDecimal(limit);
			
			if (value.scale() > decimals ) {
				value = value.setScale(decimals, egl.javascript.BigDecimal.prototype.ROUND_DOWN);
			}
			
			if (value.compareTo(limit) > 0 || value.compareTo(limit.negate()) < 0) {
				return false;
			}
		}
		return true;
	},
	"getCurrencySymbol" : function() {
		return egl.getCurrencySymbol();
	},
	"getDecimalSeparator" : function() {
		return egl.getDecimalSymbol();
	},
	"getGroupingSeparator" : function() {
		return egl.getSeparatorSymbol();
	},
	"getLongGregorianDateMask" : function() {
		if (!this.longGregorianDateMask) {
			var mask = egl.egl.core.$SysLib.getProperty("egl.datemask.gregorian.long." + egl.localeInfo.nlsCode, null);
			if (mask == "short") {
				this.longGregorianDateMask = egl.localeInfo.shortMask;
			}
			else if (mask == "medium") {
				this.longGregorianDateMask = egl.localeInfo.mediumMask;
			}
			else if (mask == "long") {
				this.longGregorianDateMask = egl.localeInfo.longMask;
			}
			else if (this.isGregorianDateMask(mask)) {
				this.longGregorianDateMask = mask;
			}
			else {
				this.longGregorianDateMask = "MM-dd-yyyy";
			}
		}
		
		return this.longGregorianDateMask;
	},
	"isGregorianDateMask" : function(mask) {
		if (mask == null) {
			return false;
		}
		var quoteChar = '\'';
		var count_y = 0, count_m = 0, count_d = 0, count_separator = 0;
		var inQuote = false;
		var length = mask.length;
		for (var i = 0; i < length;) {
			var ch = mask.charAt(i++);
			if (ch == quoteChar) {
				if (i < length) {
					ch = mask.charAt(i);
					if (ch == quoteChar){
						count_separator++;
						i++;
						continue;
					}
				}

				inQuote = !inQuote;
				continue;
			}

			if (inQuote) {
				count_separator++;
			}
			else if (ch == 'y') {
				count_y++;
			}
			else if (ch == 'M') {
				count_m++;
			}
			else if (ch == 'd') {
				count_d++;
			}
			else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
				return false;
			}
			else {
				count_separator++;
			}
		}
		return count_d == 2 && count_m == 2 && count_y == 4 && count_separator == 2;
	},
	"isValidDateInput" : function(inputValue, mask) {
		if (inputValue == null || mask == null) {
			return false;
		}

		var result = egl.stringToDateInternal(inputValue, mask, true);
		return (result != null);
	}
});
