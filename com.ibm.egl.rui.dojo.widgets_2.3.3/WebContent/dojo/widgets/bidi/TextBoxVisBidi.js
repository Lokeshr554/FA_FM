/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2010, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare", "dojo/has", "dijit/form/TextBox", "dijit/form/_TextBoxMixin"], function(declare, has, textBox, _TextBoxMixin){
	var LRO = String.fromCharCode(8237);
	var RLO = String.fromCharCode(8238);
	var autoPush = null;
	var CODE_A = 65;  
	var CODE_Z = 90;

	var isFldreversed = false; 
	var curPos = 0;
	var selectionStart = 0;;
	var pushMode = false;
	var mousePressed = false;
	var rightPushBound = 0; 
	var leftPushBound = 0;
	var layerGuess = false;
	var preventAltNumpad = false;
	var preventKeyPressProcessing = false;             
	var ctrlHasBeenPressed = false;
	var prevCharClass = false;
	var isLinux = (navigator.platform.indexOf("Linux") != -1) ? true : false;
	var isOverwriteMozilla = false;
	/**
	 * @name idx.bidi.visual.TextBoxVisBidi
	 * @class idx.bidi.visual.TextBoxVisBidi is implemented according requirements for IBM Visual Data Widgets <b><a href="https://w3-connections.ibm.com/communities/service/html/communityview?lang=en_US&communityUuid=dca0e714-6eee-4f05-ba6d-13d845546ac1"></a></b>.
	 * It is a composite widget which enhanced dijit.form.TextBox with following features:
	 * <ul>
	 * <li>Visual text layout</li>
	 * <li>AutoPush mode switch</li>
	 * <li>Start/End Push mode</li>
	 * </ul>
	 * @augments dijit.form.TextBox
	 */
	return declare("bidi.TextBoxVisBidi", [textBox], {
        isVisualMode: false,
        dir: 'ltr',
        autoPush: true,
        isArabic: false,
        gKeyCode: 0,
        layerSwitched: false,
        dirChForBidiFormat: (this.dir == "rtl") ? "R" : "L",
        isRealIE: (navigator.userAgent.indexOf('MSIE') > -1 || navigator.appVersion.indexOf('Trident/')) > 0,

        postCreate: function(){        	
            if(this.isVisualMode) {           	
                this.connect(this.textbox, "onkeyup", this._onKeyUpBidi); 
                this.connect(this.textbox, "onkeydown", this._onKeyDownBidi);              
                this.connect(this.textbox, "onkeypress", this._onKeyPressBidi);              
                this.connect(this.textbox, "onmouseup", this._onMouseUp);
                this.connect(this.textbox, "onmousedown", this._onMouseDown);

                if (this.focusNode.maxLength == -1)
                    this.focusNode.maxLength = 100000;

                if(this.isRealIE) {
                    if (this.dir == "rtl")
                    	this.focusNode.value = RLO + this.focusNode.value;
                    else
                    	this.focusNode.value = LRO + this.focusNode.value;
                    	
                    this.connect(this.textbox, "onselect", this._onSelect);
                    this.connect(this.textbox, "onmouseout", this._onMouseOut);
                    this.connect(this.textbox, "oncopy", this._onCopy);
                    this.connect(this.textbox, "oncut", this._onCut);
                    this.connect(this.textbox, "onpaste", this._onPaste);
                    this.connect(this.textbox, "oncontextmenu", this._onContextMenu);                    
                }
                else {
/*                  commented this section bcs there was problem in RTL Visual ComboBox on Mozilla. 
					Content  of text field differed from string that appeared in combo list
					if (this.dir == "rtl")
                    	this.focusNode.value = this.reverseText(this.focusNode.value);*/
                }
                this.focusNode.style.unicodeBidi = "bidi-override";                
                this.focusNode.style.direction = this.dir;
                this.focusNode.style.textAlign = (this.dir == "rtl") ? "right" : "left";                
            }

            this.inherited(arguments);
        },
    	
        _onContextMenu: function (event) {
        	if(this.isVisualMode) {
	            var obj = this.focusNode;
	            var selection = this.getCaretPos(event,obj);
	            if (selection) {
	                selectionStart = Math.min(selection[0],selection[1]);
	                curPos = Math.max(selection[0],selection[1]);
	            }            
        	}
        },
        
        _onKeyUpBidi: function(event) {
            if(!this.isVisualMode) return;
        	
            var ieKey = event.keyCode;
            var obj = this.focusNode; 
            fieldDirection = (obj.style.direction == "ltr") ? false : true; 
            preventAltNumpad = false;
            preventKeyPressProcessing = false;          
            if(this.isRealIE && selectionStart == 0)
                this.preventEraseMarker(obj);
          
            if (((ieKey == dojo.keys.LEFT_ARROW) && (fieldDirection == false))||((ieKey == dojo.keys.RIGHT_ARROW) & (fieldDirection == true))) {
                if(pushMode & (curPos < rightPushBound))
                    this.toggleFieldOrient(obj,true,false);  
            }
            else if (((ieKey == dojo.keys.RIGHT_ARROW) && (fieldDirection == false))||((ieKey == dojo.keys.LEFT_ARROW) & (fieldDirection == true))) {  
                if(pushMode & (curPos > leftPushBound))
                    this.toggleFieldOrient(obj,true,false);
            }
            else if(this.isRealIE && (event.ctrlKey || ctrlHasBeenPressed) && (ieKey == CODE_Z)) {
            	this._onContextMenu(event);
            	ctrlHasBeenPressed = false;
            }
            else if (ieKey == dojo.keys.BACKSPACE && this.isRealIE && !has("ie")) { //IE11 erases LRO?RLO on backspacing last regular character in field
            	if (obj.value.length == 0) {
            		obj.value = fieldDirection ? RLO : LRO; 
            		selectionStart = curPos = 1;
            		this.preventEraseMarker(obj);
            	}                
            }
        },
        
        _onKeyDownBidi: function(event) {
            if(!this.isVisualMode) return;
            
            var ieKey = this.gKeyCode = event.keyCode;
            var obj = this.focusNode;    		
            var selection = this.getCaretPos(event,obj);
            if (selection) {		    
            	selectionStart = Math.min(selection[0],selection[1]);			    
            	curPos = Math.max(selection[0],selection[1]);       
            }
            
            fieldDirection = (obj.style.direction == "ltr") ? false : true;
        
            if(event.shiftKey)
                this.processPush(obj,ieKey);
        
            if(!isLinux && event.shiftKey && event.altKey) {           	
                layerGuess = !layerGuess;
            }
            
            if((event.altKey && !isLinux) || (event.shiftKey && isLinux)){  
                if(((ieKey == 111) && !isLinux) || ((ieKey == 102) && isLinux)) {
                    this.autoPush = !this.autoPush;
                    
                if(pushMode)  
                    this.toggleFieldOrient(obj,true,false);      
        
                    preventAltNumpad = true;            
                }
                else if(((ieKey == 144) && !isLinux) || ((ieKey == 100) && isLinux)) {                         
                    this.processFieldReverse(obj,true);                                  
                    preventAltNumpad = true;
                }   
            }
            else if(this.isRealIE) {     
                if(event.ctrlKey && (ieKey == CODE_A)) {
                    this._onDblClick(event);  
                }   
                else if(ieKey == dojo.keys.ENTER){       
                    if(pushMode || isFldreversed)
                        this.toggleFieldOrient(obj,false,false);         
                }
                else if (event.ctrlKey && (ieKey == CODE_Z))
                	ctrlHasBeenPressed = true;                	
            }
            
            if (ieKey == dojo.keys.HOME) {
                this.processHome(obj);
                preventKeyPressProcessing = true;                 
            }
            else if (ieKey == dojo.keys.END) {
                this.processEnd(obj);
                preventKeyPressProcessing = true;                 
            }                
            else if (ieKey == dojo.keys.BACKSPACE) {
                this.processBackspace(obj,event);
                preventKeyPressProcessing = true;                 
            }                
            else if (ieKey == dojo.keys.DELETE) {   
                this.processDelete(obj);
                preventKeyPressProcessing = true;                 
            }                
            else if (((ieKey == dojo.keys.LEFT_ARROW) && (fieldDirection == 0))||((ieKey == dojo.keys.RIGHT_ARROW) && (fieldDirection == 1))) {
                this.processLeftarrow(event);
                preventKeyPressProcessing = true;                 
            }                
            else if (((ieKey == dojo.keys.RIGHT_ARROW) && (fieldDirection == 0))||((ieKey == dojo.keys.LEFT_ARROW) && (fieldDirection == 1))) {
                this.processRightarrow(event);
                preventKeyPressProcessing = true;                 
            }                
            else if (ieKey == dojo.keys.PAGE_UP || ieKey == dojo.keys.PAGE_DOWN || ieKey == dojo.keys.UP_ARROW || ieKey == dojo.keys.DOWN_ARROW)
                this.preventDefault(event);            	
        },

        _onKeyPressBidi: function(event) {
       	   if(!this.isVisualMode) return;
       	   if (this.pushJustTurnedOff){
       		   this.pushJustTurnedOff = false;
       		   if (event.keyChar == "/")
       			   event.preventDefault();
       			   return;
       	   }
            if(preventAltNumpad || (event.returnValue == false)) {
                this.preventDefault(event);              
                preventAltNumpad = false;
                return;
            }
            else if (preventKeyPressProcessing) {
            	preventKeyPressProcessing = false;
            	return;
            }
            
            var replacedKey = null;
            var obj = this.focusNode; 
            charClass = fieldDirection = (obj.style.direction == "rtl");
            if(this.isRealIE) {
            	if (event.keyCode != event.charCode) return;
            	if (obj.value.length == 0) {           		
            		obj.value = fieldDirection ? RLO : LRO; 
            		selectionStart = curPos = 1;
            		this.preventEraseMarker(obj);
            	}           	
                ieKey = this.changeKey(event.keyCode,fieldDirection,event,obj);       
                if(this.isArabic && layerGuess && (ieKey > 47) && (ieKey < 58))
                    ieKey = event.keyCode = ieKey + 1584;
            }
            else {         	
                ieKey = event.charCode;                    
                if(event.keyCode == dojo.keys.ENTER){                               
                    if(pushMode || isFldreversed)
                        this.toggleFieldOrient(obj,false,false);         
                }
                else if(event.keyCode == dojo.keys.INSERT) {
                    isOverwriteMozilla = !isOverwriteMozilla;
                }
                else if((ieKey > 31) && !event.altKey && !event.ctrlKey){ //regular character       
                    charCode = ieKey;                           
                    ieKey = this.changeKey(ieKey,fieldDirection,event,obj);            
                    
                    if(charCode != ieKey){
                        replacedKey = ieKey;
                    }
        
                    if(this.isArabic && layerGuess && (ieKey > 47) && (ieKey < 58)){
                        replacedKey = ieKey + 1584;
                    }
                }
            }
                        
            if(((ieKey > 64) && (ieKey < 91)) || ((ieKey > 96) && (ieKey < 123)))
                layerGuess = charClass = false;  //English
            else if((ieKey > 1487) && !((ieKey > 1631) && (ieKey < 1642)))
                layerGuess = charClass = true;
            else if(ieKey == 32) 
                charClass = layerGuess;
            else if(fieldDirection && (((ieKey > 47) && (ieKey < 58)) || ((ieKey > 1631) && (ieKey < 1642))))
                charClass = false; //Numerals
                   
            if(prevCharClass != charClass && ieKey != 0) {  
                prevCharClass = charClass;
            }
    
            if(!has("ie")) { //DOM API can report selection inaccurately in IE11
            	curPos = obj.selectionEnd;
            	selectionStart = obj.selectionStart;
            	if(selectionStart > obj.value.length)
            		curPos = selectionStart = obj.value.length;
            }
            
            if(this.autoPush) {
                fieldDirection = (obj.style.direction == "rtl");        
                if(fieldDirection != charClass){ //enter/leave push mode
                    var jumpFromPushSegment = pushMode && ((curPos == leftPushBound)||(curPos == obj.value.length));
                    this.toggleFieldOrient(obj,true,jumpFromPushSegment);
                }
            }   
          
            if((ieKey > 31) && !event.altKey && !event.ctrlKey){
                var selectionLength = Math.abs(selectionStart - curPos);
 
                if(!this.isOverWriteMode() || (selectionLength > 0)) {
                    var text = obj.value;
                    if(text.length - selectionLength >= obj.maxLength){  
                        var trimmedValue = (pushMode^isFldreversed) ? text.charAt(0) : text.charAt(text.length-1);          
                        if(trimmedValue == ' ') {
                            if(pushMode^isFldreversed){         
                                obj.value = text.substring(1);
                                if (curPos > 0) {
                                    selectionStart--; curPos--; leftPushBound--; rightPushBound--;
                                }
                            }                       
                            else
                                obj.value = text.substring(0,text.length-1);                        
                            
                            if(this.isRealIE)
                                this.setSelectedRange(obj,selectionStart,selectionStart);
                            else
                                replacedKey = ieKey;                                                                                                        
                        }
                        else {                      
                            this.preventDefault(event);                
                            return;
                        }               
                    }
                }
                else {
                    if (curPos >= obj.maxLength){
                        this.preventDefault(event);                
                        return;
                    }       
                }
                    
                if(pushMode){
                    if(!this.isOverWriteMode() || (leftPushBound == curPos) || (selectionLength > 0))    
                        leftPushBound += 1 - selectionLength;
                }
                            
                if(has("ie")) {
                    selectionStart = curPos = Math.min(selectionStart,curPos) + 1;
                }       
                else {  
                    replacedKey = (replacedKey != null) ? replacedKey : ieKey;        
                    if(isLinux && fieldDirection && this.isArabic && (ieKey > 1487)){
                        event.preventDefault();     
                        if(this.isOverWriteMode() && (selectionStart == curPos))                     
                            text = obj.value.substring(0,selectionStart) + String.fromCharCode(replacedKey) + obj.value.substring(curPos+1);
                        else
                            text = obj.value.substring(0,selectionStart) + String.fromCharCode(replacedKey) + obj.value.substring(curPos);
        
                        obj.value = ara_type(selectionStart,text,fieldDirection);                       
                        obj.setSelectionRange(selectionStart+1,selectionStart+1);
                    }
                    else if((replacedKey != null) || this.isOverWriteMode()) {
                        event.preventDefault();
                        this.replaceFieldText(obj,replacedKey);
                    }
                }
            } 
        },

        _onMouseOut: function(event) {
        	if(!this.isVisualMode) return;

            if(this.isRealIE) {  
                if(mousePressed && (event.x < 0)){
                    var obj = this.focusNode;
                    curPos = 1;                       
                    if(obj.style.direction == "rtl")
                        curPos = obj.value.length - curPos;                                   
                }
            }

            var hint = document.getElementById("hint"); 
            if(hint != null){
                if(hint.length > 0)
                    hint[0].style.visibility = "hidden";
                else
                    hint.style.visibility = "hidden";
            }
        },

        _onMouseUp: function(event) {
        	if(!this.isVisualMode) return;
        	
            var obj = this.focusNode;              
            var hint = document.getElementById("hint");
            if(hint != null){
                if(hint.length > 0)
                    hint[0].style.visibility = "hidden";
                else
                    hint.style.visibility = "hidden";
            }
            mousePressed = false;

            var selection = this.getCaretPos(event,obj);
            if (selection && (!this.isRealIE || event.button != 2)){
                selectionStart = Math.min(selection[0],selection[1]);
                curPos = Math.max(selection[0],selection[1]);
                if(this.isRealIE && selectionStart == 0)
                    this.preventEraseMarker(obj);
            }
           
            if(pushMode && ((curPos > leftPushBound)||(selectionStart < rightPushBound)))  
                this.toggleFieldOrient(obj,true,false);       
        },

       _onMouseDown: function(event) {
        	if(!this.isVisualMode) return;
        	
            if(event.button == 2) {
                var hint = document.getElementById("hint");
                if(hint != null){
                    var hintElement = (hint.length > 0) ? hint[0] : hint;
                
                    hintElement.style.left=(event.clientX - hint.scrollWidth > 0) ? (event.clientX - hint.scrollWidth) : 0;
                    hintElement.style.top=event.clientY;
                    hintElement.style.visibility = "visible";
                }       
            }
            
            if(this.isRealIE) {
                mousePressed = true;
            }
        },

        _onCopy: function(event) {
            if(!this.isVisualMode) return;
            document.body.oncopy = null;
            range = document.selection.createRange();
            text = range.text;
       
            if((text.charAt(0) == LRO) || (text.charAt(0) == RLO))
                text = text.substring(1);

            try{        
				var textToClipboard = this.bidiTransform (text,"V" + this.dirChForBidiFormat + "YNN", "ILYNN");
                window.clipboardData.setData("Text", textToClipboard);
                event.returnValue = false;             
            }catch(e){}
        },

        _onCut: function(event) {
        	if(!this.isVisualMode) return;
        	
            //var obj = this.focusNode; 
            if(pushMode)
                leftPushBound -= Math.abs(selectionStart - curPos);     
           
            this._onCopy(event);
          
            curPos = Math.min(selectionStart,curPos);
            selectionStart = curPos;
            event.returnValue = false;
            range = document.selection.clear();       
        },

        _onPaste: function(event) {
            if(!this.isVisualMode) return;

            var obj = this.focusNode;            
            if(selectionStart == 0)
                this.preventEraseMarker(obj);

            event.returnValue = false;
            var range = document.selection.createRange();
            var clipboardText = "";
            try{
                var data = "";
                if(window.clipboardData)
                    data = window.clipboardData.getData("Text");

                if(data)
                    clipboardText = data;
            }catch(e){}

            var clipboardTextLen = clipboardText.length;
            selectionStart = Math.min(selectionStart, curPos);
            clipboardTextLen = Math.min(clipboardTextLen,obj.maxLength - selectionStart);     
            delta = clipboardTextLen - (range.text).length;
                
            if(delta > 0) {                 
                if(obj.value.length < selectionStart + clipboardTextLen)
                    delta = obj.value.length - (selectionStart + (range.text).length);
            
                range.moveEnd("character",delta);
            }               

            var textFromClipboard = clipboardText.substring(0,clipboardTextLen);
            if(range.parentElement() != obj){
				obj.value = this.bidiTransform (textFromClipboard, "ILYNN", "V" + this.dirChForBidiFormat + "YNN");
            }
            else {                    
                range.text = this.bidiTransform (textFromClipboard, "ILYNN", "V" + this.dirChForBidiFormat + "YNN");
            }
        
            selectionStart = curPos = selectionStart + clipboardTextLen;
    
            if(pushMode)   
                this.toggleFieldOrient(obj,true,false);
        },

        _onDblClick: function(event) {
        	if(this.isVisualMode) {
	            var obj = this.focusNode;    
	            selectionStart = (this.isRealIE) ? 1 : 0;
	            curPos = obj.value.length;
	            if(pushMode) { 
	                this.toggleFieldOrient(obj,false,false);
	                pushMode = false;
	            }
	
	            this.setSelectedRange(obj,selectionStart,curPos);
        	}
        },

        _onBlur: function(event){        	
        	if(this.isVisualMode) {
	            var obj = this.focusNode;
	
	            if(!isLinux || !preventAltNumpad) {
	                if(pushMode){
	                    this.toggleFieldOrient(obj,false,false);
	                    pushMode = false;
	                }
	            
	                if(isFldreversed) 
	                    this.processFieldReverse(obj,false);
	            }
        	}    
            this.inherited(arguments);
        },

        _onFocus: function(event) {			      	
        	if(this.isVisualMode) {
                if(pushMode)																				  
                    this.toggleFieldOrient(obj,true,false);													

	            isFldreversed = false;
	            var obj = this.focusNode;  
	            var text = obj.value;
	            if(this.isRealIE) {	            	
	                var selection = this.getCaretPos(event,obj);
	                if (selection){
	                    selectionStart = Math.min(selection[0],selection[1]);
	                    curPos = Math.max(selection[0],selection[1]);	                    
	                    if(selectionStart == 0) 
	                        this.preventEraseMarker(obj);          
	                }
	            }	        
	            if(!this.isRealIE && isLinux && (curPos > 0))
	                obj.setSelectionRange(obj.selectionStart,obj.selectionEnd);

        	}
            this.inherited(arguments);
        },

        _onSelect: function(event) {
        	if(this.isVisualMode) {
	            var obj = this.focusNode;
	            if(obj.value.length < 2) {
	                selectionStart = curPos = 0; //rely on keyup to secure mark
	                return;
	            }
	            var selLength = has("ie") ? document.selection.createRange().text.length :
	            	obj.selectionEnd - obj.selectionStart;
	            
	            if(selLength == obj.value.length) {
	                this._onDblClick(event);
	                this.preventDefault(event);
	            }
        	}
        },

        setSelectedRange: function(obj, selectionStartMod, curPosMod){
            if(has("ie")) { 
                var range = obj.createTextRange();
                if (range){    
                    range.collapse();
                    range.moveEnd('character', curPosMod);
                    range.moveStart('character', selectionStartMod);
                    range.select();
                }
            } else {
                obj.setSelectionRange(selectionStartMod,curPosMod);
            }
        },

        getCaretPos: function(event,obj) {
            if(!has("ie")) {
            	var element = obj || event.target;
                return element ? new Array(element.selectionStart, element.selectionEnd) : new Array(0, 0);
            }
            else {
                try{
                    var range = document.selection.createRange().duplicate();
                    var range2 = range.duplicate();
                    var rangeLength = range.text.length;
                    range2.expand('textedit');
            
                    while (range.compareEndPoints('StartToStart', range2) > 0) {
                        range.moveStart('character', -1);
                    }          
                    var position = range.text.length;

                } catch(e){return new Array(0,0);}
                return new Array(position - rangeLength, position);
            }
        },

        isOverWriteMode: function() {
            if (this.isRealIE)
                return document.queryCommandValue("OverWrite");
            else
                return isOverwriteMozilla;
        },

        preventEraseMarker: function(obj) {
            selectionStart = 1;
            if(curPos == 0)
            	curPos = selectionStart;
            
        	if(has("ie")) {
	            var rng = obj.createTextRange();
	            rng.moveStart('character', 1);
	            rng.select();
        	} else if(this.isRealIE) {
        		obj.setSelectionRange(1, curPos);
        	}       	
        },

        swapBrackets: function(event,fieldDirection,swapped) {
            swapChar = this.gKeyCode;
            if(isLinux) {
                if(fieldDirection ^ (layerGuess && !this.isArabic) ) {           
                    if(swapped == 40)
                        swapped =  41;
                    else if(swapped == 41)      
                        swapped = 40;
                    else if(swapped == 60)
                        swapped = 62;
                    else if(swapped == 62)
                        swapped = 60;
                    else if(swapped == 91)
                        swapped = 93;
                    else if(swapped == 93)
                        swapped = 91;
                    else if(swapped == 123)
                        swapped = 125;
                    else if(swapped == 125)
                        swapped = 123;                                      
                }
                
                return swapped;
            }
            else if(fieldDirection) {
                if(swapChar == 219){
                    if (!this.isArabic)
                        swapped = (event.shiftKey) ? 125 : 93;
                }
                else if(swapChar == 221){
                    if (!this.isArabic)
                        swapped = (event.shiftKey) ? 123 : 91;
                }
                else if(event.shiftKey && (swapChar == 48))
                    swapped = 40;
                else if(event.shiftKey && (swapChar == 57))
                    swapped = 41;
                else if(!this.isArabic && event.shiftKey && (swapChar == 188))
                    swapped = 62;
                else if(!this.isArabic && event.shiftKey && (swapChar == 190))
                    swapped = 60;   
            }
            else {
                if(swapChar == 219){
                    if (this.isArabic) {
                        if(event.shiftKey && layerGuess)
                            swapped = 62;
                    }
                    else
                        swapped = (event.shiftKey) ? 123 : 91;
                }
                else if(swapChar == 221) {
                    if (this.isArabic) {
                        if(event.shiftKey && layerGuess)
                            swapped = 60;
                    }
                    else        
                        swapped = (event.shiftKey) ? 125 : 93;
                }
                else if(event.shiftKey && (swapChar == 48))
                    swapped = 41;
                else if(event.shiftKey && (swapChar == 57))
                    swapped = 40;
                else if(!this.isArabic && event.shiftKey && (swapChar == 188))
                    swapped = 60;
                else if(!this.isArabic && event.shiftKey && (swapChar == 190))
                    swapped = 62;   
            }
           
            return swapped;
        },

        changeKey: function(ieKey,fieldDirection,event,obj) {
            ieKey = this.swapBrackets(event,fieldDirection,ieKey);
            if(this.isRealIE)
                event.keyCode = ieKey;
        
            return ieKey;
        },

        replaceFieldText: function(obj,characterCode) {
            if(this.isOverWriteMode() && (selectionStart == curPos))
                obj.value = obj.value.substring(0,selectionStart) + String.fromCharCode(characterCode) + obj.value.substring(curPos+1);
            else
                obj.value = obj.value.substring(0,selectionStart) + String.fromCharCode(characterCode) + obj.value.substring(curPos);
        
            obj.setSelectionRange(selectionStart+1,selectionStart+1);
        },

        doSymSwap: function(symbol){
            switch(symbol)
            {
                case "(":
                    symbol = ")";
                    break;
                case ")":
                    symbol = "(";
                    break;
                case "{":
                    symbol = "}";
                    break;
                case "}":
                    symbol = "{";
                    break;
                case "[":
                    symbol = "]";
                    break;
                case "]":
                    symbol = "[";
                    break;                  
                case "<": 
                    symbol = ">";
                    break;
                case ">":
                    symbol = "<";
                    break;                              
            }
            return symbol;
        },

        processHome: function(obj){
                if(pushMode)
                    selectionStart = curPos = obj.value.length;         
                else        
                    selectionStart = curPos = (this.isRealIE) ? 1 : 0;
                                
                if(this.isRealIE) {;
            		this.preventDefault(event);
                	this.setSelectedRange(obj,curPos,curPos);
                }
        
                if(pushMode & (curPos > leftPushBound))
                    this.toggleFieldOrient(obj,true,false);  
        },

        processEnd: function(obj){
                if(pushMode)
                    selectionStart = curPos = (this.isRealIE) ? 1 : 0;
                else
                    selectionStart = curPos = obj.value.length;
                    
                if(this.isRealIE) {          
            		this.preventDefault(event);
                	this.setSelectedRange(obj,curPos,curPos);          
                }
        
                if(pushMode & (curPos < rightPushBound))
                    this.toggleFieldOrient(obj,true,false);
        },

        toggleFieldOrient: function(obj,setCursor,jumpFromPushSegment) {
            var len = obj.value.length;
            var delta = 0;
            if(!has("ie")) { 
                selectionStart = obj.selectionStart;
                curPos = obj.selectionEnd;
                if(this.isRealIE && (selectionStart > len)) //DOM API may report inaccurately the selection in IE11
                	curPos = selectionStart = len;
            }
                                   
            obj.style.direction = (obj.style.direction == "rtl") ? "ltr" : "rtl";
            if(this.isRealIE) {
                if(obj.value.charAt(0) == LRO || obj.value.charAt(0) == RLO) {
                    obj.value = ((obj.style.direction == "rtl") ? RLO : LRO) 
                    	+ obj.value.substring(1);
                }
            }
            obj.value = this.reverseText(obj.value);
    
            if(setCursor) { 
                pushMode = !pushMode;
                var fieldStart = (this.isRealIE) ? 1 : 0;                        
                if(pushMode) {  
                    delta = Math.abs(selectionStart - curPos);
                    leftPushBound = rightPushBound = selectionStart = len - Math.max(selectionStart,curPos) + fieldStart;                   
                    curPos = selectionStart + delta;
                }
                else {          
                    if(jumpFromPushSegment)
                        curPos = rightPushBound;    

                	selectionStart = curPos = len - curPos + fieldStart;                
                }

                this.setSelectedRange(obj,selectionStart,curPos);                
            }     
        },

        processPush: function(obj,ieKey){
            if(((ieKey == 144) && !isLinux) || ((ieKey == 103) && isLinux)){    
                preventAltNumpad = true;
                if(!pushMode)
                    this.toggleFieldOrient(obj,true,true);
            }
            else if(((ieKey == 111) && !isLinux) || ((ieKey == 104) && isLinux)) {
                preventAltNumpad = true; 
                if(pushMode) {
                    this.toggleFieldOrient(obj,true,true);       
                    this.pushJustTurnedOff = true;
                }
            }   
            
        },

        reverseText: function(text){ 
            var temp = "";
            if (text.charAt(0) == LRO || text.charAt(0) == RLO) {
                temp += text.charAt(0);
                text = text.substring(1);
            }

            var len = text.length;            
            for(var i = 0;i < len;i++)  {
                symbol = text.charAt(len - i - 1);
                symbol = this.doSymSwap(symbol);
                temp += symbol;
            }
            
            if(isLinux && this.isArabic)
            	temp.value = ara_type(0,temp,(temp.charAt(0) == RLO));            
            
            return temp;           
        },

        processFieldReverse: function(obj,setCursor){    
            isFldreversed = !isFldreversed;
            var len = obj.value.length;
            var fieldStart = (this.isRealIE) ? 1 : 0;                       
            this.toggleFieldOrient(obj,false,false);
                
            if(setCursor) {
            	selectionStart = curPos = len - curPos + fieldStart;              
                this.setSelectedRange(obj,curPos,curPos);
            }   
        },

        preventDefault: function(event){
            if(event.preventDefault)
                event.preventDefault();            	     
            else
                event.returnValue = false;
        },

        processDelete: function(obj){
            if(!has("ie")) {
                selectionStart = obj.selectionStart;
                curPos = obj.selectionEnd;
            }

            if(pushMode && (selectionStart < leftPushBound)){
                if(selectionStart == curPos)
                    leftPushBound--;
                else
                    leftPushBound -= Math.abs(selectionStart - curPos);
            }   
        
            if(this.isRealIE) {
                selectionStart = Math.min(selectionStart,curPos);
                curPos = Math.max(selectionStart,curPos);
                if(selectionStart == 0)
                    this.preventEraseMarker(obj); 
            }      
        },

        processBackspace: function(obj, event){
            if(has("ie")) {
                var range = document.selection.createRange();
                noSelection = ((range.text).length == 0);
            }
            else {
                selectionStart = obj.selectionStart;
                curPos = obj.selectionEnd;
                noSelection = (selectionStart == curPos);
            }
          
            if(noSelection) {
                var fieldStart = (this.isRealIE) ? 1 : 0;
                if(curPos > fieldStart) {
                    if(pushMode && (curPos <= rightPushBound)) {
                        this.preventDefault(event);
                        preventKeyPressProcessing = true;             
                        return;
                    }           
                    curPos--;
                    if(pushMode)
                        leftPushBound--;
                }
                else { 
                    this.preventDefault(event);                                 
                    return;
                }           
            }
            else {
                if(pushMode) 
                    leftPushBound -= Math.abs(selectionStart - curPos);

                    selectionStart = Math.min(selectionStart,curPos);
                    curPos = Math.max(selectionStart,curPos);                    
                    if(this.isRealIE && selectionStart == 0)
                        this.preventEraseMarker(obj);
            }           
            selectionStart = curPos;
        },

        processLeftarrow: function(event){
            if(curPos > 1) {
                if (event.shiftKey) {
                    if (selectionStart == curPos)
                        selectionStart = curPos;
                        curPos--;   
                }
                else {
                    if(selectionStart != curPos)
                        selectionStart = curPos = Math.min(selectionStart,curPos);
                    else
                        selectionStart = curPos = curPos - 1;                               
                }
            }
            else
                event.returnValue = false;
        },

        processRightarrow: function(event){ 
            if(curPos < this.focusNode.value.length) {
                if (event.shiftKey) {
                    if (selectionStart == curPos)
                        selectionStart = curPos;
                        curPos++;
                }
                else {
                    if(selectionStart != curPos)
                        selectionStart = curPos = Math.max(selectionStart,curPos);
                    else
                        selectionStart = curPos = curPos + 1;                           
                }
            }
            else
                event.returnValue = false;  
        }
	});
});
