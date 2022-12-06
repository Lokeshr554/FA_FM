// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'DataGridFormatters',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/DataGridFormatters.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridFormatters',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.DataGridFormatters['$inst']){
				return egl.com.ibm.egl.rui.widgets.DataGridFormatters['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.DataGridFormatters['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.StrLib();
		}
		
		,
		"dollarSigns": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
			value = ("$" + value);
			eze$$value$func_.call(eze$$caller,value);
			
		}
		,
		"coloredNumbers": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
			if ( (egl.convertStringToFloat(value) < 0) ) {
				ezekw$$class = (ezekw$$class + " EglRuiDataGridCellNegative");
				eze$$ezekw$$class$func_.call(eze$$caller,ezekw$$class);
			}
			else {
				if ( (egl.convertStringToFloat(value) == 0) ) {
					ezekw$$class = (ezekw$$class + " EglRuiDataGridCellNull");
					eze$$ezekw$$class$func_.call(eze$$caller,ezekw$$class);
				}
				else {
					ezekw$$class = (ezekw$$class + " EglRuiDataGridCellPositive");
					eze$$ezekw$$class$func_.call(eze$$caller,ezekw$$class);
				}
			}
			
		}
		,
		"addCommas": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
			if ( (value == "") ) {
				return;
			}
			var len = 0;
			len = egl.egl.core.$StrLib.textLen( value);
			{
				var i = 0;
				i = 1;
				for ( ; (i <= len); i = (i + 1) )
				{
					var s = "";
					s = value.substring( i-1,i);
					if ( ((((s < "0") || (s > "9")) && (s != ".")) && ((i != 1) || (s != "-"))) ) {
						return;
					}
				}
			}
			var preDecimal = "";
			var postDecimal = "";
			var decimalIndex = 0;
			decimalIndex = egl.egl.core.$StrLib.indexOf( value, ("."));
			var startIndex = 0;
			startIndex = 1;
			if ( (value.charAt( 1-1 ) == "-") ) {
				startIndex = 2;
			}
			if ( (decimalIndex > 1) ) {
				preDecimal = value.substring( 1-1,(decimalIndex - 1));
				if ( (egl.egl.core.$StrLib.textLen( value) > decimalIndex) ) {
					postDecimal = value.substring( (decimalIndex + 1)-1,egl.egl.core.$StrLib.textLen( value));
				}
			}
			else {
				if ( (decimalIndex == 1) ) {
					if ( (egl.egl.core.$StrLib.textLen( value) > 1) ) {
						postDecimal = value.substring( 2-1,egl.egl.core.$StrLib.textLen( value));
					}
				}
				else {
					preDecimal = value;
				}
			}
			var separatorChar = "";
			separatorChar = ",";
			{
				var i = 0;
				i = (egl.egl.core.$StrLib.textLen( preDecimal) - 3);
				for ( ; (i >= startIndex); i = (i - 3) )
				{
					preDecimal = ((preDecimal.substring( 1-1,i) + separatorChar) + preDecimal.substring( (i + 1)-1,egl.egl.core.$StrLib.textLen( preDecimal)));
				}
			}
			value = ((preDecimal + ".") + postDecimal);
			eze$$value$func_.call(eze$$caller,value);
			
		}
		,
		"percentage": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
			value = (value + "%");
			eze$$value$func_.call(eze$$caller,value);
			
		}
		,
		"fontWeightItalic": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
			value = (("<i>" + value) + "</i>");
			eze$$value$func_.call(eze$$caller,value);
			
		}
		,
		"fontWeightBold": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
			value = (("<b>" + value) + "</b>");
			eze$$value$func_.call(eze$$caller,value);
			
		}
		,
		"fontWeightUnderlined": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
			value = (("<u>" + value) + "</u>");
			eze$$value$func_.call(eze$$caller,value);
			
		}
		,
		"fontWeightBoldItalic": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
			value = (("<i><b>" + value) + "</b></i>");
			eze$$value$func_.call(eze$$caller,value);
			
		}
		,
		"makeLink": function( ezekw$$class, eze$$ezekw$$class$func_, value, eze$$value$func_, rowData, eze$$caller ) {
			ezekw$$class = (ezekw$$class + " EglRuiDataGridCellLink");
			eze$$ezekw$$class$func_.call(eze$$caller,ezekw$$class);
			value = (("<span onClick='egl.com.ibm.egl.rui.infobus.InfoBus.$inst.publish(\"grid.link\",egl.createWidget(this.parentNode.parentNode))'>" + value) + "</span>");
			eze$$value$func_.call(eze$$caller,value);
			
		}
		,
		"toString": function() {
			return "[DataGridFormatters]";
		}
	}
);
