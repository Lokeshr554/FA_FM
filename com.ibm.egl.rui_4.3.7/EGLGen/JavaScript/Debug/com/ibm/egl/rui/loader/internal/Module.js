// Generated at Tue Dec 06 11:54:47 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineClass(  "com.ibm.egl.rui.loader.internal", "Module", "egl.jsrt", "Record", {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/loader/internal/ModuleLoader.egl',
	"constructor" : function( )
	{
		this.eze$$XMLRootElementName = "Module";
		this.eze$$setInitial();
	}
	,
	"eze$$setEmpty": function() {
		this.name = "";
		this.javascript = "";
		this.moduleType = "";
	}
	,
	"eze$$setInitial": function() {
		this.eze$$setEmpty();
	}
	,
	"eze$$clone": function() {
		var ezert$$1 = this;
		var ezert$$2 = new egl.com.ibm.egl.rui.loader.internal.Module();
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
			this.javascript = other.javascript;
			this.moduleType = other.moduleType;
		}
	}
	,
	"eze$$getName": function() {
		return "com.ibm.egl.rui.loader.internal.Module";
	}
	,
	"eze$$getChildVariables": function() {
		return [
		{name: "name", value : this.name, type : "string", jsName : "name"},
		{name: "javascript", value : this.javascript, type : "string", jsName : "javascript"},
		{name: "moduleType", value : this.moduleType, type : "string", jsName : "moduleType"}
		];
	}
	,
	"eze$$getFieldSignatures": function() {
		return [
		{name: "name", value : this.name, type : "S;"},
		{name: "javascript", value : this.javascript, type : "S;"},
		{name: "moduleType", value : this.moduleType, type : "S;"}
		];
	}
	,
	"eze$$getFORMDataNames": function() {
		return [
		["name", "name"],
		["javascript", "javascript"],
		["moduleType", "moduleType"]
		];
	}
	,
	"eze$$getJSONNames": function() {
		return [
		["name", "name"],
		["javascript", "javascript"],
		["moduleType", "moduleType"]
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
			this.javascript = objArray[1];
			this.moduleType = objArray[2];
		}
		else {
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["name"], "this.name", false );
			this.name = object["name"];
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["javascript"], "this.javascript", false );
			this.javascript = object["javascript"];
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["moduleType"], "this.moduleType", false );
			this.moduleType = object["moduleType"];
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
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "javascript" );
		if (value) {
			this.javascript = value;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "moduleType" );
		if (value) {
			this.moduleType = value;
		}
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
		s.push(egl.egl.core.$XMLLib.writeElement( this.javascript, "javascript"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.moduleType, "moduleType"));
		s.push("</" + xmlName + ">");
		return s.join('');
	}
});
