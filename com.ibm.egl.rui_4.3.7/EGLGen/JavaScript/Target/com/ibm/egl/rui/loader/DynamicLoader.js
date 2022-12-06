// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.loader', 'DynamicLoader',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/loader/DynamicLoader.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/loader/DynamicLoader',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst']){
				return egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'];
			}
			egl.com.ibm.egl.rui.loader.DynamicLoader['$inst']=this;
			this.debugView = null;
			
			this.loadDoneListeners = (function(){ var ezert$$1= []; ezert$$1.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$1[ i ] = null;
				}
				// no max size set for this array
			return ezert$$1;})();
			
			this.loadFailListeners = (function(){ var ezert$$2= []; ezert$$2.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$2[ i ] = null;
				}
				// no max size set for this array
			return ezert$$2;})();
			
			this.loadInfoListeners = (function(){ var ezert$$3= []; ezert$$3.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$3[ i ] = null;
				}
				// no max size set for this array
			return ezert$$3;})();
			
			this.INFO_LOAD = "";
			this.INFO_UNLOAD = "";
			this.INFO_UNLOAD_SKIP = "";
			this.INFO_DEBUG = "";
			this.deployCache = egl.createDictionary(false, false);
			
			this.loadedJsModuleCache = egl.createDictionary(false, false);
			
			this.unloadFilter = null;
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.debugView = null;
			this.INFO_LOAD = "LOAD";
			this.INFO_UNLOAD = "UNLOAD";
			this.INFO_UNLOAD_SKIP = "UNLOAD_SKIP";
			this.INFO_DEBUG = "DEBUG";
			this.unloadFilter = [ "com/ibm/egl/rui/", "dojo/widgets/" ].setType( "S;" );
		}
		
		,
		"loadHandler": function( handlerName ) {
			egl.checkNull(new egl.com.ibm.egl.rui.loader.internal.ModuleLoader()).loadHandler(handlerName, true, function(eze$$inout$aInstantiate) {
			}, this );
			
		}
		,
		"loadHandlerNoInstantiation": function( handlerName ) {
			egl.checkNull(new egl.com.ibm.egl.rui.loader.internal.ModuleLoader()).loadHandler(handlerName, false, function(eze$$inout$aInstantiate) {
			}, this );
			
		}
		,
		"unloadHandler": function( handlerName ) {
			egl.checkNull(new egl.com.ibm.egl.rui.loader.internal.ModuleLoader()).unloadHandler(handlerName );
			
		}
		,
		"showDebugView": function() {
			if ( (this.debugView == null) ) {
				this.debugView = new egl.com.ibm.egl.rui.loader.internal.DebugView();
			}
			
		}
		,
		"toString": function() {
			return "[DynamicLoader]";
		}
	}
);
