// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalCharFormatter',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/InternalCharFormatter.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalCharFormatter',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.InternalCharFormatter['$inst']){
				return egl.com.ibm.egl.rui.mvc.InternalCharFormatter['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.InternalCharFormatter['$inst']=this;
			this.util = new egl.com.ibm.egl.rui.mvc.InternalFormattingUtil();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.mvc.InternalMessageLib();
			new egl.egl.core.StrLib();
		}
		
		,
		"format": function( input, dateFormat, timeFormat, isUppercase, isLowercase, typeChkMsgKey ) {
			var $result = "";
			if ( (input == null) ) {
				$result = "";
				return $result;
			}
			if ( (dateFormat != "") ) {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(this.asDate((function(x){ return x != null ? ((x).toString()) : ""; })(input), dateFormat, typeChkMsgKey ));
				return $result;
			}
			if ( (timeFormat != "") ) {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(this.asTime((function(x){ return x != null ? ((x).toString()) : ""; })(input), timeFormat, typeChkMsgKey ));
				return $result;
			}
			if ( isUppercase ) {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.upperCase( input));
				return $result;
			}
			if ( isLowercase ) {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.lowerCase( input));
				return $result;
			}
			$result = (function(x){ return x != null ? ((x).toString()) : ""; })(input);
			return $result;
		}
		,
		"asDate": function( input, format, msg ) {
			var $result = null;
			if ( (input == "") ) {
				$result = "";
				return $result;
			}
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
			try {
				egl.egl.core.StrLib['$inst'].defaultDateFormat = this.util.getLongGregorianDateMask();
				var sizeDifference = 0;
				sizeDifference = (egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultDateFormat)) - egl.egl.core.$StrLib.textLen( input));
				if ( (sizeDifference < 0) ) {
					input = input.substring( 1-1,egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultDateFormat)));
				}
				else {
					if ( (sizeDifference != 0) ) {
						{
							var i = 0;
							i = 1;
							for ( ; (i <= sizeDifference); i = (i + 1) )
							{
								input = (input + "0");
							}
						}
					}
				}
				var d = egl.egl.core.$DateTimeLib.currentDate();
				d = egl.egl.core.$DateTimeLib.dateValue(input);
				var result = null;
				result = egl.egl.core.$StrLib.formatDate( d, format );
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
						egl.checkNull(ezert$$2).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msg, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
						egl.checkNull(ezert$$2).messageID = "CRRUI2708E";
						return ezert$$2;
					}).call(this);
				}
			}
			return $result;
		}
		,
		"asTime": function( input, format, msg ) {
			var $result = null;
			if ( (input == "") ) {
				$result = "";
				return $result;
			}
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
			try {
				egl.egl.core.StrLib['$inst'].defaultTimeFormat = "HH:mm:ss";
				var sizeDifference = 0;
				sizeDifference = (egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultTimeFormat)) - egl.egl.core.$StrLib.textLen( input));
				if ( (sizeDifference < 0) ) {
					input = input.substring( 1-1,egl.egl.core.$StrLib.textLen( (egl.egl.core.StrLib['$inst'].defaultTimeFormat)));
				}
				else {
					if ( (sizeDifference != 0) ) {
						{
							var i = 0;
							i = 1;
							for ( ; (i <= sizeDifference); i = (i + 1) )
							{
								input = (input + "0");
							}
						}
					}
				}
				var t = egl.egl.core.$DateTimeLib.currentTime();
				t = egl.egl.core.$DateTimeLib.timeValue(input);
				var result = null;
				result = egl.egl.core.$StrLib.formatTime( t, format );
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
						egl.checkNull(ezert$$4).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msg, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
						egl.checkNull(ezert$$4).messageID = "CRRUI2708E";
						return ezert$$4;
					}).call(this);
				}
			}
			return $result;
		}
		,
		"unformat": function( input, dateFormat, timeFormat, isUppercase, isLowercase, typeChkMsgKey ) {
			var $result = "";
			input = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.clip( input, 0));
			if ( (dateFormat != "") ) {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(this.fromDate(input, dateFormat, typeChkMsgKey ));
				return $result;
			}
			if ( (timeFormat != "") ) {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(this.fromTime(input, timeFormat, typeChkMsgKey ));
				return $result;
			}
			if ( isUppercase ) {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.upperCase( input));
				return $result;
			}
			if ( isLowercase ) {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.lowerCase( input));
				return $result;
			}
			$result = input;
			return $result;
		}
		,
		"fromDate": function( input, format, msg ) {
			var $result = null;
			if ( (input == "") ) {
				$result = "";
				return $result;
			}
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
			try {
				egl.egl.core.StrLib['$inst'].defaultDateFormat = format;
				var d = egl.egl.core.$DateTimeLib.currentDate();
				d = egl.egl.core.$DateTimeLib.dateValue(input);
				var result = null;
				result = egl.egl.core.$StrLib.formatDate( d, this.util.getLongGregorianDateMask() );
				egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
				$result = result;
				return $result;
			}
			catch ( ezert$$5 )
			{
				{
					if (!(ezert$$5 instanceof egl.egl.core.AnyException)) {
						ezert$$5 = egl.makeExceptionFromCaughtObject(ezert$$5);
					}
					var exception = ezert$$5;
					var errorFormat = "";
					errorFormat = egl.egl.core.StrLib['$inst'].defaultDateFormat;
					egl.egl.core.StrLib['$inst'].defaultDateFormat = savedFormat;
					throw (function () {
						var ezert$$6 = egl.createRuntimeException();
						egl.checkNull(ezert$$6).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msg, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
						egl.checkNull(ezert$$6).messageID = "CRRUI2708E";
						return ezert$$6;
					}).call(this);
				}
			}
			return $result;
		}
		,
		"fromTime": function( input, format, msg ) {
			var $result = null;
			if ( (input == "") ) {
				$result = "";
				return $result;
			}
			var savedFormat = "";
			savedFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
			try {
				egl.egl.core.StrLib['$inst'].defaultTimeFormat = format;
				var t = egl.egl.core.$DateTimeLib.currentTime();
				t = egl.egl.core.$DateTimeLib.timeValue(input);
				var result = null;
				result = egl.egl.core.$StrLib.formatTime( t, "HH:mm:ss" );
				egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
				$result = result;
				return $result;
			}
			catch ( ezert$$7 )
			{
				{
					if (!(ezert$$7 instanceof egl.egl.core.AnyException)) {
						ezert$$7 = egl.makeExceptionFromCaughtObject(ezert$$7);
					}
					var exception = ezert$$7;
					var errorFormat = "";
					errorFormat = egl.egl.core.StrLib['$inst'].defaultTimeFormat;
					egl.egl.core.StrLib['$inst'].defaultTimeFormat = savedFormat;
					throw (function () {
						var ezert$$8 = egl.createRuntimeException();
						egl.checkNull(ezert$$8).message = egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'].getRuntimeErrorMessage(msg, "CRRUI2708E", [ errorFormat ].setType( "S;" ) );
						egl.checkNull(ezert$$8).messageID = "CRRUI2708E";
						return ezert$$8;
					}).call(this);
				}
			}
			return $result;
		}
		,
		"toString": function() {
			return "[InternalCharFormatter]";
		}
	}
);
