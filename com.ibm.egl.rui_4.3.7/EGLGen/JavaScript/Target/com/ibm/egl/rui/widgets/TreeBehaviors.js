// Generated at Tue Dec 06 11:54:43 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'TreeBehaviors',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/TreeBehaviors.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/TreeBehaviors',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.TreeBehaviors['$inst']){
				return egl.com.ibm.egl.rui.widgets.TreeBehaviors['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.TreeBehaviors['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
		}
		
		,
		"pointer": function( node ) {
			egl.checkNull(node).setCursor("pointer");
			
		}
		,
		"toString": function() {
			return "[TreeBehaviors]";
		}
	}
);
