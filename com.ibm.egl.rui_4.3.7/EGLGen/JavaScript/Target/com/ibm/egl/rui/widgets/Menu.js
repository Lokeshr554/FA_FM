// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Menu', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Menu.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Menu',
	"constructor" : function()
	{
		this.titleBar = new egl.com.ibm.egl.rui.widgets.Span();
		egl.addEmbeddedWidget(this, "titleBar");
		
		this.optionsBox = new egl.com.ibm.egl.rui.widgets.Box();
		egl.addEmbeddedWidget(this, "optionsBox");
		
		this.settingOptions = false;
		this.onMenuOpen = null;
		
		this.isOpen = false;
		this.subMenus = (function(){ var ezert$$1= []; ezert$$1.setType( egl.com.ibm.egl.rui.widgets.Menu );for (var i=0; i < 0; i++) {
				ezert$$1[ i ] = new egl.com.ibm.egl.rui.widgets.Menu();
			}
			// no max size set for this array
		return ezert$$1;})();
		
		this.parentMenu = null;
		egl.addEmbeddedWidget(this, "parentMenu");
		
		this.menuBehaviors = (function(){ var ezert$$2= []; ezert$$2.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$2[ i ] = null;
			}
			// no max size set for this array
		return ezert$$2;})();
		
		this.options = (function(){ var ezert$$3= []; ezert$$3.setType( egl.com.ibm.egl.rui.widgets.MenuItem );// no max size set for this array
		return ezert$$3;})();
		
		this.title = "";
		this.widgetOrientationThis = "";
		this.arrowLeft = null;
		egl.addEmbeddedWidget(this, "arrowLeft");
		
		this.arrowRight = null;
		egl.addEmbeddedWidget(this, "arrowRight");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.UtilLib();
		egl.checkNull(this.titleBar).getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.showOptionsEvent) );
		egl.checkNull(this.titleBar).setText("Title");
		egl.checkNull(this.titleBar).setClass("EglRuiMenuTitleBar");
		egl.checkNull(this.optionsBox).getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.hideOptionsEvent) );
		egl.checkNull(this.optionsBox).setColumns(1);
		egl.checkNull(this.optionsBox).setPosition("absolute");
		egl.checkNull(this.optionsBox).setVisibility("hidden");
		this.settingOptions = false;
		this.isOpen = false;
		this.parentMenu = null;
		this.widgetOrientationThis = "LTR";
		this.arrowLeft = null;
		this.arrowRight = null;
		this.start();
	}
	
	,
	"start": function() {
		this.appendChild(this.titleBar );
		this.document.body.appendChild(this.optionsBox );
		
	}
	,
	"setAsSubMenu": function( parent, eze$$parent$func_, eze$$caller ) {
		this.parentMenu = parent;
		if ( (((this.parentMenu != null) && (egl.checkNull(this.parentMenu).widgetOrientationThis == "RTL")) || (this.widgetOrientationThis == "RTL")) ) {
			this.setAttribute("dir", {eze$$value : "rtl", eze$$signature : "S;"} );
			this.arrowLeft = (function () {
				var ezert$$4 = new egl.com.ibm.egl.rui.widgets.Image();
				egl.checkNull(ezert$$4).setSrc("images/ArrowLeft.gif");
				return ezert$$4;
			}).call(this);
			var tb = null;
			tb = this.titleBar;
			tb.setDisplayStyle( "inline-block" );
			this.appendChild(this.arrowLeft );
		}
		else {
			this.setAttribute("dir", {eze$$value : "", eze$$signature : "S;"} );
			this.arrowRight = (function () {
				var ezert$$5 = new egl.com.ibm.egl.rui.widgets.Image();
				egl.checkNull(ezert$$5).setSrc("images/ArrowRight.gif");
				return ezert$$5;
			}).call(this);
			this.appendChild(this.arrowRight );
		}
		this.getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.showOptionsEvent) );
		
	}
	,
	"setTitle": function( titleIn ) {
		this.title = titleIn;
		egl.checkNull(this.titleBar).setText(this.title);
		this.setBehaviors(this.menuBehaviors );
		
	}
	,
	"getTitle": function() {
		var $result = "";
		$result = egl.checkNull(this.titleBar).getText();
		return $result;
	}
	,
	"setOptions": function( op ) {
		this.options = op;
		this.settingOptions = true;
		egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidgetChildren(this.optionsBox );
		{
			var index = 0;
			index = 1;
			for ( ; (index <= op.getSize()); index = (index + 1) )
			{
				this.addOption(function() {
					var ezert$$6 = new egl.com.ibm.egl.rui.widgets.MenuItem();
					
					ezert$$6.eze$$assign(egl.checkNull(op)[op.checkIndex((index)-1)]);
				; return ezert$$6;}.call(this) );
			}
		}
		if ( (((this.parentMenu != null) && (egl.checkNull(this.parentMenu).widgetOrientationThis == "RTL")) || (this.widgetOrientationThis == "RTL")) ) {
			{
				var index = 0;
				index = 1;
				for ( ; (index <= egl.checkNull(this.optionsBox).getChildren().getSize()); index = (index + 1) )
				{
					var w = null;
					w = egl.checkNull(this.optionsBox).getChildren()[egl.checkNull(this.optionsBox).getChildren().checkIndex((index)-1)];
					w.setWidgetOrientation( "RTL" );
				}
			}
		}
		this.settingOptions = false;
		this.setBehaviorsInternal();
		
	}
	,
	"getOptions": function() {
		var $result = null;
		$result = this.options;
		return $result;
	}
	,
	"addOption": function( newItem ) {
		var widget = null;
		widget = egl.convertAnyToRefType(newItem.itemType(newItem.item, newItem.itemAction, function(eze$$inout$itemAction) {
			newItem.itemAction = eze$$inout$itemAction;
		},  this, this ),"Tegl/ui/rui/widget;",egl.egl.ui.rui.Widget);
		if ( (newItem.id != null) ) {
			widget.setID( (function(x){ return x != null ? ((x).toString()) : ""; })(newItem.id) );
		}
		widget.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.hideOptionsEvent) );
		egl.checkNull(this.optionsBox).appendChild(widget );
		widget.getParent().getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.hideOptionsEvent) );
		if ( !(this.settingOptions) ) {
			this.options.appendElement( (newItem).eze$$clone() );
			this.setBehaviorsInternal();
		}
		
	}
	,
	"setBehaviors": function( behaviors ) {
		this.menuBehaviors = behaviors;
		this.setBehaviorsInternal();
		
	}
	,
	"getBehaviors": function() {
		var $result = null;
		$result = this.menuBehaviors;
		return $result;
	}
	,
	"setBehaviorsInternal": function() {
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.menuBehaviors.getSize()); index = (index + 1) )
			{
				egl.checkNull(this.menuBehaviors)[this.menuBehaviors.checkIndex((index)-1)]( this, this.titleBar, function(eze$$inout$titleBar) {
					this.titleBar = eze$$inout$titleBar;
				}, this.optionsBox, function(eze$$inout$optionsBox) {
					this.optionsBox = eze$$inout$optionsBox;
				}, this.options, function(eze$$inout$options) {
					this.options = eze$$inout$options;
				}, this );
			}
		}
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.subMenus.getSize()); index = (index + 1) )
			{
				egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((index)-1)]).menuBehaviors = this.menuBehaviors;
			}
		}
		
	}
	,
	"showOptionsEvent": function( e ) {
		if ( (this.isOpen && (e.widget == this.titleBar)) ) {
			this.hideOptions(false, function(eze$$inout$closeParent) {
			}, this );
		}
		else {
			this.showOptions();
		}
		e.stopPropagation();
		
	}
	,
	"showOptions": function() {
		this.isOpen = true;
		if ( (this.onMenuOpen != null) ) {
			this.onMenuOpen( this );
		}
		if ( (this.parentMenu != null) ) {
			egl.checkNull(this.parentMenu).closeSubMenus( this );
		}
		if ( (this.parentMenu == null) ) {
			if ( (this.widgetOrientationThis == "RTL") ) {
				egl.checkNull(this.optionsBox).setX(((egl.checkNull(this.titleBar).getX() + egl.checkNull(this.titleBar).getPixelWidth()) - egl.checkNull(this.optionsBox).getPixelWidth()));
			}
			else {
				egl.checkNull(this.optionsBox).setX(egl.checkNull(this.titleBar).getX());
			}
			egl.checkNull(this.optionsBox).setY((egl.checkNull(this.titleBar).getY() + egl.checkNull(this.titleBar).getPixelHeight()));
		}
		else {
			if ( ((egl.checkNull(this.parentMenu).widgetOrientationThis == "RTL") || (this.widgetOrientationThis == "RTL")) ) {
				egl.checkNull(this.optionsBox).setX((egl.checkNull(this.titleBar).getX() - egl.checkNull(this.optionsBox).getPixelWidth()));
				if ( (this.arrowLeft != null) ) {
					egl.checkNull(this.optionsBox).setX((egl.checkNull(this.optionsBox).getX() - egl.checkNull(this.arrowLeft).getPixelWidth()));
				}
				if ( (this.arrowRight != null) ) {
					egl.checkNull(this.optionsBox).setX((egl.checkNull(this.optionsBox).getX() - egl.checkNull(this.arrowRight).getPixelWidth()));
				}
			}
			else {
				egl.checkNull(this.optionsBox).setX((egl.checkNull(this.titleBar).getX() + this.getParent().getPixelWidth()));
				if ( ((egl.checkNull(this.titleBar).getReverseTextDirection() == "Yes") && (this.arrowRight != null)) ) {
					egl.checkNull(this.optionsBox).setX((egl.checkNull(this.optionsBox).getX() - egl.checkNull(this.arrowRight).getPixelWidth()));
				}
			}
			egl.checkNull(this.optionsBox).setY(egl.checkNull(this.titleBar).getY());
		}
		egl.checkNull(this.optionsBox).setVisibility("visible");
		egl.checkNull(this.optionsBox).setZIndex((1).toString());
		
	}
	,
	"hideOptionsEvent": function( e ) {
		this.hideOptions(true, function(eze$$inout$closeParent) {
		}, this );
		e.stopPropagation();
		
	}
	,
	"hideOptions": function( closeParent, eze$$closeParent$func_, eze$$caller ) {
		this.isOpen = false;
		this.closeSubMenus(null );
		if ( ((this.parentMenu != null) && closeParent) ) {
			egl.checkNull(this.parentMenu).hideOptions(closeParent, function(eze$$inout$closeParent) {
				closeParent = eze$$inout$closeParent;
				eze$$closeParent$func_.call(eze$$caller,closeParent);
			}, this );
		}
		egl.checkNull(this.optionsBox).setVisibility("hidden");
		egl.checkNull(this.optionsBox).setZIndex((1).toString());
		
	}
	,
	"closeSubMenus": function( keepOpen ) {
		{
			var index = 0;
			index = 1;
			for ( ; (index <= this.subMenus.getSize()); index = (index + 1) )
			{
				if ( (egl.checkNull(this.subMenus)[this.subMenus.checkIndex((index)-1)] != keepOpen) ) {
					egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((index)-1)]).hideOptions(false, function(eze$$inout$closeParent) {
					}, this );
				}
			}
		}
		
	}
	,
	"encloseInBiDiMarkers": function( optBox, eze$$optBox$func_, eze$$caller ) {
		{
			var index = 0;
			index = 1;
			for ( ; (index <= egl.checkNull(optBox).getChildren().getSize()); index = (index + 1) )
			{
				var w = null;
				w = egl.checkNull(optBox).getChildren()[egl.checkNull(optBox).getChildren().checkIndex((index)-1)];
				if ( (w.getClass() == "EglRuiSpan") ) {
					w.setTextLayout( egl.checkNull(this.titleBar).getTextLayout() );
					w.setReverseTextDirection( egl.checkNull(this.titleBar).getReverseTextDirection() );
				}
				else {
					if ( (w.getClass() == "EglRuiMenu") ) {
						var m = null;
						{
							var eze$$src = w;
							if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.Menu)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.Menu' ], 'Widget', 'com.ibm.egl.rui.widgets.Menu' );
						}
						m = w;
						egl.checkNull(egl.checkNull(m).titleBar).setTextLayout(egl.checkNull(this.titleBar).getTextLayout());
						egl.checkNull(egl.checkNull(m).titleBar).setReverseTextDirection(egl.checkNull(this.titleBar).getReverseTextDirection());
						var b = null;
						b = egl.checkNull(m).optionsBox;
						this.encloseInBiDiMarkers(b, function(eze$$inout$optBox) {
							b = eze$$inout$optBox;
						}, this );
					}
				}
			}
		}
		
	}
	,
	"setTextLayout": function( textLayout ) {
		egl.checkNull(this.titleBar).setTextLayout(textLayout);
		this.encloseInBiDiMarkers(this.optionsBox, function(eze$$inout$optBox) {
			this.optionsBox = eze$$inout$optBox;
		}, this );
		
	}
	,
	"getTextLayout": function() {
		var $result = "";
		$result = egl.checkNull(this.titleBar).getTextLayout();
		return $result;
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
		egl.checkNull(this.titleBar).setReverseTextDirection(reverseTextDirection);
		this.encloseInBiDiMarkers(this.optionsBox, function(eze$$inout$optBox) {
			this.optionsBox = eze$$inout$optBox;
		}, this );
		
	}
	,
	"getReverseTextDirection": function() {
		var $result = "";
		$result = egl.checkNull(this.titleBar).getReverseTextDirection();
		return $result;
	}
	,
	"getWidgetOrientation": function() {
		var $result = "";
		$result = this.widgetOrientationThis;
		return $result;
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
		if ( (widgetOrientation != this.widgetOrientationThis) ) {
			this.widgetOrientationThis = widgetOrientation;
			{
				var index = 0;
				index = 1;
				for ( ; (index <= egl.checkNull(this.optionsBox).getChildren().getSize()); index = (index + 1) )
				{
					var w = null;
					w = egl.checkNull(this.optionsBox).getChildren()[egl.checkNull(this.optionsBox).getChildren().checkIndex((index)-1)];
					w.setWidgetOrientation( widgetOrientation );
				}
			}
			this.setMenuArrowOrientation();
		}
		
	}
	,
	"setMenuArrowOrientation": function() {
		{
			var i = 0;
			i = 1;
			for ( ; (i <= this.subMenus.getSize()); i = (i + 1) )
			{
				if ( (this.widgetOrientationThis == "RTL") ) {
					egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).setAttribute("dir", {eze$$value : "rtl", eze$$signature : "S;"} );
					if ( (egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowLeft != null) ) {
						egl.checkNull(egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowLeft).setVisibility("visible");
					}
					else {
						egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowLeft = (function () {
							var ezert$$7 = new egl.com.ibm.egl.rui.widgets.Image();
							egl.checkNull(ezert$$7).setSrc("images/ArrowLeft.gif");
							return ezert$$7;
						}).call(this);
						var tb = null;
						tb = egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).titleBar;
						tb.setDisplayStyle( "inline-block" );
						egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).appendChild(egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowLeft );
					}
					if ( (egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowRight != null) ) {
						egl.checkNull(egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowRight).setVisibility("hidden");
					}
				}
				else {
					egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).setAttribute("dir", {eze$$value : "", eze$$signature : "S;"} );
					if ( (egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowRight != null) ) {
						egl.checkNull(egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowRight).setVisibility("visible");
					}
					else {
						egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowRight = (function () {
							var ezert$$8 = new egl.com.ibm.egl.rui.widgets.Image();
							egl.checkNull(ezert$$8).setSrc("images/ArrowRight.gif");
							return ezert$$8;
						}).call(this);
						var tb = null;
						tb = egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).titleBar;
						tb.setDisplayStyle( "inline-block" );
						egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).appendChild(egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowRight );
					}
					if ( (egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowLeft != null) ) {
						egl.checkNull(egl.checkNull(egl.checkNull(this.subMenus)[this.subMenus.checkIndex((i)-1)]).arrowLeft).setVisibility("hidden");
					}
				}
			}
		}
		
	}
	,
	"toString": function() {
		return "[Menu]";
	}
}
, 'div'
);
