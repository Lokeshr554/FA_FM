/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoDialog',
	'dojo.widgets', 'DojoContainer',
	'div',
{
	"constructor" : function() {
		this.content = egl.createElement("div");
		this.content.height = "auto";
		this.draggable = true;
		this.isOpen = false;
		dojo.require("dijit.Dialog");
	},
	"createDojoWidget" : function(parent) {
		this.dojoID = "egl.DojoDialog_" + (++egl._dojoSerial);
		for (var n=0; n<this.children.length; n++) {
			this.content.appendChild(this.children[n].eze$$DOMElement);
		}
		var c = [ this.content ];
		
		if (this.buttons != null) {
			var actionBar = document.createElement("div");
			actionBar.className = "dijitDialogPaneActionBar";
		
			for (var n = 0; n < this.buttons.length; n++) {			
				actionBar.appendChild(this.buttons[n].eze$$DOMElement);
			}
			c.push(actionBar);
		}
		var eglWidget = this;
		this._mergeArgs({
			title : this.title || "", 
			id: this.id || this.dojoID,
			draggable: this.draggable,
			content: c,			
			onCancel : function() {
				var evt = document.createEvent('HTMLEvents');
		        evt.initEvent("blur", false, true);
		        this.domNode.dispatchEvent(evt);
				eglWidget.handleEvent(eglWidget.getOnClose(), "onClose", null);
			}
		});
		this.dojoWidget = new dijit.Dialog(this._args, parent);
		this.dojoWidget.startup();
		if (this.isOpen)
			this.showDialog();
		if(this.x != null){
			this.setX(this.x);
		}
		if(this.y != null){
			this.setY(this.y);
		}
	},
	"destroy" : function(){
		//Bug 98890
		//Dojo destroy will remove the children in IE, so destroy the children before they are removed
		var children = this.children;
		if(egl.IE && children){
			for(var i=children.length - 1; i>=0; i--){
				egl.destroyWidget(children[i]);
			}	
		}
		egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
	},
	"getOnClose" : function() { return this.onClose || (this.onClose = []); },
	"setOnClose" : function() { throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers; },
	"getButtons" : function() {
		return this.buttons;		
	},
	"setButtons" : function(buttons) {
		this.buttons = buttons;
	},	
	"copyStyle" : function(style) {
		for (f in style){
			if (style[f] != ""){
				try { this.content.style[f] = style[f]; } catch (e) { }
			}
		}				
		if (this.width) egl.setWidth(this.dojoWidget.domNode, egl.toPX(this.width));
		if (this.height) egl.setHeight(this.dojoWidget.domNode, egl.toPX(this.height));
	},
	"setChildren" : function(children) {
		this.children = children;
	},
	"removeChildren" : function() {
		while(this.content.firstChild){
			this.content.removeChild(this.content.firstChild);
		}
	},
	"showDialog" : function() {
		this.isOpen = true;
		if (this.dojoWidget) {
			this.dojoWidget.show();
		}
		else
			this.renderWhenDojoIsDoneLoading();
	},
	"hideDialog" : function() {
		this.isOpen = false;
		if (this.dojoWidget)
			this.dojoWidget.hide();
		else
			this.renderWhenDojoIsDoneLoading();
	},
	"setVisible" : function(visible) {
		egl.dojo.widgets.DojoContainer.prototype.setVisible.call(this, visible);
		if(this.dojoWidget){
			if(visible)
				this.content.style.visibility="";
			else this.content.style.visibility="hidden";
			this.dojoWidget.domNode.style.visibility="";
		}
	},
	"getVisible" : function(){
		if(this.dojoWidget){
			return this.content.style.visibility=="hidden"?false:true;
		}else{
			return egl.dojo.widgets.DojoContainer.prototype.getVisible.call(this);
		}
	},
	"setTitle" : function(title){
		this._setProperty("title", "title", title);
	},
	"getTitle" : function(){
		return this._getProperty("title","title");
	},
	"setX" : function(x){		
		this.x = x;
		if(this.dojoWidget){
			var node = this.dojoWidget.domNode;
			this.dojoWidget._relativePosition = this.dojoWidget._relativePosition || {x:(node.style.left ? parseInt(node.style.left) : 0), y:(node.style.top ? parseInt(node.style.top) : 0)};
			this.dojoWidget._relativePosition.x = x;
			this.dojoWidget._position();
		}
	},
	"setY" : function(y){
		this.y = y;
		if(this.dojoWidget){
			var node = this.dojoWidget.domNode;
			this.dojoWidget._relativePosition = this.dojoWidget._relativePosition || {x:(node.style.left ? parseInt(node.style.left) : 0), y:(node.style.top ? parseInt(node.style.top) : 0)};
			this.dojoWidget._relativePosition.y = y;
			this.dojoWidget._position();
		}
	}
});
