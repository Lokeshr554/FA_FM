// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.ibm.egl.rui.mvc.InternalCharFormatter');
else egl.eze$$userLibs = ['com.ibm.egl.rui.mvc.InternalCharFormatter'];
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalCharFormatter',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/InternalCharFormatter.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalCharFormatter',
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
				if(egl.com.ibm.egl.rui.mvc.InternalCharFormatter['$inst']){
					if (!egl.debugg) egl.leave();
					return egl.com.ibm.egl.rui.mvc.InternalCharFormatter['$inst'];
				}
				egl.com.ibm.egl.rui.mvc.InternalCharFormatter['$inst']=this;
				egl.atLine(this.eze$$fileName,14,348,30, this);
				this.util = new egl.com.ibm.egl.rui.mvc.InternalFormattingUtil();
				
				this.jsrt$SysVar= new egl.egl.core.SysVar();
				new egl.com.ibm.egl.rui.mvc.InternalMessageLib();
				new egl.egl.core.StrLib();
				if (!egl.debugg) egl.leave();
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		
		,
		"format": function( input, dateFormat, timeFormat, isUppercase, isLowercase, typeChkMsgKey ) {
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
				egl.addLocalFunctionVariable("input", input, "string?", "input");
				egl.addLocalFunctionVariable("dateFormat", dateFormat, "string", "dateFormat");
				egl.addLocalFunctionVariable("timeFormat", timeFormat, "string", "timeFormat");
				egl.addLocalFunctionVariable("isUppercase", isUppercase, "boolean", "isUppercase");
				egl.addLocalFunctionVariable("isLowercase", isLowercase, "boolean", "isLowercase");
				egl.addLocalFunctionVariable("typeChkMsgKey", typeChkMsgKey, "string", "typeChkMsgKey");
				egl.atLine(this.eze$$fileName,18,557,41, this);
				if ( (input == null) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,19,580,11, this);
						$result = "";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,22,606,82, this);
				if ( (dateFormat != "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,23,639,40, this);
						var ezert$$1 = null;
						ezert$$1 = this.asDate((function(x){ return x != null ? ((x).toString()) : ""; })(input), dateFormat, typeChkMsgKey );
						egl.atLine(this.eze$$fileName,23,632,49, this);
						$result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$1);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,25,692,82, this);
				if ( (timeFormat != "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,26,725,40, this);
						var ezert$$2 = null;
						ezert$$2 = this.asTime((function(x){ return x != null ? ((x).toString()) : ""; })(input), timeFormat, typeChkMsgKey );
						egl.atLine(this.eze$$fileName,26,718,49, this);
						$result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$2);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,28,778,60, this);
				if ( isUppercase ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,29,806,23, this);
						var ezert$$3 = null;
						ezert$$3 = egl.egl.core.$StrLib.upperCase( input);
						egl.atLine(this.eze$$fileName,29,799,32, this);
						$result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$3);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,31,842,60, this);
				if ( isLowercase ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,32,870,23, this);
						var ezert$$4 = null;
						ezert$$4 = egl.egl.core.$StrLib.lowerCase( input);
						egl.atLine(this.eze$$fileName,32,863,32, this);
						$result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$4);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,34,906,14, this);
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(input);
				egl.setLocalFunctionVariable("STRING", $result, "string");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"asDate": function( input, format, msg ) {
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
				var $result = null;
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("format", format, "string", "format");
				egl.addLocalFunctionVariable("msg", msg, "string", "msg");
				egl.atLine(this.eze$$fileName,38,1026,39, this);
				if ( (input == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,39,1047,11, this);
						$result = "";
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				var savedFormat = "";
				egl.addLocalFunctionVariable("savedFormat", savedFormat, "string", "savedFormat");
				egl.atLine(this.eze$$fileName,42,1073,46, this);
				savedFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
				egl.setLocalFunctionVariable("savedFormat", savedFormat, "string");
				egl.atLine(this.eze$$fileName,43,1123,808, this);
				try {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,44,1158,31, this);
						var ezert$$5 = "";
						ezert$$5 = this.util.getLongGregorianDateMask();
						egl.atLine(this.eze$$fileName,44,1131,59, this);
						egl.egl.core.StrLib['$inst'].defaultDateFormat = ezert$$5;
						var sizeDifference = 0;
						egl.addLocalFunctionVariable("sizeDifference", sizeDifference, "int", "sizeDifference");
						egl.atLine(this.eze$$fileName,46,1221,45, this);
						var ezert$$6 = 0;
						ezert$$6 = egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultDateFormat));
						egl.atLine(this.eze$$fileName,46,1269,26, this);
						var ezert$$7 = 0;
						ezert$$7 = egl.egl.core.$StrLib.textLen( input);
						egl.atLine(this.eze$$fileName,46,1200,96, this);
						sizeDifference = (ezert$$6 - ezert$$7);
						egl.setLocalFunctionVariable("sizeDifference", sizeDifference, "int");
						egl.atLine(this.eze$$fileName,47,1301,222, this);
						if ( (sizeDifference < 0) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,48,1346,45, this);
								var ezert$$8 = 0;
								ezert$$8 = egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultDateFormat));
								egl.atLine(this.eze$$fileName,48,1330,63, this);
								input = input.substring( 1-1,ezert$$8);
								egl.setLocalFunctionVariable("input", input, "string");
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,50,1408,107, this);
								if ( (sizeDifference != 0) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,51,1439,67, this);
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
														egl.atLine(this.eze$$fileName,52,1483,13, this);
														input = (input + "0");
														egl.setLocalFunctionVariable("input", input, "string");
													}finally{egl.exitBlock();}
													egl.atLine(this.eze$$fileName,51,1439,67, this);
												}
											}finally{egl.exitBlock();}
										}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
						var d = egl.egl.core.$DateTimeLib.currentDate();
						egl.addLocalFunctionVariable("d", d, "date", "d");
						egl.atLine(this.eze$$fileName,57,1533,15, this);
						d = egl.egl.core.$DateTimeLib.dateValue(input);
						egl.setLocalFunctionVariable("d", d, "date");
						var result = null;
						egl.addLocalFunctionVariable("result", result, "string?", "result");
						egl.atLine(this.eze$$fileName,58,1570,28, this);
						var ezert$$9 = null;
						ezert$$9 = egl.egl.core.$StrLib.formatDate( d, format );
						egl.atLine(this.eze$$fileName,58,1553,46, this);
						result = ezert$$9;
						egl.setLocalFunctionVariable("result", result, "string?");
						egl.atLine(this.eze$$fileName,59,1604,39, this);
						egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
						egl.atLine(this.eze$$fileName,60,1648,15, this);
						$result = result;
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				catch ( ezert$$10 )
				{
					{
						if (ezert$$10 instanceof egl.egl.debug.DebugTermination){throw ezert$$10;}
						if (!(ezert$$10 instanceof egl.egl.core.AnyException)) {
							ezert$$10 = egl.makeExceptionFromCaughtObject(ezert$$10);
						}
						var exception = ezert$$10;
						try{egl.enterBlock();
							egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
							try{egl.enterBlock();
								var errorFormat = "";
								egl.addLocalFunctionVariable("errorFormat", errorFormat, "string", "errorFormat");
								egl.atLine(this.eze$$fileName,62,1707,46, this);
								errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
								egl.setLocalFunctionVariable("errorFormat", errorFormat, "string");
								egl.atLine(this.eze$$fileName,63,1758,39, this);
								egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
								egl.atLine(this.eze$$fileName,64,1802,122, this);
								throw (function () {
									var ezert$$11 = egl.createRuntimeException();
									egl.atLine(this.eze$$fileName,64,1840,56, this);
									var ezert$$12 = "";
									ezert$$12 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msg, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
									egl.atLine(this.eze$$fileName,64,1830,66, this);
									egl.checkNull(ezert$$11, "ezert$$11").message = ezert$$12;
									egl.atLine(this.eze$$fileName,64,1898,24, this);
									egl.checkNull(ezert$$11, "ezert$$11").messageID = "CRRUI2708E";
									return ezert$$11;
								}).call(this);
							}finally{egl.exitBlock();}
						}finally{egl.exitBlock();}
					}
				}
				egl.atLine(this.eze$$fileName,37,932,1005, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"asTime": function( input, format, msg ) {
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
				var $result = null;
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("format", format, "string", "format");
				egl.addLocalFunctionVariable("msg", msg, "string", "msg");
				egl.atLine(this.eze$$fileName,69,2037,39, this);
				if ( (input == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,70,2058,11, this);
						$result = "";
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				var savedFormat = "";
				egl.addLocalFunctionVariable("savedFormat", savedFormat, "string", "savedFormat");
				egl.atLine(this.eze$$fileName,73,2084,46, this);
				savedFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
				egl.setLocalFunctionVariable("savedFormat", savedFormat, "string");
				egl.atLine(this.eze$$fileName,74,2134,787, this);
				try {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,75,2142,38, this);
						egl.egl.core.StrLib['$inst'].defaultTimeFormat = "HH:mm:ss";
						var sizeDifference = 0;
						egl.addLocalFunctionVariable("sizeDifference", sizeDifference, "int", "sizeDifference");
						egl.atLine(this.eze$$fileName,77,2211,45, this);
						var ezert$$13 = 0;
						ezert$$13 = egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultTimeFormat));
						egl.atLine(this.eze$$fileName,77,2259,26, this);
						var ezert$$14 = 0;
						ezert$$14 = egl.egl.core.$StrLib.textLen( input);
						egl.atLine(this.eze$$fileName,77,2190,96, this);
						sizeDifference = (ezert$$13 - ezert$$14);
						egl.setLocalFunctionVariable("sizeDifference", sizeDifference, "int");
						egl.atLine(this.eze$$fileName,78,2291,222, this);
						if ( (sizeDifference < 0) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,79,2336,45, this);
								var ezert$$15 = 0;
								ezert$$15 = egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultTimeFormat));
								egl.atLine(this.eze$$fileName,79,2320,63, this);
								input = input.substring( 1-1,ezert$$15);
								egl.setLocalFunctionVariable("input", input, "string");
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,81,2398,107, this);
								if ( (sizeDifference != 0) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,82,2429,67, this);
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
														egl.atLine(this.eze$$fileName,83,2473,13, this);
														input = (input + "0");
														egl.setLocalFunctionVariable("input", input, "string");
													}finally{egl.exitBlock();}
													egl.atLine(this.eze$$fileName,82,2429,67, this);
												}
											}finally{egl.exitBlock();}
										}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
						var t = egl.egl.core.$DateTimeLib.currentTime();
						egl.addLocalFunctionVariable("t", t, "time", "t");
						egl.atLine(this.eze$$fileName,88,2523,15, this);
						t = egl.egl.core.$DateTimeLib.timeValue(input);
						egl.setLocalFunctionVariable("t", t, "time");
						var result = null;
						egl.addLocalFunctionVariable("result", result, "string?", "result");
						egl.atLine(this.eze$$fileName,89,2560,28, this);
						var ezert$$16 = null;
						ezert$$16 = egl.egl.core.$StrLib.formatTime( t, format );
						egl.atLine(this.eze$$fileName,89,2543,46, this);
						result = ezert$$16;
						egl.setLocalFunctionVariable("result", result, "string?");
						egl.atLine(this.eze$$fileName,90,2594,39, this);
						egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
						egl.atLine(this.eze$$fileName,91,2638,15, this);
						$result = result;
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				catch ( ezert$$17 )
				{
					{
						if (ezert$$17 instanceof egl.egl.debug.DebugTermination){throw ezert$$17;}
						if (!(ezert$$17 instanceof egl.egl.core.AnyException)) {
							ezert$$17 = egl.makeExceptionFromCaughtObject(ezert$$17);
						}
						var exception = ezert$$17;
						try{egl.enterBlock();
							egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
							try{egl.enterBlock();
								var errorFormat = "";
								egl.addLocalFunctionVariable("errorFormat", errorFormat, "string", "errorFormat");
								egl.atLine(this.eze$$fileName,93,2697,46, this);
								errorFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
								egl.setLocalFunctionVariable("errorFormat", errorFormat, "string");
								egl.atLine(this.eze$$fileName,94,2748,39, this);
								egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
								egl.atLine(this.eze$$fileName,95,2792,122, this);
								throw (function () {
									var ezert$$18 = egl.createRuntimeException();
									egl.atLine(this.eze$$fileName,95,2830,56, this);
									var ezert$$19 = "";
									ezert$$19 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msg, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
									egl.atLine(this.eze$$fileName,95,2820,66, this);
									egl.checkNull(ezert$$18, "ezert$$18").message = ezert$$19;
									egl.atLine(this.eze$$fileName,95,2888,24, this);
									egl.checkNull(ezert$$18, "ezert$$18").messageID = "CRRUI2708E";
									return ezert$$18;
								}).call(this);
							}finally{egl.exitBlock();}
						}finally{egl.exitBlock();}
					}
				}
				egl.atLine(this.eze$$fileName,68,1943,984, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"unformat": function( input, dateFormat, timeFormat, isUppercase, isLowercase, typeChkMsgKey ) {
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
				egl.addLocalFunctionVariable("isUppercase", isUppercase, "boolean", "isUppercase");
				egl.addLocalFunctionVariable("isLowercase", isLowercase, "boolean", "isLowercase");
				egl.addLocalFunctionVariable("typeChkMsgKey", typeChkMsgKey, "string", "typeChkMsgKey");
				egl.atLine(this.eze$$fileName,101,3116,21, this);
				var ezert$$20 = null;
				ezert$$20 = egl.egl.core.$StrLib.clip( input, 0);
				egl.atLine(this.eze$$fileName,101,3108,30, this);
				input = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$20);
				egl.setLocalFunctionVariable("input", input, "string");
				egl.atLine(this.eze$$fileName,102,3142,84, this);
				if ( (dateFormat != "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,103,3175,42, this);
						var ezert$$21 = null;
						ezert$$21 = this.fromDate(input, dateFormat, typeChkMsgKey );
						egl.atLine(this.eze$$fileName,103,3168,51, this);
						$result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$21);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,105,3230,84, this);
				if ( (timeFormat != "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,106,3263,42, this);
						var ezert$$22 = null;
						ezert$$22 = this.fromTime(input, timeFormat, typeChkMsgKey );
						egl.atLine(this.eze$$fileName,106,3256,51, this);
						$result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$22);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,108,3318,62, this);
				if ( isUppercase ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,109,3348,23, this);
						var ezert$$23 = null;
						ezert$$23 = egl.egl.core.$StrLib.upperCase( input);
						egl.atLine(this.eze$$fileName,109,3341,32, this);
						$result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$23);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,111,3384,62, this);
				if ( isLowercase ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,112,3414,23, this);
						var ezert$$24 = null;
						ezert$$24 = egl.egl.core.$StrLib.lowerCase( input);
						egl.atLine(this.eze$$fileName,112,3407,32, this);
						$result = (function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$24);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,114,3450,14, this);
				$result = input;
				egl.setLocalFunctionVariable("STRING", $result, "string");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"fromDate": function( input, format, msg ) {
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
				var $result = null;
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("format", format, "string", "format");
				egl.addLocalFunctionVariable("msg", msg, "string", "msg");
				egl.atLine(this.eze$$fileName,118,3572,39, this);
				if ( (input == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,119,3593,11, this);
						$result = "";
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				var savedFormat = "";
				egl.addLocalFunctionVariable("savedFormat", savedFormat, "string", "savedFormat");
				egl.atLine(this.eze$$fileName,122,3619,46, this);
				savedFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
				egl.setLocalFunctionVariable("savedFormat", savedFormat, "string");
				egl.atLine(this.eze$$fileName,123,3669,539, this);
				try {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,124,3677,34, this);
						egl.egl.core.StrLib['$inst'].defaultDateFormat = format;
						var d = egl.egl.core.$DateTimeLib.currentDate();
						egl.addLocalFunctionVariable("d", d, "date", "d");
						egl.atLine(this.eze$$fileName,126,3785,15, this);
						d = egl.egl.core.$DateTimeLib.dateValue(input);
						egl.setLocalFunctionVariable("d", d, "date");
						var result = null;
						egl.addLocalFunctionVariable("result", result, "string?", "result");
						egl.atLine(this.eze$$fileName,127,3843,31, this);
						var ezert$$25 = "";
						ezert$$25 = this.util.getLongGregorianDateMask();
						egl.atLine(this.eze$$fileName,127,3822,53, this);
						var ezert$$26 = null;
						ezert$$26 = egl.egl.core.$StrLib.formatDate( d, ezert$$25 );
						egl.atLine(this.eze$$fileName,127,3805,71, this);
						result = ezert$$26;
						egl.setLocalFunctionVariable("result", result, "string?");
						egl.atLine(this.eze$$fileName,128,3881,39, this);
						egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
						egl.atLine(this.eze$$fileName,129,3925,15, this);
						$result = result;
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				catch ( ezert$$27 )
				{
					{
						if (ezert$$27 instanceof egl.egl.debug.DebugTermination){throw ezert$$27;}
						if (!(ezert$$27 instanceof egl.egl.core.AnyException)) {
							ezert$$27 = egl.makeExceptionFromCaughtObject(ezert$$27);
						}
						var exception = ezert$$27;
						try{egl.enterBlock();
							egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
							try{egl.enterBlock();
								var errorFormat = "";
								egl.addLocalFunctionVariable("errorFormat", errorFormat, "string", "errorFormat");
								egl.atLine(this.eze$$fileName,131,3984,46, this);
								errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
								egl.setLocalFunctionVariable("errorFormat", errorFormat, "string");
								egl.atLine(this.eze$$fileName,132,4035,39, this);
								egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
								egl.atLine(this.eze$$fileName,133,4079,122, this);
								throw (function () {
									var ezert$$28 = egl.createRuntimeException();
									egl.atLine(this.eze$$fileName,133,4117,56, this);
									var ezert$$29 = "";
									ezert$$29 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msg, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
									egl.atLine(this.eze$$fileName,133,4107,66, this);
									egl.checkNull(ezert$$28, "ezert$$28").message = ezert$$29;
									egl.atLine(this.eze$$fileName,133,4175,24, this);
									egl.checkNull(ezert$$28, "ezert$$28").messageID = "CRRUI2708E";
									return ezert$$28;
								}).call(this);
							}finally{egl.exitBlock();}
						}finally{egl.exitBlock();}
					}
				}
				egl.atLine(this.eze$$fileName,117,3476,738, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"fromTime": function( input, format, msg ) {
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
				var $result = null;
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.addLocalFunctionVariable("format", format, "string", "format");
				egl.addLocalFunctionVariable("msg", msg, "string", "msg");
				egl.atLine(this.eze$$fileName,138,4316,39, this);
				if ( (input == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,139,4337,11, this);
						$result = "";
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				var savedFormat = "";
				egl.addLocalFunctionVariable("savedFormat", savedFormat, "string", "savedFormat");
				egl.atLine(this.eze$$fileName,142,4363,46, this);
				savedFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
				egl.setLocalFunctionVariable("savedFormat", savedFormat, "string");
				egl.atLine(this.eze$$fileName,143,4413,449, this);
				try {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,144,4421,34, this);
						egl.egl.core.StrLib['$inst'].defaultTimeFormat = format;
						var t = egl.egl.core.$DateTimeLib.currentTime();
						egl.addLocalFunctionVariable("t", t, "time", "t");
						egl.atLine(this.eze$$fileName,145,4460,15, this);
						t = egl.egl.core.$DateTimeLib.timeValue(input);
						egl.setLocalFunctionVariable("t", t, "time");
						var result = null;
						egl.addLocalFunctionVariable("result", result, "string?", "result");
						egl.atLine(this.eze$$fileName,146,4497,32, this);
						var ezert$$30 = null;
						ezert$$30 = egl.egl.core.$StrLib.formatTime( t, "HH:mm:ss" );
						egl.atLine(this.eze$$fileName,146,4480,50, this);
						result = ezert$$30;
						egl.setLocalFunctionVariable("result", result, "string?");
						egl.atLine(this.eze$$fileName,147,4535,39, this);
						egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
						egl.atLine(this.eze$$fileName,148,4579,15, this);
						$result = result;
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				catch ( ezert$$31 )
				{
					{
						if (ezert$$31 instanceof egl.egl.debug.DebugTermination){throw ezert$$31;}
						if (!(ezert$$31 instanceof egl.egl.core.AnyException)) {
							ezert$$31 = egl.makeExceptionFromCaughtObject(ezert$$31);
						}
						var exception = ezert$$31;
						try{egl.enterBlock();
							egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
							try{egl.enterBlock();
								var errorFormat = "";
								egl.addLocalFunctionVariable("errorFormat", errorFormat, "string", "errorFormat");
								egl.atLine(this.eze$$fileName,150,4638,46, this);
								errorFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
								egl.setLocalFunctionVariable("errorFormat", errorFormat, "string");
								egl.atLine(this.eze$$fileName,151,4689,39, this);
								egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
								egl.atLine(this.eze$$fileName,152,4733,122, this);
								throw (function () {
									var ezert$$32 = egl.createRuntimeException();
									egl.atLine(this.eze$$fileName,152,4771,56, this);
									var ezert$$33 = "";
									ezert$$33 = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msg, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
									egl.atLine(this.eze$$fileName,152,4761,66, this);
									egl.checkNull(ezert$$32, "ezert$$32").message = ezert$$33;
									egl.atLine(this.eze$$fileName,152,4829,24, this);
									egl.checkNull(ezert$$32, "ezert$$32").messageID = "CRRUI2708E";
									return ezert$$32;
								}).call(this);
							}finally{egl.exitBlock();}
						}finally{egl.exitBlock();}
					}
				}
				egl.atLine(this.eze$$fileName,137,4220,648, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"toString": function() {
			return "[InternalCharFormatter]";
		}
		,
		"eze$$getName": function() {
			return "InternalCharFormatter";
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
			{name: "util", value : eze$$parent.util, type : "com.ibm.egl.rui.mvc.InternalFormattingUtil", jsName : "util"}
			];
		}
	}
);
