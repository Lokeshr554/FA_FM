// Generated at Tue Dec 06 11:54:45 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'DataGrid', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/DataGrid.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGrid',
	"constructor" : function()
	{
		this.RUIDataGridID = "";
		this.data = (function(){ var ezert$$2= []; ezert$$2.setType( "A;" );// no max size set for this array
		return ezert$$2;})();
		
		this.internalID = "";
		this.util = new egl.com.ibm.egl.rui.widgets.DataGridUtil();
		
		this.pagingLabel = "";
		this.grid = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "grid");
		
		this.gotoStartButton = new egl.com.ibm.egl.rui.widgets.Button();
		egl.addEmbeddedWidget(this, "gotoStartButton");
		
		this.gotoPageBackButton = new egl.com.ibm.egl.rui.widgets.Button();
		egl.addEmbeddedWidget(this, "gotoPageBackButton");
		
		this.pageTextLabel = new egl.com.ibm.egl.rui.widgets.HTML();
		egl.addEmbeddedWidget(this, "pageTextLabel");
		
		this.gotoPageForwardButton = new egl.com.ibm.egl.rui.widgets.Button();
		egl.addEmbeddedWidget(this, "gotoPageForwardButton");
		
		this.gotoEndButton = new egl.com.ibm.egl.rui.widgets.Button();
		egl.addEmbeddedWidget(this, "gotoEndButton");
		
		this.buttonBar = new egl.com.ibm.egl.rui.widgets.Box();
		egl.addEmbeddedWidget(this, "buttonBar");
		
		this.ui = new egl.com.ibm.egl.rui.widgets.Box();
		egl.addEmbeddedWidget(this, "ui");
		
		this.columns = (function(){ var ezert$$3= []; ezert$$3.setType( egl.com.ibm.egl.rui.widgets.DataGridColumn );for (var i=0; i < 0; i++) {
				ezert$$3[ i ] = new egl.com.ibm.egl.rui.widgets.DataGridColumn();
			}
			// no max size set for this array
		return ezert$$3;})();
		
		this.behaviors = (function(){ var ezert$$4= []; ezert$$4.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$4[ i ] = null;
			}
			// no max size set for this array
		return ezert$$4;})();
		
		this.headerBehaviors = (function(){ var ezert$$5= []; ezert$$5.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$5[ i ] = null;
			}
			// no max size set for this array
		return ezert$$5;})();
		
		this.editorBehaviors = (function(){ var ezert$$6= []; ezert$$6.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$6[ i ] = null;
			}
			// no max size set for this array
		return ezert$$6;})();
		
		this.refreshBehaviors = (function(){ var ezert$$7= []; ezert$$7.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$7[ i ] = null;
			}
			// no max size set for this array
		return ezert$$7;})();
		
		this.selection = (function(){ var ezert$$8= []; ezert$$8.setType( "A;" );// no max size set for this array
		return ezert$$8;})();
		
		this.checked = (function(){ var ezert$$9= []; ezert$$9.setType( "A;" );// no max size set for this array
		return ezert$$9;})();
		
		this.editors = (function(){ var ezert$$10= []; ezert$$10.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
				ezert$$10[ i ] = new egl.egl.ui.rui.Widget();
			}
			// no max size set for this array
		return ezert$$10;})();
		
		this.showCheckBoxes = false;
		this.showScrollbar = false;
		this.fixFirstColumn = false;
		this.selectionMode = 0;
		this.enableSorting = false;
		this.showButtonBar = false;
		this.showHeader = false;
		this.manageEditorBehaviors = false;
		this.encodeValue = false;
		this.pageChangeListeners = (function(){ var ezert$$11= []; ezert$$11.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$11[ i ] = null;
			}
			// no max size set for this array
		return ezert$$11;})();
		
		this.selectionListeners = (function(){ var ezert$$12= []; ezert$$12.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$12[ i ] = null;
			}
			// no max size set for this array
		return ezert$$12;})();
		
		this.checkboxListeners = (function(){ var ezert$$13= []; ezert$$13.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$13[ i ] = null;
			}
			// no max size set for this array
		return ezert$$13;})();
		
		this.sortListeners = (function(){ var ezert$$14= []; ezert$$14.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$14[ i ] = null;
			}
			// no max size set for this array
		return ezert$$14;})();
		
		this.cellPadding = 0;
		this.cellBorder = 0;
		this.rowHeight = 0;
		this.checkBoxWidth = 0;
		this.startRow = 0;
		this._startRow = 0;
		this.lastStartRow = 0;
		this.pageSize = 0;
		this.allowEmptyRows = false;
		this.reverseTextDirectionThis = "";
		this.textLayoutThis = "";
		this.dataLoader = null;
		
		this.loadingDiv = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "loadingDiv");
		
		this.columnClass = (function(){ var ezert$$15= []; ezert$$15.setType( "S;" );// no max size set for this array
		return ezert$$15;})();
		
		this.showLoadingDivJob = new egl.egl.javascript.Job();
		
		this.innerLoadingDiv = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "innerLoadingDiv");
		
		this.Directions = null;
		
		this.headerWidth = 0;
		this.columnDragger = new egl.com.ibm.egl.rui.widgets.Span();
		egl.addEmbeddedWidget(this, "columnDragger");
		
		this.lastSelectedRow = 0;
		this.lastEvent = null;
		
		this.sortedColumn = 0;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.core.StrLib();
		new egl.egl.core.MathLib();
		new egl.com.ibm.egl.rui.widgets.UtilLib();
		new egl.com.ibm.egl.rui.widgets.DataGridLib();
		this.targetWidget = this.ui;
		this.RUIDataGridID = "RUIDataGridID";
		this.pagingLabel = "{page} / {pageCount}";
		egl.checkNull(this.grid).setClass("EglRuiDataGrid");
		egl.checkNull(this.grid).setPosition("relative");
		egl.checkNull(this.grid).getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.clickGrid) );
		egl.checkNull(this.gotoStartButton).setText("<<");
		egl.checkNull(this.gotoStartButton).setWidth((45).toString());
		egl.checkNull(this.gotoStartButton).setMarginRight(10);
		egl.checkNull(this.gotoStartButton).getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoStart) );
		egl.checkNull(this.gotoPageBackButton).setText("<");
		egl.checkNull(this.gotoPageBackButton).setWidth((45).toString());
		egl.checkNull(this.gotoPageBackButton).setMarginRight(10);
		egl.checkNull(this.gotoPageBackButton).getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoPageBack) );
		egl.checkNull(this.pageTextLabel).setMarginRight(10);
		egl.checkNull(this.pageTextLabel).setFontSize("80%");
		egl.checkNull(this.pageTextLabel).setMarginTop(4);
		egl.checkNull(this.gotoPageForwardButton).setText(">");
		egl.checkNull(this.gotoPageForwardButton).setWidth((45).toString());
		egl.checkNull(this.gotoPageForwardButton).setMarginRight(10);
		egl.checkNull(this.gotoPageForwardButton).getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoPageForward) );
		egl.checkNull(this.gotoEndButton).setText(">>");
		egl.checkNull(this.gotoEndButton).setWidth((45).toString());
		egl.checkNull(this.gotoEndButton).setMarginRight(10);
		egl.checkNull(this.gotoEndButton).getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoEnd) );
		egl.checkNull(this.buttonBar).setClass("EglRuiDataGridButtonBar");
		egl.checkNull(this.buttonBar).setChildren( [ this.gotoStartButton, this.gotoPageBackButton, this.pageTextLabel, this.gotoPageForwardButton, this.gotoEndButton ] );
		egl.checkNull(this.ui).setColumns(1);
		this.selectionMode = 2;
		this.enableSorting = true;
		this.showButtonBar = true;
		this.showHeader = true;
		this.manageEditorBehaviors = true;
		this.encodeValue = false;
		this.cellPadding = 4;
		this.cellBorder = 1;
		this.checkBoxWidth = 20;
		this.startRow = 1;
		this._startRow = this.startRow;
		this.lastStartRow = 0;
		this.pageSize = 10;
		this.allowEmptyRows = true;
		this.reverseTextDirectionThis = "No";
		this.textLayoutThis = "Logical";
		this.dataLoader = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.fullyCached);
		egl.checkNull(this.loadingDiv).setClass("EglRuiGridLoadingDiv");
		egl.checkNull(this.loadingDiv).setInnerHTML("<img src='images/spinner.gif' />");
		egl.checkNull(this.loadingDiv).setPosition("absolute");
		egl.checkNull(this.loadingDiv).setOpacity((100).toString());
		egl.checkNull(this.loadingDiv).setZIndex((100).toString());
		egl.checkNull(this.loadingDiv).setWidth((100).toString());
		egl.checkNull(this.loadingDiv).setHeight((100).toString());
		egl.checkNull(this.loadingDiv).setPaddingTop(45);
		egl.checkNull(this.loadingDiv).setPaddingLeft(45);
		this.showLoadingDivJob.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.showLoadingDiv) );
		this.Directions = [ "None", "Down", "Up" ].setType( "S;" );
		egl.checkNull(this.columnDragger).setClass("EglRuiDataGridResizeHandle");
		egl.checkNull(this.columnDragger).setBackground("#CCCCCC");
		egl.checkNull(this.columnDragger).setInnerHTML("&nbsp;");
		this.sortedColumn = 1;
		this.start();
	}
	
	,
	"setData": function( data ) {
		if ( (data == null) ) {
			return;
		}
		if ( (egl.checkNull(this.ui).getID() == "") ) {
			egl.checkNull(this.ui).setID((this.internalID + "_container"));
		}
		egl.checkNull(this.grid).setID(this.internalID);
		this.data = data;
		this.updateColumns();
		this.setAllDeselected();
		this.render();
		
	}
	,
	"fullyCached": function( startRow, endRow, sortFieldName, sortDirection ) {
		var $result = false;
		$result = true;
		return $result;
	}
	,
	"render": function() {
		if ( this.dataIsAvailable() ) {
			this.util.destroyHeaderCell(this.grid );
			{
				var i = 0;
				i = 1;
				for ( ; (i <= this.refreshBehaviors.getSize()); i = (i + 1) )
				{
					egl.checkNull(this.refreshBehaviors)[this.refreshBehaviors.checkIndex((i)-1)]( this );
				}
			}
			if ( this.manageEditorBehaviors ) {
				this.clearEditors();
			}
			this.showLoadingDivJob.cancel();
			this.setColumnsProperty();
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.clearHTMLString();
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<div class=EglRuiDataGridTable>" );
			this.renderHeaderCells();
			this.renderRows();
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
			this.util.cleanInnerHtml(this.grid );
			egl.checkNull(this.grid).setInnerHTML(egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.getHTMLString());
			this.applyBehaviors();
			this.renderButtonBar();
			this.enableDragging();
			if ( this.fixFirstColumn ) {
				egl.checkNull(this.ui).getOnScroll().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.lockCell) );
			}
			if ( this.showScrollbar ) {
				this.fallbackDimensions();
			}
			(function () {
				var ezert$$16 = new egl.egl.javascript.Job();
				ezert$$16.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.updateDimensions) );
				return ezert$$16;
			}).call(this).schedule();
			(function () {
				var ezert$$17 = new egl.egl.javascript.Job();
				ezert$$17.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.updateHighlights) );
				return ezert$$17;
			}).call(this).schedule();
		}
		else {
			this.showLoadingDivJob.schedule(200 );
		}
		
	}
	,
	"clearEditors": function() {
		{
			var i = 0;
			i = 1;
			for ( ; (i <= this.editors.getSize()); i = (i + 1) )
			{
				egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(egl.checkNull(this.editors)[this.editors.checkIndex((i)-1)] );
			}
		}
		this.editors.removeAll();
		
	}
	,
	"dataIsAvailable": function() {
		var $result = false;
		var key = "";
		key = "";
		var direction = 0;
		direction = 0;
		if ( (this.columns.getSize() > 0) ) {
			key = egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((this.sortedColumn)-1)]).name;
			direction = egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((this.sortedColumn)-1)]).sortDirection;
		}
		$result = this.dataLoader(this._startRow, ((this._startRow + this.pageSize) - 1), key, direction );
		return $result;
	}
	,
	"start": function() {
		if ( (this.internalID == "") ) {
			this.internalID = this.util.getUniqueID();
		}
		
	}
	,
	"updateColumns": function() {
		if ( ((this.columns.getSize() == 0) && (this.data.getSize() > 0)) ) {
			var fieldNames = null;
			fieldNames = this.util.getFieldNames(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((1)-1)])) );
			{
				var n = 0;
				n = 1;
				for ( ; (n <= fieldNames.getSize()); n = (n + 1) )
				{
					this.columns.appendElement( (function () {
						var ezert$$18 = new egl.com.ibm.egl.rui.widgets.DataGridColumn();
						egl.checkNull(ezert$$18).name = egl.checkNull(fieldNames)[fieldNames.checkIndex((n)-1)];
						egl.checkNull(ezert$$18).displayName = egl.checkNull(fieldNames)[fieldNames.checkIndex((n)-1)];
						egl.checkNull(ezert$$18).width = ((44 + this.util.getTextWidth(egl.checkNull(fieldNames)[fieldNames.checkIndex((n)-1)] ))).toString();
						return ezert$$18;
					}).call(this) );
				}
			}
		}
		if ( ((this.columns.getSize() > 0) && (this.data.getSize() > 0)) ) {
			{
				var n = 0;
				n = 1;
				for ( ; (n <= this.columns.getSize()); n = (n + 1) )
				{
					Lezert$$1: if ( (egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).enableSorting && (egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).sortDirection != 0)) ) {
						if ( (egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).columnComparator != null) ) {
							this.data = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).name, (egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).sortDirection == 2), egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).ignoreCase, function() {
								var ezert$$19 = null;
								
								ezert$$19 = egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).columnComparator;
							; return ezert$$19;}.call(this) ));
						}
						else {
							this.data = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).name, (egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).sortDirection == 2), egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).ignoreCase, null ));
						}
						break Lezert$$1;
					}
				}
			}
		}
		
	}
	,
	"setColumnsProperty": function() {
		if ( ((this.data.getSize() > 0) && (this.columns.getSize() > 0)) ) {
			{
				var column = 0;
				column = 1;
				for ( ; (column <= this.columns.getSize()); column = (column + 1) )
				{
					try {
						if ( (egl.valueByKey(egl.checkNull(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((1)-1)])), egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)]).name) != null) ) {
						}
					}
					catch ( ezert$$20 )
					{
						{
							if (!(ezert$$20 instanceof egl.egl.core.AnyException)) {
								ezert$$20 = egl.makeExceptionFromCaughtObject(ezert$$20);
							}
							var ex = ezert$$20;
							if ( (egl.checkNull(ex).messageID == "CRRUI2025E") ) {
								egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)]).enableSorting = false;
							}
							else {
								throw ex;
							}
						}
					}
				}
			}
		}
		if ( (this.columns.getSize() > 0) ) {
			this.columnClass.resize( this.columns.getSize() );
			{
				var column = 0;
				column = 1;
				for ( ; (column <= this.columns.getSize()); column = (column + 1) )
				{
					egl.checkNull(this.columnClass)[this.columnClass.checkIndex((column)-1)] = ("EglRuiDataGridCell" + this.getAlignmentClass(egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)]).alignment ));
				}
			}
			if ( this.fixFirstColumn ) {
				egl.checkNull(this.columnClass)[this.columnClass.checkIndex((1)-1)] = (egl.checkNull(this.columnClass)[this.columnClass.checkIndex((1)-1)] + " EglRuiDataGridColumn1Cell");
			}
		}
		
	}
	,
	"showLoadingDiv": function() {
		try {
			var uiCount = 0;
			uiCount = egl.checkNull(this.ui).getChildren().getSize();
			if ( (uiCount >= 1) ) {
				egl.checkNull(this.loadingDiv).setPosition("absolute");
				var rows = null;
				rows = egl.checkNull(this.grid).getElementById((egl.checkNull(this.grid).getID() + "-rows") );
				if ( (rows != null) ) {
					egl.checkNull(this.innerLoadingDiv).setHeight((rows.getPixelHeight()).toString());
					egl.checkNull(this.innerLoadingDiv).setWidth((rows.getPixelWidth()).toString());
					rows.setChildren( [ this.innerLoadingDiv ] );
				}
				egl.checkNull(this.loadingDiv).setPaddingTop(Math.max( egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide(egl.checkNull(this.ui).getPixelHeight(), 2)).subtract((new egl.javascript.BigDecimal(String(12))))) ,0 ));
				egl.checkNull(this.loadingDiv).setWidth(((egl.checkNull(this.ui).getChildren()[egl.checkNull(this.ui).getChildren().checkIndex((1)-1)].getPixelWidth() + 2)).toString());
				egl.checkNull(this.loadingDiv).setPaddingLeft(Math.max( egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide(egl.checkNull(this.ui).getChildren()[egl.checkNull(this.ui).getChildren().checkIndex((1)-1)].getPixelWidth(), 2)).subtract((new egl.javascript.BigDecimal(String(20))))) ,0 ));
				egl.checkNull(this.loadingDiv).setHeight((new egl.javascript.BigDecimal(egl.divide(egl.checkNull(this.ui).getPixelHeight(), 2)).add((new egl.javascript.BigDecimal(String(12))))).toString());
			}
			else {
				egl.checkNull(this.loadingDiv).setPosition("static");
			}
			egl.checkNull(this.loadingDiv).setID((egl.checkNull(this.grid).getID() + "_GridLoadingDiv"));
			egl.checkNull(this.loadingDiv).setX((egl.checkNull(this.ui).getX() - 1));
			egl.checkNull(this.loadingDiv).setY(egl.checkNull(this.ui).getY());
			egl.checkNull(this.ui).appendChild(this.loadingDiv );
		}
		catch ( ezert$$21 )
		{
			{
				if (!(ezert$$21 instanceof egl.egl.core.AnyException)) {
					ezert$$21 = egl.makeExceptionFromCaughtObject(ezert$$21);
				}
				var e = ezert$$21;
			}
		}
		
	}
	,
	"cancelDataLoader": function() {
		var loadingDiv = null;
		loadingDiv = egl.checkNull(this.ui).getElementById((egl.checkNull(this.grid).getID() + "_GridLoadingDiv") );
		if ( (loadingDiv != null) ) {
			this.showLoadingDivJob.cancel();
			this._startRow = this.lastStartRow;
			if ( (this.showScrollbar || (this._startRow < 1)) ) {
				this._startRow = 1;
				this.setData([  ].setType( "A;" ) );
				return;
			}
			this.render();
		}
		
	}
	,
	"renderHeaderCells": function() {
		if ( !(this.showHeader) ) {
			return;
		}
		var html = "";
		html = "";
		var columnCount = 0;
		columnCount = this.columns.getSize();
		this.headerWidth = 0;
		if ( this.showCheckBoxes ) {
			this.headerWidth = (this.headerWidth + ((this.checkBoxWidth + (2 * this.cellPadding)) + this.cellBorder));
			var temp = "";
			temp = "";
			if ( this.fixFirstColumn ) {
				temp = "EglRuiDataGridColumn1Cell ";
			}
			html = (html + (((("<span class='EglRuiDataGridHeaderCell " + temp) + "EglRuiDataGridCheckBox' id=") + egl.checkNull(this.grid).getID()) + "-header-checkbox style='"));
			if ( (egl.checkNull(this.ui).getWidgetOrientation() == "RTL") ) {
				html = (html + "float: right; ");
			}
			html = (html + (((((("padding:" + (this.cellPadding).toString()) + "px; width:") + (this.checkBoxWidth).toString()) + "px; border-width: 1px ") + (this.cellBorder).toString()) + "px 0 0'>&nbsp;</span>"));
		}
		{
			var column = 0;
			column = 1;
			for ( ; (column <= columnCount); column = (column + 1) )
			{
				var c = null;
				c = egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)];
				var value = "";
				if ( (egl.checkNull(c).displayName == null) ) {
					value = egl.checkNull(c).name;
				}
				else {
					value = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.checkNull(c).displayName);
				}
				if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
					var isVisual = false;
					isVisual = (this.textLayoutThis == "Visual");
					var isReverseDirection = false;
					isReverseDirection = (this.reverseTextDirectionThis == "Yes");
					value = this.util.setBiDiMarkersStr(value, isVisual, isReverseDirection );
				}
				if ( ((egl.checkNull(c).width == "") || (egl.convertStringToFloat(egl.checkNull(c).width) == 0)) ) {
					egl.checkNull(c).width = ((44 + this.util.getTextWidth(value ))).toString();
				}
				this.headerWidth = (this.headerWidth + ((this.cellBorder + egl.convertStringToInt(egl.checkNull(c).width)) + (2 * this.cellPadding)));
				var ezekw$$class = "";
				ezekw$$class = this.getAlignmentClass(egl.checkNull(c).headerAlignment );
				var w = 0;
				w = egl.convertStringToInt(egl.checkNull(c).width);
				var temp = "";
				temp = "";
				if ( (this.fixFirstColumn && (column == 1)) ) {
					temp = " EglRuiDataGridColumn1Cell";
				}
				html = (html + (((((((("<span id='" + egl.checkNull(this.grid).getID()) + "-header-") + (column).toString()) + "' class='EglRuiDataGridHeaderCell") + temp) + "' column='") + (column).toString()) + "' style='"));
				if ( (egl.checkNull(this.ui).getWidgetOrientation() == "RTL") ) {
					html = (html + "float: right; ");
				}
				html = (html + ((((((((((((("width:" + ((w + (2 * this.cellPadding))).toString()) + "px; border-width: 1px ") + (this.cellBorder).toString()) + "px 0 0'><span class=") + this.getAlignmentClass(egl.checkNull(c).headerAlignment )) + " style='padding:") + (this.cellPadding).toString()) + "px'>") + "<span class=EglRuiDataGridHeaderLabel>") + value) + "</span></span><span class=EglRuiDataGridSort") + egl.checkNull(this.Directions)[this.Directions.checkIndex(((egl.checkNull(c).sortDirection + 1))-1)]) + ">&nbsp;&nbsp;&nbsp;&nbsp;</span></span>"));
			}
		}
		html = (html + "</div>");
		html = (((((((((("<div id=" + egl.checkNull(this.grid).getID()) + "-header class=EglRuiDataGridHeaderRow style='width:") + (this.headerWidth).toString()) + "px'><div id=") + egl.checkNull(this.grid).getID()) + "-header-inner class=EglRuiDataGridHeaderRowInner style='width:") + ((this.headerWidth + (columnCount * 8))).toString()) + "px'>") + html) + "</div>");
		egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString(html );
		
	}
	,
	"getAlignmentClass": function( alignment ) {
		var $result = "";
		switch( alignment ) {
			case 0:
				$result = " EglRuiDataGridAlignLeft";
				return $result;
				break;
			case 1:
				$result = " EglRuiDataGridAlignCenter";
				return $result;
				break;
			case 2:
				$result = " EglRuiDataGridAlignRight";
				return $result;
				break;
			default:
			break;
		}
		return $result;
	}
	,
	"renderRows": function() {
		var columnCount = 0;
		columnCount = this.columns.getSize();
		var page = 0;
		page = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)),egl.createRuntimeException);
		this._startRow = ((page * this.pageSize) + 1);
		var endRow = 0;
		endRow = this.data.getSize();
		if ( this.showScrollbar ) {
			this.lastStartRow = this._startRow;
			this._startRow = 1;
			if ( !(this.fixFirstColumn) ) {
				egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<div class=EglRuiDataGridScroller id=" + egl.checkNull(this.grid).getID()) + "-scroller>") );
			}
		}
		else {
			if ( (this.pageSize != 0) ) {
				endRow = Math.min( endRow ,((this._startRow + this.pageSize) - 1) );
			}
		}
		if ( (this.headerWidth > 0) ) {
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((("<div class=EglRuiDataGridRows id=" + egl.checkNull(this.grid).getID()) + "-rows style='width:") + (this.headerWidth).toString()) + "px;'>") );
		}
		else {
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<div class=EglRuiDataGridRows id=" + egl.checkNull(this.grid).getID()) + "-rows>") );
		}
		var h = "";
		h = " ";
		if ( (this.rowHeight > 0) ) {
			h = (("style = 'overflow-y: hidden; height:" + ((this.rowHeight + (2 * this.cellPadding))).toString()) + "px;'");
		}
		{
			var row = 0;
			row = this._startRow;
			for ( ; (row <= endRow); row = (row + 1) )
			{
				egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((("<div class=" + this.getRowClass(row )) + " row=") + (row).toString()) + " id=") + egl.checkNull(this.grid).getID()) + "-row-") + (row).toString()) + " ") + h) + "style='min-height:") + ((20 + (this.cellPadding * 2))).toString()) + "px;'>") );
				if ( this.showCheckBoxes ) {
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<span class='EglRuiDataGridCell EglRuiDataGridCheckBox' style='" );
					if ( (egl.checkNull(this.ui).getWidgetOrientation() == "RTL") ) {
						egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("float: right; " );
					}
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((((((((((((((h + "padding:") + ((this.cellPadding - 1)).toString()) + "px ") + (this.cellPadding).toString()) + "px ") + ((this.cellPadding + 5000)).toString()) + "px ") + (this.cellPadding).toString()) + "px; margin-bottom:") + (((0 - this.cellPadding) - 5000)).toString()) + "px; width:") + (((this.checkBoxWidth + (this.cellPadding * 2)) + this.cellBorder)).toString()) + "px; border-width: 0 ") + (this.cellBorder).toString()) + "px 0 0''><input id=") + egl.checkNull(this.grid).getID()) + "-checkbox-") + (row).toString()) + " type=checkbox row=") + (row).toString()) + " onclick='egl.com.ibm.egl.rui.widgets.DataGridUtil.dataGridCheckboxClick(\"") + this.internalID) + "\", this)'></input></span>") );
				}
				{
					var column = 0;
					column = 1;
					for ( ; (column <= columnCount); column = (column + 1) )
					{
						var c = null;
						c = egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)];
						this.renderCell(row, column, this.getCellValue(row, egl.checkNull(c).name ), c, function(eze$$inout$c) {
							c = eze$$inout$c;
						}, (column == columnCount), this );
					}
				}
				egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
			}
		}
		if ( (this.allowEmptyRows && ((!(this.showScrollbar) && (this.data.getSize() > this.pageSize)) || (endRow == 0))) ) {
			{
				var row = 0;
				row = (endRow + 1);
				for ( ; (row <= ((this._startRow + this.pageSize) - 1)); row = (row + 1) )
				{
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((("<div class=" + this.getRowClass(row )) + " ") + h) + ">") );
					if ( this.showCheckBoxes ) {
						egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<span class='EglRuiDataGridCell EglRuiDataGridCheckBox' style='" );
						if ( (egl.checkNull(this.ui).getWidgetOrientation() == "RTL") ) {
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("float: right; " );
						}
						;
						egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((("padding:" + (this.cellPadding).toString()) + "px; padding-bottom:") + ((this.cellPadding + 5000)).toString()) + "px; margin-bottom:") + (((0 - this.cellPadding) - 5000)).toString()) + "px; width:") + (this.checkBoxWidth).toString()) + "px; border-width: 0 ") + (this.cellBorder).toString()) + "px 0 0'></span>") );
					}
					{
						var column = 0;
						column = 1;
						for ( ; (column <= columnCount); column = (column + 1) )
						{
							var c = null;
							c = egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)];
							this.renderCell((-1), column, "", c, function(eze$$inout$c) {
								c = eze$$inout$c;
							}, (column == columnCount), this );
						}
					}
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
				}
			}
		}
		egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
		if ( (this.showScrollbar && !(this.fixFirstColumn)) ) {
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
		}
		
	}
	,
	"getRowClass": function( row ) {
		var $result = "";
		if ( (egl.remainder(row, 2) == 0) ) {
			$result = "EglRuiDataGridEvenRow";
			return $result;
		}
		else {
			$result = "EglRuiDataGridOddRow";
			return $result;
		}
		return $result;
	}
	,
	"getCellValue": function( row, fieldName ) {
		var $result = "";
		var object = null;
		object = egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)]);
		if ( (object == null) ) {
			$result = "";
			return $result;
		}
		var cell = null;
		try {
			cell = egl.valueByKey(egl.checkNull(object), fieldName);
		}
		catch ( ezert$$22 )
		{
			{
				if (!(ezert$$22 instanceof egl.egl.core.AnyException)) {
					ezert$$22 = egl.makeExceptionFromCaughtObject(ezert$$22);
				}
				var ex = ezert$$22;
				if ( (egl.checkNull(ex).messageID == "CRRUI2025E") ) {
					cell = null;
				}
				else {
					throw ex;
				}
			}
		}
		if ( (cell == null) ) {
			$result = "";
			return $result;
		}
		else {
			$result = ("" + egl.convertAnyToString(cell,false));
			return $result;
		}
		return $result;
	}
	,
	"renderCell": function( row, column, value, c, eze$$c$func_, lastColumn, eze$$caller ) {
		var displayValue = "";
		displayValue = value;
		if ( this.encodeValue ) {
			displayValue = egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.encodeString(value );
		}
		var ezekw$$class = "";
		ezekw$$class = egl.checkNull(this.columnClass)[this.columnClass.checkIndex((column)-1)];
		if ( (row > 0) ) {
			var formatters = null;
			formatters = egl.checkNull(c).formatters;
			if ( (formatters != null) ) {
				var formatterCount = 0;
				formatterCount = formatters.getSize();
				{
					var k = 0;
					k = 1;
					for ( ; (k <= formatterCount); k = (k + 1) )
					{
						egl.checkNull(formatters)[formatters.checkIndex((k)-1)](ezekw$$class, function(eze$$inout$class) {
							ezekw$$class = eze$$inout$class;
						}, displayValue, function(eze$$inout$value) {
							displayValue = eze$$inout$value;
						}, egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)]), this );
					}
				}
			}
		}
		var h = "";
		h = " ";
		if ( (this.rowHeight > 0) ) {
			h = (("height:" + ((this.rowHeight + (2 * this.cellPadding))).toString()) + "px;");
		}
		egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((("<div id=" + egl.checkNull(this.grid).getID()) + "-cell-") + (row).toString()) + "-") + (column).toString()) + " class='") + ezekw$$class) + "' row='") + (row).toString()) + "' column='") + (column).toString()) + "' style='") );
		if ( (egl.checkNull(this.ui).getWidgetOrientation() == "RTL") ) {
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("float: right; " );
		}
		var cb = 0;
		cb = this.cellBorder;
		if ( lastColumn ) {
			cb = 0;
		}
		var w = 0;
		w = ((egl.convertStringToInt(egl.checkNull(c).width) + (this.cellPadding * 2)) + cb);
		if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
			var isVisual = false;
			isVisual = (this.textLayoutThis == "Visual");
			var isReverseDirection = false;
			isReverseDirection = (this.reverseTextDirectionThis == "Yes");
			displayValue = this.util.setBiDiMarkersStr(displayValue, isVisual, isReverseDirection );
		}
		egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((((("width:" + (w).toString()) + "px; ") + h) + "padding:") + (this.cellPadding).toString()) + "px; padding-bottom:") + ((this.cellPadding + 5000)).toString()) + "px; margin-bottom:") + (((0 - this.cellPadding) - 5000)).toString()) + "px; border-width: 0 ") + (cb).toString()) + "px 0 0'>") + displayValue) + "</div>") );
		
	}
	,
	"applyBehaviors": function() {
		var tds = null;
		var count = 0;
		var row = 0;
		var column = 0;
		var n = 0;
		if ( (this.headerBehaviors.getSize() > 0) ) {
			tds = egl.checkNull(this.grid).getElementsByTagName("span" );
			count = tds.getSize();
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				row = this.util.getIntAttribute(egl.checkNull(tds)[tds.checkIndex((n)-1)], "row" );
				column = this.util.getIntAttribute(egl.checkNull(tds)[tds.checkIndex((n)-1)], "column" );
				egl.checkNull(tds)[tds.checkIndex((n)-1)].setLogicalParent(  this );
				if ( ((row < 1) && (column >= 1)) ) {
					var len = 0;
					len = this.headerBehaviors.getSize();
					{
						var k = 0;
						k = 1;
						for ( ; (k <= len); k = (k + 1) )
						{
							egl.checkNull(this.headerBehaviors)[this.headerBehaviors.checkIndex((k)-1)]( this, egl.checkNull(tds)[tds.checkIndex((n)-1)], null, 0, egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)] );
						}
					}
				}
			}
		}
		if ( ((this.behaviors.getSize() > 0) || (this.editorBehaviors.getSize() > 0)) ) {
			tds = egl.checkNull(this.grid).getElementsByTagName("div" );
			count = tds.getSize();
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				row = this.util.getIntAttribute(egl.checkNull(tds)[tds.checkIndex((n)-1)], "row" );
				column = this.util.getIntAttribute(egl.checkNull(tds)[tds.checkIndex((n)-1)], "column" );
				egl.checkNull(tds)[tds.checkIndex((n)-1)].setLogicalParent(  this );
				if ( ((row > 0) && (column > 0)) ) {
					var object = null;
					object = egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)]);
					var len = 0;
					len = this.behaviors.getSize();
					{
						var k = 0;
						k = 1;
						for ( ; (k <= len); k = (k + 1) )
						{
							egl.checkNull(this.behaviors)[this.behaviors.checkIndex((k)-1)]( this, egl.checkNull(tds)[tds.checkIndex((n)-1)], object, row, egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)] );
						}
					}
					len = this.editorBehaviors.getSize();
					{
						var k = 0;
						k = 1;
						for ( ; (k <= len); k = (k + 1) )
						{
							var editor = null;
							editor = egl.checkNull(this.editorBehaviors)[this.editorBehaviors.checkIndex((k)-1)]( this, egl.checkNull(tds)[tds.checkIndex((n)-1)], egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)]), row, egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)], {eze$$value : egl.checkNull(tds)[tds.checkIndex((n)-1)].getInnerText(), eze$$signature : "S;"} );
							if ( (editor != null) ) {
								this.editors.appendElement( editor );
								egl.checkNull(tds)[tds.checkIndex((n)-1)].setChildren( [ editor ] );
							}
						}
					}
				}
			}
		}
		
	}
	,
	"fallbackDimensions": function() {
		var rh = 0;
		rh = (20 + (2 * this.cellPadding));
		if ( (this.rowHeight > 0) ) {
			rh = (this.rowHeight + (2 * this.cellPadding));
		}
		var rowsHeight = 0;
		rowsHeight = ((rh * this.pageSize) + 1);
		var headerHeight = 0;
		headerHeight = 22;
		if ( this.fixFirstColumn ) {
			rowsHeight = (rowsHeight + headerHeight);
		}
		var scroller = null;
		scroller = egl.checkNull(this.grid).getElementById((egl.checkNull(this.grid).getID() + "-scroller") );
		if ( (rowsHeight > 0) ) {
			if ( this.fixFirstColumn ) {
				egl.checkNull(this.ui).setHeight((rowsHeight).toString());
			}
			else {
				if ( (scroller != null) ) {
					scroller.setHeight( (rowsHeight).toString() );
				}
			}
		}
		if ( ((((this.getWidth() == "") || (this.getWidth() == "auto")) && this.fixFirstColumn) && (this.data.getSize() > this.pageSize)) ) {
			egl.checkNull(this.ui).setWidth(((this.headerWidth + 17)).toString());
		}
		
	}
	,
	"updateDimensions": function() {
		var rowsHeight = 0;
		rowsHeight = 0;
		var height = 0;
		if ( this.showScrollbar ) {
			if ( (this.getPixelHeight() > 0) ) {
				height = this.getPixelHeight();
			}
			var scroller = null;
			scroller = egl.checkNull(this.grid).getElementById((egl.checkNull(this.grid).getID() + "-scroller") );
			var lastRow = 0;
			lastRow = ((this._startRow + this.pageSize) - 1);
			var _lastShownRow = 0;
			_lastShownRow = lastRow;
			var row = null;
			row = egl.checkNull(this.grid).getElementById(((egl.checkNull(this.grid).getID() + "-row-") + (_lastShownRow).toString()) );
			while ( ((row == null) && (_lastShownRow > 0)) ) {
				_lastShownRow = (_lastShownRow - 1);
				row = egl.checkNull(this.grid).getElementById(((egl.checkNull(this.grid).getID() + "-row-") + (_lastShownRow).toString()) );
			}
			if ( (row != null) ) {
				rowsHeight = (row.getY() + row.getPixelHeight());
			}
			if ( (scroller != null) ) {
				rowsHeight = (rowsHeight - scroller.getY());
			}
			if ( ((rowsHeight <= 0) && (lastRow > 0)) ) {
				var rh = 0;
				rh = (20 + (2 * this.cellPadding));
				if ( (this.rowHeight > 0) ) {
					rh = (this.rowHeight + (2 * this.cellPadding));
				}
				rowsHeight = ((rh * lastRow) + 1);
			}
			var headerHeight = 0;
			headerHeight = 22;
			var header = null;
			header = egl.checkNull(this.grid).getElementById((egl.checkNull(this.grid).getID() + "-header") );
			if ( (header != null) ) {
				if ( (header.getPixelHeight() > 0) ) {
					headerHeight = header.getPixelHeight();
				}
				if ( !(this.fixFirstColumn) ) {
					height = (height - headerHeight);
				}
				if ( (height < 0) ) {
					height = 0;
				}
			}
			if ( this.fixFirstColumn ) {
				rowsHeight = (rowsHeight + headerHeight);
			}
			if ( ((height > 0) && (height < rowsHeight)) ) {
				rowsHeight = height;
			}
			if ( (rowsHeight > 0) ) {
				if ( this.fixFirstColumn ) {
					egl.checkNull(this.ui).setHeight((rowsHeight).toString());
				}
				else {
					if ( (scroller != null) ) {
						scroller.setHeight( (rowsHeight).toString() );
					}
				}
			}
		}
		
	}
	,
	"enableDragging": function() {
		var columnCount = 0;
		columnCount = this.columns.getSize();
		var tds = null;
		tds = egl.checkNull(this.grid).getElementsByTagName("span" );
		var count = 0;
		count = tds.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				if ( (egl.like(egl.checkNull(tds)[tds.checkIndex((n)-1)].getID(), (egl.checkNull(this.grid).getID() + "-header-%"), "\\") && (egl.checkNull(tds)[tds.checkIndex((n)-1)].getID() != (egl.checkNull(this.grid).getID() + "-header-checkbox"))) ) {
					var header = null;
					header = egl.checkNull(tds)[tds.checkIndex((n)-1)];
					header.setOnStartDrag( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.startDrag) );
					header.setOnDrag( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.dragColumn) );
					header.setOnDropOnTarget( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.endDrag) );
				}
			}
		}
		
	}
	,
	"startDrag": function( w, startX, startY ) {
		var $result = false;
		$result = true;
		return $result;
	}
	,
	"dragColumn": function( w, dropw, dragX, dragY ) {
		var column = 0;
		column = egl.convertAnyToInt(egl.boxAny(w.getAttribute("column" )),false);
		var target = 0;
		target = this.getTargetColumn(dragX );
		egl.checkNull(this.ui).appendChild(this.columnDragger );
		egl.checkNull(this.columnDragger).setPosition("absolute");
		egl.checkNull(this.columnDragger).setY(egl.checkNull(this.grid).getY());
		egl.checkNull(this.columnDragger).setWidth((4).toString());
		egl.checkNull(this.columnDragger).setHeight((egl.checkNull(this.grid).getPixelHeight()).toString());
		egl.checkNull(this.columnDragger).setVisible(true);
		try {
			var header = null;
			header = egl.checkNull(this.grid).getElementById(((egl.checkNull(this.grid).getID() + "-header-") + (target).toString()) );
			egl.checkNull(this.columnDragger).setX((header.getX() - 5));
		}
		catch ( ezert$$23 )
		{
			{
				if (!(ezert$$23 instanceof egl.egl.core.AnyException)) {
					ezert$$23 = egl.makeExceptionFromCaughtObject(ezert$$23);
				}
				var e = ezert$$23;
				egl.checkNull(this.columnDragger).setX(((egl.checkNull(this.grid).getX() + egl.checkNull(this.grid).getPixelWidth()) - 5));
			}
		}
		
	}
	,
	"getTargetColumn": function( x ) {
		var $result = 0;
		var columnCount = 0;
		columnCount = this.columns.getSize();
		var dx = 0;
		dx = egl.checkNull(this.ui).getX();
		{
			var column = 0;
			column = 1;
			for ( ; (column <= columnCount); column = (column + 1) )
			{
				var w = 0;
				w = ((2 * this.cellPadding) + egl.convertStringToInt(egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)]).width));
				if ( ((x > dx) && (x < (dx + w))) ) {
					$result = column;
					return $result;
				}
				dx = (dx + w);
			}
		}
		return $result;
	}
	,
	"endDrag": function( w, dropw, dragX, dragY ) {
		var column = 0;
		column = egl.convertAnyToInt(egl.boxAny(w.getAttribute("column" )),false);
		var target = 0;
		target = this.getTargetColumn(dragX );
		var columnCount = 0;
		columnCount = this.columns.getSize();
		if ( ((target != column) && egl.checkNull(this.columnDragger).getVisible()) ) {
			var draggedColumn = null;
			draggedColumn = egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)];
			this.columns.removeElement( column );
			try {
				if ( (target > columnCount) ) {
					this.columns.appendElement( draggedColumn );
				}
				else {
					if ( (target > column) ) {
						this.columns.insertElement( draggedColumn, (target - 1) );
					}
					else {
						this.columns.insertElement( draggedColumn, target );
					}
				}
			}
			catch ( ezert$$24 )
			{
				{
					if (!(ezert$$24 instanceof egl.egl.core.AnyException)) {
						ezert$$24 = egl.makeExceptionFromCaughtObject(ezert$$24);
					}
					var e = ezert$$24;
					this.columns.appendElement( draggedColumn );
				}
			}
			this.render();
		}
		else {
			egl.checkNull(this.columnDragger).setX(((egl.checkNull(this.grid).getX() + egl.checkNull(this.grid).getPixelWidth()) + 5));
			egl.checkNull(this.columnDragger).setVisible(false);
		}
		
	}
	,
	"renderButtonBar": function() {
		if ( (((this.showButtonBar && !(this.showScrollbar)) && (this.pageSize > 0)) && (this.data.getSize() > this.pageSize)) ) {
			var pageCount = 0;
			pageCount = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide(this.data.getSize(), this.pageSize)),egl.createRuntimeException);
			var page = 0;
			page = egl.convertDecimalToInt((new egl.javascript.BigDecimal(String(1))).add(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize))),egl.createRuntimeException);
			if ( (egl.remainder(this.data.getSize(), this.pageSize) > 0) ) {
				pageCount = (pageCount + 1);
			}
			var pageText = "";
			pageText = this.pagingLabel;
			this.replaceMarker(pageText, function(eze$$inout$s) {
				pageText = eze$$inout$s;
			}, "{page}", (page).toString(), this );
			this.replaceMarker(pageText, function(eze$$inout$s) {
				pageText = eze$$inout$s;
			}, "{pageCount}", (pageCount).toString(), this );
			egl.checkNull(this.gotoStartButton).setDisabled((page == 1));
			egl.checkNull(this.gotoPageBackButton).setDisabled((page == 1));
			egl.checkNull(this.pageTextLabel).setText(pageText);
			egl.checkNull(this.gotoPageForwardButton).setDisabled((page == pageCount));
			egl.checkNull(this.gotoEndButton).setDisabled((page == pageCount));
			egl.checkNull(this.ui).setChildren( [ this.grid, this.buttonBar ] );
		}
		else {
			egl.checkNull(this.ui).setChildren( [ this.grid ] );
		}
		
	}
	,
	"replaceMarker": function( s, eze$$s$func_, marker, value, eze$$caller ) {
		var index = 0;
		index = egl.egl.core.$StrLib.indexOf( s, marker);
		var ml = 0;
		ml = egl.egl.core.$StrLib.textLen( marker);
		var sl = 0;
		sl = egl.egl.core.$StrLib.textLen( s);
		var prefix = "";
		prefix = "";
		var postfix = "";
		postfix = "";
		if ( (index > 0) ) {
			if ( (index > 1) ) {
				prefix = s.substring( 1-1,(index - 1));
			}
			if ( ((index + ml) < sl) ) {
				postfix = s.substring( (index + ml)-1,sl);
			}
			s = ((prefix + value) + postfix);
			eze$$s$func_.call(eze$$caller,s);
		}
		
	}
	,
	"gotoPage": function( pageIndex ) {
		if ( (pageIndex < 1) ) {
			pageIndex = 1;
		}
		if ( (pageIndex > this.getPageCount()) ) {
			pageIndex = this.getPageCount();
		}
		var oldPageIndex = 0;
		oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
		this._startRow = (((pageIndex - 1) * this.pageSize) + 1);
		this.render();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(this.pageChangeListeners)[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, pageIndex );
			}
		}
		
	}
	,
	"getPageCount": function() {
		var $result = 0;
		$result = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this.data.getSize() - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
		return $result;
	}
	,
	"getCurrentPageIndex": function() {
		var $result = 0;
		$result = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
		return $result;
	}
	,
	"gotoStart": function( e ) {
		var oldPageIndex = 0;
		oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
		this.lastStartRow = this._startRow;
		this._startRow = 1;
		this.render();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(this.pageChangeListeners)[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, 1 );
			}
		}
		
	}
	,
	"gotoPageBack": function( e ) {
		var oldPageIndex = 0;
		oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
		this.lastStartRow = this._startRow;
		this._startRow = (this._startRow - this.pageSize);
		this.render();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(this.pageChangeListeners)[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, (oldPageIndex - 1) );
			}
		}
		
	}
	,
	"gotoPageForward": function( e ) {
		var oldPageIndex = 0;
		oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
		this.lastStartRow = this._startRow;
		this._startRow = (this._startRow + this.pageSize);
		this.render();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(this.pageChangeListeners)[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, (oldPageIndex + 1) );
			}
		}
		
	}
	,
	"gotoEnd": function( e ) {
		var oldPageIndex = 0;
		oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
		var pageCount = 0;
		pageCount = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this.data.getSize() - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
		var leftOver = 0;
		leftOver = egl.remainder(this.data.getSize(), this.pageSize);
		if ( (leftOver == 0) ) {
			leftOver = this.pageSize;
		}
		this.lastStartRow = this._startRow;
		this._startRow = Math.max( 1 ,((this.data.getSize() - leftOver) + 1) );
		this.render();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
			{
				egl.checkNull(this.pageChangeListeners)[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, pageCount );
			}
		}
		
	}
	,
	"updateHighlights": function() {
		var divs = null;
		divs = egl.checkNull(this.grid).getElementsByTagName("div" );
		var divCount = 0;
		divCount = divs.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= divCount); n = (n + 1) )
			{
				var row = 0;
				row = egl.convertAnyToInt(egl.boxAny(egl.checkNull(divs)[divs.checkIndex((n)-1)].getAttribute("row" )),false);
				if ( ((row > 0) && (egl.checkNull(divs)[divs.checkIndex((n)-1)].getID() == ((this.internalID + "-row-") + (row).toString()))) ) {
					var selected = false;
					selected = this.util.getSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])) );
					this.selectRow(egl.checkNull(divs)[divs.checkIndex((n)-1)], selected );
				}
			}
		}
		if ( this.showCheckBoxes ) {
			var checkBoxes = null;
			checkBoxes = egl.checkNull(this.grid).getElementsByTagName("input" );
			var checkBoxCount = 0;
			checkBoxCount = checkBoxes.getSize();
			{
				var c = 0;
				c = 1;
				for ( ; (c <= checkBoxCount); c = (c + 1) )
				{
					var row = 0;
					row = egl.convertAnyToInt(egl.boxAny(egl.checkNull(checkBoxes)[checkBoxes.checkIndex((c)-1)].getAttribute("row" )),false);
					if ( ((row > 0) && (egl.checkNull(checkBoxes)[checkBoxes.checkIndex((c)-1)].getID() == ((egl.checkNull(this.grid).getID() + "-checkbox-") + (row).toString()))) ) {
						if ( this.util.getChecked(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])) ) ) {
							egl.checkNull(checkBoxes)[checkBoxes.checkIndex((c)-1)].setAttribute("checked", true );
						}
						else {
							egl.checkNull(checkBoxes)[checkBoxes.checkIndex((c)-1)].setAttribute("checked", false );
							egl.checkNull(checkBoxes)[checkBoxes.checkIndex((c)-1)].removeAttribute("checked" );
						}
					}
				}
			}
		}
		
	}
	,
	"checkSelection": function( checkBox ) {
		var inputs = null;
		inputs = egl.checkNull(this.grid).getElementsByTagName("input" );
		var inputCount = 0;
		inputCount = inputs.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= inputCount); n = (n + 1) )
			{
				if ( (egl.checkNull(inputs)[inputs.checkIndex((n)-1)].getID() == checkBox.getID()) ) {
					var isChecked = false;
					isChecked = (("" + egl.convertAnyToString(egl.boxAny(checkBox.getAttribute("checked" )),false)) == "true");
					var row = 0;
					row = egl.convertAnyToInt(egl.boxAny(checkBox.getParent().getParent().getAttribute("row" )),false);
					this.util.setChecked(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])), isChecked );
					this.notifyCheckboxChangeListeners();
				}
			}
		}
		
	}
	,
	"notifyCheckboxChangeListeners": function() {
		{
			var k = 0;
			k = 1;
			for ( ; (k <= this.checkboxListeners.getSize()); k = (k + 1) )
			{
				egl.checkNull(this.checkboxListeners)[this.checkboxListeners.checkIndex((k)-1)]( this );
			}
		}
		
	}
	,
	"setChecked": function( checked ) {
		this.setAllUnchecked();
		var len = 0;
		len = checked.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= len); n = (n + 1) )
			{
				this.util.setChecked(egl.unboxAny(egl.boxAny(egl.checkNull(checked)[checked.checkIndex((n)-1)])), true );
			}
		}
		this.updateHighlights();
		this.notifyCheckboxChangeListeners();
		
	}
	,
	"getChecked": function() {
		var $result = null;
		var result = (function(){ var ezert$$25= []; ezert$$25.setType( "A;" );for (var i=0; i < 0; i++) {
				ezert$$25[ i ] = null;
			}
			// no max size set for this array
		return ezert$$25;})();
		var count = 0;
		count = this.data.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				if ( this.util.getChecked(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((n)-1)])) ) ) {
					result.appendElement( egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((n)-1)]) );
				}
			}
		}
		$result = result;
		return $result;
	}
	,
	"setAllUnchecked": function() {
		var count = 0;
		count = this.data.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				var object = null;
				object = egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((n)-1)]);
				if ( (object != null) ) {
					this.util.setChecked(egl.unboxAny(object), false );
				}
			}
		}
		
	}
	,
	"uncheckAll": function() {
		this.setAllUnchecked();
		this.updateHighlights();
		this.notifyCheckboxChangeListeners();
		
	}
	,
	"setAllChecked": function() {
		var count = 0;
		count = this.data.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				var object = null;
				object = egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((n)-1)]);
				if ( (object != null) ) {
					this.util.setChecked(egl.unboxAny(object), true );
				}
			}
		}
		
	}
	,
	"checkAll": function() {
		this.setAllChecked();
		this.updateHighlights();
		this.notifyCheckboxChangeListeners();
		
	}
	,
	"setSelectionMode": function( value ) {
		this.selectionMode = value;
		this.setAllDeselected();
		this.updateHighlights();
		
	}
	,
	"getSelectionMode": function() {
		var $result = 0;
		$result = this.selectionMode;
		return $result;
	}
	,
	"selectRow": function( div, selected ) {
		var row = 0;
		row = egl.convertAnyToInt(egl.boxAny(div.getAttribute("row" )),false);
		if ( (row > 0) ) {
			if ( selected ) {
				this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])), true );
				this.addClass(div, "EglRuiDataGridRowSelected" );
			}
			else {
				this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])), false );
				this.removeClass(div, "EglRuiDataGridRowSelected" );
			}
		}
		
	}
	,
	"clickGrid": function( e ) {
		this.lastEvent = e;
		var widget = null;
		widget = this.getCellWidget(e );
		while ( ((widget.getClass() != "EglRuiDataGrid") && (egl.convertAnyToInt(egl.boxAny(widget.getAttribute("column" )),false) == 0)) ) {
			widget = widget.getParent();
		}
		if ( (egl.egl.core.$StrLib.indexOf( (widget.getID()), this.internalID) != 1) ) {
			return;
		}
		if ( (widget.getClass() != "EglRuiDataGrid") ) {
			var row = 0;
			row = egl.convertAnyToInt(egl.boxAny(widget.getAttribute("row" )),false);
			if ( ((row > 0) && (this.selectionMode != 0)) ) {
				if ( (this.selectionMode == 1) ) {
					this.setAllDeselected();
					this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])), true );
				}
				else {
					if ( (e.ctrlKey || e.metaKey) ) {
						if ( this.util.getSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])) ) ) {
							this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])), false );
						}
						else {
							this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])), true );
						}
					}
					else {
						if ( (e.shiftKey && (this.lastSelectedRow > 0)) ) {
							this.setAllDeselected();
							var start = 0;
							start = Math.min( row ,this.lastSelectedRow );
							var finish = 0;
							finish = Math.max( row ,this.lastSelectedRow );
							{
								var n = 0;
								n = start;
								for ( ; (n <= finish); n = (n + 1) )
								{
									this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((n)-1)])), true );
								}
							}
						}
						else {
							this.setAllDeselected();
							this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((row)-1)])), true );
						}
					}
					this.lastSelectedRow = row;
				}
				this.updateHighlights();
				this.notifySelectionChangeListeners();
			}
			else {
				if ( ((row == 0) && this.enableSorting) ) {
					this.sortColumn(widget );
				}
			}
		}
		
	}
	,
	"notifySelectionChangeListeners": function() {
		{
			var k = 0;
			k = 1;
			for ( ; (k <= this.selectionListeners.getSize()); k = (k + 1) )
			{
				egl.checkNull(this.selectionListeners)[this.selectionListeners.checkIndex((k)-1)]( this );
			}
		}
		
	}
	,
	"setAllDeselected": function() {
		var count = 0;
		count = this.data.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				var object = null;
				object = egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((n)-1)]);
				if ( (object != null) ) {
					this.util.setSelected(egl.unboxAny(object), false );
				}
			}
		}
		
	}
	,
	"deselectAll": function() {
		this.setAllDeselected();
		this.updateHighlights();
		this.notifySelectionChangeListeners();
		
	}
	,
	"setAllSelected": function() {
		var count = 0;
		count = this.data.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				var object = null;
				object = egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((n)-1)]);
				if ( (object != null) ) {
					this.util.setSelected(egl.unboxAny(object), true );
				}
			}
		}
		
	}
	,
	"selectAll": function() {
		this.setAllSelected();
		this.updateHighlights();
		this.notifySelectionChangeListeners();
		
	}
	,
	"addClass": function( widget, ezekw$$class ) {
		this.removeClass(widget, ezekw$$class );
		widget.setClass( (widget.getClass() + (" " + ezekw$$class)) );
		
	}
	,
	"removeClass": function( widget, ezekw$$class ) {
		var s = "";
		s = widget.getClass();
		var index = 0;
		index = egl.egl.core.$StrLib.indexOf( s, ezekw$$class);
		var ml = 0;
		ml = egl.egl.core.$StrLib.textLen( ezekw$$class);
		var sl = 0;
		sl = egl.egl.core.$StrLib.textLen( s);
		var prefix = "";
		prefix = "";
		var postfix = "";
		postfix = "";
		if ( (index > 0) ) {
			if ( (index > 1) ) {
				prefix = s.substring( 1-1,(index - 1));
			}
			if ( ((index + ml) < sl) ) {
				postfix = s.substring( (index + ml)-1,sl);
			}
			widget.setClass( (prefix + postfix) );
		}
		
	}
	,
	"setSelection": function( selection ) {
		if ( (this.selectionMode == 0) ) {
			return;
		}
		this.setAllDeselected();
		var len = 0;
		len = selection.getSize();
		if ( (this.selectionMode == 1) ) {
			len = 1;
		}
		{
			var n = 0;
			n = 1;
			for ( ; (n <= len); n = (n + 1) )
			{
				this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(selection)[selection.checkIndex((n)-1)])), true );
			}
		}
		this.updateHighlights();
		this.notifySelectionChangeListeners();
		
	}
	,
	"getSelection": function() {
		var $result = null;
		var result = (function(){ var ezert$$26= []; ezert$$26.setType( "A;" );for (var i=0; i < 0; i++) {
				ezert$$26[ i ] = null;
			}
			// no max size set for this array
		return ezert$$26;})();
		var count = 0;
		count = this.data.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				if ( this.util.getSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((n)-1)])) ) ) {
					result.appendElement( egl.boxAny(egl.checkNull(this.data)[this.data.checkIndex((n)-1)]) );
				}
			}
		}
		$result = result;
		return $result;
	}
	,
	"setEnableSorting": function( value ) {
		this.enableSorting = value;
		var columnCount = 0;
		columnCount = this.columns.getSize();
		{
			var column = 0;
			column = 1;
			for ( ; (column <= columnCount); column = (column + 1) )
			{
				egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)]).enableSorting = value;
				egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)]).sortDirection = 0;
			}
		}
		
	}
	,
	"getEnableSorting": function() {
		var $result = false;
		$result = this.enableSorting;
		return $result;
	}
	,
	"sortColumn": function( widget ) {
		var column = 0;
		column = egl.convertAnyToInt(egl.boxAny(widget.getAttribute("column" )),false);
		while ( ((column == 0) && (widget.getClass() != "EglRuiDataGrid")) ) {
			widget = widget.getParent();
			column = egl.convertAnyToInt(egl.boxAny(widget.getAttribute("column" )),false);
		}
		if ( ((column != 0) && egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)]).enableSorting) ) {
			this.sortedColumn = column;
			{
				var n = 0;
				n = 1;
				for ( ; (n <= this.columns.getSize()); n = (n + 1) )
				{
					if ( (n != column) ) {
						egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]).sortDirection = 0;
					}
				}
			}
			var c = null;
			c = egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)];
			if ( (egl.checkNull(c).sortDirection == 0) ) {
				egl.checkNull(c).sortDirection = 2;
			}
			else {
				egl.checkNull(c).sortDirection = (3 - egl.checkNull(c).sortDirection);
			}
			try {
				if ( (egl.checkNull(c).columnComparator != null) ) {
					this.data = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(c).name, (egl.checkNull(c).sortDirection == 2), egl.checkNull(c).ignoreCase, function() {
						var ezert$$27 = null;
						
						ezert$$27 = egl.checkNull(c).columnComparator;
					; return ezert$$27;}.call(this) ));
				}
				else {
					this.data = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(c).name, (egl.checkNull(c).sortDirection == 2), egl.checkNull(c).ignoreCase, null ));
				}
				this.render();
				{
					var k = 0;
					k = 1;
					for ( ; (k <= this.sortListeners.getSize()); k = (k + 1) )
					{
						egl.checkNull(this.sortListeners)[this.sortListeners.checkIndex((k)-1)]( this, c );
					}
				}
			}
			catch ( ezert$$28 )
			{
				{
					if (!(ezert$$28 instanceof egl.egl.core.AnyException)) {
						ezert$$28 = egl.makeExceptionFromCaughtObject(ezert$$28);
					}
					var e = ezert$$28;
					throw (function () {
						var ezert$$29 = egl.createRuntimeException();
						egl.checkNull(ezert$$29).message = ((("Sort fail " + egl.checkNull(e).messageID) + " : ") + egl.checkNull(e).message);
						return ezert$$29;
					}).call(this);
				}
			}
		}
		
	}
	,
	"layout": function() {
		this.setData(this.data );
		
	}
	,
	"getData": function() {
		var $result = null;
		$result = this.data;
		return $result;
	}
	,
	"getCellWidget": function( e ) {
		var $result = null;
		$result = this.util.getOriginalTarget(e );
		return $result;
	}
	,
	"getColumn": function( td ) {
		var $result = null;
		var column = 0;
		column = egl.convertAnyToInt(egl.boxAny(td.getAttribute("column" )),false);
		$result = egl.checkNull(this.columns)[this.columns.checkIndex((column)-1)];
		return $result;
	}
	,
	"getCell": function( row, fieldName ) {
		var $result = null;
		var tds = null;
		tds = egl.checkNull(this.grid).getElementsByTagName("div" );
		var count = 0;
		count = tds.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= count); n = (n + 1) )
			{
				var rowNum = 0;
				rowNum = this.util.getIntAttribute(egl.checkNull(tds)[tds.checkIndex((n)-1)], "row" );
				var columnNum = 0;
				columnNum = this.util.getIntAttribute(egl.checkNull(tds)[tds.checkIndex((n)-1)], "column" );
				if ( ((((rowNum == row) && (columnNum > 0)) && (columnNum <= this.columns.getSize())) && (egl.checkNull(egl.checkNull(this.columns)[this.columns.checkIndex((columnNum)-1)]).name == fieldName)) ) {
					$result = egl.checkNull(tds)[tds.checkIndex((n)-1)];
					return $result;
				}
			}
		}
		$result = null;
		return $result;
	}
	,
	"getColumns": function() {
		var $result = null;
		$result = this.columns;
		return $result;
	}
	,
	"setColumns": function( columns ) {
		this.columns = columns;
		this.render();
		
	}
	,
	"getShowCheckBoxes": function() {
		var $result = false;
		$result = this.showCheckBoxes;
		return $result;
	}
	,
	"setShowCheckBoxes": function( showCheckBoxes ) {
		this.showCheckBoxes = showCheckBoxes;
		this.render();
		
	}
	,
	"getShowScrollbar": function() {
		var $result = false;
		$result = this.showScrollbar;
		return $result;
	}
	,
	"setShowScrollbar": function( showScrollbar ) {
		this.showScrollbar = showScrollbar;
		this.render();
		
	}
	,
	"getFixFirstColumn": function() {
		var $result = false;
		$result = this.fixFirstColumn;
		return $result;
	}
	,
	"setFixFirstColumn": function( fixFirstColumn ) {
		this.fixFirstColumn = fixFirstColumn;
		this.render();
		
	}
	,
	"getShowButtonBar": function() {
		var $result = false;
		$result = this.showButtonBar;
		return $result;
	}
	,
	"setShowButtonBar": function( showButtonBar ) {
		this.showButtonBar = showButtonBar;
		this.render();
		
	}
	,
	"getShowHeader": function() {
		var $result = false;
		$result = this.showHeader;
		return $result;
	}
	,
	"setShowHeader": function( showHeader ) {
		this.showHeader = showHeader;
		this.render();
		
	}
	,
	"getManageEditorBehaviors": function() {
		var $result = false;
		$result = this.manageEditorBehaviors;
		return $result;
	}
	,
	"setManageEditorBehaviors": function( manageEditorBehaviors ) {
		this.manageEditorBehaviors = manageEditorBehaviors;
		this.render();
		
	}
	,
	"getEncodeValue": function() {
		var $result = false;
		$result = this.encodeValue;
		return $result;
	}
	,
	"setEncodeValue": function( encodeValue ) {
		this.encodeValue = encodeValue;
		this.render();
		
	}
	,
	"getCellPadding": function() {
		var $result = 0;
		$result = this.cellPadding;
		return $result;
	}
	,
	"setCellPadding": function( cellPadding ) {
		this.cellPadding = cellPadding;
		this.render();
		
	}
	,
	"getCellBorder": function() {
		var $result = 0;
		$result = this.cellBorder;
		return $result;
	}
	,
	"setCellBorder": function( cellBorder ) {
		this.cellBorder = cellBorder;
		this.render();
		
	}
	,
	"getRowHeight": function() {
		var $result = 0;
		$result = this.rowHeight;
		return $result;
	}
	,
	"setrowHeight": function( rowHeight ) {
		this.rowHeight = rowHeight;
		this.render();
		
	}
	,
	"getCheckBoxWidth": function() {
		var $result = 0;
		$result = this.checkBoxWidth;
		return $result;
	}
	,
	"setCheckBoxWidth": function( checkBoxWidth ) {
		this.checkBoxWidth = checkBoxWidth;
		this.render();
		
	}
	,
	"getStartRow": function() {
		var $result = 0;
		$result = this.startRow;
		return $result;
	}
	,
	"setStartRow": function( startRow ) {
		this.startRow = startRow;
		var page = 0;
		page = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((startRow - 1), this.pageSize)),egl.createRuntimeException);
		this._startRow = ((page * this.pageSize) + 1);
		this.render();
		
	}
	,
	"getPageSize": function() {
		var $result = 0;
		$result = this.pageSize;
		return $result;
	}
	,
	"setPageSize": function( pageSize ) {
		this.pageSize = pageSize;
		this.setStartRow(this.startRow );
		
	}
	,
	"getAllowEmptyRows": function() {
		var $result = false;
		$result = this.allowEmptyRows;
		return $result;
	}
	,
	"setAllowEmptyRows": function( allowEmptyRows ) {
		this.allowEmptyRows = allowEmptyRows;
		this.render();
		
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
		this.reverseTextDirectionThis = reverseTextDirection;
		this.render();
		
	}
	,
	"getReverseTextDirection": function() {
		var $result = "";
		$result = this.reverseTextDirectionThis;
		return $result;
	}
	,
	"setTextLayout": function( textLayout ) {
		this.textLayoutThis = textLayout;
		this.render();
		
	}
	,
	"getTextLayout": function() {
		var $result = "";
		$result = this.textLayoutThis;
		return $result;
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
		egl.checkNull(this.ui).setWidgetOrientation(widgetOrientation );
		if ( (egl.checkNull(this.grid).getInnerHTML() != null) ) {
			this.render();
		}
		;
		
	}
	,
	"lockCell": function( e ) {
		if ( this.fixFirstColumn ) {
			this.util.lockCol(this.ui, this.internalID );
		}
		
	}
	,
	"toString": function() {
		return "[DataGrid]";
	}
}
);
