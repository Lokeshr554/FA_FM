// Generated at Tue Dec 06 11:54:40 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
if (egl.eze$$userLibs) egl.eze$$userLibs.push('dojo.widgets.DojoLib');
else egl.eze$$userLibs = ['dojo.widgets.DojoLib'];
egl.defineRUILibrary( 'dojo.widgets', 'DojoLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui.dojo.widgets_2.3.3/EGLSource/dojo/widgets/DojoLib.egl',
		'eze$$runtimePropertiesFile': 'dojo/widgets/DojoLib',
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
				if(egl.dojo.widgets.DojoLib['$inst']){
					if (!egl.debugg) egl.leave();
					return egl.dojo.widgets.DojoLib['$inst'];
				}
				egl.dojo.widgets.DojoLib['$inst']=this;
				egl.atLine(this.eze$$fileName,104,3474,31, this);
				this.VALIDATORS = new egl.dojo.widgets.DojoValidatorLib();
				
				this.jsrt$SysVar= new egl.egl.core.SysVar();
				egl.atLine(this.eze$$fileName,26,1126,40, this);
				this.REGION_CENTER = "center";
				egl.atLine(this.eze$$fileName,27,1169,34, this);
				this.REGION_TOP = "top";
				egl.atLine(this.eze$$fileName,28,1206,40, this);
				this.REGION_BOTTOM = "bottom";
				egl.atLine(this.eze$$fileName,29,1249,41, this);
				this.REGION_LEADING = "leading";
				egl.atLine(this.eze$$fileName,30,1293,36, this);
				this.REGION_LEFT = "left";
				egl.atLine(this.eze$$fileName,31,1332,38, this);
				this.REGION_RIGHT = "right";
				egl.atLine(this.eze$$fileName,36,1433,38, this);
				this.POSITION_LEFT = "left";
				egl.atLine(this.eze$$fileName,37,1474,39, this);
				this.POSITION_RIGHT = "right";
				egl.atLine(this.eze$$fileName,38,1516,36, this);
				this.POSITION_TOP = "top";
				egl.atLine(this.eze$$fileName,39,1555,41, this);
				this.POSITION_BOTTOM = "bottom";
				egl.atLine(this.eze$$fileName,44,1701,46, this);
				this.TIMEBOX_FIVE_MINUTES = "T00:05";
				egl.atLine(this.eze$$fileName,45,1750,45, this);
				this.TIMEBOX_ONE_QUARTER = "T00:15";
				egl.atLine(this.eze$$fileName,46,1798,44, this);
				this.TIMEBOX_HALF_HOUR = "T00:30";
				egl.atLine(this.eze$$fileName,47,1845,43, this);
				this.TIMEBOX_ONE_HOUR = "T01:00";
				egl.atLine(this.eze$$fileName,48,1891,43, this);
				this.TIMEBOX_TWO_HOUR = "T02:00";
				egl.atLine(this.eze$$fileName,49,1937,45, this);
				this.TIMEBOX_THREE_HOURS = "T03:00";
				egl.atLine(this.eze$$fileName,50,1985,44, this);
				this.TIMEBOX_FIVE_HOURS = "T05:00";
				egl.atLine(this.eze$$fileName,51,2032,44, this);
				this.TIMEBOX_TEN_HOURS = "T10:00";
				egl.atLine(this.eze$$fileName,52,2079,46, this);
				this.TIMEBOX_TWELVE_HOURS = "T12:00";
				egl.atLine(this.eze$$fileName,53,2128,43, this);
				this.TIMEBOX_FULL_DAY = "T24:00";
				egl.atLine(this.eze$$fileName,58,2232,45, this);
				this.TIMEBOX_FORMAT_12HR = "hh:mm a";
				egl.atLine(this.eze$$fileName,59,2280,43, this);
				this.TIMEBOX_FORMAT_24HR = "HH:mm";
				egl.atLine(this.eze$$fileName,64,2385,44, this);
				this.DATEBOX_FORMAT_SHORT = "short";
				egl.atLine(this.eze$$fileName,65,2432,46, this);
				this.DATEBOX_FORMAT_MEDIUM = "medium";
				egl.atLine(this.eze$$fileName,66,2481,42, this);
				this.DATEBOX_FORMAT_LONG = "long";
				egl.atLine(this.eze$$fileName,67,2526,42, this);
				this.DATEBOX_FORMAT_FULL = "full";
				egl.atLine(this.eze$$fileName,72,2649,44, this);
				this.CHART_COLOR_THEME_RED = "red";
				egl.atLine(this.eze$$fileName,73,2696,45, this);
				this.CHART_COLOR_THEME_BLUE = "blue";
				egl.atLine(this.eze$$fileName,74,2744,47, this);
				this.CHART_COLOR_THEME_GREEN = "green";
				egl.atLine(this.eze$$fileName,75,2794,49, this);
				this.CHART_COLOR_THEME_ORANGE = "orange";
				egl.atLine(this.eze$$fileName,76,2846,45, this);
				this.CHART_COLOR_THEME_CYAN = "cyan";
				egl.atLine(this.eze$$fileName,77,2894,49, this);
				this.CHART_COLOR_THEME_PURPLE = "purple";
				egl.atLine(this.eze$$fileName,83,2980,39, this);
				this.TOOLTIP_BEFORE = "before";
				egl.atLine(this.eze$$fileName,84,3022,38, this);
				this.TOOLTIP_AFTER = "after";
				egl.atLine(this.eze$$fileName,85,3063,38, this);
				this.TOOLTIP_ABOVE = "above";
				egl.atLine(this.eze$$fileName,86,3104,38, this);
				this.TOOLTIP_BELOW = "below";
				egl.atLine(this.eze$$fileName,92,3181,34, this);
				this.UPPER_CASE = "upper";
				egl.atLine(this.eze$$fileName,93,3218,34, this);
				this.LOWER_CASE = "lower";
				egl.atLine(this.eze$$fileName,94,3255,36, this);
				this.PROPER_CASE = "proper";
				egl.atLine(this.eze$$fileName,95,3294,32, this);
				this.CASE_NONE = "none";
				egl.atLine(this.eze$$fileName,100,3361,29, this);
				this.INPUT_NONE = "";
				egl.atLine(this.eze$$fileName,101,3393,37, this);
				this.INPUT_BEFORE = "before";
				egl.atLine(this.eze$$fileName,102,3433,35, this);
				this.INPUT_AFTER = "after";
				if (!egl.debugg) egl.leave();
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		
		,
		"toString": function() {
			return "[DojoLib]";
		}
		,
		"eze$$getName": function() {
			return "DojoLib";
		}
		,
		"eze$$getChildVariables": function() {
			var eze$$parent = this;
			return [
			{name : "Build Descriptor", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
						return [
						{name : "Name", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "com_ibm_egl_rui_dojo_widgetsJavaScriptBuildOptions";}}, type : ""},
						{name : "Path", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "\\com.ibm.egl.rui.dojo.widgets_2.3.3\\EGLSource\\com_ibm_egl_rui_dojo_widgets.eglbld";}}, type : ""},
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
									{name : "dbms", value : "DB2", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "debugTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "decimalSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultDateFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultMoneyFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultNumericFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultTimeFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "defaultTimeStampFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "deploymentDescriptor", value : "com_ibm_egl_rui_dojo_widgets", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
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
									{name : "genProject", value : "com.ibm.egl.rui.dojo.widgets_2.3.3", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
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
									{name : "sqlDB", value : "jdbc:db2://localhost:50000/SAMPLE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlErrorTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlIOTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlJDBCDriverClass", value : "com.ibm.db2.jcc.DB2Driver", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlJNDIName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlSchema", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "sqlValidationConnectionURL", value : "jdbc:db2://localhost:50000/SAMPLE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
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
			
			{name: "REGION_CENTER", value : eze$$parent.REGION_CENTER, type : "string", jsName : "REGION_CENTER"},
			{name: "REGION_TOP", value : eze$$parent.REGION_TOP, type : "string", jsName : "REGION_TOP"},
			{name: "REGION_BOTTOM", value : eze$$parent.REGION_BOTTOM, type : "string", jsName : "REGION_BOTTOM"},
			{name: "REGION_LEADING", value : eze$$parent.REGION_LEADING, type : "string", jsName : "REGION_LEADING"},
			{name: "REGION_LEFT", value : eze$$parent.REGION_LEFT, type : "string", jsName : "REGION_LEFT"},
			{name: "REGION_RIGHT", value : eze$$parent.REGION_RIGHT, type : "string", jsName : "REGION_RIGHT"},
			{name: "POSITION_LEFT", value : eze$$parent.POSITION_LEFT, type : "string", jsName : "POSITION_LEFT"},
			{name: "POSITION_RIGHT", value : eze$$parent.POSITION_RIGHT, type : "string", jsName : "POSITION_RIGHT"},
			{name: "POSITION_TOP", value : eze$$parent.POSITION_TOP, type : "string", jsName : "POSITION_TOP"},
			{name: "POSITION_BOTTOM", value : eze$$parent.POSITION_BOTTOM, type : "string", jsName : "POSITION_BOTTOM"},
			{name: "TIMEBOX_FIVE_MINUTES", value : eze$$parent.TIMEBOX_FIVE_MINUTES, type : "string", jsName : "TIMEBOX_FIVE_MINUTES"},
			{name: "TIMEBOX_ONE_QUARTER", value : eze$$parent.TIMEBOX_ONE_QUARTER, type : "string", jsName : "TIMEBOX_ONE_QUARTER"},
			{name: "TIMEBOX_HALF_HOUR", value : eze$$parent.TIMEBOX_HALF_HOUR, type : "string", jsName : "TIMEBOX_HALF_HOUR"},
			{name: "TIMEBOX_ONE_HOUR", value : eze$$parent.TIMEBOX_ONE_HOUR, type : "string", jsName : "TIMEBOX_ONE_HOUR"},
			{name: "TIMEBOX_TWO_HOUR", value : eze$$parent.TIMEBOX_TWO_HOUR, type : "string", jsName : "TIMEBOX_TWO_HOUR"},
			{name: "TIMEBOX_THREE_HOURS", value : eze$$parent.TIMEBOX_THREE_HOURS, type : "string", jsName : "TIMEBOX_THREE_HOURS"},
			{name: "TIMEBOX_FIVE_HOURS", value : eze$$parent.TIMEBOX_FIVE_HOURS, type : "string", jsName : "TIMEBOX_FIVE_HOURS"},
			{name: "TIMEBOX_TEN_HOURS", value : eze$$parent.TIMEBOX_TEN_HOURS, type : "string", jsName : "TIMEBOX_TEN_HOURS"},
			{name: "TIMEBOX_TWELVE_HOURS", value : eze$$parent.TIMEBOX_TWELVE_HOURS, type : "string", jsName : "TIMEBOX_TWELVE_HOURS"},
			{name: "TIMEBOX_FULL_DAY", value : eze$$parent.TIMEBOX_FULL_DAY, type : "string", jsName : "TIMEBOX_FULL_DAY"},
			{name: "TIMEBOX_FORMAT_12HR", value : eze$$parent.TIMEBOX_FORMAT_12HR, type : "string", jsName : "TIMEBOX_FORMAT_12HR"},
			{name: "TIMEBOX_FORMAT_24HR", value : eze$$parent.TIMEBOX_FORMAT_24HR, type : "string", jsName : "TIMEBOX_FORMAT_24HR"},
			{name: "DATEBOX_FORMAT_SHORT", value : eze$$parent.DATEBOX_FORMAT_SHORT, type : "string", jsName : "DATEBOX_FORMAT_SHORT"},
			{name: "DATEBOX_FORMAT_MEDIUM", value : eze$$parent.DATEBOX_FORMAT_MEDIUM, type : "string", jsName : "DATEBOX_FORMAT_MEDIUM"},
			{name: "DATEBOX_FORMAT_LONG", value : eze$$parent.DATEBOX_FORMAT_LONG, type : "string", jsName : "DATEBOX_FORMAT_LONG"},
			{name: "DATEBOX_FORMAT_FULL", value : eze$$parent.DATEBOX_FORMAT_FULL, type : "string", jsName : "DATEBOX_FORMAT_FULL"},
			{name: "CHART_COLOR_THEME_RED", value : eze$$parent.CHART_COLOR_THEME_RED, type : "string", jsName : "CHART_COLOR_THEME_RED"},
			{name: "CHART_COLOR_THEME_BLUE", value : eze$$parent.CHART_COLOR_THEME_BLUE, type : "string", jsName : "CHART_COLOR_THEME_BLUE"},
			{name: "CHART_COLOR_THEME_GREEN", value : eze$$parent.CHART_COLOR_THEME_GREEN, type : "string", jsName : "CHART_COLOR_THEME_GREEN"},
			{name: "CHART_COLOR_THEME_ORANGE", value : eze$$parent.CHART_COLOR_THEME_ORANGE, type : "string", jsName : "CHART_COLOR_THEME_ORANGE"},
			{name: "CHART_COLOR_THEME_CYAN", value : eze$$parent.CHART_COLOR_THEME_CYAN, type : "string", jsName : "CHART_COLOR_THEME_CYAN"},
			{name: "CHART_COLOR_THEME_PURPLE", value : eze$$parent.CHART_COLOR_THEME_PURPLE, type : "string", jsName : "CHART_COLOR_THEME_PURPLE"},
			{name: "TOOLTIP_BEFORE", value : eze$$parent.TOOLTIP_BEFORE, type : "string", jsName : "TOOLTIP_BEFORE"},
			{name: "TOOLTIP_AFTER", value : eze$$parent.TOOLTIP_AFTER, type : "string", jsName : "TOOLTIP_AFTER"},
			{name: "TOOLTIP_ABOVE", value : eze$$parent.TOOLTIP_ABOVE, type : "string", jsName : "TOOLTIP_ABOVE"},
			{name: "TOOLTIP_BELOW", value : eze$$parent.TOOLTIP_BELOW, type : "string", jsName : "TOOLTIP_BELOW"},
			{name: "UPPER_CASE", value : eze$$parent.UPPER_CASE, type : "string", jsName : "UPPER_CASE"},
			{name: "LOWER_CASE", value : eze$$parent.LOWER_CASE, type : "string", jsName : "LOWER_CASE"},
			{name: "PROPER_CASE", value : eze$$parent.PROPER_CASE, type : "string", jsName : "PROPER_CASE"},
			{name: "CASE_NONE", value : eze$$parent.CASE_NONE, type : "string", jsName : "CASE_NONE"},
			{name: "INPUT_NONE", value : eze$$parent.INPUT_NONE, type : "string", jsName : "INPUT_NONE"},
			{name: "INPUT_BEFORE", value : eze$$parent.INPUT_BEFORE, type : "string", jsName : "INPUT_BEFORE"},
			{name: "INPUT_AFTER", value : eze$$parent.INPUT_AFTER, type : "string", jsName : "INPUT_AFTER"},
			{name: "VALIDATORS", value : eze$$parent.VALIDATORS, type : "dojo.widgets.DojoValidatorLib", jsName : "VALIDATORS"}
			];
		}
	}
);
