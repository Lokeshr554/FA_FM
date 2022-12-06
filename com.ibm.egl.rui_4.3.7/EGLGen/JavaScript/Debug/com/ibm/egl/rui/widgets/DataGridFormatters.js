// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.ibm.egl.rui.widgets.DataGridFormatters');
else egl.eze$$userLibs = ['com.ibm.egl.rui.widgets.DataGridFormatters'];
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'DataGridFormatters',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/DataGridFormatters.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridFormatters',
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
				if(egl.com.ibm.egl.rui.widgets.DataGridFormatters['$inst']){
					if (!egl.debugg) egl.leave();
					return egl.com.ibm.egl.rui.widgets.DataGridFormatters['$inst'];
				}
				egl.com.ibm.egl.rui.widgets.DataGridFormatters['$inst']=this;
				this.jsrt$SysVar= new egl.egl.core.SysVar();
				new egl.egl.core.StrLib();
				if (!egl.debugg) egl.leave();
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		
		,
		"dollarSigns": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
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
			try { egl.enter("dollarSigns",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
				egl.addLocalFunctionVariable("value", value, "string", "value");
				egl.addLocalFunctionVariable("rowData", rowData, "any", "rowData");
				egl.atLine(this.eze$$fileName,14,400,20, this);
				value = ("$" + value);
				egl.setLocalFunctionVariable("value", value, "string");
				eze$$value$func_.call(eze$$caller,value);
				egl.atLine(this.eze$$fileName,13,326,103, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"coloredNumbers": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
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
			try { egl.enter("coloredNumbers",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
				egl.addLocalFunctionVariable("value", value, "string", "value");
				egl.addLocalFunctionVariable("rowData", rowData, "any", "rowData");
				egl.atLine(this.eze$$fileName,18,514,266, this);
				if ( (egl.convertStringToFloat(value) < 0) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,19,541,39, this);
						ezekw$$class = (ezekw$$class + " EglRuiDataGridCellNegative");
						egl.setLocalFunctionVariable("class", ezekw$$class, "string");
						eze$$ezekw$$class$func_.call(eze$$caller,ezekw$$class);
					}finally{egl.exitBlock();}
				}
				else {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,21,608,159, this);
						if ( (egl.convertStringToFloat(value) == 0) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,22,640,35, this);
								ezekw$$class = (ezekw$$class + " EglRuiDataGridCellNull");
								egl.setLocalFunctionVariable("class", ezekw$$class, "string");
								eze$$ezekw$$class$func_.call(eze$$caller,ezekw$$class);
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,24,711,39, this);
								ezekw$$class = (ezekw$$class + " EglRuiDataGridCellPositive");
								egl.setLocalFunctionVariable("class", ezekw$$class, "string");
								eze$$ezekw$$class$func_.call(eze$$caller,ezekw$$class);
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,17,437,352, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"addCommas": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
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
			try { egl.enter("addCommas",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
				egl.addLocalFunctionVariable("value", value, "string", "value");
				egl.addLocalFunctionVariable("rowData", rowData, "any", "rowData");
				egl.atLine(this.eze$$fileName,30,866,35, this);
				if ( (value == "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,31,887,7, this);
						{ if (!egl.debugg) egl.leave(); return;}
					}finally{egl.exitBlock();}
				}
				var len = 0;
				egl.addLocalFunctionVariable("len", len, "int", "len");
				egl.atLine(this.eze$$fileName,33,915,26, this);
				var ezert$$1 = 0;
				ezert$$1 = egl.egl.core.$StrLib.textLen( value);
				egl.atLine(this.eze$$fileName,33,905,37, this);
				len = ezert$$1;
				egl.setLocalFunctionVariable("len", len, "int");
				egl.atLine(this.eze$$fileName,34,946,169, this);
				{
					try{egl.enterBlock();
						var i = 0;
						egl.addLocalFunctionVariable("i", i, "int", "i");
						i = 1;
						egl.setLocalFunctionVariable("i", i, "int");
						for ( ; (i <= len); i = (i + 1) )
						{
							egl.setLocalFunctionVariable("i", i, "int");
							try{egl.enterBlock();
								var s = "";
								egl.addLocalFunctionVariable("s", s, "string", "s");
								egl.atLine(this.eze$$fileName,35,976,22, this);
								s = value.substring( i-1,i);
								egl.setLocalFunctionVariable("s", s, "string");
								egl.atLine(this.eze$$fileName,36,1013,92, this);
								if ( ((((s < "0") || (s > "9")) && (s != ".")) && ((i != 1) || (s != "-"))) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,37,1087,7, this);
										{ if (!egl.debugg) egl.leave(); return;}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
							egl.atLine(this.eze$$fileName,34,946,169, this);
						}
					}finally{egl.exitBlock();}
				}
				var preDecimal = "";
				egl.addLocalFunctionVariable("preDecimal", preDecimal, "string", "preDecimal");
				var postDecimal = "";
				egl.addLocalFunctionVariable("postDecimal", postDecimal, "string", "postDecimal");
				var decimalIndex = 0;
				egl.addLocalFunctionVariable("decimalIndex", decimalIndex, "int", "decimalIndex");
				egl.atLine(this.eze$$fileName,42,1183,26, this);
				var ezert$$2 = 0;
				ezert$$2 = egl.egl.core.$StrLib.indexOf( value, ("."));
				egl.setLocalFunctionVariable("value", value, "string");
				egl.atLine(this.eze$$fileName,42,1164,46, this);
				decimalIndex = ezert$$2;
				egl.setLocalFunctionVariable("decimalIndex", decimalIndex, "int");
				var startIndex = 0;
				egl.addLocalFunctionVariable("startIndex", startIndex, "int", "startIndex");
				egl.atLine(this.eze$$fileName,43,1214,19, this);
				startIndex = 1;
				egl.setLocalFunctionVariable("startIndex", startIndex, "int");
				egl.atLine(this.eze$$fileName,44,1237,50, this);
				if ( (value.charAt( 1-1 ) == "-") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,45,1265,15, this);
						startIndex = 2;
						egl.setLocalFunctionVariable("startIndex", startIndex, "int");
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,47,1291,388, this);
				if ( (decimalIndex > 1) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,48,1317,39, this);
						preDecimal = value.substring( 1-1,(decimalIndex - 1));
						egl.setLocalFunctionVariable("preDecimal", preDecimal, "string");
						egl.atLine(this.eze$$fileName,49,1365,26, this);
						var ezert$$3 = 0;
						ezert$$3 = egl.egl.core.$StrLib.textLen( value);
						egl.atLine(this.eze$$fileName,49,1361,125, this);
						if ( (ezert$$3 > decimalIndex) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,50,1450,26, this);
								var ezert$$4 = 0;
								ezert$$4 = egl.egl.core.$StrLib.textLen( value);
								egl.atLine(this.eze$$fileName,50,1413,65, this);
								postDecimal = value.substring( (decimalIndex + 1)-1,ezert$$4);
								egl.setLocalFunctionVariable("postDecimal", postDecimal, "string");
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				else {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,53,1500,172, this);
						if ( (decimalIndex == 1) ) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,54,1532,26, this);
								var ezert$$5 = 0;
								ezert$$5 = egl.egl.core.$StrLib.textLen( value);
								egl.atLine(this.eze$$fileName,54,1528,101, this);
								if ( (ezert$$5 > 1) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,55,1592,26, this);
										var ezert$$6 = 0;
										ezert$$6 = egl.egl.core.$StrLib.textLen( value);
										egl.atLine(this.eze$$fileName,55,1570,50, this);
										postDecimal = value.substring( 2-1,ezert$$6);
										egl.setLocalFunctionVariable("postDecimal", postDecimal, "string");
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,58,1645,19, this);
								preDecimal = value;
								egl.setLocalFunctionVariable("preDecimal", preDecimal, "string");
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				var separatorChar = "";
				egl.addLocalFunctionVariable("separatorChar", separatorChar, "string", "separatorChar");
				egl.atLine(this.eze$$fileName,62,1685,27, this);
				separatorChar = ",";
				egl.setLocalFunctionVariable("separatorChar", separatorChar, "string");
				egl.atLine(this.eze$$fileName,63,1716,188, this);
				{
					try{egl.enterBlock();
						var i = 0;
						egl.addLocalFunctionVariable("i", i, "int", "i");
						var ezert$$7 = 0;
						ezert$$7 = egl.egl.core.$StrLib.textLen( preDecimal);
						i = (ezert$$7 - 3);
						egl.setLocalFunctionVariable("i", i, "int");
						for ( ; (i >= startIndex); i = (i - 3) )
						{
							egl.setLocalFunctionVariable("i", i, "int");
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,64,1864,31, this);
								var ezert$$8 = 0;
								ezert$$8 = egl.egl.core.$StrLib.textLen( preDecimal);
								egl.atLine(this.eze$$fileName,64,1802,95, this);
								preDecimal = ((preDecimal.substring( 1-1,i) + separatorChar) + preDecimal.substring( (i + 1)-1,ezert$$8));
								egl.setLocalFunctionVariable("preDecimal", preDecimal, "string");
							}finally{egl.exitBlock();}
							egl.atLine(this.eze$$fileName,63,1716,188, this);
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,66,1908,39, this);
				value = ((preDecimal + ".") + postDecimal);
				egl.setLocalFunctionVariable("value", value, "string");
				eze$$value$func_.call(eze$$caller,value);
				egl.atLine(this.eze$$fileName,29,797,1159, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"percentage": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
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
			try { egl.enter("percentage",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
				egl.addLocalFunctionVariable("value", value, "string", "value");
				egl.addLocalFunctionVariable("rowData", rowData, "any", "rowData");
				egl.atLine(this.eze$$fileName,70,2037,13, this);
				value = (value + "%");
				egl.setLocalFunctionVariable("value", value, "string");
				eze$$value$func_.call(eze$$caller,value);
				egl.atLine(this.eze$$fileName,69,1964,95, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"fontWeightItalic": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
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
			try { egl.enter("fontWeightItalic",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
				egl.addLocalFunctionVariable("value", value, "string", "value");
				egl.addLocalFunctionVariable("rowData", rowData, "any", "rowData");
				egl.atLine(this.eze$$fileName,74,2146,31, this);
				value = (("<i>" + value) + "</i>");
				egl.setLocalFunctionVariable("value", value, "string");
				eze$$value$func_.call(eze$$caller,value);
				egl.atLine(this.eze$$fileName,73,2067,119, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"fontWeightBold": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
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
			try { egl.enter("fontWeightBold",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
				egl.addLocalFunctionVariable("value", value, "string", "value");
				egl.addLocalFunctionVariable("rowData", rowData, "any", "rowData");
				egl.atLine(this.eze$$fileName,78,2271,31, this);
				value = (("<b>" + value) + "</b>");
				egl.setLocalFunctionVariable("value", value, "string");
				eze$$value$func_.call(eze$$caller,value);
				egl.atLine(this.eze$$fileName,77,2194,117, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"fontWeightUnderlined": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
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
			try { egl.enter("fontWeightUnderlined",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
				egl.addLocalFunctionVariable("value", value, "string", "value");
				egl.addLocalFunctionVariable("rowData", rowData, "any", "rowData");
				egl.atLine(this.eze$$fileName,82,2402,31, this);
				value = (("<u>" + value) + "</u>");
				egl.setLocalFunctionVariable("value", value, "string");
				eze$$value$func_.call(eze$$caller,value);
				egl.atLine(this.eze$$fileName,81,2319,123, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"fontWeightBoldItalic": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
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
			try { egl.enter("fontWeightBoldItalic",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
				egl.addLocalFunctionVariable("value", value, "string", "value");
				egl.addLocalFunctionVariable("rowData", rowData, "any", "rowData");
				egl.atLine(this.eze$$fileName,86,2533,38, this);
				value = (("<i><b>" + value) + "</b></i>");
				egl.setLocalFunctionVariable("value", value, "string");
				eze$$value$func_.call(eze$$caller,value);
				egl.atLine(this.eze$$fileName,85,2450,130, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"makeLink": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
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
			try { egl.enter("makeLink",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
				egl.addLocalFunctionVariable("value", value, "string", "value");
				egl.addLocalFunctionVariable("rowData", rowData, "any", "rowData");
				egl.atLine(this.eze$$fileName,90,2659,35, this);
				ezekw$$class = (ezekw$$class + " EglRuiDataGridCellLink");
				egl.setLocalFunctionVariable("class", ezekw$$class, "string");
				eze$$ezekw$$class$func_.call(eze$$caller,ezekw$$class);
				egl.atLine(this.eze$$fileName,91,2704,196, this);
				value = (("<span onClick='egl.com.ibm.egl.rui.infobus.InfoBus.$inst.publish(\"grid.link\",egl.createWidget(this.parentNode.parentNode))'>" + value) + "</span>");
				egl.setLocalFunctionVariable("value", value, "string");
				eze$$value$func_.call(eze$$caller,value);
				egl.atLine(this.eze$$fileName,89,2588,321, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"toString": function() {
			return "[DataGridFormatters]";
		}
		,
		"eze$$getName": function() {
			return "DataGridFormatters";
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
			];}, "toString": function(){return ""}}, type : "", jsName : ""}
			
			];
		}
	}
);
