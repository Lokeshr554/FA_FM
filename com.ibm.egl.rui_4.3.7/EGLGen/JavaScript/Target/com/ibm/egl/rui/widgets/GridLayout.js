// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'GridLayout', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/GridLayout.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/GridLayout',
	"constructor" : function()
	{
		this.columns = 0;
		this.rows = 0;
		this.cellPadding = 0;
		this.table = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "table");
		
		this.innerTable = null;
		egl.addEmbeddedWidget(this, "innerTable");
		
		this.widgetOrientationThis = "";
		this.cells = null;
		
		this.defaultTDStyle = "";
		this.loaded = false;
		this.internalID = "";
		this.tableCells = null;
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.GridLayoutLib();
		new egl.egl.core.StrLib();
		new egl.com.ibm.egl.rui.widgets.UtilLib();
		this.targetWidget = this.table;
		this.table.setTagName( "span" );
		this.widgetOrientationThis = "";
		this.cells = [  ];
		this.loaded = false;
		this.internalID = ("GridLayout-" + (egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].getSerial()).toString());
	}
	
	,
	"setWidth": function( width ) {
		this.table.setWidth( (width).toString() );
		if ( ((this.table.getChildren() != null) && (this.table.getChildren().getSize() > 0)) ) {
			this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].setWidth( (width).toString() );
		}
		
	}
	,
	"setHeight": function( height ) {
		this.table.setHeight( (height).toString() );
		if ( ((this.table.getChildren() != null) && (this.table.getChildren().getSize() > 0)) ) {
			this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].setHeight( (height).toString() );
		}
		
	}
	,
	"removeCells": function() {
		if ( (this.cells.getSize() > 0) ) {
			var tds = null;
			tds = this.innerTable.getElementsByTagName("td" );
			var count = 0;
			count = tds.getSize();
			{
				var n = 0;
				n = 1;
				for ( ; (n <= count); n = (n + 1) )
				{
					if ( ((egl.checkNull(tds)[tds.checkIndex((n)-1)].getChildren().getSize() > 0) && (egl.egl.core.$StrLib.indexOf( (egl.checkNull(tds)[tds.checkIndex((n)-1)].getID()), this.internalID) == 1)) ) {
						egl.checkNull(tds)[tds.checkIndex((n)-1)].removeChildren();
					}
				}
			}
		}
		this.cells = [  ];
		
	}
	,
	"initTable": function() {
		if ( ((this.columns == 0) || (this.rows == 0)) ) {
			return;
		}
		if ( (this.table.getChildren().getSize() > 0) ) {
			this.innerTable = this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)];
			this.table.removeChildren();
			this.removeCells();
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(this.innerTable );
		}
		this.defaultTDStyle = "";
		var tdStyle = "";
		tdStyle = (((this.defaultTDStyle + "padding:") + (this.cellPadding).toString()) + "px");
		egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.clearHTMLString();
		var tableStyle = "";
		tableStyle = "";
		if ( (this.table.getWidth() != "") ) {
			tableStyle = (("width:" + this.table.getWidth()) + ";");
		}
		if ( (this.table.getHeight() != "") ) {
			tableStyle = (((tableStyle + "height:") + this.table.getHeight()) + ";\"");
		}
		if ( (tableStyle != "") ) {
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<table style=\"" + tableStyle) + "\"><tbody>") );
		}
		else {
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<table><tbody>" );
		}
		{
			var row = 0;
			row = 1;
			for ( ; (row <= this.rows); row = (row + 1) )
			{
				egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((("<tr id='" + this.internalID) + "-TR-") + (row).toString()) + "'>") );
				{
					var column = 0;
					column = 1;
					for ( ; (column <= this.columns); column = (column + 1) )
					{
						var tdID = "";
						tdID = ((((this.internalID + "-TD-") + (row).toString()) + "-") + (column).toString());
						egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<td id='" + tdID) + "' class='EglRuiVAlignTop EglRuiBoxTd' ") );
						egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((("style='" + tdStyle) + "' row='") + (row).toString()) + "' column='") + (column).toString()) + "'>&nbsp;</td>") );
					}
				}
				egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</tr>" );
			}
		}
		egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</tbody></table>" );
		this.table.setInnerHTML( egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.getHTMLString() );
		this.tableCells = (function(){ var ezert$$1= []; ezert$$1.setType( null );for (var i=0; i < 0; i++) {
				ezert$$1[ i ] = (function(){ var ezert$$2= []; ezert$$2.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
						ezert$$2[ i ] = new egl.egl.ui.rui.Widget();
					}
					// no max size set for this array
				return ezert$$2;})();
			}
			// no max size set for this array
		return ezert$$1;})();
		
	}
	,
	"setChildren": function( children1 ) {
		if ( (children1 == null) ) {
			throw (function () {
				var ezert$$3 = egl.createRuntimeException();
				egl.checkNull(ezert$$3).message = "Children cannot be null";
				return ezert$$3;
			}).call(this);
		}
		if ( (this.widgetOrientationThis != "") ) {
			this.table.setWidgetOrientation( this.widgetOrientationThis );
			if ( (this.widgetOrientationThis == "RTL") ) {
				this.table.setAttribute("align", "right" );
			}
			else {
				this.table.setAttribute("align", "left" );
			}
		}
		this.initTable();
		if ( ((this.columns == 0) || (this.rows == 0)) ) {
			{
				var index = 0;
				index = 1;
				for ( ; (index <= children1.getSize()); index = (index + 1) )
				{
					this.addCell(egl.checkNull(children1)[children1.checkIndex((index)-1)] );
				}
			}
			return;
		}
		{
			var row = 0;
			row = 1;
			for ( ; (row <= this.rows); row = (row + 1) )
			{
				this.tableCells.appendElement( (function(){ var ezert$$4= []; ezert$$4.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
						ezert$$4[ i ] = new egl.egl.ui.rui.Widget();
					}
					// no max size set for this array
				return ezert$$4;})() );
				{
					var col = 0;
					col = 1;
					for ( ; (col <= this.columns); col = (col + 1) )
					{
						egl.checkNull(this.tableCells)[this.tableCells.checkIndex((row)-1)].appendElement( this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren().checkIndex((1)-1)].getChildren().checkIndex((row)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren().checkIndex((1)-1)].getChildren().checkIndex((row)-1)].getChildren().checkIndex((col)-1)] );
					}
				}
			}
		}
		{
			var index = 0;
			index = 1;
			for ( ; (index <= children1.getSize()); index = (index + 1) )
			{
				this.appendChild(egl.checkNull(children1)[children1.checkIndex((index)-1)] );
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
				var ezert$$5 = egl.createRuntimeException();
				egl.checkNull(ezert$$5).message = "Child to add cannot be null";
				return ezert$$5;
			}).call(this);
		}
		if ( (this.widgetOrientationThis != "") ) {
			if ( (newChild.getWidgetOrientation() == "") ) {
				newChild.setWidgetOrientation( this.widgetOrientationThis );
			}
		}
		this.addCell(newChild );
		newChild.setLogicalParent(  this );
		var gridData = new egl.com.ibm.egl.rui.widgets.GridLayoutData();
		if ( (newChild.getLayoutData() != null) ) {
			gridData = egl.convertAnyToNameType(egl.boxAny(newChild.getLayoutData()),"Tcom/ibm/egl/rui/widgets/gridlayoutdata;",egl.com.ibm.egl.rui.widgets.GridLayoutData);
		}
		else {
			return;
		}
		if ( !(this.isValidGridLayoutData(function() {
			var ezert$$6 = new egl.com.ibm.egl.rui.widgets.GridLayoutData();
			
			ezert$$6.eze$$assign(gridData);
		; return ezert$$6;}.call(this) )) ) {
			return;
		}
		var td = null;
		td = egl.checkNull(this.tableCells)[this.tableCells.checkIndex((gridData.row)-1)][egl.checkNull(this.tableCells)[this.tableCells.checkIndex((gridData.row)-1)].checkIndex((gridData.column)-1)];
		if ( ((td != null) && (egl.convertAnyToString(egl.boxAny(td.getAttribute("occupied" )),false) != "true")) ) {
			var childCells = (function(){ var ezert$$7= []; ezert$$7.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
					ezert$$7[ i ] = new egl.egl.ui.rui.Widget();
				}
				// no max size set for this array
			return ezert$$7;})();
			{
				var j = 0;
				j = 1;
				for ( ; (j <= (gridData.horizontalSpan - 1)); j = (j + 1) )
				{
					if ( ((gridData.column + j) <= this.columns) ) {
						var tempTd = null;
						tempTd = egl.checkNull(this.tableCells)[this.tableCells.checkIndex((gridData.row)-1)][egl.checkNull(this.tableCells)[this.tableCells.checkIndex((gridData.row)-1)].checkIndex(((gridData.column + j))-1)];
						if ( ((tempTd != null) && (tempTd.getInnerHTML() == "&nbsp;")) ) {
							childCells.appendElement( tempTd );
						}
						else {
							childCells.removeAll();
							return;
						}
					}
				}
			}
			{
				var i = 0;
				i = 1;
				for ( ; (i <= (gridData.verticalSpan - 1)); i = (i + 1) )
				{
					if ( ((gridData.row + i) <= this.rows) ) {
						{
							var j = 0;
							j = 0;
							for ( ; (j <= (gridData.horizontalSpan - 1)); j = (j + 1) )
							{
								if ( ((gridData.column + j) <= this.columns) ) {
									var tempTd = null;
									tempTd = egl.checkNull(this.tableCells)[this.tableCells.checkIndex(((gridData.row + i))-1)][egl.checkNull(this.tableCells)[this.tableCells.checkIndex(((gridData.row + i))-1)].checkIndex(((gridData.column + j))-1)];
									if ( ((tempTd != null) && (tempTd.getInnerHTML() == "&nbsp;")) ) {
										childCells.appendElement( tempTd );
									}
									else {
										childCells.removeAll();
										return;
									}
								}
							}
						}
					}
				}
			}
			{
				var i = 0;
				i = 1;
				for ( ; (i <= childCells.getSize()); i = (i + 1) )
				{
					egl.checkNull(childCells)[childCells.checkIndex((i)-1)].getParent().removeChild(egl.checkNull(childCells)[childCells.checkIndex((i)-1)] );
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(egl.checkNull(childCells)[childCells.checkIndex((i)-1)] );
				}
			}
			if ( (this.widgetOrientationThis == "RTL") ) {
				td.setAttribute("align", "right" );
			}
			if ( (gridData.horizontalAlignment > 0) ) {
				switch( gridData.horizontalAlignment ) {
					case 0:
						td.setAttribute("align", "left" );
						break;
					case 1:
						td.setAttribute("align", "center" );
						break;
					case 2:
						td.setAttribute("align", "right" );
						break;
					default:
					break;
				}
			}
			if ( (gridData.verticalAlignment > 0) ) {
				switch( gridData.verticalAlignment ) {
					case 3:
						td.setClass( "EglRuiVAlignTop EglRuiBoxTd" );
						break;
					case 4:
						td.setClass( "EglRuiVAlignMiddle EglRuiBoxTd" );
						break;
					case 5:
						td.setClass( "EglRuiVAlignBottom EglRuiBoxTd" );
						break;
					default:
					break;
				}
			}
			td.removeChildren();
			td.setAttribute("rowSpan", gridData.verticalSpan );
			td.setAttribute("colSpan", gridData.horizontalSpan );
			if ( (gridData.widthHint != null) ) {
				td.setAttribute("width", gridData.widthHint );
			}
			if ( (gridData.heightHint != null) ) {
				td.setAttribute("height", gridData.heightHint );
			}
			td.appendChild(newChild );
			td.setAttribute("occupied", "true" );
			if ( (gridData.cellPadding > 0) ) {
				td.setStyle( (((this.defaultTDStyle + "padding:") + (gridData.cellPadding).toString()) + "px") );
			}
		}
		
	}
	,
	"removeChild": function( child ) {
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.cells.getSize()); index = (index + 1) )
			{
				if ( (egl.checkNull(this.cells)[this.cells.checkIndex((index)-1)] == child) ) {
					this.cells.removeElement( index );
					child.getParent().removeChild(child );
					this.setChildren(this.cells );
					return;
				}
			}
		}
		
	}
	,
	"removeChildren": function() {
		this.removeCells();
		this.layout();
		
	}
	,
	"addCell": function( child ) {
		{
			var i = 0;
			i = 1;
			for ( ; (i <= this.cells.getSize()); i = (i + 1) )
			{
				if ( (egl.checkNull(this.cells)[this.cells.checkIndex((i)-1)] == child) ) {
					return;
				}
			}
		}
		this.cells.appendElement( child );
		
	}
	,
	"layout": function() {
		this.setChildren(this.cells );
		
	}
	,
	"getColumns": function() {
		var $result = 0;
		$result = this.columns;
		return $result;
	}
	,
	"setColumns": function( columns ) {
		this.columns = columns;
		this.layout();
		
	}
	,
	"getRows": function() {
		var $result = 0;
		$result = this.rows;
		return $result;
	}
	,
	"setRows": function( rows ) {
		this.rows = rows;
		this.layout();
		
	}
	,
	"getCellPadding": function() {
		var $result = 0;
		$result = this.cellPadding;
		return $result;
	}
	,
	"setCellPadding": function( cellPadding ) {
		this.cellPadding = cellPadding;
		if ( (this.table.getChildren().getSize() <= 0) ) {
			return;
		}
		var oDisplayStyle = "";
		oDisplayStyle = this.table.getDisplayStyle();
		this.table.setDisplayStyle( "none" );
		var tds = null;
		tds = this.table.getElementsByTagName("td" );
		var count = 0;
		count = tds.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				egl.checkNull(tds)[tds.checkIndex((n)-1)].setStyle( (((this.defaultTDStyle + "padding:") + (cellPadding).toString()) + "px") );
			}
		}
		this.table.setDisplayStyle( oDisplayStyle );
		
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
			this.table.setWidgetOrientation( this.widgetOrientationThis );
			if ( (this.widgetOrientationThis == "RTL") ) {
				this.table.setAttribute("align", "right" );
			}
			else {
				this.table.setAttribute("align", "left" );
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
	"isValidGridLayoutData": function( gridData ) {
		var $result = false;
		if ( ((((((((gridData.row <= 0) || (gridData.row > this.rows)) || (gridData.column <= 0)) || (gridData.column > this.columns)) || (gridData.verticalSpan <= 0)) || ((gridData.verticalSpan + gridData.row) > (this.rows + 1))) || (gridData.horizontalSpan <= 0)) || ((gridData.horizontalSpan + gridData.column) > (this.columns + 1))) ) {
			$result = false;
			return $result;
		}
		else {
			$result = true;
			return $result;
		}
		return $result;
	}
	,
	"toString": function() {
		return "[GridLayout]";
	}
}
);
