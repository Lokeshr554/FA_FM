// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'GridBehaviors',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/GridBehaviors.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/GridBehaviors',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.GridBehaviors['$inst']){
				return egl.com.ibm.egl.rui.widgets.GridBehaviors['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.GridBehaviors['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
		}
		
		,
		"whiteCells": function( grid, td, row, rowNumber, column ) {
			td.setClass( (td.getClass() + " EglRuiGridCellColor2") );
			
		}
		,
		"grayCells": function( grid, td, row, rowNumber, column ) {
			td.setClass( (td.getClass() + " EglRuiGridCellColor1") );
			
		}
		,
		"alternatingColor": function( grid, td, row, rowNumber, column ) {
			if ( (egl.remainder(rowNumber, 2) == 1) ) {
				td.setClass( (td.getClass() + " EglRuiGridCellColor3") );
			}
			
		}
		,
		"tightCells": function( grid, td, row, rowNumber, column ) {
			td.setClass( (td.getClass() + " EglRuiGridCellTight") );
			
		}
		,
		"getColumn": function( td ) {
			var $result = new egl.com.ibm.egl.rui.widgets.GridColumn();
			var tr = null;
			tr = td.getParent();
			var grid = null;
			{
				var eze$$src = td.getLogicalParent();
				if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.Grid)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.Grid' ], 'Widget', 'com.ibm.egl.rui.widgets.Grid' );
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
						$result.eze$$assign(egl.checkNull(grid).columns[egl.checkNull(grid).columns.checkIndex((n)-1)]);
						return $result;
					}
				}
			}
			$result.setNull(true);
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
			return "[GridBehaviors]";
		}
	}
);
