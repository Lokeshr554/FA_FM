// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'BIDITextField', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/BIDITextField.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/BIDITextField',
	"constructor" : function()
	{
		this.text = "";
		this.readOnly = false;
		this.reverseTextDirectionThis = "";
		this.widgetOrientationThis = "";
		this.textLayoutThis = "";
		this.handlers = null;
		
		this.error = false;
		this.savedBackgroundColor = "";
		this.savedEnableSelection = false;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.ui.rui.RUILib();
		this.reverseTextDirectionThis = "No";
		this.widgetOrientationThis = "";
		this.textLayoutThis = "Logical";
		this.handlers = null;
		this.error = false;
		this.start();
	}
	
	,
	"start": function() {
		this.getOnFocusGained().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.BIDITextField.prototype.enableSelection) );
		this.getOnFocusLost().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.BIDITextField.prototype.disableSelection) );
		this.setBorderWidth(1);
		this.setBorderStyle("solid");
		this.setBorderColor("#7f9db9");
		
	}
	,
	"enableSelection": function( e ) {
		this.savedEnableSelection = egl.egl.ui.rui.RUILib['$inst'].getTextSelectionEnabled();
		egl.egl.ui.rui.RUILib['$inst'].setTextSelectionEnabled(true );
		
	}
	,
	"disableSelection": function( e ) {
		egl.egl.ui.rui.RUILib['$inst'].setTextSelectionEnabled(this.savedEnableSelection );
		
	}
	,
	"getReadOnly": function() {
		var $result = false;
		$result = this.readOnly;
		return $result;
	}
	,
	"setReadOnly": function( ro ) {
		this.readOnly = ro;
		if ( this.readOnly ) {
			this.setAttribute("readOnly", {eze$$value : "true", eze$$signature : "S;"} );
			this.savedBackgroundColor = this.getBackgroundColor();
			this.setBackgroundColor(String('',null));
			this.setClass("EglRuiBIDITextFieldReadOnly");
		}
		else {
			this.setAttribute("readOnly", {eze$$value : "", eze$$signature : "S;"} );
			this.setBackgroundColor(this.savedBackgroundColor);
			this.setClass("EglRuiBIDITextField");
		}
		
	}
	,
	"setText": function( txt ) {
		this.text = txt;
		this.setAttribute("value", {eze$$value : txt, eze$$signature : "S;"} );
		this.setBidiStyles();
		this.reverseText();
		
	}
	,
	"getText": function() {
		var $result = "";
		if ( (this.textLayoutThis == "Visual") ) {
			this.cleanBiDiMarkers();
		}
		this.reverseText();
		this.text = egl.convertAnyToString(this.getAttribute("value" ),false);
		$result = this.text;
		return $result;
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
		this.reverseTextDirectionThis = reverseTextDirection;
		this.reverseText();
		
	}
	,
	"getReverseTextDirection": function() {
		var $result = "";
		$result = this.reverseTextDirectionThis;
		return $result;
	}
	,
	"getWidgetOrientation": function() {
		var $result = "";
		$result = this.widgetOrientationThis;
		return $result;
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
		this.widgetOrientationThis = widgetOrientation;
		this.setBidiStyles();
		
	}
	,
	"setTextLayout": function( textLayout ) {
		this.textLayoutThis = textLayout;
		this.setBidiStyles();
		if ( (this.handlers == null) ) {
			this.handlers = new egl.com.ibm.egl.rui.widgets.VisualHandlers();
		}
		this.handlers.AttachHandlers( this );
		this.reverseText();
		
	}
	,
	"getTextLayout": function() {
		var $result = "";
		$result = this.textLayoutThis;
		return $result;
	}
	,
	"setBidiStyles": function() {
		var isVisual = false;
		isVisual = (this.textLayoutThis == "Visual");
		var isWidgetOrientationRTL = false;
		isWidgetOrientationRTL = (this.widgetOrientationThis == "RTL");
		this.setBiDiStyles(isVisual, isWidgetOrientationRTL );
		
	}
	,
	"reverseText": function() {
		var isVisual = false;
		isVisual = (this.textLayoutThis == "Visual");
		var isReverseDirection = false;
		isReverseDirection = (this.reverseTextDirectionThis == "Yes");
		if ( (isVisual && isReverseDirection) ) {
			if ( (this.handlers == null) ) {
				this.handlers = new egl.com.ibm.egl.rui.widgets.VisualHandlers();
			}
			this.handlers.ReverseText( this );
		}
		
	}
	,
	"toString": function() {
		return "[BIDITextField]";
	}
}
, 'input'
);
