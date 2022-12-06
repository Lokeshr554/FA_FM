/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoTree',
	'dojo.widgets', 'DojoContainer',
	'div',
{
	"constructor" : function() {
		this.setChildType("dojo.widgets.DojoTreeNode");
		dojo.require("dijit.Tree"); 
		dojo.require("dojo.data.ItemFileWriteStore"); 
		this.eglNodes = [];
		this.showRoot = true;
		this.isBidi = false;
	},
	"createDojoWidget" : function(parent){		
		this.readBiDiParams();
		var eglWidget = this;
		this.dojoID = "egl.DojoTree" + (++egl._dojoSerial);
		this._mergeArgs({
			id: this.id || this.dojoID,
			model: this.getModel(),			
			showRoot: this.showRoot,
			_createTreeNode: function(args) {
				var treeNode = eglWidget.eglNodes[args.item.id];
				var node;
				if(treeNode && args.item && !args.item.root){
					eglWidget._cleanTreenode(treeNode);
					var style = treeNode.eze$$DOMElement.style;
					treeNode._mergeArgs(args);
					treeNode._args.getParent = function(){		               
		                return this.domNode ? dijit.getEnclosingWidget(this.domNode.parentNode) : null;
		            };
		            node = new dijit._TreeNode(treeNode._args);
					treeNode.dojoWidget = node;
					node.set("id", treeNode.id);					
					treeNode.render();
					treeNode.copyStyle(style);
				}else if(!args.item.root){
					egl.printError("DojoTree \""+child.id+"\" Cannot create.");
				}else{
					node = new dijit._TreeNode(args);
				}		
				return node;				
			}
		});
	
		var shallowCopy = {};
		for( var key in this._args ){
			shallowCopy[key] = this._args[key]; 
		}
		if (!this.isBidi) {
			this.dojoWidget = new dijit.Tree(shallowCopy, parent);
		} else {
			this.setBiDiParams(shallowCopy.model);
			dojo.require("bidi.TreeVisBidi"); 
			this.dojoWidget = new bidi.TreeVisBidi(shallowCopy, parent);
		}
		setTimeout(egl.startVEWidgetTimer, 2000);
		this.dojoWidget.startup();
	},
	"_setEvent" : function( htmlEventName, eglEventName, dojoEventName){
		if(htmlEventName == "click"){
			var eglWidget = this;
			var func = function(item, node, e) {
				eglWidget.selection = item.id && item.id.length > 0 ? item.id[0] : eglWidget.id;			
				eglWidget.handleEvent(eglWidget.getOnClick(), "onClick", e);
				var treeNode = node.domNode.eze$$widget;
				if(treeNode && treeNode.onClick){
					treeNode.handleEvent(treeNode.getOnClick(), "onClick", e);
				}
	        };
		    this._setEventWithFunc(htmlEventName, eglEventName, dojoEventName, func);
		}else{
			egl.dojo.widgets.DojoBase.prototype._setEvent.call(this, htmlEventName, eglEventName, dojoEventName);
		}
	},
	"destroyAtRender" : function() {
		this.dojoWidget && this.dojoWidget.rootNode && this.dojoWidget.rootNode.destroy();
		if ( this.dojoWidget ) {
			this.dojoWidget.domNode.setAttribute("aria-multiselectable", !this.dojoWidget.dndController.singular);
			this.dojoWidget.rootLoadingIndicator.style.display = "none";
			dojo.forEach(this.dojoWidget.getChildren(),
				function(child){
				    if (child._wrapperWidget) child._wrapperWidget.destroy();
				}
			);
			this.dojoWidget.destroy(true);
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
	"getStore" : function() {
		if(!this.store) this.setModel();
		return this.store;
	},
	"getModel" : function() {
		if(!this.model) this.setModel();
		return this.model;
	},
	"setModel" : function() {
		var storeData = {
			identifier: 'id',
			label: 'text',
			items: this.getModelData()
		};
		this.store = new dojo.data.ItemFileWriteStore({data: storeData});		
		this.model = new dijit.tree.ForestStoreModel({
			store: this.store,
			rootLabel: this.text
		});
	},
	"setChildren" : function(children) {
		if(this.children && this.children.length > 0){
			for(var i=this.children.length-1;i>=0;i--){
				var child = this.children[i];
				child.resetWidget();
				this._cleanTreenode(child);
			}
		}
		this.children = children;
		this.store = null;
		this.model = null;
		this.renderWhenDojoIsDoneLoading();
	},
	"_cleanTreenode" : function(node){
		if(node.dojoWidget){
			node.dojoWidget._watchCallbacks = null;
			egl.cleanWidgetDom(node.eze$$DOMElement);
			node.dojoWidget = null;
		}		
	},
	"removeChildren" : function() {
		this.setChildren([]);
	},
	"appendChild" : function(child){
		if (child) {			
			child.eze$$parent = this;
			child.setTree(this);
			var eglWidget = this;
			this.getStore().fetchItemByIdentity({
				identity: eglWidget.id, 
				onItem: function (item) {
					try {
						eglWidget.getModel().newItem(child.getItemOnly(), eglWidget.model.root);
						eglWidget.store.save();
					}
					catch (e) {
						egl.printError("Cannot add TreeNode \""+child.id+"\" to \""+eglWidget.id+"\". Duplicate node is not allowed.", e);
					}
				}, 
				onFail: function() {
					egl.printError("Cannot add TreeNode \""+child.id+"\" to \""+eglWidget.id+"\". Duplicate node is not allowed.");
				}
			});	
			this.children.appendElement(child);
			if(child.children && child.children.length){
				for(var i=0; i<child.children.length; i++){
					var t_child = child.children[i];
					child.appendChild(t_child);
				}
			}
		}
	},
	"getIndex" : function(child){
		if(this.children){
			for(var i=0; i<this.children.length; i++){
				if(child.id == this.children[i].id){
					return i+1;
				}
			}
			return -1;
		}
	},
	"removeChild" : function(child){
		if(child){
			if(child.children && child.children.length>0){
				var length = child.children.length;
				for(var i=length-1; i>=0; i--){
					var t_child = child.children[i];
					child.removeChild(t_child,child.getIndex(t_child));
				}
			}
			this.children.removeElement(this.getIndex(child));
			var eglWidget = this;
			this.getStore().fetchItemByIdentity({
				identity: child.id,
				onItem: function (item) {
					try {
						eglWidget.store.deleteItem(item);
						eglWidget.store.save();						
					}
					catch(e) {
						e.message = "Cannot remove DojoTreeNode \""+child.id+"\" from \""+eglWidget.id+"\"";
						egl.printError("Invalid argument to DojoTreeNode.removeChild", e);
					}
				}
			});
		}
	},
	"getElementById" : function(id) {
		var modelContainsThisItem = null;
		this.getStore().fetchItemByIdentity({
			identity: id, 
			onItem: function (item) {
				modelContainsThisItem = item;
			}
		});
		if (modelContainsThisItem)
			return this.eglNodes[id];		
		return null;
	},
	"getModelData" : function() {
		var model = []; 
		for (var n=0; n<this.children.length; n++) {
			var child = this.children[n]
            child.setTree(this);
			model.push(child.getItem());
		}
		return model;
	},
	"setText" : function(text){			
		this.text = text;
		if(this.dojoWidget){
			this.getModel().rootLabel = text;
			this.dojoWidget.rootNode.set("label",text);
		}
	},
	"isShowRoot" : function(showRoot){
		return this.showRoot;
	},
	"setShowRoot" : function(showRoot){
		this.showRoot = showRoot;
		if(this.dojoWidget){
			this.renderWhenDojoIsDoneLoading();
		}
	}
});
