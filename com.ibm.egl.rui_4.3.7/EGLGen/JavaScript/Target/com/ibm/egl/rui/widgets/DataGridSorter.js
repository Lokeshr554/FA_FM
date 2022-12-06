// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.widgets', 'DataGridSorter', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/DataGridSorter.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridSorter',
	"constructor" : function()
	{
		this.sortByName = "";
		this.sortingUp = false;
		this.caseIgnore = false;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.DataGridLib();
		this.sortingUp = true;
		this.caseIgnore = false;
	}
	
	,
	"columnSorter": function( grid, td, ignoreRow, ignoreDataIndex, column ) {
		egl.checkNull(grid).setEnableSorting(false);
		td.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGridSorter.prototype.sortColumn) );
		
	}
	,
	"sortColumn": function( e ) {
		var td = null;
		td = e.widget;
		var grid = null;
		{
			var eze$$src = td.getLogicalParent();
			if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.DataGrid)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.DataGrid' ], 'Widget', 'com.ibm.egl.rui.widgets.DataGrid' );
		}
		grid = td.getLogicalParent();
		var column = 0;
		column = egl.convertAnyToInt(egl.boxAny(td.getAttribute("column" )),false);
		this.sortByName = egl.checkNull(egl.checkNull(grid).getColumns()[egl.checkNull(grid).getColumns().checkIndex((column)-1)]).name;
		this.sortingUp = !(this.sortingUp);
		{
			var n = 0;
			n = 1;
			for ( ; (n <= egl.checkNull(grid).getColumns().getSize()); n = (n + 1) )
			{
				if ( (n != column) ) {
					egl.checkNull(egl.checkNull(grid).getColumns()[egl.checkNull(grid).getColumns().checkIndex((n)-1)]).sortDirection = 0;
				}
			}
		}
		if ( this.sortingUp ) {
			egl.checkNull(egl.checkNull(grid).getColumns()[egl.checkNull(grid).getColumns().checkIndex((column)-1)]).sortDirection = 2;
		}
		else {
			egl.checkNull(egl.checkNull(grid).getColumns()[egl.checkNull(grid).getColumns().checkIndex((column)-1)]).sortDirection = 1;
		}
		egl.checkNull(grid).setData(egl.boxElements(egl.com.ibm.egl.rui.widgets.DataGridLib['$inst'].util.sort(egl.unboxElements(egl.checkNull(grid).getData(), "1A;"), this.sortByName, this.sortingUp, this.caseIgnore, null )));
		
	}
	,
	"toString": function() {
		return "[DataGridSorter]";
	}
}
);
