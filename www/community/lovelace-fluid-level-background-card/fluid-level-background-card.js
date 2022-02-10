/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return e&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(o,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window.trustedTypes,d=l?l.emptyScript:"",c=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var o,n;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const r=(null!==(n=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:h.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var i,o,n;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==n?n:h.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:g}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.2.0");const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,y="?"+_,$=`<${y}>`,b=document,w=(t="")=>b.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,x=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,z=/'/g,P=/"/g,T=/^(?:script|style|textarea)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),H=new WeakMap,L=b.createTreeWalker(b,129,null,!1),R=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=C;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===C?"!--"===l[1]?r=E:void 0!==l[1]?r=x:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=k):void 0!==l[3]&&(r=k):r===k?">"===l[0]?(r=null!=n?n:C,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?k:'"'===l[3]?P:z):r===P||r===z?r=k:r===E||r===x?r=C:(r=k,n=void 0);const h=r===k&&t[e+1].startsWith("/>")?" ":"";s+=r===C?i+$:d>=0?(o.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+_+h):i+_+(-2===d?(o.push(void 0),e):h)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,o]};class q{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,d]=R(t,e);if(this.el=q.createElement(l,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=L.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=d[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?W:"@"===e[1]?V:j})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(T.test(o.tagName)){const t=o.textContent.split(_),e=t.length-1;if(e>0){o.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],w()),L.nextNode(),a.push({type:2,index:++n});o.append(t[e],w())}}}else if(8===o.nodeType)if(o.data===y)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(_,t+1));)a.push({type:7,index:n}),t+=_.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,o){var n,s,r,a;if(e===U)return e;let l=void 0!==o?null===(n=i._$Cl)||void 0===n?void 0:n[o]:i._$Cu;const d=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,o)),e}class N{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);L.currentNode=n;let s=L.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new I(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new X(s,this,t)),this.v.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=L.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,o){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),A(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==U&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==O&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=q.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new N(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new q(t)),e}A(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new I(this.M(w()),this.M(w()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,o,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=F(this,t,e,0),s=!A(t)||t!==this._$AH&&t!==U,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=F(this,o[i+r],e,r),a===U&&(a=this._$AH[r]),s||(s=!A(a)||a!==this._$AH[r]),a===O?t=O:t!==O&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.k(t)}k(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends j{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===O?void 0:t}}const D=f?f.emptyScript:"";class W extends j{constructor(){super(...arguments),this.type=4}k(t){t&&t!==O?this.element.setAttribute(this.name,D):this.element.removeAttribute(this.name)}}class V extends j{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:O)===U)return;const o=this._$AH,n=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==O&&(o===O||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const G=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,K;null==G||G(q,I),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.1.1");class J extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new I(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return U}}J.finalized=!0,J._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:J});const Z=globalThis.litElementPolyfillSupport;null==Z||Z({LitElement:J}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function et(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function it(t){return et({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot,nt,st;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(nt||(nt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(st||(st={}));var rt=["closed","locked","off"],at=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},lt=new Set(["call-service","divider","section","weblink","cast","select"]),dt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},ct=function(t){at(window,"haptic",t)},ht=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(ct("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&at(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),at(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,n=function(t){return t.substr(0,t.indexOf("."))}(e),s="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(s,o,{entity_id:e})})(t,e,rt.includes(t.states[e].state))}(e,i.entity),ct("success"));break;case"call-service":if(!o.service)return void ct("failure");var n=o.service.split(".",2);e.callService(n[0],n[1],o.service_data,o.target),ct("success");break;case"fire-dom-event":at(t,"ll-custom",o)}};function ut(t){return void 0!==t&&"none"!==t.action}const pt={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let gt=class extends J{constructor(){super(...arguments),this._selectedCard=0,this._GUImode=!0,this._guiModeAvailable=!0,this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"more-info"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){var t,e;if(!this.hass||!this._helpers)return M``;this._helpers.importMoreInfoControl("climate");const i=Object.keys(this.hass.states).filter((t=>"input_number"===t.substr(0,t.indexOf("."))));return M`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${pt.required.icon}`}></ha-icon>
            <div class="title">${pt.required.name}</div>
          </div>
          <div class="secondary">${pt.required.secondary}</div>
        </div>
        ${(null===(t=this._config)||void 0===t?void 0:t.card)?M`
              <hui-card-element-editor
                .hass=${this.hass}
                .value=${null===(e=this._config)||void 0===e?void 0:e.card}
                .lovelace=${this.lovelace}
                @config-changed=${this._handleConfigChanged}
                @GUImode-changed=${this._handleGUIModeChanged}
              ></hui-card-element-editor>
            `:M` <hui-card-picker
              .hass=${this.hass}
              .lovelace=${this.lovelace}
              @config-changed=${this._handleCardPicked}
            >
            </hui-card-picker>`}
        ${pt.required.show?M`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${i.indexOf(this._entity)}>
                    ${i.map((t=>M` <paper-item>${t}</paper-item> `))}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${pt.actions.icon}`}></ha-icon>
            <div class="title">${pt.actions.name}</div>
          </div>
          <div class="secondary">${pt.actions.secondary}</div>
        </div>
        ${pt.actions.show?M`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${pt.actions.options.tap.icon}`}></ha-icon>
                    <div class="title">${pt.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${pt.actions.options.tap.secondary}</div>
                </div>
                ${pt.actions.options.tap.show?M`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${pt.actions.options.hold.icon}`}></ha-icon>
                    <div class="title">${pt.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${pt.actions.options.hold.secondary}</div>
                </div>
                ${pt.actions.options.hold.show?M`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${pt.actions.options.double_tap.icon}`}></ha-icon>
                    <div class="title">${pt.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${pt.actions.options.double_tap.secondary}</div>
                </div>
                ${pt.actions.options.double_tap.show?M`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${pt.appearance.icon}`}></ha-icon>
            <div class="title">${pt.appearance.name}</div>
          </div>
          <div class="secondary">${pt.appearance.secondary}</div>
        </div>
        ${pt.appearance.show?M`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-formfield .label=${"Toggle warning "+(this._show_warning?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_warning}
                    .configValue=${"show_warning"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${"Toggle error "+(this._show_error?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_error}
                    .configValue=${"show_error"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}_handleCardPicked(t){if(t.stopPropagation(),!this._config)return;const e=t.detail.config;this._config=Object.assign(Object.assign({},this._config),{card:e}),at(this,"config-changed",{config:this._config})}_handleConfigChanged(t){if(t.stopPropagation(),!this._config)return;const e=t.detail.config;this._config=Object.assign(Object.assign({},this._config),{card:e}),this._guiModeAvailable=t.detail.guiModeAvailable,at(this,"config-changed",{config:this._config})}_handleGUIModeChanged(t){t.stopPropagation(),this._GUImode=t.detail.guiMode,this._guiModeAvailable=t.detail.guiModeAvailable}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(t){this._toggleThing(t,pt.actions.options)}_toggleOption(t){this._toggleThing(t,pt)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;if(this[`_${e.configValue}`]!==e.value){if(e.configValue)if(""===e.value){const t=Object.assign({},this._config);delete t[e.configValue],this._config=t}else this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value});at(this,"config-changed",{config:this._config})}}static get styles(){return s`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};function vt(){let t,e,i=null,o=null;const n={drawShadow:!0,drawText:!0,drawPercentageSign:!0,drawBubbles:!0,fontSize:"70px",fontFamily:"Arial",fontFillStyle:"white",size:300,borderWidth:25,backgroundColor:"#e2e2e2",foregroundColor:"#fafafa"};let s=0,r=0;const a={fillStyle:"purple",angle:0,horizontalPosition:0,angularSpeed:0,maxAmplitude:9,frequency:30,horizontalSpeed:-150,initialHeight:0},l={fillStyle:"pink",angle:0,horizontalPosition:0,angularSpeed:140,maxAmplitude:12,frequency:40,horizontalSpeed:150,initialHeight:0},d={bubbles:[],amount:12,speed:20,current:0,swing:0,size:2,reset:function(t){const e=n.size-(n.size-g())/2-n.borderWidth,i=s*(g()-2*n.borderWidth)/100;t.r=v(this.size,2*this.size)/2,t.x=v(0,n.size),t.y=v(e,e-i),t.velX=0,t.velY=v(this.speed,2*this.speed),t.swing=v(0,2*Math.PI)},init(){for(let t=0;t<this.amount;t++){const t=n.size-(n.size-g())/2-n.borderWidth,e=s*(g()-2*n.borderWidth)/100;this.bubbles.push({x:v(0,n.size),y:v(t,t-e),r:v(this.size,2*this.size)/2,velX:0,velY:v(this.speed,2*this.speed)})}}};function c(){const e=(new Date).getTime();o=(e-(i||e))/1e3,i=e,requestAnimationFrame(c),t&&t.clearRect(0,0,n.width,n.height),t&&(t.save(),t.fillStyle=n.backgroundColor,t.beginPath(),t.arc(n.size/2,n.size/2,g()-n.borderWidth,0,2*Math.PI),t.rect(0,0,n.width,n.height),t.closePath(),t.fill(),t.restore()),function(e){t&&(t.save(),t.arc(n.size/2,n.size/2,g()/2-n.borderWidth,0,2*Math.PI),t.clip(),h(l,e),h(a,e),n.drawBubbles&&u(e),t.restore())}(o),n.drawText&&function(){const e=n.drawPercentageSign?s.toFixed(0)+"%":s.toFixed(0);t&&(t.save(),t.font=n.fontSize+" "+n.fontFamily,t.fillStyle=n.fontFillStyle,t.textAlign="center",t.textBaseline="middle",t.filter="drop-shadow(0px 0px 5px rgba(0,0,0,0.4))",t.fillText(e,n.size/2,n.size/2),t.restore())}()}function h(e,i){e.angularSpeed>0&&(e.angle+=e.angularSpeed*i,e.angle=e.angle<0?e.angle+360:e.angle),e.horizontalPosition+=e.horizontalSpeed*i,e.horizontalSpeed>0?!(e.horizontalPosition>Math.pow(2,53))&&e.horizontalPosition:e.horizontalPosition<0&&!(e.horizontalPosition<-1*Math.pow(2,53))&&e.horizontalPosition;let o=0,a=0;const l=e.maxAmplitude*Math.sin(e.angle*Math.PI/180),d=n.size-(n.size-g())/2-n.borderWidth,c=s*(g()-2*n.borderWidth)/100;if(s<r?s+=15*i:s>r&&(s-=15*i),e.initialHeight=d-c,t){for(t.save(),t.beginPath(),t.lineTo(0,e.initialHeight);o<n.size;)a=e.initialHeight+l*Math.sin((o+e.horizontalPosition)/e.frequency),t.lineTo(o,a),o++;t.lineTo(o,n.size),t.lineTo(0,n.size),t.closePath(),t.fillStyle=e.fillStyle,t.fill(),t.clip(),t.restore()}}function u(e){if(t){t.save();for(let i=0;i<d.bubbles.length;i++){const o=d.bubbles[i];t.beginPath(),t.strokeStyle="white",t.arc(o.x,o.y,o.r,2*Math.PI,2*Math.PI,!1),t.stroke(),t.closePath();const r=d.current*e;o.velX=Math.abs(o.velX)<Math.abs(d.current)?o.velX+r:d.current,o.y=o.y-o.velY*e,o.x=o.x+0+.5*o.velX;const a=n.size-(n.size-g())/2-n.borderWidth,l=s*(g()-2*n.borderWidth)/100;o.y<=a-l&&d.reset(o)}t.restore()}}function p(t,e,i){return Math.min(Math.max(t,e),i)}function g(){return.9*n.size}function v(t,e){const i=e-t;return e===t?t:Math.random()*i+t}return{init:function(i){if(!i.targetContainer)throw"empty or invalid container";e=i.targetContainer,r=p(i.fillPercentage,0,100),i.options&&(n.drawShadow=!1!==i.options.drawShadow,n.size=i.options.size,n.width=i.options.width,n.height=i.options.height,n.drawBubbles=!1!==i.options.drawBubbles,n.borderWidth=i.options.borderWidth||n.borderWidth,n.foregroundFluidColor=i.options.foregroundFluidColor||n.foregroundFluidColor,n.backgroundFluidColor=i.options.backgroundFluidColor||n.backgroundFluidColor,n.backgroundColor=i.options.backgroundColor||n.backgroundColor,n.foregroundColor=i.options.foregroundColor||n.foregroundColor,n.drawText=!1!==i.options.drawText,n.drawPercentageSign=!1!==i.options.drawPercentageSign,n.fontSize=i.options.fontSize||n.fontSize,n.fontFamily=i.options.fontFamily||n.fontFamily,n.fontFillStyle=i.options.fontFillStyle||n.fontFillStyle,i.options.foregroundFluidLayer&&(a.fillStyle=i.options.foregroundFluidLayer.fillStyle||a.fillStyle,a.angularSpeed=i.options.foregroundFluidLayer.angularSpeed||a.angularSpeed,a.maxAmplitude=i.options.foregroundFluidLayer.maxAmplitude||a.maxAmplitude,a.frequency=i.options.foregroundFluidLayer.frequency||a.frequency,a.horizontalSpeed=i.options.foregroundFluidLayer.horizontalSpeed||a.horizontalSpeed),i.options.backgroundFluidLayer&&(l.fillStyle=i.options.backgroundFluidLayer.fillStyle||l.fillStyle,l.angularSpeed=i.options.backgroundFluidLayer.angularSpeed||l.angularSpeed,l.maxAmplitude=i.options.backgroundFluidLayer.maxAmplitude||l.maxAmplitude,l.frequency=i.options.backgroundFluidLayer.frequency||l.frequency,l.horizontalSpeed=i.options.backgroundFluidLayer.horizontalSpeed||l.horizontalSpeed)),d.init(),function(){const i=document.createElement("canvas");i.width=n.width,i.height=n.height,t=i.getContext("2d"),t&&(t.imageSmoothingEnabled=!0,e.appendChild(i),n.drawShadow&&(t.save(),t.beginPath(),t.filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",t.arc(n.size/2,n.size/2,g()/2,0,2*Math.PI),t.closePath(),t.fill(),t.restore()))}(),c()},setPercentage(t){r=p(t,0,100)},setDrawBubbles(t){if(!t)return;requestAnimationFrame((()=>{const t=(new Date).getTime();o=(t-(i||t))/1e3,u(o)}))},setColor(t,e){l.fillStyle=e,a.fillStyle=t}}}t([et({attribute:!1})],gt.prototype,"hass",void 0),t([et({attribute:!1})],gt.prototype,"lovelace",void 0),t([it()],gt.prototype,"_config",void 0),t([it()],gt.prototype,"_selectedCard",void 0),t([it()],gt.prototype,"_GUImode",void 0),t([it()],gt.prototype,"_guiModeAvailable",void 0),t([it()],gt.prototype,"_toggle",void 0),t([it()],gt.prototype,"_helpers",void 0),gt=t([Q("fluid-level-background-card-editor")],gt);let ft=class extends J{constructor(){super(...arguments),this.fm=vt()}render(){return M` <div class="fluid-background"></div> `}static get styles(){return s`
      :host {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .fluid-background {
        background: var(--ha-card-background, var(--card-background-color, white));
      }
    `}requestUpdate(t,e){"value"!==t&&"size"!==t||(this.fm.setPercentage(this.value),super.requestUpdate(t,e))}firstUpdated(){window.setTimeout((()=>{var t,e,i,o,n;const s={targetContainer:null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".fluid-background"),fillPercentage:this.value,options:{fontFamily:"Raleway",drawPercentageSign:!1,drawBubbles:!0,drawShadow:!1,drawText:!1,size:Math.max(null===(e=this.size)||void 0===e?void 0:e.width,null===(i=this.size)||void 0===i?void 0:i.height),width:null===(o=this.size)||void 0===o?void 0:o.width,height:null===(n=this.size)||void 0===n?void 0:n.height,borderWidth:0,backgroundColor:"rgb(28, 28, 28)",foregroundColor:"rgba(28, 28, 28,.5)",foregroundFluidLayer:{fillStyle:"rgba(0, 128, 0,1)",angularSpeed:100,maxAmplitude:8,frequency:30,horizontalSpeed:-75},backgroundFluidLayer:{fillStyle:"rgba(0, 128, 0,.3)",angularSpeed:100,maxAmplitude:6,frequency:30,horizontalSpeed:75}}};this.fm.init(s)}),0)}};t([et()],ft.prototype,"haCard",void 0),t([et()],ft.prototype,"size",void 0),t([et()],ft.prototype,"value",void 0),ft=t([Q("fluid-background")],ft);const mt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class _t extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:mt?"100px":"50px",height:mt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?at(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,at(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,at(t,"action",{action:"double_tap"})):at(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",(t=>{13===t.keyCode&&o(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-fluid-progressbar",_t);const yt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-fluid-progressbar"))return t.querySelector("action-handler-fluid-progressbar");const e=document.createElement("action-handler-fluid-progressbar");return t.appendChild(e),e})();i&&i.bind(t,e)},$t=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{update(t,[e]){return yt(t.element,e),U}render(t){}});var bt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},wt={common:bt},At={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},St={common:At};const Ct={en:Object.freeze({__proto__:null,common:bt,default:wt}),nb:Object.freeze({__proto__:null,common:At,default:St})};function Et(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce(((t,e)=>t[e]),Ct[o])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),Ct.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),Ct.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}console.info(`%c  fluid-level-background-card \n%c  ${Et("common.version")} 0.0.1    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"fluid-level-background-card",name:"Fluid Level Background Card",description:"A card that has a fluid level as the background"});let xt=class extends J{static async getConfigElement(){return document.createElement("fluid-level-background-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Et("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:"FluidProgressBar"},t),this._card=this._createCardElement(t.card)}requestUpdate(t,e){"hass"===t&&this.config.entity&&super.requestUpdate(t,e),"size"===t&&super.requestUpdate(t,e)}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}updated(t){super.updated(t),this._card&&(t.has("hass")||t.has("editMode"))&&this.hass&&(this._card.hass=this.hass)}render(){if(this.config.show_warning)return this._showWarning(Et("common.show_warning"));if(this.config.show_error)return this._showError(Et("common.show_error"));const t=this.config.entity?parseInt(this.hass.states[this.config.entity].state,10):50,e=M` <ha-card
      @action=${this._handleAction}
      .actionHandler=${$t({hasHold:ut(this.config.hold_action),hasDoubleClick:ut(this.config.double_tap_action)})}
      tabindex="0"
      .label=${`FluidProgressBar: ${this.config.entity||"No Entity Defined"}`}
      >${this._card}</ha-card
    >`;return M`
      <div class="container">
        <fluid-background .size=${this.size} .value=${t}></fluid-background>
        ${e}
      </div>
      <style>
        ha-card {
          --ha-card-background: transparent;
          --card-background-color: transparent;
        }
      </style>
    `}firstUpdated(){window.setTimeout((()=>{var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".container");this.size={width:null==e?void 0:e.clientWidth,height:null==e?void 0:e.clientHeight}}),0)}_handleAction(t){this.hass&&this.config&&t.detail.action&&function(t,e,i,o){var n;"double_tap"===o&&i.double_tap_action?n=i.double_tap_action:"hold"===o&&i.hold_action?n=i.hold_action:"tap"===o&&i.tap_action&&(n=i.tap_action),ht(t,e,i,n)}(this,this.hass,this.config,t.detail.action)}_showWarning(t){return M` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),M` ${e} `}_createCardElement(t){const e=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return o("hui-error-card",{type:"error",error:t,config:e})},o=function(t,e){var o=window.document.createElement(t);try{if(!o.setConfig)return;o.setConfig(e)}catch(o){return console.error(t,o),i(o.message,e)}return o};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var n=t.type;if(n&&n.startsWith("custom:"))n=n.substr("custom:".length);else if(e)if(lt.has(n))n="hui-"+n+"-row";else{if(!t.entity)return i("Invalid config given.",t);var s=t.entity.split(".",1)[0];n="hui-"+(dt[s]||"text")+"-entity-row"}else n="hui-"+n+"-card";if(customElements.get(n))return o(n,t);var r=i("Custom element doesn't exist: "+t.type+".",t);r.style.display="None";var a=setTimeout((function(){r.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(a),at(r,"ll-rebuild",{},r)})),r}(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(e,t)}),{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(i,t),this._card=i}static get styles(){return s`
      .container {
        position: relative;
      }

      ha-card {
        position: relative;
        background: transparent;
      }
    `}};t([et({attribute:!1})],xt.prototype,"hass",void 0),t([et({attribute:!1})],xt.prototype,"size",void 0),t([it()],xt.prototype,"_card",void 0),t([it()],xt.prototype,"config",void 0),xt=t([Q("fluid-level-background-card")],xt);export{xt as FluidProgressBarCard};
