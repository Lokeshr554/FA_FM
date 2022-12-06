/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoTreeNode',
	'dojo.widgets', 'DojoContainer',
	'div',
{
	"constructor" : function() {
		this.children = [];
	},
	"render" : function() {	
		this.eze$$ready = false;
		var marker = null;
		this.renderingStep = 4;
		this.copyAttribute();		

		this.eze$$DOMElement.eze$$widget = this;
		this.renderingStep = 5;		
		this.eze$$ready = true;
		this.printStartupMessage();
		egl.startVEWidgetTimer();			
	},
	"destroy" : function(preserveDom){
		if(this.dojoWidget && this.dojoWidget._watchCallbacks){
			this.dojoWidget._watchCallbacks = null;
			this.dojoWidget.setSelected = function(){};
		}
		egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
		if(this.eze$$tree && this.eze$$tree.dojoWidget && this.eze$$tree.dojoWidget._itemNodesMap && this.eze$$tree.dojoWidget._itemNodesMap[this.id]){
			delete this.eze$$tree.dojoWidget._itemNodesMap[this.id];
		}
	},
	"getItem" : function() {
		if (!this.item)
			this.item = { id: this.id, text: this.text, parent: this.eze$$parent ? this.eze$$parent.id : null };
		if (this.children && this.children.length > 0) 
			this.item.children = this.getChildItems();
		return this.item;
	},
	"getItemOnly" : function(){
		this.selfitem = {id : this.id, text:this.text, parent : this.eze$$parent ? this.eze$$parent.id : null };
		return this.selfitem;
	},
	"getChildItems" : function() {
		var childNodes = [];
		for (var n=0; n<this.children.length; n++) {
			childNodes.push(this.children[n].getItem());
		}
		return childNodes;		
	},
	"setText" : function(text){
		this.text = text;
		if(this.eze$$tree && this.eze$$tree.store){
			var eglWidget = this;
			var eglTree = eglWidget.eze$$tree;
			eglTree.store.fetchItemByIdentity({
				identity: eglWidget.id,
				onItem: function (item) {
					try {
						eglTree.store.setValue(item, "text", text);
						eglTree.store.save();						
					}
					catch(e) {
						e.message = "Cannot change DojoTreeNode \""+eglTree.id+"\" from \""+treeWidget.id+"\"";
						egl.printError("Invalid argument to DojoTreeNode.setText", e);
					}
				}
			});
		}
	},
	"getText" : function(){
		return this.text;
	},
	"setID" : function(id){
		this.id = id;
	},
	"getID" : function(){
		return this.id;
	},
	"contains" : function(child){
		var contain = false;
		for(var i=0; i<this.children.length; i++){
			if(child.id == this.children[i].id){
				contain = true;
			}
		}
		 
		return contain;
	},
	"appendChild" : function(child) {
		if (child) {
			if(!this.contains(child)){
				this.children.appendElement(child);
			}
			child.eze$$parent = this;
			child.setTree(this.eze$$tree);
			var eglWidget = this;
			this.eze$$tree.getStore().fetchItemByIdentity({
				identity: this.id, 
				onItem: function (item) {
					try {
						eglWidget.eze$$tree.model.newItem(child.getItemOnly(), item);
						eglWidget.eze$$tree.store.save();
					}
					catch (e) {
						egl.printError("Cannot add treenode \""+child.id+"\" to \""+eglWidget.id+"\". Duplicate nodes not allowed.", e);
					}
				}, 
				onFail: function() {
					egl.printError("Cannot add treenode \""+child.id+"\" to \""+eglWidget.id+"\". Duplicate nodes not allowed.");
				}
			});
			
			if(child.children && child.children.length){
				for(var i=0; i<this.children.length; i++){
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
		}
		return -1;
	},
	"removeChild" : function(child) {
		if (child) {
			this.tempchild = child.id;
			if(child.children && child.children.length > 0){
				var length = child.children.length;
				for(var i=child.children.length-1 ; i>=0; i--){
					var t_child = child.children[i];
					child.removeChild(t_child,child.getIndex(t_child));
				}
			}
			
			this.children.removeElement(this.getIndex(child));
			var eglWidget = this;
			this.eze$$tree.getStore().fetchItemByIdentity({
				identity: child.id, 
				onItem: function (item) {
					try {
						eglWidget.eze$$tree.store.deleteItem(item);
						eglWidget.eze$$tree.store.save();
					}
					catch(e) {
						e.message = "Cannot remove DojoTreeNode \""+child.id+"\" from \""+eglWidget.id+"\"";
						egl.printError("Invalid argument to DojoTreeNode.removeChild", e);
					}
				}
			});			
		}
	},
	"removeChildren" : function(){
		var len = this.children.length;
		if(len > 0){
			var firstChild = this.children[0];
			for(var n = len-1; n >= 0; n--){
				this.removeChild(this.children[n]);
			}
			egl.cleanWidgetDom(firstChild.eze$$DOMElement);
		}		
	},
	"setChildren" : function(children) {
		this.children = [];
		for (var n=0; n<children.length; n++) {
			var child = children[n];
			if (this.eze$$tree) {
				this.appendChild(child);
			} else {	
				child.eze$$parent = this;
				this.children.push(child);
			}
		}		
	},
	"getElementById" : function(id) {
		return this.eze$$tree.getElementById(id);
	},
	"getParent" : function() {
		return this.eze$$parent;
	},
	"setTree" : function(tree) {
		this.eze$$tree = tree;
		this.eze$$tree.eglNodes[this.id] = this;
		if (this.children)
			for (var n=0; n<this.children.length; n++)
				this.children[n].setTree(tree);
	}, 
	"setBiDiMarkers" : function (textLayout, reverseTextDirection) {
		if (this.text && (textLayout || reverseTextDirection)) {
			var isVisual = textLayout == "Visual";
			var isReverseDirection = reverseTextDirection == "Yes";			
			this.text = this.setBiDiMarkersStr(this.text,isVisual,isReverseDirection);
			this.setText(this.text);
		}
		if (this.children)
			for (var n=0; n<this.children.length; n++){
				var childReverseTextDirection;
				var childTextlayout;
				if (!this.children[n].reverseTextDirectionThis)
					childReverseTextDirection = reverseTextDirection;
				else
					childReverseTextDirection = this.children[n].reverseTextDirectionThis;
				
				if (!this.children[n].textLayoutThis)
					childTextlayout = textLayout;
				else
					childTextlayout = this.children[n].textLayoutThis;
				
				this.children[n].setBiDiMarkers(childTextlayout,childReverseTextDirection);
			}
	}
});
