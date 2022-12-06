// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.ibm.egl.rui.mvc.InternalNumericFormatter');
else egl.eze$$userLibs = ['com.ibm.egl.rui.mvc.InternalNumericFormatter'];
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalNumericFormatter',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/InternalNumericFormatter.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalNumericFormatter',
		"constructor" : function()
		{
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("<init>",this,arguments,eze$$updater);
				if(egl.com.ibm.egl.rui.mvc.InternalNumericFormatter['$inst']){
					if (!egl.debugg) egl.leave();
					return egl.com.ibm.egl.rui.mvc.InternalNumericFormatter['$inst'];
				}
				egl.com.ibm.egl.rui.mvc.InternalNumericFormatter['$inst']=this;
				egl.atLine(this.eze$$fileName,13,349,30, this);
				this.util = new egl.com.ibm.egl.rui.mvc.InternalFormattingUtil();
				
				this.jsrt$SysVar= new egl.egl.core.SysVar();
				new egl.egl.core.StrLib();
				new egl.com.ibm.egl.rui.mvc.InternalMessageLib();
				new egl.egl.core.MathLib();
				egl.atLine(this.eze$$fileName,15,385,48, this);
				this.PARSE_ERROR = "CRRUI2719E";
				egl.atLine(this.eze$$fileName,16,436,63, this);
				this.EDIT_INVALID_DATE_TIME_ERR = "CRRUI2708E";
				egl.atLine(this.eze$$fileName,17,502,50, this);
				this.BOOLEAN_ERROR = "CRRUI2710E";
				if (!egl.debugg) egl.leave();
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		
		,
		"format": function( input, dateFormat, timeFormat, isBoolean, zeroFormat, fillChar, sign, currency, currencySymbol, numericSeparator, itemLength, itemDecimals, itemType, msgKey ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("format",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("dateFormat", dateFormat, "string", "dateFormat");
				egl.addLocalFunctionVariable("timeFormat", timeFormat, "string", "timeFormat");
				egl.addLocalFunctionVariable("isBoolean", isBoolean, "boolean", "isBoolean");
				egl.addLocalFunctionVariable("zeroFormat", zeroFormat, "boolean", "zeroFormat");
				egl.addLocalFunctionVariable("fillChar", fillChar, "string", "fillChar");
				egl.addLocalFunctionVariable("sign", sign, "egl.ui.SignKind", "sign");
				egl.addLocalFunctionVariable("currency", currency, "boolean", "currency");
				egl.addLocalFunctionVariable("currencySymbol", currencySymbol, "string", "currencySymbol");
				egl.addLocalFunctionVariable("numericSeparator", numericSeparator, "boolean", "numericSeparator");
				egl.addLocalFunctionVariable("itemLength", itemLength, "int", "itemLength");
				egl.addLocalFunctionVariable("itemDecimals", itemDecimals, "int", "itemDecimals");
				egl.addLocalFunctionVariable("itemType", itemType, "string", "itemType");
				egl.addLocalFunctionVariable("msgKey", msgKey, "string", "msgKey");
				egl.atLine(this.eze$$fileName,23,902,39, this);
				if ( (input == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,24,923,11, this);
						$result = "";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,27,949,87, this);
				if ( (dateFormat != "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,28,982,45, this);
						var ezert$$1 = "";
						ezert$$1 = this.asDate(input, dateFormat, itemLength, msgKey );
						egl.atLine(this.eze$$fileName,28,975,54, this);
						$result = ezert$$1;
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,30,1040,75, this);
				if ( (timeFormat != "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,31,1073,33, this);
						var ezert$$2 = "";
						ezert$$2 = this.asTime(input, timeFormat, msgKey );
						egl.atLine(this.eze$$fileName,31,1066,42, this);
						$result = ezert$$2;
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				var eze_Cond_Temp_0 = false;
				egl.atLine(this.eze$$fileName,34,1127,50, this);
				if ( !(zeroFormat) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,34,1142,30, this);
						var ezert$$3 = null;
						ezert$$3 = egl.egl.core.$MathLib.stringAsDecimal( input );
						egl.atLine(this.eze$$fileName,34,1127,50, this);
						if ( (egl.nullableCompare(ezert$$3,0, 1) == 0) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,34,1127,50, this);
								eze_Cond_Temp_0 = true;
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,34,1127,50, this);
								eze_Cond_Temp_0 = false;
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				else {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,34,1127,50, this);
						eze_Cond_Temp_0 = false;
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,34,1123,341, this);
				if ( eze_Cond_Temp_0 ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,35,1183,258, this);
						if ( ((((fillChar != " ") && (fillChar != "")) && (itemType != "F")) && (itemType != "f")) ) {
							try{egl.enterBlock();
								var result = "";
								egl.addLocalFunctionVariable("result", result, "string", "result");
								var integerLength = 0;
								egl.addLocalFunctionVariable("integerLength", integerLength, "int", "integerLength");
								egl.atLine(this.eze$$fileName,37,1285,46, this);
								integerLength = (itemLength - itemDecimals);
								egl.setLocalFunctionVariable("integerLength", integerLength, "int");
								egl.atLine(this.eze$$fileName,38,1337,75, this);
								{
									try{egl.enterBlock();
										var i = 0;
										egl.addLocalFunctionVariable("i", i, "int", "i");
										i = 1;
										egl.setLocalFunctionVariable("i", i, "int");
										for ( ; (i <= integerLength); i = (i + 1) )
										{
											egl.setLocalFunctionVariable("i", i, "int");
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,39,1384,19, this);
												result = (result + fillChar);
												egl.setLocalFunctionVariable("result", result, "string");
											}finally{egl.exitBlock();}
											egl.atLine(this.eze$$fileName,38,1337,75, this);
										}
									}finally{egl.exitBlock();}
								}
								egl.atLine(this.eze$$fileName,41,1418,15, this);
								$result = result;
								egl.setLocalFunctionVariable("STRING", $result, "string");
								{ if (!egl.debugg) egl.leave(); return $result;}
							}finally{egl.exitBlock();}
						}
						egl.atLine(this.eze$$fileName,43,1446,11, this);
						$result = "";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				var result = "";
				egl.addLocalFunctionVariable("result", result, "string", "result");
				egl.atLine(this.eze$$fileName,46,1472,22, this);
				result = input;
				egl.setLocalFunctionVariable("result", result, "string");
				var isNegative = false;
				egl.addLocalFunctionVariable("isNegative", isNegative, "boolean", "isNegative");
				egl.atLine(this.eze$$fileName,47,1498,40, this);
				isNegative = (result.charAt( 1-1 ) == "-");
				egl.setLocalFunctionVariable("isNegative", isNegative, "boolean");
				egl.atLine(this.eze$$fileName,48,1542,74, this);
				if ( isNegative ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,49,1580,27, this);
						var ezert$$4 = 0;
						ezert$$4 = egl.egl.core.$StrLib.textLen( result);
						egl.atLine(this.eze$$fileName,49,1562,47, this);
						result = result.substring( 2-1,ezert$$4);
						egl.setLocalFunctionVariable("result", result, "string");
					}finally{egl.exitBlock();}
				}
				var preDecimal = "";
				egl.addLocalFunctionVariable("preDecimal", preDecimal, "string", "preDecimal");
				var postDecimal = "";
				egl.addLocalFunctionVariable("postDecimal", postDecimal, "string", "postDecimal");
				var decimalIndex = 0;
				egl.addLocalFunctionVariable("decimalIndex", decimalIndex, "int", "decimalIndex");
				egl.atLine(this.eze$$fileName,54,1688,27, this);
				var ezert$$5 = 0;
				ezert$$5 = egl.egl.core.$StrLib.indexOf( result, ("."));
				egl.setLocalFunctionVariable("result", result, "string");
				egl.atLine(this.eze$$fileName,54,1669,47, this);
				decimalIndex = ezert$$5;
				egl.setLocalFunctionVariable("decimalIndex", decimalIndex, "int");
				egl.atLine(this.eze$$fileName,55,1720,396, this);
				if ( (decimalIndex > 1) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,56,1746,40, this);
						preDecimal = result.substring( 1-1,(decimalIndex - 1));
						egl.setLocalFunctionVariable("preDecimal", preDecimal, "string");
						egl.atLine(this.eze$$fileName,57,1795,27, this);
						var ezert$$6 = 0;
						ezert$$6 = egl.egl.core.$StrLib.textLen( result);
						egl.atLine(this.eze$$fileName,57,1791,128, this);
						if ( (ezert$$6 > decimalIndex) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,58,1882,27, this);
								var ezert$$7 = 0;
								ezert$$7 = egl.egl.core.$StrLib.textLen( result);
								egl.atLine(this.eze$$fileName,58,1844,67, this);
								postDecimal = result.substring( (decimalIndex + 1)-1,ezert$$7);
								egl.setLocalFunctionVariable("postDecimal", postDecimal, "string");
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				else {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,61,1933,176, this);
						if ( (decimalIndex == 1) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,62,1965,27, this);
								var ezert$$8 = 0;
								ezert$$8 = egl.egl.core.$StrLib.textLen( result);
								egl.atLine(this.eze$$fileName,62,1961,104, this);
								if ( (ezert$$8 > 1) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,63,2027,27, this);
										var ezert$$9 = 0;
										ezert$$9 = egl.egl.core.$StrLib.textLen( result);
										egl.atLine(this.eze$$fileName,63,2004,52, this);
										postDecimal = result.substring( 2-1,ezert$$9);
										egl.setLocalFunctionVariable("postDecimal", postDecimal, "string");
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,66,2081,20, this);
								preDecimal = result;
								egl.setLocalFunctionVariable("preDecimal", preDecimal, "string");
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,70,2124,270, this);
				if ( numericSeparator ) {
					try{egl.enterBlock();
						var separatorChar = "";
						egl.addLocalFunctionVariable("separatorChar", separatorChar, "string", "separatorChar");
						egl.atLine(this.eze$$fileName,71,2173,27, this);
						var ezert$$10 = "";
						ezert$$10 = this.util.getGroupingSeparator();
						egl.atLine(this.eze$$fileName,71,2150,51, this);
						separatorChar = ezert$$10;
						egl.setLocalFunctionVariable("separatorChar", separatorChar, "string");
						egl.atLine(this.eze$$fileName,72,2206,181, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								var ezert$$11 = 0;
								ezert$$11 = egl.egl.core.$StrLib.textLen( preDecimal);
								i = (ezert$$11 - 3);
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i >= 1); i = (i - 3) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,73,2346,31, this);
										var ezert$$12 = 0;
										ezert$$12 = egl.egl.core.$StrLib.textLen( preDecimal);
										egl.atLine(this.eze$$fileName,73,2284,95, this);
										preDecimal = ((preDecimal.substring( 1-1,i) + separatorChar) + preDecimal.substring( (i + 1)-1,ezert$$12));
										egl.setLocalFunctionVariable("preDecimal", preDecimal, "string");
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,72,2206,181, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,77,2402,484, this);
				if ( (itemDecimals > 0) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,78,2428,272, this);
						if ( ((itemType != "f") && (itemType != "F")) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,79,2477,32, this);
								var ezert$$13 = 0;
								ezert$$13 = egl.egl.core.$StrLib.textLen( postDecimal);
								egl.atLine(this.eze$$fileName,79,2473,219, this);
								if ( (ezert$$13 > itemDecimals) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,80,2532,42, this);
										postDecimal = postDecimal.substring( 1-1,itemDecimals);
										egl.setLocalFunctionVariable("postDecimal", postDecimal, "string");
									}finally{egl.exitBlock();}
								}
								else {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,82,2591,92, this);
										while ( (egl.egl.core.$StrLib.textLen( postDecimal) < itemDecimals) ) {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,83,2654,19, this);
												postDecimal = (postDecimal + "0");
												egl.setLocalFunctionVariable("postDecimal", postDecimal, "string");
											}finally{egl.exitBlock();}
											egl.atLine(this.eze$$fileName,82,2591,92, this);
										}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
						egl.atLine(this.eze$$fileName,87,2720,31, this);
						var ezert$$14 = 0;
						ezert$$14 = egl.egl.core.$StrLib.textLen( preDecimal);
						egl.atLine(this.eze$$fileName,87,2705,51, this);
						decimalIndex = (ezert$$14 + 1);
						egl.setLocalFunctionVariable("decimalIndex", decimalIndex, "int");
						egl.atLine(this.eze$$fileName,88,2783,26, this);
						var ezert$$15 = "";
						ezert$$15 = this.util.getDecimalSeparator();
						egl.atLine(this.eze$$fileName,88,2761,63, this);
						result = ((preDecimal + ezert$$15) + postDecimal);
						egl.setLocalFunctionVariable("result", result, "string");
					}finally{egl.exitBlock();}
				}
				else {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,90,2837,17, this);
						decimalIndex = 0;
						egl.setLocalFunctionVariable("decimalIndex", decimalIndex, "int");
						egl.atLine(this.eze$$fileName,91,2859,20, this);
						result = preDecimal;
						egl.setLocalFunctionVariable("result", result, "string");
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,94,2894,361, this);
				if ( ((((fillChar != " ") && (fillChar != "")) && (itemType != "F")) && (itemType != "f")) ) {
					try{egl.enterBlock();
						var start = 0;
						egl.addLocalFunctionVariable("start", start, "int", "start");
						egl.atLine(this.eze$$fileName,96,2990,112, this);
						if ( (decimalIndex != 0) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,97,3018,21, this);
								start = decimalIndex;
								egl.setLocalFunctionVariable("start", start, "int");
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,99,3062,27, this);
								var ezert$$16 = 0;
								ezert$$16 = egl.egl.core.$StrLib.textLen( result);
								egl.atLine(this.eze$$fileName,99,3054,40, this);
								start = (ezert$$16 + 1);
								egl.setLocalFunctionVariable("start", start, "int");
							}finally{egl.exitBlock();}
						}
						var integerLength = 0;
						egl.addLocalFunctionVariable("integerLength", integerLength, "int", "integerLength");
						egl.atLine(this.eze$$fileName,102,3112,46, this);
						integerLength = (itemLength - itemDecimals);
						egl.setLocalFunctionVariable("integerLength", integerLength, "int");
						egl.atLine(this.eze$$fileName,103,3163,85, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								i = start;
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i <= integerLength); i = (i + 1) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,104,3213,27, this);
										result = (fillChar + result);
										egl.setLocalFunctionVariable("result", result, "string");
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,103,3163,85, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,108,3263,144, this);
				if ( currency ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,109,3281,81, this);
						if ( (currencySymbol == "") ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,110,3329,24, this);
								var ezert$$17 = "";
								ezert$$17 = this.util.getCurrencySymbol();
								egl.atLine(this.eze$$fileName,110,3312,42, this);
								currencySymbol = ezert$$17;
								egl.setLocalFunctionVariable("currencySymbol", currencySymbol, "string");
							}finally{egl.exitBlock();}
						}
						egl.atLine(this.eze$$fileName,112,3367,33, this);
						result = (currencySymbol + result);
						egl.setLocalFunctionVariable("result", result, "string");
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,115,3415,305, this);
				switch( sign ) {
					case egl.ui.SignKind.LEADING:
						egl.atLine(this.eze$$fileName,116,3431,81, this);
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,117,3459,53, this);
							if ( isNegative ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,118,3481,22, this);
									result = ("-" + result);
									egl.setLocalFunctionVariable("result", result, "string");
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						break;
					case egl.ui.SignKind.TRAILING:
						egl.atLine(this.eze$$fileName,120,3517,105, this);
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,121,3546,76, this);
							if ( isNegative ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,122,3568,14, this);
									result = (result + "-");
									egl.setLocalFunctionVariable("result", result, "string");
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,124,3599,14, this);
									result = (result + "+");
									egl.setLocalFunctionVariable("result", result, "string");
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						break;
					case egl.ui.SignKind.PARENS:
						egl.atLine(this.eze$$fileName,126,3627,86, this);
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,127,3654,59, this);
							if ( isNegative ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,128,3676,28, this);
									result = (("(" + result) + ")");
									egl.setLocalFunctionVariable("result", result, "string");
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						break;
					default:
					try{egl.enterBlock();
					}finally{egl.exitBlock();}
					break;
				}
				egl.atLine(this.eze$$fileName,132,3728,15, this);
				$result = result;
				egl.setLocalFunctionVariable("STRING", $result, "string");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"asDate": function( input, format, itemLength, msgKey ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("asDate",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("format", format, "string", "format");
				egl.addLocalFunctionVariable("itemLength", itemLength, "int", "itemLength");
				egl.addLocalFunctionVariable("msgKey", msgKey, "string", "msgKey");
				egl.atLine(this.eze$$fileName,136,3874,30, this);
				var ezert$$18 = null;
				ezert$$18 = egl.egl.core.$MathLib.stringAsDecimal( input );
				egl.atLine(this.eze$$fileName,136,3870,63, this);
				if ( (egl.nullableCompare(ezert$$18,0, 1) == 0) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,137,3915,11, this);
						$result = "";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				var savedFormat = "";
				egl.addLocalFunctionVariable("savedFormat", savedFormat, "string", "savedFormat");
				egl.atLine(this.eze$$fileName,140,3941,46, this);
				savedFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
				egl.setLocalFunctionVariable("savedFormat", savedFormat, "string");
				egl.atLine(this.eze$$fileName,141,3991,846, this);
				try {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,142,4026,33, this);
						var ezert$$19 = "";
						ezert$$19 = this.getInternalDateFormat(itemLength );
						egl.atLine(this.eze$$fileName,142,3999,61, this);
						egl.egl.core.StrLib['$inst'].defaultDateFormat = ezert$$19;
						var sizeDifference = 0;
						egl.addLocalFunctionVariable("sizeDifference", sizeDifference, "int", "sizeDifference");
						egl.atLine(this.eze$$fileName,144,4091,45, this);
						var ezert$$20 = 0;
						ezert$$20 = egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultDateFormat));
						egl.atLine(this.eze$$fileName,144,4139,26, this);
						var ezert$$21 = 0;
						ezert$$21 = egl.egl.core.$StrLib.textLen( input);
						egl.atLine(this.eze$$fileName,144,4070,96, this);
						sizeDifference = (ezert$$20 - ezert$$21);
						egl.setLocalFunctionVariable("sizeDifference", sizeDifference, "int");
						egl.atLine(this.eze$$fileName,145,4171,228, this);
						if ( (sizeDifference < 0) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,146,4234,26, this);
								var ezert$$22 = 0;
								ezert$$22 = egl.egl.core.$StrLib.textLen( input);
								egl.atLine(this.eze$$fileName,146,4200,62, this);
								input = input.substring( (-(sizeDifference) + 1)-1,ezert$$22);
								egl.setLocalFunctionVariable("input", input, "string");
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,148,4277,114, this);
								if ( (sizeDifference != 0) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,149,4308,74, this);
										{
											try{egl.enterBlock();
												var i = 0;
												egl.addLocalFunctionVariable("i", i, "int", "i");
												i = 1;
												egl.setLocalFunctionVariable("i", i, "int");
												for ( ; (i <= sizeDifference); i = (i + 1) )
												{
													egl.setLocalFunctionVariable("i", i, "int");
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,150,4352,20, this);
														input = ("0" + input);
														egl.setLocalFunctionVariable("input", input, "string");
													}finally{egl.exitBlock();}
													egl.atLine(this.eze$$fileName,149,4308,74, this);
												}
											}finally{egl.exitBlock();}
										}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
						var d = egl.egl.core.$DateTimeLib.currentDate();
						egl.addLocalFunctionVariable("d", d, "date", "d");
						egl.atLine(this.eze$$fileName,155,4409,15, this);
						d = egl.egl.core.$DateTimeLib.dateValue(input);
						egl.setLocalFunctionVariable("d", d, "date");
						var result = "";
						egl.addLocalFunctionVariable("result", result, "string", "result");
						egl.atLine(this.eze$$fileName,156,4445,28, this);
						var ezert$$23 = null;
						ezert$$23 = egl.egl.core.$StrLib.formatDate( d, format );
						egl.atLine(this.eze$$fileName,156,4429,45, this);
						result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$23);
						egl.setLocalFunctionVariable("result", result, "string");
						egl.atLine(this.eze$$fileName,157,4479,39, this);
						egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
						egl.atLine(this.eze$$fileName,158,4523,15, this);
						$result = result;
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				catch ( ezert$$24 )
				{
					{
						if (ezert$$24 instanceof egl.egl.debug.DebugTermination){throw ezert$$24;}
						if (!(ezert$$24 instanceof egl.egl.core.AnyException)) {
							ezert$$24 = egl.makeExceptionFromCaughtObject(ezert$$24);
						}
						var exception = ezert$$24;
						try{egl.enterBlock();
							egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
							try{egl.enterBlock();
								var errorFormat = "";
								egl.addLocalFunctionVariable("errorFormat", errorFormat, "string", "errorFormat");
								egl.atLine(this.eze$$fileName,160,4582,46, this);
								errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
								egl.setLocalFunctionVariable("errorFormat", errorFormat, "string");
								egl.atLine(this.eze$$fileName,161,4633,39, this);
								egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
								egl.atLine(this.eze$$fileName,162,4677,153, this);
								throw (function () {
									var ezert$$25 = egl.createRuntimeException();
									egl.atLine(this.eze$$fileName,162,4715,73, this);
									var ezert$$26 = "";
									ezert$$26 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
									egl.atLine(this.eze$$fileName,162,4705,83, this);
									egl.checkNull(ezert$$25, "ezert$$25").message = ezert$$26;
									egl.atLine(this.eze$$fileName,162,4790,38, this);
									egl.checkNull(ezert$$25, "ezert$$25").messageID = "CRRUI2708E";
									return ezert$$25;
								}).call(this);
							}finally{egl.exitBlock();}
						}finally{egl.exitBlock();}
					}
				}
				egl.atLine(this.eze$$fileName,135,3755,1088, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"asTime": function( input, format, msgKey ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("asTime",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("format", format, "string", "format");
				egl.addLocalFunctionVariable("msgKey", msgKey, "string", "msgKey");
				egl.atLine(this.eze$$fileName,167,4949,30, this);
				var ezert$$27 = null;
				ezert$$27 = egl.egl.core.$MathLib.stringAsDecimal( input );
				egl.atLine(this.eze$$fileName,167,4945,63, this);
				if ( (egl.nullableCompare(ezert$$27,0, 1) == 0) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,168,4990,11, this);
						$result = "";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				var savedFormat = "";
				egl.addLocalFunctionVariable("savedFormat", savedFormat, "string", "savedFormat");
				egl.atLine(this.eze$$fileName,171,5016,46, this);
				savedFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
				egl.setLocalFunctionVariable("savedFormat", savedFormat, "string");
				egl.atLine(this.eze$$fileName,172,5066,816, this);
				try {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,173,5074,36, this);
						egl.egl.core.StrLib['$inst'].defaultTimeFormat = "HHmmss";
						var sizeDifference = 0;
						egl.addLocalFunctionVariable("sizeDifference", sizeDifference, "int", "sizeDifference");
						egl.atLine(this.eze$$fileName,175,5141,45, this);
						var ezert$$28 = 0;
						ezert$$28 = egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultTimeFormat));
						egl.atLine(this.eze$$fileName,175,5189,26, this);
						var ezert$$29 = 0;
						ezert$$29 = egl.egl.core.$StrLib.textLen( input);
						egl.atLine(this.eze$$fileName,175,5120,96, this);
						sizeDifference = (ezert$$28 - ezert$$29);
						egl.setLocalFunctionVariable("sizeDifference", sizeDifference, "int");
						egl.atLine(this.eze$$fileName,176,5221,228, this);
						if ( (sizeDifference < 0) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,177,5284,26, this);
								var ezert$$30 = 0;
								ezert$$30 = egl.egl.core.$StrLib.textLen( input);
								egl.atLine(this.eze$$fileName,177,5250,62, this);
								input = input.substring( (-(sizeDifference) + 1)-1,ezert$$30);
								egl.setLocalFunctionVariable("input", input, "string");
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,179,5327,114, this);
								if ( (sizeDifference != 0) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,180,5358,74, this);
										{
											try{egl.enterBlock();
												var i = 0;
												egl.addLocalFunctionVariable("i", i, "int", "i");
												i = 1;
												egl.setLocalFunctionVariable("i", i, "int");
												for ( ; (i <= sizeDifference); i = (i + 1) )
												{
													egl.setLocalFunctionVariable("i", i, "int");
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,181,5402,20, this);
														input = ("0" + input);
														egl.setLocalFunctionVariable("input", input, "string");
													}finally{egl.exitBlock();}
													egl.atLine(this.eze$$fileName,180,5358,74, this);
												}
											}finally{egl.exitBlock();}
										}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
						var t = egl.egl.core.$DateTimeLib.currentTime();
						egl.addLocalFunctionVariable("t", t, "time", "t");
						egl.atLine(this.eze$$fileName,186,5459,15, this);
						t = egl.egl.core.$DateTimeLib.timeValue(input);
						egl.setLocalFunctionVariable("t", t, "time");
						var result = "";
						egl.addLocalFunctionVariable("result", result, "string", "result");
						egl.atLine(this.eze$$fileName,187,5495,28, this);
						var ezert$$31 = null;
						ezert$$31 = egl.egl.core.$StrLib.formatTime( t, format );
						egl.atLine(this.eze$$fileName,187,5479,45, this);
						result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$31);
						egl.setLocalFunctionVariable("result", result, "string");
						egl.atLine(this.eze$$fileName,188,5529,39, this);
						egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
						egl.atLine(this.eze$$fileName,189,5573,15, this);
						$result = result;
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				catch ( ezert$$32 )
				{
					{
						if (ezert$$32 instanceof egl.egl.debug.DebugTermination){throw ezert$$32;}
						if (!(ezert$$32 instanceof egl.egl.core.AnyException)) {
							ezert$$32 = egl.makeExceptionFromCaughtObject(ezert$$32);
						}
						var exception = ezert$$32;
						try{egl.enterBlock();
							egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
							try{egl.enterBlock();
								var errorFormat = "";
								egl.addLocalFunctionVariable("errorFormat", errorFormat, "string", "errorFormat");
								egl.atLine(this.eze$$fileName,191,5632,46, this);
								errorFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
								egl.setLocalFunctionVariable("errorFormat", errorFormat, "string");
								egl.atLine(this.eze$$fileName,192,5683,39, this);
								egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
								egl.atLine(this.eze$$fileName,193,5727,148, this);
								throw (function () {
									var ezert$$33 = egl.createRuntimeException();
									egl.atLine(this.eze$$fileName,193,5765,68, this);
									var ezert$$34 = "";
									ezert$$34 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ format ].setType( "S;" ) );
									egl.atLine(this.eze$$fileName,193,5755,78, this);
									egl.checkNull(ezert$$33, "ezert$$33").message = ezert$$34;
									egl.atLine(this.eze$$fileName,193,5835,38, this);
									egl.checkNull(ezert$$33, "ezert$$33").messageID = "CRRUI2708E";
									return ezert$$33;
								}).call(this);
							}finally{egl.exitBlock();}
						}finally{egl.exitBlock();}
					}
				}
				egl.atLine(this.eze$$fileName,166,4849,1039, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"unformat": function( input, dateFormat, timeFormat, isBoolean, zeroFormat, fillChar, sign, currency, currencySymbol, numericSeparator, itemLength, itemDecimals, itemType, msgKey ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("unformat",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("dateFormat", dateFormat, "string", "dateFormat");
				egl.addLocalFunctionVariable("timeFormat", timeFormat, "string", "timeFormat");
				egl.addLocalFunctionVariable("isBoolean", isBoolean, "boolean", "isBoolean");
				egl.addLocalFunctionVariable("zeroFormat", zeroFormat, "boolean", "zeroFormat");
				egl.addLocalFunctionVariable("fillChar", fillChar, "string", "fillChar");
				egl.addLocalFunctionVariable("sign", sign, "egl.ui.SignKind", "sign");
				egl.addLocalFunctionVariable("currency", currency, "boolean", "currency");
				egl.addLocalFunctionVariable("currencySymbol", currencySymbol, "string", "currencySymbol");
				egl.addLocalFunctionVariable("numericSeparator", numericSeparator, "boolean", "numericSeparator");
				egl.addLocalFunctionVariable("itemLength", itemLength, "int", "itemLength");
				egl.addLocalFunctionVariable("itemDecimals", itemDecimals, "int", "itemDecimals");
				egl.addLocalFunctionVariable("itemType", itemType, "string", "itemType");
				egl.addLocalFunctionVariable("msgKey", msgKey, "string", "msgKey");
				egl.atLine(this.eze$$fileName,202,6253,21, this);
				var ezert$$35 = null;
				ezert$$35 = egl.egl.core.$StrLib.clip( input, 0);
				egl.atLine(this.eze$$fileName,202,6245,30, this);
				input = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$35);
				egl.setLocalFunctionVariable("input", input, "string");
				egl.atLine(this.eze$$fileName,203,6279,124, this);
				if ( (dateFormat != "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,204,6312,82, this);
						var ezert$$36 = "";
						ezert$$36 = this.fromDate(input, dateFormat, isBoolean, itemLength, itemDecimals, itemType, msgKey );
						egl.atLine(this.eze$$fileName,204,6305,91, this);
						$result = ezert$$36;
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,206,6407,124, this);
				if ( (timeFormat != "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,207,6440,82, this);
						var ezert$$37 = "";
						ezert$$37 = this.fromTime(input, timeFormat, isBoolean, itemLength, itemDecimals, itemType, msgKey );
						egl.atLine(this.eze$$fileName,207,6433,91, this);
						$result = ezert$$37;
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,210,6546,153, this);
				var ezert$$38 = "";
				ezert$$38 = this.unformatAndConvertToNumber(input, isBoolean, fillChar, function() {
					var ezert$$39 = 0;
					
					ezert$$39 = sign;
				; return ezert$$39;}.call(this), currency, currencySymbol, numericSeparator, itemLength, itemDecimals, itemType, msgKey );
				egl.atLine(this.eze$$fileName,210,6539,162, this);
				$result = ezert$$38;
				egl.setLocalFunctionVariable("STRING", $result, "string");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"fromDate": function( input, format, isBoolean, itemLength, itemDecimals, itemType, msgKey ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("fromDate",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("format", format, "string", "format");
				egl.addLocalFunctionVariable("isBoolean", isBoolean, "boolean", "isBoolean");
				egl.addLocalFunctionVariable("itemLength", itemLength, "int", "itemLength");
				egl.addLocalFunctionVariable("itemDecimals", itemDecimals, "int", "itemDecimals");
				egl.addLocalFunctionVariable("itemType", itemType, "string", "itemType");
				egl.addLocalFunctionVariable("msgKey", msgKey, "string", "msgKey");
				egl.atLine(this.eze$$fileName,216,6897,112, this);
				if ( (input == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,217,6925,75, this);
						var ezert$$40 = "";
						ezert$$40 = this.convertToNumber("0", isBoolean, itemLength, itemDecimals, itemType, msgKey );
						egl.atLine(this.eze$$fileName,217,6918,84, this);
						$result = ezert$$40;
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,219,7013,177, this);
				if ( (input == "0") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,220,7035,148, this);
						throw (function () {
							var ezert$$41 = egl.createRuntimeException();
							egl.atLine(this.eze$$fileName,220,7073,68, this);
							var ezert$$42 = "";
							ezert$$42 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ format ].setType( "S;" ) );
							egl.atLine(this.eze$$fileName,220,7063,78, this);
							egl.checkNull(ezert$$41, "ezert$$41").message = ezert$$42;
							egl.atLine(this.eze$$fileName,220,7143,38, this);
							egl.checkNull(ezert$$41, "ezert$$41").messageID = "CRRUI2708E";
							return ezert$$41;
						}).call(this);
					}finally{egl.exitBlock();}
				}
				var result = "";
				egl.addLocalFunctionVariable("result", result, "string", "result");
				var savedFormat = "";
				egl.addLocalFunctionVariable("savedFormat", savedFormat, "string", "savedFormat");
				egl.atLine(this.eze$$fileName,224,7216,46, this);
				savedFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
				egl.setLocalFunctionVariable("savedFormat", savedFormat, "string");
				egl.atLine(this.eze$$fileName,225,7266,475, this);
				try {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,226,7274,34, this);
						egl.egl.core.StrLib['$inst'].defaultDateFormat = format;
						var d = egl.egl.core.$DateTimeLib.currentDate();
						egl.addLocalFunctionVariable("d", d, "date", "d");
						egl.atLine(this.eze$$fileName,227,7313,15, this);
						d = egl.egl.core.$DateTimeLib.dateValue(input);
						egl.setLocalFunctionVariable("d", d, "date");
						egl.atLine(this.eze$$fileName,228,7363,33, this);
						var ezert$$43 = "";
						ezert$$43 = this.getInternalDateFormat(itemLength );
						egl.atLine(this.eze$$fileName,228,7342,55, this);
						var ezert$$44 = null;
						ezert$$44 = egl.egl.core.$StrLib.formatDate( d, ezert$$43 );
						egl.atLine(this.eze$$fileName,228,7333,65, this);
						result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$44);
						egl.setLocalFunctionVariable("result", result, "string");
						egl.atLine(this.eze$$fileName,229,7403,39, this);
						egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
					}finally{egl.exitBlock();}
				}
				catch ( ezert$$45 )
				{
					{
						if (ezert$$45 instanceof egl.egl.debug.DebugTermination){throw ezert$$45;}
						if (!(ezert$$45 instanceof egl.egl.core.AnyException)) {
							ezert$$45 = egl.makeExceptionFromCaughtObject(ezert$$45);
						}
						var exception = ezert$$45;
						try{egl.enterBlock();
							egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
							try{egl.enterBlock();
								var errorFormat = "";
								egl.addLocalFunctionVariable("errorFormat", errorFormat, "string", "errorFormat");
								egl.atLine(this.eze$$fileName,231,7486,46, this);
								errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
								egl.setLocalFunctionVariable("errorFormat", errorFormat, "string");
								egl.atLine(this.eze$$fileName,232,7537,39, this);
								egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
								egl.atLine(this.eze$$fileName,233,7581,153, this);
								throw (function () {
									var ezert$$46 = egl.createRuntimeException();
									egl.atLine(this.eze$$fileName,233,7619,73, this);
									var ezert$$47 = "";
									ezert$$47 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
									egl.atLine(this.eze$$fileName,233,7609,83, this);
									egl.checkNull(ezert$$46, "ezert$$46").message = ezert$$47;
									egl.atLine(this.eze$$fileName,233,7694,38, this);
									egl.checkNull(ezert$$46, "ezert$$46").messageID = "CRRUI2708E";
									return ezert$$46;
								}).call(this);
							}finally{egl.exitBlock();}
						}finally{egl.exitBlock();}
					}
				}
				egl.atLine(this.eze$$fileName,235,7752,78, this);
				var ezert$$48 = "";
				ezert$$48 = this.convertToNumber(result, isBoolean, itemLength, itemDecimals, itemType, msgKey );
				egl.atLine(this.eze$$fileName,235,7745,87, this);
				$result = ezert$$48;
				egl.setLocalFunctionVariable("STRING", $result, "string");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"fromTime": function( input, format, isBoolean, itemLength, itemDecimals, itemType, msgKey ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("fromTime",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("format", format, "string", "format");
				egl.addLocalFunctionVariable("isBoolean", isBoolean, "boolean", "isBoolean");
				egl.addLocalFunctionVariable("itemLength", itemLength, "int", "itemLength");
				egl.addLocalFunctionVariable("itemDecimals", itemDecimals, "int", "itemDecimals");
				egl.addLocalFunctionVariable("itemType", itemType, "string", "itemType");
				egl.addLocalFunctionVariable("msgKey", msgKey, "string", "msgKey");
				egl.atLine(this.eze$$fileName,240,8028,112, this);
				if ( (input == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,241,8056,75, this);
						var ezert$$49 = "";
						ezert$$49 = this.convertToNumber("0", isBoolean, itemLength, itemDecimals, itemType, msgKey );
						egl.atLine(this.eze$$fileName,241,8049,84, this);
						$result = ezert$$49;
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,243,8144,177, this);
				if ( (input == "0") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,244,8166,148, this);
						throw (function () {
							var ezert$$50 = egl.createRuntimeException();
							egl.atLine(this.eze$$fileName,244,8204,68, this);
							var ezert$$51 = "";
							ezert$$51 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ format ].setType( "S;" ) );
							egl.atLine(this.eze$$fileName,244,8194,78, this);
							egl.checkNull(ezert$$50, "ezert$$50").message = ezert$$51;
							egl.atLine(this.eze$$fileName,244,8274,38, this);
							egl.checkNull(ezert$$50, "ezert$$50").messageID = "CRRUI2708E";
							return ezert$$50;
						}).call(this);
					}finally{egl.exitBlock();}
				}
				var result = "";
				egl.addLocalFunctionVariable("result", result, "string", "result");
				var savedFormat = "";
				egl.addLocalFunctionVariable("savedFormat", savedFormat, "string", "savedFormat");
				egl.atLine(this.eze$$fileName,248,8347,46, this);
				savedFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
				egl.setLocalFunctionVariable("savedFormat", savedFormat, "string");
				egl.atLine(this.eze$$fileName,249,8397,450, this);
				try {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,250,8405,34, this);
						egl.egl.core.StrLib['$inst'].defaultTimeFormat = format;
						var t = egl.egl.core.$DateTimeLib.currentTime();
						egl.addLocalFunctionVariable("t", t, "time", "t");
						egl.atLine(this.eze$$fileName,251,8444,15, this);
						t = egl.egl.core.$DateTimeLib.timeValue(input);
						egl.setLocalFunctionVariable("t", t, "time");
						egl.atLine(this.eze$$fileName,252,8473,30, this);
						var ezert$$52 = null;
						ezert$$52 = egl.egl.core.$StrLib.formatTime( t, "HHmmss" );
						egl.atLine(this.eze$$fileName,252,8464,40, this);
						result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$52);
						egl.setLocalFunctionVariable("result", result, "string");
						egl.atLine(this.eze$$fileName,253,8509,39, this);
						egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
					}finally{egl.exitBlock();}
				}
				catch ( ezert$$53 )
				{
					{
						if (ezert$$53 instanceof egl.egl.debug.DebugTermination){throw ezert$$53;}
						if (!(ezert$$53 instanceof egl.egl.core.AnyException)) {
							ezert$$53 = egl.makeExceptionFromCaughtObject(ezert$$53);
						}
						var exception = ezert$$53;
						try{egl.enterBlock();
							egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
							try{egl.enterBlock();
								var errorFormat = "";
								egl.addLocalFunctionVariable("errorFormat", errorFormat, "string", "errorFormat");
								egl.atLine(this.eze$$fileName,255,8592,46, this);
								errorFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
								egl.setLocalFunctionVariable("errorFormat", errorFormat, "string");
								egl.atLine(this.eze$$fileName,256,8643,39, this);
								egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
								egl.atLine(this.eze$$fileName,257,8687,153, this);
								throw (function () {
									var ezert$$54 = egl.createRuntimeException();
									egl.atLine(this.eze$$fileName,257,8725,73, this);
									var ezert$$55 = "";
									ezert$$55 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
									egl.atLine(this.eze$$fileName,257,8715,83, this);
									egl.checkNull(ezert$$54, "ezert$$54").message = ezert$$55;
									egl.atLine(this.eze$$fileName,257,8800,38, this);
									egl.checkNull(ezert$$54, "ezert$$54").messageID = "CRRUI2708E";
									return ezert$$54;
								}).call(this);
							}finally{egl.exitBlock();}
						}finally{egl.exitBlock();}
					}
				}
				egl.atLine(this.eze$$fileName,259,8858,78, this);
				var ezert$$56 = "";
				ezert$$56 = this.convertToNumber(result, isBoolean, itemLength, itemDecimals, itemType, msgKey );
				egl.atLine(this.eze$$fileName,259,8851,87, this);
				$result = ezert$$56;
				egl.setLocalFunctionVariable("STRING", $result, "string");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"unformatAndConvertToNumber": function( input, isBoolean, fillChar, sign, currency, currencySymbol, numericSeparator, itemLength, itemDecimals, itemType, msgKey ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("unformatAndConvertToNumber",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("isBoolean", isBoolean, "boolean", "isBoolean");
				egl.addLocalFunctionVariable("fillChar", fillChar, "string?", "fillChar");
				egl.addLocalFunctionVariable("sign", sign, "egl.ui.SignKind", "sign");
				egl.addLocalFunctionVariable("currency", currency, "boolean", "currency");
				egl.addLocalFunctionVariable("currencySymbol", currencySymbol, "string", "currencySymbol");
				egl.addLocalFunctionVariable("numericSeparator", numericSeparator, "boolean", "numericSeparator");
				egl.addLocalFunctionVariable("itemLength", itemLength, "int", "itemLength");
				egl.addLocalFunctionVariable("itemDecimals", itemDecimals, "int", "itemDecimals");
				egl.addLocalFunctionVariable("itemType", itemType, "string", "itemType");
				egl.addLocalFunctionVariable("msgKey", msgKey, "string", "msgKey");
				egl.atLine(this.eze$$fileName,266,9257,152, this);
				if ( ((egl.nullableCompare(fillChar," ", 0) != 0) && (egl.nullableCompare(fillChar,"", 0) != 0)) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,267,9300,102, this);
						while ( (egl.egl.core.$StrLib.indexOf( input, fillChar) == 1) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,268,9366,26, this);
								var ezert$$57 = 0;
								ezert$$57 = egl.egl.core.$StrLib.textLen( input);
								egl.atLine(this.eze$$fileName,268,9350,44, this);
								input = input.substring( 2-1,ezert$$57);
								egl.setLocalFunctionVariable("input", input, "string");
							}finally{egl.exitBlock();}
							egl.atLine(this.eze$$fileName,267,9300,102, this);
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,272,9417,112, this);
				if ( (input == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,273,9445,75, this);
						var ezert$$58 = "";
						ezert$$58 = this.convertToNumber("0", isBoolean, itemLength, itemDecimals, itemType, msgKey );
						egl.atLine(this.eze$$fileName,273,9438,84, this);
						$result = ezert$$58;
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,276,9537,150, this);
				if ( currency ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,277,9555,81, this);
						if ( (currencySymbol == "") ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,278,9603,24, this);
								var ezert$$59 = "";
								ezert$$59 = this.util.getCurrencySymbol();
								egl.atLine(this.eze$$fileName,278,9586,42, this);
								currencySymbol = ezert$$59;
								egl.setLocalFunctionVariable("currencySymbol", currencySymbol, "string");
							}finally{egl.exitBlock();}
						}
						egl.atLine(this.eze$$fileName,280,9641,39, this);
						this.removeSubstring(input, function(eze$$inout$input) {
							input = eze$$inout$input;
							egl.setLocalFunctionVariable("input", input, "string");
						}, currencySymbol, this );
						egl.setLocalFunctionVariable("input", input, "string");
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,283,9695,142, this);
				if ( numericSeparator ) {
					try{egl.enterBlock();
						var separatorChar = "";
						egl.addLocalFunctionVariable("separatorChar", separatorChar, "string", "separatorChar");
						egl.atLine(this.eze$$fileName,284,9744,27, this);
						var ezert$$60 = "";
						ezert$$60 = this.util.getGroupingSeparator();
						egl.atLine(this.eze$$fileName,284,9721,51, this);
						separatorChar = ezert$$60;
						egl.setLocalFunctionVariable("separatorChar", separatorChar, "string");
						egl.atLine(this.eze$$fileName,285,9777,53, this);
						while ( this.removeSubstring(input, function(eze$$inout$input) {
							input = eze$$inout$input;
							egl.setLocalFunctionVariable("input", input, "string");
						}, separatorChar, this ) ) {
							try{egl.enterBlock();
							}finally{egl.exitBlock();}
							egl.atLine(this.eze$$fileName,285,9777,53, this);
						}
					}finally{egl.exitBlock();}
				}
				var length = 0;
				egl.addLocalFunctionVariable("length", length, "int", "length");
				egl.atLine(this.eze$$fileName,289,9858,26, this);
				var ezert$$61 = 0;
				ezert$$61 = egl.egl.core.$StrLib.textLen( input);
				egl.atLine(this.eze$$fileName,289,9845,40, this);
				length = ezert$$61;
				egl.setLocalFunctionVariable("length", length, "int");
				egl.atLine(this.eze$$fileName,290,9889,817, this);
				if ( (length != 0) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,291,9910,789, this);
						switch( sign ) {
							case egl.ui.SignKind.PARENS:
								egl.atLine(this.eze$$fileName,292,9927,238, this);
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,293,9955,57, this);
									if ( (input.charAt( 1-1 ) == "(") ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,294,9985,17, this);
											input=input.splice(1,1,"-");
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,296,10019,146, this);
									if ( (input.substring( length-1,length) == ")") ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,297,10059,96, this);
											if ( (length == 1) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,298,10084,11, this);
													input = "";
													egl.setLocalFunctionVariable("input", input, "string");
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,300,10116,28, this);
													input = input.substring( 1-1,(length - 1));
													egl.setLocalFunctionVariable("input", input, "string");
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								break;
							case egl.ui.SignKind.TRAILING:
								egl.atLine(this.eze$$fileName,303,10171,353, this);
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,304,10201,323, this);
									if ( (input.substring( length-1,length) == "+") ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,305,10241,96, this);
											if ( (length == 1) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,306,10266,11, this);
													input = "";
													egl.setLocalFunctionVariable("input", input, "string");
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,308,10298,28, this);
													input = input.substring( 1-1,(length - 1));
													egl.setLocalFunctionVariable("input", input, "string");
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,311,10356,158, this);
											if ( (input.substring( length-1,length) == "-") ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,312,10397,106, this);
													if ( (length == 1) ) {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,313,10423,11, this);
															input = "";
															egl.setLocalFunctionVariable("input", input, "string");
														}finally{egl.exitBlock();}
													}
													else {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,315,10457,34, this);
															input = ("-" + input.substring( 1-1,(length - 1)));
															egl.setLocalFunctionVariable("input", input, "string");
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								break;
							case egl.ui.SignKind.LEADING:
								egl.atLine(this.eze$$fileName,319,10530,161, this);
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,320,10559,132, this);
									if ( (input.charAt( 1-1 ) == "+") ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,321,10589,92, this);
											if ( (length == 1) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,322,10614,11, this);
													input = "";
													egl.setLocalFunctionVariable("input", input, "string");
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,324,10646,24, this);
													input = input.substring( 2-1,length);
													egl.setLocalFunctionVariable("input", input, "string");
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								break;
							default:
							try{egl.enterBlock();
							}finally{egl.exitBlock();}
							break;
						}
					}finally{egl.exitBlock();}
				}
				var decimalSeparator = "";
				egl.addLocalFunctionVariable("decimalSeparator", decimalSeparator, "string", "decimalSeparator");
				egl.atLine(this.eze$$fileName,330,10740,26, this);
				var ezert$$62 = "";
				ezert$$62 = this.util.getDecimalSeparator();
				egl.atLine(this.eze$$fileName,330,10714,53, this);
				decimalSeparator = ezert$$62;
				egl.setLocalFunctionVariable("decimalSeparator", decimalSeparator, "string");
				egl.atLine(this.eze$$fileName,331,10771,151, this);
				if ( (decimalSeparator != ".") ) {
					try{egl.enterBlock();
						var index = 0;
						egl.addLocalFunctionVariable("index", index, "int", "index");
						egl.atLine(this.eze$$fileName,332,10816,39, this);
						var ezert$$63 = 0;
						ezert$$63 = egl.egl.core.$StrLib.indexOf( input, decimalSeparator);
						egl.setLocalFunctionVariable("input", input, "string");
						egl.atLine(this.eze$$fileName,332,10804,52, this);
						index = ezert$$63;
						egl.setLocalFunctionVariable("index", index, "int");
						egl.atLine(this.eze$$fileName,333,10861,54, this);
						if ( (index != 0) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,334,10882,25, this);
								input=input.splice(index,index,".");
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,338,10930,40, this);
				if ( (input == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,339,10951,12, this);
						input = "0";
						egl.setLocalFunctionVariable("input", input, "string");
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,341,10981,77, this);
				var ezert$$64 = "";
				ezert$$64 = this.convertToNumber(input, isBoolean, itemLength, itemDecimals, itemType, msgKey );
				egl.atLine(this.eze$$fileName,341,10974,86, this);
				$result = ezert$$64;
				egl.setLocalFunctionVariable("STRING", $result, "string");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"removeSubstring": function( input, eze$$input$func_, substring, eze$$caller ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				var eze$$inout;
				try {
					eze$$inout = eval('eze$$' + ezeName + '$func_');
				} catch (e) {}
				if (eze$$inout && typeof eze$$inout === "function") {
					var eze$$tempResult = eval(ezeValue);
					var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
					if (ezeSetter) {
						eval(ezeSetter + "(eze$$tempResult)");
					} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
						eval(ezeName + ".eze$$value = " + eze$$callResult);
					} else {
						eval(ezeName + " = eze$$tempResult");
					}
				} else {
					if (ezeSetter) {
						eval(ezeSetter + "(" + ezeValue + ")");
					} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
						eval(ezeName + ".eze$$value = " + ezeValue);
					} else {
						eval(ezeName + " = " + ezeValue);
					}
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("removeSubstring",this,arguments,eze$$updater);
				var $result = false;
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("substring", substring, "string", "substring");
				egl.atLine(this.eze$$fileName,345,11166,46, this);
				if ( (substring == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,346,11191,14, this);
						$result = false;
						egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				var index = 0;
				egl.addLocalFunctionVariable("index", index, "int", "index");
				egl.atLine(this.eze$$fileName,349,11232,32, this);
				var ezert$$65 = 0;
				ezert$$65 = egl.egl.core.$StrLib.indexOf( input, substring);
				egl.setLocalFunctionVariable("input", input, "string");
				egl.atLine(this.eze$$fileName,349,11220,45, this);
				index = ezert$$65;
				egl.setLocalFunctionVariable("index", index, "int");
				egl.atLine(this.eze$$fileName,350,11269,423, this);
				if ( (index != 0) ) {
					try{egl.enterBlock();
						var inputLength = 0;
						egl.addLocalFunctionVariable("inputLength", inputLength, "int", "inputLength");
						egl.atLine(this.eze$$fileName,351,11307,26, this);
						var ezert$$66 = 0;
						ezert$$66 = egl.egl.core.$StrLib.textLen( input);
						egl.atLine(this.eze$$fileName,351,11289,45, this);
						inputLength = ezert$$66;
						egl.setLocalFunctionVariable("inputLength", inputLength, "int");
						var substringLength = 0;
						egl.addLocalFunctionVariable("substringLength", substringLength, "int", "substringLength");
						egl.atLine(this.eze$$fileName,352,11361,30, this);
						var ezert$$67 = 0;
						ezert$$67 = egl.egl.core.$StrLib.textLen( substring);
						egl.atLine(this.eze$$fileName,352,11339,53, this);
						substringLength = ezert$$67;
						egl.setLocalFunctionVariable("substringLength", substringLength, "int");
						egl.atLine(this.eze$$fileName,353,11397,270, this);
						if ( (index == 1) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,354,11418,47, this);
								input = input.substring( (1 + substringLength)-1,inputLength);
								egl.setLocalFunctionVariable("input", input, "string");
								eze$$input$func_.call(eze$$caller,input);
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,356,11480,179, this);
								if ( (((index + substringLength) - 1) == inputLength) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,357,11534,27, this);
										input = input.substring( 1-1,(index - 1));
										egl.setLocalFunctionVariable("input", input, "string");
										eze$$input$func_.call(eze$$caller,input);
									}finally{egl.exitBlock();}
								}
								else {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,359,11578,72, this);
										input = (input.substring( 1-1,(index - 1)) + input.substring( (index + substringLength)-1,inputLength));
										egl.setLocalFunctionVariable("input", input, "string");
										eze$$input$func_.call(eze$$caller,input);
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
						egl.atLine(this.eze$$fileName,362,11672,13, this);
						$result = true;
						egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,364,11696,14, this);
				$result = false;
				egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"convertToNumber": function( input, isBoolean, itemLength, itemDecimals, itemType, msgKey ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("convertToNumber",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("isBoolean", isBoolean, "boolean", "isBoolean");
				egl.addLocalFunctionVariable("itemLength", itemLength, "int", "itemLength");
				egl.addLocalFunctionVariable("itemDecimals", itemDecimals, "int", "itemDecimals");
				egl.addLocalFunctionVariable("itemType", itemType, "string", "itemType");
				egl.addLocalFunctionVariable("msgKey", msgKey, "string", "msgKey");
				var msg = "";
				egl.addLocalFunctionVariable("msg", msg, "string", "msg");
				egl.atLine(this.eze$$fileName,371,11914,460, this);
				if ( (((itemDecimals == 0) && (itemType != "F")) && (itemType != "f")) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,372,11979,388, this);
						if ( (input.charAt( 1-1 ) == "-") ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,373,12019,26, this);
								var ezert$$68 = 0;
								ezert$$68 = egl.egl.core.$StrLib.textLen( input);
								egl.atLine(this.eze$$fileName,373,12007,184, this);
								if ( !egl.is(input.substring( 2-1,ezert$$68), "NUMERIC",egl.isnumeric) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,374,12066,112, this);
										throw (function () {
											var ezert$$69 = egl.createRuntimeException();
											egl.atLine(this.eze$$fileName,374,12104,47, this);
											var ezert$$70 = "";
											ezert$$70 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2719E", [  ].setType( "S;" ) );
											egl.atLine(this.eze$$fileName,374,12094,57, this);
											egl.checkNull(ezert$$69, "ezert$$69").message = ezert$$70;
											egl.atLine(this.eze$$fileName,374,12153,23, this);
											egl.checkNull(ezert$$69, "ezert$$69").messageID = "CRRUI2719E";
											return ezert$$69;
										}).call(this);
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,377,12206,153, this);
								if ( !egl.is(input, "NUMERIC",egl.isnumeric) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,378,12235,112, this);
										throw (function () {
											var ezert$$71 = egl.createRuntimeException();
											egl.atLine(this.eze$$fileName,378,12273,47, this);
											var ezert$$72 = "";
											ezert$$72 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2719E", [  ].setType( "S;" ) );
											egl.atLine(this.eze$$fileName,378,12263,57, this);
											egl.checkNull(ezert$$71, "ezert$$71").message = ezert$$72;
											egl.atLine(this.eze$$fileName,378,12322,23, this);
											egl.checkNull(ezert$$71, "ezert$$71").messageID = "CRRUI2719E";
											return ezert$$71;
										}).call(this);
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				var isOneOrZero = false;
				egl.addLocalFunctionVariable("isOneOrZero", isOneOrZero, "boolean", "isOneOrZero");
				egl.atLine(this.eze$$fileName,384,12406,1027, this);
				try {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,385,12414,856, this);
						switch( itemType ) {
							case "f":
								egl.atLine(this.eze$$fileName,386,12435,84, this);
								try{egl.enterBlock();
									var temp = 0;
									egl.addLocalFunctionVariable("temp", temp, "smallfloat", "temp");
									egl.atLine(this.eze$$fileName,387,12451,24, this);
									temp = egl.convertFloatToSmallfloat(egl.convertStringToFloat(input),egl.createRuntimeException);
									egl.setLocalFunctionVariable("temp", temp, "smallfloat");
									egl.atLine(this.eze$$fileName,388,12482,37, this);
									isOneOrZero = ((temp == 0) || (temp == 1));
									egl.setLocalFunctionVariable("isOneOrZero", isOneOrZero, "boolean");
								}finally{egl.exitBlock();}
								break;
							case "F":
								egl.atLine(this.eze$$fileName,389,12525,79, this);
								try{egl.enterBlock();
									var temp = 0;
									egl.addLocalFunctionVariable("temp", temp, "float", "temp");
									egl.atLine(this.eze$$fileName,390,12541,19, this);
									temp = egl.convertStringToFloat(input);
									egl.setLocalFunctionVariable("temp", temp, "float");
									egl.atLine(this.eze$$fileName,391,12567,37, this);
									isOneOrZero = ((temp == 0) || (temp == 1));
									egl.setLocalFunctionVariable("isOneOrZero", isOneOrZero, "boolean");
								}finally{egl.exitBlock();}
								break;
							case "I":
								egl.atLine(this.eze$$fileName,392,12610,77, this);
								try{egl.enterBlock();
									var temp = 0;
									egl.addLocalFunctionVariable("temp", temp, "int", "temp");
									egl.atLine(this.eze$$fileName,393,12626,17, this);
									temp = egl.convertStringToInt(input);
									egl.setLocalFunctionVariable("temp", temp, "int");
									egl.atLine(this.eze$$fileName,394,12650,37, this);
									isOneOrZero = ((temp == 0) || (temp == 1));
									egl.setLocalFunctionVariable("isOneOrZero", isOneOrZero, "boolean");
								}finally{egl.exitBlock();}
								break;
							case "i":
								egl.atLine(this.eze$$fileName,395,12693,82, this);
								try{egl.enterBlock();
									var temp = 0;
									egl.addLocalFunctionVariable("temp", temp, "smallint", "temp");
									egl.atLine(this.eze$$fileName,396,12709,22, this);
									temp = egl.convertStringToSmallint(input);
									egl.setLocalFunctionVariable("temp", temp, "smallint");
									egl.atLine(this.eze$$fileName,397,12738,37, this);
									isOneOrZero = ((temp == 0) || (temp == 1));
									egl.setLocalFunctionVariable("isOneOrZero", isOneOrZero, "boolean");
								}finally{egl.exitBlock();}
								break;
							case "B":
								egl.atLine(this.eze$$fileName,398,12781,80, this);
								try{egl.enterBlock();
									var temp = egl.javascript.BigDecimal.prototype.ZERO;
									egl.addLocalFunctionVariable("temp", temp, "bigint", "temp");
									egl.atLine(this.eze$$fileName,399,12797,20, this);
									temp = egl.convertStringToBigint(input);
									egl.setLocalFunctionVariable("temp", temp, "bigint");
									egl.atLine(this.eze$$fileName,400,12824,37, this);
									isOneOrZero = ((temp.compareTo(egl.convertIntegerToDecimal(0, egl.javascript.BigDecimal.prototype.NINES[3])) == 0) || (temp.compareTo(egl.convertIntegerToDecimal(1, egl.javascript.BigDecimal.prototype.NINES[3])) == 0));
									egl.setLocalFunctionVariable("isOneOrZero", isOneOrZero, "boolean");
								}finally{egl.exitBlock();}
								break;
							case "b":
							case "N":
							case "n":
							case "9":
							case "d":
							case "p":
								egl.atLine(this.eze$$fileName,401,12867,395, this);
								try{egl.enterBlock();
									var result = null;
									egl.addLocalFunctionVariable("result", result, "any", "result");
									egl.atLine(this.eze$$fileName,402,12916,30, this);
									var ezert$$73 = null;
									ezert$$73 = egl.egl.core.$MathLib.stringAsDecimal( input );
									egl.atLine(this.eze$$fileName,402,12903,44, this);
									result = (function(x){ return x != null ? (((function(x){return {eze$$value:x, eze$$signature:egl.inferSignature(x)};})(x))) : null; })(ezert$$73);
									egl.setLocalFunctionVariable("result", result, "any");
									var eze_Cond_Temp_1 = false;
									egl.atLine(this.eze$$fileName,403,12958,77, this);
									if ( (result == null) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,403,12958,77, this);
											eze_Cond_Temp_1 = true;
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,403,12958,77, this);
											if ( !(this.util.decimalValueIsValid(egl.unboxAny(result), itemLength, itemDecimals )) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,403,12958,77, this);
													eze_Cond_Temp_1 = true;
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,403,12958,77, this);
													eze_Cond_Temp_1 = false;
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,403,12954,212, this);
									if ( eze_Cond_Temp_1 ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,404,13044,112, this);
											throw (function () {
												var ezert$$74 = egl.createRuntimeException();
												egl.atLine(this.eze$$fileName,404,13082,47, this);
												var ezert$$75 = "";
												ezert$$75 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2719E", [  ].setType( "S;" ) );
												egl.atLine(this.eze$$fileName,404,13072,57, this);
												egl.checkNull(ezert$$74, "ezert$$74").message = ezert$$75;
												egl.atLine(this.eze$$fileName,404,13131,23, this);
												egl.checkNull(ezert$$74, "ezert$$74").messageID = "CRRUI2719E";
												return ezert$$74;
											}).call(this);
										}finally{egl.exitBlock();}
									}
									var eze_Cond_Temp_2 = false;
									egl.atLine(this.eze$$fileName,406,13187,30, this);
									var ezert$$76 = null;
									ezert$$76 = egl.egl.core.$MathLib.stringAsDecimal( input );
									egl.atLine(this.eze$$fileName,406,13187,74, this);
									if ( (egl.nullableCompare(ezert$$76,0, 1) == 0) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,406,13187,74, this);
											eze_Cond_Temp_2 = true;
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,406,13226,30, this);
											var ezert$$77 = null;
											ezert$$77 = egl.egl.core.$MathLib.stringAsDecimal( input );
											egl.atLine(this.eze$$fileName,406,13187,74, this);
											if ( (egl.nullableCompare(ezert$$77,1, 1) == 0) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,406,13187,74, this);
													eze_Cond_Temp_2 = true;
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,406,13187,74, this);
													eze_Cond_Temp_2 = false;
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,406,13173,89, this);
									isOneOrZero = eze_Cond_Temp_2;
									egl.setLocalFunctionVariable("isOneOrZero", isOneOrZero, "boolean");
								}finally{egl.exitBlock();}
								break;
							default:
							try{egl.enterBlock();
							}finally{egl.exitBlock();}
							break;
						}
					}finally{egl.exitBlock();}
				}
				catch ( ezert$$78 )
				{
					{
						if (ezert$$78 instanceof egl.egl.debug.DebugTermination){throw ezert$$78;}
						if (!(ezert$$78 instanceof egl.egl.core.AnyException)) {
							ezert$$78 = egl.makeExceptionFromCaughtObject(ezert$$78);
						}
						var exception = ezert$$78;
						try{egl.enterBlock();
							egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,409,13314,112, this);
								throw (function () {
									var ezert$$79 = egl.createRuntimeException();
									egl.atLine(this.eze$$fileName,409,13352,47, this);
									var ezert$$80 = "";
									ezert$$80 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2719E", [  ].setType( "S;" ) );
									egl.atLine(this.eze$$fileName,409,13342,57, this);
									egl.checkNull(ezert$$79, "ezert$$79").message = ezert$$80;
									egl.atLine(this.eze$$fileName,409,13401,23, this);
									egl.checkNull(ezert$$79, "ezert$$79").messageID = "CRRUI2719E";
									return ezert$$79;
								}).call(this);
							}finally{egl.exitBlock();}
						}finally{egl.exitBlock();}
					}
				}
				egl.atLine(this.eze$$fileName,412,13441,158, this);
				if ( (isBoolean && !(isOneOrZero)) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,413,13476,116, this);
						throw (function () {
							var ezert$$81 = egl.createRuntimeException();
							egl.atLine(this.eze$$fileName,413,13514,49, this);
							var ezert$$82 = "";
							ezert$$82 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msgKey, "CRRUI2710E", [  ].setType( "S;" ) );
							egl.atLine(this.eze$$fileName,413,13504,59, this);
							egl.checkNull(ezert$$81, "ezert$$81").message = ezert$$82;
							egl.atLine(this.eze$$fileName,413,13565,25, this);
							egl.checkNull(ezert$$81, "ezert$$81").messageID = "CRRUI2710E";
							return ezert$$81;
						}).call(this);
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,416,13607,14, this);
				$result = input;
				egl.setLocalFunctionVariable("STRING", $result, "string");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"getInternalDateFormat": function( itemLength ) {
			var eze$$this = this;
			var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
				if (!ezeGetter) {
					eval(ezeName);
				}
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
				if (ezeGetter) {
					return eval(ezeGetter);
				}
				return eval(ezeName);
			}
			try { egl.enter("getInternalDateFormat",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("itemLength", itemLength, "int", "itemLength");
				egl.atLine(this.eze$$fileName,420,13710,269, this);
				switch( itemLength ) {
					case 5:
					case 7:
						egl.atLine(this.eze$$fileName,421,13732,166, this);
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,423,13827,71, this);
							throw (function () {
								var ezert$$83 = egl.createRuntimeException();
								egl.atLine(this.eze$$fileName,423,13855,41, this);
								egl.checkNull(ezert$$83, "ezert$$83").message = "Unsupported dateformat length";
								return ezert$$83;
							}).call(this);
						}finally{egl.exitBlock();}
						break;
					case 6:
						egl.atLine(this.eze$$fileName,424,13903,30, this);
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,425,13916,17, this);
							$result = "yyMMdd";
							egl.setLocalFunctionVariable("STRING", $result, "string");
							{ if (!egl.debugg) egl.leave(); return $result;}
						}finally{egl.exitBlock();}
						break;
					default:
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,427,13953,19, this);
						$result = "yyyyMMdd";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
					break;
				}
				egl.atLine(this.eze$$fileName,419,13633,352, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"toString": function() {
			return "[InternalNumericFormatter]";
		}
		,
		"eze$$getName": function() {
			return "InternalNumericFormatter";
		}
		,
		"eze$$getChildVariables": function() {
			var eze$$parent = this;
			return [
			{name : "Build Descriptor", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
						return [
						{name : "Name", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "com_ibm_egl_ruiJavaScriptBuildOptions";}}, type : ""},
						{name : "Path", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "\\com.ibm.egl.rui_4.3.7\\EGLSource\\com_ibm_egl_rui.eglbld";}}, type : ""},
						{name : "Options", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
									return [
									{name : "bidiConversionTable", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "bind", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "blanksAsZero", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "buildPlan", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "byteArrayOperationsForStructuredRecords", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "cachePreparedStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "cancelAfterTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "checkNumericOverflow", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "checkToTransaction", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "checkType", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "cicsEntries", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "cicsj2cTimeout", value : -1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "clientCodeSet", value : "IBM-850", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "commentLevel", value : 1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "currencyLocation", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "currencySymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "data", value : 31, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "dbContentSeparator", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "dbms", value : "DERBY", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "debugTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "decimalSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultDateFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultMoneyFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultNumericFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultTimeFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultTimeStampFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "deploymentDescriptor", value : "com_ibm_egl_rui", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "destDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "destHost", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "destLibrary", value : "QGPL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "destPort", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "destUserID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "eliminateSystemDependentCode", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "enableJavaWrapperGen", value : "NO", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "endCommarea", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "errorDestination", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "fillWithNulls", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "formServicePgmType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genDDSFile", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genDataTables", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genFixedLengthSqlLike", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genFormGroup", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genHelpFormGroup", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genProject", value : "com.ibm.egl.rui_4.3.7", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genProperties", value : "GLOBAL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genResourceBundle", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genReturnImmediate", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genRunFile", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "genVGUIRecords", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "imsFastPath", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "imsLogID", value : "NOLOG", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "imsPSB", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "includeLineNumbers", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "j2ee", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "j2eeLevel", value : "1.3", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "leftAlign", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "linkEdit", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "linkage", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "math", value : "COBOL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "maxNumericDigits", value : 31, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "mfsExtendedAttr", value : "YES", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "mfsIgnore", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "mfsUseTestLibrary", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "msgTablePrefix", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "positiveSignIndicator", value : "F", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "prep", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "prepareAllSQLStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "preparedStatementCacheSize", value : -1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "printDestination", value : "PROGRAMCONTROLLED", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "projectID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "reservedWord", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "resourceAssociations", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "resourceBundleLocale", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "restartTransactionID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "restoreCurrentMsgOnError", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "returnTransaction", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "separatorSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "serverCodeSet", value : "IBM-037", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "serverType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sessionBeanID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "setFormItemFull", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "spaADF", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "spaSize", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "spaStatusBytePosition", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "spacesZero", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlAccessColumnsAsBytes", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlCommitControl", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlDB", value : "jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlErrorTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlIOTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlJDBCDriverClass", value : "org.apache.derby.jdbc.EmbeddedDriver", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlJNDIName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlSchema", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlValidationConnectionURL", value : "jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "startTransactionID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "statementTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "synchOnPgmTransfer", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "synchOnTrxTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sysCodes", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "system", value : "JAVASCRIPT", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "targetNLS", value : "ENU", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "tempDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "templateDir", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "transferErrorTransaction", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "truncateExtraDecimals", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "twaOffset", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "useCurrentSchema", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "useXctlForTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "userMessageFile", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "v60DecimalBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "v60NumWithCharBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "v60NumWithDateBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "v60SQLNullableBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "v71AddBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "vagCompatibility", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "validateBlankDateFields", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "validateMixedItems", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "validateOnlyIfModified", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "validateSQLStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "vseLibrary", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "workDBType", value : "AUX", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "wrapperCompatibility", value : "CURRENT", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "wrapperPackageName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""}
						];}, "toString": function(){return ""}}, type : ""}
			];}, "toString": function() {return ""}}, type : ""},
			
			{name : "System Variables", attrs : egl.ATTR_SYSTEM_VAR, value : {"eze$$getChildVariables": function() {
						return [
						{name: "StrLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$StrLib, type : "egl.core.StrLib", jsName : "egl.egl.core.StrLib.$inst"},
						{name: "SysVar", attrs : egl.ATTR_SYSTEM_VAR, value : eze$$parent.jsrt$SysVar, type : "egl.core.SysVar", jsName : "jsrt$SysVar"},
						{name: "ServiceLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$ServiceLib, type : "egl.core.ServiceLib", jsName : "egl.egl.core.ServiceLib.$inst"},
			];}, "toString": function(){return ""}}, type : "", jsName : ""},
			
			{name: "InternalMessageLib", value : egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'], type : "com.ibm.egl.rui.mvc.InternalMessageLib", jsName : "egl.com.ibm.egl.rui.mvc.InternalMessageLib.$inst"},
			{name: "util", value : eze$$parent.util, type : "com.ibm.egl.rui.mvc.InternalFormattingUtil", jsName : "util"},
			{name: "PARSE_ERROR", value : eze$$parent.PARSE_ERROR, type : "string", jsName : "PARSE_ERROR"},
			{name: "EDIT_INVALID_DATE_TIME_ERR", value : eze$$parent.EDIT_INVALID_DATE_TIME_ERR, type : "string", jsName : "EDIT_INVALID_DATE_TIME_ERR"},
			{name: "BOOLEAN_ERROR", value : eze$$parent.BOOLEAN_ERROR, type : "string", jsName : "BOOLEAN_ERROR"}
			];
		}
	}
);
