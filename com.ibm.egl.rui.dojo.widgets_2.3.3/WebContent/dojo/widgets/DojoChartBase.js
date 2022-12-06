/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.chartsToRedraw = [];

egl.defineWidget(
	'dojo.widgets', 'DojoChartBase',
	'dojo.widgets', 'DojoBase',
	'div',
{
	"constructor" : function() {
		dojo.require("dojox.fx");
		dojo.require("dojox.gfx");
		dojo.require("dojox.charting.Chart2D");
		dojo.require("dojox.charting.themes.PlotKit.blue");
		dojo.require("dojox.charting.themes.PlotKit.red");
		dojo.require("dojox.charting.themes.PlotKit.green");
		dojo.require("dojox.charting.themes.PlotKit.orange");
		dojo.require("dojox.charting.themes.PlotKit.cyan");
		dojo.require("dojox.charting.themes.PlotKit.purple");
		dojo.require("dojox.charting.action2d.Tooltip");
		dojo.require("dojox.charting.action2d.Highlight");
		dojo.require("dojox.charting.action2d.Magnify");
		dojo.require("dojox.charting.themes.MiamiNice");
	},
	"createChart" : function(parent, width, height, plot) {
		this.setWidth(this.width || width);
		this.setHeight(this.height || height);
		this.dojoWidget = new dojox.charting.Chart2D(parent);
		if (!egl.IE || egl.IEVersion >= 9){
			if(egl.IE && egl.IEVersion == 9){
				this.dojoWidget.surface.rawNode.attributes[1].nodeValue = "" + (parseInt(this.width) - 1);
				this.dojoWidget.surface.rawNode.attributes[2].nodeValue = "" + (parseInt(this.height) - 2);
			}else{
				this.dojoWidget.surface.rawNode.attributes[1].nodeValue = "" + parseInt(this.width);
				this.dojoWidget.surface.rawNode.attributes[2].nodeValue = "" + parseInt(this.height);
			}			
		}
		this.dojoWidget.addPlot("default", plot);
		
		this.setTheme(this.themeColor);

		if (egl.IE && egl.IEVersion < 9) {
			if (!this.addedToRedrawList) {
				egl.chartsToRedraw.push(this);
				this.addedToRedrawList = true;
			}
		}
	},
	"setWidth" : function(width){
		this.width = width;
		if(this.dojoWidget){
			this.redraw();
		}else{
			egl.dojo.widgets.DojoBase.prototype.setWidth.call(this,width);
		}
	},
	"setHeight" : function(height){
		this.height = height;
		if(this.dojoWidget){
			this.redraw();
		}else{
			egl.dojo.widgets.DojoBase.prototype.setHeight.call(this,height);
		}
	},
	"redraw" : function() {
		this.render();
	},
	"addAxes" : function() {
		this.dojoWidget.addAxis("y", {vertical: true} );
		this.dojoWidget.addAxis("x", {} );
	},
	"addAxesWithMinMax" : function() {
		var yAxis = {vertical: true};
		if (typeof(this.minY) !== "undefined") 
			yAxis.min = this.minY;
		if (typeof(this.maxY) !== "undefined") 
			yAxis.max = this.maxY;
		this.dojoWidget.addAxis("y", yAxis);
		var xAxis = { };
		if (typeof(this.minX) !== "undefined") 
			xAxis.min = this.minX;
		if (typeof(this.maxX) !== "undefined") 
			xAxis.max = this.maxX;
		this.dojoWidget.addAxis("x", xAxis);
	},
	"setTheme" : function(color) {
		try {
			this.dojoWidget.setTheme(dojox.charting.themes.PlotKit[color]);
		}
		catch (e) {
		//	this.dojoWidget.setTheme(dojox.charting.themes.PlotKit["blue"]);
		}
		new dojox.charting.action2d.Magnify(this.dojoWidget, "default", { scale: 1.1 });
		new dojox.charting.action2d.Highlight(this.dojoWidget, "default");
		new dojox.charting.action2d.Tooltip(this.dojoWidget, "default");
	},
	"installEventHandlers" : function(thisObj,ename,handlers) {
		return egl.egl.ui.rui.Widget.prototype.installEventHandlers.call(this, thisObj, ename, handlers);
	}
});
