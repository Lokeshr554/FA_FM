/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2011, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */


egl.defineWidget(
	'dojo.widgets', 'DojoFilteringSelect',
	'dojo.widgets', 'DojoBase',
	'select',
{
	"constructor" : function() {
		dojo.require("dijit.form.FilteringSelect");
		dojo.require("dojo.store.Memory");
		dojo.require("dojo.on");
		
		this.store = null; 
		this.data = null;
		this.rows = [];
		this.autoComplete = true;
		this.isBidi = false;
	},
	"createDojoWidget" : function(parent) {
		this.readBiDiParams();
		var _this = this, args = {};
		
		args.store = _this.memory = _this._getMemory();
		
		if( typeof _this.labelBehavior == 'function' ){
			args.labelAttr = "eze$$customLabel";
		}
		else
			args.labelAttr   !== undefined && ( args.labelAttr = this.labelAttr );
		
		this.searchAttr  !== undefined && ( args.searchAttr = this.searchAttr );
		this.required    !== undefined && ( args.required = this.required );
		this.labelType   !== undefined && ( args.labelType = this.labelType );
		this.placeHolder !== undefined && ( args.placeHolder = this.placeHolder );
		this.displayedValue !== undefined && ( args.displayedValue = this.displayedValue );
		this.autoComplete !== undefined && ( args.autoComplete = this.autoComplete );
		this.invalidMessage !== undefined && ( args.invalidMessage = this.invalidMessage );
		this.missingMessage !== undefined && ( args.missingMessage = this.missingMessage );
		this.name !== undefined && ( args.name = this.name );
		this.readOnly !== undefined && ( args.readOnly = this.readOnly );
		this.maxHeight != undefined && ( args.maxHeight = this.maxHeight );  
	
		_this._mergeArgs( args );
		
		args = _this.getShallowCopy( _this._args );
		
		this.setBiDiMarkers();
		if (!this.isBidi) {
			_this.dojoWidget = new dijit.form.FilteringSelect(args, parent);
		} else {
			this.setBiDiParams(args);
			dojo.require("bidi.FilteringSelectVisBidi"); 
			this.dojoWidget = new bidi.FilteringSelectVisBidi(args, parent);
		}
	},
	"_getMemory" : function(){
		var memoryOpts = { data : this.rows };
		this.idAttr && (memoryOpts.idProperty = this.idAttr);
		return new dojo.store.Memory( memoryOpts );
	},
	"setData" : function (data) {
		var _this = this, i = 0, j = null, row, item, fields = [];
		
    	if (!data){
    		data = [];
    	}
    	
    	_this.rows = [];
    	data = _this.data = _this.getShallowCopy( data );
    	
    	if( data.length > 0 ){
    		for( i in data[0] ){
    			if( egl.isUserField( _this.data[0], i) ){
    				fields.push( i );
    			}
    		}
    	}
    	
		setTimeout(
			function(){
				for( i = 0; i < data.length; ++ i ){
					
					if( data[i].eze$$value === undefined ){
						data[i].eze$$value = data[i];
					}
					
					for( j = 0, item = {}; j < fields.length; ++ j ){
						item[fields[j]] = egl.unboxAny(
							data[i][fields[j]]
						);
					}
					
					if( typeof _this.labelBehavior == 'function' ){
						item['eze$$customLabel'] = _this.labelBehavior( data[i] );
					}
					
					_this.rows.push( item );
		    	}
				
				if( _this.dojoWidget ){
					_this.memory = _this._getMemory();
					_this.dojoWidget.set( 'store', _this.memory )
				}
				else{
					_this.renderWhenDojoIsDoneLoading();
				}
			}, 1
		);
    },
    "setValue" : function( arg ){
    	this._setProperty( 'value', 'value', arg );
    },
    "getValue" : function(){
    	if( this.dojoWidget ){
    		return this.dojoWidget.get( 'value' );
    	}
    	return this.value;
    },
    "setDisplayedValue" : function( arg ){
    	this._setProperty( 'displayedValue', 'displayedValue', arg );
    },
    "getDisplayedValue" : function(){
    	if( this.dojoWidget ){
    		return this.dojoWidget.get( 'displayedValue' );
    	}
    	return this.displayedValue;
    },
    "getData" : function(){
    	return this.data;
    },
    "setNullable" : function( arg ){
    	this._setProperty( 'required', 'required', !arg );
    },
    "getNullable" : function(){
    	return this.required;
    },
    "setName" : function( arg ){
    	this._setProperty( 'name', 'name', arg );
    },
    "getName" : function(){
    	return this.name;
    },
	"setIdAttr" : function( arg ){
		this.idAttr = arg;
		if( this.memory ){
			this.memory.set( "idProperty", arg );
		}
	},
	"getIdAttr" : function(){
		return this.memory.get( "idProperty" );
	},
	"setSearchAttr" : function( arg ){
		this._setProperty( 'searchAttr', 'searchAttr', arg );
	},
	"getSearchAttr" : function(){
		return this.searchAttr;
	},
	"setLabelAttr" : function( arg ){
		this._setProperty( 'labelAttr', 'labelAttr', arg );
	},
	"getLabelAttr" : function(){
		return this.labelAttr;
	},
	"setLabelType" : function( arg ){
		this._setProperty( 'labelType', 'labelType', arg );
	},
	"getLabelType" : function(){
		return this.labelType;
	},
	"setPlaceHolder" : function( arg ){
		this._setProperty( 'placeHolder', 'placeHolder', arg );
	},
	"getPlaceHolder" : function(){
		return this.placeHolder;
	},
	"setAutoComplete" : function( arg ){
		this._setProperty( 'autoComplete', 'autoComplete', arg );
	},
	"getAutoComplete" : function(){
		return this.autoComplete;
	},
	"setInvalidMessage" : function( arg ){
		this._setProperty( 'invalidMessage', 'invalidMessage', arg );
	},
	"getInvalidMessage" : function(){
		return this.invalidMessage;
	},
	"setMissingMessage" : function( arg ){
		this._setProperty( 'missingMessage', 'missingMessage', arg );
	},
	"getMissingMessage" : function(){
		return this.missingMessage;
	},
    "setReadOnly" : function( arg ){
    	this._setProperty( 'readOnly', 'readOnly', arg );
    },
    "getReadOnly" : function(){
    	return this.readOnly;
    },
    "setMaxHeight" : function( arg ){                                
        this._setProperty( 'maxHeight', 'maxHeight', arg );             
    },                                                               
    "getMaxHeight" : function(){                                     
    	return this._getProperty( 'maxHeight', 'maxHeight');                                          
    } 
});
