/*! For license information please see 1730.1d2ada96.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbe_water=self.webpackChunkbe_water||[]).push([[1730,8855],{1730:function(i,n,t){t.r(n),t.d(n,{ion_loading:function(){return m}});var o=t(3431),e=t(5785),r=t(7923),a=t(79),s=t(9022),d=t(8855),l=t(3562),c=function(i){var n=(0,l.c)(),t=(0,l.c)(),o=(0,l.c)();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,o])},p=function(i){var n=(0,l.c)(),t=(0,l.c)(),o=(0,l.c)();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,o])},g=function(i){var n=(0,l.c)(),t=(0,l.c)(),o=(0,l.c)();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,o])},u=function(i){var n=(0,l.c)(),t=(0,l.c)(),o=(0,l.c)();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,o])},m=function(){function i(i){var n=this;(0,e.r)(this,i),this.didPresent=(0,e.e)(this,"ionLoadingDidPresent",7),this.willPresent=(0,e.e)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,e.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,e.e)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){n.dismiss(void 0,a.B)}}return i.prototype.connectedCallback=function(){(0,a.e)(this.el)},i.prototype.componentWillLoad=function(){if(void 0===this.spinner){var i=(0,r.b)(this);this.spinner=r.c.get("loadingSpinner",r.c.get("spinner","ios"===i?"lines":"crescent"))}},i.prototype.present=function(){return(0,o.mG)(this,void 0,void 0,(function(){var i=this;return(0,o.Jh)(this,(function(n){switch(n.label){case 0:return[4,(0,a.d)(this,"loadingEnter",c,g,void 0)];case 1:return n.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10)),[2]}}))}))},i.prototype.dismiss=function(i,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,a.f)(this,i,n,"loadingLeave",p,u)},i.prototype.onDidDismiss=function(){return(0,a.g)(this.el,"ionLoadingDidDismiss")},i.prototype.onWillDismiss=function(){return(0,a.g)(this.el,"ionLoadingWillDismiss")},i.prototype.render=function(){var i,n=this,t=n.message,o=n.spinner,a=n.htmlAttributes,l=(0,r.b)(this);return(0,e.h)(e.H,Object.assign({tabindex:"-1"},a,{style:{zIndex:"".concat(4e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,d.g)(this.cssClass)),(i={},i[l]=!0,i["overlay-hidden"]=!0,i["loading-translucent"]=this.translucent,i))}),(0,e.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,e.h)("div",{tabindex:"0"}),(0,e.h)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},o&&(0,e.h)("div",{class:"loading-spinner"},(0,e.h)("ion-spinner",{name:o,"aria-hidden":"true"})),t&&(0,e.h)("div",{class:"loading-content",innerHTML:(0,s.s)(t)})),(0,e.h)("div",{tabindex:"0"}))},Object.defineProperty(i.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),i}();m.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}},8855:function(i,n,t){t.r(n),t.d(n,{c:function(){return r},g:function(){return a},h:function(){return e},o:function(){return d}});var o=t(3431),e=function(i,n){return null!==n.closest(i)},r=function(i,n){var t;return"string"===typeof i&&i.length>0?Object.assign(((t={"ion-color":!0})["ion-color-".concat(i)]=!0,t),n):n},a=function(i){var n={};return function(i){return void 0!==i?(Array.isArray(i)?i:i.split(" ")).filter((function(i){return null!=i})).map((function(i){return i.trim()})).filter((function(i){return""!==i})):[]}(i).forEach((function(i){return n[i]=!0})),n},s=/^[a-z][a-z0-9+\-.]*:/,d=function(i,n,t,e){return(0,o.mG)(void 0,void 0,void 0,(function(){var r;return(0,o.Jh)(this,(function(o){return null!=i&&"#"!==i[0]&&!s.test(i)&&(r=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,r.push(i,t,e)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=1730.1d2ada96.chunk.js.map