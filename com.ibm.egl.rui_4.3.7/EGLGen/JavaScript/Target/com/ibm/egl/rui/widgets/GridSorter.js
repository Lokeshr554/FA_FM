// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.widgets', 'GridSorter', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/GridSorter.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/GridSorter',
	"constructor" : function()
	{
		this.sortByName = "";
		this.sortingUp = false;
		this.caseIgnore = false;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.ui.rui.RUILib();
		new egl.egl.core.StrLib();
		this.sortingUp = true;
		this.caseIgnore = false;
	}
	
	,
	"columnSorter": function( grid, td, ignoreRow, ignoreRowNumber, column ) {
		td.setClass( (td.getClass() + " EglRuiGridSorterTd") );
		td.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.GridSorter.prototype.sortColumn) );
		var span = null;
		{
			var eze$$src = td.getChildren()[td.getChildren().checkIndex((1)-1)];
			if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.Span)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.Span' ], 'Widget', 'com.ibm.egl.rui.widgets.Span' );
		}
		span = td.getChildren()[td.getChildren().checkIndex((1)-1)];
		var div = new egl.com.ibm.egl.rui.widgets.Div();
		egl.checkNull(span).setStyle("float: left;");
		td.setChildren( [ div ] );
		var image = new egl.com.ibm.egl.rui.widgets.Span();
		egl.checkNull(image).setWidth((0).toString());
		egl.checkNull(image).setHeight((0).toString());
		egl.checkNull(image).setStyle("display: inline-block;");
		if ( (column.name == this.sortByName) ) {
			if ( this.sortingUp ) {
				egl.checkNull(image).setClass("EglRuiGridSorterArrayUp");
			}
			else {
				egl.checkNull(image).setClass("EglRuiGridSorterArrayDown");
			}
			egl.checkNull(image).setWidth((7).toString());
			egl.checkNull(image).setHeight((8).toString());
			egl.checkNull(image).setMarginLeft(4);
			egl.checkNull(image).setStyle("float:left");
		}
		egl.checkNull(div).setChildren( [ span, image ] );
		egl.checkNull(div).setClass("EglRuiGridSorterDiv");
		
	}
	,
	"sortColumn": function( e ) {
		var td = null;
		td = e.widget;
		var grid = null;
		{
			var eze$$src = td.getLogicalParent();
			if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.Grid)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.Grid' ], 'Widget', 'com.ibm.egl.rui.widgets.Grid' );
		}
		grid = td.getLogicalParent();
		this.sortByName = egl.checkNull(grid).getColumn(td ).name;
		var data = null;
		data = egl.checkNull(grid).getData();
		this.sortingUp = !(this.sortingUp);
		egl.egl.ui.rui.RUILib['$inst'].sort(data, new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.GridSorter.prototype.sortFunction), function(eze$$inout$sortFunction) {
		}, this );
		egl.checkNull(grid).setData(data);
		
	}
	,
	"sortFunction": function( a, b ) {
		var $result = 0;
		var result = 0;
		var aString = "";
		var bString = "";
		if ( this.caseIgnore ) {
			aString = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.lowerCase( (egl.convertAnyToString(egl.valueByKey(egl.checkNull(a), this.sortByName),false))));
			bString = (function(x){ return x != null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.lowerCase( (egl.convertAnyToString(egl.valueByKey(egl.checkNull(b), this.sortByName),false))));
		}
		else {
			aString = egl.convertAnyToString(egl.valueByKey(egl.checkNull(a), this.sortByName),false);
			bString = egl.convertAnyToString(egl.valueByKey(egl.checkNull(b), this.sortByName),false);
		}
		if ( (aString < bString) ) {
			result = 1;
		}
		else {
			result = (-1);
		}
		if ( this.sortingUp ) {
			result = -(result);
		}
		$result = result;
		return $result;
	}
	,
	"toString": function() {
		return "[GridSorter]";
	}
}
);
