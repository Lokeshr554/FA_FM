// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'DataGrid', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/DataGrid.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGrid',
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
			egl.atLine(this.eze$$fileName,89,4171,47, this);
			this.RUIDataGridID = "";
			egl.atLine(this.eze$$fileName,90,4221,67, this);
			this.data = (function(){ var ezert$$2= []; ezert$$2.setType( "A;" );// no max size set for this array
			return ezert$$2;})();
			
			egl.atLine(this.eze$$fileName,91,4291,26, this);
			this.internalID = "";
			egl.atLine(this.eze$$fileName,92,4327,20, this);
			this.util = new egl.com.ibm.egl.rui.widgets.DataGridUtil();
			
			egl.atLine(this.eze$$fileName,93,4353,52, this);
			this.pagingLabel = "";
			egl.atLine(this.eze$$fileName,95,4413,89, this);
			this.grid = new egl.com.ibm.egl.rui.widgets.Div();
			egl.addEmbeddedWidget(this, "grid");
			
			egl.atLine(this.eze$$fileName,97,4510,97, this);
			this.gotoStartButton = new egl.com.ibm.egl.rui.widgets.Button();
			egl.addEmbeddedWidget(this, "gotoStartButton");
			
			egl.atLine(this.eze$$fileName,98,4613,102, this);
			this.gotoPageBackButton = new egl.com.ibm.egl.rui.widgets.Button();
			egl.addEmbeddedWidget(this, "gotoPageBackButton");
			
			egl.atLine(this.eze$$fileName,99,4721,78, this);
			this.pageTextLabel = new egl.com.ibm.egl.rui.widgets.HTML();
			egl.addEmbeddedWidget(this, "pageTextLabel");
			
			egl.atLine(this.eze$$fileName,100,4805,108, this);
			this.gotoPageForwardButton = new egl.com.ibm.egl.rui.widgets.Button();
			egl.addEmbeddedWidget(this, "gotoPageForwardButton");
			
			egl.atLine(this.eze$$fileName,101,4919,93, this);
			this.gotoEndButton = new egl.com.ibm.egl.rui.widgets.Button();
			egl.addEmbeddedWidget(this, "gotoEndButton");
			
			egl.atLine(this.eze$$fileName,102,5018,176, this);
			this.buttonBar = new egl.com.ibm.egl.rui.widgets.Box();
			egl.addEmbeddedWidget(this, "buttonBar");
			
			egl.atLine(this.eze$$fileName,107,5202,28, this);
			this.ui = new egl.com.ibm.egl.rui.widgets.Box();
			egl.addEmbeddedWidget(this, "ui");
			
			egl.atLine(this.eze$$fileName,109,5238,41, this);
			this.columns = (function(){ var ezert$$3= []; ezert$$3.setType( egl.com.ibm.egl.rui.widgets.DataGridColumn );for (var i=0; i < 0; i++) {
					ezert$$3[ i ] = new egl.com.ibm.egl.rui.widgets.DataGridColumn();
				}
				// no max size set for this array
			return ezert$$3;})();
			
			egl.atLine(this.eze$$fileName,111,5287,30, this);
			this.behaviors = (function(){ var ezert$$4= []; ezert$$4.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$4[ i ] = null;
				}
				// no max size set for this array
			return ezert$$4;})();
			
			egl.atLine(this.eze$$fileName,112,5323,36, this);
			this.headerBehaviors = (function(){ var ezert$$5= []; ezert$$5.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$5[ i ] = null;
				}
				// no max size set for this array
			return ezert$$5;})();
			
			egl.atLine(this.eze$$fileName,113,5365,34, this);
			this.editorBehaviors = (function(){ var ezert$$6= []; ezert$$6.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$6[ i ] = null;
				}
				// no max size set for this array
			return ezert$$6;})();
			
			egl.atLine(this.eze$$fileName,114,5405,36, this);
			this.refreshBehaviors = (function(){ var ezert$$7= []; ezert$$7.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$7[ i ] = null;
				}
				// no max size set for this array
			return ezert$$7;})();
			
			egl.atLine(this.eze$$fileName,116,5449,30, this);
			this.selection = (function(){ var ezert$$8= []; ezert$$8.setType( "A;" );// no max size set for this array
			return ezert$$8;})();
			
			egl.atLine(this.eze$$fileName,117,5485,28, this);
			this.checked = (function(){ var ezert$$9= []; ezert$$9.setType( "A;" );// no max size set for this array
			return ezert$$9;})();
			
			egl.atLine(this.eze$$fileName,118,5519,26, this);
			this.editors = (function(){ var ezert$$10= []; ezert$$10.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
					ezert$$10[ i ] = new egl.egl.ui.rui.Widget();
				}
				// no max size set for this array
			return ezert$$10;})();
			
			egl.atLine(this.eze$$fileName,120,5553,50, this);
			this.showCheckBoxes = false;
			egl.atLine(this.eze$$fileName,121,5609,50, this);
			this.showScrollbar = false;
			egl.atLine(this.eze$$fileName,122,5665,52, this);
			this.fixFirstColumn = false;
			egl.atLine(this.eze$$fileName,123,5723,588, this);
			this.selectionMode = 0;
			egl.atLine(this.eze$$fileName,132,6317,74, this);
			this.enableSorting = false;
			egl.atLine(this.eze$$fileName,133,6397,74, this);
			this.showButtonBar = false;
			egl.atLine(this.eze$$fileName,134,6477,71, this);
			this.showHeader = false;
			egl.atLine(this.eze$$fileName,135,6554,82, this);
			this.manageEditorBehaviors = false;
			egl.atLine(this.eze$$fileName,136,6642,74, this);
			this.encodeValue = false;
			egl.atLine(this.eze$$fileName,138,6728,42, this);
			this.pageChangeListeners = (function(){ var ezert$$11= []; ezert$$11.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$11[ i ] = null;
				}
				// no max size set for this array
			return ezert$$11;})();
			
			egl.atLine(this.eze$$fileName,139,6776,40, this);
			this.selectionListeners = (function(){ var ezert$$12= []; ezert$$12.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$12[ i ] = null;
				}
				// no max size set for this array
			return ezert$$12;})();
			
			egl.atLine(this.eze$$fileName,140,6822,38, this);
			this.checkboxListeners = (function(){ var ezert$$13= []; ezert$$13.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$13[ i ] = null;
				}
				// no max size set for this array
			return ezert$$13;})();
			
			egl.atLine(this.eze$$fileName,141,6866,30, this);
			this.sortListeners = (function(){ var ezert$$14= []; ezert$$14.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$14[ i ] = null;
				}
				// no max size set for this array
			return ezert$$14;})();
			
			egl.atLine(this.eze$$fileName,143,6904,65, this);
			this.cellPadding = 0;
			egl.atLine(this.eze$$fileName,144,6975,64, this);
			this.cellBorder = 0;
			egl.atLine(this.eze$$fileName,145,7045,45, this);
			this.rowHeight = 0;
			egl.atLine(this.eze$$fileName,146,7096,69, this);
			this.checkBoxWidth = 0;
			egl.atLine(this.eze$$fileName,148,7173,63, this);
			this.startRow = 0;
			egl.atLine(this.eze$$fileName,150,7291,33, this);
			this._startRow = 0;
			egl.atLine(this.eze$$fileName,151,7330,29, this);
			this.lastStartRow = 0;
			egl.atLine(this.eze$$fileName,152,7365,63, this);
			this.pageSize = 0;
			egl.atLine(this.eze$$fileName,153,7434,77, this);
			this.allowEmptyRows = false;
			egl.atLine(this.eze$$fileName,155,7519,47, this);
			this.reverseTextDirectionThis = "";
			egl.atLine(this.eze$$fileName,156,7572,42, this);
			this.textLayoutThis = "";
			egl.atLine(this.eze$$fileName,158,7622,36, this);
			this.dataLoader = null;
			
			egl.atLine(this.eze$$fileName,160,7663,281, this);
			this.loadingDiv = new egl.com.ibm.egl.rui.widgets.Div();
			egl.addEmbeddedWidget(this, "loadingDiv");
			
			egl.atLine(this.eze$$fileName,247,10220,31, this);
			this.columnClass = (function(){ var ezert$$15= []; ezert$$15.setType( "S;" );// no max size set for this array
			return ezert$$15;})();
			
			egl.atLine(this.eze$$fileName,299,12309,60, this);
			this.showLoadingDivJob = new egl.egl.javascript.Job();
			
			egl.atLine(this.eze$$fileName,300,12372,30, this);
			this.innerLoadingDiv = new egl.com.ibm.egl.rui.widgets.Div();
			egl.addEmbeddedWidget(this, "innerLoadingDiv");
			
			egl.atLine(this.eze$$fileName,342,13895,52, this);
			this.Directions = null;
			
			egl.atLine(this.eze$$fileName,343,13950,24, this);
			this.headerWidth = 0;
			egl.atLine(this.eze$$fileName,737,30279,103, this);
			this.columnDragger = new egl.com.ibm.egl.rui.widgets.Span();
			egl.addEmbeddedWidget(this, "columnDragger");
			
			egl.atLine(this.eze$$fileName,1053,41128,28, this);
			this.lastSelectedRow = 0;
			egl.atLine(this.eze$$fileName,1054,41162,24, this);
			this.lastEvent = null;
			
			egl.atLine(this.eze$$fileName,1197,45844,29, this);
			this.sortedColumn = 0;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.widgets.UtilLib();
			new egl.com.ibm.egl.rui.widgets.DataGridLib();
			new egl.egl.core.MathLib();
			new egl.egl.core.StrLib();
			egl.atLine(this.eze$$fileName,46,2278,17, this);
			this.targetWidget = this.ui;
			egl.atLine(this.eze$$fileName,89,4171,47, this);
			this.RUIDataGridID = "RUIDataGridID";
			egl.atLine(this.eze$$fileName,93,4353,52, this);
			this.pagingLabel = "{page} / {pageCount}";
			egl.atLine(this.eze$$fileName,95,4430,24, this);
			egl.checkNull(this.grid, "grid").setClass("EglRuiDataGrid");
			egl.atLine(this.eze$$fileName,95,4456,21, this);
			egl.checkNull(this.grid, "grid").setPosition("relative");
			egl.atLine(this.eze$$fileName,95,4479,21, this);
			egl.checkNull(this.grid, "grid").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.clickGrid,"clickGrid") );
			egl.atLine(this.eze$$fileName,97,4541,11, this);
			egl.checkNull(this.gotoStartButton, "gotoStartButton").setText("<<");
			egl.atLine(this.eze$$fileName,97,4554,10, this);
			egl.checkNull(this.gotoStartButton, "gotoStartButton").setWidth((45).toString());
			egl.atLine(this.eze$$fileName,97,4566,16, this);
			egl.checkNull(this.gotoStartButton, "gotoStartButton").setMarginRight(10);
			egl.atLine(this.eze$$fileName,97,4584,21, this);
			egl.checkNull(this.gotoStartButton, "gotoStartButton").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoStart,"gotoStart") );
			egl.atLine(this.eze$$fileName,98,4647,10, this);
			egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").setText("<");
			egl.atLine(this.eze$$fileName,98,4659,10, this);
			egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").setWidth((45).toString());
			egl.atLine(this.eze$$fileName,98,4671,16, this);
			egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").setMarginRight(10);
			egl.atLine(this.eze$$fileName,98,4689,24, this);
			egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoPageBack,"gotoPageBack") );
			egl.atLine(this.eze$$fileName,99,4748,16, this);
			egl.checkNull(this.pageTextLabel, "pageTextLabel").setMarginRight(10);
			egl.atLine(this.eze$$fileName,99,4766,16, this);
			egl.checkNull(this.pageTextLabel, "pageTextLabel").setFontSize("80%");
			egl.atLine(this.eze$$fileName,99,4784,13, this);
			egl.checkNull(this.pageTextLabel, "pageTextLabel").setMarginTop(4);
			egl.atLine(this.eze$$fileName,100,4842,10, this);
			egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").setText(">");
			egl.atLine(this.eze$$fileName,100,4854,10, this);
			egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").setWidth((45).toString());
			egl.atLine(this.eze$$fileName,100,4866,16, this);
			egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").setMarginRight(10);
			egl.atLine(this.eze$$fileName,100,4884,27, this);
			egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoPageForward,"gotoPageForward") );
			egl.atLine(this.eze$$fileName,101,4948,11, this);
			egl.checkNull(this.gotoEndButton, "gotoEndButton").setText(">>");
			egl.atLine(this.eze$$fileName,101,4961,10, this);
			egl.checkNull(this.gotoEndButton, "gotoEndButton").setWidth((45).toString());
			egl.atLine(this.eze$$fileName,101,4973,16, this);
			egl.checkNull(this.gotoEndButton, "gotoEndButton").setMarginRight(10);
			egl.atLine(this.eze$$fileName,101,4991,19, this);
			egl.checkNull(this.gotoEndButton, "gotoEndButton").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoEnd,"gotoEnd") );
			egl.atLine(this.eze$$fileName,103,5047,33, this);
			egl.checkNull(this.buttonBar, "buttonBar").setClass("EglRuiDataGridButtonBar");
			egl.atLine(this.eze$$fileName,104,5089,100, this);
			egl.checkNull(this.buttonBar, "buttonBar").setChildren( [ this.gotoStartButton, this.gotoPageBackButton, this.pageTextLabel, this.gotoPageForwardButton, this.gotoEndButton ] );
			egl.atLine(this.eze$$fileName,107,5217,11, this);
			egl.checkNull(this.ui, "ui").setColumns(1);
			egl.atLine(this.eze$$fileName,123,5723,588, this);
			this.selectionMode = 2;
			egl.atLine(this.eze$$fileName,132,6317,74, this);
			this.enableSorting = true;
			egl.atLine(this.eze$$fileName,133,6397,74, this);
			this.showButtonBar = true;
			egl.atLine(this.eze$$fileName,134,6477,71, this);
			this.showHeader = true;
			egl.atLine(this.eze$$fileName,135,6554,82, this);
			this.manageEditorBehaviors = true;
			egl.atLine(this.eze$$fileName,136,6642,74, this);
			this.encodeValue = false;
			egl.atLine(this.eze$$fileName,143,6904,65, this);
			this.cellPadding = 4;
			egl.atLine(this.eze$$fileName,144,6975,64, this);
			this.cellBorder = 1;
			egl.atLine(this.eze$$fileName,146,7096,69, this);
			this.checkBoxWidth = 20;
			egl.atLine(this.eze$$fileName,148,7173,63, this);
			this.startRow = 1;
			egl.atLine(this.eze$$fileName,150,7291,33, this);
			this._startRow = this.startRow;
			egl.atLine(this.eze$$fileName,151,7330,29, this);
			this.lastStartRow = 0;
			egl.atLine(this.eze$$fileName,152,7365,63, this);
			this.pageSize = 10;
			egl.atLine(this.eze$$fileName,153,7434,77, this);
			this.allowEmptyRows = true;
			egl.atLine(this.eze$$fileName,155,7519,47, this);
			this.reverseTextDirectionThis = "No";
			egl.atLine(this.eze$$fileName,156,7572,42, this);
			this.textLayoutThis = "Logical";
			egl.atLine(this.eze$$fileName,158,7622,36, this);
			this.dataLoader = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.fullyCached,"fullyCached");
			egl.atLine(this.eze$$fileName,161,7693,30, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setClass("EglRuiGridLoadingDiv");
			egl.atLine(this.eze$$fileName,162,7739,46, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setInnerHTML("<img src='images/spinner.gif' />");
			egl.atLine(this.eze$$fileName,163,7791,23, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setPosition("absolute");
			egl.atLine(this.eze$$fileName,164,7820,13, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setOpacity((100).toString());
			egl.atLine(this.eze$$fileName,165,7839,12, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setZIndex((100).toString());
			egl.atLine(this.eze$$fileName,166,7857,11, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setWidth((100).toString());
			egl.atLine(this.eze$$fileName,167,7874,12, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setHeight((100).toString());
			egl.atLine(this.eze$$fileName,168,7892,15, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setPaddingTop(45);
			egl.atLine(this.eze$$fileName,169,7913,16, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setPaddingLeft(45);
			egl.atLine(this.eze$$fileName,299,12339,28, this);
			this.showLoadingDivJob.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.showLoadingDiv,"showLoadingDiv") );
			egl.atLine(this.eze$$fileName,342,13895,52, this);
			this.Directions = [ "None", "Down", "Up" ].setType( "S;" );
			egl.atLine(this.eze$$fileName,737,30298,36, this);
			egl.checkNull(this.columnDragger, "columnDragger").setClass("EglRuiDataGridResizeHandle");
			egl.atLine(this.eze$$fileName,737,30336,22, this);
			egl.checkNull(this.columnDragger, "columnDragger").setBackground("#CCCCCC");
			egl.atLine(this.eze$$fileName,737,30360,20, this);
			egl.checkNull(this.columnDragger, "columnDragger").setInnerHTML("&nbsp;");
			egl.atLine(this.eze$$fileName,1197,45844,29, this);
			this.sortedColumn = 1;
			if (egl.debugg && egl.mainAppName == (this.eze$$package ? this.eze$$package + "." : "") + this.eze$$typename){
				egl.insideConstructionFunc = true;
			}
			this.start();
			egl.insideConstructionFunc = false;
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"setData": function( data ) {
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
		try { egl.enter("setData",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("data", data, "any[]", "!data");
			egl.atLine(this.eze$$fileName,173,8005,50, this);
			if ( (data == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,174,8035,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,176,8065,81, this);
			if ( (egl.checkNull(this.ui, "ui").getID() == "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,177,8094,39, this);
					egl.checkNull(this.ui, "ui").setID((this.internalID + "_container"));
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,179,8156,26, this);
			egl.checkNull(this.grid, "grid").setID(this.internalID);
			egl.atLine(this.eze$$fileName,180,8192,17, this);
			this.data = data;
			egl.atLine(this.eze$$fileName,181,8219,16, this);
			this.updateColumns();
			egl.atLine(this.eze$$fileName,182,8250,19, this);
			this.setAllDeselected();
			egl.atLine(this.eze$$fileName,183,8279,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,172,7964,333, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"fullyCached": function( startRow, endRow, sortFieldName, sortDirection ) {
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
		try { egl.enter("fullyCached",this,arguments,eze$$updater);
			var $result = false;
			egl.addLocalFunctionVariable("startRow", startRow, "int", "startRow");
			egl.addLocalFunctionVariable("endRow", endRow, "int", "endRow");
			egl.addLocalFunctionVariable("sortFieldName", sortFieldName, "string", "sortFieldName");
			egl.addLocalFunctionVariable("sortDirection", sortDirection, "int", "sortDirection");
			egl.atLine(this.eze$$fileName,187,8439,13, this);
			$result = true;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"render": function() {
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
		try { egl.enter("render",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,191,8499,17, this);
			var ezert$$16 = false;
			ezert$$16 = this.dataIsAvailable();
			egl.atLine(this.eze$$fileName,191,8496,1084, this);
			if ( ezert$$16 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,192,8523,29, this);
					this.util.destroyHeaderCell(this.grid );
					egl.atLine(this.eze$$fileName,193,8558,108, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "int", "i");
							i = 1;
							egl.setLocalFunctionVariable("i", i, "int");
							for ( ; (i <= this.refreshBehaviors.getSize()); i = (i + 1) )
							{
								egl.setLocalFunctionVariable("i", i, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,194,8623,26, this);
									egl.checkNull(this.refreshBehaviors, "refreshBehaviors")[this.refreshBehaviors.checkIndex((i)-1)]( this );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,193,8558,108, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,196,8680,72, this);
					if ( this.manageEditorBehaviors ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,197,8720,15, this);
							this.clearEditors();
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,199,8766,27, this);
					this.showLoadingDivJob.cancel();
					egl.atLine(this.eze$$fileName,200,8807,21, this);
					this.setColumnsProperty();
					egl.atLine(this.eze$$fileName,201,8842,37, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.clearHTMLString();
					egl.atLine(this.eze$$fileName,202,8892,71, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<div class=EglRuiDataGridTable>" );
					egl.atLine(this.eze$$fileName,203,8968,20, this);
					this.renderHeaderCells();
					egl.atLine(this.eze$$fileName,204,8993,13, this);
					this.renderRows();
					egl.atLine(this.eze$$fileName,205,9011,46, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
					egl.atLine(this.eze$$fileName,206,9062,26, this);
					this.util.cleanInnerHtml(this.grid );
					egl.atLine(this.eze$$fileName,207,9110,34, this);
					var ezert$$17 = "";
					ezert$$17 = egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.getHTMLString();
					egl.atLine(this.eze$$fileName,207,9093,52, this);
					egl.checkNull(this.grid, "grid").setInnerHTML(ezert$$17);
					egl.atLine(this.eze$$fileName,208,9159,17, this);
					this.applyBehaviors();
					egl.atLine(this.eze$$fileName,209,9190,18, this);
					this.renderButtonBar();
					egl.atLine(this.eze$$fileName,210,9222,17, this);
					this.enableDragging();
					egl.atLine(this.eze$$fileName,211,9244,57, this);
					if ( this.fixFirstColumn ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,212,9268,25, this);
							egl.checkNull(this.ui, "ui").getOnScroll().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.lockCell,"lockCell") );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,214,9306,57, this);
					if ( this.showScrollbar ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,215,9334,21, this);
							this.fallbackDimensions();
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,217,9377,51, this);
					(function () {
						var ezert$$18 = new egl.egl.javascript.Job();
						egl.atLine(this.eze$$fileName,217,9385,30, this);
						ezert$$18.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.updateDimensions,"updateDimensions") );
						return ezert$$18;
					}).call(this).schedule();
					egl.atLine(this.eze$$fileName,218,9442,51, this);
					(function () {
						var ezert$$19 = new egl.egl.javascript.Job();
						egl.atLine(this.eze$$fileName,218,9450,30, this);
						ezert$$19.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.updateHighlights,"updateHighlights") );
						return ezert$$19;
					}).call(this).schedule();
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,221,9535,32, this);
					this.showLoadingDivJob.schedule(200 );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,190,8469,1120, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"clearEditors": function() {
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
		try { egl.enter("clearEditors",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,226,9629,84, this);
			{
				try{egl.enterBlock();
					var i = 0;
					egl.addLocalFunctionVariable("i", i, "int", "i");
					i = 1;
					egl.setLocalFunctionVariable("i", i, "int");
					for ( ; (i <= this.editors.getSize()); i = (i + 1) )
					{
						egl.setLocalFunctionVariable("i", i, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,227,9672,34, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(egl.checkNull(this.editors, "editors")[this.editors.checkIndex((i)-1)] );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,226,9629,84, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,229,9717,20, this);
			this.editors.removeAll();
			egl.atLine(this.eze$$fileName,225,9594,149, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"dataIsAvailable": function() {
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
		try { egl.enter("dataIsAvailable",this,arguments,eze$$updater);
			var $result = false;
			var key = "";
			egl.addLocalFunctionVariable("key", key, "string", "key");
			egl.atLine(this.eze$$fileName,233,9813,16, this);
			key = "";
			egl.setLocalFunctionVariable("key", key, "string");
			var direction = 0;
			egl.addLocalFunctionVariable("direction", direction, "int", "direction");
			egl.atLine(this.eze$$fileName,234,9839,18, this);
			direction = 0;
			egl.setLocalFunctionVariable("direction", direction, "int");
			egl.atLine(this.eze$$fileName,235,9870,17, this);
			var ezert$$20 = 0;
			ezert$$20 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,235,9867,147, this);
			if ( (ezert$$20 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,236,9906,33, this);
					key = egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((this.sortedColumn)-1)], "columns[sortedColumn]").name;
					egl.setLocalFunctionVariable("key", key, "string");
					egl.atLine(this.eze$$fileName,237,9953,48, this);
					direction = egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((this.sortedColumn)-1)], "columns[sortedColumn]").sortDirection;
					egl.setLocalFunctionVariable("direction", direction, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,239,10031,63, this);
			var ezert$$21 = false;
			ezert$$21 = this.dataLoader(this._startRow, ((this._startRow + this.pageSize) - 1), key, direction );
			egl.atLine(this.eze$$fileName,239,10024,72, this);
			$result = ezert$$21;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"start": function() {
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
		try { egl.enter("start",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,243,10133,75, this);
			if ( (this.internalID == "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,244,10182,18, this);
					var ezert$$22 = "";
					ezert$$22 = this.util.getUniqueID();
					egl.atLine(this.eze$$fileName,244,10164,37, this);
					this.internalID = ezert$$22;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,242,10113,104, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"updateColumns": function() {
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
		try { egl.enter("updateColumns",this,arguments,eze$$updater);
			var eze_Cond_Temp_0 = false;
			egl.atLine(this.eze$$fileName,249,10303,17, this);
			var ezert$$23 = 0;
			ezert$$23 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,249,10303,44, this);
			if ( (ezert$$23 == 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,249,10329,14, this);
					var ezert$$24 = 0;
					ezert$$24 = this.data.getSize();
					egl.atLine(this.eze$$fileName,249,10303,44, this);
					if ( (ezert$$24 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,249,10303,44, this);
							eze_Cond_Temp_0 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,249,10303,44, this);
							eze_Cond_Temp_0 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,249,10303,44, this);
					eze_Cond_Temp_0 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,249,10300,424, this);
			if ( eze_Cond_Temp_0 ) {
				try{egl.enterBlock();
					var fieldNames = null;
					egl.addLocalFunctionVariable("fieldNames", fieldNames, "string[]", "!fieldNames");
					egl.atLine(this.eze$$fileName,250,10384,27, this);
					var ezert$$25 = null;
					ezert$$25 = this.util.getFieldNames(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((1)-1)])) );
					egl.atLine(this.eze$$fileName,250,10362,50, this);
					fieldNames = ezert$$25;
					egl.setLocalFunctionVariable("fieldNames", fieldNames, "string[]");
					egl.atLine(this.eze$$fileName,251,10426,291, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= fieldNames.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,252,10485,201, this);
									this.columns.appendElement( (function () {
										var ezert$$26 = new egl.com.ibm.egl.rui.widgets.DataGridColumn();
										egl.atLine(this.eze$$fileName,253,10535,20, this);
										egl.checkNull(ezert$$26, "ezert$$26").name = egl.checkNull(fieldNames, "fieldNames")[fieldNames.checkIndex((n)-1)];
										egl.atLine(this.eze$$fileName,254,10576,27, this);
										egl.checkNull(ezert$$26, "ezert$$26").displayName = egl.checkNull(fieldNames, "fieldNames")[fieldNames.checkIndex((n)-1)];
										egl.atLine(this.eze$$fileName,255,10637,32, this);
										var ezert$$27 = 0;
										ezert$$27 = this.util.getTextWidth(egl.checkNull(fieldNames, "fieldNames")[fieldNames.checkIndex((n)-1)] );
										egl.atLine(this.eze$$fileName,255,10624,45, this);
										egl.checkNull(ezert$$26, "ezert$$26").width = ((44 + ezert$$27)).toString();
										return ezert$$26;
									}).call(this) );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,251,10426,291, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			var eze_Cond_Temp_1 = false;
			egl.atLine(this.eze$$fileName,259,10737,17, this);
			var ezert$$28 = 0;
			ezert$$28 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,259,10737,43, this);
			if ( (ezert$$28 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,259,10762,14, this);
					var ezert$$29 = 0;
					ezert$$29 = this.data.getSize();
					egl.atLine(this.eze$$fileName,259,10737,43, this);
					if ( (ezert$$29 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,259,10737,43, this);
							eze_Cond_Temp_1 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,259,10737,43, this);
							eze_Cond_Temp_1 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,259,10737,43, this);
					eze_Cond_Temp_1 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,259,10734,696, this);
			if ( eze_Cond_Temp_1 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,260,10795,622, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= this.columns.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,261,10851,549, this);
									Lezert$$1: if ( (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").enableSorting && (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").sortDirection != 0)) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,262,10954,398, this);
											if ( (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").columnComparator != null) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,263,11026,131, this);
													var ezert$$30 = null;
													ezert$$30 = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").name, (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").sortDirection == 2), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").ignoreCase, function() {
														var ezert$$31 = null;
														
														ezert$$31 = egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").columnComparator;
													; return ezert$$31;}.call(this) ));
													egl.atLine(this.eze$$fileName,263,11019,139, this);
													this.data = ezert$$30;
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,265,11217,109, this);
													var ezert$$32 = null;
													ezert$$32 = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").name, (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").sortDirection == 2), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").ignoreCase, null ));
													egl.atLine(this.eze$$fileName,265,11210,117, this);
													this.data = ezert$$32;
												}finally{egl.exitBlock();}
											}
											egl.atLine(this.eze$$fileName,267,11374,5, this);
											break Lezert$$1;
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,260,10795,622, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,248,10258,1181, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setColumnsProperty": function() {
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
		try { egl.enter("setColumnsProperty",this,arguments,eze$$updater);
			var eze_Cond_Temp_2 = false;
			egl.atLine(this.eze$$fileName,274,11499,14, this);
			var ezert$$33 = 0;
			ezert$$33 = this.data.getSize();
			egl.atLine(this.eze$$fileName,274,11499,43, this);
			if ( (ezert$$33 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,274,11521,17, this);
					var ezert$$34 = 0;
					ezert$$34 = this.columns.getSize();
					egl.atLine(this.eze$$fileName,274,11499,43, this);
					if ( (ezert$$34 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,274,11499,43, this);
							eze_Cond_Temp_2 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,274,11499,43, this);
							eze_Cond_Temp_2 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,274,11499,43, this);
					eze_Cond_Temp_2 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,274,11496,394, this);
			if ( eze_Cond_Temp_2 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,275,11552,328, this);
					{
						try{egl.enterBlock();
							var column = 0;
							egl.addLocalFunctionVariable("column", column, "int", "column");
							column = 1;
							egl.setLocalFunctionVariable("column", column, "int");
							for ( ; (column <= this.columns.getSize()); column = (column + 1) )
							{
								egl.setLocalFunctionVariable("column", column, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,276,11604,265, this);
									try {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,277,11617,43, this);
											if ( (egl.valueByKey(egl.checkNull(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((1)-1)]), "data[1]"), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").name) != null) ) {
												try{egl.enterBlock();
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									catch ( ezert$$35 )
									{
										{
											if (ezert$$35 instanceof egl.egl.debug.DebugTermination){throw ezert$$35;}
											if (!(ezert$$35 instanceof egl.egl.core.AnyException)) {
												ezert$$35 = egl.makeExceptionFromCaughtObject(ezert$$35);
											}
											var ex = ezert$$35;
											try{egl.enterBlock();
												egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,279,11704,142, this);
													if ( (egl.checkNull(ex, "ex").messageID == "CRRUI2025E") ) {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,280,11751,38, this);
															egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").enableSorting = false;
														}finally{egl.exitBlock();}
													}
													else {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,282,11820,10, this);
															throw ex;
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
											}finally{egl.exitBlock();}
										}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,275,11552,328, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,288,11905,17, this);
			var ezert$$36 = 0;
			ezert$$36 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,288,11902,389, this);
			if ( (ezert$$36 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,289,11955,17, this);
					var ezert$$37 = 0;
					ezert$$37 = this.columns.getSize();
					egl.atLine(this.eze$$fileName,289,11936,38, this);
					this.columnClass.resize( this.columns.getSize() );
					egl.atLine(this.eze$$fileName,290,11994,169, this);
					{
						try{egl.enterBlock();
							var column = 0;
							egl.addLocalFunctionVariable("column", column, "int", "column");
							column = 1;
							egl.setLocalFunctionVariable("column", column, "int");
							for ( ; (column <= this.columns.getSize()); column = (column + 1) )
							{
								egl.setLocalFunctionVariable("column", column, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,291,12094,44, this);
									var ezert$$38 = "";
									ezert$$38 = this.getAlignmentClass(egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").alignment );
									egl.atLine(this.eze$$fileName,291,12049,90, this);
									egl.checkNull(this.columnClass, "columnClass")[this.columnClass.checkIndex((column)-1)] = ("EglRuiDataGridCell" + ezert$$38);
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,290,11994,169, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,293,12174,107, this);
					if ( this.fixFirstColumn ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,294,12204,63, this);
							egl.checkNull(this.columnClass, "columnClass")[this.columnClass.checkIndex((1)-1)] = (egl.checkNull(this.columnClass, "columnClass")[this.columnClass.checkIndex((1)-1)] + " EglRuiDataGridColumn1Cell");
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,273,11451,850, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"showLoadingDiv": function() {
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
		try { egl.enter("showLoadingDiv",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,303,12453,1057, this);
			try {
				try{egl.enterBlock();
					var uiCount = 0;
					egl.addLocalFunctionVariable("uiCount", uiCount, "int", "uiCount");
					egl.atLine(this.eze$$fileName,304,12485,21, this);
					var ezert$$39 = 0;
					ezert$$39 = egl.checkNull(this.ui, "ui").getChildren().getSize();
					egl.atLine(this.eze$$fileName,304,12471,36, this);
					uiCount = ezert$$39;
					egl.setLocalFunctionVariable("uiCount", uiCount, "int");
					egl.atLine(this.eze$$fileName,305,12532,750, this);
					if ( (uiCount >= 1) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,306,12564,33, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setPosition("absolute");
							var rows = null;
							egl.addLocalFunctionVariable("rows", rows, "egl.ui.rui.Widget", "rows");
							var ezert$$40 = null;
							ezert$$40 = egl.checkNull(this.grid, "grid").getElementById((egl.checkNull(this.grid, "grid").getID() + "-rows") );
							egl.atLine(this.eze$$fileName,307,12612,51, this);
							rows = ezert$$40;
							egl.setLocalFunctionVariable("rows", rows, "egl.ui.rui.Widget");
							egl.atLine(this.eze$$fileName,308,12678,198, this);
							if ( (rows != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,309,12710,42, this);
									egl.checkNull(this.innerLoadingDiv, "innerLoadingDiv").setHeight((rows.getPixelHeight()).toString());
									egl.atLine(this.eze$$fileName,310,12768,40, this);
									egl.checkNull(this.innerLoadingDiv, "innerLoadingDiv").setWidth((rows.getPixelWidth()).toString());
									egl.atLine(this.eze$$fileName,311,12824,34, this);
									rows.setChildren( [ this.innerLoadingDiv ] );
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,313,12915,39, this);
							var ezert$$41 = 0;
							ezert$$41 = Math.max( egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide(egl.checkNull(this.ui, "ui").getPixelHeight(), 2)).subtract((new egl.javascript.BigDecimal(String(12))))) ,0 );
							egl.atLine(this.eze$$fileName,313,12891,64, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setPaddingTop(ezert$$41);
							egl.atLine(this.eze$$fileName,314,12983,49, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setWidth(((egl.checkNull(this.ui, "ui").getChildren()[egl.checkNull(this.ui, "ui").getChildren().checkIndex((1)-1)].getPixelWidth() + 2)).toString());
							egl.atLine(this.eze$$fileName,315,13073,50, this);
							var ezert$$42 = 0;
							ezert$$42 = Math.max( egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide(egl.checkNull(this.ui, "ui").getChildren()[egl.checkNull(this.ui, "ui").getChildren().checkIndex((1)-1)].getPixelWidth(), 2)).subtract((new egl.javascript.BigDecimal(String(20))))) ,0 );
							egl.atLine(this.eze$$fileName,315,13048,76, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setPaddingLeft(ezert$$42);
							egl.atLine(this.eze$$fileName,316,13148,44, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setHeight((new egl.javascript.BigDecimal(egl.divide(egl.checkNull(this.ui, "ui").getPixelHeight(), 2)).add((new egl.javascript.BigDecimal(String(12))))).toString());
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,318,13225,31, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setPosition("static");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,320,13295,44, this);
					egl.checkNull(this.loadingDiv, "loadingDiv").setID((egl.checkNull(this.grid, "grid").getID() + "_GridLoadingDiv"));
					egl.atLine(this.eze$$fileName,321,13353,24, this);
					egl.checkNull(this.loadingDiv, "loadingDiv").setX((egl.checkNull(this.ui, "ui").getX() - 1));
					egl.atLine(this.eze$$fileName,322,13391,20, this);
					egl.checkNull(this.loadingDiv, "loadingDiv").setY(egl.checkNull(this.ui, "ui").getY());
					egl.atLine(this.eze$$fileName,323,13433,27, this);
					egl.checkNull(this.ui, "ui").appendChild(this.loadingDiv );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$43 )
			{
				{
					if (ezert$$43 instanceof egl.egl.debug.DebugTermination){throw ezert$$43;}
					if (!(ezert$$43 instanceof egl.egl.core.AnyException)) {
						ezert$$43 = egl.makeExceptionFromCaughtObject(ezert$$43);
					}
					var e = ezert$$43;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
						try{egl.enterBlock();
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,302,12410,1109, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"cancelDataLoader": function() {
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
		try { egl.enter("cancelDataLoader",this,arguments,eze$$updater);
			var loadingDiv = null;
			egl.addLocalFunctionVariable("loadingDiv", loadingDiv, "egl.ui.rui.Widget", "loadingDiv");
			var ezert$$44 = null;
			ezert$$44 = egl.checkNull(this.ui, "ui").getElementById((egl.checkNull(this.grid, "grid").getID() + "_GridLoadingDiv") );
			egl.atLine(this.eze$$fileName,329,13565,67, this);
			loadingDiv = ezert$$44;
			egl.setLocalFunctionVariable("loadingDiv", loadingDiv, "egl.ui.rui.Widget");
			egl.atLine(this.eze$$fileName,330,13639,239, this);
			if ( (loadingDiv != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,331,13670,27, this);
					this.showLoadingDivJob.cancel();
					egl.atLine(this.eze$$fileName,332,13705,25, this);
					this._startRow = this.lastStartRow;
					egl.atLine(this.eze$$fileName,333,13738,107, this);
					if ( (this.showScrollbar || (this._startRow < 1)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,334,13783,14, this);
							this._startRow = 1;
							egl.atLine(this.eze$$fileName,335,13806,12, this);
							this.setData([  ].setType( "A;" ) );
							egl.atLine(this.eze$$fileName,336,13827,7, this);
							{ if (!egl.debugg) egl.leave(); return;}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,338,13859,9, this);
					this.render();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,328,13531,356, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"renderHeaderCells": function() {
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
		try { egl.enter("renderHeaderCells",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,345,14026,49, this);
			if ( !(this.showHeader) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,346,14055,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			var html = "";
			egl.addLocalFunctionVariable("html", html, "string", "html");
			egl.atLine(this.eze$$fileName,348,14085,17, this);
			html = "";
			egl.setLocalFunctionVariable("html", html, "string");
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,349,14130,17, this);
			var ezert$$45 = 0;
			ezert$$45 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,349,14112,36, this);
			columnCount = ezert$$45;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			egl.atLine(this.eze$$fileName,350,14158,16, this);
			this.headerWidth = 0;
			egl.atLine(this.eze$$fileName,351,14184,734, this);
			if ( this.showCheckBoxes ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,352,14216,60, this);
					this.headerWidth = (this.headerWidth + ((this.checkBoxWidth + (2 * this.cellPadding)) + this.cellBorder));
					var temp = "";
					egl.addLocalFunctionVariable("temp", temp, "string", "temp");
					egl.atLine(this.eze$$fileName,353,14302,17, this);
					temp = "";
					egl.setLocalFunctionVariable("temp", temp, "string");
					egl.atLine(this.eze$$fileName,354,14333,93, this);
					if ( this.fixFirstColumn ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,355,14366,36, this);
							temp = "EglRuiDataGridColumn1Cell ";
							egl.setLocalFunctionVariable("temp", temp, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,357,14437,148, this);
					html = (html + (((("<span class='EglRuiDataGridHeaderCell " + temp) + "EglRuiDataGridCheckBox' id=") + egl.checkNull(this.grid, "grid").getID()) + "-header-checkbox style='"));
					egl.setLocalFunctionVariable("html", html, "string");
					egl.atLine(this.eze$$fileName,359,14603,25, this);
					var ezert$$46 = "";
					ezert$$46 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
					egl.atLine(this.eze$$fileName,359,14599,96, this);
					if ( (ezert$$46 == "RTL") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,360,14653,25, this);
							html = (html + "float: right; ");
							egl.setLocalFunctionVariable("html", html, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,362,14717,188, this);
					html = (html + (((((("padding:" + (this.cellPadding).toString()) + "px; width:") + (this.checkBoxWidth).toString()) + "px; border-width: 1px ") + (this.cellBorder).toString()) + "px 0 0'>&nbsp;</span>"));
					egl.setLocalFunctionVariable("html", html, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,367,14928,1819, this);
			{
				try{egl.enterBlock();
					var column = 0;
					egl.addLocalFunctionVariable("column", column, "int", "column");
					column = 1;
					egl.setLocalFunctionVariable("column", column, "int");
					for ( ; (column <= columnCount); column = (column + 1) )
					{
						egl.setLocalFunctionVariable("column", column, "int");
						try{egl.enterBlock();
							var c = null;
							egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
							egl.atLine(this.eze$$fileName,368,14979,35, this);
							c = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
							egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
							var value = "";
							egl.addLocalFunctionVariable("value", value, "string", "value");
							egl.atLine(this.eze$$fileName,370,15055,113, this);
							if ( (egl.checkNull(c, "c").displayName == null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,371,15095,15, this);
									value = egl.checkNull(c, "c").name;
									egl.setLocalFunctionVariable("value", value, "string");
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,372,15129,22, this);
									value = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.checkNull(c, "c").displayName);
									egl.setLocalFunctionVariable("value", value, "string");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,374,15182,301, this);
							if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
								try{egl.enterBlock();
									var isVisual = false;
									egl.addLocalFunctionVariable("isVisual", isVisual, "boolean", "isVisual");
									egl.atLine(this.eze$$fileName,375,15274,51, this);
									isVisual = (this.textLayoutThis == "Visual");
									egl.setLocalFunctionVariable("isVisual", isVisual, "boolean");
									var isReverseDirection = false;
									egl.addLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean", "isReverseDirection");
									egl.atLine(this.eze$$fileName,376,15331,68, this);
									isReverseDirection = (this.reverseTextDirectionThis == "Yes");
									egl.setLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean");
									egl.atLine(this.eze$$fileName,377,15415,59, this);
									var ezert$$47 = "";
									ezert$$47 = this.util.setBiDiMarkersStr(value, isVisual, isReverseDirection );
									egl.atLine(this.eze$$fileName,377,15407,68, this);
									value = ezert$$47;
									egl.setLocalFunctionVariable("value", value, "string");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,379,15497,108, this);
							if ( ((egl.checkNull(c, "c").width == "") || (egl.convertStringToFloat(egl.checkNull(c, "c").width) == 0)) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,380,15563,24, this);
									var ezert$$48 = 0;
									ezert$$48 = this.util.getTextWidth(value );
									egl.atLine(this.eze$$fileName,380,15548,40, this);
									egl.checkNull(c, "c").width = ((44 + ezert$$48)).toString();
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,382,15619,54, this);
							this.headerWidth = (this.headerWidth + ((this.cellBorder + egl.convertStringToInt(egl.checkNull(c, "c").width)) + (2 * this.cellPadding)));
							var ezekw$$class = "";
							egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
							egl.atLine(this.eze$$fileName,383,15702,36, this);
							var ezert$$49 = "";
							ezert$$49 = this.getAlignmentClass(egl.checkNull(c, "c").headerAlignment );
							egl.atLine(this.eze$$fileName,383,15687,52, this);
							ezekw$$class = ezert$$49;
							egl.setLocalFunctionVariable("class", ezekw$$class, "string");
							var w = 0;
							egl.addLocalFunctionVariable("w", w, "int", "w");
							egl.atLine(this.eze$$fileName,385,15777,16, this);
							w = egl.convertStringToInt(egl.checkNull(c, "c").width);
							egl.setLocalFunctionVariable("w", w, "int");
							var temp = "";
							egl.addLocalFunctionVariable("temp", temp, "string", "temp");
							egl.atLine(this.eze$$fileName,386,15807,17, this);
							temp = "";
							egl.setLocalFunctionVariable("temp", temp, "string");
							egl.atLine(this.eze$$fileName,387,15838,115, this);
							if ( (this.fixFirstColumn && (column == 1)) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,388,15887,36, this);
									temp = " EglRuiDataGridColumn1Cell";
									egl.setLocalFunctionVariable("temp", temp, "string");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,390,15967,157, this);
							html = (html + (((((((("<span id='" + egl.checkNull(this.grid, "grid").getID()) + "-header-") + (column).toString()) + "' class='EglRuiDataGridHeaderCell") + temp) + "' column='") + (column).toString()) + "' style='"));
							egl.setLocalFunctionVariable("html", html, "string");
							egl.atLine(this.eze$$fileName,392,16142,25, this);
							var ezert$$50 = "";
							ezert$$50 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
							egl.atLine(this.eze$$fileName,392,16138,96, this);
							if ( (ezert$$50 == "RTL") ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,393,16192,25, this);
									html = (html + "float: right; ");
									egl.setLocalFunctionVariable("html", html, "string");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,398,16411,36, this);
							var ezert$$51 = "";
							ezert$$51 = this.getAlignmentClass(egl.checkNull(c, "c").headerAlignment );
							egl.atLine(this.eze$$fileName,396,16262,472, this);
							html = (html + ((((((((((((("width:" + ((w + (2 * this.cellPadding))).toString()) + "px; border-width: 1px ") + (this.cellBorder).toString()) + "px 0 0'><span class=") + ezert$$51) + " style='padding:") + (this.cellPadding).toString()) + "px'>") + "<span class=EglRuiDataGridHeaderLabel>") + value) + "</span></span><span class=EglRuiDataGridSort") + egl.checkNull(this.Directions, "Directions")[this.Directions.checkIndex(((egl.checkNull(c, "c").sortDirection + 1))-1)]) + ">&nbsp;&nbsp;&nbsp;&nbsp;</span></span>"));
							egl.setLocalFunctionVariable("html", html, "string");
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,367,14928,1819, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,403,16757,17, this);
			html = (html + "</div>");
			egl.setLocalFunctionVariable("html", html, "string");
			egl.atLine(this.eze$$fileName,404,16784,323, this);
			html = (((((((((("<div id=" + egl.checkNull(this.grid, "grid").getID()) + "-header class=EglRuiDataGridHeaderRow style='width:") + (this.headerWidth).toString()) + "px'><div id=") + egl.checkNull(this.grid, "grid").getID()) + "-header-inner class=EglRuiDataGridHeaderRowInner style='width:") + ((this.headerWidth + (columnCount * 8))).toString()) + "px'>") + html) + "</div>");
			egl.setLocalFunctionVariable("html", html, "string");
			egl.atLine(this.eze$$fileName,409,17111,42, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString(html );
			egl.atLine(this.eze$$fileName,344,13980,3182, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getAlignmentClass": function( alignment ) {
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
		try { egl.enter("getAlignmentClass",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("alignment", alignment, "int", "alignment");
			egl.atLine(this.eze$$fileName,413,17248,319, this);
			switch( alignment ) {
				case 0:
					egl.atLine(this.eze$$fileName,414,17277,81, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,415,17323,35, this);
						$result = " EglRuiDataGridAlignLeft";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
					break;
				case 1:
					egl.atLine(this.eze$$fileName,416,17372,85, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,417,17420,37, this);
						$result = " EglRuiDataGridAlignCenter";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
					break;
				case 2:
					egl.atLine(this.eze$$fileName,418,17471,83, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,419,17518,36, this);
						$result = " EglRuiDataGridAlignRight";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
					break;
				default:
				try{egl.enterBlock();
				}finally{egl.exitBlock();}
				break;
			}
			egl.atLine(this.eze$$fileName,412,17170,406, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"renderRows": function() {
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
		try { egl.enter("renderRows",this,arguments,eze$$updater);
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,424,17641,17, this);
			var ezert$$52 = 0;
			ezert$$52 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,424,17623,36, this);
			columnCount = ezert$$52;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			var page = 0;
			egl.addLocalFunctionVariable("page", page, "int", "page");
			egl.atLine(this.eze$$fileName,425,17669,36, this);
			page = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)),egl.createRuntimeException);
			egl.setLocalFunctionVariable("page", page, "int");
			egl.atLine(this.eze$$fileName,426,17715,28, this);
			this._startRow = ((page * this.pageSize) + 1);
			var endRow = 0;
			egl.addLocalFunctionVariable("endRow", endRow, "int", "endRow");
			egl.atLine(this.eze$$fileName,427,17766,14, this);
			var ezert$$53 = 0;
			ezert$$53 = this.data.getSize();
			egl.atLine(this.eze$$fileName,427,17753,28, this);
			endRow = ezert$$53;
			egl.setLocalFunctionVariable("endRow", endRow, "int");
			egl.atLine(this.eze$$fileName,428,17791,390, this);
			if ( this.showScrollbar ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,429,17819,25, this);
					this.lastStartRow = this._startRow;
					egl.atLine(this.eze$$fileName,430,17855,14, this);
					this._startRow = 1;
					egl.atLine(this.eze$$fileName,431,17880,153, this);
					if ( !(this.fixFirstColumn) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,432,17914,102, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<div class=EglRuiDataGridScroller id=" + egl.checkNull(this.grid, "grid").getID()) + "-scroller>") );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,435,18061,107, this);
					if ( (this.pageSize != 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,436,18105,45, this);
							var ezert$$54 = 0;
							ezert$$54 = Math.min( endRow ,((this._startRow + this.pageSize) - 1) );
							egl.atLine(this.eze$$fileName,436,18096,55, this);
							endRow = ezert$$54;
							egl.setLocalFunctionVariable("endRow", endRow, "int");
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,439,18191,296, this);
			if ( (this.headerWidth > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,440,18224,131, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((("<div class=EglRuiDataGridRows id=" + egl.checkNull(this.grid, "grid").getID()) + "-rows style='width:") + (this.headerWidth).toString()) + "px;'>") );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,442,18380,94, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<div class=EglRuiDataGridRows id=" + egl.checkNull(this.grid, "grid").getID()) + "-rows>") );
				}finally{egl.exitBlock();}
			}
			var h = "";
			egl.addLocalFunctionVariable("h", h, "string", "h");
			egl.atLine(this.eze$$fileName,445,18507,15, this);
			h = " ";
			egl.setLocalFunctionVariable("h", h, "string");
			egl.atLine(this.eze$$fileName,446,18532,127, this);
			if ( (this.rowHeight > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,447,18563,83, this);
					h = (("style = 'overflow-y: hidden; height:" + ((this.rowHeight + (2 * this.cellPadding))).toString()) + "px;'");
					egl.setLocalFunctionVariable("h", h, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,449,18669,1655, this);
			{
				try{egl.enterBlock();
					var row = 0;
					egl.addLocalFunctionVariable("row", row, "int", "row");
					row = this._startRow;
					egl.setLocalFunctionVariable("row", row, "int");
					for ( ; (row <= endRow); row = (row + 1) )
					{
						egl.setLocalFunctionVariable("row", row, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,450,18772,16, this);
							var ezert$$55 = "";
							ezert$$55 = this.getRowClass(row );
							egl.atLine(this.eze$$fileName,450,18720,208, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((("<div class=" + ezert$$55) + " row=") + (row).toString()) + " id=") + egl.checkNull(this.grid, "grid").getID()) + "-row-") + (row).toString()) + " ") + h) + "style='min-height:") + ((20 + (this.cellPadding * 2))).toString()) + "px;'>") );
							egl.atLine(this.eze$$fileName,452,18942,1093, this);
							if ( this.showCheckBoxes ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,453,18978,103, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<span class='EglRuiDataGridCell EglRuiDataGridCheckBox' style='" );
									egl.atLine(this.eze$$fileName,454,19103,25, this);
									var ezert$$56 = "";
									ezert$$56 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
									egl.atLine(this.eze$$fileName,454,19099,128, this);
									if ( (ezert$$56 == "RTL") ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,455,19155,54, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("float: right; " );
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,457,19245,773, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((((((((((((((h + "padding:") + ((this.cellPadding - 1)).toString()) + "px ") + (this.cellPadding).toString()) + "px ") + ((this.cellPadding + 5000)).toString()) + "px ") + (this.cellPadding).toString()) + "px; margin-bottom:") + (((0 - this.cellPadding) - 5000)).toString()) + "px; width:") + (((this.checkBoxWidth + (this.cellPadding * 2)) + this.cellBorder)).toString()) + "px; border-width: 0 ") + (this.cellBorder).toString()) + "px 0 0''><input id=") + egl.checkNull(this.grid, "grid").getID()) + "-checkbox-") + (row).toString()) + " type=checkbox row=") + (row).toString()) + " onclick='egl.com.ibm.egl.rui.widgets.DataGridUtil.dataGridCheckboxClick(\"") + this.internalID) + "\", this)'></input></span>") );
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,467,20049,202, this);
							{
								try{egl.enterBlock();
									var column = 0;
									egl.addLocalFunctionVariable("column", column, "int", "column");
									column = 1;
									egl.setLocalFunctionVariable("column", column, "int");
									for ( ; (column <= columnCount); column = (column + 1) )
									{
										egl.setLocalFunctionVariable("column", column, "int");
										try{egl.enterBlock();
											var c = null;
											egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
											egl.atLine(this.eze$$fileName,468,20104,35, this);
											c = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
											egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
											egl.atLine(this.eze$$fileName,469,20181,25, this);
											var ezert$$57 = "";
											ezert$$57 = this.getCellValue(row, egl.checkNull(c, "c").name );
											egl.atLine(this.eze$$fileName,469,20157,77, this);
											this.renderCell(row, column, ezert$$57, c, function(eze$$inout$c) {
												c = eze$$inout$c;
												egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
											}, (column == columnCount), this );
											egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,467,20049,202, this);
									}
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,471,20265,46, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,449,18669,1655, this);
					}
				}finally{egl.exitBlock();}
			}
			var eze_Cond_Temp_3 = false;
			egl.atLine(this.eze$$fileName,473,20336,80, this);
			if ( this.allowEmptyRows ) {
				try{egl.enterBlock();
					var eze_Cond_Temp_4 = false;
					egl.atLine(this.eze$$fileName,473,20356,43, this);
					if ( !(this.showScrollbar) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,473,20374,14, this);
							var ezert$$58 = 0;
							ezert$$58 = this.data.getSize();
							egl.atLine(this.eze$$fileName,473,20356,43, this);
							if ( (ezert$$58 > this.pageSize) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,473,20356,43, this);
									eze_Cond_Temp_4 = true;
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,473,20356,43, this);
									eze_Cond_Temp_4 = false;
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,473,20356,43, this);
							eze_Cond_Temp_4 = false;
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,473,20336,80, this);
					if ( (eze_Cond_Temp_4 || (endRow == 0)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,473,20336,80, this);
							eze_Cond_Temp_3 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,473,20336,80, this);
							eze_Cond_Temp_3 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,473,20336,80, this);
					eze_Cond_Temp_3 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,473,20332,1253, this);
			if ( eze_Cond_Temp_3 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,474,20432,1140, this);
					{
						try{egl.enterBlock();
							var row = 0;
							egl.addLocalFunctionVariable("row", row, "int", "row");
							row = (endRow + 1);
							egl.setLocalFunctionVariable("row", row, "int");
							for ( ; (row <= ((this._startRow + this.pageSize) - 1)); row = (row + 1) )
							{
								egl.setLocalFunctionVariable("row", row, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,475,20558,16, this);
									var ezert$$59 = "";
									ezert$$59 = this.getRowClass(row );
									egl.atLine(this.eze$$fileName,475,20506,86, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((("<div class=" + ezert$$59) + " ") + h) + ">") );
									egl.atLine(this.eze$$fileName,476,20610,673, this);
									if ( this.showCheckBoxes ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,477,20650,103, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<span class='EglRuiDataGridCell EglRuiDataGridCheckBox' style='" );
											egl.atLine(this.eze$$fileName,478,20779,25, this);
											var ezert$$60 = "";
											ezert$$60 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
											egl.atLine(this.eze$$fileName,478,20775,129, this);
											if ( (ezert$$60 == "RTL") ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,479,20831,54, this);
													egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("float: right; " );
												}finally{egl.exitBlock();}
											}
											;
											egl.atLine(this.eze$$fileName,481,20921,341, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((("padding:" + (this.cellPadding).toString()) + "px; padding-bottom:") + ((this.cellPadding + 5000)).toString()) + "px; margin-bottom:") + (((0 - this.cellPadding) - 5000)).toString()) + "px; width:") + (this.checkBoxWidth).toString()) + "px; border-width: 0 ") + (this.cellBorder).toString()) + "px 0 0'></span>") );
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,488,21301,190, this);
									{
										try{egl.enterBlock();
											var column = 0;
											egl.addLocalFunctionVariable("column", column, "int", "column");
											column = 1;
											egl.setLocalFunctionVariable("column", column, "int");
											for ( ; (column <= columnCount); column = (column + 1) )
											{
												egl.setLocalFunctionVariable("column", column, "int");
												try{egl.enterBlock();
													var c = null;
													egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
													egl.atLine(this.eze$$fileName,489,21360,35, this);
													c = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
													egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
													egl.atLine(this.eze$$fileName,490,21417,53, this);
													this.renderCell((-1), column, "", c, function(eze$$inout$c) {
														c = eze$$inout$c;
														egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
													}, (column == columnCount), this );
													egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,488,21301,190, this);
											}
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,492,21509,46, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,474,20432,1140, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,495,21595,46, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
			egl.atLine(this.eze$$fileName,496,21651,109, this);
			if ( (this.showScrollbar && !(this.fixFirstColumn)) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,497,21701,46, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,423,17584,4185, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRowClass": function( row ) {
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
		try { egl.enter("getRowClass",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.atLine(this.eze$$fileName,502,21835,134, this);
			if ( (egl.remainder(row, 2) == 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,503,21865,32, this);
					$result = "EglRuiDataGridEvenRow";
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,505,21925,31, this);
					$result = "EglRuiDataGridOddRow";
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,501,21777,201, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCellValue": function( row, fieldName ) {
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
		try { egl.enter("getCellValue",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.addLocalFunctionVariable("fieldName", fieldName, "string", "fieldName");
			var object = null;
			egl.addLocalFunctionVariable("object", object, "any", "object");
			egl.atLine(this.eze$$fileName,510,22074,23, this);
			object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)]);
			egl.setLocalFunctionVariable("object", object, "any");
			egl.atLine(this.eze$$fileName,511,22107,56, this);
			if ( (object == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,512,22139,11, this);
					$result = "";
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			var cell = null;
			egl.addLocalFunctionVariable("cell", cell, "any", "cell");
			egl.atLine(this.eze$$fileName,515,22192,209, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,516,22206,25, this);
					cell = egl.valueByKey(egl.checkNull(object, "object"), fieldName);
					egl.setLocalFunctionVariable("cell", cell, "any");
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$61 )
			{
				{
					if (ezert$$61 instanceof egl.egl.debug.DebugTermination){throw ezert$$61;}
					if (!(ezert$$61 instanceof egl.egl.core.AnyException)) {
						ezert$$61 = egl.makeExceptionFromCaughtObject(ezert$$61);
					}
					var ex = ezert$$61;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,518,22280,108, this);
							if ( (egl.checkNull(ex, "ex").messageID == "CRRUI2025E") ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,519,22325,12, this);
									cell = null;
									egl.setLocalFunctionVariable("cell", cell, "any");
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,521,22364,10, this);
									throw ex;
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,524,22411,100, this);
			if ( (cell == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,525,22441,11, this);
					$result = "";
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,527,22480,18, this);
					$result = ("" + egl.convertAnyToString(cell,false));
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,509,21986,534, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"renderCell": function( row, column, value, c, eze$$c$func_, lastColumn, eze$$caller ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("renderCell",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.addLocalFunctionVariable("value", value, "string", "value");
			egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
			egl.addLocalFunctionVariable("lastColumn", lastColumn, "boolean", "lastColumn");
			var displayValue = "";
			egl.addLocalFunctionVariable("displayValue", displayValue, "string", "displayValue");
			egl.atLine(this.eze$$fileName,532,22658,28, this);
			displayValue = value;
			egl.setLocalFunctionVariable("displayValue", displayValue, "string");
			egl.atLine(this.eze$$fileName,533,22696,93, this);
			if ( this.encodeValue ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,534,22737,38, this);
					var ezert$$62 = "";
					ezert$$62 = egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.encodeString(value );
					egl.atLine(this.eze$$fileName,534,22722,54, this);
					displayValue = ezert$$62;
					egl.setLocalFunctionVariable("displayValue", displayValue, "string");
				}finally{egl.exitBlock();}
			}
			var ezekw$$class = "";
			egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
			egl.atLine(this.eze$$fileName,536,22799,35, this);
			ezekw$$class = egl.checkNull(this.columnClass, "columnClass")[this.columnClass.checkIndex((column)-1)];
			egl.setLocalFunctionVariable("class", ezekw$$class, "string");
			egl.atLine(this.eze$$fileName,537,22844,337, this);
			if ( (row > 0) ) {
				try{egl.enterBlock();
					var formatters = null;
					egl.addLocalFunctionVariable("formatters", formatters, "com.ibm.egl.rui.widgets.CellFormatter[]", "!formatters");
					egl.atLine(this.eze$$fileName,538,22875,42, this);
					formatters = egl.checkNull(c, "c").formatters;
					egl.setLocalFunctionVariable("formatters", formatters, "com.ibm.egl.rui.widgets.CellFormatter[]");
					egl.atLine(this.eze$$fileName,539,22937,234, this);
					if ( (formatters != null) ) {
						try{egl.enterBlock();
							var formatterCount = 0;
							egl.addLocalFunctionVariable("formatterCount", formatterCount, "int", "formatterCount");
							egl.atLine(this.eze$$fileName,540,22995,20, this);
							var ezert$$63 = 0;
							ezert$$63 = formatters.getSize();
							egl.atLine(this.eze$$fileName,540,22974,42, this);
							formatterCount = ezert$$63;
							egl.setLocalFunctionVariable("formatterCount", formatterCount, "int");
							egl.atLine(this.eze$$fileName,541,23043,114, this);
							{
								try{egl.enterBlock();
									var k = 0;
									egl.addLocalFunctionVariable("k", k, "int", "k");
									k = 1;
									egl.setLocalFunctionVariable("k", k, "int");
									for ( ; (k <= formatterCount); k = (k + 1) )
									{
										egl.setLocalFunctionVariable("k", k, "int");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,542,23093,46, this);
											egl.checkNull(formatters, "formatters")[formatters.checkIndex((k)-1)](ezekw$$class, function(eze$$inout$class) {
												ezekw$$class = eze$$inout$class;
												egl.setLocalFunctionVariable("class", ezekw$$class, "string");
											}, displayValue, function(eze$$inout$value) {
												displayValue = eze$$inout$value;
												egl.setLocalFunctionVariable("displayValue", displayValue, "string");
											}, egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)]), this );
											egl.setLocalFunctionVariable("class", ezekw$$class, "string");
											egl.setLocalFunctionVariable("displayValue", displayValue, "string");
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,541,23043,114, this);
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			var h = "";
			egl.addLocalFunctionVariable("h", h, "string", "h");
			egl.atLine(this.eze$$fileName,547,23200,15, this);
			h = " ";
			egl.setLocalFunctionVariable("h", h, "string");
			egl.atLine(this.eze$$fileName,548,23225,97, this);
			if ( (this.rowHeight > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,549,23256,53, this);
					h = (("height:" + ((this.rowHeight + (2 * this.cellPadding))).toString()) + "px;");
					egl.setLocalFunctionVariable("h", h, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,551,23332,201, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((("<div id=" + egl.checkNull(this.grid, "grid").getID()) + "-cell-") + (row).toString()) + "-") + (column).toString()) + " class='") + ezekw$$class) + "' row='") + (row).toString()) + "' column='") + (column).toString()) + "' style='") );
			egl.atLine(this.eze$$fileName,554,23547,25, this);
			var ezert$$64 = "";
			ezert$$64 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
			egl.atLine(this.eze$$fileName,554,23543,121, this);
			if ( (ezert$$64 == "RTL") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,555,23597,54, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("float: right; " );
				}finally{egl.exitBlock();}
			}
			var cb = 0;
			egl.addLocalFunctionVariable("cb", cb, "int", "cb");
			egl.atLine(this.eze$$fileName,557,23674,20, this);
			cb = this.cellBorder;
			egl.setLocalFunctionVariable("cb", cb, "int");
			egl.atLine(this.eze$$fileName,558,23704,34, this);
			if ( lastColumn ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,559,23724,7, this);
					cb = 0;
					egl.setLocalFunctionVariable("cb", cb, "int");
				}finally{egl.exitBlock();}
			}
			var w = 0;
			egl.addLocalFunctionVariable("w", w, "int", "w");
			egl.atLine(this.eze$$fileName,561,23742,48, this);
			w = ((egl.convertStringToInt(egl.checkNull(c, "c").width) + (this.cellPadding * 2)) + cb);
			egl.setLocalFunctionVariable("w", w, "int");
			egl.atLine(this.eze$$fileName,562,23794,314, this);
			if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
				try{egl.enterBlock();
					var isVisual = false;
					egl.addLocalFunctionVariable("isVisual", isVisual, "boolean", "isVisual");
					egl.atLine(this.eze$$fileName,563,23886,51, this);
					isVisual = (this.textLayoutThis == "Visual");
					egl.setLocalFunctionVariable("isVisual", isVisual, "boolean");
					var isReverseDirection = false;
					egl.addLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean", "isReverseDirection");
					egl.atLine(this.eze$$fileName,564,23943,68, this);
					isReverseDirection = (this.reverseTextDirectionThis == "Yes");
					egl.setLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean");
					egl.atLine(this.eze$$fileName,565,24034,66, this);
					var ezert$$65 = "";
					ezert$$65 = this.util.setBiDiMarkersStr(displayValue, isVisual, isReverseDirection );
					egl.atLine(this.eze$$fileName,565,24019,82, this);
					displayValue = ezert$$65;
					egl.setLocalFunctionVariable("displayValue", displayValue, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,567,24118,306, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((((("width:" + (w).toString()) + "px; ") + h) + "padding:") + (this.cellPadding).toString()) + "px; padding-bottom:") + ((this.cellPadding + 5000)).toString()) + "px; margin-bottom:") + (((0 - this.cellPadding) - 5000)).toString()) + "px; border-width: 0 ") + (cb).toString()) + "px 0 0'>") + displayValue) + "</div>") );
			egl.atLine(this.eze$$fileName,531,22528,1905, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"applyBehaviors": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("applyBehaviors",this,arguments,eze$$updater);
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			var row = 0;
			egl.addLocalFunctionVariable("row", row, "int", "row");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			var n = 0;
			egl.addLocalFunctionVariable("n", n, "int", "n");
			egl.atLine(this.eze$$fileName,580,24595,25, this);
			var ezert$$66 = 0;
			ezert$$66 = this.headerBehaviors.getSize();
			egl.atLine(this.eze$$fileName,580,24592,640, this);
			if ( (ezert$$66 > 0) ) {
				try{egl.enterBlock();
					var ezert$$67 = null;
					ezert$$67 = egl.checkNull(this.grid, "grid").getElementsByTagName("span" );
					egl.atLine(this.eze$$fileName,581,24639,40, this);
					tds = ezert$$67;
					egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
					egl.atLine(this.eze$$fileName,582,24701,13, this);
					var ezert$$68 = 0;
					ezert$$68 = tds.getSize();
					egl.atLine(this.eze$$fileName,582,24693,22, this);
					count = ezert$$68;
					egl.setLocalFunctionVariable("count", count, "int");
					egl.atLine(this.eze$$fileName,583,24729,490, this);
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,584,24775,35, this);
							var ezert$$69 = 0;
							ezert$$69 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "row" );
							egl.atLine(this.eze$$fileName,584,24769,42, this);
							row = ezert$$69;
							egl.setLocalFunctionVariable("row", row, "int");
							egl.atLine(this.eze$$fileName,585,24838,38, this);
							var ezert$$70 = 0;
							ezert$$70 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "column" );
							egl.atLine(this.eze$$fileName,585,24829,48, this);
							column = ezert$$70;
							egl.setLocalFunctionVariable("column", column, "int");
							egl.atLine(this.eze$$fileName,586,24895,28, this);
							egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setLogicalParent(  this );
							egl.atLine(this.eze$$fileName,587,24941,261, this);
							if ( ((row < 1) && (column >= 1)) ) {
								try{egl.enterBlock();
									var len = 0;
									egl.addLocalFunctionVariable("len", len, "int", "len");
									egl.atLine(this.eze$$fileName,588,24999,25, this);
									var ezert$$71 = 0;
									ezert$$71 = this.headerBehaviors.getSize();
									egl.atLine(this.eze$$fileName,588,24989,36, this);
									len = ezert$$71;
									egl.setLocalFunctionVariable("len", len, "int");
									egl.atLine(this.eze$$fileName,589,25047,134, this);
									{
										try{egl.enterBlock();
											var k = 0;
											egl.addLocalFunctionVariable("k", k, "int", "k");
											k = 1;
											egl.setLocalFunctionVariable("k", k, "int");
											for ( ; (k <= len); k = (k + 1) )
											{
												egl.setLocalFunctionVariable("k", k, "int");
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,590,25097,59, this);
													egl.checkNull(this.headerBehaviors, "headerBehaviors")[this.headerBehaviors.checkIndex((k)-1)]( this, egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], null, 0, egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)] );
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,589,25047,134, this);
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,583,24729,490, this);
					}
				}finally{egl.exitBlock();}
			}
			var eze_Cond_Temp_4 = false;
			egl.atLine(this.eze$$fileName,595,25245,19, this);
			var ezert$$72 = 0;
			ezert$$72 = this.behaviors.getSize();
			egl.atLine(this.eze$$fileName,595,25245,56, this);
			if ( (ezert$$72 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,595,25245,56, this);
					eze_Cond_Temp_4 = true;
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,595,25272,25, this);
					var ezert$$73 = 0;
					ezert$$73 = this.editorBehaviors.getSize();
					egl.atLine(this.eze$$fileName,595,25245,56, this);
					if ( (ezert$$73 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,595,25245,56, this);
							eze_Cond_Temp_4 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,595,25245,56, this);
							eze_Cond_Temp_4 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,595,25242,1220, this);
			if ( eze_Cond_Temp_4 ) {
				try{egl.enterBlock();
					var ezert$$74 = null;
					ezert$$74 = egl.checkNull(this.grid, "grid").getElementsByTagName("div" );
					egl.atLine(this.eze$$fileName,596,25316,39, this);
					tds = ezert$$74;
					egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
					egl.atLine(this.eze$$fileName,597,25377,13, this);
					var ezert$$75 = 0;
					ezert$$75 = tds.getSize();
					egl.atLine(this.eze$$fileName,597,25369,22, this);
					count = ezert$$75;
					egl.setLocalFunctionVariable("count", count, "int");
					egl.atLine(this.eze$$fileName,598,25405,1044, this);
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,599,25451,35, this);
							var ezert$$76 = 0;
							ezert$$76 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "row" );
							egl.atLine(this.eze$$fileName,599,25445,42, this);
							row = ezert$$76;
							egl.setLocalFunctionVariable("row", row, "int");
							egl.atLine(this.eze$$fileName,600,25514,38, this);
							var ezert$$77 = 0;
							ezert$$77 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "column" );
							egl.atLine(this.eze$$fileName,600,25505,48, this);
							column = ezert$$77;
							egl.setLocalFunctionVariable("column", column, "int");
							egl.atLine(this.eze$$fileName,601,25571,28, this);
							egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setLogicalParent(  this );
							egl.atLine(this.eze$$fileName,602,25617,815, this);
							if ( ((row > 0) && (column > 0)) ) {
								try{egl.enterBlock();
									var object = null;
									egl.addLocalFunctionVariable("object", object, "any", "object");
									egl.atLine(this.eze$$fileName,603,25664,23, this);
									object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)]);
									egl.setLocalFunctionVariable("object", object, "any");
									var len = 0;
									egl.addLocalFunctionVariable("len", len, "int", "len");
									egl.atLine(this.eze$$fileName,604,25719,19, this);
									var ezert$$78 = 0;
									ezert$$78 = this.behaviors.getSize();
									egl.atLine(this.eze$$fileName,604,25709,30, this);
									len = ezert$$78;
									egl.setLocalFunctionVariable("len", len, "int");
									egl.atLine(this.eze$$fileName,605,25761,132, this);
									{
										try{egl.enterBlock();
											var k = 0;
											egl.addLocalFunctionVariable("k", k, "int", "k");
											k = 1;
											egl.setLocalFunctionVariable("k", k, "int");
											for ( ; (k <= len); k = (k + 1) )
											{
												egl.setLocalFunctionVariable("k", k, "int");
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,606,25811,57, this);
													egl.checkNull(this.behaviors, "behaviors")[this.behaviors.checkIndex((k)-1)]( this, egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], object, row, egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)] );
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,605,25761,132, this);
											}
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,608,25921,25, this);
									var ezert$$79 = 0;
									ezert$$79 = this.editorBehaviors.getSize();
									egl.atLine(this.eze$$fileName,608,25915,32, this);
									len = ezert$$79;
									egl.setLocalFunctionVariable("len", len, "int");
									egl.atLine(this.eze$$fileName,609,25969,442, this);
									{
										try{egl.enterBlock();
											var k = 0;
											egl.addLocalFunctionVariable("k", k, "int", "k");
											k = 1;
											egl.setLocalFunctionVariable("k", k, "int");
											for ( ; (k <= len); k = (k + 1) )
											{
												egl.setLocalFunctionVariable("k", k, "int");
												try{egl.enterBlock();
													var editor = null;
													egl.addLocalFunctionVariable("editor", editor, "egl.ui.rui.Widget", "editor");
													egl.atLine(this.eze$$fileName,610,26035,164, this);
													var ezert$$80 = null;
													ezert$$80 = egl.checkNull(this.editorBehaviors, "editorBehaviors")[this.editorBehaviors.checkIndex((k)-1)]( this, egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)]), row, egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], {eze$$value : egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getInnerText(), eze$$signature : "S;"} );
													egl.atLine(this.eze$$fileName,610,26019,181, this);
													editor = ezert$$80;
													egl.setLocalFunctionVariable("editor", editor, "egl.ui.rui.Widget");
													egl.atLine(this.eze$$fileName,613,26226,160, this);
													if ( (editor != null) ) {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,614,26271,30, this);
															this.editors.appendElement( editor );
															egl.atLine(this.eze$$fileName,615,26331,26, this);
															egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setChildren( [ editor ] );
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,609,25969,442, this);
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,598,25405,1044, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,573,24441,2030, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"fallbackDimensions": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("fallbackDimensions",this,arguments,eze$$updater);
			var rh = 0;
			egl.addLocalFunctionVariable("rh", rh, "int", "rh");
			egl.atLine(this.eze$$fileName,624,26527,31, this);
			rh = (20 + (2 * this.cellPadding));
			egl.setLocalFunctionVariable("rh", rh, "int");
			egl.atLine(this.eze$$fileName,625,26565,68, this);
			if ( (this.rowHeight > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,626,26590,33, this);
					rh = (this.rowHeight + (2 * this.cellPadding));
					egl.setLocalFunctionVariable("rh", rh, "int");
				}finally{egl.exitBlock();}
			}
			var rowsHeight = 0;
			egl.addLocalFunctionVariable("rowsHeight", rowsHeight, "int", "rowsHeight");
			egl.atLine(this.eze$$fileName,628,26640,35, this);
			rowsHeight = ((rh * this.pageSize) + 1);
			egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
			var headerHeight = 0;
			egl.addLocalFunctionVariable("headerHeight", headerHeight, "int", "headerHeight");
			egl.atLine(this.eze$$fileName,629,26682,22, this);
			headerHeight = 22;
			egl.setLocalFunctionVariable("headerHeight", headerHeight, "int");
			egl.atLine(this.eze$$fileName,630,26711,72, this);
			if ( this.fixFirstColumn ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,631,26743,27, this);
					rowsHeight = (rowsHeight + headerHeight);
					egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
				}finally{egl.exitBlock();}
			}
			var scroller = null;
			egl.addLocalFunctionVariable("scroller", scroller, "egl.ui.rui.Widget", "scroller");
			var ezert$$81 = null;
			ezert$$81 = egl.checkNull(this.grid, "grid").getElementById((egl.checkNull(this.grid, "grid").getID() + "-scroller") );
			egl.atLine(this.eze$$fileName,633,26793,61, this);
			scroller = ezert$$81;
			egl.setLocalFunctionVariable("scroller", scroller, "egl.ui.rui.Widget");
			egl.atLine(this.eze$$fileName,634,26864,251, this);
			if ( (rowsHeight > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,635,26896,206, this);
					if ( this.fixFirstColumn ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,636,26932,23, this);
							egl.checkNull(this.ui, "ui").setHeight((rowsHeight).toString());
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,638,26991,92, this);
							if ( (scroller != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,639,27033,29, this);
									scroller.setHeight( (rowsHeight).toString() );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			var eze_Cond_Temp_5 = false;
			egl.atLine(this.eze$$fileName,644,27193,89, this);
			if ( (((this.getWidth() == "") || (this.getWidth() == "auto")) && this.fixFirstColumn) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,644,27257,14, this);
					var ezert$$82 = 0;
					ezert$$82 = this.data.getSize();
					egl.atLine(this.eze$$fileName,644,27193,89, this);
					if ( (ezert$$82 > this.pageSize) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,644,27193,89, this);
							eze_Cond_Temp_5 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,644,27193,89, this);
							eze_Cond_Temp_5 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,644,27193,89, this);
					eze_Cond_Temp_5 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,644,27190,145, this);
			if ( eze_Cond_Temp_5 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,645,27294,28, this);
					egl.checkNull(this.ui, "ui").setWidth(((this.headerWidth + 17)).toString());
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,623,26483,861, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"updateDimensions": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("updateDimensions",this,arguments,eze$$updater);
			var rowsHeight = 0;
			egl.addLocalFunctionVariable("rowsHeight", rowsHeight, "int", "rowsHeight");
			egl.atLine(this.eze$$fileName,650,27394,19, this);
			rowsHeight = 0;
			egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
			var height = 0;
			egl.addLocalFunctionVariable("height", height, "int", "height");
			egl.atLine(this.eze$$fileName,652,27444,1993, this);
			if ( this.showScrollbar ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,653,27472,76, this);
					if ( (this.getPixelHeight() > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,654,27508,26, this);
							height = this.getPixelHeight();
							egl.setLocalFunctionVariable("height", height, "int");
						}finally{egl.exitBlock();}
					}
					var scroller = null;
					egl.addLocalFunctionVariable("scroller", scroller, "egl.ui.rui.Widget", "scroller");
					var ezert$$83 = null;
					ezert$$83 = egl.checkNull(this.grid, "grid").getElementById((egl.checkNull(this.grid, "grid").getID() + "-scroller") );
					egl.atLine(this.eze$$fileName,656,27562,61, this);
					scroller = ezert$$83;
					egl.setLocalFunctionVariable("scroller", scroller, "egl.ui.rui.Widget");
					var lastRow = 0;
					egl.addLocalFunctionVariable("lastRow", lastRow, "int", "lastRow");
					egl.atLine(this.eze$$fileName,657,27637,39, this);
					lastRow = ((this._startRow + this.pageSize) - 1);
					egl.setLocalFunctionVariable("lastRow", lastRow, "int");
					var _lastShownRow = 0;
					egl.addLocalFunctionVariable("_lastShownRow", _lastShownRow, "int", "_lastShownRow");
					egl.atLine(this.eze$$fileName,658,27690,28, this);
					_lastShownRow = lastRow;
					egl.setLocalFunctionVariable("_lastShownRow", _lastShownRow, "int");
					var row = null;
					egl.addLocalFunctionVariable("row", row, "egl.ui.rui.Widget", "row");
					var ezert$$84 = null;
					ezert$$84 = egl.checkNull(this.grid, "grid").getElementById(((egl.checkNull(this.grid, "grid").getID() + "-row-") + (_lastShownRow).toString()) );
					egl.atLine(this.eze$$fileName,659,27732,68, this);
					row = ezert$$84;
					egl.setLocalFunctionVariable("row", row, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,660,27814,172, this);
					while ( ((row == null) && (_lastShownRow > 0)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,661,27871,19, this);
							_lastShownRow = (_lastShownRow - 1);
							egl.setLocalFunctionVariable("_lastShownRow", _lastShownRow, "int");
							var ezert$$85 = null;
							ezert$$85 = egl.checkNull(this.grid, "grid").getElementById(((egl.checkNull(this.grid, "grid").getID() + "-row-") + (_lastShownRow).toString()) );
							egl.atLine(this.eze$$fileName,662,27908,61, this);
							row = ezert$$85;
							egl.setLocalFunctionVariable("row", row, "egl.ui.rui.Widget");
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,660,27814,172, this);
					}
					egl.atLine(this.eze$$fileName,665,28002,87, this);
					if ( (row != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,666,28035,37, this);
							rowsHeight = (row.getY() + row.getPixelHeight());
							egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,668,28114,80, this);
					if ( (scroller != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,669,28152,25, this);
							rowsHeight = (rowsHeight - scroller.getY());
							egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,672,28222,253, this);
					if ( ((rowsHeight <= 0) && (lastRow > 0)) ) {
						try{egl.enterBlock();
							var rh = 0;
							egl.addLocalFunctionVariable("rh", rh, "int", "rh");
							egl.atLine(this.eze$$fileName,673,28271,31, this);
							rh = (20 + (2 * this.cellPadding));
							egl.setLocalFunctionVariable("rh", rh, "int");
							egl.atLine(this.eze$$fileName,674,28317,84, this);
							if ( (this.rowHeight > 0) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,675,28350,33, this);
									rh = (this.rowHeight + (2 * this.cellPadding));
									egl.setLocalFunctionVariable("rh", rh, "int");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,677,28416,30, this);
							rowsHeight = ((rh * lastRow) + 1);
							egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
						}finally{egl.exitBlock();}
					}
					var headerHeight = 0;
					egl.addLocalFunctionVariable("headerHeight", headerHeight, "int", "headerHeight");
					egl.atLine(this.eze$$fileName,680,28494,22, this);
					headerHeight = 22;
					egl.setLocalFunctionVariable("headerHeight", headerHeight, "int");
					var header = null;
					egl.addLocalFunctionVariable("header", header, "egl.ui.rui.Widget", "header");
					var ezert$$86 = null;
					ezert$$86 = egl.checkNull(this.grid, "grid").getElementById((egl.checkNull(this.grid, "grid").getID() + "-header") );
					egl.atLine(this.eze$$fileName,681,28530,57, this);
					header = ezert$$86;
					egl.setLocalFunctionVariable("header", header, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,683,28615,335, this);
					if ( (header != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,684,28648,94, this);
							if ( (header.getPixelHeight() > 0) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,685,28690,34, this);
									headerHeight = header.getPixelHeight();
									egl.setLocalFunctionVariable("headerHeight", headerHeight, "int");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,687,28757,90, this);
							if ( !(this.fixFirstColumn) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,688,28795,31, this);
									height = (height - headerHeight);
									egl.setLocalFunctionVariable("height", height, "int");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,690,28865,68, this);
							if ( (height < 0) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,691,28901,11, this);
									height = 0;
									egl.setLocalFunctionVariable("height", height, "int");
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,694,28964,80, this);
					if ( this.fixFirstColumn ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,695,29000,27, this);
							rowsHeight = (rowsHeight + headerHeight);
							egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,697,29058,93, this);
					if ( ((height > 0) && (height < rowsHeight)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,698,29114,20, this);
							rowsHeight = height;
							egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,700,29165,259, this);
					if ( (rowsHeight > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,701,29198,212, this);
							if ( this.fixFirstColumn ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,702,29235,23, this);
									egl.checkNull(this.ui, "ui").setHeight((rowsHeight).toString());
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,704,29296,94, this);
									if ( (scroller != null) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,705,29339,29, this);
											scroller.setHeight( (rowsHeight).toString() );
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,649,27352,2096, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"enableDragging": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("enableDragging",this,arguments,eze$$updater);
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,720,29687,17, this);
			var ezert$$87 = 0;
			ezert$$87 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,720,29669,36, this);
			columnCount = ezert$$87;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			var ezert$$88 = null;
			ezert$$88 = egl.checkNull(this.grid, "grid").getElementsByTagName("span" );
			egl.atLine(this.eze$$fileName,721,29715,49, this);
			tds = ezert$$88;
			egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,722,29786,13, this);
			var ezert$$89 = 0;
			ezert$$89 = tds.getSize();
			egl.atLine(this.eze$$fileName,722,29774,26, this);
			count = ezert$$89;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,723,29810,326, this);
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
							egl.atLine(this.eze$$fileName,724,29847,274, this);
							if ( (egl.like(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getID(), (egl.checkNull(this.grid, "grid").getID() + "-header-%"), "\\") && (egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getID() != (egl.checkNull(this.grid, "grid").getID() + "-header-checkbox"))) ) {
								try{egl.enterBlock();
									var header = null;
									egl.addLocalFunctionVariable("header", header, "egl.ui.rui.Widget", "header");
									egl.atLine(this.eze$$fileName,725,29946,23, this);
									header = egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)];
									egl.setLocalFunctionVariable("header", header, "egl.ui.rui.Widget");
									egl.atLine(this.eze$$fileName,726,29981,31, this);
									header.setOnStartDrag( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.startDrag,"startDrag") );
									egl.atLine(this.eze$$fileName,727,30030,27, this);
									header.setOnDrag( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.dragColumn,"dragColumn") );
									egl.atLine(this.eze$$fileName,728,30075,32, this);
									header.setOnDropOnTarget( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.endDrag,"endDrag") );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,723,29810,326, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,719,29626,519, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"startDrag": function( w, startX, startY ) {
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
		try { egl.enter("startDrag",this,arguments,eze$$updater);
			var $result = false;
			egl.addLocalFunctionVariable("w", w, "egl.ui.rui.Widget", "w");
			egl.addLocalFunctionVariable("startX", startX, "int", "startX");
			egl.addLocalFunctionVariable("startY", startY, "int", "startY");
			egl.atLine(this.eze$$fileName,734,30249,13, this);
			$result = true;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"dragColumn": function( w, dropw, dragX, dragY ) {
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
		try { egl.enter("dragColumn",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("w", w, "egl.ui.rui.Widget", "w");
			egl.addLocalFunctionVariable("dropw", dropw, "egl.ui.rui.Widget", "dropw");
			egl.addLocalFunctionVariable("dragX", dragX, "int", "dragX");
			egl.addLocalFunctionVariable("dragY", dragY, "int", "dragY");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.atLine(this.eze$$fileName,740,30498,24, this);
			var ezert$$90 = null;
			ezert$$90 = w.getAttribute("column" );
			egl.atLine(this.eze$$fileName,740,30485,38, this);
			column = egl.convertAnyToInt(egl.boxAny(ezert$$90),false);
			egl.setLocalFunctionVariable("column", column, "int");
			var target = 0;
			egl.addLocalFunctionVariable("target", target, "int", "target");
			egl.atLine(this.eze$$fileName,741,30546,22, this);
			var ezert$$91 = 0;
			ezert$$91 = this.getTargetColumn(dragX );
			egl.atLine(this.eze$$fileName,741,30533,36, this);
			target = ezert$$91;
			egl.setLocalFunctionVariable("target", target, "int");
			egl.atLine(this.eze$$fileName,742,30579,30, this);
			egl.checkNull(this.ui, "ui").appendChild(this.columnDragger );
			egl.atLine(this.eze$$fileName,743,30619,36, this);
			egl.checkNull(this.columnDragger, "columnDragger").setPosition("absolute");
			egl.atLine(this.eze$$fileName,744,30665,25, this);
			egl.checkNull(this.columnDragger, "columnDragger").setY(egl.checkNull(this.grid, "grid").getY());
			egl.atLine(this.eze$$fileName,745,30700,24, this);
			egl.checkNull(this.columnDragger, "columnDragger").setWidth((4).toString());
			egl.atLine(this.eze$$fileName,746,30734,40, this);
			egl.checkNull(this.columnDragger, "columnDragger").setHeight((egl.checkNull(this.grid, "grid").getPixelHeight()).toString());
			egl.atLine(this.eze$$fileName,747,30784,29, this);
			egl.checkNull(this.columnDragger, "columnDragger").setVisible(true);
			egl.atLine(this.eze$$fileName,748,30823,240, this);
			try {
				try{egl.enterBlock();
					var header = null;
					egl.addLocalFunctionVariable("header", header, "egl.ui.rui.Widget", "header");
					var ezert$$92 = null;
					ezert$$92 = egl.checkNull(this.grid, "grid").getElementById(((egl.checkNull(this.grid, "grid").getID() + "-header-") + (target).toString()) );
					egl.atLine(this.eze$$fileName,749,30840,67, this);
					header = ezert$$92;
					egl.setLocalFunctionVariable("header", header, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,750,30921,31, this);
					egl.checkNull(this.columnDragger, "columnDragger").setX((header.getX() - 5));
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$93 )
			{
				{
					if (ezert$$93 instanceof egl.egl.debug.DebugTermination){throw ezert$$93;}
					if (!(ezert$$93 instanceof egl.egl.core.AnyException)) {
						ezert$$93 = egl.makeExceptionFromCaughtObject(ezert$$93);
					}
					var e = ezert$$93;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,752,31003,47, this);
							egl.checkNull(this.columnDragger, "columnDragger").setX(((egl.checkNull(this.grid, "grid").getX() + egl.checkNull(this.grid, "grid").getPixelWidth()) - 5));
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,739,30390,682, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getTargetColumn": function( x ) {
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
		try { egl.enter("getTargetColumn",this,arguments,eze$$updater);
			var $result = 0;
			egl.addLocalFunctionVariable("x", x, "int", "x");
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,757,31163,17, this);
			var ezert$$94 = 0;
			ezert$$94 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,757,31145,36, this);
			columnCount = ezert$$94;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			var dx = 0;
			egl.addLocalFunctionVariable("dx", dx, "int", "dx");
			egl.atLine(this.eze$$fileName,758,31191,14, this);
			dx = egl.checkNull(this.ui, "ui").getX();
			egl.setLocalFunctionVariable("dx", dx, "int");
			egl.atLine(this.eze$$fileName,759,31215,232, this);
			{
				try{egl.enterBlock();
					var column = 0;
					egl.addLocalFunctionVariable("column", column, "int", "column");
					column = 1;
					egl.setLocalFunctionVariable("column", column, "int");
					for ( ; (column <= columnCount); column = (column + 1) )
					{
						egl.setLocalFunctionVariable("column", column, "int");
						try{egl.enterBlock();
							var w = 0;
							egl.addLocalFunctionVariable("w", w, "int", "w");
							egl.atLine(this.eze$$fileName,760,31266,48, this);
							w = ((2 * this.cellPadding) + egl.convertStringToInt(egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").width));
							egl.setLocalFunctionVariable("w", w, "int");
							egl.atLine(this.eze$$fileName,761,31328,74, this);
							if ( ((x > dx) && (x < (dx + w))) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,762,31370,15, this);
									$result = column;
									egl.setLocalFunctionVariable("INT", $result, "int");
									{ if (!egl.debugg) egl.leave(); return $result;}
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,764,31426,8, this);
							dx = (dx + w);
							egl.setLocalFunctionVariable("dx", dx, "int");
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,759,31215,232, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,756,31080,376, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"endDrag": function( w, dropw, dragX, dragY ) {
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
		try { egl.enter("endDrag",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("w", w, "egl.ui.rui.Widget", "w");
			egl.addLocalFunctionVariable("dropw", dropw, "egl.ui.rui.Widget", "dropw");
			egl.addLocalFunctionVariable("dragX", dragX, "int", "dragX");
			egl.addLocalFunctionVariable("dragY", dragY, "int", "dragY");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.atLine(this.eze$$fileName,769,31569,24, this);
			var ezert$$95 = null;
			ezert$$95 = w.getAttribute("column" );
			egl.atLine(this.eze$$fileName,769,31556,38, this);
			column = egl.convertAnyToInt(egl.boxAny(ezert$$95),false);
			egl.setLocalFunctionVariable("column", column, "int");
			var target = 0;
			egl.addLocalFunctionVariable("target", target, "int", "target");
			egl.atLine(this.eze$$fileName,770,31617,22, this);
			var ezert$$96 = 0;
			ezert$$96 = this.getTargetColumn(dragX );
			egl.atLine(this.eze$$fileName,770,31604,36, this);
			target = ezert$$96;
			egl.setLocalFunctionVariable("target", target, "int");
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,771,31668,17, this);
			var ezert$$97 = 0;
			ezert$$97 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,771,31650,36, this);
			columnCount = ezert$$97;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			egl.atLine(this.eze$$fileName,772,31696,811, this);
			if ( ((target != column) && egl.checkNull(this.columnDragger, "columnDragger").getVisible()) ) {
				try{egl.enterBlock();
					var draggedColumn = null;
					egl.addLocalFunctionVariable("draggedColumn", draggedColumn, "com.ibm.egl.rui.widgets.DataGridColumn", "draggedColumn");
					egl.atLine(this.eze$$fileName,773,31755,47, this);
					draggedColumn = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
					egl.setLocalFunctionVariable("draggedColumn", draggedColumn, "com.ibm.egl.rui.widgets.DataGridColumn");
					egl.atLine(this.eze$$fileName,774,31816,30, this);
					this.columns.removeElement( column );
					egl.atLine(this.eze$$fileName,775,31860,498, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,776,31881,364, this);
							if ( (target > columnCount) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,777,31927,37, this);
									this.columns.appendElement( draggedColumn );
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,779,32008,216, this);
									if ( (target > column) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,780,32053,49, this);
											this.columns.insertElement( draggedColumn, (target - 1) );
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,782,32154,45, this);
											this.columns.insertElement( draggedColumn, target );
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$98 )
					{
						{
							if (ezert$$98 instanceof egl.egl.debug.DebugTermination){throw ezert$$98;}
							if (!(ezert$$98 instanceof egl.egl.core.AnyException)) {
								ezert$$98 = egl.makeExceptionFromCaughtObject(ezert$$98);
							}
							var e = ezert$$98;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,786,32304,37, this);
									this.columns.appendElement( draggedColumn );
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
					egl.atLine(this.eze$$fileName,788,32372,9, this);
					this.render();
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,790,32406,47, this);
					egl.checkNull(this.columnDragger, "columnDragger").setX(((egl.checkNull(this.grid, "grid").getX() + egl.checkNull(this.grid, "grid").getPixelWidth()) + 5));
					egl.atLine(this.eze$$fileName,791,32464,30, this);
					egl.checkNull(this.columnDragger, "columnDragger").setVisible(false);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,768,31464,1052, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"renderButtonBar": function() {
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
		try { egl.enter("renderButtonBar",this,arguments,eze$$updater);
			var eze_Cond_Temp_6 = false;
			egl.atLine(this.eze$$fileName,802,32740,101, this);
			if ( ((this.showButtonBar && !(this.showScrollbar)) && (this.pageSize > 0)) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,802,32791,14, this);
					var ezert$$99 = 0;
					ezert$$99 = this.data.getSize();
					egl.atLine(this.eze$$fileName,802,32740,101, this);
					if ( (ezert$$99 > this.pageSize) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,802,32740,101, this);
							eze_Cond_Temp_6 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,802,32740,101, this);
							eze_Cond_Temp_6 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,802,32740,101, this);
					eze_Cond_Temp_6 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,802,32737,852, this);
			if ( eze_Cond_Temp_6 ) {
				try{egl.enterBlock();
					var pageCount = 0;
					egl.addLocalFunctionVariable("pageCount", pageCount, "int", "pageCount");
					egl.atLine(this.eze$$fileName,804,32872,14, this);
					var ezert$$100 = 0;
					ezert$$100 = this.data.getSize();
					egl.atLine(this.eze$$fileName,804,32856,42, this);
					pageCount = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide(ezert$$100, this.pageSize)),egl.createRuntimeException);
					egl.setLocalFunctionVariable("pageCount", pageCount, "int");
					var page = 0;
					egl.addLocalFunctionVariable("page", page, "int", "page");
					egl.atLine(this.eze$$fileName,805,32912,41, this);
					page = egl.convertDecimalToInt((new egl.javascript.BigDecimal(String(1))).add(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize))),egl.createRuntimeException);
					egl.setLocalFunctionVariable("page", page, "int");
					egl.atLine(this.eze$$fileName,806,32970,14, this);
					var ezert$$101 = 0;
					ezert$$101 = this.data.getSize();
					egl.atLine(this.eze$$fileName,806,32967,83, this);
					if ( (egl.remainder(ezert$$101, this.pageSize) > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,807,33018,15, this);
							pageCount = (pageCount + 1);
							egl.setLocalFunctionVariable("pageCount", pageCount, "int");
						}finally{egl.exitBlock();}
					}
					var pageText = "";
					egl.addLocalFunctionVariable("pageText", pageText, "string", "pageText");
					egl.atLine(this.eze$$fileName,809,33064,30, this);
					pageText = this.pagingLabel;
					egl.setLocalFunctionVariable("pageText", pageText, "string");
					egl.atLine(this.eze$$fileName,810,33108,40, this);
					this.replaceMarker(pageText, function(eze$$inout$s) {
						pageText = eze$$inout$s;
						egl.setLocalFunctionVariable("pageText", pageText, "string");
					}, "{page}", (page).toString(), this );
					egl.setLocalFunctionVariable("pageText", pageText, "string");
					egl.atLine(this.eze$$fileName,811,33162,50, this);
					this.replaceMarker(pageText, function(eze$$inout$s) {
						pageText = eze$$inout$s;
						egl.setLocalFunctionVariable("pageText", pageText, "string");
					}, "{pageCount}", (pageCount).toString(), this );
					egl.setLocalFunctionVariable("pageText", pageText, "string");
					egl.atLine(this.eze$$fileName,812,33226,37, this);
					egl.checkNull(this.gotoStartButton, "gotoStartButton").setDisabled((page == 1));
					egl.atLine(this.eze$$fileName,813,33277,40, this);
					egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").setDisabled((page == 1));
					egl.atLine(this.eze$$fileName,814,33331,30, this);
					egl.checkNull(this.pageTextLabel, "pageTextLabel").setText(pageText);
					egl.atLine(this.eze$$fileName,815,33375,51, this);
					egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").setDisabled((page == pageCount));
					egl.atLine(this.eze$$fileName,816,33440,43, this);
					egl.checkNull(this.gotoEndButton, "gotoEndButton").setDisabled((page == pageCount));
					egl.atLine(this.eze$$fileName,817,33497,31, this);
					egl.checkNull(this.ui, "ui").setChildren( [ this.grid, this.buttonBar ] );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,819,33556,20, this);
					egl.checkNull(this.ui, "ui").setChildren( [ this.grid ] );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,801,32693,905, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"replaceMarker": function( s, eze$$s$func_, marker, value, eze$$caller ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("replaceMarker",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("s", s, "string", "s");
			egl.addLocalFunctionVariable("marker", marker, "string", "marker");
			egl.addLocalFunctionVariable("value", value, "string", "value");
			var index = 0;
			egl.addLocalFunctionVariable("index", index, "int", "index");
			egl.atLine(this.eze$$fileName,824,33695,25, this);
			var ezert$$102 = 0;
			ezert$$102 = egl.egl.core.$StrLib.indexOf( s, marker);
			egl.setLocalFunctionVariable("s", s, "string");
			egl.atLine(this.eze$$fileName,824,33683,38, this);
			index = ezert$$102;
			egl.setLocalFunctionVariable("index", index, "int");
			var ml = 0;
			egl.addLocalFunctionVariable("ml", ml, "int", "ml");
			egl.atLine(this.eze$$fileName,825,33740,27, this);
			var ezert$$103 = 0;
			ezert$$103 = egl.egl.core.$StrLib.textLen( marker);
			egl.atLine(this.eze$$fileName,825,33731,37, this);
			ml = ezert$$103;
			egl.setLocalFunctionVariable("ml", ml, "int");
			var sl = 0;
			egl.addLocalFunctionVariable("sl", sl, "int", "sl");
			egl.atLine(this.eze$$fileName,826,33787,22, this);
			var ezert$$104 = 0;
			ezert$$104 = egl.egl.core.$StrLib.textLen( s);
			egl.atLine(this.eze$$fileName,826,33778,32, this);
			sl = ezert$$104;
			egl.setLocalFunctionVariable("sl", sl, "int");
			var prefix = "";
			egl.addLocalFunctionVariable("prefix", prefix, "string", "prefix");
			egl.atLine(this.eze$$fileName,827,33820,19, this);
			prefix = "";
			egl.setLocalFunctionVariable("prefix", prefix, "string");
			var postfix = "";
			egl.addLocalFunctionVariable("postfix", postfix, "string", "postfix");
			egl.atLine(this.eze$$fileName,828,33849,20, this);
			postfix = "";
			egl.setLocalFunctionVariable("postfix", postfix, "string");
			egl.atLine(this.eze$$fileName,829,33879,240, this);
			if ( (index > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,830,33912,67, this);
					if ( (index > 1) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,831,33939,26, this);
							prefix = s.substring( 1-1,(index - 1));
							egl.setLocalFunctionVariable("prefix", prefix, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,833,33990,77, this);
					if ( ((index + ml) < sl) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,834,34023,30, this);
							postfix = s.substring( (index + ml)-1,sl);
							egl.setLocalFunctionVariable("postfix", postfix, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,836,34078,28, this);
					s = ((prefix + value) + postfix);
					egl.setLocalFunctionVariable("s", s, "string");
					eze$$s$func_.call(eze$$caller,s);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,823,33606,522, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoPage": function( pageIndex ) {
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
		try { egl.enter("gotoPage",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("pageIndex", pageIndex, "int", "pageIndex");
			egl.atLine(this.eze$$fileName,841,34172,36, this);
			if ( (pageIndex < 1) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,841,34190,14, this);
					pageIndex = 1;
					egl.setLocalFunctionVariable("pageIndex", pageIndex, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,842,34227,14, this);
			var ezert$$105 = 0;
			ezert$$105 = this.getPageCount();
			egl.atLine(this.eze$$fileName,842,34212,62, this);
			if ( (pageIndex > ezert$$105) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,842,34255,14, this);
					var ezert$$106 = 0;
					ezert$$106 = this.getPageCount();
					egl.atLine(this.eze$$fileName,842,34243,27, this);
					pageIndex = ezert$$106;
					egl.setLocalFunctionVariable("pageIndex", pageIndex, "int");
				}finally{egl.exitBlock();}
			}
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,843,34284,48, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			egl.atLine(this.eze$$fileName,844,34354,43, this);
			this._startRow = (((pageIndex - 1) * this.pageSize) + 1);
			egl.atLine(this.eze$$fileName,845,34407,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,846,34426,131, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,847,34490,54, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, pageIndex );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,846,34426,131, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,840,34133,435, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getPageCount": function() {
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
		try { egl.enter("getPageCount",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,853,34635,14, this);
			var ezert$$107 = 0;
			ezert$$107 = this.data.getSize();
			egl.atLine(this.eze$$fileName,853,34626,39, this);
			var ezert$$108 = 0;
			ezert$$108 = ezert$$107;
			$result = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((ezert$$108 - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCurrentPageIndex": function() {
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
		try { egl.enter("getCurrentPageIndex",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,857,34747,38, this);
			$result = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoStart": function( e ) {
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
		try { egl.enter("gotoStart",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,861,34851,48, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			egl.atLine(this.eze$$fileName,862,34906,25, this);
			this.lastStartRow = this._startRow;
			egl.atLine(this.eze$$fileName,863,34941,14, this);
			this._startRow = 1;
			egl.atLine(this.eze$$fileName,864,34973,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,865,34992,120, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,866,35053,46, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, 1 );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,865,34992,120, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,860,34806,315, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoPageBack": function( e ) {
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
		try { egl.enter("gotoPageBack",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,871,35177,48, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			egl.atLine(this.eze$$fileName,872,35232,25, this);
			this.lastStartRow = this._startRow;
			egl.atLine(this.eze$$fileName,873,35267,33, this);
			this._startRow = (this._startRow - this.pageSize);
			egl.atLine(this.eze$$fileName,874,35318,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,875,35337,135, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,876,35398,61, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, (oldPageIndex - 1) );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,875,35337,135, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,870,35129,352, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoPageForward": function( e ) {
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
		try { egl.enter("gotoPageForward",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,881,35540,48, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			egl.atLine(this.eze$$fileName,882,35595,25, this);
			this.lastStartRow = this._startRow;
			egl.atLine(this.eze$$fileName,883,35630,33, this);
			this._startRow = (this._startRow + this.pageSize);
			egl.atLine(this.eze$$fileName,884,35681,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,885,35700,135, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,886,35761,61, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, (oldPageIndex + 1) );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,885,35700,135, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,880,35489,355, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoEnd": function( e ) {
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
		try { egl.enter("gotoEnd",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,891,35895,48, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			var pageCount = 0;
			egl.addLocalFunctionVariable("pageCount", pageCount, "int", "pageCount");
			egl.atLine(this.eze$$fileName,892,35967,14, this);
			var ezert$$109 = 0;
			ezert$$109 = this.data.getSize();
			egl.atLine(this.eze$$fileName,892,35950,48, this);
			pageCount = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((ezert$$109 - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("pageCount", pageCount, "int");
			var leftOver = 0;
			egl.addLocalFunctionVariable("leftOver", leftOver, "int", "leftOver");
			egl.atLine(this.eze$$fileName,893,36023,14, this);
			var ezert$$110 = 0;
			ezert$$110 = this.data.getSize();
			egl.atLine(this.eze$$fileName,893,36008,42, this);
			leftOver = egl.remainder(ezert$$110, this.pageSize);
			egl.setLocalFunctionVariable("leftOver", leftOver, "int");
			egl.atLine(this.eze$$fileName,894,36060,64, this);
			if ( (leftOver == 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,895,36091,20, this);
					leftOver = this.pageSize;
					egl.setLocalFunctionVariable("leftOver", leftOver, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,897,36134,25, this);
			this.lastStartRow = this._startRow;
			egl.atLine(this.eze$$fileName,898,36196,14, this);
			var ezert$$111 = 0;
			ezert$$111 = this.data.getSize();
			egl.atLine(this.eze$$fileName,898,36181,45, this);
			var ezert$$112 = 0;
			ezert$$112 = Math.max( 1 ,((ezert$$111 - leftOver) + 1) );
			egl.atLine(this.eze$$fileName,898,36169,58, this);
			this._startRow = ezert$$112;
			egl.atLine(this.eze$$fileName,899,36245,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,900,36264,128, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,901,36325,54, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, pageCount );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,900,36264,128, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,890,35852,549, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"updateHighlights": function() {
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
		try { egl.enter("updateHighlights",this,arguments,eze$$updater);
			var divs = null;
			egl.addLocalFunctionVariable("divs", divs, "egl.ui.rui.Widget[]", "!divs");
			var ezert$$113 = null;
			ezert$$113 = egl.checkNull(this.grid, "grid").getElementsByTagName("div" );
			egl.atLine(this.eze$$fileName,912,36652,49, this);
			divs = ezert$$113;
			egl.setLocalFunctionVariable("divs", divs, "egl.ui.rui.Widget[]");
			var divCount = 0;
			egl.addLocalFunctionVariable("divCount", divCount, "int", "divCount");
			egl.atLine(this.eze$$fileName,913,36726,14, this);
			var ezert$$114 = 0;
			ezert$$114 = divs.getSize();
			egl.atLine(this.eze$$fileName,913,36711,30, this);
			divCount = ezert$$114;
			egl.setLocalFunctionVariable("divCount", divCount, "int");
			egl.atLine(this.eze$$fileName,914,36751,308, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= divCount); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							var row = 0;
							egl.addLocalFunctionVariable("row", row, "int", "row");
							egl.atLine(this.eze$$fileName,915,36804,27, this);
							var ezert$$115 = null;
							ezert$$115 = egl.checkNull(divs, "divs")[divs.checkIndex((n)-1)].getAttribute("row" );
							egl.atLine(this.eze$$fileName,915,36794,38, this);
							row = egl.convertAnyToInt(egl.boxAny(ezert$$115),false);
							egl.setLocalFunctionVariable("row", row, "int");
							egl.atLine(this.eze$$fileName,916,36846,200, this);
							if ( ((row > 0) && (egl.checkNull(divs, "divs")[divs.checkIndex((n)-1)].getID() == ((this.internalID + "-row-") + (row).toString()))) ) {
								try{egl.enterBlock();
									var selected = false;
									egl.addLocalFunctionVariable("selected", selected, "boolean", "selected");
									egl.atLine(this.eze$$fileName,917,36938,27, this);
									var ezert$$116 = false;
									ezert$$116 = this.util.getSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])) );
									egl.atLine(this.eze$$fileName,917,36919,47, this);
									selected = ezert$$116;
									egl.setLocalFunctionVariable("selected", selected, "boolean");
									egl.atLine(this.eze$$fileName,918,36984,29, this);
									this.selectRow(egl.checkNull(divs, "divs")[divs.checkIndex((n)-1)], selected );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,914,36751,308, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,922,37087,699, this);
			if ( this.showCheckBoxes ) {
				try{egl.enterBlock();
					var checkBoxes = null;
					egl.addLocalFunctionVariable("checkBoxes", checkBoxes, "egl.ui.rui.Widget[]", "!checkBoxes");
					var ezert$$117 = null;
					ezert$$117 = egl.checkNull(this.grid, "grid").getElementsByTagName("input" );
					egl.atLine(this.eze$$fileName,923,37128,57, this);
					checkBoxes = ezert$$117;
					egl.setLocalFunctionVariable("checkBoxes", checkBoxes, "egl.ui.rui.Widget[]");
					var checkBoxCount = 0;
					egl.addLocalFunctionVariable("checkBoxCount", checkBoxCount, "int", "checkBoxCount");
					egl.atLine(this.eze$$fileName,924,37218,20, this);
					var ezert$$118 = 0;
					ezert$$118 = checkBoxes.getSize();
					egl.atLine(this.eze$$fileName,924,37198,41, this);
					checkBoxCount = ezert$$118;
					egl.setLocalFunctionVariable("checkBoxCount", checkBoxCount, "int");
					egl.atLine(this.eze$$fileName,925,37252,522, this);
					{
						try{egl.enterBlock();
							var c = 0;
							egl.addLocalFunctionVariable("c", c, "int", "c");
							c = 1;
							egl.setLocalFunctionVariable("c", c, "int");
							for ( ; (c <= checkBoxCount); c = (c + 1) )
							{
								egl.setLocalFunctionVariable("c", c, "int");
								try{egl.enterBlock();
									var row = 0;
									egl.addLocalFunctionVariable("row", row, "int", "row");
									egl.atLine(this.eze$$fileName,926,37313,33, this);
									var ezert$$119 = null;
									ezert$$119 = egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].getAttribute("row" );
									egl.atLine(this.eze$$fileName,926,37303,44, this);
									row = egl.convertAnyToInt(egl.boxAny(ezert$$119),false);
									egl.setLocalFunctionVariable("row", row, "int");
									egl.atLine(this.eze$$fileName,927,37364,394, this);
									if ( ((row > 0) && (egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].getID() == ((egl.checkNull(this.grid, "grid").getID() + "-checkbox-") + (row).toString()))) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,928,37457,26, this);
											var ezert$$120 = false;
											ezert$$120 = this.util.getChecked(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])) );
											egl.atLine(this.eze$$fileName,928,37454,284, this);
											if ( ezert$$120 ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,929,37509,44, this);
													egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].setAttribute("checked", true );
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,931,37603,45, this);
													egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].setAttribute("checked", false );
													egl.atLine(this.eze$$fileName,932,37673,41, this);
													egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].removeAttribute("checked" );
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,925,37252,522, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,911,36615,1180, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"checkSelection": function( checkBox ) {
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
		try { egl.enter("checkSelection",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("checkBox", checkBox, "egl.ui.rui.Widget", "checkBox");
			var inputs = null;
			egl.addLocalFunctionVariable("inputs", inputs, "egl.ui.rui.Widget[]", "!inputs");
			var ezert$$121 = null;
			ezert$$121 = egl.checkNull(this.grid, "grid").getElementsByTagName("input" );
			egl.atLine(this.eze$$fileName,952,38191,53, this);
			inputs = ezert$$121;
			egl.setLocalFunctionVariable("inputs", inputs, "egl.ui.rui.Widget[]");
			var inputCount = 0;
			egl.addLocalFunctionVariable("inputCount", inputCount, "int", "inputCount");
			egl.atLine(this.eze$$fileName,953,38271,16, this);
			var ezert$$122 = 0;
			ezert$$122 = inputs.getSize();
			egl.atLine(this.eze$$fileName,953,38254,34, this);
			inputCount = ezert$$122;
			egl.setLocalFunctionVariable("inputCount", inputCount, "int");
			egl.atLine(this.eze$$fileName,954,38298,390, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= inputCount); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,955,38343,332, this);
							if ( (egl.checkNull(inputs, "inputs")[inputs.checkIndex((n)-1)].getID() == checkBox.getID()) ) {
								try{egl.enterBlock();
									var isChecked = false;
									egl.addLocalFunctionVariable("isChecked", isChecked, "boolean", "isChecked");
									egl.atLine(this.eze$$fileName,956,38417,32, this);
									var ezert$$123 = null;
									ezert$$123 = checkBox.getAttribute("checked" );
									egl.atLine(this.eze$$fileName,956,38392,68, this);
									isChecked = (("" + egl.convertAnyToString(egl.boxAny(ezert$$123),false)) == "true");
									egl.setLocalFunctionVariable("isChecked", isChecked, "boolean");
									var row = 0;
									egl.addLocalFunctionVariable("row", row, "int", "row");
									egl.atLine(this.eze$$fileName,957,38488,42, this);
									var ezert$$124 = null;
									ezert$$124 = checkBox.getParent().getParent().getAttribute("row" );
									egl.atLine(this.eze$$fileName,957,38478,53, this);
									row = egl.convertAnyToInt(egl.boxAny(ezert$$124),false);
									egl.setLocalFunctionVariable("row", row, "int");
									egl.atLine(this.eze$$fileName,958,38565,38, this);
									this.util.setChecked(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), isChecked );
									egl.atLine(this.eze$$fileName,959,38621,32, this);
									this.notifyCheckboxChangeListeners();
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,954,38298,390, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,951,38129,568, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"notifyCheckboxChangeListeners": function() {
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
		try { egl.enter("notifyCheckboxChangeListeners",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,965,38766,99, this);
			{
				try{egl.enterBlock();
					var k = 0;
					egl.addLocalFunctionVariable("k", k, "int", "k");
					k = 1;
					egl.setLocalFunctionVariable("k", k, "int");
					for ( ; (k <= this.checkboxListeners.getSize()); k = (k + 1) )
					{
						egl.setLocalFunctionVariable("k", k, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,966,38825,27, this);
							egl.checkNull(this.checkboxListeners, "checkboxListeners")[this.checkboxListeners.checkIndex((k)-1)]( this );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,965,38766,99, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,964,38709,171, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setChecked": function( checked ) {
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
		try { egl.enter("setChecked",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("checked", checked, "any[]", "!checked");
			egl.atLine(this.eze$$fileName,971,38947,18, this);
			this.setAllUnchecked();
			var len = 0;
			egl.addLocalFunctionVariable("len", len, "int", "len");
			egl.atLine(this.eze$$fileName,972,38985,17, this);
			var ezert$$125 = 0;
			ezert$$125 = checked.getSize();
			egl.atLine(this.eze$$fileName,972,38975,28, this);
			len = ezert$$125;
			egl.setLocalFunctionVariable("len", len, "int");
			egl.atLine(this.eze$$fileName,973,39018,85, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= len); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,974,39056,34, this);
							this.util.setChecked(egl.unboxAny(egl.boxAny(egl.checkNull(checked, "checked")[checked.checkIndex((n)-1)])), true );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,973,39018,85, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,976,39113,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,977,39142,32, this);
			this.notifyCheckboxChangeListeners();
			egl.atLine(this.eze$$fileName,970,38892,291, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getChecked": function() {
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
		try { egl.enter("getChecked",this,arguments,eze$$updater);
			var $result = null;
			var result = (function(){ var ezert$$126= []; ezert$$126.setType( "A;" );for (var i=0; i < 0; i++) {
					ezert$$126[ i ] = null;
				}
				// no max size set for this array
			return ezert$$126;})();
			egl.addLocalFunctionVariable("result", result, "any[]", "!result");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,982,39273,14, this);
			var ezert$$127 = 0;
			ezert$$127 = this.data.getSize();
			egl.atLine(this.eze$$fileName,982,39261,27, this);
			count = ezert$$127;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,983,39298,146, this);
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
							egl.atLine(this.eze$$fileName,984,39341,24, this);
							var ezert$$128 = false;
							ezert$$128 = this.util.getChecked(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)])) );
							egl.atLine(this.eze$$fileName,984,39338,93, this);
							if ( ezert$$128 ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,985,39384,30, this);
									result.appendElement( egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]) );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,983,39298,146, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,988,39454,15, this);
			$result = result;
			egl.setLocalFunctionVariable("ANY[]", $result, "any[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAllUnchecked": function() {
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
		try { egl.enter("setAllUnchecked",this,arguments,eze$$updater);
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,992,39543,14, this);
			var ezert$$129 = 0;
			ezert$$129 = this.data.getSize();
			egl.atLine(this.eze$$fileName,992,39531,27, this);
			count = ezert$$129;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,993,39568,172, this);
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
							var object = null;
							egl.addLocalFunctionVariable("object", object, "any", "object");
							egl.atLine(this.eze$$fileName,994,39608,21, this);
							object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]);
							egl.setLocalFunctionVariable("object", object, "any");
							egl.atLine(this.eze$$fileName,995,39643,84, this);
							if ( (object != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,996,39679,31, this);
									this.util.setChecked(egl.unboxAny(object), false );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,993,39568,172, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,991,39490,259, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"uncheckAll": function() {
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
		try { egl.enter("uncheckAll",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,1002,39789,18, this);
			this.setAllUnchecked();
			egl.atLine(this.eze$$fileName,1003,39814,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,1004,39840,32, this);
			this.notifyCheckboxChangeListeners();
			egl.atLine(this.eze$$fileName,1001,39761,120, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAllChecked": function() {
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
		try { egl.enter("setAllChecked",this,arguments,eze$$updater);
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,1008,39938,14, this);
			var ezert$$130 = 0;
			ezert$$130 = this.data.getSize();
			egl.atLine(this.eze$$fileName,1008,39926,27, this);
			count = ezert$$130;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,1009,39963,171, this);
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
							var object = null;
							egl.addLocalFunctionVariable("object", object, "any", "object");
							egl.atLine(this.eze$$fileName,1010,40003,21, this);
							object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]);
							egl.setLocalFunctionVariable("object", object, "any");
							egl.atLine(this.eze$$fileName,1011,40038,83, this);
							if ( (object != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1012,40074,30, this);
									this.util.setChecked(egl.unboxAny(object), true );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1009,39963,171, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1007,39890,250, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"checkAll": function() {
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
		try { egl.enter("checkAll",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,1018,40177,16, this);
			this.setAllChecked();
			egl.atLine(this.eze$$fileName,1019,40202,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,1020,40230,32, this);
			this.notifyCheckboxChangeListeners();
			egl.atLine(this.eze$$fileName,1017,40149,122, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setSelectionMode": function( value ) {
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
		try { egl.enter("setSelectionMode",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "int", "value");
			egl.atLine(this.eze$$fileName,1030,40496,22, this);
			this.selectionMode = value;
			egl.atLine(this.eze$$fileName,1031,40528,19, this);
			this.setAllDeselected();
			egl.atLine(this.eze$$fileName,1032,40557,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,1029,40447,138, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getSelectionMode": function() {
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
		try { egl.enter("getSelectionMode",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1036,40643,22, this);
			$result = this.selectionMode;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"selectRow": function( div, selected ) {
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
		try { egl.enter("selectRow",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("div", div, "egl.ui.rui.Widget", "div");
			egl.addLocalFunctionVariable("selected", selected, "boolean", "selected");
			var row = 0;
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.atLine(this.eze$$fileName,1040,40756,23, this);
			var ezert$$131 = null;
			ezert$$131 = div.getAttribute("row" );
			egl.atLine(this.eze$$fileName,1040,40746,34, this);
			row = egl.convertAnyToInt(egl.boxAny(ezert$$131),false);
			egl.setLocalFunctionVariable("row", row, "int");
			egl.atLine(this.eze$$fileName,1041,40790,315, this);
			if ( (row > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1042,40815,277, this);
					if ( selected ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1043,40845,34, this);
							this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), true );
							egl.atLine(this.eze$$fileName,1044,40897,43, this);
							this.addClass(div, "EglRuiDataGridRowSelected" );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1046,40976,35, this);
							this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), false );
							egl.atLine(this.eze$$fileName,1047,41029,46, this);
							this.removeClass(div, "EglRuiDataGridRowSelected" );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1039,40682,432, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"clickGrid": function( e ) {
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
		try { egl.enter("clickGrid",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,1057,41242,14, this);
			this.lastEvent = e;
			var widget = null;
			egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
			egl.atLine(this.eze$$fileName,1058,41290,16, this);
			var ezert$$132 = null;
			ezert$$132 = this.getCellWidget(e );
			egl.atLine(this.eze$$fileName,1058,41274,33, this);
			widget = ezert$$132;
			egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
			var eze_Cond_Temp_7 = false;
			egl.atLine(this.eze$$fileName,1059,41317,135, this);
			eze_Cond_Temp_7 = true;
			egl.atLine(this.eze$$fileName,1059,41317,135, this);
			while ( eze_Cond_Temp_7 ) {
				try{egl.enterBlock();
					var eze_Cond_Temp_8 = false;
					egl.atLine(this.eze$$fileName,1059,41323,78, this);
					if ( (widget.getClass() != "EglRuiDataGrid") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1059,41359,29, this);
							var ezert$$133 = null;
							ezert$$133 = widget.getAttribute("column" );
							egl.atLine(this.eze$$fileName,1059,41323,78, this);
							if ( (egl.convertAnyToInt(egl.boxAny(ezert$$133),false) == 0) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1059,41323,78, this);
									eze_Cond_Temp_8 = true;
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1059,41323,78, this);
									eze_Cond_Temp_8 = false;
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1059,41323,78, this);
							eze_Cond_Temp_8 = false;
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,1059,41317,135, this);
					if ( eze_Cond_Temp_8 ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1060,41416,23, this);
							widget = widget.getParent();
							egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1059,41317,135, this);
							eze_Cond_Temp_7 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
				egl.atLine(this.eze$$fileName,1059,41317,135, this);
			}
			egl.atLine(this.eze$$fileName,1062,41465,42, this);
			var ezert$$134 = 0;
			ezert$$134 = egl.egl.core.$StrLib.indexOf( (widget.getID()), this.internalID);
			egl.atLine(this.eze$$fileName,1062,41462,82, this);
			if ( (ezert$$134 != 1) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1063,41524,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1065,41554,1605, this);
			if ( (widget.getClass() != "EglRuiDataGrid") ) {
				try{egl.enterBlock();
					var row = 0;
					egl.addLocalFunctionVariable("row", row, "int", "row");
					egl.atLine(this.eze$$fileName,1066,41614,26, this);
					var ezert$$135 = null;
					ezert$$135 = widget.getAttribute("row" );
					egl.atLine(this.eze$$fileName,1066,41604,37, this);
					row = egl.convertAnyToInt(egl.boxAny(ezert$$135),false);
					egl.setLocalFunctionVariable("row", row, "int");
					egl.atLine(this.eze$$fileName,1067,41655,1491, this);
					if ( ((row > 0) && (this.selectionMode != 0)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1068,41735,1174, this);
							if ( (this.selectionMode == 1) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1069,41806,19, this);
									this.setAllDeselected();
									egl.atLine(this.eze$$fileName,1070,41847,34, this);
									this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), true );
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1072,41925,919, this);
									if ( (e.ctrlKey || e.metaKey) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1073,41980,27, this);
											var ezert$$136 = false;
											ezert$$136 = this.util.getSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])) );
											egl.atLine(this.eze$$fileName,1073,41977,219, this);
											if ( ezert$$136 ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,1074,42038,35, this);
													this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), false );
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,1076,42133,34, this);
													this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), true );
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1079,42248,571, this);
											if ( (e.shiftKey && (this.lastSelectedRow > 0)) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,1080,42315,19, this);
													this.setAllDeselected();
													var start = 0;
													egl.addLocalFunctionVariable("start", start, "int", "start");
													egl.atLine(this.eze$$fileName,1081,42376,33, this);
													var ezert$$137 = 0;
													ezert$$137 = Math.min( row ,this.lastSelectedRow );
													egl.atLine(this.eze$$fileName,1081,42364,46, this);
													start = ezert$$137;
													egl.setLocalFunctionVariable("start", start, "int");
													var finish = 0;
													egl.addLocalFunctionVariable("finish", finish, "int", "finish");
													egl.atLine(this.eze$$fileName,1082,42453,33, this);
													var ezert$$138 = 0;
													ezert$$138 = Math.max( row ,this.lastSelectedRow );
													egl.atLine(this.eze$$fileName,1082,42440,47, this);
													finish = ezert$$138;
													egl.setLocalFunctionVariable("finish", finish, "int");
													egl.atLine(this.eze$$fileName,1083,42517,130, this);
													{
														try{egl.enterBlock();
															var n = 0;
															egl.addLocalFunctionVariable("n", n, "int", "n");
															n = start;
															egl.setLocalFunctionVariable("n", n, "int");
															for ( ; (n <= finish); n = (n + 1) )
															{
																egl.setLocalFunctionVariable("n", n, "int");
																try{egl.enterBlock();
																	egl.atLine(this.eze$$fileName,1084,42582,32, this);
																	this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)])), true );
																}finally{egl.exitBlock();}
																egl.atLine(this.eze$$fileName,1083,42517,130, this);
															}
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,1087,42707,19, this);
													this.setAllDeselected();
													egl.atLine(this.eze$$fileName,1088,42756,34, this);
													this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), true );
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,1091,42866,22, this);
									this.lastSelectedRow = row;
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,1093,42927,19, this);
							this.updateHighlights();
							egl.atLine(this.eze$$fileName,1094,42964,33, this);
							this.notifySelectionChangeListeners();
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1096,43033,96, this);
							if ( ((row == 0) && this.enableSorting) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1097,43089,19, this);
									this.sortColumn(widget );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1056,41194,1974, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"notifySelectionChangeListeners": function() {
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
		try { egl.enter("notifySelectionChangeListeners",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,1104,43234,101, this);
			{
				try{egl.enterBlock();
					var k = 0;
					egl.addLocalFunctionVariable("k", k, "int", "k");
					k = 1;
					egl.setLocalFunctionVariable("k", k, "int");
					for ( ; (k <= this.selectionListeners.getSize()); k = (k + 1) )
					{
						egl.setLocalFunctionVariable("k", k, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1105,43294,28, this);
							egl.checkNull(this.selectionListeners, "selectionListeners")[this.selectionListeners.checkIndex((k)-1)]( this );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1104,43234,101, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1103,43176,174, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAllDeselected": function() {
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
		try { egl.enter("setAllDeselected",this,arguments,eze$$updater);
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,1110,43406,14, this);
			var ezert$$139 = 0;
			ezert$$139 = this.data.getSize();
			egl.atLine(this.eze$$fileName,1110,43394,27, this);
			count = ezert$$139;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,1111,43431,173, this);
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
							var object = null;
							egl.addLocalFunctionVariable("object", object, "any", "object");
							egl.atLine(this.eze$$fileName,1112,43471,21, this);
							object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]);
							egl.setLocalFunctionVariable("object", object, "any");
							egl.atLine(this.eze$$fileName,1113,43506,85, this);
							if ( (object != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1114,43542,32, this);
									this.util.setSelected(egl.unboxAny(object), false );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1111,43431,173, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1109,43355,255, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"deselectAll": function() {
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
		try { egl.enter("deselectAll",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,1120,43648,19, this);
			this.setAllDeselected();
			egl.atLine(this.eze$$fileName,1121,43674,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,1122,43704,33, this);
			this.notifySelectionChangeListeners();
			egl.atLine(this.eze$$fileName,1119,43619,127, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAllSelected": function() {
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
		try { egl.enter("setAllSelected",this,arguments,eze$$updater);
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,1126,43810,14, this);
			var ezert$$140 = 0;
			ezert$$140 = this.data.getSize();
			egl.atLine(this.eze$$fileName,1126,43798,27, this);
			count = ezert$$140;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,1127,43835,172, this);
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
							var object = null;
							egl.addLocalFunctionVariable("object", object, "any", "object");
							egl.atLine(this.eze$$fileName,1128,43875,21, this);
							object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]);
							egl.setLocalFunctionVariable("object", object, "any");
							egl.atLine(this.eze$$fileName,1129,43910,84, this);
							if ( (object != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1130,43946,31, this);
									this.util.setSelected(egl.unboxAny(object), true );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1127,43835,172, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1125,43758,258, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"selectAll": function() {
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
		try { egl.enter("selectAll",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,1136,44054,17, this);
			this.setAllSelected();
			egl.atLine(this.eze$$fileName,1137,44081,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,1138,44110,33, this);
			this.notifySelectionChangeListeners();
			egl.atLine(this.eze$$fileName,1135,44024,128, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"addClass": function( widget, ezekw$$class ) {
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
		try { egl.enter("addClass",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
			egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
			egl.atLine(this.eze$$fileName,1142,44230,27, this);
			this.removeClass(widget, ezekw$$class );
			egl.atLine(this.eze$$fileName,1143,44267,28, this);
			widget.setClass( (widget.getClass() + (" " + ezekw$$class)) );
			egl.atLine(this.eze$$fileName,1141,44160,144, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"removeClass": function( widget, ezekw$$class ) {
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
		try { egl.enter("removeClass",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
			egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
			var s = "";
			egl.addLocalFunctionVariable("s", s, "string", "s");
			egl.atLine(this.eze$$fileName,1147,44385,24, this);
			s = widget.getClass();
			egl.setLocalFunctionVariable("s", s, "string");
			var index = 0;
			egl.addLocalFunctionVariable("index", index, "int", "index");
			egl.atLine(this.eze$$fileName,1148,44431,24, this);
			var ezert$$141 = 0;
			ezert$$141 = egl.egl.core.$StrLib.indexOf( s, ezekw$$class);
			egl.setLocalFunctionVariable("s", s, "string");
			egl.atLine(this.eze$$fileName,1148,44419,37, this);
			index = ezert$$141;
			egl.setLocalFunctionVariable("index", index, "int");
			var ml = 0;
			egl.addLocalFunctionVariable("ml", ml, "int", "ml");
			egl.atLine(this.eze$$fileName,1149,44475,26, this);
			var ezert$$142 = 0;
			ezert$$142 = egl.egl.core.$StrLib.textLen( ezekw$$class);
			egl.atLine(this.eze$$fileName,1149,44466,36, this);
			ml = ezert$$142;
			egl.setLocalFunctionVariable("ml", ml, "int");
			var sl = 0;
			egl.addLocalFunctionVariable("sl", sl, "int", "sl");
			egl.atLine(this.eze$$fileName,1150,44521,22, this);
			var ezert$$143 = 0;
			ezert$$143 = egl.egl.core.$StrLib.textLen( s);
			egl.atLine(this.eze$$fileName,1150,44512,32, this);
			sl = ezert$$143;
			egl.setLocalFunctionVariable("sl", sl, "int");
			var prefix = "";
			egl.addLocalFunctionVariable("prefix", prefix, "string", "prefix");
			egl.atLine(this.eze$$fileName,1151,44554,19, this);
			prefix = "";
			egl.setLocalFunctionVariable("prefix", prefix, "string");
			var postfix = "";
			egl.addLocalFunctionVariable("postfix", postfix, "string", "postfix");
			egl.atLine(this.eze$$fileName,1152,44583,20, this);
			postfix = "";
			egl.setLocalFunctionVariable("postfix", postfix, "string");
			egl.atLine(this.eze$$fileName,1153,44613,243, this);
			if ( (index > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1154,44646,67, this);
					if ( (index > 1) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1155,44673,26, this);
							prefix = s.substring( 1-1,(index - 1));
							egl.setLocalFunctionVariable("prefix", prefix, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,1157,44724,77, this);
					if ( ((index + ml) < sl) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1158,44757,30, this);
							postfix = s.substring( (index + ml)-1,sl);
							egl.setLocalFunctionVariable("postfix", postfix, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,1160,44812,31, this);
					widget.setClass( (prefix + postfix) );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1146,44312,553, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setSelection": function( selection ) {
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
		try { egl.enter("setSelection",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("selection", selection, "any[]", "!selection");
			egl.atLine(this.eze$$fileName,1165,44924,84, this);
			if ( (this.selectionMode == 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1166,44988,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1168,45018,19, this);
			this.setAllDeselected();
			var len = 0;
			egl.addLocalFunctionVariable("len", len, "int", "len");
			egl.atLine(this.eze$$fileName,1169,45057,19, this);
			var ezert$$144 = 0;
			ezert$$144 = selection.getSize();
			egl.atLine(this.eze$$fileName,1169,45047,30, this);
			len = ezert$$144;
			egl.setLocalFunctionVariable("len", len, "int");
			egl.atLine(this.eze$$fileName,1170,45087,84, this);
			if ( (this.selectionMode == 1) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1171,45150,8, this);
					len = 1;
					egl.setLocalFunctionVariable("len", len, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1173,45181,88, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= len); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1174,45219,37, this);
							this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(selection, "selection")[selection.checkIndex((n)-1)])), true );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1173,45181,88, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1176,45279,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,1177,45308,33, this);
			this.notifySelectionChangeListeners();
			egl.atLine(this.eze$$fileName,1164,44873,477, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getSelection": function() {
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
		try { egl.enter("getSelection",this,arguments,eze$$updater);
			var $result = null;
			var result = (function(){ var ezert$$145= []; ezert$$145.setType( "A;" );for (var i=0; i < 0; i++) {
					ezert$$145[ i ] = null;
				}
				// no max size set for this array
			return ezert$$145;})();
			egl.addLocalFunctionVariable("result", result, "any[]", "!result");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,1182,45442,14, this);
			var ezert$$146 = 0;
			ezert$$146 = this.data.getSize();
			egl.atLine(this.eze$$fileName,1182,45430,27, this);
			count = ezert$$146;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,1183,45467,147, this);
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
							egl.atLine(this.eze$$fileName,1184,45510,25, this);
							var ezert$$147 = false;
							ezert$$147 = this.util.getSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)])) );
							egl.atLine(this.eze$$fileName,1184,45507,94, this);
							if ( ezert$$147 ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1185,45554,30, this);
									result.appendElement( egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]) );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1183,45467,147, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1188,45624,15, this);
			$result = result;
			egl.setLocalFunctionVariable("ANY[]", $result, "any[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setEnableSorting": function( value ) {
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
		try { egl.enter("setEnableSorting",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "boolean", "value");
			egl.atLine(this.eze$$fileName,1200,45934,22, this);
			this.enableSorting = value;
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,1201,45984,17, this);
			var ezert$$148 = 0;
			ezert$$148 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,1201,45966,36, this);
			columnCount = ezert$$148;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			egl.atLine(this.eze$$fileName,1202,46012,170, this);
			{
				try{egl.enterBlock();
					var column = 0;
					egl.addLocalFunctionVariable("column", column, "int", "column");
					column = 1;
					egl.setLocalFunctionVariable("column", column, "int");
					for ( ; (column <= columnCount); column = (column + 1) )
					{
						egl.setLocalFunctionVariable("column", column, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1203,46063,38, this);
							egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").enableSorting = value;
							egl.atLine(this.eze$$fileName,1204,46115,54, this);
							egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").sortDirection = 0;
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1202,46012,170, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1199,45881,310, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getEnableSorting": function() {
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
		try { egl.enter("getEnableSorting",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1209,46253,22, this);
			$result = this.enableSorting;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"sortColumn": function( widget ) {
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
		try { egl.enter("sortColumn",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.atLine(this.eze$$fileName,1213,46360,29, this);
			var ezert$$149 = null;
			ezert$$149 = widget.getAttribute("column" );
			egl.atLine(this.eze$$fileName,1213,46347,43, this);
			column = egl.convertAnyToInt(egl.boxAny(ezert$$149),false);
			egl.setLocalFunctionVariable("column", column, "int");
			egl.atLine(this.eze$$fileName,1214,46400,157, this);
			while ( ((column == 0) && (widget.getClass() != "EglRuiDataGrid")) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1215,46468,23, this);
					widget = widget.getParent();
					egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,1216,46514,29, this);
					var ezert$$150 = null;
					ezert$$150 = widget.getAttribute("column" );
					egl.atLine(this.eze$$fileName,1216,46505,39, this);
					column = egl.convertAnyToInt(egl.boxAny(ezert$$150),false);
					egl.setLocalFunctionVariable("column", column, "int");
				}finally{egl.exitBlock();}
				egl.atLine(this.eze$$fileName,1214,46400,157, this);
			}
			egl.atLine(this.eze$$fileName,1218,46567,1205, this);
			if ( ((column != 0) && egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").enableSorting) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1219,46641,22, this);
					this.sortedColumn = column;
					egl.atLine(this.eze$$fileName,1220,46677,160, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= this.columns.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1221,46733,87, this);
									if ( (n != column) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1222,46770,29, this);
											egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").sortDirection = 0;
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,1220,46677,160, this);
							}
						}finally{egl.exitBlock();}
					}
					var c = null;
					egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
					egl.atLine(this.eze$$fileName,1225,46851,35, this);
					c = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
					egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
					egl.atLine(this.eze$$fileName,1226,46912,191, this);
					if ( (egl.checkNull(c, "c").sortDirection == 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1227,46974,38, this);
							egl.checkNull(c, "c").sortDirection = 2;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1229,47048,38, this);
							egl.checkNull(c, "c").sortDirection = (3 - egl.checkNull(c, "c").sortDirection);
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,1231,47117,639, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1232,47135,307, this);
							if ( (egl.checkNull(c, "c").columnComparator != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1233,47191,97, this);
									var ezert$$151 = null;
									ezert$$151 = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(c, "c").name, (egl.checkNull(c, "c").sortDirection == 2), egl.checkNull(c, "c").ignoreCase, function() {
										var ezert$$152 = null;
										
										ezert$$152 = egl.checkNull(c, "c").columnComparator;
									; return ezert$$152;}.call(this) ));
									egl.atLine(this.eze$$fileName,1233,47184,105, this);
									this.data = ezert$$151;
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1235,47337,83, this);
									var ezert$$153 = null;
									ezert$$153 = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(c, "c").name, (egl.checkNull(c, "c").sortDirection == 2), egl.checkNull(c, "c").ignoreCase, null ));
									egl.atLine(this.eze$$fileName,1235,47330,91, this);
									this.data = ezert$$153;
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,1237,47460,9, this);
							this.render();
							egl.atLine(this.eze$$fileName,1238,47487,110, this);
							{
								try{egl.enterBlock();
									var k = 0;
									egl.addLocalFunctionVariable("k", k, "int", "k");
									k = 1;
									egl.setLocalFunctionVariable("k", k, "int");
									for ( ; (k <= this.sortListeners.getSize()); k = (k + 1) )
									{
										egl.setLocalFunctionVariable("k", k, "int");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1239,47550,26, this);
											egl.checkNull(this.sortListeners, "sortListeners")[this.sortListeners.checkIndex((k)-1)]( this, c );
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,1238,47487,110, this);
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$154 )
					{
						{
							if (ezert$$154 instanceof egl.egl.debug.DebugTermination){throw ezert$$154;}
							if (!(ezert$$154 instanceof egl.egl.core.AnyException)) {
								ezert$$154 = egl.makeExceptionFromCaughtObject(ezert$$154);
							}
							var e = ezert$$154;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1242,47656,83, this);
									throw (function () {
										var ezert$$155 = egl.createRuntimeException();
										egl.atLine(this.eze$$fileName,1242,47684,53, this);
										egl.checkNull(ezert$$155, "ezert$$155").message = ((("Sort fail " + egl.checkNull(e, "e").messageID) + " : ") + egl.checkNull(e, "e").message);
										return ezert$$155;
									}).call(this);
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1212,46292,1489, this);
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
			egl.atLine(this.eze$$fileName,1254,47990,19, this);
			this.setData(this.data );
			egl.atLine(this.eze$$fileName,1253,47963,55, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getData": function() {
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
		try { egl.enter("getData",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,1258,48069,18, this);
			$result = this.data;
			egl.setLocalFunctionVariable("ANY[]", $result, "any[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCellWidget": function( e ) {
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
		try { egl.enter("getCellWidget",this,arguments,eze$$updater);
			var $result = null;
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,1262,48171,25, this);
			var ezert$$156 = null;
			ezert$$156 = this.util.getOriginalTarget(e );
			egl.atLine(this.eze$$fileName,1262,48164,34, this);
			$result = ezert$$156;
			egl.setLocalFunctionVariable("Widget", $result, "egl.ui.rui.Widget");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getColumn": function( td ) {
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
		try { egl.enter("getColumn",this,arguments,eze$$updater);
			var $result = null;
			egl.addLocalFunctionVariable("td", td, "egl.ui.rui.Widget", "td");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.atLine(this.eze$$fileName,1266,48291,25, this);
			var ezert$$157 = null;
			ezert$$157 = td.getAttribute("column" );
			egl.atLine(this.eze$$fileName,1266,48278,39, this);
			column = egl.convertAnyToInt(egl.boxAny(ezert$$157),false);
			egl.setLocalFunctionVariable("column", column, "int");
			egl.atLine(this.eze$$fileName,1267,48332,25, this);
			$result = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
			egl.setLocalFunctionVariable("DataGridColumn", $result, "com.ibm.egl.rui.widgets.DataGridColumn");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCell": function( row, fieldName ) {
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
		try { egl.enter("getCell",this,arguments,eze$$updater);
			var $result = null;
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.addLocalFunctionVariable("fieldName", fieldName, "string", "fieldName");
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			var ezert$$158 = null;
			ezert$$158 = egl.checkNull(this.grid, "grid").getElementsByTagName("div" );
			egl.atLine(this.eze$$fileName,1271,48456,48, this);
			tds = ezert$$158;
			egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,1272,48526,13, this);
			var ezert$$159 = 0;
			ezert$$159 = tds.getSize();
			egl.atLine(this.eze$$fileName,1272,48514,26, this);
			count = ezert$$159;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,1273,48550,401, this);
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
							var rowNum = 0;
							egl.addLocalFunctionVariable("rowNum", rowNum, "int", "rowNum");
							egl.atLine(this.eze$$fileName,1274,48603,35, this);
							var ezert$$160 = 0;
							ezert$$160 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "row" );
							egl.atLine(this.eze$$fileName,1274,48590,49, this);
							rowNum = ezert$$160;
							egl.setLocalFunctionVariable("rowNum", rowNum, "int");
							var columnNum = 0;
							egl.addLocalFunctionVariable("columnNum", columnNum, "int", "columnNum");
							egl.atLine(this.eze$$fileName,1275,48669,38, this);
							var ezert$$161 = 0;
							ezert$$161 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "column" );
							egl.atLine(this.eze$$fileName,1275,48653,55, this);
							columnNum = ezert$$161;
							egl.setLocalFunctionVariable("columnNum", columnNum, "int");
							var eze_Cond_Temp_8 = false;
							egl.atLine(this.eze$$fileName,1276,48725,93, this);
							if ( ((rowNum == row) && (columnNum > 0)) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1277,48801,17, this);
									var ezert$$162 = 0;
									ezert$$162 = this.columns.getSize();
									egl.atLine(this.eze$$fileName,1276,48725,93, this);
									if ( (columnNum <= ezert$$162) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1276,48725,93, this);
											eze_Cond_Temp_8 = true;
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1276,48725,93, this);
											eze_Cond_Temp_8 = false;
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1276,48725,93, this);
									eze_Cond_Temp_8 = false;
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,1276,48722,216, this);
							if ( (eze_Cond_Temp_8 && (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((columnNum)-1)], "columns[columnNum]").name == fieldName)) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1279,48906,15, this);
									$result = egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)];
									egl.setLocalFunctionVariable("Widget", $result, "egl.ui.rui.Widget");
									{ if (!egl.debugg) egl.leave(); return $result;}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1273,48550,401, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1282,48961,13, this);
			$result = null;
			egl.setLocalFunctionVariable("Widget", $result, "egl.ui.rui.Widget");
			{ if (!egl.debugg) egl.leave(); return $result;}
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
			var $result = null;
			egl.atLine(this.eze$$fileName,1286,49040,17, this);
			$result = this.columns;
			egl.setLocalFunctionVariable("DataGridColumn[]", $result, "com.ibm.egl.rui.widgets.DataGridColumn[]");
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
			egl.addLocalFunctionVariable("columns", columns, "com.ibm.egl.rui.widgets.DataGridColumn[]", "!columns");
			egl.atLine(this.eze$$fileName,1290,49123,23, this);
			this.columns = columns;
			egl.atLine(this.eze$$fileName,1291,49152,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1289,49069,98, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowCheckBoxes": function() {
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
		try { egl.enter("getShowCheckBoxes",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1295,49227,24, this);
			$result = this.showCheckBoxes;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowCheckBoxes": function( showCheckBoxes ) {
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
		try { egl.enter("setShowCheckBoxes",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("showCheckBoxes", showCheckBoxes, "boolean", "showCheckBoxes");
			egl.atLine(this.eze$$fileName,1299,49332,37, this);
			this.showCheckBoxes = showCheckBoxes;
			egl.atLine(this.eze$$fileName,1300,49376,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1298,49272,122, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowScrollbar": function() {
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
		try { egl.enter("getShowScrollbar",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1304,49458,23, this);
			$result = this.showScrollbar;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowScrollbar": function( showScrollbar ) {
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
		try { egl.enter("setShowScrollbar",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("showScrollbar", showScrollbar, "boolean", "showScrollbar");
			egl.atLine(this.eze$$fileName,1308,49560,35, this);
			this.showScrollbar = showScrollbar;
			egl.atLine(this.eze$$fileName,1309,49602,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1307,49502,118, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getFixFirstColumn": function() {
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
		try { egl.enter("getFixFirstColumn",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1313,49685,24, this);
			$result = this.fixFirstColumn;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setFixFirstColumn": function( fixFirstColumn ) {
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
		try { egl.enter("setFixFirstColumn",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("fixFirstColumn", fixFirstColumn, "boolean", "fixFirstColumn");
			egl.atLine(this.eze$$fileName,1317,49790,37, this);
			this.fixFirstColumn = fixFirstColumn;
			egl.atLine(this.eze$$fileName,1318,49834,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1316,49730,122, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowButtonBar": function() {
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
		try { egl.enter("getShowButtonBar",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1322,49916,23, this);
			$result = this.showButtonBar;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowButtonBar": function( showButtonBar ) {
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
		try { egl.enter("setShowButtonBar",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("showButtonBar", showButtonBar, "boolean", "showButtonBar");
			egl.atLine(this.eze$$fileName,1326,50018,35, this);
			this.showButtonBar = showButtonBar;
			egl.atLine(this.eze$$fileName,1327,50060,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1325,49960,118, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowHeader": function() {
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
		try { egl.enter("getShowHeader",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1331,50139,20, this);
			$result = this.showHeader;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowHeader": function( showHeader ) {
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
		try { egl.enter("setShowHeader",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("showHeader", showHeader, "boolean", "showHeader");
			egl.atLine(this.eze$$fileName,1335,50232,29, this);
			this.showHeader = showHeader;
			egl.atLine(this.eze$$fileName,1336,50268,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1334,50180,106, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getManageEditorBehaviors": function() {
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
		try { egl.enter("getManageEditorBehaviors",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1340,50358,31, this);
			$result = this.manageEditorBehaviors;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setManageEditorBehaviors": function( manageEditorBehaviors ) {
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
		try { egl.enter("setManageEditorBehaviors",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("manageEditorBehaviors", manageEditorBehaviors, "boolean", "manageEditorBehaviors");
			egl.atLine(this.eze$$fileName,1344,50484,51, this);
			this.manageEditorBehaviors = manageEditorBehaviors;
			egl.atLine(this.eze$$fileName,1345,50542,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1343,50410,150, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getEncodeValue": function() {
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
		try { egl.enter("getEncodeValue",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1349,50623,21, this);
			$result = this.encodeValue;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setEncodeValue": function( encodeValue ) {
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
		try { egl.enter("setEncodeValue",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("encodeValue", encodeValue, "boolean", "encodeValue");
			egl.atLine(this.eze$$fileName,1353,50719,31, this);
			this.encodeValue = encodeValue;
			egl.atLine(this.eze$$fileName,1354,50757,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1352,50665,110, this);
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
			egl.atLine(this.eze$$fileName,1358,50833,21, this);
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
			egl.atLine(this.eze$$fileName,1362,50925,31, this);
			this.cellPadding = cellPadding;
			egl.atLine(this.eze$$fileName,1363,50963,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1361,50875,106, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCellBorder": function() {
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
		try { egl.enter("getCellBorder",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1367,51038,20, this);
			$result = this.cellBorder;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setCellBorder": function( cellBorder ) {
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
		try { egl.enter("setCellBorder",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("cellBorder", cellBorder, "int", "cellBorder");
			egl.atLine(this.eze$$fileName,1371,51127,29, this);
			this.cellBorder = cellBorder;
			egl.atLine(this.eze$$fileName,1372,51163,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1370,51079,102, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRowHeight": function() {
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
		try { egl.enter("getRowHeight",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1376,51237,19, this);
			$result = this.rowHeight;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setrowHeight": function( rowHeight ) {
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
		try { egl.enter("setrowHeight",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("rowHeight", rowHeight, "int", "rowHeight");
			egl.atLine(this.eze$$fileName,1380,51323,27, this);
			this.rowHeight = rowHeight;
			egl.atLine(this.eze$$fileName,1381,51357,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1379,51277,98, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCheckBoxWidth": function() {
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
		try { egl.enter("getCheckBoxWidth",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1385,51435,23, this);
			$result = this.checkBoxWidth;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setCheckBoxWidth": function( checkBoxWidth ) {
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
		try { egl.enter("setCheckBoxWidth",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("checkBoxWidth", checkBoxWidth, "int", "checkBoxWidth");
			egl.atLine(this.eze$$fileName,1389,51533,35, this);
			this.checkBoxWidth = checkBoxWidth;
			egl.atLine(this.eze$$fileName,1390,51575,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1388,51479,114, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getStartRow": function() {
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
		try { egl.enter("getStartRow",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1394,51648,18, this);
			$result = this.startRow;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setStartRow": function( startRow ) {
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
		try { egl.enter("setStartRow",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("startRow", startRow, "int", "startRow");
			egl.atLine(this.eze$$fileName,1398,51731,25, this);
			this.startRow = startRow;
			var page = 0;
			egl.addLocalFunctionVariable("page", page, "int", "page");
			egl.atLine(this.eze$$fileName,1399,51763,35, this);
			page = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((startRow - 1), this.pageSize)),egl.createRuntimeException);
			egl.setLocalFunctionVariable("page", page, "int");
			egl.atLine(this.eze$$fileName,1400,51805,28, this);
			this._startRow = ((page * this.pageSize) + 1);
			egl.atLine(this.eze$$fileName,1401,51840,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1397,51687,171, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getPageSize": function() {
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
		try { egl.enter("getPageSize",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1405,51913,18, this);
			$result = this.pageSize;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setPageSize": function( pageSize ) {
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
		try { egl.enter("setPageSize",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("pageSize", pageSize, "int", "pageSize");
			egl.atLine(this.eze$$fileName,1409,51996,25, this);
			this.pageSize = pageSize;
			egl.atLine(this.eze$$fileName,1410,52028,27, this);
			this.setStartRow(this.startRow );
			egl.atLine(this.eze$$fileName,1408,51952,112, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getAllowEmptyRows": function() {
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
		try { egl.enter("getAllowEmptyRows",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1414,52129,24, this);
			$result = this.allowEmptyRows;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAllowEmptyRows": function( allowEmptyRows ) {
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
		try { egl.enter("setAllowEmptyRows",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("allowEmptyRows", allowEmptyRows, "boolean", "allowEmptyRows");
			egl.atLine(this.eze$$fileName,1418,52234,37, this);
			this.allowEmptyRows = allowEmptyRows;
			egl.atLine(this.eze$$fileName,1419,52278,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1417,52174,122, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
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
		try { egl.enter("setReverseTextDirection",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("reverseTextDirection", reverseTextDirection, "string", "reverseTextDirection");
			egl.atLine(this.eze$$fileName,1423,52389,53, this);
			this.reverseTextDirectionThis = reverseTextDirection;
			egl.atLine(this.eze$$fileName,1424,52452,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1422,52304,166, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getReverseTextDirection": function() {
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
		try { egl.enter("getReverseTextDirection",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,1428,52549,38, this);
			$result = this.reverseTextDirectionThis;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setTextLayout": function( textLayout ) {
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
		try { egl.enter("setTextLayout",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("textLayout", textLayout, "string", "textLayout");
			egl.atLine(this.eze$$fileName,1432,52669,33, this);
			this.textLayoutThis = textLayout;
			egl.atLine(this.eze$$fileName,1433,52708,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1431,52604,122, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getTextLayout": function() {
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
		try { egl.enter("getTextLayout",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,1437,52795,28, this);
			$result = this.textLayoutThis;
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
			egl.atLine(this.eze$$fileName,1441,52920,43, this);
			egl.checkNull(this.ui, "ui").setWidgetOrientation(widgetOrientation );
			egl.atLine(this.eze$$fileName,1442,52967,48, this);
			if ( (egl.checkNull(this.grid, "grid").getInnerHTML() != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1443,52999,9, this);
					this.render();
				}finally{egl.exitBlock();}
			}
			;
			egl.atLine(this.eze$$fileName,1440,52844,178, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"lockCell": function( e ) {
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
		try { egl.enter("lockCell",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,1450,53074,59, this);
			if ( this.fixFirstColumn ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1451,53097,29, this);
					this.util.lockCol(this.ui, this.internalID );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1449,53032,108, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[DataGrid]";
	}
	,
	"eze$$getName": function() {
		return "DataGrid";
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
		
		{name: "UtilLib", value : egl.com.ibm.egl.rui.widgets.UtilLib['$inst'], type : "com.ibm.egl.rui.widgets.UtilLib", jsName : "egl.com.ibm.egl.rui.widgets.UtilLib.$inst"},
		{name: "DataGridLib", value : egl.com.ibm.egl.rui.widgets.DataGridLib['$inst'], type : "com.ibm.egl.rui.widgets.DataGridLib", jsName : "egl.com.ibm.egl.rui.widgets.DataGridLib.$inst"},
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
		{name: "RUIDataGridID", value : eze$$parent.RUIDataGridID, type : "string", jsName : "RUIDataGridID"},
		{name: "data", value : function(){try{return eze$$parent.getData();}catch(e){return null;}}(), type : "any[]", jsName : "!data", getter : "getData", setter : "setData"},
		{name: "internalID", value : eze$$parent.internalID, type : "string", jsName : "internalID"},
		{name: "util", value : eze$$parent.util, type : "com.ibm.egl.rui.widgets.DataGridUtil", jsName : "util"},
		{name: "pagingLabel", value : eze$$parent.pagingLabel, type : "string", jsName : "pagingLabel"},
		{name: "grid", value : eze$$parent.grid, type : "com.ibm.egl.rui.widgets.Div", jsName : "grid"},
		{name: "gotoStartButton", value : eze$$parent.gotoStartButton, type : "com.ibm.egl.rui.widgets.Button", jsName : "gotoStartButton"},
		{name: "gotoPageBackButton", value : eze$$parent.gotoPageBackButton, type : "com.ibm.egl.rui.widgets.Button", jsName : "gotoPageBackButton"},
		{name: "pageTextLabel", value : eze$$parent.pageTextLabel, type : "com.ibm.egl.rui.widgets.HTML", jsName : "pageTextLabel"},
		{name: "gotoPageForwardButton", value : eze$$parent.gotoPageForwardButton, type : "com.ibm.egl.rui.widgets.Button", jsName : "gotoPageForwardButton"},
		{name: "gotoEndButton", value : eze$$parent.gotoEndButton, type : "com.ibm.egl.rui.widgets.Button", jsName : "gotoEndButton"},
		{name: "buttonBar", value : eze$$parent.buttonBar, type : "com.ibm.egl.rui.widgets.Box", jsName : "buttonBar"},
		{name: "ui", value : eze$$parent.ui, type : "com.ibm.egl.rui.widgets.Box", jsName : "ui"},
		{name: "columns", value : function(){try{return eze$$parent.getColumns();}catch(e){return null;}}(), type : "com.ibm.egl.rui.widgets.DataGridColumn[]", jsName : "!columns", getter : "getColumns", setter : "setColumns"},
		{name: "behaviors", value : eze$$parent.behaviors, type : "com.ibm.egl.rui.widgets.DataCellBehavior[]", jsName : "!behaviors"},
		{name: "headerBehaviors", value : eze$$parent.headerBehaviors, type : "com.ibm.egl.rui.widgets.DataCellBehavior[]", jsName : "!headerBehaviors"},
		{name: "editorBehaviors", value : eze$$parent.editorBehaviors, type : "com.ibm.egl.rui.widgets.EditorBehavior[]", jsName : "!editorBehaviors"},
		{name: "refreshBehaviors", value : eze$$parent.refreshBehaviors, type : "com.ibm.egl.rui.widgets.RefreshBehavior[]", jsName : "!refreshBehaviors"},
		{name: "selection", value : function(){try{return eze$$parent.getSelection();}catch(e){return null;}}(), type : "any[]", jsName : "!selection", getter : "getSelection", setter : "setSelection"},
		{name: "checked", value : function(){try{return eze$$parent.getChecked();}catch(e){return null;}}(), type : "any[]", jsName : "!checked", getter : "getChecked", setter : "setChecked"},
		{name: "editors", value : eze$$parent.editors, type : "egl.ui.rui.Widget[]", jsName : "!editors"},
		{name: "showCheckBoxes", value : function(){try{return eze$$parent.getShowCheckBoxes();}catch(e){return null;}}(), type : "boolean", jsName : "showCheckBoxes", getter : "getShowCheckBoxes", setter : "setShowCheckBoxes"},
		{name: "showScrollbar", value : function(){try{return eze$$parent.getShowScrollbar();}catch(e){return null;}}(), type : "boolean", jsName : "showScrollbar", getter : "getShowScrollbar", setter : "setShowScrollbar"},
		{name: "fixFirstColumn", value : function(){try{return eze$$parent.getFixFirstColumn();}catch(e){return null;}}(), type : "boolean", jsName : "fixFirstColumn", getter : "getFixFirstColumn", setter : "setFixFirstColumn"},
		{name: "selectionMode", value : function(){try{return eze$$parent.getSelectionMode();}catch(e){return null;}}(), type : "int", jsName : "selectionMode", getter : "getSelectionMode", setter : "setSelectionMode"},
		{name: "enableSorting", value : function(){try{return eze$$parent.getEnableSorting();}catch(e){return null;}}(), type : "boolean", jsName : "enableSorting", getter : "getEnableSorting", setter : "setEnableSorting"},
		{name: "showButtonBar", value : function(){try{return eze$$parent.getShowButtonBar();}catch(e){return null;}}(), type : "boolean", jsName : "showButtonBar", getter : "getShowButtonBar", setter : "setShowButtonBar"},
		{name: "showHeader", value : function(){try{return eze$$parent.getShowHeader();}catch(e){return null;}}(), type : "boolean", jsName : "showHeader", getter : "getShowHeader", setter : "setShowHeader"},
		{name: "manageEditorBehaviors", value : function(){try{return eze$$parent.getManageEditorBehaviors();}catch(e){return null;}}(), type : "boolean", jsName : "manageEditorBehaviors", getter : "getManageEditorBehaviors", setter : "setManageEditorBehaviors"},
		{name: "encodeValue", value : function(){try{return eze$$parent.getEncodeValue();}catch(e){return null;}}(), type : "boolean", jsName : "encodeValue", getter : "getEncodeValue", setter : "setEncodeValue"},
		{name: "pageChangeListeners", value : eze$$parent.pageChangeListeners, type : "com.ibm.egl.rui.widgets.PageChangeListener[]", jsName : "!pageChangeListeners"},
		{name: "selectionListeners", value : eze$$parent.selectionListeners, type : "com.ibm.egl.rui.widgets.SelectionListener[]", jsName : "!selectionListeners"},
		{name: "checkboxListeners", value : eze$$parent.checkboxListeners, type : "com.ibm.egl.rui.widgets.CheckboxListener[]", jsName : "!checkboxListeners"},
		{name: "sortListeners", value : eze$$parent.sortListeners, type : "com.ibm.egl.rui.widgets.SortListener[]", jsName : "!sortListeners"},
		{name: "cellPadding", value : function(){try{return eze$$parent.getCellPadding();}catch(e){return null;}}(), type : "int", jsName : "cellPadding", getter : "getCellPadding", setter : "setCellPadding"},
		{name: "cellBorder", value : function(){try{return eze$$parent.getCellBorder();}catch(e){return null;}}(), type : "int", jsName : "cellBorder", getter : "getCellBorder", setter : "setCellBorder"},
		{name: "rowHeight", value : function(){try{return eze$$parent.getRowHeight();}catch(e){return null;}}(), type : "int", jsName : "rowHeight", getter : "getRowHeight", setter : "setrowHeight"},
		{name: "checkBoxWidth", value : function(){try{return eze$$parent.getCheckBoxWidth();}catch(e){return null;}}(), type : "int", jsName : "checkBoxWidth", getter : "getCheckBoxWidth", setter : "setCheckBoxWidth"},
		{name: "startRow", value : function(){try{return eze$$parent.getStartRow();}catch(e){return null;}}(), type : "int", jsName : "startRow", getter : "getStartRow", setter : "setStartRow"},
		{name: "_startRow", value : eze$$parent._startRow, type : "int", jsName : "_startRow"},
		{name: "lastStartRow", value : eze$$parent.lastStartRow, type : "int", jsName : "lastStartRow"},
		{name: "pageSize", value : function(){try{return eze$$parent.getPageSize();}catch(e){return null;}}(), type : "int", jsName : "pageSize", getter : "getPageSize", setter : "setPageSize"},
		{name: "allowEmptyRows", value : function(){try{return eze$$parent.getAllowEmptyRows();}catch(e){return null;}}(), type : "boolean", jsName : "allowEmptyRows", getter : "getAllowEmptyRows", setter : "setAllowEmptyRows"},
		{name: "reverseTextDirectionThis", value : eze$$parent.reverseTextDirectionThis, type : "string", jsName : "reverseTextDirectionThis"},
		{name: "textLayoutThis", value : eze$$parent.textLayoutThis, type : "string", jsName : "textLayoutThis"},
		{name: "dataLoader", value : eze$$parent.dataLoader, type : "com.ibm.egl.rui.widgets.DataLoader", jsName : "dataLoader"},
		{name: "loadingDiv", value : eze$$parent.loadingDiv, type : "com.ibm.egl.rui.widgets.Div", jsName : "loadingDiv"},
		{name: "columnClass", value : eze$$parent.columnClass, type : "string[]", jsName : "!columnClass"},
		{name: "showLoadingDivJob", value : eze$$parent.showLoadingDivJob, type : "egl.javascript.Job", jsName : "showLoadingDivJob"},
		{name: "innerLoadingDiv", value : eze$$parent.innerLoadingDiv, type : "com.ibm.egl.rui.widgets.Div", jsName : "innerLoadingDiv"},
		{name: "Directions", value : eze$$parent.Directions, type : "string[]", jsName : "!Directions"},
		{name: "headerWidth", value : eze$$parent.headerWidth, type : "int", jsName : "headerWidth"},
		{name: "columnDragger", value : eze$$parent.columnDragger, type : "com.ibm.egl.rui.widgets.Span", jsName : "columnDragger"},
		{name: "lastSelectedRow", value : eze$$parent.lastSelectedRow, type : "int", jsName : "lastSelectedRow"},
		{name: "lastEvent", value : eze$$parent.lastEvent, type : "egl.ui.rui.Event", jsName : "lastEvent"},
		{name: "sortedColumn", value : eze$$parent.sortedColumn, type : "int", jsName : "sortedColumn"}
		];
	}
}
);
