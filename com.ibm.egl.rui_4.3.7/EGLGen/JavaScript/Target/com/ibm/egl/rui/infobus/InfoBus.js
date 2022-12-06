// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.infobus', 'InfoBus',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/infobus/InfoBus.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/infobus/InfoBus',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.infobus.InfoBus['$inst']){
				return egl.com.ibm.egl.rui.infobus.InfoBus['$inst'];
			}
			egl.com.ibm.egl.rui.infobus.InfoBus['$inst']=this;
			this.bridge = new egl.com.ibm.egl.rui.infobus.OpenAjaxHubBridge();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
		}
		
		,
		"subscribe": function( name, callback, eze$$callback$func_, eze$$caller ) {
			var $result = null;
			$result = egl.checkNull(this.bridge).subscribe(name, callback, function(eze$$inout$callback) {
				callback = eze$$inout$callback;
				eze$$callback$func_.call(eze$$caller,callback);
			}, this );
			return $result;
		}
		,
		"unsubscribe": function( subscription ) {
			egl.checkNull(this.bridge).unsubscribe(subscription );
			
		}
		,
		"publish": function( name, data ) {
			egl.checkNull(this.bridge).publish(name, data );
			
		}
		,
		"toString": function() {
			return "[InfoBus]";
		}
	}
);
