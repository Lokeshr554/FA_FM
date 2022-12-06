/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoRadioGroup',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"constructor" : function() {
		this.runEventHandlers = function() { }; // turn off EGL basic event handlers
		dojo.require("dijit.form.RadioButton");
	},
	"setOptions" : function(options, placeholder) {
		var _this = this;
		this.groupName = "egl.dojoRG_" + (++egl._dojoSerial);
		this.options = options;
		this.inputs = [];
		if(this.container){
			this.removeChildren();
		}
		this.container = egl.createChild(this.eze$$DOMElement, "span");
		for (var n=0; n<this.options.length; n++) {
			var id = this.groupName + "_input_" + n;
			var input = egl.createChild(this.container, "input");
			input.id = id;
			if (!egl.IE && egl.IEVersion < 9) input.setAttribute("type", "radio");
			input.setAttribute("name", this.groupName);
			input.setAttribute("value", this.options[n]);
			this.inputs.push(input);
			if (this.selected == this.options[n])
				input.setAttribute("checked", "checked");
			var label = egl.createChild(this.container, "label");
			if (!this.textLayoutThis && !this.widgetOrientationThis) //none Bidi property is set
				label.innerHTML = options[n];
			else
				label.innerHTML = this.setBiDiMarkers(options[n]);
			
			label.setAttribute("for", id);
			label.style.padding = "3px";
			if (this.vertical)
				egl.createChild(this.container, "br");
			
			dojo.connect( 
				label, 'onclick', (function(){
					var idx = n; 
					return function(){ !_this.getDisabled() && _this.radios[idx] && _this.radios[idx].set && _this.radios[idx].set('checked', true) && ( _this.selected = options[idx] ) };
				})()
			);
		}
		this.container.style.display = "none";
		this.renderWhenDojoIsDoneLoading();
	},
	"_setEvent" : function( htmlEventName, eglEventName, dojoEventName){
		var eglWidget = this;
		this._args = this._args || {};
		var obj = this._args;
		var func;
		if(htmlEventName == "mouseup"){
			func = function(e) {
				eglWidget.handleEvent(eglWidget["getOn" + eglEventName](), "on" + eglEventName, e);
				if(e.button==2 || e.button==3){
					eglWidget.handleEvent(eglWidget.getOnContextMenu(), "onContextMenu", e);
				}
			};
		}else if(htmlEventName == "change"){ //Deal with change event in the Dojo widget instantiation
			return;
		}else if(htmlEventName == "focus" || htmlEventName == "blur"){ // Focus event only happens in the child nodes
			func = function(e) {
				for (var n=eglWidget.radios.length-1; n>=0; n--) {
					if(eglWidget.radios[n].active) return;
				}
				eglWidget.handleEvent(eglWidget["getOn" + eglEventName](), "on" + eglEventName, e);
	        };
		}else{
			func = function(e) {
				eglWidget.handleEvent(eglWidget["getOn" + eglEventName](), "on" + eglEventName, e);
	        };
		}
        if(htmlEventName == "focus" || htmlEventName == "blur" || htmlEventName == "onkeydown" || htmlEventName == "onkeypress" || htmlEventName == "onkeyup"){
        	if(this.radios){
        		for (var n=this.radios.length-1; n>=0; n--) {
    				dojo.connect(this.radios[n].domNode, "on" + htmlEventName, func);
    			}
        	}else{
        		obj["on" + dojoEventName] = func;
        	}
		}else{
			dojo.connect(this.container, "on" + htmlEventName, func);
		}		
	},
	"getOptions" : function() {
		return this.options;
	},
	"render" : function() {
		if(this._renderSerial && this._renderSerial == this.groupName){
			return;
		}
		this._renderSerial = this.groupName;
		this.destroyAtRender();
		var eglWidget = this;
		this.radios = [];
		for (var n=0; n<this.options.length; n++) {
			this._mergeArgs({
				id: this.groupName + "__" + n,
				checked: (this.selected == this.options[n]),
				name: this.groupName,
				index: n,
				onChange : function() {
					if(this.checked){
						eglWidget.handleEvent(eglWidget.getOnChange(), "onChange", null);
					}					
				}
			});
			this._args.onClick = function(e){
				var input = eglWidget.inputs[this.index];
				eglWidget.selected = input.value;
			}
			this.radios[n] = new dijit.form.RadioButton(this._args, this.inputs[n]);
		}
		if (this.getWidgetOrientation() == "rtl"){
			this.eze$$DOMElement.dir = "rtl";
			this.eze$$DOMElement.align = "right";
		} else if (this.getWidgetOrientation() == "ltr"){
			this.eze$$DOMElement.dir = "ltr";
			this.eze$$DOMElement.align = "left";
		}
		if(this.disabled){
			this.setDisabled(this.disabled);
		}
		this.container.style.display = "inline-block";
	},
	"destroy" : function(){
		if(this.radios && this.radios.length > 0){
			for (var n=0; n<this.radios.length; n++) {
				this.radios[n].destroy();
			}
		}
	},
	"setOpacity" : function(opacity) {
		var style = this.container.style;
		this.opacity = opacity;
		style.opacity = opacity;
		style.display = "inline-block";
		style.filter = (opacity >= 0.90) ? "''" : "alpha(opacity="+(100*opacity)+")";
		style.mozOpacity = opacity; 
	},
	"setSelected" : function(selected) {
		this.selected = selected;
		if (this.container) {
			this.eze$$DOMElement.removeChild(this.container);
			this.setOptions(this.options);
		}
	},
	"getSelected" : function() {
		return this.selected;
	},
	"setDisabled" : function(disabled) {
		this.disabled = disabled;
		if(this.radios){
			for (var n=this.radios.length-1; n>=0; n--) {
				this.radios[n].set("disabled", disabled);
			}
		}
	},
	"getDisabled" : function(){
		return this.disabled;
	},
	"setWidgetOrientation" : function(value) {
		egl.dojo.widgets.DojoBase.prototype.setWidgetOrientation.call(this, value); 
		this.setOptions(this.options, "");
	},
	"setTextLayout" : function(value) {
		egl.dojo.widgets.DojoBase.prototype.setTextLayout.call(this, value); 
		this.setOptions(this.options, "");
	},
	"setBiDiMarkers" : function (string){
		//there is some 'core' problem in dojo; if all options are set in Hebrew and no Bidi properties are set, radio group looks wrong;
		//this is fixed here, but this code is called ONLY if some Bidi property is set (even if it is equal to defaul value)
		var resultStr;
		var isRTL = this.getWidgetOrientation() == "rtl";
		var isVisual = this.textLayoutThis == "Visual";
		egl.LRM = String.fromCharCode(8206);
		egl.RLM = String.fromCharCode(8207);	
		if (!isRTL)
			if (isVisual)
				resultStr = egl.LRO + string + egl.PDF;
			else
				resultStr = egl.LRE + string + egl.PDF;
		else {
			if (isVisual)
				resultStr = egl.RLM + egl.LRO + string + egl.PDF;
			else
				resultStr = egl.RLM + egl.LRM + string + egl.PDF;
		}	
		return resultStr;
	},
	"getValueAsText" : function(){
		return(this.getSelected());
	},
	"setValueAsText" : function(value){
		this.setSelected(value);
	}
});
