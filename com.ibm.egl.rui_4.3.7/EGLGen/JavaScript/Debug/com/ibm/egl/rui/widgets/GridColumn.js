// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineClass(  "com.ibm.egl.rui.widgets", "GridColumn", "egl.jsrt", "Record", {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Grid.egl',
	"constructor" : function( )
	{
		this.eze$$XMLRootElementName = "GridColumn";
		this.eze$$setInitial();
	}
	,
	"eze$$setEmpty": function() {
		this.displayName = "";
		this.name = "";
		this.width = 0;
	}
	,
	"eze$$setInitial": function() {
		this.eze$$setEmpty();
	}
	,
	"eze$$clone": function() {
		var ezert$$1 = this;
		var ezert$$2 = new egl.com.ibm.egl.rui.widgets.GridColumn();
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
			this.displayName = other.displayName;
			this.name = other.name;
			this.width = other.width;
		}
	}
	,
	"eze$$getName": function() {
		return "com.ibm.egl.rui.widgets.GridColumn";
	}
	,
	"eze$$getChildVariables": function() {
		return [
		{name: "displayName", value : this.displayName, type : "string", jsName : "displayName"},
		{name: "name", value : this.name, type : "string", jsName : "name"},
		{name: "width", value : this.width, type : "int", jsName : "width"}
		];
	}
	,
	"eze$$getFieldSignatures": function() {
		return [
		{name: "displayName", value : this.displayName, type : "S;"},
		{name: "name", value : this.name, type : "S;"},
		{name: "width", value : this.width, type : "I;"}
		];
	}
	,
	"eze$$getFORMDataNames": function() {
		return [
		["displayName", "displayName"],
		["name", "name"],
		["width", "width"]
		];
	}
	,
	"eze$$getJSONNames": function() {
		return [
		["displayName", "displayName"],
		["name", "name"],
		["width", "width"]
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
			this.displayName = objArray[0];
			this.name = objArray[1];
			this.width = egl.convertFloatToInt( objArray[2] );
		}
		else {
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["displayName"], "this.displayName", false );
			this.displayName = object["displayName"];
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["name"], "this.name", false );
			this.name = object["name"];
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["width"], "this.width", false );
			this.width = egl.convertFloatToInt( object["width"] );
		}
	}
	,
	"eze$$fromXML": function( element, xmlName ) {
		var node, nodelist, value;
		this.eze$$setInitial();
		if (xmlName == null) {
			xmlName = this.eze$$XMLRootElementName;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "displayName" );
		if (value) {
			this.displayName = value;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "name" );
		if (value) {
			this.name = value;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "width" );
		if (value) {
			this.width = egl.convertStringToInt(value);
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
		s.push(egl.egl.core.$XMLLib.writeElement( this.displayName, "displayName"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.name, "name"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.width, "width"));
		s.push("</" + xmlName + ">");
		return s.join('');
	}
});
