// Generated at Tue Dec 06 11:54:40 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('dojo.widgets', 'DojoCheckBox', {
	'eze$$fileName': '/com.ibm.egl.rui.dojo.widgets_2.3.3/EGLSource/dojo/widgets/DojoCheckBox.egl',
	'eze$$runtimePropertiesFile': 'dojo/widgets/DojoCheckBox',
	"constructor" : function()
	{
		this.text = "";
		this.selected = false;
		this.onWidgetLoad = (function(){ var ezert$$1= []; ezert$$1.setType( egl.egl.jsrt.Delegate );// no max size set for this array
		return ezert$$1;})();
		
		this._onChange = null;
		
		this.checkBox = new egl.dojo.widgets.DojoCheckBoxWithoutLabel();
		egl.addEmbeddedWidget(this, "checkBox");
		
		this.checkBoxLabel = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "checkBoxLabel");
		
		this.div = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "div");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.core.StrLib();
		this.targetWidget = this.div;
		this._onChange = [  ].setType( "Tegl/ui/rui/eventhandler;" );
		this.checkBox.getOnChange().appendElement( new egl.egl.jsrt.Delegate(this, egl.dojo.widgets.DojoCheckBox.prototype.handleOnChange) );
		this.checkBox.getOnFocusGained().appendElement( new egl.egl.jsrt.Delegate(this, egl.dojo.widgets.DojoCheckBox.prototype.handleOnFocusGained) );
		this.checkBox.getOnFocusLost().appendElement( new egl.egl.jsrt.Delegate(this, egl.dojo.widgets.DojoCheckBox.prototype.handleOnFocusLost) );
		this.checkBox.getOnWidgetLoad().appendElement( new egl.egl.jsrt.Delegate(this, egl.dojo.widgets.DojoCheckBox.prototype.handleOnWidgetLoad) );
		this.checkBoxLabel.setTagName( "label" );
		this.div.setTagName( "div" );
		this.init();
	}
	
	,
	"setTextLayout": function( textLayout ) {
		if ( (textLayout == "Visual") ) {
			this.checkBoxLabel.setBiDiMarkers(true, false );
		}
		
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
		if ( (widgetOrientation == "RTL") ) {
			this.div.setAttribute("dir", "rtl" );
			this.checkBox.setWidgetOrientation( widgetOrientation );
		}
		
	}
	,
	"getOnWidgetLoad": function() {
		var $result = null;
		$result = this.onWidgetLoad;
		return $result;
	}
	,
	"setDisabled": function( disabled ) {
		this.checkBox.setDisabled( disabled );
		this.div.setDisabled( disabled );
		
	}
	,
	"init": function() {
		this.div.setChildren( [ this.checkBox, this.checkBoxLabel ] );
		
	}
	,
	"getOnChange": function() {
		var $result = null;
		if ( (this._onChange != null) ) {
			$result = this._onChange;
			return $result;
		}
		return $result;
	}
	,
	"handleOnChange": function( e ) {
		e.widget =  this;
		var listeners = null;
		listeners = this.getOnChange();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= listeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(listeners)[listeners.checkIndex((n)-1)](e );
			}
		}
		
	}
	,
	"handleOnFocusGained": function( e ) {
		e.widget =  this;
		var listeners = null;
		listeners = this.getOnFocusGained();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= listeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(listeners)[listeners.checkIndex((n)-1)](e );
			}
		}
		
	}
	,
	"handleOnFocusLost": function( e ) {
		e.widget =  this;
		var listeners = null;
		listeners = this.getOnFocusLost();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= listeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(listeners)[listeners.checkIndex((n)-1)](e );
			}
		}
		
	}
	,
	"handleOnKeyDown": function( e ) {
		e.widget =  this;
		var listeners = null;
		listeners = this.getOnKeyDown();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= listeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(listeners)[listeners.checkIndex((n)-1)](e );
			}
		}
		
	}
	,
	"handleOnKeyPress": function( e ) {
		e.widget =  this;
		var listeners = null;
		listeners = this.getOnKeyPress();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= listeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(listeners)[listeners.checkIndex((n)-1)](e );
			}
		}
		
	}
	,
	"handleOnKeyUp": function( e ) {
		e.widget =  this;
		var listeners = null;
		listeners = this.getOnKeyUp();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= listeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(listeners)[listeners.checkIndex((n)-1)](e );
			}
		}
		
	}
	,
	"handleOnWidgetLoad": function( e ) {
		e.widget =  this;
		var listeners = null;
		listeners = this.onWidgetLoad;
		{
			var n = 0;
			n = 1;
			for ( ; (n <= listeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(listeners)[listeners.checkIndex((n)-1)](e );
			}
		}
		
	}
	,
	"setText": function( text ) {
		this.checkBoxLabel.setInnerHTML( text );
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = this.checkBoxLabel.getInnerHTML();
		return $result;
	}
	,
	"setSelected": function( selected ) {
		this.checkBox.setSelected( selected );
		
	}
	,
	"getSelected": function() {
		var $result = false;
		$result = this.checkBox.getSelected();
		return $result;
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
		return "[DojoCheckBox]";
	}
}
);
