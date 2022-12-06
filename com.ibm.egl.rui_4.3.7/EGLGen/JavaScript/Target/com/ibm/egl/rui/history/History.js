// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.history', 'History', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/history/History.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/history/History',
	"constructor" : function()
	{
		this.frame = null;
		egl.addEmbeddedWidget(this, "frame");
		
		this.listeners = null;
		
		this.checkURLJob = new egl.egl.javascript.Job();
		
		this.currentLocation = "";
		this.browser = new egl.com.ibm.egl.rui.history.HistoryHelper();
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.core.StrLib();
		new egl.egl.core.SysLib();
		new egl.egl.core.ServiceLib();
		this.listeners = [  ].setType( "Tcom/ibm/egl/rui/history/historychanged;" );
		this.checkURLJob.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.history.History.prototype.checkURL) );
		this.BASE = "com/ibm/egl/rui/history/history.html?history=";
		this.start();
	}
	
	,
	"start": function() {
		if ( !(this.browser.inVisualEditorDesignMode()) ) {
			if ( this.browser.isIE() ) {
				this.frame = (function () {
					var ezert$$1 = new egl.egl.ui.rui.Widget();
					ezert$$1.setTagName( "iframe" );
					ezert$$1.setVisibility( "hidden" );
					ezert$$1.setPosition( "absolute" );
					ezert$$1.setWidth( (0).toString() );
					ezert$$1.setHeight( (0).toString() );
					return ezert$$1;
				}).call(this);
				this.document.body.appendChild(this.frame );
				this.frame.setAttribute("src", ("com/ibm/egl/rui/history/history.html?history=" + "empty") );
			}
			this.checkURLJob.repeat(100 );
		}
		
	}
	,
	"goBack": function() {
		this.browser.goBack();
		
	}
	,
	"goForward": function() {
		this.browser.goForward();
		
	}
	,
	"addListener": function( listener, eze$$listener$func_, eze$$caller ) {
		if ( !(this.browser.inVisualEditorDesignMode()) ) {
			this.listeners.appendElement( listener );
		}
		
	}
	,
	"addToHistory": function( newLocation ) {
		if ( !(this.browser.inVisualEditorDesignMode()) ) {
			if ( (newLocation == "") ) {
				var messageValue = "";
				messageValue = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.getRuntimeMessage( "CRRUI2004E", [ newLocation ] ));
				throw (function () {
					var ezert$$2 = egl.createRuntimeException();
					egl.checkNull(ezert$$2).message = messageValue;
					egl.checkNull(ezert$$2).messageID = "CRRUI2004E";
					return ezert$$2;
				}).call(this);
			}
			this.browser.setLocationHash(newLocation );
			this.checkURL();
			if ( this.browser.isIE() ) {
				this.frame.setAttribute("src", ("com/ibm/egl/rui/history/history.html?history=" + newLocation) );
			}
		}
		
	}
	,
	"tellListeners": function() {
		{
			var n = 0;
			n = 1;
			for ( ; (n <= this.listeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(this.listeners)[this.listeners.checkIndex((n)-1)](egl.egl.core.$ServiceLib.convertFromURLEncoded( this.currentLocation ) );
			}
		}
		
	}
	,
	"checkURL": function() {
		if ( this.browser.isIE() ) {
			var location = "";
			location = this.browser.getFrameSrc(this.frame );
			var index = 0;
			index = egl.egl.core.$StrLib.indexOf( location, ("="));
			location = location.substring( (index + 1)-1,egl.egl.core.$StrLib.textLen( location));
			if ( ((location != null) && (location != this.currentLocation)) ) {
				this.currentLocation = location;
				this.browser.setLocationHash(location );
				this.tellListeners();
			}
		}
		else {
			var hash = "";
			hash = this.browser.getLocationHash();
			if ( (hash != this.currentLocation) ) {
				this.currentLocation = hash;
				this.tellListeners();
			}
		}
		
	}
	,
	"keepUserOnPage": function( onBeforeUnloadMessageFunction, eze$$onBeforeUnloadMessageFunction$func_, eze$$caller ) {
		if ( !(this.browser.inVisualEditorDesignMode()) ) {
			this.browser.setOnbeforeUnload(onBeforeUnloadMessageFunction, function(eze$$inout$beforeUnload) {
				onBeforeUnloadMessageFunction = eze$$inout$beforeUnload;
				eze$$onBeforeUnloadMessageFunction$func_.call(eze$$caller,onBeforeUnloadMessageFunction);
			}, this );
		}
		
	}
	,
	"toString": function() {
		return "[History]";
	}
}
);
