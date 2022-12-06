/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoTooltipDialog',
	'dojo.widgets', 'DojoContainer',
	'div',
{
	"constructor" : function() {
	    dojo.require("dijit.form.DropDownButton");
	    dojo.require("dijit.TooltipDialog");
		this.created = false;
		this.content = egl.createElement("div");
		this.renderWhenDojoIsDoneLoading();	
		this.isBidi = false;
	},
	"createDojoWidget" : function(parent) {
		this.readBiDiParams();
		if (this.children) {
			for (var n=0; n<this.children.length; n++) {
				this.content.appendChild(this.children[n].eze$$DOMElement);
			}
		}
		this.dojoID = "egl.DojoTooltipDialog_" + (++egl._dojoSerial);
		this.dojoDialogWidget = new dijit.TooltipDialog({ content: this.content });
		this._mergeArgs({
			id: this.id || this.dojoID, 
			label: this.text, 
			disabled: this.disabled || false,
			dropDown: this.dojoDialogWidget
		});
		if (!this.isBidi) {
			this.dojoWidget = new dijit.form.DropDownButton(this._args, parent);
		} else {
			this.setBiDiParams(this._args);
			dojo.require("bidi.DropDownButtonVisBidi"); 
			this.dojoWidget = new bidi.DropDownButtonVisBidi(this._args, parent);
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
	"destroyAtRender" : function() {
		this.destroy();
	},
	"setID" : function(id) {
		egl.dojo.widgets.DojoBase.prototype.setID.call(this, id);
	},
	"getID" : function(){
		return egl.egl.ui.rui.Widget.prototype.getID.call(this);
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
	"setText": function(text) {
		this.text = text;
		this.setBiDiMarkers();
		if (this.dojoWidget)
			this.dojoWidget.setLabel(text);
	},
	"setChildren" : function(children) {
		this.removeChildren();
		this.children = children;
		if(this.dojoWidget){
			this.render();
		}		
	},
	"setDisabled" : function(disabled){
		this._setProperty("disabled", "disabled", disabled);
	},
	"getDisabled" : function(){
		return this._getProperty("disabled","disabled");
	},
	"hide" : function() {
		if (this.dojoDialogWidget)
			dijit.popup.close(this.dojoDialogWidget);
	},
	"destroy" : function() {
		this.created = false;
		if (this.dojoWidget) {
			this.dojoWidget.destroy();
		}
		if (this.dojoDialogWidget) {
			this.dojoDialogWidget.destroyRecursive();
		}
	}
});
