/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.eze$$dataGridID = 1;

egl.defineClass("com.ibm.egl.rui.widgets", "DataGridUtil", {
	
	"constructor" : function() {
		this.start = new Date().getTime();
		this.selectionKey = "eze$$selected_" + this.start;
		this.checkedKey =  "eze$$checked_" + this.start;
		this.HTMLBuffer = new Array();
		this.htmlStringCount = 0;
	},
	
	"getUniqueID" : function() {
		return "eze$$grid" + egl.eze$$dataGridID++;
	},
	  	
  	"getTextWidth" : function(s) {
  		var span = egl.createChild(document.body, "span");
  		span.innerHTML = s;
  		var w = egl.getWidthInPixels(span);
  		document.body.removeChild(span);
  		return w;
  	},
  	
  	"getOriginalTarget" : function(e) { 
  		var element = e.srcElement || e.target;
  		return element.eze$$widget || egl.createWidget(element);
  	},
  	
  	"getIntAttribute" : function(widget, name) {
  		return widget.eze$$DOMElement.getAttribute(name) || 0;
  	},
  	
  	"setSelected" : function(object, value) {
  		if (object) object[this.selectionKey] = value; 
  	},
  	
  	"getSelected" : function(object) {
  		return (object ? object[this.selectionKey] == true : false);
  	},
  	
  	"setChecked" : function(object, value) {
  		if (object) object[this.checkedKey] = value;
  	},
  	
  	"getChecked" : function(object) {
  		return (object ? object[this.checkedKey] == true : false);
  	},
  
  	"sort" : function(array,fieldName, up, ic, comparator) {
		try {
			var row=array[0];
			if(!row) return (array);
			if(array[0][fieldName]==null){
				var isProp=false;
				for(var p in row){
					if(p.toLowerCase()==fieldName.toLowerCase()){
						fieldName=p;
						isProp=true;
						break;
					}							
				}
				if(!isProp) return (array);
			}
			
			array.sort(function(a, b) {
				var result;
				var data1 = (a[fieldName]!= null) ? (a[fieldName].eze$$value!=null ? a[fieldName].eze$$value : a[fieldName]) : null;
				var data2 = (b[fieldName]!= null) ? (b[fieldName].eze$$value!=null ? b[fieldName].eze$$value : b[fieldName]) : null;
				if(data1 == null)
					return 1;
				if(data2 == null)
					return -1;
				if( ic ){
					if(data1.toLowerCase)
						data1 = data1.toLowerCase();
					if(data2.toLowerCase)
						data2 = data2.toLowerCase();
				}
				if(comparator) result=comparator(egl.boxAny(data1),egl.boxAny(data2));
				else result = data1.compareTo(data2);				
				return up ? result : -result;
			});
			return(array);
		}
		catch (e) {
			egl.println(e.message);
			throw egl.createRuntimeException( "CRRUI2102E", [ ] );
		}
  	},
  	
  	"getFieldNames" : function(object) {
  		result = [];
		for (f in object)
			if (egl.isUserField(object, f))
				result.push(f);
		return result;
  	},
 	"lockCol" : function(container, gridId) {
 		var scrollLeft = container.eze$$DOMElement.scrollLeft;
 		var scrollTop = container.eze$$DOMElement.scrollTop;
 		var stylesheet = document.getElementById('eze$$dgfixcol');
 		//$ is a reserved character in css selector
 		escapeGridId = gridId.replace(/\$/g, '\\$');
 		if(stylesheet){
 			stylesheet.innerHTML = '#'+ escapeGridId + ' .EglRuiDataGridCheckBox { left:' + scrollLeft + 'px } ' 
				+ '#'+ escapeGridId + ' .EglRuiDataGridColumn1Cell { left:' + scrollLeft + 'px } '
				+ '#'+ escapeGridId + ' .EglRuiDataGridHeaderRow { top:' + scrollTop + 'px }';
 		}else{
 			var head = document.getElementsByTagName('head')[0];
 	 		var sheet = document.createElement('style');
 	 		sheet.innerHTML = '#'+ escapeGridId + ' .EglRuiDataGridCheckBox { left:' + scrollLeft + 'px } ' 
 				+ '#'+ escapeGridId + ' .EglRuiDataGridColumn1Cell { left:' + scrollLeft + 'px } '
 				+ '#'+ escapeGridId + ' .EglRuiDataGridHeaderRow { top:' + scrollTop + 'px }';
 	 		sheet.id = 'eze$$dgfixcol';
 	 		head.appendChild(sheet);
 		}
 	},
  	"setBiDiMarkersStr" : function(text, isTextTypeVisual, isTextOrientationRightToLeft) {
		var endMarker = "", startMarker = "";
		if(text.charAt(0) >= egl.LRE && text.charAt(0) <= egl.RLO) 
			text = text.substring(1);
		if(isTextTypeVisual) 
			startMarker = (isTextOrientationRightToLeft) ? egl.RLO : egl.LRO;
		text = startMarker + text + endMarker;
		return (text);
  	},
  	"destroyHeaderCell" : function(grid){
  		if(grid && grid.eze$$DOMElement && grid.eze$$DOMElement.children && grid.eze$$DOMElement.children.length > 0){
  			var header = grid.eze$$DOMElement.children[0];
  			var tds = header.getElementsByTagName("span");
  			var count = tds.length;
  			var tdsArray = [];
  			for(var i=0; i<count; i++) 
  				tdsArray.push(tds[i]);  			
  			for(var i=0; i<count; i++){
				row = tdsArray[i].getAttribute("row") || 0;
				column = tdsArray[i].getAttribute("column") || 0;
				if(row < 1 && column >= 1){
					egl.doDestroyDomElement(tdsArray[i]);
				}
  			}
  		}  		
  	},
  	"cleanInnerHtml" : function(grid){
		if(egl.IE){
			var ele = grid.eze$$DOMElement;
			while(ele.firstChild) {
				ele.removeChild(ele.firstChild);
			}
		}
  	}
});

egl.com.ibm.egl.rui.widgets.DataGridUtil.dataGridCheckboxClick = function(id, checkbox) {
	try {
		var grid = document.getElementById(id).eze$$widget.eze$$container;		
		while(grid.eze$$DOMElement.eze$$widget.RUIDataGridID != "RUIDataGridID"){
			grid = grid.eze$$container;			
		}
		grid = grid.eze$$DOMElement.eze$$widget;
		if(grid != null){
			grid.checkSelection(egl.createWidget(checkbox));
		}						
	}
	catch (e) {
		egl.printError("Could not publish checkbox event", e);
	}
	return 0;
}
