// Generated at Tue Dec 06 11:54:46 IST 2022 by EGL 7.1.1.v20221019_0813
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.mvc', 'Controller', {
	'eze$$fileName': '/com.ibm.egl.rui_4.3.7/EGLSource/com/ibm/egl/rui/mvc/Controller.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/Controller',
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
			egl.atLine(this.eze$$fileName,21,539,69, this);
			this.model = null;
			egl.atLine(this.eze$$fileName,22,611,70, this);
			this.view = new egl.egl.ui.rui.Widget();
			egl.addEmbeddedWidget(this, "view");
			
			egl.atLine(this.eze$$fileName,24,687,39, this);
			this.formatters = null;
			
			egl.atLine(this.eze$$fileName,25,729,41, this);
			this.unformatters = null;
			
			egl.atLine(this.eze$$fileName,26,773,39, this);
			this.validators = null;
			
			egl.atLine(this.eze$$fileName,28,818,55, this);
			this.internalFormatters = null;
			
			egl.atLine(this.eze$$fileName,29,876,57, this);
			this.internalUnformatters = null;
			
			egl.atLine(this.eze$$fileName,30,936,55, this);
			this.internalValidators = null;
			
			egl.atLine(this.eze$$fileName,32,997,99, this);
			this.commitHelper = null;
			
			egl.atLine(this.eze$$fileName,33,1099,120, this);
			this.retrieveModelHelper = null;
			
			egl.atLine(this.eze$$fileName,36,1249,102, this);
			this.publishHelper = null;
			
			egl.atLine(this.eze$$fileName,37,1354,117, this);
			this.retrieveViewHelper = null;
			
			egl.atLine(this.eze$$fileName,38,1475,130, this);
			this.publishMessageHelper = null;
			
			egl.atLine(this.eze$$fileName,39,1608,145, this);
			this.retrieveValidStateHelper = null;
			
			egl.atLine(this.eze$$fileName,40,1756,108, this);
			this.showErrorState = null;
			
			egl.atLine(this.eze$$fileName,42,1870,37, this);
			this.validStateSetter = null;
			
			egl.atLine(this.eze$$fileName,43,1910,22, this);
			this.skipFormatter = false;
			egl.atLine(this.eze$$fileName,45,1938,36, this);
			this.errorMessage = null;
			egl.atLine(this.eze$$fileName,46,1977,33, this);
			this.initialClass = "";
			egl.atLine(this.eze$$fileName,47,2013,43, this);
			this.isStateInitialized = false;
			egl.atLine(this.eze$$fileName,48,2059,46, this);
			this.publishJob = new egl.egl.javascript.Job();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.mvc.InternalNumericFormatter();
			new egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter();
			new egl.com.ibm.egl.rui.mvc.InternalTimeFormatter();
			new egl.com.ibm.egl.rui.mvc.InternalFormatters();
			new egl.com.ibm.egl.rui.mvc.InternalCharFormatter();
			new egl.com.ibm.egl.rui.mvc.MVCLib();
			new egl.com.ibm.egl.rui.mvc.InternalValidators();
			new egl.com.ibm.egl.rui.mvc.InternalDateFormatter();
			egl.atLine(this.eze$$fileName,24,687,39, this);
			this.formatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
			egl.atLine(this.eze$$fileName,25,729,41, this);
			this.unformatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
			egl.atLine(this.eze$$fileName,26,773,39, this);
			this.validators = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcvalidatorfunction;" );
			egl.atLine(this.eze$$fileName,28,818,55, this);
			this.internalFormatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
			egl.atLine(this.eze$$fileName,29,876,57, this);
			this.internalUnformatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
			egl.atLine(this.eze$$fileName,30,936,55, this);
			this.internalValidators = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcvalidatorfunction;" );
			egl.atLine(this.eze$$fileName,45,1938,36, this);
			this.errorMessage = null;
			egl.atLine(this.eze$$fileName,46,1977,33, this);
			this.initialClass = "";
			egl.atLine(this.eze$$fileName,47,2013,43, this);
			this.isStateInitialized = false;
			egl.atLine(this.eze$$fileName,48,2082,21, this);
			this.publishJob.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.publish,"publish") );
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"setModel": function( model ) {
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
		try { egl.enter("setModel",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("model", model, "any", "model");
			egl.atLine(this.eze$$fileName,51,2154,19, this);
			this.model = model;
			egl.atLine(this.eze$$fileName,52,2177,22, this);
			this.publishJob.schedule();
			egl.atLine(this.eze$$fileName,50,2111,94, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setView": function( view ) {
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
		try { egl.enter("setView",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("view", view, "egl.ui.rui.Widget", "view");
			egl.atLine(this.eze$$fileName,56,2254,17, this);
			this.view = view;
			egl.atLine(this.eze$$fileName,58,2311,35, this);
			view.getOnFocusGained().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.focusGained,"focusGained") );
			egl.atLine(this.eze$$fileName,59,2352,31, this);
			view.getOnFocusLost().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.focusLost,"focusLost") );
			egl.atLine(this.eze$$fileName,60,2387,37, this);
			view.setAttribute("isMVCView", true );
			egl.atLine(this.eze$$fileName,61,2428,22, this);
			this.publishJob.schedule();
			egl.atLine(this.eze$$fileName,55,2210,246, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"commit": function() {
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
		try { egl.enter("commit",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,65,2482,374, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,66,2490,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					var s = "";
					egl.addLocalFunctionVariable("s", s, "string", "s");
					egl.atLine(this.eze$$fileName,67,2537,20, this);
					var ezert$$1 = "";
					ezert$$1 = this.retrieveViewHelper();
					egl.atLine(this.eze$$fileName,67,2526,32, this);
					s = ezert$$1;
					egl.setLocalFunctionVariable("s", s, "string");
					egl.atLine(this.eze$$fileName,68,2563,124, this);
					if ( !(this.skipFormatter) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,69,2591,11, this);
							var ezert$$2 = "";
							ezert$$2 = this.unformat(s );
							egl.atLine(this.eze$$fileName,69,2587,16, this);
							s = ezert$$2;
							egl.setLocalFunctionVariable("s", s, "string");
							egl.atLine(this.eze$$fileName,70,2609,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,72,2695,16, this);
					this.commitHelper(s );
					egl.atLine(this.eze$$fileName,73,2716,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$3 )
			{
				if ( ezert$$3 instanceof egl.egl.core.RuntimeException ) {
					var e = ezert$$3;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.RuntimeException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,75,2788,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,76,2824,25, this);
							this.errorMessage = egl.checkNull(e, "e").message;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
				else {
					throw ezert$$3;
				}
			}
			egl.atLine(this.eze$$fileName,64,2461,401, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"publish": function() {
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
		try { egl.enter("publish",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,81,2890,402, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,82,2898,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					var s = "";
					egl.addLocalFunctionVariable("s", s, "string", "s");
					egl.atLine(this.eze$$fileName,83,2945,21, this);
					var ezert$$4 = "";
					ezert$$4 = this.retrieveModelHelper();
					egl.atLine(this.eze$$fileName,83,2934,33, this);
					s = ezert$$4;
					egl.setLocalFunctionVariable("s", s, "string");
					egl.atLine(this.eze$$fileName,84,2972,120, this);
					if ( !(this.skipFormatter) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,85,3000,9, this);
							var ezert$$5 = "";
							ezert$$5 = this.format(s );
							egl.atLine(this.eze$$fileName,85,2996,14, this);
							s = ezert$$5;
							egl.setLocalFunctionVariable("s", s, "string");
							egl.atLine(this.eze$$fileName,86,3016,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,88,3100,17, this);
					this.publishHelper(s );
					egl.atLine(this.eze$$fileName,89,3122,29, this);
					this.updateViewErrorDisplay(true );
					egl.atLine(this.eze$$fileName,90,3156,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$6 )
			{
				{
					if (ezert$$6 instanceof egl.egl.debug.DebugTermination){throw ezert$$6;}
					if (!(ezert$$6 instanceof egl.egl.core.AnyException)) {
						ezert$$6 = egl.makeExceptionFromCaughtObject(ezert$$6);
					}
					var exception = ezert$$6;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,92,3232,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,93,3268,17, this);
							throw exception;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,80,2868,430, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"isValid": function() {
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
		try { egl.enter("isValid",this,arguments,eze$$updater);
			var $result = false;
			var valid = false;
			egl.addLocalFunctionVariable("valid", valid, "boolean", "valid");
			egl.atLine(this.eze$$fileName,98,3360,10, this);
			var ezert$$7 = false;
			ezert$$7 = this.validate();
			egl.atLine(this.eze$$fileName,98,3344,27, this);
			valid = ezert$$7;
			egl.setLocalFunctionVariable("valid", valid, "boolean");
			egl.atLine(this.eze$$fileName,99,3375,25, this);
			this.notifyStateChange(valid );
			egl.atLine(this.eze$$fileName,100,3404,15, this);
			$result = valid;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"isControllerValid": function() {
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
		try { egl.enter("isControllerValid",this,arguments,eze$$updater);
			var $result = false;
			var valid = false;
			egl.addLocalFunctionVariable("valid", valid, "boolean", "valid");
			egl.atLine(this.eze$$fileName,104,3497,10, this);
			var ezert$$8 = false;
			ezert$$8 = this.validate();
			egl.atLine(this.eze$$fileName,104,3481,27, this);
			valid = ezert$$8;
			egl.setLocalFunctionVariable("valid", valid, "boolean");
			egl.atLine(this.eze$$fileName,105,3512,15, this);
			$result = valid;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"validate": function() {
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
		try { egl.enter("validate",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,109,3580,26, this);
			this.isStateInitialized = true;
			egl.atLine(this.eze$$fileName,110,3612,1011, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,111,3620,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,112,3656,190, this);
					if ( (this.retrieveValidStateHelper != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,113,3718,31, this);
							var ezert$$9 = null;
							ezert$$9 = this.retrieveValidStateHelper();
							egl.atLine(this.eze$$fileName,113,3703,47, this);
							this.errorMessage = ezert$$9;
							egl.atLine(this.eze$$fileName,114,3756,81, this);
							if ( !(((this.errorMessage == null) || (egl.nullableCompare(this.errorMessage,"", 1) == 0))) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,115,3813,15, this);
									$result = false;
									egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
									{ if (!egl.debugg) egl.leave(); return $result;}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					var s = "";
					egl.addLocalFunctionVariable("s", s, "string", "s");
					egl.atLine(this.eze$$fileName,119,3868,20, this);
					var ezert$$10 = "";
					ezert$$10 = this.retrieveViewHelper();
					egl.atLine(this.eze$$fileName,119,3857,32, this);
					s = ezert$$10;
					egl.setLocalFunctionVariable("s", s, "string");
					egl.atLine(this.eze$$fileName,120,3894,124, this);
					if ( !(this.skipFormatter) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,121,3922,11, this);
							var ezert$$11 = "";
							ezert$$11 = this.unformat(s );
							egl.atLine(this.eze$$fileName,121,3918,16, this);
							s = ezert$$11;
							egl.setLocalFunctionVariable("s", s, "string");
							egl.atLine(this.eze$$fileName,122,3940,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,124,4023,55, this);
					if ( (this.errorMessage != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,125,4055,15, this);
							$result = false;
							egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
							{ if (!egl.debugg) egl.leave(); return $result;}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,127,4083,196, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= this.internalValidators.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,128,4159,24, this);
									var ezert$$12 = null;
									ezert$$12 = egl.checkNull(this.internalValidators, "internalValidators")[this.internalValidators.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,128,4144,40, this);
									this.errorMessage = ezert$$12;
									egl.atLine(this.eze$$fileName,129,4190,81, this);
									if ( !(((this.errorMessage == null) || (egl.nullableCompare(this.errorMessage,"", 1) == 0))) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,130,4247,15, this);
											$result = false;
											egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
											{ if (!egl.debugg) egl.leave(); return $result;}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,127,4083,196, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,133,4284,180, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= this.validators.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,134,4352,16, this);
									var ezert$$13 = null;
									ezert$$13 = egl.checkNull(this.validators, "validators")[this.validators.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,134,4337,32, this);
									this.errorMessage = ezert$$13;
									egl.atLine(this.eze$$fileName,135,4375,81, this);
									if ( !(((this.errorMessage == null) || (egl.nullableCompare(this.errorMessage,"", 1) == 0))) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,136,4432,15, this);
											$result = false;
											egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
											{ if (!egl.debugg) egl.leave(); return $result;}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,133,4284,180, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,139,4469,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
					egl.atLine(this.eze$$fileName,140,4505,13, this);
					$result = true;
					egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$14 )
			{
				{
					if (ezert$$14 instanceof egl.egl.debug.DebugTermination){throw ezert$$14;}
					if (!(ezert$$14 instanceof egl.egl.core.AnyException)) {
						ezert$$14 = egl.makeExceptionFromCaughtObject(ezert$$14);
					}
					var exception = ezert$$14;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,142,4563,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,143,4599,17, this);
							throw exception;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,108,3540,1089, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"format": function( s ) {
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
		try { egl.enter("format",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("s", s, "string", "s");
			egl.atLine(this.eze$$fileName,148,4683,394, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,149,4691,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,150,4727,108, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							var ezert$$15 = 0;
							ezert$$15 = this.internalFormatters.getSize();
							n = ezert$$15;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n >= 1); n = (n - 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,151,4802,24, this);
									var ezert$$16 = "";
									ezert$$16 = egl.checkNull(this.internalFormatters, "internalFormatters")[this.internalFormatters.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,151,4798,29, this);
									s = ezert$$16;
									egl.setLocalFunctionVariable("s", s, "string");
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,150,4727,108, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,153,4840,92, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							var ezert$$17 = 0;
							ezert$$17 = this.formatters.getSize();
							n = ezert$$17;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n >= 1); n = (n - 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,154,4907,16, this);
									var ezert$$18 = "";
									ezert$$18 = egl.checkNull(this.formatters, "formatters")[this.formatters.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,154,4903,21, this);
									s = ezert$$18;
									egl.setLocalFunctionVariable("s", s, "string");
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,153,4840,92, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,156,4937,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$19 )
			{
				if ( ezert$$19 instanceof egl.egl.core.RuntimeException ) {
					var e = ezert$$19;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.RuntimeException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,158,5009,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,159,5045,25, this);
							this.errorMessage = egl.checkNull(e, "e").message;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
				else {
					throw ezert$$19;
				}
			}
			egl.atLine(this.eze$$fileName,161,5081,10, this);
			$result = s;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"unformat": function( s ) {
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
		try { egl.enter("unformat",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("s", s, "string", "s");
			egl.atLine(this.eze$$fileName,165,5153,20, this);
			this.errorMessage = null;
			egl.atLine(this.eze$$fileName,166,5177,402, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,167,5185,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,168,5221,96, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							var ezert$$20 = 0;
							ezert$$20 = this.unformatters.getSize();
							n = ezert$$20;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n >= 1); n = (n - 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,169,5290,18, this);
									var ezert$$21 = "";
									ezert$$21 = egl.checkNull(this.unformatters, "unformatters")[this.unformatters.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,169,5286,23, this);
									s = ezert$$21;
									egl.setLocalFunctionVariable("s", s, "string");
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,168,5221,96, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,171,5322,112, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							var ezert$$22 = 0;
							ezert$$22 = this.internalUnformatters.getSize();
							n = ezert$$22;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n >= 1); n = (n - 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,172,5399,26, this);
									var ezert$$23 = "";
									ezert$$23 = egl.checkNull(this.internalUnformatters, "internalUnformatters")[this.internalUnformatters.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,172,5395,31, this);
									s = ezert$$23;
									egl.setLocalFunctionVariable("s", s, "string");
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,171,5322,112, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,174,5439,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$24 )
			{
				if ( ezert$$24 instanceof egl.egl.core.RuntimeException ) {
					var e = ezert$$24;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.RuntimeException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,176,5511,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,177,5547,25, this);
							this.errorMessage = egl.checkNull(e, "e").message;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
				else {
					throw ezert$$24;
				}
			}
			egl.atLine(this.eze$$fileName,179,5583,10, this);
			$result = s;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getValidators": function() {
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
		try { egl.enter("getValidators",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,183,5665,20, this);
			$result = this.validators;
			egl.setLocalFunctionVariable("MVCValidatorFunction[]", $result, "com.ibm.egl.rui.mvc.MVCValidatorFunction[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getErrorMessage": function() {
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
		try { egl.enter("getErrorMessage",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,187,5744,22, this);
			$result = this.errorMessage;
			egl.setLocalFunctionVariable("STRING?", $result, "string?");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setErrorMessage": function( msg, eze$$msg$func_, eze$$caller ) {
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
		try { egl.enter("setErrorMessage",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("msg", msg, "string", "msg");
			egl.atLine(this.eze$$fileName,191,5818,19, this);
			this.errorMessage = msg;
			egl.atLine(this.eze$$fileName,190,5778,65, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getView": function() {
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
		try { egl.enter("getView",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,195,5895,13, this);
			$result = this.view;
			egl.setLocalFunctionVariable("Widget", $result, "egl.ui.rui.Widget");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getModel": function() {
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
		try { egl.enter("getModel",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,199,5964,14, this);
			$result = this.model;
			egl.setLocalFunctionVariable("ANY", $result, "any");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"focusLost": function( e ) {
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
		try { egl.enter("focusLost",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,203,6032,10, this);
			this.isValid();
			egl.atLine(this.eze$$fileName,202,5990,58, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"focusGained": function( e ) {
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
		try { egl.enter("focusGained",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,207,6098,452, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,208,6106,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,209,6142,263, this);
					if ( (!(((null == this.errorMessage) || (egl.nullableCompare("",this.errorMessage, 1) == 0))) && (null != this.publishMessageHelper)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,210,6233,68, this);
							if ( (null != this.showErrorState) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,211,6266,26, this);
									this.showErrorState(true );
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,213,6307,89, this);
							if ( (null != this.publishMessageHelper) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,214,6347,40, this);
									this.publishMessageHelper((function(x){ return x != null ? ((x).toString()) : ""; })(this.errorMessage) );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,217,6414,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$25 )
			{
				{
					if (ezert$$25 instanceof egl.egl.debug.DebugTermination){throw ezert$$25;}
					if (!(ezert$$25 instanceof egl.egl.core.AnyException)) {
						ezert$$25 = egl.makeExceptionFromCaughtObject(ezert$$25);
					}
					var exception = ezert$$25;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,219,6490,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,220,6526,17, this);
							throw exception;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,206,6054,502, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"updateViewErrorDisplay": function( valid ) {
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
		try { egl.enter("updateViewErrorDisplay",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("valid", valid, "boolean", "valid");
			egl.atLine(this.eze$$fileName,225,6615,26, this);
			this.initialClass = this.view.getClass();
			egl.atLine(this.eze$$fileName,226,6645,131, this);
			if ( valid ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,227,6660,26, this);
					this.view.setClass( this.initialClass );
					egl.atLine(this.eze$$fileName,228,6691,18, this);
					this.errorMessage = "";
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,230,6722,47, this);
					this.view.setClass( (this.initialClass + " FormErrorEditor") );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,232,6780,66, this);
			if ( (null != this.showErrorState) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,233,6811,28, this);
					this.showErrorState(!(valid) );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,224,6562,290, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"notifyStateChange": function( valid ) {
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
		try { egl.enter("notifyStateChange",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("valid", valid, "boolean", "valid");
			egl.atLine(this.eze$$fileName,238,6914,271, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,239,6922,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,240,6958,30, this);
					this.updateViewErrorDisplay(valid );
					egl.atLine(this.eze$$fileName,241,6993,73, this);
					if ( (this.validStateSetter != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,242,7028,30, this);
							this.validStateSetter(this.view, valid );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,244,7071,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$26 )
			{
				{
					if (ezert$$26 instanceof egl.egl.debug.DebugTermination){throw ezert$$26;}
					if (!(ezert$$26 instanceof egl.egl.core.AnyException)) {
						ezert$$26 = egl.makeExceptionFromCaughtObject(ezert$$26);
					}
					var exception = ezert$$26;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,246,7147,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,237,6858,333, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCommitHelper": function() {
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
		try { egl.enter("getCommitHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,251,7258,22, this);
			$result = this.commitHelper;
			egl.setLocalFunctionVariable("MVCCommitter", $result, "com.ibm.egl.rui.mvc.MVCCommitter");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getPublishHelper": function() {
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
		try { egl.enter("getPublishHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,254,7350,23, this);
			$result = this.publishHelper;
			egl.setLocalFunctionVariable("MVCPublisher", $result, "com.ibm.egl.rui.mvc.MVCPublisher");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRetrieveViewHelper": function() {
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
		try { egl.enter("getRetrieveViewHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,257,7448,28, this);
			$result = this.retrieveViewHelper;
			egl.setLocalFunctionVariable("MVCRetriever", $result, "com.ibm.egl.rui.mvc.MVCRetriever");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRetrieveModelHelper": function() {
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
		try { egl.enter("getRetrieveModelHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,260,7552,29, this);
			$result = this.retrieveModelHelper;
			egl.setLocalFunctionVariable("MVCRetriever", $result, "com.ibm.egl.rui.mvc.MVCRetriever");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getPublishMessageHelper": function() {
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
		try { egl.enter("getPublishMessageHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,263,7665,30, this);
			$result = this.publishMessageHelper;
			egl.setLocalFunctionVariable("MVCMessagePublisher", $result, "com.ibm.egl.rui.mvc.MVCMessagePublisher");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRetrieveValidStateHelper": function() {
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
		try { egl.enter("getRetrieveValidStateHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,266,7786,34, this);
			$result = this.retrieveValidStateHelper;
			egl.setLocalFunctionVariable("MVCValidStateRetriever", $result, "com.ibm.egl.rui.mvc.MVCValidStateRetriever");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowErrorState": function() {
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
		try { egl.enter("getShowErrorState",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,269,7896,24, this);
			$result = this.showErrorState;
			egl.setLocalFunctionVariable("MVCShowErrorState", $result, "com.ibm.egl.rui.mvc.MVCShowErrorState");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setCommitHelper": function( helper ) {
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
		try { egl.enter("setCommitHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCCommitter", "helper");
			egl.atLine(this.eze$$fileName,273,7992,22, this);
			this.commitHelper = helper;
			egl.atLine(this.eze$$fileName,272,7932,88, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setPublishHelper": function( helper ) {
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
		try { egl.enter("setPublishHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCPublisher", "helper");
			egl.atLine(this.eze$$fileName,276,8084,23, this);
			this.publishHelper = helper;
			egl.atLine(this.eze$$fileName,277,8111,43, this);
			(function () {
				var ezert$$27 = new egl.egl.javascript.Job();
				egl.atLine(this.eze$$fileName,277,8121,19, this);
				ezert$$27.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.publish,"publish") );
				return ezert$$27;
			}).call(this).schedule();
			egl.atLine(this.eze$$fileName,275,8023,137, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRetrieveViewHelper": function( helper ) {
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
		try { egl.enter("setRetrieveViewHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCRetriever", "helper");
			egl.atLine(this.eze$$fileName,280,8229,28, this);
			this.retrieveViewHelper = helper;
			egl.atLine(this.eze$$fileName,279,8163,100, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRetrieveModelHelper": function( helper ) {
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
		try { egl.enter("setRetrieveModelHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCRetriever", "helper");
			egl.atLine(this.eze$$fileName,283,8333,29, this);
			this.retrieveModelHelper = helper;
			egl.atLine(this.eze$$fileName,284,8366,43, this);
			(function () {
				var ezert$$28 = new egl.egl.javascript.Job();
				egl.atLine(this.eze$$fileName,284,8376,19, this);
				ezert$$28.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.publish,"publish") );
				return ezert$$28;
			}).call(this).schedule();
			egl.atLine(this.eze$$fileName,282,8266,149, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setPublishMessageHelper": function( helper ) {
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
		try { egl.enter("setPublishMessageHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCMessagePublisher", "helper");
			egl.atLine(this.eze$$fileName,287,8493,30, this);
			this.publishMessageHelper = helper;
			egl.atLine(this.eze$$fileName,286,8418,111, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRetrieveValidStateHelper": function( helper ) {
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
		try { egl.enter("setRetrieveValidStateHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCValidStateRetriever", "helper");
			egl.atLine(this.eze$$fileName,290,8614,34, this);
			this.retrieveValidStateHelper = helper;
			egl.atLine(this.eze$$fileName,289,8532,122, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowErrorState": function( helper ) {
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
		try { egl.enter("setShowErrorState",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCShowErrorState", "helper");
			egl.atLine(this.eze$$fileName,293,8724,24, this);
			this.showErrorState = helper;
			egl.atLine(this.eze$$fileName,292,8657,97, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"isValidStateInitialized": function() {
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
		try { egl.enter("isValidStateInitialized",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,300,8901,28, this);
			$result = this.isStateInitialized;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[Controller]";
	}
	,
	"eze$$getName": function() {
		return "Controller";
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
		
		{name: "InternalNumericFormatter", value : egl.com.ibm.egl.rui.mvc.InternalNumericFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalNumericFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalNumericFormatter.$inst"},
		{name: "InternalTimestampFormatter", value : egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalTimestampFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter.$inst"},
		{name: "InternalTimeFormatter", value : egl.com.ibm.egl.rui.mvc.InternalTimeFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalTimeFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalTimeFormatter.$inst"},
		{name: "InternalFormatters", value : egl.com.ibm.egl.rui.mvc.InternalFormatters['$inst'], type : "com.ibm.egl.rui.mvc.InternalFormatters", jsName : "egl.com.ibm.egl.rui.mvc.InternalFormatters.$inst"},
		{name: "InternalCharFormatter", value : egl.com.ibm.egl.rui.mvc.InternalCharFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalCharFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalCharFormatter.$inst"},
		{name: "MVCLib", value : egl.com.ibm.egl.rui.mvc.MVCLib['$inst'], type : "com.ibm.egl.rui.mvc.MVCLib", jsName : "egl.com.ibm.egl.rui.mvc.MVCLib.$inst"},
		{name: "InternalValidators", value : egl.com.ibm.egl.rui.mvc.InternalValidators['$inst'], type : "com.ibm.egl.rui.mvc.InternalValidators", jsName : "egl.com.ibm.egl.rui.mvc.InternalValidators.$inst"},
		{name: "InternalDateFormatter", value : egl.com.ibm.egl.rui.mvc.InternalDateFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalDateFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalDateFormatter.$inst"},
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
		{name: "model", value : function(){try{return eze$$parent.getModel();}catch(e){return null;}}(), type : "any", jsName : "model", getter : "getModel", setter : "setModel"},
		{name: "view", value : function(){try{return eze$$parent.getView();}catch(e){return null;}}(), type : "egl.ui.rui.Widget", jsName : "view", getter : "getView", setter : "setView"},
		{name: "formatters", value : eze$$parent.formatters, type : "com.ibm.egl.rui.mvc.MVCFormatterFunction[]", jsName : "!formatters"},
		{name: "unformatters", value : eze$$parent.unformatters, type : "com.ibm.egl.rui.mvc.MVCFormatterFunction[]", jsName : "!unformatters"},
		{name: "validators", value : eze$$parent.validators, type : "com.ibm.egl.rui.mvc.MVCValidatorFunction[]", jsName : "!validators"},
		{name: "internalFormatters", value : eze$$parent.internalFormatters, type : "com.ibm.egl.rui.mvc.MVCFormatterFunction[]", jsName : "!internalFormatters"},
		{name: "internalUnformatters", value : eze$$parent.internalUnformatters, type : "com.ibm.egl.rui.mvc.MVCFormatterFunction[]", jsName : "!internalUnformatters"},
		{name: "internalValidators", value : eze$$parent.internalValidators, type : "com.ibm.egl.rui.mvc.MVCValidatorFunction[]", jsName : "!internalValidators"},
		{name: "commitHelper", value : function(){try{return eze$$parent.getCommitHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCCommitter", jsName : "commitHelper", getter : "getCommitHelper", setter : "setCommitHelper"},
		{name: "retrieveModelHelper", value : function(){try{return eze$$parent.getRetrieveModelHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCRetriever", jsName : "retrieveModelHelper", getter : "getRetrieveModelHelper", setter : "setRetrieveModelHelper"},
		{name: "publishHelper", value : function(){try{return eze$$parent.getPublishHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCPublisher", jsName : "publishHelper", getter : "getPublishHelper", setter : "setPublishHelper"},
		{name: "retrieveViewHelper", value : function(){try{return eze$$parent.getRetrieveViewHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCRetriever", jsName : "retrieveViewHelper", getter : "getRetrieveViewHelper", setter : "setRetrieveViewHelper"},
		{name: "publishMessageHelper", value : function(){try{return eze$$parent.getPublishMessageHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCMessagePublisher", jsName : "publishMessageHelper", getter : "getPublishMessageHelper", setter : "setPublishMessageHelper"},
		{name: "retrieveValidStateHelper", value : function(){try{return eze$$parent.getRetrieveValidStateHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCValidStateRetriever", jsName : "retrieveValidStateHelper", getter : "getRetrieveValidStateHelper", setter : "setRetrieveValidStateHelper"},
		{name: "showErrorState", value : function(){try{return eze$$parent.getShowErrorState();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCShowErrorState", jsName : "showErrorState", getter : "getShowErrorState", setter : "setShowErrorState"},
		{name: "validStateSetter", value : eze$$parent.validStateSetter, type : "com.ibm.egl.rui.mvc.MVCValidStateSetter", jsName : "validStateSetter"},
		{name: "skipFormatter", value : eze$$parent.skipFormatter, type : "boolean", jsName : "skipFormatter"},
		{name: "errorMessage", value : eze$$parent.errorMessage, type : "string?", jsName : "errorMessage"},
		{name: "initialClass", value : eze$$parent.initialClass, type : "string", jsName : "initialClass"},
		{name: "isStateInitialized", value : eze$$parent.isStateInitialized, type : "boolean", jsName : "isStateInitialized"},
		{name: "publishJob", value : eze$$parent.publishJob, type : "egl.javascript.Job", jsName : "publishJob"}
		];
	}
}
);
