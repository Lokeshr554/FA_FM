// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'MVCLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/MVCLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/MVCLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.MVCLib['$inst']){
				return egl.com.ibm.egl.rui.mvc.MVCLib['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst']=this;
			this.currentController = null;
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.currentController = null;
		}
		
		,
		"getCurrentContext": function() {
			var $result = null;
			$result = this.currentController;
			return $result;
		}
		,
		"setCurrentContext": function( acontroller ) {
			this.currentController = acontroller;
			
		}
		,
		"toString": function() {
			return "[MVCLib]";
		}
	}
);
