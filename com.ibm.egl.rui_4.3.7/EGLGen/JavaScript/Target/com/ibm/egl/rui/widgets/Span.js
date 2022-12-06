// Generated at Tue Dec 06 11:54:43 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Span', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Span.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Span',
	"constructor" : function()
	{
		this.text = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
	}
	
	,
	"setText": function( textIn ) {
		this.setInnerHTML(textIn);
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = this.getInnerHTML();
		return $result;
	}
	,
	"toString": function() {
		return "[Span]";
	}
}
, 'span'
);
