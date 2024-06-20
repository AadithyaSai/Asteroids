const __vite__fileDeps=["assets/browserAll-DdDpAYwK.js","assets/webworkerAll-CkeLcqDJ.js","assets/colorToUniform-K-YEOKy3.js","assets/CanvasPool-80aenYPx.js","assets/batchSamplersUniformGroup-DA2T2TpU.js","assets/WebGPURenderer-CHMa6hVG.js","assets/SharedSystems-dj_mj_SW.js","assets/WebGLRenderer-BOw7k4Ls.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ga="modulepreload",xa=function(n){return"/Asteroids/"+n},ii={},hn=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(t.map(a=>{if(a=xa(a),a in ii)return;ii[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":ga,l||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var E=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n))(E||{});const Jn=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},Xt=(n,e)=>Jn(n).priority??e,de={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(Jn).forEach(e=>{e.type.forEach(t=>{var r,i;return(i=(r=this._removeHandlers)[t])==null?void 0:i.call(r,e)})}),this},add(...n){return n.map(Jn).forEach(e=>{e.type.forEach(t=>{var s,o;const r=this._addHandlers,i=this._queue;r[t]?(o=r[t])==null||o.call(r,e):(i[t]=i[t]||[],(s=i[t])==null||s.push(e))})}),this},handle(n,e,t){var o;const r=this._addHandlers,i=this._removeHandlers;if(r[n]||i[n])throw new Error(`Extension type ${n} already has a handler`);r[n]=e,i[n]=t;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(a=>e(a)),delete s[n]),this},handleByMap(n,e){return this.handle(n,t=>{t.name&&(e[t.name]=t.ref)},t=>{t.name&&delete e[t.name]})},handleByNamedList(n,e,t=-1){return this.handle(n,r=>{e.findIndex(s=>s.name===r.name)>=0||(e.push({name:r.name,value:r.ref}),e.sort((s,o)=>Xt(o.value,t)-Xt(s.value,t)))},r=>{const i=e.findIndex(s=>s.name===r.name);i!==-1&&e.splice(i,1)})},handleByList(n,e,t=-1){return this.handle(n,r=>{e.includes(r.ref)||(e.push(r.ref),e.sort((i,s)=>Xt(s,t)-Xt(i,t)))},r=>{const i=e.indexOf(r.ref);i!==-1&&e.splice(i,1)})}},va={extension:{type:E.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await hn(()=>import("./browserAll-DdDpAYwK.js"),__vite__mapDeps([0,1,2,3,4]))}},ya={extension:{type:E.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await hn(()=>import("./webworkerAll-CkeLcqDJ.js"),__vite__mapDeps([1,2,3,4]))}};class Z{constructor(e,t,r){this._x=t||0,this._y=r||0,this._observer=e}clone(e){return new Z(e??this._observer,this._x,this._y)}set(e=0,t=e){return(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this._observer._onUpdate(this)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this._observer._onUpdate(this)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this._observer._onUpdate(this))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this._observer._onUpdate(this))}}function Or(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zi={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function s(l,c,u,h,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new i(u,h||l,f),m=t?t+c:c;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,h;if(this._eventsCount===0)return c;for(h in u=this._events)e.call(u,h)&&c.push(t?h.slice(1):h);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=t?t+c:c,h=this._events[u];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,d=h.length,m=new Array(d);f<d;f++)m[f]=h[f].fn;return m},a.prototype.listenerCount=function(c){var u=t?t+c:c,h=this._events[u];return h?h.fn?1:h.length:0},a.prototype.emit=function(c,u,h,f,d,m){var g=t?t+c:c;if(!this._events[g])return!1;var p=this._events[g],v=arguments.length,x,y;if(p.fn){switch(p.once&&this.removeListener(c,p.fn,void 0,!0),v){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,h),!0;case 4:return p.fn.call(p.context,u,h,f),!0;case 5:return p.fn.call(p.context,u,h,f,d),!0;case 6:return p.fn.call(p.context,u,h,f,d,m),!0}for(y=1,x=new Array(v-1);y<v;y++)x[y-1]=arguments[y];p.fn.apply(p.context,x)}else{var _=p.length,I;for(y=0;y<_;y++)switch(p[y].once&&this.removeListener(c,p[y].fn,void 0,!0),v){case 1:p[y].fn.call(p[y].context);break;case 2:p[y].fn.call(p[y].context,u);break;case 3:p[y].fn.call(p[y].context,u,h);break;case 4:p[y].fn.call(p[y].context,u,h,f);break;default:if(!x)for(I=1,x=new Array(v-1);I<v;I++)x[I-1]=arguments[I];p[y].fn.apply(p[y].context,x)}}return!0},a.prototype.on=function(c,u,h){return s(this,c,u,h,!1)},a.prototype.once=function(c,u,h){return s(this,c,u,h,!0)},a.prototype.removeListener=function(c,u,h,f){var d=t?t+c:c;if(!this._events[d])return this;if(!u)return o(this,d),this;var m=this._events[d];if(m.fn)m.fn===u&&(!f||m.once)&&(!h||m.context===h)&&o(this,d);else{for(var g=0,p=[],v=m.length;g<v;g++)(m[g].fn!==u||f&&!m[g].once||h&&m[g].context!==h)&&p.push(m[g]);p.length?this._events[d]=p.length===1?p[0]:p:o(this,d)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=t?t+c:c,this._events[u]&&o(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a})(Zi);var _a=Zi.exports;const ce=Or(_a),ba=Math.PI*2,Aa=180/Math.PI,lt=Math.PI/180;class ne{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}clone(){return new ne(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,t=e){return this.x=e,this.y=t,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Cn.x=0,Cn.y=0,Cn}}const Cn=new ne;class V{constructor(e=1,t=0,r=0,i=1,s=0,o=0){this.array=null,this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=o}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,t,r,i,s,o){return this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=o,this}toArray(e,t){this.array||(this.array=new Float32Array(9));const r=t||this.array;return e?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(e,t){t=t||new ne;const r=e.x,i=e.y;return t.x=this.a*r+this.c*i+this.tx,t.y=this.b*r+this.d*i+this.ty,t}applyInverse(e,t){t=t||new ne;const r=this.a,i=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,c=1/(r*o+s*-i),u=e.x,h=e.y;return t.x=o*c*u+-s*c*h+(l*s-a*o)*c,t.y=r*c*h+-i*c*u+(-l*r+a*i)*c,t}translate(e,t){return this.tx+=e,this.ty+=t,this}scale(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),i=this.a,s=this.c,o=this.tx;return this.a=i*t-this.b*r,this.b=i*r+this.b*t,this.c=s*t-this.d*r,this.d=s*r+this.d*t,this.tx=o*t-this.ty*r,this.ty=o*r+this.ty*t,this}append(e){const t=this.a,r=this.b,i=this.c,s=this.d;return this.a=e.a*t+e.b*i,this.b=e.a*r+e.b*s,this.c=e.c*t+e.d*i,this.d=e.c*r+e.d*s,this.tx=e.tx*t+e.ty*i+this.tx,this.ty=e.tx*r+e.ty*s+this.ty,this}appendFrom(e,t){const r=e.a,i=e.b,s=e.c,o=e.d,a=e.tx,l=e.ty,c=t.a,u=t.b,h=t.c,f=t.d;return this.a=r*c+i*h,this.b=r*u+i*f,this.c=s*c+o*h,this.d=s*u+o*f,this.tx=a*c+l*h+t.tx,this.ty=a*u+l*f+t.ty,this}setTransform(e,t,r,i,s,o,a,l,c){return this.a=Math.cos(a+c)*s,this.b=Math.sin(a+c)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=e-(r*this.a+i*this.c),this.ty=t-(r*this.b+i*this.d),this}prepend(e){const t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const r=this.a,i=this.c;this.a=r*e.a+this.b*e.c,this.b=r*e.b+this.b*e.d,this.c=i*e.a+this.d*e.c,this.d=i*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this}decompose(e){const t=this.a,r=this.b,i=this.c,s=this.d,o=e.pivot,a=-Math.atan2(-i,s),l=Math.atan2(r,t),c=Math.abs(a+l);return c<1e-5||Math.abs(ba-c)<1e-5?(e.rotation=l,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=a,e.skew.y=l),e.scale.x=Math.sqrt(t*t+r*r),e.scale.y=Math.sqrt(i*i+s*s),e.position.x=this.tx+(o.x*t+o.y*i),e.position.y=this.ty+(o.x*r+o.y*s),e}invert(){const e=this.a,t=this.b,r=this.c,i=this.d,s=this.tx,o=e*i-t*r;return this.a=i/o,this.b=-t/o,this.c=-r/o,this.d=e/o,this.tx=(r*this.ty-i*s)/o,this.ty=-(e*this.ty-t*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new V;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Ca.identity()}static get shared(){return Sa.identity()}}const Sa=new V,Ca=new V,Ve=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Xe=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Ye=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],We=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],er=[],Qi=[],Yt=Math.sign;function wa(){for(let n=0;n<16;n++){const e=[];er.push(e);for(let t=0;t<16;t++){const r=Yt(Ve[n]*Ve[t]+Ye[n]*Xe[t]),i=Yt(Xe[n]*Ve[t]+We[n]*Xe[t]),s=Yt(Ve[n]*Ye[t]+Ye[n]*We[t]),o=Yt(Xe[n]*Ye[t]+We[n]*We[t]);for(let a=0;a<16;a++)if(Ve[a]===r&&Xe[a]===i&&Ye[a]===s&&We[a]===o){e.push(a);break}}}for(let n=0;n<16;n++){const e=new V;e.set(Ve[n],Xe[n],Ye[n],We[n],0,0),Qi.push(e)}}wa();const $={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Ve[n],uY:n=>Xe[n],vX:n=>Ye[n],vY:n=>We[n],inv:n=>n&8?n&15:-n&7,add:(n,e)=>er[n][e],sub:(n,e)=>er[n][$.inv(e)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,e)=>Math.abs(n)*2<=Math.abs(e)?e>=0?$.S:$.N:Math.abs(e)*2<=Math.abs(n)?n>0?$.E:$.W:e>0?n>0?$.SE:$.SW:n>0?$.NE:$.NW,matrixAppendRotationInv:(n,e,t=0,r=0)=>{const i=Qi[$.inv(e)];i.tx=t,i.ty=r,n.append(i)}},Wt=[new ne,new ne,new ne,new ne];class Q{constructor(e=0,t=0,r=0,i=0){this.type="rectangle",this.x=Number(e),this.y=Number(t),this.width=Number(r),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Q(0,0,0,0)}clone(){return new Q(this.x,this.y,this.width,this.height)}copyFromBounds(e){return this.x=e.minX,this.y=e.minY,this.width=e.maxX-e.minX,this.height=e.maxY-e.minY,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}strokeContains(e,t,r){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-r/2,c=o+i+r/2,u=a-r/2,h=a+s+r/2,f=o+r/2,d=o+i-r/2,m=a+r/2,g=a+s-r/2;return e>=l&&e<=c&&t>=u&&t<=h&&!(e>f&&e<d&&t>m&&t<g)}intersects(e,t){if(!t){const P=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=P)return!1;const b=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>b}const r=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=r||o<=s)return!1;const a=Wt[0].set(e.left,e.top),l=Wt[1].set(e.left,e.bottom),c=Wt[2].set(e.right,e.top),u=Wt[3].set(e.right,e.bottom);if(c.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(t.a*t.d-t.b*t.c);if(h===0||(t.apply(a,a),t.apply(l,l),t.apply(c,c),t.apply(u,u),Math.max(a.x,l.x,c.x,u.x)<=r||Math.min(a.x,l.x,c.x,u.x)>=i||Math.max(a.y,l.y,c.y,u.y)<=s||Math.min(a.y,l.y,c.y,u.y)>=o))return!1;const f=h*(l.y-a.y),d=h*(a.x-l.x),m=f*r+d*s,g=f*i+d*s,p=f*r+d*o,v=f*i+d*o;if(Math.max(m,g,p,v)<=f*a.x+d*a.y||Math.min(m,g,p,v)>=f*u.x+d*u.y)return!1;const x=h*(a.y-c.y),y=h*(c.x-a.x),_=x*r+y*s,I=x*i+y*s,O=x*r+y*o,T=x*i+y*o;return!(Math.max(_,I,O,T)<=x*a.x+y*a.y||Math.min(_,I,O,T)>=x*u.x+y*u.y)}pad(e=0,t=e){return this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this}fit(e){const t=Math.max(this.x,e.x),r=Math.min(this.x+this.width,e.x+e.width),i=Math.max(this.y,e.y),s=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(r-t,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(e=1,t=.001){const r=Math.ceil((this.x+this.width-t)*e)/e,i=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=r-this.x,this.height=i-this.y,this}enlarge(e){const t=Math.min(this.x,e.x),r=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),s=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=r-t,this.y=i,this.height=s-i,this}getBounds(e){return e=e||new Q,e.copyFrom(this),e}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const wn={default:-1};function J(n="default"){return wn[n]===void 0&&(wn[n]=-1),++wn[n]}const si={},ye="8.0.0";function R(n,e,t=3){if(si[e])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${n}`):(r=r.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${e}
Deprecated since v${n}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${n}`),console.warn(r))),si[e]=!0}const Ji=()=>{};function oi(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function ai(n){return!(n&n-1)&&!!n}function Ta(n){const e={};for(const t in n)n[t]!==void 0&&(e[t]=n[t]);return e}const li=Object.create(null);function Pa(n){const e=li[n];return e===void 0&&(li[n]=J("resource")),e}const es=class ts extends ce{constructor(e={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,e={...ts.defaultOptions,...e},this.addressMode=e.addressMode,this.addressModeU=e.addressModeU??this.addressModeU,this.addressModeV=e.addressModeV??this.addressModeV,this.addressModeW=e.addressModeW??this.addressModeW,this.scaleMode=e.scaleMode,this.magFilter=e.magFilter??this.magFilter,this.minFilter=e.minFilter??this.minFilter,this.mipmapFilter=e.mipmapFilter??this.mipmapFilter,this.lodMinClamp=e.lodMinClamp,this.lodMaxClamp=e.lodMaxClamp,this.compare=e.compare,this.maxAnisotropy=e.maxAnisotropy??1}set addressMode(e){this.addressModeU=e,this.addressModeV=e,this.addressModeW=e}get addressMode(){return this.addressModeU}set wrapMode(e){R(ye,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=e}get wrapMode(){return this.addressMode}set scaleMode(e){this.magFilter=e,this.minFilter=e,this.mipmapFilter=e}get scaleMode(){return this.magFilter}set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const e=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=Pa(e),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};es.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Ia=es;const ns=class rs extends ce{constructor(e={}){super(),this.options=e,this.uid=J("textureSource"),this._resourceType="textureSource",this._resourceId=J("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,e={...rs.defaultOptions,...e},this.label=e.label??"",this.resource=e.resource,this.autoGarbageCollect=e.autoGarbageCollect,this._resolution=e.resolution,e.width?this.pixelWidth=e.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,e.height?this.pixelHeight=e.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=e.format,this.dimension=e.dimensions,this.mipLevelCount=e.mipLevelCount,this.autoGenerateMipmaps=e.autoGenerateMipmaps,this.sampleCount=e.sampleCount,this.antialias=e.antialias,this.alphaMode=e.alphaMode,this.style=new Ia(Ta(e)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(e){var t,r;this.style!==e&&((t=this._style)==null||t.off("change",this._onStyleChange,this),this._style=e,(r=this._style)==null||r.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(e){this._style.addressMode=e}get repeatMode(){return this._style.addressMode}set repeatMode(e){this._style.addressMode=e}get magFilter(){return this._style.magFilter}set magFilter(e){this._style.magFilter=e}get minFilter(){return this._style.minFilter}set minFilter(e){this._style.minFilter=e}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(e){this._style.mipmapFilter=e}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(e){this._style.lodMinClamp=e}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(e){this._style.lodMaxClamp=e}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=J("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}get resourceHeight(){const{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this.width=this.pixelWidth/e,this.height=this.pixelHeight/e)}resize(e,t,r){r=r||this._resolution,e=e||this.width,t=t||this.height;const i=Math.round(e*r),s=Math.round(t*r);return this.width=i/r,this.height=s/r,this._resolution=r,this.pixelWidth===i&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=s,this.emit("resize",this),this._resourceId=J("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(e){this._style.wrapMode=e}get wrapMode(){return this._style.wrapMode}set scaleMode(e){this._style.scaleMode=e}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=ai(this.pixelWidth)&&ai(this.pixelHeight)}static test(e){throw new Error("Unimplemented")}};ns.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let we=ns;class Rr extends we{constructor(e){const t=e.resource||new Float32Array(e.width*e.height*4);let r=e.format;r||(t instanceof Float32Array?r="rgba32float":t instanceof Int32Array||t instanceof Uint32Array?r="rgba32uint":t instanceof Int16Array||t instanceof Uint16Array?r="rgba16uint":(t instanceof Int8Array,r="bgra8unorm")),super({...e,resource:t,format:r}),this.uploadMethodId="buffer"}static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}Rr.extension=E.TextureSource;const ui=new V;class Fa{constructor(e,t){this.mapCoord=new V,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof t>"u"?this.clampMargin=e.width<10?0:.5:this.clampMargin=t,this.isSimple=!1,this.texture=e}get texture(){return this._texture}set texture(e){var t;this.texture!==e&&((t=this._texture)==null||t.removeListener("update",this.update,this),this._texture=e,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(e,t){t===void 0&&(t=e);const r=this.mapCoord;for(let i=0;i<e.length;i+=2){const s=e[i],o=e[i+1];t[i]=s*r.a+o*r.c+r.tx,t[i+1]=s*r.b+o*r.d+r.ty}return t}update(){const e=this._texture;this._updateID++;const t=e.uvs;this.mapCoord.set(t.x1-t.x0,t.y1-t.y0,t.x3-t.x0,t.y3-t.y0,t.x0,t.y0);const r=e.orig,i=e.trim;i&&(ui.set(r.width/i.width,0,0,r.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(ui));const s=e.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset;return o[0]=(e.frame.x+a+l)/s.width,o[1]=(e.frame.y+a+l)/s.height,o[2]=(e.frame.x+e.frame.width-a+l)/s.width,o[3]=(e.frame.y+e.frame.height-a+l)/s.height,this.uClampOffset[0]=l/s.pixelWidth,this.uClampOffset[1]=l/s.pixelHeight,this.isSimple=e.frame.width===s.width&&e.frame.height===s.height&&e.rotate===0,!0}}class M extends ce{constructor({source:e,label:t,frame:r,orig:i,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:c}={}){if(super(),this.uid=J("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Q,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=t,this.source=(e==null?void 0:e.source)??new we,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:u,height:h}=this._source;this.frame.width=u,this.frame.height=h}this.orig=i||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=c||!1,this.updateUvs()}set source(e){this._source&&this._source.off("resize",this.update,this),this._source=e,e.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Fa(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:e,frame:t}=this,{width:r,height:i}=this._source,s=t.x/r,o=t.y/i,a=t.width/r,l=t.height/i;let c=this.rotate;if(c){const u=a/2,h=l/2,f=s+u,d=o+h;c=$.add(c,$.NW),e.x0=f+u*$.uX(c),e.y0=d+h*$.uY(c),c=$.add(c,2),e.x1=f+u*$.uX(c),e.y1=d+h*$.uY(c),c=$.add(c,2),e.x2=f+u*$.uX(c),e.y2=d+h*$.uY(c),c=$.add(c,2),e.x3=f+u*$.uX(c),e.y3=d+h*$.uY(c)}else e.x0=s,e.y0=o,e.x1=s+a,e.y1=o,e.x2=s+a,e.y2=o+l,e.x3=s,e.y3=o+l}destroy(e=!1){this._source&&e&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return R(ye,"Texture.baseTexture is now Texture.source"),this._source}}M.EMPTY=new M({label:"EMPTY",source:new we({label:"EMPTY"})});M.EMPTY.destroy=Ji;M.WHITE=new M({source:new Rr({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});M.WHITE.destroy=Ji;function Ma(n,e,t,r){const{width:i,height:s}=t.orig,o=t.trim;if(o){const a=o.width,l=o.height;n.minX=o.x-e._x*i-r,n.maxX=n.minX+a,n.minY=o.y-e._y*s-r,n.maxY=n.minY+l}else n.minX=-e._x*i-r,n.maxX=n.minX+i,n.minY=-e._y*s-r,n.maxY=n.minY+s}var za={grad:.9,turn:360,rad:360/(2*Math.PI)},Te=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},te=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*n)/t+0},me=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),n>t?t:n>e?n:e},is=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},ci=function(n){return{r:me(n.r,0,255),g:me(n.g,0,255),b:me(n.b,0,255),a:me(n.a)}},Tn=function(n){return{r:te(n.r),g:te(n.g),b:te(n.b),a:te(n.a,3)}},Ea=/^#([0-9a-f]{3,8})$/i,Ht=function(n){var e=n.toString(16);return e.length<2?"0"+e:e},ss=function(n){var e=n.r,t=n.g,r=n.b,i=n.a,s=Math.max(e,t,r),o=s-Math.min(e,t,r),a=o?s===e?(t-r)/o:s===t?2+(r-e)/o:4+(e-t)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:i}},os=function(n){var e=n.h,t=n.s,r=n.v,i=n.a;e=e/360*6,t/=100,r/=100;var s=Math.floor(e),o=r*(1-t),a=r*(1-(e-s)*t),l=r*(1-(1-e+s)*t),c=s%6;return{r:255*[r,a,o,o,l,r][c],g:255*[l,r,r,a,o,o][c],b:255*[o,o,l,r,r,a][c],a:i}},hi=function(n){return{h:is(n.h),s:me(n.s,0,100),l:me(n.l,0,100),a:me(n.a)}},fi=function(n){return{h:te(n.h),s:te(n.s),l:te(n.l),a:te(n.a,3)}},di=function(n){return os((t=(e=n).s,{h:e.h,s:(t*=((r=e.l)<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}));var e,t,r},It=function(n){return{h:(e=ss(n)).h,s:(i=(200-(t=e.s))*(r=e.v)/100)>0&&i<200?t*r/100/(i<=100?i:200-i)*100:0,l:i/2,a:e.a};var e,t,r,i},Oa=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ra=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ba=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ua=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,tr={string:[[function(n){var e=Ea.exec(n);return e?(n=e[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?te(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?te(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var e=Ba.exec(n)||Ua.exec(n);return e?e[2]!==e[4]||e[4]!==e[6]?null:ci({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(n){var e=Oa.exec(n)||Ra.exec(n);if(!e)return null;var t,r,i=hi({h:(t=e[1],r=e[2],r===void 0&&(r="deg"),Number(t)*(za[r]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return di(i)},"hsl"]],object:[[function(n){var e=n.r,t=n.g,r=n.b,i=n.a,s=i===void 0?1:i;return Te(e)&&Te(t)&&Te(r)?ci({r:Number(e),g:Number(t),b:Number(r),a:Number(s)}):null},"rgb"],[function(n){var e=n.h,t=n.s,r=n.l,i=n.a,s=i===void 0?1:i;if(!Te(e)||!Te(t)||!Te(r))return null;var o=hi({h:Number(e),s:Number(t),l:Number(r),a:Number(s)});return di(o)},"hsl"],[function(n){var e=n.h,t=n.s,r=n.v,i=n.a,s=i===void 0?1:i;if(!Te(e)||!Te(t)||!Te(r))return null;var o=function(a){return{h:is(a.h),s:me(a.s,0,100),v:me(a.v,0,100),a:me(a.a)}}({h:Number(e),s:Number(t),v:Number(r),a:Number(s)});return os(o)},"hsv"]]},mi=function(n,e){for(var t=0;t<e.length;t++){var r=e[t][0](n);if(r)return[r,e[t][1]]}return[null,void 0]},La=function(n){return typeof n=="string"?mi(n.trim(),tr.string):typeof n=="object"&&n!==null?mi(n,tr.object):[null,void 0]},Pn=function(n,e){var t=It(n);return{h:t.h,s:me(t.s+100*e,0,100),l:t.l,a:t.a}},In=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},pi=function(n,e){var t=It(n);return{h:t.h,s:t.s,l:me(t.l+100*e,0,100),a:t.a}},nr=function(){function n(e){this.parsed=La(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return te(In(this.rgba),2)},n.prototype.isDark=function(){return In(this.rgba)<.5},n.prototype.isLight=function(){return In(this.rgba)>=.5},n.prototype.toHex=function(){return e=Tn(this.rgba),t=e.r,r=e.g,i=e.b,o=(s=e.a)<1?Ht(te(255*s)):"","#"+Ht(t)+Ht(r)+Ht(i)+o;var e,t,r,i,s,o},n.prototype.toRgb=function(){return Tn(this.rgba)},n.prototype.toRgbString=function(){return e=Tn(this.rgba),t=e.r,r=e.g,i=e.b,(s=e.a)<1?"rgba("+t+", "+r+", "+i+", "+s+")":"rgb("+t+", "+r+", "+i+")";var e,t,r,i,s},n.prototype.toHsl=function(){return fi(It(this.rgba))},n.prototype.toHslString=function(){return e=fi(It(this.rgba)),t=e.h,r=e.s,i=e.l,(s=e.a)<1?"hsla("+t+", "+r+"%, "+i+"%, "+s+")":"hsl("+t+", "+r+"%, "+i+"%)";var e,t,r,i,s},n.prototype.toHsv=function(){return e=ss(this.rgba),{h:te(e.h),s:te(e.s),v:te(e.v),a:te(e.a,3)};var e},n.prototype.invert=function(){return _e({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},n.prototype.saturate=function(e){return e===void 0&&(e=.1),_e(Pn(this.rgba,e))},n.prototype.desaturate=function(e){return e===void 0&&(e=.1),_e(Pn(this.rgba,-e))},n.prototype.grayscale=function(){return _e(Pn(this.rgba,-1))},n.prototype.lighten=function(e){return e===void 0&&(e=.1),_e(pi(this.rgba,e))},n.prototype.darken=function(e){return e===void 0&&(e=.1),_e(pi(this.rgba,-e))},n.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},n.prototype.alpha=function(e){return typeof e=="number"?_e({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):te(this.rgba.a,3);var t},n.prototype.hue=function(e){var t=It(this.rgba);return typeof e=="number"?_e({h:e,s:t.s,l:t.l,a:t.a}):te(t.h)},n.prototype.isEqual=function(e){return this.toHex()===_e(e).toHex()},n}(),_e=function(n){return n instanceof nr?n:new nr(n)},gi=[],ka=function(n){n.forEach(function(e){gi.indexOf(e)<0&&(e(nr,tr),gi.push(e))})};function Da(n,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var i in t)r[t[i]]=i;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,c=r[this.toHex()];if(c)return c;if(o!=null&&o.closest){var u=this.toRgb(),h=1/0,f="black";if(!s.length)for(var d in t)s[d]=new n(t[d]).toRgb();for(var m in t){var g=(a=u,l=s[m],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<h&&(h=g,f=m)}return f}},e.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":t[a];return l?new n(l).toRgb():null},"name"])}ka([Da]);const ut=class Ct{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof Ct)this._value=this._cloneSource(e._value),this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,e))&&(this._normalize(e),this._value=this._cloneSource(e))}}get value(){return this._value}_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?{...e}:e}_isSourceEqual(e,t){const r=typeof e;if(r!==typeof t)return!1;if(r==="number"||r==="string"||e instanceof Number)return e===t;if(Array.isArray(e)&&Array.isArray(t)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(t))return e.length!==t.length?!1:e.every((s,o)=>s===t[o]);if(e!==null&&t!==null){const s=Object.keys(e),o=Object.keys(t);return s.length!==o.length?!1:s.every(a=>e[a]===t[a])}return e===t}toRgba(){const[e,t,r,i]=this._components;return{r:e,g:t,b:r,a:i}}toRgb(){const[e,t,r]=this._components;return{r:e,g:t,b:r}}toRgbaString(){const[e,t,r]=this.toUint8RgbArray();return`rgba(${e},${t},${r},${this.alpha})`}toUint8RgbArray(e){const[t,r,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb,e[0]=Math.round(t*255),e[1]=Math.round(r*255),e[2]=Math.round(i*255),e}toArray(e){this._arrayRgba||(this._arrayRgba=[]),e=e||this._arrayRgba;const[t,r,i,s]=this._components;return e[0]=t,e[1]=r,e[2]=i,e[3]=s,e}toRgbArray(e){this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb;const[t,r,i]=this._components;return e[0]=t,e[1]=r,e[2]=i,e}toNumber(){return this._int}toBgrNumber(){const[e,t,r]=this.toUint8RgbArray();return(r<<16)+(t<<8)+e}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[t,r,i,s]=Ct._temp.setValue(e)._components;return this._components[0]*=t,this._components[1]*=r,this._components[2]*=i,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(e,t=!0){return t&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this._refreshInt(),this._value=null,this}toPremultiplied(e,t=!0){if(e===1)return(255<<24)+this._int;if(e===0)return t?0:this._int;let r=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return t&&(r=r*e+.5|0,i=i*e+.5|0,s=s*e+.5|0),(e*255<<24)+(r<<16)+(i<<8)+s}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(e){return this._components[3]=this._clamp(e),this}_normalize(e){let t,r,i,s;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const o=e;t=(o>>16&255)/255,r=(o>>8&255)/255,i=(o&255)/255,s=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4)e=this._clamp(e),[t,r,i,s=1]=e;else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4)e=this._clamp(e,0,255),[t,r,i,s=255]=e,t/=255,r/=255,i/=255,s/=255;else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const a=Ct.HEX_PATTERN.exec(e);a&&(e=`#${a[2]}`)}const o=_e(e);o.isValid()&&({r:t,g:r,b:i,a:s}=o.rgba,t/=255,r/=255,i/=255)}if(t!==void 0)this._components[0]=t,this._components[1]=r,this._components[2]=i,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${e}`)}_refreshInt(){this._clamp(this._components);const[e,t,r]=this._components;this._int=(e*255<<16)+(t*255<<8)+(r*255|0)}_clamp(e,t=0,r=1){return typeof e=="number"?Math.min(Math.max(e,t),r):(e.forEach((i,s)=>{e[s]=Math.min(Math.max(i,t),r)}),e)}static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof Ct||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==void 0&&e.g!==void 0&&e.b!==void 0||e.r!==void 0&&e.g!==void 0&&e.b!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0&&e.a!==void 0}};ut.shared=new ut;ut._temp=new ut;ut.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let Y=ut;const Ga={cullArea:null,cullable:!1,cullableChildren:!0};function Na(n,e,t){const r=n.length;let i;if(e>=r||t===0)return;t=e+t>r?r-e:t;const s=r-t;for(i=e;i<s;++i)n[i]=n[i+t];n.length=s}const Va={allowChildren:!0,removeChildren(n=0,e){const t=e??this.children.length,r=t-n,i=[];if(r>0&&r<=t){for(let o=t-1;o>=n;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}Na(this.children,n,t);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(r===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const e=this.getChildAt(n);return this.removeChild(e)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,e)},getChildIndex(n){const e=this.children.indexOf(n);if(e===-1)throw new Error("The supplied Container must be a child of the caller");return e},addChildAt(n,e){this.allowChildren||R(ye,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:t}=this;if(e<0||e>t.length)throw new Error(`${n}addChildAt: The index ${e} supplied is out of bounds ${t.length}`);if(n.parent){const i=n.parent.children.indexOf(n);if(n.parent===this&&i===e)return n;i!==-1&&n.parent.children.splice(i,1)}e===t.length?t.push(n):t.splice(e,0,n),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,e),n.emit("added",this),n},swapChildren(n,e){if(n===e)return;const t=this.getChildIndex(n),r=this.getChildIndex(e);this.children[t]=e,this.children[r]=n},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)}};class xi{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let e=0;e<this.filters.length;e++)this.filters[e].destroy();this.filters=null,this.filterArea=null}}class Br{constructor(e,t){this._pool=[],this._count=0,this._index=0,this._classType=e,t&&this.prepopulate(t)}prepopulate(e){for(let t=0;t<e;t++)this._pool[this._index++]=new this._classType;this._count+=e}get(e){var r;let t;return this._index>0?t=this._pool[--this._index]:t=new this._classType,(r=t.init)==null||r.call(t,e),t}return(e){var t;(t=e.reset)==null||t.call(e),this._pool[this._index++]=e}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class Xa{constructor(){this._poolsByClass=new Map}prepopulate(e,t){this.getPool(e).prepopulate(t)}get(e,t){return this.getPool(e).get(t)}return(e){this.getPool(e.constructor).return(e)}getPool(e){return this._poolsByClass.has(e)||this._poolsByClass.set(e,new Br(e)),this._poolsByClass.get(e)}stats(){const e={};return this._poolsByClass.forEach(t=>{const r=e[t._classType.name]?t._classType.name+t._classType.ID:t._classType.name;e[r]={free:t.totalFree,used:t.totalUsed,size:t.totalSize}}),e}}const Ee=new Xa;class Ya{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})}))}add(e){this._tests.push(e)}getMaskEffect(e){this._initialized||this.init();for(let t=0;t<this._tests.length;t++){const r=this._tests[t];if(r.test(e))return Ee.get(r.maskClass,e)}return e}returnMaskEffect(e){Ee.return(e)}}const rr=new Ya;de.handleByList(E.MaskEffect,rr._effectClasses);const Wa={_maskEffect:null,_filterEffect:null,effects:[],addEffect(n){if(this.effects.indexOf(n)!==-1)return;this.effects.push(n),this.effects.sort((r,i)=>r.priority-i.priority);const t=this.renderGroup||this.parentRenderGroup;t&&(t.structureDidChange=!0),this._updateIsSimple()},removeEffect(n){const e=this.effects.indexOf(n);e!==-1&&(this.effects.splice(e,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(n){const e=this._maskEffect;(e==null?void 0:e.mask)!==n&&(e&&(this.removeEffect(e),rr.returnMaskEffect(e),this._maskEffect=null),n!=null&&(this._maskEffect=rr.getMaskEffect(n),this.addEffect(this._maskEffect)))},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const e=this._filterEffect||(this._filterEffect=new xi);n=n;const t=(n==null?void 0:n.length)>0,r=((s=e.filters)==null?void 0:s.length)>0,i=t!==r;n=Array.isArray(n)?n.slice(0):n,e.filters=Object.freeze(n),i&&(t?this.addEffect(e):(this.removeEffect(e),e.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new xi),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},Ha={label:null,get name(){return R(ye,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){R(ye,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,e=!1){return this.getChildByLabel(n,e)},getChildByLabel(n,e=!1){const t=this.children;for(let r=0;r<t.length;r++){const i=t[r];if(i.label===n||n instanceof RegExp&&n.test(i.label))return i}if(e)for(let r=0;r<t.length;r++){const s=t[r].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,e=!1,t=[]){const r=this.children;for(let i=0;i<r.length;i++){const s=r[i];(s.label===n||n instanceof RegExp&&n.test(s.label))&&t.push(s)}if(e)for(let i=0;i<r.length;i++)r[i].getChildrenByLabel(n,!0,t);return t}},vi=new V;class Re{constructor(e=1/0,t=1/0,r=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=vi,this.minX=e,this.minY=t,this.maxX=r,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Q);const e=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(e.x=0,e.y=0,e.width=0,e.height=0):e.copyFromBounds(this),e}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=vi,this}set(e,t,r,i){this.minX=e,this.minY=t,this.maxX=r,this.maxY=i}addFrame(e,t,r,i,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,c=s.d,u=s.tx,h=s.ty;let f=this.minX,d=this.minY,m=this.maxX,g=this.maxY,p=o*e+l*t+u,v=a*e+c*t+h;p<f&&(f=p),v<d&&(d=v),p>m&&(m=p),v>g&&(g=v),p=o*r+l*t+u,v=a*r+c*t+h,p<f&&(f=p),v<d&&(d=v),p>m&&(m=p),v>g&&(g=v),p=o*e+l*i+u,v=a*e+c*i+h,p<f&&(f=p),v<d&&(d=v),p>m&&(m=p),v>g&&(g=v),p=o*r+l*i+u,v=a*r+c*i+h,p<f&&(f=p),v<d&&(d=v),p>m&&(m=p),v>g&&(g=v),this.minX=f,this.minY=d,this.maxX=m,this.maxY=g}addRect(e,t){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,t)}addBounds(e,t){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,t)}addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX,this.minY=this.minY>e.minY?this.minY:e.minY,this.maxX=this.maxX<e.maxX?this.maxX:e.maxX,this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}applyMatrix(e){const t=this.minX,r=this.minY,i=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:c,tx:u,ty:h}=e;let f=o*t+l*r+u,d=a*t+c*r+h;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*i+l*r+u,d=a*i+c*r+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*t+l*s+u,d=a*t+c*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*i+l*s+u,d=a*i+c*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(e){return this.minX<e.left&&(this.minX=e.left),this.maxX>e.right&&(this.maxX=e.right),this.minY<e.top&&(this.minY=e.top),this.maxY>e.bottom&&(this.maxY=e.bottom),this}fitBounds(e,t,r,i){return this.minX<e&&(this.minX=e),this.maxX>t&&(this.maxX=t),this.minY<r&&(this.minY=r),this.maxY>i&&(this.maxY=i),this}pad(e,t=e){return this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Re(this.minX,this.minY,this.maxX,this.maxY)}scale(e,t=e){return this.minX*=e,this.minY*=t,this.maxX*=e,this.maxY*=t,this}get x(){return this.minX}set x(e){const t=this.maxX-this.minX;this.minX=e,this.maxX=e+t}get y(){return this.minY}set y(e){const t=this.maxY-this.minY;this.minY=e,this.maxY=e+t}get width(){return this.maxX-this.minX}set width(e){this.maxX=this.minX+e}get height(){return this.maxY-this.minY}set height(e){this.maxY=this.minY+e}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(e,t,r,i){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const c=i.a,u=i.b,h=i.c,f=i.d,d=i.tx,m=i.ty;for(let g=t;g<r;g+=2){const p=e[g],v=e[g+1],x=c*p+h*v+d,y=u*p+f*v+m;s=x<s?x:s,o=y<o?y:o,a=x>a?x:a,l=y>l?y:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(e,t){return this.minX<=e&&this.minY<=t&&this.maxX>=e&&this.maxY>=t}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Oe=new Br(V),ct=new Br(Re);function as(n,e,t){t.clear();let r,i;return n.parent?e?r=n.parent.worldTransform:(i=Oe.get().identity(),r=fn(n,i)):r=V.IDENTITY,ls(n,t,r,e),i&&Oe.return(i),t.isValid||t.set(0,0,0,0),t}function ls(n,e,t,r){var a,l;if(!n.visible||!n.measurable)return;let i;r?i=n.worldTransform:(n.updateLocalTransform(),i=Oe.get(),i.appendFrom(n.localTransform,t));const s=e,o=!!n.effects.length;if(o&&(e=ct.get().clear()),n.boundsArea)e.addRect(n.boundsArea,i);else{n.addBounds&&(e.matrix=i,n.addBounds(e));for(let c=0;c<n.children.length;c++)ls(n.children[c],e,i,r)}if(o){for(let c=0;c<n.effects.length;c++)(l=(a=n.effects[c]).addBounds)==null||l.call(a,e);s.addBounds(e,V.IDENTITY),ct.return(e)}r||Oe.return(i)}function fn(n,e){const t=n.parent;return t&&(fn(t,e),t.updateLocalTransform(),e.append(t.localTransform)),e}let Fn=0;const yi=500;function re(...n){Fn!==yi&&(Fn++,Fn===yi?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function us(n,e,t){return e.clear(),t||(t=V.IDENTITY),cs(n,e,t,n,!0),e.isValid||e.set(0,0,0,0),e}function cs(n,e,t,r,i){var l,c;let s;if(i)s=Oe.get(),s=t.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const u=n.localTransform;s=Oe.get(),s.appendFrom(u,t)}const o=e,a=!!n.effects.length;if(a&&(e=ct.get().clear()),n.boundsArea)e.addRect(n.boundsArea,s);else{n.renderPipeId&&(e.matrix=s,n.addBounds(e));const u=n.children;for(let h=0;h<u.length;h++)cs(u[h],e,s,r,!1)}if(a){for(let u=0;u<n.effects.length;u++)(c=(l=n.effects[u]).addLocalBounds)==null||c.call(l,e,r);o.addBounds(e,V.IDENTITY),ct.return(e)}Oe.return(s)}function hs(n,e){const t=n.children;for(let r=0;r<t.length;r++){const i=t[r],s=(i.uid&255)<<24|i._didChangeId&16777215;e.data[e.index]!==s&&(e.data[e.index]=s,e.didChange=!0),e.index++,i.children.length&&hs(i,e)}return e.didChange}const ja=new V,$a={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,e){const t=Math.sign(this.scale.x)||1;e!==0?this.scale.x=n/e*t:this.scale.x=t},_setHeight(n,e){const t=Math.sign(this.scale.y)||1;e!==0?this.scale.y=n/e*t:this.scale.y=t},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Re});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didChangeId>>12&&(n.didChange=!0,n.data[0]=this._didChangeId>>12),hs(this,n),n.didChange&&us(this,n.localBounds,ja),n.localBounds},getBounds(n,e){return as(this,n,e||new Re)}},qa={_onRender:null,set onRender(n){const e=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(e==null||e.removeOnRender(this)),this._onRender=null;return}this._onRender||e==null||e.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},Ka={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Za))}};function Za(n,e){return n._zIndex-e._zIndex}const Qa={getGlobalPosition(n=new ne,e=!1){return this.parent?this.parent.toGlobal(this._position,n,e):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,e,t=!1){if(!t){this.updateLocalTransform();const r=fn(this,new V);return r.append(this.localTransform),r.apply(n,e)}return this.worldTransform.apply(n,e)},toLocal(n,e,t,r){if(e&&(n=e.toGlobal(n,t,r)),!r){this.updateLocalTransform();const i=fn(this,new V);return i.append(this.localTransform),i.applyInverse(n,t)}return this.worldTransform.applyInverse(n,t)}};class fs{constructor(){this.uid=J("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(e){this.instructions[this.instructionSize++]=e}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class Ja{constructor(e){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new V,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new fs,this._onRenderContainers=[],this.root=e,e._onRender&&this.addOnRender(e),e.didChange=!0;const t=e.children;for(let r=0;r<t.length;r++)this.addChild(t[r])}get localTransform(){return this.root.localTransform}addRenderGroupChild(e){e.renderGroupParent&&e.renderGroupParent._removeRenderGroupChild(e),e.renderGroupParent=this,this.renderGroupChildren.push(e)}_removeRenderGroupChild(e){const t=this.renderGroupChildren.indexOf(e);t>-1&&this.renderGroupChildren.splice(t,1),e.renderGroupParent=null}addChild(e){if(this.structureDidChange=!0,e.parentRenderGroup=this,e.updateTick=-1,e.parent===this.root?e.relativeRenderGroupDepth=1:e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1,e.didChange=!0,this.onChildUpdate(e),e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}e._onRender&&this.addOnRender(e);const t=e.children;for(let r=0;r<t.length;r++)this.addChild(t[r])}removeChild(e){if(this.structureDidChange=!0,e._onRender&&(e.renderGroup||this.removeOnRender(e)),e.parentRenderGroup=null,e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}const t=e.children;for(let r=0;r<t.length;r++)this.removeChild(t[r])}removeChildren(e){for(let t=0;t<e.length;t++)this.removeChild(e[t])}onChildUpdate(e){let t=this.childrenToUpdate[e.relativeRenderGroupDepth];t||(t=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}),t.list[t.index++]=e}updateRenderable(e){e.globalDisplayStatus<7||(e.didViewUpdate=!1,this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e))}onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(e){this._onRenderContainers.push(e)}removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}runOnRender(){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender()}getChildren(e=[]){const t=this.root.children;for(let r=0;r<t.length;r++)this._getChildren(t[r],e);return e}_getChildren(e,t=[]){if(t.push(e),e.renderGroup)return t;const r=e.children;for(let i=0;i<r.length;i++)this._getChildren(r[i],t);return t}}function el(n,e,t={}){for(const r in e)!t[r]&&e[r]!==void 0&&(n[r]=e[r])}const Mn=new Z(null),zn=new Z(null),En=new Z(null,1,1),_i=1,tl=2,On=4;class oe extends ce{constructor(e={}){var t,r;super(),this.uid=J("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new V,this.relativeGroupTransform=new V,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Z(this,0,0),this._scale=En,this._pivot=zn,this._skew=Mn,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,el(this,e,{children:!0,parent:!0,effects:!0}),(t=e.children)==null||t.forEach(i=>this.addChild(i)),this.effects=[],(r=e.parent)==null||r.addChild(this)}static mixin(e){Object.defineProperties(oe.prototype,Object.getOwnPropertyDescriptors(e))}addChild(...e){if(this.allowChildren||R(ye,"addChild: Only Containers will be allowed to add children in v8.0.0"),e.length>1){for(let i=0;i<e.length;i++)this.addChild(e[i]);return e[0]}const t=e[0];if(t.parent===this)return this.children.splice(this.children.indexOf(t),1),this.children.push(t),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),t;t.parent&&t.parent.removeChild(t),this.children.push(t),this.sortableChildren&&(this.sortDirty=!0),t.parent=this,t.didChange=!0,t.didViewUpdate=!1,t._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(t),this.emit("childAdded",t,this,this.children.length-1),t.emit("added",this),this._didChangeId+=4096,t._zIndex!==0&&t.depthOfChildModified(),t}removeChild(...e){if(e.length>1){for(let i=0;i<e.length;i++)this.removeChild(e[i]);return e[0]}const t=e[0],r=this.children.indexOf(t);return r>-1&&(this._didChangeId+=4096,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(t):this.parentRenderGroup&&this.parentRenderGroup.removeChild(t),t.parent=null,this.emit("childRemoved",t,this,r),t.emit("removed",this)),t}_onUpdate(e){e&&e===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(e){if(this.renderGroup&&e===!1)throw new Error("[Pixi] cannot undo a render group just yet");e&&this.enableRenderGroup()}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const e=this.parentRenderGroup;e&&e.removeChild(this),this.renderGroup=new Ja(this),e&&e.addChild(this),this._updateIsSimple(),this.groupTransform=V.IDENTITY}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new V),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(e){this._position.x=e}get y(){return this._position.y}set y(e){this._position.y=e}get position(){return this._position}set position(e){this._position.copyFrom(e)}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this._skew))}get angle(){return this.rotation*Aa}set angle(e){this.rotation=e*lt}get pivot(){return this._pivot===zn&&(this._pivot=new Z(this,0,0)),this._pivot}set pivot(e){this._pivot===zn&&(this._pivot=new Z(this,0,0)),typeof e=="number"?this._pivot.set(e):this._pivot.copyFrom(e)}get skew(){return this._skew===Mn&&(this._skew=new Z(this,0,0)),this._skew}set skew(e){this._skew===Mn&&(this._skew=new Z(this,0,0)),this._skew.copyFrom(e)}get scale(){return this._scale===En&&(this._scale=new Z(this,1,1)),this._scale}set scale(e){this._scale===En&&(this._scale=new Z(this,0,0)),typeof e=="number"?this._scale.set(e):this._scale.copyFrom(e)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(e){const t=this.getLocalBounds().width;this._setWidth(e,t)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(e){const t=this.getLocalBounds().height;this._setHeight(e,t)}getSize(e){e||(e={});const t=this.getLocalBounds();return e.width=Math.abs(this.scale.x*t.width),e.height=Math.abs(this.scale.y*t.height),e}setSize(e,t){const r=this.getLocalBounds();let i,s;typeof e!="object"?(i=e,s=t??e):(i=e.width,s=e.height??e.width),i!==void 0&&this._setWidth(i,r.width),s!==void 0&&this._setHeight(s,r.height)}_updateSkew(){const e=this._rotation,t=this._skew;this._cx=Math.cos(e+t._y),this._sx=Math.sin(e+t._y),this._cy=-Math.sin(e-t._x),this._sy=Math.cos(e-t._x)}updateTransform(e){return this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y),this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y),this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation,this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y),this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y),this}setFromMatrix(e){e.decompose(this)}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const e=this.localTransform,t=this._scale,r=this._pivot,i=this._position,s=t._x,o=t._y,a=r._x,l=r._y;e.a=this._cx*s,e.b=this._sx*s,e.c=this._cy*o,e.d=this._sy*o,e.tx=i._x-(a*e.a+l*e.c),e.ty=i._y-(a*e.b+l*e.d)}set alpha(e){e!==this.localAlpha&&(this.localAlpha=e,this._updateFlags|=_i,this._onUpdate())}get alpha(){return this.localAlpha}set tint(e){const r=Y.shared.setValue(e??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=_i,this._onUpdate())}get tint(){const e=this.localColor;return((e&255)<<16)+(e&65280)+(e>>16&255)}set blendMode(e){this.localBlendMode!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=tl,this.localBlendMode=e,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(e){const t=e?1:0;(this.localDisplayStatus&2)>>1!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=On,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(e){const t=e?1:0;(this.localDisplayStatus&4)>>2!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=On,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(e){const t=e?1:0;(this.localDisplayStatus&1)!==t&&(this._updateFlags|=On,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(e=!1){if(this.destroyed)return;this.destroyed=!0;const t=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.children)for(let i=0;i<t.length;++i)t[i].destroy(e)}}oe.mixin(Va);oe.mixin(Qa);oe.mixin(qa);oe.mixin($a);oe.mixin(Wa);oe.mixin(Ha);oe.mixin(Ka);oe.mixin(Ga);class Ce extends oe{constructor(e=M.EMPTY){e instanceof M&&(e={texture:e});const{texture:t=M.EMPTY,anchor:r,roundPixels:i,width:s,height:o,...a}=e;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new Z({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:t.defaultAnchor&&(this.anchor=t.defaultAnchor),this.texture=t,this.allowChildren=!1,this.roundPixels=i??!1,s&&(this.width=s),o&&(this.height=o)}static from(e,t=!1){return e instanceof M?new Ce(e):new Ce(M.from(e,t))}set texture(e){e||(e=M.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(e){const t=this.sourceBounds;return e.x>=t.maxX&&e.x<=t.minX&&e.y>=t.maxY&&e.y<=t.minY}addBounds(e){const t=this._texture.trim?this.sourceBounds:this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}_updateBounds(){Ma(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const e=this._anchor,t=this._texture,r=this._sourceBounds,{width:i,height:s}=t.orig;r.maxX=-e._x*i,r.minX=r.maxX+i,r.maxY=-e._y*s,r.minY=r.maxY+s}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e==null?void 0:e.texture){const r=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(r)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this._setWidth(e,this._texture.orig.width)}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this._setHeight(e,this._texture.orig.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this._texture.orig.width,e.height=Math.abs(this.scale.y)*this._texture.orig.height,e}setSize(e,t){let r,i;typeof e!="object"?(r=e,i=t??e):(r=e.width,i=e.height??e.width),r!==void 0&&this._setWidth(r,this._texture.orig.width),i!==void 0&&this._setHeight(i,this._texture.orig.height)}}const nl=new Re;function ds(n,e,t){const r=nl;n.measurable=!0,as(n,t,r),e.addBoundsMask(r),n.measurable=!1}function ms(n,e,t){const r=ct.get();n.measurable=!0;const i=Oe.get().identity(),s=ps(n,t,i);us(n,r,s),n.measurable=!1,e.addBoundsMask(r),Oe.return(i),ct.return(r)}function ps(n,e,t){return n?(n!==e&&(ps(n.parent,e,t),n.updateLocalTransform(),t.append(n.localTransform)),t):(re("Mask bounds, renderable is not inside the root container"),t)}class gs{constructor(e){this.priority=0,this.pipe="alphaMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.renderMaskToTexture=!(e instanceof Ce),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(e,t){ds(this.mask,e,t)}addLocalBounds(e,t){ms(this.mask,e,t)}containsPoint(e,t){const r=this.mask;return t(r,e)}destroy(){this.reset()}static test(e){return e instanceof Ce}}gs.extension=E.MaskEffect;class xs{constructor(e){this.priority=0,this.pipe="colorMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e}destroy(){}static test(e){return typeof e=="number"}}xs.extension=E.MaskEffect;class vs{constructor(e){this.priority=0,this.pipe="stencilMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(e,t){ds(this.mask,e,t)}addLocalBounds(e,t){ms(this.mask,e,t)}containsPoint(e,t){const r=this.mask;return t(r,e)}destroy(){this.reset()}static test(e){return e instanceof oe}}vs.extension=E.MaskEffect;const rl={createCanvas:(n,e)=>{const t=document.createElement("canvas");return t.width=n,t.height=e,t},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,e)=>fetch(n,e),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let bi=rl;const se={get(){return bi},set(n){bi=n}};class ys extends we{constructor(e){e.resource||(e.resource=se.get().createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity;const t=e.resource;(this.pixelWidth!==t.width||this.pixelWidth!==t.height)&&this.resizeCanvas(),this.transparent=!!e.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(e=this.width,t=this.height,r=this._resolution){const i=super.resize(e,t,r);return i&&this.resizeCanvas(),i}static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}}ys.extension=E.TextureSource;class ft extends we{constructor(e){if(e.resource&&globalThis.HTMLImageElement&&e.resource instanceof HTMLImageElement){const t=se.get().createCanvas(e.resource.width,e.resource.height);t.getContext("2d").drawImage(e.resource,0,0),e.resource=t,re("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap}}ft.extension=E.TextureSource;var dn=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(dn||{});class Rn{constructor(e,t=null,r=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=e,this._context=t,this.priority=r,this._once=i}match(e,t=null){return this._fn===e&&this._context===t}emit(e){this._fn&&(this._context?this._fn.call(this._context,e):this._fn(e));const t=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),t}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const t=this.next;return this.next=e?null:t,this.previous=null,t}}const _s=class he{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Rn(null,null,1/0),this.deltaMS=1/he.targetFPMS,this.elapsedMS=1/he.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,t,r=dn.NORMAL){return this._addListener(new Rn(e,t,r))}addOnce(e,t,r=dn.NORMAL){return this._addListener(new Rn(e,t,r,!0))}_addListener(e){let t=this._head.next,r=this._head;if(!t)e.connect(r);else{for(;t;){if(e.priority>t.priority){e.connect(r);break}r=t,t=t.next}e.previous||e.connect(r)}return this._startIfPossible(),this}remove(e,t){let r=this._head.next;for(;r;)r.match(e,t)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,t=this._head;for(;t=t.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){const s=e-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=e-s%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*he.targetFPMS;const r=this._head;let i=r.next;for(;i;)i=i.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const t=Math.min(this.maxFPS,e),r=Math.min(Math.max(0,t)/1e3,he.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}}static get shared(){if(!he._shared){const e=he._shared=new he;e.autoStart=!0,e._protected=!0}return he._shared}static get system(){if(!he._system){const e=he._system=new he;e.autoStart=!0,e._protected=!0}return he._system}};_s.targetFPMS=.06;let fe=_s,Bn;async function bs(){return Bn??(Bn=(async()=>{var o;const e=document.createElement("canvas").getContext("webgl");if(!e)return"premultiply-alpha-on-upload";const t=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!t)return"premultiply-alpha-on-upload";const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);const i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t);const s=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,s),e.deleteFramebuffer(i),e.deleteTexture(r),(o=e.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Bn}const yn=class As extends we{constructor(e){super(e),this.isReady=!1,this.uploadMethodId="video",e={...As.defaultOptions,...e},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this.alphaMode=e.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),e.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const e=fe.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const e=this.resource,t=this.options;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(t.preload||e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlayThrough),e.addEventListener("error",this._onError,!0)),this.alphaMode=await bs(),this._load=new Promise((r,i)=>{this.isValid?r(this):(this._resolve=r,this._reject=i,t.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${t.preloadTimeoutMs}ms`))})),e.load())}),this._load}_onError(e){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}_isSourcePlaying(){const e=this.resource;return!e.paused&&!e.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const e=this.resource;this.isValid&&(this.isReady=!0,this.resize(e.videoWidth,e.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const e=this.resource;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlayThrough),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(fe.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(fe.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(fe.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement||globalThis.VideoFrame&&e instanceof VideoFrame}};yn.extension=E.TextureSource;yn.defaultOptions={...we.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};yn.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let en=yn;const ve=(n,e,t=!1)=>(Array.isArray(n)||(n=[n]),e?n.map(r=>typeof r=="string"||t?e(r):r):n);class il{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const t=this._cache.get(e);return t||re(`[Assets] Asset id ${e} was not found in the Cache`),t}set(e,t){const r=ve(e);let i;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.test(t)){i=c.getCacheableAssets(r,t);break}}const s=new Map(Object.entries(i||{}));i||r.forEach(l=>{s.set(l,t)});const o=[...s.keys()],a={cacheKeys:o,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const c=i?i[l]:t;this._cache.has(l)&&this._cache.get(l)!==c&&re("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(e){if(!this._cacheMap.has(e)){re(`[Assets] Asset id ${e} was not found in the Cache`);return}const t=this._cacheMap.get(e);t.cacheKeys.forEach(i=>{this._cache.delete(i)}),t.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const ie=new il,ir=[];de.handleByList(E.TextureSource,ir);function sl(n={}){const e=n&&n.resource,t=e?n.resource:n,r=e?n:{resource:n};for(let i=0;i<ir.length;i++){const s=ir[i];if(s.test(t))return new s(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function ol(n={},e=!1){const t=n&&n.resource,r=t?n.resource:n,i=t?n:{resource:n};if(!e&&ie.has(r))return ie.get(r);const s=new M({source:sl(i)});return s.on("destroy",()=>{ie.has(r)&&ie.remove(r)}),e||ie.set(r,s),s}function al(n,e=!1){return typeof n=="string"?ie.get(n):n instanceof we?new M({source:n}):ol(n,e)}M.from=al;de.add(gs,xs,vs,en,ft,ys,Rr);var Ue=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(Ue||{});function xe(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function _t(n){return n.split("?")[0].split("#")[0]}function ll(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ul(n,e,t){return n.replace(new RegExp(ll(e),"g"),t)}function cl(n,e){let t="",r=0,i=-1,s=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(t.length<2||r!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){const l=t.lastIndexOf("/");if(l!==t.length-1){l===-1?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),i=a,s=0;continue}}else if(t.length===2||t.length===1){t="",r=0,i=a,s=0;continue}}}else t.length>0?t+=`/${n.slice(i+1,a)}`:t=n.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s!==-1?++s:s=-1}return t}const le={toPosix(n){return ul(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){xe(n),n=this.toPosix(n);const e=/^file:\/\/\//.exec(n);if(e)return e[0];const t=/^[^/:]+:\/{0,2}/.exec(n);return t?t[0]:""},toAbsolute(n,e,t){if(xe(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const r=_t(this.toPosix(e??se.get().getBaseUrl())),i=_t(this.toPosix(t??this.rootname(r)));return n=this.toPosix(n),n.startsWith("/")?le.join(i,n.slice(1)):this.isAbsolute(n)?n:this.join(r,n)},normalize(n){if(xe(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let e="";const t=n.startsWith("/");this.hasProtocol(n)&&(e=this.rootname(n),n=n.slice(e.length));const r=n.endsWith("/");return n=cl(n),n.length>0&&r&&(n+="/"),t?`/${n}`:e+n},isAbsolute(n){return xe(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let e;for(let t=0;t<n.length;++t){const r=n[t];if(xe(r),r.length>0)if(e===void 0)e=r;else{const i=n[t-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?e+=`/../${r}`:e+=`/${r}`}}return e===void 0?".":this.normalize(e)},dirname(n){if(xe(n),n.length===0)return".";n=this.toPosix(n);let e=n.charCodeAt(0);const t=e===47;let r=-1,i=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let a=n.length-1;a>=1;--a)if(e=n.charCodeAt(a),e===47){if(!i){r=a;break}}else i=!1;return r===-1?t?"/":this.isUrl(o)?s+n:s:t&&r===1?"//":s+n.slice(0,r)},rootname(n){xe(n),n=this.toPosix(n);let e="";if(n.startsWith("/")?e="/":e=this.getProtocol(n),this.isUrl(n)){const t=n.indexOf("/",e.length);t!==-1?e=n.slice(0,t):e=n,e.endsWith("/")||(e+="/")}return e},basename(n,e){xe(n),e&&xe(e),n=_t(this.toPosix(n));let t=0,r=-1,i=!0,s;if(e!==void 0&&e.length>0&&e.length<=n.length){if(e.length===n.length&&e===n)return"";let o=e.length-1,a=-1;for(s=n.length-1;s>=0;--s){const l=n.charCodeAt(s);if(l===47){if(!i){t=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===e.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=a))}return t===r?r=a:r===-1&&(r=n.length),n.slice(t,r)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!i){t=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":n.slice(t,r)},extname(n){xe(n),n=_t(this.toPosix(n));let e=-1,t=0,r=-1,i=!0,s=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!i){t=o+1;break}continue}r===-1&&(i=!1,r=o+1),a===46?e===-1?e=o:s!==1&&(s=1):e!==-1&&(s=-1)}return e===-1||r===-1||s===0||s===1&&e===r-1&&e===t+1?"":n.slice(e,r)},parse(n){xe(n);const e={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return e;n=_t(this.toPosix(n));let t=n.charCodeAt(0);const r=this.isAbsolute(n);let i;e.root=this.rootname(n),r||this.hasProtocol(n)?i=1:i=0;let s=-1,o=0,a=-1,l=!0,c=n.length-1,u=0;for(;c>=i;--c){if(t=n.charCodeAt(c),t===47){if(!l){o=c+1;break}continue}a===-1&&(l=!1,a=c+1),t===46?s===-1?s=c:u!==1&&(u=1):s!==-1&&(u=-1)}return s===-1||a===-1||u===0||u===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&r?e.base=e.name=n.slice(1,a):e.base=e.name=n.slice(o,a)):(o===0&&r?(e.name=n.slice(1,s),e.base=n.slice(1,a)):(e.name=n.slice(o,s),e.base=n.slice(o,a)),e.ext=n.slice(s,a)),e.dir=this.dirname(n),e},sep:"/",delimiter:":",joinExtensions:[".html"]};function Ss(n,e,t,r,i){const s=e[t];for(let o=0;o<s.length;o++){const a=s[o];t<e.length-1?Ss(n.replace(r[t],a),e,t+1,r,i):i.push(n.replace(r[t],a))}}function hl(n){const e=/\{(.*?)\}/g,t=n.match(e),r=[];if(t){const i=[];t.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),Ss(n,i,0,t,r)}else r.push(n);return r}const mn=n=>!Array.isArray(n);class dt{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,t)=>`${e}${this._bundleIdConnector}${t}`,extractAssetIdFromBundle:(e,t)=>t.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(t=>{this._preferredOrder.push(t),t.priority||(t.priority=Object.keys(t.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const t=e;this._defaultSearchParams=Object.keys(t).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&")}}getAlias(e){const{alias:t,src:r}=e;return ve(t||r,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(e){this._manifest&&re("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(t=>{this.addBundle(t.name,t.assets)})}addBundle(e,t){const r=[];let i=t;Array.isArray(t)||(i=Object.entries(t).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),i.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const c=this._createBundleAssetId(e,a);r.push(c),l=[a,c]}else{const c=a.map(u=>this._createBundleAssetId(e,u));r.push(...c),l=[...a,...c]}this.add({...s,alias:l,src:o})}),this._bundles[e]=r}add(e){const t=[];Array.isArray(e)?t.push(...e):t.push(e);let r;r=s=>{this.hasKey(s)&&re(`[Resolver] already has key: ${s} overwriting`)},ve(t).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:c}=s;const u=ve(o).map(d=>typeof d=="string"?hl(d):Array.isArray(d)?d:[d]),h=this.getAlias(s);Array.isArray(h)?h.forEach(r):r(h);const f=[];u.forEach(d=>{d.forEach(m=>{let g={};if(typeof m!="object"){g.src=m;for(let p=0;p<this._parsers.length;p++){const v=this._parsers[p];if(v.test(m)){g=v.parse(m);break}}}else a=m.data??a,l=m.format??l,c=m.loadParser??c,g={...g,...m};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:h,data:a,format:l,loadParser:c}),f.push(g)})}),h.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(e){const t=mn(e);e=ve(e);const r={};return e.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),a={};for(const l in o){const c=o[l];a[this._extractAssetIdFromBundle(i,l)]=c}r[i]=a}}),t?r[e[0]]:r}resolveUrl(e){const t=this.resolve(e);if(typeof e!="string"){const r={};for(const i in t)r[i]=t[i].src;return r}return t.src}resolve(e){const t=mn(e);e=ve(e);const r={};return e.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let s=this._assetMap[i];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const c=s.filter(u=>u[a]?u[a]===l:!1);c.length&&(s=c)})}),this._resolverHash[i]=s[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});r[i]=this._resolverHash[i]}),t?r[e[0]]:r}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let t=0;t<e.length;t++){const r=e[0],i=this._preferredOrder.find(s=>s.params.format.includes(r.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const t=/\?/.test(e)?"&":"?";return`${e}${t}${this._defaultSearchParams}`}_buildResolvedAsset(e,t){const{aliases:r,data:i,loadParser:s,format:o}=t;return(this._basePath||this._rootPath)&&(e.src=le.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=r??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...i||{},...e.data},e.loadParser=s??e.loadParser,e.format=o??e.format??fl(e.src),e}}dt.RETINA_PREFIX=/@([0-9\.]+)x/;function fl(n){return n.split(".").pop().split("?").shift().split("#").shift()}const Ai=(n,e)=>{const t=e.split("?")[1];return t&&(n+=`?${t}`),n},Cs=class wt{constructor(e,t){this.linkedSheets=[],this._texture=e instanceof M?e:null,this.textureSource=e.source,this.textures={},this.animations={},this.data=t;const r=parseFloat(t.meta.scale);r?(this.resolution=r,e.source.resolution=this.resolution):this.resolution=e.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=wt.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(e){let t=e;const r=wt.BATCH_SIZE;for(;t-e<r&&t<this._frameKeys.length;){const i=this._frameKeys[t],s=this._frames[i],o=s.frame;if(o){let a=null,l=null;const c=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,u=new Q(0,0,Math.floor(c.w)/this.resolution,Math.floor(c.h)/this.resolution);s.rotated?a=new Q(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new Q(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new Q(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new M({source:this.textureSource,frame:a,orig:u,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:i.toString()})}t++}}_processAnimations(){const e=this.data.animations||{};for(const t in e){this.animations[t]=[];for(let r=0;r<e[t].length;r++){const i=e[t][r];this.animations[t].push(this.textures[i])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*wt.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*wt.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){var t;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)==null||t.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Cs.BATCH_SIZE=1e3;let Si=Cs;const dl=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function ws(n,e,t){const r={};if(n.forEach(i=>{r[i]=e}),Object.keys(e.textures).forEach(i=>{r[i]=e.textures[i]}),!t){const i=le.dirname(n[0]);e.linkedSheets.forEach((s,o)=>{const a=ws([`${i}/${e.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(r,a)})}return r}const ml={extension:E.Asset,cache:{test:n=>n instanceof Si,getCacheableAssets:(n,e)=>ws(n,e,!1)},resolver:{test:n=>{const t=n.split("?")[0].split("."),r=t.pop(),i=t.pop();return r==="json"&&dl.includes(i)},parse:n=>{var t;const e=n.split(".");return{resolution:parseFloat(((t=dt.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:e[e.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:E.LoadParser,priority:Ue.Normal},async testParse(n,e){return le.extname(e.src).toLowerCase()===".json"&&!!n.frames},async parse(n,e,t){var c,u;const{texture:r,imageFilename:i}=(e==null?void 0:e.data)??{};let s=le.dirname(e.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(r instanceof M)o=r;else{const h=Ai(s+(i??n.meta.image),e.src);o=(await t.load([h]))[h]}const a=new Si(o.source,n);await a.parse();const l=(c=n==null?void 0:n.meta)==null?void 0:c.related_multi_packs;if(Array.isArray(l)){const h=[];for(const d of l){if(typeof d!="string")continue;let m=s+d;(u=e.data)!=null&&u.ignoreMultiPack||(m=Ai(m,e.src),h.push(t.load({src:m,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(h);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(m=>m!==d))})}return a},async unload(n,e,t){await t.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};de.add(ml);const Un=Object.create(null),Ci=Object.create(null);function Ur(n,e){let t=Ci[n];return t===void 0&&(Un[e]===void 0&&(Un[e]=1),Ci[n]=t=Un[e]++),t}let Qe;function Ts(){return(!Qe||Qe!=null&&Qe.isContextLost())&&(Qe=se.get().createCanvas().getContext("webgl",{})),Qe}let jt;function pl(){if(!jt){jt="mediump";const n=Ts();n&&n.getShaderPrecisionFormat&&(jt=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return jt}function gl(n,e,t){return e?n:t?(n=n.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function xl(n,e,t){const r=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let i=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;return i==="highp"&&r!=="highp"&&(i="mediump"),`precision ${i} float;
${n}`}else if(r!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function vl(n,e){return e?`#version 300 es
${n}`:n}const yl={},_l={};function bl(n,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-"),e+=t?"-fragment":"-vertex";const r=t?yl:_l;return r[e]?(r[e]++,e+=`-${r[e]}`):r[e]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${e}`}
${n}`}function Al(n,e){return e?n.replace("#version 300 es",""):n}const Ln={stripVersion:Al,ensurePrecision:xl,addProgramDefines:gl,setProgramName:bl,insertVersion:vl},kn=Object.create(null),Ps=class sr{constructor(e){e={...sr.defaultOptions,...e};const t=e.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:t,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:pl()},setProgramName:{name:e.name},addProgramDefines:t,insertVersion:t};let i=e.fragment,s=e.vertex;Object.keys(Ln).forEach(o=>{const a=r[o];i=Ln[o](i,a,!0),s=Ln[o](s,a,!1)}),this.fragment=i,this.vertex=s,this._key=Ur(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(e){const t=`${e.vertex}:${e.fragment}`;return kn[t]||(kn[t]=new sr(e)),kn[t]}};Ps.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let U=Ps;const wi={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Sl(n){return wi[n]??wi.float32}const Cl={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function wl({source:n,entryPoint:e}){const t={},r=n.indexOf(`fn ${e}`);if(r!==-1){const i=n.indexOf("->",r);if(i!==-1){const s=n.substring(r,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=Cl[a[3]]??"float32";t[a[2]]={location:parseInt(a[1],10),format:l,stride:Sl(l).stride,offset:0,instance:!1,start:0}}}}return t}function Dn(n){var h,f;const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,t=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,c=(h=n.match(e))==null?void 0:h.map(d=>({group:parseInt(d.match(t)[1],10),binding:parseInt(d.match(r)[1],10),name:d.match(i)[2],isUniform:d.match(i)[1]==="<uniform>",type:d.match(s)[1]}));if(!c)return{groups:[],structs:[]};const u=((f=n.match(o))==null?void 0:f.map(d=>{const m=d.match(l)[1],g=d.match(a).reduce((p,v)=>{const[x,y]=v.split(":");return p[x.trim()]=y.trim(),p},{});return g?{name:m,members:g}:null}).filter(({name:d})=>c.some(m=>m.type===d)))??[];return{groups:c,structs:u}}var Tt=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Tt||{});function Tl({groups:n}){const e=[];for(let t=0;t<n.length;t++){const r=n[t];e[r.group]||(e[r.group]=[]),r.isUniform?e[r.group].push({binding:r.binding,visibility:Tt.VERTEX|Tt.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?e[r.group].push({binding:r.binding,visibility:Tt.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&e[r.group].push({binding:r.binding,visibility:Tt.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function Pl({groups:n}){const e=[];for(let t=0;t<n.length;t++){const r=n[t];e[r.group]||(e[r.group]={}),e[r.group][r.name]=r.binding}return e}function Il(n,e){const t=new Set,r=new Set,i=[...n.structs,...e.structs].filter(o=>t.has(o.name)?!1:(t.add(o.name),!0)),s=[...n.groups,...e.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:i,groups:s}}const Gn=Object.create(null);class B{constructor(e){var a,l;this._layoutKey=0;const{fragment:t,vertex:r,layout:i,gpuLayout:s,name:o}=e;if(this.name=o,this.fragment=t,this.vertex=r,t.source===r.source){const c=Dn(t.source);this.structsAndGroups=c}else{const c=Dn(r.source),u=Dn(t.source);this.structsAndGroups=Il(c,u)}this.layout=i??Pl(this.structsAndGroups),this.gpuLayout=s??Tl(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:t}=this,r=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=Ur(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=wl(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){const t=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return Gn[t]||(Gn[t]=new B(e)),Gn[t]}}function Fl(n,e){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Is=class Fs{constructor(e,t){this._touched=0,this.uid=J("uniform"),this._resourceType="uniformGroup",this._resourceId=J("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,t={...Fs.defaultOptions,...t},this.uniformStructures=e;const r={};for(const i in e){const s=e[i];s.name=i,s.size=s.size??1,s.value??(s.value=Fl(s.type,s.size)),r[i]=s.value}this.uniforms=r,this._dirtyId=1,this.ubo=t.ubo,this.isStatic=t.isStatic,this._signature=Ur(Object.keys(r).map(i=>`${i}-${e[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Is.defaultOptions={ubo:!1,isStatic:!1};let Ms=Is;class tn{constructor(e){this.resources=Object.create(null),this._dirty=!0;let t=0;for(const r in e){const i=e[r];this.setResource(i,t++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const e=[];let t=0;for(const r in this.resources)e[t++]=this.resources[r]._resourceId;this._key=e.join("|")}setResource(e,t){var i,s;const r=this.resources[t];e!==r&&(r&&((i=e.off)==null||i.call(e,"change",this.onResourceChange,this)),(s=e.on)==null||s.call(e,"change",this.onResourceChange,this),this.resources[t]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e){const t=this.resources;for(const r in t)t[r]._touched=e}destroy(){var t;const e=this.resources;for(const r in e){const i=e[r];(t=i.off)==null||t.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(e){if(this._dirty=!0,e.destroyed){const t=this.resources;for(const r in t)t[r]===e&&(t[r]=null)}else this._updateKey()}}var pn=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))(pn||{});class Lr extends ce{constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:t,glProgram:r,groups:i,resources:s,compatibleRenderers:o,groupMap:a}=e;this.gpuProgram=t,this.glProgram=r,o===void 0&&(o=0,t&&(o|=pn.WEBGPU),r&&(o|=pn.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!i&&(s={}),s&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!t&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!t&&i&&a)for(const c in a)for(const u in a[c]){const h=a[c][u];l[h]={group:c,binding:u,name:h}}else if(t&&i&&!a){const c=t.structsAndGroups.groups;a={},c.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else if(s){if(t){const c=t.structsAndGroups.groups;a={},c.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else{a={},i={99:new tn},this._ownedBindGroups.push(i[99]);let c=0;for(const u in s)l[u]={group:99,binding:c,name:u},a[99]=a[99]||{},a[99][c]=u,c++}i={};for(const c in s){const u=c;let h=s[c];!h.source&&!h._resourceType&&(h=new Ms(h));const f=l[u];f&&(i[f.group]||(i[f.group]=new tn,this._ownedBindGroups.push(i[f.group])),i[f.group].setResource(h,f.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(e,t,r){var i,s;(i=this._uniformBindMap)[t]||(i[t]={}),(s=this._uniformBindMap[t])[r]||(s[r]=e),this.groups[t]||(this.groups[t]=new tn,this._ownedBindGroups.push(this.groups[t]))}_buildResourceAccessor(e,t){const r={};for(const i in t){const s=t[i];Object.defineProperty(r,s.name,{get(){return e[s.group].getResource(s.binding)},set(o){e[s.group].setResource(o,s.binding)}})}return r}destroy(e=!1){var t,r;this.emit("destroy",this),e&&((t=this.gpuProgram)==null||t.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){const{gpu:t,gl:r,...i}=e;let s,o;return t&&(s=B.from(t)),r&&(o=U.from(r)),new Lr({gpuProgram:s,glProgram:o,...i})}}const Ml={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},Nn=0,Vn=1,Xn=2,Yn=3,Wn=4,Hn=5,or=class zs{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Nn)}set blend(e){!!(this.data&1<<Nn)!==e&&(this.data^=1<<Nn)}get offsets(){return!!(this.data&1<<Vn)}set offsets(e){!!(this.data&1<<Vn)!==e&&(this.data^=1<<Vn)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Xn)}set culling(e){!!(this.data&1<<Xn)!==e&&(this.data^=1<<Xn)}get depthTest(){return!!(this.data&1<<Yn)}set depthTest(e){!!(this.data&1<<Yn)!==e&&(this.data^=1<<Yn)}get depthMask(){return!!(this.data&1<<Hn)}set depthMask(e){!!(this.data&1<<Hn)!==e&&(this.data^=1<<Hn)}get clockwiseFrontFace(){return!!(this.data&1<<Wn)}set clockwiseFrontFace(e){!!(this.data&1<<Wn)!==e&&(this.data^=1<<Wn)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=Ml[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new zs;return e.depthTest=!1,e.blend=!0,e}};or.default2d=or.for2d();let zl=or;const Es=class ar extends Lr{constructor(e){e={...ar.defaultOptions,...e},super(e),this.enabled=!0,this._state=zl.for2d(),this.padding=e.padding,typeof e.antialias=="boolean"?this.antialias=e.antialias?"on":"off":this.antialias=e.antialias,this.resolution=e.resolution,this.blendRequired=e.blendRequired,this.addResource("uTexture",0,1)}apply(e,t,r,i){e.applyFilter(this,t,r,i)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(e){const{gpu:t,gl:r,...i}=e;let s,o;return t&&(s=B.from(t)),r&&(o=U.from(r)),new ar({gpuProgram:s,glProgram:o,...i})}};Es.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let L=Es;const lr=[];de.handleByNamedList(E.Environment,lr);async function El(n){if(n)for(let e=0;e<lr.length;e++){const t=lr[e];if(t.value.test()){await t.value.load();return}}}let bt;function Ol(){if(typeof bt=="boolean")return bt;try{bt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{bt=!1}return bt}var kr={exports:{}};kr.exports=_n;kr.exports.default=_n;function _n(n,e,t){t=t||2;var r=e&&e.length,i=r?e[0]*t:n.length,s=Os(n,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,c,u,h,f,d;if(r&&(s=kl(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(var m=t;m<i;m+=t)h=n[m],f=n[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return zt(s,o,t,a,l,d,0),o}function Os(n,e,t,r,i){var s,o;if(i===hr(n,e,t,r)>0)for(s=e;s<t;s+=r)o=Ti(s,n[s],n[s+1],o);else for(s=t-r;s>=e;s-=r)o=Ti(s,n[s],n[s+1],o);return o&&bn(o,o.next)&&(Ot(o),o=o.next),o}function Ke(n,e){if(!n)return n;e||(e=n);var t=n,r;do if(r=!1,!t.steiner&&(bn(t,t.next)||q(t.prev,t,t.next)===0)){if(Ot(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function zt(n,e,t,r,i,s,o){if(n){!o&&s&&Xl(n,r,i,s);for(var a=n,l,c;n.prev!==n.next;){if(l=n.prev,c=n.next,s?Bl(n,r,i,s):Rl(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Ot(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ul(Ke(n),e,t),zt(n,e,t,r,i,s,2)):o===2&&Ll(n,e,t,r,i,s):zt(Ke(n),e,t,r,i,s,1);break}}}}function Rl(n){var e=n.prev,t=n,r=n.next;if(q(e,t,r)>=0)return!1;for(var i=e.x,s=t.x,o=r.x,a=e.y,l=t.y,c=r.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,m=r.next;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&st(i,a,s,l,o,c,m.x,m.y)&&q(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Bl(n,e,t,r){var i=n.prev,s=n,o=n.next;if(q(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,v=ur(d,m,e,t,r),x=ur(g,p,e,t,r),y=n.prevZ,_=n.nextZ;y&&y.z>=v&&_&&_.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&st(a,u,l,h,c,f,y.x,y.y)&&q(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&st(a,u,l,h,c,f,_.x,_.y)&&q(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=v;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&st(a,u,l,h,c,f,y.x,y.y)&&q(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=g&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&st(a,u,l,h,c,f,_.x,_.y)&&q(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ul(n,e,t){var r=n;do{var i=r.prev,s=r.next.next;!bn(i,s)&&Rs(i,r,r.next,s)&&Et(i,s)&&Et(s,i)&&(e.push(i.i/t|0),e.push(r.i/t|0),e.push(s.i/t|0),Ot(r),Ot(r.next),r=n=s),r=r.next}while(r!==n);return Ke(r)}function Ll(n,e,t,r,i,s){var o=n;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Hl(o,a)){var l=Bs(o,a);o=Ke(o,o.next),l=Ke(l,l.next),zt(o,e,t,r,i,s,0),zt(l,e,t,r,i,s,0);return}a=a.next}o=o.next}while(o!==n)}function kl(n,e,t,r){var i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*r,l=s<o-1?e[s+1]*r:n.length,c=Os(n,a,l,r,!1),c===c.next&&(c.steiner=!0),i.push(Wl(c));for(i.sort(Dl),s=0;s<i.length;s++)t=Gl(i[s],t);return t}function Dl(n,e){return n.x-e.x}function Gl(n,e){var t=Nl(n,e);if(!t)return e;var r=Bs(t,n);return Ke(r,r.next),Ke(t,t.next)}function Nl(n,e){var t=e,r=n.x,i=n.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=r&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===r))return o}t=t.next}while(t!==e);if(!o)return null;var l=o,c=o.x,u=o.y,h=1/0,f;t=o;do r>=t.x&&t.x>=c&&r!==t.x&&st(i<u?r:s,i,c,u,i<u?s:r,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(r-t.x),Et(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Vl(o,t)))&&(o=t,h=f)),t=t.next;while(t!==l);return o}function Vl(n,e){return q(n.prev,n,e.prev)<0&&q(e.next,n,n.next)<0}function Xl(n,e,t,r){var i=n;do i.z===0&&(i.z=ur(i.x,i.y,e,t,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,Yl(i)}function Yl(n){var e,t,r,i,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,r=t,a=0,e=0;e<c&&(a++,r=r.nextZ,!!r);e++);for(l=c;a>0||l>0&&r;)a!==0&&(l===0||!r||t.z<=r.z)?(i=t,t=t.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;t=r}s.nextZ=null,c*=2}while(o>1);return n}function ur(n,e,t,r,i){return n=(n-t)*i|0,e=(e-r)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wl(n){var e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function st(n,e,t,r,i,s,o,a){return(i-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(r-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(r-a)}function Hl(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!jl(n,e)&&(Et(n,e)&&Et(e,n)&&$l(n,e)&&(q(n.prev,n,e.prev)||q(n,e.prev,e))||bn(n,e)&&q(n.prev,n,n.next)>0&&q(e.prev,e,e.next)>0)}function q(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function bn(n,e){return n.x===e.x&&n.y===e.y}function Rs(n,e,t,r){var i=qt(q(n,e,t)),s=qt(q(n,e,r)),o=qt(q(t,r,n)),a=qt(q(t,r,e));return!!(i!==s&&o!==a||i===0&&$t(n,t,e)||s===0&&$t(n,r,e)||o===0&&$t(t,n,r)||a===0&&$t(t,e,r))}function $t(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qt(n){return n>0?1:n<0?-1:0}function jl(n,e){var t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rs(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Et(n,e){return q(n.prev,n,n.next)<0?q(n,e,n.next)>=0&&q(n,n.prev,e)>=0:q(n,e,n.prev)<0||q(n,n.next,e)<0}function $l(n,e){var t=n,r=!1,i=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==n);return r}function Bs(n,e){var t=new cr(n.i,n.x,n.y),r=new cr(e.i,e.x,e.y),i=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=i,i.prev=t,r.next=t,t.prev=r,s.next=r,r.prev=s,r}function Ti(n,e,t,r){var i=new cr(n,e,t);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ot(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function cr(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}_n.deviation=function(n,e,t,r){var i=e&&e.length,s=i?e[0]*t:n.length,o=Math.abs(hr(n,0,s,t));if(i)for(var a=0,l=e.length;a<l;a++){var c=e[a]*t,u=a<l-1?e[a+1]*t:n.length;o-=Math.abs(hr(n,c,u,t))}var h=0;for(a=0;a<r.length;a+=3){var f=r[a]*t,d=r[a+1]*t,m=r[a+2]*t;h+=Math.abs((n[f]-n[m])*(n[d+1]-n[f+1])-(n[f]-n[d])*(n[m+1]-n[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function hr(n,e,t,r){for(var i=0,s=e,o=t-r;s<t;s+=r)i+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return i}_n.flatten=function(n){for(var e=n[0][0].length,t={vertices:[],holes:[],dimensions:e},r=0,i=0;i<n.length;i++){for(var s=0;s<n[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(n[i][s][o]);i>0&&(r+=n[i-1].length,t.holes.push(r))}return t};var ql=kr.exports;const Kl=Or(ql);var Us=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(Us||{});class Zl{constructor(e){this.items=[],this._name=e}emit(e,t,r,i,s,o,a,l){const{name:c,items:u}=this;for(let h=0,f=u.length;h<f;h++)u[h][c](e,t,r,i,s,o,a,l);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Ql=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Ls=class ks extends ce{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name;const t=[...Ql,...e.runners??[]];this._addRunners(...t),this._addSystems(e.systems),this._addPipes(e.renderPipes,e.renderPipeAdaptors),this._unsafeEvalCheck()}async init(e={}){for(const t in this._systemsHash)e={...this._systemsHash[t].constructor.defaultOptions,...e};e={...ks.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let t=0;t<this.runners.init.items.length;t++)await this.runners.init.items[t].init(e);this._initOptions=e}render(e,t){let r=e;if(r instanceof oe&&(r={container:r},t&&(R(ye,"passing a second argument is deprecated, please use render options instead"),r.target=t.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const i=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=i?r.clearColor:Y.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(e,t,r){this.view.resize(e,t,r),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(e={}){const t=this;e.target||(e.target=t.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Us.ALL);const{clear:r,clearColor:i,target:s}=e;Y.shared.setValue(i??this.background.colorRgba),t.renderTarget.clear(s,r,Y.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(t=>{this.runners[t]=new Zl(t)})}_addSystems(e){let t;for(t in e){const r=e[t];this._addSystem(r.value,r.name)}}_addSystem(e,t){const r=new e(this);if(this[t])throw new Error(`Whoops! The name "${t}" is already in use`);this[t]=r,this._systemsHash[t]=r;for(const i in this.runners)this.runners[i].add(r);return this}_addPipes(e,t){const r=t.reduce((i,s)=>(i[s.name]=s.value,i),{});e.forEach(i=>{const s=i.value,o=i.name,a=r[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(t=>{t.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ol())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Ls.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ds=Ls,Kt;function Jl(n){return Kt!==void 0||(Kt=(()=>{var t;const e={stencil:!0,failIfMajorPerformanceCaveat:n??Ds.defaultOptions.failIfMajorPerformanceCaveat};try{if(!se.get().getWebGLRenderingContext())return!1;let i=se.get().createCanvas().getContext("webgl",e);const s=!!((t=i==null?void 0:i.getContextAttributes())!=null&&t.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}})()),Kt}let Zt;async function eu(n={}){return Zt!==void 0||(Zt=await(async()=>{if(!se.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),Zt}const Pi=["webgl","webgpu","canvas"];async function tu(n){let e=[];n.preference?(e.push(n.preference),Pi.forEach(s=>{s!==n.preference&&e.push(s)})):e=Pi.slice();let t;await El(n.manageImports??!0);let r={};for(let s=0;s<e.length;s++){const o=e[s];if(o==="webgpu"&&await eu()){const{WebGPURenderer:a}=await hn(()=>import("./WebGPURenderer-CHMa6hVG.js"),__vite__mapDeps([5,2,6,3]));t=a,r={...n,...n.webgpu};break}else if(o==="webgl"&&Jl(n.failIfMajorPerformanceCaveat??Ds.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await hn(()=>import("./WebGLRenderer-BOw7k4Ls.js"),__vite__mapDeps([7,2,4,6]));t=a,r={...n,...n.webgl};break}else if(o==="canvas")throw r={...n},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!t)throw new Error("No available renderer for the current environment");const i=new t;return await i.init(r),i}const Gs=class fr{constructor(...e){this.stage=new oe,e[0]!==void 0&&R(ye,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await tu(e),fr._plugins.forEach(t=>{t.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return R(ye,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,t=!1){const r=fr._plugins.slice(0);r.reverse(),r.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Gs._plugins=[];let Ns=Gs;de.handleByList(E.Application,Ns._plugins);class nu{constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e){e.forEach(t=>{this._assetList.push(t)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<t;r++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const ru={extension:E.CacheParser,test:n=>Array.isArray(n)&&n.every(e=>e instanceof M),getCacheableAssets:(n,e)=>{const t={};return n.forEach(r=>{e.forEach((i,s)=>{t[r+(s===0?"":s+1)]=i})}),t}};async function Vs(n){if("Image"in globalThis)return new Promise(e=>{const t=new Image;t.onload=()=>{e(!0)},t.onerror=()=>{e(!1)},t.src=n});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(n)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const iu={extension:{type:E.DetectionParser,priority:1},test:async()=>Vs("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async n=>[...n,"avif"],remove:async n=>n.filter(e=>e!=="avif")},Ii=["png","jpg","jpeg"],su={extension:{type:E.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async n=>[...n,...Ii],remove:async n=>n.filter(e=>!Ii.includes(e))},ou="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Dr(n){return ou?!1:document.createElement("video").canPlayType(n)!==""}const au={extension:{type:E.DetectionParser,priority:0},test:async()=>Dr("video/mp4"),add:async n=>[...n,"mp4","m4v"],remove:async n=>n.filter(e=>e!=="mp4"&&e!=="m4v")},lu={extension:{type:E.DetectionParser,priority:0},test:async()=>Dr("video/ogg"),add:async n=>[...n,"ogv"],remove:async n=>n.filter(e=>e!=="ogv")},uu={extension:{type:E.DetectionParser,priority:0},test:async()=>Dr("video/webm"),add:async n=>[...n,"webm"],remove:async n=>n.filter(e=>e!=="webm")},cu={extension:{type:E.DetectionParser,priority:0},test:async()=>Vs("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async n=>[...n,"webp"],remove:async n=>n.filter(e=>e!=="webp")};class hu{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,r)=>(this._parsersValidated=!1,e[t]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,t){const r={promise:null,parser:null};return r.promise=(async()=>{var o,a;let i=null,s=null;if(t.loadParser&&(s=this._parserHash[t.loadParser],s||re(`[Assets] specified load parser "${t.loadParser}" not found while loading ${e}`)),!s){for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.load&&((o=c.test)!=null&&o.call(c,e,t,this))){s=c;break}}if(!s)return re(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(e,t,this),r.parser=s;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];c.parse&&c.parse&&await((a=c.testParse)==null?void 0:a.call(c,i,t,this))&&(i=await c.parse(i,t,this)||i,r.parser=c)}return i})(),r}async load(e,t){this._parsersValidated||this._validateParsers();let r=0;const i={},s=mn(e),o=ve(e,c=>({alias:[c],src:c})),a=o.length,l=o.map(async c=>{const u=le.toAbsolute(c.src);if(!i[c.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,c)),i[c.src]=await this.promiseCache[u].promise,t&&t(++r/a)}catch(h){throw delete this.promiseCache[u],delete i[c.src],new Error(`[Loader.load] Failed to load ${u}.
${h}`)}});return await Promise.all(l),s?i[o[0].src]:i}async unload(e){const r=ve(e,i=>({alias:[i],src:i})).map(async i=>{var a,l;const s=le.toAbsolute(i.src),o=this.promiseCache[s];if(o){const c=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,c,i,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,t)=>(t.name?e[t.name]&&re(`[Assets] loadParser name conflict "${t.name}"`):re("[Assets] loadParser should have a name"),{...e,[t.name]:t}),{})}}function mt(n,e){if(Array.isArray(e)){for(const t of e)if(n.startsWith(`data:${t}`))return!0;return!1}return n.startsWith(`data:${e}`)}function pt(n,e){const t=n.split("?")[0],r=le.extname(t).toLowerCase();return Array.isArray(e)?e.includes(r):r===e}const fu=".json",du="application/json",mu={extension:{type:E.LoadParser,priority:Ue.Low},name:"loadJson",test(n){return mt(n,du)||pt(n,fu)},async load(n){return await(await se.get().fetch(n)).json()}},pu=".txt",gu="text/plain",xu={name:"loadTxt",extension:{type:E.LoadParser,priority:Ue.Low},test(n){return mt(n,gu)||pt(n,pu)},async load(n){return await(await se.get().fetch(n)).text()}},vu=["normal","bold","100","200","300","400","500","600","700","800","900"],yu=[".ttf",".otf",".woff",".woff2"],_u=["font/ttf","font/otf","font/woff","font/woff2"],bu=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Au(n){const e=le.extname(n),i=le.basename(n,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=i.length>0;for(const a of i)if(!a.match(bu)){s=!1;break}let o=i.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const Su=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Cu(n){return Su.test(n)?n:encodeURI(n)}const wu={extension:{type:E.LoadParser,priority:Ue.Low},name:"loadWebFont",test(n){return mt(n,_u)||pt(n,yu)},async load(n,e){var r,i,s;const t=se.get().getFontFaceSet();if(t){const o=[],a=((r=e.data)==null?void 0:r.family)??Au(n),l=((s=(i=e.data)==null?void 0:i.weights)==null?void 0:s.filter(u=>vu.includes(u)))??["normal"],c=e.data??{};for(let u=0;u<l.length;u++){const h=l[u],f=new FontFace(a,`url(${Cu(n)})`,{...c,weight:h});await f.load(),t.add(f),o.push(f)}return ie.set(`${a}-and-url`,{url:n,fontFaces:o}),o.length===1?o[0]:o}return re("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(n){(Array.isArray(n)?n:[n]).forEach(e=>{ie.remove(e.family),se.get().getFontFaceSet().delete(e)})}};var Tu=Iu,jn={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Pu=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Iu(n){var e=[];return n.replace(Pu,function(t,r,i){var s=r.toLowerCase();for(i=Mu(i),s=="m"&&i.length>2&&(e.push([r].concat(i.splice(0,2))),s="l",r=r=="m"?"l":"L");;){if(i.length==jn[s])return i.unshift(r),e.push(i);if(i.length<jn[s])throw new Error("malformed path data");e.push([r].concat(i.splice(0,jn[s])))}}),e}var Fu=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Mu(n){var e=n.match(Fu);return e?e.map(Number):[]}const zu=Or(Tu);function Eu(n,e){const t=zu(n),r=[];let i=null,s=0,o=0;for(let a=0;a<t.length;a++){const l=t[a],c=l[0],u=l;switch(c){case"M":s=u[1],o=u[2],e.moveTo(s,o);break;case"m":s+=u[1],o+=u[2],e.moveTo(s,o);break;case"H":s=u[1],e.lineTo(s,o);break;case"h":s+=u[1],e.lineTo(s,o);break;case"V":o=u[1],e.lineTo(s,o);break;case"v":o+=u[1],e.lineTo(s,o);break;case"L":s=u[1],o=u[2],e.lineTo(s,o);break;case"l":s+=u[1],o+=u[2],e.lineTo(s,o);break;case"C":s=u[5],o=u[6],e.bezierCurveTo(u[1],u[2],u[3],u[4],s,o);break;case"c":e.bezierCurveTo(s+u[1],o+u[2],s+u[3],o+u[4],s+u[5],o+u[6]),s+=u[5],o+=u[6];break;case"S":s=u[3],o=u[4],e.bezierCurveToShort(u[1],u[2],s,o);break;case"s":e.bezierCurveToShort(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"Q":s=u[3],o=u[4],e.quadraticCurveTo(u[1],u[2],s,o);break;case"q":e.quadraticCurveTo(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"T":s=u[1],o=u[2],e.quadraticCurveToShort(s,o);break;case"t":s+=u[1],o+=u[2],e.quadraticCurveToShort(s,o);break;case"A":s=u[6],o=u[7],e.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"a":s+=u[6],o+=u[7],e.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"Z":case"z":e.closePath(),r.length>0&&(i=r.pop(),i?(s=i.startX,o=i.startY):(s=0,o=0)),i=null;break;default:re(`Unknown SVG path command: ${c}`)}c!=="Z"&&c!=="z"&&i===null&&(i={startX:s,startY:o},r.push(i))}return e}class Gr{constructor(e=0,t=0,r=0){this.type="circle",this.x=e,this.y=t,this.radius=r}clone(){return new Gr(this.x,this.y,this.radius)}contains(e,t){if(this.radius<=0)return!1;const r=this.radius*this.radius;let i=this.x-e,s=this.y-t;return i*=i,s*=s,i+s<=r}strokeContains(e,t,r){if(this.radius===0)return!1;const i=this.x-e,s=this.y-t,o=this.radius,a=r/2,l=Math.sqrt(i*i+s*s);return l<o+a&&l>o-a}getBounds(e){return e=e||new Q,e.x=this.x-this.radius,e.y=this.y-this.radius,e.width=this.radius*2,e.height=this.radius*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.radius=e.radius,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Nr{constructor(e=0,t=0,r=0,i=0){this.type="ellipse",this.x=e,this.y=t,this.halfWidth=r,this.halfHeight=i}clone(){return new Nr(this.x,this.y,this.halfWidth,this.halfHeight)}contains(e,t){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let r=(e-this.x)/this.halfWidth,i=(t-this.y)/this.halfHeight;return r*=r,i*=i,r+i<=1}strokeContains(e,t,r){const{halfWidth:i,halfHeight:s}=this;if(i<=0||s<=0)return!1;const o=r/2,a=i-o,l=s-o,c=i+o,u=s+o,h=e-this.x,f=t-this.y,d=h*h/(a*a)+f*f/(l*l),m=h*h/(c*c)+f*f/(u*u);return d>1&&m<=1}getBounds(){return new Q(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(e){return this.x=e.x,this.y=e.y,this.halfWidth=e.halfWidth,this.halfHeight=e.halfHeight,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function Ou(n,e,t,r,i,s){const o=n-t,a=e-r,l=i-t,c=s-r,u=o*l+a*c,h=l*l+c*c;let f=-1;h!==0&&(f=u/h);let d,m;f<0?(d=t,m=r):f>1?(d=i,m=s):(d=t+f*l,m=r+f*c);const g=n-d,p=e-m;return g*g+p*p}class Ft{constructor(...e){this.type="polygon";let t=Array.isArray(e[0])?e[0]:e;if(typeof t[0]!="number"){const r=[];for(let i=0,s=t.length;i<s;i++)r.push(t[i].x,t[i].y);t=r}this.points=t,this.closePath=!0}clone(){const e=this.points.slice(),t=new Ft(e);return t.closePath=this.closePath,t}contains(e,t){let r=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const a=this.points[s*2],l=this.points[s*2+1],c=this.points[o*2],u=this.points[o*2+1];l>t!=u>t&&e<(c-a)*((t-l)/(u-l))+a&&(r=!r)}return r}strokeContains(e,t,r){const i=r/2,s=i*i,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const c=o[l],u=o[l+1],h=o[(l+2)%o.length],f=o[(l+3)%o.length];if(Ou(e,t,c,u,h,f)<=s)return!0}return!1}getBounds(e){e=e||new Q;const t=this.points;let r=1/0,i=-1/0,s=1/0,o=-1/0;for(let a=0,l=t.length;a<l;a+=2){const c=t[a],u=t[a+1];r=c<r?c:r,i=c>i?c:i,s=u<s?u:s,o=u>o?u:o}return e.x=r,e.width=i-r,e.y=s,e.height=o-s,e}copyFrom(e){return this.points=e.points.slice(),this.closePath=e.closePath,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((e,t)=>`${e}, ${t}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const Qt=(n,e,t,r,i,s)=>{const o=n-t,a=e-r,l=Math.sqrt(o*o+a*a);return l>=i-s&&l<=i+s};class Vr{constructor(e=0,t=0,r=0,i=0,s=20){this.type="roundedRectangle",this.x=e,this.y=t,this.width=r,this.height=i,this.radius=s}getBounds(e){return e=e||new Q,e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}clone(){return new Vr(this.x,this.y,this.width,this.height,this.radius)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){const r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+r&&t<=this.y+this.height-r||e>=this.x+r&&e<=this.x+this.width-r)return!0;let i=e-(this.x+r),s=t-(this.y+r);const o=r*r;if(i*i+s*s<=o||(i=e-(this.x+this.width-r),i*i+s*s<=o)||(s=t-(this.y+this.height-r),i*i+s*s<=o)||(i=e-(this.x+r),i*i+s*s<=o))return!0}return!1}strokeContains(e,t,r){const{x:i,y:s,width:o,height:a,radius:l}=this,c=r/2,u=i+l,h=s+l,f=o-l*2,d=a-l*2,m=i+o,g=s+a;return(e>=i-c&&e<=i+c||e>=m-c&&e<=m+c)&&t>=h&&t<=h+d||(t>=s-c&&t<=s+c||t>=g-c&&t<=g+c)&&e>=u&&e<=u+f?!0:e<u&&t<h&&Qt(e,t,u,h,l,c)||e>m-l&&t<h&&Qt(e,t,m-l,h,l,c)||e>m-l&&t>g-l&&Qt(e,t,m-l,g-l,l,c)||e<u&&t>g-l&&Qt(e,t,u,g-l,l,c)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}var ae=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(ae||{});class Rt extends ce{constructor(e){let{data:t,size:r}=e;const{usage:i,label:s,shrinkToFit:o}=e;super(),this.uid=J("buffer"),this._resourceType="buffer",this._resourceId=J("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,t instanceof Array&&(t=new Float32Array(t)),this._data=t,r=r??(t==null?void 0:t.byteLength);const a=!!t;this.descriptor={size:r,usage:i,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(e){this.setDataWithSize(e,e.length,!0)}get static(){return!!(this.descriptor.usage&ae.STATIC)}set static(e){e?this.descriptor.usage|=ae.STATIC:this.descriptor.usage&=~ae.STATIC}setDataWithSize(e,t,r){if(this._updateID++,this._updateSize=t*e.BYTES_PER_ELEMENT,this._data===e){r&&this.emit("update",this);return}const i=this._data;if(this._data=e,i.length!==e.length){!this.shrinkToFit&&e.byteLength<i.byteLength?r&&this.emit("update",this):(this.descriptor.size=e.byteLength,this._resourceId=J("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(e){this._updateSize=e??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Xs(n,e){if(!(n instanceof Rt)){let t=e?ae.INDEX:ae.VERTEX;n instanceof Array&&(e?(n=new Uint32Array(n),t=ae.INDEX|ae.COPY_DST):(n=new Float32Array(n),t=ae.VERTEX|ae.COPY_DST)),n=new Rt({data:n,label:e?"index-mesh-buffer":"vertex-mesh-buffer",usage:t})}return n}function Ru(n,e,t){const r=n.getAttribute(e);if(!r)return t.minX=0,t.minY=0,t.maxX=0,t.maxY=0,t;const i=r.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const c=i.BYTES_PER_ELEMENT,u=(r.offset||0)/c,h=(r.stride||2*4)/c;for(let f=u;f<i.length;f+=h){const d=i[f],m=i[f+1];d>a&&(a=d),m>l&&(l=m),d<s&&(s=d),m<o&&(o=m)}return t.minX=s,t.minY=o,t.maxX=a,t.maxY=l,t}function Bu(n){return(n instanceof Rt||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=Xs(n.buffer,!1),n}class Uu extends ce{constructor(e){const{attributes:t,indexBuffer:r,topology:i}=e;super(),this.uid=J("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Re,this._boundsDirty=!0,this.attributes=t,this.buffers=[],this.instanceCount=e.instanceCount||1;for(const s in t){const o=t[s]=Bu(t[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}r&&(this.indexBuffer=Xs(r,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(const e in this.attributes){const t=this.attributes[e];return t.buffer.data.length/(t.stride/4||t.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Ru(this,"aPosition",this._bounds)):this._bounds}destroy(e=!1){this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(t=>t.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Lu=new Float32Array(1),ku=new Uint32Array(1);class Du extends Uu{constructor(){const t=new Rt({data:Lu,label:"attribute-batch-buffer",usage:ae.VERTEX|ae.COPY_DST,shrinkToFit:!1}),r=new Rt({data:ku,label:"index-batch-buffer",usage:ae.INDEX|ae.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:t,format:"float32x2",stride:i,offset:0,location:1},aUV:{buffer:t,format:"float32x2",stride:i,offset:2*4,location:3},aColor:{buffer:t,format:"unorm8x4",stride:i,offset:4*4,location:0},aTextureIdAndRound:{buffer:t,format:"uint16x2",stride:i,offset:5*4,location:2}},indexBuffer:r})}}function Gu(){const n=Ts();return n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)}const Ys=Gu(),Ws={};function Nu(n,e){let t=0;for(let r=0;r<e;r++)t=t*31+n[r].uid>>>0;return Ws[t]||Vu(n,t)}function Vu(n,e){const t={};let r=0;for(let s=0;s<Ys;s++){const o=s<n.length?n[s]:M.EMPTY.source;t[r++]=o.source,t[r++]=o.style}const i=new tn(t);return Ws[e]=i,i}class Fi{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function Mi(n,e){const t=n.byteLength/8|0,r=new Float64Array(n,0,t);new Float64Array(e,0,t).set(r);const s=n.byteLength-t*8;if(s>0){const o=new Uint8Array(n,t*8,s);new Uint8Array(e,t*8,s).set(o)}}const Xu={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Yu=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n))(Yu||{});function zi(n,e){return e.alphaMode==="no-premultiply-alpha"&&Xu[n]||n}class Ei{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){const t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}class Oi{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let At=0;const Hs=class js{constructor(e={}){this.uid=J("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,e={...js.defaultOptions,...e};const{vertexSize:t,indexSize:r}=e;this.attributeBuffer=new Fi(t*this._vertexSize*4),this.indexBuffer=new Uint16Array(r)}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e.indexStart=this.indexSize,e.location=this.attributeSize,e.batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.vertexSize*this._vertexSize}checkAndUpdateTexture(e,t){const r=e.batch.textures.ids[t._source.uid];return!r&&r!==0?!1:(e.textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0,e.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,e.location,e.textureId)}break(e){const t=this._elements;let r=this._textureBatchPool[this._textureBatchPoolIndex++]||new Ei;if(r.clear(),!t[this.elementStart])return;const i=t[this.elementStart];let s=zi(i.blendMode,i.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,l=this.indexBuffer;let c=this._batchIndexSize,u=this._batchIndexStart,h="startBatch",f=this._batchPool[this._batchPoolIndex++]||new Oi;for(let d=this.elementStart;d<this.elementSize;++d){const m=t[d];t[d]=null;const p=m.texture._source,v=zi(m.blendMode,p),x=s!==v;if(p._batchTick===At&&!x){m.textureId=p._textureBindLocation,c+=m.indexSize,m.packAttributes(o,a,m.location,m.textureId),m.packIndex(l,m.indexStart,m.location/this._vertexSize),m.batch=f;continue}p._batchTick=At,(r.count>=Ys||x)&&(this._finishBatch(f,u,c-u,r,s,e,h),h="renderBatch",u=c,s=v,r=this._textureBatchPool[this._textureBatchPoolIndex++]||new Ei,r.clear(),f=this._batchPool[this._batchPoolIndex++]||new Oi,++At),m.textureId=p._textureBindLocation=r.count,r.ids[p.uid]=r.count,r.textures[r.count++]=p,m.batch=f,c+=m.indexSize,m.packAttributes(o,a,m.location,m.textureId),m.packIndex(l,m.indexStart,m.location/this._vertexSize)}r.count>0&&(this._finishBatch(f,u,c-u,r,s,e,h),u=c,++At),this.elementStart=this.elementSize,this._batchIndexStart=u,this._batchIndexSize=c}_finishBatch(e,t,r,i,s,o,a){e.gpuBindGroup=null,e.action=a,e.batcher=this,e.textures=i,e.blendMode=s,e.start=t,e.size=r,++At,o.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const t=Math.max(e,this.attributeBuffer.size*2),r=new Fi(t);Mi(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(e){const t=this.indexBuffer;let r=Math.max(e,t.length*1.5);r+=r%2;const i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let s=0;s<t.length;s++)i[s]=t[s];else Mi(t.buffer,i.buffer);this.indexBuffer=i}destroy(){for(let e=0;e<this.batches.length;e++)this.batches[e].destroy();this.batches=null;for(let e=0;e<this._elements.length;e++)this._elements[e].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Hs.defaultOptions={vertexSize:4,indexSize:6};let Wu=Hs;function Hu(n,e,t,r,i,s,o,a=null){let l=0;t*=e,i*=s;const c=a.a,u=a.b,h=a.c,f=a.d,d=a.tx,m=a.ty;for(;l<o;){const g=n[t],p=n[t+1];r[i]=c*g+h*p+d,r[i+1]=u*g+f*p+m,i+=s,t+=e,l++}}function ju(n,e,t,r){let i=0;for(e*=t;i<r;)n[e]=0,n[e+1]=0,e+=t,i++}function $s(n,e,t,r,i){const s=e.a,o=e.b,a=e.c,l=e.d,c=e.tx,u=e.ty;t=t||0,r=r||2,i=i||n.length/r-t;let h=t*r;for(let f=0;f<i;f++){const d=n[h],m=n[h+1];n[h]=s*d+a*m+c,n[h+1]=o*d+l*m+u,h+=r}}function $u(n,e){if(n===16777215||!e)return e;if(e===16777215||!n)return n;const t=n>>16&255,r=n>>8&255,i=n&255,s=e>>16&255,o=e>>8&255,a=e&255,l=t*s/255,c=r*o/255,u=i*a/255;return(l<<16)+(c<<8)+u}class qs{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(e,t,r){const i=this.geometryData.indices;for(let s=0;s<this.indexSize;s++)e[t++]=i[s+this.indexOffset]+r-this.vertexOffset}packAttributes(e,t,r,i){const s=this.geometryData,o=this.renderable,a=s.vertices,l=s.uvs,c=this.vertexOffset*2,u=(this.vertexOffset+this.vertexSize)*2,h=this.color,f=h>>16|h&65280|(h&255)<<16;if(this.applyTransform){const d=$u(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),m=o.groupTransform,g=i<<16|this.roundPixels&65535,p=m.a,v=m.b,x=m.c,y=m.d,_=m.tx,I=m.ty;for(let O=c;O<u;O+=2){const T=a[O],P=a[O+1];e[r]=p*T+x*P+_,e[r+1]=v*T+y*P+I,e[r+2]=l[O],e[r+3]=l[O+1],t[r+4]=d,t[r+5]=g,r+=6}}else{const d=f+(this.alpha*255<<24);for(let m=c;m<u;m+=2)e[r]=a[m],e[r+1]=a[m+1],e[r+2]=l[m],e[r+3]=l[m+1],t[r+4]=d,t[r+5]=i<<16,r+=6}}get vertSize(){return this.vertexSize}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.vertexOffset=this.vertexOffset,e.vertexSize=this.vertexSize,e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const $n={build(n,e){let t,r,i,s,o,a;if(n.type==="circle"){const _=n;t=_.x,r=_.y,o=a=_.radius,i=s=0}else if(n.type==="ellipse"){const _=n;t=_.x,r=_.y,o=_.halfWidth,a=_.halfHeight,i=s=0}else{const _=n,I=_.width/2,O=_.height/2;t=_.x+I,r=_.y+O,o=a=Math.max(0,Math.min(_.radius,Math.min(I,O))),i=I-o,s=O-a}if(!(o>=0&&a>=0&&i>=0&&s>=0))return e;const l=Math.ceil(2.3*Math.sqrt(o+a)),c=l*8+(i?4:0)+(s?4:0);if(c===0)return e;if(l===0)return e[0]=e[6]=t+i,e[1]=e[3]=r+s,e[2]=e[4]=t-i,e[5]=e[7]=r-s,e;let u=0,h=l*4+(i?2:0)+2,f=h,d=c,m=i+o,g=s,p=t+m,v=t-m,x=r+g;if(e[u++]=p,e[u++]=x,e[--h]=x,e[--h]=v,s){const _=r-g;e[f++]=v,e[f++]=_,e[--d]=_,e[--d]=p}for(let _=1;_<l;_++){const I=Math.PI/2*(_/l),O=i+Math.cos(I)*o,T=s+Math.sin(I)*a,P=t+O,A=t-O,b=r+T,W=r-T;e[u++]=P,e[u++]=b,e[--h]=b,e[--h]=A,e[f++]=A,e[f++]=W,e[--d]=W,e[--d]=P}m=i,g=s+a,p=t+m,v=t-m,x=r+g;const y=r-g;return e[u++]=p,e[u++]=x,e[--d]=y,e[--d]=p,i&&(e[u++]=v,e[u++]=x,e[--d]=y,e[--d]=v),e},triangulate(n,e,t,r,i,s){if(n.length===0)return;let o=0,a=0;for(let u=0;u<n.length;u+=2)o+=n[u],a+=n[u+1];o/=n.length/2,a/=n.length/2;let l=r;e[l*t]=o,e[l*t+1]=a;const c=l++;for(let u=0;u<n.length;u+=2)e[l*t]=n[u],e[l*t+1]=n[u+1],u>0&&(i[s++]=l,i[s++]=c,i[s++]=l-1),l++;i[s++]=c+1,i[s++]=c,i[s++]=l-1}},qu=1e-4,Ri=1e-4;function Ku(n){const e=n.length;if(e<6)return 1;let t=0;for(let r=0,i=n[e-2],s=n[e-1];r<e;r+=2){const o=n[r],a=n[r+1];t+=(o-i)*(a+s),i=o,s=a}return t<0?-1:1}function Bi(n,e,t,r,i,s,o,a){const l=n-t*i,c=e-r*i,u=n+t*s,h=e+r*s;let f,d;o?(f=r,d=-t):(f=-r,d=t);const m=l+f,g=c+d,p=u+f,v=h+d;return a.push(m,g),a.push(p,v),2}function Ne(n,e,t,r,i,s,o,a){const l=t-n,c=r-e;let u=Math.atan2(l,c),h=Math.atan2(i-n,s-e);a&&u<h?u+=Math.PI*2:!a&&u>h&&(h+=Math.PI*2);let f=u;const d=h-u,m=Math.abs(d),g=Math.sqrt(l*l+c*c),p=(15*m*Math.sqrt(g)/Math.PI>>0)+1,v=d/p;if(f+=v,a){o.push(n,e),o.push(t,r);for(let x=1,y=f;x<p;x++,y+=v)o.push(n,e),o.push(n+Math.sin(y)*g,e+Math.cos(y)*g);o.push(n,e),o.push(i,s)}else{o.push(t,r),o.push(n,e);for(let x=1,y=f;x<p;x++,y+=v)o.push(n+Math.sin(y)*g,e+Math.cos(y)*g),o.push(n,e);o.push(i,s),o.push(n,e)}return p*2}function Zu(n,e,t,r,i,s,o,a,l){const c=qu;if(n.length===0)return;const u=e;let h=u.alignment;if(e.alignment!==.5){let H=Ku(n);h=(h-.5)*H+.5}const f=new ne(n[0],n[1]),d=new ne(n[n.length-2],n[n.length-1]),m=r,g=Math.abs(f.x-d.x)<c&&Math.abs(f.y-d.y)<c;if(m){n=n.slice(),g&&(n.pop(),n.pop(),d.set(n[n.length-2],n[n.length-1]));const H=(f.x+d.x)*.5,Be=(d.y+f.y)*.5;n.unshift(H,Be),n.push(H,Be)}const p=i,v=n.length/2;let x=n.length;const y=p.length/2,_=u.width/2,I=_*_,O=u.miterLimit*u.miterLimit;let T=n[0],P=n[1],A=n[2],b=n[3],W=0,ge=0,z=-(P-b),w=T-A,k=0,j=0,C=Math.sqrt(z*z+w*w);z/=C,w/=C,z*=_,w*=_;const D=h,S=(1-D)*2,F=D*2;m||(u.cap==="round"?x+=Ne(T-z*(S-F)*.5,P-w*(S-F)*.5,T-z*S,P-w*S,T+z*F,P+w*F,p,!0)+2:u.cap==="square"&&(x+=Bi(T,P,z,w,S,F,!0,p))),p.push(T-z*S,P-w*S),p.push(T+z*F,P+w*F);for(let H=1;H<v-1;++H){T=n[(H-1)*2],P=n[(H-1)*2+1],A=n[H*2],b=n[H*2+1],W=n[(H+1)*2],ge=n[(H+1)*2+1],z=-(P-b),w=T-A,C=Math.sqrt(z*z+w*w),z/=C,w/=C,z*=_,w*=_,k=-(b-ge),j=A-W,C=Math.sqrt(k*k+j*j),k/=C,j/=C,k*=_,j*=_;const Be=A-T,gt=P-b,xt=A-W,vt=ge-b,ei=Be*xt+gt*vt,Gt=gt*xt-vt*Be,yt=Gt<0;if(Math.abs(Gt)<.001*Math.abs(ei)){p.push(A-z*S,b-w*S),p.push(A+z*F,b+w*F),ei>=0&&(u.join==="round"?x+=Ne(A,b,A-z*S,b-w*S,A-k*S,b-j*S,p,!1)+4:x+=2,p.push(A-k*F,b-j*F),p.push(A+k*S,b+j*S));continue}const ti=(-z+T)*(-w+b)-(-z+A)*(-w+P),ni=(-k+W)*(-j+b)-(-k+A)*(-j+ge),Nt=(Be*ni-xt*ti)/Gt,Vt=(vt*ti-gt*ni)/Gt,Sn=(Nt-A)*(Nt-A)+(Vt-b)*(Vt-b),Le=A+(Nt-A)*S,ke=b+(Vt-b)*S,De=A-(Nt-A)*F,Ge=b-(Vt-b)*F,ma=Math.min(Be*Be+gt*gt,xt*xt+vt*vt),ri=yt?S:F,pa=ma+ri*ri*I;Sn<=pa?u.join==="bevel"||Sn/I>O?(yt?(p.push(Le,ke),p.push(A+z*F,b+w*F),p.push(Le,ke),p.push(A+k*F,b+j*F)):(p.push(A-z*S,b-w*S),p.push(De,Ge),p.push(A-k*S,b-j*S),p.push(De,Ge)),x+=2):u.join==="round"?yt?(p.push(Le,ke),p.push(A+z*F,b+w*F),x+=Ne(A,b,A+z*F,b+w*F,A+k*F,b+j*F,p,!0)+4,p.push(Le,ke),p.push(A+k*F,b+j*F)):(p.push(A-z*S,b-w*S),p.push(De,Ge),x+=Ne(A,b,A-z*S,b-w*S,A-k*S,b-j*S,p,!1)+4,p.push(A-k*S,b-j*S),p.push(De,Ge)):(p.push(Le,ke),p.push(De,Ge)):(p.push(A-z*S,b-w*S),p.push(A+z*F,b+w*F),u.join==="round"?yt?x+=Ne(A,b,A+z*F,b+w*F,A+k*F,b+j*F,p,!0)+2:x+=Ne(A,b,A-z*S,b-w*S,A-k*S,b-j*S,p,!1)+2:u.join==="miter"&&Sn/I<=O&&(yt?(p.push(De,Ge),p.push(De,Ge)):(p.push(Le,ke),p.push(Le,ke)),x+=2),p.push(A-k*S,b-j*S),p.push(A+k*F,b+j*F),x+=2)}T=n[(v-2)*2],P=n[(v-2)*2+1],A=n[(v-1)*2],b=n[(v-1)*2+1],z=-(P-b),w=T-A,C=Math.sqrt(z*z+w*w),z/=C,w/=C,z*=_,w*=_,p.push(A-z*S,b-w*S),p.push(A+z*F,b+w*F),m||(u.cap==="round"?x+=Ne(A-z*(S-F)*.5,b-w*(S-F)*.5,A-z*S,b-w*S,A+z*F,b+w*F,p,!1)+2:u.cap==="square"&&(x+=Bi(A,b,z,w,S,F,!1,p)));const Dt=Ri*Ri;for(let H=y;H<x+y-2;++H)T=p[H*2],P=p[H*2+1],A=p[(H+1)*2],b=p[(H+1)*2+1],W=p[(H+2)*2],ge=p[(H+2)*2+1],!(Math.abs(T*(b-ge)+A*(ge-P)+W*(P-b))<Dt)&&a.push(H,H+1,H+2)}function Ks(n,e,t,r,i,s,o){const a=Kl(n,e,2);if(!a)return;for(let c=0;c<a.length;c+=3)s[o++]=a[c]+i,s[o++]=a[c+1]+i,s[o++]=a[c+2]+i;let l=i*r;for(let c=0;c<n.length;c+=2)t[l]=n[c],t[l+1]=n[c+1],l+=r}const Qu=[],Ju={build(n,e){for(let t=0;t<n.points.length;t++)e[t]=n.points[t];return e},triangulate(n,e,t,r,i,s){Ks(n,Qu,e,t,r,i,s)}},ec={build(n,e){const t=n,r=t.x,i=t.y,s=t.width,o=t.height;return s>=0&&o>=0&&(e[0]=r,e[1]=i,e[2]=r+s,e[3]=i,e[4]=r+s,e[5]=i+o,e[6]=r,e[7]=i+o),e},triangulate(n,e,t,r,i,s){let o=0;r*=t,e[r+o]=n[0],e[r+o+1]=n[1],o+=t,e[r+o]=n[2],e[r+o+1]=n[3],o+=t,e[r+o]=n[6],e[r+o+1]=n[7],o+=t,e[r+o]=n[4],e[r+o+1]=n[5],o+=t;const a=r/t;i[s++]=a,i[s++]=a+1,i[s++]=a+2,i[s++]=a+1,i[s++]=a+3,i[s++]=a+2}},tc={build(n,e){return e[0]=n.x,e[1]=n.y,e[2]=n.x2,e[3]=n.y2,e[4]=n.x3,e[5]=n.y3,e},triangulate(n,e,t,r,i,s){let o=0;r*=t,e[r+o]=n[0],e[r+o+1]=n[1],o+=t,e[r+o]=n[2],e[r+o+1]=n[3],o+=t,e[r+o]=n[4],e[r+o+1]=n[5];const a=r/t;i[s++]=a,i[s++]=a+1,i[s++]=a+2}},Xr={rectangle:ec,polygon:Ju,triangle:tc,circle:$n,ellipse:$n,roundedRectangle:$n},nc=new Q;function rc(n,e){const{geometryData:t,batches:r}=e;r.length=0,t.indices.length=0,t.vertices.length=0,t.uvs.length=0;for(let i=0;i<n.instructions.length;i++){const s=n.instructions[i];if(s.action==="texture")ic(s.data,r,t);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,c=s.data.hole;o&&c&&Ui(c.shapePath,l,null,!0,r,t),Ui(a,l,c,o,r,t)}}}function ic(n,e,t){const{vertices:r,uvs:i,indices:s}=t,o=s.length,a=r.length/2,l=[],c=Xr.rectangle,u=nc,h=n.image;u.x=n.dx,u.y=n.dy,u.width=n.dw,u.height=n.dh;const f=n.transform;c.build(u,l),f&&$s(l,f),c.triangulate(l,r,2,a,s,o);const d=h.uvs;i.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const m=Ee.get(qs);m.indexOffset=o,m.indexSize=s.length-o,m.vertexOffset=a,m.vertexSize=r.length/2-a,m.color=n.style,m.alpha=n.alpha,m.texture=h,m.geometryData=t,e.push(m)}function Ui(n,e,t,r,i,s){const{vertices:o,uvs:a,indices:l}=s,c=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:u,transform:h},f)=>{const d=l.length,m=o.length/2,g=[],p=Xr[u.type];if(p.build(u,g),h&&$s(g,h),r){const _=u.closePath??!0;Zu(g,e,!1,_,o,2,m,l)}else if(t&&c===f){c!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const _=[],I=g.slice();sc(t.shapePath).forEach(T=>{_.push(I.length/2),I.push(...T)}),Ks(I,_,o,2,m,l,d)}else p.triangulate(g,o,2,m,l,d);const v=a.length/2,x=e.texture;if(x!==M.WHITE){const _=e.matrix;h&&_.append(h.clone().invert()),Hu(o,2,m,a,v,2,o.length/2-m,_)}else ju(a,v,2,o.length/2-m);const y=Ee.get(qs);y.indexOffset=d,y.indexSize=l.length-d,y.vertexOffset=m,y.vertexSize=o.length/2-m,y.color=e.color,y.alpha=e.alpha,y.texture=x,y.geometryData=s,i.push(y)})}function sc(n){if(!n)return[];const e=n.shapePrimitives,t=[];for(let r=0;r<e.length;r++){const i=e[r].shape,s=[];Xr[i.type].build(i,s),t.push(s)}return t}class oc{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class ac{constructor(){this.geometry=new Du,this.instructions=new fs}init(){this.instructions.reset()}}const Yr=class dr{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null),this._needsContextNeedsRebuild=[]}init(e){dr.defaultOptions.bezierSmoothness=(e==null?void 0:e.bezierSmoothness)??dr.defaultOptions.bezierSmoothness}prerender(){this._returnActiveBatchers()}getContextRenderData(e){return this._graphicsDataContextHash[e.uid]||this._initContextRenderData(e)}updateGpuContext(e){let t=this._gpuContextHash[e.uid]||this._initContext(e);if(e.dirty){t?this._cleanGraphicsContextData(e):t=this._initContext(e),rc(e,t);const r=e.batchMode;e.customShader||r==="no-batch"?t.isBatchable=!1:r==="auto"&&(t.isBatchable=t.geometryData.vertices.length<400),e.dirty=!1}return t}getGpuContext(e){return this._gpuContextHash[e.uid]||this._initContext(e)}_returnActiveBatchers(){for(let e=0;e<this._activeBatchers.length;e++)Ee.return(this._activeBatchers[e]);this._activeBatchers.length=0}_initContextRenderData(e){const t=Ee.get(ac),{batches:r,geometryData:i}=this._gpuContextHash[e.uid],s=i.vertices.length,o=i.indices.length;for(let u=0;u<r.length;u++)r[u].applyTransform=!1;const a=Ee.get(Wu);this._activeBatchers.push(a),a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let u=0;u<r.length;u++){const h=r[u];a.add(h)}a.finish(t.instructions);const l=t.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const c=a.batches;for(let u=0;u<c.length;u++){const h=c[u];h.bindGroup=Nu(h.textures.textures,h.textures.count)}return this._graphicsDataContextHash[e.uid]=t,t}_initContext(e){const t=new oc;return this._gpuContextHash[e.uid]=t,e.on("update",this.onGraphicsContextUpdate,this),e.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]}onGraphicsContextUpdate(e){this._needsContextNeedsRebuild.push(e)}onGraphicsContextDestroy(e){this._cleanGraphicsContextData(e),e.off("update",this.onGraphicsContextUpdate,this),e.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]=null}_cleanGraphicsContextData(e){const t=this._gpuContextHash[e.uid];t.isBatchable||this._graphicsDataContextHash[e.uid]&&(Ee.return(this.getContextRenderData(e)),this._graphicsDataContextHash[e.uid]=null),t.batches&&t.batches.forEach(r=>{Ee.return(r)})}destroy(){for(const e of this._needsContextNeedsRebuild)this._gpuContextHash[e.uid]&&this.onGraphicsContextDestroy(e);this._needsContextNeedsRebuild.length=0}};Yr.extension={type:[E.WebGLSystem,E.WebGPUSystem,E.CanvasSystem],name:"graphicsContext"};Yr.defaultOptions={bezierSmoothness:.5};let Zs=Yr;const lc=8,Jt=11920929e-14,uc=1;function Qs(n,e,t,r,i,s,o,a,l,c){const h=Math.min(.99,Math.max(0,c??Zs.defaultOptions.bezierSmoothness));let f=(uc-h)/1;return f*=f,cc(e,t,r,i,s,o,a,l,n,f),n}function cc(n,e,t,r,i,s,o,a,l,c){mr(n,e,t,r,i,s,o,a,l,c,0),l.push(o,a)}function mr(n,e,t,r,i,s,o,a,l,c,u){if(u>lc)return;const h=(n+t)/2,f=(e+r)/2,d=(t+i)/2,m=(r+s)/2,g=(i+o)/2,p=(s+a)/2,v=(h+d)/2,x=(f+m)/2,y=(d+g)/2,_=(m+p)/2,I=(v+y)/2,O=(x+_)/2;if(u>0){let T=o-n,P=a-e;const A=Math.abs((t-o)*P-(r-a)*T),b=Math.abs((i-o)*P-(s-a)*T);if(A>Jt&&b>Jt){if((A+b)*(A+b)<=c*(T*T+P*P)){l.push(I,O);return}}else if(A>Jt){if(A*A<=c*(T*T+P*P)){l.push(I,O);return}}else if(b>Jt){if(b*b<=c*(T*T+P*P)){l.push(I,O);return}}else if(T=I-(n+o)/2,P=O-(e+a)/2,T*T+P*P<=c){l.push(I,O);return}}mr(n,e,h,f,v,x,I,O,l,c,u+1),mr(I,O,y,_,g,p,o,a,l,c,u+1)}const hc=8,fc=11920929e-14,dc=1;function mc(n,e,t,r,i,s,o,a){const c=Math.min(.99,Math.max(0,a??Zs.defaultOptions.bezierSmoothness));let u=(dc-c)/1;return u*=u,pc(e,t,r,i,s,o,n,u),n}function pc(n,e,t,r,i,s,o,a){pr(o,n,e,t,r,i,s,a,0),o.push(i,s)}function pr(n,e,t,r,i,s,o,a,l){if(l>hc)return;const c=(e+r)/2,u=(t+i)/2,h=(r+s)/2,f=(i+o)/2,d=(c+h)/2,m=(u+f)/2;let g=s-e,p=o-t;const v=Math.abs((r-s)*p-(i-o)*g);if(v>fc){if(v*v<=a*(g*g+p*p)){n.push(d,m);return}}else if(g=d-(e+s)/2,p=m-(t+o)/2,g*g+p*p<=a){n.push(d,m);return}pr(n,e,t,c,u,d,m,a,l+1),pr(n,d,m,h,f,s,o,a,l+1)}function Js(n,e,t,r,i,s,o,a){let l=Math.abs(i-s);(!o&&i>s||o&&s>i)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(r,1/3)*(l/Math.PI))),a=Math.max(a,3);let c=l/a,u=i;c*=o?-1:1;for(let h=0;h<a+1;h++){const f=Math.cos(u),d=Math.sin(u),m=e+f*r,g=t+d*r;n.push(m,g),u+=c}}function gc(n,e,t,r,i,s){const o=n[n.length-2],l=n[n.length-1]-t,c=o-e,u=i-t,h=r-e,f=Math.abs(l*h-c*u);if(f<1e-8||s===0){(n[n.length-2]!==e||n[n.length-1]!==t)&&n.push(e,t);return}const d=l*l+c*c,m=u*u+h*h,g=l*u+c*h,p=s*Math.sqrt(d)/f,v=s*Math.sqrt(m)/f,x=p*g/d,y=v*g/m,_=p*h+v*c,I=p*u+v*l,O=c*(v+x),T=l*(v+x),P=h*(p+y),A=u*(p+y),b=Math.atan2(T-I,O-_),W=Math.atan2(A-I,P-_);Js(n,_+e,I+t,s,b,W,c*u>h*l)}const Mt=Math.PI*2,qn={centerX:0,centerY:0,ang1:0,ang2:0},Kn=({x:n,y:e},t,r,i,s,o,a,l)=>{n*=t,e*=r;const c=i*n-s*e,u=s*n+i*e;return l.x=c+o,l.y=u+a,l};function xc(n,e){const t=e===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(e/4),r=e===1.5707963267948966?.551915024494:t,i=Math.cos(n),s=Math.sin(n),o=Math.cos(n+e),a=Math.sin(n+e);return[{x:i-s*r,y:s+i*r},{x:o+a*r,y:a-o*r},{x:o,y:a}]}const Li=(n,e,t,r)=>{const i=n*r-e*t<0?-1:1;let s=n*t+e*r;return s>1&&(s=1),s<-1&&(s=-1),i*Math.acos(s)},vc=(n,e,t,r,i,s,o,a,l,c,u,h,f)=>{const d=Math.pow(i,2),m=Math.pow(s,2),g=Math.pow(u,2),p=Math.pow(h,2);let v=d*m-d*p-m*g;v<0&&(v=0),v/=d*p+m*g,v=Math.sqrt(v)*(o===a?-1:1);const x=v*i/s*h,y=v*-s/i*u,_=c*x-l*y+(n+t)/2,I=l*x+c*y+(e+r)/2,O=(u-x)/i,T=(h-y)/s,P=(-u-x)/i,A=(-h-y)/s,b=Li(1,0,O,T);let W=Li(O,T,P,A);a===0&&W>0&&(W-=Mt),a===1&&W<0&&(W+=Mt),f.centerX=_,f.centerY=I,f.ang1=b,f.ang2=W};function yc(n,e,t,r,i,s,o,a=0,l=0,c=0){if(s===0||o===0)return;const u=Math.sin(a*Mt/360),h=Math.cos(a*Mt/360),f=h*(e-r)/2+u*(t-i)/2,d=-u*(e-r)/2+h*(t-i)/2;if(f===0&&d===0)return;s=Math.abs(s),o=Math.abs(o);const m=Math.pow(f,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(o,2);m>1&&(s*=Math.sqrt(m),o*=Math.sqrt(m)),vc(e,t,r,i,s,o,l,c,u,h,f,d,qn);let{ang1:g,ang2:p}=qn;const{centerX:v,centerY:x}=qn;let y=Math.abs(p)/(Mt/4);Math.abs(1-y)<1e-7&&(y=1);const _=Math.max(Math.ceil(y),1);p/=_;let I=n[n.length-2],O=n[n.length-1];const T={x:0,y:0};for(let P=0;P<_;P++){const A=xc(g,p),{x:b,y:W}=Kn(A[0],s,o,h,u,v,x,T),{x:ge,y:z}=Kn(A[1],s,o,h,u,v,x,T),{x:w,y:k}=Kn(A[2],s,o,h,u,v,x,T);Qs(n,I,O,b,W,ge,z,w,k),I=w,O=k,g+=p}}function _c(n,e,t){const r=(o,a)=>{const l=a.x-o.x,c=a.y-o.y,u=Math.sqrt(l*l+c*c),h=l/u,f=c/u;return{len:u,nx:h,ny:f}},i=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let s=e[e.length-1];for(let o=0;o<e.length;o++){const a=e[o%e.length],l=a.radius??t;if(l<=0){i(o,a),s=a;continue}const c=e[(o+1)%e.length],u=r(a,s),h=r(a,c);if(u.len<1e-4||h.len<1e-4){i(o,a),s=a;continue}let f=Math.asin(u.nx*h.ny-u.ny*h.nx),d=1,m=!1;u.nx*h.nx-u.ny*-h.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,m=!0):f>0&&(d=-1,m=!0);const g=f/2;let p,v=Math.abs(Math.cos(g)*l/Math.sin(g));v>Math.min(u.len/2,h.len/2)?(v=Math.min(u.len/2,h.len/2),p=Math.abs(v*Math.sin(g)/Math.cos(g))):p=l;const x=a.x+h.nx*v+-h.ny*p*d,y=a.y+h.ny*v+h.nx*p*d,_=Math.atan2(u.ny,u.nx)+Math.PI/2*d,I=Math.atan2(h.ny,h.nx)-Math.PI/2*d;o===0&&n.moveTo(x+Math.cos(_)*p,y+Math.sin(_)*p),n.arc(x,y,p,_,I,m),s=a}}function bc(n,e,t,r){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,c)=>({x:a.x+(l.x-a.x)*c,y:a.y+(l.y-a.y)*c}),o=e.length;for(let a=0;a<o;a++){const l=e[(a+1)%o],c=l.radius??t;if(c<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const u=e[a],h=e[(a+2)%o],f=i(u,l);let d;if(f<1e-4)d=l;else{const p=Math.min(f/2,c);d=s(l,u,p/f)}const m=i(h,l);let g;if(m<1e-4)g=l;else{const p=Math.min(m/2,c);g=s(l,h,p/m)}a===0?n.moveTo(d.x,d.y):n.lineTo(d.x,d.y),n.quadraticCurveTo(l.x,l.y,g.x,g.y,r)}}const Ac=new Q;class Sc{constructor(e){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Re,this._graphicsPath2D=e}moveTo(e,t){return this.startPoly(e,t),this}lineTo(e,t){this._ensurePoly();const r=this._currentPoly.points,i=r[r.length-2],s=r[r.length-1];return(i!==e||s!==t)&&r.push(e,t),this}arc(e,t,r,i,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Js(a,e,t,r,i,s,o),this}arcTo(e,t,r,i,s){this._ensurePoly();const o=this._currentPoly.points;return gc(o,e,t,r,i,s),this}arcToSvg(e,t,r,i,s,o,a){const l=this._currentPoly.points;return yc(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,e,t,r,i,s),this}bezierCurveTo(e,t,r,i,s,o,a){this._ensurePoly();const l=this._currentPoly;return Qs(this._currentPoly.points,l.lastX,l.lastY,e,t,r,i,s,o,a),this}quadraticCurveTo(e,t,r,i,s){this._ensurePoly();const o=this._currentPoly;return mc(this._currentPoly.points,o.lastX,o.lastY,e,t,r,i,s),this}closePath(){return this.endPoly(!0),this}addPath(e,t){this.endPoly(),t&&!t.isIdentity()&&(e=e.clone(!0),e.transform(t));for(let r=0;r<e.instructions.length;r++){const i=e.instructions[r];this[i.action](...i.data)}return this}finish(e=!1){this.endPoly(e)}rect(e,t,r,i,s){return this.drawShape(new Q(e,t,r,i),s),this}circle(e,t,r,i){return this.drawShape(new Gr(e,t,r),i),this}poly(e,t,r){const i=new Ft(e);return i.closePath=t,this.drawShape(i,r),this}regularPoly(e,t,r,i,s=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/i,c=[];for(let u=0;u<i;u++){const h=u*l+a;c.push(e+r*Math.cos(h),t+r*Math.sin(h))}return this.poly(c,!0,o),this}roundPoly(e,t,r,i,s,o=0,a){if(i=Math.max(i|0,3),s<=0)return this.regularPoly(e,t,r,i,o);const l=r*Math.sin(Math.PI/i)-.001;s=Math.min(s,l);const c=-1*Math.PI/2+o,u=Math.PI*2/i,h=(i-2)*Math.PI/i/2;for(let f=0;f<i;f++){const d=f*u+c,m=e+r*Math.cos(d),g=t+r*Math.sin(d),p=d+Math.PI+h,v=d-Math.PI-h,x=m+s*Math.cos(p),y=g+s*Math.sin(p),_=m+s*Math.cos(v),I=g+s*Math.sin(v);f===0?this.moveTo(x,y):this.lineTo(x,y),this.quadraticCurveTo(m,g,_,I,a)}return this.closePath()}roundShape(e,t,r=!1,i){return e.length<3?this:(r?bc(this,e,t,i):_c(this,e,t),this.closePath())}filletRect(e,t,r,i,s){if(s===0)return this.rect(e,t,r,i);const o=Math.min(r,i)/2,a=Math.min(o,Math.max(-o,s)),l=e+r,c=t+i,u=a<0?-a:0,h=Math.abs(a);return this.moveTo(e,t+h).arcTo(e+u,t+u,e+h,t,h).lineTo(l-h,t).arcTo(l-u,t+u,l,t+h,h).lineTo(l,c-h).arcTo(l-u,c-u,e+r-h,c,h).lineTo(e+h,c).arcTo(e+u,c-u,e,c-h,h).closePath()}chamferRect(e,t,r,i,s,o){if(s<=0)return this.rect(e,t,r,i);const a=Math.min(s,Math.min(r,i)/2),l=e+r,c=t+i,u=[e+a,t,l-a,t,l,t+a,l,c-a,l-a,c,e+a,c,e,c-a,e,t+a];for(let h=u.length-1;h>=2;h-=2)u[h]===u[h-2]&&u[h-1]===u[h-3]&&u.splice(h-1,2);return this.poly(u,!0,o)}ellipse(e,t,r,i,s){return this.drawShape(new Nr(e,t,r,i),s),this}roundRect(e,t,r,i,s,o){return this.drawShape(new Vr(e,t,r,i,s),o),this}drawShape(e,t){return this.endPoly(),this.shapePrimitives.push({shape:e,transform:t}),this}startPoly(e,t){let r=this._currentPoly;return r&&this.endPoly(),r=new Ft,r.points.push(e,t),this._currentPoly=r,this}endPoly(e=!1){const t=this._currentPoly;return t&&t.points.length>2&&(t.closePath=e,this.shapePrimitives.push({shape:t})),this._currentPoly=null,this}_ensurePoly(e=!0){if(!this._currentPoly&&(this._currentPoly=new Ft,e)){const t=this.shapePrimitives[this.shapePrimitives.length-1];if(t){let r=t.shape.x,i=t.shape.y;if(!t.transform.isIdentity()){const s=t.transform,o=r;r=s.a*r+s.c*i+s.tx,i=s.b*o+s.d*i+s.ty}this._currentPoly.points.push(r,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const e=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let t=0;t<e.instructions.length;t++){const r=e.instructions[t];this[r.action](...r.data)}this.finish()}get bounds(){const e=this._bounds;e.clear();const t=this.shapePrimitives;for(let r=0;r<t.length;r++){const i=t[r],s=i.shape.getBounds(Ac);i.transform?e.addRect(s,i.transform):e.addRect(s)}return e}}class ht{constructor(e){this.instructions=[],this.uid=J("graphicsPath"),this._dirty=!0,typeof e=="string"?Eu(e,this):this.instructions=(e==null?void 0:e.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new Sc(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(e,t){return e=e.clone(),this.instructions.push({action:"addPath",data:[e,t]}),this._dirty=!0,this}arc(...e){return this.instructions.push({action:"arc",data:e}),this._dirty=!0,this}arcTo(...e){return this.instructions.push({action:"arcTo",data:e}),this._dirty=!0,this}arcToSvg(...e){return this.instructions.push({action:"arcToSvg",data:e}),this._dirty=!0,this}bezierCurveTo(...e){return this.instructions.push({action:"bezierCurveTo",data:e}),this._dirty=!0,this}bezierCurveToShort(e,t,r,i,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(ne.shared);let l=0,c=0;if(!o||o.action!=="bezierCurveTo")l=a.x,c=a.y;else{l=o.data[2],c=o.data[3];const u=a.x,h=a.y;l=u+(u-l),c=h+(h-c)}return this.instructions.push({action:"bezierCurveTo",data:[l,c,e,t,r,i,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...e){return this.instructions.push({action:"ellipse",data:e}),this._dirty=!0,this}lineTo(...e){return this.instructions.push({action:"lineTo",data:e}),this._dirty=!0,this}moveTo(...e){return this.instructions.push({action:"moveTo",data:e}),this}quadraticCurveTo(...e){return this.instructions.push({action:"quadraticCurveTo",data:e}),this._dirty=!0,this}quadraticCurveToShort(e,t,r){const i=this.instructions[this.instructions.length-1],s=this.getLastPoint(ne.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=i.data[0],a=i.data[1];const l=s.x,c=s.y;o=l+(l-o),a=c+(c-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,e,t,r]}),this._dirty=!0,this}rect(e,t,r,i,s){return this.instructions.push({action:"rect",data:[e,t,r,i,s]}),this._dirty=!0,this}circle(e,t,r,i){return this.instructions.push({action:"circle",data:[e,t,r,i]}),this._dirty=!0,this}roundRect(...e){return this.instructions.push({action:"roundRect",data:e}),this._dirty=!0,this}poly(...e){return this.instructions.push({action:"poly",data:e}),this._dirty=!0,this}regularPoly(...e){return this.instructions.push({action:"regularPoly",data:e}),this._dirty=!0,this}roundPoly(...e){return this.instructions.push({action:"roundPoly",data:e}),this._dirty=!0,this}roundShape(...e){return this.instructions.push({action:"roundShape",data:e}),this._dirty=!0,this}filletRect(...e){return this.instructions.push({action:"filletRect",data:e}),this._dirty=!0,this}chamferRect(...e){return this.instructions.push({action:"chamferRect",data:e}),this._dirty=!0,this}star(e,t,r,i,s,o,a){s=s||i/2;const l=-1*Math.PI/2+o,c=r*2,u=Math.PI*2/c,h=[];for(let f=0;f<c;f++){const d=f%2?s:i,m=f*u+l;h.push(e+d*Math.cos(m),t+d*Math.sin(m))}return this.poly(h,!0,a),this}clone(e=!1){const t=new ht;if(!e)t.instructions=this.instructions.slice();else for(let r=0;r<this.instructions.length;r++){const i=this.instructions[r];t.instructions.push({action:i.action,data:i.data.slice()})}return t}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(e){if(e.isIdentity())return this;const t=e.a,r=e.b,i=e.c,s=e.d,o=e.tx,a=e.ty;let l=0,c=0,u=0,h=0,f=0,d=0,m=0,g=0;for(let p=0;p<this.instructions.length;p++){const v=this.instructions[p],x=v.data;switch(v.action){case"moveTo":case"lineTo":l=x[0],c=x[1],x[0]=t*l+i*c+o,x[1]=r*l+s*c+a;break;case"bezierCurveTo":u=x[0],h=x[1],f=x[2],d=x[3],l=x[4],c=x[5],x[0]=t*u+i*h+o,x[1]=r*u+s*h+a,x[2]=t*f+i*d+o,x[3]=r*f+s*d+a,x[4]=t*l+i*c+o,x[5]=r*l+s*c+a;break;case"quadraticCurveTo":u=x[0],h=x[1],l=x[2],c=x[3],x[0]=t*u+i*h+o,x[1]=r*u+s*h+a,x[2]=t*l+i*c+o,x[3]=r*l+s*c+a;break;case"arcToSvg":l=x[5],c=x[6],m=x[0],g=x[1],x[0]=t*m+i*g,x[1]=r*m+s*g,x[5]=t*l+i*c+o,x[6]=r*l+s*c+a;break;case"circle":x[4]=St(x[3],e);break;case"rect":x[4]=St(x[4],e);break;case"ellipse":x[8]=St(x[8],e);break;case"roundRect":x[5]=St(x[5],e);break;case"addPath":x[0].transform(e);break;case"poly":x[2]=St(x[2],e);break;default:re("unknown transform action",v.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(e){let t=this.instructions.length-1,r=this.instructions[t];if(!r)return e.x=0,e.y=0,e;for(;r.action==="closePath";){if(t--,t<0)return e.x=0,e.y=0,e;r=this.instructions[t]}switch(r.action){case"moveTo":case"lineTo":e.x=r.data[0],e.y=r.data[1];break;case"quadraticCurveTo":e.x=r.data[2],e.y=r.data[3];break;case"bezierCurveTo":e.x=r.data[4],e.y=r.data[5];break;case"arc":case"arcToSvg":e.x=r.data[5],e.y=r.data[6];break;case"addPath":r.data[0].getLastPoint(e);break}return e}}function St(n,e){return n?n.prepend(e):e.clone()}function Cc(n,e){if(typeof n=="string"){const r=document.createElement("div");r.innerHTML=n.trim(),n=r.querySelector("svg")}const t={context:e,path:new ht};return eo(n,t,null,null),e}function eo(n,e,t,r){const i=n.children,{fillStyle:s,strokeStyle:o}=wc(n);s&&t?t={...t,...s}:s&&(t=s),o&&r?r={...r,...o}:o&&(r=o),e.context.fillStyle=t,e.context.strokeStyle=r;let a,l,c,u,h,f,d,m,g,p,v,x,y,_,I,O,T;switch(n.nodeName.toLowerCase()){case"path":_=n.getAttribute("d"),I=new ht(_),e.context.path(I),t&&e.context.fill(),r&&e.context.stroke();break;case"circle":d=ee(n,"cx",0),m=ee(n,"cy",0),g=ee(n,"r",0),e.context.ellipse(d,m,g,g),t&&e.context.fill(),r&&e.context.stroke();break;case"rect":a=ee(n,"x",0),l=ee(n,"y",0),O=ee(n,"width",0),T=ee(n,"height",0),p=ee(n,"rx",0),v=ee(n,"ry",0),p||v?e.context.roundRect(a,l,O,T,p||v):e.context.rect(a,l,O,T),t&&e.context.fill(),r&&e.context.stroke();break;case"ellipse":d=ee(n,"cx",0),m=ee(n,"cy",0),p=ee(n,"rx",0),v=ee(n,"ry",0),e.context.beginPath(),e.context.ellipse(d,m,p,v),t&&e.context.fill(),r&&e.context.stroke();break;case"line":c=ee(n,"x1",0),u=ee(n,"y1",0),h=ee(n,"x2",0),f=ee(n,"y2",0),e.context.beginPath(),e.context.moveTo(c,u),e.context.lineTo(h,f),r&&e.context.stroke();break;case"polygon":y=n.getAttribute("points"),x=y.match(/\d+/g).map(P=>parseInt(P,10)),e.context.poly(x,!0),t&&e.context.fill(),r&&e.context.stroke();break;case"polyline":y=n.getAttribute("points"),x=y.match(/\d+/g).map(P=>parseInt(P,10)),e.context.poly(x,!1),r&&e.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let P=0;P<i.length;P++)eo(i[P],e,t,r)}function ee(n,e,t){const r=n.getAttribute(e);return r?Number(r):t}function wc(n){const e=n.getAttribute("style"),t={},r={};let i=!1,s=!1;if(e){const o=e.split(";");for(let a=0;a<o.length;a++){const l=o[a],[c,u]=l.split(":");switch(c){case"stroke":u!=="none"&&(t.color=Y.shared.setValue(u).toNumber(),s=!0);break;case"stroke-width":t.width=Number(u);break;case"fill":u!=="none"&&(i=!0,r.color=Y.shared.setValue(u).toNumber());break;case"fill-opacity":r.alpha=Number(u);break;case"stroke-opacity":t.alpha=Number(u);break;case"opacity":r.alpha=Number(u),t.alpha=Number(u);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,t.color=Y.shared.setValue(o).toNumber(),t.width=ee(n,"stroke-width",1));const a=n.getAttribute("fill");a&&a!=="none"&&(i=!0,r.color=Y.shared.setValue(a).toNumber())}return{strokeStyle:s?t:null,fillStyle:i?r:null}}const to=class gr{constructor(e,t,r,i){this.uid=J("fillGradient"),this.type="linear",this.gradientStops=[],this.x0=e,this.y0=t,this.x1=r,this.y1=i}addColorStop(e,t){return this.gradientStops.push({offset:e,color:Y.shared.setValue(t).toHex()}),this}buildLinearGradient(){const e=gr.defaultTextureSize,{gradientStops:t}=this,r=se.get().createCanvas();r.width=e,r.height=e;const i=r.getContext("2d"),s=i.createLinearGradient(0,0,gr.defaultTextureSize,1);for(let g=0;g<t.length;g++){const p=t[g];s.addColorStop(p.offset,p.color)}i.fillStyle=s,i.fillRect(0,0,e,e),this.texture=new M({source:new ft({resource:r,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:c}=this,u=new V,h=l-o,f=c-a,d=Math.sqrt(h*h+f*f),m=Math.atan2(f,h);u.translate(-o,-a),u.scale(1/e,1/e),u.rotate(-m),u.scale(256/d,1),this.transform=u}};to.defaultTextureSize=256;let Tc=to;const ki={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class Pc{constructor(e,t){this.uid=J("fillPattern"),this.transform=new V,this.texture=e,this.transform.scale(1/e.frame.width,1/e.frame.height),t&&(e.source.style.addressModeU=ki[t].addressModeU,e.source.style.addressModeV=ki[t].addressModeV)}setTransform(e){const t=this.texture;this.transform.copyFrom(e),this.transform.invert(),this.transform.scale(1/t.frame.width,1/t.frame.height)}}function Je(n,e){var o;if(n==null)return null;let t,r;if(n!=null&&n.fill?(r=n.fill,t={...e,...n}):(r=n,t=e),Y.isColorLike(r)){const a=Y.shared.setValue(r??0);return{...t,color:a.toNumber(),alpha:a.alpha===1?t.alpha:a.alpha,texture:M.WHITE}}else if(r instanceof Pc){const a=r;return{...t,color:16777215,texture:a.texture,matrix:a.transform,fill:t.fill??null}}else if(r instanceof Tc){const a=r;return a.buildLinearGradient(),{...t,color:16777215,texture:a.texture,matrix:a.transform}}const i={...e,...n};if(i.texture){if(i.texture!==M.WHITE){const l=((o=i.matrix)==null?void 0:o.invert())||new V;l.scale(1/i.texture.frame.width,1/i.texture.frame.height),i.matrix=l}const a=i.texture.source.style;a.addressMode==="clamp-to-edge"&&(a.addressMode="repeat")}const s=Y.shared.setValue(i.color);return i.alpha*=s.alpha,i.color=s.toNumber(),i.matrix=i.matrix?i.matrix.clone():null,i}const Ic=new ne,Di=new V,Wr=class be extends ce{constructor(){super(...arguments),this.uid=J("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new ht,this._transform=new V,this._fillStyle={...be.defaultFillStyle},this._strokeStyle={...be.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Re,this._boundsDirty=!0}clone(){const e=new be;return e.batchMode=this.batchMode,e.instructions=this.instructions.slice(),e._activePath=this._activePath.clone(),e._transform=this._transform.clone(),e._fillStyle={...this._fillStyle},e._strokeStyle={...this._strokeStyle},e._stateStack=this._stateStack.slice(),e._bounds=this._bounds.clone(),e._boundsDirty=!0,e}get fillStyle(){return this._fillStyle}set fillStyle(e){this._fillStyle=Je(e,be.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(e){this._strokeStyle=Je(e,be.defaultStrokeStyle)}setFillStyle(e){return this._fillStyle=Je(e,be.defaultFillStyle),this}setStrokeStyle(e){return this._strokeStyle=Je(e,be.defaultStrokeStyle),this}texture(e,t,r,i,s,o){return this.instructions.push({action:"texture",data:{image:e,dx:r||0,dy:i||0,dw:s||e.frame.width,dh:o||e.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:t?Y.shared.setValue(t).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new ht,this}fill(e,t){let r;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?r=i.data.path:r=this._activePath.clone(),r?(e!=null&&(t!==void 0&&typeof e=="number"&&(R(ye,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),e={color:e,alpha:t}),this._fillStyle=Je(e,be.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:e,y:t}=this._activePath.getLastPoint(ne.shared);this._activePath.clear(),this._activePath.moveTo(e,t)}stroke(e){let t;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="fill"?t=r.data.path:t=this._activePath.clone(),t?(e!=null&&(this._strokeStyle=Je(e,be.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:t}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let e=0;e<2;e++){const t=this.instructions[this.instructions.length-1-e],r=this._activePath.clone();if(t&&(t.action==="stroke"||t.action==="fill"))if(t.data.hole)t.data.hole.addPath(r);else{t.data.hole=r;break}}return this._initNextPathLocation(),this}arc(e,t,r,i,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*e+a.c*t+a.tx,a.b*e+a.d*t+a.ty,r,i,s,o),this}arcTo(e,t,r,i,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}arcToSvg(e,t,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(e,t,r,i,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(e,t,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*e+l.c*t+l.tx,l.b*e+l.d*t+l.ty,l.a*r+l.c*i+l.tx,l.b*r+l.d*i+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var e;return this._tick++,(e=this._activePath)==null||e.closePath(),this}ellipse(e,t,r,i){return this._tick++,this._activePath.ellipse(e,t,r,i,this._transform.clone()),this}circle(e,t,r){return this._tick++,this._activePath.circle(e,t,r,this._transform.clone()),this}path(e){return this._tick++,this._activePath.addPath(e,this._transform.clone()),this}lineTo(e,t){this._tick++;const r=this._transform;return this._activePath.lineTo(r.a*e+r.c*t+r.tx,r.b*e+r.d*t+r.ty),this}moveTo(e,t){this._tick++;const r=this._transform,i=this._activePath.instructions,s=r.a*e+r.c*t+r.tx,o=r.b*e+r.d*t+r.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=s,i[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(e,t,r,i,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}rect(e,t,r,i){return this._tick++,this._activePath.rect(e,t,r,i,this._transform.clone()),this}roundRect(e,t,r,i,s){return this._tick++,this._activePath.roundRect(e,t,r,i,s,this._transform.clone()),this}poly(e,t){return this._tick++,this._activePath.poly(e,t,this._transform.clone()),this}regularPoly(e,t,r,i,s=0,o){return this._tick++,this._activePath.regularPoly(e,t,r,i,s,o),this}roundPoly(e,t,r,i,s,o){return this._tick++,this._activePath.roundPoly(e,t,r,i,s,o),this}roundShape(e,t,r,i){return this._tick++,this._activePath.roundShape(e,t,r,i),this}filletRect(e,t,r,i,s){return this._tick++,this._activePath.filletRect(e,t,r,i,s),this}chamferRect(e,t,r,i,s,o){return this._tick++,this._activePath.chamferRect(e,t,r,i,s,o),this}star(e,t,r,i,s=0,o=0){return this._tick++,this._activePath.star(e,t,r,i,s,o,this._transform.clone()),this}svg(e){return this._tick++,Cc(e,this),this}restore(){const e=this._stateStack.pop();return e&&(this._transform=e.transform,this._fillStyle=e.fillStyle,this._strokeStyle=e.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(e){return this._transform.rotate(e),this}scale(e,t=e){return this._transform.scale(e,t),this}setTransform(e,t,r,i,s,o){return e instanceof V?(this._transform.set(e.a,e.b,e.c,e.d,e.tx,e.ty),this):(this._transform.set(e,t,r,i,s,o),this)}transform(e,t,r,i,s,o){return e instanceof V?(this._transform.append(e),this):(Di.set(e,t,r,i,s,o),this._transform.append(Di),this)}translate(e,t=e){return this._transform.translate(e,t),this}clear(){return this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const e=this._bounds;e.clear();for(let t=0;t<this.instructions.length;t++){const r=this.instructions[t],i=r.action;if(i==="fill"){const s=r.data;e.addBounds(s.path.bounds)}else if(i==="texture"){const s=r.data;e.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(i==="stroke"){const s=r.data,o=s.style.width/2,a=s.path.bounds;e.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return e}containsPoint(e){var i;if(!this.bounds.containsPoint(e.x,e.y))return!1;const t=this.instructions;let r=!1;for(let s=0;s<t.length;s++){const o=t[s],a=o.data,l=a.path;if(!o.action||!l)continue;const c=a.style,u=l.shapePath.shapePrimitives;for(let h=0;h<u.length;h++){const f=u[h].shape;if(!c||!f)continue;const d=u[h].transform,m=d?d.applyInverse(e,Ic):e;o.action==="fill"?r=f.contains(m.x,m.y):r=f.strokeContains(m.x,m.y,c.width);const g=a.hole;if(g){const p=(i=g.shapePath)==null?void 0:i.shapePrimitives;if(p)for(let v=0;v<p.length;v++)p[v].shape.contains(m.x,m.y)&&(r=!1)}if(r)return!0}}return r}destroy(e=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const r=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(r),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(r)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Wr.defaultFillStyle={color:16777215,alpha:1,texture:M.WHITE,matrix:null,fill:null};Wr.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:M.WHITE,matrix:null,fill:null};let Fc=Wr;function Hr(n,e=1){var r;const t=(r=dt.RETINA_PREFIX)==null?void 0:r.exec(n);return t?parseFloat(t[1]):e}function jr(n,e,t){n.label=t,n._sourceOrigin=t;const r=new M({source:n,label:t}),i=()=>{delete e.promiseCache[t],ie.has(t)&&ie.remove(t)};return r.source.once("destroy",()=>{e.promiseCache[t]&&(re("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),r.once("destroy",()=>{n.destroyed||(re("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),r}const Mc=".svg",zc="image/svg+xml",Ec={extension:{type:E.LoadParser,priority:Ue.Low},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(n){return mt(n,zc)||pt(n,Mc)},async load(n,e,t){return e.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Rc(n):Oc(n,e,t,this.config.crossOrigin)},unload(n){n.destroy(!0)}};async function Oc(n,e,t,r){var p,v,x;const s=await(await se.get().fetch(n)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=r,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),c=l.getContext("2d"),u=((p=e.data)==null?void 0:p.resolution)||Hr(n),h=((v=e.data)==null?void 0:v.width)??a.width,f=((x=e.data)==null?void 0:x.height)??a.height;l.width=h*u,l.height=f*u,c.drawImage(a,0,0,h*u,f*u);const{parseAsGraphicsContext:d,...m}=e.data,g=new ft({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:u,...m});return jr(g,t,n)}async function Rc(n){const t=await(await se.get().fetch(n)).text(),r=new Fc;return r.svg(t),r}const Bc=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let ot=null,xr=class{constructor(){ot||(ot=URL.createObjectURL(new Blob([Bc],{type:"application/javascript"}))),this.worker=new Worker(ot)}};xr.revokeObjectURL=function(){ot&&(URL.revokeObjectURL(ot),ot=null)};const Uc=`(function () {
    'use strict';

    async function loadImageBitmap(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      const imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap;
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let at=null;class no{constructor(){at||(at=URL.createObjectURL(new Blob([Uc],{type:"application/javascript"}))),this.worker=new Worker(at)}}no.revokeObjectURL=function(){at&&(URL.revokeObjectURL(at),at=null)};let Gi=0,Zn;class Lc{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:t}=new xr;t.addEventListener("message",r=>{t.terminate(),xr.revokeObjectURL(),e(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e){return this._run("loadImageBitmap",[e])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Zn===void 0&&(Zn=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Zn&&(this._createdWorkers++,e=new no().worker,e.addEventListener("message",t=>{this._complete(t.data),this._returnWorker(t.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,t){await this._initWorkers();const r=new Promise((i,s)=>{this._queue.push({id:e,arguments:t,resolve:i,reject:s})});return this._next(),r}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const t=this._queue.pop(),r=t.id;this._resolveHash[Gi]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:Gi++,id:r})}}const Ni=new Lc,kc=[".jpeg",".jpg",".png",".webp",".avif"],Dc=["image/jpeg","image/png","image/webp","image/avif"];async function Gc(n){const e=await se.get().fetch(n);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${e.status} ${e.statusText}`);const t=await e.blob();return await createImageBitmap(t)}const ro={name:"loadTextures",extension:{type:E.LoadParser,priority:Ue.High},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(n){return mt(n,Dc)||pt(n,kc)},async load(n,e,t){var s;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Ni.isImageBitmapSupported()?r=await Ni.loadImageBitmap(n):r=await Gc(n):r=await new Promise(o=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=n,r.complete?o(r):r.onload=()=>{o(r)}});const i=new ft({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((s=e.data)==null?void 0:s.resolution)||Hr(n),...e.data});return jr(i,t,n)},unload(n){n.destroy(!0)}},io=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Nc=io.map(n=>`video/${n.substring(1)}`);function Vc(n,e,t){t===void 0&&!e.startsWith("data:")?n.crossOrigin=Yc(e):t!==!1&&(n.crossOrigin=typeof t=="string"?t:"anonymous")}function Xc(n){return new Promise((e,t)=>{n.addEventListener("canplaythrough",r),n.addEventListener("error",i),n.load();function r(){s(),e()}function i(o){s(),t(o)}function s(){n.removeEventListener("canplaythrough",r),n.removeEventListener("error",i)}})}function Yc(n,e=globalThis.location){if(n.startsWith("data:"))return"";e=e||globalThis.location;const t=new URL(n,document.baseURI);return t.hostname!==e.hostname||t.port!==e.port||t.protocol!==e.protocol?"anonymous":""}const Wc={name:"loadVideo",extension:{type:E.LoadParser},config:null,test(n){const e=mt(n,Nc),t=pt(n,io);return e||t},async load(n,e,t){var l,c;const r={...en.defaultOptions,resolution:((l=e.data)==null?void 0:l.resolution)||Hr(n),alphaMode:((c=e.data)==null?void 0:c.alphaMode)||await bs(),...e.data},i=document.createElement("video"),s={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(s).forEach(u=>{const h=s[u];h!==void 0&&i.setAttribute(u,h)}),r.muted===!0&&(i.muted=!0),Vc(i,n,r.crossorigin);const o=document.createElement("source");let a;if(n.startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){const u=n.split("?")[0].slice(n.lastIndexOf(".")+1).toLowerCase();a=en.MIME_TYPES[u]||`video/${u}`}return o.src=n,a&&(o.type=a),new Promise(u=>{const h=async()=>{const f=new en({...r,resource:i});i.removeEventListener("canplay",h),e.data.preload&&await Xc(i),u(jr(f,t,n))};i.addEventListener("canplay",h),i.appendChild(o)})},unload(n){n.destroy(!0)}},so={extension:E.ResolveParser,test:ro.test,parse:n=>{var e;return{resolution:parseFloat(((e=dt.RETINA_PREFIX.exec(n))==null?void 0:e[1])??"1"),format:n.split(".").pop(),src:n}}},Hc={extension:E.ResolveParser,test:n=>dt.RETINA_PREFIX.test(n)&&n.endsWith(".json"),parse:so.parse};class jc{constructor(){this._detections=[],this._initialized=!1,this.resolver=new dt,this.loader=new hu,this.cache=ie,this._backgroundLoader=new nu(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var s,o;if(this._initialized){re("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let a=e.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const t=((s=e.texturePreference)==null?void 0:s.resolution)??1,r=typeof t=="number"?[t]:t,i=await this._detectFormats({preferredFormats:(o=e.texturePreference)==null?void 0:o.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:r}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,t){this._initialized||await this.init();const r=mn(e),i=ve(e).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(c=>!this.resolver.hasKey(c))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(i),o=await this._mapLoadToResolve(s,t);return r?o[i[0]]:o}addBundle(e,t){this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let r=!1;typeof e=="string"&&(r=!0,e=[e]);const i=this.resolver.resolveBundle(e),s={},o=Object.keys(i);let a=0,l=0;const c=()=>{t==null||t(++a/l)},u=o.map(h=>{const f=i[h];return l+=Object.keys(f).length,this._mapLoadToResolve(f,c).then(d=>{s[h]=d})});return await Promise.all(u),r?s[e[0]]:s}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolveBundle(e);Object.values(t).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ie.get(e);const t={};for(let r=0;r<e.length;r++)t[r]=ie.get(e[r]);return t}async _mapLoadToResolve(e,t){const r=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const i=await this.loader.load(r,t);this._backgroundLoader.active=!0;const s={};return r.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(c=>{s[c]=a}),ie.set(l,a)}),s}async unload(e){this._initialized||await this.init();const t=ve(e).map(i=>typeof i!="string"?i.src:i),r=this.resolver.resolve(t);await this._unloadFromResolved(r)}async unloadBundle(e){this._initialized||await this.init(),e=ve(e);const t=this.resolver.resolveBundle(e),r=Object.keys(t).map(i=>this._unloadFromResolved(t[i]));await Promise.all(r)}async _unloadFromResolved(e){const t=Object.values(e);t.forEach(r=>{ie.remove(r.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const r of e.detections)e.skipDetections||await r.test()?t=await r.add(t):e.skipDetections||(t=await r.remove(t));return t=t.filter((r,i)=>t.indexOf(r)===i),t}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(r=>r in e).forEach(r=>{t.config[r]=e[r]})})}}const Pt=new jc;de.handleByList(E.LoadParser,Pt.loader.parsers).handleByList(E.ResolveParser,Pt.resolver.parsers).handleByList(E.CacheParser,Pt.cache.parsers).handleByList(E.DetectionParser,Pt.detections);de.add(ru,su,iu,cu,au,lu,uu,mu,xu,wu,Ec,ro,Wc,so,Hc);const Vi={loader:E.LoadParser,resolver:E.ResolveParser,cache:E.CacheParser,detection:E.DetectionParser};de.handle(E.Asset,n=>{const e=n.ref;Object.entries(Vi).filter(([t])=>!!e[t]).forEach(([t,r])=>de.add(Object.assign(e[t],{extension:e[t].extension??r})))},n=>{const e=n.ref;Object.keys(Vi).filter(t=>!!e[t]).forEach(t=>de.remove(e[t]))});var $c=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,qc=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Xi=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const oo=class ao extends L{constructor(e){e={...ao.defaultOptions,...e};const t=B.from({vertex:{source:Xi,entryPoint:"mainVertex"},fragment:{source:Xi,entryPoint:"mainFragment"}}),r=U.from({vertex:$c,fragment:qc,name:"alpha-filter"}),{alpha:i,...s}=e,o=new Ms({uAlpha:{value:i,type:"f32"}});super({...s,gpuProgram:t,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};oo.defaultOptions={alpha:1};let Kc=oo,Zc=0;class Qc{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,r){const i=new we({...this.textureOptions,width:e,height:t,resolution:1,antialias:r,autoGarbageCollect:!0});return new M({source:i,label:`texturePool_${Zc++}`})}getOptimalTexture(e,t,r=1,i){let s=Math.ceil(e*r-1e-6),o=Math.ceil(t*r-1e-6);s=oi(s),o=oi(o);const a=(s<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,i)),l.source._resolution=r,l.source.width=s/r,l.source.height=o/r,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=e,l.frame.height=t,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(e,t=!1){const r=e.source;return this.getOptimalTexture(e.width,e.height,r._resolution,t)}returnTexture(e){const t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(const t in this._texturePool){const r=this._texturePool[t];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this._texturePool={}}}const pe=new Qc,lo={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Jc=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function eh(n){const e=lo[n],t=e.length;let r=Jc,i="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<n;a++){let l=s.replace("%index%",a.toString());o=a,a>=t&&(o=n-a-1),l=l.replace("%value%",e[o].toString()),i+=l,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r}const th=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function nh(n,e){const t=Math.ceil(n/2);let r=th,i="",s;e?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(t-1)}.0`),i+=a,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r=r.replace("%dimension%",e?"z":"w"),r}function rh(n,e){const t=nh(e,n),r=eh(e);return U.from({vertex:t,fragment:r,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var ih=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function sh(n,e){const t=lo[e],r=t.length,i=[],s=[],o=[];for(let h=0;h<e;h++){i[h]=`@location(${h}) offset${h}: vec2<f32>,`,n?s[h]=`filteredCord + vec2(${h-r+1} * strength, 0.0),`:s[h]=`filteredCord + vec2(0.0, ${h-r+1} * strength),`;const f=h<r?h:e-h-1,d=t[f].toString();o[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${d};`}const a=i.join(`
`),l=s.join(`
`),c=o.join(`
`),u=ih.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",c);return B.from({vertex:{source:u,entryPoint:"mainVertex"},fragment:{source:u,entryPoint:"mainFragment"}})}const uo=class co extends L{constructor(e){e={...co.defaultOptions,...e};const t=rh(e.horizontal,e.kernelSize),r=sh(e.horizontal,e.kernelSize);super({glProgram:t,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...e}),this.horizontal=e.horizontal,this._quality=0,this.quality=e.quality,this.blur=e.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(e,t,r,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,t,r,i);else{const s=pe.getSameSizeTexture(t);let o=t,a=s;this._state.blend=!1;for(let l=0;l<this.passes-1;l++){e.applyFilter(this,o,a,e.renderer.type===pn.WEBGPU);const c=a;a=o,o=c}this._state.blend=!0,e.applyFilter(this,o,r,i),pe.returnTexture(s)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};uo.defaultOptions={strength:8,quality:4,kernelSize:5};let Yi=uo;class Bt extends Ce{constructor(e,t=!0){super(e[0]instanceof M?e[0]:e[0].texture),this._textures=null,this._durations=null,this._autoUpdate=t,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=e}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(fe.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(fe.shared.add(this.update,this,dn.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(e){this.stop(),this.currentFrame=e}gotoAndPlay(e){this.currentFrame=e,this.play()}update(e){if(!this._playing)return;const t=e.deltaTime,r=this.animationSpeed*t,i=this.currentFrame;if(this._durations!==null){let s=this._currentTime%1*this._durations[this.currentFrame];for(s+=r/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];const o=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=r;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):i!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<i||this.animationSpeed<0&&this.currentFrame>i)&&this.onLoop(),this._updateTexture())}_updateTexture(){const e=this.currentFrame;this._previousFrame!==e&&(this._previousFrame=e,this.texture=this._textures[e],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(e){const t=[];for(let r=0;r<e.length;++r)t.push(M.from(e[r]));return new Bt(t)}static fromImages(e){const t=[];for(let r=0;r<e.length;++r)t.push(M.from(e[r]));return new Bt(t)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(e){if(e[0]instanceof M)this._textures=e,this._durations=null;else{this._textures=[],this._durations=[];for(let t=0;t<e.length;t++)this._textures.push(e[t].texture),this._durations.push(e[t].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let e=Math.floor(this._currentTime)%this._textures.length;return e<0&&(e+=this._textures.length),e}set currentFrame(e){if(e<0||e>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const t=this.currentFrame;this._currentTime=e,t!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(fe.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(fe.shared.add(this.update,this),this._isConnectedToTicker=!0))}}class oh{constructor({matrix:e,observer:t}={}){this.dirty=!0,this._matrix=e??new V,this.observer=t,this.position=new Z(this,0,0),this.scale=new Z(this,1,1),this.pivot=new Z(this,0,0),this.skew=new Z(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const e=this._matrix;return this.dirty&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this.dirty=!1),e}_onUpdate(e){var t;this.dirty=!0,e===this.skew&&this.updateSkew(),(t=this.observer)==null||t._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(e){e.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this.skew))}}const ho=class nn extends oe{constructor(...e){let t=e[0]||{};t instanceof M&&(t={texture:t}),e.length>1&&(R(ye,"use new TilingSprite({ texture, width:100, height:100 }) instead"),t.width=e[1],t.height=e[2]),t={...nn.defaultOptions,...t};const{texture:r,anchor:i,tilePosition:s,tileScale:o,tileRotation:a,width:l,height:c,applyAnchorToTexture:u,roundPixels:h,...f}=t??{};super({label:"TilingSprite",...f}),this.renderPipeId="tilingSprite",this.canBundle=!0,this.batched=!0,this._roundPixels=0,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this.allowChildren=!1,this._anchor=new Z({_onUpdate:()=>{this.onViewUpdate()}}),this._applyAnchorToTexture=u,this.texture=r,this._width=l??r.width,this._height=c??r.height,this._tileTransform=new oh({observer:{_onUpdate:()=>this.onViewUpdate()}}),i&&(this.anchor=i),this.tilePosition=s,this.tileScale=o,this.tileRotation=a,this.roundPixels=h??!1}static from(e,t={}){return typeof e=="string"?new nn({texture:ie.get(e),...t}):new nn({texture:e,...t})}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(e){this._texture.textureMatrix.clampMargin=e}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get tilePosition(){return this._tileTransform.position}set tilePosition(e){this._tileTransform.position.copyFrom(e)}get tileScale(){return this._tileTransform.scale}set tileScale(e){typeof e=="number"?this._tileTransform.scale.set(e):this._tileTransform.scale.copyFrom(e)}set tileRotation(e){this._tileTransform.rotation=e}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}set texture(e){e||(e=M.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}set width(e){this._width=e,this.onViewUpdate()}get width(){return this._width}set height(e){this._height=e,this.onViewUpdate()}get height(){return this._height}_updateBounds(){const e=this._bounds,t=this._anchor,r=this._width,i=this._height;e.maxX=-t._x*r,e.minX=e.maxX+r,e.maxY=-t._y*i,e.minY=e.maxY+i}addBounds(e){const t=this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}containsPoint(e){const t=this.bounds.minX,r=this.bounds.minY,i=-t*this._anchor._x;let s=0;return e.x>=i&&e.x<=i+t&&(s=-r*this._anchor._y,e.y>=s&&e.y<=s+r)}onViewUpdate(){if(this._boundsDirty=!0,this._didTilingSpriteUpdate=!0,this._didChangeId+=4096,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e=!1){if(super.destroy(e),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof e=="boolean"?e:e==null?void 0:e.texture){const r=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(r)}this._texture=null}};ho.defaultOptions={texture:M.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let ah=ho;de.add(va,ya);let fo;function lh(n){return fo=n,n}function Ut(){return fo}class vr{static setParamValue(e,t){if(e.setValueAtTime){const r=Ut().context;e.setValueAtTime(t,r.audioContext.currentTime)}else e.value=t;return t}}class uh extends ce{constructor(){super(...arguments),this.speed=1,this.muted=!1,this.volume=1,this.paused=!1}refresh(){this.emit("refresh")}refreshPaused(){this.emit("refreshPaused")}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(e){console.warn("HTML Audio does not support filters")}get audioContext(){return console.warn("HTML Audio does not support audioContext"),null}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this.paused}destroy(){this.removeAllListeners()}}let ch=0;const yr=class extends ce{constructor(n){super(),this.id=ch++,this.init(n)}set(n,e){if(this[n]===void 0)throw new Error(`Property with name ${n} does not exist.`);switch(n){case"speed":this.speed=e;break;case"volume":this.volume=e;break;case"paused":this.paused=e;break;case"loop":this.loop=e;break;case"muted":this.muted=e;break}return this}get progress(){const{currentTime:n}=this._source;return n/this._duration}get paused(){return this._paused}set paused(n){this._paused=n,this.refreshPaused()}_onPlay(){this._playing=!0}_onPause(){this._playing=!1}init(n){this._playing=!1,this._duration=n.source.duration;const e=this._source=n.source.cloneNode(!1);e.src=n.parent.url,e.onplay=this._onPlay.bind(this),e.onpause=this._onPause.bind(this),n.context.on("refresh",this.refresh,this),n.context.on("refreshPaused",this.refreshPaused,this),this._media=n}_internalStop(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())}stop(){this._internalStop(),this._source&&this.emit("stop")}get speed(){return this._speed}set speed(n){this._speed=n,this.refresh()}get volume(){return this._volume}set volume(n){this._volume=n,this.refresh()}get loop(){return this._loop}set loop(n){this._loop=n,this.refresh()}get muted(){return this._muted}set muted(n){this._muted=n,this.refresh()}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(n){console.warn("HTML Audio does not support filters")}refresh(){const n=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;const t=n.volume*(n.muted?0:1),r=e.volume*(e.muted?0:1),i=this._volume*(this._muted?0:1);this._source.volume=i*t*r,this._source.playbackRate=this._speed*n.speed*e.speed}refreshPaused(){const n=this._media.context,e=this._media.parent,t=this._paused||e.paused||n.paused;t!==this._pausedReal&&(this._pausedReal=t,t?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",t))}play(n){const{start:e,end:t,speed:r,loop:i,volume:s,muted:o}=n;t&&console.assert(t>e,"End time is before start time"),this._speed=r,this._volume=s,this._loop=!!i,this._muted=o,this.refresh(),this.loop&&t!==null&&(console.warn('Looping not support when specifying an "end" time'),this.loop=!1),this._start=e,this._end=t||this._duration,this._start=Math.max(0,this._start-yr.PADDING),this._end=Math.min(this._end+yr.PADDING,this._duration),this._source.onloadedmetadata=()=>{this._source&&(this._source.currentTime=e,this._source.onloadedmetadata=null,this.emit("progress",e,this._duration),fe.shared.add(this._onUpdate,this))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")}_onUpdate(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()}_onComplete(){fe.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)}destroy(){fe.shared.remove(this._onUpdate,this),this.removeAllListeners();const n=this._source;n&&(n.onended=null,n.onplay=null,n.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)}toString(){return`[HTMLAudioInstance id=${this.id}]`}};let mo=yr;mo.PADDING=.1;class hh extends ce{init(e){this.parent=e,this._source=e.options.source||new Audio,e.url&&(this._source.src=e.url)}create(){return new mo(this)}get isPlayable(){return!!this._source&&this._source.readyState===4}get duration(){return this._source.duration}get context(){return this.parent.context}get filters(){return null}set filters(e){console.warn("HTML Audio does not support filters")}destroy(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)}get source(){return this._source}load(e){const t=this._source,r=this.parent;if(t.readyState===4){r.isLoaded=!0;const l=r.autoPlayStart();e&&setTimeout(()=>{e(null,r,l)},0);return}if(!r.url){e(new Error("sound.url or sound.source must be set"));return}t.src=r.url;const i=()=>{a(),r.isLoaded=!0;const l=r.autoPlayStart();e&&e(null,r,l)},s=()=>{a(),e&&e(new Error("Sound loading has been aborted"))},o=()=>{a();const l=`Failed to load audio element (code: ${t.error.code})`;e?e(new Error(l)):console.error(l)},a=()=>{t.removeEventListener("canplaythrough",i),t.removeEventListener("load",i),t.removeEventListener("abort",s),t.removeEventListener("error",o)};t.addEventListener("canplaythrough",i,!1),t.addEventListener("load",i,!1),t.addEventListener("abort",s,!1),t.addEventListener("error",o,!1),t.load()}}class fh{constructor(e,t){this.parent=e,Object.assign(this,t),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}play(e){return this.parent.play({complete:e,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})}destroy(){this.parent=null}}const gn=["ogg","oga","opus","m4a","mp3","mpeg","wav","aiff","wma","mid","caf"],dh=["audio/mpeg","audio/ogg"],xn={};function mh(n){const e={m4a:"audio/mp4",oga:"audio/ogg",opus:'audio/ogg; codecs="opus"',caf:'audio/x-caf; codecs="opus"'},t=document.createElement("audio"),r={},i=/^no$/;gn.forEach(s=>{const o=t.canPlayType(`audio/${s}`).replace(i,""),a=e[s]?t.canPlayType(e[s]).replace(i,""):"";r[s]=!!o||!!a}),Object.assign(xn,r)}mh();let ph=0;class gh extends ce{constructor(e){super(),this.id=ph++,this._media=null,this._paused=!1,this._muted=!1,this._elapsed=0,this.init(e)}set(e,t){if(this[e]===void 0)throw new Error(`Property with name ${e} does not exist.`);switch(e){case"speed":this.speed=t;break;case"volume":this.volume=t;break;case"muted":this.muted=t;break;case"loop":this.loop=t;break;case"paused":this.paused=t;break}return this}stop(){this._source&&(this._internalStop(),this.emit("stop"))}get speed(){return this._speed}set speed(e){this._speed=e,this.refresh(),this._update(!0)}get volume(){return this._volume}set volume(e){this._volume=e,this.refresh()}get muted(){return this._muted}set muted(e){this._muted=e,this.refresh()}get loop(){return this._loop}set loop(e){this._loop=e,this.refresh()}get filters(){return this._filters}set filters(e){var t;this._filters&&((t=this._filters)==null||t.filter(r=>r).forEach(r=>r.disconnect()),this._filters=null,this._source.connect(this._gain)),this._filters=e!=null&&e.length?e.slice(0):null,this.refresh()}refresh(){if(!this._source)return;const e=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;const r=e.volume*(e.muted?0:1),i=t.volume*(t.muted?0:1),s=this._volume*(this._muted?0:1);vr.setParamValue(this._gain.gain,s*i*r),vr.setParamValue(this._source.playbackRate,this._speed*t.speed*e.speed),this.applyFilters()}applyFilters(){var e;if((e=this._filters)!=null&&e.length){this._source.disconnect();let t=this._source;this._filters.forEach(r=>{t.connect(r.destination),t=r}),t.connect(this._gain)}}refreshPaused(){const e=this._media.context,t=this._media.parent,r=this._paused||t.paused||e.paused;r!==this._pausedReal&&(this._pausedReal=r,r?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",r))}play(e){const{start:t,end:r,speed:i,loop:s,volume:o,muted:a,filters:l}=e;r&&console.assert(r>t,"End time is before start time"),this._paused=!1;const{source:c,gain:u}=this._media.nodes.cloneBufferSource();this._source=c,this._gain=u,this._speed=i,this._volume=o,this._loop=!!s,this._muted=a,this._filters=l,this.refresh();const h=this._source.buffer.duration;this._duration=h,this._end=r,this._lastUpdate=this._now(),this._elapsed=t,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=r,this._source.loopStart=t,this._source.start(0,t)):r?this._source.start(0,t,r-t):this._source.start(0,t),this.emit("start"),this._update(!0),this.enableTicker(!0)}enableTicker(e){fe.shared.remove(this._updateListener,this),e&&fe.shared.add(this._updateListener,this)}get progress(){return this._progress}get paused(){return this._paused}set paused(e){this._paused=e,this.refreshPaused()}destroy(){var e;this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),(e=this._filters)==null||e.forEach(t=>t.disconnect()),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1}toString(){return`[WebAudioInstance id=${this.id}]`}_now(){return this._media.context.audioContext.currentTime}_updateListener(){this._update()}_update(e=!1){if(this._source){const t=this._now(),r=t-this._lastUpdate;if(r>0||e){const i=this._source.playbackRate.value;this._elapsed+=r*i,this._lastUpdate=t;const s=this._duration;let o;if(this._source.loopStart){const a=this._source.loopEnd-this._source.loopStart;o=(this._source.loopStart+this._elapsed%a)/s}else o=this._elapsed%s/s;this._progress=o,this.emit("progress",this._progress,s)}}}init(e){this._media=e,e.context.events.on("refresh",this.refresh,this),e.context.events.on("refreshPaused",this.refreshPaused,this)}_internalStop(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null}}_onComplete(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}}this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)}}class po{constructor(e,t){this._output=t,this._input=e}get destination(){return this._input}get filters(){return this._filters}set filters(e){if(this._filters&&(this._filters.forEach(t=>{t&&t.disconnect()}),this._filters=null,this._input.connect(this._output)),e&&e.length){this._filters=e.slice(0),this._input.disconnect();let t=null;e.forEach(r=>{t===null?this._input.connect(r.destination):t.connect(r.destination),t=r}),t.connect(this._output)}}destroy(){this.filters=null,this._input=null,this._output=null}}const go=class extends po{constructor(n){const e=n.audioContext,t=e.createBufferSource(),r=e.createGain(),i=e.createAnalyser();t.connect(i),i.connect(r),r.connect(n.destination),super(i,r),this.context=n,this.bufferSource=t,this.gain=r,this.analyser=i}get script(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(go.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script}destroy(){super.destroy(),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null}cloneBufferSource(){const n=this.bufferSource,e=this.context.audioContext.createBufferSource();e.buffer=n.buffer,vr.setParamValue(e.playbackRate,n.playbackRate.value),e.loop=n.loop;const t=this.context.audioContext.createGain();return e.connect(t),t.connect(this.destination),{source:e,gain:t}}get bufferSize(){return this.script.bufferSize}};let xo=go;xo.BUFFER_SIZE=0;class xh{init(e){this.parent=e,this._nodes=new xo(this.context),this._source=this._nodes.bufferSource,this.source=e.options.source}destroy(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null,this.source=null}create(){return new gh(this)}get context(){return this.parent.context}get isPlayable(){return!!this._source&&!!this._source.buffer}get filters(){return this._nodes.filters}set filters(e){this._nodes.filters=e}get duration(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration}get buffer(){return this._source.buffer}set buffer(e){this._source.buffer=e}get nodes(){return this._nodes}load(e){this.source?this._decode(this.source,e):this.parent.url?this._loadUrl(e):e?e(new Error("sound.url or sound.source must be set")):console.error("sound.url or sound.source must be set")}async _loadUrl(e){const t=this.parent.url,r=await se.get().fetch(t);this._decode(await r.arrayBuffer(),e)}_decode(e,t){const r=(i,s)=>{if(i)t&&t(i);else{this.parent.isLoaded=!0,this.buffer=s;const o=this.parent.autoPlayStart();t&&t(null,this.parent,o)}};e instanceof AudioBuffer?r(null,e):this.parent.context.decode(e,r)}}const et=class{static from(n){let e={};typeof n=="string"?e.url=n:n instanceof ArrayBuffer||n instanceof AudioBuffer||n instanceof HTMLAudioElement?e.source=n:Array.isArray(n)?e.url=n:e=n,e={autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,...e},Object.freeze(e);const t=Ut().useLegacy?new hh:new xh;return new et(t,e)}constructor(n,e){this.media=n,this.options=e,this._instances=[],this._sprites={},this.media.init(this);const t=e.complete;this._autoPlayOptions=t?{complete:t}:null,this.isLoaded=!1,this._preloadQueue=null,this.isPlaying=!1,this.autoPlay=e.autoPlay,this.singleInstance=e.singleInstance,this.preload=e.preload||this.autoPlay,this.url=Array.isArray(e.url)?this.preferUrl(e.url):e.url,this.speed=e.speed,this.volume=e.volume,this.loop=e.loop,e.sprites&&this.addSprites(e.sprites),this.preload&&this._preload(e.loaded)}preferUrl(n){const[e]=n.map(t=>({url:t,ext:le.extname(t).slice(1)})).filter(({ext:t})=>xn[t]).sort((t,r)=>gn.indexOf(t.ext)-gn.indexOf(r.ext));if(!e)throw new Error("No supported file type found");return e.url}get context(){return Ut().context}pause(){return this.isPlaying=!1,this.paused=!0,this}resume(){return this.isPlaying=this._instances.length>0,this.paused=!1,this}get paused(){return this._paused}set paused(n){this._paused=n,this.refreshPaused()}get speed(){return this._speed}set speed(n){this._speed=n,this.refresh()}get filters(){return this.media.filters}set filters(n){this.media.filters=n}addSprites(n,e){if(typeof n=="object"){const r={};for(const i in n)r[i]=this.addSprites(i,n[i]);return r}console.assert(!this._sprites[n],`Alias ${n} is already taken`);const t=new fh(this,e);return this._sprites[n]=t,t}destroy(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null}removeSprites(n){if(n){const e=this._sprites[n];e!==void 0&&(e.destroy(),delete this._sprites[n])}else for(const e in this._sprites)this.removeSprites(e);return this}get isPlayable(){return this.isLoaded&&this.media&&this.media.isPlayable}stop(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(let n=this._instances.length-1;n>=0;n--)this._instances[n].stop();return this}play(n,e){let t;if(typeof n=="string"?t={sprite:n,loop:this.loop,complete:e}:typeof n=="function"?(t={},t.complete=n):t=n,t={complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1,...t||{}},t.sprite){const i=t.sprite;console.assert(!!this._sprites[i],`Alias ${i} is not available`);const s=this._sprites[i];t.start=s.start+(t.start||0),t.end=s.end,t.speed=s.speed||1,t.loop=s.loop||t.loop,delete t.sprite}if(t.offset&&(t.start=t.offset),!this.isLoaded)return this._preloadQueue?new Promise(i=>{this._preloadQueue.push(()=>{i(this.play(t))})}):(this._preloadQueue=[],this.autoPlay=!0,this._autoPlayOptions=t,new Promise((i,s)=>{this._preload((o,a,l)=>{this._preloadQueue.forEach(c=>c()),this._preloadQueue=null,o?s(o):(t.loaded&&t.loaded(o,a,l),i(l))})}));(this.singleInstance||t.singleInstance)&&this._removeInstances();const r=this._createInstance();return this._instances.push(r),this.isPlaying=!0,r.once("end",()=>{t.complete&&t.complete(this),this._onComplete(r)}),r.once("stop",()=>{this._onComplete(r)}),r.play(t),r}refresh(){const n=this._instances.length;for(let e=0;e<n;e++)this._instances[e].refresh()}refreshPaused(){const n=this._instances.length;for(let e=0;e<n;e++)this._instances[e].refreshPaused()}get volume(){return this._volume}set volume(n){this._volume=n,this.refresh()}get muted(){return this._muted}set muted(n){this._muted=n,this.refresh()}get loop(){return this._loop}set loop(n){this._loop=n,this.refresh()}_preload(n){this.media.load(n)}get instances(){return this._instances}get sprites(){return this._sprites}get duration(){return this.media.duration}autoPlayStart(){let n;return this.autoPlay&&(n=this.play(this._autoPlayOptions)),n}_removeInstances(){for(let n=this._instances.length-1;n>=0;n--)this._poolInstance(this._instances[n]);this._instances.length=0}_onComplete(n){if(this._instances){const e=this._instances.indexOf(n);e>-1&&this._instances.splice(e,1),this.isPlaying=this._instances.length>0}this._poolInstance(n)}_createInstance(){if(et._pool.length>0){const n=et._pool.pop();return n.init(this.media),n}return this.media.create()}_poolInstance(n){n.destroy(),et._pool.indexOf(n)<0&&et._pool.push(n)}};let vn=et;vn._pool=[];class Lt extends po{constructor(){const e=window,t=new Lt.AudioContext,r=t.createDynamicsCompressor(),i=t.createAnalyser();i.connect(r),r.connect(t.destination),super(i,r),this.autoPause=!0,this._ctx=t,this._offlineCtx=new Lt.OfflineAudioContext(1,2,e.OfflineAudioContext?Math.max(8e3,Math.min(96e3,t.sampleRate)):44100),this.compressor=r,this.analyser=i,this.events=new ce,this.volume=1,this.speed=1,this.muted=!1,this.paused=!1,this._locked=t.state==="suspended"&&("ontouchstart"in globalThis||"onclick"in globalThis),this._locked&&(this._unlock(),this._unlock=this._unlock.bind(this),document.addEventListener("mousedown",this._unlock,!0),document.addEventListener("touchstart",this._unlock,!0),document.addEventListener("touchend",this._unlock,!0)),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),globalThis.addEventListener("focus",this.onFocus),globalThis.addEventListener("blur",this.onBlur)}onFocus(){if(!this.autoPause)return;const e=this._ctx.state;(e==="suspended"||e==="interrupted"||!this._locked)&&(this.paused=this._pausedOnBlur,this.refreshPaused())}onBlur(){this.autoPause&&(this._locked||(this._pausedOnBlur=this._paused,this.paused=!0,this.refreshPaused()))}_unlock(){this._locked&&(this.playEmptySound(),this._ctx.state==="running"&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._locked=!1))}playEmptySound(){const e=this._ctx.createBufferSource();e.buffer=this._ctx.createBuffer(1,1,22050),e.connect(this._ctx.destination),e.start(0,0,0),e.context.state==="suspended"&&e.context.resume()}static get AudioContext(){const e=window;return e.AudioContext||e.webkitAudioContext||null}static get OfflineAudioContext(){const e=window;return e.OfflineAudioContext||e.webkitOfflineAudioContext||null}destroy(){super.destroy();const e=this._ctx;typeof e.close<"u"&&e.close(),globalThis.removeEventListener("focus",this.onFocus),globalThis.removeEventListener("blur",this.onBlur),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null}get audioContext(){return this._ctx}get offlineContext(){return this._offlineCtx}set paused(e){e&&this._ctx.state==="running"?this._ctx.suspend():!e&&this._ctx.state==="suspended"&&this._ctx.resume(),this._paused=e}get paused(){return this._paused}refresh(){this.events.emit("refresh")}refreshPaused(){this.events.emit("refreshPaused")}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this._paused}decode(e,t){const r=s=>{t(new Error((s==null?void 0:s.message)||"Unable to decode file"))},i=this._offlineCtx.decodeAudioData(e,s=>{t(null,s)},r);i&&i.catch(r)}}class vh{constructor(){this.init()}init(){return this.supported&&(this._webAudioContext=new Lt),this._htmlAudioContext=new uh,this._sounds={},this.useLegacy=!this.supported,this}get context(){return this._context}get filtersAll(){return this.useLegacy?[]:this._context.filters}set filtersAll(e){this.useLegacy||(this._context.filters=e)}get supported(){return Lt.AudioContext!==null}add(e,t){if(typeof e=="object"){const s={};for(const o in e){const a=this._getOptions(e[o],t);s[o]=this.add(o,a)}return s}if(console.assert(!this._sounds[e],`Sound with alias ${e} already exists.`),t instanceof vn)return this._sounds[e]=t,t;const r=this._getOptions(t),i=vn.from(r);return this._sounds[e]=i,i}_getOptions(e,t){let r;return typeof e=="string"?r={url:e}:Array.isArray(e)?r={url:e}:e instanceof ArrayBuffer||e instanceof AudioBuffer||e instanceof HTMLAudioElement?r={source:e}:r=e,r={...r,...t||{}},r}get useLegacy(){return this._useLegacy}set useLegacy(e){this._useLegacy=e,this._context=!e&&this.supported?this._webAudioContext:this._htmlAudioContext}get disableAutoPause(){return!this._webAudioContext.autoPause}set disableAutoPause(e){this._webAudioContext.autoPause=!e}remove(e){return this.exists(e,!0),this._sounds[e].destroy(),delete this._sounds[e],this}get volumeAll(){return this._context.volume}set volumeAll(e){this._context.volume=e,this._context.refresh()}get speedAll(){return this._context.speed}set speedAll(e){this._context.speed=e,this._context.refresh()}togglePauseAll(){return this._context.togglePause()}pauseAll(){return this._context.paused=!0,this._context.refreshPaused(),this}resumeAll(){return this._context.paused=!1,this._context.refreshPaused(),this}toggleMuteAll(){return this._context.toggleMute()}muteAll(){return this._context.muted=!0,this._context.refresh(),this}unmuteAll(){return this._context.muted=!1,this._context.refresh(),this}removeAll(){for(const e in this._sounds)this._sounds[e].destroy(),delete this._sounds[e];return this}stopAll(){for(const e in this._sounds)this._sounds[e].stop();return this}exists(e,t=!1){const r=!!this._sounds[e];return t&&console.assert(r,`No sound matching alias '${e}'.`),r}isPlaying(){for(const e in this._sounds)if(this._sounds[e].isPlaying)return!0;return!1}find(e){return this.exists(e,!0),this._sounds[e]}play(e,t){return this.find(e).play(t)}stop(e){return this.find(e).stop()}pause(e){return this.find(e).pause()}resume(e){return this.find(e).resume()}volume(e,t){const r=this.find(e);return t!==void 0&&(r.volume=t),r.volume}speed(e,t){const r=this.find(e);return t!==void 0&&(r.speed=t),r.speed}duration(e){return this.find(e).duration}close(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this}}const Wi=n=>{var r;const e=n.src;let t=(r=n==null?void 0:n.alias)==null?void 0:r[0];return(!t||n.src===t)&&(t=le.basename(e,le.extname(e))),t},yh={extension:E.Asset,detection:{test:async()=>!0,add:async n=>[...n,...gn.filter(e=>xn[e])],remove:async n=>n.filter(e=>n.includes(e))},loader:{name:"sound",extension:{type:[E.LoadParser],priority:Ue.High},test(n){const e=le.extname(n).slice(1);return!!xn[e]||dh.some(t=>n.startsWith(`data:${t}`))},async load(n,e){const t=await new Promise((r,i)=>vn.from({...e.data,url:n,preload:!0,loaded(s,o){var a,l;s?i(s):r(o),(l=(a=e.data)==null?void 0:a.loaded)==null||l.call(a,s,o)}}));return Ut().add(Wi(e),t),t},async unload(n,e){Ut().remove(Wi(e))}}};de.add(yh);const K=lh(new vh);var G=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,N=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,_h=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,bh=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,Ah=Object.defineProperty,Sh=(n,e,t)=>e in n?Ah(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,vo=(n,e,t)=>(Sh(n,typeof e!="symbol"?e+"":e,t),t);const Ch=class yo extends L{constructor(e){e={...yo.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:bh,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:_h,name:"adjustment-filter"});super({gpuProgram:t,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:e.gamma,type:"f32"},uContrast:{value:e.contrast,type:"f32"},uSaturation:{value:e.saturation,type:"f32"},uBrightness:{value:e.brightness,type:"f32"},uColor:{value:[e.red,e.green,e.blue,e.alpha],type:"vec4<f32>"}}}}),vo(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(e){this.uniforms.uGamma=e}get contrast(){return this.uniforms.uContrast}set contrast(e){this.uniforms.uContrast=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}get brightness(){return this.uniforms.uBrightness}set brightness(e){this.uniforms.uBrightness=e}get red(){return this.uniforms.uColor[0]}set red(e){this.uniforms.uColor[0]=e}get green(){return this.uniforms.uColor[1]}set green(e){this.uniforms.uColor[1]=e}get blue(){return this.uniforms.uColor[2]}set blue(e){this.uniforms.uColor[2]=e}get alpha(){return this.uniforms.uColor[3]}set alpha(e){this.uniforms.uColor[3]=e}};vo(Ch,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var wh=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,Th=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,Ph=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,Ih=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,Fh=Object.defineProperty,Mh=(n,e,t)=>e in n?Fh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,He=(n,e,t)=>(Mh(n,typeof e!="symbol"?e+"":e,t),t);const _o=class bo extends L{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t))&&(R("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.clamp=e[2])),t={...bo.DEFAULT_OPTIONS,...t};const r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:t!=null&&t.clamp?Ih:Th,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:t!=null&&t.clamp?Ph:wh,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),He(this,"uniforms"),He(this,"_pixelSize",{x:0,y:0}),He(this,"_clamp"),He(this,"_kernels",[]),He(this,"_blur"),He(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=t.pixelSize??{x:1,y:1},Array.isArray(t.strength)?this.kernels=t.strength:typeof t.strength=="number"&&(this._blur=t.strength,this.quality=t.quality??3),this._clamp=!!t.clamp}apply(e,t,r,i){const s=this.pixelSizeX/t.source.width,o=this.pixelSizeY/t.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,t,r,i);else{const l=pe.getSameSizeTexture(t);let c=t,u=l,h;const f=this._quality-1;for(let d=0;d<f;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,c,u,!0),h=c,c=u,u=h;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,c,r,i),pe.returnTexture(l)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e=="number"){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,t)=>e+t+.5,0))}_generateKernels(){const e=this._blur,t=this._quality,r=[e];if(e>0){let i=e;const s=e/t;for(let o=1;o<t;o++)i-=s,r.push(i)}this._kernels=r,this._updatePadding()}};He(_o,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Ao=_o;var zh=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,Eh=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,Oh=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,Rh=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,Bh=Object.defineProperty,Uh=(n,e,t)=>e in n?Bh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,So=(n,e,t)=>(Uh(n,typeof e!="symbol"?e+"":e,t),t);const Co=class wo extends L{constructor(e){e={...wo.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Rh,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Oh,name:"extract-brightness-filter"});super({gpuProgram:t,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:e.threshold,type:"f32"}}}}),So(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(e){this.uniforms.uThreshold=e}};So(Co,"DEFAULT_OPTIONS",{threshold:.5});let Lh=Co;var kh=Object.defineProperty,Dh=(n,e,t)=>e in n?kh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,tt=(n,e,t)=>(Dh(n,typeof e!="symbol"?e+"":e,t),t);const Gh=class To extends L{constructor(e){e={...To.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Eh,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:zh,name:"advanced-bloom-filter"});super({gpuProgram:t,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:e.bloomScale,type:"f32"},uBrightness:{value:e.brightness,type:"f32"}},uMapTexture:M.WHITE}}),tt(this,"uniforms"),tt(this,"bloomScale",1),tt(this,"brightness",1),tt(this,"_extractFilter"),tt(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new Lh({threshold:e.threshold}),this._blurFilter=new Ao({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),Object.assign(this,e)}apply(e,t,r,i){const s=pe.getSameSizeTexture(t);this._extractFilter.apply(e,t,s,!0);const o=pe.getSameSizeTexture(t);this._blurFilter.apply(e,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,e.applyFilter(this,t,r,i),pe.returnTexture(o),pe.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}};tt(Gh,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var Nh=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,Vh=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,Xh=Object.defineProperty,Yh=(n,e,t)=>e in n?Xh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_r=(n,e,t)=>(Yh(n,typeof e!="symbol"?e+"":e,t),t);const Wh=class Po extends L{constructor(...e){let t=e[0]??{};typeof t=="number"&&(R("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),t={size:t});const r=(t==null?void 0:t.color)&&t.replaceColor!==!1;t={...Po.DEFAULT_OPTIONS,...t};const i=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Vh,entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:Nh,name:"ascii-filter"});super({gpuProgram:i,glProgram:s,resources:{asciiUniforms:{uSize:{value:t.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),_r(this,"uniforms"),_r(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new Y,this.color=t.color??16777215}get size(){return this.uniforms.uSize}set size(e){this.uniforms.uSize=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(e){this.uniforms.uReplaceColor=e?1:0}};_r(Wh,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Hh=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,jh=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,$h=Object.defineProperty,qh=(n,e,t)=>e in n?$h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,nt=(n,e,t)=>(qh(n,typeof e!="symbol"?e+"":e,t),t);const Kh=class Io extends L{constructor(e){e={...Io.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:jh,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Hh,name:"bevel-filter"});super({gpuProgram:t,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:e.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:e.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),nt(this,"uniforms"),nt(this,"_thickness"),nt(this,"_rotation"),nt(this,"_lightColor"),nt(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new Y,this._shadowColor=new Y,this.lightColor=e.lightColor??16777215,this.shadowColor=e.shadowColor??0,Object.assign(this,e)}get rotation(){return this._rotation/lt}set rotation(e){this._rotation=e*lt,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(e){this._lightColor.setValue(e);const[t,r,i]=this._lightColor.toArray();this.uniforms.uLightColor[0]=t,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=i}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(e){this.uniforms.uLightAlpha=e}get shadowColor(){return this._shadowColor.value}set shadowColor(e){this._shadowColor.setValue(e);const[t,r,i]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=t,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=i}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(e){this.uniforms.uShadowAlpha=e}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};nt(Kh,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Zh=Object.defineProperty,Qh=(n,e,t)=>e in n?Zh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,rn=(n,e,t)=>(Qh(n,typeof e!="symbol"?e+"":e,t),t);const Jh=class Fo extends Kc{constructor(...e){let t=e[0]??{};if(typeof t=="number"||Array.isArray(t)||"x"in t&&"y"in t){R("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=t;Array.isArray(r)&&(r={x:r[0],y:r[1]}),t={strength:r},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]),e[3]!==void 0&&(t.kernelSize=e[3])}t={...Fo.DEFAULT_OPTIONS,...t},super(),rn(this,"_blurXFilter"),rn(this,"_blurYFilter"),rn(this,"_strength"),this._strength={x:2,y:2},t.strength&&(typeof t.strength=="number"?(this._strength.x=t.strength,this._strength.y=t.strength):(this._strength.x=t.strength.x,this._strength.y=t.strength.y)),this._blurXFilter=new Yi({...t,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Yi({...t,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,t)}apply(e,t,r,i){const s=pe.getSameSizeTexture(t);e.applyFilter(this,t,r,i),this._blurXFilter.apply(e,t,s,!0),this._blurYFilter.apply(e,s,r,!1),pe.returnTexture(s)}get strength(){return this._strength}set strength(e){this._strength=typeof e=="number"?{x:e,y:e}:e,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(e){this.strength.x=e,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(e){this.strength.y=e,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return R("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(e){R("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=e}get blurX(){return R("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(e){R("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=e}get blurY(){return R("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(e){R("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=e}};rn(Jh,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var ef=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,tf=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,nf=Object.defineProperty,rf=(n,e,t)=>e in n?nf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Mo=(n,e,t)=>(rf(n,typeof e!="symbol"?e+"":e,t),t);const sf=class zo extends L{constructor(e){e={...zo.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:tf,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:ef,name:"bulge-pinch-filter"});super({gpuProgram:t,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:e.center,type:"vec2<f32>"},uRadius:{value:e.radius,type:"f32"},uStrength:{value:e.strength,type:"f32"}}}}),Mo(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,r,i)}get center(){return this.uniforms.uCenter}set center(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}};Mo(sf,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var of=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,af=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,Hi=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,Ze=Ze||{};Ze.stringify=function(){var n={"visit_linear-gradient":function(e){return n.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return n.visit_gradient(e)},"visit_radial-gradient":function(e){return n.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return n.visit_gradient(e)},visit_gradient:function(e){var t=n.visit(e.orientation);return t&&(t+=", "),e.type+"("+t+n.visit(e.colorStops)+")"},visit_shape:function(e){var t=e.value,r=n.visit(e.at),i=n.visit(e.style);return i&&(t+=" "+i),r&&(t+=" at "+r),t},"visit_default-radial":function(e){var t="",r=n.visit(e.at);return r&&(t+=r),t},"visit_extent-keyword":function(e){var t=e.value,r=n.visit(e.at);return r&&(t+=" at "+r),t},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return n.visit(e.value.x)+" "+n.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return n.visit_color(e.value,e)},visit_hex:function(e){return n.visit_color("#"+e.value,e)},visit_rgb:function(e){return n.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return n.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,t){var r=e,i=n.visit(t.length);return i&&(r+=" "+i),r},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var t="",r=e.length;return e.forEach(function(i,s){t+=n.visit(i),s<r-1&&(t+=", ")}),t},visit:function(e){if(!e)return"";var t="";if(e instanceof Array)return n.visit_array(e,t);if(e.type){var r=n["visit_"+e.type];if(r)return r(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return n.visit(e)}}();var Ze=Ze||{};Ze.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function t(C){var D=new Error(e+": "+C);throw D.source=e,D}function r(){var C=i();return e.length>0&&t("Invalid input not EOF"),C}function i(){return y(s)}function s(){return o("linear-gradient",n.linearGradient,l)||o("repeating-linear-gradient",n.repeatingLinearGradient,l)||o("radial-gradient",n.radialGradient,h)||o("repeating-radial-gradient",n.repeatingRadialGradient,h)}function o(C,D,S){return a(D,function(F){var Dt=S();return Dt&&(k(n.comma)||t("Missing comma before color stops")),{type:C,orientation:Dt,colorStops:y(_)}})}function a(C,D){var S=k(C);if(S){k(n.startCall)||t("Missing (");var F=D(S);return k(n.endCall)||t("Missing )"),F}}function l(){return c()||u()}function c(){return w("directional",n.sideOrCorner,1)}function u(){return w("angular",n.angleValue,1)}function h(){var C,D=f(),S;return D&&(C=[],C.push(D),S=e,k(n.comma)&&(D=f(),D?C.push(D):e=S)),C}function f(){var C=d()||m();if(C)C.at=p();else{var D=g();if(D){C=D;var S=p();S&&(C.at=S)}else{var F=v();F&&(C={type:"default-radial",at:F})}}return C}function d(){var C=w("shape",/^(circle)/i,0);return C&&(C.style=z()||g()),C}function m(){var C=w("shape",/^(ellipse)/i,0);return C&&(C.style=W()||g()),C}function g(){return w("extent-keyword",n.extentKeywords,1)}function p(){if(w("position",/^at/,0)){var C=v();return C||t("Missing positioning value"),C}}function v(){var C=x();if(C.x||C.y)return{type:"position",value:C}}function x(){return{x:W(),y:W()}}function y(C){var D=C(),S=[];if(D)for(S.push(D);k(n.comma);)D=C(),D?S.push(D):t("One extra comma");return S}function _(){var C=I();return C||t("Expected color definition"),C.length=W(),C}function I(){return T()||A()||P()||O()}function O(){return w("literal",n.literalColor,0)}function T(){return w("hex",n.hexColor,1)}function P(){return a(n.rgbColor,function(){return{type:"rgb",value:y(b)}})}function A(){return a(n.rgbaColor,function(){return{type:"rgba",value:y(b)}})}function b(){return k(n.number)[1]}function W(){return w("%",n.percentageValue,1)||ge()||z()}function ge(){return w("position-keyword",n.positionKeywords,1)}function z(){return w("px",n.pixelValue,1)||w("em",n.emValue,1)}function w(C,D,S){var F=k(D);if(F)return{type:C,value:F[S]}}function k(C){var D,S;return S=/^[\n\r\t\s]+/.exec(e),S&&j(S[0].length),D=C.exec(e),D&&j(D[0].length),D}function j(C){e=e.substr(C)}return function(C){return e=C.toString(),r()}}();var lf=Ze.parse;Ze.stringify;function uf(n){const e=lf(xf(n));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const t=e[0],r=cf(t.type),i=hf(t.colorStops),s=pf(t.orientation);return{type:r,stops:i,angle:s}}function cf(n){const e={"linear-gradient":0,"radial-gradient":1};if(!(n in e))throw new Error(`Unsupported gradient type "${n}"`);return e[n]}function hf(n){const e=df(n),t=[],r=new Y;for(let i=0;i<n.length;i++){const s=ff(n[i]),o=r.setValue(s).toArray();t.push({offset:e[i],color:o.slice(0,3),alpha:o[3]})}return t}function ff(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function df(n){const e=[];for(let s=0;s<n.length;s++){const o=n[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),e.push(a)}const r=s=>{for(let o=s;o<e.length;o++)if(e[o]!==-1)return{indexDelta:o-s,offset:e[o]};return{indexDelta:e.length-1-s,offset:1}};let i=0;for(let s=0;s<e.length;s++){const o=e[s];if(o!==-1)i=o;else if(s===0)e[s]=0;else if(s+1===e.length)e[s]=1;else{const a=r(s),c=(a.offset-i)/(1+a.indexDelta);for(let u=0;u<=a.indexDelta;u++)e[s+u]=i+(u+1)*c;s+=a.indexDelta,i=e[s]}}return e.map(mf)}function mf(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function pf(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return gf(n.value)}return 0}function gf(n){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in e))throw new Error(`Unsupported directional value "${n}"`);return e[n]}function xf(n){let e=n.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var vf=Object.defineProperty,yf=(n,e,t)=>e in n?vf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,qe=(n,e,t)=>(yf(n,typeof e!="symbol"?e+"":e,t),t);const Qn=90;function _f(n){return[...n].sort((e,t)=>e.offset-t.offset)}const kt=class sn extends L{constructor(e){if(e&&"css"in e?e={...uf(e.css||""),alpha:e.alpha??sn.defaults.alpha,maxColors:e.maxColors??sn.defaults.maxColors}:e={...sn.defaults,...e},!e.stops||e.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const t=B.from({vertex:{source:Hi,entryPoint:"mainVertex"},fragment:{source:Hi,entryPoint:"mainFragment"}}),r=U.from({vertex:af,fragment:of,name:"color-gradient-filter"}),i=32;super({gpuProgram:t,glProgram:r,resources:{baseUniforms:{uOptions:{value:[e.type,e.angle??Qn,e.alpha,e.replace?1:0],type:"vec4<f32>"},uCounts:{value:[e.stops.length,e.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(i*3),type:"vec3<f32>",size:i},uStops:{value:new Float32Array(i*4),type:"vec4<f32>",size:i}}}}),qe(this,"baseUniforms"),qe(this,"stopsUniforms"),qe(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,e)}get stops(){return this._stops}set stops(e){const t=_f(e),r=new Y;let i,s,o;for(let a=0;a<t.length;a++){r.setValue(t[a].color);const l=a*3;[i,s,o]=r.toArray(),this.stopsUniforms.uColors[l]=i,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=t[a].offset,this.stopsUniforms.uStops[a*4+1]=t[a].alpha}this.baseUniforms.uCounts[0]=t.length,this._stops=t}get type(){return this.baseUniforms.uOptions[0]}set type(e){this.baseUniforms.uOptions[0]=e}get angle(){return this.baseUniforms.uOptions[1]+Qn}set angle(e){this.baseUniforms.uOptions[1]=e-Qn}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(e){this.baseUniforms.uOptions[2]=e}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(e){this.baseUniforms.uCounts[1]=e}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(e){this.baseUniforms.uOptions[3]=e?1:0}};qe(kt,"LINEAR",0);qe(kt,"RADIAL",1);qe(kt,"CONIC",2);qe(kt,"defaults",{type:kt.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var bf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,Af=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,Sf=Object.defineProperty,Cf=(n,e,t)=>e in n?Sf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pe=(n,e,t)=>(Cf(n,typeof e!="symbol"?e+"":e,t),t);const wf=class Eo extends L{constructor(...e){let t=e[0]??{};if((t instanceof M||t instanceof we)&&(R("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),t={colorMap:t},e[1]!==void 0&&(t.nearest=e[1]),e[2]!==void 0&&(t.mix=e[2])),t={...Eo.DEFAULT_OPTIONS,...t},!t.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Af,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:bf,name:"color-map-filter"});super({gpuProgram:r,glProgram:i,resources:{colorMapUniforms:{uMix:{value:t.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:t.colorMap.source,uMapSampler:t.colorMap.source.style}}),Pe(this,"uniforms"),Pe(this,"_size",0),Pe(this,"_sliceSize",0),Pe(this,"_slicePixelSize",0),Pe(this,"_sliceInnerSize",0),Pe(this,"_nearest",!1),Pe(this,"_scaleMode","linear"),Pe(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,t)}get mix(){return this.uniforms.uMix}set mix(e){this.uniforms.uMix=e}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){if(!e||e===this.colorMap)return;const t=e instanceof M?e.source:e;t.style.scaleMode=this._scaleMode,t.autoGenerateMipmaps=!1,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=t,this._colorMap=e}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?"nearest":"linear";const t=this._colorMap;t&&t.source&&(t.source.scaleMode=this._scaleMode,t.source.autoGenerateMipmaps=!1,t.source.style.update(),t.source.update())}updateColorMap(){const e=this._colorMap;e!=null&&e.source&&(e.source.update(),this.colorMap=e)}destroy(){var e;(e=this._colorMap)==null||e.destroy(),super.destroy()}};Pe(wf,"DEFAULT_OPTIONS",{colorMap:M.WHITE,nearest:!1,mix:1});var Tf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,Pf=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,If=Object.defineProperty,Ff=(n,e,t)=>e in n?If(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,br=(n,e,t)=>(Ff(n,typeof e!="symbol"?e+"":e,t),t);const Mf=class Oo extends L{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(R("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),t={color:t},e[1]!==void 0&&(t.alpha=e[1])),t={...Oo.DEFAULT_OPTIONS,...t};const r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Pf,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:Tf,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"}}}}),br(this,"uniforms"),br(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new Y,this.color=t.color??0}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};br(Mf,"DEFAULT_OPTIONS",{color:0,alpha:1});var zf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,Ef=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,Of=Object.defineProperty,Rf=(n,e,t)=>e in n?Of(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,on=(n,e,t)=>(Rf(n,typeof e!="symbol"?e+"":e,t),t);const Bf=class Ro extends L{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(R("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),t={originalColor:t},e[1]!==void 0&&(t.targetColor=e[1]),e[2]!==void 0&&(t.tolerance=e[2])),t={...Ro.DEFAULT_OPTIONS,...t};const r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Ef,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:zf,name:"color-replace-filter"});super({gpuProgram:r,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:t.tolerance,type:"f32"}}}}),on(this,"uniforms"),on(this,"_originalColor"),on(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new Y,this._targetColor=new Y,this.originalColor=t.originalColor??16711680,this.targetColor=t.targetColor??0,Object.assign(this,t)}get originalColor(){return this._originalColor.value}set originalColor(e){this._originalColor.setValue(e);const[t,r,i]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=t,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=i}get targetColor(){return this._targetColor.value}set targetColor(e){this._targetColor.setValue(e);const[t,r,i]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=t,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=i}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set newColor(e){R("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=e}get newColor(){return R("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(e){R("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return R("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};on(Bf,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var Uf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,Lf=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,kf=Object.defineProperty,Df=(n,e,t)=>e in n?kf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Bo=(n,e,t)=>(Df(n,typeof e!="symbol"?e+"":e,t),t);const Gf=class Uo extends L{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(R("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),t={matrix:t},e[1]!==void 0&&(t.width=e[1]),e[2]!==void 0&&(t.height=e[2])),t={...Uo.DEFAULT_OPTIONS,...t};const r=t.width??200,i=t.height??200,s=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Lf,entryPoint:"mainFragment"}}),o=U.from({vertex:G,fragment:Uf,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:t.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/i},type:"vec2<f32>"}}}}),Bo(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(e){e.forEach((t,r)=>{this.uniforms.uMatrix[r]=t})}get width(){return 1/this.uniforms.uTexelSize.x}set width(e){this.uniforms.uTexelSize.x=1/e}get height(){return 1/this.uniforms.uTexelSize.y}set height(e){this.uniforms.uTexelSize.y=1/e}};Bo(Gf,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Nf=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,Vf=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,Xf=Object.defineProperty,Yf=(n,e,t)=>e in n?Xf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,an=(n,e,t)=>(Yf(n,typeof e!="symbol"?e+"":e,t),t);const Wf=class Lo extends L{constructor(e){e={...Lo.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Vf,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Nf,name:"crt-filter"});super({gpuProgram:t,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),an(this,"uniforms"),an(this,"seed"),an(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=e?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}};an(Wf,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var Hf=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,jf=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,$f=Object.defineProperty,qf=(n,e,t)=>e in n?$f(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Kf=(n,e,t)=>(qf(n,e+"",t),t);const Zf=class ko extends L{constructor(...e){let t=e[0]??{};typeof t=="number"&&(R("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),t={scale:t},e[1]!==void 0&&(t.angle=e[1]),e[2]!==void 0&&(t.grayscale=e[2])),t={...ko.DEFAULT_OPTIONS,...t};const r={uScale:{value:t.scale,type:"f32"},uAngle:{value:t.angle,type:"f32"},uGrayScale:{value:t.grayscale?1:0,type:"f32"}},i=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:jf,entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:Hf,name:"dot-filter"});super({gpuProgram:i,glProgram:s,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(e){this.resources.dotUniforms.uniforms.uScale=e}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(e){this.resources.dotUniforms.uniforms.uAngle=e}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(e){this.resources.dotUniforms.uniforms.uGrayScale=e?1:0}};Kf(Zf,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Qf=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,Jf=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,ed=Object.defineProperty,td=(n,e,t)=>e in n?ed(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,rt=(n,e,t)=>(td(n,typeof e!="symbol"?e+"":e,t),t);const nd=class Do extends L{constructor(e){e={...Do.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Jf,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Qf,name:"drop-shadow-filter"});super({gpuProgram:t,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:e.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},resolution:e.resolution}),rt(this,"uniforms"),rt(this,"shadowOnly",!1),rt(this,"_color"),rt(this,"_blurFilter"),rt(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new Y,this.color=e.color??0,this._blurFilter=new Ao({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),this._basePass=new L({gpuProgram:B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:U.from({vertex:G,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,e)}apply(e,t,r,i){const s=pe.getSameSizeTexture(t);e.applyFilter(this,t,s,!0),this._blurFilter.apply(e,s,r,i),this.shadowOnly||e.applyFilter(this._basePass,t,r,!1),pe.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){const e=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=e+this.blur*2+this.quality*4}};rt(nd,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var rd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,id=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,sd=Object.defineProperty,od=(n,e,t)=>e in n?sd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ae=(n,e,t)=>(od(n,typeof e!="symbol"?e+"":e,t),t);const ad=class Go extends L{constructor(e){e={...Go.defaults,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:id,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:rd,name:"glitch-filter"}),i=document.createElement("canvas");i.width=4,i.height=e.sampleSize??512;const s=new M({source:new ft({resource:i})});super({gpuProgram:t,glProgram:r,resources:{glitchUniforms:{uSeed:{value:(e==null?void 0:e.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(e==null?void 0:e.fillMode)??0,type:"f32"},uOffset:{value:(e==null?void 0:e.offset)??100,type:"f32"},uDirection:{value:(e==null?void 0:e.direction)??0,type:"f32"},uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),Ae(this,"uniforms"),Ae(this,"average",!1),Ae(this,"minSize",8),Ae(this,"sampleSize",512),Ae(this,"_canvas"),Ae(this,"texture"),Ae(this,"_slices",0),Ae(this,"_sizes",new Float32Array(1)),Ae(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=i,this.texture=s,Object.assign(this,e)}apply(e,t,r,i){const{width:s,height:o}=t.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,e.applyFilter(this,t,r,i)}_randomizeSizes(){const e=this._sizes,t=this._slices-1,r=this.sampleSize,i=Math.min(this.minSize/r,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<t;a++){const l=o/(s-a),c=Math.max(l*(1-Math.random()*.6),i);e[a]=c,o-=c}e[t]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<t;a++){const l=Math.max(o*s*Math.random(),i);e[a]=l,s-=l}e[t]=s}this.shuffle()}shuffle(){const e=this._sizes,t=this._slices-1;for(let r=t;r>0;r--){const i=Math.random()*r>>0,s=e[r];e[r]=e[i],e[i]=s}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,t=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,e);let i,s=0;for(let o=0;o<this._slices;o++){i=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*e,l=i>0?i:0,c=i<0?-i:0;r.fillStyle=`rgba(${l}, ${c}, 0, 1)`,r.fillRect(0,s>>0,e,a+1>>0),s+=a}t.source.update()}set sizes(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._sizes[r]=e[r]}get sizes(){return this._sizes}set offsets(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._offsets[r]=e[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this._sizes=new Float32Array(e),this._offsets=new Float32Array(e),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}get fillMode(){return this.uniforms.uFillMode}set fillMode(e){this.uniforms.uFillMode=e}get direction(){return this.uniforms.uDirection/lt}set direction(e){this.uniforms.uDirection=e*lt}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}destroy(){var e;(e=this.texture)==null||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Ae(ad,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var ld=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,ud=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,cd=Object.defineProperty,hd=(n,e,t)=>e in n?cd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ar=(n,e,t)=>(hd(n,typeof e!="symbol"?e+"":e,t),t);const No=class Vo extends L{constructor(e){e={...Vo.DEFAULT_OPTIONS,...e};const t=e.distance??10,r=e.quality??.1,i=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:ud,entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:ld.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/t).toFixed(7)}`).replace(/__DIST__/gi,`${t.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:i,glProgram:s,resources:{glowUniforms:{uDistance:{value:t,type:"f32"},uStrength:{value:[e.innerStrength,e.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:(e==null?void 0:e.knockout)??!1?1:0,type:"f32"}}},padding:t}),Ar(this,"uniforms"),Ar(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new Y,this.color=e.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};Ar(No,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});let fd=No;var dd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,md=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,pd=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,gd=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,xd=Object.defineProperty,vd=(n,e,t)=>e in n?xd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,it=(n,e,t)=>(vd(n,typeof e!="symbol"?e+"":e,t),t);const yd=class Xo extends L{constructor(e){e={...Xo.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:md.replace("${PERLIN}",gd),entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:dd.replace("${PERLIN}",pd),name:"god-ray-filter"});super({gpuProgram:t,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:e.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),it(this,"uniforms"),it(this,"time",0),it(this,"_angleLight",[0,0]),it(this,"_angle",0),it(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){const s=t.frame.width,o=t.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get angle(){return this._angle}set angle(e){this._angle=e;const t=e*lt;this._angleLight[0]=Math.cos(t),this._angleLight[1]=Math.sin(t)}get parallel(){return this.uniforms.uParallel>.5}set parallel(e){this.uniforms.uParallel=e?1:0}get center(){return this._center}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._center=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get gain(){return this.uniforms.uRay[0]}set gain(e){this.uniforms.uRay[0]=e}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(e){this.uniforms.uRay[1]=e}get alpha(){return this.uniforms.uRay[2]}set alpha(e){this.uniforms.uRay[2]=e}};it(yd,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var _d=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,bd=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,Ad=Object.defineProperty,Sd=(n,e,t)=>e in n?Ad(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Sr=(n,e,t)=>(Sd(n,typeof e!="symbol"?e+"":e,t),t);const Cd=class Yo extends L{constructor(e){e={...Yo.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:bd,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:_d,name:"hsl-adjustment-filter"});super({gpuProgram:t,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:e.colorize?1:0,type:"f32"},uAlpha:{value:e.alpha,type:"f32"}}}}),Sr(this,"uniforms"),Sr(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=e.hue}get hue(){return this._hue}set hue(e){this._hue=e,this.resources.hslUniforms.uniforms.uHsl[0]=e*(Math.PI/180)}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(e){this.resources.hslUniforms.uniforms.uHsl[1]=e}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(e){this.resources.hslUniforms.uniforms.uHsl[2]=e}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(e){this.resources.hslUniforms.uniforms.uColorize=e?1:0}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(e){this.resources.hslUniforms.uniforms.uAlpha=e}};Sr(Cd,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var wd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,Td=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,Pd=Object.defineProperty,Id=(n,e,t)=>e in n?Pd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Cr=(n,e,t)=>(Id(n,typeof e!="symbol"?e+"":e,t),t);const Fd=class Wo extends L{constructor(...e){let t=e[0]??{};if(Array.isArray(t)||"x"in t&&"y"in t||t instanceof Z){R("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in t?t.x:t[0],o="y"in t?t.y:t[1];t={velocity:{x:s,y:o}},e[1]!==void 0&&(t.kernelSize=e[1]),e[2]!==void 0&&(t.offset=e[2])}t={...Wo.DEFAULT_OPTIONS,...t};const r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Td,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:wd,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:t.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(t.kernelSize??5),type:"f32"},uOffset:{value:t.offset,type:"f32"}}}}),Cr(this,"uniforms"),Cr(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,t)}get velocity(){return this.uniforms.uVelocity}set velocity(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uVelocity=e,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(e){this.velocity.x=e,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(e){this.velocity.y=e,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Cr(Fd,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var Md=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,zd=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,Ed=Object.defineProperty,Od=(n,e,t)=>e in n?Ed(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ln=(n,e,t)=>(Od(n,typeof e!="symbol"?e+"":e,t),t);const Rd=class Ho extends L{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(R("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),t={replacements:t},e[1]&&(t.tolerance=e[1]),e[2]&&(t.maxColors=e[2])),t={...Ho.DEFAULT_OPTIONS,...t};const r=t.maxColors??t.replacements.length,i=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:zd.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:Md.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:i,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:t.tolerance,type:"f32"}}}}),ln(this,"uniforms"),ln(this,"_replacements",[]),ln(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=t.replacements}set replacements(e){const t=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,i=e.length,s=new Y;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);t[i*3]=-1;let o,a,l;for(let c=0;c<i;c++){const u=e[c];s.setValue(u[0]),[o,a,l]=s.toArray(),t[c*3]=o,t[c*3+1]=a,t[c*3+2]=l,s.setValue(u[1]),[o,a,l]=s.toArray(),r[c*3]=o,r[c*3+1]=a,r[c*3+2]=l}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set epsilon(e){R("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return R("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};ln(Rd,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var Bd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,Ud=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,Ld=Object.defineProperty,kd=(n,e,t)=>e in n?Ld(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,wr=(n,e,t)=>(kd(n,typeof e!="symbol"?e+"":e,t),t);const Dd=class jo extends L{constructor(e){e={...jo.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Ud,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:Bd,name:"old-film-filter"});super({gpuProgram:t,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:e.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),wr(this,"uniforms"),wr(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,e.applyFilter(this,t,r,i)}get sepia(){return this.uniforms.uSepia}set sepia(e){this.uniforms.uSepia=e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get scratch(){return this.uniforms.uScratch[0]}set scratch(e){this.uniforms.uScratch[0]=e}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(e){this.uniforms.uScratch[1]=e}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(e){this.uniforms.uScratch[2]=e}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(e){this.uniforms.uVignetting[0]=e}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(e){this.uniforms.uVignetting[1]=e}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(e){this.uniforms.uVignetting[2]=e}};wr(Dd,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var Gd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,Nd=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Vd=Object.defineProperty,Xd=(n,e,t)=>e in n?Vd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,$e=(n,e,t)=>(Xd(n,typeof e!="symbol"?e+"":e,t),t);const $r=class je extends L{constructor(...e){let t=e[0]??{};typeof t=="number"&&(R("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),t={thickness:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.quality=e[2]),e[3]!==void 0&&(t.alpha=e[3]),e[4]!==void 0&&(t.knockout=e[4])),t={...je.DEFAULT_OPTIONS,...t};const r=t.quality??.1,i=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Nd,entryPoint:"mainFragment"}}),s=U.from({vertex:G,fragment:Gd.replace(/\$\{ANGLE_STEP\}/,je.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:i,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:t.knockout?1:0,type:"f32"}}}}),$e(this,"uniforms"),$e(this,"_thickness"),$e(this,"_quality"),$e(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=je.getAngleStep(r),this._color=new Y,this.color=t.color??0,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uThickness[0]=this.thickness/t.source.width,this.uniforms.uThickness[1]=this.thickness/t.source.height,e.applyFilter(this,t,r,i)}static getAngleStep(e){return parseFloat((Math.PI*2/Math.max(e*je.MAX_SAMPLES,je.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(e){this._quality=e,this.uniforms.uAngleStep=je.getAngleStep(e)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};$e($r,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});$e($r,"MIN_SAMPLES",1);$e($r,"MAX_SAMPLES",100);var Yd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,Wd=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,Hd=Object.defineProperty,jd=(n,e,t)=>e in n?Hd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,un=(n,e,t)=>(jd(n,typeof e!="symbol"?e+"":e,t),t);const $d=class $o extends L{constructor(...e){let t=e[0]??{};if(typeof t=="number"){if(R("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),t={angle:t},e[1]){const s="x"in e[1]?e[1].x:e[1][0],o="y"in e[1]?e[1].y:e[1][1];t.center={x:s,y:o}}e[2]&&(t.kernelSize=e[2]),e[3]&&(t.radius=e[3])}t={...$o.DEFAULT_OPTIONS,...t};const r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Wd,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:Yd,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uKernelSize:{value:t.kernelSize,type:"i32"},uRadius:{value:t.radius,type:"f32"}}}}),un(this,"uniforms"),un(this,"_angle"),un(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,t)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e<0||e===1/0?-1:e}};un($d,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var qd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,Kd=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,Zd=Object.defineProperty,Qd=(n,e,t)=>e in n?Zd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Tr=(n,e,t)=>(Qd(n,typeof e!="symbol"?e+"":e,t),t);const Jd=class qo extends L{constructor(e){e={...qo.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Kd,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:qd,name:"reflection-filter"});super({gpuProgram:t,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:e.mirror?1:0,type:"f32"},uBoundary:{value:e.boundary,type:"f32"},uAmplitude:{value:e.amplitude,type:"vec2<f32>"},uWavelength:{value:e.waveLength,type:"vec2<f32>"},uAlpha:{value:e.alpha,type:"vec2<f32>"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Tr(this,"uniforms"),Tr(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get mirror(){return this.uniforms.uMirror>.5}set mirror(e){this.uniforms.uMirror=e?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(e){this.uniforms.uBoundary=e}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(e){this.uniforms.uAmplitude[0]=e[0],this.uniforms.uAmplitude[1]=e[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(e){this.uniforms.uAmplitude[0]=e}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(e){this.uniforms.uAmplitude[1]=e}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(e){this.uniforms.uWavelength[0]=e[0],this.uniforms.uWavelength[1]=e[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(e){this.uniforms.uWavelength[0]=e}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(e){this.uniforms.uWavelength[1]=e}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(e){this.uniforms.uAlpha[0]=e[0],this.uniforms.uAlpha[1]=e[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(e){this.uniforms.uAlpha[0]=e}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(e){this.uniforms.uAlpha[1]=e}};Tr(Jd,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var em=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,tm=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,nm=Object.defineProperty,rm=(n,e,t)=>e in n?nm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ko=(n,e,t)=>(rm(n,typeof e!="symbol"?e+"":e,t),t);const im=class Zo extends L{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(R("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),t={red:t},e[1]!==void 0&&(t.green=e[1]),e[2]!==void 0&&(t.blue=e[2])),t={...Zo.DEFAULT_OPTIONS,...t};const r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:tm,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:em,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}}}}),Ko(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,t)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}};Ko(im,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var sm=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,om=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,am=Object.defineProperty,lm=(n,e,t)=>e in n?am(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pr=(n,e,t)=>(lm(n,typeof e!="symbol"?e+"":e,t),t);const um=class Qo extends L{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(R("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),t={center:t,...e[1]},e[2]!==void 0&&(t.time=e[2])),t={...Qo.DEFAULT_OPTIONS,...t};const r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:om,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:sm,name:"shockwave-filter"});super({gpuProgram:r,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:t.time,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uSpeed:{value:t.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Pr(this,"uniforms"),Pr(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get speed(){return this.uniforms.uSpeed}set speed(e){this.uniforms.uSpeed=e}get amplitude(){return this.uniforms.uWave[0]}set amplitude(e){this.uniforms.uWave[0]=e}get wavelength(){return this.uniforms.uWave[1]}set wavelength(e){this.uniforms.uWave[1]=e}get brightness(){return this.uniforms.uWave[2]}set brightness(e){this.uniforms.uWave[2]=e}get radius(){return this.uniforms.uWave[3]}set radius(e){this.uniforms.uWave[3]=e}};Pr(um,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var cm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,hm=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,fm=Object.defineProperty,dm=(n,e,t)=>e in n?fm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,cn=(n,e,t)=>(dm(n,typeof e!="symbol"?e+"":e,t),t);const mm=class Jo extends L{constructor(...e){let t=e[0]??{};if(t instanceof M&&(R("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),t={lightMap:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.alpha=e[2])),t={...Jo.DEFAULT_OPTIONS,...t},!t.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:hm,entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:cm,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:i,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:t.lightMap.source,uMapSampler:t.lightMap.source.style}}),cn(this,"uniforms"),cn(this,"_color"),cn(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new Y,this.color=t.color??0,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,r,i)}get lightMap(){return this._lightMap}set lightMap(e){this._lightMap=e,this.resources.uMapTexture=e.source,this.resources.uMapSampler=e.source.style}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};cn(mm,"DEFAULT_OPTIONS",{lightMap:M.WHITE,color:0,alpha:1});var pm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uTexSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uTexSize - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uTexSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,gm=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uTexSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uTexSize = tiltShiftUniforms.uTexSize;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uTexSize - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uTexSize * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,xm=Object.defineProperty,vm=(n,e,t)=>e in n?xm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ir=(n,e,t)=>(vm(n,typeof e!="symbol"?e+"":e,t),t);const ym=class ea extends L{constructor(e){e={...ea.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:gm,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:pm,name:"tilt-shift-axis-filter"});super({gpuProgram:t,glProgram:r,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([e.blur??100,e.gradientBlur??600]),type:"vec2<f32>"},uStart:{value:e.start,type:"vec2<f32>"},uEnd:{value:e.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([30,30]),type:"vec2<f32>"},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:"vec2<f32>"}}}}),Ir(this,"uniforms"),Ir(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=e.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const e=this.uniforms.uEnd,t=this.uniforms.uStart,r=e.x-t.x,i=e.y-t.y,s=Math.sqrt(r*r+i*i),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-i/s:r/s,this.uniforms.uDelta[1]=o?r/s:i/s}};Ir(ym,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var _m=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,bm=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,Am=Object.defineProperty,Sm=(n,e,t)=>e in n?Am(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ta=(n,e,t)=>(Sm(n,typeof e!="symbol"?e+"":e,t),t);const Cm=class na extends L{constructor(e){e={...na.DEFAULT_OPTIONS,...e};const t=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:bm,entryPoint:"mainFragment"}}),r=U.from({vertex:G,fragment:_m,name:"twist-filter"});super({gpuProgram:t,glProgram:r,resources:{twistUniforms:{uTwist:{value:[e.radius??0,e.angle??0],type:"vec2<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},...e}),ta(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(e){this.uniforms.uTwist[0]=e}get angle(){return this.uniforms.uTwist[1]}set angle(e){this.uniforms.uTwist[1]=e}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e}};ta(Cm,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var wm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,Tm=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,Pm=Object.defineProperty,Im=(n,e,t)=>e in n?Pm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ra=(n,e,t)=>(Im(n,typeof e!="symbol"?e+"":e,t),t);const Fm=class ia extends L{constructor(e){e={...ia.DEFAULT_OPTIONS,...e};const t=e.maxKernelSize??32,r=B.from({vertex:{source:N,entryPoint:"mainVertex"},fragment:{source:Tm.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),entryPoint:"mainFragment"}}),i=U.from({vertex:G,fragment:wm.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:e.strength,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ra(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,e)}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(e){this.uniforms.uRadii[0]=e}get radius(){return this.uniforms.uRadii[1]}set radius(e){this.uniforms.uRadii[1]=e<0||e===1/0?-1:e}};ra(Fm,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let Fr=7;function Mm(n,e,t,r){const i=Ce.from("bullet");i.anchor.set(.5),i.position.set(e.x,e.y),i.rotation=t,i.filters=[new fd({color:255,distance:15,outerStrength:1,innerStrength:.5,quality:.5})],matchMedia("(max-width: 600px)").matches&&(i.scale.set(.5),Fr=5),n.stage.addChild(i),r.push({bullet:i,enemy:!1})}function zm(n,e){for(let t=0;t<e.length;t++){const r=e[t].bullet;r.position.x+=Fr*Math.cos(r.rotation),r.position.y+=Fr*Math.sin(r.rotation),(r.position.x<0||r.position.x>n.screen.width||r.position.y<0||r.position.y>n.screen.height)&&n.stage.removeChild(r)}}let Mr=!1,Se=5,Ie=0,Fe=0,zr=new Date().getTime();function Em(){Se=5,Ie=0,Fe=0,zr=new Date().getTime()}function Om(){return Mr}function Rm(n,e){Mr=!0;const t=setInterval(()=>{n.alpha=n.alpha===1?.5:1},200);setTimeout(()=>{Mr=!1,clearInterval(t),n.alpha=1},e*e*1e3)}function ji(n){const e=Ce.from("ship");e.position.set(n.screen.width/2,n.screen.height/2),e.anchor.set(.5);const t=Ce.from("shiptrail");return t.anchor.set(.5),t.position.set(-e.width/2-10,0),t.visible=!1,e.addChild(t),matchMedia("(max-width: 600px)").matches&&(e.scale.set(.5),Se=2.5),n.stage.addChild(e),e}function Bm(n,e,t,r){if(e.visible!==!1&&(t.get("ArrowUp")||t.get("w")?(K.play("thrust"),e.children[0].visible=!0,Ie+=.1*Math.cos(e.rotation),Fe+=.1*Math.sin(e.rotation),Ie>Se&&(Ie=Se),Fe>Se&&(Fe=Se),Ie<-Se&&(Ie=-Se),Fe<-Se&&(Fe=-Se)):(K.stop("thrust"),e.children[0].visible=!1,Ie*=.99,Fe*=.99),(t.get("ArrowDown")||t.get("s"))&&(Ie*=.97,Fe*=.97),(t.get("ArrowLeft")||t.get("a"))&&(e.rotation-=.03),(t.get("ArrowRight")||t.get("d"))&&(e.rotation+=.03),e.rotation%=Math.PI*2,e.position.x+=Ie,e.position.y+=Fe,e.position.x>n.screen.width+e.width/2&&(e.position.x=-e.width/2),e.position.x<-e.width/2&&(e.position.x=n.screen.width+e.width/2),e.position.y>n.screen.height+e.height/2&&(e.position.y=-e.height/2),e.position.y<-e.height/2&&(e.position.y=n.screen.height+e.height/2),t.get(" ")&&new Date().getTime()-zr>300)){zr=new Date().getTime();const i=new ne(e.width/2,0);Mm(n,e.toGlobal(i),e.rotation,r),K.play("shoot")}}function Um(n){n.visible=!1,K.play("shipExplosion")}let sa=5;const Lm=4,km=2,Dm=2,oa=["big","med","small"],Gm=["Grey","Brown"];let aa=.8;function Nm(){sa++}function la(n,e){for(let t=0;t<sa;t++){const r=ua(0),i=100,s=Math.random()*(n.screen.width/2-i),o=Math.random()*(n.screen.height/2-i);r.asteroid.position.set(Math.random()>.5?s+n.screen.width/2+i:s,Math.random()>.5?o+n.screen.height/2+i:o),n.stage.addChild(r.asteroid),e.push(r)}}function ua(n,e){let t=e||Gm[Math.floor(Math.random()*2)],r=oa[n],i;n==0?i=Math.floor(Math.random()*Lm):n==1?i=Math.floor(Math.random()*km):i=Math.floor(Math.random()*Dm);const s=Ce.from(`meteor${t}_${r}${i+1}`);s.anchor.set(.5),s.rotation=Math.random()*Math.PI*2;let o=Math.random()*Math.PI*2,a=Math.random()*.01-.005;return matchMedia("(max-width: 600px)").matches&&(s.scale.set(.5),aa=.4),{asteroid:s,size:n,heading:o,spin:a,color:t}}function Vm(n,e){for(let t=0;t<e.length;t++){const r=e[t].asteroid,i=e[t].heading,s=aa+e[t].size*1.2;r.position.x+=s*Math.cos(i),r.position.y+=s*Math.sin(i),r.position.x>n.screen.width+r.width/2&&(r.position.x=-r.width/2),r.position.x<-r.width/2&&(r.position.x=n.screen.width+r.width/2),r.position.y>n.screen.height+r.height/2&&(r.position.y=-r.height/2),r.position.y<-r.height/2&&(r.position.y=n.screen.height+r.height/2),r.rotation+=e[t].spin%(Math.PI*2)}}function ca(n,e,t){const r=e[t].asteroid,i=e[t].size,s=e[t].color,o={x:r.position.x,y:r.position.y},a=[0,Math.PI];let l=Math.random()*Math.PI*2;if(i<oa.length-1)for(let c=0;c<2;c++){const u=ua(i+1,s);u.heading=l+a[c],u.asteroid.position.set(o.x,o.y),n.stage.addChild(u.asteroid),e.push(u)}n.stage.removeChild(r),e.splice(t,1)}function Xm(n,e){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function ha(n,e){const t=n.getGlobalPosition(),r=e.getGlobalPosition(),i=n.height/2,s=e.height/2;return Xm(t,r)<i+s}let Me,ze;function Ym(n){const e=[],t=M.from("asteroidexplosionbase");for(let s=1;s<=64;s++)e.push(new M({source:t.source,frame:new Q(s%8*512,Math.floor(s/8)*512,512,512)}));Me=new Bt(e),Me.anchor.set(.5),Me.loop=!1,Me.visible=!1;const r=[],i=M.from("shipexplosionbase");for(let s=1;s<=64;s++)r.push(new M({source:i.source,frame:new Q(s%8*512,Math.floor(s/8)*512,512,512)}));ze=new Bt(r),ze.anchor.set(.5),ze.loop=!1,ze.visible=!1,matchMedia("(max-width: 600px)").matches&&(Me.scale.set(.5),ze.scale.set(.5)),n.stage.addChild(Me),n.stage.addChild(ze)}function Wm(n,e){Me.visible=!0,Me.position.set(n,e),Me.gotoAndPlay(0)}function Hm(n,e){ze.visible=!0,ze.position.set(n,e),ze.gotoAndPlay(0)}let Er=3;function jm(){Er=3}function $m(n,e,t,r){let i=qm(n,e,t);i&&Er--;let s=Km(n,t,r);return t.length===0&&(Nm(),la(n,t)),{score:s,lives:Er,killed:i}}function qm(n,e,t){if(e.visible&&!Om())for(let r=0;r<t.length;r++){const i=t[r].asteroid;if(ha(i,e))return Um(e),ca(n,t,r),Hm(e.position.x,e.position.y),K.stop("thrust"),K.play("shipExplosion"),!0}return!1}function Km(n,e,t){for(let r=0;r<e.length;r++){const i=e[r].asteroid,s=e[r].size;for(let o=0;o<t.length;o++){const a=t[o].bullet;if(ha(i,a))switch(n.stage.removeChild(a),t.splice(o,1),ca(n,e,r),Wm(i.position.x,i.position.y),K.play("explosion"),s){case 0:return 20;case 1:return 40;case 2:return 100}}}return 0}const Zm="/Asteroids/assets/ship-DmiZihvo.png",Qm="/Asteroids/assets/shiptrail-BdxqDnV6.png",Jm="/Asteroids/assets/bullet-sXJQSAKD.png",ep="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RjZBOEVCMTg4RDAxMUUzQTUxQzgyRDhCMjk2RDg0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RjZBOEVCMjg4RDAxMUUzQTUxQzgyRDhCMjk2RDg0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVGNkE4RUFGODhEMDExRTNBNTFDODJEOEIyOTZEODQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVGNkE4RUIwODhEMDExRTNBNTFDODJEOEIyOTZEODQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+u2NvKAAABkhJREFUeNrs3XFP3DYYwOHYDoU/p37/7wkVF3txQq9l7Qql5cj5fR4kxKZJZTn/zs41idPnfz5PEFV2CBAACAAEAAIAAYAAQABXL00pZ6kTdgZI01xmLzY/GnxYpJTy+u5fcinlpt3UVletNS88YWaA9HUJtP3gJSfQDLC+2S/L0mpbp4LHx0evNxHPAdrUTsvJi03UAFbVup+oAazW018vNnEDAAGAAEAAIAAQAAIAAYAAQAAgABAACAAEAAIAAYAAQAAgABAACAAEAAIAAYAAQAAgABAACIArHCUpC4Cooz/3PaYEQFB9gykzgCk+eAErAQz6+m5KKfYS/ql+ZLYChvy/s3tu30BpfZNblsWhCLgEEkBnA6Vn8+G07a68r3u2uXH98fbTbeuHqU5t2jZb7l9tagIYZRLguwb6Jz/7t/RUwlzmmmuqqW3WSFoaYPwLgB/eC5a2LPXbgvDu9m5O8/39/ff/0kkwgZIYY7UjAN54gjTwOZIlEC8FsEr9mxmAqEugcT8kEACvOC2uiwCIG8Co6x8B8NoGBAACAAGAAEAAIAAQAAiAXxr1rkIBIAAB8GIAkwAEEPnt3/g/HvcDvP+7/jbu9ztr1+/nW6vciCyAAAHklJ4q6D/0Zwz2AtrYF9kLgCfnC4n7QxZKXpbFuHcOEJF3fQGIwCEQQNjB34Z9sogA+L3zAQQAAgABgABgrABsOkTcAMbeVxABvGDsTXUQwKsKcP8HQQMYe19BBGAJxCD+wuXQ0fYVRAA/aeDZvoJ55H0FEcAzP99XcB52X0GcA7ychNUOcQMYe19BLIFeCmDofQUxA7xiCeTmVyIH4PSX0AFY/xA3gMljz/hQr78MxwULDDj65zILgKCjv9+NUsp+OcKL/71HIzLQgr7fiLUO/rLPAOuJ6Gk5/fp0VACMo272TyAfvjxYAhFR/xR+ee2n8AJgxACqAIi9FhIACAAEAAIAAYAAQABcgQs8W00AHHf0nx+x835/imuBOKjzLSXvem+JGYDryEAAGP0CAAGAAEAAIAAQAAgABAACAAEc/NBnB18AUe17aToOH87VoB8w9Pt2miXPeV4Pf99OqlYP0zYDhIpg20u85P0Hx8MMEMj+4L6+cXJKj4+PDogZIGgGp+XkOAggbgCtWvcLIDBbKQsABAACAAGAAEAAIAAQAAgABAACGItroQUQvQAEEPS9f9/9IScvwUdyQ8zHaPtXba4JNQPEzgABxA3AvfACAAGAAEAAIAAQAAgABAACAAGAAEAAIAAQAAgA3iOAvpWV3TyJOwOkaS5um2RY/zu4z7t5llJu2o3dPIk3A6SvS6Df381z7cfB5YpngD/ZzXOfPdZktp3gPPWAKwzgnMEbdvPsK6U0LXVxfLnuk+A37+bpbIERApjeupunlQ+DBAACAAHAH0sbARA1gDWBSQCEDSAfa1cQ1/lwqZXPfkHBtv4pubTtM/an58SbAQix+tne/M9TQDrAHlFmAC6hbfqAy/P6ln+cqwQEwEXVeqy/IRUAF54LjrUvjnMALj7+zQBEPhk41O9jBiA0ASAAEAAIAAQAAgABgABAACAAEAAIAAQAAgABgABAACAAEAAIAARwHPauRAAQMoCjPZkeAVy6gOOP/76/Mhc0Bxj2T4+l37+VUs6PpT/cU8o29WSDTTPAXy9gev58+nTQ39QMYAb4y877kKxjq5W2LMuhW819mrLNuBngHUo43prnP9blWd4KMC4F8C5TwXTsN9Y+AWRLIEug95wEDjTc9/PynPZ3/f0Eff1+++m21Vanuv6yddX/4fDtCuAqHG1/nnW498999m/pqYS5zDXXVNO+r1bavox/AQy4JFvWc/Lvtou7u72b03x/f3+cPeScA3DRJKx2BBDXvuJ3HAQQNYBWdw6FAKIugfwVmABCnxYvTn8vyqdAxwqgf/yPGSByAw6CAEAAIAAQAAgABAACAAGAAEAAIAAQAAgABAACAAGAAHhxHER9KrUAmPanMgqAWIP+/EPOuT+YOkd8MLWb4oMueNK+YVrqP6+jfy59JNRaT8sp1IOJBBBRbbXksj+CZZmenk/68OXBEogoWv32+InIzyMSQNxJ4FkAVQBE7iHqA0kFQOzPAxwCBAACAAGAAEAAIAAY278CDADtXWvcJbl4xAAAAABJRU5ErkJggg==",tp="/Asteroids/assets/asteroidExplosionSheet-DpDkGmJy.png",np="/Asteroids/assets/shipExplosionSheet-eLsW6xh2.png",rp="/Asteroids/assets/meteorBrown_big1-NvcepZR1.png",ip="/Asteroids/assets/meteorBrown_big2-XHQccYHW.png",sp="/Asteroids/assets/meteorBrown_big3-pt0h5SC1.png",op="/Asteroids/assets/meteorBrown_big4-iNwQcBXX.png",ap="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAADZElEQVR42s2Z32oTQRTG8wY+guCdeKEkqWL9U5O0ltrY1NQSkpZardVarVEQQQQrqKgoVlQUr/oIfQQfoY+QR/ARxvxCzjLZZLNnZrOpC99N2c5+c+Y73zlzksk4PvXCxJSN6uTJ45n/8Vkp5f6sTufNMPCOoFHM7rexK6gV8hXZZO3iqdOpEa0X83uQWZ89azbnzwdYm5kwcRvQoFHMH1qbPGBDXkSJCAtC7GVjxrxZnxuI12uz5kW9FODp0pRpVi8HsDfJpuM24Cyx6dyJYyvF7F/++dlyIZJoUtib3F640I12dtdLp1vlydSIhvG8Vgz0rybKzkSnHPG4yBJd0bFOp+1sFe0M02lakG+rdNqOaouXSYxxEwWSgLEWh3XwIll7FEQB34bDUAtrlHJNsSkXnX64Wza/mjfN1+1F835jPjHZncVLwx2BkItNIXLtwu/uXOsQ/f1kOcD3R1Xz6d51b7LIrxPZdjGK0Gn+kBfYlXbRt7fnzI+dag9RGz8fL5kvW5XOhnwcYaB9STndmDvntCjHHkU0DN5FLpp1caCuDFqR5fTV6lU10c/3F9REw9H2si/qr085/bhZ9iLqQrbPvmjj+AP1WEuUbA8nlAtIPhf74uQ7ZCXU2uOPSyitdl0cIbAvcQCtBL49vJGIKMAdNN+ixeyS3e8pAtquiiNMSlbrv332RYKJFDQVK0liCbT2hTQ7ZNsGYPUCblIgm5OQdSkQffZVv3LmlktB4BiTkHUpOnDqaWgotS6ugCP4WpfWYyPty24LyUDNInsPKqnaVqR9+UgB3bkWAm1i2SCPumQPerou1wKh8VxfkrHdl6sUIDGKDmsYsNOB9zFXKYBw6YWka+86jKh1Y2j1NeCuUhAbGyVJOX57atPjBr5SkGQbFUmiKRMZmR1E3nBFCuxq3DdaJjH2oE81PpJmfFzDDSQn5i+Zrx7KSUPucnH0BXKTaBIkukCvEWeaUuDU7GiSKyS435Q7xTGnlFCJ5sBMd3lkgigRRhIuN98oO5IuSgYY3tEc5Azh3xH4GNF2GS3Z5i4G7z2Gj3vIzO6PGC35IEmBH8aNmbAj29xZZ2TR1Py0JG5hywQd2jIhmtzrVOae9kN0kIlciQRkOMQT2VGaDzIhWWyZOJv7UTzYELok6qNe+x8zpG5visyRkAAAAC10RVh0U29mdHdhcmUAYnkuYmxvb2RkeS5jcnlwdG8uaW1hZ2UuUE5HMjRFbmNvZGVyqAZ/7gAAAABJRU5ErkJggg==",lp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAoCAYAAABq13MpAAAC/0lEQVR42s2ZbWoTQRjHcwOPIPhN/KAkqWJ9qdm0lti0qaklJC21Wqu12kZBhCJYQUVFsaKi+KlH6BE8gkfwCB5h3P/EZxg3m9lnZmenXXhIacLsb2b+z9tMqXQIT7c2NtG9cuZmp1ZtlY7aQ3C9qLy7VK/8jD9/L09WhW74PjjYZOXEMcD16pW+CU63tcY5sT5zXv69FJX/dC6eOl04XDeq7gEOL8yC22iOi377snjaicSz3pR4udpQtjV/SYFjfC+QtHJZcFi1zbkLI+FMhklhjF5U/ZUbGoOY4Ha6dfF8+SobbpS9WJmWOzIAL+87A8OrMcjK1Jg3OJNhZ/AuCR7Lz3GVy/sYAKtaJKxuWBwVUWLfsYYmDUOfoaBhjxcmlGO2x08ed5JGSGAy7C45JjuiHIY0DI55cKSlkQRXjhmH3UKl8epWQ7y905T2/u6s+LjRkvblYVva5wfX5W+4EYWV6m2k8WZtRsF8798QPx4tsuzT5jx7EZ4s1rJTvY00sJpc0KTt3W+xwSnVo54ZckzMhLaDM1geaBjkwwWn4moo1aMIwheoBUJAwzCGQ0TZ1fUsy0noKBQ0fAG+YZMxIeEhaWBWoaBh37YXWBFFlbFx1ekkDZ/QX7famauNwECLqqKIrTR8QXOiyH+JhipAF2nkhYaWuU5ITYKShas08kDbZMWRVZ+LNChlY3ttgD/cm2OPj8aDZDF01EDScO1OXt++JlN5XmcbnVBSKj38kzpnG00n7d16U4avNGfjyoEMPaixSx903YMmFtth00mnSQZVHRwNhom49IustuvfccGBD3CSjO3qklG6RoCw6lp8gLuYsaLjgLtEFF/duNMxGSqpkOAIAKvTZ3ntlfHEM25xQoF7PRrTwYvqzqkYsj7ryGp2qQ3zDZ5aDPl64BhFgKszar0YKgo8b/ZMFkNezqZN4JQ9AY50i5cjXNnEdf2UNMi9i5720www2Ha6AUiblJfzaNfIgpiKF3PuWZJmnfWKfBC29FuttElhp/JcDv0F77l2kGJdLTgAAAAtdEVYdFNvZnR3YXJlAGJ5LmJsb29kZHkuY3J5cHRvLmltYWdlLlBORzI0RW5jb2RlcqgGf+4AAAAASUVORK5CYII=",up="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACQklEQVR42rVWa0pCQRh1By0h6F/0o1AreppXSyxT00R8YA972sOCCCLIoKKiqCgoWoVLaAktoSW0hOmeK99lbs6dGVEHDv5x7pnvfOd7eDySkxrv780FhwM8wr6+Hk83Tm5maKUY9jMVCiHfFyFveOsmagR8Izs5MKgkQxQFw/uLD5ajo2xzYcxGaXaY6TyEYBL/KAnxWiK7LEXY1WrUFWe5kI2TTJBVU9M2ViMjFilS4UqWD/mq+BMiOc/PSslUqMQnGlGa33Q1CUmJ17ZDBiBKK0LD/yyOzvB/4w94WbtkJDcZS0DmranydrcRYx/VZfZSSbKb9Xkl4UVxrkFoquYgg3VVebtei1pkn0cZG2/7KfawtSglJbc6SgDWVeUNH+fJeLwfptnjdlx4D4o5nIqEqvL2vJtwJSO87i0J7+7ExhuEZhOwCClk6C26cL8ZU5IBTzsJqVPhETKLVE7IpUPoJulp1nA6lSRF6KILeLkOIRwsKw2UnMOhgKgc4E4dwtvygr5TVbKi7lSEstKgnmpPDpWsKHIRiW4TwJSxCIP+RJOsbm7l6xBEyC3kbqWn2k7l++hxOuDa1uBYdBZdIp6saUzRWEJn6FTjpi4jnBgYTSpZdQCnHySnHBPfdQCrZNWJihxJOZMuXSQrLrUygBEV9Uwq8paXJxpXaOqyVQMPo8UKdx1O1DkgRYJ5YooaUlN+8Uv1Rb0SPmhrN0WhYtf8v/rx6yIeZo+eTh1rSJv5JVNxpqh3bRPn1xHYXMsUgvMHbaWtQWCw0OUAAAAtdEVYdFNvZnR3YXJlAGJ5LmJsb29kZHkuY3J5cHRvLmltYWdlLlBORzI0RW5jb2RlcqgGf+4AAAAASUVORK5CYII=",cp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAACKUlEQVR42q1W60oCQRj1DXqEoH/Rj0K3oqu5amFaliWihV3MrpQFEURQQUVFkRBR9MtH8BF6BB+hR+gRJs/mp5M7MzuuLhzYHzvn7Jzv6vF04EmM9nanA4P+jOm9Cvl6ujydfFLjff1EXkVpJej7Wg0ZjEfGNCquhEGeChjxGnkZRM3kPLLhQZaPjrD1maGasLfUkqDo7wkgBfnhwgQ7WfKz83SQXWdn2M16xMLl6rT1AzXhKy3B9NTAGk9eSEyy02TAIidiJ+Bb+knwOYrCSnx8ljK1RUSAC+BZMb0/CJVUEMGn+LQjSNifH6sLSxOLrN2NjXZEFLHORYbVGU3WIoYqsvtclD1sxdhjPsZeduMW8C4T5hKrJLQW4LORAJHP46QST9tzQuGLTJirYS6jM0FfQWWtjiiA70Tn4R4J1xOLil9mra7oR2HZsl/EgRKs3xZ9U2VtK6LA68Gi7TzfNNDp6tYi02TJoyv6vDMvPN/IYm/5n7UoaLeib4cJqa3oarZ6JWthgapUUBbvR0s2weJenN1uRBwz17K1UZ9/N0UHcSp4kKMukTCArD6bm0PaNIq2MYarU1xlycTjbnNWejsCJlEtjt/CbuRGWHvSVIe+cuUgqyGMeLjtuVQeNltlk4aEcdCNMLqa0lYd4VYGOOawlq0yYX5tcZo8rlcVySZREi1gtMoAcAJo9Faj0vbaiTaJ+Ki2QR7K9aSdpZrWU2QnwgCgr+rG8Rc34Ejsu5GljgAAAC10RVh0U29mdHdhcmUAYnkuYmxvb2RkeS5jcnlwdG8uaW1hZ2UuUE5HMjRFbmNvZGVyqAZ/7gAAAABJRU5ErkJggg==",hp="/Asteroids/assets/meteorGrey_big1-V1Ef33eo.png",fp="/Asteroids/assets/meteorGrey_big2-Ds2vpGv3.png",dp="/Asteroids/assets/meteorGrey_big3-C4ketAU-.png",mp="/Asteroids/assets/meteorGrey_big4-DExOpVcJ.png",pp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAADVElEQVR42s1ZW1ITQRTNDlyCS3AJLsEl5I8fXyCWKUxCHrwxMRCICRGJIA/FAsoVsASX4BJcQttnKifVmWRm7u3JBKfq/FBDz+nb5557+yaXUz4vV8pPXTxfLj7O/Y/PUql2v7y6ZuKAd4jFYnWwWKpWiFfF1Wfc5ItC+UlmRO2HWyDzrrZpVtZ3RnhbWTdJG5DAbu43N/mmVL/DhryIIiJYEMQ2213zoXs8FTudvtnY64xQbeybym5rBHeT2HTSBtQSW1goPFoq1/7in+vNdiTRtHA3WdpqBGQhHS+dvt/YzYxoGGutw5H+5Tq1O6NOccTzIovoUscioshWaidOp1mB35bptFj7g5eRGPMmCjABEy0O1oEXkbUPQRTAt8Eh1sKsTl7TpjQ6/fj51Bx9vzOHZz9Msz9ITba83Yx3BIScNgWRSxduHJ0ERPvXv0b4dPHT7J188yYL+QVkbTGarlObfXgBuxIv3Ptiupc3Y0Rd9K5uTfvrZbAhT0e4jyynhfqWalEcexTRMPAu5CJZFw4UkLWJHllOtw96YqL7gwsx0XC0vewL9dennLaOz7yIashO2BfaOPwB9VhKFNkeTigNkHwa+8LJB2QZavHxJySUVLsqR6B90QGkEuicX6ciCsAdJN9Cizm0r8FYEZB2VTjCtGSl/jthX0gwSkFSsdIkFiG1L0gzIGsNwC2xKikgm9OQ1RSICfuyxpvXFAQcYxqymqIDTmMNDUqtyhWsI/hal9RjI+3LbQuRgZJFDk6vMrWtSPvykQJ0py0E0sRygTwCLwRzrOvSFgiJ5/qSTOy+tFIAiVl0WHGAnU69j2mlAIRLL0hqe9c4orwxTLSKPlKgjc2SJI/fndqMuYGvFJhssyKJaHIiw9lB5A2XUsCu5n2jxSTGHfSJxkdsxuc13IDkaP7MfPFQjg256uLoCciN0USQ0AV6jTizlAJOzY0mcgUJ7jflznDMyRLKaE7NdNWkezhBZIQhCc3NN8qO2EVxgOEdzWnOEP4dAR9DtDWjJdfcafDeY/ikB5mJSHOyyBkD/DBpzAQ7cs0d68wsmpKflugWrkygQ1cmiCbudSJzz/oZznDzvBIRyHAQT2VHWT6BTGyyuDJRm/tDPLChob7zs177HzHQqO0MTgKBAAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC",gp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAoCAYAAABq13MpAAAC7klEQVR42s2ZW24TMRSGswOWwBJYAktgCbz1hUspRUQlkyaT3kvCtGlD0lAaWnqBIqhYQZbAEroElmDmNzmWNZnLscfjdqQjRUnk+Wz/52bXanfwvFhpPl5qhE9fNlaf1O7bQ3CvgnZrKQin8efb5dU1oRt+9w62sFB/IOGCcDEPTrd6Z0usrO/8h26Gf5/Xm4+qh2u0IwkXv7AI7t3GrmjtRmItOhSb/aF4PzxW1tzuKXCM7wRSrVwBHFYt2OpmwuUZJiXBg/BPaWgMkge3sTcQ2wcjNlyW7QzGckcwfryDE2tgeDUGedNadwaXZ9gZvGu24otW0JgxBsCqVgmrGxaHdhS+Yy6NmYahT1/QsHZ3Xznms+XGQytp+AQmw+6SY7Ijyl1II8sxXwedm3stjSQ4OSbCbrXSGH0WHz6dSts7+Sr6Xy6lfbz4IW1wfi3/w40orFRvIo3eeKJgjr7diPH1b5Ydnn1nL0Kn1y9O9SbSwGpyQZN2cHrFBlepPq5n5hwTM6Ht4AxWBhoG+XDBVXGVTPUogvADagEf0DCMYZzqdcekchI68gUNX4BvmGRMSHhOGpiVL2jY6OoXK6IobcdVp5U0XEIPL38WrjYCAy2qiiKm0nAFzYkieqJRFaCNNMpCQ8tcJ9SahKl11CgLbZIVM6s+G2lQysb2mgDvTy7Y46PxIFnMHTWQNGy7k+7RiUzlZZ0tK6GkVnr4kjpnE00nLTo+k+Er1dmYciBDD5rbpeNLamKxHSaddJpkUNXB0WCYiE2/yGq7AE4rXhp8JhnT1SXTOvPIqGtxAW5juRUdB9wqojjqxq2OyVBJ+QRHAHgbbvLaq9xeMW5xfIG7PRrTwKvqzqkYMj7rKGp2qQ1zDZ5aDLl64BhVgGtt1LSS82kdvGz2TBZDTs6mc8Fn2RPgSLd4OcKVSVzXT0m93LvoaT/NAINtpxuAtEk5OY+2jSyIqXgx554l5YLotlJZmDwIW/qtVtqksFNlLof+AUfqb3Ba1juiAAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC",xp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACM0lEQVR42rVW2VECQRAlA0MwBEMwBEPgjx8PQCwpXK5FbsHllEMEQRHFKikjMARCMARDGPet1VuzsjszFDBVXfuzM6/79evD5xOc44i2fxpLHPIWCET3fLs4YU33R5LXTGbhuP5Fdh7PLELxdIoMb5xEEwdSMEQRTug/eDCaKbBYtmTbRSrLVByxHdL0b3l0prcEVmr32U1n4Gm5Wtu2TLXBUmXDtks9b4EiFSKwIH5CJPlGRwgms3ihQrQHPUVCVMLbTcBgiBJvhbS04RXdEj/As03BiG4S1goYVCXL2+39mPVeF6w1eWOV3lAKWGx2/wBN1hxgkK40b90HC6w//7TtbvrOasMnISip1VkCpnRlecPjPBhv3dkHq4+mrvfAmEOpSKgsb83xzBOMrP08d717lStTPfotQAoZfLtdMAYTKRis8fgiVqqpEWphQjpBlwqgF6XXRsupVKIUobtdgOcqgFCwpDSWDoXCXMvBVKcKYLU/UleqjFbUnQxQVBrUU+3JIaMVRe4GotoEMGXw/pmWPFqh1UutfB0CyFKlSfdaPZWUyvfRdKXu2dagWKuzKALxYCtjisYSOsO2Gjd1GdeJgdEko1XFoPREseqY+J4DWEarSlSkSMqZcOkiWnFpnQGMqKhnUpGvvTzRuEJTF60acIwWK9x1KFHlABQJ5oEpalBN+cWX6ot6JXSw0W6KQsWu+X/149dFOGaPnm0di2ozvyQqMjizs02cX0cgcyVRuJxfqqwPlRY+oG8AAAAtdEVYdFNvZnR3YXJlAGJ5LmJsb29kZHkuY3J5cHRvLmltYWdlLlBORzI0RW5jb2RlcqgGf+4AAAAASUVORK5CYII=",vp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAACH0lEQVR42q1WWU4CQRTkBh7BI3gEj+AR/OPHDcVIkB3ZF4dFwiKCuIAhUeIJPIJH8AgeoZ3q+CYN093TDExSiZiZV9316i2BwBaeo3Bs9ySa2A/F06lgMLIT2OZzHEnsUfBQLD0+j2e+wskbJsL+37cvYgQ/jSUPEPwinl0g0GpwEZepHIvmyuwqU+C/caC1CGWnJyAogidKdZauNVm+0WHlzoBVu0OOUrvHD8CJ7QObEcYyh2LwVMVi2XqLB6fAXsC7jtR2PE9SSImXb6w7YxIZoAInTWR+kSolIZJP+dmEkBAv1hxipbFI2ut8ZSukyHUkW9Q7mqRFDnXB6oMxu72fMGv4xFqPUw78rSJ2jLXqaJIWEN1IAMlg/qlFY/QsJS60uo6xlhxtX/9MJ60JKYD3ZN9DPSJ2jEXFr5LWlLT/tuDyy2KgBJ3bom/qpF2HFOi8zF3fi00Dnc6RFk5TmceUtDl+lX5PLoZZl6RFQfsl7U7flbKiq7nqlaSFBLpSQVn0Zh8uwvZkxqq9B0/nclkF5/KbooN4Fr0dHHUJwwCq+lxtDnaNWq4xhqtTXlVmElHrj5S3I2AS/Tf9H2k38kNsOmkw9LUrB0kNYuTDb88VWp/lOdogAxHjQz/E6GpaWU2I1xngmMNGsmqInbXFa/L4XlVkD8aRbAGjVQaAEgD1Vqi08dqJNon86LZBEdr1ZJOlmtZTuBNpANBXTfP4B5zXkRS5RsaNAAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC",yp="/Asteroids/assets/bgm-CD6RCwd7.wav",_p="/Asteroids/assets/explosion-ChyVh-Qt.wav",bp="/Asteroids/assets/shoot-CKV0J2kI.wav",Ap="/Asteroids/assets/shipexplosion-CqsInv-g.wav",Sp="/Asteroids/assets/thrust-B9O13iNP.wav",X={ship:Zm,shiptrail:Qm,bullet:Jm,background:ep,asteroidexplosionbase:tp,shipexplosionbase:np,meteorBrown_big1:rp,meteorBrown_big2:ip,meteorBrown_big3:sp,meteorBrown_big4:op,meteorBrown_med1:ap,meteorBrown_med2:lp,meteorBrown_small1:up,meteorBrown_small2:cp,meteorGrey_big1:hp,meteorGrey_big2:fp,meteorGrey_big3:dp,meteorGrey_big4:mp,meteorGrey_med1:pp,meteorGrey_med2:gp,meteorGrey_small1:xp,meteorGrey_small2:vp,bgm:yp,explosion:_p,shoot:bp,shipExplosion:Ap,thrust:Sp},ue=new Map;ue.set("ArrowUp",!1);ue.set("ArrowDown",!1);ue.set("ArrowLeft",!1);ue.set("ArrowRight",!1);ue.set("w",!1);ue.set("s",!1);ue.set("a",!1);ue.set("d",!1);ue.set(" ",!1);window.addEventListener("keydown",n=>{ue.has(n.key)&&(n.preventDefault(),ue.set(n.key,!0))});window.addEventListener("keyup",n=>{ue.has(n.key)&&(n.preventDefault(),ue.set(n.key,!1))});async function Cp(){const n=new Ns;return await n.init({background:"#000",resizeTo:window,antialias:!0,autoDensity:!0,resolution:2}),document.getElementById("game-canvas").innerHTML="",document.getElementById("game-canvas").appendChild(n.canvas),console.log("PIXI Application setup complete"),n}async function wp(){const n=[{alias:"ship",src:X.ship},{alias:"shiptrail",src:X.shiptrail},{alias:"bullet",src:X.bullet},{alias:"background",src:X.background},{alias:"asteroidexplosionbase",src:X.asteroidexplosionbase},{alias:"shipexplosionbase",src:X.shipexplosionbase},{alias:"meteorBrown_big1",src:X.meteorBrown_big1},{alias:"meteorBrown_big2",src:X.meteorBrown_big2},{alias:"meteorBrown_big3",src:X.meteorBrown_big3},{alias:"meteorBrown_big4",src:X.meteorBrown_big4},{alias:"meteorBrown_med1",src:X.meteorBrown_med1},{alias:"meteorBrown_med2",src:X.meteorBrown_med2},{alias:"meteorBrown_small1",src:X.meteorBrown_small1},{alias:"meteorBrown_small2",src:X.meteorBrown_small2},{alias:"meteorGrey_big1",src:X.meteorGrey_big1},{alias:"meteorGrey_big2",src:X.meteorGrey_big2},{alias:"meteorGrey_big3",src:X.meteorGrey_big3},{alias:"meteorGrey_big4",src:X.meteorGrey_big4},{alias:"meteorGrey_med1",src:X.meteorGrey_med1},{alias:"meteorGrey_med2",src:X.meteorGrey_med2},{alias:"meteorGrey_small1",src:X.meteorGrey_small1},{alias:"meteorGrey_small2",src:X.meteorGrey_small2}];await Pt.load(n),K.exists("bgm")||K.add("bgm",X.bgm),K.exists("explosion")||K.add("explosion",X.explosion),K.exists("shoot")||K.add("shoot",X.shoot),K.exists("shipExplosion")||K.add("shipExplosion",X.shipExplosion),K.exists("thrust")||K.add("thrust",X.thrust)}async function Tp(){const n=await Cp();await wp(),localStorage.getItem("sound")==="on"?K.unmuteAll():K.muteAll(),K.play("bgm",{loop:!0});const e=M.from("background"),t=new ah({texture:e,width:n.screen.width,height:n.screen.height});n.stage.addChild(t),window.addEventListener("resize",()=>{(t.width<window.innerWidth||t.height<window.innerHeight)&&(t.width=window.innerWidth,t.height=window.innerHeight)}),Ym(n),jm();let r=[],i=[],s=ji(n);la(n,r);let o=0,a=document.getElementById("score");a===null&&(a=document.createElement("span"),a.id="score"),a.innerText=String(o).padStart(5,"0"),document.getElementById("game").appendChild(a);let l=document.getElementById("lives");l===null&&(l=document.createElement("span"),l.id="lives"),l.innerText="LIVES: 3",document.getElementById("game").appendChild(l),n.ticker.add(c=>{c.maxFPS=60,Bm(n,s,ue,i),Vm(n,r),zm(n,i);const u=$m(n,s,r,i);u.score&&(o+=u.score,o=Math.min(o,99999),a.innerText=String(o).padStart(5,"0")),u.killed&&(l.innerText=`LIVES: ${u.lives}`,setTimeout(()=>{Em(),n.stage.removeChild(s),s.destroy(),u.lives>0?(s=ji(n),Rm(s,1.5)):(K.stopAll(),window.dispatchEvent(new Event("gameover")),n.destroy())},2e3))})}const $i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAORJREFUSIntl8EOxCAIRIvx/3959rIkLSsyoKaX5agwD5Wiva5FA4BKnOyCikhKq+2A2nFmF0pgRjhKIA3OnqmXQOpcZlB7xkPYzYdesRWKimk0f9foUZasqOfnaTYF7oZ6/sppmWKJoG4hDeI645Q1hXtaAPAorlXoLN7OlTsXY1sbSGTsrh1d8R98FMz2haMrnhXaA1x9xjDxdu6nc2WuvqqfiEjLdKtoR+RrTFybBVTgkb9y+mgwEgAAJtHpsUXBtFDy6ZO+jTy4ikbzaunvuPICGcWUGggDjwr2tV+YZat2uw/EubAs136w8gAAAABJRU5ErkJggg==",qi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAMxJREFUSIndlsEOxCAIRAfT//9l9rJtDCtWYGyTnVOjlSegCFCUqmpmnbCgIhKy1RjQjFLgKjQFZkDDYBY0BLbQ6GGyOmbGPVWhFzgSQgYUANobUMCEmm18GcyAnhH0bJ3z6cq1ugFvjA7uPe1Btq5v8djCR4/JtlCPctyPbQPf6X8OlwXIV3aueQtY0NG3qupP5ZrBIwXGO1xXgbmDzQyWey6bh5lYzcDyLkeNQMXj0M+s/APB68R8MsP3mNaBZBYx4OnK9VSn4ip7vT7CpIg3fWeMNAAAAABJRU5ErkJggg==",qr=document.getElementById("start"),fa=document.getElementById("information"),Ki=document.getElementById("first-time-overlay"),da=document.getElementById("game"),An=document.getElementById("end"),Pp=document.querySelectorAll(".start-button");Pp.forEach(n=>{n.addEventListener("click",()=>{qr.classList.add("hide"),An.classList.add("hide"),document.documentElement.requestFullscreen(),localStorage.getItem("first-time")!==null||"ontouchstart"in document.documentElement?(Ki.classList.add("hide"),da.classList.remove("hide"),Tp()):(localStorage.setItem("first-time","no"),Ki.classList.remove("hide"))})});window.addEventListener("gameover",()=>{da.classList.add("hide"),An.classList.remove("hide"),document.exitFullscreen();let n=document.getElementById("score").textContent,e=!1;(localStorage.getItem("highscore")===null||n>localStorage.getItem("highscore"))&&(localStorage.setItem("highscore",n),e=!0),e?document.getElementById("hi-score").textContent="New Hi-Score!":document.getElementById("hi-score").textContent="Hi-Score: "+localStorage.getItem("highscore"),document.getElementById("end-score").textContent="Score: "+n});document.querySelectorAll(".info").forEach(n=>{n.addEventListener("click",()=>{qr.classList.add("hide"),An.classList.add("hide"),fa.classList.remove("hide")})});document.getElementById("back").addEventListener("click",()=>{fa.classList.add("hide"),An.classList.add("hide"),qr.classList.remove("hide")});localStorage.getItem("sound")===null&&localStorage.setItem("sound","on");const Ip=document.querySelectorAll(".sound");Ip.forEach(n=>{localStorage.getItem("sound")==="on"?n.innerHTML=`<img src="${$i}" />`:n.innerHTML=`<img src="${qi}" />`,n.addEventListener("click",()=>{localStorage.getItem("sound")==="on"?(localStorage.setItem("sound","off"),n.innerHTML=`<img src="${qi}" />`):(localStorage.setItem("sound","on"),n.innerHTML=`<img src="${$i}" />`)})});const Kr=document.getElementById("left"),Zr=document.getElementById("right"),Qr=document.getElementById("forward"),Jr=document.getElementById("fire");[Kr,Zr,Qr,Jr].forEach(n=>{n.addEventListener("contextmenu",e=>(e.preventDefault(),e.stopPropagation(),!1))});Kr.addEventListener("touchstart",()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowLeft"}))});Kr.addEventListener("touchend",()=>{window.dispatchEvent(new KeyboardEvent("keyup",{key:"ArrowLeft"}))});Zr.addEventListener("touchstart",()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight"}))});Zr.addEventListener("touchend",()=>{window.dispatchEvent(new KeyboardEvent("keyup",{key:"ArrowRight"}))});Qr.addEventListener("touchstart",()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"w"}))});Qr.addEventListener("touchend",()=>{window.dispatchEvent(new KeyboardEvent("keyup",{key:"w"}))});Jr.addEventListener("touchstart",()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:" "}))});Jr.addEventListener("touchend",()=>{window.dispatchEvent(new KeyboardEvent("keyup",{key:" "}))});export{Uu as $,Ds as A,ae as B,oe as C,se as D,E,L as F,B as G,xi as H,Ce as I,Sl as J,Ol as K,J as L,Ys as M,Q as N,Zl as O,ne as P,_i as Q,pn as R,zl as S,fe as T,Ms as U,tl as V,On as W,Y as X,us as Y,R as Z,ye as _,dn as a,ct as a0,Fc as a1,Je as a2,Tc as a3,Pc as a4,ft as a5,ie as a6,qs as a7,Ue as a8,le as a9,Ai as aa,Ma as ab,Zs as ac,ce as b,U as c,Lr as d,de as e,Mi as f,Nu as g,Yu as h,Rt as i,tn as j,Ur as k,Us as l,ys as m,oi as n,we as o,V as p,M as q,Na as r,Fa as s,Wu as t,Du as u,Ee as v,re as w,as as x,pe as y,Re as z};