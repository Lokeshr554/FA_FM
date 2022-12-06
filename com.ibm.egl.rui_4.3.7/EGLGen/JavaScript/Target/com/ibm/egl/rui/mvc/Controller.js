// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.mvc', 'Controller', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/Controller.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/Controller',
	"constructor" : function()
	{
		this.model = null;
		this.view = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "view");
		
		this.formatters = null;
		
		this.unformatters = null;
		
		this.validators = null;
		
		this.internalFormatters = null;
		
		this.internalUnformatters = null;
		
		this.internalValidators = null;
		
		this.commitHelper = null;
		
		this.retrieveModelHelper = null;
		
		this.publishHelper = null;
		
		this.retrieveViewHelper = null;
		
		this.publishMessageHelper = null;
		
		this.retrieveValidStateHelper = null;
		
		this.showErrorState = null;
		
		this.validStateSetter = null;
		
		this.skipFormatter = false;
		this.errorMessage = null;
		this.initialClass = "";
		this.isStateInitialized = false;
		this.publishJob = new egl.egl.javascript.Job();
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.mvc.InternalDateFormatter();
		new egl.com.ibm.egl.rui.mvc.InternalTimeFormatter();
		new egl.com.ibm.egl.rui.mvc.InternalValidators();
		new egl.com.ibm.egl.rui.mvc.MVCLib();
		new egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter();
		new egl.com.ibm.egl.rui.mvc.InternalFormatters();
		new egl.com.ibm.egl.rui.mvc.InternalNumericFormatter();
		new egl.com.ibm.egl.rui.mvc.InternalCharFormatter();
		this.formatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
		this.unformatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
		this.validators = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcvalidatorfunction;" );
		this.internalFormatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
		this.internalUnformatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
		this.internalValidators = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcvalidatorfunction;" );
		this.errorMessage = null;
		this.initialClass = "";
		this.isStateInitialized = false;
		this.publishJob.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.publish) );
	}
	
	,
	"setModel": function( model ) {
		this.model = model;
		this.publishJob.schedule();
		
	}
	,
	"setView": function( view ) {
		this.view = view;
		view.getOnFocusGained().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.focusGained) );
		view.getOnFocusLost().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.focusLost) );
		view.setAttribute("isMVCView", true );
		this.publishJob.schedule();
		
	}
	,
	"commit": function() {
		try {
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			var s = "";
			s = this.retrieveViewHelper();
			if ( !(this.skipFormatter) ) {
				s = this.unformat(s );
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			}
			this.commitHelper(s );
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
		}
		catch ( ezert$$1 )
		{
			if ( ezert$$1 instanceof egl.egl.core.RuntimeException ) {
				var e = ezert$$1;
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				this.errorMessage = egl.checkNull(e).message;
			}
			else {
				throw ezert$$1;
			}
		}
		
	}
	,
	"publish": function() {
		try {
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			var s = "";
			s = this.retrieveModelHelper();
			if ( !(this.skipFormatter) ) {
				s = this.format(s );
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			}
			this.publishHelper(s );
			this.updateViewErrorDisplay(true );
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
		}
		catch ( ezert$$2 )
		{
			{
				if (!(ezert$$2 instanceof egl.egl.core.AnyException)) {
					ezert$$2 = egl.makeExceptionFromCaughtObject(ezert$$2);
				}
				var exception = ezert$$2;
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				throw exception;
			}
		}
		
	}
	,
	"isValid": function() {
		var $result = false;
		var valid = false;
		valid = this.validate();
		this.notifyStateChange(valid );
		$result = valid;
		return $result;
	}
	,
	"isControllerValid": function() {
		var $result = false;
		var valid = false;
		valid = this.validate();
		$result = valid;
		return $result;
	}
	,
	"validate": function() {
		var $result = false;
		this.isStateInitialized = true;
		try {
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			if ( (this.retrieveValidStateHelper != null) ) {
				this.errorMessage = this.retrieveValidStateHelper();
				if ( !(((this.errorMessage == null) || (egl.nullableCompare(this.errorMessage,"", 1) == 0))) ) {
					$result = false;
					return $result;
				}
			}
			var s = "";
			s = this.retrieveViewHelper();
			if ( !(this.skipFormatter) ) {
				s = this.unformat(s );
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			}
			if ( (this.errorMessage != null) ) {
				$result = false;
				return $result;
			}
			{
				var n = 0;
				n = 1;
				for ( ; (n <= this.internalValidators.getSize()); n = (n + 1) )
				{
					this.errorMessage = egl.checkNull(this.internalValidators)[this.internalValidators.checkIndex((n)-1)](s );
					if ( !(((this.errorMessage == null) || (egl.nullableCompare(this.errorMessage,"", 1) == 0))) ) {
						$result = false;
						return $result;
					}
				}
			}
			{
				var n = 0;
				n = 1;
				for ( ; (n <= this.validators.getSize()); n = (n + 1) )
				{
					this.errorMessage = egl.checkNull(this.validators)[this.validators.checkIndex((n)-1)](s );
					if ( !(((this.errorMessage == null) || (egl.nullableCompare(this.errorMessage,"", 1) == 0))) ) {
						$result = false;
						return $result;
					}
				}
			}
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
			$result = true;
			return $result;
		}
		catch ( ezert$$3 )
		{
			{
				if (!(ezert$$3 instanceof egl.egl.core.AnyException)) {
					ezert$$3 = egl.makeExceptionFromCaughtObject(ezert$$3);
				}
				var exception = ezert$$3;
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				throw exception;
			}
		}
		return $result;
	}
	,
	"format": function( s ) {
		var $result = "";
		try {
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			{
				var n = 0;
				n = this.internalFormatters.getSize();
				for ( ; (n >= 1); n = (n - 1) )
				{
					s = egl.checkNull(this.internalFormatters)[this.internalFormatters.checkIndex((n)-1)](s );
				}
			}
			{
				var n = 0;
				n = this.formatters.getSize();
				for ( ; (n >= 1); n = (n - 1) )
				{
					s = egl.checkNull(this.formatters)[this.formatters.checkIndex((n)-1)](s );
				}
			}
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
		}
		catch ( ezert$$4 )
		{
			if ( ezert$$4 instanceof egl.egl.core.RuntimeException ) {
				var e = ezert$$4;
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				this.errorMessage = egl.checkNull(e).message;
			}
			else {
				throw ezert$$4;
			}
		}
		$result = s;
		return $result;
	}
	,
	"unformat": function( s ) {
		var $result = "";
		this.errorMessage = null;
		try {
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			{
				var n = 0;
				n = this.unformatters.getSize();
				for ( ; (n >= 1); n = (n - 1) )
				{
					s = egl.checkNull(this.unformatters)[this.unformatters.checkIndex((n)-1)](s );
				}
			}
			{
				var n = 0;
				n = this.internalUnformatters.getSize();
				for ( ; (n >= 1); n = (n - 1) )
				{
					s = egl.checkNull(this.internalUnformatters)[this.internalUnformatters.checkIndex((n)-1)](s );
				}
			}
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
		}
		catch ( ezert$$5 )
		{
			if ( ezert$$5 instanceof egl.egl.core.RuntimeException ) {
				var e = ezert$$5;
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				this.errorMessage = egl.checkNull(e).message;
			}
			else {
				throw ezert$$5;
			}
		}
		$result = s;
		return $result;
	}
	,
	"getValidators": function() {
		var $result = null;
		$result = this.validators;
		return $result;
	}
	,
	"getErrorMessage": function() {
		var $result = null;
		$result = this.errorMessage;
		return $result;
	}
	,
	"setErrorMessage": function( msg, eze$$msg$func_, eze$$caller ) {
		this.errorMessage = msg;
		
	}
	,
	"getView": function() {
		var $result = null;
		$result = this.view;
		return $result;
	}
	,
	"getModel": function() {
		var $result = null;
		$result = this.model;
		return $result;
	}
	,
	"focusLost": function( e ) {
		this.isValid();
		
	}
	,
	"focusGained": function( e ) {
		try {
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			if ( (!(((null == this.errorMessage) || (egl.nullableCompare("",this.errorMessage, 1) == 0))) && (null != this.publishMessageHelper)) ) {
				if ( (null != this.showErrorState) ) {
					this.showErrorState(true );
				}
				if ( (null != this.publishMessageHelper) ) {
					this.publishMessageHelper((function(x){ return x != null ? ((x).toString()) : ""; })(this.errorMessage) );
				}
			}
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
		}
		catch ( ezert$$6 )
		{
			{
				if (!(ezert$$6 instanceof egl.egl.core.AnyException)) {
					ezert$$6 = egl.makeExceptionFromCaughtObject(ezert$$6);
				}
				var exception = ezert$$6;
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				throw exception;
			}
		}
		
	}
	,
	"updateViewErrorDisplay": function( valid ) {
		this.initialClass = this.view.getClass();
		if ( valid ) {
			this.view.setClass( this.initialClass );
			this.errorMessage = "";
		}
		else {
			this.view.setClass( (this.initialClass + " FormErrorEditor") );
		}
		if ( (null != this.showErrorState) ) {
			this.showErrorState(!(valid) );
		}
		
	}
	,
	"notifyStateChange": function( valid ) {
		try {
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
			this.updateViewErrorDisplay(valid );
			if ( (this.validStateSetter != null) ) {
				this.validStateSetter(this.view, valid );
			}
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
		}
		catch ( ezert$$7 )
		{
			{
				if (!(ezert$$7 instanceof egl.egl.core.AnyException)) {
					ezert$$7 = egl.makeExceptionFromCaughtObject(ezert$$7);
				}
				var exception = ezert$$7;
				egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
			}
		}
		
	}
	,
	"getCommitHelper": function() {
		var $result = null;
		$result = this.commitHelper;
		return $result;
	}
	,
	"getPublishHelper": function() {
		var $result = null;
		$result = this.publishHelper;
		return $result;
	}
	,
	"getRetrieveViewHelper": function() {
		var $result = null;
		$result = this.retrieveViewHelper;
		return $result;
	}
	,
	"getRetrieveModelHelper": function() {
		var $result = null;
		$result = this.retrieveModelHelper;
		return $result;
	}
	,
	"getPublishMessageHelper": function() {
		var $result = null;
		$result = this.publishMessageHelper;
		return $result;
	}
	,
	"getRetrieveValidStateHelper": function() {
		var $result = null;
		$result = this.retrieveValidStateHelper;
		return $result;
	}
	,
	"getShowErrorState": function() {
		var $result = null;
		$result = this.showErrorState;
		return $result;
	}
	,
	"setCommitHelper": function( helper ) {
		this.commitHelper = helper;
		
	}
	,
	"setPublishHelper": function( helper ) {
		this.publishHelper = helper;
		(function () {
			var ezert$$8 = new egl.egl.javascript.Job();
			ezert$$8.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.publish) );
			return ezert$$8;
		}).call(this).schedule();
		
	}
	,
	"setRetrieveViewHelper": function( helper ) {
		this.retrieveViewHelper = helper;
		
	}
	,
	"setRetrieveModelHelper": function( helper ) {
		this.retrieveModelHelper = helper;
		(function () {
			var ezert$$9 = new egl.egl.javascript.Job();
			ezert$$9.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.publish) );
			return ezert$$9;
		}).call(this).schedule();
		
	}
	,
	"setPublishMessageHelper": function( helper ) {
		this.publishMessageHelper = helper;
		
	}
	,
	"setRetrieveValidStateHelper": function( helper ) {
		this.retrieveValidStateHelper = helper;
		
	}
	,
	"setShowErrorState": function( helper ) {
		this.showErrorState = helper;
		
	}
	,
	"isValidStateInitialized": function() {
		var $result = false;
		$result = this.isStateInitialized;
		return $result;
	}
	,
	"toString": function() {
		return "[Controller]";
	}
}
);
