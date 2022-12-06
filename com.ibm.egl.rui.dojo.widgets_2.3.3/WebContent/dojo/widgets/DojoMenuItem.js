/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2012, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoMenuItem',
	'dojo.widgets', 'DojoContainer',
	'div',
{
	"constructor" : function() {
		this.setChildType("dojo.widgets.DojoMenu");
		dojo.require("dijit.PopupMenuItem");
		dojo.require("dijit.MenuItem");
	},
	"createDojoWidget" : function(parent) {
		var eglWidget = this;
		if(this.children && this.children.length ){
			this._mergeArgs({
				label: this.text, 
				disabled: this.disabled,
				popup: (new dijit.Menu())
			});
			if(this.id){
				this._args.id = this.id;
			}
			if (!this.eze$$menuParent.isBidi)			
				this.dojoWidget = new dijit.PopupMenuItem(this._args);
			else {
				this.eze$$menuParent.setBiDiParams(this._args);
				dojo.require("bidi.PopupMenuItemVisBidi"); 
				this.dojoWidget = new bidi.PopupMenuItemVisBidi(this._args);
			}
			this.popupNode = this.dojoWidget.popup.domNode;
		}else if(this.text){
			this._mergeArgs({
				label: this.text,
				id: this.id || "egl.dojoMenuItem" + (++egl._dojoSerial),
				iconClass: this.iconClass || "",
				disabled: this.disabled || false
			});
			if (!this.eze$$menuParent.isBidi)			
				this.dojoWidget = new dijit.MenuItem(this._args);		
			else {
				this.eze$$menuParent.setBiDiParams(this._args); 
				dojo.require("bidi.MenuItemVisBidi"); 
				this.dojoWidget = new bidi.MenuItemVisBidi(this._args);
			}
		}else{
			if(this.id){
				this._args.id = this.id;
			}
			this.dojoWidget = new dijit.MenuSeparator(this._args);
		}
		// The order is very important
		if(this.eze$$menuParent){
			this.eze$$menuParent.dojoMenu.addChild(this.dojoWidget);
		}
		if(this.children && this.children.length){
			this.setChildren(this.children);
		}		
	},
	//When the child menu is changed, the DojoMenuItem must be reconstructed
	"createChildMenu" : function(childMenu) {
		var dojoMenu = this.dojoWidget.getParent(),
		lastIndex = dojoMenu.getIndexOfChild( this.dojoWidget );
	
		dojoMenu.removeChild(this.dojoWidget);
		
		//Avoid id conflict
		var oldID = this.dojoWidget.id;
		this.dojoWidget.destroy();
		var menuItem;
		if (!this.eze$$menuParent.isBidi)
			menuItem = new dijit.PopupMenuItem({
				id: oldID,
				label: this.text,
				disabled: this.disabled,
				popup: (new dijit.Menu())
			});
		else {
			var _bidi_isVisualMode = this.eze$$menuParent.textLayoutThis == "Visual";
			var _bidi_textDir = (this.eze$$menuParent.reverseTextDirectionThis  == 'Yes' ? "rtl" : "ltr");
			var _bidi_dir = this.eze$$menuParent.widgetOrientationThis;
			menuItem = new bidi.PopupMenuItemVisBidi({
				id: oldID,
				label: this.text,
				disabled: this.disabled,
				isVisualMode : _bidi_isVisualMode,
				textDir: _bidi_textDir,
				dir: _bidi_dir,
				popup: (new bidi.MenuVisBidi())
			});
		}
		
		//Remove the popupNode before set it to a new one, so that the dom can be gc
		if(this.popupNode && this.popupNode.parentNode)
			this.popupNode.parentNode.removeChild(this.popupNode);
		
		if( lastIndex >= 0 ){
			dojoMenu.addChild( menuItem, lastIndex );		
		}
		else{
			dojoMenu.addChild( menuItem );
		}
		
		if(childMenu){
			if(menuItem.popup.domNode.parentNode){
				menuItem.popup.domNode.parentNode.removeChild(menuItem.popup.domNode);
			}
			menuItem.set( "popup", childMenu );
			this.popupNode = menuItem.popup.domNode;
		}		
		
		//Remove the old widget dom element from egl.elements to prevent memory leak
		var element = this.eze$$DOMElement;		
		egl.destroyDomElement(element);
		element.eze$$widget = null;
		for(var i=egl.elements.length-1; i>=0; i--){
			if(egl.elements[i] == element){
				egl.elements.splice(i,1);
				break;
			}			
		}
		
		this.eze$$DOMElement = menuItem.domNode;
		this.dojoWidget = menuItem;
	},
	"destroyAtRender" : function() {
		if(this.dojoWidget){
			if(this.logicalParent && this.logicalParent.dojoMenu && this.logicalParent.dojoMenu.containerNode ){
				this.logicalParent.dojoMenu.containerNode.removeChild(this.eze$$DOMElement);
				this.eze$$menuParent = this.logicalParent;
			}			
			this.dojoWidget.destroy();
		}
		dijit.registry.remove(this.id);
		egl.destroyDomElement(this.eze$$DOMElement);
	},
	"destroy" : function(){
		if(this.popupNode && this.popupNode.parentNode){
			this.popupNode.parentNode.removeChild(this.popupNode);
		}
		egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
	},
	"setChildren" : function(newChildren){
		var children = [], n = 0;
		if( newChildren && newChildren.length > 0 ){
			while( n < newChildren.length ){
				children[n] = newChildren[n];
				++ n;
			}	
		}
		
		var oChildren = this.children;
		this.children = children;
		if( this.dojoWidget){
			if(!oChildren || oChildren.length<=0){
				this.render();
				return;
			}			
			var error = {message: "A popup menu requires exactly one child, which has to be of type dojo.widgets.DojoMenu"};
			if ( children == null || children.length == 0)
				this.showError("dojo.widgets.DojoMenu", "DojoMenuItem", null, "getSubMenu", error);
			else if (this.children[0].eze$$typename != "DojoMenu")
				this.showError("dojo.widgets.DojoMenu", "DojoMenuItem", this.children[0], "getSubMenu", error);
			
			this.removeChildren();
			// eze$$menuParent a flag to show if DojoMenu has been attached to a DojoMenuItem, 
			// so that in we can use proper constructor for DojoMenu
			if( this.children && this.children[0] ){
				this.children[0].logicalParent = this;
				if(this.children[0].dojoMenu){
					this.createChildMenu(this.children[0].dojoMenu);
				}else{
					this.children[0].eze$$menuParent = this;
				}
			}else{  // children is empty
				this.createChildMenu();
			}
		}
	},
	"setText" : function(text){
		var oText = this.text;
		this.text = text;
		if(this.dojoWidget){
			if(oText || (this.children && this.children.length > 0) ){
				this.dojoWidget.set("label", text);
			}else{
				this.render();
			}
		}
	},
	"getText" : function(){
		if (this.text.charAt(0)>=egl.LRE && this.text.charAt(0) <= egl.RLO)
			return this.text.substring(1);
		return egl.dojo.widgets.DojoBase.prototype.getText.call(this);
	},
	"setDisabled" : function(disabled) {
		this.disabled = disabled;
		if (this.dojoWidget)
			this.dojoWidget.setDisabled(disabled);
	},
	"getDisabled" : function() {
		return this.disabled;
	}
});
