// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineClass(  "com.ibm.egl.rui.loader", "HandlerLoadedEvent", "egl.jsrt", "Record", {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/loader/DynamicLoader.egl',
	"constructor" : function( )
	{
		this.eze$$XMLRootElementName = "HandlerLoadedEvent";
		this.eze$$setInitial();
	}
	,
	"eze$$setEmpty": function() {
		this.name = "";
		this.initialUI = null;
		this.theHandler = null;
	}
	,
	"eze$$setInitial": function() {
		this.eze$$setEmpty();
	}
	,
	"eze$$clone": function() {
		var ezert$$1 = this;
		var ezert$$2 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
		ezert$$2.eze$$isNull = this.eze$$isNull;
		ezert$$2.eze$$isNullable = this.eze$$isNullable;
		ezert$$2.eze$$assign(ezert$$1);
		return ezert$$2;
	}
	,
	"eze$$assign": function(other){
		if (!this.eze$$isNullable && other.eze$$isNull)
		{
			this.eze$$setEmpty();
		}
		else
		{
			if (this.eze$$isNullable)
			{
				this.eze$$isNull = other.eze$$isNull;
			}
			this.name = other.name;
			this.initialUI = other.initialUI;
			this.theHandler = other.theHandler;
		}
	}
	,
	"eze$$getName": function() {
		return "com.ibm.egl.rui.loader.HandlerLoadedEvent";
	}
	,
	"eze$$getChildVariables": function() {
		return [
		{name: "name", value : this.name, type : "string", jsName : "name"},
		{name: "initialUI", value : this.initialUI, type : "egl.ui.rui.Widget[]", jsName : "!initialUI"},
		{name: "theHandler", value : this.theHandler, type : "any", jsName : "theHandler"}
		];
	}
	,
	"eze$$getFieldSignatures": function() {
		return [
		{name: "name", value : this.name, type : "S;"},
		{name: "initialUI", value : this.initialUI, type : "1Tegl/ui/rui/widget;"},
		{name: "theHandler", value : this.theHandler, type : "A;"}
		];
	}
	,
	"eze$$getFORMDataNames": function() {
		return [
		["name", "name"],
		["initialUI", "initialUI"],
		["theHandler", "theHandler"]
		];
	}
	,
	"eze$$getJSONNames": function() {
		return [
		["name", "name"],
		["initialUI", "initialUI"],
		["theHandler", "theHandler"]
		];
	}
	,
	"eze$$fromJson": function( object, ordered ) {
		if (object == null) {
			return;
		}
		this.eze$$setInitial();
		this.setNull(false);
		if (ordered) {
			var objArray = [];
			for (f in object) {
				if (typeof(object[f]) == "string") {
					object[f] = object[f].replace(/&quot;/g, '"');
				}
				objArray.push(object[f]);
			}
			this.name = objArray[0];
			var ezert$$0 = objArray[1];
			var ezert$$1;
			if (ezert$$0 != null) {
				ezert$$1= (function(){var ezert$$2 = []; ezert$$2.setType("Tegl/ui/rui/Widget;"); return ezert$$2;})();
				for (var n1 = 0; n1 < ezert$$0.length; n1++) {
					ezert$$1[ n1] = new egl.egl.ui.rui.Widget();
					ezert$$1[ n1 ].eze$$fromJson( ezert$$0[ n1 ], ordered);
				}
			}
			this.initialUI = ezert$$1;
		}
		else {
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["name"], "this.name", false );
			this.name = object["name"];
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["initialUI"], "this.initialUI", true );
			var ezert$$0 = object["initialUI"];
			var ezert$$1;
			if (ezert$$0 != null) {
				ezert$$1= (function(){var ezert$$2 = []; ezert$$2.setType("Tegl/ui/rui/Widget;"); return ezert$$2;})();
				for (var n1 = 0; n1 < ezert$$0.length; n1++) {
					ezert$$1[ n1] = new egl.egl.ui.rui.Widget();
					ezert$$1[ n1 ].eze$$fromJson( ezert$$0[ n1 ], ordered);
				}
			}
			this.initialUI = ezert$$1;
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["theHandler"], "this.theHandler", true );
		}
	}
	,
	"eze$$fromXML": function( element, xmlName ) {
		var node, nodelist, value;
		this.eze$$setInitial();
		if (xmlName == null) {
			xmlName = this.eze$$XMLRootElementName;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "name" );
		if (value) {
			this.name = value;
		}
		nodelist = egl.egl.core.$XMLLib.getChildElementNS( element, "initialUI" );
		if (nodelist.length > 0) {
			this.initialUI = [];
			this.initialUI.setType("Tegl/ui/rui/Widget;");
			for( var n=0; n < nodelist.length; n++) {
				this.initialUI[ n ] = new egl.egl.ui.rui.Widget();
				this.initialUI[ n ].eze$$fromXML( nodelist[ n ], "initialUI" );
			}
		}
		else {
			this.initialUI = null;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "theHandler" );
		if (value) {
			this.theHandler = {eze$$value : value, eze$$signature : "S;"};
		}
		else {
		this.theHandler = null;}
	}
	,
	"eze$$toXML": function( namespaces, xmlName ) {
		var prefix;
		if (xmlName == null) {
			prefix = "";
			xmlName = prefix + this.eze$$XMLRootElementName;
		}
		var s = ["<" + xmlName];
		s.push(">");
		s.push(egl.egl.core.$XMLLib.writeElement( this.name, "name"));
		if (this.initialUI != null) {
			for( var n=0; n < this.initialUI.length; n++) {
				s.push( this.initialUI[ n ].eze$$toXML( namespaces, "initialUI" ) );
			}
		}
		if (this.theHandler != null) {
			s.push(egl.egl.core.$XMLLib.writeElement( this.theHandler, "theHandler"));
		}
		s.push("</" + xmlName + ">");
		return s.join('');
	}
});
