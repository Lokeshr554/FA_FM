// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'List', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/List.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/List',
	"constructor" : function()
	{
		this.values = (function(){ var ezert$$1= []; ezert$$1.setType( "S;" );// no max size set for this array
		return ezert$$1;})();
		
		this.selection = 0;
		this.size = 0;
		this.options = (function(){ var ezert$$2= []; ezert$$2.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
				ezert$$2[ i ] = new egl.egl.ui.rui.Widget();
			}
			// no max size set for this array
		return ezert$$2;})();
		
		this.sizeSet = false;
		this.reverseTextDirectionThis = "";
		this.textLayoutThis = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.UtilLib();
		this.sizeSet = false;
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
		if ( !(this.sizeSet) ) {
			this.setSize(this.values.getSize() );
		}
		if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
			this.setBiDiMarkers();
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
			this.setAttribute("selectedIndex", {eze$$value : new egl.javascript.BigDecimal((selection - 1)).setScale(0,egl.javascript.BigDecimal.prototype.ROUND_DOWN), eze$$signature : "d10:0;"} );
		}
		
	}
	,
	"getSelection": function() {
		var $result = 0;
		$result = (egl.convertAnyToInt(this.getAttribute("selectedIndex" ),false) + 1);
		return $result;
	}
	,
	"setSize": function( sizeIn ) {
		if ( (sizeIn > 0) ) {
			this.size = sizeIn;
			this.sizeSet = true;
			this.setAttribute("size", {eze$$value : sizeIn, eze$$signature : "I;"} );
		}
		
	}
	,
	"getSize": function() {
		var $result = 0;
		$result = this.size;
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
	"setValueAsText": function( selectionText ) {
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.values.getSize()); index = (index + 1) )
			{
				if ( (selectionText == egl.checkNull(this.values)[this.values.checkIndex((index)-1)]) ) {
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
		return "[List]";
	}
}
, 'select'
);
