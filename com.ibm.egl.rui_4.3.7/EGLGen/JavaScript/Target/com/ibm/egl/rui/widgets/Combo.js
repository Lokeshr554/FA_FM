// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Combo', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Combo.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Combo',
	"constructor" : function()
	{
		this.values = (function(){ var ezert$$1= []; ezert$$1.setType( "S;" );// no max size set for this array
		return ezert$$1;})();
		
		this.selection = 0;
		this.reverseTextDirectionThis = "";
		this.textLayoutThis = "";
		this.options = (function(){ var ezert$$2= []; ezert$$2.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
				ezert$$2[ i ] = new egl.egl.ui.rui.Widget();
			}
			// no max size set for this array
		return ezert$$2;})();
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.UtilLib();
		this.reverseTextDirectionThis = "No";
		this.textLayoutThis = "Logical";
	}
	
	,
	"setValues": function( value ) {
		this.values = value;
		this.removeChildren();
		{
			var i = 0;
			i = 1;
			for ( ; (i <= this.options.getSize()); i = (i + 1) )
			{
				egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(egl.checkNull(this.options)[this.options.checkIndex((i)-1)] );
			}
		}
		this.options.removeAll();
		{
			var index = 0;
			index = 1;
			for ( ; (index <= value.getSize()); index = (index + 1) )
			{
				var option = new egl.egl.ui.rui.Widget();
				option.setTagName( "option" );
				option.setInnerHTML( egl.checkNull(value)[value.checkIndex((index)-1)] );
				this.options.appendElement( option );
				this.appendChild(option );
			}
		}
		this.setSelection(1 );
		if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
			this.setBiDiMarkers();
		}
		if ( (new egl.com.ibm.egl.rui.history.HistoryHelper().isIE() && egl.isa(this.getLogicalParent(), "Tcom/ibm/egl/rui/widgets/box;")) ) {
			egl.checkNull(this.getLogicalParent()).layout();
		}
		
	}
	,
	"getValues": function() {
		var $result = null;
		$result = this.values;
		return $result;
	}
	,
	"setSelection": function( selection ) {
		if ( ((selection > 0) && (selection <= this.options.getSize())) ) {
			egl.checkNull(this.options)[this.options.checkIndex((selection)-1)].setAttribute("selected", "true" );
		}
		
	}
	,
	"getSelection": function() {
		var $result = 0;
		$result = (egl.convertAnyToInt(this.getAttribute("selectedIndex" ),false) + 1);
		return $result;
	}
	,
	"setTextLayout": function( textLayout ) {
		this.textLayoutThis = textLayout;
		this.setBiDiMarkers();
		
	}
	,
	"getTextLayout": function() {
		var $result = "";
		$result = this.textLayoutThis;
		return $result;
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
		this.reverseTextDirectionThis = reverseTextDirection;
		this.setBiDiMarkers();
		
	}
	,
	"getReverseTextDirection": function() {
		var $result = "";
		$result = this.reverseTextDirectionThis;
		return $result;
	}
	,
	"setBiDiMarkers": function() {
		var isVisual = false;
		isVisual = (this.textLayoutThis == "Visual");
		var isReverseDirection = false;
		isReverseDirection = (this.reverseTextDirectionThis == "Yes");
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.options.getSize()); index = (index + 1) )
			{
				egl.checkNull(this.options)[this.options.checkIndex((index)-1)].setBiDiMarkers(isVisual, isReverseDirection );
			}
		}
		
	}
	,
	"setValueAsText": function( value ) {
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.values.getSize()); index = (index + 1) )
			{
				if ( (value == egl.checkNull(this.values)[this.values.checkIndex((index)-1)]) ) {
					this.setSelection(index );
					return;
				}
			}
		}
		if ( (this.values.getSize() > 0) ) {
			this.setSelection(1 );
		}
		
	}
	,
	"getValueAsText": function() {
		var $result = "";
		$result = egl.checkNull(this.values)[this.values.checkIndex((this.getSelection())-1)];
		return $result;
	}
	,
	"toString": function() {
		return "[Combo]";
	}
}
, 'select'
);
