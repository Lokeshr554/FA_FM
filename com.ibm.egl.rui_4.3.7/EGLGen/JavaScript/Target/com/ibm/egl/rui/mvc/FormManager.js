// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.mvc', 'FormManager', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/FormManager.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/FormManager',
	"constructor" : function()
	{
		this.entries = (function(){ var ezert$$2= []; ezert$$2.setType( egl.com.ibm.egl.rui.mvc.FormField );// no max size set for this array
		return ezert$$2;})();
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
	}
	
	,
	"setEntries": function( entries ) {
		this.entries = entries;
		{
			var n = 0;
			n = 1;
			for ( ; (n <= entries.getSize()); n = (n + 1) )
			{
				egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].labelClass = egl.checkNull(egl.checkNull(entries)[entries.checkIndex((n)-1)].nameLabel).getClass();
				if ( (egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).validStateSetter == null) ) {
					egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).validStateSetter = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.FormManager.prototype.validStateSetter);
				}
			}
		}
		
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
				if ( (!(((msg == null) || (msg == ""))) && (egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].errorLabel != null)) ) {
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
			Lezert$$1: for ( ; (n >= 1); n = (n - 1) )
			{
				var entry = new egl.com.ibm.egl.rui.mvc.FormField();
				entry.eze$$assign(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)]);
				if ( (egl.checkNull(entry.controller).getView() == view) ) {
					var msg = null;
					msg = egl.checkNull(entry.controller).getErrorMessage();
					if ( (entry.errorLabel != null) ) {
						egl.checkNull(entry.errorLabel).setText((function(x){ return x != null ? ((x).toString()) : ""; })(msg));
					}
					if ( (entry.nameLabel != null) ) {
						if ( valid ) {
							egl.checkNull(entry.nameLabel).setClass((function(x){ return x != null ? ((x).toString()) : ""; })(entry.labelClass));
						}
						else {
							egl.checkNull(entry.nameLabel).setClass((function(x){ return x != null ? ((x).toString()) : ""; })(((function(x){ return x != null ? ((x).toString()) : ""; })(entry.labelClass) + " FormErrorLabel")));
						}
					}
					break Lezert$$1;
				}
			}
		}
		
	}
	,
	"validate": function() {
		var $result = false;
		{
			var n = 0;
			n = this.entries.getSize();
			for ( ; (n >= 1); n = (n - 1) )
			{
				if ( !(egl.checkNull(egl.checkNull(this.entries)[this.entries.checkIndex((n)-1)].controller).validate()) ) {
					$result = false;
					return $result;
				}
			}
		}
		$result = true;
		return $result;
	}
	,
	"toString": function() {
		return "[FormManager]";
	}
}
);
