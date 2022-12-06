// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineClass(  "com.ibm.egl.rui.widgets", "GridLayoutData", "egl.jsrt", "Record", {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/GridLayout.egl',
	"constructor" : function( )
	{
		this.eze$$XMLRootElementName = "GridLayoutData";
		this.eze$$setInitial();
	}
	,
	"eze$$setEmpty": function() {
		this.row = 0;
		this.column = 0;
		this.horizontalSpan = 0;
		this.verticalSpan = 0;
		this.cellPadding = 0;
		this.widthHint = "";
		this.heightHint = "";
		this.horizontalAlignment = 0;
		this.verticalAlignment = 0;
	}
	,
	"eze$$setInitial": function() {
		this.eze$$setEmpty();
		if( egl.com.ibm.egl.rui.widgets.GridLayoutLib["$inst"] === undefined)
		{
			new egl.com.ibm.egl.rui.widgets.GridLayoutLib();
		}
		egl.atLine(this.eze$$fileName,379,12562,38, this);
		this.horizontalSpan = 1;
		egl.atLine(this.eze$$fileName,380,12603,36, this);
		this.verticalSpan = 1;
		egl.atLine(this.eze$$fileName,393,13255,539, this);
		this.verticalAlignment = 4;
	}
	,
	"eze$$clone": function() {
		var ezert$$1 = this;
		var ezert$$2 = new egl.com.ibm.egl.rui.widgets.GridLayoutData();
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
			this.row = other.row;
			this.column = other.column;
			this.horizontalSpan = other.horizontalSpan;
			this.verticalSpan = other.verticalSpan;
			this.cellPadding = other.cellPadding;
			this.widthHint = other.widthHint;
			this.heightHint = other.heightHint;
			this.horizontalAlignment = other.horizontalAlignment;
			this.verticalAlignment = other.verticalAlignment;
		}
	}
	,
	"eze$$getName": function() {
		return "com.ibm.egl.rui.widgets.GridLayoutData";
	}
	,
	"eze$$getChildVariables": function() {
		return [
		{name: "row", value : this.row, type : "int", jsName : "row"},
		{name: "column", value : this.column, type : "int", jsName : "column"},
		{name: "horizontalSpan", value : this.horizontalSpan, type : "int", jsName : "horizontalSpan"},
		{name: "verticalSpan", value : this.verticalSpan, type : "int", jsName : "verticalSpan"},
		{name: "cellPadding", value : this.cellPadding, type : "int", jsName : "cellPadding"},
		{name: "widthHint", value : this.widthHint, type : "string", jsName : "widthHint"},
		{name: "heightHint", value : this.heightHint, type : "string", jsName : "heightHint"},
		{name: "horizontalAlignment", value : this.horizontalAlignment, type : "int", jsName : "horizontalAlignment"},
		{name: "verticalAlignment", value : this.verticalAlignment, type : "int", jsName : "verticalAlignment"}
		];
	}
	,
	"eze$$getFieldSignatures": function() {
		return [
		{name: "row", value : this.row, type : "I;"},
		{name: "column", value : this.column, type : "I;"},
		{name: "horizontalSpan", value : this.horizontalSpan, type : "I;"},
		{name: "verticalSpan", value : this.verticalSpan, type : "I;"},
		{name: "cellPadding", value : this.cellPadding, type : "I;"},
		{name: "widthHint", value : this.widthHint, type : "S;"},
		{name: "heightHint", value : this.heightHint, type : "S;"},
		{name: "horizontalAlignment", value : this.horizontalAlignment, type : "I;"},
		{name: "verticalAlignment", value : this.verticalAlignment, type : "I;"}
		];
	}
	,
	"eze$$getFORMDataNames": function() {
		return [
		["row", "row"],
		["column", "column"],
		["horizontalSpan", "horizontalSpan"],
		["verticalSpan", "verticalSpan"],
		["cellPadding", "cellPadding"],
		["widthHint", "widthHint"],
		["heightHint", "heightHint"],
		["horizontalAlignment", "horizontalAlignment"],
		["verticalAlignment", "verticalAlignment"]
		];
	}
	,
	"eze$$getJSONNames": function() {
		return [
		["row", "row"],
		["column", "column"],
		["horizontalSpan", "horizontalSpan"],
		["verticalSpan", "verticalSpan"],
		["cellPadding", "cellPadding"],
		["widthHint", "widthHint"],
		["heightHint", "heightHint"],
		["horizontalAlignment", "horizontalAlignment"],
		["verticalAlignment", "verticalAlignment"]
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
			this.row = egl.convertFloatToInt( objArray[0] );
			this.column = egl.convertFloatToInt( objArray[1] );
			this.horizontalSpan = egl.convertFloatToInt( objArray[2] );
			this.verticalSpan = egl.convertFloatToInt( objArray[3] );
			this.cellPadding = egl.convertFloatToInt( objArray[4] );
			this.widthHint = objArray[5];
			this.heightHint = objArray[6];
			this.horizontalAlignment = egl.convertFloatToInt( objArray[7] );
			this.verticalAlignment = egl.convertFloatToInt( objArray[8] );
		}
		else {
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["row"], "this.row", false );
			this.row = egl.convertFloatToInt( object["row"] );
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["column"], "this.column", false );
			this.column = egl.convertFloatToInt( object["column"] );
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["horizontalSpan"], "this.horizontalSpan", false );
			this.horizontalSpan = egl.convertFloatToInt( object["horizontalSpan"] );
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["verticalSpan"], "this.verticalSpan", false );
			this.verticalSpan = egl.convertFloatToInt( object["verticalSpan"] );
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["cellPadding"], "this.cellPadding", false );
			this.cellPadding = egl.convertFloatToInt( object["cellPadding"] );
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["widthHint"], "this.widthHint", false );
			this.widthHint = object["widthHint"];
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["heightHint"], "this.heightHint", false );
			this.heightHint = object["heightHint"];
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["horizontalAlignment"], "this.horizontalAlignment", false );
			this.horizontalAlignment = egl.convertFloatToInt( object["horizontalAlignment"] );
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["verticalAlignment"], "this.verticalAlignment", false );
			this.verticalAlignment = egl.convertFloatToInt( object["verticalAlignment"] );
		}
	}
	,
	"eze$$fromXML": function( element, xmlName ) {
		var node, nodelist, value;
		this.eze$$setInitial();
		if (xmlName == null) {
			xmlName = this.eze$$XMLRootElementName;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "row" );
		if (value) {
			this.row = egl.convertStringToInt(value);
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "column" );
		if (value) {
			this.column = egl.convertStringToInt(value);
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "horizontalSpan" );
		if (value) {
			this.horizontalSpan = egl.convertStringToInt(value);
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "verticalSpan" );
		if (value) {
			this.verticalSpan = egl.convertStringToInt(value);
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "cellPadding" );
		if (value) {
			this.cellPadding = egl.convertStringToInt(value);
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "widthHint" );
		if (value) {
			this.widthHint = value;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "heightHint" );
		if (value) {
			this.heightHint = value;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "horizontalAlignment" );
		if (value) {
			this.horizontalAlignment = egl.convertStringToInt(value);
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "verticalAlignment" );
		if (value) {
			this.verticalAlignment = egl.convertStringToInt(value);
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
		s.push(egl.egl.core.$XMLLib.writeElement( this.row, "row"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.column, "column"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.horizontalSpan, "horizontalSpan"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.verticalSpan, "verticalSpan"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.cellPadding, "cellPadding"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.widthHint, "widthHint"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.heightHint, "heightHint"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.horizontalAlignment, "horizontalAlignment"));
		s.push(egl.egl.core.$XMLLib.writeElement( this.verticalAlignment, "verticalAlignment"));
		s.push("</" + xmlName + ">");
		return s.join('');
	}
});
