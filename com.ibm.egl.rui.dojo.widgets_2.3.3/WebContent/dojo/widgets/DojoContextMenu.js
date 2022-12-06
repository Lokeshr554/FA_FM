/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2012, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoContextMenu',
	'dojo.widgets', 'DojoContainer',
	'div',
{
	"constructor" : function() {
		this.setChildType("dojo.widgets.DojoMenuItem");
		dojo.require("dijit.Menu");
	},
	"createDojoWidget" : function() {
		var nodes = [];
		for (var i=0; i < this.targets.length; i++ )
			nodes[i] = this.targets[i].eze$$DOMElement; 
		this._mergeArgs({
			targetNodeIds : nodes
		});
		if(this.id){
			this._args.id = this.id;
		}
		this.dojoWidget = new dijit.Menu(this._args);
		this.dojoMenu = this.dojoWidget;
		if(this.children){
			this.setChildren(this.children);
		}
		this.dojoWidget.startup();
	},
	"destroyAtRender" : function() {
		if ( this.dojoWidget ) {
			var dojoWidget = this.dojoWidget
			dojo.forEach(this.dojoWidget.targetNodeIds,
				function(child){
					dojoWidget.unBindDomNode(child);				
			});
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
		egl.destroyDomElement(this.eze$$DOMElement);
	},
	"_setEvent" : function( htmlEventName, eglEventName, dojoEventName){
		if(htmlEventName == "focus" || htmlEventName == "blur"){
			var eglWidget = this;
			func = function(e) {
				eglWidget.handleEvent(eglWidget["getOn" + eglEventName](), "on" + eglEventName, e);
	        };
	        this._setEventWithFunc(htmlEventName, eglEventName, dojoEventName, func);
		}else{
			egl.dojo.widgets.DojoBase.prototype._setEvent.call(this, htmlEventName, eglEventName, dojoEventName);
		}
	},
	"setTargets" : function( targets ) {
		this.targets = targets;
		this.renderWhenDojoIsDoneLoading();
	},
	"getTargets" : function(){
		return this.targets;
	},
	"setChildren" : function(children){		
		if( this.dojoWidget && children ){
			this.removeChildren();
			for (var n=0; n<children.length; n++) {
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
		if(this.dojoMenu && this.dojoMenu.containerNode.children.length > 0){
			var body = this.dojoMenu.containerNode;
			while(body.children.length > 0){
				body.removeChild(body.firstChild);
			}
		}
	},
	"setBiDiMarkers" : function () {
		if (this.text){
			var isVisual = this.getTextLayout() == "Visual";
			var isReverseDirection = this.getReverseTextDirection() == "Yes";
			this.text = this.setBiDiMarkersStr(this.text,isVisual,isReverseDirection);
		}
		egl.dojo.widgets.DojoContainer.prototype.setBiDiMarkers.call(this);
	}
});
