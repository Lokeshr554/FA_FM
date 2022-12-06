// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Grid', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Grid.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Grid',
	"constructor" : function()
	{
		this.data = (function(){ var ezert$$1= []; ezert$$1.setType( "A;" );// no max size set for this array
		return ezert$$1;})();
		
		this.div = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "div");
		
		this.columns = (function(){ var ezert$$2= []; ezert$$2.setType( egl.com.ibm.egl.rui.widgets.GridColumn );for (var i=0; i < 0; i++) {
				ezert$$2[ i ] = new egl.com.ibm.egl.rui.widgets.GridColumn();
			}
			// no max size set for this array
		return ezert$$2;})();
		
		this.behaviors = (function(){ var ezert$$3= []; ezert$$3.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$3[ i ] = null;
			}
			// no max size set for this array
		return ezert$$3;})();
		
		this.headerBehaviors = (function(){ var ezert$$4= []; ezert$$4.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$4[ i ] = null;
			}
			// no max size set for this array
		return ezert$$4;})();
		
		this.reverseTextDirectionThis = "";
		this.textLayoutThis = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.core.MathLib();
		this.targetWidget = this.div;
		egl.checkNull(this.div).setChildren( [  ] );
		this.reverseTextDirectionThis = "No";
		this.textLayoutThis = "Logical";
	}
	
	,
	"setData": function( data ) {
		this.data = data;
		var box = new egl.com.ibm.egl.rui.widgets.Box();
		egl.checkNull(box).table.setClass( "EglRuiGridTable" );
		egl.checkNull(box).setColumns(this.columns.getSize());
		{
			var c = 0;
			c = 1;
			for ( ; (c <= this.columns.getSize()); c = (c + 1) )
			{
				var span = new egl.com.ibm.egl.rui.widgets.Span();
				egl.checkNull(span).setText(egl.checkNull(this.columns)[this.columns.checkIndex((c)-1)].name);
				if ( (egl.checkNull(this.columns)[this.columns.checkIndex((c)-1)].displayName != "") ) {
					egl.checkNull(span).setText(egl.checkNull(this.columns)[this.columns.checkIndex((c)-1)].displayName);
				}
				egl.checkNull(box).appendChild(span );
				var td = null;
				td = egl.checkNull(box).lastRow.getChildren()[egl.checkNull(box).lastRow.getChildren().checkIndex((egl.checkNull(box).lastRow.getChildren().getSize())-1)];
				td.setClass( "EglRuiGridHeader EglRuiAlignCenter" );
				td.setAttribute("width", Math.max( 40 ,egl.checkNull(this.columns)[this.columns.checkIndex((c)-1)].width ) );
				td.setLogicalParent(  this );
				egl.checkNull(span).setLogicalParent(  this );
				if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
					egl.checkNull(span).setTextLayout(this.textLayoutThis);
					egl.checkNull(span).setReverseTextDirection(this.reverseTextDirectionThis);
				}
				{
					var k = 0;
					k = 1;
					for ( ; (k <= this.headerBehaviors.getSize()); k = (k + 1) )
					{
						egl.checkNull(this.headerBehaviors)[this.headerBehaviors.checkIndex((k)-1)]( this, td, null, 0, function() {
							var ezert$$5 = new egl.com.ibm.egl.rui.widgets.GridColumn();
							
							ezert$$5.eze$$assign(egl.checkNull(this.columns)[this.columns.checkIndex((c)-1)]);
						; return ezert$$5;}.call(this) );
					}
				}
			}
		}
		{
			var n = 0;
			n = 1;
			for ( ; (n <= data.getSize()); n = (n + 1) )
			{
				{
					var c = 0;
					c = 1;
					for ( ; (c <= this.columns.getSize()); c = (c + 1) )
					{
						var html = new egl.com.ibm.egl.rui.widgets.HTML();
						var val = null;
						val = egl.valueByKey(egl.checkNull(egl.boxAny(egl.checkNull(data)[data.checkIndex((n)-1)])), egl.checkNull(this.columns)[this.columns.checkIndex((c)-1)].name);
						if ( (val == null) ) {
							egl.checkNull(html).setText("");
						}
						else {
							egl.checkNull(html).setText(("" + egl.convertAnyToString(val,false)));
						}
						egl.checkNull(box).appendChild(html );
						var td = null;
						td = egl.checkNull(box).lastRow.getChildren()[egl.checkNull(box).lastRow.getChildren().checkIndex((egl.checkNull(box).lastRow.getChildren().getSize())-1)];
						td.setClass( "EglRuiGridCell" );
						td.setLogicalParent(  this );
						egl.checkNull(html).setLogicalParent(  this );
						if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
							egl.checkNull(html).setTextLayout(this.textLayoutThis);
							egl.checkNull(html).setReverseTextDirection(this.reverseTextDirectionThis);
						}
						{
							var k = 0;
							k = 1;
							for ( ; (k <= this.behaviors.getSize()); k = (k + 1) )
							{
								egl.checkNull(this.behaviors)[this.behaviors.checkIndex((k)-1)]( this, td, egl.boxAny(egl.checkNull(data)[data.checkIndex((n)-1)]), n, function() {
									var ezert$$6 = new egl.com.ibm.egl.rui.widgets.GridColumn();
									
									ezert$$6.eze$$assign(egl.checkNull(this.columns)[this.columns.checkIndex((c)-1)]);
								; return ezert$$6;}.call(this) );
							}
						}
					}
				}
			}
		}
		egl.checkNull(this.div).setChildren( [ box ] );
		
	}
	,
	"getData": function() {
		var $result = null;
		$result = this.data;
		return $result;
	}
	,
	"getColumn": function( td ) {
		var $result = new egl.com.ibm.egl.rui.widgets.GridColumn();
		var tr = null;
		tr = td.getParent();
		var cells = null;
		cells = tr.getChildren();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= cells.getSize()); n = (n + 1) )
			{
				if ( (egl.checkNull(cells)[cells.checkIndex((n)-1)] == td) ) {
					$result.eze$$assign(egl.checkNull(this.columns)[this.columns.checkIndex((n)-1)]);
					return $result;
				}
			}
		}
		$result.setNull(true);
		return $result;
	}
	,
	"layout": function() {
		this.setData(this.data );
		
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
		this.reverseTextDirectionThis = reverseTextDirection;
		this.setBiDiStyles();
		
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
		this.setBiDiStyles();
		
	}
	,
	"getTextLayout": function() {
		var $result = "";
		$result = this.textLayoutThis;
		return $result;
	}
	,
	"setBiDiStyles": function() {
		var boxes = null;
		boxes = egl.checkNull(this.div).getChildren();
		if ( (((boxes != null) && (boxes.getSize() != null)) && (boxes.getSize() > 0)) ) {
			var box = null;
			{
				var eze$$src = egl.checkNull(boxes)[boxes.checkIndex((1)-1)];
				if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.Box)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.Box' ], 'Widget', 'com.ibm.egl.rui.widgets.Box' );
			}
			box = egl.checkNull(boxes)[boxes.checkIndex((1)-1)];
			var children = null;
			children = egl.checkNull(box).getChildren();
			if ( (children.getSize() > 0) ) {
				{
					var i = 0;
					i = 1;
					for ( ; (i <= children.getSize()); i = (i + 1) )
					{
						egl.checkNull(children)[children.checkIndex((i)-1)].setTextLayout( this.textLayoutThis );
						egl.checkNull(children)[children.checkIndex((i)-1)].setReverseTextDirection( this.reverseTextDirectionThis );
					}
				}
			}
		}
		
	}
	,
	"toString": function() {
		return "[Grid]";
	}
}
);
