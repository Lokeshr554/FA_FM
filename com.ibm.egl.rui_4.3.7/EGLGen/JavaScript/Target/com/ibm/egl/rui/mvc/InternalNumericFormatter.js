// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalNumericFormatter',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/InternalNumericFormatter.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalNumericFormatter',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.InternalNumericFormatter['$inst']){
				return egl.com.ibm.egl.rui.mvc.InternalNumericFormatter['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.InternalNumericFormatter['$inst']=this;
			this.util = new egl.com.ibm.egl.rui.mvc.InternalFormattingUtil();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.MathLib();
			new egl.com.ibm.egl.rui.mvc.InternalMessageLib();
			new egl.egl.core.StrLib();
			this.PARSE_ERROR = "CRRUI2719E";
			this.EDIT_INVALID_DATE_TIME_ERR = "CRRUI2708E";
			this.BOOLEAN_ERROR = "CRRUI2710E";
		}
		
		,
		"format": function( input, dateFormat, timeFormat, isBoolean, zeroFormat, fillChar, sign, currency, currencySymbol, numericSeparator, itemLength, itemDecimals, itemType, msgKey ) {
			var $result = "";
			if ( (input == "") ) {
				$result = "";
				return $result;
			}
			if ( (dateFormat != "") ) {
				$result = this.asDate(input, dateFormat, itemLength, msgKey );
				return $result;
			}
			if ( (timeFormat != "") ) {
				$result = this.asTime(input, timeFormat, msgKey );
				return $result;
			}
			if ( (!(zeroFormat) && (egl.nullableCompare(egl.egl.core.$MathLib.stringAsDecimal( input ),0, 1) == 0)) ) {
				if ( ((((fillChar != " ") && (fillChar != "")) && (itemType != "F")) && (itemType != "f")) ) {
					var result = "";
					var integerLength = 0;
					integerLength = (itemLength - itemDecimals);
					{
						var i = 0;
						i = 1;
						for ( ; (i <= integerLength); i = (i + 1) )
						{
							result = (result + fillChar);
						}
					}
					$result = result;
					return $result;
				}
				$result = "";
				return $result;
			}
			var result = "";
			result = input;
			var isNegative = false;
			isNegative = (result.charAt( 1-1 ) == "-");
			if ( isNegative ) {
				result = result.substring( 2-1,egl.egl.core.$StrLib.textLen( result));
			}
			var preDecimal = "";
			var postDecimal = "";
			var decimalIndex = 0;
			decimalIndex = egl.egl.core.$StrLib.indexOf( result, ("."));
			if ( (decimalIndex > 1) ) {
				preDecimal = result.substring( 1-1,(decimalIndex - 1));
				if ( (egl.egl.core.$StrLib.textLen( result) > decimalIndex) ) {
					postDecimal = result.substring( (decimalIndex + 1)-1,egl.egl.core.$StrLib.textLen( result));
				}
			}
			else {
				if ( (decimalIndex == 1) ) {
					if ( (egl.egl.core.$StrLib.textLen( result) > 1) ) {
						postDecimal = result.substring( 2-1,egl.egl.core.$StrLib.textLen( result));
					}
				}
				else {
					preDecimal = result;
				}
			}
			if ( numericSeparator ) {
				var separatorChar = "";
				separatorChar = this.util.getGroupingSeparator();
				{
					var i = 0;
					i = (egl.egl.core.$StrLib.textLen( preDecimal) - 3);
					for ( ; (i >= 1); i = (i - 3) )
					{
						preDecimal = ((preDecimal.substring( 1-1,i) + separatorChar) + preDecimal.substring( (i + 1)-1,egl.egl.core.$StrLib.textLen( preDecimal)));
					}
				}
			}
			if ( (itemDecimals > 0) ) {
				if ( ((itemType != "f") && (itemType != "F")) ) {
					if ( (egl.egl.core.$StrLib.textLen( postDecimal) > itemDecimals) ) {
						postDecimal = postDecimal.substring( 1-1,itemDecimals);
					}
					else {
						while ( (egl.egl.core.$StrLib.textLen( postDecimal) < itemDecimals) ) {
							postDecimal = (postDecimal + "0");
						}
					}
				}
				decimalIndex = (egl.egl.core.$StrLib.textLen( preDecimal) + 1);
				result = ((preDecimal + this.util.getDecimalSeparator()) + postDecimal);
			}
			else {
				decimalIndex = 0;
				result = preDecimal;
			}
			if ( ((((fillChar != " ") && (fillChar != "")) && (itemType != "F")) && (itemType != "f")) ) {
				var start = 0;
				if ( (decimalIndex != 0) ) {
					start = decimalIndex;
				}
				else {
					start = (egl.egl.core.$StrLib.textLen( result) + 1);
				}
				var integerLength = 0;
				integerLength = (itemLength - itemDecimals);
				{
					var i = 0;
					i = start;
					for ( ; (i <= integerLength); i = (i + 1) )
					{
						result = (fillChar + result);
					}
				}
			}
			if ( currency ) {
				if ( (currencySymbol == "") ) {
					currencySymbol = this.util.getCurrencySymbol();
				}
				result = (currencySymbol + result);
			}
			switch( sign ) {
				case egl.ui.SignKind.LEADING:
					if ( isNegative ) {
						result = ("-" + result);
					}
					break;
				case egl.ui.SignKind.TRAILING:
					if ( isNegative ) {
						result = (result + "-");
					}
					else {
						result = (result + "+");
					}
					break;
				case egl.ui.SignKind.PARENS:
					if ( isNegative ) {
						result = (("(" + result) + ")");
					}
					break;
				default:
				break;
			}
			$result = result;
			return $result;
		}
		,
		"asDate": function( input, format, itemLength, msgKey ) {
			var $result = "";
			if ( (egl.nullableCompare(egl.egl.core.$MathLib.stringAsDecimal( input ),0, 1) == 0) ) {
				$result = "";
				return $result;
			}
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
			try {
				egl.egl.core.StrLib['$inst'].defaultDateFormat = this.getInternalDateFormat(itemLength );
				var sizeDifference = 0;
				sizeDifference = (egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultDateFormat)) - egl.egl.core.$StrLib.textLen( input));
				if ( (sizeDifference < 0) ) {
					input = input.substring( (-(sizeDifference) + 1)-1,egl.egl.core.$StrLib.textLen( input));
				}
				else {
					if ( (sizeDifference != 0) ) {
						{
							var i = 0;
							i = 1;
							for ( ; (i <= sizeDifference); i = (i + 1) )
							{
								input = ("0" + input);
							}
						}
					}
				}
				var d = egl.egl.core.$DateTimeLib.currentDate();
				d = egl.egl.core.$DateTimeLib.dateValue(input);
				var result = "";
				result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.formatDate( d, format ));
				egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
				$result = result;
				return $result;
			}
			catch ( ezert$$1 )
			{
				{
					if (!(ezert$$1 instanceof egl.egl.core.AnyException)) {
						ezert$$1 = egl.makeExceptionFromCaughtObject(ezert$$1);
					}
					var exception = ezert$$1;
					var errorFormat = "";
					errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
					egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
					throw (function () {
						var ezert$$2 = egl.createRuntimeException();
						egl.checkNull(ezert$$2).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
						egl.checkNull(ezert$$2).messageID = "CRRUI2708E";
						return ezert$$2;
					}).call(this);
				}
			}
			return $result;
		}
		,
		"asTime": function( input, format, msgKey ) {
			var $result = "";
			if ( (egl.nullableCompare(egl.egl.core.$MathLib.stringAsDecimal( input ),0, 1) == 0) ) {
				$result = "";
				return $result;
			}
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
			try {
				egl.egl.core.StrLib['$inst'].defaultTimeFormat = "HHmmss";
				var sizeDifference = 0;
				sizeDifference = (egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultTimeFormat)) - egl.egl.core.$StrLib.textLen( input));
				if ( (sizeDifference < 0) ) {
					input = input.substring( (-(sizeDifference) + 1)-1,egl.egl.core.$StrLib.textLen( input));
				}
				else {
					if ( (sizeDifference != 0) ) {
						{
							var i = 0;
							i = 1;
							for ( ; (i <= sizeDifference); i = (i + 1) )
							{
								input = ("0" + input);
							}
						}
					}
				}
				var t = egl.egl.core.$DateTimeLib.currentTime();
				t = egl.egl.core.$DateTimeLib.timeValue(input);
				var result = "";
				result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.formatTime( t, format ));
				egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
				$result = result;
				return $result;
			}
			catch ( ezert$$3 )
			{
				{
					if (!(ezert$$3 instanceof egl.egl.core.AnyException)) {
						ezert$$3 = egl.makeExceptionFromCaughtObject(ezert$$3);
					}
					var exception = ezert$$3;
					var errorFormat = "";
					errorFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
					egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
					throw (function () {
						var ezert$$4 = egl.createRuntimeException();
						egl.checkNull(ezert$$4).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ format ].setType( "S;" ) );
						egl.checkNull(ezert$$4).messageID = "CRRUI2708E";
						return ezert$$4;
					}).call(this);
				}
			}
			return $result;
		}
		,
		"unformat": function( input, dateFormat, timeFormat, isBoolean, zeroFormat, fillChar, sign, currency, currencySymbol, numericSeparator, itemLength, itemDecimals, itemType, msgKey ) {
			var $result = "";
			input = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.clip( input, 0));
			if ( (dateFormat != "") ) {
				$result = this.fromDate(input, dateFormat, isBoolean, itemLength, itemDecimals, itemType, msgKey );
				return $result;
			}
			if ( (timeFormat != "") ) {
				$result = this.fromTime(input, timeFormat, isBoolean, itemLength, itemDecimals, itemType, msgKey );
				return $result;
			}
			$result = this.unformatAndConvertToNumber(input, isBoolean, fillChar, function() {
				var ezert$$5 = 0;
				
				ezert$$5 = sign;
			; return ezert$$5;}.call(this), currency, currencySymbol, numericSeparator, itemLength, itemDecimals, itemType, msgKey );
			return $result;
		}
		,
		"fromDate": function( input, format, isBoolean, itemLength, itemDecimals, itemType, msgKey ) {
			var $result = "";
			if ( (input == "") ) {
				$result = this.convertToNumber("0", isBoolean, itemLength, itemDecimals, itemType, msgKey );
				return $result;
			}
			if ( (input == "0") ) {
				throw (function () {
					var ezert$$6 = egl.createRuntimeException();
					egl.checkNull(ezert$$6).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ format ].setType( "S;" ) );
					egl.checkNull(ezert$$6).messageID = "CRRUI2708E";
					return ezert$$6;
				}).call(this);
			}
			var result = "";
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
			try {
				egl.egl.core.StrLib['$inst'].defaultDateFormat = format;
				var d = egl.egl.core.$DateTimeLib.currentDate();
				d = egl.egl.core.$DateTimeLib.dateValue(input);
				result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.formatDate( d, this.getInternalDateFormat(itemLength ) ));
				egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
			}
			catch ( ezert$$7 )
			{
				{
					if (!(ezert$$7 instanceof egl.egl.core.AnyException)) {
						ezert$$7 = egl.makeExceptionFromCaughtObject(ezert$$7);
					}
					var exception = ezert$$7;
					var errorFormat = "";
					errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
					egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
					throw (function () {
						var ezert$$8 = egl.createRuntimeException();
						egl.checkNull(ezert$$8).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
						egl.checkNull(ezert$$8).messageID = "CRRUI2708E";
						return ezert$$8;
					}).call(this);
				}
			}
			$result = this.convertToNumber(result, isBoolean, itemLength, itemDecimals, itemType, msgKey );
			return $result;
		}
		,
		"fromTime": function( input, format, isBoolean, itemLength, itemDecimals, itemType, msgKey ) {
			var $result = "";
			if ( (input == "") ) {
				$result = this.convertToNumber("0", isBoolean, itemLength, itemDecimals, itemType, msgKey );
				return $result;
			}
			if ( (input == "0") ) {
				throw (function () {
					var ezert$$9 = egl.createRuntimeException();
					egl.checkNull(ezert$$9).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ format ].setType( "S;" ) );
					egl.checkNull(ezert$$9).messageID = "CRRUI2708E";
					return ezert$$9;
				}).call(this);
			}
			var result = "";
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
			try {
				egl.egl.core.StrLib['$inst'].defaultTimeFormat = format;
				var t = egl.egl.core.$DateTimeLib.currentTime();
				t = egl.egl.core.$DateTimeLib.timeValue(input);
				result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.formatTime( t, "HHmmss" ));
				egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
			}
			catch ( ezert$$10 )
			{
				{
					if (!(ezert$$10 instanceof egl.egl.core.AnyException)) {
						ezert$$10 = egl.makeExceptionFromCaughtObject(ezert$$10);
					}
					var exception = ezert$$10;
					var errorFormat = "";
					errorFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
					egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
					throw (function () {
						var ezert$$11 = egl.createRuntimeException();
						egl.checkNull(ezert$$11).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
						egl.checkNull(ezert$$11).messageID = "CRRUI2708E";
						return ezert$$11;
					}).call(this);
				}
			}
			$result = this.convertToNumber(result, isBoolean, itemLength, itemDecimals, itemType, msgKey );
			return $result;
		}
		,
		"unformatAndConvertToNumber": function( input, isBoolean, fillChar, sign, currency, currencySymbol, numericSeparator, itemLength, itemDecimals, itemType, msgKey ) {
			var $result = "";
			if ( ((egl.nullableCompare(fillChar," ", 0) != 0) && (egl.nullableCompare(fillChar,"", 0) != 0)) ) {
				while ( (egl.egl.core.$StrLib.indexOf( input, fillChar) == 1) ) {
					input = input.substring( 2-1,egl.egl.core.$StrLib.textLen( input));
				}
			}
			if ( (input == "") ) {
				$result = this.convertToNumber("0", isBoolean, itemLength, itemDecimals, itemType, msgKey );
				return $result;
			}
			if ( currency ) {
				if ( (currencySymbol == "") ) {
					currencySymbol = this.util.getCurrencySymbol();
				}
				this.removeSubstring(input, function(eze$$inout$input) {
					input = eze$$inout$input;
				}, currencySymbol, this );
			}
			if ( numericSeparator ) {
				var separatorChar = "";
				separatorChar = this.util.getGroupingSeparator();
				while ( this.removeSubstring(input, function(eze$$inout$input) {
					input = eze$$inout$input;
				}, separatorChar, this ) ) {
				}
			}
			var length = 0;
			length = egl.egl.core.$StrLib.textLen( input);
			if ( (length != 0) ) {
				switch( sign ) {
					case egl.ui.SignKind.PARENS:
						if ( (input.charAt( 1-1 ) == "(") ) {
							input=input.splice(1,1,"-");
						}
						if ( (input.substring( length-1,length) == ")") ) {
							if ( (length == 1) ) {
								input = "";
							}
							else {
								input = input.substring( 1-1,(length - 1));
							}
						}
						break;
					case egl.ui.SignKind.TRAILING:
						if ( (input.substring( length-1,length) == "+") ) {
							if ( (length == 1) ) {
								input = "";
							}
							else {
								input = input.substring( 1-1,(length - 1));
							}
						}
						else {
							if ( (input.substring( length-1,length) == "-") ) {
								if ( (length == 1) ) {
									input = "";
								}
								else {
									input = ("-" + input.substring( 1-1,(length - 1)));
								}
							}
						}
						break;
					case egl.ui.SignKind.LEADING:
						if ( (input.charAt( 1-1 ) == "+") ) {
							if ( (length == 1) ) {
								input = "";
							}
							else {
								input = input.substring( 2-1,length);
							}
						}
						break;
					default:
					break;
				}
			}
			var decimalSeparator = "";
			decimalSeparator = this.util.getDecimalSeparator();
			if ( (decimalSeparator != ".") ) {
				var index = 0;
				index = egl.egl.core.$StrLib.indexOf( input, decimalSeparator);
				if ( (index != 0) ) {
					input=input.splice(index,index,".");
				}
			}
			if ( (input == "") ) {
				input = "0";
			}
			$result = this.convertToNumber(input, isBoolean, itemLength, itemDecimals, itemType, msgKey );
			return $result;
		}
		,
		"removeSubstring": function( input, eze$$input$func_, substring, eze$$caller ) {
			var $result = false;
			if ( (substring == "") ) {
				$result = false;
				return $result;
			}
			var index = 0;
			index = egl.egl.core.$StrLib.indexOf( input, substring);
			if ( (index != 0) ) {
				var inputLength = 0;
				inputLength = egl.egl.core.$StrLib.textLen( input);
				var substringLength = 0;
				substringLength = egl.egl.core.$StrLib.textLen( substring);
				if ( (index == 1) ) {
					input = input.substring( (1 + substringLength)-1,inputLength);
					eze$$input$func_.call(eze$$caller,input);
				}
				else {
					if ( (((index + substringLength) - 1) == inputLength) ) {
						input = input.substring( 1-1,(index - 1));
						eze$$input$func_.call(eze$$caller,input);
					}
					else {
						input = (input.substring( 1-1,(index - 1)) + input.substring( (index + substringLength)-1,inputLength));
						eze$$input$func_.call(eze$$caller,input);
					}
				}
				$result = true;
				return $result;
			}
			$result = false;
			return $result;
		}
		,
		"convertToNumber": function( input, isBoolean, itemLength, itemDecimals, itemType, msgKey ) {
			var $result = "";
			var msg = "";
			if ( (((itemDecimals == 0) && (itemType != "F")) && (itemType != "f")) ) {
				if ( (input.charAt( 1-1 ) == "-") ) {
					if ( !egl.is(input.substring( 2-1,egl.egl.core.$StrLib.textLen( input)), "NUMERIC",egl.isnumeric) ) {
						throw (function () {
							var ezert$$12 = egl.createRuntimeException();
							egl.checkNull(ezert$$12).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2719E", [  ].setType( "S;" ) );
							egl.checkNull(ezert$$12).messageID = "CRRUI2719E";
							return ezert$$12;
						}).call(this);
					}
				}
				else {
					if ( !egl.is(input, "NUMERIC",egl.isnumeric) ) {
						throw (function () {
							var ezert$$13 = egl.createRuntimeException();
							egl.checkNull(ezert$$13).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2719E", [  ].setType( "S;" ) );
							egl.checkNull(ezert$$13).messageID = "CRRUI2719E";
							return ezert$$13;
						}).call(this);
					}
				}
			}
			var isOneOrZero = false;
			try {
				switch( itemType ) {
					case "f":
						var temp = 0;
						temp = egl.convertFloatToSmallfloat(egl.convertStringToFloat(input),egl.createRuntimeException);
						isOneOrZero = ((temp == 0) || (temp == 1));
						break;
					case "F":
						var temp = 0;
						temp = egl.convertStringToFloat(input);
						isOneOrZero = ((temp == 0) || (temp == 1));
						break;
					case "I":
						var temp = 0;
						temp = egl.convertStringToInt(input);
						isOneOrZero = ((temp == 0) || (temp == 1));
						break;
					case "i":
						var temp = 0;
						temp = egl.convertStringToSmallint(input);
						isOneOrZero = ((temp == 0) || (temp == 1));
						break;
					case "B":
						var temp = egl.javascript.BigDecimal.prototype.ZERO;
						temp = egl.convertStringToBigint(input);
						isOneOrZero = ((temp.compareTo(egl.convertIntegerToDecimal(0, egl.javascript.BigDecimal.prototype.NINES[3])) == 0) || (temp.compareTo(egl.convertIntegerToDecimal(1, egl.javascript.BigDecimal.prototype.NINES[3])) == 0));
						break;
					case "b":
					case "N":
					case "n":
					case "9":
					case "d":
					case "p":
						var result = null;
						result = (function(x){ return x != null ? (((function(x){return {eze$$value:x, eze$$signature:egl.inferSignature(x)};})(x))) : null; })(egl.egl.core.$MathLib.stringAsDecimal( input ));
						if ( ((result == null) || !(this.util.decimalValueIsValid(egl.unboxAny(result), itemLength, itemDecimals ))) ) {
							throw (function () {
								var ezert$$14 = egl.createRuntimeException();
								egl.checkNull(ezert$$14).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2719E", [  ].setType( "S;" ) );
								egl.checkNull(ezert$$14).messageID = "CRRUI2719E";
								return ezert$$14;
							}).call(this);
						}
						isOneOrZero = ((egl.nullableCompare(egl.egl.core.$MathLib.stringAsDecimal( input ),0, 1) == 0) || (egl.nullableCompare(egl.egl.core.$MathLib.stringAsDecimal( input ),1, 1) == 0));
						break;
					default:
					break;
				}
			}
			catch ( ezert$$15 )
			{
				{
					if (!(ezert$$15 instanceof egl.egl.core.AnyException)) {
						ezert$$15 = egl.makeExceptionFromCaughtObject(ezert$$15);
					}
					var exception = ezert$$15;
					throw (function () {
						var ezert$$16 = egl.createRuntimeException();
						egl.checkNull(ezert$$16).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2719E", [  ].setType( "S;" ) );
						egl.checkNull(ezert$$16).messageID = "CRRUI2719E";
						return ezert$$16;
					}).call(this);
				}
			}
			if ( (isBoolean && !(isOneOrZero)) ) {
				throw (function () {
					var ezert$$17 = egl.createRuntimeException();
					egl.checkNull(ezert$$17).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2710E", [  ].setType( "S;" ) );
					egl.checkNull(ezert$$17).messageID = "CRRUI2710E";
					return ezert$$17;
				}).call(this);
			}
			$result = input;
			return $result;
		}
		,
		"getInternalDateFormat": function( itemLength ) {
			var $result = "";
			switch( itemLength ) {
				case 5:
				case 7:
					throw (function () {
						var ezert$$18 = egl.createRuntimeException();
						egl.checkNull(ezert$$18).message = "Unsupported dateformat length";
						return ezert$$18;
					}).call(this);
					break;
				case 6:
					$result = "yyMMdd";
					return $result;
					break;
				default:
				$result = "yyyyMMdd";
				return $result;
				break;
			}
			return $result;
		}
		,
		"toString": function() {
			return "[InternalNumericFormatter]";
		}
	}
);
