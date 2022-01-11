(function () {
  'use strict';

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$1;const i$1=globalThis.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e$1,n$1=`<${o$1}>`,l$1=document,h$1=(t="")=>l$1.createComment(t),r$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$1=Array.isArray,u$1=t=>{var i;return d$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,a$1=/>/g,f$2=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_$1=/'/g,m$1=/"/g,g$1=/^(?:script|style|textarea)$/i,p$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$$2=p$1(1),b$1=Symbol.for("lit-noChange"),w$1=Symbol.for("lit-nothing"),T$1=new WeakMap,x$1=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N$1(i.insertBefore(h$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A$1=l$1.createTreeWalker(l$1,129,null,!1),C$1=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c$1;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c$1?"!--"===u[1]?d=v$1:void 0!==u[1]?d=a$1:void 0!==u[2]?(g$1.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f$2):void 0!==u[3]&&(d=f$2):d===f$2?">"===u[0]?(d=null!=h?h:c$1,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f$2:'"'===u[3]?m$1:_$1):d===m$1||d===_$1?d=f$2:d===v$1||d===a$1?d=c$1:(d=f$2,h=void 0);const y=d===f$2&&t[i+1].startsWith("/>")?" ":"";r+=d===c$1?s+n$1:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$1+y):s+e$1+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E$1{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C$1(t,s);if(this.el=E$1.createElement(v,n),A$1.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A$1.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M$1:"?"===i[1]?H$1:"@"===i[1]?I$1:S$1});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g$1.test(l.tagName)){const t=l.textContent.split(e$1),s=t.length-1;if(s>0){l.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$1()),A$1.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$1());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$1,t+1));)c.push({type:7,index:r}),t+=e$1.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P$1(t,i,s=t,e){var o,n,l,h;if(i===b$1)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$1(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P$1(t,d._$AS(t,i.values),d,e)),i}class V$1{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A$1.currentNode=o;let n=A$1.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N$1(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L$1(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A$1.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N$1{constructor(t,i,s,e){var o;this.type=2,this._$AH=w$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P$1(this,t,i),r$1(t)?t===w$1||null==t||""===t?(this._$AH!==w$1&&this._$AR(),this._$AH=w$1):t!==this._$AH&&t!==b$1&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u$1(t)?this.A(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w$1&&r$1(this._$AH)?this._$AA.nextSibling.data=t:this.S(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E$1.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V$1(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t;}}_$AC(t){let i=T$1.get(t.strings);return void 0===i&&T$1.set(t.strings,i=new E$1(t)),i}A(t){d$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N$1(this.M(h$1()),this.M(h$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S$1{constructor(t,i,s,e,o){this.type=1,this._$AH=w$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P$1(this,t,i,0),n=!r$1(t)||t!==this._$AH&&t!==b$1,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P$1(this,e[s+l],i,l),h===b$1&&(h=this._$AH[l]),n||(n=!r$1(h)||h!==this._$AH[l]),h===w$1?t=w$1:t!==w$1&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.k(t);}k(t){t===w$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M$1 extends S$1{constructor(){super(...arguments),this.type=3;}k(t){this.element[this.name]=t===w$1?void 0:t;}}const k$1=i$1?i$1.emptyScript:"";class H$1 extends S$1{constructor(){super(...arguments),this.type=4;}k(t){t&&t!==w$1?this.element.setAttribute(this.name,k$1):this.element.removeAttribute(this.name);}}class I$1 extends S$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P$1(this,t,i,0))&&void 0!==s?s:w$1)===b$1)return;const e=this._$AH,o=t===w$1&&e!==w$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w$1&&(e===w$1||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L$1{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P$1(this,t);}}const z$1=window.litHtmlPolyfillSupport;null==z$1||z$1(E$1,N$1),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.1.0");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t;const i=globalThis.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e=`lit$${(Math.random()+"").slice(9)}$`,o="?"+e,n=`<${o}>`,l=document,h=(t="")=>l.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f$1=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$$1=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l.createTreeWalker(l,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f$1):void 0!==u[3]&&(d=f$1):d===f$1?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f$1:'"'===u[3]?m:_):d===m||d===_?d=f$1:d===v||d===a?d=c:(d=f$1,h=void 0);const y=d===f$1&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e+y):s+e+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s?s.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e),s=t.length-1;if(s>0){l.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e,t+1));)c.push({type:7,index:r}),t+=e.length-1;}r++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u(t)?this.A(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.S(l.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}A(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(h()),this.M(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.k(t);}k(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}k(t){this.element[this.name]=t===w?void 0:t;}}const k=i?i.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}k(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.1.0");

  const registry = new Map();

  let messageId = 1000;
  let _listenerCounter = 5000;

  /**
   * Alternative to CustomEvents for sending messages between classes.
   */
  class MessageDispatcher {
    /**
     * Dispatch (broadcast) the msgObj to the given _channel_.
     * The _msgObj_ will be wrapped into a _message_ object with _messageId_ and _detail_.
     *
     * @param {string} channelName the channel where the message is dispatched.
     * @param {object} msgObj the payload
     * @returns {number} a unique messageId for the dispatch transaction.
     */
    static dispatch(channelName, msgObj) {
      const channel = registry.get(channelName);
      if (channel === undefined) return null;

      messageId++;
      const message = {
        messageId,
        detail: msgObj,
      };

      Object.values(channel).forEach((fn) => fn(message));
      return messageId;
    }

    /**
     * Add an listener to the given channel and returns an unqiue listener id.
     * The listener id is required to remove a single listener.
     *
     * @param {string} channelName
     * @param {function} callbackfn
     * @returns unique listener id;
     */
    static addListener(channelName, callbackfn) {
      const _listenerId = _listenerCounter++;

      let channel = {};

      if (registry.has(channelName)) {
        channel = registry.get(channelName);
        if (Object.values(channel).includes(callbackfn)) {
          return null;
        }
      }

      channel[_listenerId] = callbackfn;
      registry.set(channelName, channel);

      return _listenerId;
    }

    static removeListener(listenerId) {
      registry.forEach((channel) => {
        delete channel[listenerId];
      });
    }

    static removeChannel(channelName) {
      registry.delete(channelName);
    }
  }

  let _contextIdCounter = 6000;

  class ContextElement extends HTMLElement {
    constructor() {
      super();
      const contextId = _contextIdCounter++;
      this._messageChannelName = `context-updater-${contextId}`;
      this._listenerId = null;
      // some components might reference this object while it is long gone
      this._valid = false;
    }

    connectedCallback() {
      if (this.value === undefined) {
        throw new Error(
          "'A context element must always have a property 'value'!"
        );
      }
      this._valid = true;
      this.setAttribute("message-channel-name", this._messageChannelName);
    }

    disconnectedCallback() {
      this._valid = false;
      MessageDispatcher.removeChannel(this._messageChannelName);
    }

    /**
     * valueUpdated will fire and 'contextValueChanged' event.
     *
     * The valueUpdated is called after the value of the contextData is already changed.
     * The value is normally directly changed after the contextData is passed by reference to the input components.
     *
     * @param {String} key of the changed attribute
     * @param {String} keyPath of the changed attribute within the data structure (given as jsonPath)
     * @param {object} newValue new value
     * @param {object} oldValue old value
     */
    valueUpdated(key, keyPath, newValue, oldValue) {
      if (!this._valid) return;
      const detail = {
        key,
        keyPath,
        newValue,
        oldValue,
      };
      // console.debug(`ContextElement -> valueUpdated -> detail`, detail, this);
      MessageDispatcher.dispatch(this._messageChannelName, detail);
    }

    /**
     * Add a listener to this context that is informed via the valueUpdated method.
     * @param {function} callbackFn
     * @returns {string} unqiue listenerId
     */
    addListener(callbackFn) {
      if (!this._valid) return null;
      return MessageDispatcher.addListener(this._messageChannelName, callbackFn);
    }

    static getNextContext(htmlElement) {
      return this.getParentContext(htmlElement);
    }

    static getParentContext(htmlElement, id) {
      // as soon as CSS 4 is available with :has you can use CSS selectors
      // https://caniuse.com/#feat=css-has

      const { parentElement } = htmlElement;

      if (parentElement === null) return undefined;

      if (parentElement.tagName !== "T11-CONTEXT") {
        return ContextElement.getParentContext(parentElement, id);
      }

      if (id !== undefined && parentElement.id !== id) {
        return ContextElement.getParentContext(parentElement, id);
      }

      return parentElement;
    }

    static register() {
      if (!customElements.get("t11-context")) {
        customElements.define("t11-context", ContextElement);
      }
    }
  }

  ContextElement.register();

  /* eslint-disable class-methods-use-this */

  /**
   * `AbstractWebComponent` should be used for Web Components that are created for the tech11 Insurance Platform.
   *
   * A web component that extends AbstractWebComponent has following features out-of-the-box:
   *
   * * Managing the _Context_ (registering)
   * * Refreshing all nested web components that extends `AbstractWebComponent` by calling `refesh`
   * * Following a clear lifecycle
   * ** Loading (`connectedCallback`) : `preInit`, `init`, `refresh`, `postInit`
   * ** Refresh:  `preRefresh`, `refresh`, `postRefresh`
   * ** Desructor (`disconnectedCallback`): `preDestroy`
   *
   * Preconditions:
   *
   * * There must be a _context_ on this component or in an element arround
   *
   * @export
   * @class AbstractWebComponent
   * @extends {HTMLElement}
   */
  class AbstractWebComponent extends HTMLElement {
    /**
     * Lifecycle function of Web Components (https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks).
     */
    async connectedCallback() {
      this._checkRequiredProperties();
      await this.loadingAnimation();
      await this.preInit();

      // initialize context
      this._initContextPartI();

      await this.init();

      this.refreshComponent();

      // page is now the first time rendered - in case of t11-context is on the page, add a listener
      this._initContextPartII();

      await this.postInit();
    }

    _checkRequiredProperties() {
      if (!this.getRequiredProperties()) return;

      Object.keys(this.getRequiredProperties()).forEach((propName) => {
        if (this[propName] === undefined || this[propName] === null)
          throw new Error(
            `The component ${this.tagName} requires the property '${propName}'!`
          );
      });
    }

    /**
     * All mandatory properties of this component (array of property names)
     * @returns array of required property names of this component
     * @abstract
     */
    getRequiredProperties() {}

    /**
     * Show the default loading animation based on the boolean flag given by `showLoadingAnimation`.
     * In case you want a custom loading animation, please overwrite the method.
     *
     * As precondition to show the animation, the `t11-loading-component` web component must be registered.
     * Here we don't want to have a fix dependency...
     */
    async loadingAnimation() {
      if (!this.showLoadingAnimation()) return;
      x($$1` <t11-loading-component></t11-loading-component> `, this);
    }

    /**
     * Overwrite and return `true` if you want to show a loading animation.
     * The loading animation is shown until the first `renderComponent` is called.
     *
     * As precondition to show the animation, the `t11-loading-component` web component must be registered.
     * Here we don't want to have a fix dependency...
     *
     * @returns {boolean} `true` show the loading animantion, else otherwise.
     */
    showLoadingAnimation() {
      return false;
    }

    /**
     * Overwrite if you want to define some data **before** the context is initialized
     * @abstract
     */
    async preInit() {}

    /**
     * Overwrite if you want to define some data **after** the context is initialized
     * from surrounding componets.
     *
     * **But**, the if the context (`<t11-context>`) is first initalized on this component,
     * don't use the context here: use `postInit`.
     *
     * @abstract
     */
    async init() {}

    /**
     * Overwrite, if you want to define some data **after** the context is initialized.
     *
     * In case the context is set on this component itself (`t11-context`) you cannot use the context on `init`.
     *
     * You can first use the context here. Changes on the context within `postInit` requires a
     * manual `this.refreshContext`.
     *
     * @abstract
     */
    async postInit() {}

    _initContextPartI() {
      this.context = ContextElement.getNextContext(this);
      if (this.context)
        this.contextValue = this.context ? this.context.value : {};
    }

    _initContextPartII() {
      const contextElemOnComponent = this.querySelector("t11-context");
      if (contextElemOnComponent) {
        this.context = contextElemOnComponent;
        if (this.context)
          this.contextValue = this.context ? this.context.value : {};
      }
      if (this.context) this.context.addListener(() => this.refreshComponent());
    }

    /**
     * Refresh all components within the current context.
     * @param {string} key key of the udpated data
     * @param {string} keyPath keyPath of the udpated data
     * @param {*} newValue newValue for the update key
     * @param {*} oldValue oldvalue for the udpated key
     */
    refreshContext(key, keyPath, newValue, oldValue) {
      if (!this.context)
        throw new Error(
          `${this.tagName} runs not inside a container! 'refreshContext' is not possible!`
        );

      this.context.valueUpdated(key, keyPath, newValue, oldValue);
    }

    /**
     * Lifecycle function of Web Components (https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks).
     */
    async disconnectedCallback() {
      this.preDestroy();
    }

    /**
     * Create the contents of this web components. It's called by each refresh of the component.
     *
     * @returns the HTML content of this Web Component.
     * This should be a `html` prepared content from _lit-html_ or an empty string _''_.
     * @abstract
     */
    renderComponent() {
      throw new Error(
        `UnsupportedOperationException: abstract 'renderComponent'`
      );
    }

    /**
     * use refreshComponent!
     * @deprecated use refreshComponent
     */
    refresh(e = {}) {
      this.refreshComponent(e);
    }

    /**
     * Refresh **just this** component. Typically this function is not directly called, instead the function
     * `refreshContenxt` is called where all components within a component are refreshed.
     *
     *
     * By refreshing a component the following lifecycle functions are called:
     *
     * * `preRefresh`
     * * `postRefersh`
     *
     * The component is refreshed by getting the content from `renderComponent` and
     * the `render` function from _lit-html_.
     *
     * For parallel requests there is a stoper built in. So, parallel requestes are not queued
     * but the last on is repeated (a queue makes for a refresh no sense...)
     *
     * @param {Event} e In case of the caller was an event.
     */
    refreshComponent(e = {}) {
      // check for race conditions -> will lead to ugly side effects for rendering (usually based on calucalted valued)
      if (this._refreshInProgress === true) {
        // already rendering, no queing, last event will recalled
        this._refreshParallelRequest = e || true;
        return;
      }
      this._refreshInProgress = true;

      this.preRefresh();

      // render with lit-html
      x(this.renderComponent(), this);

      this.postRefresh();

      this._refreshInProgress = false;
      if (this._refreshParallelRequest) {
        // repeat paralle request with the latest event
        const event = this._refreshParallelRequest;
        this._refreshParallelRequest = false;
        this.refreshComponent(event);
      }
    }

    /**
     * Overwrite if you want to define some data **before** the rendering take place
     * @abstract
     */
    async preRefresh() {}

    /**
     * Overwrite if you want to define some data **after** the rendering took place
     * @abstract
     */
    async postRefresh() {}

    /**
     * Overwrite if you want to define some data **when** the lifecycle
     * function `disconnectedCallback` is executed of the component.
     * @abstract
     */
    async preDestroy() {}
  }

  function toArray(objectOrArray) {
    objectOrArray = objectOrArray || [];
    return Array.isArray(objectOrArray) ? objectOrArray : [objectOrArray];
  }

  function log(msg) {
    return `[Vaadin.Router] ${msg}`;
  }

  function logValue(value) {
    if (typeof value !== 'object') {
      return String(value);
    }

    const stringType = Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];
    if (stringType === 'Object' || stringType === 'Array') {
      return `${stringType} ${JSON.stringify(value)}`;
    } else {
      return stringType;
    }
  }

  const MODULE = 'module';
  const NOMODULE = 'nomodule';
  const bundleKeys = [MODULE, NOMODULE];

  function ensureBundle(src) {
    if (!src.match(/.+\.[m]?js$/)) {
      throw new Error(
        log(`Unsupported type for bundle "${src}": .js or .mjs expected.`)
      );
    }
  }

  function ensureRoute(route) {
    if (!route || !isString(route.path)) {
      throw new Error(
        log(`Expected route config to be an object with a "path" string property, or an array of such objects`)
      );
    }

    const bundle = route.bundle;

    const stringKeys = ['component', 'redirect', 'bundle'];
    if (
      !isFunction(route.action) &&
      !Array.isArray(route.children) &&
      !isFunction(route.children) &&
      !isObject(bundle) &&
      !stringKeys.some(key => isString(route[key]))
    ) {
      throw new Error(
        log(
          `Expected route config "${route.path}" to include either "${stringKeys.join('", "')}" ` +
          `or "action" function but none found.`
        )
      );
    }

    if (bundle) {
      if (isString(bundle)) {
        ensureBundle(bundle);
      } else if (!bundleKeys.some(key => key in bundle)) {
        throw new Error(
          log('Expected route bundle to include either "' + NOMODULE + '" or "' + MODULE + '" keys, or both')
        );
      } else {
        bundleKeys.forEach(key => key in bundle && ensureBundle(bundle[key]));
      }
    }

    if (route.redirect) {
      ['bundle', 'component'].forEach(overriddenProp => {
        if (overriddenProp in route) {
          console.warn(
            log(
              `Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, ` +
              `and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`
            )
          );
        }
      });
    }
  }

  function ensureRoutes(routes) {
    toArray(routes).forEach(route => ensureRoute(route));
  }

  function loadScript(src, key) {
    let script = document.head.querySelector('script[src="' + src + '"][async]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('src', src);
      if (key === MODULE) {
        script.setAttribute('type', MODULE);
      } else if (key === NOMODULE) {
        script.setAttribute(NOMODULE, '');
      }
      script.async = true;
    }
    return new Promise((resolve, reject) => {
      script.onreadystatechange = script.onload = e => {
        script.__dynamicImportLoaded = true;
        resolve(e);
      };
      script.onerror = e => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        reject(e);
      };
      if (script.parentNode === null) {
        document.head.appendChild(script);
      } else if (script.__dynamicImportLoaded) {
        resolve();
      }
    });
  }

  function loadBundle(bundle) {
    if (isString(bundle)) {
      return loadScript(bundle);
    } else {
      return Promise.race(
        bundleKeys
          .filter(key => key in bundle)
          .map(key => loadScript(bundle[key], key))
      );
    }
  }

  function fireRouterEvent(type, detail) {
    return !window.dispatchEvent(new CustomEvent(
      `vaadin-router-${type}`,
      {cancelable: type === 'go', detail}
    ));
  }

  function isObject(o) {
    // guard against null passing the typeof check
    return typeof o === 'object' && !!o;
  }

  function isFunction(f) {
    return typeof f === 'function';
  }

  function isString(s) {
    return typeof s === 'string';
  }

  function getNotFoundError(context) {
    const error = new Error(log(`Page not found (${context.pathname})`));
    error.context = context;
    error.code = 404;
    return error;
  }

  const notFoundResult = new (class NotFoundResult {})();

  /* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */
  function getAnchorOrigin(anchor) {
    // IE11: on HTTP and HTTPS the default port is not included into
    // window.location.origin, so won't include it here either.
    const port = anchor.port;
    const protocol = anchor.protocol;
    const defaultHttp = protocol === 'http:' && port === '80';
    const defaultHttps = protocol === 'https:' && port === '443';
    const host = (defaultHttp || defaultHttps)
      ? anchor.hostname // does not include the port number (e.g. www.example.org)
      : anchor.host; // does include the port number (e.g. www.example.org:80)
    return `${protocol}//${host}`;
  }

  // The list of checks is not complete:
  //  - SVG support is missing
  //  - the 'rel' attribute is not considered
  function vaadinRouterGlobalClickHandler(event) {
    // ignore the click if the default action is prevented
    if (event.defaultPrevented) {
      return;
    }

    // ignore the click if not with the primary mouse button
    if (event.button !== 0) {
      return;
    }

    // ignore the click if a modifier key is pressed
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
      return;
    }

    // find the <a> element that the click is at (or within)
    let anchor = event.target;
    const path = event.composedPath
      ? event.composedPath()
      : (event.path || []);

    // FIXME(web-padawan): `Symbol.iterator` used by webcomponentsjs is broken for arrays
    // example to check: `for...of` loop here throws the "Not yet implemented" error
    for (let i = 0; i < path.length; i++) {
      const target = path[i];
      if (target.nodeName && target.nodeName.toLowerCase() === 'a') {
        anchor = target;
        break;
      }
    }

    while (anchor && anchor.nodeName.toLowerCase() !== 'a') {
      anchor = anchor.parentNode;
    }

    // ignore the click if not at an <a> element
    if (!anchor || anchor.nodeName.toLowerCase() !== 'a') {
      return;
    }

    // ignore the click if the <a> element has a non-default target
    if (anchor.target && anchor.target.toLowerCase() !== '_self') {
      return;
    }

    // ignore the click if the <a> element has the 'download' attribute
    if (anchor.hasAttribute('download')) {
      return;
    }

    // ignore the click if the <a> element has the 'router-ignore' attribute
    if (anchor.hasAttribute('router-ignore')) {
      return;
    }

    // ignore the click if the target URL is a fragment on the current page
    if (anchor.pathname === window.location.pathname && anchor.hash !== '') {
      return;
    }

    // ignore the click if the target is external to the app
    // In IE11 HTMLAnchorElement does not have the `origin` property
    const origin = anchor.origin || getAnchorOrigin(anchor);
    if (origin !== window.location.origin) {
      return;
    }

    // if none of the above, convert the click into a navigation event
    const {pathname, search, hash} = anchor;
    if (fireRouterEvent('go', {pathname, search, hash})) {
      event.preventDefault();
      // for a click event, the scroll is reset to the top position.
      if (event && event.type === 'click') {
        window.scrollTo(0, 0);
      }
    }
  }

  /**
   * A navigation trigger for Vaadin Router that translated clicks on `<a>` links
   * into Vaadin Router navigation events.
   *
   * Only regular clicks on in-app links are translated (primary mouse button, no
   * modifier keys, the target href is within the app's URL space).
   *
   * @memberOf Router.NavigationTrigger
   * @type {NavigationTrigger}
   */
  const CLICK = {
    activate() {
      window.document.addEventListener('click', vaadinRouterGlobalClickHandler);
    },

    inactivate() {
      window.document.removeEventListener('click', vaadinRouterGlobalClickHandler);
    }
  };

  // PopStateEvent constructor shim
  const isIE = /Trident/.test(navigator.userAgent);

  /* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */
  if (isIE && !isFunction(window.PopStateEvent)) {
    window.PopStateEvent = function(inType, params) {
      params = params || {};
      var e = document.createEvent('Event');
      e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
      e.state = params.state || null;
      return e;
    };
    window.PopStateEvent.prototype = window.Event.prototype;
  }

  function vaadinRouterGlobalPopstateHandler(event) {
    if (event.state === 'vaadin-router-ignore') {
      return;
    }
    const {pathname, search, hash} = window.location;
    fireRouterEvent('go', {pathname, search, hash});
  }

  /**
   * A navigation trigger for Vaadin Router that translates popstate events into
   * Vaadin Router navigation events.
   *
   * @memberOf Router.NavigationTrigger
   * @type {NavigationTrigger}
   */
  const POPSTATE = {
    activate() {
      window.addEventListener('popstate', vaadinRouterGlobalPopstateHandler);
    },

    inactivate() {
      window.removeEventListener('popstate', vaadinRouterGlobalPopstateHandler);
    }
  };

  /**
   * Expose `pathToRegexp`.
   */
  var pathToRegexp_1 = pathToRegexp;
  var parse_1 = parse;
  var compile_1 = compile;
  var tokensToFunction_1 = tokensToFunction;
  var tokensToRegExp_1 = tokensToRegExp;

  /**
   * Default configs.
   */
  var DEFAULT_DELIMITER = '/';
  var DEFAULT_DELIMITERS = './';

  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
    // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
    '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
  ].join('|'), 'g');

  /**
   * Parse a string for the raw tokens.
   *
   * @param  {string}  str
   * @param  {Object=} options
   * @return {!Array}
   */
  function parse (str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
    var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;

    while ((res = PATH_REGEXP.exec(str)) !== null) {
      var m = res[0];
      var escaped = res[1];
      var offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1];
        pathEscaped = true;
        continue
      }

      var prev = '';
      var next = str[index];
      var name = res[2];
      var capture = res[3];
      var group = res[4];
      var modifier = res[5];

      if (!pathEscaped && path.length) {
        var k = path.length - 1;

        if (delimiters.indexOf(path[k]) > -1) {
          prev = path[k];
          path = path.slice(0, k);
        }
      }

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path);
        path = '';
        pathEscaped = false;
      }

      var partial = prev !== '' && next !== undefined && next !== prev;
      var repeat = modifier === '+' || modifier === '*';
      var optional = modifier === '?' || modifier === '*';
      var delimiter = prev || defaultDelimiter;
      var pattern = capture || group;

      tokens.push({
        name: name || key++,
        prefix: prev,
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        partial: partial,
        pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
      });
    }

    // Push any remaining characters.
    if (path || index < str.length) {
      tokens.push(path + str.substr(index));
    }

    return tokens
  }

  /**
   * Compile a string to a template function for the path.
   *
   * @param  {string}             str
   * @param  {Object=}            options
   * @return {!function(Object=, Object=)}
   */
  function compile (str, options) {
    return tokensToFunction(parse(str, options))
  }

  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);

    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
      }
    }

    return function (data, options) {
      var path = '';
      var encode = (options && options.encode) || encodeURIComponent;

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          path += token;
          continue
        }

        var value = data ? data[token.name] : undefined;
        var segment;

        if (Array.isArray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
          }

          if (value.length === 0) {
            if (token.optional) continue

            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }

          for (var j = 0; j < value.length; j++) {
            segment = encode(value[j], token);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue
        }

        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          segment = encode(String(value), token);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
          }

          path += token.prefix + segment;
          continue
        }

        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) path += token.prefix;

          continue
        }

        throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
      }

      return path
    }
  }

  /**
   * Escape a regular expression string.
   *
   * @param  {string} str
   * @return {string}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
  }

  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {string} group
   * @return {string}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$/()])/g, '\\$1')
  }

  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {string}
   */
  function flags (options) {
    return options && options.sensitive ? '' : 'i'
  }

  /**
   * Pull out keys from a regexp.
   *
   * @param  {!RegExp} path
   * @param  {Array=}  keys
   * @return {!RegExp}
   */
  function regexpToRegexp (path, keys) {
    if (!keys) return path

    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          partial: false,
          pattern: null
        });
      }
    }

    return path
  }

  /**
   * Transform an array into a regexp.
   *
   * @param  {!Array}  path
   * @param  {Array=}  keys
   * @param  {Object=} options
   * @return {!RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = [];

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source);
    }

    return new RegExp('(?:' + parts.join('|') + ')', flags(options))
  }

  /**
   * Create a path regexp from string input.
   *
   * @param  {string}  path
   * @param  {Array=}  keys
   * @param  {Object=} options
   * @return {!RegExp}
   */
  function stringToRegexp (path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options)
  }

  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {!Array}  tokens
   * @param  {Array=}  keys
   * @param  {Object=} options
   * @return {!RegExp}
   */
  function tokensToRegExp (tokens, keys, options) {
    options = options || {};

    var strict = options.strict;
    var start = options.start !== false;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
    var route = start ? '^' : '';
    var isEndDelimited = tokens.length === 0;

    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        route += escapeString(token);
        isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
      } else {
        var capture = token.repeat
          ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
          : token.pattern;

        if (keys) keys.push(token);

        if (token.optional) {
          if (token.partial) {
            route += escapeString(token.prefix) + '(' + capture + ')?';
          } else {
            route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
          }
        } else {
          route += escapeString(token.prefix) + '(' + capture + ')';
        }
      }
    }

    if (end) {
      if (!strict) route += '(?:' + delimiter + ')?';

      route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
    } else {
      if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';
      if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';
    }

    return new RegExp(route, flags(options))
  }

  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(string|RegExp|Array)} path
   * @param  {Array=}                keys
   * @param  {Object=}               options
   * @return {!RegExp}
   */
  function pathToRegexp (path, keys, options) {
    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys)
    }

    if (Array.isArray(path)) {
      return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
    }

    return stringToRegexp(/** @type {string} */ (path), keys, options)
  }
  pathToRegexp_1.parse = parse_1;
  pathToRegexp_1.compile = compile_1;
  pathToRegexp_1.tokensToFunction = tokensToFunction_1;
  pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  const {hasOwnProperty} = Object.prototype;
  const cache = new Map();
  // see https://github.com/pillarjs/path-to-regexp/issues/148
  cache.set('|false', {
    keys: [],
    pattern: /(?:)/
  });

  function decodeParam(val) {
    try {
      return decodeURIComponent(val);
    } catch (err) {
      return val;
    }
  }

  function matchPath(routepath, path, exact, parentKeys, parentParams) {
    exact = !!exact;
    const cacheKey = `${routepath}|${exact}`;
    let regexp = cache.get(cacheKey);

    if (!regexp) {
      const keys = [];
      regexp = {
        keys,
        pattern: pathToRegexp_1(routepath, keys, {
          end: exact,
          strict: routepath === ''
        }),
      };
      cache.set(cacheKey, regexp);
    }

    const m = regexp.pattern.exec(path);
    if (!m) {
      return null;
    }

    const params = Object.assign({}, parentParams);

    for (let i = 1; i < m.length; i++) {
      const key = regexp.keys[i - 1];
      const prop = key.name;
      const value = m[i];
      if (value !== undefined || !hasOwnProperty.call(params, prop)) {
        if (key.repeat) {
          params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
        } else {
          params[prop] = value ? decodeParam(value) : value;
        }
      }
    }

    return {
      path: m[0],
      keys: (parentKeys || []).concat(regexp.keys),
      params,
    };
  }

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  /**
   * Traverses the routes tree and matches its nodes to the given pathname from
   * the root down to the leaves. Each match consumes a part of the pathname and
   * the matching process continues for as long as there is a matching child
   * route for the remaining part of the pathname.
   *
   * The returned value is a lazily evaluated iterator.
   *
   * The leading "/" in a route path matters only for the root of the routes
   * tree (or if all parent routes are ""). In all other cases a leading "/" in
   * a child route path has no significance.
   *
   * The trailing "/" in a _route path_ matters only for the leaves of the
   * routes tree. A leaf route with a trailing "/" matches only a pathname that
   * also has a trailing "/".
   *
   * The trailing "/" in a route path does not affect matching of child routes
   * in any way.
   *
   * The trailing "/" in a _pathname_ generally does not matter (except for
   * the case of leaf nodes described above).
   *
   * The "" and "/" routes have special treatment:
   *  1. as a single route
   *     the "" and "/" routes match only the "" and "/" pathnames respectively
   *  2. as a parent in the routes tree
   *     the "" route matches any pathname without consuming any part of it
   *     the "/" route matches any absolute pathname consuming its leading "/"
   *  3. as a leaf in the routes tree
   *     the "" and "/" routes match only if the entire pathname is consumed by
   *         the parent routes chain. In this case "" and "/" are equivalent.
   *  4. several directly nested "" or "/" routes
   *     - directly nested "" or "/" routes are 'squashed' (i.e. nesting two
   *       "/" routes does not require a double "/" in the pathname to match)
   *     - if there are only "" in the parent routes chain, no part of the
   *       pathname is consumed, and the leading "/" in the child routes' paths
   *       remains significant
   *
   * Side effect:
   *   - the routes tree { path: '' } matches only the '' pathname
   *   - the routes tree { path: '', children: [ { path: '' } ] } matches any
   *     pathname (for the tree root)
   *
   * Prefix matching can be enabled also by `children: true`.
   */
  function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
    let match;
    let childMatches;
    let childIndex = 0;
    let routepath = route.path || '';
    if (routepath.charAt(0) === '/') {
      if (ignoreLeadingSlash) {
        routepath = routepath.substr(1);
      }
      ignoreLeadingSlash = true;
    }

    return {
      next(routeToSkip) {
        if (route === routeToSkip) {
          return {done: true};
        }

        const children = route.__children = route.__children || route.children;

        if (!match) {
          match = matchPath(routepath, pathname, !children, parentKeys, parentParams);

          if (match) {
            return {
              done: false,
              value: {
                route,
                keys: match.keys,
                params: match.params,
                path: match.path
              },
            };
          }
        }

        if (match && children) {
          while (childIndex < children.length) {
            if (!childMatches) {
              const childRoute = children[childIndex];
              childRoute.parent = route;

              let matchedLength = match.path.length;
              if (matchedLength > 0 && pathname.charAt(matchedLength) === '/') {
                matchedLength += 1;
              }

              childMatches = matchRoute(
                childRoute,
                pathname.substr(matchedLength),
                ignoreLeadingSlash,
                match.keys,
                match.params
              );
            }

            const childMatch = childMatches.next(routeToSkip);
            if (!childMatch.done) {
              return {
                done: false,
                value: childMatch.value,
              };
            }

            childMatches = null;
            childIndex++;
          }
        }

        return {done: true};
      },
    };
  }

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  function resolveRoute(context) {
    if (isFunction(context.route.action)) {
      return context.route.action(context);
    }
    return undefined;
  }

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  function isChildRoute(parentRoute, childRoute) {
    let route = childRoute;
    while (route) {
      route = route.parent;
      if (route === parentRoute) {
        return true;
      }
    }
    return false;
  }

  function generateErrorMessage(currentContext) {
    let errorMessage = `Path '${currentContext.pathname}' is not properly resolved due to an error.`;
    const routePath = (currentContext.route || {}).path;
    if (routePath) {
      errorMessage += ` Resolution had failed on route: '${routePath}'`;
    }
    return errorMessage;
  }

  function updateChainForRoute(context, match) {
    const {route, path} = match;

    if (route && !route.__synthetic) {
      const item = {path, route};
      if (!context.chain) {
        context.chain = [];
      } else {
        // Discard old items
        if (route.parent) {
          let i = context.chain.length;
          while (i-- && context.chain[i].route && context.chain[i].route !== route.parent) {
            context.chain.pop();
          }
        }
      }
      context.chain.push(item);
    }
  }

  /**
   */
  class Resolver {
    constructor(routes, options = {}) {
      if (Object(routes) !== routes) {
        throw new TypeError('Invalid routes');
      }

      this.baseUrl = options.baseUrl || '';
      this.errorHandler = options.errorHandler;
      this.resolveRoute = options.resolveRoute || resolveRoute;
      this.context = Object.assign({resolver: this}, options.context);
      this.root = Array.isArray(routes) ? {path: '', __children: routes, parent: null, __synthetic: true} : routes;
      this.root.parent = null;
    }

    /**
     * Returns the current list of routes (as a shallow copy). Adding / removing
     * routes to / from the returned array does not affect the routing config,
     * but modifying the route objects does.
     *
     * @return {!Array<!Router.Route>}
     */
    getRoutes() {
      return [...this.root.__children];
    }

    /**
     * Sets the routing config (replacing the existing one).
     *
     * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
     *    (the array is shallow copied)
     */
    setRoutes(routes) {
      ensureRoutes(routes);
      const newRoutes = [...toArray(routes)];
      this.root.__children = newRoutes;
    }

    /**
     * Appends one or several routes to the routing config and returns the
     * effective routing config after the operation.
     *
     * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
     *    (the array is shallow copied)
     * @return {!Array<!Router.Route>}
     * @protected
     */
    addRoutes(routes) {
      ensureRoutes(routes);
      this.root.__children.push(...toArray(routes));
      return this.getRoutes();
    }

    /**
     * Removes all existing routes from the routing config.
     */
    removeRoutes() {
      this.setRoutes([]);
    }

    /**
     * Asynchronously resolves the given pathname, i.e. finds all routes matching
     * the pathname and tries resolving them one after another in the order they
     * are listed in the routes config until the first non-null result.
     *
     * Returns a promise that is fulfilled with the return value of an object that consists of the first
     * route handler result that returns something other than `null` or `undefined` and context used to get this result.
     *
     * If no route handlers return a non-null result, or if no route matches the
     * given pathname the returned promise is rejected with a 'page not found'
     * `Error`.
     *
     * @param {!string|!{pathname: !string}} pathnameOrContext the pathname to
     *    resolve or a context object with a `pathname` property and other
     *    properties to pass to the route resolver functions.
     * @return {!Promise<any>}
     */
    resolve(pathnameOrContext) {
      const context = Object.assign(
        {},
        this.context,
        isString(pathnameOrContext) ? {pathname: pathnameOrContext} : pathnameOrContext
      );
      const match = matchRoute(
        this.root,
        this.__normalizePathname(context.pathname),
        this.baseUrl
      );
      const resolve = this.resolveRoute;
      let matches = null;
      let nextMatches = null;
      let currentContext = context;

      function next(resume, parent = matches.value.route, prevResult) {
        const routeToSkip = prevResult === null && matches.value.route;
        matches = nextMatches || match.next(routeToSkip);
        nextMatches = null;

        if (!resume) {
          if (matches.done || !isChildRoute(parent, matches.value.route)) {
            nextMatches = matches;
            return Promise.resolve(notFoundResult);
          }
        }

        if (matches.done) {
          return Promise.reject(getNotFoundError(context));
        }

        currentContext = Object.assign(
          currentContext
            ? {chain: (currentContext.chain ? currentContext.chain.slice(0) : [])}
            : {},
          context,
          matches.value
        );
        updateChainForRoute(currentContext, matches.value);

        return Promise.resolve(resolve(currentContext)).then(resolution => {
          if (resolution !== null && resolution !== undefined && resolution !== notFoundResult) {
            currentContext.result = resolution.result || resolution;
            return currentContext;
          }
          return next(resume, parent, resolution);
        });
      }

      context.next = next;

      return Promise.resolve()
        .then(() => next(true, this.root))
        .catch((error) => {
          const errorMessage = generateErrorMessage(currentContext);
          if (!error) {
            error = new Error(errorMessage);
          } else {
            console.warn(errorMessage);
          }
          error.context = error.context || currentContext;
          // DOMException has its own code which is read-only
          if (!(error instanceof DOMException)) {
            error.code = error.code || 500;
          }
          if (this.errorHandler) {
            currentContext.result = this.errorHandler(error);
            return currentContext;
          }
          throw error;
        });
    }

    /**
     * URL constructor polyfill hook. Creates and returns an URL instance.
     */
    static __createUrl(url, base) {
      return new URL(url, base);
    }

    /**
     * If the baseUrl property is set, transforms the baseUrl and returns the full
     * actual `base` string for using in the `new URL(path, base);` and for
     * prepernding the paths with. The returned base ends with a trailing slash.
     *
     * Otherwise, returns empty string.
     */
    get __effectiveBaseUrl() {
      return this.baseUrl
        ? this.constructor.__createUrl(
          this.baseUrl,
          document.baseURI || document.URL
        ).href.replace(/[^\/]*$/, '')
        : '';
    }

    /**
     * If the baseUrl is set, matches the pathname with the router’s baseUrl,
     * and returns the local pathname with the baseUrl stripped out.
     *
     * If the pathname does not match the baseUrl, returns undefined.
     *
     * If the `baseUrl` is not set, returns the unmodified pathname argument.
     */
    __normalizePathname(pathname) {
      if (!this.baseUrl) {
        // No base URL, no need to transform the pathname.
        return pathname;
      }

      const base = this.__effectiveBaseUrl;
      const normalizedUrl = this.constructor.__createUrl(pathname, base).href;
      if (normalizedUrl.slice(0, base.length) === base) {
        return normalizedUrl.slice(base.length);
      }
    }
  }

  Resolver.pathToRegexp = pathToRegexp_1;

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  const {pathToRegexp: pathToRegexp$1} = Resolver;
  const cache$1 = new Map();

  function cacheRoutes(routesByName, route, routes) {
    const name = route.name || route.component;
    if (name) {
      if (routesByName.has(name)) {
        routesByName.get(name).push(route);
      } else {
        routesByName.set(name, [route]);
      }
    }

    if (Array.isArray(routes)) {
      for (let i = 0; i < routes.length; i++) {
        const childRoute = routes[i];
        childRoute.parent = route;
        cacheRoutes(routesByName, childRoute, childRoute.__children || childRoute.children);
      }
    }
  }

  function getRouteByName(routesByName, routeName) {
    const routes = routesByName.get(routeName);
    if (routes && routes.length > 1) {
      throw new Error(
        `Duplicate route with name "${routeName}".`
        + ` Try seting unique 'name' route properties.`
      );
    }
    return routes && routes[0];
  }

  function getRoutePath(route) {
    let path = route.path;
    path = Array.isArray(path) ? path[0] : path;
    return path !== undefined ? path : '';
  }

  function generateUrls(router, options = {}) {
    if (!(router instanceof Resolver)) {
      throw new TypeError('An instance of Resolver is expected');
    }

    const routesByName = new Map();

    return (routeName, params) => {
      let route = getRouteByName(routesByName, routeName);
      if (!route) {
        routesByName.clear(); // clear cache
        cacheRoutes(routesByName, router.root, router.root.__children);

        route = getRouteByName(routesByName, routeName);
        if (!route) {
          throw new Error(`Route "${routeName}" not found`);
        }
      }

      let regexp = cache$1.get(route.fullPath);
      if (!regexp) {
        let fullPath = getRoutePath(route);
        let rt = route.parent;
        while (rt) {
          const path = getRoutePath(rt);
          if (path) {
            fullPath = path.replace(/\/$/, '') + '/' + fullPath.replace(/^\//, '');
          }
          rt = rt.parent;
        }
        const tokens = pathToRegexp$1.parse(fullPath);
        const toPath = pathToRegexp$1.tokensToFunction(tokens);
        const keys = Object.create(null);
        for (let i = 0; i < tokens.length; i++) {
          if (!isString(tokens[i])) {
            keys[tokens[i].name] = true;
          }
        }
        regexp = {toPath, keys};
        cache$1.set(fullPath, regexp);
        route.fullPath = fullPath;
      }

      let url = regexp.toPath(params, options) || '/';

      if (options.stringifyQueryParams && params) {
        const queryParams = {};
        const keys = Object.keys(params);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (!regexp.keys[key]) {
            queryParams[key] = params[key];
          }
        }
        const query = options.stringifyQueryParams(queryParams);
        if (query) {
          url += query.charAt(0) === '?' ? query : `?${query}`;
        }
      }

      return url;
    };
  }

  /**
   * @typedef NavigationTrigger
   * @type {object}
   * @property {function()} activate
   * @property {function()} inactivate
   */

  /** @type {Array<NavigationTrigger>} */
  let triggers = [];

  function setNavigationTriggers(newTriggers) {
    triggers.forEach(trigger => trigger.inactivate());

    newTriggers.forEach(trigger => trigger.activate());

    triggers = newTriggers;
  }

  const willAnimate = elem => {
    const name = getComputedStyle(elem).getPropertyValue('animation-name');
    return name && name !== 'none';
  };

  const waitForAnimation = (elem, cb) => {
    const listener = () => {
      elem.removeEventListener('animationend', listener);
      cb();
    };
    elem.addEventListener('animationend', listener);
  };

  function animate(elem, className) {
    elem.classList.add(className);

    return new Promise(resolve => {
      if (willAnimate(elem)) {
        const rect = elem.getBoundingClientRect();
        const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
        elem.setAttribute('style', `position: absolute; ${size}`);
        waitForAnimation(elem, () => {
          elem.classList.remove(className);
          elem.removeAttribute('style');
          resolve();
        });
      } else {
        elem.classList.remove(className);
        resolve();
      }
    });
  }

  const MAX_REDIRECT_COUNT = 256;

  function isResultNotEmpty(result) {
    return result !== null && result !== undefined;
  }

  function copyContextWithoutNext(context) {
    const copy = Object.assign({}, context);
    delete copy.next;
    return copy;
  }

  function createLocation({pathname = '', search = '', hash = '', chain = [], params = {}, redirectFrom, resolver}, route) {
    const routes = chain.map(item => item.route);
    return {
      baseUrl: resolver && resolver.baseUrl || '',
      pathname,
      search,
      hash,
      routes,
      route: route || routes.length && routes[routes.length - 1] || null,
      params,
      redirectFrom,
      getUrl: (userParams = {}) => getPathnameForRouter(
        Router.pathToRegexp.compile(
          getMatchedPath(routes)
        )(Object.assign({}, params, userParams)),
        resolver
      )
    };
  }

  function createRedirect(context, pathname) {
    const params = Object.assign({}, context.params);
    return {
      redirect: {
        pathname,
        from: context.pathname,
        params
      }
    };
  }

  function renderElement(context, element) {
    element.location = createLocation(context);
    const index = context.chain.map(item => item.route).indexOf(context.route);
    context.chain[index].element = element;
    return element;
  }

  function runCallbackIfPossible(callback, args, thisArg) {
    if (isFunction(callback)) {
      return callback.apply(thisArg, args);
    }
  }

  function amend(amendmentFunction, args, element) {
    return amendmentResult => {
      if (amendmentResult && (amendmentResult.cancel || amendmentResult.redirect)) {
        return amendmentResult;
      }

      if (element) {
        return runCallbackIfPossible(element[amendmentFunction], args, element);
      }
    };
  }

  function processNewChildren(newChildren, route) {
    if (!Array.isArray(newChildren) && !isObject(newChildren)) {
      throw new Error(
        log(
          `Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`
        )
      );
    }

    route.__children = [];
    const childRoutes = toArray(newChildren);
    for (let i = 0; i < childRoutes.length; i++) {
      ensureRoute(childRoutes[i]);
      route.__children.push(childRoutes[i]);
    }
  }

  function removeDomNodes(nodes) {
    if (nodes && nodes.length) {
      const parent = nodes[0].parentNode;
      for (let i = 0; i < nodes.length; i++) {
        parent.removeChild(nodes[i]);
      }
    }
  }

  function getPathnameForRouter(pathname, router) {
    const base = router.__effectiveBaseUrl;
    return base
      ? router.constructor.__createUrl(pathname.replace(/^\//, ''), base).pathname
      : pathname;
  }

  function getMatchedPath(chain) {
    return chain.map(item => item.path).reduce((a, b) => {
      if (b.length) {
        return a.replace(/\/$/, '') + '/' + b.replace(/^\//, '');
      }
      return a;
    }, '');
  }

  /**
   * A simple client-side router for single-page applications. It uses
   * express-style middleware and has a first-class support for Web Components and
   * lazy-loading. Works great in Polymer and non-Polymer apps.
   *
   * Use `new Router(outlet, options)` to create a new Router instance.
   *
   * * The `outlet` parameter is a reference to the DOM node to render
   *   the content into.
   *
   * * The `options` parameter is an optional object with options. The following
   *   keys are supported:
   *   * `baseUrl` — the initial value for [
   *     the `baseUrl` property
   *   ](#/classes/Router#property-baseUrl)
   *
   * The Router instance is automatically subscribed to navigation events
   * on `window`.
   *
   * See [Live Examples](#/classes/Router/demos/demo/index.html) for the detailed usage demo and code snippets.
   *
   * See also detailed API docs for the following methods, for the advanced usage:
   *
   * * [setOutlet](#/classes/Router#method-setOutlet) – should be used to configure the outlet.
   * * [setTriggers](#/classes/Router#method-setTriggers) – should be used to configure the navigation events.
   * * [setRoutes](#/classes/Router#method-setRoutes) – should be used to configure the routes.
   *
   * Only `setRoutes` has to be called manually, others are automatically invoked when creating a new instance.
   *
   * @extends Resolver
   * @demo demo/index.html
   * @summary JavaScript class that renders different DOM content depending on
   *    a given path. It can re-render when triggered or automatically on
   *    'popstate' and / or 'click' events.
   */
  class Router extends Resolver {

    /**
     * Creates a new Router instance with a given outlet, and
     * automatically subscribes it to navigation events on the `window`.
     * Using a constructor argument or a setter for outlet is equivalent:
     *
     * ```
     * const router = new Router();
     * router.setOutlet(outlet);
     * ```
     * @param {?Node=} outlet
     * @param {?RouterOptions=} options
     */
    constructor(outlet, options) {
      const baseElement = document.head.querySelector('base');
      const baseHref = baseElement && baseElement.getAttribute('href');
      super([], Object.assign({
        // Default options
        baseUrl: baseHref && Resolver.__createUrl(baseHref, document.URL).pathname.replace(/[^\/]*$/, '')
      }, options));

      this.resolveRoute = context => this.__resolveRoute(context);

      const triggers = Router.NavigationTrigger;
      Router.setTriggers.apply(Router, Object.keys(triggers).map(key => triggers[key]));

      /**
       * The base URL for all routes in the router instance. By default,
       * if the base element exists in the `<head>`, vaadin-router
       * takes the `<base href>` attribute value, resolves against current `document.URL`
       * and gets the `pathname` from the result.
       *
       * @public
       * @type {string}
       */
      this.baseUrl;

      /**
       * A promise that is settled after the current render cycle completes. If
       * there is no render cycle in progress the promise is immediately settled
       * with the last render cycle result.
       *
       * @public
       * @type {!Promise<!RouterLocation>}
       */
      this.ready;
      this.ready = Promise.resolve(outlet);

      /**
       * Contains read-only information about the current router location:
       * pathname, active routes, parameters. See the
       * [Location type declaration](#/classes/RouterLocation)
       * for more details.
       *
       * @public
       * @type {!RouterLocation}
       */
      this.location;
      this.location = createLocation({resolver: this});

      this.__lastStartedRenderId = 0;
      this.__navigationEventHandler = this.__onNavigationEvent.bind(this);
      this.setOutlet(outlet);
      this.subscribe();
      // Using WeakMap instead of WeakSet because WeakSet is not supported by IE11
      this.__createdByRouter = new WeakMap();
      this.__addedByRouter = new WeakMap();
    }

    __resolveRoute(context) {
      const route = context.route;

      let callbacks = Promise.resolve();

      if (isFunction(route.children)) {
        callbacks = callbacks
          .then(() => route.children(copyContextWithoutNext(context)))
          .then(children => {
            // The route.children() callback might have re-written the
            // route.children property instead of returning a value
            if (!isResultNotEmpty(children) && !isFunction(route.children)) {
              children = route.children;
            }
            processNewChildren(children, route);
          });
      }

      const commands = {
        redirect: path => createRedirect(context, path),
        component: (component) => {
          const element = document.createElement(component);
          this.__createdByRouter.set(element, true);
          return element;
        }
      };

      return callbacks
        .then(() => {
          if (this.__isLatestRender(context)) {
            return runCallbackIfPossible(route.action, [context, commands], route);
          }
        })
        .then(result => {
          if (isResultNotEmpty(result)) {
            // Actions like `() => import('my-view.js')` are not expected to
            // end the resolution, despite the result is not empty. Checking
            // the result with a whitelist of values that end the resolution.
            if (result instanceof HTMLElement ||
                result.redirect ||
                result === notFoundResult) {
              return result;
            }
          }

          if (isString(route.redirect)) {
            return commands.redirect(route.redirect);
          }

          if (route.bundle) {
            return loadBundle(route.bundle)
              .then(() => {}, () => {
                throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`));
              });
          }
        })
        .then(result => {
          if (isResultNotEmpty(result)) {
            return result;
          }
          if (isString(route.component)) {
            return commands.component(route.component);
          }
        });
    }

    /**
     * Sets the router outlet (the DOM node where the content for the current
     * route is inserted). Any content pre-existing in the router outlet is
     * removed at the end of each render pass.
     *
     * NOTE: this method is automatically invoked first time when creating a new Router instance.
     *
     * @param {?Node} outlet the DOM node where the content for the current route
     *     is inserted.
     */
    setOutlet(outlet) {
      if (outlet) {
        this.__ensureOutlet(outlet);
      }
      this.__outlet = outlet;
    }

    /**
     * Returns the current router outlet. The initial value is `undefined`.
     *
     * @return {?Node} the current router outlet (or `undefined`)
     */
    getOutlet() {
      return this.__outlet;
    }

    /**
     * Sets the routing config (replacing the existing one) and triggers a
     * navigation event so that the router outlet is refreshed according to the
     * current `window.location` and the new routing config.
     *
     * Each route object may have the following properties, listed here in the processing order:
     * * `path` – the route path (relative to the parent route if any) in the
     * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
     *
     * * `children` – an array of nested routes or a function that provides this
     * array at the render time. The function can be synchronous or asynchronous:
     * in the latter case the render is delayed until the returned promise is
     * resolved. The `children` function is executed every time when this route is
     * being rendered. This allows for dynamic route structures (e.g. backend-defined),
     * but it might have a performance impact as well. In order to avoid calling
     * the function on subsequent renders, you can override the `children` property
     * of the route object and save the calculated array there
     * (via `context.route.children = [ route1, route2, ...];`).
     * Parent routes are fully resolved before resolving the children. Children
     * 'path' values are relative to the parent ones.
     *
     * * `action` – the action that is executed before the route is resolved.
     * The value for this property should be a function, accepting `context`
     * and `commands` parameters described below. If present, this function is
     * always invoked first, disregarding of the other properties' presence.
     * The action can return a result directly or within a `Promise`, which
     * resolves to the result. If the action result is an `HTMLElement` instance,
     * a `commands.component(name)` result, a `commands.redirect(path)` result,
     * or a `context.next()` result, the current route resolution is finished,
     * and other route config properties are ignored.
     * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
     *
     * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
     * The target route should also be defined.
     * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
     *
     * * `bundle` – string containing the path to `.js` or `.mjs` bundle to load before resolving the route,
     * or the object with "module" and "nomodule" keys referring to different bundles.
     * Each bundle is only loaded once. If "module" and "nomodule" are set, only one bundle is loaded,
     * depending on whether the browser supports ES modules or not.
     * The property is ignored when either an `action` returns the result or `redirect` property is present.
     * Any error, e.g. 404 while loading bundle will cause route resolution to throw.
     * See also **Code Splitting** section in [Live Examples](#/classes/Router/demos/demo/index.html).
     *
     * * `component` – the tag name of the Web Component to resolve the route to.
     * The property is ignored when either an `action` returns the result or `redirect` property is present.
     * If route contains the `component` property (or an action that return a component)
     * and its child route also contains the `component` property, child route's component
     * will be rendered as a light dom child of a parent component.
     *
     * * `name` – the string name of the route to use in the
     * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
     * navigation helper method.
     *
     * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the callback
     * through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow function
     * because arrow functions do not have their own `this` reference.
     *
     * `context` object that is passed to `action` function holds the following properties:
     * * `context.pathname` – string with the pathname being resolved
     *
     * * `context.search` – search query string
     *
     * * `context.hash` – hash string
     *
     * * `context.params` – object with route parameters
     *
     * * `context.route` – object that holds the route that is currently being rendered.
     *
     * * `context.next()` – function for asynchronously getting the next route
     * contents from the resolution chain (if any)
     *
     * `commands` object that is passed to `action` function has
     * the following methods:
     *
     * * `commands.redirect(path)` – function that creates a redirect data
     * for the path specified.
     *
     * * `commands.component(component)` – function that creates a new HTMLElement
     * with current context. Note: the component created by this function is reused if visiting the same path twice in row.
     *
     *
     * @param {!Array<!Route>|!Route} routes a single route or an array of those
     * @param {?boolean} skipRender configure the router but skip rendering the
     *     route corresponding to the current `window.location` values
     *
     * @return {!Promise<!Node>}
     */
    setRoutes(routes, skipRender = false) {
      this.__previousContext = undefined;
      this.__urlForName = undefined;
      super.setRoutes(routes);
      if (!skipRender) {
        this.__onNavigationEvent();
      }
      return this.ready;
    }

    /**
     * Asynchronously resolves the given pathname and renders the resolved route
     * component into the router outlet. If no router outlet is set at the time of
     * calling this method, or at the time when the route resolution is completed,
     * a `TypeError` is thrown.
     *
     * Returns a promise that is fulfilled with the router outlet DOM Node after
     * the route component is created and inserted into the router outlet, or
     * rejected if no route matches the given path.
     *
     * If another render pass is started before the previous one is completed, the
     * result of the previous render pass is ignored.
     *
     * @param {!string|!{pathname: !string, search: ?string, hash: ?string}} pathnameOrContext
     *    the pathname to render or a context object with a `pathname` property,
     *    optional `search` and `hash` properties, and other properties
     *    to pass to the resolver.
     * @param {boolean=} shouldUpdateHistory
     *    update browser history with the rendered location
     * @return {!Promise<!Node>}
     */
    render(pathnameOrContext, shouldUpdateHistory) {
      const renderId = ++this.__lastStartedRenderId;
      const context = Object.assign(
        {
          search: '',
          hash: ''
        },
        isString(pathnameOrContext)
          ? {pathname: pathnameOrContext}
          : pathnameOrContext,
        {
          __renderId: renderId
        }
      );

      // Find the first route that resolves to a non-empty result
      this.ready = this.resolve(context)

        // Process the result of this.resolve() and handle all special commands:
        // (redirect / prevent / component). If the result is a 'component',
        // then go deeper and build the entire chain of nested components matching
        // the pathname. Also call all 'on before' callbacks along the way.
        .then(context => this.__fullyResolveChain(context))

        .then(context => {
          if (this.__isLatestRender(context)) {
            const previousContext = this.__previousContext;

            // Check if the render was prevented and make an early return in that case
            if (context === previousContext) {
              // Replace the history with the previous context
              // to make sure the URL stays the same.
              this.__updateBrowserHistory(previousContext, true);
              return this.location;
            }

            this.location = createLocation(context);

            if (shouldUpdateHistory) {
              // Replace only if first render redirects, so that we don’t leave
              // the redirecting record in the history
              this.__updateBrowserHistory(context, renderId === 1);
            }

            fireRouterEvent('location-changed', {router: this, location: this.location});

            // Skip detaching/re-attaching there are no render changes
            if (context.__skipAttach) {
              this.__copyUnchangedElements(context, previousContext);
              this.__previousContext = context;
              return this.location;
            }

            this.__addAppearingContent(context, previousContext);
            const animationDone = this.__animateIfNeeded(context);

            this.__runOnAfterEnterCallbacks(context);
            this.__runOnAfterLeaveCallbacks(context, previousContext);

            return animationDone.then(() => {
              if (this.__isLatestRender(context)) {
                // If there is another render pass started after this one,
                // the 'disappearing content' would be removed when the other
                // render pass calls `this.__addAppearingContent()`
                this.__removeDisappearingContent();

                this.__previousContext = context;
                return this.location;
              }
            });
          }
        })
        .catch(error => {
          if (renderId === this.__lastStartedRenderId) {
            if (shouldUpdateHistory) {
              this.__updateBrowserHistory(context);
            }
            removeDomNodes(this.__outlet && this.__outlet.children);
            this.location = createLocation(Object.assign(context, {resolver: this}));
            fireRouterEvent('error', Object.assign({router: this, error}, context));
            throw error;
          }
        });
      return this.ready;
    }

    // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
    // It would contain a 'redirect' route or the first 'component' route that
    // matched the pathname. There might be more child 'component' routes to be
    // resolved and added into the chain. This method would find and add them.
    // `contextBeforeRedirects` is the context containing such a child component
    // route. It's only necessary when this method is called recursively (otherwise
    // it's the same as the 'top of the chain' context).
    //
    // Apart from building the chain of child components, this method would also
    // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
    // and 'redirect' callback results.
    __fullyResolveChain(topOfTheChainContextBeforeRedirects,
      contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
      return this.__findComponentContextAfterAllRedirects(contextBeforeRedirects)
        // `contextAfterRedirects` is always a context with an `HTMLElement` result
        // In other cases the promise gets rejected and .then() is not called
        .then(contextAfterRedirects => {
          const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
          const topOfTheChainContextAfterRedirects =
            redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;

          const matchedPath = getPathnameForRouter(
            getMatchedPath(contextAfterRedirects.chain),
            contextAfterRedirects.resolver
          );
          const isFound = (matchedPath === contextAfterRedirects.pathname);

          // Recursive method to try matching more child and sibling routes
          const findNextContextIfAny = (context, parent = context.route, prevResult) => {
            return context.next(undefined, parent, prevResult).then(nextContext => {
              if (nextContext === null || nextContext === notFoundResult) {
                // Next context is not found in children, ...
                if (isFound) {
                  // ...but original context is already fully matching - use it
                  return context;
                } else if (parent.parent !== null) {
                  // ...and there is no full match yet - step up to check siblings
                  return findNextContextIfAny(context, parent.parent, nextContext);
                } else {
                  return nextContext;
                }
              }

              return nextContext;
            });
          };

          return findNextContextIfAny(contextAfterRedirects).then(nextContext => {
            if (nextContext === null || nextContext === notFoundResult) {
              throw getNotFoundError(topOfTheChainContextAfterRedirects);
            }

            return nextContext
            && nextContext !== notFoundResult
            && nextContext !== contextAfterRedirects
              ? this.__fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext)
              : this.__amendWithOnBeforeCallbacks(contextAfterRedirects);
          });
        });
    }

    __findComponentContextAfterAllRedirects(context) {
      const result = context.result;
      if (result instanceof HTMLElement) {
        renderElement(context, result);
        return Promise.resolve(context);
      } else if (result.redirect) {
        return this.__redirect(result.redirect, context.__redirectCount, context.__renderId)
          .then(context => this.__findComponentContextAfterAllRedirects(context));
      } else if (result instanceof Error) {
        return Promise.reject(result);
      } else {
        return Promise.reject(
          new Error(
            log(
              `Invalid route resolution result for path "${context.pathname}". ` +
              `Expected redirect object or HTML element, but got: "${logValue(result)}". ` +
              `Double check the action return value for the route.`
            )
          ));
      }
    }

    __amendWithOnBeforeCallbacks(contextWithFullChain) {
      return this.__runOnBeforeCallbacks(contextWithFullChain).then(amendedContext => {
        if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) {
          return amendedContext;
        }
        return this.__fullyResolveChain(amendedContext);
      });
    }

    __runOnBeforeCallbacks(newContext) {
      const previousContext = this.__previousContext || {};
      const previousChain = previousContext.chain || [];
      const newChain = newContext.chain;

      let callbacks = Promise.resolve();
      const prevent = () => ({cancel: true});
      const redirect = (pathname) => createRedirect(newContext, pathname);

      newContext.__divergedChainIndex = 0;
      newContext.__skipAttach = false;
      if (previousChain.length) {
        for (let i = 0; i < Math.min(previousChain.length, newChain.length); i = ++newContext.__divergedChainIndex) {
          if (previousChain[i].route !== newChain[i].route
            || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element
            || !this.__isReusableElement(previousChain[i].element, newChain[i].element)) {
            break;
          }
        }

        // Skip re-attaching and notifications if element and chain do not change
        newContext.__skipAttach =
          // Same route chain
          newChain.length === previousChain.length && newContext.__divergedChainIndex == newChain.length &&
          // Same element
          this.__isReusableElement(newContext.result, previousContext.result);

        if (newContext.__skipAttach) {
          // execute onBeforeLeave for changed segment element when skipping attach
          for (let i = newChain.length - 1; i >= 0; i--) {
            callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {prevent}, previousChain[i]);
          }
          // execute onBeforeEnter for changed segment element when skipping attach
          for (let i = 0; i < newChain.length; i++) {
            callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {prevent, redirect}, newChain[i]);
            previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
          }

        } else {
          // execute onBeforeLeave when NOT skipping attach
          for (let i = previousChain.length - 1; i >= newContext.__divergedChainIndex; i--) {
            callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {prevent}, previousChain[i]);
          }
        }
      }
      // execute onBeforeEnter when NOT skipping attach
      if (!newContext.__skipAttach) {
        for (let i = 0; i < newChain.length; i++) {
          if (i < newContext.__divergedChainIndex) {
            if (i < previousChain.length && previousChain[i].element) {
              previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
            }
          } else {
            callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {prevent, redirect}, newChain[i]);
            if (newChain[i].element) {
              newChain[i].element.location = createLocation(newContext, newChain[i].route);
            }
          }
        }
      }
      return callbacks.then(amendmentResult => {
        if (amendmentResult) {
          if (amendmentResult.cancel) {
            this.__previousContext.__renderId = newContext.__renderId;
            return this.__previousContext;
          }
          if (amendmentResult.redirect) {
            return this.__redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
          }
        }
        return newContext;
      });
    }

    __runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
      const location = createLocation(newContext);
      return callbacks.then(result => {
        if (this.__isLatestRender(newContext)) {
          const afterLeaveFunction = amend('onBeforeLeave', [location, commands, this], chainElement.element);
          return afterLeaveFunction(result);
        }
      }).then(result => {
        if (!(result || {}).redirect) {
          return result;
        }
      });
    }

    __runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
      const location = createLocation(newContext, chainElement.route);
      return callbacks.then(result => {
        if (this.__isLatestRender(newContext)) {
          const beforeEnterFunction = amend('onBeforeEnter', [location, commands, this], chainElement.element);
          return beforeEnterFunction(result);
        }
      });
    }

    __isReusableElement(element, otherElement) {
      if (element && otherElement) {
        return this.__createdByRouter.get(element) && this.__createdByRouter.get(otherElement)
          ? element.localName === otherElement.localName
          : element === otherElement;
      }
      return false;
    }

    __isLatestRender(context) {
      return context.__renderId === this.__lastStartedRenderId;
    }

    __redirect(redirectData, counter, renderId) {
      if (counter > MAX_REDIRECT_COUNT) {
        throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
      }

      return this.resolve({
        pathname: this.urlForPath(
          redirectData.pathname,
          redirectData.params
        ),
        redirectFrom: redirectData.from,
        __redirectCount: (counter || 0) + 1,
        __renderId: renderId
      });
    }

    __ensureOutlet(outlet = this.__outlet) {
      if (!(outlet instanceof Node)) {
        throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`));
      }
    }

    __updateBrowserHistory({pathname, search = '', hash = ''}, replace) {
      if (window.location.pathname !== pathname
          || window.location.search !== search
          || window.location.hash !== hash
      ) {
        const changeState = replace ? 'replaceState' : 'pushState';
        window.history[changeState](null, document.title, pathname + search + hash);
        window.dispatchEvent(new PopStateEvent('popstate', {state: 'vaadin-router-ignore'}));
      }
    }

    __copyUnchangedElements(context, previousContext) {
      // Find the deepest common parent between the last and the new component
      // chains. Update references for the unchanged elements in the new chain
      let deepestCommonParent = this.__outlet;
      for (let i = 0; i < context.__divergedChainIndex; i++) {
        const unchangedElement = previousContext && previousContext.chain[i].element;
        if (unchangedElement) {
          if (unchangedElement.parentNode === deepestCommonParent) {
            context.chain[i].element = unchangedElement;
            deepestCommonParent = unchangedElement;
          } else {
            break;
          }
        }
      }
      return deepestCommonParent;
    }

    __addAppearingContent(context, previousContext) {
      this.__ensureOutlet();

      // If the previous 'entering' animation has not completed yet,
      // stop it and remove that content from the DOM before adding new one.
      this.__removeAppearingContent();

      // Copy reusable elements from the previousContext to current
      const deepestCommonParent = this.__copyUnchangedElements(context, previousContext);

      // Keep two lists of DOM elements:
      //  - those that should be removed once the transition animation is over
      //  - and those that should remain
      this.__appearingContent = [];
      this.__disappearingContent = Array
        .from(deepestCommonParent.children)
        .filter(
          // Only remove layout content that was added by router
          e => this.__addedByRouter.get(e) &&
          // Do not remove the result element to avoid flickering
          e !== context.result);

      // Add new elements (starting after the deepest common parent) to the DOM.
      // That way only the components that are actually different between the two
      // locations are added to the DOM (and those that are common remain in the
      // DOM without first removing and then adding them again).
      let parentElement = deepestCommonParent;
      for (let i = context.__divergedChainIndex; i < context.chain.length; i++) {
        const elementToAdd = context.chain[i].element;
        if (elementToAdd) {
          parentElement.appendChild(elementToAdd);
          this.__addedByRouter.set(elementToAdd, true);
          if (parentElement === deepestCommonParent) {
            this.__appearingContent.push(elementToAdd);
          }
          parentElement = elementToAdd;
        }
      }
    }

    __removeDisappearingContent() {
      if (this.__disappearingContent) {
        removeDomNodes(this.__disappearingContent);
      }
      this.__disappearingContent = null;
      this.__appearingContent = null;
    }

    __removeAppearingContent() {
      if (this.__disappearingContent && this.__appearingContent) {
        removeDomNodes(this.__appearingContent);
        this.__disappearingContent = null;
        this.__appearingContent = null;
      }
    }

    __runOnAfterLeaveCallbacks(currentContext, targetContext) {
      if (!targetContext) {
        return;
      }

      // REVERSE iteration: from Z to A
      for (let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--) {
        if (!this.__isLatestRender(currentContext)) {
          break;
        }
        const currentComponent = targetContext.chain[i].element;
        if (!currentComponent) {
          continue;
        }
        try {
          const location = createLocation(currentContext);
          runCallbackIfPossible(
            currentComponent.onAfterLeave,
            [location, {}, targetContext.resolver],
            currentComponent);
        } finally {
          if (this.__disappearingContent.indexOf(currentComponent) > -1) {
            removeDomNodes(currentComponent.children);
          }
        }
      }
    }

    __runOnAfterEnterCallbacks(currentContext) {
      // forward iteration: from A to Z
      for (let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++) {
        if (!this.__isLatestRender(currentContext)) {
          break;
        }
        const currentComponent = currentContext.chain[i].element || {};
        const location = createLocation(currentContext, currentContext.chain[i].route);
        runCallbackIfPossible(
          currentComponent.onAfterEnter,
          [location, {}, currentContext.resolver],
          currentComponent);
      }
    }

    __animateIfNeeded(context) {
      const from = (this.__disappearingContent || [])[0];
      const to = (this.__appearingContent || [])[0];
      const promises = [];

      const chain = context.chain;
      let config;
      for (let i = chain.length; i > 0; i--) {
        if (chain[i - 1].route.animate) {
          config = chain[i - 1].route.animate;
          break;
        }
      }

      if (from && to && config) {
        const leave = isObject(config) && config.leave || 'leaving';
        const enter = isObject(config) && config.enter || 'entering';
        promises.push(animate(from, leave));
        promises.push(animate(to, enter));
      }

      return Promise.all(promises).then(() => context);
    }

    /**
     * Subscribes this instance to navigation events on the `window`.
     *
     * NOTE: beware of resource leaks. For as long as a router instance is
     * subscribed to navigation events, it won't be garbage collected.
     */
    subscribe() {
      window.addEventListener('vaadin-router-go', this.__navigationEventHandler);
    }

    /**
     * Removes the subscription to navigation events created in the `subscribe()`
     * method.
     */
    unsubscribe() {
      window.removeEventListener('vaadin-router-go', this.__navigationEventHandler);
    }

    __onNavigationEvent(event) {
      const {pathname, search, hash} = event ? event.detail : window.location;
      if (isString(this.__normalizePathname(pathname))) {
        if (event && event.preventDefault) {
          event.preventDefault();
        }
        this.render({pathname, search, hash}, true);
      }
    }

    /**
     * Configures what triggers Router navigation events:
     *  - `POPSTATE`: popstate events on the current `window`
     *  - `CLICK`: click events on `<a>` links leading to the current page
     *
     * This method is invoked with the pre-configured values when creating a new Router instance.
     * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
     *
     * See the `router-config.js` for the default navigation triggers config. Based on it, you can
     * create the own one and only import the triggers you need, instead of pulling in all the code,
     * e.g. if you want to handle `click` differently.
     *
     * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
     *
     * @param {...NavigationTrigger} triggers
     */
    static setTriggers(...triggers) {
      setNavigationTriggers(triggers);
    }

    /**
     * Generates a URL for the route with the given name, optionally performing
     * substitution of parameters.
     *
     * The route is searched in all the Router instances subscribed to
     * navigation events.
     *
     * **Note:** For child route names, only array children are considered.
     * It is not possible to generate URLs using a name for routes set with
     * a children function.
     *
     * @function urlForName
     * @param {!string} name the route name or the route’s `component` name.
     * @param {Params=} params Optional object with route path parameters.
     * Named parameters are passed by name (`params[name] = value`), unnamed
     * parameters are passed by index (`params[index] = value`).
     *
     * @return {string}
     */
    urlForName(name, params) {
      if (!this.__urlForName) {
        this.__urlForName = generateUrls(this);
      }
      return getPathnameForRouter(
        this.__urlForName(name, params),
        this
      );
    }

    /**
     * Generates a URL for the given route path, optionally performing
     * substitution of parameters.
     *
     * @param {!string} path string route path declared in [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
     * @param {Params=} params Optional object with route path parameters.
     * Named parameters are passed by name (`params[name] = value`), unnamed
     * parameters are passed by index (`params[index] = value`).
     *
     * @return {string}
     */
    urlForPath(path, params) {
      return getPathnameForRouter(
        Router.pathToRegexp.compile(path)(params),
        this
      );
    }

    /**
     * Triggers navigation to a new path. Returns a boolean without waiting until
     * the navigation is complete. Returns `true` if at least one `Router`
     * has handled the navigation (was subscribed and had `baseUrl` matching
     * the `path` argument), otherwise returns `false`.
     *
     * @param {!string|!{pathname: !string, search: (string|undefined), hash: (string|undefined)}} path
     *   a new in-app path string, or an URL-like object with `pathname`
     *   string property, and optional `search` and `hash` string properties.
     * @return {boolean}
     */
    static go(path) {
      const {pathname, search, hash} = isString(path)
        ? this.__createUrl(path, 'http://a') // some base to omit origin
        : path;
      return fireRouterEvent('go', {pathname, search, hash});
    }
  }

  const DEV_MODE_CODE_REGEXP =
    /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;

  const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

  function isMinified() {
    function test() {
      /** vaadin-dev-mode:start
      return false;
      vaadin-dev-mode:end **/
      return true;
    }
    return uncommentAndRun(test);
  }

  function isDevelopmentMode() {
    try {
      if (isForcedDevelopmentMode()) {
        return true;
      }

      if (!isLocalhost()) {
        return false;
      }

      if (FlowClients) {
        return !isFlowProductionMode();
      }

      return !isMinified();
    } catch (e) {
      // Some error in this code, assume production so no further actions will be taken
      return false;
    }
  }

  function isForcedDevelopmentMode() {
    return localStorage.getItem("vaadin.developmentmode.force");
  }

  function isLocalhost() {
    return (["localhost","127.0.0.1"].indexOf(window.location.hostname) >= 0);
  }

  function isFlowProductionMode() {
    if (FlowClients) {
      const productionModeApps = Object.keys(FlowClients)
        .map(key => FlowClients[key])
        .filter(client => client.productionMode);
      if (productionModeApps.length > 0) {
        return true;
      }
    }
    return false;
  }

  function uncommentAndRun(callback, args) {
    if (typeof callback !== 'function') {
      return;
    }

    const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
    if (match) {
      try {
        // requires CSP: script-src 'unsafe-eval'
        callback = new Function(match[1]);
      } catch (e) {
        // eat the exception
        console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
      }
    }

    return callback(args);
  }

  // A guard against polymer-modulizer removing the window.Vaadin
  // initialization above.
  window['Vaadin'] = window['Vaadin'] || {};

  /**
   * Inspects the source code of the given `callback` function for
   * specially-marked _commented_ code. If such commented code is found in the
   * callback source, uncomments and runs that code instead of the callback
   * itself. Otherwise runs the callback as is.
   *
   * The optional arguments are passed into the callback / uncommented code,
   * the result is returned.
   *
   * See the `isMinified()` function source code in this file for an example.
   *
   */
  const runIfDevelopmentMode = function(callback, args) {
    if (window.Vaadin.developmentMode) {
      return uncommentAndRun(callback, args);
    }
  };

  if (window.Vaadin.developmentMode === undefined) {
    window.Vaadin.developmentMode = isDevelopmentMode();
  }

  /* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

  function maybeGatherAndSendStats() {
    /** vaadin-dev-mode:start
    (function () {
  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var getPolymerVersion = function getPolymerVersion() {
    return window.Polymer && window.Polymer.version;
  };

  var StatisticsGatherer = function () {
    function StatisticsGatherer(logger) {
      classCallCheck(this, StatisticsGatherer);

      this.now = new Date().getTime();
      this.logger = logger;
    }

    createClass(StatisticsGatherer, [{
      key: 'frameworkVersionDetectors',
      value: function frameworkVersionDetectors() {
        return {
          'Flow': function Flow() {
            if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
              var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
                return window.Vaadin.Flow.clients[key];
              }).filter(function (client) {
                return client.getVersionInfo;
              }).map(function (client) {
                return client.getVersionInfo().flow;
              });
              if (flowVersions.length > 0) {
                return flowVersions[0];
              }
            }
          },
          'Vaadin Framework': function VaadinFramework() {
            if (window.vaadin && window.vaadin.clients) {
              var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
                return client.getVersionInfo;
              }).map(function (client) {
                return client.getVersionInfo().vaadinVersion;
              });
              if (frameworkVersions.length > 0) {
                return frameworkVersions[0];
              }
            }
          },
          'AngularJs': function AngularJs() {
            if (window.angular && window.angular.version && window.angular.version) {
              return window.angular.version.full;
            }
          },
          'Angular': function Angular() {
            if (window.ng) {
              var tags = document.querySelectorAll("[ng-version]");
              if (tags.length > 0) {
                return tags[0].getAttribute("ng-version");
              }
              return "Unknown";
            }
          },
          'Backbone.js': function BackboneJs() {
            if (window.Backbone) {
              return window.Backbone.VERSION;
            }
          },
          'React': function React() {
            var reactSelector = '[data-reactroot], [data-reactid]';
            if (!!document.querySelector(reactSelector)) {
              // React does not publish the version by default
              return "unknown";
            }
          },
          'Ember': function Ember() {
            if (window.Em && window.Em.VERSION) {
              return window.Em.VERSION;
            } else if (window.Ember && window.Ember.VERSION) {
              return window.Ember.VERSION;
            }
          },
          'jQuery': function (_jQuery) {
            function jQuery() {
              return _jQuery.apply(this, arguments);
            }

            jQuery.toString = function () {
              return _jQuery.toString();
            };

            return jQuery;
          }(function () {
            if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
              return jQuery.prototype.jquery;
            }
          }),
          'Polymer': function Polymer() {
            var version = getPolymerVersion();
            if (version) {
              return version;
            }
          },
          'LitElement': function LitElement() {
            var version = window.litElementVersions && window.litElementVersions[0];
            if (version) {
              return version;
            }
          },
          'LitHtml': function LitHtml() {
            var version = window.litHtmlVersions && window.litHtmlVersions[0];
            if (version) {
              return version;
            }
          },
          'Vue.js': function VueJs() {
            if (window.Vue) {
              return window.Vue.version;
            }
          }
        };
      }
    }, {
      key: 'getUsedVaadinElements',
      value: function getUsedVaadinElements(elements) {
        var version = getPolymerVersion();
        var elementClasses = void 0;
        // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
        // Check all locations calling the method getEntries() in
        // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
        // Currently it is only used by BootstrapHandler.
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: components classes are stored in window.Vaadin
          elementClasses = Object.keys(window.Vaadin).map(function (c) {
            return window.Vaadin[c];
          }).filter(function (c) {
            return c.is;
          });
        } else {
          // Polymer 3: components classes are stored in window.Vaadin.registrations
          elementClasses = window.Vaadin.registrations || [];
        }
        elementClasses.forEach(function (klass) {
          var version = klass.version ? klass.version : "0.0.0";
          elements[klass.is] = { version: version };
        });
      }
    }, {
      key: 'getUsedVaadinThemes',
      value: function getUsedVaadinThemes(themes) {
        ['Lumo', 'Material'].forEach(function (themeName) {
          var theme;
          var version = getPolymerVersion();
          if (version && version.indexOf('2') === 0) {
            // Polymer 2: themes are stored in window.Vaadin
            theme = window.Vaadin[themeName];
          } else {
            // Polymer 3: themes are stored in custom element registry
            theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
          }
          if (theme && theme.version) {
            themes[themeName] = { version: theme.version };
          }
        });
      }
    }, {
      key: 'getFrameworks',
      value: function getFrameworks(frameworks) {
        var detectors = this.frameworkVersionDetectors();
        Object.keys(detectors).forEach(function (framework) {
          var detector = detectors[framework];
          try {
            var version = detector();
            if (version) {
              frameworks[framework] = { version: version };
            }
          } catch (e) {}
        });
      }
    }, {
      key: 'gather',
      value: function gather(storage) {
        var storedStats = storage.read();
        var gatheredStats = {};
        var types = ["elements", "frameworks", "themes"];

        types.forEach(function (type) {
          gatheredStats[type] = {};
          if (!storedStats[type]) {
            storedStats[type] = {};
          }
        });

        var previousStats = JSON.stringify(storedStats);

        this.getUsedVaadinElements(gatheredStats.elements);
        this.getFrameworks(gatheredStats.frameworks);
        this.getUsedVaadinThemes(gatheredStats.themes);

        var now = this.now;
        types.forEach(function (type) {
          var keys = Object.keys(gatheredStats[type]);
          keys.forEach(function (key) {
            if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
              storedStats[type][key] = { firstUsed: now };
            }
            // Discards any previously logged version number
            storedStats[type][key].version = gatheredStats[type][key].version;
            storedStats[type][key].lastUsed = now;
          });
        });

        var newStats = JSON.stringify(storedStats);
        storage.write(newStats);
        if (newStats != previousStats && Object.keys(storedStats).length > 0) {
          this.logger.debug("New stats: " + newStats);
        }
      }
    }]);
    return StatisticsGatherer;
  }();

  var StatisticsStorage = function () {
    function StatisticsStorage(key) {
      classCallCheck(this, StatisticsStorage);

      this.key = key;
    }

    createClass(StatisticsStorage, [{
      key: 'read',
      value: function read() {
        var localStorageStatsString = localStorage.getItem(this.key);
        try {
          return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
        } catch (e) {
          return {};
        }
      }
    }, {
      key: 'write',
      value: function write(data) {
        localStorage.setItem(this.key, data);
      }
    }, {
      key: 'clear',
      value: function clear() {
        localStorage.removeItem(this.key);
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        var storedStats = this.read();
        var empty = true;
        Object.keys(storedStats).forEach(function (key) {
          if (Object.keys(storedStats[key]).length > 0) {
            empty = false;
          }
        });

        return empty;
      }
    }]);
    return StatisticsStorage;
  }();

  var StatisticsSender = function () {
    function StatisticsSender(url, logger) {
      classCallCheck(this, StatisticsSender);

      this.url = url;
      this.logger = logger;
    }

    createClass(StatisticsSender, [{
      key: 'send',
      value: function send(data, errorHandler) {
        var logger = this.logger;

        if (navigator.onLine === false) {
          logger.debug("Offline, can't send");
          errorHandler();
          return;
        }
        logger.debug("Sending data to " + this.url);

        var req = new XMLHttpRequest();
        req.withCredentials = true;
        req.addEventListener("load", function () {
          // Stats sent, nothing more to do
          logger.debug("Response: " + req.responseText);
        });
        req.addEventListener("error", function () {
          logger.debug("Send failed");
          errorHandler();
        });
        req.addEventListener("abort", function () {
          logger.debug("Send aborted");
          errorHandler();
        });
        req.open("POST", this.url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
      }
    }]);
    return StatisticsSender;
  }();

  var StatisticsLogger = function () {
    function StatisticsLogger(id) {
      classCallCheck(this, StatisticsLogger);

      this.id = id;
    }

    createClass(StatisticsLogger, [{
      key: '_isDebug',
      value: function _isDebug() {
        return localStorage.getItem("vaadin." + this.id + ".debug");
      }
    }, {
      key: 'debug',
      value: function debug(msg) {
        if (this._isDebug()) {
          console.info(this.id + ": " + msg);
        }
      }
    }]);
    return StatisticsLogger;
  }();

  var UsageStatistics = function () {
    function UsageStatistics() {
      classCallCheck(this, UsageStatistics);

      this.now = new Date();
      this.timeNow = this.now.getTime();
      this.gatherDelay = 10; // Delay between loading this file and gathering stats
      this.initialDelay = 24 * 60 * 60;

      this.logger = new StatisticsLogger("statistics");
      this.storage = new StatisticsStorage("vaadin.statistics.basket");
      this.gatherer = new StatisticsGatherer(this.logger);
      this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
    }

    createClass(UsageStatistics, [{
      key: 'maybeGatherAndSend',
      value: function maybeGatherAndSend() {
        var _this = this;

        if (localStorage.getItem(UsageStatistics.optOutKey)) {
          return;
        }
        this.gatherer.gather(this.storage);
        setTimeout(function () {
          _this.maybeSend();
        }, this.gatherDelay * 1000);
      }
    }, {
      key: 'lottery',
      value: function lottery() {
        return true;
      }
    }, {
      key: 'currentMonth',
      value: function currentMonth() {
        return this.now.getYear() * 12 + this.now.getMonth();
      }
    }, {
      key: 'maybeSend',
      value: function maybeSend() {
        var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
        var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

        if (!firstUse) {
          // Use a grace period to avoid interfering with tests, incognito mode etc
          firstUse = this.timeNow;
          localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
        }

        if (this.timeNow < firstUse + this.initialDelay * 1000) {
          this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
          return;
        }
        if (this.currentMonth() <= monthProcessed) {
          this.logger.debug("This month has already been processed");
          return;
        }
        localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
        // Use random sampling
        if (this.lottery()) {
          this.logger.debug("Congratulations, we have a winner!");
        } else {
          this.logger.debug("Sorry, no stats from you this time");
          return;
        }

        this.send();
      }
    }, {
      key: 'send',
      value: function send() {
        // Ensure we have the latest data
        this.gatherer.gather(this.storage);

        // Read, send and clean up
        var data = this.storage.read();
        data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
        data["usageStatisticsVersion"] = UsageStatistics.version;
        var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
        var self = this;
        this.sender.send(info + JSON.stringify(data), function () {
          // Revert the 'month processed' flag
          localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
        });
      }
    }], [{
      key: 'version',
      get: function get$1() {
        return '2.1.0';
      }
    }, {
      key: 'firstUseKey',
      get: function get$1() {
        return 'vaadin.statistics.firstuse';
      }
    }, {
      key: 'monthProcessedKey',
      get: function get$1() {
        return 'vaadin.statistics.monthProcessed';
      }
    }, {
      key: 'optOutKey',
      get: function get$1() {
        return 'vaadin.statistics.optout';
      }
    }]);
    return UsageStatistics;
  }();

  try {
    window.Vaadin = window.Vaadin || {};
    window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
    window.Vaadin.usageStatsChecker.maybeGatherAndSend();
  } catch (e) {
    // Intentionally ignored as this is not a problem in the app being developed
  }

  }());

    vaadin-dev-mode:end **/
  }

  const usageStatistics = function() {
    if (typeof runIfDevelopmentMode === 'function') {
      return runIfDevelopmentMode(maybeGatherAndSendStats);
    }
  };

  window.Vaadin = window.Vaadin || {};
  window.Vaadin.registrations = window.Vaadin.registrations || [];

  window.Vaadin.registrations.push({
    is: '@vaadin/router',
    version: '1.7.4',
  });

  usageStatistics();

  Router.NavigationTrigger = {POPSTATE, CLICK};

  class HomeComponent extends AbstractWebComponent {
    renderComponent() {
      return $$1`
      <h1>Home</h1>
      <hr />
      <a href="input">input</a><br />
      <a href="weekly">weekly</a>
    `;
    }

    static register() {
      if (!customElements.get("t11-home")) {
        customElements.define("t11-home", HomeComponent);
      }
    }
  }
  HomeComponent.register();

  function _typeof$2(obj) {
    "@babel/helpers - typeof";

    return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof$2(obj);
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var consoleLogger = {
    type: 'logger',
    log: function log(args) {
      this.output('log', args);
    },
    warn: function warn(args) {
      this.output('warn', args);
    },
    error: function error(args) {
      this.output('error', args);
    },
    output: function output(type, args) {
      if (console && console[type]) console[type].apply(console, args);
    }
  };

  var Logger = function () {
    function Logger(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck$1(this, Logger);

      this.init(concreteLogger, options);
    }

    _createClass$1(Logger, [{
      key: "init",
      value: function init(concreteLogger) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.prefix = options.prefix || 'i18next:';
        this.logger = concreteLogger || consoleLogger;
        this.options = options;
        this.debug = options.debug;
      }
    }, {
      key: "setDebug",
      value: function setDebug(bool) {
        this.debug = bool;
      }
    }, {
      key: "log",
      value: function log() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.forward(args, 'log', '', true);
      }
    }, {
      key: "warn",
      value: function warn() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.forward(args, 'warn', '', true);
      }
    }, {
      key: "error",
      value: function error() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return this.forward(args, 'error', '');
      }
    }, {
      key: "deprecate",
      value: function deprecate() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
      }
    }, {
      key: "forward",
      value: function forward(args, lvl, prefix, debugOnly) {
        if (debugOnly && !this.debug) return null;
        if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
        return this.logger[lvl](args);
      }
    }, {
      key: "create",
      value: function create(moduleName) {
        return new Logger(this.logger, _objectSpread(_objectSpread({}, {
          prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
        }), this.options));
      }
    }]);

    return Logger;
  }();

  var baseLogger = new Logger();

  var EventEmitter = function () {
    function EventEmitter() {
      _classCallCheck$1(this, EventEmitter);

      this.observers = {};
    }

    _createClass$1(EventEmitter, [{
      key: "on",
      value: function on(events, listener) {
        var _this = this;

        events.split(' ').forEach(function (event) {
          _this.observers[event] = _this.observers[event] || [];

          _this.observers[event].push(listener);
        });
        return this;
      }
    }, {
      key: "off",
      value: function off(event, listener) {
        if (!this.observers[event]) return;

        if (!listener) {
          delete this.observers[event];
          return;
        }

        this.observers[event] = this.observers[event].filter(function (l) {
          return l !== listener;
        });
      }
    }, {
      key: "emit",
      value: function emit(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (this.observers[event]) {
          var cloned = [].concat(this.observers[event]);
          cloned.forEach(function (observer) {
            observer.apply(void 0, args);
          });
        }

        if (this.observers['*']) {
          var _cloned = [].concat(this.observers['*']);

          _cloned.forEach(function (observer) {
            observer.apply(observer, [event].concat(args));
          });
        }
      }
    }]);

    return EventEmitter;
  }();

  function defer() {
    var res;
    var rej;
    var promise = new Promise(function (resolve, reject) {
      res = resolve;
      rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
  }
  function makeString(object) {
    if (object == null) return '';
    return '' + object;
  }
  function copy(a, s, t) {
    a.forEach(function (m) {
      if (s[m]) t[m] = s[m];
    });
  }

  function getLastOfPath(object, path, Empty) {
    function cleanKey(key) {
      return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
    }

    function canNotTraverseDeeper() {
      return !object || typeof object === 'string';
    }

    var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

    while (stack.length > 1) {
      if (canNotTraverseDeeper()) return {};
      var key = cleanKey(stack.shift());
      if (!object[key] && Empty) object[key] = new Empty();

      if (Object.prototype.hasOwnProperty.call(object, key)) {
        object = object[key];
      } else {
        object = {};
      }
    }

    if (canNotTraverseDeeper()) return {};
    return {
      obj: object,
      k: cleanKey(stack.shift())
    };
  }

  function setPath(object, path, newValue) {
    var _getLastOfPath = getLastOfPath(object, path, Object),
        obj = _getLastOfPath.obj,
        k = _getLastOfPath.k;

    obj[k] = newValue;
  }
  function pushPath(object, path, newValue, concat) {
    var _getLastOfPath2 = getLastOfPath(object, path, Object),
        obj = _getLastOfPath2.obj,
        k = _getLastOfPath2.k;

    obj[k] = obj[k] || [];
    if (concat) obj[k] = obj[k].concat(newValue);
    if (!concat) obj[k].push(newValue);
  }
  function getPath(object, path) {
    var _getLastOfPath3 = getLastOfPath(object, path),
        obj = _getLastOfPath3.obj,
        k = _getLastOfPath3.k;

    if (!obj) return undefined;
    return obj[k];
  }
  function getPathWithDefaults(data, defaultData, key) {
    var value = getPath(data, key);

    if (value !== undefined) {
      return value;
    }

    return getPath(defaultData, key);
  }
  function deepExtend(target, source, overwrite) {
    for (var prop in source) {
      if (prop !== '__proto__' && prop !== 'constructor') {
        if (prop in target) {
          if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
            if (overwrite) target[prop] = source[prop];
          } else {
            deepExtend(target[prop], source[prop], overwrite);
          }
        } else {
          target[prop] = source[prop];
        }
      }
    }

    return target;
  }
  function regexEscape(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }
  var _entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };
  function escape(data) {
    if (typeof data === 'string') {
      return data.replace(/[&<>"'\/]/g, function (s) {
        return _entityMap[s];
      });
    }

    return data;
  }
  var isIE10 = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
  var chars = [' ', ',', '?', '!', ';'];
  function looksLikeObjectPath(key, nsSeparator, keySeparator) {
    nsSeparator = nsSeparator || '';
    keySeparator = keySeparator || '';
    var possibleChars = chars.filter(function (c) {
      return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
    });
    if (possibleChars.length === 0) return true;
    var r = new RegExp("(".concat(possibleChars.map(function (c) {
      return c === '?' ? '\\?' : c;
    }).join('|'), ")"));
    var matched = !r.test(key);

    if (!matched) {
      var ki = key.indexOf(keySeparator);

      if (ki > 0 && !r.test(key.substring(0, ki))) {
        matched = true;
      }
    }

    return matched;
  }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function deepFind(obj, path) {
    var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    if (!obj) return undefined;
    if (obj[path]) return obj[path];
    var paths = path.split(keySeparator);
    var current = obj;

    for (var i = 0; i < paths.length; ++i) {
      if (!current) return undefined;

      if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
        return undefined;
      }

      if (current[paths[i]] === undefined) {
        var j = 2;
        var p = paths.slice(i, i + j).join(keySeparator);
        var mix = current[p];

        while (mix === undefined && paths.length > i + j) {
          j++;
          p = paths.slice(i, i + j).join(keySeparator);
          mix = current[p];
        }

        if (mix === undefined) return undefined;
        if (typeof mix === 'string') return mix;
        if (p && typeof mix[p] === 'string') return mix[p];
        var joinedPath = paths.slice(i + j).join(keySeparator);
        if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
        return undefined;
      }

      current = current[paths[i]];
    }

    return current;
  }

  var ResourceStore = function (_EventEmitter) {
    _inherits(ResourceStore, _EventEmitter);

    var _super = _createSuper(ResourceStore);

    function ResourceStore(data) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        ns: ['translation'],
        defaultNS: 'translation'
      };

      _classCallCheck$1(this, ResourceStore);

      _this = _super.call(this);

      if (isIE10) {
        EventEmitter.call(_assertThisInitialized(_this));
      }

      _this.data = data || {};
      _this.options = options;

      if (_this.options.keySeparator === undefined) {
        _this.options.keySeparator = '.';
      }

      if (_this.options.ignoreJSONStructure === undefined) {
        _this.options.ignoreJSONStructure = true;
      }

      return _this;
    }

    _createClass$1(ResourceStore, [{
      key: "addNamespaces",
      value: function addNamespaces(ns) {
        if (this.options.ns.indexOf(ns) < 0) {
          this.options.ns.push(ns);
        }
      }
    }, {
      key: "removeNamespaces",
      value: function removeNamespaces(ns) {
        var index = this.options.ns.indexOf(ns);

        if (index > -1) {
          this.options.ns.splice(index, 1);
        }
      }
    }, {
      key: "getResource",
      value: function getResource(lng, ns, key) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
        var path = [lng, ns];
        if (key && typeof key !== 'string') path = path.concat(key);
        if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

        if (lng.indexOf('.') > -1) {
          path = lng.split('.');
        }

        var result = getPath(this.data, path);
        if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
        return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
      }
    }, {
      key: "addResource",
      value: function addResource(lng, ns, key, value) {
        var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
          silent: false
        };
        var keySeparator = this.options.keySeparator;
        if (keySeparator === undefined) keySeparator = '.';
        var path = [lng, ns];
        if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

        if (lng.indexOf('.') > -1) {
          path = lng.split('.');
          value = ns;
          ns = path[1];
        }

        this.addNamespaces(ns);
        setPath(this.data, path, value);
        if (!options.silent) this.emit('added', lng, ns, key, value);
      }
    }, {
      key: "addResources",
      value: function addResources(lng, ns, resources) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
          silent: false
        };

        for (var m in resources) {
          if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
            silent: true
          });
        }

        if (!options.silent) this.emit('added', lng, ns, resources);
      }
    }, {
      key: "addResourceBundle",
      value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
        var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
          silent: false
        };
        var path = [lng, ns];

        if (lng.indexOf('.') > -1) {
          path = lng.split('.');
          deep = resources;
          resources = ns;
          ns = path[1];
        }

        this.addNamespaces(ns);
        var pack = getPath(this.data, path) || {};

        if (deep) {
          deepExtend(pack, resources, overwrite);
        } else {
          pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
        }

        setPath(this.data, path, pack);
        if (!options.silent) this.emit('added', lng, ns, resources);
      }
    }, {
      key: "removeResourceBundle",
      value: function removeResourceBundle(lng, ns) {
        if (this.hasResourceBundle(lng, ns)) {
          delete this.data[lng][ns];
        }

        this.removeNamespaces(ns);
        this.emit('removed', lng, ns);
      }
    }, {
      key: "hasResourceBundle",
      value: function hasResourceBundle(lng, ns) {
        return this.getResource(lng, ns) !== undefined;
      }
    }, {
      key: "getResourceBundle",
      value: function getResourceBundle(lng, ns) {
        if (!ns) ns = this.options.defaultNS;
        if (this.options.compatibilityAPI === 'v1') return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
        return this.getResource(lng, ns);
      }
    }, {
      key: "getDataByLanguage",
      value: function getDataByLanguage(lng) {
        return this.data[lng];
      }
    }, {
      key: "hasLanguageSomeTranslations",
      value: function hasLanguageSomeTranslations(lng) {
        var data = this.getDataByLanguage(lng);
        var n = data && Object.keys(data) || [];
        return !!n.find(function (v) {
          return data[v] && Object.keys(data[v]).length > 0;
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.data;
      }
    }]);

    return ResourceStore;
  }(EventEmitter);

  var postProcessor = {
    processors: {},
    addPostProcessor: function addPostProcessor(module) {
      this.processors[module.name] = module;
    },
    handle: function handle(processors, value, key, options, translator) {
      var _this = this;

      processors.forEach(function (processor) {
        if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
      });
      return value;
    }
  };

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var checkedLoadedFor = {};

  var Translator = function (_EventEmitter) {
    _inherits(Translator, _EventEmitter);

    var _super = _createSuper$1(Translator);

    function Translator(services) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck$1(this, Translator);

      _this = _super.call(this);

      if (isIE10) {
        EventEmitter.call(_assertThisInitialized(_this));
      }

      copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
      _this.options = options;

      if (_this.options.keySeparator === undefined) {
        _this.options.keySeparator = '.';
      }

      _this.logger = baseLogger.create('translator');
      return _this;
    }

    _createClass$1(Translator, [{
      key: "changeLanguage",
      value: function changeLanguage(lng) {
        if (lng) this.language = lng;
      }
    }, {
      key: "exists",
      value: function exists(key) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          interpolation: {}
        };

        if (key === undefined || key === null) {
          return false;
        }

        var resolved = this.resolve(key, options);
        return resolved && resolved.res !== undefined;
      }
    }, {
      key: "extractFromKey",
      value: function extractFromKey(key, options) {
        var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === undefined) nsSeparator = ':';
        var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        var namespaces = options.ns || this.options.defaultNS || [];
        var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
        var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);

        if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
          var m = key.match(this.interpolator.nestingRegexp);

          if (m && m.length > 0) {
            return {
              key: key,
              namespaces: namespaces
            };
          }

          var parts = key.split(nsSeparator);
          if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
          key = parts.join(keySeparator);
        }

        if (typeof namespaces === 'string') namespaces = [namespaces];
        return {
          key: key,
          namespaces: namespaces
        };
      }
    }, {
      key: "translate",
      value: function translate(keys, options, lastKey) {
        var _this2 = this;

        if (_typeof$2(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
          options = this.options.overloadTranslationOptionHandler(arguments);
        }

        if (!options) options = {};
        if (keys === undefined || keys === null) return '';
        if (!Array.isArray(keys)) keys = [String(keys)];
        var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

        var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
            key = _this$extractFromKey.key,
            namespaces = _this$extractFromKey.namespaces;

        var namespace = namespaces[namespaces.length - 1];
        var lng = options.lng || this.language;
        var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

        if (lng && lng.toLowerCase() === 'cimode') {
          if (appendNamespaceToCIMode) {
            var nsSeparator = options.nsSeparator || this.options.nsSeparator;
            return namespace + nsSeparator + key;
          }

          return key;
        }

        var resolved = this.resolve(keys, options);
        var res = resolved && resolved.res;
        var resUsedKey = resolved && resolved.usedKey || key;
        var resExactUsedKey = resolved && resolved.exactUsedKey || key;
        var resType = Object.prototype.toString.apply(res);
        var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
        var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
        var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
        var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

        if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
          if (!options.returnObjects && !this.options.returnObjects) {
            if (!this.options.returnedObjectHandler) {
              this.logger.warn('accessing an object - but returnObjects options is not enabled!');
            }

            return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
              ns: namespaces
            })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
          }

          if (keySeparator) {
            var resTypeIsArray = resType === '[object Array]';
            var copy = resTypeIsArray ? [] : {};
            var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

            for (var m in res) {
              if (Object.prototype.hasOwnProperty.call(res, m)) {
                var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
                copy[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                  joinArrays: false,
                  ns: namespaces
                }));
                if (copy[m] === deepKey) copy[m] = res[m];
              }
            }

            res = copy;
          }
        } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
          res = res.join(joinArrays);
          if (res) res = this.extendTranslation(res, keys, options, lastKey);
        } else {
          var usedDefault = false;
          var usedKey = false;
          var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
          var hasDefaultValue = Translator.hasDefaultValue(options);
          var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
          var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;

          if (!this.isValidLookup(res) && hasDefaultValue) {
            usedDefault = true;
            res = defaultValue;
          }

          if (!this.isValidLookup(res)) {
            usedKey = true;
            res = key;
          }

          var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
          var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
          var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;

          if (usedKey || usedDefault || updateMissing) {
            this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);

            if (keySeparator) {
              var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
                keySeparator: false
              }));
              if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
            }

            var lngs = [];
            var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

            if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
              for (var i = 0; i < fallbackLngs.length; i++) {
                lngs.push(fallbackLngs[i]);
              }
            } else if (this.options.saveMissingTo === 'all') {
              lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
            } else {
              lngs.push(options.lng || this.language);
            }

            var send = function send(l, k, specificDefaultValue) {
              var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;

              if (_this2.options.missingKeyHandler) {
                _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
              } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
              }

              _this2.emit('missingKey', l, namespace, k, res);
            };

            if (this.options.saveMissing) {
              if (this.options.saveMissingPlurals && needsPluralHandling) {
                lngs.forEach(function (language) {
                  _this2.pluralResolver.getSuffixes(language).forEach(function (suffix) {
                    send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                  });
                });
              } else {
                send(lngs, key, defaultValue);
              }
            }
          }

          res = this.extendTranslation(res, keys, options, resolved, lastKey);
          if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
          if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
        }

        return res;
      }
    }, {
      key: "extendTranslation",
      value: function extendTranslation(res, key, options, resolved, lastKey) {
        var _this3 = this;

        if (this.i18nFormat && this.i18nFormat.parse) {
          res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
            resolved: resolved
          });
        } else if (!options.skipInterpolation) {
          if (options.interpolation) this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
            interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
          }));
          var skipOnVariables = typeof res === 'string' && (options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables);
          var nestBef;

          if (skipOnVariables) {
            var nb = res.match(this.interpolator.nestingRegexp);
            nestBef = nb && nb.length;
          }

          var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
          if (this.options.interpolation.defaultVariables) data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
          res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

          if (skipOnVariables) {
            var na = res.match(this.interpolator.nestingRegexp);
            var nestAft = na && na.length;
            if (nestBef < nestAft) options.nest = false;
          }

          if (options.nest !== false) res = this.interpolator.nest(res, function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            if (lastKey && lastKey[0] === args[0] && !options.context) {
              _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

              return null;
            }

            return _this3.translate.apply(_this3, args.concat([key]));
          }, options);
          if (options.interpolation) this.interpolator.reset();
        }

        var postProcess = options.postProcess || this.options.postProcess;
        var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

        if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
          res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
            i18nResolved: resolved
          }, options) : options, this);
        }

        return res;
      }
    }, {
      key: "resolve",
      value: function resolve(keys) {
        var _this4 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var found;
        var usedKey;
        var exactUsedKey;
        var usedLng;
        var usedNS;
        if (typeof keys === 'string') keys = [keys];
        keys.forEach(function (k) {
          if (_this4.isValidLookup(found)) return;

          var extracted = _this4.extractFromKey(k, options);

          var key = extracted.key;
          usedKey = key;
          var namespaces = extracted.namespaces;
          if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
          var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

          var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();

          var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
          var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
          namespaces.forEach(function (ns) {
            if (_this4.isValidLookup(found)) return;
            usedNS = ns;

            if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
              checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

              _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
            }

            codes.forEach(function (code) {
              if (_this4.isValidLookup(found)) return;
              usedLng = code;
              var finalKeys = [key];

              if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
              } else {
                var pluralSuffix;
                if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
                var zeroSuffix = '_zero';

                if (needsPluralHandling) {
                  finalKeys.push(key + pluralSuffix);

                  if (needsZeroSuffixLookup) {
                    finalKeys.push(key + zeroSuffix);
                  }
                }

                if (needsContextHandling) {
                  var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                  finalKeys.push(contextKey);

                  if (needsPluralHandling) {
                    finalKeys.push(contextKey + pluralSuffix);

                    if (needsZeroSuffixLookup) {
                      finalKeys.push(contextKey + zeroSuffix);
                    }
                  }
                }
              }

              var possibleKey;

              while (possibleKey = finalKeys.pop()) {
                if (!_this4.isValidLookup(found)) {
                  exactUsedKey = possibleKey;
                  found = _this4.getResource(code, ns, possibleKey, options);
                }
              }
            });
          });
        });
        return {
          res: found,
          usedKey: usedKey,
          exactUsedKey: exactUsedKey,
          usedLng: usedLng,
          usedNS: usedNS
        };
      }
    }, {
      key: "isValidLookup",
      value: function isValidLookup(res) {
        return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
      }
    }, {
      key: "getResource",
      value: function getResource(code, ns, key) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
        return this.resourceStore.getResource(code, ns, key, options);
      }
    }], [{
      key: "hasDefaultValue",
      value: function hasDefaultValue(options) {
        var prefix = 'defaultValue';

        for (var option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
            return true;
          }
        }

        return false;
      }
    }]);

    return Translator;
  }(EventEmitter);

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var LanguageUtil = function () {
    function LanguageUtil(options) {
      _classCallCheck$1(this, LanguageUtil);

      this.options = options;
      this.supportedLngs = this.options.supportedLngs || false;
      this.logger = baseLogger.create('languageUtils');
    }

    _createClass$1(LanguageUtil, [{
      key: "getScriptPartFromCode",
      value: function getScriptPartFromCode(code) {
        if (!code || code.indexOf('-') < 0) return null;
        var p = code.split('-');
        if (p.length === 2) return null;
        p.pop();
        if (p[p.length - 1].toLowerCase() === 'x') return null;
        return this.formatLanguageCode(p.join('-'));
      }
    }, {
      key: "getLanguagePartFromCode",
      value: function getLanguagePartFromCode(code) {
        if (!code || code.indexOf('-') < 0) return code;
        var p = code.split('-');
        return this.formatLanguageCode(p[0]);
      }
    }, {
      key: "formatLanguageCode",
      value: function formatLanguageCode(code) {
        if (typeof code === 'string' && code.indexOf('-') > -1) {
          var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
          var p = code.split('-');

          if (this.options.lowerCaseLng) {
            p = p.map(function (part) {
              return part.toLowerCase();
            });
          } else if (p.length === 2) {
            p[0] = p[0].toLowerCase();
            p[1] = p[1].toUpperCase();
            if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          } else if (p.length === 3) {
            p[0] = p[0].toLowerCase();
            if (p[1].length === 2) p[1] = p[1].toUpperCase();
            if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
            if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
            if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
          }

          return p.join('-');
        }

        return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
      }
    }, {
      key: "isSupportedCode",
      value: function isSupportedCode(code) {
        if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
          code = this.getLanguagePartFromCode(code);
        }

        return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
      }
    }, {
      key: "getBestMatchFromCodes",
      value: function getBestMatchFromCodes(codes) {
        var _this = this;

        if (!codes) return null;
        var found;
        codes.forEach(function (code) {
          if (found) return;

          var cleanedLng = _this.formatLanguageCode(code);

          if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
        });

        if (!found && this.options.supportedLngs) {
          codes.forEach(function (code) {
            if (found) return;

            var lngOnly = _this.getLanguagePartFromCode(code);

            if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
            found = _this.options.supportedLngs.find(function (supportedLng) {
              if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
            });
          });
        }

        if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
        return found;
      }
    }, {
      key: "getFallbackCodes",
      value: function getFallbackCodes(fallbacks, code) {
        if (!fallbacks) return [];
        if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
        if (typeof fallbacks === 'string') fallbacks = [fallbacks];
        if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
        if (!code) return fallbacks["default"] || [];
        var found = fallbacks[code];
        if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
        if (!found) found = fallbacks[this.formatLanguageCode(code)];
        if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
        if (!found) found = fallbacks["default"];
        return found || [];
      }
    }, {
      key: "toResolveHierarchy",
      value: function toResolveHierarchy(code, fallbackCode) {
        var _this2 = this;

        var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
        var codes = [];

        var addCode = function addCode(c) {
          if (!c) return;

          if (_this2.isSupportedCode(c)) {
            codes.push(c);
          } else {
            _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
          }
        };

        if (typeof code === 'string' && code.indexOf('-') > -1) {
          if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
          if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
          if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
        } else if (typeof code === 'string') {
          addCode(this.formatLanguageCode(code));
        }

        fallbackCodes.forEach(function (fc) {
          if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
        });
        return codes;
      }
    }]);

    return LanguageUtil;
  }();

  var sets = [{
    lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
    nr: [1, 2],
    fc: 1
  }, {
    lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
    nr: [1, 2],
    fc: 2
  }, {
    lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
    nr: [1],
    fc: 3
  }, {
    lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
    nr: [1, 2, 5],
    fc: 4
  }, {
    lngs: ['ar'],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
  }, {
    lngs: ['cs', 'sk'],
    nr: [1, 2, 5],
    fc: 6
  }, {
    lngs: ['csb', 'pl'],
    nr: [1, 2, 5],
    fc: 7
  }, {
    lngs: ['cy'],
    nr: [1, 2, 3, 8],
    fc: 8
  }, {
    lngs: ['fr'],
    nr: [1, 2],
    fc: 9
  }, {
    lngs: ['ga'],
    nr: [1, 2, 3, 7, 11],
    fc: 10
  }, {
    lngs: ['gd'],
    nr: [1, 2, 3, 20],
    fc: 11
  }, {
    lngs: ['is'],
    nr: [1, 2],
    fc: 12
  }, {
    lngs: ['jv'],
    nr: [0, 1],
    fc: 13
  }, {
    lngs: ['kw'],
    nr: [1, 2, 3, 4],
    fc: 14
  }, {
    lngs: ['lt'],
    nr: [1, 2, 10],
    fc: 15
  }, {
    lngs: ['lv'],
    nr: [1, 2, 0],
    fc: 16
  }, {
    lngs: ['mk'],
    nr: [1, 2],
    fc: 17
  }, {
    lngs: ['mnk'],
    nr: [0, 1, 2],
    fc: 18
  }, {
    lngs: ['mt'],
    nr: [1, 2, 11, 20],
    fc: 19
  }, {
    lngs: ['or'],
    nr: [2, 1],
    fc: 2
  }, {
    lngs: ['ro'],
    nr: [1, 2, 20],
    fc: 20
  }, {
    lngs: ['sl'],
    nr: [5, 1, 2, 3],
    fc: 21
  }, {
    lngs: ['he', 'iw'],
    nr: [1, 2, 20, 21],
    fc: 22
  }];
  var _rulesPluralsTypes = {
    1: function _(n) {
      return Number(n > 1);
    },
    2: function _(n) {
      return Number(n != 1);
    },
    3: function _(n) {
      return 0;
    },
    4: function _(n) {
      return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    5: function _(n) {
      return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
    },
    6: function _(n) {
      return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
    },
    7: function _(n) {
      return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    8: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
    },
    9: function _(n) {
      return Number(n >= 2);
    },
    10: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
    },
    11: function _(n) {
      return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
    },
    12: function _(n) {
      return Number(n % 10 != 1 || n % 100 == 11);
    },
    13: function _(n) {
      return Number(n !== 0);
    },
    14: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
    },
    15: function _(n) {
      return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    16: function _(n) {
      return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
    },
    17: function _(n) {
      return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
    },
    18: function _(n) {
      return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
    },
    19: function _(n) {
      return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
    },
    20: function _(n) {
      return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
    },
    21: function _(n) {
      return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
    },
    22: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
    }
  };
  var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
  var suffixesOrder = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
  };

  function createRules() {
    var rules = {};
    sets.forEach(function (set) {
      set.lngs.forEach(function (l) {
        rules[l] = {
          numbers: set.nr,
          plurals: _rulesPluralsTypes[set.fc]
        };
      });
    });
    return rules;
  }

  var PluralResolver = function () {
    function PluralResolver(languageUtils) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck$1(this, PluralResolver);

      this.languageUtils = languageUtils;
      this.options = options;
      this.logger = baseLogger.create('pluralResolver');

      if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
        this.options.compatibilityJSON = 'v3';
        this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
      }

      this.rules = createRules();
    }

    _createClass$1(PluralResolver, [{
      key: "addRule",
      value: function addRule(lng, obj) {
        this.rules[lng] = obj;
      }
    }, {
      key: "getRule",
      value: function getRule(code) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (this.shouldUseIntlApi()) {
          try {
            return new Intl.PluralRules(code, {
              type: options.ordinal ? 'ordinal' : 'cardinal'
            });
          } catch (_unused) {
            return;
          }
        }

        return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
      }
    }, {
      key: "needsPlural",
      value: function needsPlural(code) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var rule = this.getRule(code, options);

        if (this.shouldUseIntlApi()) {
          return rule && rule.resolvedOptions().pluralCategories.length > 1;
        }

        return rule && rule.numbers.length > 1;
      }
    }, {
      key: "getPluralFormsOfKey",
      value: function getPluralFormsOfKey(code, key) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.getSuffixes(code, options).map(function (suffix) {
          return "".concat(key).concat(suffix);
        });
      }
    }, {
      key: "getSuffixes",
      value: function getSuffixes(code) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var rule = this.getRule(code, options);

        if (!rule) {
          return [];
        }

        if (this.shouldUseIntlApi()) {
          return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
            return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
          }).map(function (pluralCategory) {
            return "".concat(_this.options.prepend).concat(pluralCategory);
          });
        }

        return rule.numbers.map(function (number) {
          return _this.getSuffix(code, number, options);
        });
      }
    }, {
      key: "getSuffix",
      value: function getSuffix(code, count) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var rule = this.getRule(code, options);

        if (rule) {
          if (this.shouldUseIntlApi()) {
            return "".concat(this.options.prepend).concat(rule.select(count));
          }

          return this.getSuffixRetroCompatible(rule, count);
        }

        this.logger.warn("no plural rule found for: ".concat(code));
        return '';
      }
    }, {
      key: "getSuffixRetroCompatible",
      value: function getSuffixRetroCompatible(rule, count) {
        var _this2 = this;

        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        };

        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }
    }, {
      key: "shouldUseIntlApi",
      value: function shouldUseIntlApi() {
        return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
      }
    }]);

    return PluralResolver;
  }();

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var Interpolator = function () {
    function Interpolator() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck$1(this, Interpolator);

      this.logger = baseLogger.create('interpolator');
      this.options = options;

      this.format = options.interpolation && options.interpolation.format || function (value) {
        return value;
      };

      this.init(options);
    }

    _createClass$1(Interpolator, [{
      key: "init",
      value: function init() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!options.interpolation) options.interpolation = {
          escapeValue: true
        };
        var iOpts = options.interpolation;
        this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
        this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
        this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
        this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
        this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
        this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
        this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
        this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
        this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
        this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
        this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
        this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
        this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
        this.resetRegExp();
      }
    }, {
      key: "reset",
      value: function reset() {
        if (this.options) this.init(this.options);
      }
    }, {
      key: "resetRegExp",
      value: function resetRegExp() {
        var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
        this.regexp = new RegExp(regexpStr, 'g');
        var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
        this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
        var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
        this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
      }
    }, {
      key: "interpolate",
      value: function interpolate(str, data, lng, options) {
        var _this = this;

        var match;
        var value;
        var replaces;
        var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

        function regexSafe(val) {
          return val.replace(/\$/g, '$$$$');
        }

        var handleFormat = function handleFormat(key) {
          if (key.indexOf(_this.formatSeparator) < 0) {
            var path = getPathWithDefaults(data, defaultData, key);
            return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
              interpolationkey: key
            })) : path;
          }

          var p = key.split(_this.formatSeparator);
          var k = p.shift().trim();
          var f = p.join(_this.formatSeparator).trim();
          return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: k
          }));
        };

        this.resetRegExp();
        var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
        var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
        var todos = [{
          regex: this.regexpUnescape,
          safeValue: function safeValue(val) {
            return regexSafe(val);
          }
        }, {
          regex: this.regexp,
          safeValue: function safeValue(val) {
            return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
          }
        }];
        todos.forEach(function (todo) {
          replaces = 0;

          while (match = todo.regex.exec(str)) {
            value = handleFormat(match[1].trim());

            if (value === undefined) {
              if (typeof missingInterpolationHandler === 'function') {
                var temp = missingInterpolationHandler(str, match, options);
                value = typeof temp === 'string' ? temp : '';
              } else if (skipOnVariables) {
                value = match[0];
                continue;
              } else {
                _this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));

                value = '';
              }
            } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
              value = makeString(value);
            }

            var safeValue = todo.safeValue(value);
            str = str.replace(match[0], safeValue);

            if (skipOnVariables) {
              todo.regex.lastIndex += safeValue.length;
              todo.regex.lastIndex -= match[0].length;
            } else {
              todo.regex.lastIndex = 0;
            }

            replaces++;

            if (replaces >= _this.maxReplaces) {
              break;
            }
          }
        });
        return str;
      }
    }, {
      key: "nest",
      value: function nest(str, fc) {
        var _this2 = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var match;
        var value;

        var clonedOptions = _objectSpread$3({}, options);

        clonedOptions.applyPostProcessor = false;
        delete clonedOptions.defaultValue;

        function handleHasOptions(key, inheritedOptions) {
          var sep = this.nestingOptionsSeparator;
          if (key.indexOf(sep) < 0) return key;
          var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
          var optionsString = "{".concat(c[1]);
          key = c[0];
          optionsString = this.interpolate(optionsString, clonedOptions);
          optionsString = optionsString.replace(/'/g, '"');

          try {
            clonedOptions = JSON.parse(optionsString);
            if (inheritedOptions) clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
          } catch (e) {
            this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
            return "".concat(key).concat(sep).concat(optionsString);
          }

          delete clonedOptions.defaultValue;
          return key;
        }

        while (match = this.nestingRegexp.exec(str)) {
          var formatters = [];
          var doReduce = false;

          if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
            var r = match[1].split(this.formatSeparator).map(function (elem) {
              return elem.trim();
            });
            match[1] = r.shift();
            formatters = r;
            doReduce = true;
          }

          value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
          if (value && match[0] === str && typeof value !== 'string') return value;
          if (typeof value !== 'string') value = makeString(value);

          if (!value) {
            this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
            value = '';
          }

          if (doReduce) {
            value = formatters.reduce(function (v, f) {
              return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
                interpolationkey: match[1].trim()
              }));
            }, value.trim());
          }

          str = str.replace(match[0], value);
          this.regexp.lastIndex = 0;
        }

        return str;
      }
    }]);

    return Interpolator;
  }();

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function parseFormatStr(formatStr) {
    var formatName = formatStr.toLowerCase().trim();
    var formatOptions = {};

    if (formatStr.indexOf('(') > -1) {
      var p = formatStr.split('(');
      formatName = p[0].toLowerCase().trim();
      var optStr = p[1].substring(0, p[1].length - 1);

      if (formatName === 'currency' && optStr.indexOf(':') < 0) {
        if (!formatOptions.currency) formatOptions.currency = optStr.trim();
      } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
        if (!formatOptions.range) formatOptions.range = optStr.trim();
      } else {
        var opts = optStr.split(';');
        opts.forEach(function (opt) {
          if (!opt) return;

          var _opt$split = opt.split(':'),
              _opt$split2 = _toArray(_opt$split),
              key = _opt$split2[0],
              rest = _opt$split2.slice(1);

          var val = rest.join(':');
          if (val.trim() === 'false') formatOptions[key.trim()] = false;
          if (val.trim() === 'true') formatOptions[key.trim()] = true;
          if (!isNaN(val.trim())) formatOptions[key.trim()] = parseInt(val.trim(), 10);
          if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val.trim();
        });
      }
    }

    return {
      formatName: formatName,
      formatOptions: formatOptions
    };
  }

  var Formatter = function () {
    function Formatter() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck$1(this, Formatter);

      this.logger = baseLogger.create('formatter');
      this.options = options;
      this.formats = {
        number: function number(val, lng, options) {
          return new Intl.NumberFormat(lng, options).format(val);
        },
        currency: function currency(val, lng, options) {
          return new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options), {}, {
            style: 'currency'
          })).format(val);
        },
        datetime: function datetime(val, lng, options) {
          return new Intl.DateTimeFormat(lng, _objectSpread$4({}, options)).format(val);
        },
        relativetime: function relativetime(val, lng, options) {
          return new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options)).format(val, options.range || 'day');
        },
        list: function list(val, lng, options) {
          return new Intl.ListFormat(lng, _objectSpread$4({}, options)).format(val);
        }
      };
      this.init(options);
    }

    _createClass$1(Formatter, [{
      key: "init",
      value: function init(services) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          interpolation: {}
        };
        var iOpts = options.interpolation;
        this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      }
    }, {
      key: "add",
      value: function add(name, fc) {
        this.formats[name] = fc;
      }
    }, {
      key: "format",
      value: function format(value, _format, lng, options) {
        var _this = this;

        var formats = _format.split(this.formatSeparator);

        var result = formats.reduce(function (mem, f) {
          var _parseFormatStr = parseFormatStr(f),
              formatName = _parseFormatStr.formatName,
              formatOptions = _parseFormatStr.formatOptions;

          if (_this.formats[formatName]) {
            var formatted = mem;

            try {
              var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
              var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
              formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
            } catch (error) {
              _this.logger.warn(error);
            }

            return formatted;
          } else {
            _this.logger.warn("there was no format function for ".concat(formatName));
          }

          return mem;
        }, value);
        return result;
      }
    }]);

    return Formatter;
  }();

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function remove(arr, what) {
    var found = arr.indexOf(what);

    while (found !== -1) {
      arr.splice(found, 1);
      found = arr.indexOf(what);
    }
  }

  var Connector = function (_EventEmitter) {
    _inherits(Connector, _EventEmitter);

    var _super = _createSuper$2(Connector);

    function Connector(backend, store, services) {
      var _this;

      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck$1(this, Connector);

      _this = _super.call(this);

      if (isIE10) {
        EventEmitter.call(_assertThisInitialized(_this));
      }

      _this.backend = backend;
      _this.store = store;
      _this.services = services;
      _this.languageUtils = services.languageUtils;
      _this.options = options;
      _this.logger = baseLogger.create('backendConnector');
      _this.state = {};
      _this.queue = [];

      if (_this.backend && _this.backend.init) {
        _this.backend.init(services, options.backend, options);
      }

      return _this;
    }

    _createClass$1(Connector, [{
      key: "queueLoad",
      value: function queueLoad(languages, namespaces, options, callback) {
        var _this2 = this;

        var toLoad = [];
        var pending = [];
        var toLoadLanguages = [];
        var toLoadNamespaces = [];
        languages.forEach(function (lng) {
          var hasAllNamespaces = true;
          namespaces.forEach(function (ns) {
            var name = "".concat(lng, "|").concat(ns);

            if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
              _this2.state[name] = 2;
            } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
              if (pending.indexOf(name) < 0) pending.push(name);
            } else {
              _this2.state[name] = 1;
              hasAllNamespaces = false;
              if (pending.indexOf(name) < 0) pending.push(name);
              if (toLoad.indexOf(name) < 0) toLoad.push(name);
              if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
            }
          });
          if (!hasAllNamespaces) toLoadLanguages.push(lng);
        });

        if (toLoad.length || pending.length) {
          this.queue.push({
            pending: pending,
            loaded: {},
            errors: [],
            callback: callback
          });
        }

        return {
          toLoad: toLoad,
          pending: pending,
          toLoadLanguages: toLoadLanguages,
          toLoadNamespaces: toLoadNamespaces
        };
      }
    }, {
      key: "loaded",
      value: function loaded(name, err, data) {
        var s = name.split('|');
        var lng = s[0];
        var ns = s[1];
        if (err) this.emit('failedLoading', lng, ns, err);

        if (data) {
          this.store.addResourceBundle(lng, ns, data);
        }

        this.state[name] = err ? -1 : 2;
        var loaded = {};
        this.queue.forEach(function (q) {
          pushPath(q.loaded, [lng], ns);
          remove(q.pending, name);
          if (err) q.errors.push(err);

          if (q.pending.length === 0 && !q.done) {
            Object.keys(q.loaded).forEach(function (l) {
              if (!loaded[l]) loaded[l] = [];

              if (q.loaded[l].length) {
                q.loaded[l].forEach(function (ns) {
                  if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
                });
              }
            });
            q.done = true;

            if (q.errors.length) {
              q.callback(q.errors);
            } else {
              q.callback();
            }
          }
        });
        this.emit('loaded', loaded);
        this.queue = this.queue.filter(function (q) {
          return !q.done;
        });
      }
    }, {
      key: "read",
      value: function read(lng, ns, fcName) {
        var _this3 = this;

        var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
        var callback = arguments.length > 5 ? arguments[5] : undefined;
        if (!lng.length) return callback(null, {});
        return this.backend[fcName](lng, ns, function (err, data) {
          if (err && data && tried < 5) {
            setTimeout(function () {
              _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
            }, wait);
            return;
          }

          callback(err, data);
        });
      }
    }, {
      key: "prepareLoading",
      value: function prepareLoading(languages, namespaces) {
        var _this4 = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var callback = arguments.length > 3 ? arguments[3] : undefined;

        if (!this.backend) {
          this.logger.warn('No backend was added via i18next.use. Will not load resources.');
          return callback && callback();
        }

        if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
        if (typeof namespaces === 'string') namespaces = [namespaces];
        var toLoad = this.queueLoad(languages, namespaces, options, callback);

        if (!toLoad.toLoad.length) {
          if (!toLoad.pending.length) callback();
          return null;
        }

        toLoad.toLoad.forEach(function (name) {
          _this4.loadOne(name);
        });
      }
    }, {
      key: "load",
      value: function load(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {}, callback);
      }
    }, {
      key: "reload",
      value: function reload(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {
          reload: true
        }, callback);
      }
    }, {
      key: "loadOne",
      value: function loadOne(name) {
        var _this5 = this;

        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var s = name.split('|');
        var lng = s[0];
        var ns = s[1];
        this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
          if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
          if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

          _this5.loaded(name, err, data);
        });
      }
    }, {
      key: "saveMissing",
      value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
        var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
          this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          return;
        }

        if (key === undefined || key === null || key === '') return;

        if (this.backend && this.backend.create) {
          this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
            isUpdate: isUpdate
          }));
        }

        if (!languages || !languages[0]) return;
        this.store.addResource(languages[0], namespace, key, fallbackValue);
      }
    }]);

    return Connector;
  }(EventEmitter);

  function get() {
    return {
      debug: false,
      initImmediate: true,
      ns: ['translation'],
      defaultNS: ['translation'],
      fallbackLng: ['dev'],
      fallbackNS: false,
      supportedLngs: false,
      nonExplicitSupportedLngs: false,
      load: 'all',
      preload: false,
      simplifyPluralSuffix: true,
      keySeparator: '.',
      nsSeparator: ':',
      pluralSeparator: '_',
      contextSeparator: '_',
      partialBundledLanguages: false,
      saveMissing: false,
      updateMissing: false,
      saveMissingTo: 'fallback',
      saveMissingPlurals: true,
      missingKeyHandler: false,
      missingInterpolationHandler: false,
      postProcess: false,
      postProcessPassResolved: false,
      returnNull: true,
      returnEmptyString: true,
      returnObjects: false,
      joinArrays: false,
      returnedObjectHandler: false,
      parseMissingKeyHandler: false,
      appendNamespaceToMissingKey: false,
      appendNamespaceToCIMode: false,
      overloadTranslationOptionHandler: function handle(args) {
        var ret = {};
        if (_typeof$2(args[1]) === 'object') ret = args[1];
        if (typeof args[1] === 'string') ret.defaultValue = args[1];
        if (typeof args[2] === 'string') ret.tDescription = args[2];

        if (_typeof$2(args[2]) === 'object' || _typeof$2(args[3]) === 'object') {
          var options = args[3] || args[2];
          Object.keys(options).forEach(function (key) {
            ret[key] = options[key];
          });
        }

        return ret;
      },
      interpolation: {
        escapeValue: true,
        format: function format(value, _format, lng, options) {
          return value;
        },
        prefix: '{{',
        suffix: '}}',
        formatSeparator: ',',
        unescapePrefix: '-',
        nestingPrefix: '$t(',
        nestingSuffix: ')',
        nestingOptionsSeparator: ',',
        maxReplaces: 1000,
        skipOnVariables: true
      }
    };
  }
  function transformOptions(options) {
    if (typeof options.ns === 'string') options.ns = [options.ns];
    if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
    if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

    if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
      options.supportedLngs = options.supportedLngs.concat(['cimode']);
    }

    return options;
  }

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function noop() {}

  function bindMemberFunctions(inst) {
    var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
    mems.forEach(function (mem) {
      if (typeof inst[mem] === 'function') {
        inst[mem] = inst[mem].bind(inst);
      }
    });
  }

  var I18n = function (_EventEmitter) {
    _inherits(I18n, _EventEmitter);

    var _super = _createSuper$3(I18n);

    function I18n() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck$1(this, I18n);

      _this = _super.call(this);

      if (isIE10) {
        EventEmitter.call(_assertThisInitialized(_this));
      }

      _this.options = transformOptions(options);
      _this.services = {};
      _this.logger = baseLogger;
      _this.modules = {
        external: []
      };
      bindMemberFunctions(_assertThisInitialized(_this));

      if (callback && !_this.isInitialized && !options.isClone) {
        if (!_this.options.initImmediate) {
          _this.init(options, callback);

          return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
        }

        setTimeout(function () {
          _this.init(options, callback);
        }, 0);
      }

      return _this;
    }

    _createClass$1(I18n, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : undefined;

        if (typeof options === 'function') {
          callback = options;
          options = {};
        }

        if (!options.defaultNS && options.ns) {
          if (typeof options.ns === 'string') {
            options.defaultNS = options.ns;
          } else if (options.ns.indexOf('translation') < 0) {
            options.defaultNS = options.ns[0];
          }
        }

        var defOpts = get();
        this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));

        if (this.options.compatibilityAPI !== 'v1') {
          this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
        }

        if (options.keySeparator !== undefined) {
          this.options.userDefinedKeySeparator = options.keySeparator;
        }

        if (options.nsSeparator !== undefined) {
          this.options.userDefinedNsSeparator = options.nsSeparator;
        }

        function createClassOnDemand(ClassOrObject) {
          if (!ClassOrObject) return null;
          if (typeof ClassOrObject === 'function') return new ClassOrObject();
          return ClassOrObject;
        }

        if (!this.options.isClone) {
          if (this.modules.logger) {
            baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
          } else {
            baseLogger.init(null, this.options);
          }

          var formatter;

          if (this.modules.formatter) {
            formatter = this.modules.formatter;
          } else if (typeof Intl !== 'undefined') {
            formatter = Formatter;
          }

          var lu = new LanguageUtil(this.options);
          this.store = new ResourceStore(this.options.resources, this.options);
          var s = this.services;
          s.logger = baseLogger;
          s.resourceStore = this.store;
          s.languageUtils = lu;
          s.pluralResolver = new PluralResolver(lu, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix
          });

          if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
            s.formatter = createClassOnDemand(formatter);
            s.formatter.init(s, this.options);
            this.options.interpolation.format = s.formatter.format.bind(s.formatter);
          }

          s.interpolator = new Interpolator(this.options);
          s.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
          };
          s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
          s.backendConnector.on('*', function (event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            _this2.emit.apply(_this2, [event].concat(args));
          });

          if (this.modules.languageDetector) {
            s.languageDetector = createClassOnDemand(this.modules.languageDetector);
            s.languageDetector.init(s, this.options.detection, this.options);
          }

          if (this.modules.i18nFormat) {
            s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
            if (s.i18nFormat.init) s.i18nFormat.init(this);
          }

          this.translator = new Translator(this.services, this.options);
          this.translator.on('*', function (event) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            _this2.emit.apply(_this2, [event].concat(args));
          });
          this.modules.external.forEach(function (m) {
            if (m.init) m.init(_this2);
          });
        }

        this.format = this.options.interpolation.format;
        if (!callback) callback = noop;

        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
          var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
        }

        if (!this.services.languageDetector && !this.options.lng) {
          this.logger.warn('init: no languageDetector is used and no lng is defined');
        }

        var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
        storeApi.forEach(function (fcName) {
          _this2[fcName] = function () {
            var _this2$store;

            return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
          };
        });
        var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
        storeApiChained.forEach(function (fcName) {
          _this2[fcName] = function () {
            var _this2$store2;

            (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

            return _this2;
          };
        });
        var deferred = defer();

        var load = function load() {
          var finish = function finish(err, t) {
            if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
            _this2.isInitialized = true;
            if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

            _this2.emit('initialized', _this2.options);

            deferred.resolve(t);
            callback(err, t);
          };

          if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));

          _this2.changeLanguage(_this2.options.lng, finish);
        };

        if (this.options.resources || !this.options.initImmediate) {
          load();
        } else {
          setTimeout(load, 0);
        }

        return deferred;
      }
    }, {
      key: "loadResources",
      value: function loadResources(language) {
        var _this3 = this;

        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
        var usedCallback = callback;
        var usedLng = typeof language === 'string' ? language : this.language;
        if (typeof language === 'function') usedCallback = language;

        if (!this.options.resources || this.options.partialBundledLanguages) {
          if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
          var toLoad = [];

          var append = function append(lng) {
            if (!lng) return;

            var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

            lngs.forEach(function (l) {
              if (toLoad.indexOf(l) < 0) toLoad.push(l);
            });
          };

          if (!usedLng) {
            var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            fallbacks.forEach(function (l) {
              return append(l);
            });
          } else {
            append(usedLng);
          }

          if (this.options.preload) {
            this.options.preload.forEach(function (l) {
              return append(l);
            });
          }

          this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
        } else {
          usedCallback(null);
        }
      }
    }, {
      key: "reloadResources",
      value: function reloadResources(lngs, ns, callback) {
        var deferred = defer();
        if (!lngs) lngs = this.languages;
        if (!ns) ns = this.options.ns;
        if (!callback) callback = noop;
        this.services.backendConnector.reload(lngs, ns, function (err) {
          deferred.resolve();
          callback(err);
        });
        return deferred;
      }
    }, {
      key: "use",
      value: function use(module) {
        if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
        if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

        if (module.type === 'backend') {
          this.modules.backend = module;
        }

        if (module.type === 'logger' || module.log && module.warn && module.error) {
          this.modules.logger = module;
        }

        if (module.type === 'languageDetector') {
          this.modules.languageDetector = module;
        }

        if (module.type === 'i18nFormat') {
          this.modules.i18nFormat = module;
        }

        if (module.type === 'postProcessor') {
          postProcessor.addPostProcessor(module);
        }

        if (module.type === 'formatter') {
          this.modules.formatter = module;
        }

        if (module.type === '3rdParty') {
          this.modules.external.push(module);
        }

        return this;
      }
    }, {
      key: "changeLanguage",
      value: function changeLanguage(lng, callback) {
        var _this4 = this;

        this.isLanguageChangingTo = lng;
        var deferred = defer();
        this.emit('languageChanging', lng);

        var setLngProps = function setLngProps(l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          _this4.resolvedLanguage = undefined;
          if (['cimode', 'dev'].indexOf(l) > -1) return;

          for (var li = 0; li < _this4.languages.length; li++) {
            var lngInLngs = _this4.languages[li];
            if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;

            if (_this4.store.hasLanguageSomeTranslations(lngInLngs)) {
              _this4.resolvedLanguage = lngInLngs;
              break;
            }
          }
        };

        var done = function done(err, l) {
          if (l) {
            setLngProps(l);

            _this4.translator.changeLanguage(l);

            _this4.isLanguageChangingTo = undefined;

            _this4.emit('languageChanged', l);

            _this4.logger.log('languageChanged', l);
          } else {
            _this4.isLanguageChangingTo = undefined;
          }

          deferred.resolve(function () {
            return _this4.t.apply(_this4, arguments);
          });
          if (callback) callback(err, function () {
            return _this4.t.apply(_this4, arguments);
          });
        };

        var setLng = function setLng(lngs) {
          if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
          var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

          if (l) {
            if (!_this4.language) {
              setLngProps(l);
            }

            if (!_this4.translator.language) _this4.translator.changeLanguage(l);
            if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
          }

          _this4.loadResources(l, function (err) {
            done(err, l);
          });
        };

        if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
          setLng(this.services.languageDetector.detect());
        } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
          this.services.languageDetector.detect(setLng);
        } else {
          setLng(lng);
        }

        return deferred;
      }
    }, {
      key: "getFixedT",
      value: function getFixedT(lng, ns, keyPrefix) {
        var _this5 = this;

        var fixedT = function fixedT(key, opts) {
          var options;

          if (_typeof$2(opts) !== 'object') {
            for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
              rest[_key3 - 2] = arguments[_key3];
            }

            options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
          } else {
            options = _objectSpread$6({}, opts);
          }

          options.lng = options.lng || fixedT.lng;
          options.lngs = options.lngs || fixedT.lngs;
          options.ns = options.ns || fixedT.ns;
          var keySeparator = _this5.options.keySeparator || '.';
          var resultKey = keyPrefix ? "".concat(keyPrefix).concat(keySeparator).concat(key) : key;
          return _this5.t(resultKey, options);
        };

        if (typeof lng === 'string') {
          fixedT.lng = lng;
        } else {
          fixedT.lngs = lng;
        }

        fixedT.ns = ns;
        fixedT.keyPrefix = keyPrefix;
        return fixedT;
      }
    }, {
      key: "t",
      value: function t() {
        var _this$translator;

        return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
      }
    }, {
      key: "exists",
      value: function exists() {
        var _this$translator2;

        return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
      }
    }, {
      key: "setDefaultNamespace",
      value: function setDefaultNamespace(ns) {
        this.options.defaultNS = ns;
      }
    }, {
      key: "hasLoadedNamespace",
      value: function hasLoadedNamespace(ns) {
        var _this6 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!this.isInitialized) {
          this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
          return false;
        }

        if (!this.languages || !this.languages.length) {
          this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
          return false;
        }

        var lng = this.resolvedLanguage || this.languages[0];
        var fallbackLng = this.options ? this.options.fallbackLng : false;
        var lastLng = this.languages[this.languages.length - 1];
        if (lng.toLowerCase() === 'cimode') return true;

        var loadNotPending = function loadNotPending(l, n) {
          var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

          return loadState === -1 || loadState === 2;
        };

        if (options.precheck) {
          var preResult = options.precheck(this, loadNotPending);
          if (preResult !== undefined) return preResult;
        }

        if (this.hasResourceBundle(lng, ns)) return true;
        if (!this.services.backendConnector.backend) return true;
        if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
        return false;
      }
    }, {
      key: "loadNamespaces",
      value: function loadNamespaces(ns, callback) {
        var _this7 = this;

        var deferred = defer();

        if (!this.options.ns) {
          callback && callback();
          return Promise.resolve();
        }

        if (typeof ns === 'string') ns = [ns];
        ns.forEach(function (n) {
          if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
        });
        this.loadResources(function (err) {
          deferred.resolve();
          if (callback) callback(err);
        });
        return deferred;
      }
    }, {
      key: "loadLanguages",
      value: function loadLanguages(lngs, callback) {
        var deferred = defer();
        if (typeof lngs === 'string') lngs = [lngs];
        var preloaded = this.options.preload || [];
        var newLngs = lngs.filter(function (lng) {
          return preloaded.indexOf(lng) < 0;
        });

        if (!newLngs.length) {
          if (callback) callback();
          return Promise.resolve();
        }

        this.options.preload = preloaded.concat(newLngs);
        this.loadResources(function (err) {
          deferred.resolve();
          if (callback) callback(err);
        });
        return deferred;
      }
    }, {
      key: "dir",
      value: function dir(lng) {
        if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
        if (!lng) return 'rtl';
        var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
        return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
      }
    }, {
      key: "cloneInstance",
      value: function cloneInstance() {
        var _this8 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

        var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
          isClone: true
        });

        var clone = new I18n(mergedOptions);
        var membersToCopy = ['store', 'services', 'language'];
        membersToCopy.forEach(function (m) {
          clone[m] = _this8[m];
        });
        clone.services = _objectSpread$6({}, this.services);
        clone.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        clone.translator = new Translator(clone.services, clone.options);
        clone.translator.on('*', function (event) {
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }

          clone.emit.apply(clone, [event].concat(args));
        });
        clone.init(mergedOptions, callback);
        clone.translator.options = clone.options;
        clone.translator.backendConnector.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        return clone;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          options: this.options,
          store: this.store,
          language: this.language,
          languages: this.languages,
          resolvedLanguage: this.resolvedLanguage
        };
      }
    }]);

    return I18n;
  }(EventEmitter);

  _defineProperty$1(I18n, "createInstance", function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    return new I18n(options, callback);
  });

  var instance = I18n.createInstance();
  instance.createInstance = I18n.createInstance;

  instance.createInstance;
  instance.init;
  instance.loadResources;
  instance.reloadResources;
  instance.use;
  instance.changeLanguage;
  instance.getFixedT;
  instance.t;
  instance.exists;
  instance.setDefaultNamespace;
  instance.hasLoadedNamespace;
  instance.loadNamespaces;
  instance.loadLanguages;

  function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

  var arr = [];
  var each = arr.forEach;
  var slice = arr.slice;
  function defaults(obj) {
    each.call(slice.call(arguments, 1), function (source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === undefined) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  }
  function hasXMLHttpRequest() {
    return typeof XMLHttpRequest === 'function' || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof$1(XMLHttpRequest)) === 'object';
  }

  var fetchApi$1;
  if (typeof fetch === 'function') {
    if (typeof global !== 'undefined' && global.fetch) {
      fetchApi$1 = global.fetch;
    } else if (typeof window !== 'undefined' && window.fetch) {
      fetchApi$1 = window.fetch;
    }
  }

  if (typeof require !== 'undefined' && (typeof window === 'undefined' || typeof window.document === 'undefined')) {
    var f = fetchApi$1 || require('cross-fetch');
    if (f.default) f = f.default;
    exports.default = f;
    module.exports = exports.default;
  }

  var fetchNode = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
  var fetchApi;

  if (typeof fetch === 'function') {
    if (typeof global !== 'undefined' && global.fetch) {
      fetchApi = global.fetch;
    } else if (typeof window !== 'undefined' && window.fetch) {
      fetchApi = window.fetch;
    }
  }

  var XmlHttpRequestApi;

  if (hasXMLHttpRequest) {
    if (typeof global !== 'undefined' && global.XMLHttpRequest) {
      XmlHttpRequestApi = global.XMLHttpRequest;
    } else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
      XmlHttpRequestApi = window.XMLHttpRequest;
    }
  }

  var ActiveXObjectApi;

  if (typeof ActiveXObject === 'function') {
    if (typeof global !== 'undefined' && global.ActiveXObject) {
      ActiveXObjectApi = global.ActiveXObject;
    } else if (typeof window !== 'undefined' && window.ActiveXObject) {
      ActiveXObjectApi = window.ActiveXObject;
    }
  }

  if (!fetchApi && fetchNode && !XmlHttpRequestApi && !ActiveXObjectApi) fetchApi = fetchNode;
  if (typeof fetchApi !== 'function') fetchApi = undefined;

  var addQueryString = function addQueryString(url, params) {
    if (params && _typeof(params) === 'object') {
      var queryString = '';

      for (var paramName in params) {
        queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
      }

      if (!queryString) return url;
      url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
    }

    return url;
  };

  var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
    if (options.queryStringParams) {
      url = addQueryString(url, options.queryStringParams);
    }

    var headers = defaults({}, typeof options.customHeaders === 'function' ? options.customHeaders() : options.customHeaders);
    if (payload) headers['Content-Type'] = 'application/json';
    fetchApi(url, defaults({
      method: payload ? 'POST' : 'GET',
      body: payload ? options.stringify(payload) : undefined,
      headers: headers
    }, typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions)).then(function (response) {
      if (!response.ok) return callback(response.statusText || 'Error', {
        status: response.status
      });
      response.text().then(function (data) {
        callback(null, {
          status: response.status,
          data: data
        });
      }).catch(callback);
    }).catch(callback);
  };

  var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
    if (payload && _typeof(payload) === 'object') {
      payload = addQueryString('', payload).slice(1);
    }

    if (options.queryStringParams) {
      url = addQueryString(url, options.queryStringParams);
    }

    try {
      var x;

      if (XmlHttpRequestApi) {
        x = new XmlHttpRequestApi();
      } else {
        x = new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
      }

      x.open(payload ? 'POST' : 'GET', url, 1);

      if (!options.crossDomain) {
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      }

      x.withCredentials = !!options.withCredentials;

      if (payload) {
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      }

      if (x.overrideMimeType) {
        x.overrideMimeType('application/json');
      }

      var h = options.customHeaders;
      h = typeof h === 'function' ? h() : h;

      if (h) {
        for (var i in h) {
          x.setRequestHeader(i, h[i]);
        }
      }

      x.onreadystatechange = function () {
        x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
          status: x.status,
          data: x.responseText
        });
      };

      x.send(payload);
    } catch (e) {
      console && console.log(e);
    }
  };

  var request = function request(options, url, payload, callback) {
    if (typeof payload === 'function') {
      callback = payload;
      payload = undefined;
    }

    callback = callback || function () {};

    if (fetchApi) {
      return requestWithFetch(options, url, payload, callback);
    }

    if (hasXMLHttpRequest || typeof ActiveXObject === 'function') {
      return requestWithXmlHttpRequest(options, url, payload, callback);
    }
  };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var getDefaults = function getDefaults() {
    return {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}',
      allowMultiLoading: false,
      parse: function parse(data) {
        return JSON.parse(data);
      },
      stringify: JSON.stringify,
      parsePayload: function parsePayload(namespace, key, fallbackValue) {
        return _defineProperty({}, key, fallbackValue || '');
      },
      request: request,
      reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: false,
      withCredentials: false,
      overrideMimeType: false,
      requestOptions: {
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'default'
      }
    };
  };

  var Backend = function () {
    function Backend(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Backend);

      this.services = services;
      this.options = options;
      this.allOptions = allOptions;
      this.type = 'backend';
      this.init(services, options, allOptions);
    }

    _createClass(Backend, [{
      key: "init",
      value: function init(services) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        this.services = services;
        this.options = defaults(options, this.options || {}, getDefaults());
        this.allOptions = allOptions;

        if (this.services && this.options.reloadInterval) {
          setInterval(function () {
            return _this.reload();
          }, this.options.reloadInterval);
        }
      }
    }, {
      key: "readMulti",
      value: function readMulti(languages, namespaces, callback) {
        var loadPath = this.options.loadPath;

        if (typeof this.options.loadPath === 'function') {
          loadPath = this.options.loadPath(languages, namespaces);
        }

        var url = this.services.interpolator.interpolate(loadPath, {
          lng: languages.join('+'),
          ns: namespaces.join('+')
        });
        this.loadUrl(url, callback, languages, namespaces);
      }
    }, {
      key: "read",
      value: function read(language, namespace, callback) {
        var loadPath = this.options.loadPath;

        if (typeof this.options.loadPath === 'function') {
          loadPath = this.options.loadPath([language], [namespace]);
        }

        var url = this.services.interpolator.interpolate(loadPath, {
          lng: language,
          ns: namespace
        });
        this.loadUrl(url, callback, language, namespace);
      }
    }, {
      key: "loadUrl",
      value: function loadUrl(url, callback, languages, namespaces) {
        var _this2 = this;

        this.options.request(this.options, url, undefined, function (err, res) {
          if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url + '; status code: ' + res.status, true);
          if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url + '; status code: ' + res.status, false);
          if (!res && err && err.message && err.message.indexOf('Failed to fetch') > -1) return callback('failed loading ' + url + ': ' + err.message, true);
          if (err) return callback(err, false);
          var ret, parseErr;

          try {
            if (typeof res.data === 'string') {
              ret = _this2.options.parse(res.data, languages, namespaces);
            } else {
              ret = res.data;
            }
          } catch (e) {
            parseErr = 'failed parsing ' + url + ' to json';
          }

          if (parseErr) return callback(parseErr, false);
          callback(null, ret);
        });
      }
    }, {
      key: "create",
      value: function create(languages, namespace, key, fallbackValue, callback) {
        var _this3 = this;

        if (!this.options.addPath) return;
        if (typeof languages === 'string') languages = [languages];
        var payload = this.options.parsePayload(namespace, key, fallbackValue);
        var finished = 0;
        var dataArray = [];
        var resArray = [];
        languages.forEach(function (lng) {
          var addPath = _this3.options.addPath;

          if (typeof _this3.options.addPath === 'function') {
            addPath = _this3.options.addPath(lng, namespace);
          }

          var url = _this3.services.interpolator.interpolate(addPath, {
            lng: lng,
            ns: namespace
          });

          _this3.options.request(_this3.options, url, payload, function (data, res) {
            finished += 1;
            dataArray.push(data);
            resArray.push(res);

            if (finished === languages.length) {
              if (callback) callback(dataArray, resArray);
            }
          });
        });
      }
    }, {
      key: "reload",
      value: function reload() {
        var _this4 = this;

        var _this$services = this.services,
            backendConnector = _this$services.backendConnector,
            languageUtils = _this$services.languageUtils,
            logger = _this$services.logger;
        var currentLanguage = backendConnector.language;
        if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
        var toLoad = [];

        var append = function append(lng) {
          var lngs = languageUtils.toResolveHierarchy(lng);
          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        append(currentLanguage);
        if (this.allOptions.preload) this.allOptions.preload.forEach(function (l) {
          return append(l);
        });
        toLoad.forEach(function (lng) {
          _this4.allOptions.ns.forEach(function (ns) {
            backendConnector.read(lng, ns, 'read', null, null, function (err, data) {
              if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
              if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
              backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
            });
          });
        });
      }
    }]);

    return Backend;
  }();

  Backend.type = 'backend';

  //import authData from '../services/Auth.js';
  //import { env } from './EnvironmentUtils.js';

  /**
   * Use the `localStorage` for persiting data. There is a _storeId_ used that
   * will take care to clear the data in case of user / environment changed.
   */
  class StorageUtils {
      static _getStoreId(key) {
          return `TMP_${key}`
      }

      static save(itemKey, itemValue) {
          if (typeof Storage !== 'undefined') {
              localStorage.setItem(`${StorageUtils._getStoreId(itemKey)}`, JSON.stringify(itemValue));
          } else {
              console.warn('Local storage not supported');
          }
      }

      static fetch(itemKey) {
          if (typeof Storage !== 'undefined') {
              const storageData = localStorage.getItem(`${StorageUtils._getStoreId(itemKey)}`);
              if (storageData && storageData !== `undefined`) {
                  return JSON.parse(storageData);
              }
              return null;
          }
          return null;
      }

      static clear(itemKey) {
          if (typeof Storage !== 'undefined') {
              localStorage.removeItem(StorageUtils._getStoreId(itemKey));
          }
      }
  }

  const LS_KEY = `clerk-ui#UserSettings`;

  /**
   * Here user specific settings are managed and persitent via _localStorage_.
   */
  class UserSettingsService {
      /**
       * Stores the new locale to the user settings. Furthermore trigger a rerendering of the page
       *
       * @param {String} newLocale - new locale
       */
      static async updateLocale(newLocale, showMessageKeys = false) {
          const settings = this._loadSettings();
          settings.locale = newLocale;
          this._saveSettings(settings);

          // XXX is this a good idea to call also language services (like i18n) within this service class?

          // FIXME manage currency in a proper way
          const tmpCurrency = 'EUR';

          if (!i18n) {
              // still not initialized, initilaize i18n with default value
              await updateI18n(newLocale, tmpCurrency, newLocale, showMessageKeys);
              return;
          }
          i18n.displayMsgKeys = showMessageKeys;
          await i18n
              .getI18Next()
              .changeLanguage(newLocale)
              .then(async () => {
                  await i18n.changeMomentLocale(newLocale, tmpCurrency);
                  MessageDispatcher.dispatch('app#reload', { newLocale });
              });
      }

      /**
       * Returns the current status of `showMessageKeys`. The status is set via `updateLocale`.
       * @returns {Boolean} `true` if message keys are shown.
       */
      static isShowMessageKeys() {
          return this._loadSettings().showMessageKeys;
      }

      /**
       * @returns {String} the current user locale;
       */
      static getLocale() {
          return this._loadSettings().locale;
      }

      static setNavBarStyle(newNavbarStyle) {
          const settings = this._loadSettings();
          settings.navbarStyle = newNavbarStyle;
          this._saveSettings(settings);
      }

      /**
       * @returns {String} the navbar style
       */
      static getNavBarStyle() {
          // default value _light_
          return this._loadSettings().navbarStyle || 'light';
      }

      static setBackgroundConfig(newBackgroundConfig = { blur, fade, show }) {
          const settings = this._loadSettings();
          settings.bgConfig = newBackgroundConfig;
          this._saveSettings(settings);
      }

      /**
       * @returns {Object} background config
       */
      static getBackgroundConfig() {
          return (
              this._loadSettings().bgConfig || {
                  show: true,
                  blur: false,
                  fade: 120,
              }
          );
      }

      static _loadSettings() {
          let lsAppSettings = StorageUtils.fetch(LS_KEY);

          if (!lsAppSettings) {
              lsAppSettings = {};
              this._saveSettings(lsAppSettings);
          }
          return lsAppSettings;
      }

      /**
       * Save the settings to local storage and dispatch the change
       * with the message key `onUserSettingsChanged`.
       *
       * @param {Object} settings
       */
      static _saveSettings(settings) {
          StorageUtils.save(LS_KEY, settings);
          MessageDispatcher.dispatch('onUserSettingsChanged', settings);
      }
  }

  // import dayjs, { duration, relativeTime, localeData, localizedFormat } from '../web_modules/dayjs.js';

  // language imports
  // import CacheManager from '../business/CacheManager.js';


  /**
   * updateable via Ti18nFormatter#setRelativeContextPath
   */
  let contextPath = window.location.pathname;
  /*
  // adds duration functions
  dayjs.extend(duration);
  // adds fromNow methods
  dayjs.extend(relativeTime);
  dayjs.extend(localeData);
  // adds 'L LTS' formats
  dayjs.extend(localizedFormat);
  */
  // The backend is not working by importing it as native ES module. (see index.html)
  // import Backend from '../web_modules/i18next-http-backend.js';

  /**
   * The i18nFormatter takes care about the correct formatting based on a given locale.
   *
   * Why i18nFormatter?<br>
   * i18n - internationalization<br>
   * l10n - localization<br>
   * <br>
   * The i18nFormatter is part of the tech11 core/platform solution. Means it's a i18n
   * (<i>internationalization</i>) component that  allows you l10n (<i>localization</i>)
   * on the business components.<br>
   * <br>
   * @see https://www.w3.org/International/questions/qa-i18n
   */
  class Ti18nFormatter {
      constructor(locale, currency, languageSettings, displayMsgKeys = false) {
          this._locale = locale;
          [this._lang] = this._locale.split('-');
          this._fallbackLanguage = languageSettings.fallbackLanguage;
          this._messageBundle = {};
          this._fileIndex = [];
          this._loadedMsgFiles = new Set();
          this._l10nNF = new Intl.NumberFormat(locale);
          this._l10nCur = new Intl.NumberFormat(locale, { style: 'currency', currency });

          /**
           * `true` shows the _message key_ instead of the tranlate message from the message files.
           */
          this.displayMsgKeys = displayMsgKeys;

          // this._loadDayJsLocale(locale);
      }

      /**
       * Change the locale settings of the application
       *
       * @param {Object} localeData
       * @param {string} localeData.currentLocale - a locale string like `de`, `de-DE` or `en-US`
       * @param {String} currency - the curreny as string like 'EUR'
       */
      async changeLocale(localeData, currency) {
          this.getI18Next()
              .changeLanguage(localeData.currentLocale)
              .then(() => {
                  this.changeMomentLocale(localeData.currentLocale, currency);
              });
          await this._loadDayJsLocale(localeData.currentLocale);
      }

      /**
       *
       * @param {String} locale - a locale string like `de`, `de-DE` or `en-US`
       */
      async _loadDayJsLocale(locale) {
          // dayjs is working with lower case;
          locale = locale.toLowerCase();

          let locales = CacheManager.getJSON('i18n', 'locales');
          if (!locales) {
              locales = await (await fetch(`.${contextPath}../web_modules/dayjs/locale.json`)).json();
              CacheManager.setJson(locales, 'i18n', 'locales');
          }

          const availbleLocale = locales.find((l) => l.key === locale);
          if (!availbleLocale) {
              locale = locale.substring(0, 2);
          }

          const dayJsLocalModule = await import(`${contextPath}web_modules/dayjs/locale/${locale}.js`);
          const dayJsLocal = dayJsLocalModule.default;

          dayjs.locale(locale, dayJsLocal);
      }

      static _getStoredUISettings() {
          JSON.parse(localStorage.getItem('clerkUiSettings'));
      }

      /**
       * Resolve the path for the message files based on the given namespace
       * @param {Array} lng array of langauges (['de-DE'])
       * @param {Array} ns aray of namespace (['custom'] or ['messages'])
       * @returns  {string} resolved path to the message file
       */
      static _i18nextPathResolver(lng, ns) {
          // XXX think about how to avoid hard coded context path ('business-workbench')
          if (ns && ns[0] === 'custom') {
              return `../..${contextPath}/ext/msgs/{{ns}}_{{lng}}.json`;
          }
          return `../..${contextPath}/msgs/{{ns}}_{{lng}}.json`;
      }

      /**
       * This is extracted in a dedicated method to have the chance to mock it for unit tests.
       * @returns the i18nextHttpBackend provider.
       */
      static getI18NextBackend() {
          // i18NextBackend is making problem by importing it as native ES module.
          // Therefore, linked globally on index.html
          return Backend;
      }

      static async _initI18Next() {
          const globalConfig = {
              localeConfig: {
                  lng: UserSettingsService.getLocale() || 'de-DE',
                  fallbackLng: 'de-DE',
              },
          };

          // const { host } = window.location;
          // const debug = host.includes('localhost') || host.includes('dev-03' || host.includes('dev-ui'));

          const i18nextOptions = {
              lng: 'en-US',
              load: 'currentOnly',
              // ns: ['custom', 'messages'],
              ns: ['messages'],
              // defaultNS: ['custom'],
              defaultNS: ['messages'],
              fallbackNS: ['messages'],
              supportedLngs: ['de-DE', 'de-AT', 'de', 'en-US', 'en'],
              nonExplicitSupportedLngs: false,
              cleanCode: true,
              backend: {
                  loadPath: (lng, ns) => Ti18nFormatter._i18nextPathResolver(lng, ns),
              },
              interpolation: {
                  // eslint-disable-next-line no-unused-vars
                  format: (value, format, lng) => {
                      if (value) {
                          if (format === 'uppercase') return value.toUpperCase();
                          if (value instanceof Date || typeof value === 'string') return dayjs(value).format(format);
                      }
                      return value;
                  },
              },
          };
          const { lng } = globalConfig.localeConfig;
          const { fallbackLng } = globalConfig.localeConfig;
          if (lng) {
              if (!i18nextOptions.supportedLngs.includes(lng)) i18nextOptions.supportedLngs.push(lng);
              i18nextOptions.lng = lng;
          }
          if (fallbackLng) i18nextOptions.fallbackLng = fallbackLng;

          if (Ti18nFormatter.getI18NextBackend()) await instance.use(Ti18nFormatter.getI18NextBackend());
          // .use(i18nextBrowserLanguageDetector)

          await instance.init(i18nextOptions, function (err, t) {});
      }

      /**
       * Format a date by using the given locale (locale is set in constructor).
       *
       * After there where some problems with Date regarding DST, we use in the background moment.js.
       * For more details, please see the comments inside the fucntion!
       *
       * @param {date|string} value a date object or a ISO-8601 date-representing string
       * @param {string} format optional, if format == 'dateTime' the date will be rendered with date and time.
       */
      df(value, format) {
          // XXX check if it's possible to throw away moment.js
          // PROBLEM
          // let value = new Date(1978-06-13T22:00:00.000Z); //German 14.06.1978 midnight
          // console.log('de-DE', value.toLocaleString('de-DE')); //--> 13.6.1978 23:00:00
          // when executed in november. Chrome has problems with DST (daylight saving time)... I don't know
          // nevertheless EDGE print the data correct as ‎14‎.‎06‎.‎1978‎ ‎00‎:‎00‎:‎00

          // therefore, for the moment, we go ahead with moment.js
          // Old comments
          /**
           * Implementation note:
           * At the momemnt, the Intl#DateFormater or Date#toLocaleDateString is used.
           * Thereby, the month is always rendered as 1 or 2 digit number. If there is a requirement for MMM or MMMM (date pattern),
           * have a look to parameter options Date#toLocaleString. You can use 'short' or 'long'. In this case you have to define a mapping between the date pattern and the options.
           * As implementation idea have a look to https://stackoverflow.com/questions/986657/how-do-i-format-a-javascript-date.
           * Furthermore you'll find the right date pattern here: https://github.com/unicode-cldr/cldr-dates-full/blob/master/main.
           */

          if (value === undefined) return '';
          const d = dayjs(value).locale(dayjs.locale());
          if (format === 'dateTime') return d.format('L LTS');
          if (format === 'dateTime2') return d.format('L LT');
          if (format) return d.format(format);
          return d.format('L');

          /*
      //NATIVE date implementation, replaced by moment.js for the moment...

      if (typeof value == "string")
        value = new Date(value); //convert date from iso8601 to date object
      //HACK: this is a hack because German format is not shown with leading '0' for date and month
      if (this._locale.startsWith('de')) {
        let dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Europe/Berlin' };
        console.log(value, value.toLocaleTimeString(this._locale, dateOptions));

        if (format == 'dateTime')
          return value.toLocaleTimeString(this._locale, dateOptions);
        return value.toLocaleDateString(this._locale, dateOptions);
      }
      if (format == 'dateTime')
        return value.toLocaleString(this._locale);
      return value.toLocaleDateString(this._locale);
      */
      }

      /**
       * Converts a local date (w/o timezon) to a UTC date based on the current locale of i18n class.
       *
       * @param {string} localDate - local date without tz informatoin
       * @returns iso8601 date (utc).
       */
      convertLocaleDateToUTCDate(localDate) {
          const m = dayjs(localDate);
          if (!m.isValid()) return undefined;
          return m.toISOString();
      }

      /**
       * Concerts a utc date to a local date.
       *
       * @param {string} utcDate - utc formatted date
       * @param {string} pattern - format pattern e.g. YYYY-MM-DD (see https://momentjs.com/docs/#/displaying/format/)
       * @returns local date formatted based on the pattern
       */
      convertUTCDateToLocalDate(utcDate, pattern) {
          const m = dayjs(utcDate);
          return m.format(pattern);
      }

      /**
       * Format a numeric value based on the current locale.
       * If it's a non numeric value the output is '-'.
       *
       * @param {numeric} value - the number that should be formatted
       * @param {numeric} fractionSize -  the decimal places
       * @return {string} formatted number
       */
      nf(value, fractionSize) {
          if (isNaN(value) || value === null || value === undefined) return '- ';
          if (fractionSize !== undefined) {
              return new Intl.NumberFormat(this._locale, {
                  minimumFractionDigits: fractionSize,
                  maximumFractionDigits: fractionSize,
              }).format(value);
          }
          return this._l10nNF.format(value);
      }

      cur(value, currencyCode) {
          if (isNaN(value) || value == undefined || value == null) return '- ';

          if (currencyCode == undefined) return this._l10nCur.format(value);
          let formatted;
          try {
              formatted = new Intl.NumberFormat(this._locale, { style: 'currency', currency: currencyCode }).format(
                  value
              );
          } catch (error) {
              console.error(currencyCode, error);
              formatted = new Intl.NumberFormat(this._locale, { style: 'currency', currency: 'EUR' }).format(value);
          }

          return formatted;
      }

      /**
       * Returns the value or a default value if the given value is empty, null or undefined
       * @param {string} value - the value that should be printed
       * @param {string} defaultValue  - the default value. If undefined used <pre>-</pre>
       * @return {string} value of defaultValue, based on the content of value
       */
      txt(value, defaultValue) {
          if (value == undefined || value == null || value == '') return defaultValue == undefined ? '-' : defaultValue;
          return value;
      }

      /**
       * Returns the message identified by the given key.
       *
       * @param {string} key - the key of the message
       * @param {object} param - optional, if the message contains a ES6 string literal the data from param are used for it.
       *                        Too shorten the message, the param is abbreviated with p inside the message file.
       *                        For example: param = {policyNumber: '12345'} can be used in a the following message file:
       *                                     KEY: "Please use the policy number ${p.policyNumber}. Thanks"
       */
      msg(key, param) {
          if (this.displayMsgKeys) return key;
          const passInVariables = { p: param };
          return instance.t(key, passInVariables);
      }

      duration(due) {
          dayjs.locale(this._locale);
          return dayjs.duration(dayjs().diff(due)).humanize();
      }

      formatDuration(timeInterval) {
          dayjs.locale(this._locale);
          return dayjs.duration(timeInterval).humanize();
      }

      diff(d1, d2 = new Date(), unit = 'minutes') {
          dayjs.locale(this._locale);
          const a = dayjs(d1);
          const b = dayjs(d2);
          return a.diff(b, unit); // 1
      }

      changeMomentLocale(locale, currency) {
          this._locale = locale;
          [this._lang] = this._locale.split('-');
          this._l10nNF = new Intl.NumberFormat(locale);
          this._l10nCur = new Intl.NumberFormat(locale, { style: 'currency', currency });
          this.appSettings = Ti18nFormatter._getStoredUISettings();
          // current language is imported and updated to dayjs objects
          this._loadDayJsLocale(locale);
      }

      /**
       *
       * @param {date} date1 - date2 for the duration date1 to date2
       * @param {data} date2 - date2 for the duration date1 to date2. If not present date2 is set to now.
       * @returns {Object} duration object
       * @returns {Date} duration.date1 - date1 of the duration
       * @returns {Date} duration.date2 -  date2 of the duration
       * @returns {number} duration.diff -  the difference in ms
       * @returns {string} duration.text-  a localized humanized message
       */
      durationData(date1, date2 = new Date()) {
          const result = { date1, date2 };
          dayjs.locale(this._locale);
          result.diff = dayjs(date1).diff(date2);
          const duration = dayjs.duration(result.diff);
          result.text = duration.humanize(true);
          return result;
      }

      getLocale() {
          return this._locale;
      }

      getI18Next() {
          return instance;
      }

      static setRelativeContextPath(newContextPath) {
          contextPath = newContextPath;
      }
  }

  let i18n;

  async function updateI18n(currentLocale, currency, locale, displayMsgKeys) {
      i18n = new Ti18nFormatter(currentLocale, currency, locale, displayMsgKeys);
      await Ti18nFormatter._initI18Next();
  }

  const attrDefDefault = {
    label: "LABEL",
    key: null,
    mandatory: false,
    style: "default",
    labelCss: null,
    cssLabelAdditionalClasses: "",
    noLabel: false,
  };

  class AbstractAttrRenderer extends AbstractWebComponent {
    constructor() {
      super();

      /**
       * Attribute definition
       */
      this.attrDef = null;

      /**
       * Container where the attribute is written to.
       *
       * `this.container[this.attrDef.key] = 'value'`
       */
      this.container = null;

      /**
       * Function that is called after the value is changed.
       */
      this.onValueChanged = null;

      /**
       * enriched attribute definition
       */
      this._fullAttrDef = null;
    }

    /**
     * @deprecated
     */
    _createTooltip() {
      // do nothing and wait until the fn can be removed.
    }

    postInit() {
      const tooltipElem = this.querySelector("[data-toggle=tooltip]");
      if (!tooltipElem) return;
      // instead of template use customClass with BS5
      const customClass = "bg-light text-body";
      const options = {
        html: true,
        sanitize: false,
        placement: "top",
        template: `<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner ${customClass}"></div></div>`,
      };

      // eslint-disable-next-line no-undef
      $(tooltipElem).tooltip(options);
    }

    _updateValue(value) {
      const detail = {
        newValue: value,
        oldValue: this.container[this.attrDef.key],
      };
      this.container[this.attrDef.key] = value;
      this.refreshContext();
      if (this.onValueChanged) this.onValueChanged(detail);
    }

    /**
     * Implement rendering of the attribute element
     * @param {Object} attrDef - Attribute Definition
     * @param {Object} value
     * @returns lit-html snippet
     * @abstract
     */
    // eslint-disable-next-line no-unused-vars
    renderAttrElement(attrDef, value) {
      throw new Error("renderAttrElement must be overwritten!");
    }

    /**
     * The return value is added to the data css div tag
     */
    getAddtionalDataCss() {
      return "";
    }

    getId(attrDef) {
      return attrDef.key.replace(/\./, "-");
    }

    _renderTooltip(tooltip) {
      if (!tooltip) return "";

      const tooltipSnippet = `
            <div class="text-left">
                <h5>${i18n.msg(this.attrDef.label)} <code>${
      this.attrDef.key
    }</code></h5>
                ${tooltip}
            </div>
        `;
      return $$1`
      <button
        type="button"
        class="btn btn-link btn-sm"
        style="margin: 0; padding:0;"
        data-toggle="tooltip"
        .title=${tooltipSnippet}
      >
        <i class="fas fa-info-circle text-primary"></i>
      </button>
    `;
    }

    renderComponent() {
      // enrich attr definition with default values
      const attrDef = { ...attrDefDefault, ...this.attrDef };

      const {
        label,
        key,
        mandatory,
        tooltip,
        cssRowCols,
        cssLabelColSize = 2,
        cssLabelAdditionalClasses = "",
        cssInputColSize,
        labelSuffixFn,
        noLabel,
        labelBeforeEndHTML,
      } = attrDef;
      const value = this.container[key];

      if (noLabel) return this.renderAttrElement(attrDef, value);

      const mandatoryText = mandatory ? "(*)" : "";

      let rowCols = cssRowCols || 1; // default

      if (!cssRowCols) {
        // closet ist king :-) -> https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        const closestRow = this.closest(".row");
        if (closestRow) {
          [...closestRow.classList].forEach((cl) => {
            const match = cl.match(/row-cols-(\d{1,2})/);
            if (match && match.length > 0) {
              // eslint-disable-next-line prefer-destructuring
              rowCols = match[1];
            }
          });
        }
      }

      const lColSize = cssLabelColSize * rowCols;
      const iColSize = cssInputColSize ? cssInputColSize * rowCols : null;

      const labelCss = `col-sm-${lColSize} col-form-label ${cssLabelAdditionalClasses}`; // default
      const inputCss = `${
      iColSize ? `col-${iColSize}` : "col"
    } ${this.getAddtionalDataCss()}`; // default

      if (attrDef.style === "floating") {
        return $$1` <div class="form-floating mb-3">
          ${this.renderAttrElement(attrDef, value)}
          <label for=${this.getId(attrDef)}
            >${i18n.msg(label)} ${mandatoryText}
            ${labelSuffixFn ? labelSuffixFn() : ""}${labelBeforeEndHTML}
            ${this._renderTooltip(tooltip)}
          </label>
        </div>
        `
      }

      return $$1` <div class="form-group row">
      <label class=${labelCss}
        >${i18n.msg(label)} ${mandatoryText}
        ${labelSuffixFn ? labelSuffixFn() : ""}${labelBeforeEndHTML}
        ${this._renderTooltip(tooltip)}
      </label>

      <div class=${inputCss}>${this.renderAttrElement(attrDef, value)}</div>
    </div>`;
    }
  }

  class AttrText extends AbstractAttrRenderer {
      renderAttrElement(attrDef, value) {
          const { key, inputPattern = null } = attrDef;

          return $$1`
            <input
                type="text"
                class="form-control"
                .value=${value || ''}
                id=${this.getId(attrDef)}
                name=${key}
                pattern=${inputPattern || ''}
                @input=${(e) => this._updateValue(e.target.value)}
                @mouseover=${() => this._createTooltip(key)}
            />
        `;
      }

      static register() {
          if (!customElements.get('t11-attr-text')) {
              customElements.define('t11-attr-text', AttrText);
          }
      }
  }

  AttrText.register();

  class UserService {

      static async getCurrentUser() {
          return (await fetch('./api/users/me')).json();
      }
  }

  class AttrLocalDate extends AbstractAttrRenderer {
      renderAttrElement(attrDef, value) {
          const { key, inputPattern = null } = attrDef;

          return $$1`
            <input
                type="date"
                class="form-control"
                .value=${value || ''}
                id=${this.getId(attrDef)}
                name=${key}
                pattern=${inputPattern || ''}
                @input=${(e) => this._updateValue(e.target.value)}
            />
        `;
      }

      static register() {
          if (!customElements.get('t11-attr-local-date')) {
              customElements.define('t11-attr-local-date', AttrLocalDate);
          }
      }
  }

  AttrLocalDate.register();

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");

  class TimeRecordsService {
    static async createOrUpdate(timeRecord) {
      const resp = await fetch("./api/tr", {
        method: "POST",
        headers,
        body: JSON.stringify(timeRecord),
      });
      return resp.json();
    }

    static async updateAll(timeRecords) {
      await fetch("./api/tr/btx/batch-update", {
        method: "POST",
        headers,
        body: JSON.stringify(timeRecords),
      });
      // FIXME verify response;
    }

    static async get(queryParams) {
      const params = new URLSearchParams();
      Object.entries(queryParams, (k, v) => params.append(k, v));
      const urlQueryParam = params.toString();
      console.log(urlQueryParam);

      const resp = await fetch(`./api/tr?${urlQueryParam}`, { headers });
      return resp.json();
    }
  }

  class AttrBigDecimal extends AbstractAttrRenderer {
      renderAttrElement(attrDef, value) {
          const { key, inputPattern = null, step = '' } = attrDef;

          return $$1`
            <input
                type="number"
                class="form-control"
                .value=${value || ''}
                id=${this.getId(attrDef)}
                name=${key}
                step=${step}
                pattern=${inputPattern || ''}
                @input=${(e) => this._updateValue(new Number(e.target.value))}
            />
        `;
      }

      static register() {
          if (!customElements.get('t11-attr-bigdecimal')) {
              customElements.define('t11-attr-bigdecimal', AttrBigDecimal);
          }
      }
  }

  AttrBigDecimal.register();

  AttrText.register();
  AttrLocalDate.register();
  AttrBigDecimal.register;
  ContextElement.register();

  class TimeRecordingInputComponent extends AbstractWebComponent {
    async init() {
      this._user = await UserService.getCurrentUser();

      this._records = await this._loadTicketsByCurrentUser();

      this._record = {
        description: null,
        workingDay: new Date().toISOString().substring(0, 10),
        duration: null,
        ticketNumber: null,
      };
      this._data = {};
    }

    async _loadTicketsByCurrentUser() {
      return TimeRecordsService.get({
        userName: this._user.userName,
      });
    }

    async _post() {
      this._record = await TimeRecordsService.createOrUpdate(this._record);
      this._records = await this._loadTicketsByCurrentUser();
      this.refreshContext();
    }

    renderComponent() {
      return $$1`
      <t11-context .value=${this._data}>
        <div class="container">
          <h1>hello ${this._user.userName}</h1>
          <hr />
          <t11-attr-locale-date
            .container=${this._record}
            .attrDef=${{
              key: "workingDay",
              label: "WORKING_DAY",
            }}
          ></t11-attr-locale-date>
          <t11-attr-text
            .container=${this._record}
            .attrDef=${{
              key: "ticketNumber",
              label: "TICKET_NUMBER",
            }}
          ></t11-attr-text>
          <t11-attr-text
            .container=${this._record}
            .attrDef=${{
              key: "description",
              label: "DESCRIPTION",
            }}
          ></t11-attr-text>
          <t11-attr-bigdecimal
            .container=${this._record}
            .attrDef=${{
              key: "duration",
              label: "DURATION",
              step: 0,
            }}
          ></t11-attr-bigdecimal>
          <br />
          <button class="btn btn-primary" @click=${() => this._post()}>
            POST
          </button>

          <hr />
          ${JSON.stringify(this._record, 2, " ")}
          <hr />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">working day</th>
                <th scope="col">duration</th>
                <th scope="col">ticket</th>
                <th scope="col">description</th>
              </tr>
            </thead>
            <tbody>
              ${this._records.map(
                (record) => $$1`
                  <tr>
                    <th scope="row">1</th>
                    <td>${record.workingDay}</td>
                    <td>${record.duration}</td>
                    <td>${record.ticketNumber}</td>
                    <td>${record.description}</td>
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
      </t11-context>
    `;
    }

    static register() {
      if (!customElements.get("t11-time-recording-input")) {
        customElements.define(
          "t11-time-recording-input",
          TimeRecordingInputComponent
        );
      }
    }
  }
  TimeRecordingInputComponent.register();

  AttrText.register();
  AttrLocalDate.register();
  AttrBigDecimal.register;
  ContextElement.register();

  class WeeklyInputComponent extends AbstractWebComponent {
    async init() {

      this._user = await UserService.getCurrentUser();

      this._records = await this._loadTicketsByCurrentUser();

      this._data = {};
    }

    async _loadTicketsByCurrentUser() {
      return TimeRecordsService.get({
        userName: this._user.userName,
      });
    }



    _addRow() {
      this._records.push({"ticketNumber": null});
      this.refreshContext();
    }

    async _updateBackend() {
      await TimeRecordsService.updateAll(this._records);
      this._records = await this._loadTicketsByCurrentUser();
      this.refreshContext();
    }

    renderComponent() {
      return $$1`
      <t11-context .value=${this._data}>
        <div class="container">
          <hr />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">working day</th>
                <th scope="col">duration</th>
                <th scope="col">ticket</th>
                <th scope="col">description</th>
              </tr>
            </thead>
            <tbody>
              ${this._records.map(
                (record, index) => $$1`
                  <tr>
                    <th scope="row">${index}</th>
                    <td>
                      <t11-attr-local-date
                        .container=${record}
                        .attrDef=${{
                          key: "workingDay",
                          noLabel: true,
                        }}
                      ></t11-attr-local-date>
                    </td>
                    <td>
                      <t11-attr-bigdecimal
                        .container=${record}
                        .attrDef=${{
                          key: "duration",
                          noLabel: true,
                        }}
                      ></t11-attr-bigdecimal>
                    </td>
                    <td>
                      <t11-attr-text
                        .container=${record}
                        .attrDef=${{
                          key: "ticketNumber",
                          noLabel: true,
                        }}
                      ></t11-attr-text>
                    </td>
                    <td>
                      <t11-attr-text
                        .container=${record}
                        .attrDef=${{
                          key: "description",
                          noLabel: true,
                        }}
                      ></t11-attr-text>
                    </td>
                  </tr>
                `
              )}
            </tbody>
          </table>
          <button class="btn btn-primary btn-sm" @click=${() => this._addRow()}>add row</button>
          <button class="btn btn-primary btn-sm" @click=${() => this._updateBackend()}>update</button>
        </div>
      </t11-context>
    `;
    }

    static register() {
      if (!customElements.get("t11-weekly-input")) {
        customElements.define("t11-weekly-input", WeeklyInputComponent);
      }
    }
  }
  WeeklyInputComponent.register();

  TimeRecordingInputComponent.register();
  WeeklyInputComponent.register();
  HomeComponent.register();

  let router = null;

  class RoutingService {
    static init(outlet) {

      router = new Router(outlet);
      RoutingService._initRouter();
    }

    static _initRouter() {
      router.setRoutes([
        { path: "/", component: "t11-home" },
        { path: "/input", component: "t11-time-recording-input" },
        { path: "/weekly", component: "t11-weekly-input" },
      ]);
    }
  }

  ContextElement.register();
  class TimeRecordingAppComponent extends AbstractWebComponent {
    async init() {
      this._data = {};
    }

    postInit() {
      RoutingService.init(this.querySelector("slot"));
    }

    renderComponent() {
      return $$1`
      <t11-context .value=${this._data}>
        <header>
          Header
          <hr />
        </header>
        <div class="container">
          <slot name="mainContent"></slot>
        </div>
        <footer>
          <hr />
          footer
        </footer>
      </t11-context>
    `;
    }

    static register() {
      if (!customElements.get("t11-time-recording-app")) {
        customElements.define(
          "t11-time-recording-app",
          TimeRecordingAppComponent
        );
      }
    }
  }
  TimeRecordingAppComponent.register();

  TimeRecordingAppComponent.register();


  class MainApp {
    constructor() {
      console.log("constructor");
      this.init();
    }

    async init() {
      await updateI18n("en-US", "eur", "en-US");
      this.renderComponent();
    }

    renderComponent() {
      x$1(
        $$2` <t11-time-recording-app></t11-time-recording-app> `,
        document.body
      );
    }

    static bootstrap() {
      new MainApp();
    }
  }

  window.onload = () => MainApp.bootstrap();

})();
