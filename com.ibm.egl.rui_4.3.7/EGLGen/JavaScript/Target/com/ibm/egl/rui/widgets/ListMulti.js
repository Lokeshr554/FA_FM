// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'ListMulti', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/ListMulti.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/ListMulti',
	"constructor" : function()
	{
		this.values = (function(){ var ezert$$1= []; ezert$$1.setType( "S;" );// no max size set for this array
		return ezert$$1;})();
		
		this.selection = (function(){ var ezert$$2= []; ezert$$2.setType( "I;" );// no max size set for this array
		return ezert$$2;})();
		
		this.size = 0;
		this.options = (function(){ var ezert$$3= []; ezert$$3.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
				ezert$$3[ i ] = new egl.egl.ui.rui.Widget();
			}
			// no max size set for this array
		return ezert$$3;})();
		
		this.sizeSet = false;
		this.reverseTextDirectionThis = "";
		this.textLayoutThis = "";
		this.savedSelection = null;
		
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
		this.setAttribute("multiple", {eze$$value : "true", eze$$signature : "S;"} );
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
		this.savedSelection = (function(){ var ezert$$4= []; ezert$$4.setType( "I;" );for (var i=0; i < 0; i++) {
				ezert$$4[ i ] = 0;
			}
			// no max size set for this array
		return ezert$$4;})();
		this.savedSelection.appendAll( selection );
		(function () {
			var ezert$$5 = new egl.egl.javascript.Job();
			ezert$$5.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.ListMulti.prototype.selectionSetter) );
			return ezert$$5;
		}).call(this).schedule(1 );
		
	}
	,
	"selectionSetter": function() {
		if ( (this.savedSelection != null) ) {
			this.setSelectionInternal(this.savedSelection );
			this.savedSelection = null;
		}
		
	}
	,
	"setSelectionInternal": function( selection ) {
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.options.getSize()); index = (index + 1) )
			{
				egl.checkNull(this.options)[this.options.checkIndex((index)-1)].setAttribute("selected", "" );
				egl.checkNull(this.options)[this.options.checkIndex((index)-1)].removeAttribute("selected" );
			}
		}
		{
			var index = 0;
			index = 1;
			for ( ; (index <= selection.getSize()); index = (index + 1) )
			{
				if ( ((egl.checkNull(selection)[selection.checkIndex((index)-1)] > 0) && (egl.checkNull(selection)[selection.checkIndex((index)-1)] <= this.options.getSize())) ) {
					egl.checkNull(this.options)[this.options.checkIndex((egl.checkNull(selection)[selection.checkIndex((index)-1)])-1)].setAttribute("selected", "true" );
				}
			}
		}
		if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
			this.setBiDiMarkers();
		}
		
	}
	,
	"getSelection": function() {
		var $result = null;
		var selected = (function(){ var ezert$$6= []; ezert$$6.setType( "I;" );for (var i=0; i < 0; i++) {
				ezert$$6[ i ] = 0;
			}
			// no max size set for this array
		return ezert$$6;})();
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.options.getSize()); index = (index + 1) )
			{
				if ( (egl.convertAnyToString(egl.boxAny(egl.checkNull(this.options)[this.options.checkIndex((index)-1)].getAttribute("selected" )),false) == "true") ) {
					selected.appendElement( index );
				}
			}
		}
		$result = selected;
		return $result;
	}
	,
	"setSize": function( sizeIn ) {
		if ( (sizeIn > 1) ) {
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
	"toString": function() {
		return "[ListMulti]";
	}
}
, 'select'
);
