// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Box', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Box.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Box',
	"constructor" : function()
	{
		this.lastRow = null;
		egl.addEmbeddedWidget(this, "lastRow");
		
		this.body = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "body");
		
		this.table = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "table");
		
		this.div = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "div");
		
		this.alignment = 0;
		this.widgetOrientationThis = "";
		this.cells = null;
		
		this.columns = 0;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.UtilLib();
		new egl.com.ibm.egl.rui.widgets.BoxLib();
		this.targetWidget = this.div;
		this.lastRow = null;
		this.body.setTagName( "tbody" );
		this.table.setTagName( "table" );
		this.table.setChildren( [ this.body ] );
		this.table.setClass( "EglRuiBoxTable" );
		egl.checkNull(this.div).setChildren( [ this.table ] );
		this.widgetOrientationThis = "";
		this.cells = [  ];
		this.columns = 32768;
	}
	
	,
	"setChildren": function( children ) {
		if ( (children == null) ) {
			throw (function () {
				var ezert$$2 = egl.createRuntimeException();
				egl.checkNull(ezert$$2).message = "Children cannot be null";
				return ezert$$2;
			}).call(this);
		}
		this.removeChildren();
		if ( (this.widgetOrientationThis != "") ) {
			egl.checkNull(this.div).setWidgetOrientation(this.widgetOrientationThis);
			if ( (this.widgetOrientationThis == "RTL") ) {
				this.alignment = 2;
			}
			else {
				this.alignment = 0;
			}
		}
		{
			var index = 0;
			index = 1;
			for ( ; (index <= children.getSize()); index = (index + 1) )
			{
				this.appendChild(egl.checkNull(children)[children.checkIndex((index)-1)] );
			}
		}
		
	}
	,
	"getChildren": function() {
		var $result = null;
		$result = this.cells;
		return $result;
	}
	,
	"appendChild": function( newChild ) {
		if ( (newChild == null) ) {
			throw (function () {
				var ezert$$3 = egl.createRuntimeException();
				egl.checkNull(ezert$$3).message = "Child to add cannot be null";
				return ezert$$3;
			}).call(this);
		}
		var child = null;
		child = egl.convertAnyToRefType((function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tegl/ui/rui/widget;"}) : null; })(newChild),"Tegl/ui/rui/widget;",egl.egl.ui.rui.Widget);
		if ( (this.widgetOrientationThis != "") ) {
			if ( (child.getWidgetOrientation() == "") ) {
				child.setWidgetOrientation( this.widgetOrientationThis );
			}
		}
		var td = new egl.egl.ui.rui.Widget();
		td.setTagName( "td" );
		td.setChildren( [ child ] );
		td.setClass( "EglRuiVAlignTop EglRuiBoxTd" );
		switch( this.alignment ) {
			case 0:
				egl.checkNull(this.div).setAttribute("align", {eze$$value : "left", eze$$signature : "S;"} );
				td.setAttribute("align", "left" );
				break;
			case 1:
				egl.checkNull(this.div).setAttribute("align", {eze$$value : "center", eze$$signature : "S;"} );
				td.setAttribute("align", "center" );
				break;
			case 2:
				egl.checkNull(this.div).setAttribute("align", {eze$$value : "right", eze$$signature : "S;"} );
				td.setAttribute("align", "right" );
				break;
			default:
			break;
		}
		child.setLogicalParent(  this );
		td.setLogicalParent(  this );
		if ( (((this.lastRow == null) || (this.columns == 1)) || (this.lastRow.getChildren().getSize() >= this.columns)) ) {
			this.lastRow = (function () {
				var ezert$$4 = new egl.egl.ui.rui.Widget();
				ezert$$4.setTagName( "tr" );
				return ezert$$4;
			}).call(this);
			this.body.appendChild(this.lastRow );
		}
		this.lastRow.appendChild(td );
		this.cells.appendElement( child );
		
	}
	,
	"removeChild": function( child ) {
		var tempCells = null;
		tempCells = this.cells;
		this.removeChildren();
		{
			var index = 0;
			index = 1;
			for ( ; (index <= tempCells.getSize()); index = (index + 1) )
			{
				Lezert$$1: if ( (egl.checkNull(tempCells)[tempCells.checkIndex((index)-1)] == child) ) {
					tempCells.removeElement( index );
					break Lezert$$1;
				}
			}
		}
		this.setChildren(tempCells );
		
	}
	,
	"removeChildren": function() {
		{
			var i = 0;
			i = 1;
			for ( ; (i <= this.cells.getSize()); i = (i + 1) )
			{
				if ( ((egl.checkNull(this.cells)[this.cells.checkIndex((i)-1)].getLogicalParent() ==  this) && (egl.checkNull(this.cells)[this.cells.checkIndex((i)-1)].getParent() != null)) ) {
					egl.checkNull(this.cells)[this.cells.checkIndex((i)-1)].getParent().removeChild(egl.checkNull(this.cells)[this.cells.checkIndex((i)-1)] );
				}
			}
		}
		egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidgetChildren(this.body );
		this.cells = [  ];
		this.lastRow = null;
		
	}
	,
	"layout": function() {
		this.setChildren(this.cells );
		
	}
	,
	"setColumns": function( columns ) {
		this.columns = columns;
		this.layout();
		
	}
	,
	"getColumns": function() {
		var $result = 0;
		$result = this.columns;
		return $result;
	}
	,
	"setAlignment": function( align ) {
		this.alignment = align;
		this.setChildren(this.getChildren() );
		
	}
	,
	"getAlignment": function() {
		var $result = 0;
		$result = this.alignment;
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
		if ( ((this.widgetOrientationThis != "") && (this.cells.getSize() > 0)) ) {
			egl.checkNull(this.div).setWidgetOrientation(this.widgetOrientationThis);
			if ( (this.widgetOrientationThis == "RTL") ) {
				egl.checkNull(this.div).setAttribute("align", {eze$$value : "right", eze$$signature : "S;"} );
			}
			else {
				egl.checkNull(this.div).setAttribute("align", {eze$$value : "left", eze$$signature : "S;"} );
			}
			{
				var index = 0;
				index = 1;
				for ( ; (index <= this.cells.getSize()); index = (index + 1) )
				{
					if ( (egl.checkNull(this.cells)[this.cells.checkIndex((index)-1)].getWidgetOrientation() == "") ) {
						egl.checkNull(this.cells)[this.cells.checkIndex((index)-1)].setWidgetOrientation( this.widgetOrientationThis );
					}
				}
			}
		}
		
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
		
	}
	,
	"getReverseTextDirection": function() {
		var $result = "";
		$result = "";
		return $result;
	}
	,
	"toString": function() {
		return "[Box]";
	}
}
);
