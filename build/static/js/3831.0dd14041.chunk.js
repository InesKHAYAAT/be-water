/*! For license information please see 3831.0dd14041.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbe_water=self.webpackChunkbe_water||[]).push([[3831,3127,471],{3127:function(t,e,n){n.r(e),n.d(e,{i:function(){return r}});var r=function(t){return t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())}},471:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return o}});var r=n(9069),i=n(3127),u=n(236),o=(n(1045),function(t,e,n,o,a){var c=t.ownerDocument.defaultView,d=(0,i.i)(t),f=function(t){return d?-t.deltaX:t.deltaX},s=function(t){return d?-t.velocityX:t.velocityX};return(0,u.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return d?e>=c.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=f(t)/c.innerWidth;o(e)},onEnd:function(t){var e=f(t),n=c.innerWidth,i=e/n,u=s(t),o=u>=0&&(u>.2||e>n/2),d=(o?1-i:i)*n,l=0;if(d>5){var v=d/Math.abs(u);l=Math.min(v,540)}a(o,i<=0?.01:(0,r.k)(0,i,.9999),l)}})})}}]);
//# sourceMappingURL=3831.0dd14041.chunk.js.map