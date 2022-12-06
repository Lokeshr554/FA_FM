/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoContainer',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"setChildren" : function(children) {
		this.removeChildren();
		this.children = children;
		var eglWidget = this;
		setTimeout(function() {
			eglWidget.renderWhenDojoIsDoneLoading();
		},1);
		this.setBiDiMarkers();
	},
	"destroyAtRender" : function() {
		if ( this.dojoWidget ) {
			dojo.forEach(this.dojoWidget.getChildren(),
				function(child){
				    if (child._wrapperWidget) child._wrapperWidget.destroy();
				}
			);
			dijit.registry.remove(this.dojoWidget.id);
			this.dojoWidget = null;
		}		
		try {
			for (var n=0; n<this.children.length; n++) {
				var child = this.children[n];
				this.checkChildType(child, n);
				this.eze$$DOMElement.appendChild(child.eze$$DOMElement);
			}
		}
		catch (e) {
		}
	},
	"setChildType" : function (childType) {
		this.childType = childType;
	},
	"checkChildType" : function(child, index) {
		if (this.childType && child.eze$$package+"."+child.eze$$typename != this.childType) {
			throw this.eze$$typename+".addChild(child="+child.eze$$typename+",index="+(index+1)+"): Invalid child type, expected "+this.childType;
		}
	},
	"getID" : function(){
		return this._getProperty("id","id");
	},
	"setID" : function(id){
		if(id){
			this._setProperty("id", "id", id);
		}		
	},
	"getChildren" : function() {
		return this.children;
	},
	"getChildIndex" : function(dojoWidget) {
		for (var n=0; n<this.children.length; n++)
			if (this.children[n].dojoWidget == dojoWidget)
				return n;
		return 0;
	},
	"showError" : function(expectedTypeName, containerType, child, func, error) {
		try {
			var type = child.eze$$package+"."+child.eze$$typename;
			var div = this.eze$$DOMElement;
			div.style.border = "4px red solid";
			div.style.background = "yellow";
			div.style.color = "red";
			div.style.padding = "10px";
			div.style.overflow = "hidden";
			div.style.width = "190px";
			if (type == expectedTypeName) {
				var s = "";
				if (child.dojoWidget) {
					s += child.dojoWidget.errorMessage+
						"<p>Here are all the fields defined in the child's dojoWidget:<br>" +
						"<table style='width:500px' border='1' cellpadding='3'>";
					for (f in child.dojoWidget)
						s += "<tr><td>"+f+"</td><td>" + child.dojoWidget[f] + "</td></tr>";
					s += "</table>"
				} else {
					s += "<b>child.dojoWidget is null</b>. Here are all the fields defined in the child:<br>"+
						"<table style='width:500px' border='1' cellpadding='3'>";
					for (f in child)
						s += "<tr><td>"+f+"</td><td>" + child[f] + "</td></tr>";
					s += "</table>"
				}
				div.innerHTML = "<h1>" + containerType +"."+func+": Internal Error</h1><p>Cannot add child "+child + 
					".<p>Error: " + error?error.message:"???" + "<p>" + s;
			}
			else {
				div.innerHTML = "<h1>Usage Error</h1><p>Cannot add a <b>" + child.eze$$typename + "</b> to a " +
				containerType + ". Expected type is: <b>" + expectedTypeName + "</b><p>";
			}
		}
		catch(e) {}
	},
	"appendChild" : function() {
		throw "DojoContainer.js: appendChild is not implemented on this dojo widget";
	},
	"removeChild" : function() {
		throw "DojoContainer.js: removeChild is not implemented on this dojo widget";
	},
	"setTextLayout" : function(textLayout){
		this.textLayoutThis = textLayout;
		if (!this.children){
			this.setBiDiMarkers();
			return;
		}
		this.setBiDiMarkers();
	},
	"setReverseTextDirection" : function (reverseTextDirection){
		this.reverseTextDirectionThis = reverseTextDirection;
		if (!this.children){
			this.setBiDiMarkers();
			return;
		}
		this.setBiDiMarkers();
	},
	"setBiDiMarkers" : function () {
		if (!this.children)
			return;
		if (this.childType == "dojo.widgets.DojoContentPane" || 
			this.childType == "dojo.widgets.DojoMenuItem" ||
			this.childType == "dojo.widgets.DojoTreeNode") {
			if (this.children.length > 0){
				for (var n=0; n<this.children.length; n++){
					var childReverseTextDirection;
					var childTextlayout;
					if (!this.children[n].reverseTextDirectionThis)
						childReverseTextDirection = this.reverseTextDirectionThis;
					else
						childReverseTextDirection = this.children[n].reverseTextDirectionThis;
					
					if (!this.children[n].textLayoutThis)
						childTextlayout = this.textLayoutThis;
					else
						childTextlayout = this.children[n].textLayoutThis;
					this.children[n].setBiDiMarkers(childTextlayout,childReverseTextDirection);
				}
			}
		}
	},

	"setWidgetOrientation" : function(widgetOrientation) {
		egl.dojo.widgets.DojoBase.prototype.setWidgetOrientation.call(this, widgetOrientation);
		if (widgetOrientation.toLowerCase() != this.eze$$DOMElement.dir) {
			if (widgetOrientation.toLowerCase() == "rtl")
				this.eze$$DOMElement.dir = "rtl";
			 else if (widgetOrientation.toLowerCase() == "ltr")
				 this.eze$$DOMElement.dir = "ltr";
		}
	}
	
});
