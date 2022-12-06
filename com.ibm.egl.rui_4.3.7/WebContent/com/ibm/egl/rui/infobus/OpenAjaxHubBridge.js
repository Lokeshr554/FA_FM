/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
 
egl.defineClass('com.ibm.egl.rui.infobus', 'OpenAjaxHubBridge',
{
	"publish" : function(name, data) {
		if (egl.enableEditing) return;
		OpenAjax.hub.publish(name, data);		
    },
    "subscribe" : function (name, callback) {
		if (egl.enableEditing) return {};
		return OpenAjax.hub.subscribe(name, 
				function(name,data) { callback(name, egl.boxAny(data))}, 
				null, null, null);
    },
    "unsubscribe" : function (subscription) {
		if (egl.enableEditing) return;
    	return OpenAjax.hub.unsubscribe(egl.unboxAny(subscription));
    }
});
