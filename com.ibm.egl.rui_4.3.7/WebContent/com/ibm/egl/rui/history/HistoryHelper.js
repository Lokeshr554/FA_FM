/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineClass('com.ibm.egl.rui.history', 'HistoryHelper',
{
	"setLocationHash" : function(hash) {
		document.location.hash = encodeURIComponent(hash);
	},
	"getLocationHash" : function()  {
		return decodeURIComponent(document.location.hash.replace(/.*#/,""));
	},
	"setLocationHref" : function(href) {
		document.location.href = href;
	},
	"getLocationHref" : function()  {
		return document.location.href;
	},
	"setOnbeforeUnload" : function(beforeUnload) {
		window.onbeforeunload = beforeUnload;
	},
	"getFrameSrc" : function(frame) {
		return String(frame.eze$$DOMElement.contentWindow.document.location);
	},
	"goBack" : function () {
		history.back();
	},
	"goForward" : function () {
		history.forward();
	},
	"setFrameSrc" : function(frame, uri) {
		frame.eze$$DOMElement.src = uri;
	},
	"isIE" : function() {
		return egl.IE;
	},
	"inVisualEditorDesignMode" : function() {
		return egl.enableEditing;
	}
});
