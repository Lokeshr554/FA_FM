// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.widgets', 'GridSelector', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/GridSelector.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/GridSelector',
	"constructor" : function()
	{
		this.selection = null;
		
		this.selectedRows = null;
		
		this.color = "";
		this.selectionChangedListener = null;
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		this.selection = [  ].setType( "A;" );
		this.selectedRows = [  ];
		this.color = "lightgreen";
		this.selectionChangedListener = null;
	}
	
	,
	"enableSelection": function( grid, td, row, rowNumber, column ) {
		td.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.GridSelector.prototype.setSelected) );
		td.setAttribute("originalBG", td.getBackgroundColor() );
		td.setAttribute("rowNumber", rowNumber );
		egl.checkNull(grid).setCursor("pointer");
		
	}
	,
	"setSelected": function( e ) {
		var td = null;
		td = e.widget;
		var tr = null;
		tr = td.getParent();
		var grid = null;
		{
			var eze$$src = td.getLogicalParent();
			if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.Grid)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.Grid' ], 'Widget', 'com.ibm.egl.rui.widgets.Grid' );
		}
		grid = td.getLogicalParent();
		var dataRecord = null;
		dataRecord = egl.boxAny(egl.checkNull(grid).getData()[egl.checkNull(grid).getData().checkIndex((egl.convertAnyToInt(egl.boxAny(td.getAttribute("rowNumber" )),false))-1)]);
		if ( (e.ctrlKey || e.metaKey) ) {
			var index = 0;
			index = this.selectionIndex(tr );
			if ( (index == 0) ) {
				this.selection.appendElement( dataRecord );
				this.selectedRows.appendElement( tr );
				this.highlightRow(tr );
			}
			else {
				this.unHighlightRow(tr );
				this.selection.removeElement( index );
				this.selectedRows.removeElement( index );
			}
		}
		else {
			this.unHighlightRows(this.selectedRows );
			this.selection = [ dataRecord ].setType( "A;" );
			this.selectedRows = [ tr ];
			this.highlightRow(tr );
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
			for ( ; (n <= this.selectedRows.getSize()); n = (n + 1) )
			{
				if ( (egl.checkNull(this.selectedRows)[this.selectedRows.checkIndex((n)-1)] == tr) ) {
					$result = n;
					return $result;
				}
			}
		}
		$result = 0;
		return $result;
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
	"unHighlightRow": function( tr ) {
		var tds = null;
		tds = tr.getElementsByTagName("td" );
		{
			var n = 0;
			n = 1;
			for ( ; (n <= tds.getSize()); n = (n + 1) )
			{
				if ( (egl.checkNull(tds)[tds.checkIndex((n)-1)].getClass() != "EglRuiGridHeader") ) {
					egl.checkNull(tds)[tds.checkIndex((n)-1)].setBackgroundColor( egl.convertAnyToString(egl.boxAny(egl.checkNull(tds)[tds.checkIndex((n)-1)].getAttribute("originalBG" )),false) );
				}
			}
		}
		tr.setCursor( "default" );
		
	}
	,
	"highlightRow": function( tr ) {
		var tds = null;
		tds = tr.getElementsByTagName("td" );
		{
			var n = 0;
			n = 1;
			for ( ; (n <= tds.getSize()); n = (n + 1) )
			{
				egl.checkNull(tds)[tds.checkIndex((n)-1)].setBackgroundColor( this.color );
			}
		}
		tr.setCursor( "move" );
		
	}
	,
	"clear": function( Grid, eze$$Grid$func_, eze$$caller ) {
		this.unHighlightRows(egl.checkNull(Grid).getElementsByTagName("tr" ) );
		this.selection = [  ].setType( "A;" );
		this.selectedRows = [  ];
		
	}
	,
	"toString": function() {
		return "[GridSelector]";
	}
}
);
