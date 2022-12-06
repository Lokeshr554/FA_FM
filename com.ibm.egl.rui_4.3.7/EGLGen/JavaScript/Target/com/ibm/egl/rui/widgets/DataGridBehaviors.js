// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'DataGridBehaviors',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/DataGridBehaviors.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridBehaviors',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.DataGridBehaviors['$inst']){
				return egl.com.ibm.egl.rui.widgets.DataGridBehaviors['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.DataGridBehaviors['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
		}
		
		,
		"whiteCells": function( grid, td, row, dataIndex, column ) {
			td.setClass( (td.getClass() + " EglRuiDataGridCellColor2") );
			
		}
		,
		"grayCells": function( grid, td, row, dataIndex, column ) {
			td.setClass( (td.getClass() + " EglRuiDataGridCellColor1") );
			
		}
		,
		"alternatingColor": function( grid, td, row, dataIndex, column ) {
			if ( (egl.remainder(dataIndex, 2) == 1) ) {
				td.setClass( (td.getClass() + " EglRuiDataGridCellColor3") );
			}
			
		}
		,
		"tightCells": function( grid, td, row, dataIndex, column ) {
			td.setClass( (td.getClass() + " EglRuiDataGridCellTight") );
			
		}
		,
		"getColumn": function( td ) {
			var $result = null;
			var tr = null;
			tr = td.getParent();
			var grid = null;
			{
				var eze$$src = td.getLogicalParent();
				if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.DataGrid)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.DataGrid' ], 'Widget', 'com.ibm.egl.rui.widgets.DataGrid' );
			}
			grid = td.getLogicalParent();
			var cells = null;
			cells = tr.getChildren();
			{
				var n = 0;
				n = 1;
				for ( ; (n <= cells.getSize()); n = (n + 1) )
				{
					if ( (egl.checkNull(cells)[cells.checkIndex((n)-1)] == td) ) {
						$result = egl.checkNull(grid).getColumns()[egl.checkNull(grid).getColumns().checkIndex((n)-1)];
						return $result;
					}
				}
			}
			$result = null;
			return $result;
		}
		,
		"hasParent": function( widget, target ) {
			var $result = false;
			while ( ((widget != null) && (widget != target)) ) {
				widget = widget.getParent();
			}
			$result = (widget == target);
			return $result;
		}
		,
		"toString": function() {
			return "[DataGridBehaviors]";
		}
	}
);
