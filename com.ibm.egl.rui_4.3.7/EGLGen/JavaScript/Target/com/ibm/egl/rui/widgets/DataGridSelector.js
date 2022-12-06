// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.widgets', 'DataGridSelector', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/DataGridSelector.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridSelector',
	"constructor" : function()
	{
		this.selection = null;
		
		this.selectedRows = null;
		
		this.color = "";
		this.selectionChangedListener = null;
		
		this.grid = null;
		egl.addEmbeddedWidget(this, "grid");
		
		this.selectedGridRows = null;
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.DataGridLib();
		this.selection = [  ].setType( "A;" );
		this.selectedRows = [  ];
		this.color = "lightgreen";
		this.selectionChangedListener = null;
		this.selectedGridRows = [  ];
	}
	
	,
	"enableSelection": function( grid, td, row, dataIndex, column ) {
		egl.checkNull(grid).setSelectionMode(0);
		if ( (this.grid == null) ) {
			this.grid = grid;
		}
		td.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGridSelector.prototype.setSelected) );
		td.setAttribute("originalBG", td.getBackgroundColor() );
		egl.checkNull(grid).setCursor("pointer");
		
	}
	,
	"setSelected": function( e ) {
		var gridCell = null;
		gridCell = e.widget;
		var gridRow = null;
		gridRow = gridCell.getParent();
		var row = "";
		row = (" " + egl.convertAnyToString(egl.boxAny(gridCell.getAttribute("row" )),false));
		var dataRecord = null;
		dataRecord = egl.boxAny(egl.checkNull(this.grid).getData()[egl.checkNull(this.grid).getData().checkIndex((egl.convertStringToInt(row))-1)]);
		if ( (e.ctrlKey || e.metaKey) ) {
			var index = 0;
			index = this.selectionIndex(gridRow );
			if ( (index == 0) ) {
				this.selection.appendElement( dataRecord );
				var box = new egl.com.ibm.egl.rui.widgets.Box();
				egl.checkNull(box).setColumns(gridRow.getChildren().getSize());
				{
					var n = 0;
					n = 1;
					for ( ; (n <= egl.checkNull(box).getColumns()); n = (n + 1) )
					{
						egl.checkNull(box).appendChild((function () {
							var ezert$$1 = new egl.com.ibm.egl.rui.widgets.Div();
							egl.checkNull(ezert$$1).setInnerHTML(gridRow.getChildren()[gridRow.getChildren().checkIndex((n)-1)].getInnerHTML());
							egl.checkNull(ezert$$1).setBackgroundColor(this.color);
							egl.checkNull(ezert$$1).setMargin(1);
							return ezert$$1;
						}).call(this) );
					}
				}
				var tr = null;
				tr = egl.checkNull(box).lastRow;
				tr.setAttribute("row", row );
				this.selectedRows.appendElement( tr );
				this.selectedGridRows.appendElement( gridRow );
				this.highlightRow(gridRow );
			}
			else {
				this.unHighlightRow(gridRow );
				this.selection.removeElement( index );
				this.selectedRows.removeElement( index );
				this.selectedGridRows.removeElement( index );
			}
		}
		else {
			this.unHighlightRows(this.selectedGridRows );
			this.selection = [ dataRecord ].setType( "A;" );
			var box = new egl.com.ibm.egl.rui.widgets.Box();
			egl.checkNull(box).setColumns(gridRow.getChildren().getSize());
			{
				var n = 0;
				n = 1;
				for ( ; (n <= egl.checkNull(box).getColumns()); n = (n + 1) )
				{
					egl.checkNull(box).appendChild((function () {
						var ezert$$2 = new egl.com.ibm.egl.rui.widgets.Div();
						egl.checkNull(ezert$$2).setInnerHTML(gridRow.getChildren()[gridRow.getChildren().checkIndex((n)-1)].getInnerHTML());
						egl.checkNull(ezert$$2).setBackgroundColor(this.color);
						egl.checkNull(ezert$$2).setMargin(1);
						return ezert$$2;
					}).call(this) );
				}
			}
			var tr = null;
			tr = egl.checkNull(box).lastRow;
			tr.setAttribute("row", row );
			this.selectedRows = [ tr ];
			this.selectedGridRows = [ gridRow ];
			this.highlightRow(gridRow );
		}
		if ( (this.selectionChangedListener != null) ) {
			this.selectionChangedListener();
		}
		
	}
	,
	"selectionIndex": function( tr ) {
		var $result = 0;
		{
			var n = 0;
			n = 1;
			for ( ; (n <= this.selectedGridRows.getSize()); n = (n + 1) )
			{
				if ( (egl.checkNull(this.selectedGridRows)[this.selectedGridRows.checkIndex((n)-1)] == tr) ) {
					$result = n;
					return $result;
				}
			}
		}
		$result = 0;
		return $result;
	}
	,
	"highlightRow": function( tr ) {
		var tds = null;
		tds = tr.getElementsByTagName("div" );
		{
			var n = 0;
			n = 1;
			for ( ; (n <= tds.getSize()); n = (n + 1) )
			{
				if ( egl.like(egl.checkNull(tds)[tds.checkIndex((n)-1)].getClass(), "%EglRuiDataGridCell%", "\\") ) {
					egl.checkNull(tds)[tds.checkIndex((n)-1)].setBackgroundColor( this.color );
				}
			}
		}
		tr.setCursor( "move" );
		
	}
	,
	"unHighlightRow": function( tr ) {
		var tds = null;
		tds = tr.getElementsByTagName("div" );
		{
			var n = 0;
			n = 1;
			for ( ; (n <= tds.getSize()); n = (n + 1) )
			{
				if ( egl.like(egl.checkNull(tds)[tds.checkIndex((n)-1)].getClass(), "%EglRuiDataGridCell%", "\\") ) {
					egl.checkNull(tds)[tds.checkIndex((n)-1)].setBackgroundColor( egl.convertAnyToString(egl.boxAny(egl.checkNull(tds)[tds.checkIndex((n)-1)].getAttribute("originalBG" )),false) );
				}
			}
		}
		tr.setCursor( "default" );
		
	}
	,
	"unHighlightRows": function( trs ) {
		{
			var r = 0;
			r = 1;
			for ( ; (r <= trs.getSize()); r = (r + 1) )
			{
				this.unHighlightRow(egl.checkNull(trs)[trs.checkIndex((r)-1)] );
			}
		}
		
	}
	,
	"clear": function( Grid, eze$$Grid$func_, eze$$caller ) {
		this.unHighlightRows(this.selectedRows );
		this.selection = [  ].setType( "A;" );
		this.selectedRows = [  ];
		
	}
	,
	"toString": function() {
		return "[DataGridSelector]";
	}
}
);
