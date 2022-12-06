// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.loader.internal', 'DebugView', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/loader/internal/DebugView.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/loader/internal/DebugView',
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
			egl.atLine(this.eze$$fileName,23,755,62, this);
			this.monitor = new egl.com.ibm.egl.rui.widgets.Div();
			egl.addEmbeddedWidget(this, "monitor");
			
			egl.atLine(this.eze$$fileName,24,821,297, this);
			this.amonitor = new egl.com.ibm.egl.rui.widgets.HTML();
			egl.addEmbeddedWidget(this, "amonitor");
			
			egl.atLine(this.eze$$fileName,32,1121,16, this);
			this.helper = new egl.com.ibm.egl.rui.loader.Helper();
			
			egl.atLine(this.eze$$fileName,33,1140,17, this);
			this.dojoUsed = false;
			egl.atLine(this.eze$$fileName,34,1160,87, this);
			this.showDebugViewButton = new egl.com.ibm.egl.rui.widgets.Button();
			egl.addEmbeddedWidget(this, "showDebugViewButton");
			
			egl.atLine(this.eze$$fileName,35,1250,168, this);
			this.HTML = new egl.com.ibm.egl.rui.widgets.HTML();
			egl.addEmbeddedWidget(this, "HTML");
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.DateTimeLib();
			new egl.com.ibm.egl.rui.loader.DynamicLoader();
			new egl.egl.ui.rui.RUILib();
			new egl.egl.core.StrLib();
			egl.atLine(this.eze$$fileName,22,696,22, this);
			this.targetWidget = this.monitor;
			egl.atLine(this.eze$$fileName,23,767,48, this);
			egl.checkNull(this.monitor, "monitor").setChildren( [ this.HTML, this.showDebugViewButton, this.amonitor ] );
			egl.atLine(this.eze$$fileName,25,840,36, this);
			egl.checkNull(this.amonitor, "amonitor").setBackgroundColor("RGB(217,234,233)");
			egl.atLine(this.eze$$fileName,25,879,11, this);
			egl.checkNull(this.amonitor, "amonitor").setHeight((400).toString());
			egl.atLine(this.eze$$fileName,25,892,11, this);
			egl.checkNull(this.amonitor, "amonitor").setPadding(5);
			egl.atLine(this.eze$$fileName,26,908,15, this);
			egl.checkNull(this.amonitor, "amonitor").setBorderWidth(2);
			egl.atLine(this.eze$$fileName,26,925,25, this);
			egl.checkNull(this.amonitor, "amonitor").setBorderColor("LightBlue");
			egl.atLine(this.eze$$fileName,27,956,9, this);
			egl.checkNull(this.amonitor, "amonitor").setText("");
			egl.atLine(this.eze$$fileName,27,967,25, this);
			egl.checkNull(this.amonitor, "amonitor").setStyle("overflow-y:scroll");
			egl.atLine(this.eze$$fileName,28,997,31, this);
			egl.checkNull(this.amonitor, "amonitor").getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.enableSelection,"enableSelection") );
			egl.atLine(this.eze$$fileName,29,1033,54, this);
			egl.checkNull(this.amonitor, "amonitor").setLayoutData({eze$$value : (function () {
					var ezert$$1 = new egl.com.ibm.egl.rui.widgets.GridLayoutData();
					egl.atLine(this.eze$$fileName,29,1066,7, this);
					ezert$$1.row = 1;
					egl.atLine(this.eze$$fileName,29,1075,10, this);
					ezert$$1.column = 1;
					return ezert$$1;
			}).call(this).eze$$clone(), eze$$signature : "Tcom/ibm/egl/rui/widgets/gridlayoutdata;"});
			egl.atLine(this.eze$$fileName,30,1092,21, this);
			egl.checkNull(this.amonitor, "amonitor").setBorderStyle("solid");
			egl.atLine(this.eze$$fileName,34,1188,15, this);
			egl.checkNull(this.showDebugViewButton, "showDebugViewButton").setText("<<Hide");
			egl.atLine(this.eze$$fileName,34,1205,39, this);
			egl.checkNull(this.showDebugViewButton, "showDebugViewButton").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.showDebugViewButton_onClick,"showDebugViewButton_onClick") );
			egl.atLine(this.eze$$fileName,35,1261,83, this);
			egl.checkNull(this.HTML, "HTML").setText("<hr style = 'border:1px solid RGB(217,234,233);'>Dynamic Loader Debug View");
			egl.atLine(this.eze$$fileName,36,1349,22, this);
			egl.checkNull(this.HTML, "HTML").setColor("DarkSeaGreen");
			egl.atLine(this.eze$$fileName,37,1376,19, this);
			egl.checkNull(this.HTML, "HTML").setFontWeight("bold");
			egl.atLine(this.eze$$fileName,38,1400,15, this);
			egl.checkNull(this.HTML, "HTML").setFontSize("25");
			if (egl.debugg && egl.mainAppName == (this.eze$$package ? this.eze$$package + "." : "") + this.eze$$typename){
				egl.insideConstructionFunc = true;
			}
			this.start();
			egl.insideConstructionFunc = false;
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"start": function() {
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
		try { egl.enter("start",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,41,1445,46, this);
			egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners.appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.traceDone,"traceDone") );
			egl.atLine(this.eze$$fileName,42,1495,48, this);
			egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners.appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.traceFailed,"traceFailed") );
			egl.atLine(this.eze$$fileName,43,1547,46, this);
			egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners.appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.traceInfo,"traceInfo") );
			egl.atLine(this.eze$$fileName,44,1597,47, this);
			(function () {
				var ezert$$2 = new egl.egl.javascript.Job();
				egl.atLine(this.eze$$fileName,44,1607,23, this);
				ezert$$2.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.addToBody,"addToBody") );
				return ezert$$2;
			}).call(this).schedule();
			egl.atLine(this.eze$$fileName,40,1425,225, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"enableSelection": function( e ) {
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
		try { egl.enter("enableSelection",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,48,1696,86, this);
			if ( !(egl.egl.ui.rui.RUILib['$inst'].getTextSelectionEnabled()) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,49,1738,37, this);
					egl.egl.ui.rui.RUILib['$inst'].setTextSelectionEnabled(true );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,47,1656,132, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"traceDone": function( e ) {
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
		try { egl.enter("traceDone",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "com.ibm.egl.rui.loader.HandlerLoadedEvent", "e");
			var msg = "";
			egl.addLocalFunctionVariable("msg", msg, "string", "msg");
			egl.atLine(this.eze$$fileName,55,1856,438, this);
			if ( (e.theHandler != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,56,1910,30, this);
					var ezert$$3 = egl.egl.core.$DateTimeLib.currentTimeStamp( "yyyyMMddHHmmssffffff" );
					ezert$$3 = egl.egl.core.$DateTimeLib.currentTimeStamp(  );
					egl.atLine(this.eze$$fileName,57,2025,21, this);
					var ezert$$4 = 0;
					ezert$$4 = e.initialUI.getSize();
					egl.atLine(this.eze$$fileName,56,1883,218, this);
					msg = (((((("<font color=blue>[" + egl.egl.core.$StrLib.formatTimeStamp( ezert$$3, (egl.egl.core.$StrLib.defaultTimeStampFormat == "") ? egl.formatTimeStampPattern("yyyyMMddHHmmssffffff") : egl.egl.core.$StrLib.defaultTimeStampFormat )) + "]</font> <font color=orange><b>") + e.name) + "&nbsp;</b><b>LOAD DONE. &nbsp;") + (ezert$$4).toString()) + " ui widget(s) initilized.</b> </font><br>");
					egl.setLocalFunctionVariable("msg", msg, "string");
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,60,2141,30, this);
					var ezert$$5 = egl.egl.core.$DateTimeLib.currentTimeStamp( "yyyyMMddHHmmssffffff" );
					ezert$$5 = egl.egl.core.$DateTimeLib.currentTimeStamp(  );
					egl.atLine(this.eze$$fileName,60,2114,173, this);
					msg = (((("<font color=blue>[" + egl.egl.core.$StrLib.formatTimeStamp( ezert$$5, (egl.egl.core.$StrLib.defaultTimeStampFormat == "") ? egl.formatTimeStampPattern("yyyyMMddHHmmssffffff") : egl.egl.core.$StrLib.defaultTimeStampFormat )) + "]</font> <font color=orange><b>") + e.name) + "&nbsp;</b><b>LOAD DONE. no instance is created.</b> </font><br>");
					egl.setLocalFunctionVariable("msg", msg, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,63,2299,11, this);
			this.debug(msg );
			egl.atLine(this.eze$$fileName,53,1794,522, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"traceFailed": function( handlerName, message ) {
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
		try { egl.enter("traceFailed",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("handlerName", handlerName, "string", "handlerName");
			egl.addLocalFunctionVariable("message", message, "string", "message");
			var details = "";
			egl.addLocalFunctionVariable("details", details, "string", "details");
			egl.atLine(this.eze$$fileName,67,2388,25, this);
			details = message;
			egl.setLocalFunctionVariable("details", details, "string");
			egl.atLine(this.eze$$fileName,68,2421,54, this);
			var ezert$$6 = 0;
			ezert$$6 = egl.egl.core.$StrLib.indexOf( message, ("Connection refused: connect"));
			egl.setLocalFunctionVariable("message", message, "string");
			egl.atLine(this.eze$$fileName,68,2417,432, this);
			if ( (ezert$$6 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,69,2485,357, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,70,2512,30, this);
							var ezert$$7 = 0;
							ezert$$7 = egl.egl.core.$StrLib.indexOf( details, ("URL"));
							egl.setLocalFunctionVariable("details", details, "string");
							egl.atLine(this.eze$$fileName,70,2547,28, this);
							var ezert$$8 = 0;
							ezert$$8 = egl.egl.core.$StrLib.textLen( details);
							egl.atLine(this.eze$$fileName,70,2494,83, this);
							details = details.substring( (ezert$$7 + 4)-1,ezert$$8);
							egl.setLocalFunctionVariable("details", details, "string");
							egl.atLine(this.eze$$fileName,71,2605,33, this);
							var ezert$$9 = 0;
							ezert$$9 = egl.egl.core.$StrLib.indexOf( details, ("EGL000"));
							egl.setLocalFunctionVariable("details", details, "string");
							egl.atLine(this.eze$$fileName,71,2583,59, this);
							details = details.substring( 1-1,(ezert$$9 - 1));
							egl.setLocalFunctionVariable("details", details, "string");
							egl.atLine(this.eze$$fileName,72,2648,129, this);
							details = ("Bound service for IModuleLoader is not running. Please check deployment descriptor and start server. URL: " + details);
							egl.setLocalFunctionVariable("details", details, "string");
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$10 )
					{
						{
							if (ezert$$10 instanceof egl.egl.debug.DebugTermination){throw ezert$$10;}
							if (!(ezert$$10 instanceof egl.egl.core.AnyException)) {
								ezert$$10 = egl.makeExceptionFromCaughtObject(ezert$$10);
							}
							var e = ezert$$10;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,74,2816,18, this);
									details = message;
									egl.setLocalFunctionVariable("details", details, "string");
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,77,2857,31, this);
			var ezert$$11 = 0;
			ezert$$11 = egl.egl.core.$StrLib.indexOf( message, ("404 "));
			egl.setLocalFunctionVariable("message", message, "string");
			egl.atLine(this.eze$$fileName,77,2853,359, this);
			if ( (ezert$$11 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,78,2898,307, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,79,2925,30, this);
							var ezert$$12 = 0;
							ezert$$12 = egl.egl.core.$StrLib.indexOf( details, ("URL"));
							egl.setLocalFunctionVariable("details", details, "string");
							egl.atLine(this.eze$$fileName,79,2960,28, this);
							var ezert$$13 = 0;
							ezert$$13 = egl.egl.core.$StrLib.textLen( details);
							egl.atLine(this.eze$$fileName,79,2907,83, this);
							details = details.substring( (ezert$$12 + 4)-1,ezert$$13);
							egl.setLocalFunctionVariable("details", details, "string");
							egl.atLine(this.eze$$fileName,80,3018,33, this);
							var ezert$$14 = 0;
							ezert$$14 = egl.egl.core.$StrLib.indexOf( details, ("EGL000"));
							egl.setLocalFunctionVariable("details", details, "string");
							egl.atLine(this.eze$$fileName,80,2996,59, this);
							details = details.substring( 1-1,(ezert$$14 - 1));
							egl.setLocalFunctionVariable("details", details, "string");
							egl.atLine(this.eze$$fileName,81,3061,79, this);
							details = ("Server is running, but it reports a 404 on the service. " + details);
							egl.setLocalFunctionVariable("details", details, "string");
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$15 )
					{
						{
							if (ezert$$15 instanceof egl.egl.debug.DebugTermination){throw ezert$$15;}
							if (!(ezert$$15 instanceof egl.egl.core.AnyException)) {
								ezert$$15 = egl.makeExceptionFromCaughtObject(ezert$$15);
							}
							var e = ezert$$15;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,83,3179,18, this);
									details = message;
									egl.setLocalFunctionVariable("details", details, "string");
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,86,3216,85, this);
			this.debug((((handlerName + " load fail: <font color=red><b>") + details) + "</b></font><br>") );
			var eze_Cond_Temp_0 = false;
			egl.atLine(this.eze$$fileName,87,3309,50, this);
			if ( this.dojoUsed ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,87,3309,50, this);
					eze_Cond_Temp_0 = true;
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,87,3321,33, this);
					var ezert$$16 = 0;
					ezert$$16 = egl.egl.core.$StrLib.indexOf( details, ("'dojo'"));
					egl.setLocalFunctionVariable("details", details, "string");
					egl.atLine(this.eze$$fileName,87,3309,50, this);
					if ( (ezert$$16 != 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,87,3309,50, this);
							eze_Cond_Temp_0 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,87,3309,50, this);
							eze_Cond_Temp_0 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,87,3305,165, this);
			if ( eze_Cond_Temp_0 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,88,3365,98, this);
					this.debug("<font color=blue><b>Tip: Declare a Dojo widget field to your main handler</b></font><br>" );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,66,2322,1154, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"traceInfo": function( handlerName, resourceName, code, msg ) {
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
		try { egl.enter("traceInfo",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("handlerName", handlerName, "string", "handlerName");
			egl.addLocalFunctionVariable("resourceName", resourceName, "string", "resourceName");
			egl.addLocalFunctionVariable("code", code, "string", "code");
			egl.addLocalFunctionVariable("msg", msg, "string", "msg");
			var prefix = "";
			egl.addLocalFunctionVariable("prefix", prefix, "string", "prefix");
			egl.atLine(this.eze$$fileName,93,3619,30, this);
			var ezert$$17 = egl.egl.core.$DateTimeLib.currentTimeStamp( "yyyyMMddHHmmssffffff" );
			ezert$$17 = egl.egl.core.$DateTimeLib.currentTimeStamp(  );
			egl.atLine(this.eze$$fileName,93,3582,123, this);
			prefix = (((((("<font color=blue>[" + egl.egl.core.$StrLib.formatTimeStamp( ezert$$17, (egl.egl.core.$StrLib.defaultTimeStampFormat == "") ? egl.formatTimeStampPattern("yyyyMMddHHmmssffffff") : egl.egl.core.$StrLib.defaultTimeStampFormat )) + "] <b>") + handlerName) + "&nbsp;</b> <b>") + code) + "&nbsp;</b>");
			egl.setLocalFunctionVariable("prefix", prefix, "string");
			egl.atLine(this.eze$$fileName,94,3709,295, this);
			switch( code ) {
				case egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG:
					egl.atLine(this.eze$$fileName,95,3724,55, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,95,3755,24, this);
						this.traceDebug(msg, prefix );
					}finally{egl.exitBlock();}
					break;
				case egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_LOAD:
					egl.atLine(this.eze$$fileName,96,3784,62, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,96,3814,32, this);
						this.traceLoad(resourceName, prefix );
					}finally{egl.exitBlock();}
					break;
				case egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD:
					egl.atLine(this.eze$$fileName,97,3851,66, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,97,3883,34, this);
						this.traceUnload(resourceName, prefix );
					}finally{egl.exitBlock();}
					break;
				case egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD_SKIP:
					egl.atLine(this.eze$$fileName,98,3922,75, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,98,3959,38, this);
						this.traceUnloadSkip(resourceName, prefix );
					}finally{egl.exitBlock();}
					break;
				default:
				try{egl.enterBlock();
				}finally{egl.exitBlock();}
				break;
			}
			egl.atLine(this.eze$$fileName,92,3482,528, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"traceLoad": function( resourceName, prefix ) {
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
		try { egl.enter("traceLoad",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("resourceName", resourceName, "string", "resourceName");
			egl.addLocalFunctionVariable("prefix", prefix, "string", "prefix");
			egl.atLine(this.eze$$fileName,103,4080,84, this);
			this.debug((((prefix + " <font color=orange><b>") + resourceName) + "</b></font></font><br>") );
			egl.atLine(this.eze$$fileName,102,4016,154, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"traceUnload": function( resourceName, prefix ) {
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
		try { egl.enter("traceUnload",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("resourceName", resourceName, "string", "resourceName");
			egl.addLocalFunctionVariable("prefix", prefix, "string", "prefix");
			egl.atLine(this.eze$$fileName,107,4241,84, this);
			this.debug((((prefix + " <font color=orange><b>") + resourceName) + "</b></font></font><br>") );
			egl.atLine(this.eze$$fileName,106,4175,156, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"traceUnloadSkip": function( resourceName, prefix ) {
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
		try { egl.enter("traceUnloadSkip",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("resourceName", resourceName, "string", "resourceName");
			egl.addLocalFunctionVariable("prefix", prefix, "string", "prefix");
			egl.atLine(this.eze$$fileName,111,4406,75, this);
			this.debug((((prefix + " <font color=blue>") + resourceName) + "</font></font><br>") );
			egl.atLine(this.eze$$fileName,110,4336,151, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"traceDebug": function( msg, prefix ) {
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
		try { egl.enter("traceDebug",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("msg", msg, "string", "msg");
			egl.addLocalFunctionVariable("prefix", prefix, "string", "prefix");
			egl.atLine(this.eze$$fileName,115,4548,36, this);
			this.debug(((prefix + msg) + "</font><br>") );
			egl.atLine(this.eze$$fileName,114,4492,98, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"debug": function( s ) {
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
		try { egl.enter("debug",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("s", s, "string", "s");
			egl.atLine(this.eze$$fileName,119,4627,34, this);
			egl.checkNull(this.amonitor, "amonitor").setText((s + egl.checkNull(this.amonitor, "amonitor").getText()));
			egl.atLine(this.eze$$fileName,118,4595,72, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"addToBody": function() {
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
		try { egl.enter("addToBody",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,123,4696,35, this);
			this.document.body.appendChild(this.monitor );
			egl.atLine(this.eze$$fileName,122,4672,65, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"showDebugViewButton_onClick": function( event ) {
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
		try { egl.enter("showDebugViewButton_onClick",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("event", event, "egl.ui.rui.Event", "event");
			egl.atLine(this.eze$$fileName,127,4799,176, this);
			if ( egl.checkNull(this.amonitor, "amonitor").getVisible() ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,128,4824,25, this);
					egl.checkNull(this.amonitor, "amonitor").setVisible(false);
					egl.atLine(this.eze$$fileName,129,4854,36, this);
					egl.checkNull(this.showDebugViewButton, "showDebugViewButton").setText("Show>>");
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,131,4903,36, this);
					egl.checkNull(this.showDebugViewButton, "showDebugViewButton").setText("<<Hide");
					egl.atLine(this.eze$$fileName,132,4944,24, this);
					egl.checkNull(this.amonitor, "amonitor").setVisible(true);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,126,4743,238, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[DebugView]";
	}
	,
	"eze$$getName": function() {
		return "DebugView";
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
		{name: "pixelWidth", value : function(){try{return eze$$parent.getPixelWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "pixelWidth", getter : "getPixelWidth", setter : "setPixelWidth"},
		{name: "pixelHeight", value : function(){try{return eze$$parent.getPixelHeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "pixelHeight", getter : "getPixelHeight", setter : "setPixelHeight"},
		{name: "logicalParent", value : function(){try{return eze$$parent.getLogicalParent();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "logicalParent", getter : "getLogicalParent", setter : "setLogicalParent"},
		{name: "parent", value : function(){try{return eze$$parent.getParent();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "parent", getter : "getParent", setter : "setParent"},
		{name: "style", value : function(){try{return eze$$parent.getStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "style", getter : "getStyle", setter : "setStyle"},
		{name: "background", value : function(){try{return eze$$parent.getBackground();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "background", getter : "getBackground", setter : "setBackground"},
		{name: "layoutData", value : function(){try{return eze$$parent.getLayoutData();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "any", jsName : "layoutData", getter : "getLayoutData", setter : "setLayoutData"},
		{name: "tabIndex", value : function(){try{return eze$$parent.getTabIndex();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "tabIndex", getter : "getTabIndex", setter : "setTabIndex"},
		{name: "ariaLive", value : function(){try{return eze$$parent.getAriaLive();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ariaLive", getter : "getAriaLive", setter : "setAriaLive"},
		{name: "ariaRole", value : function(){try{return eze$$parent.getAriaRole();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ariaRole", getter : "getAriaRole", setter : "setAriaRole"},
		{name: "disabled", value : function(){try{return eze$$parent.getDisabled();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "boolean", jsName : "disabled", getter : "getDisabled", setter : "setDisabled"},
		{name: "cursor", value : function(){try{return eze$$parent.getCursor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "cursor", getter : "getCursor", setter : "setCursor"},
		{name: "visibility", value : function(){try{return eze$$parent.getVisibility();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "visibility", getter : "getVisibility", setter : "setVisibility"},
		{name: "visible", value : function(){try{return eze$$parent.getVisible();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "boolean", jsName : "visible", getter : "getVisible", setter : "setVisible"},
		{name: "opacity", value : function(){try{return eze$$parent.getOpacity();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "opacity", getter : "getOpacity", setter : "setOpacity"},
		{name: "zIndex", value : function(){try{return eze$$parent.getZIndex();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "zIndex", getter : "getZIndex", setter : "setZIndex"},
		{name: "height", value : function(){try{return eze$$parent.getHeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "height", getter : "getHeight", setter : "setHeight"},
		{name: "width", value : function(){try{return eze$$parent.getWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "width", getter : "getWidth", setter : "setWidth"},
		{name: "y", value : function(){try{return eze$$parent.getY();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "y", getter : "getY", setter : "setY"},
		{name: "x", value : function(){try{return eze$$parent.getX();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "x", getter : "getX", setter : "setX"},
		{name: "position", value : function(){try{return eze$$parent.getPosition();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "position", getter : "getPosition", setter : "setPosition"},
		{name: "marginBottom", value : function(){try{return eze$$parent.getMarginBottom();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginBottom", getter : "getMarginBottom", setter : "setMarginBottom"},
		{name: "marginTop", value : function(){try{return eze$$parent.getMarginTop();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginTop", getter : "getMarginTop", setter : "setMarginTop"},
		{name: "marginRight", value : function(){try{return eze$$parent.getMarginRight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginRight", getter : "getMarginRight", setter : "setMarginRight"},
		{name: "marginLeft", value : function(){try{return eze$$parent.getMarginLeft();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginLeft", getter : "getMarginLeft", setter : "setMarginLeft"},
		{name: "margin", value : function(){try{return eze$$parent.getMargin();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "margin", getter : "getMargin", setter : "setMargin"},
		{name: "paddingBottom", value : function(){try{return eze$$parent.getPaddingBottom();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingBottom", getter : "getPaddingBottom", setter : "setPaddingBottom"},
		{name: "paddingTop", value : function(){try{return eze$$parent.getPaddingTop();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingTop", getter : "getPaddingTop", setter : "setPaddingTop"},
		{name: "paddingRight", value : function(){try{return eze$$parent.getPaddingRight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingRight", getter : "getPaddingRight", setter : "setPaddingRight"},
		{name: "paddingLeft", value : function(){try{return eze$$parent.getPaddingLeft();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingLeft", getter : "getPaddingLeft", setter : "setPaddingLeft"},
		{name: "padding", value : function(){try{return eze$$parent.getPadding();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "padding", getter : "getPadding", setter : "setPadding"},
		{name: "borderBottomStyle", value : function(){try{return eze$$parent.getBorderBottomStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderBottomStyle", getter : "getBorderBottomStyle", setter : "setBorderBottomStyle"},
		{name: "borderTopStyle", value : function(){try{return eze$$parent.getBorderTopStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderTopStyle", getter : "getBorderTopStyle", setter : "setBorderTopStyle"},
		{name: "borderRightStyle", value : function(){try{return eze$$parent.getBorderRightStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderRightStyle", getter : "getBorderRightStyle", setter : "setBorderRightStyle"},
		{name: "borderLeftStyle", value : function(){try{return eze$$parent.getBorderLeftStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderLeftStyle", getter : "getBorderLeftStyle", setter : "setBorderLeftStyle"},
		{name: "borderStyle", value : function(){try{return eze$$parent.getBorderStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderStyle", getter : "getBorderStyle", setter : "setBorderStyle"},
		{name: "borderBottomWidth", value : function(){try{return eze$$parent.getBorderBottomWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderBottomWidth", getter : "getBorderBottomWidth", setter : "setBorderBottomWidth"},
		{name: "borderTopWidth", value : function(){try{return eze$$parent.getBorderTopWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderTopWidth", getter : "getBorderTopWidth", setter : "setBorderTopWidth"},
		{name: "borderRightWidth", value : function(){try{return eze$$parent.getBorderRightWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderRightWidth", getter : "getBorderRightWidth", setter : "setBorderRightWidth"},
		{name: "borderLeftWidth", value : function(){try{return eze$$parent.getBorderLeftWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderLeftWidth", getter : "getBorderLeftWidth", setter : "setBorderLeftWidth"},
		{name: "borderWidth", value : function(){try{return eze$$parent.getBorderWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderWidth", getter : "getBorderWidth", setter : "setBorderWidth"},
		{name: "borderColor", value : function(){try{return eze$$parent.getBorderColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderColor", getter : "getBorderColor", setter : "setBorderColor"},
		{name: "fontWeight", value : function(){try{return eze$$parent.getFontWeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "fontWeight", getter : "getFontWeight", setter : "setFontWeight"},
		{name: "fontSize", value : function(){try{return eze$$parent.getFontSize();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "fontSize", getter : "getFontSize", setter : "setFontSize"},
		{name: "font", value : function(){try{return eze$$parent.getFont();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "font", getter : "getFont", setter : "setFont"},
		{name: "backgroundColor", value : function(){try{return eze$$parent.getBackgroundColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "backgroundColor", getter : "getBackgroundColor", setter : "setBackgroundColor"},
		{name: "color", value : function(){try{return eze$$parent.getColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "color", getter : "getColor", setter : "setColor"},
		{name: "class", value : function(){try{return eze$$parent.getClass();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ezekw$$class", getter : "getClass", setter : "setClass"},
		{name: "id", value : function(){try{return eze$$parent.getID();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "id", getter : "getID", setter : "setID"},
		{name: "targetWidget", value : eze$$parent.targetWidget, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "targetWidget"},
		{name: "tagName", value : function(){try{return eze$$parent.getTagName();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "tagName", getter : "getTagName", setter : "setTagName"},
		{name: "innerHTML", value : function(){try{return eze$$parent.getInnerHTML();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "innerHTML", getter : "getInnerHTML", setter : "setInnerHTML"},
		{name: "innerText", value : function(){try{return eze$$parent.getInnerText();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "innerText", getter : "getInnerText", setter : "setInnerText"},
		{name: "children", value : function(){try{return eze$$parent.getChildren();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget[]", jsName : "!children", getter : "getChildren", setter : "setChildren"},
		{name: "document", value : eze$$parent.document, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Document", jsName : "document"},
		{name: "onChange", value : function(){try{return eze$$parent.getOnChange();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onChange", getter : "getOnChange", setter : "setOnChange"},
		{name: "onClick", value : function(){try{return eze$$parent.getOnClick();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onClick", getter : "getOnClick", setter : "setOnClick"},
		{name: "onContextMenu", value : function(){try{return eze$$parent.getOnContextMenu();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onContextMenu", getter : "getOnContextMenu", setter : "setOnContextMenu"},
		{name: "onFocusGained", value : function(){try{return eze$$parent.getOnFocusGained();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onFocusGained", getter : "getOnFocusGained", setter : "setOnFocusGained"},
		{name: "onFocusLost", value : function(){try{return eze$$parent.getOnFocusLost();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onFocusLost", getter : "getOnFocusLost", setter : "setOnFocusLost"},
		{name: "onKeyDown", value : function(){try{return eze$$parent.getOnKeyDown();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyDown", getter : "getOnKeyDown", setter : "setOnKeyDown"},
		{name: "onKeyPress", value : function(){try{return eze$$parent.getOnKeyPress();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyPress", getter : "getOnKeyPress", setter : "setOnKeyPress"},
		{name: "onKeyUp", value : function(){try{return eze$$parent.getOnKeyUp();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyUp", getter : "getOnKeyUp", setter : "setOnKeyUp"},
		{name: "onMouseDown", value : function(){try{return eze$$parent.getOnMouseDown();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseDown", getter : "getOnMouseDown", setter : "setOnMouseDown"},
		{name: "onMouseMove", value : function(){try{return eze$$parent.getOnMouseMove();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseMove", getter : "getOnMouseMove", setter : "setOnMouseMove"},
		{name: "onMouseOut", value : function(){try{return eze$$parent.getOnMouseOut();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseOut", getter : "getOnMouseOut", setter : "setOnMouseOut"},
		{name: "onMouseOver", value : function(){try{return eze$$parent.getOnMouseOver();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseOver", getter : "getOnMouseOver", setter : "setOnMouseOver"},
		{name: "onMouseUp", value : function(){try{return eze$$parent.getOnMouseUp();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseUp", getter : "getOnMouseUp", setter : "setOnMouseUp"},
		{name: "onScroll", value : function(){try{return eze$$parent.getOnScroll();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onScroll", getter : "getOnScroll", setter : "setOnScroll"},
		{name: "onSelect", value : function(){try{return eze$$parent.getOnSelect();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onSelect", getter : "getOnSelect", setter : "setOnSelect"},
		{name: "onStartDrag", value : function(){try{return eze$$parent.getOnStartDrag();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.StartDragFunction", jsName : "onStartDrag", getter : "getOnStartDrag", setter : "setOnStartDrag"},
		{name: "onDrag", value : function(){try{return eze$$parent.getOnDrag();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.DragFunction", jsName : "onDrag", getter : "getOnDrag", setter : "setOnDrag"},
		{name: "onDropOnTarget", value : function(){try{return eze$$parent.getOnDropOnTarget();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.DropOnTargetFunction", jsName : "onDropOnTarget", getter : "getOnDropOnTarget", setter : "setOnDropOnTarget"},
		{name: "numericSwap", value : function(){try{return eze$$parent.getNumericSwap();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "numericSwap", getter : "getNumericSwap", setter : "setNumericSwap"},
		{name: "symmetricSwap", value : function(){try{return eze$$parent.getSymmetricSwap();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "symmetricSwap", getter : "getSymmetricSwap", setter : "setSymmetricSwap"},
		{name: "reverseTextDirection", value : function(){try{return eze$$parent.getReverseTextDirection();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "reverseTextDirection", getter : "getReverseTextDirection", setter : "setReverseTextDirection"},
		{name: "textLayout", value : function(){try{return eze$$parent.getTextLayout();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "textLayout", getter : "getTextLayout", setter : "setTextLayout"},
		{name: "widgetOrientation", value : function(){try{return eze$$parent.getWidgetOrientation();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "widgetOrientation", getter : "getWidgetOrientation", setter : "setWidgetOrientation"},
		{name: "monitor", value : eze$$parent.monitor, type : "com.ibm.egl.rui.widgets.Div", jsName : "monitor"},
		{name: "amonitor", value : eze$$parent.amonitor, type : "com.ibm.egl.rui.widgets.HTML", jsName : "amonitor"},
		{name: "helper", value : eze$$parent.helper, type : "com.ibm.egl.rui.loader.internal.Helper", jsName : "helper"},
		{name: "dojoUsed", value : eze$$parent.dojoUsed, type : "boolean", jsName : "dojoUsed"},
		{name: "showDebugViewButton", value : eze$$parent.showDebugViewButton, type : "com.ibm.egl.rui.widgets.Button", jsName : "showDebugViewButton"},
		{name: "HTML", value : eze$$parent.HTML, type : "com.ibm.egl.rui.widgets.HTML", jsName : "HTML"}
		];
	}
}
);
