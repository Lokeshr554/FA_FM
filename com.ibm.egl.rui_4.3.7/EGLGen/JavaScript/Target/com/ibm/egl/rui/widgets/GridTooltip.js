// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.widgets', 'GridTooltip', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/GridTooltip.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/GridTooltip',
	"constructor" : function()
	{
		this.provider = null;
		
		this.grid = null;
		egl.addEmbeddedWidget(this, "grid");
		
		this.tooltip = new egl.com.ibm.egl.rui.widgets.Tooltip();
		egl.addEmbeddedWidget(this, "tooltip");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.GridBehaviors();
		egl.checkNull(this.tooltip).provider = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.GridTooltip.prototype.getTooltipContents);
	}
	
	,
	"setTooltips": function( grid, td, row, rowNumber, column ) {
		egl.checkNull(this.tooltip).enable(td );
		td.setAttribute("rowNumber", rowNumber );
		this.grid = grid;
		
	}
	,
	"getTooltipContents": function( widget ) {
		var $result = null;
		var td = null;
		td = egl.convertAnyToRefType(widget,"Tegl/ui/rui/widget;",egl.egl.ui.rui.Widget);
		var row = null;
		row = egl.boxAny(egl.checkNull(this.grid).getData()[egl.checkNull(this.grid).getData().checkIndex((egl.convertAnyToInt(egl.boxAny(td.getAttribute("rowNumber" )),false))-1)]);
		var column = new egl.com.ibm.egl.rui.widgets.GridColumn();
		column.eze$$assign(egl.com.ibm.egl.rui.widgets.GridBehaviors['$inst'].getColumn(td ));
		var tip = null;
		tip = this.provider(row, column.name, td );
		$result = tip;
		return $result;
	}
	,
	"toString": function() {
		return "[GridTooltip]";
	}
}
);
