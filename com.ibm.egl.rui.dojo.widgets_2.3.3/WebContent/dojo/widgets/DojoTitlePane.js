/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoTitlePane',
	'dojo.widgets', 'DojoContainer',
	'div',
{
	"constructor" : function() {
		dojo.require("dijit.TitlePane");
		this.open = true;
		this.isBidi = false;
	},
	"setChildren" : function(children) {
		this.removeChildren();
		this.children = children;
		this.renderWhenDojoIsDoneLoading();
		this.setBiDiMarkers();
	},
	"destroyAtRender" : function() {
		this.destroy();
	},
	"copyStyle" : function(style) {
		egl.dojo.widgets.DojoBase.prototype.copyStyle.call(this, style);
		for (var n=0; n<this.children.length; n++) {
			this.content.appendChild(this.children[n].eze$$DOMElement);			
		}
	},
	"createDojoWidget" : function(parent){
		this.readBiDiParams();
		this.content = egl.createChild(this.eze$$DOMElement, "div");
		this._mergeArgs({
			title: this.title || "", 
			open: this.open,
			content: this.content,
			duration: this.duration || 250
		});
		if(this.id){
			this._args.id = this.id;
		}
		if (!this.isBidi) {
			this.dojoWidget = new dijit.TitlePane(this._args, parent);
		} else {
			this.setBiDiParams(this._args);
			dojo.require("bidi.TitlePaneVisBidi"); 
			this.dojoWidget = new bidi.TitlePaneVisBidi(this._args, parent);
		}
		
		this.dojoWidget.startup();
		if(this.height){
			this.setHeight(this.height);
		}
	},
	"setHeight" : function(height){
		egl.dojo.widgets.DojoBase.prototype.setHeight.call(this, height);
		if(this.dojoWidget){ // 45 is the height of the title bar
			this.dojoWidget.containerNode.style.height = (parseInt(height) - 45) + "px";
		}
	},
	"getOpen" : function(){
		if (this.dojoWidget)
			this.open = this.dojoWidget.open;
		return this.open;
	},
	"setOpen" : function(open){
		this.open = open;
	},
	"toggle" : function(){
		this.dojoWidget.toggle();
	},
	"setTitle" : function(title){
		this._setProperty("title", "title", title);
	},
	"getTitle" : function(){
		return(this._getProperty("title", "title"));
	}
});
