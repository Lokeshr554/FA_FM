// Generated at Tue Dec 06 11:54:47 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.loader.internal', 'ModuleLoader', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/loader/internal/ModuleLoader.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/loader/internal/ModuleLoader',
	"constructor" : function()
	{
		this.FAILLISTENER = "";
		this.INFORLISTENER = "";
		this.DONELISTENER = "";
		this.context = "";
		this.helper = new egl.com.ibm.egl.rui.loader.Helper();
		
		this.components = null;
		
		this.handlerName = "";
		this.baseURL = "";
		this.modules = null;
		
		this.currentModuleNum = 0;
		this.allJavaScript = "";
		this.alreadyLoaded = 0;
		this.moduleNames = null;
		
		this.instantiate = false;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.core.StrLib();
		new egl.com.ibm.egl.rui.loader.DynamicLoader();
		this.FAILLISTENER = "FAILLISTENER";
		this.INFORLISTENER = "INFORLISTENER";
		this.DONELISTENER = "DONELISTENER";
		this.context = this.helper.getContext();
		this.baseURL = this.helper.getBaseURL();
		this.instantiate = true;
	}
	
	,
	"loadHandler": function( handlerName, aInstantiate, eze$$aInstantiate$func_, eze$$caller ) {
		this.handlerName = this.resolvePackageName(handlerName, function(eze$$inout$fullname) {
			handlerName = eze$$inout$fullname;
		}, this );
		this.instantiate = aInstantiate;
		if ( !(this.helper.handlerLoaded(handlerName )) ) {
			var svc = new egl.egl.jsrt.EGLDedicatedServiceRefWrapper("svc", "com.ibm.egl.rui.loader.services.ModuleLoaderService", "");
			this.helper.configureServiceWrapper(svc );
			var ezert$$1_in = this.context;
			var ezert$$2_in = this.handlerName;
			var ezert$$3_in = this.helper.getPortNumber();
			var ezert$$4_in = this.helper.getLocale();
			var ezert$$5_in = this.helper.getDynamicLoadingList();
			var ezert$$6_in = this.getLoadedJsModule();
			var ezert$$7_ret = [function(obj){
				//out type is not nullable
				egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "Module", false);
				var retRec = new egl.com.ibm.egl.rui.loader.internal.Module();
				return retRec;
			}];
			svc.invokeService(this,
					new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.ModuleLoader.prototype.handleModules),
					new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.ModuleLoader.prototype.noHandlerFound),
					-1,
					"getModules",
					[ezert$$1_in, ezert$$2_in, ezert$$3_in, ezert$$4_in, ezert$$5_in, ezert$$6_in],
					["S;", "S;", "I;", "S;", "S;", "S;"],
					"project name port alocale dynamicLoadingList loadedJsList _return",
					[ezert$$7_ret],
					false,
					"", -1, -1,
					"",
					{});
			;
		}
		else {
			this.createHandler();
		}
		
	}
	,
	"handleModules": function( modules ) {
		this.modules = modules;
		this.allJavaScript = "";
		this.alreadyLoaded = 0;
		this.currentModuleNum = 0;
		egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache), this.handlerName,[  ],"1A;");
		this.moduleNames = [  ].setType( "S;" );
		this.invokeListeners(this.INFORLISTENER, String('',null), (("Received  " + (modules.getSize()).toString()) + " modules"), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
		try {
			this.doHandleModules();
		}
		catch ( ezert$$8 )
		{
			{
				if (!(ezert$$8 instanceof egl.egl.core.AnyException)) {
					ezert$$8 = egl.makeExceptionFromCaughtObject(ezert$$8);
				}
				var e = ezert$$8;
				this.invokeListeners(this.FAILLISTENER, String('',null), (("<font color=red><b>" + egl.checkNull(e).message) + "</b></font>"), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			}
		}
		
	}
	,
	"getLoadedJsModule": function() {
		var $result = "";
		var jsNameArr = null;
		jsNameArr = egl.getKeys(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache));
		var retStr = "";
		retStr = "";
		var len = 0;
		len = jsNameArr.getSize();
		{
			var counter = 0;
			counter = 1;
			for ( ; (counter <= len); counter = (counter + 1) )
			{
				var includeJs = "";
				includeJs = egl.convertAnyToString(egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache), egl.checkNull(jsNameArr)[jsNameArr.checkIndex((counter)-1)]),false);
				var lenJs = 0;
				lenJs = egl.egl.core.$StrLib.textLen( includeJs);
				if ( ((lenJs > 3) && (includeJs.substring( (lenJs - 2)-1,lenJs) == ".js")) ) {
					if ( (counter == 1) ) {
						retStr = egl.checkNull(jsNameArr)[jsNameArr.checkIndex((counter)-1)];
					}
					else {
						retStr = (retStr + ("," + egl.checkNull(jsNameArr)[jsNameArr.checkIndex((counter)-1)]));
					}
				}
			}
		}
		$result = retStr;
		return $result;
	}
	,
	"resolvePackageName": function( fullname, eze$$fullname$func_, eze$$caller ) {
		var $result = "";
		var delimiters = "";
		delimiters = ".";
		var arrFullName = null;
		arrFullName = this.helper.split(fullname, delimiters );
		var tokenCount = 0;
		tokenCount = arrFullName.getSize();
		if ( (tokenCount < 2) ) {
			$result = fullname;
			return $result;
		}
		this.handlerName = egl.checkNull(arrFullName)[arrFullName.checkIndex((tokenCount)-1)];
		var packageName = "";
		packageName = fullname.substring( 1-1,((egl.egl.core.$StrLib.textLen( fullname) - egl.egl.core.$StrLib.textLen( this.handlerName)) - 1));
		$result = (function(x){ return x != null ? ((x).toString()) : ""; })(((function(x){ return x != null ? ((x).toString()) : ""; })(((function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.lowerCase( packageName)) + ".")) + this.handlerName));
		return $result;
	}
	,
	"doHandleModules": function() {
		this.currentModuleNum = (this.currentModuleNum + 1);
		if ( (this.currentModuleNum <= this.modules.getSize()) ) {
			this.invokeListeners(this.INFORLISTENER, String('',null), ("Processing module " + (this.currentModuleNum).toString()), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			var module = new egl.com.ibm.egl.rui.loader.internal.Module();
			module.eze$$assign(egl.checkNull(this.modules)[this.modules.checkIndex((this.currentModuleNum)-1)]);
			egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache), module.name,module.name,"S;");
			if ( this.helper.notYetLoaded(module.name ) ) {
				this.invokeListeners(this.INFORLISTENER, String('',null), (("Module " + module.name) + " is not yet loaded"), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
				this.moduleNames.appendElement( module.name );
				this.helper.loadFile((this.baseURL + module.name), function() {
					var ezert$$9 = null;
					
					ezert$$9 = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.ModuleLoader.prototype.handleModuleContent);
				; return ezert$$9;}.call(this) );
			}
			else {
				this.invokeListeners(this.INFORLISTENER, String('',null), (("Module " + module.name) + " is already loaded"), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
				this.alreadyLoaded = (this.alreadyLoaded + 1);
				this.doHandleModules();
			}
		}
		else {
			egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache), this.handlerName,this.moduleNames,"1S;");
			this.helper.deleteDefaultConstructor(this.handlerName );
			this.helper.eval(this.allJavaScript );
			this.invokeListeners(this.INFORLISTENER, String('',null), (((("Processed " + ((this.currentModuleNum - 1)).toString()) + " modules (of which ") + (this.alreadyLoaded).toString()) + " components were already loaded)."), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			try {
				this.createHandler();
			}
			catch ( ezert$$10 )
			{
				{
					if (!(ezert$$10 instanceof egl.egl.core.AnyException)) {
						ezert$$10 = egl.makeExceptionFromCaughtObject(ezert$$10);
					}
					var e = ezert$$10;
					egl.removeAll(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache));
					this.invokeListeners(this.FAILLISTENER, String('',null), (("<font color=red><b>" + egl.checkNull(e).message) + "</b></font>"), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
				}
			}
		}
		
	}
	,
	"handleModuleContent": function( content ) {
		var currentModule = new egl.com.ibm.egl.rui.loader.internal.Module();
		currentModule.eze$$assign(egl.checkNull(this.modules)[this.modules.checkIndex((this.currentModuleNum)-1)]);
		this.allJavaScript = (this.allJavaScript + (((("// component " + currentModule.name) + "\r\n") + content) + "\r\n\r\n"));
		this.invokeListeners(this.INFORLISTENER, currentModule.name, String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_LOAD, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
		this.doHandleModules();
		
	}
	,
	"unloadHandler": function( handlerName ) {
		if ( egl.containsKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache),handlerName) ) {
			try {
				var components = null;
				components = egl.convertAnyToArrayType(egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache), handlerName),"1S;");
				if ( (components != null) ) {
					this.handlerName = handlerName;
					{
						var n = 0;
						n = 1;
						for ( ; (n <= components.getSize()); n = (n + 1) )
						{
							if ( !(this.matchUnloadFilter(egl.checkNull(components)[components.checkIndex((n)-1)] )) ) {
								var unloaded = false;
								unloaded = this.helper.unload(egl.checkNull(components)[components.checkIndex((n)-1)] );
								if ( unloaded ) {
									egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache), egl.checkNull(components)[components.checkIndex((n)-1)],"","S;");
									this.invokeListeners(this.INFORLISTENER, egl.checkNull(components)[components.checkIndex((n)-1)], String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
								}
								else {
									this.invokeListeners(this.INFORLISTENER, egl.checkNull(components)[components.checkIndex((n)-1)], String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD_SKIP, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
								}
							}
							else {
								this.invokeListeners(this.INFORLISTENER, egl.checkNull(components)[components.checkIndex((n)-1)], String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD_SKIP, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
							}
						}
					}
				}
				egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache), handlerName,[  ],"1A;");
				this.helper.setDefaultConstructor(handlerName );
			}
			catch ( ezert$$11 )
			{
				{
					if (!(ezert$$11 instanceof egl.egl.core.AnyException)) {
						ezert$$11 = egl.makeExceptionFromCaughtObject(ezert$$11);
					}
					var e = ezert$$11;
					this.invokeListeners(this.FAILLISTENER, String('',null), ((("UNLOAD " + handlerName) + ": ") + egl.checkNull(e).message), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
				}
			}
		}
		
	}
	,
	"matchUnloadFilter": function( moduleName ) {
		var $result = false;
		var filterCounts = 0;
		filterCounts = egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].unloadFilter.getSize();
		var filterLen = 0;
		var filter = "";
		var moduleNameLen = 0;
		moduleNameLen = egl.egl.core.$StrLib.textLen( moduleName);
		{
			var i = 0;
			i = 1;
			for ( ; (i <= filterCounts); i = (i + 1) )
			{
				filter = egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].unloadFilter[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].unloadFilter.checkIndex((i)-1)];
				filterLen = egl.egl.core.$StrLib.textLen( filter);
				if ( (moduleNameLen >= filterLen) ) {
					if ( (moduleName.substring( 1-1,filterLen) == filter) ) {
						$result = true;
						return $result;
					}
				}
			}
		}
		$result = false;
		return $result;
	}
	,
	"noHandlerFound": function( e ) {
		var details = "";
		details = ((((((egl.checkNull(e).message + " ") + egl.checkNull(egl.convertAnyExToNameType(e,'Tegl/core/ServiceInvocationException;')).detail1) + " ") + egl.checkNull(egl.convertAnyExToNameType(e,'Tegl/core/ServiceInvocationException;')).detail2) + " ") + egl.checkNull(egl.convertAnyExToNameType(e,'Tegl/core/ServiceInvocationException;')).detail3);
		this.invokeListeners(this.FAILLISTENER, String('',null), ((("<font color=red><b>Cannot load " + this.handlerName) + "</b></font>: ") + details), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
		
	}
	,
	"createHandler": function() {
		if ( this.instantiate ) {
			this.invokeListeners(this.INFORLISTENER, String('',null), ("Now creating an instance of " + this.handlerName), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			var page = null;
			page = egl.boxAny(this.helper.createHandler(this.handlerName ));
			var widgets = (function(){ var ezert$$12= []; ezert$$12.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
					ezert$$12[ i ] = new egl.egl.ui.rui.Widget();
				}
				// no max size set for this array
			return ezert$$12;})();
			try {
				widgets.appendAll( this.helper.getField(egl.unboxAny(page), "initialUI" ) );
			}
			catch ( ezert$$13 )
			{
				{
					if (!(ezert$$13 instanceof egl.egl.core.AnyException)) {
						ezert$$13 = egl.makeExceptionFromCaughtObject(ezert$$13);
					}
					var ignoreMissingInitialUIField = ezert$$13;
				}
			}
			var handlerLoadedEvent = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
			handlerLoadedEvent.name = this.handlerName;
			handlerLoadedEvent.initialUI = widgets;
			handlerLoadedEvent.theHandler = page;
			this.invokeListeners(this.DONELISTENER, String('',null), String('',null), String('',null), function() {
				var ezert$$14 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
				
				ezert$$14.eze$$assign(handlerLoadedEvent);
			; return ezert$$14;}.call(this) );
		}
		else {
			var handlerLoadedEvent = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
			handlerLoadedEvent.name = this.handlerName;
			handlerLoadedEvent.initialUI = [  ];
			handlerLoadedEvent.theHandler = null;
			this.invokeListeners(this.DONELISTENER, String('',null), String('',null), String('',null), function() {
				var ezert$$15 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
				
				ezert$$15.eze$$assign(handlerLoadedEvent);
			; return ezert$$15;}.call(this) );
		}
		
	}
	,
	"invokeListeners": function( ListenerType, resourceName, message, code, loadedEvent ) {
		switch( ListenerType ) {
			case this.INFORLISTENER:
				{
					var i = 0;
					i = 1;
					for ( ; (i <= egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners.getSize()); i = (i + 1) )
					{
						egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners.checkIndex((i)-1)](this.handlerName, resourceName, code, message );
					}
				}
				break;
			case this.FAILLISTENER:
				{
					var i = 0;
					i = 1;
					for ( ; (i <= egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners.getSize()); i = (i + 1) )
					{
						egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners.checkIndex((i)-1)](this.handlerName, message );
					}
				}
				break;
			case this.DONELISTENER:
				{
					var i = 0;
					i = 1;
					for ( ; (i <= egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners.getSize()); i = (i + 1) )
					{
						egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners.checkIndex((i)-1)](function() {
							var ezert$$16 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
							
							ezert$$16.eze$$assign(loadedEvent);
						; return ezert$$16;}.call(this) );
					}
				}
				break;
			default:
			break;
		}
		
	}
	,
	"toString": function() {
		return "[ModuleLoader]";
	}
}
);
