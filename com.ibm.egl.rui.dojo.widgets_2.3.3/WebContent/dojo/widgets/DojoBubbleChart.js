/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
egl.defineWidget(
	'dojo.widgets', 'DojoBubbleChart',
	'dojo.widgets', 'DojoChartBase',
	'div',								
{
	"createDojoWidget" : function(parent) {
		this.createChart(parent, 300, 300, { 
			type:  "Bubble", 
			areas: true, 
			gap:   this.barGap||5 
		});
		for (var n=0; n<this.data.length; n++)
			this.dojoWidget.addSeries("series "+n, [this.data[n]], {
				stroke: {color: "black"}, 
				fill: this.data[n].color || "red", 
				tooltip: this.data[n].tooltip || this.data[n]
			});
		this.addAxesWithMinMax();
		new dojox.charting.action2d.Magnify(this.dojoWidget, "default", { scale: 1.1 });
		new dojox.charting.action2d.Highlight(this.dojoWidget, "default");
		new dojox.charting.action2d.Tooltip(this.dojoWidget, "default");		
		this.dojoWidget.render();
		parent.style.whiteSpace = "nowrap";
		parent.setAttribute("align","left");
	}
});
