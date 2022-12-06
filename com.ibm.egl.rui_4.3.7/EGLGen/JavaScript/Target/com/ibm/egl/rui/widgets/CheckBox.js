// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'CheckBox', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/CheckBox.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/CheckBox',
	"constructor" : function()
	{
		this.text = "";
		this.selected = false;
		this.check = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "check");
		
		this.textspan = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "textspan");
		
		this.span = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "span");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.ui.rui.RUILib();
		new egl.egl.core.StrLib();
		this.targetWidget = this.span;
		this.check.setTagName( "input type=checkbox" );
		this.check.getOnKeyUp().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.CheckBox.prototype.key) );
		this.check.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.CheckBox.prototype.click) );
		this.textspan.setTagName( "span" );
		this.span.setTagName( "span" );
		this.span.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.CheckBox.prototype.setFocus) );
		this.span.setChildren( [ this.check, this.textspan ] );
	}
	
	,
	"setText": function( textIn ) {
		this.text = textIn;
		this.textspan.setInnerHTML( textIn );
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = this.text;
		return $result;
	}
	,
	"setFont": function( font, eze$$font$func_, eze$$caller ) {
		this.textspan.setFont( font );
		
	}
	,
	"setDisabled": function( disabled ) {
		this.check.setDisabled( disabled );
		this.span.setDisabled( disabled );
		
	}
	,
	"doSetSelected": function() {
		var browser = "";
		browser = egl.egl.ui.rui.RUILib['$inst'].getUserAgent();
		if ( (egl.egl.core.$StrLib.indexOf( browser, ("MSIE 7.0")) != 0) ) {
			this.check.setAttribute("checked", "true" );
		}
		else {
			this.check.setAttribute("checked", 1 );
		}
		
	}
	,
	"doSetUnSelected": function() {
		this.check.setAttribute("checked", "" );
		this.check.removeAttribute("checked" );
		
	}
	,
	"setSelected": function( selected ) {
		if ( !(selected) ) {
			this.doSetUnSelected();
			(function () {
				var ezert$$1 = new egl.egl.javascript.Job();
				ezert$$1.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.CheckBox.prototype.doSetUnSelected) );
				return ezert$$1;
			}).call(this).schedule();
		}
		else {
			this.doSetSelected();
			(function () {
				var ezert$$2 = new egl.egl.javascript.Job();
				ezert$$2.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.CheckBox.prototype.doSetSelected) );
				return ezert$$2;
			}).call(this).schedule();
		}
		
	}
	,
	"getSelected": function() {
		var $result = false;
		var browser = "";
		browser = egl.egl.ui.rui.RUILib['$inst'].getUserAgent();
		if ( (egl.egl.core.$StrLib.indexOf( browser, ("MSIE 7.0")) != 0) ) {
			$result = egl.convertAnyToBoolean(egl.boxAny(this.check.getAttribute("checked" )),false);
			return $result;
		}
		else {
			$result = (egl.convertAnyToString(egl.boxAny(this.check.getAttribute("checked" )),false) == "true");
			return $result;
		}
		return $result;
	}
	,
	"getWidgetOrientation": function() {
		var $result = "";
		if ( (egl.convertAnyToString(egl.boxAny(this.span.getAttribute("dir" )),false) == "rtl") ) {
			$result = "RTL";
			return $result;
		}
		else {
			if ( (egl.convertAnyToString(egl.boxAny(this.span.getAttribute("dir" )),false) == "ltr") ) {
				$result = "LTR";
				return $result;
			}
			else {
				$result = "";
				return $result;
			}
		}
		return $result;
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
		if ( (widgetOrientation == "RTL") ) {
			this.span.setAttribute("dir", "rtl" );
			this.span.setStyle( "text-align: right;" );
			this.textspan.setAttribute("dir", "rtl" );
		}
		else {
			this.span.setAttribute("dir", "ltr" );
			this.span.setStyle( "text-align: left;" );
			this.textspan.setAttribute("dir", "ltr" );
		}
		this.span.setDisplayStyle( "inline-block" );
		
	}
	,
	"setTextLayout": function( textLayout ) {
		this.textspan.setTextLayout( textLayout );
		
	}
	,
	"getTextLayout": function() {
		var $result = "";
		$result = this.textspan.getTextLayout();
		return $result;
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
		this.textspan.setReverseTextDirection( reverseTextDirection );
		
	}
	,
	"getReverseTextDirection": function() {
		var $result = "";
		$result = this.textspan.getReverseTextDirection();
		return $result;
	}
	,
	"setFocus": function( e ) {
		this.check.focus();
		
	}
	,
	"click": function( e ) {
		var browser = "";
		browser = egl.egl.ui.rui.RUILib['$inst'].getUserAgent();
		if ( (egl.egl.core.$StrLib.indexOf( browser, ("IE")) != 0) ) {
			e.widget =  this;
			{
				var n = 0;
				n = 1;
				for ( ; (n <= this.getOnChange().getSize()); n = (n + 1) )
				{
					egl.checkNull(this.getOnChange())[this.getOnChange().checkIndex((n)-1)](e );
				}
			}
			{
				var n = 0;
				n = 1;
				for ( ; (n <= this.getOnClick().getSize()); n = (n + 1) )
				{
					egl.checkNull(this.getOnClick())[this.getOnClick().checkIndex((n)-1)](e );
				}
			}
		}
		
	}
	,
	"key": function( e ) {
		if ( (e.ch == 32) ) {
			var browser = "";
			browser = egl.egl.ui.rui.RUILib['$inst'].getUserAgent();
			if ( (egl.egl.core.$StrLib.indexOf( browser, ("IE")) != 0) ) {
				this.setSelected(!(this.getSelected()) );
			}
			e.widget =  this;
			{
				var n = 0;
				n = 1;
				for ( ; (n <= this.getOnChange().getSize()); n = (n + 1) )
				{
					egl.checkNull(this.getOnChange())[this.getOnChange().checkIndex((n)-1)](e );
				}
			}
		}
		
	}
	,
	"setValueAsText": function( value ) {
		if ( (egl.nullableCompare("TRUE",egl.egl.core.$StrLib.upperCase( value), 1) == 0) ) {
			this.setSelected(true );
		}
		else {
			this.setSelected(false );
		}
		
	}
	,
	"getValueAsText": function() {
		var $result = "";
		if ( this.getSelected() ) {
			$result = "TRUE";
			return $result;
		}
		else {
			$result = "FALSE";
			return $result;
		}
		return $result;
	}
	,
	"toString": function() {
		return "[CheckBox]";
	}
}
);
