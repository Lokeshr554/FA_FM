// Generated at Tue Dec 06 11:54:43 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Image', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Image.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Image',
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
			egl.atLine(this.eze$$fileName,19,516,85, this);
			this.text = "";
			egl.atLine(this.eze$$fileName,20,604,82, this);
			this.src = "";
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"getText": function() {
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
		try { egl.enter("getText",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,23,731,14, this);
			$result = this.text;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setText": function( textIn ) {
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
		try { egl.enter("setText",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("textIn", textIn, "string", "textIn");
			egl.atLine(this.eze$$fileName,27,795,14, this);
			this.text = textIn;
			egl.atLine(this.eze$$fileName,28,813,26, this);
			this.setAttribute("alt", {eze$$value : this.text, eze$$signature : "S;"} );
			egl.atLine(this.eze$$fileName,26,757,88, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getSrc": function() {
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
		try { egl.enter("getSrc",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,32,889,13, this);
			$result = this.src;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setSrc": function( srcIn ) {
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
		try { egl.enter("setSrc",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("srcIn", srcIn, "string", "srcIn");
			egl.atLine(this.eze$$fileName,36,950,12, this);
			this.src = srcIn;
			egl.atLine(this.eze$$fileName,37,966,25, this);
			this.setAttribute("src", {eze$$value : this.src, eze$$signature : "S;"} );
			egl.atLine(this.eze$$fileName,35,914,83, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setWidth": function( w ) {
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
		try { egl.enter("setWidth",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("w", w, "int", "w");
			egl.atLine(this.eze$$fileName,41,1047,25, this);
			this.setAttribute("width", {eze$$value : w, eze$$signature : "I;"} );
			egl.atLine(this.eze$$fileName,40,1002,76, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setHeight": function( h ) {
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
		try { egl.enter("setHeight",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("h", h, "int", "h");
			egl.atLine(this.eze$$fileName,45,1129,26, this);
			this.setAttribute("height", {eze$$value : h, eze$$signature : "I;"} );
			egl.atLine(this.eze$$fileName,44,1083,78, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[Image]";
	}
	,
	"eze$$getName": function() {
		return "Image";
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
								{name : "workDBType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
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
		
		{name: "pixelWidth", value : function(){try{return eze$$parent.getPixelWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "pixelWidth", getter : "getPixelWidth", setter : "setPixelWidth"},
		{name: "pixelHeight", value : function(){try{return eze$$parent.getPixelHeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "pixelHeight", getter : "getPixelHeight", setter : "setPixelHeight"},
		{name: "logicalParent", value : function(){try{return eze$$parent.getLogicalParent();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "logicalParent", getter : "getLogicalParent", setter : "setLogicalParent"},
		{name: "parent", value : function(){try{return eze$$parent.getParent();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "parent", getter : "getParent", setter : "setParent"},
		{name: "style", value : function(){try{return eze$$parent.getStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "style", getter : "getStyle", setter : "setStyle"},
		{name: "background", value : function(){try{return eze$$parent.getBackground();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "background", getter : "getBackground", setter : "setBackground"},
		{name: "layoutData", value : function(){try{return eze$$parent.getLayoutData();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "any", jsName : "layoutData", getter : "getLayoutData", setter : "setLayoutData"},
		{name: "tabIndex", value : function(){try{return eze$$parent.getTabIndex();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "tabIndex", getter : "getTabIndex", setter : "setTabIndex"},
		{name: "ariaLive", value : function(){try{return eze$$parent.getAriaLive();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ariaLive", getter : "getAriaLive", setter : "setAriaLive"},
		{name: "ariaRole", value : function(){try{return eze$$parent.getAriaRole();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ariaRole", getter : "getAriaRole", setter : "setAriaRole"},
		{name: "disabled", value : function(){try{return eze$$parent.getDisabled();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "boolean", jsName : "disabled", getter : "getDisabled", setter : "setDisabled"},
		{name: "cursor", value : function(){try{return eze$$parent.getCursor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "cursor", getter : "getCursor", setter : "setCursor"},
		{name: "visibility", value : function(){try{return eze$$parent.getVisibility();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "visibility", getter : "getVisibility", setter : "setVisibility"},
		{name: "visible", value : function(){try{return eze$$parent.getVisible();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "boolean", jsName : "visible", getter : "getVisible", setter : "setVisible"},
		{name: "opacity", value : function(){try{return eze$$parent.getOpacity();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "opacity", getter : "getOpacity", setter : "setOpacity"},
		{name: "zIndex", value : function(){try{return eze$$parent.getZIndex();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "zIndex", getter : "getZIndex", setter : "setZIndex"},
		{name: "height", value : function(){try{return eze$$parent.getHeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "height", getter : "getHeight", setter : "setHeight"},
		{name: "width", value : function(){try{return eze$$parent.getWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "width", getter : "getWidth", setter : "setWidth"},
		{name: "y", value : function(){try{return eze$$parent.getY();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "y", getter : "getY", setter : "setY"},
		{name: "x", value : function(){try{return eze$$parent.getX();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "x", getter : "getX", setter : "setX"},
		{name: "position", value : function(){try{return eze$$parent.getPosition();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "position", getter : "getPosition", setter : "setPosition"},
		{name: "marginBottom", value : function(){try{return eze$$parent.getMarginBottom();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginBottom", getter : "getMarginBottom", setter : "setMarginBottom"},
		{name: "marginTop", value : function(){try{return eze$$parent.getMarginTop();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginTop", getter : "getMarginTop", setter : "setMarginTop"},
		{name: "marginRight", value : function(){try{return eze$$parent.getMarginRight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginRight", getter : "getMarginRight", setter : "setMarginRight"},
		{name: "marginLeft", value : function(){try{return eze$$parent.getMarginLeft();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginLeft", getter : "getMarginLeft", setter : "setMarginLeft"},
		{name: "margin", value : function(){try{return eze$$parent.getMargin();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "margin", getter : "getMargin", setter : "setMargin"},
		{name: "paddingBottom", value : function(){try{return eze$$parent.getPaddingBottom();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingBottom", getter : "getPaddingBottom", setter : "setPaddingBottom"},
		{name: "paddingTop", value : function(){try{return eze$$parent.getPaddingTop();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingTop", getter : "getPaddingTop", setter : "setPaddingTop"},
		{name: "paddingRight", value : function(){try{return eze$$parent.getPaddingRight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingRight", getter : "getPaddingRight", setter : "setPaddingRight"},
		{name: "paddingLeft", value : function(){try{return eze$$parent.getPaddingLeft();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingLeft", getter : "getPaddingLeft", setter : "setPaddingLeft"},
		{name: "padding", value : function(){try{return eze$$parent.getPadding();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "padding", getter : "getPadding", setter : "setPadding"},
		{name: "borderBottomStyle", value : function(){try{return eze$$parent.getBorderBottomStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderBottomStyle", getter : "getBorderBottomStyle", setter : "setBorderBottomStyle"},
		{name: "borderTopStyle", value : function(){try{return eze$$parent.getBorderTopStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderTopStyle", getter : "getBorderTopStyle", setter : "setBorderTopStyle"},
		{name: "borderRightStyle", value : function(){try{return eze$$parent.getBorderRightStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderRightStyle", getter : "getBorderRightStyle", setter : "setBorderRightStyle"},
		{name: "borderLeftStyle", value : function(){try{return eze$$parent.getBorderLeftStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderLeftStyle", getter : "getBorderLeftStyle", setter : "setBorderLeftStyle"},
		{name: "borderStyle", value : function(){try{return eze$$parent.getBorderStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderStyle", getter : "getBorderStyle", setter : "setBorderStyle"},
		{name: "borderBottomWidth", value : function(){try{return eze$$parent.getBorderBottomWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderBottomWidth", getter : "getBorderBottomWidth", setter : "setBorderBottomWidth"},
		{name: "borderTopWidth", value : function(){try{return eze$$parent.getBorderTopWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderTopWidth", getter : "getBorderTopWidth", setter : "setBorderTopWidth"},
		{name: "borderRightWidth", value : function(){try{return eze$$parent.getBorderRightWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderRightWidth", getter : "getBorderRightWidth", setter : "setBorderRightWidth"},
		{name: "borderLeftWidth", value : function(){try{return eze$$parent.getBorderLeftWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderLeftWidth", getter : "getBorderLeftWidth", setter : "setBorderLeftWidth"},
		{name: "borderWidth", value : function(){try{return eze$$parent.getBorderWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderWidth", getter : "getBorderWidth", setter : "setBorderWidth"},
		{name: "borderColor", value : function(){try{return eze$$parent.getBorderColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderColor", getter : "getBorderColor", setter : "setBorderColor"},
		{name: "fontWeight", value : function(){try{return eze$$parent.getFontWeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "fontWeight", getter : "getFontWeight", setter : "setFontWeight"},
		{name: "fontSize", value : function(){try{return eze$$parent.getFontSize();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "fontSize", getter : "getFontSize", setter : "setFontSize"},
		{name: "font", value : function(){try{return eze$$parent.getFont();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "font", getter : "getFont", setter : "setFont"},
		{name: "backgroundColor", value : function(){try{return eze$$parent.getBackgroundColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "backgroundColor", getter : "getBackgroundColor", setter : "setBackgroundColor"},
		{name: "color", value : function(){try{return eze$$parent.getColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "color", getter : "getColor", setter : "setColor"},
		{name: "class", value : function(){try{return eze$$parent.getClass();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ezekw$$class", getter : "getClass", setter : "setClass"},
		{name: "id", value : function(){try{return eze$$parent.getID();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "id", getter : "getID", setter : "setID"},
		{name: "targetWidget", value : eze$$parent.targetWidget, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "targetWidget"},
		{name: "tagName", value : function(){try{return eze$$parent.getTagName();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "tagName", getter : "getTagName", setter : "setTagName"},
		{name: "innerHTML", value : function(){try{return eze$$parent.getInnerHTML();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "innerHTML", getter : "getInnerHTML", setter : "setInnerHTML"},
		{name: "innerText", value : function(){try{return eze$$parent.getInnerText();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "innerText", getter : "getInnerText", setter : "setInnerText"},
		{name: "children", value : function(){try{return eze$$parent.getChildren();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget[]", jsName : "!children", getter : "getChildren", setter : "setChildren"},
		{name: "document", value : eze$$parent.document, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Document", jsName : "document"},
		{name: "onChange", value : function(){try{return eze$$parent.getOnChange();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onChange", getter : "getOnChange", setter : "setOnChange"},
		{name: "onClick", value : function(){try{return eze$$parent.getOnClick();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onClick", getter : "getOnClick", setter : "setOnClick"},
		{name: "onContextMenu", value : function(){try{return eze$$parent.getOnContextMenu();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onContextMenu", getter : "getOnContextMenu", setter : "setOnContextMenu"},
		{name: "onFocusGained", value : function(){try{return eze$$parent.getOnFocusGained();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onFocusGained", getter : "getOnFocusGained", setter : "setOnFocusGained"},
		{name: "onFocusLost", value : function(){try{return eze$$parent.getOnFocusLost();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onFocusLost", getter : "getOnFocusLost", setter : "setOnFocusLost"},
		{name: "onKeyDown", value : function(){try{return eze$$parent.getOnKeyDown();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyDown", getter : "getOnKeyDown", setter : "setOnKeyDown"},
		{name: "onKeyPress", value : function(){try{return eze$$parent.getOnKeyPress();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyPress", getter : "getOnKeyPress", setter : "setOnKeyPress"},
		{name: "onKeyUp", value : function(){try{return eze$$parent.getOnKeyUp();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyUp", getter : "getOnKeyUp", setter : "setOnKeyUp"},
		{name: "onMouseDown", value : function(){try{return eze$$parent.getOnMouseDown();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseDown", getter : "getOnMouseDown", setter : "setOnMouseDown"},
		{name: "onMouseMove", value : function(){try{return eze$$parent.getOnMouseMove();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseMove", getter : "getOnMouseMove", setter : "setOnMouseMove"},
		{name: "onMouseOut", value : function(){try{return eze$$parent.getOnMouseOut();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseOut", getter : "getOnMouseOut", setter : "setOnMouseOut"},
		{name: "onMouseOver", value : function(){try{return eze$$parent.getOnMouseOver();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseOver", getter : "getOnMouseOver", setter : "setOnMouseOver"},
		{name: "onMouseUp", value : function(){try{return eze$$parent.getOnMouseUp();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseUp", getter : "getOnMouseUp", setter : "setOnMouseUp"},
		{name: "onScroll", value : function(){try{return eze$$parent.getOnScroll();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onScroll", getter : "getOnScroll", setter : "setOnScroll"},
		{name: "onSelect", value : function(){try{return eze$$parent.getOnSelect();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onSelect", getter : "getOnSelect", setter : "setOnSelect"},
		{name: "onStartDrag", value : function(){try{return eze$$parent.getOnStartDrag();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.StartDragFunction", jsName : "onStartDrag", getter : "getOnStartDrag", setter : "setOnStartDrag"},
		{name: "onDrag", value : function(){try{return eze$$parent.getOnDrag();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.DragFunction", jsName : "onDrag", getter : "getOnDrag", setter : "setOnDrag"},
		{name: "onDropOnTarget", value : function(){try{return eze$$parent.getOnDropOnTarget();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.DropOnTargetFunction", jsName : "onDropOnTarget", getter : "getOnDropOnTarget", setter : "setOnDropOnTarget"},
		{name: "numericSwap", value : function(){try{return eze$$parent.getNumericSwap();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "numericSwap", getter : "getNumericSwap", setter : "setNumericSwap"},
		{name: "symmetricSwap", value : function(){try{return eze$$parent.getSymmetricSwap();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "symmetricSwap", getter : "getSymmetricSwap", setter : "setSymmetricSwap"},
		{name: "reverseTextDirection", value : function(){try{return eze$$parent.getReverseTextDirection();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "reverseTextDirection", getter : "getReverseTextDirection", setter : "setReverseTextDirection"},
		{name: "textLayout", value : function(){try{return eze$$parent.getTextLayout();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "textLayout", getter : "getTextLayout", setter : "setTextLayout"},
		{name: "widgetOrientation", value : function(){try{return eze$$parent.getWidgetOrientation();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "widgetOrientation", getter : "getWidgetOrientation", setter : "setWidgetOrientation"},
		{name: "text", value : function(){try{return eze$$parent.getText();}catch(e){return null;}}(), type : "string", jsName : "text", getter : "getText", setter : "setText"},
		{name: "src", value : function(){try{return eze$$parent.getSrc();}catch(e){return null;}}(), type : "string", jsName : "src", getter : "getSrc", setter : "setSrc"}
		];
	}
}
, 'img'
);
