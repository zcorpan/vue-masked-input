!function(t){function e(i){if(s[i])return s[i].exports;var n=s[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var s={};return e.m=t,e.c=s,e.i=function(t){return t},e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=88)}({59:function(t,e,s){"use strict";e.a=function(){function t(t){var e="focus"===t.type?"focusin":"focusout",s=new CustomEvent(e,{bubbles:!0,cancelable:!1});s.c1Generated=!0,t.target.dispatchEvent(s)}function e(s){s.c1Generated||(i.removeEventListener("focus",t,!0),i.removeEventListener("blur",t,!0),i.removeEventListener("focusin",e,!0),i.removeEventListener("focusout",e,!0)),setTimeout(function(){i.removeEventListener("focusin",e,!0),i.removeEventListener("focusout",e,!0)})}var s=window,i=s.document;void 0===s.onfocusin&&(i.addEventListener("focus",t,!0),i.addEventListener("blur",t,!0),i.addEventListener("focusin",e,!0),i.addEventListener("focusout",e,!0))}},60:function(t,e,s){"use strict";function i(t,e){if(e)for(var s=Object.keys(e),i=0,n=s.length;i<n;i++)t[s[i]]=e[s[i]];return t}function n(t){return i({},t)}function r(t){var e=n(f);if(t)for(var s=Object.keys(t),i=0,r=s.length;i<r;i++){var a=s[i];null==t[a]?delete e[a]:e[a]=t[a]}return e}function a(t,e,s,i){return this instanceof a?(this.placeholderChar=s||p,this.formatCharacters=e||f,this.source=t,this.pattern=[],this.length=0,this.firstEditableIndex=null,this.lastEditableIndex=null,this._editableIndices={},this.isRevealingMask=i||!1,void this._parse()):new a(t,e,s)}function o(t){if(!(this instanceof o))return new o(t);if(t=i({formatCharacters:null,pattern:null,isRevealingMask:!1,placeholderChar:p,selection:{start:0,end:0},value:""},t),null==t.pattern)throw new Error("InputMask: you must provide a pattern.");if("string"!=typeof t.placeholderChar||t.placeholderChar.length>1)throw new Error("InputMask: placeholderChar should be a single character or an empty string.");this.placeholderChar=t.placeholderChar,this.formatCharacters=r(t.formatCharacters),this.setPattern(t.pattern,{value:t.value,selection:t.selection,isRevealingMask:t.isRevealingMask})}var l="\\",h=/^\d$/,u=/^[A-Za-z]$/,c=/^[\dA-Za-z]$/,p="_",f={"*":{validate:function(t){return c.test(t)}},1:{validate:function(t){return h.test(t)}},a:{validate:function(t){return u.test(t)}},A:{validate:function(t){return u.test(t)},transform:function(t){return t.toUpperCase()}},"#":{validate:function(t){return c.test(t)},transform:function(t){return t.toUpperCase()}}};a.prototype._parse=function(){for(var t=this.source.split(""),e=0,s=[],i=0,n=t.length;i<n;i++){var r=t[i];if(r===l){if(i===n-1)throw new Error("InputMask: pattern ends with a raw "+l);r=t[++i]}else r in this.formatCharacters&&(null===this.firstEditableIndex&&(this.firstEditableIndex=e),this.lastEditableIndex=e,this._editableIndices[e]=!0);s.push(r),e++}if(null===this.firstEditableIndex)throw new Error('InputMask: pattern "'+this.source+'" does not contain any editable characters.');this.pattern=s,this.length=s.length},a.prototype.formatValue=function(t){for(var e=new Array(this.length),s=0,i=0,n=this.length;i<n;i++)if(this.isEditableIndex(i)){if(this.isRevealingMask&&t.length<=s&&!this.isValidAtIndex(t[s],i))break;e[i]=t.length>s&&this.isValidAtIndex(t[s],i)?this.transform(t[s],i):this.placeholderChar,s++}else e[i]=this.pattern[i],t.length>s&&t[s]===this.pattern[i]&&s++;return e},a.prototype.isEditableIndex=function(t){return!!this._editableIndices[t]},a.prototype.isValidAtIndex=function(t,e){return this.formatCharacters[this.pattern[e]].validate(t)},a.prototype.transform=function(t,e){var s=this.formatCharacters[this.pattern[e]];return"function"==typeof s.transform?s.transform(t):t},o.prototype.input=function(t){if(this.selection.start===this.selection.end&&this.selection.start===this.pattern.length)return!1;var e=n(this.selection),s=this.getValue(),i=this.selection.start;if(i<this.pattern.firstEditableIndex&&(i=this.pattern.firstEditableIndex),this.pattern.isEditableIndex(i)){if(!this.pattern.isValidAtIndex(t,i))return!1;this.value[i]=this.pattern.transform(t,i)}for(var r=this.selection.end-1;r>i;)this.pattern.isEditableIndex(r)&&(this.value[r]=this.placeholderChar),r--;for(this.selection.start=this.selection.end=i+1;this.pattern.length>this.selection.start&&!this.pattern.isEditableIndex(this.selection.start);)this.selection.start++,this.selection.end++;return null!=this._historyIndex&&(this._history.splice(this._historyIndex,this._history.length-this._historyIndex),this._historyIndex=null),("input"!==this._lastOp||e.start!==e.end||null!==this._lastSelection&&e.start!==this._lastSelection.start)&&this._history.push({value:s,selection:e,lastOp:this._lastOp}),this._lastOp="input",this._lastSelection=n(this.selection),!0},o.prototype.backspace=function(){if(0===this.selection.start&&0===this.selection.end)return!1;var t=n(this.selection),e=this.getValue();if(this.selection.start===this.selection.end)this.pattern.isEditableIndex(this.selection.start-1)&&(this.value[this.selection.start-1]=this.placeholderChar),this.selection.start--,this.selection.end--;else{for(var s=this.selection.end-1;s>=this.selection.start;)this.pattern.isEditableIndex(s)&&(this.value[s]=this.placeholderChar),s--;this.selection.end=this.selection.start}return null!=this._historyIndex&&this._history.splice(this._historyIndex,this._history.length-this._historyIndex),("backspace"!==this._lastOp||t.start!==t.end||null!==this._lastSelection&&t.start!==this._lastSelection.start)&&this._history.push({value:e,selection:t,lastOp:this._lastOp}),this._lastOp="backspace",this._lastSelection=n(this.selection),!0},o.prototype.paste=function(t){var e={value:this.value.slice(),selection:n(this.selection),_lastOp:this._lastOp,_history:this._history.slice(),_historyIndex:this._historyIndex,_lastSelection:n(this._lastSelection)};if(this.selection.start<this.pattern.firstEditableIndex){for(var s=0,r=this.pattern.firstEditableIndex-this.selection.start;s<r;s++)if(t.charAt(s)!==this.pattern.pattern[s])return!1;t=t.substring(this.pattern.firstEditableIndex-this.selection.start),this.selection.start=this.pattern.firstEditableIndex}for(s=0,r=t.length;s<r&&this.selection.start<=this.pattern.lastEditableIndex;s++){var a=this.input(t.charAt(s));if(!a){if(this.selection.start>0){var o=this.selection.start-1;if(!this.pattern.isEditableIndex(o)&&t.charAt(s)===this.pattern.pattern[o])continue}return i(this,e),!1}}return!0},o.prototype.undo=function(){if(0===this._history.length||0===this._historyIndex)return!1;var t;if(null==this._historyIndex){this._historyIndex=this._history.length-1,t=this._history[this._historyIndex];var e=this.getValue();t.value===e&&t.selection.start===this.selection.start&&t.selection.end===this.selection.end||this._history.push({value:e,selection:n(this.selection),lastOp:this._lastOp,startUndo:!0})}else t=this._history[--this._historyIndex];return this.value=t.value.split(""),this.selection=t.selection,this._lastOp=t.lastOp,!0},o.prototype.redo=function(){if(0===this._history.length||null==this._historyIndex)return!1;var t=this._history[++this._historyIndex];return this._historyIndex===this._history.length-1&&(this._historyIndex=null,t.startUndo&&this._history.pop()),this.value=t.value.split(""),this.selection=t.selection,this._lastOp=t.lastOp,!0},o.prototype.setPattern=function(t,e){e=i({selection:{start:0,end:0},value:""},e),this.pattern=new a(t,this.formatCharacters,this.placeholderChar,e.isRevealingMask),this.setValue(e.value),this.emptyValue=this.pattern.formatValue([]).join(""),this.selection=e.selection,this._resetHistory()},o.prototype.setSelection=function(t){if(this.selection=n(t),this.selection.start===this.selection.end){if(this.selection.start<this.pattern.firstEditableIndex)return this.selection.start=this.selection.end=this.pattern.firstEditableIndex,!0;for(var e=this.selection.start;e>=this.pattern.firstEditableIndex;){if(this.pattern.isEditableIndex(e-1)&&this.value[e-1]!==this.placeholderChar||e===this.pattern.firstEditableIndex){this.selection.start=this.selection.end=e;break}e--}return!0}return!1},o.prototype.setValue=function(t){null==t&&(t=""),this.value=this.pattern.formatValue(t.split(""))},o.prototype.getValue=function(){return this.value.join("")},o.prototype.getRawValue=function(){for(var t=[],e=0;e<this.value.length;e++)this.pattern._editableIndices[e]===!0&&t.push(this.value[e]);return t.join("")},o.prototype._resetHistory=function(){this._history=[],this._historyIndex=null,this._lastOp=null,this._lastSelection=n(this.selection)},o.Pattern=a,t.exports=o},88:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(60),n=s.n(i),r=s(59);s.i(r.a)(),e.default={template:'\n    <input ref="input"\n      :value="value"\n      @keydown="keyDown(arguments[0])"\n      @keypress="keyPress(arguments[0])"\n      @keyup="keyUp(arguments[0])"\n      @textInput="textInput(arguments[0])"\n      @mouseup="mouseUp(arguments[0])"\n      @focus.prevent="focusin(arguments[0])"\n      @focusout="focusout(arguments[0])"\n      @cut="cut(arguments[0])"\n      @copy="copy(arguments[0])"\n      @paste="paste(arguments[0])"\n      :disabled="mask_core===null || disabled"\n    />\n  ',name:"MaskedInput",data:function(){return{marginLeft:0,mask_core:null,updateAfterAll:!1}},props:{value:{type:String},mask:{type:String,required:!0,validator:function(t){return!!(t&&t.length>=1)}},placeholderChar:{type:String,default:"_",validator:function(t){return!(!t||1!==t.length)}},disabled:{type:Boolean,default:!1}},watch:{mask:function(t){this.initMask()},value:function(t){this.mask_core&&this.mask_core.setValue(t)}},mounted:function(){this.initMask()},methods:{initMask:function(){try{this.mask_core=new n.a({pattern:this.mask,value:"",placeholderChar:this.placeholderChar,formatCharacters:{a:{validate:function(t){return/^[A-Za-zА-Яа-я]$/.test(t)}},A:{validate:function(t){return/^[A-Za-zА-Яа-я]$/.test(t)},transform:function(t){return t.toUpperCase()}},"*":{validate:function(t){return/^[\dA-Za-zА-Яа-я]$/.test(t)}},"#":{validate:function(t){return/^[\dA-Za-zА-Яа-я]$/.test(t)},transform:function(t){return t.toUpperCase()}},"+":{validate:function(t){return!0}}}});for(var t=0;t<this.$refs.input.value.length;++t)this.mask_core.input(this.$refs.input.value[t]);this.mask_core.setSelection({start:0,end:0}),""===this.$refs.input.value?this.$emit("input","",""):this.updateToCoreState()}catch(t){console.error(t.message),this.mask_core=null,this.$refs.input.value="Error, see console",this.$emit("input",this.$refs.input.value,"")}},getValue:function(){return null===this.mask_core?"":this.mask_core.getValue()},keyDown:function(t){if(null===this.mask_core)return void t.preventDefault();switch(this.setNativeSelection(),t.keyCode){case 8:t.preventDefault(),(this.mask_core.selection.start>this.marginLeft||this.mask_core.selection.start!=this.mask_core.selection.end)&&(this.mask_core.backspace(),this.updateToCoreState());break;case 37:t.preventDefault(),this.$refs.input.selectionStart===this.$refs.input.selectionEnd&&(this.$refs.input.selectionEnd=this.$refs.input.selectionStart--),this.mask_core.selection={start:this.$refs.input.selectionStart,end:this.$refs.input.selectionStart},this.updateToCoreState();break;case 39:t.preventDefault(),this.$refs.input.selectionStart===this.$refs.input.selectionEnd&&this.$refs.input.selectionEnd++,this.mask_core.selection={start:this.$refs.input.selectionEnd,end:this.$refs.input.selectionEnd},this.updateToCoreState();break;case 35:t.preventDefault(),this.$refs.input.selectionStart=this.$refs.input.selectionEnd=this.$refs.input.value.length,this.mask_core.selection={start:this.$refs.input.selectionEnd,end:this.$refs.input.selectionEnd},this.updateToCoreState();break;case 36:t.preventDefault(),this.$refs.input.selectionStart=this.$refs.input.selectionEnd=0,this.mask_core.selection={start:this.$refs.input.selectionStart,end:this.$refs.input.selectionStart},this.updateToCoreState();break;case 46:t.preventDefault(),this.$refs.input.selectionStart===this.$refs.input.selectionEnd?(this.mask_core.setValue(""),this.mask_core.setSelection({start:0,end:0}),this.$refs.input.selectionStart=this.mask_core.selection.start,this.$refs.input.selectionEnd=this.mask_core.selection.start):this.mask_core.backspace(),this.updateToCoreState()}},input:function(t){},keyPress:function(t){if(!t.ctrlKey){var e=!!document.documentMode,s="undefined"!=typeof InstallTrigger;(e||s)&&(t.preventDefault(),t.data=t.key,this.textInput(t))}},textInput:function(t){t.preventDefault&&t.preventDefault(),this.mask_core.input(t.data)&&(this.updateAfterAll=!0),this.updateToCoreState()},keyUp:function(t){this.updateToCoreState(),this.updateAfterAll=!1},cut:function(t){if(t.preventDefault(),this.$refs.input.selectionStart!==this.$refs.input.selectionEnd){try{document.execCommand("copy")}catch(t){}this.mask_core.backspace(),this.updateToCoreState()}},copy:function(t){},paste:function(t){t.preventDefault();for(var e=t.clipboardData.getData("text"),s=0;s<e.length;++s)this.mask_core.input(e[s]);this.updateToCoreState()},updateToCoreState:function(){null!==this.mask_core&&(this.$refs.input.value!==this.mask_core.getValue()&&(this.$refs.input.value=this.mask_core.getValue(),this.$emit("input",this.$refs.input.value,this.mask_core.getRawValue())),this.$refs.input.selectionStart=this.mask_core.selection.start,this.$refs.input.selectionEnd=this.mask_core.selection.end)},focusin:function(t){},isEmpty:function(){return null===this.mask_core||this.mask_core.getValue()===this.mask_core.emptyValue},focusout:function(t){this.isEmpty()&&(this.$refs.input.value="",this.mask_core.setSelection({start:0,end:0}),this.$emit("input","",""))},setNativeSelection:function(){this.mask_core.selection={start:this.$refs.input.selectionStart,end:this.$refs.input.selectionEnd}},mouseUp:function(t){this.isEmpty()&&this.$refs.input.selectionStart===this.$refs.input.selectionEnd?(this.mask_core.setSelection({start:0,end:0}),this.$refs.input.selectionStart=this.mask_core.selection.start,this.$refs.input.selectionEnd=this.mask_core.selection.start,this.marginLeft=this.mask_core.selection.start,this.updateToCoreState()):this.setNativeSelection()}}}}});
//# sourceMappingURL=component.js.map