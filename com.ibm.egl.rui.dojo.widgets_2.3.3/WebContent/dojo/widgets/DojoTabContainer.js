/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoTabContainer',
	'dojo.widgets', 'DojoContainer',
	'div',
	{
	"constructor" : function() {
		this.setChildType("dojo.widgets.DojoContentPane");
		this.width = 800;
		this.height = 450;
		dojo.require("dijit.layout.StackContainer");
		dojo.require("dijit.layout.TabContainer");
		dojo.require("dijit.layout.ContentPane");
		this.selectedChild = -1;
	},
	"createDojoWidget" : function(parent) {
		this.dojoID = "egl.DojoTabContainer" + (++egl._dojoSerial);
		if(this._id == null)
			this._id = this.dojoID;
		this._mergeArgs({
			tabPosition: this.getDojoTabPosition(), 
			doLayout: true, 
			id: this.id || (this._id || this.dojoID),
			style: "width:"+egl.toPX(this.width)+";height:"+egl.toPX(this.height)
		});
		var visibility = parent.style.visibility;
		this.dojoWidget = new dijit.layout.TabContainer(this._args, parent);
		parent.style.visibility = visibility;
		this.dojoWidget.startup();
		this.eze$$ready = true;
		this.addEventHandlers();
		if (this.selectedChild != -1)
			this.setSelection(this.selectedChild);
	},
	"layout" : function() {
		var eglWidget = this;
		setTimeout(function() {
			if(eglWidget.dojoWidget){
			eglWidget.dojoWidget.resize();
		}
		}, 100);
	},
	"destroyAtRender" : function() {
		if(this.dojoWidget){
			try { this.dojoWidget.destroyRecursive(true); } catch (e) { }
		}
		egl.dojo.widgets.DojoContainer.prototype.removeChildren.call(this);
		egl.dojo.widgets.DojoContainer.prototype.destroyAtRender.call(this);	
	},
	"destroy" : function(){
		dojo.unsubscribe(this.selectSubscription);
		dojo.unsubscribe(this.removeSubscription);
		try { this.dojoWidget.destroyRecursive(); } catch (e) { }		
		egl.dojo.widgets.DojoBase.prototype.destroy.call(this);	
	},
	"setChildren" : function(children) {
		this.eze$$ready = false;
		egl.dojo.widgets.DojoContainer.prototype.setChildren.call(this, children);	
	},
	"removeChildren" : function(){
		if(this.dojoWidget){
			for(var i=this.children.length - 1;i>=0;i--){
				var child = this.children[i];
				if(child.dojoWidget){
					this.dojoWidget.removeChild(child.dojoWidget);
				}	
			}
		}		
		this.children = [];
	},
	"addTab" : function(child, index) {
		if(this.children.length > index && index >= 1){
			this.children[index - 1] = child;
			if(this.dojoWidget){
				this.dojoWidget.addChild(child.dojoWidget, index - 1);
			}
		}else{
			egl.printError("Invalid index for addChild");
		}				
	},
	"appendChild" : function(child) {
		var currentLength = this.children.length;
		this.children[currentLength] = child;		
		if(this.dojoWidget){
			this.dojoWidget.addChild(child.dojoWidget, currentLength);
		}				
	},
	"addEventHandlers" : function() {
		var eglWidget = this;
		this.selectSubscription = dojo.subscribe(this.dojoID+"-selectChild", function(child) {
			if (eglWidget.eze$$ready) {
				eglWidget.selection = eglWidget.getChildIndex(child) + 1;
				eglWidget.handleEvent(eglWidget.getOnTabSelected(), "onTabSelected", null);
			}
		});
		this.removeSubscription = dojo.subscribe(this.dojoID+"-removeChild", function(child) {
			if (eglWidget.eze$$ready) {
				var index = eglWidget.getChildIndex(child);
				eglWidget._updateSelection(index);
				eglWidget.children.splice(index,1);
				eglWidget.handleEvent(eglWidget.getOnTabRemoved(), "onTabRemoved", null);
			}
		});
	},
	"getDojoTabPosition" : function() {
		if (this.tabPosition == "top") return "top-h";
		if (this.tabPosition == "bottom") return "bottom-h";
		if (this.tabPosition == "right") return "right-h";
		return "left-h";		
	},
	"getTabPosition" : function(){
		if(this.dojoWidget){
			return this.dojoWidget.get("tabPosition");
		}else{
			return this.tabPosition || "top";
		}
	},
	"setTabPosition" : function(position){
		this.tabPosition = position;
		if(this.dojoWidget){
			this.dojoWidget.set("tabPosition", this.getDojoTabPosition());
		}
	},
	"getSelection" : function(){
		return this.selection;
	},
	"setSelection" : function(index){
		var eglWidget = this;
		this.selectedChild = index;
		setTimeout(function() {
			if (eglWidget.dojoWidget) {
				var contentPanes = eglWidget.dojoWidget.getChildren();
				if (index > 0 && index <= contentPanes.length) {
					eglWidget.selection = index;
					eglWidget.dojoWidget.selectChild(contentPanes[index-1]);
				}
			}
		},1);
	},
	"getOnTabSelected" : function() { return this.onTabSelected || (this.onTabSelected = []); },
	"getOnTabAdded" : function() { return this.onTabAdded || (this.onTabAdded = []); },
	"getOnTabRemoved" : function() { return this.onTabRemoved || (this.onTabRemoved = []); },
	"setOnTabSelected" : function() { throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers; },
	"removeTab" : function(tabindex){
		if(tabindex < 1 || undefined == this.children || this.children.length < 1 || tabindex > this.children.length){
			return;
		}
		
		var childWidget = this.children[tabindex - 1];;
		if(this.dojoWidget){
			this.dojoWidget.removeChild(childWidget.dojoWidget);
		}else{
			this.children.splice(tabindex-1,1)
			this._updateSelection(tabindex);
		}	
	},
	"_updateSelection":function(removedIndex){
		if(removedIndex < this.selection){
			this.selection -= 1;
		}else if(removedIndex == this.selection){
			this.selection = 1;
		}
	}
});