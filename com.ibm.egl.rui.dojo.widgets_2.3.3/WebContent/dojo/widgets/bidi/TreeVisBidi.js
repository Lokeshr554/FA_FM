/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/Tree","dojox/string/BidiEngine"], function(declare, has , tree, BidiEngine){
	var bidiEngine = new BidiEngine(); 
	return declare("bidi.TreeVisBidi",[tree],{
				
		postCreate: function(){
			var textDirChForBidiFormat = (this.model.textDir == "rtl") ? "R" : "L";
			var visChForBidiFormat = (this.model.isVisualMode == true) ? "V" : "I";
			var dirChForBidiFormat = (this.model.dir == "rtl") ? "R" : "L";
			var nodes = null;
			if (this.model.store && this.model.store._jsonData)
				nodes = this.model.store._jsonData.items
			if (nodes) {
				for(var i=0; i<nodes.length; i++){
					var node = nodes[i];
					this.updateNodeWithBidi(node, textDirChForBidiFormat, visChForBidiFormat, dirChForBidiFormat);
				}
			}
			this.inherited(arguments);
			var newLabel = bidiEngine.bidiTransform (this.model.rootLabel, visChForBidiFormat + textDirChForBidiFormat + "YNN", "I" + dirChForBidiFormat + "YNN");
			this.model.rootLabel = newLabel;
			this.rootNode.set("label",newLabel);
			    
		},
		updateNodeWithBidi: function (node, textDirCh, layoutCh, dirCh) {
			node.text = bidiEngine.bidiTransform (node.text, layoutCh + textDirCh + "YNN", "I" + dirCh + "YNN");
			if (node.children){
				for(var i=0; i<node.children.length; i++){
					var subNode = node.children[i];
					this.updateNodeWithBidi(subNode, textDirCh, layoutCh, dirCh);
				}
			}
		} 
	});
}); 