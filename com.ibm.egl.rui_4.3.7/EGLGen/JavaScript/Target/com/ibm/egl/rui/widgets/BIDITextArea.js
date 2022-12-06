// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'BIDITextArea', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/BIDITextArea.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/BIDITextArea',
	"constructor" : function()
	{
		this.savedBackgroundColor = "";
		this.text = "";
		this.readOnly = false;
		this.numRows = 0;
		this.numColumns = 0;
		this.reverseTextDirectionThis = "";
		this.textLayoutThis = "";
		this.widgetOrientationThis = "";
		this.handlers = null;
		
		this.buffer = (function(){ var ezert$$1= []; ezert$$1.setType( "S;" );for (var i=0; i < 0; i++) {
				ezert$$1[ i ] = "";
			}
			// no max size set for this array
		return ezert$$1;})();
		
		this.redraw = false;
		this.savedEnableSelection = false;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.ui.rui.RUILib();
		this.reverseTextDirectionThis = "No";
		this.textLayoutThis = "Logical";
		this.widgetOrientationThis = "";
		this.handlers = null;
		this.redraw = true;
		this.start();
	}
	
	,
	"start": function() {
		this.getOnFocusGained().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.BIDITextArea.prototype.enableSelection) );
		this.getOnFocusLost().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.BIDITextArea.prototype.disableSelection) );
		
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
	"append": function( text ) {
		if ( this.redraw ) {
			this.setText((this.getText() + text) );
		}
		else {
			this.buffer.appendElement( text );
		}
		
	}
	,
	"setRedraw": function( draw ) {
		this.redraw = draw;
		var bufSize = 0;
		bufSize = this.buffer.getSize();
		if ( (this.redraw && (bufSize > 0)) ) {
			var s = "";
			{
				var i = 0;
				i = 1;
				for ( ; (i <= bufSize); i = (i + 1) )
				{
					s = (s + (egl.checkNull(this.buffer)[this.buffer.checkIndex((i)-1)] + "\n"));
				}
			}
			this.append(s );
			this.buffer = (function(){ var ezert$$2= []; ezert$$2.setType( "S;" );for (var i=0; i < 0; i++) {
					ezert$$2[ i ] = "";
				}
				// no max size set for this array
			return ezert$$2;})();
		}
		
	}
	,
	"getNumRows": function() {
		var $result = 0;
		this.numRows = egl.convertAnyToInt(this.getAttribute("rows" ),false);
		$result = this.numRows;
		return $result;
	}
	,
	"setNumRows": function( rows ) {
		this.numRows = rows;
		this.setAttribute("rows", {eze$$value : rows, eze$$signature : "I;"} );
		
	}
	,
	"getNumColumns": function() {
		var $result = 0;
		this.numColumns = egl.convertAnyToInt(this.getAttribute("cols" ),false);
		$result = this.numColumns;
		return $result;
	}
	,
	"setNumColumns": function( cols ) {
		this.numColumns = cols;
		this.setAttribute("cols", {eze$$value : cols, eze$$signature : "I;"} );
		
	}
	,
	"setText": function( txt ) {
		this.text = txt;
		this.setAttribute("value", {eze$$value : txt, eze$$signature : "S;"} );
		this.reverseText();
		
	}
	,
	"getText": function() {
		var $result = "";
		this.reverseText();
		this.text = egl.convertAnyToString(this.getAttribute("value" ),false);
		$result = this.text;
		return $result;
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
		if ( ro ) {
			this.setAttribute("readOnly", {eze$$value : "true", eze$$signature : "S;"} );
			this.savedBackgroundColor = this.getBackgroundColor();
			this.setBackgroundColor(String('',null));
			this.setClass("EglRuiBIDITextAreaReadOnly");
		}
		else {
			this.setAttribute("readOnly", {eze$$value : "", eze$$signature : "S;"} );
			this.setBackgroundColor(this.savedBackgroundColor);
			this.setClass("EglRuiBIDITextArea");
		}
		
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
		return "[BIDITextArea]";
	}
}
, 'textarea'
);
