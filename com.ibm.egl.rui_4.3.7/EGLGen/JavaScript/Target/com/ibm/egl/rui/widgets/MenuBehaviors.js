// Generated at Tue Dec 06 11:54:44 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'MenuBehaviors',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/MenuBehaviors.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/MenuBehaviors',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.MenuBehaviors['$inst']){
				return egl.com.ibm.egl.rui.widgets.MenuBehaviors['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.MenuBehaviors['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
		}
		
		,
		"simpleText": function( menuItem, itemAction, eze$$itemAction$func_, parentMenu, eze$$caller ) {
			var $result = null;
			var text = new egl.com.ibm.egl.rui.widgets.Span();
			egl.checkNull(text).setText(egl.convertAnyToString(menuItem,false));
			egl.checkNull(text).setClass("EglRuiMenuSimpleText");
			if ( (itemAction != null) ) {
				var action = new egl.com.ibm.egl.rui.widgets.MenuItemAction();
				egl.checkNull(action).theItem = menuItem;
				egl.checkNull(action).theAction = itemAction;
				egl.checkNull(action).theParentMenu = parentMenu;
				egl.checkNull(action).addActionTo((function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tcom/ibm/egl/rui/widgets/span;"}) : null; })(text) );
			}
			$result = (function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tcom/ibm/egl/rui/widgets/span;"}) : null; })(text);
			return $result;
		}
		,
		"WidgetItem": function( menuItem, itemAction, eze$$itemAction$func_, parentMenu, eze$$caller ) {
			var $result = null;
			$result = menuItem;
			return $result;
		}
		,
		"subMenu": function( menuItem, itemAction, eze$$itemAction$func_, parentMenu, eze$$caller ) {
			var $result = null;
			var titleOptions = null;
			titleOptions = egl.convertAnyToArrayType(menuItem,"1A;");
			var newMenu = new egl.com.ibm.egl.rui.widgets.Menu();
			egl.checkNull(newMenu).setTitle(egl.convertAnyToString(egl.boxAny(egl.checkNull(titleOptions)[titleOptions.checkIndex((1)-1)]),false));
			egl.checkNull(newMenu).setOptions(egl.convertAnyToArrayType(egl.boxAny(egl.checkNull(titleOptions)[titleOptions.checkIndex((2)-1)]),"1Tcom/ibm/egl/rui/widgets/menuitem;"));
			egl.checkNull(newMenu).setBehaviors(egl.checkNull(parentMenu).getBehaviors());
			egl.checkNull(parentMenu).subMenus.appendElement( newMenu );
			egl.checkNull(newMenu).setAsSubMenu(parentMenu, function(eze$$inout$parent) {
				parentMenu = eze$$inout$parent;
			}, this );
			egl.checkNull(newMenu).getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.highlight) );
			egl.checkNull(newMenu).getOnMouseOut().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.removeHighlight) );
			$result = (function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tcom/ibm/egl/rui/widgets/menu;"}) : null; })(newMenu);
			return $result;
		}
		,
		"definedSubMenu": function( menuItem, itemAction, eze$$itemAction$func_, parentMenu, eze$$caller ) {
			var $result = null;
			var newMenu = null;
			newMenu = egl.convertAnyToRefType(menuItem,"Tcom/ibm/egl/rui/widgets/menu;",egl.com.ibm.egl.rui.widgets.Menu);
			egl.checkNull(newMenu).parentMenu = parentMenu;
			$result = (function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tcom/ibm/egl/rui/widgets/menu;"}) : null; })(newMenu);
			return $result;
		}
		,
		"BasicMenu": function( menu, titleBar, eze$$titleBar$func_, optionsBox, eze$$optionsBox$func_, options, eze$$options$func_, eze$$caller ) {
			egl.checkNull(optionsBox).setClass("EglRuiMenuBasicMenuOptionsBox");
			eze$$optionsBox$func_.call(eze$$caller,optionsBox);
			egl.checkNull(titleBar).setClass("EglRuiMenuBasicMenuTitlebar");
			eze$$titleBar$func_.call(eze$$caller,titleBar);
			{
				var index = 0;
				index = 1;
				for ( ; (index <= egl.checkNull(optionsBox).getChildren().getSize()); index = (index + 1) )
				{
					var widget = null;
					widget = egl.checkNull(optionsBox).getChildren()[egl.checkNull(optionsBox).getChildren().checkIndex((index)-1)].getParent();
					widget.getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.highlight) );
					widget.getOnMouseOut().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.removeHighlight) );
				}
			}
			
		}
		,
		"ContextMenu": function( menu, titleBar, eze$$titleBar$func_, optionsBox, eze$$optionsBox$func_, options, eze$$options$func_, eze$$caller ) {
			egl.checkNull(optionsBox).setClass("EglRuiMenuContextMenuOptionsBox");
			eze$$optionsBox$func_.call(eze$$caller,optionsBox);
			egl.checkNull(titleBar).setClass("EglRuiMenuContextMenuTitlebar");
			eze$$titleBar$func_.call(eze$$caller,titleBar);
			{
				var index = 0;
				index = 1;
				for ( ; (index <= egl.checkNull(optionsBox).getChildren().getSize()); index = (index + 1) )
				{
					var widget = null;
					widget = egl.checkNull(optionsBox).getChildren()[egl.checkNull(optionsBox).getChildren().checkIndex((index)-1)];
					widget.getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.highlight) );
					widget.getOnMouseOut().appendElement( new egl.egl.jsrt.Delegate(egl.com.ibm.egl.rui.widgets.MenuBehaviors.$inst, egl.com.ibm.egl.rui.widgets.MenuBehaviors.prototype.removemenuhighlight) );
				}
			}
			
		}
		,
		"highlight": function( e ) {
			var widget = null;
			widget = e.widget;
			widget.setClass( "EglRuiMenuOptionHighlight" );
			
		}
		,
		"removeHighlight": function( e ) {
			var widget = null;
			widget = e.widget;
			widget.setClass( "EglRuiMenuOptionUnHighlight" );
			
		}
		,
		"removemenuhighlight": function( e ) {
			var widget = null;
			widget = e.widget;
			widget.setClass( "EglRuiMenuMenuUnHighlight" );
			
		}
		,
		"toString": function() {
			return "[MenuBehaviors]";
		}
	}
);
