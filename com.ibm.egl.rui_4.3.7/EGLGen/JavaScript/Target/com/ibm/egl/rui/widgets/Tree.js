// Generated at Tue Dec 06 11:54:43 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Tree', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Tree.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Tree',
	"constructor" : function()
	{
		this.behaviors = (function(){ var ezert$$1= []; ezert$$1.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
				ezert$$1[ i ] = null;
			}
			// no max size set for this array
		return ezert$$1;})();
		
		this.nodeContainer = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "nodeContainer");
		
		this.reverseTextDirectionThis = "";
		this.textLayoutThis = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		this.targetWidget = this.nodeContainer;
		this.nodeContainer.setTagName( "div" );
		this.reverseTextDirectionThis = "No";
		this.textLayoutThis = "Logical";
	}
	
	,
	"setChildren": function( children, eze$$children$func_, eze$$caller ) {
		if ( (this.getBackgroundColor() == "") ) {
			throw (function () {
				var ezert$$2 = egl.createRuntimeException();
				egl.checkNull(ezert$$2).message = "A value for backgroundColor is required on a Tree to work correctly. Set it to \"white\" if none is needed.";
				return ezert$$2;
			}).call(this);
		}
		var childrenCount = 0;
		childrenCount = children.getSize();
		this.nodeContainer.removeChildren();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= childrenCount); n = (n + 1) )
			{
				var node = null;
				{
					var eze$$src = egl.checkNull(children)[children.checkIndex((n)-1)];
					if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.TreeNode)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.TreeNode' ], 'Widget', 'com.ibm.egl.rui.widgets.TreeNode' );
				}
				node = egl.checkNull(children)[children.checkIndex((n)-1)];
				this.appendChild(node );
				egl.checkNull(node).markAsLast((n == childrenCount), this.getBackgroundColor() );
				if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
					egl.checkNull(node).setBiDiStyle(this.textLayoutThis, this.reverseTextDirectionThis );
				}
			}
		}
		
	}
	,
	"appendChild": function( child ) {
		var node = null;
		{
			var eze$$src = child;
			if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.TreeNode)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.TreeNode' ], 'Widget', 'com.ibm.egl.rui.widgets.TreeNode' );
		}
		node = child;
		this.nodeContainer.appendChild(child );
		egl.checkNull(node).applyBehaviors(this.behaviors, function(eze$$inout$behaviors) {
			this.behaviors = eze$$inout$behaviors;
		}, this.getBackgroundColor(), this );
		
	}
	,
	"removeChild": function( child ) {
		this.nodeContainer.removeChild(child );
		
	}
	,
	"removeChildren": function() {
		this.nodeContainer.removeChildren();
		
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
		this.reverseTextDirectionThis = reverseTextDirection;
		this.setChildrenBiDiStyle();
		
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
		this.setChildrenBiDiStyle();
		
	}
	,
	"getTextLayout": function() {
		var $result = "";
		$result = this.textLayoutThis;
		return $result;
	}
	,
	"setChildrenBiDiStyle": function() {
		var children = null;
		children = this.nodeContainer.getChildren();
		if ( ((children != null) && (children.getSize() > 0)) ) {
			{
				var i = 0;
				i = 1;
				for ( ; (i <= children.getSize()); i = (i + 1) )
				{
					var node = null;
					{
						var eze$$src = egl.checkNull(children)[children.checkIndex((i)-1)];
						if (!(eze$$src instanceof egl.com.ibm.egl.rui.widgets.TreeNode)) throw egl.createTypeCastException( 'CRRUI2017E', [ eze$$src, 'Widget', 'com.ibm.egl.rui.widgets.TreeNode' ], 'Widget', 'com.ibm.egl.rui.widgets.TreeNode' );
					}
					node = egl.checkNull(children)[children.checkIndex((i)-1)];
					egl.checkNull(node).setBiDiStyle(this.textLayoutThis, this.reverseTextDirectionThis );
				}
			}
		}
		
	}
	,
	"toString": function() {
		return "[Tree]";
	}
}
);
