// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.loader.internal', 'ModuleTypeLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/loader/internal/ModuleTypeLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/loader/internal/ModuleTypeLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.loader.internal.ModuleTypeLib['$inst']){
				return egl.com.ibm.egl.rui.loader.internal.ModuleTypeLib['$inst'];
			}
			egl.com.ibm.egl.rui.loader.internal.ModuleTypeLib['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.css = "cssFile";
			this.property = "propertyFile";
			this.imports = "importFile";
			this.runtimeProperty = "runtimePropertyFile";
			this.include = "includeFile";
		}
		
		,
		"toString": function() {
			return "[ModuleTypeLib]";
		}
	}
);
