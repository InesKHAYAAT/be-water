/*! For license information please see 9691.4e1bb25a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbe_water=self.webpackChunkbe_water||[]).push([[9691],{9691:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return r},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return l},keyboardDidClose:function(){return w},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return f},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return s},trackViewportChanges:function(){return y}});var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},a=!1,f=function(){o={},u={},a=!1},s=function(e){c(e),e.visualViewport&&(u=l(e.visualViewport),e.visualViewport.onresize=function(){y(e),p()||b(e)?d(e):w(e)&&h(e)})},c=function(e){e.addEventListener("keyboardDidShow",(function(t){return d(e,t)})),e.addEventListener("keyboardDidHide",(function(){return h(e)}))},d=function(e,t){g(e,t),a=!0},h=function(e){v(e),a=!1},p=function(){var e=(o.height-u.height)*u.scale;return!a&&o.width===u.width&&e>150},b=function(e){return a&&!w(e)},w=function(e){return a&&u.height===e.innerHeight},g=function(e,t){var n=t?t.keyboardHeight:e.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:n}});e.dispatchEvent(r)},v=function(e){var t=new CustomEvent(r);e.dispatchEvent(t)},y=function(e){o=Object.assign({},u),u=l(e.visualViewport)},l=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}]);
//# sourceMappingURL=9691.4e1bb25a.chunk.js.map