// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Menu', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Menu.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Menu',
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
			egl.atLine(this.eze$$fileName,22,631,89, this);
			this.titleBar = new egl.com.ibm.egl.rui.widgets.Span();
			egl.addEmbeddedWidget(this, "titleBar");
			
			egl.atLine(this.eze$$fileName,23,723,103, this);
			this.optionsBox = new egl.com.ibm.egl.rui.widgets.Box();
			egl.addEmbeddedWidget(this, "optionsBox");
			
			egl.atLine(this.eze$$fileName,24,829,39, this);
			this.settingOptions = false;
			egl.atLine(this.eze$$fileName,26,874,26, this);
			this.onMenuOpen = null;
			
			egl.atLine(this.eze$$fileName,28,906,23, this);
			this.isOpen = false;
			egl.atLine(this.eze$$fileName,29,932,17, this);
			this.subMenus = (function(){ var ezert$$1= []; ezert$$1.setType( egl.com.ibm.egl.rui.widgets.Menu );for (var i=0; i < 0; i++) {
					ezert$$1[ i ] = new egl.com.ibm.egl.rui.widgets.Menu();
				}
				// no max size set for this array
			return ezert$$1;})();
			
			egl.atLine(this.eze$$fileName,30,952,23, this);
			this.parentMenu = null;
			egl.addEmbeddedWidget(this, "parentMenu");
			
			egl.atLine(this.eze$$fileName,31,978,96, this);
			this.menuBehaviors = (function(){ var ezert$$2= []; ezert$$2.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$2[ i ] = null;
				}
				// no max size set for this array
			return ezert$$2;})();
			
			egl.atLine(this.eze$$fileName,32,1077,81, this);
			this.options = (function(){ var ezert$$3= []; ezert$$3.setType( egl.com.ibm.egl.rui.widgets.MenuItem );// no max size set for this array
			return ezert$$3;})();
			
			egl.atLine(this.eze$$fileName,33,1161,72, this);
			this.title = "";
			egl.atLine(this.eze$$fileName,34,1236,37, this);
			this.widgetOrientationThis = "";
			egl.atLine(this.eze$$fileName,35,1276,23, this);
			this.arrowLeft = null;
			egl.addEmbeddedWidget(this, "arrowLeft");
			
			egl.atLine(this.eze$$fileName,36,1302,24, this);
			this.arrowRight = null;
			egl.addEmbeddedWidget(this, "arrowRight");
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.widgets.UtilLib();
			egl.atLine(this.eze$$fileName,22,645,27, this);
			egl.checkNull(this.titleBar, "titleBar").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.showOptionsEvent,"showOptionsEvent") );
			egl.atLine(this.eze$$fileName,22,674,14, this);
			egl.checkNull(this.titleBar, "titleBar").setText("Title");
			egl.atLine(this.eze$$fileName,22,690,28, this);
			egl.checkNull(this.titleBar, "titleBar").setClass("EglRuiMenuTitleBar");
			egl.atLine(this.eze$$fileName,23,738,27, this);
			egl.checkNull(this.optionsBox, "optionsBox").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.hideOptionsEvent,"hideOptionsEvent") );
			egl.atLine(this.eze$$fileName,23,767,11, this);
			egl.checkNull(this.optionsBox, "optionsBox").setColumns(1);
			egl.atLine(this.eze$$fileName,23,780,21, this);
			egl.checkNull(this.optionsBox, "optionsBox").setPosition("absolute");
			egl.atLine(this.eze$$fileName,23,803,21, this);
			egl.checkNull(this.optionsBox, "optionsBox").setVisibility("hidden");
			egl.atLine(this.eze$$fileName,24,829,39, this);
			this.settingOptions = false;
			egl.atLine(this.eze$$fileName,28,906,23, this);
			this.isOpen = false;
			egl.atLine(this.eze$$fileName,30,952,23, this);
			this.parentMenu = null;
			egl.atLine(this.eze$$fileName,34,1236,37, this);
			this.widgetOrientationThis = "LTR";
			egl.atLine(this.eze$$fileName,35,1276,23, this);
			this.arrowLeft = null;
			egl.atLine(this.eze$$fileName,36,1302,24, this);
			this.arrowRight = null;
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
			egl.atLine(this.eze$$fileName,39,1352,22, this);
			this.appendChild(this.titleBar );
			egl.atLine(this.eze$$fileName,40,1378,38, this);
			this.document.body.appendChild(this.optionsBox );
			egl.atLine(this.eze$$fileName,38,1332,90, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAsSubMenu": function( parent, eze$$parent$func_, eze$$caller ) {
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
		try { egl.enter("setAsSubMenu",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("parent", parent, "com.ibm.egl.rui.widgets.Menu", "parent");
			egl.atLine(this.eze$$fileName,44,1466,20, this);
			this.parentMenu = parent;
			egl.atLine(this.eze$$fileName,45,1490,439, this);
			if ( (((this.parentMenu != null) && (egl.checkNull(this.parentMenu, "parentMenu").widgetOrientationThis == "RTL")) || (this.widgetOrientationThis == "RTL")) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,46,1602,32, this);
					this.setAttribute("dir", {eze$$value : "rtl", eze$$signature : "S;"} );
					egl.atLine(this.eze$$fileName,47,1641,52, this);
					this.arrowLeft = (function () {
						var ezert$$4 = new egl.com.ibm.egl.rui.widgets.Image();
						egl.atLine(this.eze$$fileName,47,1663,28, this);
						egl.checkNull(ezert$$4, "ezert$$4").setSrc("images/ArrowLeft.gif");
						return ezert$$4;
					}).call(this);
					var tb = null;
					egl.addLocalFunctionVariable("tb", tb, "egl.ui.rui.Widget", "tb");
					egl.atLine(this.eze$$fileName,48,1702,21, this);
					tb = this.titleBar;
					egl.setLocalFunctionVariable("tb", tb, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,49,1728,33, this);
					tb.setDisplayStyle( "inline-block" );
					egl.atLine(this.eze$$fileName,50,1766,23, this);
					this.appendChild(this.arrowLeft );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,52,1805,29, this);
					this.setAttribute("dir", {eze$$value : "", eze$$signature : "S;"} );
					egl.atLine(this.eze$$fileName,53,1839,54, this);
					this.arrowRight = (function () {
						var ezert$$5 = new egl.com.ibm.egl.rui.widgets.Image();
						egl.atLine(this.eze$$fileName,53,1862,29, this);
						egl.checkNull(ezert$$5, "ezert$$5").setSrc("images/ArrowRight.gif");
						return ezert$$5;
					}).call(this);
					egl.atLine(this.eze$$fileName,54,1898,24, this);
					this.appendChild(this.arrowRight );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,56,1933,38, this);
			this.getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.showOptionsEvent,"showOptionsEvent") );
			egl.atLine(this.eze$$fileName,43,1428,549, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setTitle": function( titleIn ) {
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
		try { egl.enter("setTitle",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("titleIn", titleIn, "string", "titleIn");
			egl.atLine(this.eze$$fileName,60,2023,16, this);
			this.title = titleIn;
			egl.atLine(this.eze$$fileName,61,2043,22, this);
			egl.checkNull(this.titleBar, "titleBar").setText(this.title);
			egl.atLine(this.eze$$fileName,62,2069,28, this);
			this.setBehaviors(this.menuBehaviors );
			egl.atLine(this.eze$$fileName,59,1983,120, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getTitle": function() {
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
		try { egl.enter("getTitle",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,66,2149,23, this);
			$result = egl.checkNull(this.titleBar, "titleBar").getText();
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setOptions": function( op ) {
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
		try { egl.enter("setOptions",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("op", op, "com.ibm.egl.rui.widgets.MenuItem[]", "!op");
			egl.atLine(this.eze$$fileName,70,2225,13, this);
			this.options = op;
			egl.atLine(this.eze$$fileName,71,2242,22, this);
			this.settingOptions = true;
			egl.atLine(this.eze$$fileName,72,2268,42, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidgetChildren(this.optionsBox );
			egl.atLine(this.eze$$fileName,73,2314,76, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= op.getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,74,2362,21, this);
							this.addOption(function() {
								var ezert$$6 = new egl.com.ibm.egl.rui.widgets.MenuItem();
								
								ezert$$6.eze$$assign(egl.checkNull(op, "op")[op.checkIndex((index)-1)]);
							; return ezert$$6;}.call(this) );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,73,2314,76, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,76,2394,270, this);
			if ( (((this.parentMenu != null) && (egl.checkNull(this.parentMenu, "parentMenu").widgetOrientationThis == "RTL")) || (this.widgetOrientationThis == "RTL")) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,77,2506,148, this);
					{
						try{egl.enterBlock();
							var index = 0;
							egl.addLocalFunctionVariable("index", index, "int", "index");
							index = 1;
							egl.setLocalFunctionVariable("index", index, "int");
							for ( ; (index <= egl.checkNull(this.optionsBox, "optionsBox").getChildren().getSize()); index = (index + 1) )
							{
								egl.setLocalFunctionVariable("index", index, "int");
								try{egl.enterBlock();
									var w = null;
									egl.addLocalFunctionVariable("w", w, "egl.ui.rui.Widget", "w");
									egl.atLine(this.eze$$fileName,78,2574,38, this);
									w = egl.checkNull(this.optionsBox, "optionsBox").getChildren()[egl.checkNull(this.optionsBox, "optionsBox").getChildren().checkIndex((index)-1)];
									egl.setLocalFunctionVariable("w", w, "egl.ui.rui.Widget");
									egl.atLine(this.eze$$fileName,79,2618,28, this);
									w.setWidgetOrientation( "RTL" );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,77,2506,148, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,82,2668,23, this);
			this.settingOptions = false;
			egl.atLine(this.eze$$fileName,83,2695,23, this);
			this.setBehaviorsInternal();
			egl.atLine(this.eze$$fileName,69,2184,540, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getOptions": function() {
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
		try { egl.enter("getOptions",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,87,2776,17, this);
			$result = this.options;
			egl.setLocalFunctionVariable("MenuItem[]", $result, "com.ibm.egl.rui.widgets.MenuItem[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"addOption": function( newItem ) {
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
		try { egl.enter("addOption",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("newItem", newItem, "com.ibm.egl.rui.widgets.MenuItem", "newItem");
			var widget = null;
			egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
			egl.atLine(this.eze$$fileName,91,2864,56, this);
			var ezert$$7 = null;
			ezert$$7 = newItem.itemType(newItem.item, newItem.itemAction, function(eze$$inout$itemAction) {
				newItem.itemAction = eze$$inout$itemAction;
			},  this, this );
			egl.atLine(this.eze$$fileName,91,2848,73, this);
			widget = egl.convertAnyToRefType(ezert$$7,"Tegl/ui/rui/widget;",egl.egl.ui.rui.Widget);
			egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
			egl.atLine(this.eze$$fileName,92,2925,58, this);
			if ( (newItem.id != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,93,2953,23, this);
					widget.setID( (function(x){ return x != null ? ((x).toString()) : ""; })(newItem.id) );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,95,2987,35, this);
			widget.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.hideOptionsEvent,"hideOptionsEvent") );
			egl.atLine(this.eze$$fileName,96,3026,31, this);
			egl.checkNull(this.optionsBox, "optionsBox").appendChild(widget );
			egl.atLine(this.eze$$fileName,97,3061,42, this);
			widget.getParent().getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Menu.prototype.hideOptionsEvent,"hideOptionsEvent") );
			egl.atLine(this.eze$$fileName,98,3107,91, this);
			if ( !(this.settingOptions) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,99,3132,31, this);
					this.options.appendElement( (newItem).eze$$clone() );
					egl.atLine(this.eze$$fileName,100,3168,23, this);
					this.setBehaviorsInternal();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,90,2805,399, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setBehaviors": function( behaviors ) {
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
		try { egl.enter("setBehaviors",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("behaviors", behaviors, "com.ibm.egl.rui.widgets.MenuBehavior[]", "!behaviors");
			egl.atLine(this.eze$$fileName,105,3264,26, this);
			this.menuBehaviors = behaviors;
			egl.atLine(this.eze$$fileName,106,3294,23, this);
			this.setBehaviorsInternal();
			egl.atLine(this.eze$$fileName,104,3210,113, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getBehaviors": function() {
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
		try { egl.enter("getBehaviors",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,110,3381,23, this);
			$result = this.menuBehaviors;
			egl.setLocalFunctionVariable("MenuBehavior[]", $result, "com.ibm.egl.rui.widgets.MenuBehavior[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setBehaviorsInternal": function() {
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
		try { egl.enter("setBehaviorsInternal",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,114,3459,124, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= this.menuBehaviors.getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,115,3518,58, this);
							egl.checkNull(this.menuBehaviors, "menuBehaviors")[this.menuBehaviors.checkIndex((index)-1)]( this, this.titleBar, function(eze$$inout$titleBar) {
								this.titleBar = eze$$inout$titleBar;
							}, this.optionsBox, function(eze$$inout$optionsBox) {
								this.optionsBox = eze$$inout$optionsBox;
							}, this.options, function(eze$$inout$options) {
								this.options = eze$$inout$options;
							}, this );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,114,3459,124, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,117,3587,107, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= this.subMenus.getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,118,3641,46, this);
							egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((index)-1)], "subMenus[index]").menuBehaviors = this.menuBehaviors;
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,117,3587,107, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,113,3416,284, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"showOptionsEvent": function( e ) {
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
		try { egl.enter("showOptionsEvent",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,123,3756,93, this);
			if ( (this.isOpen && (e.widget == this.titleBar)) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,124,3796,19, this);
					this.hideOptions(false, function(eze$$inout$closeParent) {
					}, this );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,126,3828,14, this);
					this.showOptions();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,128,3853,20, this);
			e.stopPropagation();
			egl.atLine(this.eze$$fileName,122,3706,173, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"showOptions": function() {
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
		try { egl.enter("showOptions",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,132,3911,14, this);
			this.isOpen = true;
			egl.atLine(this.eze$$fileName,133,3929,52, this);
			if ( (this.onMenuOpen != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,134,3957,17, this);
					this.onMenuOpen( this );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,136,3985,66, this);
			if ( (this.parentMenu != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,137,4013,31, this);
					egl.checkNull(this.parentMenu, "parentMenu").closeSubMenus( this );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,140,4059,826, this);
			if ( (this.parentMenu == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,141,4087,165, this);
					if ( (this.widgetOrientationThis == "RTL") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,142,4127,72, this);
							egl.checkNull(this.optionsBox, "optionsBox").setX(((egl.checkNull(this.titleBar, "titleBar").getX() + egl.checkNull(this.titleBar, "titleBar").getPixelWidth()) - egl.checkNull(this.optionsBox, "optionsBox").getPixelWidth()));
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,144,4214,26, this);
							egl.checkNull(this.optionsBox, "optionsBox").setX(egl.checkNull(this.titleBar, "titleBar").getX());
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,146,4257,49, this);
					egl.checkNull(this.optionsBox, "optionsBox").setY((egl.checkNull(this.titleBar, "titleBar").getY() + egl.checkNull(this.titleBar, "titleBar").getPixelHeight()));
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,148,4319,525, this);
					if ( ((egl.checkNull(this.parentMenu, "parentMenu").widgetOrientationThis == "RTL") || (this.widgetOrientationThis == "RTL")) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,149,4408,50, this);
							egl.checkNull(this.optionsBox, "optionsBox").setX((egl.checkNull(this.titleBar, "titleBar").getX() - egl.checkNull(this.optionsBox, "optionsBox").getPixelWidth()));
							egl.atLine(this.eze$$fileName,150,4464,74, this);
							if ( (this.arrowLeft != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,151,4492,37, this);
									egl.checkNull(this.optionsBox, "optionsBox").setX((egl.checkNull(this.optionsBox, "optionsBox").getX() - egl.checkNull(this.arrowLeft, "arrowLeft").getPixelWidth()));
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,153,4544,76, this);
							if ( (this.arrowRight != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,154,4573,38, this);
									egl.checkNull(this.optionsBox, "optionsBox").setX((egl.checkNull(this.optionsBox, "optionsBox").getX() - egl.checkNull(this.arrowRight, "arrowRight").getPixelWidth()));
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,157,4639,51, this);
							egl.checkNull(this.optionsBox, "optionsBox").setX((egl.checkNull(this.titleBar, "titleBar").getX() + this.getParent().getPixelWidth()));
							egl.atLine(this.eze$$fileName,158,4696,136, this);
							if ( ((egl.checkNull(this.titleBar, "titleBar").getReverseTextDirection() == "Yes") && (this.arrowRight != null)) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,159,4771,52, this);
									egl.checkNull(this.optionsBox, "optionsBox").setX((egl.checkNull(this.optionsBox, "optionsBox").getX() - egl.checkNull(this.arrowRight, "arrowRight").getPixelWidth()));
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,162,4852,26, this);
					egl.checkNull(this.optionsBox, "optionsBox").setY(egl.checkNull(this.titleBar, "titleBar").getY());
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,164,4889,34, this);
			egl.checkNull(this.optionsBox, "optionsBox").setVisibility("visible");
			egl.atLine(this.eze$$fileName,165,4927,22, this);
			egl.checkNull(this.optionsBox, "optionsBox").setZIndex((1).toString());
			egl.atLine(this.eze$$fileName,131,3885,1070, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"hideOptionsEvent": function( e ) {
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
		try { egl.enter("hideOptionsEvent",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,169,5010,18, this);
			this.hideOptions(true, function(eze$$inout$closeParent) {
			}, this );
			egl.atLine(this.eze$$fileName,170,5032,20, this);
			e.stopPropagation();
			egl.atLine(this.eze$$fileName,168,4961,97, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"hideOptions": function( closeParent, eze$$closeParent$func_, eze$$caller ) {
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
		try { egl.enter("hideOptions",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("closeParent", closeParent, "boolean", "closeParent");
			egl.atLine(this.eze$$fileName,174,5109,15, this);
			this.isOpen = false;
			egl.atLine(this.eze$$fileName,175,5128,20, this);
			this.closeSubMenus(null );
			egl.atLine(this.eze$$fileName,176,5152,86, this);
			if ( ((this.parentMenu != null) && closeParent) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,177,5195,36, this);
					egl.checkNull(this.parentMenu, "parentMenu").hideOptions(closeParent, function(eze$$inout$closeParent) {
						closeParent = eze$$inout$closeParent;
						egl.setLocalFunctionVariable("closeParent", closeParent, "boolean");
						eze$$closeParent$func_.call(eze$$caller,closeParent);
					}, this );
					egl.setLocalFunctionVariable("closeParent", closeParent, "boolean");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,179,5242,33, this);
			egl.checkNull(this.optionsBox, "optionsBox").setVisibility("hidden");
			egl.atLine(this.eze$$fileName,180,5279,22, this);
			egl.checkNull(this.optionsBox, "optionsBox").setZIndex((1).toString());
			egl.atLine(this.eze$$fileName,173,5064,243, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"closeSubMenus": function( keepOpen ) {
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
		try { egl.enter("closeSubMenus",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("keepOpen", keepOpen, "com.ibm.egl.rui.widgets.Menu", "keepOpen");
			egl.atLine(this.eze$$fileName,184,5357,142, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= this.subMenus.getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,185,5411,81, this);
							if ( (egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((index)-1)] != keepOpen) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,186,5449,35, this);
									egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((index)-1)], "subMenus[index]").hideOptions(false, function(eze$$inout$closeParent) {
									}, this );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,184,5357,142, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,183,5313,192, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"encloseInBiDiMarkers": function( optBox, eze$$optBox$func_, eze$$caller ) {
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
		try { egl.enter("encloseInBiDiMarkers",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("optBox", optBox, "com.ibm.egl.rui.widgets.Box", "optBox");
			egl.atLine(this.eze$$fileName,192,5555,515, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= egl.checkNull(optBox, "optBox").getChildren().getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							var w = null;
							egl.addLocalFunctionVariable("w", w, "egl.ui.rui.Widget", "w");
							egl.atLine(this.eze$$fileName,193,5619,34, this);
							w = egl.checkNull(optBox, "optBox").getChildren()[egl.checkNull(optBox, "optBox").getChildren().checkIndex((index)-1)];
							egl.setLocalFunctionVariable("w", w, "egl.ui.rui.Widget");
							egl.atLine(this.eze$$fileName,194,5661,399, this);
							if ( (w.getClass() == "EglRuiSpan") ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,195,5694,35, this);
									w.setTextLayout( egl.checkNull(this.titleBar, "titleBar").getTextLayout() );
									egl.atLine(this.eze$$fileName,196,5735,55, this);
									w.setReverseTextDirection( egl.checkNull(this.titleBar, "titleBar").getReverseTextDirection() );
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,198,5809,239, this);
									if ( (w.getClass() == "EglRuiMenu") ) {
										try{egl.enterBlock();
											var m = null;
											egl.addLocalFunctionVariable("m", m, "com.ibm.egl.rui.widgets.Menu", "m");
											egl.atLine(this.eze$$fileName,199,5843,11, this);
											{
												var eze$$src = w;
												if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.Menu)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.Menu' ], 'Widget', 'com.ibm.egl.rui.widgets.Menu' );
											}
											m = w;
											egl.setLocalFunctionVariable("m", m, "com.ibm.egl.rui.widgets.Menu");
											egl.atLine(this.eze$$fileName,200,5861,44, this);
											egl.checkNull(egl.checkNull(m, "m").titleBar, "m.titleBar").setTextLayout(egl.checkNull(this.titleBar, "titleBar").getTextLayout());
											egl.atLine(this.eze$$fileName,201,5912,64, this);
											egl.checkNull(egl.checkNull(m, "m").titleBar, "m.titleBar").setReverseTextDirection(egl.checkNull(this.titleBar, "titleBar").getReverseTextDirection());
											var b = null;
											egl.addLocalFunctionVariable("b", b, "com.ibm.egl.rui.widgets.Box", "b");
											egl.atLine(this.eze$$fileName,202,5983,21, this);
											b = egl.checkNull(m, "m").optionsBox;
											egl.setLocalFunctionVariable("b", b, "com.ibm.egl.rui.widgets.Box");
											egl.atLine(this.eze$$fileName,203,6011,24, this);
											this.encloseInBiDiMarkers(b, function(eze$$inout$optBox) {
												b = eze$$inout$optBox;
												egl.setLocalFunctionVariable("b", b, "com.ibm.egl.rui.widgets.Box");
											}, this );
											egl.setLocalFunctionVariable("b", b, "com.ibm.egl.rui.widgets.Box");
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,192,5555,515, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,191,5510,568, this);
			{ if (!egl.debugg) egl.leave(); }
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
			egl.atLine(this.eze$$fileName,210,6145,33, this);
			egl.checkNull(this.titleBar, "titleBar").setTextLayout(textLayout);
			egl.atLine(this.eze$$fileName,211,6185,33, this);
			this.encloseInBiDiMarkers(this.optionsBox, function(eze$$inout$optBox) {
				this.optionsBox = eze$$inout$optBox;
			}, this );
			egl.atLine(this.eze$$fileName,209,6083,143, this);
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
			egl.atLine(this.eze$$fileName,215,6293,29, this);
			$result = egl.checkNull(this.titleBar, "titleBar").getTextLayout();
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
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
			egl.atLine(this.eze$$fileName,219,6417,53, this);
			egl.checkNull(this.titleBar, "titleBar").setReverseTextDirection(reverseTextDirection);
			egl.atLine(this.eze$$fileName,220,6474,33, this);
			this.encloseInBiDiMarkers(this.optionsBox, function(eze$$inout$optBox) {
				this.optionsBox = eze$$inout$optBox;
			}, this );
			egl.atLine(this.eze$$fileName,218,6334,180, this);
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
			egl.atLine(this.eze$$fileName,224,6589,39, this);
			$result = egl.checkNull(this.titleBar, "titleBar").getReverseTextDirection();
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
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
			egl.atLine(this.eze$$fileName,228,6707,31, this);
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
			egl.atLine(this.eze$$fileName,232,6826,297, this);
			if ( (widgetOrientation != this.widgetOrientationThis) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,233,6878,42, this);
					this.widgetOrientationThis = widgetOrientation;
					egl.atLine(this.eze$$fileName,234,6925,160, this);
					{
						try{egl.enterBlock();
							var index = 0;
							egl.addLocalFunctionVariable("index", index, "int", "index");
							index = 1;
							egl.setLocalFunctionVariable("index", index, "int");
							for ( ; (index <= egl.checkNull(this.optionsBox, "optionsBox").getChildren().getSize()); index = (index + 1) )
							{
								egl.setLocalFunctionVariable("index", index, "int");
								try{egl.enterBlock();
									var w = null;
									egl.addLocalFunctionVariable("w", w, "egl.ui.rui.Widget", "w");
									egl.atLine(this.eze$$fileName,235,6993,38, this);
									w = egl.checkNull(this.optionsBox, "optionsBox").getChildren()[egl.checkNull(this.optionsBox, "optionsBox").getChildren().checkIndex((index)-1)];
									egl.setLocalFunctionVariable("w", w, "egl.ui.rui.Widget");
									egl.atLine(this.eze$$fileName,236,7037,40, this);
									w.setWidgetOrientation( widgetOrientation );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,234,6925,160, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,238,7090,26, this);
					this.setMenuArrowOrientation();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,231,6750,380, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setMenuArrowOrientation": function() {
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
		try { egl.enter("setMenuArrowOrientation",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,243,7174,1054, this);
			{
				try{egl.enterBlock();
					var i = 0;
					egl.addLocalFunctionVariable("i", i, "int", "i");
					i = 1;
					egl.setLocalFunctionVariable("i", i, "int");
					for ( ; (i <= this.subMenus.getSize()); i = (i + 1) )
					{
						egl.setLocalFunctionVariable("i", i, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,244,7224,997, this);
							if ( (this.widgetOrientationThis == "RTL") ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,245,7264,39, this);
									egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").setAttribute("dir", {eze$$value : "rtl", eze$$signature : "S;"} );
									egl.atLine(this.eze$$fileName,246,7309,321, this);
									if ( (egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowLeft != null) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,247,7349,45, this);
											egl.checkNull(egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowLeft, "subMenus[i].arrowLeft").setVisibility("visible");
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,249,7411,64, this);
											egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowLeft = (function () {
												var ezert$$8 = new egl.com.ibm.egl.rui.widgets.Image();
												egl.atLine(this.eze$$fileName,249,7445,28, this);
												egl.checkNull(ezert$$8, "ezert$$8").setSrc("images/ArrowLeft.gif");
												return ezert$$8;
											}).call(this);
											var tb = null;
											egl.addLocalFunctionVariable("tb", tb, "egl.ui.rui.Widget", "tb");
											egl.atLine(this.eze$$fileName,250,7488,33, this);
											tb = egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").titleBar;
											egl.setLocalFunctionVariable("tb", tb, "egl.ui.rui.Widget");
											egl.atLine(this.eze$$fileName,251,7528,33, this);
											tb.setDisplayStyle( "inline-block" );
											egl.atLine(this.eze$$fileName,252,7568,47, this);
											egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").appendChild(egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowLeft );
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,254,7636,95, this);
									if ( (egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowRight != null) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,255,7677,45, this);
											egl.checkNull(egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowRight, "subMenus[i].arrowRight").setVisibility("hidden");
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,258,7746,36, this);
									egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").setAttribute("dir", {eze$$value : "", eze$$signature : "S;"} );
									egl.atLine(this.eze$$fileName,259,7788,326, this);
									if ( (egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowRight != null) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,260,7829,46, this);
											egl.checkNull(egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowRight, "subMenus[i].arrowRight").setVisibility("visible");
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,262,7892,66, this);
											egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowRight = (function () {
												var ezert$$9 = new egl.com.ibm.egl.rui.widgets.Image();
												egl.atLine(this.eze$$fileName,262,7927,29, this);
												egl.checkNull(ezert$$9, "ezert$$9").setSrc("images/ArrowRight.gif");
												return ezert$$9;
											}).call(this);
											var tb = null;
											egl.addLocalFunctionVariable("tb", tb, "egl.ui.rui.Widget", "tb");
											egl.atLine(this.eze$$fileName,263,7971,33, this);
											tb = egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").titleBar;
											egl.setLocalFunctionVariable("tb", tb, "egl.ui.rui.Widget");
											egl.atLine(this.eze$$fileName,264,8011,33, this);
											tb.setDisplayStyle( "inline-block" );
											egl.atLine(this.eze$$fileName,265,8051,48, this);
											egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").appendChild(egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowRight );
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,267,8120,93, this);
									if ( (egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowLeft != null) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,268,8160,44, this);
											egl.checkNull(egl.checkNull(egl.checkNull(this.subMenus, "subMenus")[this.subMenus.checkIndex((i)-1)], "subMenus[i]").arrowLeft, "subMenus[i].arrowLeft").setVisibility("hidden");
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,243,7174,1054, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,242,7136,1099, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[Menu]";
	}
	,
	"eze$$getName": function() {
		return "Menu";
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
		{name: "titleBar", value : eze$$parent.titleBar, type : "com.ibm.egl.rui.widgets.Span", jsName : "titleBar"},
		{name: "optionsBox", value : eze$$parent.optionsBox, type : "com.ibm.egl.rui.widgets.Box", jsName : "optionsBox"},
		{name: "settingOptions", value : eze$$parent.settingOptions, type : "boolean", jsName : "settingOptions"},
		{name: "onMenuOpen", value : eze$$parent.onMenuOpen, type : "com.ibm.egl.rui.widgets.MenuOpenAction", jsName : "onMenuOpen"},
		{name: "isOpen", value : eze$$parent.isOpen, type : "boolean", jsName : "isOpen"},
		{name: "subMenus", value : eze$$parent.subMenus, type : "com.ibm.egl.rui.widgets.Menu[]", jsName : "!subMenus"},
		{name: "parentMenu", value : eze$$parent.parentMenu, type : "com.ibm.egl.rui.widgets.Menu", jsName : "parentMenu"},
		{name: "menuBehaviors", value : function(){try{return eze$$parent.getBehaviors();}catch(e){return null;}}(), type : "com.ibm.egl.rui.widgets.MenuBehavior[]", jsName : "!menuBehaviors", getter : "getBehaviors", setter : "setBehaviors"},
		{name: "options", value : function(){try{return eze$$parent.getOptions();}catch(e){return null;}}(), type : "com.ibm.egl.rui.widgets.MenuItem[]", jsName : "!options", getter : "getOptions", setter : "setOptions"},
		{name: "title", value : function(){try{return eze$$parent.getTitle();}catch(e){return null;}}(), type : "string", jsName : "title", getter : "getTitle", setter : "setTitle"},
		{name: "widgetOrientationThis", value : eze$$parent.widgetOrientationThis, type : "string", jsName : "widgetOrientationThis"},
		{name: "arrowLeft", value : eze$$parent.arrowLeft, type : "com.ibm.egl.rui.widgets.Image", jsName : "arrowLeft"},
		{name: "arrowRight", value : eze$$parent.arrowRight, type : "com.ibm.egl.rui.widgets.Image", jsName : "arrowRight"}
		];
	}
}
, 'div'
);
