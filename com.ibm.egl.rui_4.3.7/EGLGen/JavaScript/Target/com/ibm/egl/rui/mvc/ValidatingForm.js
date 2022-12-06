// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.mvc', 'ValidatingForm', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/ValidatingForm.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/ValidatingForm',
	"constructor" : function()
	{
		this.entries = (function(){ var ezert$$1= []; ezert$$1.setType( egl.com.ibm.egl.rui.mvc.FormField );// no max size set for this array
		return ezert$$1;})();
		
		this.box = new egl.com.ibm.egl.rui.widgets.Box();
		egl.addEmbeddedWidget(this, "box");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		egl.checkNull(this.box).setColumns(3);
	}
	
	,
	"setEntries": function( entries ) {
		this.entries = entries;
		{
			var n = 0;
			n = 1;
			for ( ; (n <= entries.getSize()); n = (n + 1) )
			{
				egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].nameLabel = (function () {
					var ezert$$2 = new egl.com.ibm.egl.rui.widgets.TextLabel();
					egl.checkNull(ezert$$2).setText((function(x){ return x != null ? ((x).toString()) : ""; })(egl.checkNull(entries)[entries.checkIndex((n)-1)].displayName));
					return ezert$$2;
				}).call(this);
				egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].labelClass = egl.checkNull(egl.checkNull(entries)[entries.checkIndex((n)-1)].nameLabel).getClass();
				egl.checkNull(this.box).appendChild(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].nameLabel );
				egl.checkNull(this.box).appendChild(egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).getView() );
				egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].errorLabel = (function () {
					var ezert$$3 = new egl.com.ibm.egl.rui.widgets.TextLabel();
					egl.checkNull(ezert$$3).setMarginLeft(9);
					egl.checkNull(ezert$$3).setClass("EglRuiTextLabel FormErrorLabel");
					return ezert$$3;
				}).call(this);
				egl.checkNull(this.box).appendChild(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].errorLabel );
				if ( (egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).validStateSetter == null) ) {
					egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).validStateSetter = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.ValidatingForm.prototype.validStateSetter);
				}
			}
		}
		this.appendChild(this.box );
		
	}
	,
	"getEntries": function() {
		var $result = null;
		$result = this.entries;
		return $result;
	}
	,
	"commit": function() {
		{
			var n = 0;
			n = this.entries.getSize();
			for ( ; (n >= 1); n = (n - 1) )
			{
				egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).commit();
				var msg = "";
				msg = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).getErrorMessage());
				if ( !(((msg == null) || (msg == ""))) ) {
					egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].errorLabel).setText(msg);
				}
			}
		}
		
	}
	,
	"publish": function() {
		{
			var n = 0;
			n = this.entries.getSize();
			for ( ; (n >= 1); n = (n - 1) )
			{
				egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).publish();
			}
		}
		
	}
	,
	"isValid": function() {
		var $result = false;
		var result = false;
		result = true;
		{
			var n = 0;
			n = this.entries.getSize();
			for ( ; (n >= 1); n = (n - 1) )
			{
				if ( !(egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).isValid()) ) {
					result = false;
				}
			}
		}
		$result = result;
		return $result;
	}
	,
	"isFormValid": function() {
		var $result = false;
		var result = false;
		result = true;
		{
			var n = 0;
			n = this.entries.getSize();
			for ( ; (n >= 1); n = (n - 1) )
			{
				if ( !(egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).isControllerValid()) ) {
					result = false;
				}
			}
		}
		$result = result;
		return $result;
	}
	,
	"validStateSetter": function( view, valid ) {
		{
			var n = 0;
			n = this.entries.getSize();
			for ( ; (n >= 1); n = (n - 1) )
			{
				var entry = new egl.com.ibm.egl.rui.mvc.FormField();
				entry.eze$$assign(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)]);
				var msg = null;
				msg = egl.checkNull(entry.controller).getErrorMessage();
				egl.checkNull(entry.errorLabel).setText((function(x){ return x != null ? ((x).toString()) : ""; })(msg));
				this.setValidState(entry, function(eze$$inout$entry) {
					entry.eze$$assign(eze$$inout$entry);
				}, view, valid, this );
			}
		}
		
	}
	,
	"setValidState": function( entry, eze$$entry$func_, view, valid, eze$$caller ) {
		if ( (egl.checkNull(entry.controller).getView() == view) ) {
			if ( valid ) {
				egl.checkNull(entry.nameLabel).setClass((function(x){ return x != null ? ((x).toString()) : ""; })(entry.labelClass));
			}
			else {
				egl.checkNull(entry.nameLabel).setClass((function(x){ return x != null ? ((x).toString()) : ""; })(((function(x){ return x != null ? ((x).toString()) : ""; })(entry.labelClass) + " FormErrorLabel")));
			}
		}
		
	}
	,
	"toString": function() {
		return "[ValidatingForm]";
	}
}
, 'div'
);
