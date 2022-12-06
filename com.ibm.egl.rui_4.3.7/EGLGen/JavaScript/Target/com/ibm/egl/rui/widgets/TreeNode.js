// Generated at Tue Dec 06 11:54:43 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'TreeNode', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/TreeNode.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/TreeNode',
	"constructor" : function()
	{
		this.text = "";
		this.behaviors = null;
		
		this.bgColor = "";
		this.imageURL = "";
		this.image = new egl.com.ibm.egl.rui.widgets.Image();
		egl.addEmbeddedWidget(this, "image");
		
		this.span = new egl.com.ibm.egl.rui.widgets.Span();
		egl.addEmbeddedWidget(this, "span");
		
		this.childNodes = null;
		
		this.childrenContainer = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "childrenContainer");
		
		this.nodeContainer = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "nodeContainer");
		
		this.outerContainer = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "outerContainer");
		
		this.ignoreChanges = false;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		this.targetWidget = this.outerContainer;
		this.text = "";
		this.behaviors = [  ].setType( "Tcom/ibm/egl/rui/widgets/treenodebehavior;" );
		this.bgColor = "";
		egl.checkNull(this.image).setSrc("images/TreeNodeEmpty.gif");
		this.childNodes = [  ].setType( "A;" );
		egl.checkNull(this.nodeContainer).setChildren( [ this.image, this.span, this.childrenContainer ] );
		egl.checkNull(this.nodeContainer).setPaddingLeft(12);
		egl.checkNull(this.nodeContainer).setStyle("text-align: left;");
		egl.checkNull(this.nodeContainer).setBackground("url(images/TreeNodeL.gif) no-repeat");
		egl.checkNull(this.outerContainer).setChildren( [ this.nodeContainer ] );
		egl.checkNull(this.outerContainer).setBackground("url(images/TreeNodeI.gif) repeat-y");
		this.ignoreChanges = false;
		this.start();
	}
	
	,
	"start": function() {
		egl.checkNull(this.childrenContainer).setLogicalParent(  this );
		egl.checkNull(this.image).setLogicalParent(  this );
		egl.checkNull(this.span).setLogicalParent(  this );
		
	}
	,
	"setImageURL": function( imageURL ) {
		egl.checkNull(this.image).setSrc(imageURL);
		egl.checkNull(this.image).setWidth((16).toString());
		egl.checkNull(this.image).setHeight((16).toString());
		
	}
	,
	"setChildren": function( newChildren ) {
		this.ignoreChanges = true;
		this.removeChildren();
		var childrenCount = 0;
		childrenCount = newChildren.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= childrenCount); n = (n + 1) )
			{
				var child = null;
				child = egl.convertAnyToRefType(egl.boxAny(egl.checkNull(newChildren)[newChildren.checkIndex((n)-1)]),"Tcom/ibm/egl/rui/widgets/treenode;",egl.com.ibm.egl.rui.widgets.TreeNode);
				this.appendChild(egl.boxAny(egl.checkNull(newChildren)[newChildren.checkIndex((n)-1)]) );
			}
		}
		this.ignoreChanges = false;
		this.childrenChanged();
		
	}
	,
	"getChildren": function() {
		var $result = null;
		$result = this.childNodes;
		return $result;
	}
	,
	"removeChildren": function() {
		this.childNodes.removeAll();
		egl.checkNull(this.childrenContainer).removeChildren();
		this.childrenChanged();
		
	}
	,
	"appendChild": function( child ) {
		egl.checkNull(this.childrenContainer).appendChild(egl.convertAnyToRefType(child,"Tegl/ui/rui/widget;",egl.egl.ui.rui.Widget) );
		var node = null;
		node = egl.convertAnyToRefType(child,"Tcom/ibm/egl/rui/widgets/treenode;",egl.com.ibm.egl.rui.widgets.TreeNode);
		this.childNodes.appendElement( (function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tcom/ibm/egl/rui/widgets/treenode;"}) : null; })(node) );
		egl.checkNull(node).setLogicalParent(  this );
		this.childrenChanged();
		
	}
	,
	"childrenChanged": function() {
		if ( !(this.ignoreChanges) ) {
			this.applyBehaviorsToChildren();
		}
		
	}
	,
	"getText": function() {
		var $result = "";
		if ( (this.span == null) ) {
			$result = "span=null";
			return $result;
		}
		$result = egl.checkNull(this.span).getInnerHTML();
		return $result;
	}
	,
	"setText": function( text ) {
		egl.checkNull(this.span).setInnerHTML(text);
		
	}
	,
	"applyBehaviors": function( behaviors, eze$$behaviors$func_, bgColor, eze$$caller ) {
		this.bgColor = bgColor;
		if ( (this.behaviors.getSize() == 0) ) {
			this.behaviors.appendAll( behaviors );
			var behaviorCount = 0;
			behaviorCount = behaviors.getSize();
			{
				var n = 0;
				n = 1;
				for ( ; (n <= behaviorCount); n = (n + 1) )
				{
					egl.checkNull(behaviors)[behaviors.checkIndex((n)-1)]( this );
				}
			}
		}
		this.applyBehaviorsToChildren();
		
	}
	,
	"applyBehaviorsToChildren": function() {
		var childrenCount = 0;
		childrenCount = this.childNodes.getSize();
		{
			var n = 0;
			n = 1;
			for ( ; (n <= childrenCount); n = (n + 1) )
			{
				var child = null;
				child = egl.convertAnyToRefType(egl.boxAny(egl.checkNull(this.childNodes)[this.childNodes.checkIndex((n)-1)]),"Tcom/ibm/egl/rui/widgets/treenode;",egl.com.ibm.egl.rui.widgets.TreeNode);
				egl.checkNull(child).applyBehaviors(this.behaviors, function(eze$$inout$behaviors) {
					this.behaviors = eze$$inout$behaviors;
				}, this.bgColor, this );
				egl.checkNull(child).markAsLast((n == childrenCount), this.bgColor );
			}
		}
		
	}
	,
	"markAsLast": function( lastNode, bgColor ) {
		if ( lastNode ) {
			egl.checkNull(this.nodeContainer).setBackground((bgColor + " url(images/TreeNodeL.gif) no-repeat"));
		}
		else {
			egl.checkNull(this.nodeContainer).setBackground(" url(images/TreeNodeL.gif) no-repeat");
		}
		
	}
	,
	"setBiDiStyle": function( textLayoutThis, reverseTextDirectionThis ) {
		egl.checkNull(this.span).setTextLayout(textLayoutThis);
		egl.checkNull(this.span).setReverseTextDirection(reverseTextDirectionThis);
		{
			var i = 0;
			i = 1;
			for ( ; (i <= this.childNodes.getSize()); i = (i + 1) )
			{
				var child = null;
				child = egl.convertAnyToRefType(egl.boxAny(egl.checkNull(this.childNodes)[this.childNodes.checkIndex((i)-1)]),"Tcom/ibm/egl/rui/widgets/treenode;",egl.com.ibm.egl.rui.widgets.TreeNode);
				egl.checkNull(child).setBiDiStyle(textLayoutThis, reverseTextDirectionThis );
			}
		}
		
	}
	,
	"toString": function() {
		return "[TreeNode]";
	}
}
);
