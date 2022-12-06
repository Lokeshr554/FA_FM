// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.loader.internal', 'DebugView', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/loader/internal/DebugView.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/loader/internal/DebugView',
	"constructor" : function()
	{
		this.monitor = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "monitor");
		
		this.amonitor = new egl.com.ibm.egl.rui.widgets.HTML();
		egl.addEmbeddedWidget(this, "amonitor");
		
		this.helper = new egl.com.ibm.egl.rui.loader.Helper();
		
		this.dojoUsed = false;
		this.showDebugViewButton = new egl.com.ibm.egl.rui.widgets.Button();
		egl.addEmbeddedWidget(this, "showDebugViewButton");
		
		this.HTML = new egl.com.ibm.egl.rui.widgets.HTML();
		egl.addEmbeddedWidget(this, "HTML");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.core.DateTimeLib();
		new egl.egl.ui.rui.RUILib();
		new egl.com.ibm.egl.rui.loader.DynamicLoader();
		new egl.egl.core.StrLib();
		this.targetWidget = this.monitor;
		egl.checkNull(this.monitor).setChildren( [ this.HTML, this.showDebugViewButton, this.amonitor ] );
		egl.checkNull(this.amonitor).setBackgroundColor("RGB(217,234,233)");
		egl.checkNull(this.amonitor).setHeight((400).toString());
		egl.checkNull(this.amonitor).setPadding(5);
		egl.checkNull(this.amonitor).setBorderWidth(2);
		egl.checkNull(this.amonitor).setBorderColor("LightBlue");
		egl.checkNull(this.amonitor).setText("");
		egl.checkNull(this.amonitor).setStyle("overflow-y:scroll");
		egl.checkNull(this.amonitor).getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.enableSelection) );
		egl.checkNull(this.amonitor).setLayoutData({eze$$value : (function () {
				var ezert$$1 = new egl.com.ibm.egl.rui.widgets.GridLayoutData();
				ezert$$1.row = 1;
				ezert$$1.column = 1;
				return ezert$$1;
		}).call(this).eze$$clone(), eze$$signature : "Tcom/ibm/egl/rui/widgets/gridlayoutdata;"});
		egl.checkNull(this.amonitor).setBorderStyle("solid");
		egl.checkNull(this.showDebugViewButton).setText("<<Hide");
		egl.checkNull(this.showDebugViewButton).getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.showDebugViewButton_onClick) );
		egl.checkNull(this.HTML).setText("<hr style = 'border:1px solid RGB(217,234,233);'>Dynamic Loader Debug View");
		egl.checkNull(this.HTML).setColor("DarkSeaGreen");
		egl.checkNull(this.HTML).setFontWeight("bold");
		egl.checkNull(this.HTML).setFontSize("25");
		this.start();
	}
	
	,
	"start": function() {
		egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners.appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.traceDone) );
		egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners.appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.traceFailed) );
		egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners.appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.traceInfo) );
		(function () {
			var ezert$$2 = new egl.egl.javascript.Job();
			ezert$$2.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.DebugView.prototype.addToBody) );
			return ezert$$2;
		}).call(this).schedule();
		
	}
	,
	"enableSelection": function( e ) {
		if ( !(egl.egl.ui.rui.RUILib['$inst'].getTextSelectionEnabled()) ) {
			egl.egl.ui.rui.RUILib['$inst'].setTextSelectionEnabled(true );
		}
		
	}
	,
	"traceDone": function( e ) {
		var msg = "";
		if ( (e.theHandler != null) ) {
			msg = (((((("<font color=blue>[" + egl.egl.core.$StrLib.formatTimeStamp( egl.egl.core.$DateTimeLib.currentTimeStamp(  ), (egl.egl.core.$StrLib.defaultTimeStampFormat == "") ? egl.formatTimeStampPattern("yyyyMMddHHmmssffffff") : egl.egl.core.$StrLib.defaultTimeStampFormat )) + "]</font> <font color=orange><b>") + e.name) + "&nbsp;</b><b>LOAD DONE. &nbsp;") + (e.initialUI.getSize()).toString()) + " ui widget(s) initilized.</b> </font><br>");
		}
		else {
			msg = (((("<font color=blue>[" + egl.egl.core.$StrLib.formatTimeStamp( egl.egl.core.$DateTimeLib.currentTimeStamp(  ), (egl.egl.core.$StrLib.defaultTimeStampFormat == "") ? egl.formatTimeStampPattern("yyyyMMddHHmmssffffff") : egl.egl.core.$StrLib.defaultTimeStampFormat )) + "]</font> <font color=orange><b>") + e.name) + "&nbsp;</b><b>LOAD DONE. no instance is created.</b> </font><br>");
		}
		this.debug(msg );
		
	}
	,
	"traceFailed": function( handlerName, message ) {
		var details = "";
		details = message;
		if ( (egl.egl.core.$StrLib.indexOf( message, ("Connection refused: connect")) > 0) ) {
			try {
				details = details.substring( (egl.egl.core.$StrLib.indexOf( details, ("URL")) + 4)-1,egl.egl.core.$StrLib.textLen( details));
				details = details.substring( 1-1,(egl.egl.core.$StrLib.indexOf( details, ("EGL000")) - 1));
				details = ("Bound service for IModuleLoader is not running. Please check deployment descriptor and start server. URL: " + details);
			}
			catch ( ezert$$3 )
			{
				{
					if (!(ezert$$3 instanceof egl.egl.core.AnyException)) {
						ezert$$3 = egl.makeExceptionFromCaughtObject(ezert$$3);
					}
					var e = ezert$$3;
					details = message;
				}
			}
		}
		if ( (egl.egl.core.$StrLib.indexOf( message, ("404 ")) > 0) ) {
			try {
				details = details.substring( (egl.egl.core.$StrLib.indexOf( details, ("URL")) + 4)-1,egl.egl.core.$StrLib.textLen( details));
				details = details.substring( 1-1,(egl.egl.core.$StrLib.indexOf( details, ("EGL000")) - 1));
				details = ("Server is running, but it reports a 404 on the service. " + details);
			}
			catch ( ezert$$4 )
			{
				{
					if (!(ezert$$4 instanceof egl.egl.core.AnyException)) {
						ezert$$4 = egl.makeExceptionFromCaughtObject(ezert$$4);
					}
					var e = ezert$$4;
					details = message;
				}
			}
		}
		this.debug((((handlerName + " load fail: <font color=red><b>") + details) + "</b></font><br>") );
		if ( (this.dojoUsed || (egl.egl.core.$StrLib.indexOf( details, ("'dojo'")) != 0)) ) {
			this.debug("<font color=blue><b>Tip: Declare a Dojo widget field to your main handler</b></font><br>" );
		}
		
	}
	,
	"traceInfo": function( handlerName, resourceName, code, msg ) {
		var prefix = "";
		prefix = (((((("<font color=blue>[" + egl.egl.core.$StrLib.formatTimeStamp( egl.egl.core.$DateTimeLib.currentTimeStamp(  ), (egl.egl.core.$StrLib.defaultTimeStampFormat == "") ? egl.formatTimeStampPattern("yyyyMMddHHmmssffffff") : egl.egl.core.$StrLib.defaultTimeStampFormat )) + "] <b>") + handlerName) + "&nbsp;</b> <b>") + code) + "&nbsp;</b>");
		switch( code ) {
			case egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG:
				this.traceDebug(msg, prefix );
				break;
			case egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_LOAD:
				this.traceLoad(resourceName, prefix );
				break;
			case egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD:
				this.traceUnload(resourceName, prefix );
				break;
			case egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD_SKIP:
				this.traceUnloadSkip(resourceName, prefix );
				break;
			default:
			break;
		}
		
	}
	,
	"traceLoad": function( resourceName, prefix ) {
		this.debug((((prefix + " <font color=orange><b>") + resourceName) + "</b></font></font><br>") );
		
	}
	,
	"traceUnload": function( resourceName, prefix ) {
		this.debug((((prefix + " <font color=orange><b>") + resourceName) + "</b></font></font><br>") );
		
	}
	,
	"traceUnloadSkip": function( resourceName, prefix ) {
		this.debug((((prefix + " <font color=blue>") + resourceName) + "</font></font><br>") );
		
	}
	,
	"traceDebug": function( msg, prefix ) {
		this.debug(((prefix + msg) + "</font><br>") );
		
	}
	,
	"debug": function( s ) {
		egl.checkNull(this.amonitor).setText((s + egl.checkNull(this.amonitor).getText()));
		
	}
	,
	"addToBody": function() {
		this.document.body.appendChild(this.monitor );
		
	}
	,
	"showDebugViewButton_onClick": function( event ) {
		if ( egl.checkNull(this.amonitor).getVisible() ) {
			egl.checkNull(this.amonitor).setVisible(false);
			egl.checkNull(this.showDebugViewButton).setText("Show>>");
		}
		else {
			egl.checkNull(this.showDebugViewButton).setText("<<Hide");
			egl.checkNull(this.amonitor).setVisible(true);
		}
		
	}
	,
	"toString": function() {
		return "[DebugView]";
	}
}
);
