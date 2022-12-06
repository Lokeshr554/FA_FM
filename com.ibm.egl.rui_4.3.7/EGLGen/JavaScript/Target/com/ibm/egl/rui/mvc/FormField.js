// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineClass(  "com.ibm.egl.rui.mvc", "FormField", "egl.jsrt", "Record", {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/ValidatingForm.egl',
	"constructor" : function( )
	{
		this.eze$$XMLRootElementName = "FormField";
		this.eze$$setInitial();
	}
	,
	"eze$$setEmpty": function() {
		this.displayName = null;
		this.controller = null;
		this.nameLabel = null;
		this.errorLabel = null;
		this.labelClass = null;
	}
	,
	"eze$$setInitial": function() {
		this.eze$$setEmpty();
	}
	,
	"eze$$clone": function() {
		var ezert$$1 = this;
		var ezert$$2 = new egl.com.ibm.egl.rui.mvc.FormField();
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
			this.controller = other.controller;
			this.nameLabel = other.nameLabel;
			this.errorLabel = other.errorLabel;
			this.labelClass = other.labelClass;
		}
	}
	,
	"eze$$getFieldSignatures": function() {
		return [
		{name: "displayName", value : this.displayName, type : "?S;"},
		{name: "controller", value : this.controller, type : "Tcom/ibm/egl/rui/mvc/controller;"},
		{name: "nameLabel", value : this.nameLabel, type : "Tcom/ibm/egl/rui/widgets/textlabel;"},
		{name: "errorLabel", value : this.errorLabel, type : "Tcom/ibm/egl/rui/widgets/textlabel;"},
		{name: "labelClass", value : this.labelClass, type : "?S;"}
		];
	}
	,
	"eze$$getFORMDataNames": function() {
		return [
		["displayName", "displayName"],
		["controller", "controller"],
		["nameLabel", "nameLabel"],
		["errorLabel", "errorLabel"],
		["labelClass", "labelClass"]
		];
	}
	,
	"eze$$getJSONNames": function() {
		return [
		["displayName", "displayName"],
		["controller", "controller"],
		["nameLabel", "nameLabel"],
		["errorLabel", "errorLabel"],
		["labelClass", "labelClass"]
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
			if ( objArray[0] != null ) {
				this.displayName = objArray[0];
			} else {
				this.displayName = null;
			}
			this.controller.eze$$fromJson( objArray[1], ordered);
			this.nameLabel.eze$$fromJson( objArray[2], ordered);
			this.errorLabel.eze$$fromJson( objArray[3], ordered);
			if ( objArray[4] != null ) {
				this.labelClass = objArray[4];
			} else {
				this.labelClass = null;
			}
		}
		else {
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["displayName"], "this.displayName", true );
			if ( object["displayName"] != null ) {
				this.displayName = object["displayName"];
			} else {
				this.displayName = null;
			}
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["controller"], "this.controller", false );
			this.controller.eze$$fromJson( object["controller"], ordered);
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["nameLabel"], "this.nameLabel", false );
			this.nameLabel.eze$$fromJson( object["nameLabel"], ordered);
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["errorLabel"], "this.errorLabel", false );
			this.errorLabel.eze$$fromJson( object["errorLabel"], ordered);
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["labelClass"], "this.labelClass", true );
			if ( object["labelClass"] != null ) {
				this.labelClass = object["labelClass"];
			} else {
				this.labelClass = null;
			}
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
		else {
		this.displayName = null;}
		egl.egl.core.$XMLLib.setRecordElementField( element, this.controller, "controller" );
		egl.egl.core.$XMLLib.setRecordElementField( element, this.nameLabel, "nameLabel" );
		egl.egl.core.$XMLLib.setRecordElementField( element, this.errorLabel, "errorLabel" );
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "labelClass" );
		if (value) {
			this.labelClass = value;
		}
		else {
		this.labelClass = null;}
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
		if (this.displayName != null) {
			s.push(egl.egl.core.$XMLLib.writeElement( this.displayName, "displayName"));
		}
		if (!this.controller.eze$$isNull) {
			s.push( this.controller.eze$$toXML( namespaces, "controller" ) );
		}
		if (!this.nameLabel.eze$$isNull) {
			s.push( this.nameLabel.eze$$toXML( namespaces, "nameLabel" ) );
		}
		if (!this.errorLabel.eze$$isNull) {
			s.push( this.errorLabel.eze$$toXML( namespaces, "errorLabel" ) );
		}
		if (this.labelClass != null) {
			s.push(egl.egl.core.$XMLLib.writeElement( this.labelClass, "labelClass"));
		}
		s.push("</" + xmlName + ">");
		return s.join('');
	}
});
