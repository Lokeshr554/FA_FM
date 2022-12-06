/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoStackContainer',
	'dojo.widgets', 'DojoContainer',
	'div',
	{
	"constructor" : function() {
		this.setChildType("dojo.widgets.DojoContentPane");
		this.contrBox = null;
		this.width = 800;
		this.height = 450;
		dojo.require("dijit.layout.StackContainer");
		dojo.require("dijit.layout.ContentPane");
		this.selectedChild = -1;
	},
	"createDojoWidget" : function(parent) {
		this.dojoID = "egl.DojoStackContainer" + (++egl._dojoSerial);
		this._mergeArgs({
			id: this.id || this.dojoID,
			style: "width:"+egl.toPX(this.width)+";height:"+egl.toPX(this.height)
		});
		this.dojoWidget = new dijit.layout.StackContainer(this._args, parent);
		if (this.controller) {
			this.contrBox = new dijit.layout.StackController({ containerId: this.dojoID }, this.controller.eze$$DOMElement);
			this.contrBox.startup();
		}
		this.dojoWidget.startup();
		this.addEventHandlers();
		if (this.selectedChild != -1)
			this.setSelection(this.selectedChild);
		
	},
	"previousStack" : function() {
		this.dojoWidget.back();
	},
	"nextStack" : function() {
		this.dojoWidget.forward();
	},
	"copyStyle" : function(style) {
		egl.dojo.widgets.DojoBase.prototype.copyStyle.call(this, style);
	},
	"addChild" : function(child, index) {
		egl.dojo.widgets.DojoContainer.prototype.addChild.call(this, child);
	},
	"destroy" : function(){
		dojo.unsubscribe(this.selectSubscription);
		dojo.unsubscribe(this.removeSubscription);
		egl.dojo.widgets.DojoBase.prototype.destroy.call(this);		
	},
	"addEventHandlers" : function() {
		var eglWidget = this;
		this.selectSubscription = dojo.subscribe(this.dojoID+"-selectChild", function(child) {
			if (eglWidget.eze$$ready) {
				eglWidget.selection = eglWidget.getChildIndex(child) + 1;
				eglWidget.handleEvent(eglWidget.getOnStackSelected(), "onStackSelected", null);
			}
		});
		this.removeSubscription = dojo.subscribe(this.dojoID+"-removeChild", function(child) {
			if (eglWidget.eze$$ready) {
				var index = eglWidget.getChildIndex(child);
				eglWidget.selection = index + 1;
				eglWidget.children.splice(index,1);
				eglWidget.handleEvent(eglWidget.getOnStackRemoved(), "onStackRemoved", null);
			}
		});
	},
	"notifyListeners" : function(widget, handlers, eventName) {
		for (var n=0; n<handlers.length; n++) {
			try {
				handlers[n]({ widget: widget});
			}
			catch (e) {
				egl.printError("DojoStackContainer: event handler for "+eventName+" failed.", e);
			}
		}
	},
	"getDojoStackPosition" : function() {
		if (this.StackPosition == "top" || this.StackPosition == "bottom") return this.StackPosition;
		if (this.StackPosition == "right") return "right-h";
		return "left-h";		
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
	"getOnStackSelected" : function() { return this.onStackSelected || (this.onStackSelected = []); },
	"getOnStackAdded" : function() { return this.onStackAdded || (this.onStackAdded = []); },
	"getOnStackRemoved" : function() { return this.onStackRemoved || (this.onStackRemoved = []); },
	"setOnStackSelected" : function() { throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers; }
});
