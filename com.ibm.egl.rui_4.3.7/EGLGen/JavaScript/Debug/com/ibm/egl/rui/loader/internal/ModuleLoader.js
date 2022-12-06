// Generated at Tue Dec 06 11:54:47 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.loader.internal', 'ModuleLoader', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/loader/internal/ModuleLoader.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/loader/internal/ModuleLoader',
	"constructor" : function()
	{
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("<init>",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,54,2036,37, this);
			this.FAILLISTENER = "";
			egl.atLine(this.eze$$fileName,55,2076,39, this);
			this.INFORLISTENER = "";
			egl.atLine(this.eze$$fileName,56,2118,37, this);
			this.DONELISTENER = "";
			egl.atLine(this.eze$$fileName,59,2181,37, this);
			this.context = "";
			egl.atLine(this.eze$$fileName,60,2221,16, this);
			this.helper = new egl.com.ibm.egl.rui.loader.Helper();
			
			egl.atLine(this.eze$$fileName,61,2240,20, this);
			this.components = null;
			
			egl.atLine(this.eze$$fileName,62,2263,19, this);
			this.handlerName = "";
			egl.atLine(this.eze$$fileName,63,2285,37, this);
			this.baseURL = "";
			egl.atLine(this.eze$$fileName,65,2328,17, this);
			this.modules = null;
			
			egl.atLine(this.eze$$fileName,66,2348,21, this);
			this.currentModuleNum = 0;
			egl.atLine(this.eze$$fileName,67,2372,21, this);
			this.allJavaScript = "";
			egl.atLine(this.eze$$fileName,68,2396,18, this);
			this.alreadyLoaded = 0;
			egl.atLine(this.eze$$fileName,69,2418,21, this);
			this.moduleNames = null;
			
			egl.atLine(this.eze$$fileName,70,2442,27, this);
			this.instantiate = false;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.StrLib();
			new egl.com.ibm.egl.rui.loader.DynamicLoader();
			egl.atLine(this.eze$$fileName,54,2036,37, this);
			this.FAILLISTENER = "FAILLISTENER";
			egl.atLine(this.eze$$fileName,55,2076,39, this);
			this.INFORLISTENER = "INFORLISTENER";
			egl.atLine(this.eze$$fileName,56,2118,37, this);
			this.DONELISTENER = "DONELISTENER";
			egl.atLine(this.eze$$fileName,59,2198,19, this);
			var ezert$$1 = "";
			ezert$$1 = this.helper.getContext();
			egl.atLine(this.eze$$fileName,59,2181,37, this);
			this.context = ezert$$1;
			egl.atLine(this.eze$$fileName,63,2302,19, this);
			var ezert$$2 = "";
			ezert$$2 = this.helper.getBaseURL();
			egl.atLine(this.eze$$fileName,63,2285,37, this);
			this.baseURL = ezert$$2;
			egl.atLine(this.eze$$fileName,70,2442,27, this);
			this.instantiate = true;
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"loadHandler": function( handlerName, aInstantiate, eze$$aInstantiate$func_, eze$$caller ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("loadHandler",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("handlerName", handlerName, "string", "handlerName");
			egl.addLocalFunctionVariable("aInstantiate", aInstantiate, "boolean", "aInstantiate");
			egl.atLine(this.eze$$fileName,74,2565,31, this);
			var ezert$$3 = "";
			ezert$$3 = this.resolvePackageName(handlerName, function(eze$$inout$fullname) {
				handlerName = eze$$inout$fullname;
				egl.setLocalFunctionVariable("handlerName", handlerName, "string");
			}, this );
			egl.setLocalFunctionVariable("handlerName", handlerName, "string");
			egl.atLine(this.eze$$fileName,74,2546,51, this);
			this.handlerName = ezert$$3;
			egl.atLine(this.eze$$fileName,75,2601,32, this);
			this.instantiate = aInstantiate;
			egl.atLine(this.eze$$fileName,77,2639,372, this);
			if ( !(this.helper.handlerLoaded(handlerName )) ) {
				try{egl.enterBlock();
					var svc = new egl.egl.jsrt.EGLDedicatedServiceRefWrapper("svc", "com.ibm.egl.rui.loader.services.ModuleLoaderService", "");
					egl.addLocalFunctionVariable("svc", svc, "com.ibm.egl.rui.loader.services.ModuleLoaderService", "svc");
					egl.atLine(this.eze$$fileName,79,2736,36, this);
					this.helper.configureServiceWrapper(svc );
					egl.atLine(this.eze$$fileName,80,2777,198, this);
					var ezert$$4_in = this.context;
					var ezert$$5_in = this.handlerName;
					var ezert$$6_in = this.helper.getPortNumber();
					var ezert$$7_in = this.helper.getLocale();
					var ezert$$8_in = this.helper.getDynamicLoadingList();
					var ezert$$9_in = this.getLoadedJsModule();
					var ezert$$10_ret = [function(obj){
						//out type is not nullable
						egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "Module", false);
						var retRec = new egl.com.ibm.egl.rui.loader.internal.Module();
						return retRec;
					}];
					if(egl__enableEditing !== true){
							svc.invokeService(this,
									new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.ModuleLoader.prototype.handleModules,"handleModules"),
									new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.ModuleLoader.prototype.noHandlerFound,"noHandlerFound"),
									-1,
									"getModules",
									[ezert$$4_in, ezert$$5_in, ezert$$6_in, ezert$$7_in, ezert$$8_in, ezert$$9_in],
									["S;", "S;", "I;", "S;", "S;", "S;"],
									"project name port alocale dynamicLoadingList loadedJsList _return",
									[ezert$$10_ret],
									false,
									"", -1, -1,
									"",
									{});
					}
					;
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,82,2988,16, this);
					this.createHandler();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,73,2477,540, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"handleModules": function( modules ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("handleModules",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("modules", modules, "com.ibm.egl.rui.loader.internal.Module[]", "!modules");
			egl.atLine(this.eze$$fileName,87,3069,23, this);
			this.modules = modules;
			egl.atLine(this.eze$$fileName,88,3096,19, this);
			this.allJavaScript = "";
			egl.atLine(this.eze$$fileName,89,3119,18, this);
			this.alreadyLoaded = 0;
			egl.atLine(this.eze$$fileName,90,3141,21, this);
			this.currentModuleNum = 0;
			egl.atLine(this.eze$$fileName,91,3166,30, this);
			egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache, "DynamicLoader.deployCache"), this.handlerName,[  ],"1A;");
			egl.atLine(this.eze$$fileName,92,3200,17, this);
			this.moduleNames = [  ].setType( "S;" );
			egl.atLine(this.eze$$fileName,93,3276,17, this);
			var ezert$$11 = 0;
			ezert$$11 = modules.getSize();
			egl.atLine(this.eze$$fileName,93,3221,103, this);
			this.invokeListeners(this.INFORLISTENER, String('',null), (("Received  " + (ezert$$11).toString()) + " modules"), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			egl.atLine(this.eze$$fileName,94,3328,175, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,95,3339,18, this);
					this.doHandleModules();
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$12 )
			{
				{
					if (ezert$$12 instanceof egl.egl.debug.DebugTermination){throw ezert$$12;}
					if (!(ezert$$12 instanceof egl.egl.core.AnyException)) {
						ezert$$12 = egl.makeExceptionFromCaughtObject(ezert$$12);
					}
					var e = ezert$$12;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,97,3394,102, this);
							this.invokeListeners(this.FAILLISTENER, String('',null), (("<font color=red><b>" + egl.checkNull(e, "e").message) + "</b></font>"), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,86,3022,487, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getLoadedJsModule": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("getLoadedJsModule",this,arguments,eze$$updater);
			var $result = "";
			var jsNameArr = null;
			egl.addLocalFunctionVariable("jsNameArr", jsNameArr, "string[]", "!jsNameArr");
			egl.atLine(this.eze$$fileName,102,3592,29, this);
			var ezert$$13 = null;
			ezert$$13 = egl.getKeys(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache));
			egl.atLine(this.eze$$fileName,102,3570,52, this);
			jsNameArr = ezert$$13;
			egl.setLocalFunctionVariable("jsNameArr", jsNameArr, "string[]");
			var retStr = "";
			egl.addLocalFunctionVariable("retStr", retStr, "string", "retStr");
			egl.atLine(this.eze$$fileName,103,3626,19, this);
			retStr = "";
			egl.setLocalFunctionVariable("retStr", retStr, "string");
			var len = 0;
			egl.addLocalFunctionVariable("len", len, "int", "len");
			egl.atLine(this.eze$$fileName,104,3659,19, this);
			var ezert$$14 = 0;
			ezert$$14 = jsNameArr.getSize();
			egl.atLine(this.eze$$fileName,104,3649,30, this);
			len = ezert$$14;
			egl.setLocalFunctionVariable("len", len, "int");
			egl.atLine(this.eze$$fileName,105,3683,333, this);
			{
				try{egl.enterBlock();
					var counter = 0;
					egl.addLocalFunctionVariable("counter", counter, "int", "counter");
					counter = 1;
					egl.setLocalFunctionVariable("counter", counter, "int");
					for ( ; (counter <= len); counter = (counter + 1) )
					{
						egl.setLocalFunctionVariable("counter", counter, "int");
						try{egl.enterBlock();
							var includeJs = "";
							egl.addLocalFunctionVariable("includeJs", includeJs, "string", "includeJs");
							egl.atLine(this.eze$$fileName,106,3719,59, this);
							includeJs = egl.convertAnyToString(egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache, "DynamicLoader.loadedJsModuleCache"), egl.checkNull(jsNameArr, "jsNameArr")[jsNameArr.checkIndex((counter)-1)]),false);
							egl.setLocalFunctionVariable("includeJs", includeJs, "string");
							var lenJs = 0;
							egl.addLocalFunctionVariable("lenJs", lenJs, "int", "lenJs");
							egl.atLine(this.eze$$fileName,107,3795,30, this);
							var ezert$$15 = 0;
							ezert$$15 = egl.egl.core.$StrLib.textLen( includeJs);
							egl.atLine(this.eze$$fileName,107,3783,43, this);
							lenJs = ezert$$15;
							egl.setLocalFunctionVariable("lenJs", lenJs, "int");
							egl.atLine(this.eze$$fileName,108,3831,178, this);
							if ( ((lenJs > 3) && (includeJs.substring( (lenJs - 2)-1,lenJs) == ".js")) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,109,3889,112, this);
									if ( (counter == 1) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,110,3912,28, this);
											retStr = egl.checkNull(jsNameArr, "jsNameArr")[jsNameArr.checkIndex((counter)-1)];
											egl.setLocalFunctionVariable("retStr", retStr, "string");
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,112,3957,35, this);
											retStr = (retStr + ("," + egl.checkNull(jsNameArr, "jsNameArr")[jsNameArr.checkIndex((counter)-1)]));
											egl.setLocalFunctionVariable("retStr", retStr, "string");
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,105,3683,333, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,117,4024,15, this);
			$result = retStr;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"resolvePackageName": function( fullname, eze$$fullname$func_, eze$$caller ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("resolvePackageName",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("fullname", fullname, "string", "fullname");
			var delimiters = "";
			egl.addLocalFunctionVariable("delimiters", delimiters, "string", "delimiters");
			egl.atLine(this.eze$$fileName,121,4123,24, this);
			delimiters = ".";
			egl.setLocalFunctionVariable("delimiters", delimiters, "string");
			var arrFullName = null;
			egl.addLocalFunctionVariable("arrFullName", arrFullName, "string[]", "!arrFullName");
			egl.atLine(this.eze$$fileName,122,4174,34, this);
			var ezert$$16 = null;
			ezert$$16 = this.helper.split(fullname, delimiters );
			egl.atLine(this.eze$$fileName,122,4151,58, this);
			arrFullName = ezert$$16;
			egl.setLocalFunctionVariable("arrFullName", arrFullName, "string[]");
			var tokenCount = 0;
			egl.addLocalFunctionVariable("tokenCount", tokenCount, "int", "tokenCount");
			egl.atLine(this.eze$$fileName,123,4230,21, this);
			var ezert$$17 = 0;
			ezert$$17 = arrFullName.getSize();
			egl.atLine(this.eze$$fileName,123,4213,39, this);
			tokenCount = ezert$$17;
			egl.setLocalFunctionVariable("tokenCount", tokenCount, "int");
			egl.atLine(this.eze$$fileName,124,4256,47, this);
			if ( (tokenCount < 2) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,125,4279,17, this);
					$result = fullname;
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,127,4307,38, this);
			this.handlerName = egl.checkNull(arrFullName, "arrFullName")[arrFullName.checkIndex((tokenCount)-1)];
			var packageName = "";
			egl.addLocalFunctionVariable("packageName", packageName, "string", "packageName");
			egl.atLine(this.eze$$fileName,128,4383,29, this);
			var ezert$$18 = 0;
			ezert$$18 = egl.egl.core.$StrLib.textLen( fullname);
			egl.atLine(this.eze$$fileName,128,4415,32, this);
			var ezert$$19 = 0;
			ezert$$19 = egl.egl.core.$StrLib.textLen( this.handlerName);
			egl.atLine(this.eze$$fileName,128,4349,103, this);
			packageName = fullname.substring( 1-1,((ezert$$18 - ezert$$19) - 1));
			egl.setLocalFunctionVariable("packageName", packageName, "string");
			egl.atLine(this.eze$$fileName,129,4464,29, this);
			var ezert$$20 = null;
			ezert$$20 = egl.egl.core.$StrLib.lowerCase( packageName);
			egl.atLine(this.eze$$fileName,129,4456,59, this);
			var ezert$$21 = null;
			ezert$$21 = ezert$$20;
			$result = (function(x){ return x != null ? ((x).toString()) : ""; })(((function(x){ return x != null ? ((x).toString()) : ""; })(((function(x){ return x != null ? ((x).toString()) : ""; })(ezert$$21) + ".")) + this.handlerName));
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"doHandleModules": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("doHandleModules",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,133,4557,22, this);
			this.currentModuleNum = (this.currentModuleNum + 1);
			egl.atLine(this.eze$$fileName,134,4606,22, this);
			var ezert$$22 = 0;
			ezert$$22 = this.modules.getSize();
			egl.atLine(this.eze$$fileName,134,4583,1320, this);
			if ( (this.currentModuleNum <= ezert$$22) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,135,4634,99, this);
					this.invokeListeners(this.INFORLISTENER, String('',null), ("Processing module " + (this.currentModuleNum).toString()), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
					var module = new egl.com.ibm.egl.rui.loader.internal.Module();
					egl.addLocalFunctionVariable("module", module, "com.ibm.egl.rui.loader.internal.Module", "module");
					egl.atLine(this.eze$$fileName,136,4738,42, this);
					module.eze$$assign(egl.checkNull(this.modules, "modules")[this.modules.checkIndex((this.currentModuleNum)-1)]);
					egl.setLocalFunctionVariable("module", module, "com.ibm.egl.rui.loader.internal.Module");
					egl.atLine(this.eze$$fileName,137,4786,47, this);
					egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache, "DynamicLoader.loadedJsModuleCache"), module.name,module.name,"S;");
					egl.atLine(this.eze$$fileName,138,4842,32, this);
					var ezert$$23 = false;
					ezert$$23 = this.helper.notYetLoaded(module.name );
					egl.atLine(this.eze$$fileName,138,4838,510, this);
					if ( ezert$$23 ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,139,4881,108, this);
							this.invokeListeners(this.INFORLISTENER, String('',null), (("Module " + module.name) + " is not yet loaded"), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
							egl.atLine(this.eze$$fileName,140,4995,28, this);
							this.moduleNames.appendElement( module.name );
							egl.atLine(this.eze$$fileName,141,5108,60, this);
							this.helper.loadFile((this.baseURL + module.name), function() {
								var ezert$$24 = null;
								
								ezert$$24 = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.ModuleLoader.prototype.handleModuleContent,"handleModuleContent");
							; return ezert$$24;}.call(this) );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,143,5183,108, this);
							this.invokeListeners(this.INFORLISTENER, String('',null), (("Module " + module.name) + " is already loaded"), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
							egl.atLine(this.eze$$fileName,144,5297,19, this);
							this.alreadyLoaded = (this.alreadyLoaded + 1);
							egl.atLine(this.eze$$fileName,145,5322,18, this);
							this.doHandleModules();
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,148,5361,39, this);
					egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache, "DynamicLoader.deployCache"), this.handlerName,this.moduleNames,"1S;");
					egl.atLine(this.eze$$fileName,149,5417,45, this);
					this.helper.deleteDefaultConstructor(this.handlerName );
					egl.atLine(this.eze$$fileName,150,5467,27, this);
					this.helper.eval(this.allJavaScript );
					egl.atLine(this.eze$$fileName,151,5499,177, this);
					this.invokeListeners(this.INFORLISTENER, String('',null), (((("Processed " + ((this.currentModuleNum - 1)).toString()) + " modules (of which ") + (this.alreadyLoaded).toString()) + " components were already loaded)."), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
					egl.atLine(this.eze$$fileName,152,5681,214, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,153,5691,16, this);
							this.createHandler();
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$25 )
					{
						{
							if (ezert$$25 instanceof egl.egl.debug.DebugTermination){throw ezert$$25;}
							if (!(ezert$$25 instanceof egl.egl.core.AnyException)) {
								ezert$$25 = egl.makeExceptionFromCaughtObject(ezert$$25);
							}
							var e = ezert$$25;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,155,5746,32, this);
									egl.removeAll(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache));
									egl.atLine(this.eze$$fileName,156,5784,103, this);
									this.invokeListeners(this.FAILLISTENER, String('',null), (("<font color=red><b>" + egl.checkNull(e, "e").message) + "</b></font>"), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,132,4527,1382, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"handleModuleContent": function( content ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("handleModuleContent",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("content", content, "string", "content");
			var currentModule = new egl.com.ibm.egl.rui.loader.internal.Module();
			egl.addLocalFunctionVariable("currentModule", currentModule, "com.ibm.egl.rui.loader.internal.Module", "currentModule");
			egl.atLine(this.eze$$fileName,162,5966,54, this);
			currentModule.eze$$assign(egl.checkNull(this.modules, "modules")[this.modules.checkIndex((this.currentModuleNum)-1)]);
			egl.setLocalFunctionVariable("currentModule", currentModule, "com.ibm.egl.rui.loader.internal.Module");
			egl.atLine(this.eze$$fileName,163,6024,86, this);
			this.allJavaScript = (this.allJavaScript + (((("// component " + currentModule.name) + "\r\n") + content) + "\r\n\r\n"));
			egl.atLine(this.eze$$fileName,164,6114,79, this);
			this.invokeListeners(this.INFORLISTENER, currentModule.name, String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_LOAD, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			egl.atLine(this.eze$$fileName,165,6197,18, this);
			this.doHandleModules();
			egl.atLine(this.eze$$fileName,161,5915,306, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"unloadHandler": function( handlerName ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("unloadHandler",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("handlerName", handlerName, "string", "handlerName");
			egl.atLine(this.eze$$fileName,169,6280,36, this);
			var ezert$$26 = false;
			ezert$$26 = egl.containsKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache),handlerName);
			egl.atLine(this.eze$$fileName,169,6277,961, this);
			if ( ezert$$26 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,170,6322,908, this);
					try {
						try{egl.enterBlock();
							var components = null;
							egl.addLocalFunctionVariable("components", components, "string[]", "!components");
							egl.atLine(this.eze$$fileName,171,6331,47, this);
							components = egl.convertAnyToArrayType(egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache, "DynamicLoader.deployCache"), handlerName),"1S;");
							egl.setLocalFunctionVariable("components", components, "string[]");
							egl.atLine(this.eze$$fileName,172,6384,618, this);
							if ( (components != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,173,6414,31, this);
									this.handlerName = handlerName;
									egl.atLine(this.eze$$fileName,174,6452,541, this);
									{
										try{egl.enterBlock();
											var n = 0;
											egl.addLocalFunctionVariable("n", n, "int", "n");
											n = 1;
											egl.setLocalFunctionVariable("n", n, "int");
											for ( ; (n <= components.getSize()); n = (n + 1) )
											{
												egl.setLocalFunctionVariable("n", n, "int");
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,175,6502,481, this);
													if ( !(this.matchUnloadFilter(egl.checkNull(components, "components")[components.checkIndex((n)-1)] )) ) {
														try{egl.enterBlock();
															var unloaded = false;
															egl.addLocalFunctionVariable("unloaded", unloaded, "boolean", "unloaded");
															egl.atLine(this.eze$$fileName,176,6567,28, this);
															var ezert$$27 = false;
															ezert$$27 = this.helper.unload(egl.checkNull(components, "components")[components.checkIndex((n)-1)] );
															egl.atLine(this.eze$$fileName,176,6548,48, this);
															unloaded = ezert$$27;
															egl.setLocalFunctionVariable("unloaded", unloaded, "boolean");
															egl.atLine(this.eze$$fileName,177,6606,264, this);
															if ( unloaded ) {
																try{egl.enterBlock();
																	egl.atLine(this.eze$$fileName,178,6628,40, this);
																	egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadedJsModuleCache, "DynamicLoader.loadedJsModuleCache"), egl.checkNull(components, "components")[components.checkIndex((n)-1)],"","S;");
																	egl.atLine(this.eze$$fileName,179,6678,76, this);
																	this.invokeListeners(this.INFORLISTENER, egl.checkNull(components, "components")[components.checkIndex((n)-1)], String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
																}finally{egl.exitBlock();}
															}
															else {
																try{egl.enterBlock();
																	egl.atLine(this.eze$$fileName,181,6777,81, this);
																	this.invokeListeners(this.INFORLISTENER, egl.checkNull(components, "components")[components.checkIndex((n)-1)], String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD_SKIP, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
																}finally{egl.exitBlock();}
															}
														}finally{egl.exitBlock();}
													}
													else {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,184,6891,81, this);
															this.invokeListeners(this.INFORLISTENER, egl.checkNull(components, "components")[components.checkIndex((n)-1)], String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD_SKIP, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,174,6452,541, this);
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,188,7008,30, this);
							egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache, "DynamicLoader.deployCache"), handlerName,[  ],"1A;");
							egl.atLine(this.eze$$fileName,189,7044,42, this);
							this.helper.setDefaultConstructor(handlerName );
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$28 )
					{
						{
							if (ezert$$28 instanceof egl.egl.debug.DebugTermination){throw ezert$$28;}
							if (!(ezert$$28 instanceof egl.egl.core.AnyException)) {
								ezert$$28 = egl.makeExceptionFromCaughtObject(ezert$$28);
							}
							var e = ezert$$28;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,191,7125,97, this);
									this.invokeListeners(this.FAILLISTENER, String('',null), ((("UNLOAD " + handlerName) + ": ") + egl.checkNull(e, "e").message), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,168,6228,1016, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"matchUnloadFilter": function( moduleName ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("matchUnloadFilter",this,arguments,eze$$updater);
			var $result = false;
			egl.addLocalFunctionVariable("moduleName", moduleName, "string", "moduleName");
			var filterCounts = 0;
			egl.addLocalFunctionVariable("filterCounts", filterCounts, "int", "filterCounts");
			egl.atLine(this.eze$$fileName,197,7339,22, this);
			var ezert$$29 = 0;
			ezert$$29 = egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].unloadFilter.getSize();
			egl.atLine(this.eze$$fileName,197,7320,42, this);
			filterCounts = ezert$$29;
			egl.setLocalFunctionVariable("filterCounts", filterCounts, "int");
			var filterLen = 0;
			egl.addLocalFunctionVariable("filterLen", filterLen, "int", "filterLen");
			var filter = "";
			egl.addLocalFunctionVariable("filter", filter, "string", "filter");
			var moduleNameLen = 0;
			egl.addLocalFunctionVariable("moduleNameLen", moduleNameLen, "int", "moduleNameLen");
			egl.atLine(this.eze$$fileName,200,7422,31, this);
			var ezert$$30 = 0;
			ezert$$30 = egl.egl.core.$StrLib.textLen( moduleName);
			egl.atLine(this.eze$$fileName,200,7402,52, this);
			moduleNameLen = ezert$$30;
			egl.setLocalFunctionVariable("moduleNameLen", moduleNameLen, "int");
			egl.atLine(this.eze$$fileName,201,7458,233, this);
			{
				try{egl.enterBlock();
					var i = 0;
					egl.addLocalFunctionVariable("i", i, "int", "i");
					i = 1;
					egl.setLocalFunctionVariable("i", i, "int");
					for ( ; (i <= filterCounts); i = (i + 1) )
					{
						egl.setLocalFunctionVariable("i", i, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,202,7496,25, this);
							filter = egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].unloadFilter[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].unloadFilter.checkIndex((i)-1)];
							egl.setLocalFunctionVariable("filter", filter, "string");
							egl.atLine(this.eze$$fileName,203,7538,27, this);
							var ezert$$31 = 0;
							ezert$$31 = egl.egl.core.$StrLib.textLen( filter);
							egl.atLine(this.eze$$fileName,203,7526,40, this);
							filterLen = ezert$$31;
							egl.setLocalFunctionVariable("filterLen", filterLen, "int");
							egl.atLine(this.eze$$fileName,204,7571,112, this);
							if ( (moduleNameLen >= filterLen) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,205,7607,68, this);
									if ( (moduleName.substring( 1-1,filterLen) == filter) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,206,7652,14, this);
											$result = true;
											egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
											{ if (!egl.debugg) egl.leave(); return $result;}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,201,7458,233, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,210,7695,15, this);
			$result = false;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"noHandlerFound": function( e ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("noHandlerFound",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
			var details = "";
			egl.addLocalFunctionVariable("details", details, "string", "details");
			egl.atLine(this.eze$$fileName,214,7767,190, this);
			details = ((((((egl.checkNull(e, "e").message + " ") + egl.checkNull(egl.convertAnyExToNameType(e,'Tegl/core/ServiceInvocationException;'), "e as ServiceInvocationException").detail1) + " ") + egl.checkNull(egl.convertAnyExToNameType(e,'Tegl/core/ServiceInvocationException;'), "e as ServiceInvocationException").detail2) + " ") + egl.checkNull(egl.convertAnyExToNameType(e,'Tegl/core/ServiceInvocationException;'), "e as ServiceInvocationException").detail3);
			egl.setLocalFunctionVariable("details", details, "string");
			egl.atLine(this.eze$$fileName,218,7963,129, this);
			this.invokeListeners(this.FAILLISTENER, String('',null), ((("<font color=red><b>Cannot load " + this.handlerName) + "</b></font>: ") + details), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			egl.atLine(this.eze$$fileName,213,7721,377, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"createHandler": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("createHandler",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,222,8133,755, this);
			if ( this.instantiate ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,223,8158,104, this);
					this.invokeListeners(this.INFORLISTENER, String('',null), ("Now creating an instance of " + this.handlerName), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
					var page = null;
					egl.addLocalFunctionVariable("page", page, "any", "page");
					egl.atLine(this.eze$$fileName,224,8278,33, this);
					var ezert$$32 = null;
					ezert$$32 = this.helper.createHandler(this.handlerName );
					egl.atLine(this.eze$$fileName,224,8267,45, this);
					page = egl.boxAny(ezert$$32);
					egl.setLocalFunctionVariable("page", page, "any");
					var widgets = (function(){ var ezert$$33= []; ezert$$33.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
							ezert$$33[ i ] = new egl.egl.ui.rui.Widget();
						}
						// no max size set for this array
					return ezert$$33;})();
					egl.addLocalFunctionVariable("widgets", widgets, "egl.ui.rui.Widget[]", "!widgets");
					egl.atLine(this.eze$$fileName,226,8340,130, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,227,8367,34, this);
							var ezert$$34 = null;
							ezert$$34 = egl.boxElements(this.helper.getField(egl.unboxAny(page), "initialUI" ));
							egl.atLine(this.eze$$fileName,227,8349,54, this);
							widgets.appendAll( ezert$$34 );
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$35 )
					{
						{
							if (ezert$$35 instanceof egl.egl.debug.DebugTermination){throw ezert$$35;}
							if (!(ezert$$35 instanceof egl.egl.core.AnyException)) {
								ezert$$35 = egl.makeExceptionFromCaughtObject(ezert$$35);
							}
							var ignoreMissingInitialUIField = ezert$$35;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("ignoreMissingInitialUIField", ignoreMissingInitialUIField, "egl.core.AnyException", "ignoreMissingInitialUIField");
								try{egl.enterBlock();
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
					var handlerLoadedEvent = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
					egl.addLocalFunctionVariable("handlerLoadedEvent", handlerLoadedEvent, "com.ibm.egl.rui.loader.HandlerLoadedEvent", "handlerLoadedEvent");
					egl.atLine(this.eze$$fileName,231,8520,18, this);
					handlerLoadedEvent.name = this.handlerName;
					egl.atLine(this.eze$$fileName,232,8546,19, this);
					handlerLoadedEvent.initialUI = widgets;
					egl.atLine(this.eze$$fileName,233,8572,17, this);
					handlerLoadedEvent.theHandler = page;
					egl.atLine(this.eze$$fileName,235,8601,73, this);
					this.invokeListeners(this.DONELISTENER, String('',null), String('',null), String('',null), function() {
						var ezert$$36 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
						
						ezert$$36.eze$$assign(handlerLoadedEvent);
					; return ezert$$36;}.call(this) );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					var handlerLoadedEvent = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
					egl.addLocalFunctionVariable("handlerLoadedEvent", handlerLoadedEvent, "com.ibm.egl.rui.loader.HandlerLoadedEvent", "handlerLoadedEvent");
					egl.atLine(this.eze$$fileName,238,8732,18, this);
					handlerLoadedEvent.name = this.handlerName;
					egl.atLine(this.eze$$fileName,239,8758,14, this);
					handlerLoadedEvent.initialUI = [  ];
					egl.atLine(this.eze$$fileName,240,8779,17, this);
					handlerLoadedEvent.theHandler = null;
					egl.atLine(this.eze$$fileName,242,8808,73, this);
					this.invokeListeners(this.DONELISTENER, String('',null), String('',null), String('',null), function() {
						var ezert$$37 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
						
						ezert$$37.eze$$assign(handlerLoadedEvent);
					; return ezert$$37;}.call(this) );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,221,8105,789, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"invokeListeners": function( ListenerType, resourceName, message, code, loadedEvent ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("invokeListeners",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("ListenerType", ListenerType, "string", "ListenerType");
			egl.addLocalFunctionVariable("resourceName", resourceName, "string", "resourceName");
			egl.addLocalFunctionVariable("message", message, "string", "message");
			egl.addLocalFunctionVariable("code", code, "string", "code");
			egl.addLocalFunctionVariable("loadedEvent", loadedEvent, "com.ibm.egl.rui.loader.HandlerLoadedEvent", "loadedEvent");
			egl.atLine(this.eze$$fileName,247,9055,448, this);
			switch( ListenerType ) {
				case this.INFORLISTENER:
					egl.atLine(this.eze$$fileName,248,9079,152, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,249,9104,127, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								i = 1;
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i <= egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners.getSize()); i = (i + 1) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,250,9159,63, this);
										egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners.checkIndex((i)-1)](this.handlerName, resourceName, code, message );
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,249,9104,127, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
					break;
				case this.FAILLISTENER:
					egl.atLine(this.eze$$fileName,252,9237,131, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,253,9261,107, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								i = 1;
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i <= egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners.getSize()); i = (i + 1) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,254,9316,43, this);
										egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners.checkIndex((i)-1)](this.handlerName, message );
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,253,9261,107, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
					break;
				case this.DONELISTENER:
					egl.atLine(this.eze$$fileName,256,9373,122, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,257,9397,98, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								i = 1;
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i <= egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners.getSize()); i = (i + 1) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,258,9452,34, this);
										egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners.checkIndex((i)-1)](function() {
											var ezert$$38 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
											
											ezert$$38.eze$$assign(loadedEvent);
										; return ezert$$38;}.call(this) );
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,257,9397,98, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
					break;
				default:
				try{egl.enterBlock();
				}finally{egl.exitBlock();}
				break;
			}
			egl.atLine(this.eze$$fileName,246,8901,608, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[ModuleLoader]";
	}
	,
	"eze$$getName": function() {
		return "ModuleLoader";
	}
	,
	"eze$$getChildVariables": function() {
		var eze$$parent = this;
		return [
		{name : "Build Descriptor", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
					return [
					{name : "Name", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "com_ibm_egl_ruiJavaScriptBuildOptions";}}, type : ""},
					{name : "Path", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "\\com.ibm.egl.rui_4.3.7\\EGLSource\\com_ibm_egl_rui.eglbld";}}, type : ""},
					{name : "Options", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
								return [
								{name : "bidiConversionTable", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "bind", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "blanksAsZero", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "buildPlan", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "byteArrayOperationsForStructuredRecords", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cachePreparedStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cancelAfterTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "checkNumericOverflow", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "checkToTransaction", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "checkType", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cicsEntries", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cicsj2cTimeout", value : -1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "clientCodeSet", value : "IBM-850", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "commentLevel", value : 1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "currencyLocation", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "currencySymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "data", value : 31, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "dbContentSeparator", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "dbms", value : "DERBY", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "debugTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "decimalSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultDateFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultMoneyFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultNumericFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultTimeFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultTimeStampFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "deploymentDescriptor", value : "com_ibm_egl_rui", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destHost", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destLibrary", value : "QGPL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destPort", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destUserID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "eliminateSystemDependentCode", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "enableJavaWrapperGen", value : "NO", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "endCommarea", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "errorDestination", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "fillWithNulls", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "formServicePgmType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genDDSFile", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genDataTables", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genFixedLengthSqlLike", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genFormGroup", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genHelpFormGroup", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genProject", value : "com.ibm.egl.rui_4.3.7", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genProperties", value : "GLOBAL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genResourceBundle", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genReturnImmediate", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genRunFile", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genVGUIRecords", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "imsFastPath", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "imsLogID", value : "NOLOG", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "imsPSB", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "includeLineNumbers", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "j2ee", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "j2eeLevel", value : "1.3", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "leftAlign", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "linkEdit", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "linkage", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "math", value : "COBOL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "maxNumericDigits", value : 31, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "mfsExtendedAttr", value : "YES", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "mfsIgnore", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "mfsUseTestLibrary", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "msgTablePrefix", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "positiveSignIndicator", value : "F", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "prep", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "prepareAllSQLStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "preparedStatementCacheSize", value : -1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "printDestination", value : "PROGRAMCONTROLLED", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "projectID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "reservedWord", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "resourceAssociations", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "resourceBundleLocale", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "restartTransactionID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "restoreCurrentMsgOnError", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "returnTransaction", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "separatorSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "serverCodeSet", value : "IBM-037", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "serverType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sessionBeanID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "setFormItemFull", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spaADF", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spaSize", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spaStatusBytePosition", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spacesZero", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlAccessColumnsAsBytes", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlCommitControl", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlDB", value : "jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlErrorTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlIOTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlJDBCDriverClass", value : "org.apache.derby.jdbc.EmbeddedDriver", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlJNDIName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlSchema", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlValidationConnectionURL", value : "jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "startTransactionID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "statementTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "synchOnPgmTransfer", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "synchOnTrxTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sysCodes", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "system", value : "JAVASCRIPT", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "targetNLS", value : "ENU", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "tempDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "templateDir", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "transferErrorTransaction", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "truncateExtraDecimals", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "twaOffset", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "useCurrentSchema", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "useXctlForTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "userMessageFile", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60DecimalBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60NumWithCharBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60NumWithDateBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60SQLNullableBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v71AddBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "vagCompatibility", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateBlankDateFields", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateMixedItems", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateOnlyIfModified", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateSQLStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "vseLibrary", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "workDBType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "wrapperCompatibility", value : "CURRENT", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "wrapperPackageName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""}
					];}, "toString": function(){return ""}}, type : ""}
		];}, "toString": function() {return ""}}, type : ""},
		
		{name : "System Variables", attrs : egl.ATTR_SYSTEM_VAR, value : {"eze$$getChildVariables": function() {
					return [
					{name: "StrLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$StrLib, type : "egl.core.StrLib", jsName : "egl.egl.core.StrLib.$inst"},
					{name: "SysVar", attrs : egl.ATTR_SYSTEM_VAR, value : eze$$parent.jsrt$SysVar, type : "egl.core.SysVar", jsName : "jsrt$SysVar"},
					{name: "ServiceLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$ServiceLib, type : "egl.core.ServiceLib", jsName : "egl.egl.core.ServiceLib.$inst"},
		];}, "toString": function(){return ""}}, type : "", jsName : ""},
		
		{name: "DynamicLoader", value : egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'], type : "com.ibm.egl.rui.loader.DynamicLoader", jsName : "egl.com.ibm.egl.rui.loader.DynamicLoader.$inst"},
		{name: "FAILLISTENER", value : eze$$parent.FAILLISTENER, type : "string", jsName : "FAILLISTENER"},
		{name: "INFORLISTENER", value : eze$$parent.INFORLISTENER, type : "string", jsName : "INFORLISTENER"},
		{name: "DONELISTENER", value : eze$$parent.DONELISTENER, type : "string", jsName : "DONELISTENER"},
		{name: "context", value : eze$$parent.context, type : "string", jsName : "context"},
		{name: "helper", value : eze$$parent.helper, type : "com.ibm.egl.rui.loader.internal.Helper", jsName : "helper"},
		{name: "components", value : eze$$parent.components, type : "string[]", jsName : "!components"},
		{name: "handlerName", value : eze$$parent.handlerName, type : "string", jsName : "handlerName"},
		{name: "baseURL", value : eze$$parent.baseURL, type : "string", jsName : "baseURL"},
		{name: "modules", value : eze$$parent.modules, type : "com.ibm.egl.rui.loader.internal.Module[]", jsName : "!modules"},
		{name: "currentModuleNum", value : eze$$parent.currentModuleNum, type : "int", jsName : "currentModuleNum"},
		{name: "allJavaScript", value : eze$$parent.allJavaScript, type : "string", jsName : "allJavaScript"},
		{name: "alreadyLoaded", value : eze$$parent.alreadyLoaded, type : "int", jsName : "alreadyLoaded"},
		{name: "moduleNames", value : eze$$parent.moduleNames, type : "string[]", jsName : "!moduleNames"},
		{name: "instantiate", value : eze$$parent.instantiate, type : "boolean", jsName : "instantiate"}
		];
	}
}
);
