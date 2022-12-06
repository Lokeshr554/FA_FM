// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalValidators',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/InternalValidators.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalValidators',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.InternalValidators['$inst']){
				return egl.com.ibm.egl.rui.mvc.InternalValidators['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.InternalValidators['$inst']=this;
			this.util = new egl.com.ibm.egl.rui.mvc.InternalFormattingUtil();
			
			this.validHexDigits = "";
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.StrLib();
			new egl.egl.core.SysLib();
			new egl.egl.core.MathLib();
			this.validHexDigits = "0123456789abcdefABCDEF";
		}
		
		,
		"isNotEmpty": function( s, message ) {
			var $result = null;
			if ( (s != "") ) {
				$result = null;
				return $result;
			}
			else {
				$result = this.getReturnMessage(message, "CRRUI2700E", null );
				return $result;
			}
			return $result;
		}
		,
		"isDecimalDigits": function( text, message ) {
			var $result = null;
			var len = 0;
			len = egl.egl.core.$StrLib.textLen( text);
			var decimalSeparator = "";
			decimalSeparator = this.util.getDecimalSeparator();
			var groupingSeparator = "";
			groupingSeparator = this.util.getGroupingSeparator();
			{
				var i = 0;
				i = 1;
				for ( ; (i <= len); i = (i + 1) )
				{
					var s = "";
					s = text.substring( i-1,i);
					if ( (((((s < "0") || (s > "9")) && (s != "-")) && (s != decimalSeparator)) && (s != groupingSeparator)) ) {
						$result = this.getReturnMessage(message, "CRRUI2702E", null );
						return $result;
					}
				}
			}
			$result = null;
			return $result;
		}
		,
		"isHexDigits": function( s, message ) {
			var $result = null;
			var strLen = 0;
			strLen = egl.egl.core.$StrLib.textLen( s);
			{
				var i = 0;
				i = 1;
				for ( ; (i <= strLen); i = (i + 1) )
				{
					if ( (egl.egl.core.$StrLib.indexOf( this.validHexDigits, (s.substring( i-1,i))) == 0) ) {
						$result = this.getReturnMessage(message, "CRRUI2712E", null );
						return $result;
					}
				}
			}
			$result = null;
			return $result;
		}
		,
		"checkMinimumInput": function( s, minLength, message ) {
			var $result = null;
			if ( (egl.egl.core.$StrLib.textLen( s) >= minLength) ) {
				$result = null;
				return $result;
			}
			else {
				$result = this.getReturnMessage(message, "CRRUI2705E", null );
				return $result;
			}
			return $result;
		}
		,
		"checkValidValues": function( s, validValues, message ) {
			var $result = null;
			var input = "";
			input = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.clip( s, 0));
			var length = 0;
			length = validValues.getSize();
			if ( (egl.isa(egl.boxAny(egl.checkNull(validValues)[validValues.checkIndex((1)-1)][egl.checkNull(validValues)[validValues.checkIndex((1)-1)].checkIndex((1)-1)]), "?S;") || egl.isa(egl.boxAny(egl.checkNull(validValues)[validValues.checkIndex((1)-1)][egl.checkNull(validValues)[validValues.checkIndex((1)-1)].checkIndex((1)-1)]), "S;")) ) {
				{
					var i = 0;
					i = 1;
					for ( ; (i <= length); i = (i + 1) )
					{
						if ( (egl.checkNull(validValues)[validValues.checkIndex((i)-1)].getSize() == 1) ) {
							if ( (egl.nullableCompare(input,egl.egl.core.$StrLib.clip( (egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues)[validValues.checkIndex((i)-1)][egl.checkNull(validValues)[validValues.checkIndex((i)-1)].checkIndex((1)-1)]),true)), 0), 1) == 0) ) {
								$result = null;
								return $result;
							}
						}
						else {
							if ( (egl.nullableCompare(input,egl.egl.core.$StrLib.clip( (egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues)[validValues.checkIndex((i)-1)][egl.checkNull(validValues)[validValues.checkIndex((i)-1)].checkIndex((1)-1)]),true)), 0), -1) >= 0) ) {
								var upper = "";
								upper = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.clip( (egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues)[validValues.checkIndex((i)-1)][egl.checkNull(validValues)[validValues.checkIndex((i)-1)].checkIndex((2)-1)]),true)), 0));
								if ( (s <= upper) ) {
									$result = null;
									return $result;
								}
								var len = 0;
								len = egl.egl.core.$StrLib.textLen( upper);
								if ( (egl.egl.core.$StrLib.textLen( input) > len) ) {
									if ( (input.substring( 1-1,len) <= upper) ) {
										$result = null;
										return $result;
									}
								}
							}
						}
					}
				}
			}
			else {
				{
					var i = 0;
					i = 1;
					for ( ; (i <= length); i = (i + 1) )
					{
						if ( (egl.checkNull(validValues)[validValues.checkIndex((i)-1)].getSize() == 1) ) {
							if ( (egl.nullableCompare(egl.egl.core.$MathLib.stringAsDecimal( input ),egl.egl.core.$MathLib.stringAsDecimal( egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues)[validValues.checkIndex((i)-1)][egl.checkNull(validValues)[validValues.checkIndex((i)-1)].checkIndex((1)-1)]),false) ), 1) == 0) ) {
								$result = null;
								return $result;
							}
						}
						else {
							if ( ((egl.nullableCompare(egl.egl.core.$MathLib.stringAsDecimal( input ),egl.egl.core.$MathLib.stringAsDecimal( egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues)[validValues.checkIndex((i)-1)][egl.checkNull(validValues)[validValues.checkIndex((i)-1)].checkIndex((1)-1)]),false) ), -1) >= 0) && (egl.nullableCompare(egl.egl.core.$MathLib.stringAsDecimal( input ),egl.egl.core.$MathLib.stringAsDecimal( egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues)[validValues.checkIndex((i)-1)][egl.checkNull(validValues)[validValues.checkIndex((i)-1)].checkIndex((2)-1)]),false) ), 1) <= 0)) ) {
								$result = null;
								return $result;
							}
						}
					}
				}
			}
			$result = this.getReturnMessage(message, "CRRUI2716E", null );
			return $result;
		}
		,
		"getReturnMessage": function( message, defaultKey, inserts ) {
			var $result = "";
			if ( !(((message == null) || (egl.nullableCompare(message,"", 1) == 0))) ) {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(message);
				return $result;
			}
			else {
				$result = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.getRuntimeMessage( defaultKey, inserts ));
				return $result;
			}
			return $result;
		}
		,
		"toString": function() {
			return "[InternalValidators]";
		}
	}
);
