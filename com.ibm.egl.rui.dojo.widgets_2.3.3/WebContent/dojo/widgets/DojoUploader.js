/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoUploader',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"constructor" : function() {
		dojo.require("dojox.form.Uploader");
		this.showLabel = true;		
		this.isBidi = false;
		var eglWidget = this;
		setTimeout(function() {
			eglWidget.renderWhenDojoIsDoneLoading();
		}, 1);
		
	},
	"createDojoWidget" : function(parent) {
		this.readBiDiParams();
		this.runEventHandlers = function() { }; // turn off EGL basic event handlers
		var eglWidget = this;
		this._mergeArgs({
			label: this.text || "",
			multiple: !!this.multiple,
			showInput: this.showInput || "",
			showLabel : this.showLabel,
			uploadOnSelect : !!this.uploadOnSelect,
			url : this.uploadUrl || "",
			onAbort: function(){
				var handlers = eglWidget.getOnAbort();
				for (var n=0; n<handlers.length; n++) {
					handlers[n]();
				}
			},
			onBegin: function(){
				var handlers = eglWidget.getOnBegin();
				for (var n=0; n<handlers.length; n++) {
					handlers[n]();
				}
			},	
			onChange: function(){
				var handlers = eglWidget.getOnChange();
				for (var n=0; n<handlers.length; n++) {
					handlers[n]();
				}
			},	
			onError: function(err){
				var handlers = eglWidget.getOnError();
				for (var n=0; n<handlers.length; n++) {
					handlers[n](err);
				}
			},
			onProgress : function(e){
				var handlers = eglWidget.getOnProgress();
				for (var n=0; n<handlers.length; n++) {
					handlers[n](e.bytesLoaded, e.bytesTotal, egl.egl.core.$DateTimeLib.extend( "timestamp", e.timeStamp, "yyyyMMddHHmmss" ));
				}
			},
			onComplete : function(e){
				var handlers = eglWidget.getOnComplete();
				var dict = egl.createDictionary(false, false);
				egl.egl.core.$ServiceLib.convertObjectToDictionary(e, dict);
				for (var n=0; n<handlers.length; n++) {
					handlers[n](dict);
				}
			}
		});
		if (!this.isBidi) {
			this.dojoWidget = new dojox.form.Uploader(this._args, parent);
		} else {
			this.setBiDiParams(this._args);
			dojo.require("bidi.UploaderVisBidi"); 
			this.dojoWidget = new bidi.UploaderVisBidi(this._args, parent);
		}
		
		this.dojoWidget.startup();
		if(!!this.disabled){
			this.dojoWidget.set('disabled', true);
		}
		if((egl.IE || egl.Edge) && this.dojoWidget.addDropTarget && this.dojoWidget.uploadType=='html5'){
			this.dojoWidget.addDropTarget(this.dojoWidget.domNode);
		}
	},
	"setText": function(text) {
		this.setBiDiMarkers();
		this._setProperty("text", "label", text);
	},
	"getText" : function() {
		return this._getProperty("text", "label");
	},
	"getDisabled": function() {
		return Boolean(this.disabled);
	},
	"setDisabled": function(disabled) {
		this.disabled = disabled;
		if (this.dojoWidget){
			this.dojoWidget.set('disabled', !!this.disabled);
		}
	},
	"setMultiple" : function ( val ){
		this._setProperty("multiple", "multiple", val);
	},
	"isMultiple" : function (  ){
		return this._getProperty("multiple", "multiple");
	},
	"setShowInput" : function ( val ){
		this._setProperty("showInput", "showInput", val);
	},
	"getShowInput" : function (  ){
		return this._getProperty("showInput", "showInput");
	},
	"setShowLabel" : function ( val ){
		this._setProperty("showLabel", "showLabel", val);
	},
	"isShowLabel" : function (  ){
		return this._getProperty("showLabel", "showLabel");
	},
	"setUploadOnSelect" : function ( val ){
		this._setProperty("uploadOnSelect", "uploadOnSelect", val);
		if(this.dojoWidget){
			this.dojoWidget.connect(this.dojoWidget, "onChange", function(data){
				this.upload(data[0]);
			});
		}
	},
	"isUploadOnSelect" : function (  ){
		return this._getProperty("uploadOnSelect", "uploadOnSelect");
	},
	"setUploadUrl" : function ( val ){
		this._setProperty("uploadUrl", "url", val);
	},
	"getUploadUrl" : function (){
		return this._getProperty("uploadUrl", "url");
	},
	"getFileList" : function (){
		var list = this.dojoWidget ? this.dojoWidget.getFileList() : [], fileList = [];
		for(var i =0;i<list.length;i++){
			var file = new egl.dojo.widgets.FileInfo();
			file.name = list[i].name;
			file.size = list[i].size;
			file.fileType = list[i].type;
			fileList.push(file);
		}
		return fileList;
	},
	"reset" : function (){
		this.dojoWidget && this.dojoWidget.reset();
	},
	"upload" : function(){
		this.dojoWidget && this.dojoWidget.upload();
	},
	"getOnAbort" : function() { return this.onAbort || (this.onAbort = []); },
	"setOnAbort" : function() { throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers; },
	"getOnBegin" : function() { return this.onBegin || (this.onBegin = []); },
	"setOnBegin" : function() { throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers; },
	"getOnChange" : function() { return this.onChange || (this.onChange = []); },
	"setOnChange" : function() { throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers; },
	"getOnComplete" : function() { return this.onComplete || (this.onComplete = []); },
	"setOnComplete" : function() { throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers; },
	"getOnError" : function() { return this.onError || (this.onError = []); },
	"setOnError" : function() { throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers; },
	"getOnProgress" : function() { return this.onProgress || (this.onProgress = []); },
	"setOnProgress" : function() { throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers; }	
});
