// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'RadioGroup', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/RadioGroup.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/RadioGroup',
	"constructor" : function()
	{
		this.groupName = "";
		this.options = (function(){ var ezert$$1= []; ezert$$1.setType( "S;" );// no max size set for this array
		return ezert$$1;})();
		
		this.selected = "";
		this.optionsList = (function(){ var ezert$$2= []; ezert$$2.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
				ezert$$2[ i ] = new egl.egl.ui.rui.Widget();
			}
			// no max size set for this array
		return ezert$$2;})();
		
		this.textLayoutThis = "";
		this.widgetOrientationThis = "";
		this.optionsBox = new egl.com.ibm.egl.rui.widgets.Box();
		egl.addEmbeddedWidget(this, "optionsBox");
		
		this.selectedOption = null;
		egl.addEmbeddedWidget(this, "selectedOption");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.ui.rui.RUILib();
		new egl.egl.core.SysLib();
		new egl.egl.core.StrLib();
		new egl.com.ibm.egl.rui.widgets.UtilLib();
		this.textLayoutThis = "";
		this.widgetOrientationThis = "";
		egl.checkNull(this.optionsBox).setColumns(2);
	}
	
	,
	"setGroupName": function( groupName ) {
		this.groupName = groupName;
		if ( (egl.egl.core.$StrLib.indexOf( groupName, (" ")) >= 1) ) {
			var messageValue = "";
			messageValue = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.getRuntimeMessage( "CRRUI0006E", [ this.groupName ] ));
			throw (function () {
				var ezert$$3 = egl.createRuntimeException();
				egl.checkNull(ezert$$3).message = messageValue;
				egl.checkNull(ezert$$3).messageID = "CRRUI0006E";
				return ezert$$3;
			}).call(this);
		}
		if ( ((this.options != null) && (this.options.getSize() > 0)) ) {
			this.setOptions(this.options );
		}
		
	}
	,
	"getGroupName": function() {
		var $result = "";
		$result = this.groupName;
		return $result;
	}
	,
	"setOptions": function( opts ) {
		this.options = opts;
		if ( ((this.groupName == null) || (this.groupName == "")) ) {
			return;
		}
		this.removeChildren();
		this.optionsList.removeAll();
		egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidgetChildren(this.optionsBox );
		this.appendChild(this.optionsBox );
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.options.getSize()); index = (index + 1) )
			{
				var newOption = new egl.egl.ui.rui.Widget();
				newOption.setTagName( ("input type=radio name=" + this.groupName) );
				newOption.setAttribute("value", egl.checkNull(this.options)[this.options.checkIndex((index)-1)] );
				newOption.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.RadioGroup.prototype.setSelectedEvent) );
				newOption.getOnChange().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.RadioGroup.prototype.setChangeEvent) );
				var optionName = new egl.com.ibm.egl.rui.widgets.TextLabel();
				egl.checkNull(optionName).setText(egl.checkNull(this.options)[this.options.checkIndex((index)-1)]);
				egl.checkNull(optionName).setClass("EglRuiRadioGroupOptionName");
				egl.checkNull(optionName).setAttribute("dir", {eze$$value : "ltr", eze$$signature : "S;"} );
				egl.checkNull(optionName).setStyle("display: inline-block");
				this.optionsList.appendElement( newOption );
				egl.checkNull(this.optionsBox).appendChild(newOption );
				egl.checkNull(this.optionsBox).appendChild(optionName );
			}
		}
		if ( (this.textLayoutThis == "Visual") ) {
			this.setBiDiStyles();
		}
		if ( (this.selected != "") ) {
			this.setSelected(this.selected );
		}
		
	}
	,
	"getOptions": function() {
		var $result = null;
		$result = this.options;
		return $result;
	}
	,
	"setSelected": function( select ) {
		this.selected = select;
		{
			var opt = 0;
			opt = 1;
			for ( ; (opt <= this.optionsList.getSize()); opt = (opt + 1) )
			{
				if ( (egl.convertAnyToString(egl.boxAny(egl.checkNull(this.optionsList)[this.optionsList.checkIndex((opt)-1)].getAttribute("value" )),false) == select) ) {
					this.selectedOption = egl.checkNull(this.optionsList)[this.optionsList.checkIndex((opt)-1)];
					(function () {
						var ezert$$4 = new egl.egl.javascript.Job();
						ezert$$4.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.RadioGroup.prototype.doSetSelected) );
						return ezert$$4;
					}).call(this).schedule();
				}
				else {
					egl.checkNull(this.optionsList)[this.optionsList.checkIndex((opt)-1)].removeAttribute("checked" );
				}
			}
		}
		
	}
	,
	"setDisabled": function( disabled ) {
		{
			var opt = 0;
			opt = 1;
			for ( ; (opt <= this.optionsList.getSize()); opt = (opt + 1) )
			{
				egl.checkNull(this.optionsList)[this.optionsList.checkIndex((opt)-1)].setDisabled( disabled );
			}
		}
		if ( disabled ) {
			egl.checkNull(this.optionsBox).setAttribute("disabled", {eze$$value : disabled, eze$$signature : "0;"} );
		}
		else {
			egl.checkNull(this.optionsBox).removeAttribute("disabled" );
		}
		
	}
	,
	"getDisabled": function() {
		var $result = false;
		$result = egl.convertAnyToBoolean(egl.checkNull(this.optionsBox).getAttribute("disabled" ),false);
		return $result;
	}
	,
	"doSetSelected": function() {
		this.selectedOption.setAttribute("checked", "true" );
		
	}
	,
	"setChangeEvent": function( e ) {
		if ( (this.selectedOption != e.widget) ) {
			this.selectedOption = e.widget;
			this.selected = egl.convertAnyToString(egl.boxAny(e.widget.getAttribute("value" )),false);
			e.widget =  this;
			{
				var index = 0;
				index = 1;
				for ( ; (index <= this.getOnChange().getSize()); index = (index + 1) )
				{
					this.getOnChange()[this.getOnChange().checkIndex((index)-1)](e );
				}
			}
		}
		
	}
	,
	"setSelectedEvent": function( e ) {
		if ( (this.selectedOption != e.widget) ) {
			this.selectedOption = e.widget;
			this.selected = egl.convertAnyToString(egl.boxAny(e.widget.getAttribute("value" )),false);
			var browser = "";
			browser = egl.egl.ui.rui.RUILib['$inst'].getUserAgent();
			if ( (this.getOnChange().getSize() > 0) ) {
				e.widget =  this;
				{
					var index = 0;
					index = 1;
					for ( ; (index <= this.getOnChange().getSize()); index = (index + 1) )
					{
						this.getOnChange()[this.getOnChange().checkIndex((index)-1)](e );
					}
				}
			}
		}
		if ( (this.getOnClick().getSize() > 0) ) {
			e.widget =  this;
			{
				var index = 0;
				index = 1;
				for ( ; (index <= this.getOnClick().getSize()); index = (index + 1) )
				{
					this.getOnClick()[this.getOnClick().checkIndex((index)-1)](e );
				}
			}
		}
		
	}
	,
	"getSelected": function() {
		var $result = "";
		$result = this.selected;
		return $result;
	}
	,
	"setTextLayout": function( textLayout ) {
		this.textLayoutThis = textLayout;
		this.setBiDiStyles();
		
	}
	,
	"getTextLayout": function() {
		var $result = "";
		$result = this.textLayoutThis;
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
		if ( (widgetOrientation == "RTL") ) {
			egl.checkNull(this.optionsBox).setAttribute("dir", {eze$$value : "rtl", eze$$signature : "S;"} );
			egl.checkNull(this.optionsBox).setAlignment(2);
		}
		else {
			egl.checkNull(this.optionsBox).setAttribute("dir", {eze$$value : "ltr", eze$$signature : "S;"} );
			egl.checkNull(this.optionsBox).setAlignment(0);
		}
		
	}
	,
	"setBiDiStyles": function() {
		var children = null;
		children = egl.checkNull(this.optionsBox).getChildren();
		if ( (children.getSize() > 0) ) {
			{
				var i = 0;
				i = 1;
				for ( ; (i <= children.getSize()); i = (i + 1) )
				{
					if ( (egl.checkNull(children)[children.checkIndex((i)-1)].getClass() == "EglRuiRadioGroupOptionName") ) {
						egl.checkNull(children)[children.checkIndex((i)-1)].setTextLayout( this.textLayoutThis );
					}
					;
				}
			}
			;
		}
		
	}
	,
	"setValueAsText": function( value ) {
		this.setSelected(value );
		
	}
	,
	"getValueAsText": function() {
		var $result = "";
		$result = this.selected;
		return $result;
	}
	,
	"toString": function() {
		return "[RadioGroup]";
	}
}
, 'div'
);
