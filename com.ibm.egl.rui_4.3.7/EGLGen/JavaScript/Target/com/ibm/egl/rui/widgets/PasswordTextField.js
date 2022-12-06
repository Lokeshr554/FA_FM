// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'PasswordTextField', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/PasswordTextField.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/PasswordTextField',
	"constructor" : function()
	{
		this.maxLength = 0;
		this.text = "";
		this.readOnly = false;
		this.error = false;
		this.savedEnableSelection = false;
		this.savedBackgroundColor = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.ui.rui.RUILib();
		this.error = false;
		this.start();
	}
	
	,
	"start": function() {
		this.getOnFocusGained().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.PasswordTextField.prototype.enableSelection) );
		this.getOnFocusLost().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.PasswordTextField.prototype.disableSelection) );
		
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
			this.setClass("EglRuiPasswordTextFieldReadOnly");
		}
		else {
			this.removeAttribute("readOnly" );
			this.setBackgroundColor(this.savedBackgroundColor);
			this.setClass("EglRuiPasswordTextField");
		}
		
	}
	,
	"setText": function( text ) {
		this.setAttribute("value", {eze$$value : text, eze$$signature : "S;"} );
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = egl.convertAnyToString(this.getAttribute("value" ),false);
		return $result;
	}
	,
	"getWidgetOrientation": function() {
		var $result = "";
		$result = egl.convertAnyToString(this.getAttribute("dir" ),false);
		return $result;
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
		if ( (widgetOrientation == "RTL") ) {
			this.setAttribute("dir", {eze$$value : "rtl", eze$$signature : "S;"} );
		}
		else {
			this.setAttribute("align", {eze$$value : "ltr", eze$$signature : "S;"} );
		}
		
	}
	,
	"getMaxLength": function() {
		var $result = 0;
		$result = egl.convertAnyToInt(this.getAttribute("maxLength" ),false);
		return $result;
	}
	,
	"setMaxLength": function( maxLength ) {
		this.setAttribute("maxLength", {eze$$value : (maxLength).toString(), eze$$signature : "S;"} );
		
	}
	,
	"toString": function() {
		return "[PasswordTextField]";
	}
}
, 'input type=password'
);
