// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalDateFormatter',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/InternalDateFormatter.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalDateFormatter',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.InternalDateFormatter['$inst']){
				return egl.com.ibm.egl.rui.mvc.InternalDateFormatter['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.InternalDateFormatter['$inst']=this;
			this.util = new egl.com.ibm.egl.rui.mvc.InternalFormattingUtil();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.mvc.InternalMessageLib();
			new egl.egl.core.StrLib();
		}
		
		,
		"format": function( input, format, typeChkMsgKey ) {
			var $result = "";
			if ( (input == "") ) {
				$result = "";
				return $result;
			}
			if ( (format == "") ) {
				format = egl.egl.core.StrLib['$inst'].defaultDateFormat;
			}
			try {
				var dateInput = egl.egl.core.$DateTimeLib.currentDate();
				dateInput = egl.egl.core.$DateTimeLib.dateValue(input);
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.formatDate( dateInput, format ));
				return $result;
			}
			catch ( ezert$$1 )
			{
				{
					if (!(ezert$$1 instanceof egl.egl.core.AnyException)) {
						ezert$$1 = egl.makeExceptionFromCaughtObject(ezert$$1);
					}
					var exception = ezert$$1;
					throw (function () {
						var ezert$$2 = egl.createRuntimeException();
						egl.checkNull(ezert$$2).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(typeChkMsgKey, "CRRUI2717E", [ format ].setType( "S;" ) );
						egl.checkNull(ezert$$2).messageID = "CRRUI2717E";
						return ezert$$2;
					}).call(this);
				}
			}
			return $result;
		}
		,
		"unformat": function( input, format, typeChkMsgKey ) {
			var $result = "";
			if ( (input == "") ) {
				$result = "";
				return $result;
			}
			if ( (format == "") ) {
				format = egl.egl.core.StrLib['$inst'].defaultDateFormat;
			}
			var util = new egl.com.ibm.egl.rui.mvc.InternalFormattingUtil();
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
			egl.egl.core.StrLib['$inst'].defaultDateFormat = format;
			var isValid = false;
			isValid = util.isValidDateInput(input, format );
			if ( !(isValid) ) {
				var errorFormat = "";
				errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
				egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
				throw (function () {
					var ezert$$3 = egl.createRuntimeException();
					egl.checkNull(ezert$$3).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(typeChkMsgKey, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
					egl.checkNull(ezert$$3).messageID = "CRRUI2708E";
					return ezert$$3;
				}).call(this);
			}
			try {
				var result = egl.egl.core.$DateTimeLib.currentDate();
				result = egl.egl.core.$DateTimeLib.dateValue(input);
				egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
				$result = egl.egl.core.$StrLib.formatDate( result, egl.egl.core.$StrLib.defaultDateFormat );
				return $result;
			}
			catch ( ezert$$4 )
			{
				{
					if (!(ezert$$4 instanceof egl.egl.core.AnyException)) {
						ezert$$4 = egl.makeExceptionFromCaughtObject(ezert$$4);
					}
					var exception = ezert$$4;
					var errorFormat = "";
					errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
					egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
					throw (function () {
						var ezert$$5 = egl.createRuntimeException();
						egl.checkNull(ezert$$5).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(typeChkMsgKey, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
						egl.checkNull(ezert$$5).messageID = "CRRUI2708E";
						return ezert$$5;
					}).call(this);
				}
			}
			;
			return $result;
		}
		,
		"toString": function() {
			return "[InternalDateFormatter]";
		}
	}
);
