var X=Object.defineProperty;var Y=(f,e,a)=>e in f?X(f,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[e]=a;var B=(f,e,a)=>Y(f,typeof e!="symbol"?e+"":e,a);import{b as C,c as V,_ as tt,a as et,d as nt}from"./5YLU0BJL.js";import{g as rt,e as O,f as Z,u as P,h as N,i as ot,j as st,r as at,o as G,c as it,a as l,k as s,b as z,t as q,l as H,v as L,n as ut,m as lt}from"./CHmhB318.js";import{u as pt}from"./z4UMItSe.js";import"./BW7MfNq4.js";var J={exports:{}};function ct(f){throw new Error('Could not dynamically require "'+f+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var U={exports:{}};const ft={},dt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),ht=rt(dt);var j;function K(){return j||(j=1,function(f,e){(function(a,r){f.exports=r()})(O,function(){var a=a||function(r,m){var p;if(typeof window<"u"&&window.crypto&&(p=window.crypto),typeof self<"u"&&self.crypto&&(p=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(p=globalThis.crypto),!p&&typeof window<"u"&&window.msCrypto&&(p=window.msCrypto),!p&&typeof O<"u"&&O.crypto&&(p=O.crypto),!p&&typeof ct=="function")try{p=ht}catch{}var S=function(){if(p){if(typeof p.getRandomValues=="function")try{return p.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof p.randomBytes=="function")try{return p.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},k=Object.create||function(){function t(){}return function(n){var i;return t.prototype=n,i=new t,t.prototype=null,i}}(),o={},x=o.lib={},v=x.Base=function(){return{extend:function(t){var n=k(this);return t&&n.mixIn(t),(!n.hasOwnProperty("init")||this.init===n.init)&&(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=x.WordArray=v.extend({init:function(t,n){t=this.words=t||[],n!=m?this.sigBytes=n:this.sigBytes=t.length*4},toString:function(t){return(t||c).stringify(this)},concat:function(t){var n=this.words,i=t.words,u=this.sigBytes,y=t.sigBytes;if(this.clamp(),u%4)for(var g=0;g<y;g++){var M=i[g>>>2]>>>24-g%4*8&255;n[u+g>>>2]|=M<<24-(u+g)%4*8}else for(var _=0;_<y;_+=4)n[u+_>>>2]=i[_>>>2];return this.sigBytes+=y,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=r.ceil(n/4)},clone:function(){var t=v.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],i=0;i<t;i+=4)n.push(S());return new h.init(n,t)}}),d=o.enc={},c=d.Hex={stringify:function(t){for(var n=t.words,i=t.sigBytes,u=[],y=0;y<i;y++){var g=n[y>>>2]>>>24-y%4*8&255;u.push((g>>>4).toString(16)),u.push((g&15).toString(16))}return u.join("")},parse:function(t){for(var n=t.length,i=[],u=0;u<n;u+=2)i[u>>>3]|=parseInt(t.substr(u,2),16)<<24-u%8*4;return new h.init(i,n/2)}},b=d.Latin1={stringify:function(t){for(var n=t.words,i=t.sigBytes,u=[],y=0;y<i;y++){var g=n[y>>>2]>>>24-y%4*8&255;u.push(String.fromCharCode(g))}return u.join("")},parse:function(t){for(var n=t.length,i=[],u=0;u<n;u++)i[u>>>2]|=(t.charCodeAt(u)&255)<<24-u%4*8;return new h.init(i,n)}},I=d.Utf8={stringify:function(t){try{return decodeURIComponent(escape(b.stringify(t)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(t){return b.parse(unescape(encodeURIComponent(t)))}},E=x.BufferedBlockAlgorithm=v.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(t){typeof t=="string"&&(t=I.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var n,i=this._data,u=i.words,y=i.sigBytes,g=this.blockSize,M=g*4,_=y/M;t?_=r.ceil(_):_=r.max((_|0)-this._minBufferSize,0);var T=_*g,W=r.min(T*4,y);if(T){for(var D=0;D<T;D+=g)this._doProcessBlock(u,D);n=u.splice(0,T),i.sigBytes-=W}return new h.init(n,W)},clone:function(){var t=v.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});x.Hasher=E.extend({cfg:v.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){E.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var n=this._doFinalize();return n},blockSize:16,_createHelper:function(t){return function(n,i){return new t.init(i).finalize(n)}},_createHmacHelper:function(t){return function(n,i){return new A.HMAC.init(t,i).finalize(n)}}});var A=o.algo={};return o}(Math);return a})}(U)),U.exports}(function(f,e){(function(a,r){f.exports=r(K())})(O,function(a){return function(){var r=a,m=r.lib,p=m.WordArray,S=r.enc;S.Base64={stringify:function(o){var x=o.words,v=o.sigBytes,h=this._map;o.clamp();for(var d=[],c=0;c<v;c+=3)for(var b=x[c>>>2]>>>24-c%4*8&255,I=x[c+1>>>2]>>>24-(c+1)%4*8&255,E=x[c+2>>>2]>>>24-(c+2)%4*8&255,A=b<<16|I<<8|E,t=0;t<4&&c+t*.75<v;t++)d.push(h.charAt(A>>>6*(3-t)&63));var n=h.charAt(64);if(n)for(;d.length%4;)d.push(n);return d.join("")},parse:function(o){var x=o.length,v=this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var d=0;d<v.length;d++)h[v.charCodeAt(d)]=d}var c=v.charAt(64);if(c){var b=o.indexOf(c);b!==-1&&(x=b)}return k(o,x,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function k(o,x,v){for(var h=[],d=0,c=0;c<x;c++)if(c%4){var b=v[o.charCodeAt(c-1)]<<c%4*2,I=v[o.charCodeAt(c)]>>>6-c%4*2,E=b|I;h[d>>>2]|=E<<24-d%4*8,d++}return p.create(h,d)}}(),a.enc.Base64})})(J);var yt=J.exports;const $=Z(yt);var Q={exports:{}};(function(f,e){(function(a,r){f.exports=r(K())})(O,function(a){return a.enc.Utf8})})(Q);var vt=Q.exports;const F=Z(vt);function gt(f){return!!f.match(/^([A-Za-z0-9+/=]{4})*([A-Za-z0-9+/=]{2}==|[A-Za-z0-9+/=]{3}=)?$/)}var mt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,R=(f,e,a,r)=>{for(var m=xt(e,a),p=f.length-1,S;p>=0;p--)(S=f[p])&&(m=S(e,a,m)||m);return m&&mt(e,a,m),m};class w{constructor(){B(this,"containerRef",P("container"));B(this,"textarea1Ref",P("textarea1"));B(this,"textarea2Ref",P("textarea2"));B(this,"input","");B(this,"output","");B(this,"copyTooltipInput","点击复制");B(this,"copyTooltipOutput","点击复制");B(this,"decodeError",!1)}handleEncode(){const e=F.parse(this.input);this.decodeError=!1,this.output=$.stringify(e)}handleDecode(){if(gt(this.input))try{const e=$.parse(this.input);this.output=e.toString(F),this.decodeError=!1}catch{this.decodeError=!0,this.output="base64解码异常"}else this.decodeError=!0,this.output="无效的base64字符串"}handleSwap(){const e=this.input;this.input=this.output,this.output=e}handleEmptyInput(){this.input=""}handleCopyInput(){V(this.input),this.copyTooltipInput="复制成功",setTimeout(()=>{this.copyTooltipInput="点击复制"},2e3)}handleEmptyOutput(){this.output=""}handleCopyOutput(){V(this.output),this.copyTooltipOutput="复制成功",setTimeout(()=>{this.copyTooltipOutput="点击复制"},2e3)}handleMousedownInput(){if(this.textarea1Ref.value&&this.textarea2Ref.value&&this.containerRef.value){if(window.getComputedStyle(this.containerRef.value).getPropertyValue("flex-direction")==="column")return;const a=this.textarea1Ref.value.style.height,r=this.textarea2Ref.value.style.height;!a&&r&&(this.textarea1Ref.value.style.height=r),this.textarea2Ref.value.style.height=""}}handleMousedownOutput(){if(this.textarea1Ref.value&&this.textarea2Ref.value&&this.containerRef.value){if(window.getComputedStyle(this.containerRef.value).getPropertyValue("flex-direction")==="column")return;const a=this.textarea1Ref.value.style.height,r=this.textarea2Ref.value.style.height;a&&!r&&(this.textarea2Ref.value.style.height=a),this.textarea1Ref.value.style.height=""}}}R([C],w.prototype,"handleEncode");R([C],w.prototype,"handleDecode");R([C],w.prototype,"handleSwap");R([C],w.prototype,"handleEmptyInput");R([C],w.prototype,"handleCopyInput");R([C],w.prototype,"handleEmptyOutput");R([C],w.prototype,"handleCopyOutput");R([C],w.prototype,"handleMousedownInput");R([C],w.prototype,"handleMousedownOutput");const wt={class:"px-6 py-10"},_t={ref:"container",class:"flex w-full flex-col lg:flex-row"},bt={class:"flex-grow lg:w-0"},Bt={class:"mb-2 flex justify-between gap-2"},Ct=["disabled"],Rt=["disabled"],St={class:"divider h-12 lg:divider-horizontal lg:h-auto lg:w-16"},Et={class:"flex-grow lg:w-0"},Ot={class:"mb-2 flex justify-between gap-2"},kt=["disabled"],It=["disabled"],zt=N({__name:"Base64code",setup(f){ot([w]);const e=st(w);return(a,r)=>{const m=tt,p=et,S=nt,k=at("focus");return G(),it("div",wt,[r[13]||(r[13]=l("article",{class:"prose mb-4 lg:prose-xl"},[l("h2",null,"Base64编码/解码"),l("ol",null,[l("li",null,"请在左侧文本输入框区域输入任意字符串；"),l("li",null,"点击中间区域的编码按钮/解码按钮；"),l("li",null,"右侧区域是展示编码结果/解码结果的地方。")])],-1)),l("div",_t,[l("div",bt,[l("div",Bt,[l("button",{disabled:!s(e).input,class:"btn btn-success flex flex-1",onClick:r[0]||(r[0]=(...o)=>s(e).handleCopyInput&&s(e).handleCopyInput(...o))},[z(m,{class:"size-6"}),l("span",null,q(s(e).copyTooltipInput),1)],8,Ct),l("button",{disabled:!s(e).input,class:"btn flex flex-1",onClick:r[1]||(r[1]=(...o)=>s(e).handleEmptyInput&&s(e).handleEmptyInput(...o))},[z(p,{class:"size-6"}),r[11]||(r[11]=l("span",null,"清空",-1))],8,Rt)]),H(l("textarea",{ref:"textarea1","onUpdate:modelValue":r[2]||(r[2]=o=>s(e).input=o),placeholder:"请输入任意文字",class:"textarea textarea-bordered block h-[calc(100%-theme(space.14))] min-h-48 w-full focus:textarea-success lg:min-h-144",onMousedown:r[3]||(r[3]=(...o)=>s(e).handleMousedownInput&&s(e).handleMousedownInput(...o))},null,544),[[k],[L,s(e).input]])]),l("div",St,[l("button",{class:"btn btn-primary",onClick:r[4]||(r[4]=(...o)=>s(e).handleEncode&&s(e).handleEncode(...o))}," 编码 "),l("button",{class:"btn btn-secondary",onClick:r[5]||(r[5]=(...o)=>s(e).handleDecode&&s(e).handleDecode(...o))}," 解码 "),l("button",{class:"btn btn-neutral",onClick:r[6]||(r[6]=(...o)=>s(e).handleSwap&&s(e).handleSwap(...o))},[z(S,{class:"size-6 rotate-90 lg:rotate-0"})])]),l("div",Et,[l("div",Ot,[l("button",{disabled:!s(e).output,class:"btn btn-success flex flex-1",onClick:r[7]||(r[7]=(...o)=>s(e).handleCopyOutput&&s(e).handleCopyOutput(...o))},[z(m,{class:"size-6"}),l("span",null,q(s(e).copyTooltipOutput),1)],8,kt),l("button",{disabled:!s(e).output,class:"btn flex flex-1",onClick:r[8]||(r[8]=(...o)=>s(e).handleEmptyOutput&&s(e).handleEmptyOutput(...o))},[z(p,{class:"size-6"}),r[12]||(r[12]=l("span",null,"清空",-1))],8,It)]),H(l("textarea",{ref:"textarea2",readonly:"","onUpdate:modelValue":r[9]||(r[9]=o=>s(e).output=o),placeholder:"这里是编码/解码的结果",class:ut(["textarea textarea-bordered block h-[calc(100%-theme(space.14))] min-h-144 w-full",[s(e).decodeError?"textarea-error text-4xl text-danger":""]]),onMousedown:r[10]||(r[10]=(...o)=>s(e).handleMousedownOutput&&s(e).handleMousedownOutput(...o))},null,34),[[L,s(e).output]])])],512)])}}}),Ut=N({__name:"index",setup(f){return pt({title:"kaokei"}),(e,a)=>(G(),lt(zt))}});export{Ut as default};