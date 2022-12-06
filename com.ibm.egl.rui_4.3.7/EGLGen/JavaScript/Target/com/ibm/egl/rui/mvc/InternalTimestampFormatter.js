// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalTimestampFormatter',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/InternalTimestampFormatter.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalTimestampFormatter',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter['$inst']){
				return egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter['$inst']=this;
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
				format = egl.egl.core.StrLib['$inst'].defaultTimeStampFormat;
				if ( (format == "") ) {
					format = "yyyy-MM-dd HH:mm:ss";
				}
			}
			try {
				var timestampInput = egl.egl.core.$DateTimeLib.currentTimeStamp( "yyyyMMddHHmmss" );
				timestampInput = egl.egl.core.$DateTimeLib.timeStampValueWithPattern(input, "yyyyMMddHHmmss");
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.formatTimeStamp( timestampInput, format ));
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
				format = egl.egl.core.StrLib['$inst'].defaultTimeStampFormat;
				if ( (format == "") ) {
					format = "yyyy-MM-dd HH:mm:ss";
				}
			}
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultTimeStampFormat;
			try {
				egl.egl.core.StrLib['$inst'].defaultTimeStampFormat = format;
				var result = egl.egl.core.$DateTimeLib.currentTimeStamp( "yyyyMMddHHmmss" );
				result = egl.egl.core.$DateTimeLib.timeStampValueWithPattern(input, "yyyyMMddHHmmss");
				egl.egl.core.StrLib['$inst'].defaultTimeStampFormat = savedFormat;
				$result = egl.egl.core.$StrLib.formatTimeStamp( result, (egl.egl.core.$StrLib.defaultTimeStampFormat == "") ? egl.formatTimeStampPattern("yyyyMMddHHmmss") : egl.egl.core.$StrLib.defaultTimeStampFormat );
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
					errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
					egl.egl.core.StrLib['$inst'].defaultTimeStampFormat = savedFormat;
					throw (function () {
						var ezert$$4 = egl.createRuntimeException();
						egl.checkNull(ezert$$4).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(typeChkMsgKey, "CRRUI2717E", [ errorFormat ].setType( "S;" ) );
						egl.checkNull(ezert$$4).messageID = "CRRUI2717E";
						return ezert$$4;
					}).call(this);
				}
			}
			return $result;
		}
		,
		"toString": function() {
			return "[InternalTimestampFormatter]";
		}
	}
);
