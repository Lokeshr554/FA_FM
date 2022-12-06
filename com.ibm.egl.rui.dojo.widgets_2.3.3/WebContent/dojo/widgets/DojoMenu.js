/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2012, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoMenu',
	'dojo.widgets', 'DojoContainer',
	'div',
{
	"constructor" : function() {
		this.setChildType("dojo.widgets.DojoMenuItem");
		dojo.require("dijit.Menu");
		dojo.require("dijit.form.DropDownButton");
		this.renderWhenDojoIsDoneLoading();
		this.isBidi = false;
	},
	"createDojoWidget" : function(parent){
		this.readBiDiParams();
		if (!this.isBidi) {
			this.dojoMenu = new dijit.Menu();
		} else {
			var args = {};
			this.setBiDiParams(args);
			dojo.require("bidi.MenuVisBidi"); 
			this.dojoMenu = new bidi.MenuVisBidi(args);
		}
		this.dojoMenu.startup();
		this._mergeArgs({
			label: this.text||"",
			disabled: this.disabled || false,
			dropDown: this.dojoMenu
		});
		if(this.id){
			this._args.id = this.id;
		}
		if (!this.isBidi) {
			this.dojoWidget = new dijit.form.DropDownButton(this._args,parent);
		}else {
			this.setBiDiParams(this._args);
			dojo.require("bidi.DropDownButtonVisBidi"); 
			this.dojoWidget = new bidi.DropDownButtonVisBidi(this._args,parent);
		}
		if(this.children){
			this.setChildren(this.children);
		}
		if(this.eze$$menuParent ){
			if( 
				this.eze$$menuParent.dojoWidget && ( !this.eze$$menuParent.dojoWidget.popup || 
					( this.eze$$menuParent.dojoWidget.popup && this.eze$$menuParent.dojoWidget.popup != this.dojoMenu)
				)
			){
				this.eze$$menuParent.createChildMenu(this.dojoMenu);
			}
		}
		this.dojoWidget.domNode.firstChild.style.display = "block";
		if(this.width){
			this.setWidth(this.width);
		}
		if(this.height){
			this.setHeight(this.height);
		}
		if(this._args.onMouseDown){
			dojo.connect(this.dojoWidget._buttonNode, "onmousedown", this._args.onMouseDown);
		}
		this.dojoWidget.startup();
	},
	"setID" : function(id) {
		if(id){
			this._setProperty("id", "id", id);
			this.eze$$DOMElement.id = "widget_" + id;
		}		
	},
	"getID" : function() {
		return this._getProperty("id","id");
	},
	"_setEvent" : function( htmlEventName, eglEventName, dojoEventName){
		if(htmlEventName == "mousedown" || htmlEventName == "focus" || htmlEventName == "blur"){
			var eglWidget = this;
			func = function(e) {
				eglWidget.handleEvent(eglWidget["getOn" + eglEventName](), "on" + eglEventName, e);
	        };
	        this._setEventWithFunc(htmlEventName, eglEventName, dojoEventName, func);
		}else{
			egl.dojo.widgets.DojoBase.prototype._setEvent.call(this, htmlEventName, eglEventName, dojoEventName);
		}
	},
	"setWidth" : function(width){
		egl.dojo.widgets.DojoBase.prototype.setWidth.call(this, width);
		if(this.dojoWidget){
			this.dojoWidget.domNode.firstChild.style.width = (parseInt(width)-10) + "px";
		}
	},
	"setHeight" : function(height){
		egl.dojo.widgets.DojoBase.prototype.setHeight.call(this, height);
		if(this.dojoWidget){
			this.dojoWidget.domNode.firstChild.style.height = (parseInt(height)-8) + "px";
		}
	},
	"setChildren" : function( newChildren){
		var children = [], n = 0;
		if( newChildren && newChildren.length > 0 ){
			while( n < newChildren.length ){
				children[n] = newChildren[n];
				++ n;
			}	
		}
		
		if( this.dojoWidget && children ){
			this.removeChildren();
			for ( n=0; n<children.length; n++) {
				var child = children[n];
				if(child.dojoWidget){
					this.dojoMenu.addChild(child.dojoWidget);
				}else{
					child.eze$$menuParent = this;
					child.render();
				}				
			}
		}
		this.children = children;
	},
	"removeChildren" : function(){
		this.children = [];
		if(this.dojoMenu && this.dojoMenu.containerNode.firstChild){
			var body = this.dojoMenu.containerNode;
			while(body.firstChild){
				body.removeChild(body.firstChild);
			}
		}
	},
	"appendChild" : function(child){
		if( this.dojoWidget ){
			if(child.dojoWidget){
				this.dojoMenu.addChild(child.dojoWidget);
			}else{
				child.eze$$menuParent = this;
				child.render();
			}		
		}
		this.children.push(child);
	},
	"removeChild" : function(child){
		if(child && this.children.length > 0){
			var newChildren=[], n=0, childIndex;			
			while( n < this.children.length ){
				if(child !== this.children[n]){
					newChildren.push(this.children[n]);
				}else{
					childIndex = n;
				}
				++ n;
			}
			if(newChildren.length < this.children.length){
				this.children = newChildren;				
				if(this.dojoMenu){
					var body = this.dojoMenu.containerNode;
					if(body.childNodes.length > childIndex){
						body.removeChild(body.childNodes[childIndex]);
					}					
				}
			}
		}
	},
	"setText" : function(text){
		this.text = text;
		if(this.dojoWidget){
			this.dojoWidget.set("label", text);
		}
	},
	"setDisabled" : function(disabled){
		this._setProperty("disabled", "disabled", disabled);
	},
	"getDisabled" : function(){
		return this._getProperty("disabled","disabled");
	}
});
