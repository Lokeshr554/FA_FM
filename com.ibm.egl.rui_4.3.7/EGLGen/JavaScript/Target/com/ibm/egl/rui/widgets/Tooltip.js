// Generated at Tue Dec 06 11:54:43 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Tooltip', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/widgets/Tooltip.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Tooltip',
	"constructor" : function()
	{
		this.provider = null;
		
		this.delay = 0;
		this.text = "";
		this.container = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "container");
		
		this.shadow = new egl.com.ibm.egl.rui.widgets.Shadow();
		egl.addEmbeddedWidget(this, "shadow");
		
		this.tooltip = new egl.com.ibm.egl.rui.widgets.Box();
		egl.addEmbeddedWidget(this, "tooltip");
		
		this.defaultTip = new egl.com.ibm.egl.rui.widgets.Box();
		egl.addEmbeddedWidget(this, "defaultTip");
		
		this.showJob = new egl.egl.javascript.Job();
		
		this.hideJob = new egl.egl.javascript.Job();
		
		this.insideTarget = false;
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.core.MathLib();
		new egl.egl.core.StrLib();
		this.delay = 400;
		this.text = "";
		egl.checkNull(this.container).setClass("EglRuiTooltip");
		egl.checkNull(this.container).getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Tooltip.prototype.enterTooltip) );
		egl.checkNull(this.container).getOnMouseOut().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Tooltip.prototype.leaveTooltip) );
		egl.checkNull(this.shadow).setDiv(this.container);
		egl.checkNull(this.tooltip).setChildren( [ this.shadow ] );
		egl.checkNull(this.tooltip).setVisibility("hidden");
		egl.checkNull(this.tooltip).setZIndex("2147483647");
		egl.checkNull(this.tooltip).setPosition("absolute");
		egl.checkNull(this.defaultTip).setChildren( [ new egl.com.ibm.egl.rui.widgets.HTML() ] );
		this.showJob.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Tooltip.prototype.showTooltip) );
		this.hideJob.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Tooltip.prototype.hideTooltip) );
		this.start();
	}
	
	,
	"start": function() {
		this.document.body.appendChild(this.tooltip );
		
	}
	,
	"enable": function( widget ) {
		widget.getOnMouseOver().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Tooltip.prototype.activateTooltip) );
		widget.getOnMouseOut().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Tooltip.prototype.deactivateTooltip) );
		widget.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Tooltip.prototype.leaveTooltip) );
		
	}
	,
	"deactivateTooltip": function( e ) {
		this.hideJob.schedule(this.delay );
		this.insideTarget = false;
		
	}
	,
	"activateTooltip": function( e ) {
		this.insideTarget = true;
		var widget = null;
		widget = e.widget;
		var tip = null;
		tip = null;
		if ( ((this.provider == null) && (this.text != null)) ) {
			tip = this.defaultTip;
			egl.checkNull(egl.checkNull(tip).getChildren()[egl.checkNull(tip).getChildren().checkIndex((1)-1)]).setText(this.text);
		}
		else {
			tip = this.provider((function(x){ return x != null ? ({eze$$value : x, eze$$signature : "Tegl/ui/rui/widget;"}) : null; })(e.widget) );
		}
		if ( (tip != null) ) {
			var h = 0;
			h = 10;
			if ( (widget.getHeight() != "auto") ) {
				var hs = "";
				hs = widget.getHeight();
				if ( egl.is(hs, "NUMERIC",egl.isnumeric) ) {
					h = egl.convertStringToInt(hs);
				}
				else {
					var len = 0;
					len = egl.egl.core.$StrLib.textLen( hs);
					if ( ((len > 2) && egl.is(hs.substring( 1-1,(len - 2)), "NUMERIC",egl.isnumeric)) ) {
						h = egl.convertStringToInt(hs.substring( 1-1,(len - 2)));
					}
				}
			}
			var y = 0;
			y = Math.min( ((widget.getY() + h) - 3) ,(e.pageY + 10) );
			egl.checkNull(this.container).removeChildren();
			egl.checkNull(this.container).setChildren( [ tip ] );
			egl.checkNull(this.container).setOpacity("1.0");
			egl.checkNull(this.tooltip).setX(e.pageX);
			egl.checkNull(this.tooltip).setY(y);
			this.hideJob.cancel();
			this.showJob.schedule(this.delay );
		}
		else {
			this.hideTooltip();
		}
		
	}
	,
	"showTooltip": function() {
		if ( this.insideTarget ) {
			egl.checkNull(this.tooltip).setVisibility("visible");
		}
		
	}
	,
	"hideTooltip": function() {
		egl.checkNull(this.container).fadeOut(300, function() {
			var ezert$$1 = null;
			
			ezert$$1 = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.Tooltip.prototype.setInvisible);
		; return ezert$$1;}.call(this) );
		this.insideTarget = false;
		
	}
	,
	"setInvisible": function() {
		egl.checkNull(this.container).setOpacity("1.0");
		egl.checkNull(this.tooltip).setVisibility("hidden");
		
	}
	,
	"enterTooltip": function( e ) {
		this.hideJob.cancel();
		
	}
	,
	"leaveTooltip": function( e ) {
		this.hideJob.schedule(200 );
		
	}
	,
	"toString": function() {
		return "[Tooltip]";
	}
}
);
