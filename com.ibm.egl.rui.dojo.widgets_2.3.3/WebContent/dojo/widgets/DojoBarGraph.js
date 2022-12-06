/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineWidget(
	'dojo.widgets', 'DojoBarGraph',
	'dojo.widgets', 'DojoChartBase',
	'div',								
{
	"createDojoWidget" : function(parent) {
		this.createChart(parent, 300, 300, { 
			type:  this.vertical ? "Columns" : "Bars", 
			areas: true, 
			gap:   this.barGap||0
		});
		var data = [];
		var maxValue = 0, minValue = 0;
		for (var n=0; n<this.data.length; n++) {
			data.push(this.data[n].value);
			if(n==0){
				minValue = data[n];
				maxValue = data[n];
			}
			if(minValue > data[n])
				minValue = data[n];
			if(maxValue < data[n])
				maxValue = data[n];
		}
		if(minValue > 0){
			minValue = minValue - (maxValue - minValue)/data.length;
			minValue = minValue>0 ? minValue : 0;
		}			
		this.dojoWidget.addSeries("egl rocks", data);
		if(this.vertical){
			this.minX = 0.5;
			this.maxX = this.data.length + 0.5;
			this.minY = minValue;
		}else{
			this.minY = 0.5;
			this.maxY = this.data.length + 0.5;
			this.minX = minValue;
		}
		this.addAxesWithMinMax();				
		this.dojoWidget.render();
		parent.setAttribute("align","left");
	}
});
