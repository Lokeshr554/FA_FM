// Generated at Tue Dec 06 11:54:43 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'TextLabel', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/TextLabel.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/TextLabel',
	"constructor" : function()
	{
		this.text = "";
		this.widgetOrientationThis = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		this.widgetOrientationThis = "";
	}
	
	,
	"setText": function( textIn ) {
		this.text = textIn;
		this.setInnerText(this.text);
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = this.text;
		return $result;
	}
	,
	"getWidgetOrientation": function() {
		var $result = "";
		$result = this.widgetOrientationThis;
		return $result;
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
		this.widgetOrientationThis = widgetOrientation;
		if ( (widgetOrientation == "RTL") ) {
			this.setStyle("text-align: right;");
			if ( (this.getTextLayout() != "Visual") ) {
				this.setAttribute("dir", {eze$$value : "ltr", eze$$signature : "S;"} );
			}
		}
		else {
			this.setStyle("text-align: left;");
		}
		
	}
	,
	"toString": function() {
		return "[TextLabel]";
	}
}
, 'div'
);
