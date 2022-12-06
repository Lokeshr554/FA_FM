// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'GridLayout', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/GridLayout.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/GridLayout',
	"constructor" : function()
	{
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("<init>",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,59,2940,89, this);
			this.columns = 0;
			egl.atLine(this.eze$$fileName,60,3032,80, this);
			this.rows = 0;
			egl.atLine(this.eze$$fileName,61,3115,101, this);
			this.cellPadding = 0;
			egl.atLine(this.eze$$fileName,63,3222,31, this);
			this.table = new egl.egl.ui.rui.Widget();
			egl.addEmbeddedWidget(this, "table");
			
			egl.atLine(this.eze$$fileName,64,3256,26, this);
			this.innerTable = null;
			egl.addEmbeddedWidget(this, "innerTable");
			
			egl.atLine(this.eze$$fileName,65,3285,42, this);
			this.widgetOrientationThis = "";
			egl.atLine(this.eze$$fileName,66,3331,28, this);
			this.cells = null;
			
			egl.atLine(this.eze$$fileName,67,3362,30, this);
			this.defaultTDStyle = "";
			egl.atLine(this.eze$$fileName,68,3395,31, this);
			this.loaded = false;
			egl.atLine(this.eze$$fileName,69,3429,64, this);
			this.internalID = "";
			egl.atLine(this.eze$$fileName,70,3496,30, this);
			this.tableCells = null;
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.widgets.GridLayoutLib();
			new egl.com.ibm.egl.rui.widgets.UtilLib();
			new egl.egl.core.StrLib();
			egl.atLine(this.eze$$fileName,13,355,20, this);
			this.targetWidget = this.table;
			egl.atLine(this.eze$$fileName,63,3235,16, this);
			this.table.setTagName( "span" );
			egl.atLine(this.eze$$fileName,65,3285,42, this);
			this.widgetOrientationThis = "";
			egl.atLine(this.eze$$fileName,66,3331,28, this);
			this.cells = [  ];
			egl.atLine(this.eze$$fileName,68,3395,31, this);
			this.loaded = false;
			egl.atLine(this.eze$$fileName,69,3473,19, this);
			var ezert$$1 = 0;
			ezert$$1 = egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].getSerial();
			egl.atLine(this.eze$$fileName,69,3429,64, this);
			this.internalID = ("GridLayout-" + (ezert$$1).toString());
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"setWidth": function( width ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setWidth",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("width", width, "int", "width");
			egl.atLine(this.eze$$fileName,73,3567,20, this);
			this.table.setWidth( (width).toString() );
			var eze_Cond_Temp_0 = false;
			egl.atLine(this.eze$$fileName,74,3594,52, this);
			if ( (this.table.getChildren() != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,74,3618,24, this);
					var ezert$$2 = 0;
					ezert$$2 = this.table.getChildren().getSize();
					egl.atLine(this.eze$$fileName,74,3594,52, this);
					if ( (ezert$$2 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,74,3594,52, this);
							eze_Cond_Temp_0 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,74,3594,52, this);
							eze_Cond_Temp_0 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,74,3594,52, this);
					eze_Cond_Temp_0 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,74,3591,101, this);
			if ( eze_Cond_Temp_0 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,75,3653,32, this);
					this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].setWidth( (width).toString() );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,72,3532,166, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setHeight": function( height ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setHeight",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("height", height, "int", "height");
			egl.atLine(this.eze$$fileName,80,3741,22, this);
			this.table.setHeight( (height).toString() );
			var eze_Cond_Temp_1 = false;
			egl.atLine(this.eze$$fileName,81,3770,52, this);
			if ( (this.table.getChildren() != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,81,3794,24, this);
					var ezert$$3 = 0;
					ezert$$3 = this.table.getChildren().getSize();
					egl.atLine(this.eze$$fileName,81,3770,52, this);
					if ( (ezert$$3 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,81,3770,52, this);
							eze_Cond_Temp_1 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,81,3770,52, this);
							eze_Cond_Temp_1 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,81,3770,52, this);
					eze_Cond_Temp_1 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,81,3767,103, this);
			if ( eze_Cond_Temp_1 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,82,3829,34, this);
					this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].setHeight( (height).toString() );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,79,3704,172, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"removeCells": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("removeCells",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,87,3911,15, this);
			var ezert$$4 = 0;
			ezert$$4 = this.cells.getSize();
			egl.atLine(this.eze$$fileName,87,3908,333, this);
			if ( (ezert$$4 > 0) ) {
				try{egl.enterBlock();
					var tds = null;
					egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
					egl.atLine(this.eze$$fileName,88,3949,37, this);
					var ezert$$5 = null;
					ezert$$5 = this.innerTable.getElementsByTagName("td" );
					egl.atLine(this.eze$$fileName,88,3934,53, this);
					tds = ezert$$5;
					egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
					var count = 0;
					egl.addLocalFunctionVariable("count", count, "int", "count");
					egl.atLine(this.eze$$fileName,89,4010,13, this);
					var ezert$$6 = 0;
					ezert$$6 = tds.getSize();
					egl.atLine(this.eze$$fileName,89,3998,26, this);
					count = ezert$$6;
					egl.setLocalFunctionVariable("count", count, "int");
					egl.atLine(this.eze$$fileName,90,4035,199, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= count); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									var eze_Cond_Temp_2 = false;
									egl.atLine(this.eze$$fileName,91,4076,25, this);
									var ezert$$7 = 0;
									ezert$$7 = egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getChildren().getSize();
									egl.atLine(this.eze$$fileName,91,4076,73, this);
									if ( (ezert$$7 > 0) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,91,4107,37, this);
											var ezert$$8 = 0;
											ezert$$8 = egl.egl.core.$StrLib.indexOf( (egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getID()), this.internalID);
											egl.atLine(this.eze$$fileName,91,4076,73, this);
											if ( (ezert$$8 == 1) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,91,4076,73, this);
													eze_Cond_Temp_2 = true;
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,91,4076,73, this);
													eze_Cond_Temp_2 = false;
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,91,4076,73, this);
											eze_Cond_Temp_2 = false;
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,91,4073,135, this);
									if ( eze_Cond_Temp_2 ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,92,4166,24, this);
											egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].removeChildren();
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,90,4035,199, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,96,4245,11, this);
			this.cells = [  ];
			egl.atLine(this.eze$$fileName,86,3882,380, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"initTable": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("initTable",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,100,4293,51, this);
			if ( ((this.columns == 0) || (this.rows == 0)) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,101,4330,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,104,4428,24, this);
			var ezert$$9 = 0;
			ezert$$9 = this.table.getChildren().getSize();
			egl.atLine(this.eze$$fileName,104,4425,165, this);
			if ( (ezert$$9 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,105,4460,31, this);
					this.innerTable = this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)];
					egl.atLine(this.eze$$fileName,106,4496,23, this);
					this.table.removeChildren();
					egl.atLine(this.eze$$fileName,107,4524,14, this);
					this.removeCells();
					egl.atLine(this.eze$$fileName,108,4549,34, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(this.innerTable );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,111,4598,20, this);
			this.defaultTDStyle = "";
			var tdStyle = "";
			egl.addLocalFunctionVariable("tdStyle", tdStyle, "string", "tdStyle");
			egl.atLine(this.eze$$fileName,112,4685,66, this);
			tdStyle = (((this.defaultTDStyle + "padding:") + (this.cellPadding).toString()) + "px");
			egl.setLocalFunctionVariable("tdStyle", tdStyle, "string");
			egl.atLine(this.eze$$fileName,114,4759,37, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.clearHTMLString();
			var tableStyle = "";
			egl.addLocalFunctionVariable("tableStyle", tableStyle, "string", "tableStyle");
			egl.atLine(this.eze$$fileName,115,4800,23, this);
			tableStyle = "";
			egl.setLocalFunctionVariable("tableStyle", tableStyle, "string");
			egl.atLine(this.eze$$fileName,116,4827,75, this);
			if ( (this.table.getWidth() != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,117,4853,42, this);
					tableStyle = (("width:" + this.table.getWidth()) + ";");
					egl.setLocalFunctionVariable("tableStyle", tableStyle, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,119,4906,93, this);
			if ( (this.table.getHeight() != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,120,4933,59, this);
					tableStyle = (((tableStyle + "height:") + this.table.getHeight()) + ";\"");
					egl.setLocalFunctionVariable("tableStyle", tableStyle, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,122,5003,182, this);
			if ( (tableStyle != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,123,5028,83, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<table style=\"" + tableStyle) + "\"><tbody>") );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,125,5124,54, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<table><tbody>" );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,127,5189,517, this);
			{
				try{egl.enterBlock();
					var row = 0;
					egl.addLocalFunctionVariable("row", row, "int", "row");
					row = 1;
					egl.setLocalFunctionVariable("row", row, "int");
					for ( ; (row <= this.rows); row = (row + 1) )
					{
						egl.setLocalFunctionVariable("row", row, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,128,5224,83, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((("<tr id='" + this.internalID) + "-TR-") + (row).toString()) + "'>") );
							egl.atLine(this.eze$$fileName,130,5317,332, this);
							{
								try{egl.enterBlock();
									var column = 0;
									egl.addLocalFunctionVariable("column", column, "int", "column");
									column = 1;
									egl.setLocalFunctionVariable("column", column, "int");
									for ( ; (column <= this.columns); column = (column + 1) )
									{
										egl.setLocalFunctionVariable("column", column, "int");
										try{egl.enterBlock();
											var tdID = "";
											egl.addLocalFunctionVariable("tdID", tdID, "string", "tdID");
											egl.atLine(this.eze$$fileName,131,5363,55, this);
											tdID = ((((this.internalID + "-TD-") + (row).toString()) + "-") + (column).toString());
											egl.setLocalFunctionVariable("tdID", tdID, "string");
											egl.atLine(this.eze$$fileName,132,5424,98, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<td id='" + tdID) + "' class='EglRuiVAlignTop EglRuiBoxTd' ") );
											egl.atLine(this.eze$$fileName,133,5528,113, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((("style='" + tdStyle) + "' row='") + (row).toString()) + "' column='") + (column).toString()) + "'>&nbsp;</td>") );
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,130,5317,332, this);
									}
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,135,5654,45, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</tr>" );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,127,5189,517, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,137,5710,56, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</tbody></table>" );
			egl.atLine(this.eze$$fileName,138,5788,34, this);
			var ezert$$10 = "";
			ezert$$10 = egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.getHTMLString();
			egl.atLine(this.eze$$fileName,138,5770,53, this);
			this.table.setInnerHTML( ezert$$10 );
			egl.atLine(this.eze$$fileName,139,5827,30, this);
			this.tableCells = (function(){ var ezert$$11= []; ezert$$11.setType( null );for (var i=0; i < 0; i++) {
					ezert$$11[ i ] = (function(){ var ezert$$12= []; ezert$$12.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
							ezert$$12[ i ] = new egl.egl.ui.rui.Widget();
						}
						// no max size set for this array
					return ezert$$12;})();
				}
				// no max size set for this array
			return ezert$$11;})();
			egl.atLine(this.eze$$fileName,99,4269,1594, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setChildren": function( children1 ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setChildren",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("children1", children1, "egl.ui.rui.Widget[]", "!children1");
			egl.atLine(this.eze$$fileName,143,5928,99, this);
			if ( (children1 == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,144,5955,65, this);
					throw (function () {
						var ezert$$13 = egl.createRuntimeException();
						egl.atLine(this.eze$$fileName,144,5984,33, this);
						egl.checkNull(ezert$$13, "ezert$$13").message = "Children cannot be null";
						return ezert$$13;
					}).call(this);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,146,6031,235, this);
			if ( (this.widgetOrientationThis != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,147,6067,48, this);
					this.table.setWidgetOrientation( this.widgetOrientationThis );
					egl.atLine(this.eze$$fileName,148,6120,139, this);
					if ( (this.widgetOrientationThis == "RTL") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,149,6161,37, this);
							this.table.setAttribute("align", "right" );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,151,6213,36, this);
							this.table.setAttribute("align", "left" );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,154,6270,12, this);
			this.initTable();
			egl.atLine(this.eze$$fileName,155,6286,146, this);
			if ( ((this.columns == 0) || (this.rows == 0)) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,156,6323,90, this);
					{
						try{egl.enterBlock();
							var index = 0;
							egl.addLocalFunctionVariable("index", index, "int", "index");
							index = 1;
							egl.setLocalFunctionVariable("index", index, "int");
							for ( ; (index <= children1.getSize()); index = (index + 1) )
							{
								egl.setLocalFunctionVariable("index", index, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,157,6379,26, this);
									this.addCell(egl.checkNull(children1, "children1")[children1.checkIndex((index)-1)] );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,156,6323,90, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,159,6418,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,162,6440,219, this);
			{
				try{egl.enterBlock();
					var row = 0;
					egl.addLocalFunctionVariable("row", row, "int", "row");
					row = 1;
					egl.setLocalFunctionVariable("row", row, "int");
					for ( ; (row <= this.rows); row = (row + 1) )
					{
						egl.setLocalFunctionVariable("row", row, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,163,6473,40, this);
							this.tableCells.appendElement( (function(){ var ezert$$14= []; ezert$$14.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
									ezert$$14[ i ] = new egl.egl.ui.rui.Widget();
								}
								// no max size set for this array
							return ezert$$14;})() );
							egl.atLine(this.eze$$fileName,164,6518,134, this);
							{
								try{egl.enterBlock();
									var col = 0;
									egl.addLocalFunctionVariable("col", col, "int", "col");
									col = 1;
									egl.setLocalFunctionVariable("col", col, "int");
									for ( ; (col <= this.columns); col = (col + 1) )
									{
										egl.setLocalFunctionVariable("col", col, "int");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,165,6555,89, this);
											egl.checkNull(this.tableCells, "tableCells")[this.tableCells.checkIndex((row)-1)].appendElement( this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren().checkIndex((1)-1)].getChildren().checkIndex((row)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren()[this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].getChildren().checkIndex((1)-1)].getChildren().checkIndex((row)-1)].getChildren().checkIndex((col)-1)] );
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,164,6518,134, this);
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,162,6440,219, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,169,6667,92, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= children1.getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,170,6722,30, this);
							this.appendChild(egl.checkNull(children1, "children1")[children1.checkIndex((index)-1)] );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,169,6667,92, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,142,5869,896, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getChildren": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("getChildren",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,175,6827,15, this);
			$result = this.cells;
			egl.setLocalFunctionVariable("Widget[]", $result, "egl.ui.rui.Widget[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"appendChild": function( newChild ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("appendChild",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("newChild", newChild, "egl.ui.rui.Widget", "newChild");
			egl.atLine(this.eze$$fileName,179,6911,102, this);
			if ( (newChild == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,180,6937,69, this);
					throw (function () {
						var ezert$$15 = egl.createRuntimeException();
						egl.atLine(this.eze$$fileName,180,6966,37, this);
						egl.checkNull(ezert$$15, "ezert$$15").message = "Child to add cannot be null";
						return ezert$$15;
					}).call(this);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,182,7017,144, this);
			if ( (this.widgetOrientationThis != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,183,7053,101, this);
					if ( (newChild.getWidgetOrientation() == "") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,184,7095,51, this);
							newChild.setWidgetOrientation( this.widgetOrientationThis );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,187,7165,18, this);
			this.addCell(newChild );
			egl.atLine(this.eze$$fileName,188,7187,30, this);
			newChild.setLogicalParent(  this );
			var gridData = new egl.com.ibm.egl.rui.widgets.GridLayoutData();
			egl.addLocalFunctionVariable("gridData", gridData, "com.ibm.egl.rui.widgets.GridLayoutData", "gridData");
			egl.atLine(this.eze$$fileName,190,7249,115, this);
			if ( (newChild.getLayoutData() != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,191,7288,49, this);
					gridData = egl.convertAnyToNameType(egl.boxAny(newChild.getLayoutData()),"Tcom/ibm/egl/rui/widgets/gridlayoutdata;",egl.com.ibm.egl.rui.widgets.GridLayoutData);
					egl.setLocalFunctionVariable("gridData", gridData, "com.ibm.egl.rui.widgets.GridLayoutData");
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,193,7350,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,195,7368,60, this);
			if ( !(this.isValidGridLayoutData(function() {
				var ezert$$16 = new egl.com.ibm.egl.rui.widgets.GridLayoutData();
				
				ezert$$16.eze$$assign(gridData);
			; return ezert$$16;}.call(this) )) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,196,7414,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			var td = null;
			egl.addLocalFunctionVariable("td", td, "egl.ui.rui.Widget", "td");
			egl.atLine(this.eze$$fileName,199,7434,54, this);
			td = egl.checkNull(this.tableCells, "tableCells")[this.tableCells.checkIndex((gridData.row)-1)][egl.checkNull(this.tableCells, "tableCells")[this.tableCells.checkIndex((gridData.row)-1)].checkIndex((gridData.column)-1)];
			egl.setLocalFunctionVariable("td", td, "egl.ui.rui.Widget");
			var eze_Cond_Temp_2 = false;
			egl.atLine(this.eze$$fileName,201,7501,65, this);
			if ( (td != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,201,7516,29, this);
					var ezert$$17 = null;
					ezert$$17 = td.getAttribute("occupied" );
					egl.atLine(this.eze$$fileName,201,7501,65, this);
					if ( (egl.convertAnyToString(egl.boxAny(ezert$$17),false) != "true") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,201,7501,65, this);
							eze_Cond_Temp_2 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,201,7501,65, this);
							eze_Cond_Temp_2 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,201,7501,65, this);
					eze_Cond_Temp_2 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,201,7496,2372, this);
			if ( eze_Cond_Temp_2 ) {
				try{egl.enterBlock();
					var childCells = (function(){ var ezert$$18= []; ezert$$18.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
							ezert$$18[ i ] = new egl.egl.ui.rui.Widget();
						}
						// no max size set for this array
					return ezert$$18;})();
					egl.addLocalFunctionVariable("childCells", childCells, "egl.ui.rui.Widget[]", "!childCells");
					egl.atLine(this.eze$$fileName,203,7602,351, this);
					{
						try{egl.enterBlock();
							var j = 0;
							egl.addLocalFunctionVariable("j", j, "int", "j");
							j = 1;
							egl.setLocalFunctionVariable("j", j, "int");
							for ( ; (j <= (gridData.horizontalSpan - 1)); j = (j + 1) )
							{
								egl.setLocalFunctionVariable("j", j, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,204,7659,286, this);
									if ( ((gridData.column + j) <= this.columns) ) {
										try{egl.enterBlock();
											var tempTd = null;
											egl.addLocalFunctionVariable("tempTd", tempTd, "egl.ui.rui.Widget", "tempTd");
											egl.atLine(this.eze$$fileName,205,7701,62, this);
											tempTd = egl.checkNull(this.tableCells, "tableCells")[this.tableCells.checkIndex((gridData.row)-1)][egl.checkNull(this.tableCells, "tableCells")[this.tableCells.checkIndex((gridData.row)-1)].checkIndex(((gridData.column + j))-1)];
											egl.setLocalFunctionVariable("tempTd", tempTd, "egl.ui.rui.Widget");
											egl.atLine(this.eze$$fileName,206,7775,161, this);
											if ( ((tempTd != null) && (tempTd.getInnerHTML() == "&nbsp;")) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,207,7836,33, this);
													childCells.appendElement( tempTd );
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,209,7888,23, this);
													childCells.removeAll();
													egl.atLine(this.eze$$fileName,210,7919,7, this);
													{ if (!egl.debugg) egl.leave(); return;}
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,203,7602,351, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,214,7958,486, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "int", "i");
							i = 1;
							egl.setLocalFunctionVariable("i", i, "int");
							for ( ; (i <= (gridData.verticalSpan - 1)); i = (i + 1) )
							{
								egl.setLocalFunctionVariable("i", i, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,215,8013,423, this);
									if ( ((gridData.row + i) <= this.rows) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,216,8050,377, this);
											{
												try{egl.enterBlock();
													var j = 0;
													egl.addLocalFunctionVariable("j", j, "int", "j");
													j = 0;
													egl.setLocalFunctionVariable("j", j, "int");
													for ( ; (j <= (gridData.horizontalSpan - 1)); j = (j + 1) )
													{
														egl.setLocalFunctionVariable("j", j, "int");
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,217,8109,308, this);
															if ( ((gridData.column + j) <= this.columns) ) {
																try{egl.enterBlock();
																	var tempTd = null;
																	egl.addLocalFunctionVariable("tempTd", tempTd, "egl.ui.rui.Widget", "tempTd");
																	egl.atLine(this.eze$$fileName,218,8153,66, this);
																	tempTd = egl.checkNull(this.tableCells, "tableCells")[this.tableCells.checkIndex(((gridData.row + i))-1)][egl.checkNull(this.tableCells, "tableCells")[this.tableCells.checkIndex(((gridData.row + i))-1)].checkIndex(((gridData.column + j))-1)];
																	egl.setLocalFunctionVariable("tempTd", tempTd, "egl.ui.rui.Widget");
																	egl.atLine(this.eze$$fileName,219,8235,171, this);
																	if ( ((tempTd != null) && (tempTd.getInnerHTML() == "&nbsp;")) ) {
																		try{egl.enterBlock();
																			egl.atLine(this.eze$$fileName,220,8298,33, this);
																			childCells.appendElement( tempTd );
																		}finally{egl.exitBlock();}
																	}
																	else {
																		try{egl.enterBlock();
																			egl.atLine(this.eze$$fileName,222,8354,23, this);
																			childCells.removeAll();
																			egl.atLine(this.eze$$fileName,223,8387,7, this);
																			{ if (!egl.debugg) egl.leave(); return;}
																		}finally{egl.exitBlock();}
																	}
																}finally{egl.exitBlock();}
															}
														}finally{egl.exitBlock();}
														egl.atLine(this.eze$$fileName,216,8050,377, this);
													}
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,214,7958,486, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,230,8454,147, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "int", "i");
							i = 1;
							egl.setLocalFunctionVariable("i", i, "int");
							for ( ; (i <= childCells.getSize()); i = (i + 1) )
							{
								egl.setLocalFunctionVariable("i", i, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,231,8502,48, this);
									egl.checkNull(childCells, "childCells")[childCells.checkIndex((i)-1)].getParent().removeChild(egl.checkNull(childCells, "childCells")[childCells.checkIndex((i)-1)] );
									egl.atLine(this.eze$$fileName,232,8556,37, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(egl.checkNull(childCells, "childCells")[childCells.checkIndex((i)-1)] );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,230,8454,147, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,235,8611,83, this);
					if ( (this.widgetOrientationThis == "RTL") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,236,8651,34, this);
							td.setAttribute("align", "right" );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,239,8707,295, this);
					if ( (gridData.horizontalAlignment > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,240,8752,242, this);
							switch( gridData.horizontalAlignment ) {
								case 0:
									egl.atLine(this.eze$$fileName,241,8794,57, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,242,8818,33, this);
										td.setAttribute("align", "left" );
									}finally{egl.exitBlock();}
									break;
								case 1:
									egl.atLine(this.eze$$fileName,243,8858,61, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,244,8884,35, this);
										td.setAttribute("align", "center" );
									}finally{egl.exitBlock();}
									break;
								case 2:
									egl.atLine(this.eze$$fileName,245,8926,59, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,246,8951,34, this);
										td.setAttribute("align", "right" );
									}finally{egl.exitBlock();}
									break;
								default:
								try{egl.enterBlock();
								}finally{egl.exitBlock();}
								break;
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,249,9007,321, this);
					if ( (gridData.verticalAlignment > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,250,9050,270, this);
							switch( gridData.verticalAlignment ) {
								case 3:
									egl.atLine(this.eze$$fileName,251,9090,65, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,252,9114,41, this);
										td.setClass( "EglRuiVAlignTop EglRuiBoxTd" );
									}finally{egl.exitBlock();}
									break;
								case 4:
									egl.atLine(this.eze$$fileName,253,9162,71, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,254,9189,44, this);
										td.setClass( "EglRuiVAlignMiddle EglRuiBoxTd" );
									}finally{egl.exitBlock();}
									break;
								case 5:
									egl.atLine(this.eze$$fileName,255,9240,71, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,256,9267,44, this);
										td.setClass( "EglRuiVAlignBottom EglRuiBoxTd" );
									}finally{egl.exitBlock();}
									break;
								default:
								try{egl.enterBlock();
								}finally{egl.exitBlock();}
								break;
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,259,9336,20, this);
					td.removeChildren();
					egl.atLine(this.eze$$fileName,260,9366,52, this);
					td.setAttribute("rowSpan", gridData.verticalSpan );
					egl.atLine(this.eze$$fileName,261,9423,54, this);
					td.setAttribute("colSpan", gridData.horizontalSpan );
					egl.atLine(this.eze$$fileName,262,9482,89, this);
					if ( (gridData.widthHint != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,263,9518,45, this);
							td.setAttribute("width", gridData.widthHint );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,265,9576,92, this);
					if ( (gridData.heightHint != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,266,9613,47, this);
							td.setAttribute("height", gridData.heightHint );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,268,9673,25, this);
					td.appendChild(newChild );
					egl.atLine(this.eze$$fileName,269,9703,38, this);
					td.setAttribute("occupied", "true" );
					egl.atLine(this.eze$$fileName,270,9747,114, this);
					if ( (gridData.cellPadding > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,271,9784,69, this);
							td.setStyle( (((this.defaultTDStyle + "padding:") + (gridData.cellPadding).toString()) + "px") );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,178,6854,3022, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"removeChild": function( child ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("removeChild",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("child", child, "egl.ui.rui.Widget", "child");
			egl.atLine(this.eze$$fileName,277,9935,203, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= this.cells.getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,278,9986,145, this);
							if ( (egl.checkNull(this.cells, "cells")[this.cells.checkIndex((index)-1)] == child) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,279,10018,27, this);
									this.cells.removeElement( index );
									egl.atLine(this.eze$$fileName,280,10051,32, this);
									child.getParent().removeChild(child );
									egl.atLine(this.eze$$fileName,281,10089,19, this);
									this.setChildren(this.cells );
									egl.atLine(this.eze$$fileName,282,10114,7, this);
									{ if (!egl.debugg) egl.leave(); return;}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,277,9935,203, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,276,9882,266, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"removeChildren": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("removeChildren",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,289,10196,14, this);
			this.removeCells();
			egl.atLine(this.eze$$fileName,290,10214,9, this);
			this.layout();
			egl.atLine(this.eze$$fileName,288,10154,75, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"addCell": function( child ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("addCell",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("child", child, "egl.ui.rui.Widget", "child");
			egl.atLine(this.eze$$fileName,294,10280,90, this);
			{
				try{egl.enterBlock();
					var i = 0;
					egl.addLocalFunctionVariable("i", i, "int", "i");
					i = 1;
					egl.setLocalFunctionVariable("i", i, "int");
					for ( ; (i <= this.cells.getSize()); i = (i + 1) )
					{
						egl.setLocalFunctionVariable("i", i, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,295,10321,42, this);
							if ( (egl.checkNull(this.cells, "cells")[this.cells.checkIndex((i)-1)] == child) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,296,10348,7, this);
									{ if (!egl.debugg) egl.leave(); return;}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,294,10280,90, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,299,10374,27, this);
			this.cells.appendElement( child );
			egl.atLine(this.eze$$fileName,293,10235,172, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"layout": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("layout",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,303,10434,19, this);
			this.setChildren(this.cells );
			egl.atLine(this.eze$$fileName,302,10413,46, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getColumns": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("getColumns",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,307,10503,22, this);
			$result = this.columns;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setColumns": function( columns ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setColumns",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("columns", columns, "int", "columns");
			egl.atLine(this.eze$$fileName,311,10576,23, this);
			this.columns = columns;
			egl.atLine(this.eze$$fileName,312,10603,9, this);
			this.layout();
			egl.atLine(this.eze$$fileName,310,10537,81, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRows": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("getRows",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,316,10659,19, this);
			$result = this.rows;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRows": function( rows ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setRows",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("rows", rows, "int", "rows");
			egl.atLine(this.eze$$fileName,320,10722,17, this);
			this.rows = rows;
			egl.atLine(this.eze$$fileName,321,10743,9, this);
			this.layout();
			egl.atLine(this.eze$$fileName,319,10689,69, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCellPadding": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("getCellPadding",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,325,10805,26, this);
			$result = this.cellPadding;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setCellPadding": function( cellPadding ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setCellPadding",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("cellPadding", cellPadding, "int", "cellPadding");
			egl.atLine(this.eze$$fileName,329,10889,31, this);
			this.cellPadding = cellPadding;
			egl.atLine(this.eze$$fileName,330,10929,24, this);
			var ezert$$19 = 0;
			ezert$$19 = this.table.getChildren().getSize();
			egl.atLine(this.eze$$fileName,330,10924,55, this);
			if ( (ezert$$19 <= 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,331,10965,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			var oDisplayStyle = "";
			egl.addLocalFunctionVariable("oDisplayStyle", oDisplayStyle, "string", "oDisplayStyle");
			egl.atLine(this.eze$$fileName,333,10983,42, this);
			oDisplayStyle = this.table.getDisplayStyle();
			egl.setLocalFunctionVariable("oDisplayStyle", oDisplayStyle, "string");
			egl.atLine(this.eze$$fileName,334,11029,28, this);
			this.table.setDisplayStyle( "none" );
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			egl.atLine(this.eze$$fileName,335,11076,32, this);
			var ezert$$20 = null;
			ezert$$20 = this.table.getElementsByTagName("td" );
			egl.atLine(this.eze$$fileName,335,11061,48, this);
			tds = ezert$$20;
			egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,336,11131,13, this);
			var ezert$$21 = 0;
			ezert$$21 = tds.getSize();
			egl.atLine(this.eze$$fileName,336,11119,26, this);
			count = ezert$$21;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,337,11155,116, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,338,11192,65, this);
							egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setStyle( (((this.defaultTDStyle + "padding:") + (cellPadding).toString()) + "px") );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,337,11155,116, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,340,11275,35, this);
			this.table.setDisplayStyle( oDisplayStyle );
			egl.atLine(this.eze$$fileName,328,10842,474, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getWidgetOrientation": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("getWidgetOrientation",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,344,11388,36, this);
			$result = this.widgetOrientationThis;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setWidgetOrientation",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("widgetOrientation", widgetOrientation, "string", "widgetOrientation");
			egl.atLine(this.eze$$fileName,348,11512,47, this);
			this.widgetOrientationThis = widgetOrientation;
			var eze_Cond_Temp_3 = false;
			egl.atLine(this.eze$$fileName,349,11568,50, this);
			if ( (this.widgetOrientationThis != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,349,11599,15, this);
					var ezert$$22 = 0;
					ezert$$22 = this.cells.getSize();
					egl.atLine(this.eze$$fileName,349,11568,50, this);
					if ( (ezert$$22 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,349,11568,50, this);
							eze_Cond_Temp_3 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,349,11568,50, this);
							eze_Cond_Temp_3 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,349,11568,50, this);
					eze_Cond_Temp_3 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,349,11565,439, this);
			if ( eze_Cond_Temp_3 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,350,11624,48, this);
					this.table.setWidgetOrientation( this.widgetOrientationThis );
					egl.atLine(this.eze$$fileName,351,11677,141, this);
					if ( (this.widgetOrientationThis == "RTL") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,352,11718,37, this);
							this.table.setAttribute("align", "right" );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,354,11770,36, this);
							this.table.setAttribute("align", "left" );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,356,11823,171, this);
					{
						try{egl.enterBlock();
							var index = 0;
							egl.addLocalFunctionVariable("index", index, "int", "index");
							index = 1;
							egl.setLocalFunctionVariable("index", index, "int");
							for ( ; (index <= this.cells.getSize()); index = (index + 1) )
							{
								egl.setLocalFunctionVariable("index", index, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,357,11875,111, this);
									if ( (egl.checkNull(this.cells, "cells")[this.cells.checkIndex((index)-1)].getWidgetOrientation() == "") ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,358,11922,55, this);
											egl.checkNull(this.cells, "cells")[this.cells.checkIndex((index)-1)].setWidgetOrientation( this.widgetOrientationThis );
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,356,11823,171, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,347,11436,576, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"isValidGridLayoutData": function( gridData ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("isValidGridLayoutData",this,arguments,eze$$updater);
			var $result = false;
			egl.addLocalFunctionVariable("gridData", gridData, "com.ibm.egl.rui.widgets.GridLayoutData", "gridData");
			egl.atLine(this.eze$$fileName,365,12098,350, this);
			if ( ((((((((gridData.row <= 0) || (gridData.row > this.rows)) || (gridData.column <= 0)) || (gridData.column > this.columns)) || (gridData.verticalSpan <= 0)) || ((gridData.verticalSpan + gridData.row) > (this.rows + 1))) || (gridData.horizontalSpan <= 0)) || ((gridData.horizontalSpan + gridData.column) > (this.columns + 1))) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,368,12399,15, this);
					$result = false;
					egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,370,12427,14, this);
					$result = true;
					egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,364,12018,436, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[GridLayout]";
	}
	,
	"eze$$getName": function() {
		return "GridLayout";
	}
	,
	"eze$$getChildVariables": function() {
		var eze$$parent = this;
		return [
		{name : "Build Descriptor", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
					return [
					{name : "Name", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "com_ibm_egl_ruiJavaScriptBuildOptions";}}, type : ""},
					{name : "Path", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "\\com.ibm.egl.rui_4.3.7\\EGLSource\\com_ibm_egl_rui.eglbld";}}, type : ""},
					{name : "Options", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
								return [
								{name : "bidiConversionTable", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "bind", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "blanksAsZero", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "buildPlan", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "byteArrayOperationsForStructuredRecords", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cachePreparedStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cancelAfterTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "checkNumericOverflow", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "checkToTransaction", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "checkType", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cicsEntries", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cicsj2cTimeout", value : -1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "clientCodeSet", value : "IBM-850", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "commentLevel", value : 1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "currencyLocation", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "currencySymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "data", value : 31, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "dbContentSeparator", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "dbms", value : "DERBY", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "debugTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "decimalSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultDateFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultMoneyFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultNumericFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultTimeFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultTimeStampFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "deploymentDescriptor", value : "com_ibm_egl_rui", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destHost", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destLibrary", value : "QGPL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destPort", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destUserID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "eliminateSystemDependentCode", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "enableJavaWrapperGen", value : "NO", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "endCommarea", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "errorDestination", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "fillWithNulls", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "formServicePgmType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genDDSFile", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genDataTables", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genFixedLengthSqlLike", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genFormGroup", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genHelpFormGroup", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genProject", value : "com.ibm.egl.rui_4.3.7", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genProperties", value : "GLOBAL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genResourceBundle", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genReturnImmediate", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genRunFile", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genVGUIRecords", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "imsFastPath", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "imsLogID", value : "NOLOG", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "imsPSB", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "includeLineNumbers", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "j2ee", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "j2eeLevel", value : "1.3", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "leftAlign", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "linkEdit", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "linkage", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "math", value : "COBOL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "maxNumericDigits", value : 31, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "mfsExtendedAttr", value : "YES", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "mfsIgnore", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "mfsUseTestLibrary", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "msgTablePrefix", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "positiveSignIndicator", value : "F", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "prep", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "prepareAllSQLStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "preparedStatementCacheSize", value : -1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "printDestination", value : "PROGRAMCONTROLLED", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "projectID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "reservedWord", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "resourceAssociations", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "resourceBundleLocale", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "restartTransactionID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "restoreCurrentMsgOnError", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "returnTransaction", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "separatorSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "serverCodeSet", value : "IBM-037", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "serverType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sessionBeanID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "setFormItemFull", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spaADF", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spaSize", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spaStatusBytePosition", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spacesZero", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlAccessColumnsAsBytes", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlCommitControl", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlDB", value : "jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlErrorTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlIOTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlJDBCDriverClass", value : "org.apache.derby.jdbc.EmbeddedDriver", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlJNDIName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlSchema", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlValidationConnectionURL", value : "jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "startTransactionID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "statementTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "synchOnPgmTransfer", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "synchOnTrxTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sysCodes", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "system", value : "JAVASCRIPT", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "targetNLS", value : "ENU", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "tempDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "templateDir", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "transferErrorTransaction", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "truncateExtraDecimals", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "twaOffset", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "useCurrentSchema", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "useXctlForTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "userMessageFile", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60DecimalBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60NumWithCharBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60NumWithDateBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60SQLNullableBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v71AddBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "vagCompatibility", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateBlankDateFields", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateMixedItems", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateOnlyIfModified", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateSQLStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "vseLibrary", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "workDBType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "wrapperCompatibility", value : "CURRENT", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "wrapperPackageName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""}
					];}, "toString": function(){return ""}}, type : ""}
		];}, "toString": function() {return ""}}, type : ""},
		
		{name : "System Variables", attrs : egl.ATTR_SYSTEM_VAR, value : {"eze$$getChildVariables": function() {
					return [
					{name: "StrLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$StrLib, type : "egl.core.StrLib", jsName : "egl.egl.core.StrLib.$inst"},
					{name: "SysVar", attrs : egl.ATTR_SYSTEM_VAR, value : eze$$parent.jsrt$SysVar, type : "egl.core.SysVar", jsName : "jsrt$SysVar"},
					{name: "ServiceLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$ServiceLib, type : "egl.core.ServiceLib", jsName : "egl.egl.core.ServiceLib.$inst"},
		];}, "toString": function(){return ""}}, type : "", jsName : ""},
		
		{name: "GridLayoutLib", value : egl.com.ibm.egl.rui.widgets.GridLayoutLib['$inst'], type : "com.ibm.egl.rui.widgets.GridLayoutLib", jsName : "egl.com.ibm.egl.rui.widgets.GridLayoutLib.$inst"},
		{name: "UtilLib", value : egl.com.ibm.egl.rui.widgets.UtilLib['$inst'], type : "com.ibm.egl.rui.widgets.UtilLib", jsName : "egl.com.ibm.egl.rui.widgets.UtilLib.$inst"},
		{name: "pixelWidth", value : function(){try{return eze$$parent.getPixelWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "pixelWidth", getter : "getPixelWidth", setter : "setPixelWidth"},
		{name: "pixelHeight", value : function(){try{return eze$$parent.getPixelHeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "pixelHeight", getter : "getPixelHeight", setter : "setPixelHeight"},
		{name: "logicalParent", value : function(){try{return eze$$parent.getLogicalParent();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "logicalParent", getter : "getLogicalParent", setter : "setLogicalParent"},
		{name: "parent", value : function(){try{return eze$$parent.getParent();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "parent", getter : "getParent", setter : "setParent"},
		{name: "style", value : function(){try{return eze$$parent.getStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "style", getter : "getStyle", setter : "setStyle"},
		{name: "background", value : function(){try{return eze$$parent.getBackground();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "background", getter : "getBackground", setter : "setBackground"},
		{name: "layoutData", value : function(){try{return eze$$parent.getLayoutData();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "any", jsName : "layoutData", getter : "getLayoutData", setter : "setLayoutData"},
		{name: "tabIndex", value : function(){try{return eze$$parent.getTabIndex();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "tabIndex", getter : "getTabIndex", setter : "setTabIndex"},
		{name: "ariaLive", value : function(){try{return eze$$parent.getAriaLive();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ariaLive", getter : "getAriaLive", setter : "setAriaLive"},
		{name: "ariaRole", value : function(){try{return eze$$parent.getAriaRole();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ariaRole", getter : "getAriaRole", setter : "setAriaRole"},
		{name: "disabled", value : function(){try{return eze$$parent.getDisabled();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "boolean", jsName : "disabled", getter : "getDisabled", setter : "setDisabled"},
		{name: "cursor", value : function(){try{return eze$$parent.getCursor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "cursor", getter : "getCursor", setter : "setCursor"},
		{name: "visibility", value : function(){try{return eze$$parent.getVisibility();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "visibility", getter : "getVisibility", setter : "setVisibility"},
		{name: "visible", value : function(){try{return eze$$parent.getVisible();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "boolean", jsName : "visible", getter : "getVisible", setter : "setVisible"},
		{name: "opacity", value : function(){try{return eze$$parent.getOpacity();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "opacity", getter : "getOpacity", setter : "setOpacity"},
		{name: "zIndex", value : function(){try{return eze$$parent.getZIndex();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "zIndex", getter : "getZIndex", setter : "setZIndex"},
		{name: "height", value : function(){try{return eze$$parent.getHeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "height", getter : "getHeight", setter : "setHeight"},
		{name: "width", value : function(){try{return eze$$parent.getWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "width", getter : "getWidth", setter : "setWidth"},
		{name: "y", value : function(){try{return eze$$parent.getY();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "y", getter : "getY", setter : "setY"},
		{name: "x", value : function(){try{return eze$$parent.getX();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "x", getter : "getX", setter : "setX"},
		{name: "position", value : function(){try{return eze$$parent.getPosition();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "position", getter : "getPosition", setter : "setPosition"},
		{name: "marginBottom", value : function(){try{return eze$$parent.getMarginBottom();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginBottom", getter : "getMarginBottom", setter : "setMarginBottom"},
		{name: "marginTop", value : function(){try{return eze$$parent.getMarginTop();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginTop", getter : "getMarginTop", setter : "setMarginTop"},
		{name: "marginRight", value : function(){try{return eze$$parent.getMarginRight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginRight", getter : "getMarginRight", setter : "setMarginRight"},
		{name: "marginLeft", value : function(){try{return eze$$parent.getMarginLeft();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginLeft", getter : "getMarginLeft", setter : "setMarginLeft"},
		{name: "margin", value : function(){try{return eze$$parent.getMargin();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "margin", getter : "getMargin", setter : "setMargin"},
		{name: "paddingBottom", value : function(){try{return eze$$parent.getPaddingBottom();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingBottom", getter : "getPaddingBottom", setter : "setPaddingBottom"},
		{name: "paddingTop", value : function(){try{return eze$$parent.getPaddingTop();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingTop", getter : "getPaddingTop", setter : "setPaddingTop"},
		{name: "paddingRight", value : function(){try{return eze$$parent.getPaddingRight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingRight", getter : "getPaddingRight", setter : "setPaddingRight"},
		{name: "paddingLeft", value : function(){try{return eze$$parent.getPaddingLeft();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingLeft", getter : "getPaddingLeft", setter : "setPaddingLeft"},
		{name: "padding", value : function(){try{return eze$$parent.getPadding();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "padding", getter : "getPadding", setter : "setPadding"},
		{name: "borderBottomStyle", value : function(){try{return eze$$parent.getBorderBottomStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderBottomStyle", getter : "getBorderBottomStyle", setter : "setBorderBottomStyle"},
		{name: "borderTopStyle", value : function(){try{return eze$$parent.getBorderTopStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderTopStyle", getter : "getBorderTopStyle", setter : "setBorderTopStyle"},
		{name: "borderRightStyle", value : function(){try{return eze$$parent.getBorderRightStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderRightStyle", getter : "getBorderRightStyle", setter : "setBorderRightStyle"},
		{name: "borderLeftStyle", value : function(){try{return eze$$parent.getBorderLeftStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderLeftStyle", getter : "getBorderLeftStyle", setter : "setBorderLeftStyle"},
		{name: "borderStyle", value : function(){try{return eze$$parent.getBorderStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderStyle", getter : "getBorderStyle", setter : "setBorderStyle"},
		{name: "borderBottomWidth", value : function(){try{return eze$$parent.getBorderBottomWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderBottomWidth", getter : "getBorderBottomWidth", setter : "setBorderBottomWidth"},
		{name: "borderTopWidth", value : function(){try{return eze$$parent.getBorderTopWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderTopWidth", getter : "getBorderTopWidth", setter : "setBorderTopWidth"},
		{name: "borderRightWidth", value : function(){try{return eze$$parent.getBorderRightWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderRightWidth", getter : "getBorderRightWidth", setter : "setBorderRightWidth"},
		{name: "borderLeftWidth", value : function(){try{return eze$$parent.getBorderLeftWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderLeftWidth", getter : "getBorderLeftWidth", setter : "setBorderLeftWidth"},
		{name: "borderWidth", value : function(){try{return eze$$parent.getBorderWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderWidth", getter : "getBorderWidth", setter : "setBorderWidth"},
		{name: "borderColor", value : function(){try{return eze$$parent.getBorderColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderColor", getter : "getBorderColor", setter : "setBorderColor"},
		{name: "fontWeight", value : function(){try{return eze$$parent.getFontWeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "fontWeight", getter : "getFontWeight", setter : "setFontWeight"},
		{name: "fontSize", value : function(){try{return eze$$parent.getFontSize();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "fontSize", getter : "getFontSize", setter : "setFontSize"},
		{name: "font", value : function(){try{return eze$$parent.getFont();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "font", getter : "getFont", setter : "setFont"},
		{name: "backgroundColor", value : function(){try{return eze$$parent.getBackgroundColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "backgroundColor", getter : "getBackgroundColor", setter : "setBackgroundColor"},
		{name: "color", value : function(){try{return eze$$parent.getColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "color", getter : "getColor", setter : "setColor"},
		{name: "class", value : function(){try{return eze$$parent.getClass();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ezekw$$class", getter : "getClass", setter : "setClass"},
		{name: "id", value : function(){try{return eze$$parent.getID();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "id", getter : "getID", setter : "setID"},
		{name: "targetWidget", value : eze$$parent.targetWidget, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "targetWidget"},
		{name: "tagName", value : function(){try{return eze$$parent.getTagName();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "tagName", getter : "getTagName", setter : "setTagName"},
		{name: "innerHTML", value : function(){try{return eze$$parent.getInnerHTML();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "innerHTML", getter : "getInnerHTML", setter : "setInnerHTML"},
		{name: "innerText", value : function(){try{return eze$$parent.getInnerText();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "innerText", getter : "getInnerText", setter : "setInnerText"},
		{name: "children", value : function(){try{return eze$$parent.getChildren();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget[]", jsName : "!children", getter : "getChildren", setter : "setChildren"},
		{name: "document", value : eze$$parent.document, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Document", jsName : "document"},
		{name: "onChange", value : function(){try{return eze$$parent.getOnChange();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onChange", getter : "getOnChange", setter : "setOnChange"},
		{name: "onClick", value : function(){try{return eze$$parent.getOnClick();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onClick", getter : "getOnClick", setter : "setOnClick"},
		{name: "onContextMenu", value : function(){try{return eze$$parent.getOnContextMenu();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onContextMenu", getter : "getOnContextMenu", setter : "setOnContextMenu"},
		{name: "onFocusGained", value : function(){try{return eze$$parent.getOnFocusGained();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onFocusGained", getter : "getOnFocusGained", setter : "setOnFocusGained"},
		{name: "onFocusLost", value : function(){try{return eze$$parent.getOnFocusLost();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onFocusLost", getter : "getOnFocusLost", setter : "setOnFocusLost"},
		{name: "onKeyDown", value : function(){try{return eze$$parent.getOnKeyDown();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyDown", getter : "getOnKeyDown", setter : "setOnKeyDown"},
		{name: "onKeyPress", value : function(){try{return eze$$parent.getOnKeyPress();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyPress", getter : "getOnKeyPress", setter : "setOnKeyPress"},
		{name: "onKeyUp", value : function(){try{return eze$$parent.getOnKeyUp();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyUp", getter : "getOnKeyUp", setter : "setOnKeyUp"},
		{name: "onMouseDown", value : function(){try{return eze$$parent.getOnMouseDown();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseDown", getter : "getOnMouseDown", setter : "setOnMouseDown"},
		{name: "onMouseMove", value : function(){try{return eze$$parent.getOnMouseMove();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseMove", getter : "getOnMouseMove", setter : "setOnMouseMove"},
		{name: "onMouseOut", value : function(){try{return eze$$parent.getOnMouseOut();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseOut", getter : "getOnMouseOut", setter : "setOnMouseOut"},
		{name: "onMouseOver", value : function(){try{return eze$$parent.getOnMouseOver();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseOver", getter : "getOnMouseOver", setter : "setOnMouseOver"},
		{name: "onMouseUp", value : function(){try{return eze$$parent.getOnMouseUp();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseUp", getter : "getOnMouseUp", setter : "setOnMouseUp"},
		{name: "onScroll", value : function(){try{return eze$$parent.getOnScroll();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onScroll", getter : "getOnScroll", setter : "setOnScroll"},
		{name: "onSelect", value : function(){try{return eze$$parent.getOnSelect();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onSelect", getter : "getOnSelect", setter : "setOnSelect"},
		{name: "onStartDrag", value : function(){try{return eze$$parent.getOnStartDrag();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.StartDragFunction", jsName : "onStartDrag", getter : "getOnStartDrag", setter : "setOnStartDrag"},
		{name: "onDrag", value : function(){try{return eze$$parent.getOnDrag();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.DragFunction", jsName : "onDrag", getter : "getOnDrag", setter : "setOnDrag"},
		{name: "onDropOnTarget", value : function(){try{return eze$$parent.getOnDropOnTarget();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.DropOnTargetFunction", jsName : "onDropOnTarget", getter : "getOnDropOnTarget", setter : "setOnDropOnTarget"},
		{name: "numericSwap", value : function(){try{return eze$$parent.getNumericSwap();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "numericSwap", getter : "getNumericSwap", setter : "setNumericSwap"},
		{name: "symmetricSwap", value : function(){try{return eze$$parent.getSymmetricSwap();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "symmetricSwap", getter : "getSymmetricSwap", setter : "setSymmetricSwap"},
		{name: "reverseTextDirection", value : function(){try{return eze$$parent.getReverseTextDirection();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "reverseTextDirection", getter : "getReverseTextDirection", setter : "setReverseTextDirection"},
		{name: "textLayout", value : function(){try{return eze$$parent.getTextLayout();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "textLayout", getter : "getTextLayout", setter : "setTextLayout"},
		{name: "widgetOrientation", value : function(){try{return eze$$parent.getWidgetOrientation();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "widgetOrientation", getter : "getWidgetOrientation", setter : "setWidgetOrientation"},
		{name: "columns", value : function(){try{return eze$$parent.getColumns();}catch(e){return null;}}(), type : "int", jsName : "columns", getter : "getColumns", setter : "setColumns"},
		{name: "rows", value : function(){try{return eze$$parent.getRows();}catch(e){return null;}}(), type : "int", jsName : "rows", getter : "getRows", setter : "setRows"},
		{name: "cellPadding", value : function(){try{return eze$$parent.getCellPadding();}catch(e){return null;}}(), type : "int", jsName : "cellPadding", getter : "getCellPadding", setter : "setCellPadding"},
		{name: "table", value : eze$$parent.table, type : "egl.ui.rui.Widget", jsName : "table"},
		{name: "innerTable", value : eze$$parent.innerTable, type : "egl.ui.rui.Widget", jsName : "innerTable"},
		{name: "widgetOrientationThis", value : eze$$parent.widgetOrientationThis, type : "string", jsName : "widgetOrientationThis"},
		{name: "cells", value : eze$$parent.cells, type : "egl.ui.rui.Widget[]", jsName : "!cells"},
		{name: "defaultTDStyle", value : eze$$parent.defaultTDStyle, type : "string", jsName : "defaultTDStyle"},
		{name: "loaded", value : eze$$parent.loaded, type : "boolean", jsName : "loaded"},
		{name: "internalID", value : eze$$parent.internalID, type : "string", jsName : "internalID"},
		{name: "tableCells", value : eze$$parent.tableCells, type : "egl.ui.rui.Widget[][]", jsName : "!tableCells"}
		];
	}
}
);
