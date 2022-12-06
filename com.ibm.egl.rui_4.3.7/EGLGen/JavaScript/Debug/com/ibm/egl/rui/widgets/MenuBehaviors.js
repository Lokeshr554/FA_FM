// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.ibm.egl.rui.widgets.MenuBehaviors');
else egl.eze$$userLibs = ['com.ibm.egl.rui.widgets.MenuBehaviors'];
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'MenuBehaviors',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/MenuBehaviors.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/MenuBehaviors',
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
				if(egl.com.ibm.egl.rui.widgets.MenuBehaviors['$inst']){
					if (!egl.debugg) egl.leave();
					return egl.com.ibm.egl.rui.widgets.MenuBehaviors['$inst'];
				}
				egl.com.ibm.egl.rui.widgets.MenuBehaviors['$inst']=this;
				this.jsrt$SysVar= new egl.egl.core.SysVar();
				if (!egl.debugg) egl.leave();
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		
		,
		"simpleText": function( menuItem, itemAction, eze$$itemAction$func_, parentMenu, eze$$caller ) {
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
			try { egl.enter("simpleText",this,arguments,eze$$updater);
				var $result = null;
				egl.addLocalFunctionVariable("menuItem", menuItem, "any", "menuItem");
				egl.addLocalFunctionVariable("itemAction", itemAction, "com.ibm.egl.rui.widgets.MenuItemSelection", "itemAction");
				egl.addLocalFunctionVariable("parentMenu", parentMenu, "com.ibm.egl.rui.widgets.Menu", "parentMenu");
				var text = new egl.com.ibm.egl.rui.widgets.Span();
				egl.addLocalFunctionVariable("text", text, "com.ibm.egl.rui.widgets.Span", "text");
				egl.atLine(this.eze$$fileName,14,435,25, this);
				egl.checkNull(text, "text").setText(egl.convertAnyToString(menuItem,false));
				egl.atLine(this.eze$$fileName,14,462,30, this);
				egl.checkNull(text, "text").setClass("EglRuiMenuSimpleText");
				egl.atLine(this.eze$$fileName,15,499,183, this);
				if ( (itemAction != null) ) {
					try{egl.enterBlock();
						var action = new egl.com.ibm.egl.rui.widgets.MenuItemAction();
						egl.addLocalFunctionVariable("action", action, "com.ibm.egl.rui.widgets.MenuItemAction", "action");
						egl.atLine(this.eze$$fileName,17,556,18, this);
						egl.checkNull(action, "action").theItem = menuItem;
						egl.atLine(this.eze$$fileName,18,582,22, this);
						egl.checkNull(action, "action").theAction = itemAction;
						egl.atLine(this.eze$$fileName,19,612,26, this);
						egl.checkNull(action, "action").theParentMenu = parentMenu;
						egl.atLine(this.eze$$fileName,21,650,25, this);
						egl.checkNull(action, "action").addActionTo((function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tcom/ibm/egl/rui/widgets/span;"}) : null; })(text) );
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,23,686,14, this);
				$result = (function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tcom/ibm/egl/rui/widgets/span;"}) : null; })(text);
				egl.setLocalFunctionVariable("ANY", $result, "any");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"WidgetItem": function( menuItem, itemAction, eze$$itemAction$func_, parentMenu, eze$$caller ) {
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
			try { egl.enter("WidgetItem",this,arguments,eze$$updater);
				var $result = null;
				egl.addLocalFunctionVariable("menuItem", menuItem, "any", "menuItem");
				egl.addLocalFunctionVariable("itemAction", itemAction, "com.ibm.egl.rui.widgets.MenuItemSelection", "itemAction");
				egl.addLocalFunctionVariable("parentMenu", parentMenu, "com.ibm.egl.rui.widgets.Menu", "parentMenu");
				egl.atLine(this.eze$$fileName,27,816,18, this);
				$result = menuItem;
				egl.setLocalFunctionVariable("ANY", $result, "any");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"subMenu": function( menuItem, itemAction, eze$$itemAction$func_, parentMenu, eze$$caller ) {
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
			try { egl.enter("subMenu",this,arguments,eze$$updater);
				var $result = null;
				egl.addLocalFunctionVariable("menuItem", menuItem, "any", "menuItem");
				egl.addLocalFunctionVariable("itemAction", itemAction, "com.ibm.egl.rui.widgets.MenuItemSelection", "itemAction");
				egl.addLocalFunctionVariable("parentMenu", parentMenu, "com.ibm.egl.rui.widgets.Menu", "parentMenu");
				var titleOptions = null;
				egl.addLocalFunctionVariable("titleOptions", titleOptions, "any[]", "!titleOptions");
				egl.atLine(this.eze$$fileName,31,947,30, this);
				titleOptions = egl.convertAnyToArrayType(menuItem,"1A;");
				egl.setLocalFunctionVariable("titleOptions", titleOptions, "any[]");
				var newMenu = new egl.com.ibm.egl.rui.widgets.Menu();
				egl.addLocalFunctionVariable("newMenu", newMenu, "com.ibm.egl.rui.widgets.Menu", "newMenu");
				egl.atLine(this.eze$$fileName,33,1000,23, this);
				egl.checkNull(newMenu, "newMenu").setTitle(egl.convertAnyToString(egl.boxAny(egl.checkNull(titleOptions, "titleOptions")[titleOptions.checkIndex((1)-1)]),false));
				egl.atLine(this.eze$$fileName,34,1029,25, this);
				egl.checkNull(newMenu, "newMenu").setOptions(egl.convertAnyToArrayType(egl.boxAny(egl.checkNull(titleOptions, "titleOptions")[titleOptions.checkIndex((2)-1)]),"1Tcom/ibm/egl/rui/widgets/menuitem;"));
				egl.atLine(this.eze$$fileName,35,1060,40, this);
				egl.checkNull(newMenu, "newMenu").setBehaviors(egl.checkNull(parentMenu, "parentMenu").getBehaviors());
				egl.atLine(this.eze$$fileName,37,1110,32, this);
				egl.checkNull(parentMenu, "parentMenu").subMenus.appendElement( newMenu );
				egl.atLine(this.eze$$fileName,38,1146,33, this);
				egl.checkNull(newMenu, "newMenu").setAsSubMenu(parentMenu, function(eze$$inout$parent) {
					parentMenu = eze$$inout$parent;
					egl.setLocalFunctionVariable("parentMenu", parentMenu, "com.ibm.egl.rui.widgets.Menu");
				}, this );
				egl.setLocalFunctionVariable("parentMenu", parentMenu, "com.ibm.egl.rui.widgets.Menu");
				egl.atLine(this.eze$$fileName,39,1183,34, this);
				egl.checkNull(newMenu, "newMenu").getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.highlight,"highlight") );
				egl.atLine(this.eze$$fileName,40,1221,37, this);
				egl.checkNull(newMenu, "newMenu").getOnMouseOut().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.removeHighlight,"removeHighlight") );
				egl.atLine(this.eze$$fileName,41,1262,17, this);
				$result = (function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tcom/ibm/egl/rui/widgets/menu;"}) : null; })(newMenu);
				egl.setLocalFunctionVariable("ANY", $result, "any");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"definedSubMenu": function( menuItem, itemAction, eze$$itemAction$func_, parentMenu, eze$$caller ) {
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
			try { egl.enter("definedSubMenu",this,arguments,eze$$updater);
				var $result = null;
				egl.addLocalFunctionVariable("menuItem", menuItem, "any", "menuItem");
				egl.addLocalFunctionVariable("itemAction", itemAction, "com.ibm.egl.rui.widgets.MenuItemSelection", "itemAction");
				egl.addLocalFunctionVariable("parentMenu", parentMenu, "com.ibm.egl.rui.widgets.Menu", "parentMenu");
				var newMenu = null;
				egl.addLocalFunctionVariable("newMenu", newMenu, "com.ibm.egl.rui.widgets.Menu", "newMenu");
				egl.atLine(this.eze$$fileName,45,1398,24, this);
				newMenu = egl.convertAnyToRefType(menuItem,"Tcom/ibm/egl/rui/widgets/menu;",egl.com.ibm.egl.rui.widgets.Menu);
				egl.setLocalFunctionVariable("newMenu", newMenu, "com.ibm.egl.rui.widgets.Menu");
				egl.atLine(this.eze$$fileName,46,1426,32, this);
				egl.checkNull(newMenu, "newMenu").parentMenu = parentMenu;
				egl.atLine(this.eze$$fileName,47,1462,17, this);
				$result = (function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tcom/ibm/egl/rui/widgets/menu;"}) : null; })(newMenu);
				egl.setLocalFunctionVariable("ANY", $result, "any");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"BasicMenu": function( menu, titleBar, eze$$titleBar$func_, optionsBox, eze$$optionsBox$func_, options, eze$$options$func_, eze$$caller ) {
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
			try { egl.enter("BasicMenu",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("menu", menu, "com.ibm.egl.rui.widgets.Menu", "menu");
				egl.addLocalFunctionVariable("titleBar", titleBar, "com.ibm.egl.rui.widgets.Span", "titleBar");
				egl.addLocalFunctionVariable("optionsBox", optionsBox, "com.ibm.egl.rui.widgets.Box", "optionsBox");
				egl.addLocalFunctionVariable("options", options, "com.ibm.egl.rui.widgets.MenuItem[]", "!options");
				egl.atLine(this.eze$$fileName,51,1578,51, this);
				egl.checkNull(optionsBox, "optionsBox").setClass("EglRuiMenuBasicMenuOptionsBox");
				eze$$optionsBox$func_.call(eze$$caller,optionsBox);
				egl.atLine(this.eze$$fileName,52,1633,47, this);
				egl.checkNull(titleBar, "titleBar").setClass("EglRuiMenuBasicMenuTitlebar");
				eze$$titleBar$func_.call(eze$$caller,titleBar);
				egl.atLine(this.eze$$fileName,53,1684,203, this);
				{
					try{egl.enterBlock();
						var index = 0;
						egl.addLocalFunctionVariable("index", index, "int", "index");
						index = 1;
						egl.setLocalFunctionVariable("index", index, "int");
						for ( ; (index <= egl.checkNull(optionsBox, "optionsBox").getChildren().getSize()); index = (index + 1) )
						{
							egl.setLocalFunctionVariable("index", index, "int");
							try{egl.enterBlock();
								var widget = null;
								egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
								egl.atLine(this.eze$$fileName,54,1749,50, this);
								widget = egl.checkNull(optionsBox, "optionsBox").getChildren()[egl.checkNull(optionsBox, "optionsBox").getChildren().checkIndex((index)-1)].getParent();
								egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
								egl.atLine(this.eze$$fileName,55,1804,33, this);
								widget.getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.highlight,"highlight") );
								egl.atLine(this.eze$$fileName,56,1842,38, this);
								widget.getOnMouseOut().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.removeHighlight,"removeHighlight") );
							}finally{egl.exitBlock();}
							egl.atLine(this.eze$$fileName,53,1684,203, this);
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,50,1491,402, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"ContextMenu": function( menu, titleBar, eze$$titleBar$func_, optionsBox, eze$$optionsBox$func_, options, eze$$options$func_, eze$$caller ) {
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
			try { egl.enter("ContextMenu",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("menu", menu, "com.ibm.egl.rui.widgets.Menu", "menu");
				egl.addLocalFunctionVariable("titleBar", titleBar, "com.ibm.egl.rui.widgets.Span", "titleBar");
				egl.addLocalFunctionVariable("optionsBox", optionsBox, "com.ibm.egl.rui.widgets.Box", "optionsBox");
				egl.addLocalFunctionVariable("options", options, "com.ibm.egl.rui.widgets.MenuItem[]", "!options");
				egl.atLine(this.eze$$fileName,61,1988,53, this);
				egl.checkNull(optionsBox, "optionsBox").setClass("EglRuiMenuContextMenuOptionsBox");
				eze$$optionsBox$func_.call(eze$$caller,optionsBox);
				egl.atLine(this.eze$$fileName,62,2045,49, this);
				egl.checkNull(titleBar, "titleBar").setClass("EglRuiMenuContextMenuTitlebar");
				eze$$titleBar$func_.call(eze$$caller,titleBar);
				egl.atLine(this.eze$$fileName,63,2098,200, this);
				{
					try{egl.enterBlock();
						var index = 0;
						egl.addLocalFunctionVariable("index", index, "int", "index");
						index = 1;
						egl.setLocalFunctionVariable("index", index, "int");
						for ( ; (index <= egl.checkNull(optionsBox, "optionsBox").getChildren().getSize()); index = (index + 1) )
						{
							egl.setLocalFunctionVariable("index", index, "int");
							try{egl.enterBlock();
								var widget = null;
								egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
								egl.atLine(this.eze$$fileName,64,2163,43, this);
								widget = egl.checkNull(optionsBox, "optionsBox").getChildren()[egl.checkNull(optionsBox, "optionsBox").getChildren().checkIndex((index)-1)];
								egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
								egl.atLine(this.eze$$fileName,65,2211,33, this);
								widget.getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.highlight,"highlight") );
								egl.atLine(this.eze$$fileName,66,2249,42, this);
								widget.getOnMouseOut().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.removemenuhighlight,"removemenuhighlight") );
							}finally{egl.exitBlock();}
							egl.atLine(this.eze$$fileName,63,2098,200, this);
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,60,1899,405, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"highlight": function( e ) {
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
			try { egl.enter("highlight",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
				var widget = null;
				egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
				egl.atLine(this.eze$$fileName,71,2344,25, this);
				widget = e.widget;
				egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
				egl.atLine(this.eze$$fileName,72,2373,43, this);
				widget.setClass( "EglRuiMenuOptionHighlight" );
				egl.atLine(this.eze$$fileName,70,2310,112, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"removeHighlight": function( e ) {
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
			try { egl.enter("removeHighlight",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
				var widget = null;
				egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
				egl.atLine(this.eze$$fileName,76,2468,25, this);
				widget = e.widget;
				egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
				egl.atLine(this.eze$$fileName,77,2497,45, this);
				widget.setClass( "EglRuiMenuOptionUnHighlight" );
				egl.atLine(this.eze$$fileName,75,2428,120, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"removemenuhighlight": function( e ) {
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
			try { egl.enter("removemenuhighlight",this,arguments,eze$$updater);
				egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
				var widget = null;
				egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
				egl.atLine(this.eze$$fileName,81,2598,25, this);
				widget = e.widget;
				egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
				egl.atLine(this.eze$$fileName,82,2627,43, this);
				widget.setClass( "EglRuiMenuMenuUnHighlight" );
				egl.atLine(this.eze$$fileName,80,2554,122, this);
				{ if (!egl.debugg) egl.leave(); }
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"toString": function() {
			return "[MenuBehaviors]";
		}
		,
		"eze$$getName": function() {
			return "MenuBehaviors";
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
									{name : "workDBType", value : "AUX", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "wrapperCompatibility", value : "CURRENT", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
									{name : "wrapperPackageName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""}
						];}, "toString": function(){return ""}}, type : ""}
			];}, "toString": function() {return ""}}, type : ""},
			
			{name : "System Variables", attrs : egl.ATTR_SYSTEM_VAR, value : {"eze$$getChildVariables": function() {
						return [
						{name: "StrLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$StrLib, type : "egl.core.StrLib", jsName : "egl.egl.core.StrLib.$inst"},
						{name: "SysVar", attrs : egl.ATTR_SYSTEM_VAR, value : eze$$parent.jsrt$SysVar, type : "egl.core.SysVar", jsName : "jsrt$SysVar"},
						{name: "ServiceLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$ServiceLib, type : "egl.core.ServiceLib", jsName : "egl.egl.core.ServiceLib.$inst"},
			];}, "toString": function(){return ""}}, type : "", jsName : ""}
			
			];
		}
	}
);
