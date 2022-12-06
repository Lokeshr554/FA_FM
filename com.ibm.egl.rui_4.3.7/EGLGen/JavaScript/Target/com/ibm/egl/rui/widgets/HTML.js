// Generated at Tue Dec 06 11:54:43 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'HTML', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/HTML.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/HTML',
	"constructor" : function()
	{
		this.text = "";
		this.src = "";
		this.contextURL = "";
		this.widgetOrientationThis = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.core.StrLib();
		this.widgetOrientationThis = "";
		this.start();
	}
	
	,
	"start": function() {
		var location = "";
		location = this.document.getLocation();
		var index0 = 0;
		index0 = egl.egl.core.$StrLib.indexOf( location, ("//"));
		index0 = egl.egl.core.$StrLib.indexOf( location, ("/"), (index0 + 2));
		var index1 = 0;
		index1 = egl.egl.core.$StrLib.indexOf( location, ("/"), (index0 + 1));
		if ( (index1 != 0) ) {
			index0 = index1;
		}
		this.contextURL = location.substring( 1-1,index0);
		
	}
	,
	"setText": function( text ) {
		this.text = text;
		this.setInnerHTML(text);
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = this.text;
		return $result;
	}
	,
	"setSrc": function( src ) {
		var restService = new egl.egl.jsrt.RESTServiceRefWrapper("IRest", "", "JSESSIONID");
		if ( (egl.nullableCompare(egl.egl.core.$StrLib.lowerCase( (src.substring( 1-1,4))),"http", 0) != 0) ) {
			var ezert$$1_in = (this.contextURL + src);
			var ezert$$2_ret = function(obj){
				//out type is not nullable
				egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
				return obj;
			};
			restService.invokeService(this,
					new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.HTML.prototype.setText),
					null,
					-1,
					"invokeGet",
					[ezert$$1_in],
					["S;"],
					"reqURL _return",
					[ezert$$2_ret],
					true,
					egl.egl.core.$ServiceLib.checkURLEncode(ezert$$1_in),
					egl.formatNONE,
					egl.formatNONE,
					"GET",
					{});
			;
		}
		else {
			var ezert$$3_in = src;
			var ezert$$4_ret = function(obj){
				//out type is not nullable
				egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
				return obj;
			};
			restService.invokeService(this,
					new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.HTML.prototype.setText),
					null,
					-1,
					"invokeGet",
					[ezert$$3_in],
					["S;"],
					"reqURL _return",
					[ezert$$4_ret],
					true,
					egl.egl.core.$ServiceLib.checkURLEncode(ezert$$3_in),
					egl.formatNONE,
					egl.formatNONE,
					"GET",
					{});
			;
		}
		this.src = src;
		
	}
	,
	"getSrc": function() {
		var $result = "";
		$result = this.src;
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
		return "[HTML]";
	}
}
, 'div'
);
