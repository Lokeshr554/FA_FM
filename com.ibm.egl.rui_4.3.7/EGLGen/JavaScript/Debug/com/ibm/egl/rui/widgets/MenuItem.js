// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineClass(  "com.ibm.egl.rui.widgets", "MenuItem", "egl.jsrt", "Record", {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Menu.egl',
	"constructor" : function( )
	{
		this.eze$$XMLRootElementName = "MenuItem";
		this.eze$$setInitial();
	}
	,
	"eze$$setEmpty": function() {
		this.id = null;
		this.item = null;
		this.itemType = null;
		this.itemAction = null;
	}
	,
	"eze$$setInitial": function() {
		this.eze$$setEmpty();
	}
	,
	"eze$$clone": function() {
		var ezert$$1 = this;
		var ezert$$2 = new egl.com.ibm.egl.rui.widgets.MenuItem();
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
			this.id = other.id;
			this.item = other.item;
			this.itemType = other.itemType;
			this.itemAction = other.itemAction;
		}
	}
	,
	"eze$$getName": function() {
		return "com.ibm.egl.rui.widgets.MenuItem";
	}
	,
	"eze$$getChildVariables": function() {
		return [
		{name: "id", value : this.id, type : "string?", jsName : "id"},
		{name: "item", value : this.item, type : "any", jsName : "item"},
		{name: "itemType", value : this.itemType, type : "com.ibm.egl.rui.widgets.MenuItemType", jsName : "itemType"},
		{name: "itemAction", value : this.itemAction, type : "com.ibm.egl.rui.widgets.MenuItemSelection", jsName : "itemAction"}
		];
	}
	,
	"eze$$getFieldSignatures": function() {
		return [
		{name: "id", value : this.id, type : "?S;"},
		{name: "item", value : this.item, type : "A;"},
		{name: "itemType", value : this.itemType, type : "Tcom/ibm/egl/rui/widgets/menuitemtype;"},
		{name: "itemAction", value : this.itemAction, type : "Tcom/ibm/egl/rui/widgets/menuitemselection;"}
		];
	}
	,
	"eze$$getFORMDataNames": function() {
		return [
		["id", "id"],
		["item", "item"],
		["itemType", "itemType"],
		["itemAction", "itemAction"]
		];
	}
	,
	"eze$$getJSONNames": function() {
		return [
		["id", "id"],
		["item", "item"],
		["itemType", "itemType"],
		["itemAction", "itemAction"]
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
				this.id = objArray[0];
			} else {
				this.id = null;
			}
			this.itemType.eze$$fromJson( objArray[2], ordered);
			this.itemAction.eze$$fromJson( objArray[3], ordered);
		}
		else {
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["id"], "this.id", true );
			if ( object["id"] != null ) {
				this.id = object["id"];
			} else {
				this.id = null;
			}
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["item"], "this.item", true );
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["itemType"], "this.itemType", false );
			this.itemType.eze$$fromJson( object["itemType"], ordered);
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["itemAction"], "this.itemAction", false );
			this.itemAction.eze$$fromJson( object["itemAction"], ordered);
		}
	}
	,
	"eze$$fromXML": function( element, xmlName ) {
		var node, nodelist, value;
		this.eze$$setInitial();
		if (xmlName == null) {
			xmlName = this.eze$$XMLRootElementName;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "id" );
		if (value) {
			this.id = value;
		}
		else {
		this.id = null;}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "item" );
		if (value) {
			this.item = {eze$$value : value, eze$$signature : "S;"};
		}
		else {
		this.item = null;}
		egl.egl.core.$XMLLib.setRecordElementField( element, this.itemType, "itemType" );
		egl.egl.core.$XMLLib.setRecordElementField( element, this.itemAction, "itemAction" );
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
		if (this.id != null) {
			s.push(egl.egl.core.$XMLLib.writeElement( this.id, "id"));
		}
		if (this.item != null) {
			s.push(egl.egl.core.$XMLLib.writeElement( this.item, "item"));
		}
		s.push( this.itemType.eze$$toXML( namespaces, "itemType" ) );
		s.push( this.itemAction.eze$$toXML( namespaces, "itemAction" ) );
		s.push("</" + xmlName + ">");
		return s.join('');
	}
});
