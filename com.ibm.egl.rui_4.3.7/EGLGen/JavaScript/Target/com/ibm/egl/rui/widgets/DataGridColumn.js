// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.widgets', 'DataGridColumn', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/DataGridColumn.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridColumn',
	"constructor" : function()
	{
		this.name = "";
		this.displayName = null;
		this.width = "";
		this.headerAlignment = 0;
		this.alignment = 0;
		this.enableSorting = false;
		this.formatters = (function(){ var ezert$$1= []; ezert$$1.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$1[ i ] = null;
			}
			// no max size set for this array
		return ezert$$1;})();
		
		this.columnComparator = null;
		
		this.sortDirection = 0;
		this.ignoreCase = false;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		this.enableSorting = true;
		this.ignoreCase = true;
	}
	
	,
	"toString": function() {
		return "[DataGridColumn]";
	}
}
);
