/* ReadMark */
var my=Object.create;var Ms=Object.defineProperty;var gy=Object.getOwnPropertyDescriptor;var xy=Object.getOwnPropertyNames;var yy=Object.getPrototypeOf,_y=Object.prototype.hasOwnProperty;var vy=(n,t,e)=>t in n?Ms(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var jf=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Qf=(n,t)=>{for(var e in t)Ms(n,e,{get:t[e],enumerable:!0})},tp=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of xy(t))!_y.call(n,r)&&r!==e&&Ms(n,r,{get:()=>t[r],enumerable:!(i=gy(t,r))||i.enumerable});return n};var ep=(n,t,e)=>(e=n!=null?my(yy(n)):{},tp(t||!n||!n.__esModule?Ms(e,"default",{value:n,enumerable:!0}):e,n)),by=n=>tp(Ms({},"__esModule",{value:!0}),n);var bt=(n,t,e)=>vy(n,typeof t!="symbol"?t+"":t,e);var bp=jf((nC,vp)=>{"use strict";var Yo=Object.prototype.hasOwnProperty,_p=Object.prototype.toString,fp=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,mp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):_p.call(t)==="[object Array]"},gp=function(t){if(!t||_p.call(t)!=="[object Object]")return!1;var e=Yo.call(t,"constructor"),i=t.constructor&&t.constructor.prototype&&Yo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!i)return!1;var r;for(r in t);return typeof r=="undefined"||Yo.call(t,r)},xp=function(t,e){fp&&e.name==="__proto__"?fp(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},yp=function(t,e){if(e==="__proto__")if(Yo.call(t,e)){if(pp)return pp(t,e).value}else return;return t[e]};vp.exports=function n(){var t,e,i,r,s,o,a=arguments[0],l=1,c=arguments.length,h=!1;for(typeof a=="boolean"&&(h=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<c;++l)if(t=arguments[l],t!=null)for(e in t)i=yp(a,e),r=yp(t,e),a!==r&&(h&&r&&(gp(r)||(s=mp(r)))?(s?(s=!1,o=i&&mp(i)?i:[]):o=i&&gp(i)?i:{},xp(a,{name:e,newValue:n(h,o,r)})):typeof r!="undefined"&&xp(a,{name:e,newValue:r}));return a}});var Lp=jf((BC,mu)=>{(function(){var n;typeof mu!="undefined"?n=mu.exports=i:n=(function(){return this||(0,eval)("this")})(),n.format=i,n.vsprintf=e,typeof console!="undefined"&&typeof console.log=="function"&&(n.printf=t);function t(){console.log(i.apply(null,arguments))}function e(r,s){return i.apply(null,[r].concat(s))}function i(r){for(var s=1,o=[].slice.call(arguments),a=0,l=r.length,c="",h,u=!1,d,f,g=!1,y,m=function(){return o[s++]},p=function(){for(var v="";/\d/.test(r[a]);)v+=r[a++],h=r[a];return v.length>0?parseInt(v):null};a<l;++a)if(h=r[a],u)switch(u=!1,h=="."?(g=!1,h=r[++a]):h=="0"&&r[a+1]=="."?(g=!0,a+=2,h=r[a]):g=!0,y=p(),h){case"b":c+=parseInt(m(),10).toString(2);break;case"c":d=m(),typeof d=="string"||d instanceof String?c+=d:c+=String.fromCharCode(parseInt(d,10));break;case"d":c+=parseInt(m(),10);break;case"f":f=String(parseFloat(m()).toFixed(y||6)),c+=g?f:f.replace(/^0/,"");break;case"j":c+=JSON.stringify(m());break;case"o":c+="0"+parseInt(m(),10).toString(8);break;case"s":c+=m();break;case"x":c+="0x"+parseInt(m(),10).toString(16);break;case"X":c+="0x"+parseInt(m(),10).toString(16).toUpperCase();break;default:c+=h;break}else h==="%"?u=!0:c+=h;return c}})()});var $R={};Qf($R,{default:()=>Vc});module.exports=by($R);var j=require("obsidian"),j0=require("node:fs/promises");function Jc(n){let t=ip(n),e=Kc(n),i=new Set(t.flatMap((s,o)=>e.some(a=>s.start<a.end&&s.end>a.start)?[o]:[])),r=[];for(let s=0;s<t.length;s+=1){if(i.has(s))continue;let o=ws(t[s].text);if(!o)continue;let a=Zc(o.content);if(!a)continue;let l=[],c=t[s].end,h=s+1;for(;h<t.length;){let u=ws(t[h].text);if(!u||u.depth<o.depth||u.depth===o.depth&&!i.has(h)&&Zc(u.content))break;let d=Ey(t[h].text,o.depth);l.push(i.has(h)?My(d):Sy(d)),c=t[h].end,h+=1}r.push({calloutType:a.type.toLowerCase(),calloutTitle:a.title,calloutFold:a.fold,text:l.join(`
`).trim(),position:t[s].start,end:c,line:s+1})}return r}function np(n,t){var a;let e=(a=t.calloutType)==null?void 0:a.toLowerCase(),i=Jc(n).filter(l=>{var c,h;return(!e||l.calloutType===e)&&((c=l.calloutTitle)!=null?c:"")===((h=t.calloutTitle)!=null?h:"")}),r=i.find(l=>l.position===t.position);if(r)return r.position;let s=i.filter(l=>l.text===t.text),o=s.length>0?s:i;return o.length===0?-1:[...o].sort((l,c)=>Math.abs(l.position-t.position)-Math.abs(c.position-t.position))[0].position}function Zc(n){var e;let t=/^\[!([^\]\s]+)\]([+-])?(?:[ \t]+(.*))?[ \t]*$/.exec(n);return t?{type:t[1],title:((e=t[3])==null?void 0:e.trim())||void 0,fold:t[2]==="+"?"expanded":t[2]==="-"?"collapsed":"none"}:null}function Kc(n){var r,s;let t=ip(n),e=[],i=null;for(let o=0;o<t.length;o+=1){let a=ws(t[o].text),l=((r=a==null?void 0:a.content)!=null?r:t[o].text).trimStart(),c=(s=/^(`{3,}|~{3,})/.exec(l))==null?void 0:s[1];if(i){c&&c[0]===i.marker&&c.length>=i.length&&/^[`~]+[ \t]*$/.test(l)&&(e.push({start:i.start,end:t[o].end}),i=null);continue}c&&(i={marker:c[0],length:c.length,start:t[o].start})}return i&&e.push({start:i.start,end:n.length}),e}function Sy(n){var r;let t=ws(n),e=(r=t==null?void 0:t.content)!=null?r:n,i=Zc(e);return i?`${i.type.toUpperCase()}${i.title?` ${i.title}`:""}`:wy(e)}function My(n){var i;let t=ws(n),e=(i=t==null?void 0:t.content)!=null?i:n;return/^\s*(`{3,}|~{3,})/.test(e)?"":e.trimEnd()}function wy(n){return n.replace(/!\[\[.*?\]\]/g,"").replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g,"$2").replace(/\[\[([^\]]+)\]\]/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`+([^`\n]+)`+/g,"$1").replace(/==([\s\S]*?)==/g,"$1").replace(/\*\*([\s\S]*?)\*\*/g,"$1").replace(/__([\s\S]*?)__/g,"$1").replace(/~~([\s\S]*?)~~/g,"$1").replace(/%%([\s\S]*?)%%/g,"$1").replace(/[ \t]+/g," ").trimEnd()}function ip(n){let t=[],e=0;for(let i of n.matchAll(/.*(?:\r\n|\n|$)/g)){if(!i[0])continue;let r=i[0].replace(/\r?\n$/,"");t.push({text:r,start:e,end:e+i[0].length}),e+=i[0].length}return t}function ws(n){let t=0,e=0;for(;t<n.length;){for(;n[t]===" "||n[t]==="	";)t+=1;if(n[t]!==">")break;e+=1,t+=1,n[t]===" "&&(t+=1)}return e>0?{depth:e,content:n.slice(t)}:null}function Ey(n,t){let e=0;for(let i=0;i<t;i+=1){for(;n[e]===" "||n[e]==="	";)e+=1;if(n[e]!==">")return n.slice(e);e+=1,n[e]===" "&&(e+=1)}return n.slice(e)}function rp(n,t){return t?{baseline:!n,markScanned:!n}:{baseline:!1,markScanned:!1}}function sp(n,t){return!t||n==="callout"}function jc(n){let t=(n!=null?n:"").toLowerCase();return["note","abstract","summary","tldr","info","todo","question","help","faq","example"].includes(t)?"info":["tip","hint","important"].includes(t)?"emphasis":["success","check","done"].includes(t)?"success":["warning","caution","attention"].includes(t)?"warning":["failure","fail","missing","danger","error","bug"].includes(t)?"danger":"neutral"}var Es=class{constructor(){bt(this,"tail",Promise.resolve())}enqueue(t){let e=this.tail.then(t,t);return this.tail=e.then(()=>{},()=>{}),e}};var Xo=["highlight","bold","annotation","commentary","callout"],Qc=["info","emphasis","success","warning","danger","neutral"],Ts={excerpts:{highlight:"#ebe6f7",bold:"#704dc8",annotation:"#c2b3e7",commentary:"#4719b8",callout:"#4f8b9a"},callouts:{info:"#7188d4",emphasis:"#a96bc4",success:"#45a18a",warning:"#cf9845",danger:"#ce6680",neutral:"#806f9f"}};function Ar(n){if(typeof n!="string")return null;let t=n.trim().toLowerCase(),e=t.startsWith("#")?t:`#${t}`;return/^#[0-9a-f]{6}$/.test(e)?e:null}function Rr(){return{excerpts:{...Ts.excerpts},callouts:{...Ts.callouts}}}function op(n){var s,o;let t=Rr();if(!n||typeof n!="object")return t;let e=n,i=e.excerpts&&typeof e.excerpts=="object"?e.excerpts:{},r=e.callouts&&typeof e.callouts=="object"?e.callouts:{};for(let a of Xo)t.excerpts[a]=(s=Ar(i[a]))!=null?s:t.excerpts[a];for(let a of Qc)t.callouts[a]=(o=Ar(r[a]))!=null?o:t.callouts[a];return t}function ap(n){return{"--mrt-color-highlight":n.excerpts.highlight,"--mrt-color-bold":n.excerpts.bold,"--mrt-color-annotation":n.excerpts.annotation,"--mrt-color-commentary":n.excerpts.commentary,"--mrt-color-callout":n.excerpts.callout,"--mrt-callout-info":n.callouts.info,"--mrt-callout-emphasis":n.callouts.emphasis,"--mrt-callout-success":n.callouts.success,"--mrt-callout-warning":n.callouts.warning,"--mrt-callout-danger":n.callouts.danger,"--mrt-callout-neutral":n.callouts.neutral}}var kn=require("node:path");var xn=require("node:fs/promises"),Re=require("node:path");var lp=require("node:crypto"),Qe=1,Ty=new Set(["support","contrast","causal","application","example"]),Ay=new Set(["prose","code","formula"]),Ry=/^[a-f0-9]{64}$/,Cy=/^[A-Za-z0-9][A-Za-z0-9._:-]*$/;function sn(n){return(0,lp.createHash)("sha256").update(n,"utf8").digest("hex")}function eu(n){let t=[];return $i(n)?(nu(n.protocolVersion,"source snapshot",t),iu(n.sourceFingerprint)||t.push("source snapshot sourceFingerprint must be a SHA-256 hash"),Iy(As(n.sourceUnits,"source snapshot sourceUnits",t),t),t.length===0?{ok:!0,value:n}:{ok:!1,errors:t}):{ok:!1,errors:["source snapshot must be an object"]}}function cp(n,t){let e=eu(n);if(!e.ok)return{ok:!1,errors:e.errors.map(u=>`trusted source snapshot: ${u}`)};let i=[];if(!$i(t))return{ok:!1,errors:["semantic revision must be an object"]};nu(t.protocolVersion,"semantic revision",i);for(let u of["id","bookId","taskId"])gi(t[u])||i.push(`semantic revision ${u} must be a safe ID`);iu(t.sourceFingerprint)?t.sourceFingerprint!==n.sourceFingerprint&&i.push("semantic revision sourceFingerprint does not match the trusted source snapshot"):i.push("semantic revision sourceFingerprint must be a SHA-256 hash"),"sourceUnits"in t&&i.push("semantic revision must not embed sourceUnits");let r=As(t.attributes,"semantic revision attributes",i),s=As(t.concepts,"semantic revision concepts",i),o=As(t.links,"semantic revision links",i),a=As(t.edges,"semantic revision edges",i),l=new Map(n.sourceUnits.map(u=>[u.id,u.kind])),c=Py(r,i),h=ky(s,l,c,i);return Dy(o,h,i),Ly(a,h,l,i),Fy(t.qualityReport,i),i.length===0?{ok:!0,value:t}:{ok:!1,errors:i}}function Iy(n,t){var s;let e=new Set,i=new Map,r=[];for(let[o,a]of n.entries()){if(!$i(a)){t.push(`sourceUnits[${o}] must be an object`);continue}gi(a.id)?e.has(a.id)?t.push(`duplicate source unit ID: ${a.id}`):e.add(a.id):t.push(`sourceUnits[${o}].id must be a safe ID`),qo(a.kind)||t.push(`sourceUnits[${o}].kind is invalid`),typeof a.text!="string"?t.push(`sourceUnits[${o}].text must be a string`):(!iu(a.contentHash)||a.contentHash!==sn(a.text))&&t.push(`sourceUnits[${o}].contentHash is invalid`),Ny(a)||t.push(`sourceUnits[${o}] has an invalid source range`),(!Array.isArray(a.headingPath)||!a.headingPath.every(l=>typeof l=="string"))&&t.push(`sourceUnits[${o}].headingPath is invalid`),a.explanatoryContextIds!==void 0&&!Rs(a.explanatoryContextIds)&&t.push(`sourceUnits[${o}].explanatoryContextIds is invalid`),r.push(a),gi(a.id)&&qo(a.kind)&&i.set(a.id,a.kind)}for(let o of r)for(let a of(s=o.explanatoryContextIds)!=null?s:[]){let l=r.find(c=>c.id===a);(!l||l.kind!=="prose")&&t.push(`source unit ${o.id} has an invalid explanatory context`)}return i}function Py(n,t){return $o(n,"attributes",t,(e,i)=>{(!tu(e.name)||!tu(e.value))&&t.push(`attributes[${i}] requires name and value`)})}function ky(n,t,e,i){return $o(n,"concepts",i,(r,s)=>{var o;if(tu(r.label)||i.push(`concepts[${s}].label must be non-empty`),hp(r.evidence,t,`concepts[${s}].evidence`,i),r.attributeIds!==void 0&&!Rs(r.attributeIds))i.push(`concepts[${s}].attributeIds is invalid`);else for(let a of(o=r.attributeIds)!=null?o:[])(!gi(a)||!e.has(a))&&i.push(`concepts[${s}].attributeIds contains an invalid attribute ID`)})}function Dy(n,t,e){$o(n,"links",e,(i,r)=>up(i,`links[${r}]`,t,"sourceConceptId","targetConceptId",e))}function Ly(n,t,e,i){$o(n,"edges",i,(r,s)=>{up(r,`edges[${s}]`,t,"fromConceptId","toConceptId",i),r.evidence!==void 0&&hp(r.evidence,e,`edges[${s}].evidence`,i)})}function up(n,t,e,i,r,s){dp(n.relation)||s.push(`${t}.relation is invalid`),(!gi(n[i])||!e.has(n[i]))&&s.push(`${t}.${i} is invalid`),(!gi(n[r])||!e.has(n[r]))&&s.push(`${t}.${r} is invalid`)}function hp(n,t,e,i){if(!Array.isArray(n)||n.length===0){i.push(`${e} must contain evidence`);return}for(let[r,s]of n.entries()){if(!$i(s)){i.push(`${e}[${r}] must be an object`);continue}qo(s.kind)||i.push(`${e}[${r}].kind is invalid`);let o=gi(s.sourceId)?t.get(s.sourceId):void 0;if(o?qo(s.kind)&&s.kind!==o&&i.push(`${e}[${r}].kind does not match the referenced source unit`):i.push(`${e}[${r}].sourceId is invalid`),!Rs(s.explanatorySourceIds))i.push(`${e}[${r}].explanatorySourceIds is invalid`);else if(o==="code"||o==="formula"){s.explanatorySourceIds.length===0&&i.push(`${e}[${r}] technical evidence requires explanatory prose`);for(let a of s.explanatorySourceIds)t.get(a)!=="prose"&&i.push(`${e}[${r}] has an invalid explanatory source ID`)}}}function Fy(n,t){if(!$i(n)){t.push("qualityReport must be an object");return}nu(n.protocolVersion,"qualityReport",t),(typeof n.sourceCoverage!="number"||n.sourceCoverage<0||n.sourceCoverage>1)&&t.push("qualityReport.sourceCoverage must be between 0 and 1"),(!Rs(n.unsupportedReferenceIds)||!Rs(n.warnings))&&t.push("qualityReport references and warnings must be string arrays"),(!$i(n.relationCounts)||Object.entries(n.relationCounts).some(([e,i])=>!dp(e)||typeof i!="number"||!Number.isInteger(i)||i<0))&&t.push("qualityReport.relationCounts is invalid")}function $o(n,t,e,i){let r=new Set;for(let[s,o]of n.entries()){if(!$i(o)){e.push(`${t}[${s}] must be an object`);continue}gi(o.id)?r.has(o.id)?e.push(`duplicate ${t} ID: ${o.id}`):r.add(o.id):e.push(`${t}[${s}].id must be a safe ID`),i(o,s)}return r}function nu(n,t,e){n!==Qe&&e.push(`${t} protocol version is incompatible`)}function As(n,t,e){return Array.isArray(n)?n:(e.push(`${t} must be an array`),[])}function Ny(n){return Number.isInteger(n.startOffset)&&Number.isInteger(n.endOffset)&&Number.isInteger(n.startLine)&&Number.isInteger(n.endLine)&&n.startOffset>=0&&n.endOffset>=n.startOffset&&n.startLine>=1&&n.endLine>=n.startLine}function $i(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function gi(n){return typeof n=="string"&&Cy.test(n)&&n!=="."&&n!==".."}function iu(n){return typeof n=="string"&&Ry.test(n)}function qo(n){return typeof n=="string"&&Ay.has(n)}function dp(n){return typeof n=="string"&&Ty.has(n)}function Rs(n){return Array.isArray(n)&&n.every(t=>typeof t=="string")}function tu(n){return typeof n=="string"&&n.trim().length>0}function ru(n){if(n)throw n}var Jo=ep(bp(),1);function Cs(n){if(typeof n!="object"||n===null)return!1;let t=Object.getPrototypeOf(n);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function su(){let n=[],t={run:e,use:i};return t;function e(...r){let s=-1,o=r.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...r);function a(l,...c){let h=n[++s],u=-1;if(l){o(l);return}for(;++u<r.length;)(c[u]===null||c[u]===void 0)&&(c[u]=r[u]);r=c,h?Sp(h,a)(...c):o(null,...c)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return n.push(r),t}}function Sp(n,t){let e;return i;function i(...o){let a=n.length>o.length,l;a&&o.push(r);try{l=n.apply(this,o)}catch(c){let h=c;if(a&&e)throw h;return r(h)}a||(l&&l.then&&typeof l.then=="function"?l.then(s,r):l instanceof Error?r(l):s(l))}function r(o,...a){e||(e=!0,t(o,...a))}function s(o){r(null,o)}}function xi(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Mp(n.position):"start"in n||"end"in n?Mp(n):"line"in n||"column"in n?ou(n):""}function ou(n){return wp(n&&n.line)+":"+wp(n&&n.column)}function Mp(n){return ou(n&&n.start)+"-"+ou(n&&n.end)}function wp(n){return n&&typeof n=="number"?n:1}var De=class extends Error{constructor(t,e,i){super(),typeof e=="string"&&(i=e,e=void 0);let r="",s={},o=!1;if(e&&("line"in e&&"column"in e?s={place:e}:"start"in e&&"end"in e?s={place:e}:"type"in e?s={ancestors:[e],place:e.position}:s={...e}),typeof t=="string"?r=t:!s.cause&&t&&(o=!0,r=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof i=="string"){let l=i.indexOf(":");l===-1?s.ruleId=i:(s.source=i.slice(0,l),s.ruleId=i.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){let l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}let a=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=a?a.line:void 0,this.name=xi(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};De.prototype.file="";De.prototype.name="";De.prototype.reason="";De.prototype.message="";De.prototype.stack="";De.prototype.column=void 0;De.prototype.line=void 0;De.prototype.ancestors=void 0;De.prototype.cause=void 0;De.prototype.fatal=void 0;De.prototype.place=void 0;De.prototype.ruleId=void 0;De.prototype.source=void 0;var Sn={basename:By,dirname:Oy,extname:Uy,join:zy,sep:"/"};function By(n,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Is(n);let e=0,i=-1,r=n.length,s;if(t===void 0||t.length===0||t.length>n.length){for(;r--;)if(n.codePointAt(r)===47){if(s){e=r+1;break}}else i<0&&(s=!0,i=r+1);return i<0?"":n.slice(e,i)}if(t===n)return"";let o=-1,a=t.length-1;for(;r--;)if(n.codePointAt(r)===47){if(s){e=r+1;break}}else o<0&&(s=!0,o=r+1),a>-1&&(n.codePointAt(r)===t.codePointAt(a--)?a<0&&(i=r):(a=-1,i=o));return e===i?i=o:i<0&&(i=n.length),n.slice(e,i)}function Oy(n){if(Is(n),n.length===0)return".";let t=-1,e=n.length,i;for(;--e;)if(n.codePointAt(e)===47){if(i){t=e;break}}else i||(i=!0);return t<0?n.codePointAt(0)===47?"/":".":t===1&&n.codePointAt(0)===47?"//":n.slice(0,t)}function Uy(n){Is(n);let t=n.length,e=-1,i=0,r=-1,s=0,o;for(;t--;){let a=n.codePointAt(t);if(a===47){if(o){i=t+1;break}continue}e<0&&(o=!0,e=t+1),a===46?r<0?r=t:s!==1&&(s=1):r>-1&&(s=-1)}return r<0||e<0||s===0||s===1&&r===e-1&&r===i+1?"":n.slice(r,e)}function zy(...n){let t=-1,e;for(;++t<n.length;)Is(n[t]),n[t]&&(e=e===void 0?n[t]:e+"/"+n[t]);return e===void 0?".":Vy(e)}function Vy(n){Is(n);let t=n.codePointAt(0)===47,e=Hy(n,!t);return e.length===0&&!t&&(e="."),e.length>0&&n.codePointAt(n.length-1)===47&&(e+="/"),t?"/"+e:e}function Hy(n,t){let e="",i=0,r=-1,s=0,o=-1,a,l;for(;++o<=n.length;){if(o<n.length)a=n.codePointAt(o);else{if(a===47)break;a=47}if(a===47){if(!(r===o-1||s===1))if(r!==o-1&&s===2){if(e.length<2||i!==2||e.codePointAt(e.length-1)!==46||e.codePointAt(e.length-2)!==46){if(e.length>2){if(l=e.lastIndexOf("/"),l!==e.length-1){l<0?(e="",i=0):(e=e.slice(0,l),i=e.length-1-e.lastIndexOf("/")),r=o,s=0;continue}}else if(e.length>0){e="",i=0,r=o,s=0;continue}}t&&(e=e.length>0?e+"/..":"..",i=2)}else e.length>0?e+="/"+n.slice(r+1,o):e=n.slice(r+1,o),i=o-r-1;r=o,s=0}else a===46&&s>-1?s++:s=-1}return e}function Is(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}var Ep={cwd:Gy};function Gy(){return"/"}function Cr(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function Tp(n){if(typeof n=="string")n=new URL(n);else if(!Cr(n)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(n.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Wy(n)}function Wy(n){if(n.hostname!==""){let i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}let t=n.pathname,e=-1;for(;++e<t.length;)if(t.codePointAt(e)===37&&t.codePointAt(e+1)===50){let i=t.codePointAt(e+2);if(i===70||i===102){let r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(t)}var au=["history","path","basename","stem","extname","dirname"],Ps=class{constructor(t){let e;t?Cr(t)?e={path:t}:typeof t=="string"||Xy(t)?e={value:t}:e=t:e={},this.cwd="cwd"in e?"":Ep.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<au.length;){let s=au[i];s in e&&e[s]!==void 0&&e[s]!==null&&(this[s]=s==="history"?[...e[s]]:e[s])}let r;for(r in e)au.includes(r)||(this[r]=e[r])}get basename(){return typeof this.path=="string"?Sn.basename(this.path):void 0}set basename(t){cu(t,"basename"),lu(t,"basename"),this.path=Sn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Sn.dirname(this.path):void 0}set dirname(t){Ap(this.basename,"dirname"),this.path=Sn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Sn.extname(this.path):void 0}set extname(t){if(lu(t,"extname"),Ap(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Sn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Cr(t)&&(t=Tp(t)),cu(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Sn.basename(this.path,this.extname):void 0}set stem(t){cu(t,"stem"),lu(t,"stem"),this.path=Sn.join(this.dirname||"",t+(this.extname||""))}fail(t,e,i){let r=this.message(t,e,i);throw r.fatal=!0,r}info(t,e,i){let r=this.message(t,e,i);return r.fatal=void 0,r}message(t,e,i){let r=new De(t,e,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function lu(n,t){if(n&&n.includes(Sn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Sn.sep+"`")}function cu(n,t){if(!n)throw new Error("`"+t+"` cannot be empty")}function Ap(n,t){if(!n)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Xy(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}var Rp=(function(n){let i=this.constructor.prototype,r=i[n],s=function(){return r.apply(s,arguments)};return Object.setPrototypeOf(s,i),s});var qy={}.hasOwnProperty,fu=class n extends Rp{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=su()}copy(){let t=new n,e=-1;for(;++e<this.attachers.length;){let i=this.attachers[e];t.use(...i)}return t.data((0,Jo.default)(!0,{},this.namespace)),t}data(t,e){return typeof t=="string"?arguments.length===2?(du("data",this.frozen),this.namespace[t]=e,this):qy.call(this.namespace,t)&&this.namespace[t]||void 0:t?(du("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[e,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);let r=e.call(t,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let e=Zo(t),i=this.parser||this.Parser;return uu("parse",i),i(String(e),e)}process(t,e){let i=this;return this.freeze(),uu("process",this.parser||this.Parser),hu("process",this.compiler||this.Compiler),e?r(void 0,e):new Promise(r);function r(s,o){let a=Zo(t),l=i.parse(a);i.run(l,a,function(h,u,d){if(h||!u||!d)return c(h);let f=u,g=i.stringify(f,d);Yy(g)?d.value=g:d.result=g,c(h,d)});function c(h,u){h||!u?o(h):s?s(u):e(void 0,u)}}}processSync(t){let e=!1,i;return this.freeze(),uu("processSync",this.parser||this.Parser),hu("processSync",this.compiler||this.Compiler),this.process(t,r),Ip("processSync","process",e),i;function r(s,o){e=!0,ru(s),i=o}}run(t,e,i){Cp(t),this.freeze();let r=this.transformers;return!i&&typeof e=="function"&&(i=e,e=void 0),i?s(void 0,i):new Promise(s);function s(o,a){let l=Zo(e);r.run(t,l,c);function c(h,u,d){let f=u||t;h?a(h):o?o(f):i(void 0,f,d)}}}runSync(t,e){let i=!1,r;return this.run(t,e,s),Ip("runSync","run",i),r;function s(o,a){ru(o),r=a,i=!0}}stringify(t,e){this.freeze();let i=Zo(e),r=this.compiler||this.Compiler;return hu("stringify",r),Cp(t),r(t,i)}use(t,...e){let i=this.attachers,r=this.namespace;if(du("use",this.frozen),t!=null)if(typeof t=="function")l(t,e);else if(typeof t=="object")Array.isArray(t)?a(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){let[h,...u]=c;l(h,u)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(r.settings=(0,Jo.default)(!0,r.settings,c.settings))}function a(c){let h=-1;if(c!=null)if(Array.isArray(c))for(;++h<c.length;){let u=c[h];s(u)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,h){let u=-1,d=-1;for(;++u<i.length;)if(i[u][0]===c){d=u;break}if(d===-1)i.push([c,...h]);else if(h.length>0){let[f,...g]=h,y=i[d][1];Cs(y)&&Cs(f)&&(f=(0,Jo.default)(!0,y,f)),i[d]=[c,f,...g]}}}},pu=new fu().freeze();function uu(n,t){if(typeof t!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function hu(n,t){if(typeof t!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function du(n,t){if(t)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Cp(n){if(!Cs(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function Ip(n,t,e){if(!e)throw new Error("`"+n+"` finished async. Use `"+t+"` instead")}function Zo(n){return $y(n)?n:new Ps(n)}function $y(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function Yy(n){return typeof n=="string"||Zy(n)}function Zy(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}var Te=yi(/[A-Za-z]/),Ae=yi(/[\dA-Za-z]/),Pp=yi(/[#-'*+\--9=?A-Z^-~]/);function Yi(n){return n!==null&&(n<32||n===127)}var ks=yi(/\d/),kp=yi(/[\dA-Fa-f]/),Dp=yi(/[!-/:-@[-`{-~]/);function ot(n){return n!==null&&n<-2}function qt(n){return n!==null&&(n<0||n===32)}function Ct(n){return n===-2||n===-1||n===32}var Zi=yi(/\p{P}|\p{S}/u),Nn=yi(/\s/);function yi(n){return t;function t(e){return e!==null&&e>-1&&n.test(String.fromCharCode(e))}}var Fp=ep(Lp(),1),Ds=Object.assign(Ji(Error),{eval:Ji(EvalError),range:Ji(RangeError),reference:Ji(ReferenceError),syntax:Ji(SyntaxError),type:Ji(TypeError),uri:Ji(URIError)});function Ji(n){return t.displayName=n.displayName||n.name,t;function t(e,...i){let r=e&&(0,Fp.default)(e,...i);return new n(r)}}var Ko={}.hasOwnProperty,Np={yaml:"-",toml:"+"};function Ir(n){let t=[],e=-1,i=Array.isArray(n)?n:n?[n]:["yaml"];for(;++e<i.length;)t[e]=Jy(i[e]);return t}function Jy(n){let t=n;if(typeof t=="string"){if(!Ko.call(Np,t))throw Ds("Missing matter definition for `%s`",t);t={type:t,marker:Np[t]}}else if(typeof t!="object")throw Ds("Expected matter to be an object, not `%j`",t);if(!Ko.call(t,"type"))throw Ds("Missing `type` in matter `%j`",t);if(!Ko.call(t,"fence")&&!Ko.call(t,"marker"))throw Ds("Missing `marker` or `fence` in matter `%j`",t);return t}function xu(n){let t=Ir(n),e={},i=-1;for(;++i<t.length;){let r=t[i],s=gu(r,"open").charCodeAt(0),o=Ky(r),a=e[s];Array.isArray(a)?a.push(o):e[s]=[o]}return{flow:e}}function Ky(n){let t=n.anywhere,e=n.type,i=e+"Fence",r=i+"Sequence",s=e+"Value",o={tokenize:h,partial:!0},a,l=0;return{tokenize:c,concrete:!0};function c(u,d,f){let g=this;return y;function y(C){let _=g.now();return _.column===1&&(_.line===1||t)&&(a=gu(n,"open"),l=0,C===a.charCodeAt(l))?(u.enter(e),u.enter(i),u.enter(r),m(C)):f(C)}function m(C){return l===a.length?(u.exit(r),Ct(C)?(u.enter("whitespace"),p(C)):v(C)):C===a.charCodeAt(l++)?(u.consume(C),m):f(C)}function p(C){return Ct(C)?(u.consume(C),p):(u.exit("whitespace"),v(C))}function v(C){return ot(C)?(u.exit(i),u.enter("lineEnding"),u.consume(C),u.exit("lineEnding"),a=gu(n,"close"),l=0,u.attempt(o,M,w)):f(C)}function w(C){return C===null||ot(C)?R(C):(u.enter(s),b(C))}function b(C){return C===null||ot(C)?(u.exit(s),R(C)):(u.consume(C),b)}function R(C){return C===null?f(C):(u.enter("lineEnding"),u.consume(C),u.exit("lineEnding"),u.attempt(o,M,w))}function M(C){return u.exit(e),d(C)}}function h(u,d,f){let g=0;return y;function y(w){return w===a.charCodeAt(g)?(u.enter(i),u.enter(r),m(w)):f(w)}function m(w){return g===a.length?(u.exit(r),Ct(w)?(u.enter("whitespace"),p(w)):v(w)):w===a.charCodeAt(g++)?(u.consume(w),m):f(w)}function p(w){return Ct(w)?(u.consume(w),p):(u.exit("whitespace"),v(w))}function v(w){return w===null||ot(w)?(u.exit(i),d(w)):f(w)}}}function gu(n,t){return n.marker?Bp(n.marker,t).repeat(3):Bp(n.fence,t)}function Bp(n,t){return typeof n=="string"?n:n[t]}function Ls(n){if(typeof n!="string")throw new TypeError("Expected a string");return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function _u(n){let t=Ir(n),e={},i={},r=-1;for(;++r<t.length;){let s=t[r];e[s.type]=jy(s),i[s.type]=Qy,i[s.type+"Value"]=t_}return{enter:e,exit:i}}function jy(n){return t;function t(e){this.enter({type:n.type,value:""},e),this.buffer()}}function Qy(n){let t=this.resume(),e=this.stack[this.stack.length-1];"value"in e,this.exit(n),e.value=t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,"")}function t_(n){this.config.enter.data.call(this,n),this.config.exit.data.call(this,n)}function vu(n){let t=[],e={},i=Ir(n),r=-1;for(;++r<i.length;){let s=i[r];e[s.type]=e_(s);let o=yu(s,"open");t.push({atBreak:!0,character:o.charAt(0),after:Ls(o.charAt(1))})}return{unsafe:t,handlers:e}}function e_(n){let t=yu(n,"open"),e=yu(n,"close");return i;function i(r){return t+(r.value?`
`+r.value:"")+`
`+e}}function yu(n,t){return n.marker?Op(n.marker,t).repeat(3):Op(n.fence,t)}function Op(n,t){return typeof n=="string"?n:n[t]}var n_="yaml";function jo(n){let t=this,e=n||n_,i=t.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),s=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),o=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(xu(e)),s.push(_u(e)),o.push(vu(e))}function bu(n,t){let e=String(n);if(typeof t!="string")throw new TypeError("Expected character");let i=0,r=e.indexOf(t);for(;r!==-1;)i++,r=e.indexOf(t,r+t.length);return i}var _i=(function(n){if(n==null)return o_;if(typeof n=="function")return Qo(n);if(typeof n=="object")return Array.isArray(n)?i_(n):r_(n);if(typeof n=="string")return s_(n);throw new Error("Expected function, string, or object as test")});function i_(n){let t=[],e=-1;for(;++e<n.length;)t[e]=_i(n[e]);return Qo(i);function i(...r){let s=-1;for(;++s<t.length;)if(t[s].apply(this,r))return!0;return!1}}function r_(n){let t=n;return Qo(e);function e(i){let r=i,s;for(s in n)if(r[s]!==t[s])return!1;return!0}}function s_(n){return Qo(t);function t(e){return e&&e.type===n}}function Qo(n){return t;function t(e,i,r){return!!(a_(e)&&n.call(this,e,typeof i=="number"?i:void 0,r||void 0))}}function o_(){return!0}function a_(n){return n!==null&&typeof n=="object"&&"type"in n}var Up=[],ta=!0,Ki=!1,ea="skip";function Fs(n,t,e,i){let r;typeof t=="function"&&typeof e!="function"?(i=e,e=t):r=t;let s=_i(r),o=i?-1:1;a(n,void 0,[])();function a(l,c,h){let u=l&&typeof l=="object"?l:{};if(typeof u.type=="string"){let f=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(l.type+(f?"<"+f+">":""))+")"})}return d;function d(){let f=Up,g,y,m;if((!t||s(l,c,h[h.length-1]||void 0))&&(f=l_(e(l,h)),f[0]===Ki))return f;if("children"in l&&l.children){let p=l;if(p.children&&f[0]!==ea)for(y=(i?p.children.length:-1)+o,m=h.concat(p);y>-1&&y<p.children.length;){let v=p.children[y];if(g=a(v,y,m)(),g[0]===Ki)return g;y=typeof g[1]=="number"?g[1]:y+o}}return f}}}function l_(n){return Array.isArray(n)?n:typeof n=="number"?[ta,n]:n==null?Up:[n]}function Su(n,t,e){let r=_i((e||{}).ignore||[]),s=c_(t),o=-1;for(;++o<s.length;)Fs(n,"text",a);function a(c,h){let u=-1,d;for(;++u<h.length;){let f=h[u],g=d?d.children:void 0;if(r(f,g?g.indexOf(f):void 0,d))return;d=f}if(d)return l(c,h)}function l(c,h){let u=h[h.length-1],d=s[o][0],f=s[o][1],g=0,m=u.children.indexOf(c),p=!1,v=[];d.lastIndex=0;let w=d.exec(c.value);for(;w;){let b=w.index,R={index:w.index,input:w.input,stack:[...h,c]},M=f(...w,R);if(typeof M=="string"&&(M=M.length>0?{type:"text",value:M}:void 0),M===!1?d.lastIndex=b+1:(g!==b&&v.push({type:"text",value:c.value.slice(g,b)}),Array.isArray(M)?v.push(...M):M&&v.push(M),g=b+w[0].length,p=!0),!d.global)break;w=d.exec(c.value)}return p?(g<c.value.length&&v.push({type:"text",value:c.value.slice(g)}),u.children.splice(m,1,...v)):v=[c],m+v.length}}function c_(n){let t=[];if(!Array.isArray(n))throw new TypeError("Expected find and replace tuple or list of tuples");let e=!n[0]||Array.isArray(n[0])?n:[n],i=-1;for(;++i<e.length;){let r=e[i];t.push([u_(r[0]),h_(r[1])])}return t}function u_(n){return typeof n=="string"?new RegExp(Ls(n),"g"):n}function h_(n){return typeof n=="function"?n:function(){return n}}var Mu="phrasing",wu=["autolink","link","image","label"];function Tu(){return{transforms:[x_],enter:{literalAutolink:d_,literalAutolinkEmail:Eu,literalAutolinkHttp:Eu,literalAutolinkWww:Eu},exit:{literalAutolink:g_,literalAutolinkEmail:m_,literalAutolinkHttp:f_,literalAutolinkWww:p_}}}function Au(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Mu,notInConstruct:wu},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Mu,notInConstruct:wu},{character:":",before:"[ps]",after:"\\/",inConstruct:Mu,notInConstruct:wu}]}}function d_(n){this.enter({type:"link",title:null,url:"",children:[]},n)}function Eu(n){this.config.enter.autolinkProtocol.call(this,n)}function f_(n){this.config.exit.autolinkProtocol.call(this,n)}function p_(n){this.config.exit.data.call(this,n);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(n)}function m_(n){this.config.exit.autolinkEmail.call(this,n)}function g_(n){this.exit(n)}function x_(n){Su(n,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,y_],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,__]],{ignore:["link","linkReference"]})}function y_(n,t,e,i,r){let s="";if(!zp(r)||(/^w/i.test(t)&&(e=t+e,t="",s="http://"),!v_(e)))return!1;let o=b_(e+i);if(!o[0])return!1;let a={type:"link",title:null,url:s+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[a,{type:"text",value:o[1]}]:a}function __(n,t,e,i){return!zp(i,!0)||/[-\d_]$/.test(e)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+e,children:[{type:"text",value:t+"@"+e}]}}function v_(n){let t=n.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function b_(n){let t=/[!"&'),.:;<>?\]}]+$/.exec(n);if(!t)return[n,void 0];n=n.slice(0,t.index);let e=t[0],i=e.indexOf(")"),r=bu(n,"("),s=bu(n,")");for(;i!==-1&&r>s;)n+=e.slice(0,i+1),e=e.slice(i+1),i=e.indexOf(")"),s++;return[n,e]}function zp(n,t){let e=n.input.charCodeAt(n.index-1);return(n.index===0||Nn(e)||Zi(e))&&(!t||e!==47)}function He(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}Vp.peek=I_;function S_(){this.buffer()}function M_(n){this.enter({type:"footnoteReference",identifier:"",label:""},n)}function w_(){this.buffer()}function E_(n){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},n)}function T_(n){let t=this.resume(),e=this.stack[this.stack.length-1];e.type,e.identifier=He(this.sliceSerialize(n)).toLowerCase(),e.label=t}function A_(n){this.exit(n)}function R_(n){let t=this.resume(),e=this.stack[this.stack.length-1];e.type,e.identifier=He(this.sliceSerialize(n)).toLowerCase(),e.label=t}function C_(n){this.exit(n)}function I_(){return"["}function Vp(n,t,e,i){let r=e.createTracker(i),s=r.move("[^"),o=e.enter("footnoteReference"),a=e.enter("reference");return s+=r.move(e.safe(e.associationId(n),{after:"]",before:s})),a(),o(),s+=r.move("]"),s}function Ru(){return{enter:{gfmFootnoteCallString:S_,gfmFootnoteCall:M_,gfmFootnoteDefinitionLabelString:w_,gfmFootnoteDefinition:E_},exit:{gfmFootnoteCallString:T_,gfmFootnoteCall:A_,gfmFootnoteDefinitionLabelString:R_,gfmFootnoteDefinition:C_}}}function Cu(n){let t=!1;return n&&n.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:e,footnoteReference:Vp},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function e(i,r,s,o){let a=s.createTracker(o),l=a.move("[^"),c=s.enter("footnoteDefinition"),h=s.enter("label");return l+=a.move(s.safe(s.associationId(i),{before:l,after:"]"})),h(),l+=a.move("]:"),i.children&&i.children.length>0&&(a.shift(4),l+=a.move((t?`
`:" ")+s.indentLines(s.containerFlow(i,a.current()),t?Hp:P_))),c(),l}}function P_(n,t,e){return t===0?n:Hp(n,t,e)}function Hp(n,t,e){return(e?"":"    ")+n}var k_=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Gp.peek=F_;function Iu(){return{canContainEols:["delete"],enter:{strikethrough:D_},exit:{strikethrough:L_}}}function Pu(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:k_}],handlers:{delete:Gp}}}function D_(n){this.enter({type:"delete",children:[]},n)}function L_(n){this.exit(n)}function Gp(n,t,e,i){let r=e.createTracker(i),s=e.enter("strikethrough"),o=r.move("~~");return o+=e.containerPhrasing(n,{...r.current(),before:o,after:"~"}),o+=r.move("~~"),s(),o}function F_(){return"~"}function N_(n){return n.length}function Xp(n,t){let e=t||{},i=(e.align||[]).concat(),r=e.stringLength||N_,s=[],o=[],a=[],l=[],c=0,h=-1;for(;++h<n.length;){let y=[],m=[],p=-1;for(n[h].length>c&&(c=n[h].length);++p<n[h].length;){let v=B_(n[h][p]);if(e.alignDelimiters!==!1){let w=r(v);m[p]=w,(l[p]===void 0||w>l[p])&&(l[p]=w)}y.push(v)}o[h]=y,a[h]=m}let u=-1;if(typeof i=="object"&&"length"in i)for(;++u<c;)s[u]=Wp(i[u]);else{let y=Wp(i);for(;++u<c;)s[u]=y}u=-1;let d=[],f=[];for(;++u<c;){let y=s[u],m="",p="";y===99?(m=":",p=":"):y===108?m=":":y===114&&(p=":");let v=e.alignDelimiters===!1?1:Math.max(1,l[u]-m.length-p.length),w=m+"-".repeat(v)+p;e.alignDelimiters!==!1&&(v=m.length+v+p.length,v>l[u]&&(l[u]=v),f[u]=v),d[u]=w}o.splice(1,0,d),a.splice(1,0,f),h=-1;let g=[];for(;++h<o.length;){let y=o[h],m=a[h];u=-1;let p=[];for(;++u<c;){let v=y[u]||"",w="",b="";if(e.alignDelimiters!==!1){let R=l[u]-(m[u]||0),M=s[u];M===114?w=" ".repeat(R):M===99?R%2?(w=" ".repeat(R/2+.5),b=" ".repeat(R/2-.5)):(w=" ".repeat(R/2),b=w):b=" ".repeat(R)}e.delimiterStart!==!1&&!u&&p.push("|"),e.padding!==!1&&!(e.alignDelimiters===!1&&v==="")&&(e.delimiterStart!==!1||u)&&p.push(" "),e.alignDelimiters!==!1&&p.push(w),p.push(v),e.alignDelimiters!==!1&&p.push(b),e.padding!==!1&&p.push(" "),(e.delimiterEnd!==!1||u!==c-1)&&p.push("|")}g.push(e.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return g.join(`
`)}function B_(n){return n==null?"":String(n)}function Wp(n){let t=typeof n=="string"?n.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function qp(n,t,e,i){let r=e.enter("blockquote"),s=e.createTracker(i);s.move("> "),s.shift(2);let o=e.indentLines(e.containerFlow(n,s.current()),O_);return r(),o}function O_(n,t,e){return">"+(e?"":" ")+n}function Yp(n,t){return $p(n,t.inConstruct,!0)&&!$p(n,t.notInConstruct,!1)}function $p(n,t,e){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return e;let i=-1;for(;++i<t.length;)if(n.includes(t[i]))return!0;return!1}function ku(n,t,e,i){let r=-1;for(;++r<e.unsafe.length;)if(e.unsafe[r].character===`
`&&Yp(e.stack,e.unsafe[r]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function na(n,t){let e=String(n),i=e.indexOf(t),r=i,s=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===r?++s>o&&(o=s):s=1,r=i+t.length,i=e.indexOf(t,r);return o}function Zp(n,t){return!!(t.options.fences===!1&&n.value&&!n.lang&&/[^ \r\n]/.test(n.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value))}function Jp(n){let t=n.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Kp(n,t,e,i){let r=Jp(e),s=n.value||"",o=r==="`"?"GraveAccent":"Tilde";if(Zp(n,e)){let u=e.enter("codeIndented"),d=e.indentLines(s,U_);return u(),d}let a=e.createTracker(i),l=r.repeat(Math.max(na(s,r)+1,3)),c=e.enter("codeFenced"),h=a.move(l);if(n.lang){let u=e.enter(`codeFencedLang${o}`);h+=a.move(e.safe(n.lang,{before:h,after:" ",encode:["`"],...a.current()})),u()}if(n.lang&&n.meta){let u=e.enter(`codeFencedMeta${o}`);h+=a.move(" "),h+=a.move(e.safe(n.meta,{before:h,after:`
`,encode:["`"],...a.current()})),u()}return h+=a.move(`
`),s&&(h+=a.move(s+`
`)),h+=a.move(l),c(),h}function U_(n,t,e){return(e?"":"    ")+n}function Pr(n){let t=n.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function jp(n,t,e,i){let r=Pr(e),s=r==='"'?"Quote":"Apostrophe",o=e.enter("definition"),a=e.enter("label"),l=e.createTracker(i),c=l.move("[");return c+=l.move(e.safe(e.associationId(n),{before:c,after:"]",...l.current()})),c+=l.move("]: "),a(),!n.url||/[\0- \u007F]/.test(n.url)?(a=e.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(e.safe(n.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=e.enter("destinationRaw"),c+=l.move(e.safe(n.url,{before:c,after:n.title?" ":`
`,...l.current()}))),a(),n.title&&(a=e.enter(`title${s}`),c+=l.move(" "+r),c+=l.move(e.safe(n.title,{before:c,after:r,...l.current()})),c+=l.move(r),a()),o(),c}function Qp(n){let t=n.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function vi(n){return"&#x"+n.toString(16).toUpperCase()+";"}function Jn(n){if(n===null||qt(n)||Nn(n))return 1;if(Zi(n))return 2}function kr(n,t,e){let i=Jn(n),r=Jn(t);return i===void 0?r===void 0?e==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Du.peek=z_;function Du(n,t,e,i){let r=Qp(e),s=e.enter("emphasis"),o=e.createTracker(i),a=o.move(r),l=o.move(e.containerPhrasing(n,{after:r,before:a,...o.current()})),c=l.charCodeAt(0),h=kr(i.before.charCodeAt(i.before.length-1),c,r);h.inside&&(l=vi(c)+l.slice(1));let u=l.charCodeAt(l.length-1),d=kr(i.after.charCodeAt(0),u,r);d.inside&&(l=l.slice(0,-1)+vi(u));let f=o.move(r);return s(),e.attentionEncodeSurroundingInfo={after:d.outside,before:h.outside},a+l+f}function z_(n,t,e){return e.options.emphasis||"*"}function Lu(n,t,e,i){let r,s,o;typeof t=="function"&&typeof e!="function"?(s=void 0,o=t,r=e):(s=t,o=e,r=i),Fs(n,s,a,r);function a(l,c){let h=c[c.length-1],u=h?h.children.indexOf(l):void 0;return o(l,u,h)}}var V_={};function ji(n,t){let e=t||V_,i=typeof e.includeImageAlt=="boolean"?e.includeImageAlt:!0,r=typeof e.includeHtml=="boolean"?e.includeHtml:!0;return em(n,i,r)}function em(n,t,e){if(H_(n)){if("value"in n)return n.type==="html"&&!e?"":n.value;if(t&&"alt"in n&&n.alt)return n.alt;if("children"in n)return tm(n.children,t,e)}return Array.isArray(n)?tm(n,t,e):""}function tm(n,t,e){let i=[],r=-1;for(;++r<n.length;)i[r]=em(n[r],t,e);return i.join("")}function H_(n){return!!(n&&typeof n=="object")}function nm(n,t){let e=!1;return Lu(n,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return e=!0,Ki}),!!((!n.depth||n.depth<3)&&ji(n)&&(t.options.setext||e))}function im(n,t,e,i){let r=Math.max(Math.min(6,n.depth||1),1),s=e.createTracker(i);if(nm(n,e)){let h=e.enter("headingSetext"),u=e.enter("phrasing"),d=e.containerPhrasing(n,{...s.current(),before:`
`,after:`
`});return u(),h(),d+`
`+(r===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}let o="#".repeat(r),a=e.enter("headingAtx"),l=e.enter("phrasing");s.move(o+" ");let c=e.containerPhrasing(n,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(c)&&(c=vi(c.charCodeAt(0))+c.slice(1)),c=c?o+" "+c:o,e.options.closeAtx&&(c+=" "+o),l(),a(),c}Fu.peek=G_;function Fu(n){return n.value||""}function G_(){return"<"}Nu.peek=W_;function Nu(n,t,e,i){let r=Pr(e),s=r==='"'?"Quote":"Apostrophe",o=e.enter("image"),a=e.enter("label"),l=e.createTracker(i),c=l.move("![");return c+=l.move(e.safe(n.alt,{before:c,after:"]",...l.current()})),c+=l.move("]("),a(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(a=e.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(e.safe(n.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=e.enter("destinationRaw"),c+=l.move(e.safe(n.url,{before:c,after:n.title?" ":")",...l.current()}))),a(),n.title&&(a=e.enter(`title${s}`),c+=l.move(" "+r),c+=l.move(e.safe(n.title,{before:c,after:r,...l.current()})),c+=l.move(r),a()),c+=l.move(")"),o(),c}function W_(){return"!"}Bu.peek=X_;function Bu(n,t,e,i){let r=n.referenceType,s=e.enter("imageReference"),o=e.enter("label"),a=e.createTracker(i),l=a.move("!["),c=e.safe(n.alt,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),o();let h=e.stack;e.stack=[],o=e.enter("reference");let u=e.safe(e.associationId(n),{before:l,after:"]",...a.current()});return o(),e.stack=h,s(),r==="full"||!c||c!==u?l+=a.move(u+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function X_(){return"!"}Ou.peek=q_;function Ou(n,t,e){let i=n.value||"",r="`",s=-1;for(;new RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++s<e.unsafe.length;){let o=e.unsafe[s],a=e.compilePattern(o),l;if(o.atBreak)for(;l=a.exec(i);){let c=l.index;i.charCodeAt(c)===10&&i.charCodeAt(c-1)===13&&c--,i=i.slice(0,c)+" "+i.slice(l.index+1)}}return r+i+r}function q_(){return"`"}function Uu(n,t){let e=ji(n);return!!(!t.options.resourceLink&&n.url&&!n.title&&n.children&&n.children.length===1&&n.children[0].type==="text"&&(e===n.url||"mailto:"+e===n.url)&&/^[a-z][a-z+.-]+:/i.test(n.url)&&!/[\0- <>\u007F]/.test(n.url))}zu.peek=$_;function zu(n,t,e,i){let r=Pr(e),s=r==='"'?"Quote":"Apostrophe",o=e.createTracker(i),a,l;if(Uu(n,e)){let h=e.stack;e.stack=[],a=e.enter("autolink");let u=o.move("<");return u+=o.move(e.containerPhrasing(n,{before:u,after:">",...o.current()})),u+=o.move(">"),a(),e.stack=h,u}a=e.enter("link"),l=e.enter("label");let c=o.move("[");return c+=o.move(e.containerPhrasing(n,{before:c,after:"](",...o.current()})),c+=o.move("]("),l(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(l=e.enter("destinationLiteral"),c+=o.move("<"),c+=o.move(e.safe(n.url,{before:c,after:">",...o.current()})),c+=o.move(">")):(l=e.enter("destinationRaw"),c+=o.move(e.safe(n.url,{before:c,after:n.title?" ":")",...o.current()}))),l(),n.title&&(l=e.enter(`title${s}`),c+=o.move(" "+r),c+=o.move(e.safe(n.title,{before:c,after:r,...o.current()})),c+=o.move(r),l()),c+=o.move(")"),a(),c}function $_(n,t,e){return Uu(n,e)?"<":"["}Vu.peek=Y_;function Vu(n,t,e,i){let r=n.referenceType,s=e.enter("linkReference"),o=e.enter("label"),a=e.createTracker(i),l=a.move("["),c=e.containerPhrasing(n,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),o();let h=e.stack;e.stack=[],o=e.enter("reference");let u=e.safe(e.associationId(n),{before:l,after:"]",...a.current()});return o(),e.stack=h,s(),r==="full"||!c||c!==u?l+=a.move(u+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function Y_(){return"["}function Dr(n){let t=n.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function rm(n){let t=Dr(n),e=n.options.bulletOther;if(!e)return t==="*"?"-":"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(e===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+e+"`) to be different");return e}function sm(n){let t=n.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function ia(n){let t=n.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function om(n,t,e,i){let r=e.enter("list"),s=e.bulletCurrent,o=n.ordered?sm(e):Dr(e),a=n.ordered?o==="."?")":".":rm(e),l=t&&e.bulletLastUsed?o===e.bulletLastUsed:!1;if(!n.ordered){let h=n.children?n.children[0]:void 0;if((o==="*"||o==="-")&&h&&(!h.children||!h.children[0])&&e.stack[e.stack.length-1]==="list"&&e.stack[e.stack.length-2]==="listItem"&&e.stack[e.stack.length-3]==="list"&&e.stack[e.stack.length-4]==="listItem"&&e.indexStack[e.indexStack.length-1]===0&&e.indexStack[e.indexStack.length-2]===0&&e.indexStack[e.indexStack.length-3]===0&&(l=!0),ia(e)===o&&h){let u=-1;for(;++u<n.children.length;){let d=n.children[u];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(o=a),e.bulletCurrent=o;let c=e.containerFlow(n,i);return e.bulletLastUsed=o,e.bulletCurrent=s,r(),c}function am(n){let t=n.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function lm(n,t,e,i){let r=am(e),s=e.bulletCurrent||Dr(e);t&&t.type==="list"&&t.ordered&&(s=(typeof t.start=="number"&&t.start>-1?t.start:1)+(e.options.incrementListMarker===!1?0:t.children.indexOf(n))+s);let o=s.length+1;(r==="tab"||r==="mixed"&&(t&&t.type==="list"&&t.spread||n.spread))&&(o=Math.ceil(o/4)*4);let a=e.createTracker(i);a.move(s+" ".repeat(o-s.length)),a.shift(o);let l=e.enter("listItem"),c=e.indentLines(e.containerFlow(n,a.current()),h);return l(),c;function h(u,d,f){return d?(f?"":" ".repeat(o))+u:(f?s:s+" ".repeat(o-s.length))+u}}function cm(n,t,e,i){let r=e.enter("paragraph"),s=e.enter("phrasing"),o=e.containerPhrasing(n,i);return s(),r(),o}var Hu=_i(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function um(n,t,e,i){return(n.children.some(function(o){return Hu(o)})?e.containerPhrasing:e.containerFlow).call(e,n,i)}function hm(n){let t=n.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Gu.peek=Z_;function Gu(n,t,e,i){let r=hm(e),s=e.enter("strong"),o=e.createTracker(i),a=o.move(r+r),l=o.move(e.containerPhrasing(n,{after:r,before:a,...o.current()})),c=l.charCodeAt(0),h=kr(i.before.charCodeAt(i.before.length-1),c,r);h.inside&&(l=vi(c)+l.slice(1));let u=l.charCodeAt(l.length-1),d=kr(i.after.charCodeAt(0),u,r);d.inside&&(l=l.slice(0,-1)+vi(u));let f=o.move(r+r);return s(),e.attentionEncodeSurroundingInfo={after:d.outside,before:h.outside},a+l+f}function Z_(n,t,e){return e.options.strong||"*"}function dm(n,t,e,i){return e.safe(n.value,i)}function fm(n){let t=n.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function pm(n,t,e){let i=(ia(e)+(e.options.ruleSpaces?" ":"")).repeat(fm(e));return e.options.ruleSpaces?i.slice(0,-1):i}var Ns={blockquote:qp,break:ku,code:Kp,definition:jp,emphasis:Du,hardBreak:ku,heading:im,html:Fu,image:Nu,imageReference:Bu,inlineCode:Ou,link:zu,linkReference:Vu,list:om,listItem:lm,paragraph:cm,root:um,strong:Gu,text:dm,thematicBreak:pm};var mm=document.createElement("i");function Lr(n){let t="&"+n+";";mm.innerHTML=t;let e=mm.textContent;return e.charCodeAt(e.length-1)===59&&n!=="semi"||e===t?!1:e}function ra(n,t){let e=Number.parseInt(n,t);return e<9||e===11||e>13&&e<32||e>126&&e<160||e>55295&&e<57344||e>64975&&e<65008||(e&65535)===65535||(e&65535)===65534||e>1114111?"\uFFFD":String.fromCodePoint(e)}var J_=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function gm(n){return n.replace(J_,K_)}function K_(n,t,e){if(t)return t;if(e.charCodeAt(0)===35){let r=e.charCodeAt(1),s=r===120||r===88;return ra(e.slice(s?2:1),s?16:10)}return Lr(e)||n}function Xu(){return{enter:{table:j_,tableData:xm,tableHeader:xm,tableRow:tv},exit:{codeText:ev,table:Q_,tableData:Wu,tableHeader:Wu,tableRow:Wu}}}function j_(n){let t=n._align;this.enter({type:"table",align:t.map(function(e){return e==="none"?null:e}),children:[]},n),this.data.inTable=!0}function Q_(n){this.exit(n),this.data.inTable=void 0}function tv(n){this.enter({type:"tableRow",children:[]},n)}function Wu(n){this.exit(n)}function xm(n){this.enter({type:"tableCell",children:[]},n)}function ev(n){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,nv));let e=this.stack[this.stack.length-1];e.type,e.value=t,this.exit(n)}function nv(n,t){return t==="|"?t:n}function qu(n){let t=n||{},e=t.tableCellPadding,i=t.tablePipeAlign,r=t.stringLength,s=e?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:o,tableCell:l,tableRow:a}};function o(f,g,y,m){return c(h(f,y,m),f.align)}function a(f,g,y,m){let p=u(f,y,m),v=c([p]);return v.slice(0,v.indexOf(`
`))}function l(f,g,y,m){let p=y.enter("tableCell"),v=y.enter("phrasing"),w=y.containerPhrasing(f,{...m,before:s,after:s});return v(),p(),w}function c(f,g){return Xp(f,{align:g,alignDelimiters:i,padding:e,stringLength:r})}function h(f,g,y){let m=f.children,p=-1,v=[],w=g.enter("table");for(;++p<m.length;)v[p]=u(m[p],g,y);return w(),v}function u(f,g,y){let m=f.children,p=-1,v=[],w=g.enter("tableRow");for(;++p<m.length;)v[p]=l(m[p],f,g,y);return w(),v}function d(f,g,y){let m=Ns.inlineCode(f,g,y);return y.stack.includes("tableCell")&&(m=m.replace(/\|/g,"\\$&")),m}}function $u(){return{exit:{taskListCheckValueChecked:ym,taskListCheckValueUnchecked:ym,paragraph:iv}}}function Yu(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:rv}}}function ym(n){let t=this.stack[this.stack.length-2];t.type,t.checked=n.type==="taskListCheckValueChecked"}function iv(n){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let e=this.stack[this.stack.length-1];e.type;let i=e.children[0];if(i&&i.type==="text"){let r=t.children,s=-1,o;for(;++s<r.length;){let a=r[s];if(a.type==="paragraph"){o=a;break}}o===e&&(i.value=i.value.slice(1),i.value.length===0?e.children.shift():e.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,e.position.start=Object.assign({},i.position.start)))}}this.exit(n)}function rv(n,t,e,i){let r=n.children[0],s=typeof n.checked=="boolean"&&r&&r.type==="paragraph",o="["+(n.checked?"x":" ")+"] ",a=e.createTracker(i);s&&a.move(o);let l=Ns.listItem(n,t,e,{...i,...a.current()});return s&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),l;function c(h){return h+o}}function Zu(){return[Tu(),Ru(),Iu(),Xu(),$u()]}function Ju(n){return{extensions:[Au(),Cu(n),Pu(),qu(n),Yu()]}}function ve(n,t,e,i){let r=n.length,s=0,o;if(t<0?t=-t>r?0:r+t:t=t>r?r:t,e=e>0?e:0,i.length<1e4)o=Array.from(i),o.unshift(t,e),n.splice(...o);else for(e&&n.splice(t,e);s<i.length;)o=i.slice(s,s+1e4),o.unshift(t,0),n.splice(...o),s+=1e4,t+=1e4}function $e(n,t){return n.length>0?(ve(n,n.length,0,t),n):t}var _m={}.hasOwnProperty;function sa(n){let t={},e=-1;for(;++e<n.length;)sv(t,n[e]);return t}function sv(n,t){let e;for(e in t){let r=(_m.call(n,e)?n[e]:void 0)||(n[e]={}),s=t[e],o;if(s)for(o in s){_m.call(r,o)||(r[o]=[]);let a=s[o];ov(r[o],Array.isArray(a)?a:a?[a]:[])}}}function ov(n,t){let e=-1,i=[];for(;++e<t.length;)(t[e].add==="after"?n:i).push(t[e]);ve(n,0,0,i)}var av={tokenize:dv,partial:!0},vm={tokenize:fv,partial:!0},bm={tokenize:pv,partial:!0},Sm={tokenize:mv,partial:!0},lv={tokenize:gv,partial:!0},Mm={name:"wwwAutolink",tokenize:uv,previous:Em},wm={name:"protocolAutolink",tokenize:hv,previous:Tm},Kn={name:"emailAutolink",tokenize:cv,previous:Am},Bn={};function ju(){return{text:Bn}}var Qi=48;for(;Qi<123;)Bn[Qi]=Kn,Qi++,Qi===58?Qi=65:Qi===91&&(Qi=97);Bn[43]=Kn;Bn[45]=Kn;Bn[46]=Kn;Bn[95]=Kn;Bn[72]=[Kn,wm];Bn[104]=[Kn,wm];Bn[87]=[Kn,Mm];Bn[119]=[Kn,Mm];function cv(n,t,e){let i=this,r,s;return o;function o(u){return!Ku(u)||!Am.call(i,i.previous)||Qu(i.events)?e(u):(n.enter("literalAutolink"),n.enter("literalAutolinkEmail"),a(u))}function a(u){return Ku(u)?(n.consume(u),a):u===64?(n.consume(u),l):e(u)}function l(u){return u===46?n.check(lv,h,c)(u):u===45||u===95||Ae(u)?(s=!0,n.consume(u),l):h(u)}function c(u){return n.consume(u),r=!0,l}function h(u){return s&&r&&Te(i.previous)?(n.exit("literalAutolinkEmail"),n.exit("literalAutolink"),t(u)):e(u)}}function uv(n,t,e){let i=this;return r;function r(o){return o!==87&&o!==119||!Em.call(i,i.previous)||Qu(i.events)?e(o):(n.enter("literalAutolink"),n.enter("literalAutolinkWww"),n.check(av,n.attempt(vm,n.attempt(bm,s),e),e)(o))}function s(o){return n.exit("literalAutolinkWww"),n.exit("literalAutolink"),t(o)}}function hv(n,t,e){let i=this,r="",s=!1;return o;function o(u){return(u===72||u===104)&&Tm.call(i,i.previous)&&!Qu(i.events)?(n.enter("literalAutolink"),n.enter("literalAutolinkHttp"),r+=String.fromCodePoint(u),n.consume(u),a):e(u)}function a(u){if(Te(u)&&r.length<5)return r+=String.fromCodePoint(u),n.consume(u),a;if(u===58){let d=r.toLowerCase();if(d==="http"||d==="https")return n.consume(u),l}return e(u)}function l(u){return u===47?(n.consume(u),s?c:(s=!0,l)):e(u)}function c(u){return u===null||Yi(u)||qt(u)||Nn(u)||Zi(u)?e(u):n.attempt(vm,n.attempt(bm,h),e)(u)}function h(u){return n.exit("literalAutolinkHttp"),n.exit("literalAutolink"),t(u)}}function dv(n,t,e){let i=0;return r;function r(o){return(o===87||o===119)&&i<3?(i++,n.consume(o),r):o===46&&i===3?(n.consume(o),s):e(o)}function s(o){return o===null?e(o):t(o)}}function fv(n,t,e){let i,r,s;return o;function o(c){return c===46||c===95?n.check(Sm,l,a)(c):c===null||qt(c)||Nn(c)||c!==45&&Zi(c)?l(c):(s=!0,n.consume(c),o)}function a(c){return c===95?i=!0:(r=i,i=void 0),n.consume(c),o}function l(c){return r||i||!s?e(c):t(c)}}function pv(n,t){let e=0,i=0;return r;function r(o){return o===40?(e++,n.consume(o),r):o===41&&i<e?s(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?n.check(Sm,t,s)(o):o===null||qt(o)||Nn(o)?t(o):(n.consume(o),r)}function s(o){return o===41&&i++,n.consume(o),r}}function mv(n,t,e){return i;function i(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(n.consume(a),i):a===38?(n.consume(a),s):a===93?(n.consume(a),r):a===60||a===null||qt(a)||Nn(a)?t(a):e(a)}function r(a){return a===null||a===40||a===91||qt(a)||Nn(a)?t(a):i(a)}function s(a){return Te(a)?o(a):e(a)}function o(a){return a===59?(n.consume(a),i):Te(a)?(n.consume(a),o):e(a)}}function gv(n,t,e){return i;function i(s){return n.consume(s),r}function r(s){return Ae(s)?e(s):t(s)}}function Em(n){return n===null||n===40||n===42||n===95||n===91||n===93||n===126||qt(n)}function Tm(n){return!Te(n)}function Am(n){return!(n===47||Ku(n))}function Ku(n){return n===43||n===45||n===46||n===95||Ae(n)}function Qu(n){let t=n.length,e=!1;for(;t--;){let i=n[t][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){e=!0;break}if(i._gfmAutolinkLiteralWalkedInto){e=!1;break}}return n.length>0&&!e&&(n[n.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),e}function bi(n,t,e){let i=[],r=-1;for(;++r<n.length;){let s=n[r].resolveAll;s&&!i.includes(s)&&(t=s(t,e),i.push(s))}return t}var Bs={name:"attention",resolveAll:xv,tokenize:yv};function xv(n,t){let e=-1,i,r,s,o,a,l,c,h;for(;++e<n.length;)if(n[e][0]==="enter"&&n[e][1].type==="attentionSequence"&&n[e][1]._close){for(i=e;i--;)if(n[i][0]==="exit"&&n[i][1].type==="attentionSequence"&&n[i][1]._open&&t.sliceSerialize(n[i][1]).charCodeAt(0)===t.sliceSerialize(n[e][1]).charCodeAt(0)){if((n[i][1]._close||n[e][1]._open)&&(n[e][1].end.offset-n[e][1].start.offset)%3&&!((n[i][1].end.offset-n[i][1].start.offset+n[e][1].end.offset-n[e][1].start.offset)%3))continue;l=n[i][1].end.offset-n[i][1].start.offset>1&&n[e][1].end.offset-n[e][1].start.offset>1?2:1;let u={...n[i][1].end},d={...n[e][1].start};Rm(u,-l),Rm(d,l),o={type:l>1?"strongSequence":"emphasisSequence",start:u,end:{...n[i][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...n[e][1].start},end:d},s={type:l>1?"strongText":"emphasisText",start:{...n[i][1].end},end:{...n[e][1].start}},r={type:l>1?"strong":"emphasis",start:{...o.start},end:{...a.end}},n[i][1].end={...o.start},n[e][1].start={...a.end},c=[],n[i][1].end.offset-n[i][1].start.offset&&(c=$e(c,[["enter",n[i][1],t],["exit",n[i][1],t]])),c=$e(c,[["enter",r,t],["enter",o,t],["exit",o,t],["enter",s,t]]),c=$e(c,bi(t.parser.constructs.insideSpan.null,n.slice(i+1,e),t)),c=$e(c,[["exit",s,t],["enter",a,t],["exit",a,t],["exit",r,t]]),n[e][1].end.offset-n[e][1].start.offset?(h=2,c=$e(c,[["enter",n[e][1],t],["exit",n[e][1],t]])):h=0,ve(n,i-1,e-i+3,c),e=i+c.length-h-2;break}}for(e=-1;++e<n.length;)n[e][1].type==="attentionSequence"&&(n[e][1].type="data");return n}function yv(n,t){let e=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Jn(i),s;return o;function o(l){return s=l,n.enter("attentionSequence"),a(l)}function a(l){if(l===s)return n.consume(l),a;let c=n.exit("attentionSequence"),h=Jn(l),u=!h||h===2&&r||e.includes(l),d=!r||r===2&&h||e.includes(i);return c._open=!!(s===42?u:u&&(r||!d)),c._close=!!(s===42?d:d&&(h||!u)),t(l)}}function Rm(n,t){n.column+=t,n.offset+=t,n._bufferIndex+=t}var th={name:"autolink",tokenize:_v};function _v(n,t,e){let i=0;return r;function r(f){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(f),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),s}function s(f){return Te(f)?(n.consume(f),o):f===64?e(f):c(f)}function o(f){return f===43||f===45||f===46||Ae(f)?(i=1,a(f)):c(f)}function a(f){return f===58?(n.consume(f),i=0,l):(f===43||f===45||f===46||Ae(f))&&i++<32?(n.consume(f),a):(i=0,c(f))}function l(f){return f===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(f),n.exit("autolinkMarker"),n.exit("autolink"),t):f===null||f===32||f===60||Yi(f)?e(f):(n.consume(f),l)}function c(f){return f===64?(n.consume(f),h):Pp(f)?(n.consume(f),c):e(f)}function h(f){return Ae(f)?u(f):e(f)}function u(f){return f===46?(n.consume(f),i=0,h):f===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(f),n.exit("autolinkMarker"),n.exit("autolink"),t):d(f)}function d(f){if((f===45||Ae(f))&&i++<63){let g=f===45?d:u;return n.consume(f),g}return e(f)}}function Et(n,t,e,i){let r=i?i-1:Number.POSITIVE_INFINITY,s=0;return o;function o(l){return Ct(l)?(n.enter(e),a(l)):t(l)}function a(l){return Ct(l)&&s++<r?(n.consume(l),a):(n.exit(e),t(l))}}var On={partial:!0,tokenize:vv};function vv(n,t,e){return i;function i(s){return Ct(s)?Et(n,r,"linePrefix")(s):r(s)}function r(s){return s===null||ot(s)?t(s):e(s)}}var oa={continuation:{tokenize:Sv},exit:Mv,name:"blockQuote",tokenize:bv};function bv(n,t,e){let i=this;return r;function r(o){if(o===62){let a=i.containerState;return a.open||(n.enter("blockQuote",{_container:!0}),a.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(o),n.exit("blockQuoteMarker"),s}return e(o)}function s(o){return Ct(o)?(n.enter("blockQuotePrefixWhitespace"),n.consume(o),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),t):(n.exit("blockQuotePrefix"),t(o))}}function Sv(n,t,e){let i=this;return r;function r(o){return Ct(o)?Et(n,s,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return n.attempt(oa,t,e)(o)}}function Mv(n){n.exit("blockQuote")}var aa={name:"characterEscape",tokenize:wv};function wv(n,t,e){return i;function i(s){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(s),n.exit("escapeMarker"),r}function r(s){return Dp(s)?(n.enter("characterEscapeValue"),n.consume(s),n.exit("characterEscapeValue"),n.exit("characterEscape"),t):e(s)}}var la={name:"characterReference",tokenize:Ev};function Ev(n,t,e){let i=this,r=0,s,o;return a;function a(u){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(u),n.exit("characterReferenceMarker"),l}function l(u){return u===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(u),n.exit("characterReferenceMarkerNumeric"),c):(n.enter("characterReferenceValue"),s=31,o=Ae,h(u))}function c(u){return u===88||u===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(u),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),s=6,o=kp,h):(n.enter("characterReferenceValue"),s=7,o=ks,h(u))}function h(u){if(u===59&&r){let d=n.exit("characterReferenceValue");return o===Ae&&!Lr(i.sliceSerialize(d))?e(u):(n.enter("characterReferenceMarker"),n.consume(u),n.exit("characterReferenceMarker"),n.exit("characterReference"),t)}return o(u)&&r++<s?(n.consume(u),h):e(u)}}var Cm={partial:!0,tokenize:Av},ca={concrete:!0,name:"codeFenced",tokenize:Tv};function Tv(n,t,e){let i=this,r={partial:!0,tokenize:R},s=0,o=0,a;return l;function l(M){return c(M)}function c(M){let C=i.events[i.events.length-1];return s=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,a=M,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),h(M)}function h(M){return M===a?(o++,n.consume(M),h):o<3?e(M):(n.exit("codeFencedFenceSequence"),Ct(M)?Et(n,u,"whitespace")(M):u(M))}function u(M){return M===null||ot(M)?(n.exit("codeFencedFence"),i.interrupt?t(M):n.check(Cm,y,b)(M)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),d(M))}function d(M){return M===null||ot(M)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),u(M)):Ct(M)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),Et(n,f,"whitespace")(M)):M===96&&M===a?e(M):(n.consume(M),d)}function f(M){return M===null||ot(M)?u(M):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),g(M))}function g(M){return M===null||ot(M)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),u(M)):M===96&&M===a?e(M):(n.consume(M),g)}function y(M){return n.attempt(r,b,m)(M)}function m(M){return n.enter("lineEnding"),n.consume(M),n.exit("lineEnding"),p}function p(M){return s>0&&Ct(M)?Et(n,v,"linePrefix",s+1)(M):v(M)}function v(M){return M===null||ot(M)?n.check(Cm,y,b)(M):(n.enter("codeFlowValue"),w(M))}function w(M){return M===null||ot(M)?(n.exit("codeFlowValue"),v(M)):(n.consume(M),w)}function b(M){return n.exit("codeFenced"),t(M)}function R(M,C,_){let A=0;return T;function T(N){return M.enter("lineEnding"),M.consume(N),M.exit("lineEnding"),k}function k(N){return M.enter("codeFencedFence"),Ct(N)?Et(M,D,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(N):D(N)}function D(N){return N===a?(M.enter("codeFencedFenceSequence"),F(N)):_(N)}function F(N){return N===a?(A++,M.consume(N),F):A>=o?(M.exit("codeFencedFenceSequence"),Ct(N)?Et(M,H,"whitespace")(N):H(N)):_(N)}function H(N){return N===null||ot(N)?(M.exit("codeFencedFence"),C(N)):_(N)}}}function Av(n,t,e){let i=this;return r;function r(o){return o===null?e(o):(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),s)}function s(o){return i.parser.lazy[i.now().line]?e(o):t(o)}}var Os={name:"codeIndented",tokenize:Cv},Rv={partial:!0,tokenize:Iv};function Cv(n,t,e){let i=this;return r;function r(c){return n.enter("codeIndented"),Et(n,s,"linePrefix",5)(c)}function s(c){let h=i.events[i.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?o(c):e(c)}function o(c){return c===null?l(c):ot(c)?n.attempt(Rv,o,l)(c):(n.enter("codeFlowValue"),a(c))}function a(c){return c===null||ot(c)?(n.exit("codeFlowValue"),o(c)):(n.consume(c),a)}function l(c){return n.exit("codeIndented"),t(c)}}function Iv(n,t,e){let i=this;return r;function r(o){return i.parser.lazy[i.now().line]?e(o):ot(o)?(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),r):Et(n,s,"linePrefix",5)(o)}function s(o){let a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):ot(o)?r(o):e(o)}}var eh={name:"codeText",previous:kv,resolve:Pv,tokenize:Dv};function Pv(n){let t=n.length-4,e=3,i,r;if((n[e][1].type==="lineEnding"||n[e][1].type==="space")&&(n[t][1].type==="lineEnding"||n[t][1].type==="space")){for(i=e;++i<t;)if(n[i][1].type==="codeTextData"){n[e][1].type="codeTextPadding",n[t][1].type="codeTextPadding",e+=2,t-=2;break}}for(i=e-1,t++;++i<=t;)r===void 0?i!==t&&n[i][1].type!=="lineEnding"&&(r=i):(i===t||n[i][1].type==="lineEnding")&&(n[r][1].type="codeTextData",i!==r+2&&(n[r][1].end=n[i-1][1].end,n.splice(r+2,i-r-2),t-=i-r-2,i=r+2),r=void 0);return n}function kv(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Dv(n,t,e){let i=this,r=0,s,o;return a;function a(d){return n.enter("codeText"),n.enter("codeTextSequence"),l(d)}function l(d){return d===96?(n.consume(d),r++,l):(n.exit("codeTextSequence"),c(d))}function c(d){return d===null?e(d):d===32?(n.enter("space"),n.consume(d),n.exit("space"),c):d===96?(o=n.enter("codeTextSequence"),s=0,u(d)):ot(d)?(n.enter("lineEnding"),n.consume(d),n.exit("lineEnding"),c):(n.enter("codeTextData"),h(d))}function h(d){return d===null||d===32||d===96||ot(d)?(n.exit("codeTextData"),c(d)):(n.consume(d),h)}function u(d){return d===96?(n.consume(d),s++,u):s===r?(n.exit("codeTextSequence"),n.exit("codeText"),t(d)):(o.type="codeTextData",h(d))}}var ua=class{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,e){let i=e==null?Number.POSITIVE_INFINITY:e;return i<this.left.length?this.left.slice(t,i):t>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(t,e,i){let r=e||0;this.setCursor(Math.trunc(t));let s=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&Us(this.left,i),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Us(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Us(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let e=this.left.splice(t,Number.POSITIVE_INFINITY);Us(this.right,e.reverse())}else{let e=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Us(this.left,e.reverse())}}};function Us(n,t){let e=0;if(t.length<1e4)n.push(...t);else for(;e<t.length;)n.push(...t.slice(e,e+1e4)),e+=1e4}function ha(n){let t={},e=-1,i,r,s,o,a,l,c,h=new ua(n);for(;++e<h.length;){for(;e in t;)e=t[e];if(i=h.get(e),e&&i[1].type==="chunkFlow"&&h.get(e-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(i[0]==="enter")i[1].contentType&&(Object.assign(t,Lv(h,e)),e=t[e],c=!0);else if(i[1]._container){for(s=e,r=void 0;s--;)if(o=h.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(r&&(h.get(r)[1].type="lineEndingBlank"),o[1].type="lineEnding",r=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;r&&(i[1].end={...h.get(r)[1].start},a=h.slice(r,e),a.unshift(i),h.splice(r,e-r+1,a))}}return ve(n,0,Number.POSITIVE_INFINITY,h.slice(0)),!c}function Lv(n,t){let e=n.get(t)[1],i=n.get(t)[2],r=t-1,s=[],o=e._tokenizer;o||(o=i.parser[e.contentType](e.start),e._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let a=o.events,l=[],c={},h,u,d=-1,f=e,g=0,y=0,m=[y];for(;f;){for(;n.get(++r)[1]!==f;);s.push(r),f._tokenizer||(h=i.sliceStream(f),f.next||h.push(null),u&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(h),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),u=f,f=f.next}for(f=e;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(y=d+1,m.push(y),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):m.pop(),d=m.length;d--;){let p=a.slice(m[d],m[d+1]),v=s.pop();l.push([v,v+p.length-1]),n.splice(v,2,p)}for(l.reverse(),d=-1;++d<l.length;)c[g+l[d][0]]=g+l[d][1],g+=l[d][1]-l[d][0]-1;return c}var nh={resolve:Nv,tokenize:Bv},Fv={partial:!0,tokenize:Ov};function Nv(n){return ha(n),n}function Bv(n,t){let e;return i;function i(a){return n.enter("content"),e=n.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?s(a):ot(a)?n.check(Fv,o,s)(a):(n.consume(a),r)}function s(a){return n.exit("chunkContent"),n.exit("content"),t(a)}function o(a){return n.consume(a),n.exit("chunkContent"),e.next=n.enter("chunkContent",{contentType:"content",previous:e}),e=e.next,r}}function Ov(n,t,e){let i=this;return r;function r(o){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),Et(n,s,"linePrefix")}function s(o){if(o===null||ot(o))return e(o);let a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):n.interrupt(i.parser.constructs.flow,e,t)(o)}}function da(n,t,e,i,r,s,o,a,l){let c=l||Number.POSITIVE_INFINITY,h=0;return u;function u(p){return p===60?(n.enter(i),n.enter(r),n.enter(s),n.consume(p),n.exit(s),d):p===null||p===32||p===41||Yi(p)?e(p):(n.enter(i),n.enter(o),n.enter(a),n.enter("chunkString",{contentType:"string"}),y(p))}function d(p){return p===62?(n.enter(s),n.consume(p),n.exit(s),n.exit(r),n.exit(i),t):(n.enter(a),n.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===62?(n.exit("chunkString"),n.exit(a),d(p)):p===null||p===60||ot(p)?e(p):(n.consume(p),p===92?g:f)}function g(p){return p===60||p===62||p===92?(n.consume(p),f):f(p)}function y(p){return!h&&(p===null||p===41||qt(p))?(n.exit("chunkString"),n.exit(a),n.exit(o),n.exit(i),t(p)):h<c&&p===40?(n.consume(p),h++,y):p===41?(n.consume(p),h--,y):p===null||p===32||p===40||Yi(p)?e(p):(n.consume(p),p===92?m:y)}function m(p){return p===40||p===41||p===92?(n.consume(p),y):y(p)}}function fa(n,t,e,i,r,s){let o=this,a=0,l;return c;function c(f){return n.enter(i),n.enter(r),n.consume(f),n.exit(r),n.enter(s),h}function h(f){return a>999||f===null||f===91||f===93&&!l||f===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?e(f):f===93?(n.exit(s),n.enter(r),n.consume(f),n.exit(r),n.exit(i),t):ot(f)?(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),h):(n.enter("chunkString",{contentType:"string"}),u(f))}function u(f){return f===null||f===91||f===93||ot(f)||a++>999?(n.exit("chunkString"),h(f)):(n.consume(f),l||(l=!Ct(f)),f===92?d:u)}function d(f){return f===91||f===92||f===93?(n.consume(f),a++,u):u(f)}}function pa(n,t,e,i,r,s){let o;return a;function a(d){return d===34||d===39||d===40?(n.enter(i),n.enter(r),n.consume(d),n.exit(r),o=d===40?41:d,l):e(d)}function l(d){return d===o?(n.enter(r),n.consume(d),n.exit(r),n.exit(i),t):(n.enter(s),c(d))}function c(d){return d===o?(n.exit(s),l(o)):d===null?e(d):ot(d)?(n.enter("lineEnding"),n.consume(d),n.exit("lineEnding"),Et(n,c,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),h(d))}function h(d){return d===o||d===null||ot(d)?(n.exit("chunkString"),c(d)):(n.consume(d),d===92?u:h)}function u(d){return d===o||d===92?(n.consume(d),h):h(d)}}function tr(n,t){let e;return i;function i(r){return ot(r)?(n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),e=!0,i):Ct(r)?Et(n,i,e?"linePrefix":"lineSuffix")(r):t(r)}}var ih={name:"definition",tokenize:zv},Uv={partial:!0,tokenize:Vv};function zv(n,t,e){let i=this,r;return s;function s(f){return n.enter("definition"),o(f)}function o(f){return fa.call(i,n,a,e,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function a(f){return r=He(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),f===58?(n.enter("definitionMarker"),n.consume(f),n.exit("definitionMarker"),l):e(f)}function l(f){return qt(f)?tr(n,c)(f):c(f)}function c(f){return da(n,h,e,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function h(f){return n.attempt(Uv,u,u)(f)}function u(f){return Ct(f)?Et(n,d,"whitespace")(f):d(f)}function d(f){return f===null||ot(f)?(n.exit("definition"),i.parser.defined.push(r),t(f)):e(f)}}function Vv(n,t,e){return i;function i(a){return qt(a)?tr(n,r)(a):e(a)}function r(a){return pa(n,s,e,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function s(a){return Ct(a)?Et(n,o,"whitespace")(a):o(a)}function o(a){return a===null||ot(a)?t(a):e(a)}}var rh={name:"hardBreakEscape",tokenize:Hv};function Hv(n,t,e){return i;function i(s){return n.enter("hardBreakEscape"),n.consume(s),r}function r(s){return ot(s)?(n.exit("hardBreakEscape"),t(s)):e(s)}}var sh={name:"headingAtx",resolve:Gv,tokenize:Wv};function Gv(n,t){let e=n.length-2,i=3,r,s;return n[i][1].type==="whitespace"&&(i+=2),e-2>i&&n[e][1].type==="whitespace"&&(e-=2),n[e][1].type==="atxHeadingSequence"&&(i===e-1||e-4>i&&n[e-2][1].type==="whitespace")&&(e-=i+1===e?2:4),e>i&&(r={type:"atxHeadingText",start:n[i][1].start,end:n[e][1].end},s={type:"chunkText",start:n[i][1].start,end:n[e][1].end,contentType:"text"},ve(n,i,e-i+1,[["enter",r,t],["enter",s,t],["exit",s,t],["exit",r,t]])),n}function Wv(n,t,e){let i=0;return r;function r(h){return n.enter("atxHeading"),s(h)}function s(h){return n.enter("atxHeadingSequence"),o(h)}function o(h){return h===35&&i++<6?(n.consume(h),o):h===null||qt(h)?(n.exit("atxHeadingSequence"),a(h)):e(h)}function a(h){return h===35?(n.enter("atxHeadingSequence"),l(h)):h===null||ot(h)?(n.exit("atxHeading"),t(h)):Ct(h)?Et(n,a,"whitespace")(h):(n.enter("atxHeadingText"),c(h))}function l(h){return h===35?(n.consume(h),l):(n.exit("atxHeadingSequence"),a(h))}function c(h){return h===null||h===35||qt(h)?(n.exit("atxHeadingText"),a(h)):(n.consume(h),c)}}var Im=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],oh=["pre","script","style","textarea"];var ah={concrete:!0,name:"htmlFlow",resolveTo:$v,tokenize:Yv},Xv={partial:!0,tokenize:Jv},qv={partial:!0,tokenize:Zv};function $v(n){let t=n.length;for(;t--&&!(n[t][0]==="enter"&&n[t][1].type==="htmlFlow"););return t>1&&n[t-2][1].type==="linePrefix"&&(n[t][1].start=n[t-2][1].start,n[t+1][1].start=n[t-2][1].start,n.splice(t-2,2)),n}function Yv(n,t,e){let i=this,r,s,o,a,l;return c;function c(P){return h(P)}function h(P){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(P),u}function u(P){return P===33?(n.consume(P),d):P===47?(n.consume(P),s=!0,y):P===63?(n.consume(P),r=3,i.interrupt?t:I):Te(P)?(n.consume(P),o=String.fromCharCode(P),m):e(P)}function d(P){return P===45?(n.consume(P),r=2,f):P===91?(n.consume(P),r=5,a=0,g):Te(P)?(n.consume(P),r=4,i.interrupt?t:I):e(P)}function f(P){return P===45?(n.consume(P),i.interrupt?t:I):e(P)}function g(P){let $t="CDATA[";return P===$t.charCodeAt(a++)?(n.consume(P),a===$t.length?i.interrupt?t:D:g):e(P)}function y(P){return Te(P)?(n.consume(P),o=String.fromCharCode(P),m):e(P)}function m(P){if(P===null||P===47||P===62||qt(P)){let $t=P===47,Gt=o.toLowerCase();return!$t&&!s&&oh.includes(Gt)?(r=1,i.interrupt?t(P):D(P)):Im.includes(o.toLowerCase())?(r=6,$t?(n.consume(P),p):i.interrupt?t(P):D(P)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?e(P):s?v(P):w(P))}return P===45||Ae(P)?(n.consume(P),o+=String.fromCharCode(P),m):e(P)}function p(P){return P===62?(n.consume(P),i.interrupt?t:D):e(P)}function v(P){return Ct(P)?(n.consume(P),v):T(P)}function w(P){return P===47?(n.consume(P),T):P===58||P===95||Te(P)?(n.consume(P),b):Ct(P)?(n.consume(P),w):T(P)}function b(P){return P===45||P===46||P===58||P===95||Ae(P)?(n.consume(P),b):R(P)}function R(P){return P===61?(n.consume(P),M):Ct(P)?(n.consume(P),R):w(P)}function M(P){return P===null||P===60||P===61||P===62||P===96?e(P):P===34||P===39?(n.consume(P),l=P,C):Ct(P)?(n.consume(P),M):_(P)}function C(P){return P===l?(n.consume(P),l=null,A):P===null||ot(P)?e(P):(n.consume(P),C)}function _(P){return P===null||P===34||P===39||P===47||P===60||P===61||P===62||P===96||qt(P)?R(P):(n.consume(P),_)}function A(P){return P===47||P===62||Ct(P)?w(P):e(P)}function T(P){return P===62?(n.consume(P),k):e(P)}function k(P){return P===null||ot(P)?D(P):Ct(P)?(n.consume(P),k):e(P)}function D(P){return P===45&&r===2?(n.consume(P),X):P===60&&r===1?(n.consume(P),$):P===62&&r===4?(n.consume(P),lt):P===63&&r===3?(n.consume(P),I):P===93&&r===5?(n.consume(P),it):ot(P)&&(r===6||r===7)?(n.exit("htmlFlowData"),n.check(Xv,gt,F)(P)):P===null||ot(P)?(n.exit("htmlFlowData"),F(P)):(n.consume(P),D)}function F(P){return n.check(qv,H,gt)(P)}function H(P){return n.enter("lineEnding"),n.consume(P),n.exit("lineEnding"),N}function N(P){return P===null||ot(P)?F(P):(n.enter("htmlFlowData"),D(P))}function X(P){return P===45?(n.consume(P),I):D(P)}function $(P){return P===47?(n.consume(P),o="",K):D(P)}function K(P){if(P===62){let $t=o.toLowerCase();return oh.includes($t)?(n.consume(P),lt):D(P)}return Te(P)&&o.length<8?(n.consume(P),o+=String.fromCharCode(P),K):D(P)}function it(P){return P===93?(n.consume(P),I):D(P)}function I(P){return P===62?(n.consume(P),lt):P===45&&r===2?(n.consume(P),I):D(P)}function lt(P){return P===null||ot(P)?(n.exit("htmlFlowData"),gt(P)):(n.consume(P),lt)}function gt(P){return n.exit("htmlFlow"),t(P)}}function Zv(n,t,e){let i=this;return r;function r(o){return ot(o)?(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),s):e(o)}function s(o){return i.parser.lazy[i.now().line]?e(o):t(o)}}function Jv(n,t,e){return i;function i(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),n.attempt(On,t,e)}}var lh={name:"htmlText",tokenize:Kv};function Kv(n,t,e){let i=this,r,s,o;return a;function a(I){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(I),l}function l(I){return I===33?(n.consume(I),c):I===47?(n.consume(I),R):I===63?(n.consume(I),w):Te(I)?(n.consume(I),_):e(I)}function c(I){return I===45?(n.consume(I),h):I===91?(n.consume(I),s=0,g):Te(I)?(n.consume(I),v):e(I)}function h(I){return I===45?(n.consume(I),f):e(I)}function u(I){return I===null?e(I):I===45?(n.consume(I),d):ot(I)?(o=u,$(I)):(n.consume(I),u)}function d(I){return I===45?(n.consume(I),f):u(I)}function f(I){return I===62?X(I):I===45?d(I):u(I)}function g(I){let lt="CDATA[";return I===lt.charCodeAt(s++)?(n.consume(I),s===lt.length?y:g):e(I)}function y(I){return I===null?e(I):I===93?(n.consume(I),m):ot(I)?(o=y,$(I)):(n.consume(I),y)}function m(I){return I===93?(n.consume(I),p):y(I)}function p(I){return I===62?X(I):I===93?(n.consume(I),p):y(I)}function v(I){return I===null||I===62?X(I):ot(I)?(o=v,$(I)):(n.consume(I),v)}function w(I){return I===null?e(I):I===63?(n.consume(I),b):ot(I)?(o=w,$(I)):(n.consume(I),w)}function b(I){return I===62?X(I):w(I)}function R(I){return Te(I)?(n.consume(I),M):e(I)}function M(I){return I===45||Ae(I)?(n.consume(I),M):C(I)}function C(I){return ot(I)?(o=C,$(I)):Ct(I)?(n.consume(I),C):X(I)}function _(I){return I===45||Ae(I)?(n.consume(I),_):I===47||I===62||qt(I)?A(I):e(I)}function A(I){return I===47?(n.consume(I),X):I===58||I===95||Te(I)?(n.consume(I),T):ot(I)?(o=A,$(I)):Ct(I)?(n.consume(I),A):X(I)}function T(I){return I===45||I===46||I===58||I===95||Ae(I)?(n.consume(I),T):k(I)}function k(I){return I===61?(n.consume(I),D):ot(I)?(o=k,$(I)):Ct(I)?(n.consume(I),k):A(I)}function D(I){return I===null||I===60||I===61||I===62||I===96?e(I):I===34||I===39?(n.consume(I),r=I,F):ot(I)?(o=D,$(I)):Ct(I)?(n.consume(I),D):(n.consume(I),H)}function F(I){return I===r?(n.consume(I),r=void 0,N):I===null?e(I):ot(I)?(o=F,$(I)):(n.consume(I),F)}function H(I){return I===null||I===34||I===39||I===60||I===61||I===96?e(I):I===47||I===62||qt(I)?A(I):(n.consume(I),H)}function N(I){return I===47||I===62||qt(I)?A(I):e(I)}function X(I){return I===62?(n.consume(I),n.exit("htmlTextData"),n.exit("htmlText"),t):e(I)}function $(I){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(I),n.exit("lineEnding"),K}function K(I){return Ct(I)?Et(n,it,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):it(I)}function it(I){return n.enter("htmlTextData"),o(I)}}var er={name:"labelEnd",resolveAll:eb,resolveTo:nb,tokenize:ib},jv={tokenize:rb},Qv={tokenize:sb},tb={tokenize:ob};function eb(n){let t=-1,e=[];for(;++t<n.length;){let i=n[t][1];if(e.push(n[t]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){let r=i.type==="labelImage"?4:2;i.type="data",t+=r}}return n.length!==e.length&&ve(n,0,n.length,e),n}function nb(n,t){let e=n.length,i=0,r,s,o,a;for(;e--;)if(r=n[e][1],s){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;n[e][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(o){if(n[e][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(s=e,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(o=e);let l={type:n[s][1].type==="labelLink"?"link":"image",start:{...n[s][1].start},end:{...n[n.length-1][1].end}},c={type:"label",start:{...n[s][1].start},end:{...n[o][1].end}},h={type:"labelText",start:{...n[s+i+2][1].end},end:{...n[o-2][1].start}};return a=[["enter",l,t],["enter",c,t]],a=$e(a,n.slice(s+1,s+i+3)),a=$e(a,[["enter",h,t]]),a=$e(a,bi(t.parser.constructs.insideSpan.null,n.slice(s+i+4,o-3),t)),a=$e(a,[["exit",h,t],n[o-2],n[o-1],["exit",c,t]]),a=$e(a,n.slice(o+1)),a=$e(a,[["exit",l,t]]),ve(n,s,n.length,a),n}function ib(n,t,e){let i=this,r=i.events.length,s,o;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){s=i.events[r][1];break}return a;function a(d){return s?s._inactive?u(d):(o=i.parser.defined.includes(He(i.sliceSerialize({start:s.end,end:i.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(d),n.exit("labelMarker"),n.exit("labelEnd"),l):e(d)}function l(d){return d===40?n.attempt(jv,h,o?h:u)(d):d===91?n.attempt(Qv,h,o?c:u)(d):o?h(d):u(d)}function c(d){return n.attempt(tb,h,u)(d)}function h(d){return t(d)}function u(d){return s._balanced=!0,e(d)}}function rb(n,t,e){return i;function i(u){return n.enter("resource"),n.enter("resourceMarker"),n.consume(u),n.exit("resourceMarker"),r}function r(u){return qt(u)?tr(n,s)(u):s(u)}function s(u){return u===41?h(u):da(n,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function o(u){return qt(u)?tr(n,l)(u):h(u)}function a(u){return e(u)}function l(u){return u===34||u===39||u===40?pa(n,c,e,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):h(u)}function c(u){return qt(u)?tr(n,h)(u):h(u)}function h(u){return u===41?(n.enter("resourceMarker"),n.consume(u),n.exit("resourceMarker"),n.exit("resource"),t):e(u)}}function sb(n,t,e){let i=this;return r;function r(a){return fa.call(i,n,s,o,"reference","referenceMarker","referenceString")(a)}function s(a){return i.parser.defined.includes(He(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?t(a):e(a)}function o(a){return e(a)}}function ob(n,t,e){return i;function i(s){return n.enter("reference"),n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),r}function r(s){return s===93?(n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),n.exit("reference"),t):e(s)}}var ch={name:"labelStartImage",resolveAll:er.resolveAll,tokenize:ab};function ab(n,t,e){let i=this;return r;function r(a){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(a),n.exit("labelImageMarker"),s}function s(a){return a===91?(n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),n.exit("labelImage"),o):e(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?e(a):t(a)}}var uh={name:"labelStartLink",resolveAll:er.resolveAll,tokenize:lb};function lb(n,t,e){let i=this;return r;function r(o){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(o),n.exit("labelMarker"),n.exit("labelLink"),s}function s(o){return o===94&&"_hiddenFootnoteSupport"in i.parser.constructs?e(o):t(o)}}var zs={name:"lineEnding",tokenize:cb};function cb(n,t){return e;function e(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),Et(n,t,"linePrefix")}}var nr={name:"thematicBreak",tokenize:ub};function ub(n,t,e){let i=0,r;return s;function s(c){return n.enter("thematicBreak"),o(c)}function o(c){return r=c,a(c)}function a(c){return c===r?(n.enter("thematicBreakSequence"),l(c)):i>=3&&(c===null||ot(c))?(n.exit("thematicBreak"),t(c)):e(c)}function l(c){return c===r?(n.consume(c),i++,l):(n.exit("thematicBreakSequence"),Ct(c)?Et(n,a,"whitespace")(c):a(c))}}var Ge={continuation:{tokenize:pb},exit:gb,name:"list",tokenize:fb},hb={partial:!0,tokenize:xb},db={partial:!0,tokenize:mb};function fb(n,t,e){let i=this,r=i.events[i.events.length-1],s=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,o=0;return a;function a(f){let g=i.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!i.containerState.marker||f===i.containerState.marker:ks(f)){if(i.containerState.type||(i.containerState.type=g,n.enter(g,{_container:!0})),g==="listUnordered")return n.enter("listItemPrefix"),f===42||f===45?n.check(nr,e,c)(f):c(f);if(!i.interrupt||f===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),l(f)}return e(f)}function l(f){return ks(f)&&++o<10?(n.consume(f),l):(!i.interrupt||o<2)&&(i.containerState.marker?f===i.containerState.marker:f===41||f===46)?(n.exit("listItemValue"),c(f)):e(f)}function c(f){return n.enter("listItemMarker"),n.consume(f),n.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||f,n.check(On,i.interrupt?e:h,n.attempt(hb,d,u))}function h(f){return i.containerState.initialBlankLine=!0,s++,d(f)}function u(f){return Ct(f)?(n.enter("listItemPrefixWhitespace"),n.consume(f),n.exit("listItemPrefixWhitespace"),d):e(f)}function d(f){return i.containerState.size=s+i.sliceSerialize(n.exit("listItemPrefix"),!0).length,t(f)}}function pb(n,t,e){let i=this;return i.containerState._closeFlow=void 0,n.check(On,r,s);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,Et(n,t,"listItemIndent",i.containerState.size+1)(a)}function s(a){return i.containerState.furtherBlankLines||!Ct(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,o(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,n.attempt(db,t,o)(a))}function o(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,Et(n,n.attempt(Ge,t,e),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function mb(n,t,e){let i=this;return Et(n,r,"listItemIndent",i.containerState.size+1);function r(s){let o=i.events[i.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===i.containerState.size?t(s):e(s)}}function gb(n){n.exit(this.containerState.type)}function xb(n,t,e){let i=this;return Et(n,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(s){let o=i.events[i.events.length-1];return!Ct(s)&&o&&o[1].type==="listItemPrefixWhitespace"?t(s):e(s)}}var ma={name:"setextUnderline",resolveTo:yb,tokenize:_b};function yb(n,t){let e=n.length,i,r,s;for(;e--;)if(n[e][0]==="enter"){if(n[e][1].type==="content"){i=e;break}n[e][1].type==="paragraph"&&(r=e)}else n[e][1].type==="content"&&n.splice(e,1),!s&&n[e][1].type==="definition"&&(s=e);let o={type:"setextHeading",start:{...n[i][1].start},end:{...n[n.length-1][1].end}};return n[r][1].type="setextHeadingText",s?(n.splice(r,0,["enter",o,t]),n.splice(s+1,0,["exit",n[i][1],t]),n[i][1].end={...n[s][1].end}):n[i][1]=o,n.push(["exit",o,t]),n}function _b(n,t,e){let i=this,r;return s;function s(c){let h=i.events.length,u;for(;h--;)if(i.events[h][1].type!=="lineEnding"&&i.events[h][1].type!=="linePrefix"&&i.events[h][1].type!=="content"){u=i.events[h][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||u)?(n.enter("setextHeadingLine"),r=c,o(c)):e(c)}function o(c){return n.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===r?(n.consume(c),a):(n.exit("setextHeadingLineSequence"),Ct(c)?Et(n,l,"lineSuffix")(c):l(c))}function l(c){return c===null||ot(c)?(n.exit("setextHeadingLine"),t(c)):e(c)}}var vb={tokenize:Ab,partial:!0};function hh(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:wb,continuation:{tokenize:Eb},exit:Tb}},text:{91:{name:"gfmFootnoteCall",tokenize:Mb},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:bb,resolveTo:Sb}}}}function bb(n,t,e){let i=this,r=i.events.length,s=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]),o;for(;r--;){let l=i.events[r][1];if(l.type==="labelImage"){o=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!o||!o._balanced)return e(l);let c=He(i.sliceSerialize({start:o.end,end:i.now()}));return c.codePointAt(0)!==94||!s.includes(c.slice(1))?e(l):(n.enter("gfmFootnoteCallLabelMarker"),n.consume(l),n.exit("gfmFootnoteCallLabelMarker"),t(l))}}function Sb(n,t){let e=n.length,i;for(;e--;)if(n[e][1].type==="labelImage"&&n[e][0]==="enter"){i=n[e][1];break}n[e+1][1].type="data",n[e+3][1].type="gfmFootnoteCallLabelMarker";let r={type:"gfmFootnoteCall",start:Object.assign({},n[e+3][1].start),end:Object.assign({},n[n.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},n[e+3][1].end),end:Object.assign({},n[e+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},n[n.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},l=[n[e+1],n[e+2],["enter",r,t],n[e+3],n[e+4],["enter",s,t],["exit",s,t],["enter",o,t],["enter",a,t],["exit",a,t],["exit",o,t],n[n.length-2],n[n.length-1],["exit",r,t]];return n.splice(e,n.length-e+1,...l),n}function Mb(n,t,e){let i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]),s=0,o;return a;function a(u){return n.enter("gfmFootnoteCall"),n.enter("gfmFootnoteCallLabelMarker"),n.consume(u),n.exit("gfmFootnoteCallLabelMarker"),l}function l(u){return u!==94?e(u):(n.enter("gfmFootnoteCallMarker"),n.consume(u),n.exit("gfmFootnoteCallMarker"),n.enter("gfmFootnoteCallString"),n.enter("chunkString").contentType="string",c)}function c(u){if(s>999||u===93&&!o||u===null||u===91||qt(u))return e(u);if(u===93){n.exit("chunkString");let d=n.exit("gfmFootnoteCallString");return r.includes(He(i.sliceSerialize(d)))?(n.enter("gfmFootnoteCallLabelMarker"),n.consume(u),n.exit("gfmFootnoteCallLabelMarker"),n.exit("gfmFootnoteCall"),t):e(u)}return qt(u)||(o=!0),s++,n.consume(u),u===92?h:c}function h(u){return u===91||u===92||u===93?(n.consume(u),s++,c):c(u)}}function wb(n,t,e){let i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]),s,o=0,a;return l;function l(g){return n.enter("gfmFootnoteDefinition")._container=!0,n.enter("gfmFootnoteDefinitionLabel"),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(g),n.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(g){return g===94?(n.enter("gfmFootnoteDefinitionMarker"),n.consume(g),n.exit("gfmFootnoteDefinitionMarker"),n.enter("gfmFootnoteDefinitionLabelString"),n.enter("chunkString").contentType="string",h):e(g)}function h(g){if(o>999||g===93&&!a||g===null||g===91||qt(g))return e(g);if(g===93){n.exit("chunkString");let y=n.exit("gfmFootnoteDefinitionLabelString");return s=He(i.sliceSerialize(y)),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(g),n.exit("gfmFootnoteDefinitionLabelMarker"),n.exit("gfmFootnoteDefinitionLabel"),d}return qt(g)||(a=!0),o++,n.consume(g),g===92?u:h}function u(g){return g===91||g===92||g===93?(n.consume(g),o++,h):h(g)}function d(g){return g===58?(n.enter("definitionMarker"),n.consume(g),n.exit("definitionMarker"),r.includes(s)||r.push(s),Et(n,f,"gfmFootnoteDefinitionWhitespace")):e(g)}function f(g){return t(g)}}function Eb(n,t,e){return n.check(On,t,n.attempt(vb,t,e))}function Tb(n){n.exit("gfmFootnoteDefinition")}function Ab(n,t,e){let i=this;return Et(n,r,"gfmFootnoteDefinitionIndent",5);function r(s){let o=i.events[i.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(s):e(s)}}function dh(n){let e=(n||{}).singleTilde,i={name:"strikethrough",tokenize:s,resolveAll:r};return e==null&&(e=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(o,a){let l=-1;for(;++l<o.length;)if(o[l][0]==="enter"&&o[l][1].type==="strikethroughSequenceTemporary"&&o[l][1]._close){let c=l;for(;c--;)if(o[c][0]==="exit"&&o[c][1].type==="strikethroughSequenceTemporary"&&o[c][1]._open&&o[l][1].end.offset-o[l][1].start.offset===o[c][1].end.offset-o[c][1].start.offset){o[l][1].type="strikethroughSequence",o[c][1].type="strikethroughSequence";let h={type:"strikethrough",start:Object.assign({},o[c][1].start),end:Object.assign({},o[l][1].end)},u={type:"strikethroughText",start:Object.assign({},o[c][1].end),end:Object.assign({},o[l][1].start)},d=[["enter",h,a],["enter",o[c][1],a],["exit",o[c][1],a],["enter",u,a]],f=a.parser.constructs.insideSpan.null;f&&ve(d,d.length,0,bi(f,o.slice(c+1,l),a)),ve(d,d.length,0,[["exit",u,a],["enter",o[l][1],a],["exit",o[l][1],a],["exit",h,a]]),ve(o,c-1,l-c+3,d),l=c+d.length-2;break}}for(l=-1;++l<o.length;)o[l][1].type==="strikethroughSequenceTemporary"&&(o[l][1].type="data");return o}function s(o,a,l){let c=this.previous,h=this.events,u=0;return d;function d(g){return c===126&&h[h.length-1][1].type!=="characterEscape"?l(g):(o.enter("strikethroughSequenceTemporary"),f(g))}function f(g){let y=Jn(c);if(g===126)return u>1?l(g):(o.consume(g),u++,f);if(u<2&&!e)return l(g);let m=o.exit("strikethroughSequenceTemporary"),p=Jn(g);return m._open=!p||p===2&&!!y,m._close=!y||y===2&&!!p,a(g)}}}var ga=class{constructor(){this.map=[]}add(t,e,i){Rb(this,t,e,i)}consume(t){if(this.map.sort(function(s,o){return s[0]-o[0]}),this.map.length===0)return;let e=this.map.length,i=[];for(;e>0;)e-=1,i.push(t.slice(this.map[e][0]+this.map[e][1]),this.map[e][2]),t.length=this.map[e][0];i.push(t.slice()),t.length=0;let r=i.pop();for(;r;){for(let s of r)t.push(s);r=i.pop()}this.map.length=0}};function Rb(n,t,e,i){let r=0;if(!(e===0&&i.length===0)){for(;r<n.map.length;){if(n.map[r][0]===t){n.map[r][1]+=e,n.map[r][2].push(...i);return}r+=1}n.map.push([t,e,i])}}function Pm(n,t){let e=!1,i=[];for(;t<n.length;){let r=n[t];if(e){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(n[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(n[t-1][1].type==="tableDelimiterMarker"){let s=i.length-1;i[s]=i[s]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(e=!0);t+=1}return i}function fh(){return{flow:{null:{name:"table",tokenize:Cb,resolveAll:Ib}}}}function Cb(n,t,e){let i=this,r=0,s=0,o;return a;function a(T){let k=i.events.length-1;for(;k>-1;){let H=i.events[k][1].type;if(H==="lineEnding"||H==="linePrefix")k--;else break}let D=k>-1?i.events[k][1].type:null,F=D==="tableHead"||D==="tableRow"?M:l;return F===M&&i.parser.lazy[i.now().line]?e(T):F(T)}function l(T){return n.enter("tableHead"),n.enter("tableRow"),c(T)}function c(T){return T===124||(o=!0,s+=1),h(T)}function h(T){return T===null?e(T):ot(T)?s>1?(s=0,i.interrupt=!0,n.exit("tableRow"),n.enter("lineEnding"),n.consume(T),n.exit("lineEnding"),f):e(T):Ct(T)?Et(n,h,"whitespace")(T):(s+=1,o&&(o=!1,r+=1),T===124?(n.enter("tableCellDivider"),n.consume(T),n.exit("tableCellDivider"),o=!0,h):(n.enter("data"),u(T)))}function u(T){return T===null||T===124||qt(T)?(n.exit("data"),h(T)):(n.consume(T),T===92?d:u)}function d(T){return T===92||T===124?(n.consume(T),u):u(T)}function f(T){return i.interrupt=!1,i.parser.lazy[i.now().line]?e(T):(n.enter("tableDelimiterRow"),o=!1,Ct(T)?Et(n,g,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):g(T))}function g(T){return T===45||T===58?m(T):T===124?(o=!0,n.enter("tableCellDivider"),n.consume(T),n.exit("tableCellDivider"),y):R(T)}function y(T){return Ct(T)?Et(n,m,"whitespace")(T):m(T)}function m(T){return T===58?(s+=1,o=!0,n.enter("tableDelimiterMarker"),n.consume(T),n.exit("tableDelimiterMarker"),p):T===45?(s+=1,p(T)):T===null||ot(T)?b(T):R(T)}function p(T){return T===45?(n.enter("tableDelimiterFiller"),v(T)):R(T)}function v(T){return T===45?(n.consume(T),v):T===58?(o=!0,n.exit("tableDelimiterFiller"),n.enter("tableDelimiterMarker"),n.consume(T),n.exit("tableDelimiterMarker"),w):(n.exit("tableDelimiterFiller"),w(T))}function w(T){return Ct(T)?Et(n,b,"whitespace")(T):b(T)}function b(T){return T===124?g(T):T===null||ot(T)?!o||r!==s?R(T):(n.exit("tableDelimiterRow"),n.exit("tableHead"),t(T)):R(T)}function R(T){return e(T)}function M(T){return n.enter("tableRow"),C(T)}function C(T){return T===124?(n.enter("tableCellDivider"),n.consume(T),n.exit("tableCellDivider"),C):T===null||ot(T)?(n.exit("tableRow"),t(T)):Ct(T)?Et(n,C,"whitespace")(T):(n.enter("data"),_(T))}function _(T){return T===null||T===124||qt(T)?(n.exit("data"),C(T)):(n.consume(T),T===92?A:_)}function A(T){return T===92||T===124?(n.consume(T),_):_(T)}}function Ib(n,t){let e=-1,i=!0,r=0,s=[0,0,0,0],o=[0,0,0,0],a=!1,l=0,c,h,u,d=new ga;for(;++e<n.length;){let f=n[e],g=f[1];f[0]==="enter"?g.type==="tableHead"?(a=!1,l!==0&&(km(d,t,l,c,h),h=void 0,l=0),c={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(e,0,[["enter",c,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(i=!0,u=void 0,s=[0,0,0,0],o=[0,e+1,0,0],a&&(a=!1,h={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(e,0,[["enter",h,t]])),r=g.type==="tableDelimiterRow"?2:h?3:1):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(i=!1,o[2]===0&&(s[1]!==0&&(o[0]=o[1],u=xa(d,t,s,r,void 0,u),s=[0,0,0,0]),o[2]=e)):g.type==="tableCellDivider"&&(i?i=!1:(s[1]!==0&&(o[0]=o[1],u=xa(d,t,s,r,void 0,u)),s=o,o=[s[1],e,0,0])):g.type==="tableHead"?(a=!0,l=e):g.type==="tableRow"||g.type==="tableDelimiterRow"?(l=e,s[1]!==0?(o[0]=o[1],u=xa(d,t,s,r,e,u)):o[1]!==0&&(u=xa(d,t,o,r,e,u)),r=0):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=e)}for(l!==0&&km(d,t,l,c,h),d.consume(t.events),e=-1;++e<t.events.length;){let f=t.events[e];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=Pm(t.events,e))}return n}function xa(n,t,e,i,r,s){let o=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",a="tableContent";e[0]!==0&&(s.end=Object.assign({},Fr(t.events,e[0])),n.add(e[0],0,[["exit",s,t]]));let l=Fr(t.events,e[1]);if(s={type:o,start:Object.assign({},l),end:Object.assign({},l)},n.add(e[1],0,[["enter",s,t]]),e[2]!==0){let c=Fr(t.events,e[2]),h=Fr(t.events,e[3]),u={type:a,start:Object.assign({},c),end:Object.assign({},h)};if(n.add(e[2],0,[["enter",u,t]]),i!==2){let d=t.events[e[2]],f=t.events[e[3]];if(d[1].end=Object.assign({},f[1].end),d[1].type="chunkText",d[1].contentType="text",e[3]>e[2]+1){let g=e[2]+1,y=e[3]-e[2]-1;n.add(g,y,[])}}n.add(e[3]+1,0,[["exit",u,t]])}return r!==void 0&&(s.end=Object.assign({},Fr(t.events,r)),n.add(r,0,[["exit",s,t]]),s=void 0),s}function km(n,t,e,i,r){let s=[],o=Fr(t.events,e);r&&(r.end=Object.assign({},o),s.push(["exit",r,t])),i.end=Object.assign({},o),s.push(["exit",i,t]),n.add(e+1,0,s)}function Fr(n,t){let e=n[t],i=e[0]==="enter"?"start":"end";return e[1][i]}var Pb={name:"tasklistCheck",tokenize:kb};function ph(){return{text:{91:Pb}}}function kb(n,t,e){let i=this;return r;function r(l){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?e(l):(n.enter("taskListCheck"),n.enter("taskListCheckMarker"),n.consume(l),n.exit("taskListCheckMarker"),s)}function s(l){return qt(l)?(n.enter("taskListCheckValueUnchecked"),n.consume(l),n.exit("taskListCheckValueUnchecked"),o):l===88||l===120?(n.enter("taskListCheckValueChecked"),n.consume(l),n.exit("taskListCheckValueChecked"),o):e(l)}function o(l){return l===93?(n.enter("taskListCheckMarker"),n.consume(l),n.exit("taskListCheckMarker"),n.exit("taskListCheck"),a):e(l)}function a(l){return ot(l)?t(l):Ct(l)?n.check({tokenize:Db},t,e)(l):e(l)}}function Db(n,t,e){return Et(n,i,"whitespace");function i(r){return r===null?e(r):t(r)}}function Dm(n){return sa([ju(),hh(),dh(n),fh(),ph()])}var Lb={};function ya(n){let t=this,e=n||Lb,i=t.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),s=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),o=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(Dm(e)),s.push(Zu()),o.push(Ju(e))}function mh(){return{enter:{mathFlow:n,mathFlowFenceMeta:t,mathText:s},exit:{mathFlow:r,mathFlowFence:i,mathFlowFenceMeta:e,mathFlowValue:a,mathText:o,mathTextData:a}};function n(l){let c={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[c]}},l)}function t(){this.buffer()}function e(){let l=this.resume(),c=this.stack[this.stack.length-1];c.type,c.meta=l}function i(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function r(l){let c=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),h=this.stack[this.stack.length-1];h.type,this.exit(l),h.value=c;let u=h.data.hChildren[0];u.type,u.tagName,u.children.push({type:"text",value:c}),this.data.mathFlowInside=void 0}function s(l){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},l),this.buffer()}function o(l){let c=this.resume(),h=this.stack[this.stack.length-1];h.type,this.exit(l),h.value=c,h.data.hChildren.push({type:"text",value:c})}function a(l){this.config.enter.data.call(this,l),this.config.exit.data.call(this,l)}}function gh(n){let t=(n||{}).singleDollarTextMath;return t==null&&(t=!0),i.peek=r,{unsafe:[{character:"\r",inConstruct:"mathFlowMeta"},{character:`
`,inConstruct:"mathFlowMeta"},{character:"$",after:t?void 0:"\\$",inConstruct:"phrasing"},{character:"$",inConstruct:"mathFlowMeta"},{atBreak:!0,character:"$",after:"\\$"}],handlers:{math:e,inlineMath:i}};function e(s,o,a,l){let c=s.value||"",h=a.createTracker(l),u="$".repeat(Math.max(na(c,"$")+1,2)),d=a.enter("mathFlow"),f=h.move(u);if(s.meta){let g=a.enter("mathFlowMeta");f+=h.move(a.safe(s.meta,{after:`
`,before:f,encode:["$"],...h.current()})),g()}return f+=h.move(`
`),c&&(f+=h.move(c+`
`)),f+=h.move(u),d(),f}function i(s,o,a){let l=s.value||"",c=1;for(t||c++;new RegExp("(^|[^$])"+"\\$".repeat(c)+"([^$]|$)").test(l);)c++;let h="$".repeat(c);/[^ \r\n]/.test(l)&&(/^[ \r\n]/.test(l)&&/[ \r\n]$/.test(l)||/^\$|\$$/.test(l))&&(l=" "+l+" ");let u=-1;for(;++u<a.unsafe.length;){let d=a.unsafe[u];if(!d.atBreak)continue;let f=a.compilePattern(d),g;for(;g=f.exec(l);){let y=g.index;l.codePointAt(y)===10&&l.codePointAt(y-1)===13&&y--,l=l.slice(0,y)+" "+l.slice(g.index+1)}}return h+l+h}function r(){return"$"}}var Fm={tokenize:Fb,concrete:!0,name:"mathFlow"},Lm={tokenize:Nb,partial:!0};function Fb(n,t,e){let i=this,r=i.events[i.events.length-1],s=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,o=0;return a;function a(v){return n.enter("mathFlow"),n.enter("mathFlowFence"),n.enter("mathFlowFenceSequence"),l(v)}function l(v){return v===36?(n.consume(v),o++,l):o<2?e(v):(n.exit("mathFlowFenceSequence"),Et(n,c,"whitespace")(v))}function c(v){return v===null||ot(v)?u(v):(n.enter("mathFlowFenceMeta"),n.enter("chunkString",{contentType:"string"}),h(v))}function h(v){return v===null||ot(v)?(n.exit("chunkString"),n.exit("mathFlowFenceMeta"),u(v)):v===36?e(v):(n.consume(v),h)}function u(v){return n.exit("mathFlowFence"),i.interrupt?t(v):n.attempt(Lm,d,m)(v)}function d(v){return n.attempt({tokenize:p,partial:!0},m,f)(v)}function f(v){return(s?Et(n,g,"linePrefix",s+1):g)(v)}function g(v){return v===null?m(v):ot(v)?n.attempt(Lm,d,m)(v):(n.enter("mathFlowValue"),y(v))}function y(v){return v===null||ot(v)?(n.exit("mathFlowValue"),g(v)):(n.consume(v),y)}function m(v){return n.exit("mathFlow"),t(v)}function p(v,w,b){let R=0;return Et(v,M,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function M(A){return v.enter("mathFlowFence"),v.enter("mathFlowFenceSequence"),C(A)}function C(A){return A===36?(R++,v.consume(A),C):R<o?b(A):(v.exit("mathFlowFenceSequence"),Et(v,_,"whitespace")(A))}function _(A){return A===null||ot(A)?(v.exit("mathFlowFence"),w(A)):b(A)}}}function Nb(n,t,e){let i=this;return r;function r(o){return o===null?t(o):(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),s)}function s(o){return i.parser.lazy[i.now().line]?e(o):t(o)}}function Nm(n){let e=(n||{}).singleDollarTextMath;return e==null&&(e=!0),{tokenize:i,resolve:Bb,previous:Ob,name:"mathText"};function i(r,s,o){let a=this,l=0,c,h;return u;function u(m){return r.enter("mathText"),r.enter("mathTextSequence"),d(m)}function d(m){return m===36?(r.consume(m),l++,d):l<2&&!e?o(m):(r.exit("mathTextSequence"),f(m))}function f(m){return m===null?o(m):m===36?(h=r.enter("mathTextSequence"),c=0,y(m)):m===32?(r.enter("space"),r.consume(m),r.exit("space"),f):ot(m)?(r.enter("lineEnding"),r.consume(m),r.exit("lineEnding"),f):(r.enter("mathTextData"),g(m))}function g(m){return m===null||m===32||m===36||ot(m)?(r.exit("mathTextData"),f(m)):(r.consume(m),g)}function y(m){return m===36?(r.consume(m),c++,y):c===l?(r.exit("mathTextSequence"),r.exit("mathText"),s(m)):(h.type="mathTextData",g(m))}}}function Bb(n){let t=n.length-4,e=3,i,r;if((n[e][1].type==="lineEnding"||n[e][1].type==="space")&&(n[t][1].type==="lineEnding"||n[t][1].type==="space")){for(i=e;++i<t;)if(n[i][1].type==="mathTextData"){n[t][1].type="mathTextPadding",n[e][1].type="mathTextPadding",e+=2,t-=2;break}}for(i=e-1,t++;++i<=t;)r===void 0?i!==t&&n[i][1].type!=="lineEnding"&&(r=i):(i===t||n[i][1].type==="lineEnding")&&(n[r][1].type="mathTextData",i!==r+2&&(n[r][1].end=n[i-1][1].end,n.splice(r+2,i-r-2),t-=i-r-2,i=r+2),r=void 0);return n}function Ob(n){return n!==36||this.events[this.events.length-1][1].type==="characterEscape"}function xh(n){return{flow:{36:Fm},text:{36:Nm(n)}}}var Ub={};function _a(n){let t=this,e=n||Ub,i=t.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),s=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),o=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(xh(e)),s.push(mh()),o.push(gh(e))}var Bm={tokenize:zb};function zb(n){let t=n.attempt(this.parser.constructs.contentInitial,i,r),e;return t;function i(a){if(a===null){n.consume(a);return}return n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),Et(n,t,"linePrefix")}function r(a){return n.enter("paragraph"),s(a)}function s(a){let l=n.enter("chunkText",{contentType:"text",previous:e});return e&&(e.next=l),e=l,o(a)}function o(a){if(a===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(a);return}return ot(a)?(n.consume(a),n.exit("chunkText"),s):(n.consume(a),o)}}var Um={tokenize:Vb},Om={tokenize:Hb};function Vb(n){let t=this,e=[],i=0,r,s,o;return a;function a(w){if(i<e.length){let b=e[i];return t.containerState=b[1],n.attempt(b[0].continuation,l,c)(w)}return c(w)}function l(w){if(i++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&v();let b=t.events.length,R=b,M;for(;R--;)if(t.events[R][0]==="exit"&&t.events[R][1].type==="chunkFlow"){M=t.events[R][1].end;break}p(i);let C=b;for(;C<t.events.length;)t.events[C][1].end={...M},C++;return ve(t.events,R+1,0,t.events.slice(b)),t.events.length=C,c(w)}return a(w)}function c(w){if(i===e.length){if(!r)return d(w);if(r.currentConstruct&&r.currentConstruct.concrete)return g(w);t.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},n.check(Om,h,u)(w)}function h(w){return r&&v(),p(i),d(w)}function u(w){return t.parser.lazy[t.now().line]=i!==e.length,o=t.now().offset,g(w)}function d(w){return t.containerState={},n.attempt(Om,f,g)(w)}function f(w){return i++,e.push([t.currentConstruct,t.containerState]),d(w)}function g(w){if(w===null){r&&v(),p(0),n.consume(w);return}return r=r||t.parser.flow(t.now()),n.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:s}),y(w)}function y(w){if(w===null){m(n.exit("chunkFlow"),!0),p(0),n.consume(w);return}return ot(w)?(n.consume(w),m(n.exit("chunkFlow")),i=0,t.interrupt=void 0,a):(n.consume(w),y)}function m(w,b){let R=t.sliceStream(w);if(b&&R.push(null),w.previous=s,s&&(s.next=w),s=w,r.defineSkip(w.start),r.write(R),t.parser.lazy[w.start.line]){let M=r.events.length;for(;M--;)if(r.events[M][1].start.offset<o&&(!r.events[M][1].end||r.events[M][1].end.offset>o))return;let C=t.events.length,_=C,A,T;for(;_--;)if(t.events[_][0]==="exit"&&t.events[_][1].type==="chunkFlow"){if(A){T=t.events[_][1].end;break}A=!0}for(p(i),M=C;M<t.events.length;)t.events[M][1].end={...T},M++;ve(t.events,_+1,0,t.events.slice(C)),t.events.length=M}}function p(w){let b=e.length;for(;b-- >w;){let R=e[b];t.containerState=R[1],R[0].exit.call(t,n)}e.length=w}function v(){r.write([null]),s=void 0,r=void 0,t.containerState._closeFlow=void 0}}function Hb(n,t,e){return Et(n,n.attempt(this.parser.constructs.document,t,e),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}var zm={tokenize:Gb};function Gb(n){let t=this,e=n.attempt(On,i,n.attempt(this.parser.constructs.flowInitial,r,Et(n,n.attempt(this.parser.constructs.flow,r,n.attempt(nh,r)),"linePrefix")));return e;function i(s){if(s===null){n.consume(s);return}return n.enter("lineEndingBlank"),n.consume(s),n.exit("lineEndingBlank"),t.currentConstruct=void 0,e}function r(s){if(s===null){n.consume(s);return}return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),t.currentConstruct=void 0,e}}var Vm={resolveAll:Xm()},Hm=Wm("string"),Gm=Wm("text");function Wm(n){return{resolveAll:Xm(n==="text"?Wb:void 0),tokenize:t};function t(e){let i=this,r=this.parser.constructs[n],s=e.attempt(r,o,a);return o;function o(h){return c(h)?s(h):a(h)}function a(h){if(h===null){e.consume(h);return}return e.enter("data"),e.consume(h),l}function l(h){return c(h)?(e.exit("data"),s(h)):(e.consume(h),l)}function c(h){if(h===null)return!0;let u=r[h],d=-1;if(u)for(;++d<u.length;){let f=u[d];if(!f.previous||f.previous.call(i,i.previous))return!0}return!1}}}function Xm(n){return t;function t(e,i){let r=-1,s;for(;++r<=e.length;)s===void 0?e[r]&&e[r][1].type==="data"&&(s=r,r++):(!e[r]||e[r][1].type!=="data")&&(r!==s+2&&(e[s][1].end=e[r-1][1].end,e.splice(s+2,r-s-2),r=s+2),s=void 0);return n?n(e,i):e}}function Wb(n,t){let e=0;for(;++e<=n.length;)if((e===n.length||n[e][1].type==="lineEnding")&&n[e-1][1].type==="data"){let i=n[e-1][1],r=t.sliceStream(i),s=r.length,o=-1,a=0,l;for(;s--;){let c=r[s];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(c===-2)l=!0,a++;else if(c!==-1){s++;break}}if(t._contentTypeTextTrailing&&e===n.length&&(a=0),a){let c={type:e===n.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?o:i.start._bufferIndex+o,_index:i.start._index+s,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...c.start},i.start.offset===i.end.offset?Object.assign(i,c):(n.splice(e,0,["enter",c,t],["exit",c,t]),e+=2)}e++}return n}var yh={};Qf(yh,{attentionMarkers:()=>jb,contentInitial:()=>qb,disable:()=>Qb,document:()=>Xb,flow:()=>Yb,flowInitial:()=>$b,insideSpan:()=>Kb,string:()=>Zb,text:()=>Jb});var Xb={42:Ge,43:Ge,45:Ge,48:Ge,49:Ge,50:Ge,51:Ge,52:Ge,53:Ge,54:Ge,55:Ge,56:Ge,57:Ge,62:oa},qb={91:ih},$b={[-2]:Os,[-1]:Os,32:Os},Yb={35:sh,42:nr,45:[ma,nr],60:ah,61:ma,95:nr,96:ca,126:ca},Zb={38:la,92:aa},Jb={[-5]:zs,[-4]:zs,[-3]:zs,33:ch,38:la,42:Bs,60:[th,lh],91:uh,92:[rh,aa],93:er,95:Bs,96:eh},Kb={null:[Bs,Vm]},jb={null:[42,95]},Qb={null:[]};function qm(n,t,e){let i={_bufferIndex:-1,_index:0,line:e&&e.line||1,column:e&&e.column||1,offset:e&&e.offset||0},r={},s=[],o=[],a=[],l=!0,c={attempt:A(C),check:A(_),consume:b,enter:R,exit:M,interrupt:A(_,{interrupt:!0})},h={code:null,containerState:{},defineSkip:p,events:[],now:m,parser:n,previous:null,sliceSerialize:g,sliceStream:y,write:f},u=t.tokenize.call(h,c),d;return t.resolveAll&&s.push(t),h;function f(F){return o=$e(o,F),v(),o[o.length-1]!==null?[]:(T(t,0),h.events=bi(s,h.events,h),h.events)}function g(F,H){return eS(y(F),H)}function y(F){return tS(o,F)}function m(){let{_bufferIndex:F,_index:H,line:N,column:X,offset:$}=i;return{_bufferIndex:F,_index:H,line:N,column:X,offset:$}}function p(F){r[F.line]=F.column,D()}function v(){let F;for(;i._index<o.length;){let H=o[i._index];if(typeof H=="string")for(F=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===F&&i._bufferIndex<H.length;)w(H.charCodeAt(i._bufferIndex));else w(H)}}function w(F){l=void 0,d=F,u=u(F)}function b(F){ot(F)?(i.line++,i.column=1,i.offset+=F===-3?2:1,D()):F!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===o[i._index].length&&(i._bufferIndex=-1,i._index++)),h.previous=F,l=!0}function R(F,H){let N=H||{};return N.type=F,N.start=m(),h.events.push(["enter",N,h]),a.push(N),N}function M(F){let H=a.pop();return H.end=m(),h.events.push(["exit",H,h]),H}function C(F,H){T(F,H.from)}function _(F,H){H.restore()}function A(F,H){return N;function N(X,$,K){let it,I,lt,gt;return Array.isArray(X)?$t(X):"tokenize"in X?$t([X]):P(X);function P(et){return kt;function kt(Dt){let Tt=Dt!==null&&et[Dt],ne=Dt!==null&&et.null,Vt=[...Array.isArray(Tt)?Tt:Tt?[Tt]:[],...Array.isArray(ne)?ne:ne?[ne]:[]];return $t(Vt)(Dt)}}function $t(et){return it=et,I=0,et.length===0?K:Gt(et[I])}function Gt(et){return kt;function kt(Dt){return gt=k(),lt=et,et.partial||(h.currentConstruct=et),et.name&&h.parser.constructs.disable.null.includes(et.name)?ct(Dt):et.tokenize.call(H?Object.assign(Object.create(h),H):h,c,Q,ct)(Dt)}}function Q(et){return l=!0,F(lt,gt),$}function ct(et){return l=!0,gt.restore(),++I<it.length?Gt(it[I]):K}}}function T(F,H){F.resolveAll&&!s.includes(F)&&s.push(F),F.resolve&&ve(h.events,H,h.events.length-H,F.resolve(h.events.slice(H),h)),F.resolveTo&&(h.events=F.resolveTo(h.events,h))}function k(){let F=m(),H=h.previous,N=h.currentConstruct,X=h.events.length,$=Array.from(a);return{from:X,restore:K};function K(){i=F,h.previous=H,h.currentConstruct=N,h.events.length=X,a=$,D()}}function D(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function tS(n,t){let e=t.start._index,i=t.start._bufferIndex,r=t.end._index,s=t.end._bufferIndex,o;if(e===r)o=[n[e].slice(i,s)];else{if(o=n.slice(e,r),i>-1){let a=o[0];typeof a=="string"?o[0]=a.slice(i):o.shift()}s>0&&o.push(n[r].slice(0,s))}return o}function eS(n,t){let e=-1,i=[],r;for(;++e<n.length;){let s=n[e],o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&r)continue;o=" ";break}default:o=String.fromCharCode(s)}r=s===-2,i.push(o)}return i.join("")}function _h(n){let i={constructs:sa([yh,...(n||{}).extensions||[]]),content:r(Bm),defined:[],document:r(Um),flow:r(zm),lazy:{},string:r(Hm),text:r(Gm)};return i;function r(s){return o;function o(a){return qm(i,s,a)}}}function vh(n){for(;!ha(n););return n}var $m=/[\0\t\n\r]/g;function bh(){let n=1,t="",e=!0,i;return r;function r(s,o,a){let l=[],c,h,u,d,f;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s)),u=0,t="",e&&(s.charCodeAt(0)===65279&&u++,e=void 0);u<s.length;){if($m.lastIndex=u,c=$m.exec(s),d=c&&c.index!==void 0?c.index:s.length,f=s.charCodeAt(d),!c){t=s.slice(u);break}if(f===10&&u===d&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),u<d&&(l.push(s.slice(u,d)),n+=d-u),f){case 0:{l.push(65533),n++;break}case 9:{for(h=Math.ceil(n/4)*4,l.push(-2);n++<h;)l.push(-1);break}case 10:{l.push(-4),n=1;break}default:i=!0,n=1}u=d+1}return a&&(i&&l.push(-5),t&&l.push(t),l.push(null)),l}}var Zm={}.hasOwnProperty;function Sh(n,t,e){return t&&typeof t=="object"&&(e=t,t=void 0),nS(e)(vh(_h(e).document().write(bh()(n,t,!0))))}function nS(n){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(xe),autolinkProtocol:A,autolinkEmail:A,atxHeading:s(Kt),blockQuote:s(Dt),characterEscape:A,characterReference:A,codeFenced:s(Tt),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:s(Tt,o),codeText:s(ne,o),codeTextData:A,data:A,codeFlowValue:A,definition:s(Vt),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:s(ee),hardBreakEscape:s(Yt),hardBreakTrailing:s(Yt),htmlFlow:s(de,o),htmlFlowData:A,htmlText:s(de,o),htmlTextData:A,image:s(ge),label:o,link:s(xe),listItem:s(ue),listItemValue:d,listOrdered:s(Se,u),listUnordered:s(Se),paragraph:s(fe),reference:P,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:s(Kt),strong:s(O),thematicBreak:s(Qt)},exit:{atxHeading:l(),atxHeadingSequence:R,autolink:l(),autolinkEmail:kt,autolinkProtocol:et,blockQuote:l(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:Gt,characterReferenceMarkerNumeric:Gt,characterReferenceValue:Q,characterReference:ct,codeFenced:l(m),codeFencedFence:y,codeFencedFenceInfo:f,codeFencedFenceMeta:g,codeFlowValue:T,codeIndented:l(p),codeText:l(N),codeTextData:T,data:T,definition:l(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:w,emphasis:l(),hardBreakEscape:l(D),hardBreakTrailing:l(D),htmlFlow:l(F),htmlFlowData:T,htmlText:l(H),htmlTextData:T,image:l($),label:it,labelText:K,lineEnding:k,link:l(X),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:$t,resourceDestinationString:I,resourceTitleString:lt,resource:gt,setextHeading:l(_),setextHeadingLineSequence:C,setextHeadingText:M,strong:l(),thematicBreak:l()}};Jm(t,(n||{}).mdastExtensions||[]);let e={};return i;function i(S){let x={type:"root",children:[]},L={stack:[x],tokenStack:[],config:t,enter:a,exit:c,buffer:o,resume:h,data:e},U=[],G=-1;for(;++G<S.length;)if(S[G][1].type==="listOrdered"||S[G][1].type==="listUnordered")if(S[G][0]==="enter")U.push(G);else{let rt=U.pop();G=r(S,rt,G)}for(G=-1;++G<S.length;){let rt=t[S[G][0]];Zm.call(rt,S[G][1].type)&&rt[S[G][1].type].call(Object.assign({sliceSerialize:S[G][2].sliceSerialize},L),S[G][1])}if(L.tokenStack.length>0){let rt=L.tokenStack[L.tokenStack.length-1];(rt[1]||Ym).call(L,void 0,rt[0])}for(x.position={start:Si(S.length>0?S[0][1].start:{line:1,column:1,offset:0}),end:Si(S.length>0?S[S.length-2][1].end:{line:1,column:1,offset:0})},G=-1;++G<t.transforms.length;)x=t.transforms[G](x)||x;return x}function r(S,x,L){let U=x-1,G=-1,rt=!1,at,Z,J,ut;for(;++U<=L;){let _t=S[U];switch(_t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{_t[0]==="enter"?G++:G--,ut=void 0;break}case"lineEndingBlank":{_t[0]==="enter"&&(at&&!ut&&!G&&!J&&(J=U),ut=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ut=void 0}if(!G&&_t[0]==="enter"&&_t[1].type==="listItemPrefix"||G===-1&&_t[0]==="exit"&&(_t[1].type==="listUnordered"||_t[1].type==="listOrdered")){if(at){let ht=U;for(Z=void 0;ht--;){let st=S[ht];if(st[1].type==="lineEnding"||st[1].type==="lineEndingBlank"){if(st[0]==="exit")continue;Z&&(S[Z][1].type="lineEndingBlank",rt=!0),st[1].type="lineEnding",Z=ht}else if(!(st[1].type==="linePrefix"||st[1].type==="blockQuotePrefix"||st[1].type==="blockQuotePrefixWhitespace"||st[1].type==="blockQuoteMarker"||st[1].type==="listItemIndent"))break}J&&(!Z||J<Z)&&(at._spread=!0),at.end=Object.assign({},Z?S[Z][1].start:_t[1].end),S.splice(Z||U,0,["exit",at,_t[2]]),U++,L++}if(_t[1].type==="listItemPrefix"){let ht={type:"listItem",_spread:!1,start:Object.assign({},_t[1].start),end:void 0};at=ht,S.splice(U,0,["enter",ht,_t[2]]),U++,L++,J=void 0,ut=!0}}}return S[x][1]._spread=rt,L}function s(S,x){return L;function L(U){a.call(this,S(U),U),x&&x.call(this,U)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(S,x,L){this.stack[this.stack.length-1].children.push(S),this.stack.push(S),this.tokenStack.push([x,L||void 0]),S.position={start:Si(x.start),end:void 0}}function l(S){return x;function x(L){S&&S.call(this,L),c.call(this,L)}}function c(S,x){let L=this.stack.pop(),U=this.tokenStack.pop();if(U)U[0].type!==S.type&&(x?x.call(this,S,U[0]):(U[1]||Ym).call(this,S,U[0]));else throw new Error("Cannot close `"+S.type+"` ("+xi({start:S.start,end:S.end})+"): it\u2019s not open");L.position.end=Si(S.end)}function h(){return ji(this.stack.pop())}function u(){this.data.expectingFirstListItemValue=!0}function d(S){if(this.data.expectingFirstListItemValue){let x=this.stack[this.stack.length-2];x.start=Number.parseInt(this.sliceSerialize(S),10),this.data.expectingFirstListItemValue=void 0}}function f(){let S=this.resume(),x=this.stack[this.stack.length-1];x.lang=S}function g(){let S=this.resume(),x=this.stack[this.stack.length-1];x.meta=S}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function m(){let S=this.resume(),x=this.stack[this.stack.length-1];x.value=S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){let S=this.resume(),x=this.stack[this.stack.length-1];x.value=S.replace(/(\r?\n|\r)$/g,"")}function v(S){let x=this.resume(),L=this.stack[this.stack.length-1];L.label=x,L.identifier=He(this.sliceSerialize(S)).toLowerCase()}function w(){let S=this.resume(),x=this.stack[this.stack.length-1];x.title=S}function b(){let S=this.resume(),x=this.stack[this.stack.length-1];x.url=S}function R(S){let x=this.stack[this.stack.length-1];if(!x.depth){let L=this.sliceSerialize(S).length;x.depth=L}}function M(){this.data.setextHeadingSlurpLineEnding=!0}function C(S){let x=this.stack[this.stack.length-1];x.depth=this.sliceSerialize(S).codePointAt(0)===61?1:2}function _(){this.data.setextHeadingSlurpLineEnding=void 0}function A(S){let L=this.stack[this.stack.length-1].children,U=L[L.length-1];(!U||U.type!=="text")&&(U=ze(),U.position={start:Si(S.start),end:void 0},L.push(U)),this.stack.push(U)}function T(S){let x=this.stack.pop();x.value+=this.sliceSerialize(S),x.position.end=Si(S.end)}function k(S){let x=this.stack[this.stack.length-1];if(this.data.atHardBreak){let L=x.children[x.children.length-1];L.position.end=Si(S.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(x.type)&&(A.call(this,S),T.call(this,S))}function D(){this.data.atHardBreak=!0}function F(){let S=this.resume(),x=this.stack[this.stack.length-1];x.value=S}function H(){let S=this.resume(),x=this.stack[this.stack.length-1];x.value=S}function N(){let S=this.resume(),x=this.stack[this.stack.length-1];x.value=S}function X(){let S=this.stack[this.stack.length-1];if(this.data.inReference){let x=this.data.referenceType||"shortcut";S.type+="Reference",S.referenceType=x,delete S.url,delete S.title}else delete S.identifier,delete S.label;this.data.referenceType=void 0}function $(){let S=this.stack[this.stack.length-1];if(this.data.inReference){let x=this.data.referenceType||"shortcut";S.type+="Reference",S.referenceType=x,delete S.url,delete S.title}else delete S.identifier,delete S.label;this.data.referenceType=void 0}function K(S){let x=this.sliceSerialize(S),L=this.stack[this.stack.length-2];L.label=gm(x),L.identifier=He(x).toLowerCase()}function it(){let S=this.stack[this.stack.length-1],x=this.resume(),L=this.stack[this.stack.length-1];if(this.data.inReference=!0,L.type==="link"){let U=S.children;L.children=U}else L.alt=x}function I(){let S=this.resume(),x=this.stack[this.stack.length-1];x.url=S}function lt(){let S=this.resume(),x=this.stack[this.stack.length-1];x.title=S}function gt(){this.data.inReference=void 0}function P(){this.data.referenceType="collapsed"}function $t(S){let x=this.resume(),L=this.stack[this.stack.length-1];L.label=x,L.identifier=He(this.sliceSerialize(S)).toLowerCase(),this.data.referenceType="full"}function Gt(S){this.data.characterReferenceType=S.type}function Q(S){let x=this.sliceSerialize(S),L=this.data.characterReferenceType,U;L?(U=ra(x,L==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):U=Lr(x);let G=this.stack[this.stack.length-1];G.value+=U}function ct(S){let x=this.stack.pop();x.position.end=Si(S.end)}function et(S){T.call(this,S);let x=this.stack[this.stack.length-1];x.url=this.sliceSerialize(S)}function kt(S){T.call(this,S);let x=this.stack[this.stack.length-1];x.url="mailto:"+this.sliceSerialize(S)}function Dt(){return{type:"blockquote",children:[]}}function Tt(){return{type:"code",lang:null,meta:null,value:""}}function ne(){return{type:"inlineCode",value:""}}function Vt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ee(){return{type:"emphasis",children:[]}}function Kt(){return{type:"heading",depth:0,children:[]}}function Yt(){return{type:"break"}}function de(){return{type:"html",value:""}}function ge(){return{type:"image",title:null,url:"",alt:null}}function xe(){return{type:"link",title:null,url:"",children:[]}}function Se(S){return{type:"list",ordered:S.type==="listOrdered",start:null,spread:S._spread,children:[]}}function ue(S){return{type:"listItem",spread:S._spread,checked:null,children:[]}}function fe(){return{type:"paragraph",children:[]}}function O(){return{type:"strong",children:[]}}function ze(){return{type:"text",value:""}}function Qt(){return{type:"thematicBreak"}}}function Si(n){return{line:n.line,column:n.column,offset:n.offset}}function Jm(n,t){let e=-1;for(;++e<t.length;){let i=t[e];Array.isArray(i)?Jm(n,i):iS(n,i)}}function iS(n,t){let e;for(e in t)if(Zm.call(t,e))switch(e){case"canContainEols":{let i=t[e];i&&n[e].push(...i);break}case"transforms":{let i=t[e];i&&n[e].push(...i);break}case"enter":case"exit":{let i=t[e];i&&Object.assign(n[e],i);break}}}function Ym(n,t){throw n?new Error("Cannot close `"+n.type+"` ("+xi({start:n.start,end:n.end})+"): a different token (`"+t.type+"`, "+xi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+xi({start:t.start,end:t.end})+") is still open")}function va(n){let t=this;t.parser=e;function e(i){return Sh(i,{...t.data("settings"),...n,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Hs(n,t="markdown"){var d;let e=rS(n),i=pu().use(va).use(ya).use(jo,["yaml","toml"]).use(_a).parse(e.value),r=[],s=[],o,a=f=>{let g=e.originalOffsets[f.startOffset],y=e.originalOffsets[f.endOffset];return{startOffset:g,endOffset:y,startLine:ba(n,g),endLine:ba(n,y)}},l=(f,g)=>{let y=a(g),m=n.slice(y.startOffset,y.endOffset);if(m.trim().length===0)return;let p=sn(m),v=`${t}\0${f}\0${y.startOffset}\0${y.endOffset}\0${p}\0${s.join("\0")}`,w={id:`src_${sn(v).slice(0,24)}`,kind:f,text:m,...y,headingPath:[...s],contentHash:p};(f==="code"||f==="formula")&&o&&(w.explanatoryContextIds=[o]),r.push(w),f==="prose"&&(o=w.id)},c=f=>{let g=e.value.slice(f.startOffset,f.endOffset);for(let y of lS(g,f.startOffset,e.value))l("prose",y)},h=f=>{var m;let g=ir(f);if(!g)return;let y=g.startOffset;for(let p of sS(f)){if(c(Vs(e.value,y,p.outerRange.startOffset)),p.node.type==="inlineCode"){let v=(m=aS(p.node,e.value))!=null?m:p.outerRange;l("code",v)}else l("formula",p.outerRange);y=p.outerRange.endOffset}c(Vs(e.value,y,g.endOffset))},u=f=>{var g,y,m;if(f.type==="heading"){let p=ir(f),v=(g=f.depth)!=null?g:1;s=[...s.slice(0,v-1),p?e.value.slice(p.startOffset,p.endOffset).replace(/^#{1,6}\s+/,"").trim():""];return}if(f.type==="paragraph"){h(f);return}if(f.type==="code"){let p=(y=oS(f,e.value))!=null?y:ir(f);p&&l("code",p);return}if(f.type==="math"){let p=ir(f);p&&l("formula",p);return}for(let p of(m=f.children)!=null?m:[])u(p)};for(let f of(d=i.children)!=null?d:[])u(f);return{protocolVersion:Qe,sourceFingerprint:sn(e.value),sourceUnits:r}}function rS(n){let t="",e=[0];for(let i=0;i<n.length;i+=1)n[i]==="\r"?(n[i+1]===`
`&&(i+=1),t+=`
`):t+=n[i],e.push(i+1);return{value:t,originalOffsets:e}}function sS(n){var i;let t=[],e=r=>{var s;if(r.type==="inlineCode"||r.type==="inlineMath"){let o=ir(r);o&&t.push({node:r,outerRange:o});return}for(let o of(s=r.children)!=null?s:[])e(o)};for(let r of(i=n.children)!=null?i:[])e(r);return t.sort((r,s)=>r.outerRange.startOffset-s.outerRange.startOffset)}function ir(n){var s,o,a,l,c,h,u,d;let t=(o=(s=n.position)==null?void 0:s.start)==null?void 0:o.offset,e=(l=(a=n.position)==null?void 0:a.end)==null?void 0:l.offset,i=(h=(c=n.position)==null?void 0:c.start)==null?void 0:h.line,r=(d=(u=n.position)==null?void 0:u.end)==null?void 0:d.line;return Number.isInteger(t)&&Number.isInteger(e)&&Number.isInteger(i)&&Number.isInteger(r)?{startOffset:t,endOffset:e,startLine:i,endLine:r}:null}function oS(n,t){let e=ir(n);if(!e)return null;let i=t.slice(e.startOffset,e.endOffset),r=/^(?: {0,3})(`{3,}|~{3,})[^\n]*(?:\n|$)/.exec(i);if(!r)return e;let s=r[1],o=e.startOffset+r[0].length,a=new RegExp(`(?:\\n|^) {0,3}${uS(s[0])}{${s.length},}[ \\t]*$`).exec(i),l=a?e.startOffset+a.index:e.endOffset;return Vs(t,o,l)}function aS(n,t){var s;let e=ir(n);if(!e)return null;let i=t.slice(e.startOffset,e.endOffset),r=(s=/^(`+)/.exec(i))==null?void 0:s[1];return!r||!i.endsWith(r)?e:Vs(t,e.startOffset+r.length,e.endOffset-r.length)}function lS(n,t,e){let i=[],r=0;for(let o=0;o<n.length;o+=1)cS(n,o)&&(s(r,o+1),r=o+1);return s(r,n.length),i;function s(o,a){var u,d;let l=n.slice(o,a),c=l.search(/\S/);if(c===-1)return;let h=(d=(u=l.match(/\s*$/))==null?void 0:u[0].length)!=null?d:0;i.push(Vs(e,t+o+c,t+a-h))}}function Vs(n,t,e){return{startOffset:t,endOffset:e,startLine:ba(n,t),endLine:ba(n,e)}}function cS(n,t){let e=n[t];return/[\u3002\uff01\uff1f]/.test(e)?!0:/[.!?]/.test(e)&&(t+1===n.length||/\s/.test(n[t+1]))}function ba(n,t){var e;return 1+((e=n.slice(0,t).match(/\n/g))!=null?e:[]).length}function uS(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var hS=/^[A-Za-z0-9][A-Za-z0-9._:-]*$/,jm="task.json",Ma="source-snapshot.json",Qm="checksums.json",Km="semantic-revision.json",dS="complete.json";async function Eh(n){var d;let t=eg(n.workspacePath);await(0,xn.mkdir)(t,{recursive:!0});let e=await Th(t),i=bS(n.bookId,"book"),r=Hs(n.markdown,i),s=vS(i,r.sourceFingerprint,(d=n.now)!=null?d:new Date),o=Mi(e,s),a={protocolVersion:Qe,taskId:s,bookId:i,sourceFingerprint:r.sourceFingerprint,sourceSnapshotFile:Ma},l=wh(a),c=wh(r),h={protocolVersion:Qe,taskId:s,taskSha256:sn(l),sourceSnapshotSha256:sn(c)};await(0,xn.mkdir)(o,{recursive:!0});let u=await Ah(e,o);return await Mh(Mi(u,jm),l),await Mh(Mi(u,Ma),c),await Mh(Mi(u,Qm),wh(h)),{protocolVersion:Qe,taskId:s,bookId:i,sourceFingerprint:r.sourceFingerprint,sourceSnapshot:r,taskDirectory:u,sha256:sn}}async function tg(n){let t=null,e=null;try{let i=await Th(eg(n.workspacePath)),r=await fS(i,n.selectedRevisionPath),s=(0,Re.dirname)(r),[o,a,l,c,h]=await Promise.all([Sa(i,Mi(s,jm)),Sa(i,Mi(s,Ma)),Sa(i,Mi(s,Qm)),(0,xn.readFile)(r,"utf8"),Sa(i,Mi(s,dS))]),u=mS(o);t=u.taskId,e=u.bookId;let d=gS(a),f=xS(l),g=yS(h);if(f.taskId!==u.taskId||f.taskSha256!==sn(o)||f.sourceSnapshotSha256!==sn(a))throw new Error("task artifact checksums do not match");if(u.sourceFingerprint!==d.sourceFingerprint)throw new Error("task source fingerprint does not match its snapshot");if(g.taskId!==u.taskId||g.bookId!==u.bookId||g.sourceFingerprint!==u.sourceFingerprint)throw new Error("complete marker does not match the task");if(g.semanticRevisionSha256!==sn(c))throw new Error("complete marker revision checksum does not match");let y=Hs(n.currentMarkdown,u.bookId);if(y.sourceFingerprint!==u.sourceFingerprint)return{status:"stale",taskId:t,bookId:e,message:"Current Markdown no longer matches the exported source snapshot."};let m=_S(y,c);if(m.taskId!==u.taskId||m.bookId!==u.bookId||m.sourceFingerprint!==u.sourceFingerprint)throw new Error("semantic revision does not match the task");return{status:"ready",task:u,revision:m,summary:{attributes:m.attributes.length,concepts:m.concepts.length,links:m.links.length,edges:m.edges.length,warnings:m.qualityReport.warnings.length}}}catch(i){return{status:"error",taskId:t,bookId:e,message:SS(i)}}}function Gs(n){return typeof n=="string"&&(0,Re.isAbsolute)(n.trim())}function Mi(n,t){let e=(0,Re.resolve)(n),i=(0,Re.resolve)(e,t),r=(0,Re.relative)(e,i);if(r===""||!r.startsWith("..")&&!(0,Re.isAbsolute)(r))return i;throw new Error("path escapes its configured workspace")}function eg(n){if(!Gs(n))throw new Error("Runner workspace must be an absolute path");return(0,Re.resolve)(n.trim())}async function fS(n,t){if(!(0,Re.isAbsolute)(t))throw new Error("selected revision path must be absolute");let e=(0,Re.resolve)(t);if((0,Re.basename)(e)!==Km)throw new Error(`selected file must be ${Km}`);return Ah(n,e)}async function Sa(n,t){let e=await Ah(n,t);return(0,xn.readFile)(e,"utf8")}async function Th(n){return(0,xn.realpath)(n)}async function Ah(n,t){let e=await Th(t);if(!pS(n,e))throw new Error("path escapes its configured workspace through a reparse point");return e}function pS(n,t){let e=(0,Re.relative)(n.toLowerCase(),t.toLowerCase());return e===""||!e.startsWith(`..${Re.sep}`)&&e!==".."&&!(0,Re.isAbsolute)(e)}function mS(n){let t=Ws(n,"task manifest");if(!Rh(t)||t.protocolVersion!==Qe||!Nr(t.taskId)||!Nr(t.bookId)||typeof t.sourceFingerprint!="string"||t.sourceSnapshotFile!==Ma)throw new Error("task manifest is incompatible or incomplete");return t}function gS(n){let t=eu(Ws(n,"source snapshot"));if(!t.ok)throw new Error(t.errors.join("; "));return t.value}function xS(n){let t=Ws(n,"checksums");if(!Rh(t)||t.protocolVersion!==Qe||!Nr(t.taskId)||!wa(t.taskSha256)||!wa(t.sourceSnapshotSha256))throw new Error("checksums are incompatible or incomplete");return t}function yS(n){let t=Ws(n,"complete marker");if(!Rh(t)||t.protocolVersion!==Qe||t.stage!=="complete"||!Nr(t.taskId)||!Nr(t.bookId)||!wa(t.sourceFingerprint)||!wa(t.semanticRevisionSha256))throw new Error("complete marker is incompatible or incomplete");return t}function _S(n,t){let e=cp(n,Ws(t,"semantic revision"));if(!e.ok)throw new Error(e.errors.join("; "));return e.value}function vS(n,t,e){return`task-${n}-${sn(`${t}:${e.toISOString()}`).slice(0,16)}`}function bS(n,t){let e=n.trim().replace(/[^A-Za-z0-9._:-]+/g,"-").replace(/\.\.+/g,"-").replace(/^[.-]+|[.-]+$/g,"");return Nr(e)?e:t}async function Mh(n,t){let e=`${n}.${process.pid}.${Date.now()}.tmp`;await(0,xn.writeFile)(e,t,"utf8"),await(0,xn.rename)(e,n)}function wh(n){return`${JSON.stringify(n,null,2)}
`}function Ws(n,t){try{return JSON.parse(n)}catch(e){throw new Error(`${t} is not valid JSON`)}}function Rh(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function Nr(n){return typeof n=="string"&&hS.test(n)&&n!=="."&&n!==".."}function wa(n){return typeof n=="string"&&/^[a-f0-9]{64}$/.test(n)}function SS(n){return n instanceof Error?n.message:"Reading Map import failed"}var rg=require("node:crypto"),on=require("node:fs/promises"),Mn=require("node:path");var wi=Object.freeze({reading:1,bold:2,highlight:3,annotation:4,callout:4,commentary:6});function qs(n){let t=typeof n=="object"&&n!==null?n:{},e={...wi};for(let i of Object.keys(e))typeof t[i]=="number"&&Number.isFinite(t[i])&&Number(t[i])>0&&(e[i]=Number(t[i]));for(let i of["bold","highlight","annotation","commentary","callout"])e[i]<=e.reading&&(e[i]=Math.max(wi[i],e.reading+1));return e}var Ea=class{constructor(t,e){this.dwellThresholdMs=t;bt(this,"currentSourceId",null);bt(this,"currentSince",0);bt(this,"exposedSourceIds");if(!Number.isFinite(t)||t<=0)throw new Error("dwell threshold must be positive");this.exposedSourceIds=new Set(e.map(i=>i.sourceId))}observe(t,e){return!t||this.exposedSourceIds.has(t)?(this.currentSourceId=null,null):t!==this.currentSourceId?(this.currentSourceId=t,this.currentSince=e,null):e-this.currentSince<this.dwellThresholdMs?null:(this.exposedSourceIds.add(t),this.currentSourceId=null,{sourceId:t,firstReadAt:new Date(e).toISOString()})}};function ng(n){TS(n.weights);let t=Object.fromEntries(n.revision.concepts.map(r=>[r.id,0])),e=[];for(let r of ES(n.exposures))i(`read:${r.sourceId}`,"reading",[r.sourceId],n.weights.reading);for(let r of n.excerpts){if(!wS(r,n.mapImportedAt,n.historicalImport))continue;let s=MS(r,n.snapshot.sourceUnits);s.length!==0&&i(r.id,r.type,s,n.weights[r.type])}return{input:n,concepts:t,evidence:e,totalScore:e.reduce((r,s)=>r+s.weight,0)};function i(r,s,o,a){let l=new Set(o),c=new Map;for(let d of n.revision.concepts){let f=d.evidence.filter(g=>l.has(g.sourceId)).length;f>0&&c.set(d.id,f)}let h=[...c.values()].reduce((d,f)=>d+f,0);if(h===0)return;let u={};for(let[d,f]of c){let g=a*f/h;u[d]=g,t[d]+=g}e.push({behaviorId:r,behavior:s,sourceIds:[...l],weight:a,conceptShares:u})}}function ig(n,t){var i;let e=n.sourceUnits.filter(r=>t>=r.startOffset&&t<=r.endOffset);return e.length>0?e.sort((r,s)=>r.endOffset-r.startOffset-(s.endOffset-s.startOffset))[0]:(i=[...n.sourceUnits].sort((r,s)=>Xs(t,r)-Xs(t,s))[0])!=null?i:null}function MS(n,t){var o;let e=Math.max(0,n.position),i=Math.max(e+1,(o=n.endPosition)!=null?o:e+1),r=t.filter(a=>e<a.endOffset&&i>a.startOffset);if(r.length>0)return r.map(a=>a.id);let s=[...t].sort((a,l)=>Xs(e,a)-Xs(e,l))[0];return s&&Xs(e,s)<=24?[s.id]:[]}function wS(n,t,e){return Date.parse(n.capturedAt)<=Date.parse(t)?n.type==="bold"?e.bold:n.type==="callout"?e.callout:!0:!0}function ES(n){let t=new Set;return n.filter(e=>!t.has(e.sourceId)&&!!t.add(e.sourceId))}function TS(n){for(let[t,e]of Object.entries(n))if(!Number.isFinite(e)||e<=0)throw new Error(`${t} weight must be positive`);for(let t of["bold","highlight","annotation","commentary","callout"])if(n[t]<=n.reading)throw new Error(`${t} weight must be greater than reading weight`)}function Xs(n,t){return n<t.startOffset?t.startOffset-n:n>t.endOffset?n-t.endOffset:0}var sg="state.json",jn=2,AS=3,RS=/^[A-Za-z0-9][A-Za-z0-9._:-]*$/;async function og(n,t,e=new Date().toISOString()){var l;let i=Qn(n,t.bookId);await(0,on.mkdir)(i,{recursive:!0});let r=await Ei(i,t.bookId),s=[{revision:t,importedAt:e},...r.revisions.filter(c=>c.revision.id!==t.id)].sort((c,h)=>h.importedAt.localeCompare(c.importedAt)).slice(0,AS),o={protocolVersion:Qe,bookId:t.bookId,status:"current",revisionId:t.id,taskId:t.taskId,sourceFingerprint:t.sourceFingerprint,message:null,updatedAt:e},a={...r.activity,revisionId:t.id,mapImportedAt:(l=r.activity.mapImportedAt)!=null?l:e};await Aa(i,{version:jn,status:o,revisions:s,activity:a,layout:r.layout})}async function Ch(n,t){let e=Qn(n,t.bookId);await(0,on.mkdir)(e,{recursive:!0});let i=await Ei(e,t.bookId);await Aa(e,{version:jn,status:t,revisions:i.revisions,activity:i.activity,layout:i.layout})}async function Ta(n,t){let e=await Ei(Qn(n,t),t);return e.status.bookId?e.status:null}async function ag(n,t){return(await Ei(Qn(n,t),t)).revisions}async function lg(n,t){return(await Ei(Qn(n,t),t)).activity}async function cg(n,t,e){let i=Qn(n,t);await(0,on.mkdir)(i,{recursive:!0});let r=await Ei(i,t);await Aa(i,{version:jn,status:r.status,revisions:r.revisions,activity:fg(e),layout:r.layout})}async function ug(n,t){return(await Ei(Qn(n,t),t)).layout}async function Ih(n,t,e){let i=Qn(n,t);await(0,on.mkdir)(i,{recursive:!0});let r=await Ei(i,t);await Aa(i,{version:jn,status:r.status,revisions:r.revisions,activity:r.activity,layout:e})}async function hg(n,t){await(0,on.rm)(Qn(n,t),{recursive:!0,force:!0})}function Qn(n,t){if(!RS.test(t)||t==="."||t==="..")throw new Error("book ID is not safe for map storage");let e=(0,Mn.resolve)(n),i=(0,Mn.resolve)(e,t);if(!NS(e,i))throw new Error("map path escapes its configured storage root");return i}async function Ei(n,t){try{let e=JSON.parse(await(0,on.readFile)((0,Mn.resolve)(n,sg),"utf8")),i=IS(e,t);if(!i)throw new Error("Reading Map state is invalid");return i}catch(e){if(FS(e))return CS(t);throw e}}async function Aa(n,t){let e=(0,Mn.resolve)(n,sg),i=`${e}.${process.pid}.${(0,rg.randomUUID)()}.tmp`;await(0,on.writeFile)(i,`${JSON.stringify(t,null,2)}
`,"utf8"),await(0,on.rename)(i,e)}function CS(n){return{version:jn,status:{protocolVersion:Qe,bookId:"",status:"error",revisionId:null,taskId:null,sourceFingerprint:null,message:null,updatedAt:""},revisions:[],activity:dg(),layout:null}}function IS(n,t){var o,a;if(!yn(n)||n.version!==1&&n.version!==jn||!Array.isArray(n.revisions)||!DS(n.status)||n.status.bookId!==""&&n.status.bookId!==t||!n.revisions.every(l=>LS(l,t)))return null;let e=n.revisions,i=(a=(o=[...e].sort((l,c)=>l.importedAt.localeCompare(c.importedAt))[0])==null?void 0:o.importedAt)!=null?a:null,r=n.version===jn&&PS(n.activity)?fg(n.activity):{...dg(),revisionId:n.status.revisionId,mapImportedAt:i},s=n.version===jn&&n.layout!==void 0?n.layout:null;return s!==null&&!kS(s)?null:{version:jn,status:n.status,revisions:e,activity:r,layout:s}}function dg(){return{revisionId:null,mapImportedAt:null,exposures:[],weights:{...wi},historicalImport:{bold:!1,callout:!1}}}function fg(n){let t=new Set;return{revisionId:n.revisionId,mapImportedAt:n.mapImportedAt,exposures:n.exposures.filter(e=>!t.has(e.sourceId)&&!!t.add(e.sourceId)),weights:{...n.weights},historicalImport:{...n.historicalImport}}}function PS(n){if(!yn(n)||!yn(n.weights)||!yn(n.historicalImport))return!1;let t=n.weights;return(typeof n.revisionId=="string"||n.revisionId===null)&&(typeof n.mapImportedAt=="string"||n.mapImportedAt===null)&&Array.isArray(n.exposures)&&n.exposures.every(e=>yn(e)&&typeof e.sourceId=="string"&&typeof e.firstReadAt=="string")&&["reading","bold","highlight","annotation","commentary","callout"].every(e=>typeof t[e]=="number")&&typeof n.historicalImport.bold=="boolean"&&typeof n.historicalImport.callout=="boolean"}function kS(n){return yn(n)&&typeof n.revisionId=="string"&&Array.isArray(n.fields)&&Array.isArray(n.nodes)&&n.fields.every(t=>yn(t)&&typeof t.id=="string"&&typeof t.label=="string"&&Br(t.x)&&Br(t.y)&&Br(t.radius))&&n.nodes.every(t=>yn(t)&&typeof t.id=="string"&&Br(t.x)&&Br(t.y)&&Br(t.z)&&(typeof t.attributeId=="string"||t.attributeId===null))}function Br(n){return typeof n=="number"&&Number.isFinite(n)}function DS(n){return yn(n)&&n.protocolVersion===Qe&&typeof n.bookId=="string"&&(n.status==="current"||n.status==="stale"||n.status==="error"||n.status==="building")&&(typeof n.revisionId=="string"||n.revisionId===null)&&(typeof n.taskId=="string"||n.taskId===null)&&(typeof n.sourceFingerprint=="string"||n.sourceFingerprint===null)&&(typeof n.message=="string"||n.message===null)&&typeof n.updatedAt=="string"&&(n.runnerTaskDirectory===void 0||typeof n.runnerTaskDirectory=="string")&&(n.runnerStage===void 0||typeof n.runnerStage=="string")&&(n.runnerState===void 0||["running","awaiting-confirmation","interrupted","failed","complete"].includes(String(n.runnerState)))}function LS(n,t){return yn(n)&&typeof n.importedAt=="string"&&yn(n.revision)&&n.revision.bookId===t}function yn(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function FS(n){return yn(n)&&n.code==="ENOENT"}function NS(n,t){let e=(0,Mn.relative)(n,t);return e===""||!e.startsWith(`..${Mn.sep}`)&&e!==".."&&!(0,Mn.isAbsolute)(e)}function pg(n){let t=+this._x.call(null,n),e=+this._y.call(null,n);return mg(this.cover(t,e),t,e,n)}function mg(n,t,e,i){if(isNaN(t)||isNaN(e))return n;var r,s=n._root,o={data:i},a=n._x0,l=n._y0,c=n._x1,h=n._y1,u,d,f,g,y,m,p,v;if(!s)return n._root=o,n;for(;s.length;)if((y=t>=(u=(a+c)/2))?a=u:c=u,(m=e>=(d=(l+h)/2))?l=d:h=d,r=s,!(s=s[p=m<<1|y]))return r[p]=o,n;if(f=+n._x.call(null,s.data),g=+n._y.call(null,s.data),t===f&&e===g)return o.next=s,r?r[p]=o:n._root=o,n;do r=r?r[p]=new Array(4):n._root=new Array(4),(y=t>=(u=(a+c)/2))?a=u:c=u,(m=e>=(d=(l+h)/2))?l=d:h=d;while((p=m<<1|y)===(v=(g>=d)<<1|f>=u));return r[v]=s,r[p]=o,n}function gg(n){var t,e,i=n.length,r,s,o=new Array(i),a=new Array(i),l=1/0,c=1/0,h=-1/0,u=-1/0;for(e=0;e<i;++e)isNaN(r=+this._x.call(null,t=n[e]))||isNaN(s=+this._y.call(null,t))||(o[e]=r,a[e]=s,r<l&&(l=r),r>h&&(h=r),s<c&&(c=s),s>u&&(u=s));if(l>h||c>u)return this;for(this.cover(l,c).cover(h,u),e=0;e<i;++e)mg(this,o[e],a[e],n[e]);return this}function xg(n,t){if(isNaN(n=+n)||isNaN(t=+t))return this;var e=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(e))r=(e=Math.floor(n))+1,s=(i=Math.floor(t))+1;else{for(var o=r-e||1,a=this._root,l,c;e>n||n>=r||i>t||t>=s;)switch(c=(t<i)<<1|n<e,l=new Array(4),l[c]=a,a=l,o*=2,c){case 0:r=e+o,s=i+o;break;case 1:e=r-o,s=i+o;break;case 2:r=e+o,i=s-o;break;case 3:e=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=e,this._y0=i,this._x1=r,this._y1=s,this}function yg(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function _g(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Le(n,t,e,i,r){this.node=n,this.x0=t,this.y0=e,this.x1=i,this.y1=r}function vg(n,t,e){var i,r=this._x0,s=this._y0,o,a,l,c,h=this._x1,u=this._y1,d=[],f=this._root,g,y;for(f&&d.push(new Le(f,r,s,h,u)),e==null?e=1/0:(r=n-e,s=t-e,h=n+e,u=t+e,e*=e);g=d.pop();)if(!(!(f=g.node)||(o=g.x0)>h||(a=g.y0)>u||(l=g.x1)<r||(c=g.y1)<s))if(f.length){var m=(o+l)/2,p=(a+c)/2;d.push(new Le(f[3],m,p,l,c),new Le(f[2],o,p,m,c),new Le(f[1],m,a,l,p),new Le(f[0],o,a,m,p)),(y=(t>=p)<<1|n>=m)&&(g=d[d.length-1],d[d.length-1]=d[d.length-1-y],d[d.length-1-y]=g)}else{var v=n-+this._x.call(null,f.data),w=t-+this._y.call(null,f.data),b=v*v+w*w;if(b<e){var R=Math.sqrt(e=b);r=n-R,s=t-R,h=n+R,u=t+R,i=f.data}}return i}function bg(n){if(isNaN(h=+this._x.call(null,n))||isNaN(u=+this._y.call(null,n)))return this;var t,e=this._root,i,r,s,o=this._x0,a=this._y0,l=this._x1,c=this._y1,h,u,d,f,g,y,m,p;if(!e)return this;if(e.length)for(;;){if((g=h>=(d=(o+l)/2))?o=d:l=d,(y=u>=(f=(a+c)/2))?a=f:c=f,t=e,!(e=e[m=y<<1|g]))return this;if(!e.length)break;(t[m+1&3]||t[m+2&3]||t[m+3&3])&&(i=t,p=m)}for(;e.data!==n;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[m]=s:delete t[m],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(i?i[p]=e:this._root=e),this):(this._root=s,this)}function Sg(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function Mg(){return this._root}function wg(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function Eg(n){var t=[],e,i=this._root,r,s,o,a,l;for(i&&t.push(new Le(i,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!n(i=e.node,s=e.x0,o=e.y0,a=e.x1,l=e.y1)&&i.length){var c=(s+a)/2,h=(o+l)/2;(r=i[3])&&t.push(new Le(r,c,h,a,l)),(r=i[2])&&t.push(new Le(r,s,h,c,l)),(r=i[1])&&t.push(new Le(r,c,o,a,h)),(r=i[0])&&t.push(new Le(r,s,o,c,h))}return this}function Tg(n){var t=[],e=[],i;for(this._root&&t.push(new Le(this._root,this._x0,this._y0,this._x1,this._y1));i=t.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.x1,c=i.y1,h=(o+l)/2,u=(a+c)/2;(s=r[0])&&t.push(new Le(s,o,a,h,u)),(s=r[1])&&t.push(new Le(s,h,a,l,u)),(s=r[2])&&t.push(new Le(s,o,u,h,c)),(s=r[3])&&t.push(new Le(s,h,u,l,c))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Ag(n){return n[0]}function Rg(n){return arguments.length?(this._x=n,this):this._x}function Cg(n){return n[1]}function Ig(n){return arguments.length?(this._y=n,this):this._y}function rr(n,t,e){var i=new Ph(t==null?Ag:t,e==null?Cg:e,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Ph(n,t,e,i,r,s){this._x=n,this._y=t,this._x0=e,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function Pg(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var Ye=rr.prototype=Ph.prototype;Ye.copy=function(){var n=new Ph(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=Pg(t),n;for(e=[{source:t,target:n._root=new Array(4)}];t=e.pop();)for(var r=0;r<4;++r)(i=t.source[r])&&(i.length?e.push({source:i,target:t.target[r]=new Array(4)}):t.target[r]=Pg(i));return n};Ye.add=pg;Ye.addAll=gg;Ye.cover=xg;Ye.data=yg;Ye.extent=_g;Ye.find=vg;Ye.remove=bg;Ye.removeAll=Sg;Ye.root=Mg;Ye.size=wg;Ye.visit=Eg;Ye.visitAfter=Tg;Ye.x=Rg;Ye.y=Ig;function Me(n){return function(){return n}}function wn(n){return(n()-.5)*1e-6}function BS(n){return n.x+n.vx}function OS(n){return n.y+n.vy}function kh(n){var t,e,i,r=1,s=1;typeof n!="function"&&(n=Me(n==null?1:+n));function o(){for(var c,h=t.length,u,d,f,g,y,m,p=0;p<s;++p)for(u=rr(t,BS,OS).visitAfter(a),c=0;c<h;++c)d=t[c],y=e[d.index],m=y*y,f=d.x+d.vx,g=d.y+d.vy,u.visit(v);function v(w,b,R,M,C){var _=w.data,A=w.r,T=y+A;if(_){if(_.index>d.index){var k=f-_.x-_.vx,D=g-_.y-_.vy,F=k*k+D*D;F<T*T&&(k===0&&(k=wn(i),F+=k*k),D===0&&(D=wn(i),F+=D*D),F=(T-(F=Math.sqrt(F)))/F*r,d.vx+=(k*=F)*(T=(A*=A)/(m+A)),d.vy+=(D*=F)*T,_.vx-=k*(T=1-T),_.vy-=D*T)}return}return b>f+T||M<f-T||R>g+T||C<g-T}}function a(c){if(c.data)return c.r=e[c.data.index];for(var h=c.r=0;h<4;++h)c[h]&&c[h].r>c.r&&(c.r=c[h].r)}function l(){if(t){var c,h=t.length,u;for(e=new Array(h),c=0;c<h;++c)u=t[c],e[u.index]=+n(u,c,t)}}return o.initialize=function(c,h){t=c,i=h,l()},o.iterations=function(c){return arguments.length?(s=+c,o):s},o.strength=function(c){return arguments.length?(r=+c,o):r},o.radius=function(c){return arguments.length?(n=typeof c=="function"?c:Me(+c),l(),o):n},o}function US(n){return n.index}function kg(n,t){var e=n.get(t);if(!e)throw new Error("node not found: "+t);return e}function Dh(n){var t=US,e=u,i,r=Me(30),s,o,a,l,c,h=1;n==null&&(n=[]);function u(m){return 1/Math.min(a[m.source.index],a[m.target.index])}function d(m){for(var p=0,v=n.length;p<h;++p)for(var w=0,b,R,M,C,_,A,T;w<v;++w)b=n[w],R=b.source,M=b.target,C=M.x+M.vx-R.x-R.vx||wn(c),_=M.y+M.vy-R.y-R.vy||wn(c),A=Math.sqrt(C*C+_*_),A=(A-s[w])/A*m*i[w],C*=A,_*=A,M.vx-=C*(T=l[w]),M.vy-=_*T,R.vx+=C*(T=1-T),R.vy+=_*T}function f(){if(o){var m,p=o.length,v=n.length,w=new Map(o.map((R,M)=>[t(R,M,o),R])),b;for(m=0,a=new Array(p);m<v;++m)b=n[m],b.index=m,typeof b.source!="object"&&(b.source=kg(w,b.source)),typeof b.target!="object"&&(b.target=kg(w,b.target)),a[b.source.index]=(a[b.source.index]||0)+1,a[b.target.index]=(a[b.target.index]||0)+1;for(m=0,l=new Array(v);m<v;++m)b=n[m],l[m]=a[b.source.index]/(a[b.source.index]+a[b.target.index]);i=new Array(v),g(),s=new Array(v),y()}}function g(){if(o)for(var m=0,p=n.length;m<p;++m)i[m]=+e(n[m],m,n)}function y(){if(o)for(var m=0,p=n.length;m<p;++m)s[m]=+r(n[m],m,n)}return d.initialize=function(m,p){o=m,c=p,f()},d.links=function(m){return arguments.length?(n=m,f(),d):n},d.id=function(m){return arguments.length?(t=m,d):t},d.iterations=function(m){return arguments.length?(h=+m,d):h},d.strength=function(m){return arguments.length?(e=typeof m=="function"?m:Me(+m),g(),d):e},d.distance=function(m){return arguments.length?(r=typeof m=="function"?m:Me(+m),y(),d):r},d}var zS={value:()=>{}};function Lg(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new Ra(e)}function Ra(n){this._=n}function VS(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}Ra.prototype=Lg.prototype={constructor:Ra,on:function(n,t){var e=this._,i=VS(n+"",e),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=HS(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(n=i[s]).type)e[r]=Dg(e[r],n.name,t);else if(t==null)for(r in e)e[r]=Dg(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new Ra(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,s;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(t,e)}};function HS(n,t){for(var e=0,i=n.length,r;e<i;++e)if((r=n[e]).name===t)return r.value}function Dg(n,t,e){for(var i=0,r=n.length;i<r;++i)if(n[i].name===t){n[i]=zS,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var Lh=Lg;var Or=0,Ys=0,$s=0,Ng=1e3,Ca,Zs,Ia=0,sr=0,Pa=0,Js=typeof performance=="object"&&performance.now?performance:Date,Bg=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Bh(){return sr||(Bg(GS),sr=Js.now()+Pa)}function GS(){sr=0}function Fh(){this._call=this._time=this._next=null}Fh.prototype=ka.prototype={constructor:Fh,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Bh():+e)+(t==null?0:+t),!this._next&&Zs!==this&&(Zs?Zs._next=this:Ca=this,Zs=this),this._call=n,this._time=e,Nh()},stop:function(){this._call&&(this._call=null,this._time=1/0,Nh())}};function ka(n,t,e){var i=new Fh;return i.restart(n,t,e),i}function Og(){Bh(),++Or;for(var n=Ca,t;n;)(t=sr-n._time)>=0&&n._call.call(void 0,t),n=n._next;--Or}function Fg(){sr=(Ia=Js.now())+Pa,Or=Ys=0;try{Og()}finally{Or=0,XS(),sr=0}}function WS(){var n=Js.now(),t=n-Ia;t>Ng&&(Pa-=t,Ia=n)}function XS(){for(var n,t=Ca,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:Ca=e);Zs=n,Nh(i)}function Nh(n){if(!Or){Ys&&(Ys=clearTimeout(Ys));var t=n-sr;t>24?(n<1/0&&(Ys=setTimeout(Fg,n-Js.now()-Pa)),$s&&($s=clearInterval($s))):($s||(Ia=Js.now(),$s=setInterval(WS,Ng)),Or=1,Bg(Fg))}}function Ug(){let n=1;return()=>(n=(1664525*n+1013904223)%4294967296)/4294967296}function zg(n){return n.x}function Vg(n){return n.y}var qS=10,$S=Math.PI*(3-Math.sqrt(5));function Oh(n){var t,e=1,i=.001,r=1-Math.pow(i,1/300),s=0,o=.6,a=new Map,l=ka(u),c=Lh("tick","end"),h=Ug();n==null&&(n=[]);function u(){d(),c.call("tick",t),e<i&&(l.stop(),c.call("end",t))}function d(y){var m,p=n.length,v;y===void 0&&(y=1);for(var w=0;w<y;++w)for(e+=(s-e)*r,a.forEach(function(b){b(e)}),m=0;m<p;++m)v=n[m],v.fx==null?v.x+=v.vx*=o:(v.x=v.fx,v.vx=0),v.fy==null?v.y+=v.vy*=o:(v.y=v.fy,v.vy=0);return t}function f(){for(var y=0,m=n.length,p;y<m;++y){if(p=n[y],p.index=y,p.fx!=null&&(p.x=p.fx),p.fy!=null&&(p.y=p.fy),isNaN(p.x)||isNaN(p.y)){var v=qS*Math.sqrt(.5+y),w=y*$S;p.x=v*Math.cos(w),p.y=v*Math.sin(w)}(isNaN(p.vx)||isNaN(p.vy))&&(p.vx=p.vy=0)}}function g(y){return y.initialize&&y.initialize(n,h),y}return f(),t={tick:d,restart:function(){return l.restart(u),t},stop:function(){return l.stop(),t},nodes:function(y){return arguments.length?(n=y,f(),a.forEach(g),t):n},alpha:function(y){return arguments.length?(e=+y,t):e},alphaMin:function(y){return arguments.length?(i=+y,t):i},alphaDecay:function(y){return arguments.length?(r=+y,t):+r},alphaTarget:function(y){return arguments.length?(s=+y,t):s},velocityDecay:function(y){return arguments.length?(o=1-y,t):1-o},randomSource:function(y){return arguments.length?(h=y,a.forEach(g),t):h},force:function(y,m){return arguments.length>1?(m==null?a.delete(y):a.set(y,g(m)),t):a.get(y)},find:function(y,m,p){var v=0,w=n.length,b,R,M,C,_;for(p==null?p=1/0:p*=p,v=0;v<w;++v)C=n[v],b=y-C.x,R=m-C.y,M=b*b+R*R,M<p&&(_=C,p=M);return _},on:function(y,m){return arguments.length>1?(c.on(y,m),t):c.on(y)}}}function Uh(){var n,t,e,i,r=Me(-30),s,o=1,a=1/0,l=.81;function c(f){var g,y=n.length,m=rr(n,zg,Vg).visitAfter(u);for(i=f,g=0;g<y;++g)t=n[g],m.visit(d)}function h(){if(n){var f,g=n.length,y;for(s=new Array(g),f=0;f<g;++f)y=n[f],s[y.index]=+r(y,f,n)}}function u(f){var g=0,y,m,p=0,v,w,b;if(f.length){for(v=w=b=0;b<4;++b)(y=f[b])&&(m=Math.abs(y.value))&&(g+=y.value,p+=m,v+=m*y.x,w+=m*y.y);f.x=v/p,f.y=w/p}else{y=f,y.x=y.data.x,y.y=y.data.y;do g+=s[y.data.index];while(y=y.next)}f.value=g}function d(f,g,y,m){if(!f.value)return!0;var p=f.x-t.x,v=f.y-t.y,w=m-g,b=p*p+v*v;if(w*w/l<b)return b<a&&(p===0&&(p=wn(e),b+=p*p),v===0&&(v=wn(e),b+=v*v),b<o&&(b=Math.sqrt(o*b)),t.vx+=p*f.value*i/b,t.vy+=v*f.value*i/b),!0;if(f.length||b>=a)return;(f.data!==t||f.next)&&(p===0&&(p=wn(e),b+=p*p),v===0&&(v=wn(e),b+=v*v),b<o&&(b=Math.sqrt(o*b)));do f.data!==t&&(w=s[f.data.index]*i/b,t.vx+=p*w,t.vy+=v*w);while(f=f.next)}return c.initialize=function(f,g){n=f,e=g,h()},c.strength=function(f){return arguments.length?(r=typeof f=="function"?f:Me(+f),h(),c):r},c.distanceMin=function(f){return arguments.length?(o=f*f,c):Math.sqrt(o)},c.distanceMax=function(f){return arguments.length?(a=f*f,c):Math.sqrt(a)},c.theta=function(f){return arguments.length?(l=f*f,c):Math.sqrt(l)},c}function zh(n){var t=Me(.1),e,i,r;typeof n!="function"&&(n=Me(n==null?0:+n));function s(a){for(var l=0,c=e.length,h;l<c;++l)h=e[l],h.vx+=(r[l]-h.x)*i[l]*a}function o(){if(e){var a,l=e.length;for(i=new Array(l),r=new Array(l),a=0;a<l;++a)i[a]=isNaN(r[a]=+n(e[a],a,e))?0:+t(e[a],a,e)}}return s.initialize=function(a){e=a,o()},s.strength=function(a){return arguments.length?(t=typeof a=="function"?a:Me(+a),o(),s):t},s.x=function(a){return arguments.length?(n=typeof a=="function"?a:Me(+a),o(),s):n},s}function Vh(n){var t=Me(.1),e,i,r;typeof n!="function"&&(n=Me(n==null?0:+n));function s(a){for(var l=0,c=e.length,h;l<c;++l)h=e[l],h.vy+=(r[l]-h.y)*i[l]*a}function o(){if(e){var a,l=e.length;for(i=new Array(l),r=new Array(l),a=0;a<l;++a)i[a]=isNaN(r[a]=+n(e[a],a,e))?0:+t(e[a],a,e)}}return s.initialize=function(a){e=a,o()},s.strength=function(a){return arguments.length?(t=typeof a=="function"?a:Me(+a),o(),s):t},s.y=function(a){return arguments.length?(n=typeof a=="function"?a:Me(+a),o(),s):n},s}function Hh(n,t){let e=YS(n),i=new Map(e.map(c=>[c.id,c])),r=new Map(t.map(c=>[c.id,c])),s=KS(JS(`${n.bookId}:${n.id}`)),o=n.concepts.map((c,h)=>{var p,v,w;let u=((p=c.attributeIds)!=null?p:[]).map(b=>i.get(b)).filter(b=>!!b),d=u.length>0?Hg(u.map(b=>b.x)):0,f=u.length>0?Hg(u.map(b=>b.y)):0,g=r.get(c.id);if(g)return{id:c.id,attributeId:g.attributeId,x:g.x,y:g.y,fx:g.x,fy:g.y,targetX:d,targetY:f,lockedZ:g.z};let y=s()*Math.PI*2,m=8+s()*24+h%7;return{id:c.id,attributeId:(w=(v=c.attributeIds)==null?void 0:v[0])!=null?w:null,x:d+Math.cos(y)*m,y:f+Math.sin(y)*m,targetX:d,targetY:f}}),a=n.links.map(c=>({source:c.sourceConceptId,target:c.targetConceptId})),l=Oh(o).randomSource(s).force("charge",Uh().strength(-26).distanceMax(130)).force("collide",kh(8).strength(.85)).force("x",zh(c=>c.targetX).strength(.12)).force("y",Vh(c=>c.targetY).strength(.12));return a.length>0&&l.force("links",Dh(a).id(c=>c.id).distance(28).strength(.04)),l.stop(),l.tick(320),{revisionId:n.id,fields:e,nodes:o.map(c=>{var d,f,g;let h=Ks((d=c.x)!=null?d:0),u=Ks((f=c.y)!=null?f:0);return{id:c.id,x:h,y:u,z:(g=c.lockedZ)!=null?g:Ks(ZS(h,u,e)),attributeId:c.attributeId}})}}function YS(n){let t=Math.max(1,n.attributes.length);return n.attributes.map((e,i)=>{let r=-Math.PI/2+i/t*Math.PI*2,s=t===1?0:82+t*4;return{id:e.id,label:e.name,x:Ks(Math.cos(r)*s),y:Ks(Math.sin(r)*s*.72),radius:72}})}function ZS(n,t,e){return e.length===0?0:e.reduce((i,r,s)=>{let o=n-r.x,a=t-r.y,l=Math.exp(-(o*o+a*a)/(2*r.radius*r.radius));return i+l*(8+s%3*2)},0)}function Hg(n){return n.reduce((t,e)=>t+e,0)/n.length}function Ks(n){return Math.round(n*1e3)/1e3}function JS(n){let t=2166136261;for(let e=0;e<n.length;e+=1)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function KS(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var px=0,Md=1,mx=2;var wo=1,gx=2,hs=3,oi=0,je=1,vn=2,qn=0,dr=1,wd=2,Ed=3,Td=4,xx=5;var Di=100,yx=101,_x=102,vx=103,bx=104,Sx=200,Mx=201,wx=202,Ex=203,nl=204,il=205,Tx=206,Ax=207,Rx=208,Cx=209,Ix=210,Px=211,kx=212,Dx=213,Lx=214,rl=0,sl=1,ol=2,fr=3,al=4,ll=5,cl=6,ul=7,Ad=0,Fx=1,Nx=2,Cn=0,Rd=1,Cd=2,Id=3,Pd=4,kd=5,Dd=6,Ld=7;var Fd=300,zi=301,yr=302,Bl=303,Ol=304,Eo=306,hl=1e3,Vn=1001,dl=1002,Ne=1003,Bx=1004;var To=1005;var Oe=1006,Ul=1007;var Vi=1008;var nn=1009,Nd=1010,Bd=1011,ds=1012,zl=1013,In=1014,Pn=1015,$n=1016,Vl=1017,Hl=1018,fs=1020,Od=35902,Ud=35899,zd=1021,Vd=1022,bn=1023,Gn=1026,Hi=1027,Hd=1028,Gl=1029,Gi=1030,Wl=1031;var Xl=1033,Ao=33776,Ro=33777,Co=33778,Io=33779,ql=35840,$l=35841,Yl=35842,Zl=35843,Jl=36196,Kl=37492,jl=37496,Ql=37488,tc=37489,Po=37490,ec=37491,nc=37808,ic=37809,rc=37810,sc=37811,oc=37812,ac=37813,lc=37814,cc=37815,uc=37816,hc=37817,dc=37818,fc=37819,pc=37820,mc=37821,gc=36492,xc=36494,yc=36495,_c=36283,vc=36284,ko=36285,bc=36286;var so=2300,fl=2301,el=2302,dd=2303,fd=2400,pd=2401,md=2402;var Ox=3200;var Sc=0,Ux=1,ui="",Je="srgb",oo="srgb-linear",ao="linear",te="srgb";var ur=7680;var gd=519,zx=512,Vx=513,Hx=514,Mc=515,Gx=516,Wx=517,wc=518,Xx=519,xd=35044;var Gd="300 es",Rn=2e3,Qr=2001;function jS(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function QS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qx(){let n=lo("canvas");return n.style.display="block",n}var Gg={},ts=null;function Wd(...n){let t="THREE."+n.shift();ts?ts("log",t,...n):console.log(t,...n)}function $x(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Lt(...n){n=$x(n);let t="THREE."+n.shift();if(ts)ts("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Nt(...n){n=$x(n);let t="THREE."+n.shift();if(ts)ts("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hr(...n){let t=n.join(" ");t in Gg||(Gg[t]=!0,Lt(...n))}function Yx(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Zx={[rl]:sl,[ol]:cl,[al]:ul,[fr]:ll,[sl]:rl,[cl]:ol,[ul]:al,[ll]:fr},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wg=1234567,io=Math.PI/180,es=180/Math.PI;function ps(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function Xd(n,t){return(n%t+t)%t}function tM(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function eM(n,t,e){return n!==t?(e-n)/(t-n):0}function ro(n,t,e){return(1-e)*n+e*t}function nM(n,t,e,i){return ro(n,t,1-Math.exp(-e*i))}function iM(n,t=1){return t-Math.abs(Xd(n,t*2)-t)}function rM(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function sM(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function oM(n,t){return n+Math.floor(Math.random()*(t-n+1))}function aM(n,t){return n+Math.random()*(t-n)}function lM(n){return n*(.5-Math.random())}function cM(n){n!==void 0&&(Wg=n);let t=Wg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uM(n){return n*io}function hM(n){return n*es}function dM(n){return(n&n-1)===0&&n!==0}function fM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mM(n,t,e,i,r){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),f=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ec={DEG2RAD:io,RAD2DEG:es,generateUUID:ps,clamp:Jt,euclideanModulo:Xd,mapLinear:tM,inverseLerp:eM,lerp:ro,damp:nM,pingpong:iM,smoothstep:rM,smootherstep:sM,randInt:oM,randFloat:aM,randFloatSpread:lM,seededRandom:cM,degToRad:uM,radToDeg:hM,isPowerOfTwo:dM,ceilPowerOfTwo:fM,floorPowerOfTwo:pM,setQuaternionFromProperEuler:mM,normalize:Ze,denormalize:Kr},Jd=class Jd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jd.prototype.isVector2=!0;var Xt=Jd,Xn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],f=s[o+1],g=s[o+2],y=s[o+3];if(u!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);p=Math.sin(p*v)/w,a=Math.sin(a*v)/w,l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+y*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+y*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kd=class Kd{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gh.copy(this).projectOnVector(t),this.sub(Gh)}reflect(t){return this.sub(Gh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kd.prototype.isVector3=!0;var V=Kd,Gh=new V,Xg=new Xn,jd=class jd{constructor(t,e,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=r[0],m=r[3],p=r[6],v=r[1],w=r[4],b=r[7],R=r[2],M=r[5],C=r[8];return s[0]=o*y+a*v+l*R,s[3]=o*m+a*w+l*M,s[6]=o*p+a*b+l*C,s[1]=c*y+h*v+u*R,s[4]=c*m+h*w+u*M,s[7]=c*p+h*b+u*C,s[2]=d*y+f*v+g*R,s[5]=d*m+f*w+g*M,s[8]=d*p+f*b+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(r*c-h*i)*y,t[2]=(a*i-r*o)*y,t[3]=d*y,t[4]=(h*e-r*l)*y,t[5]=(r*s-a*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wh.makeScale(t,e)),this}rotate(t){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wh.makeRotation(-t)),this}translate(t,e){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};jd.prototype.isMatrix3=!0;var Ot=jd,Wh=new Ot,qg=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$g=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gM(){let n={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===te&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(r.r=jr(r.r),r.g=jr(r.g),r.b=jr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[oo]:{primaries:t,whitePoint:i,transfer:ao,toXYZ:qg,fromXYZ:$g,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:te,toXYZ:qg,fromXYZ:$g,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),n}var Zt=gM();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ur,pl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ur===void 0&&(Ur=lo("canvas")),Ur.width=t.width,Ur.height=t.height;let r=Ur.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ur}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=lo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(si(e[i]/255)*255):e[i]=si(e[i]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xM=0,ns=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xh(r[o].image)):s.push(Xh(r[o]))}else s=Xh(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function Xh(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var yM=0,qh=new V,en=class n extends Wn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Vn,r=Vn,s=Oe,o=Vi,a=bn,l=nn,c=n.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=ps(),this.name="",this.source=new ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qh).x}get height(){return this.source.getSize(qh).y}get depth(){return this.source.getSize(qh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Fd;en.DEFAULT_ANISOTROPY=1;var Qd=class Qd{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,b=(f+1)/2,R=(p+1)/2,M=(h+d)/4,C=(u+y)/4,_=(g+m)/4;return w>b&&w>R?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=M/i,s=C/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=M/r,s=_/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=_/s),this.set(i,r,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qd.prototype.isVector4=!0;var he=Qd,ml=class extends Wn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},s=new en(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new ns(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends ml{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},co=class extends en{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends en{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nl=class Nl{constructor(t,e,i,r,s,o,a,l,c,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,h,u,d,f,g,y,m)}set(t,e,i,r,s,o,a,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/zr.setFromMatrixColumn(t,0).length(),s=1/zr.setFromMatrixColumn(t,1).length(),o=1/zr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_M,t,vM)}lookAt(t,e,i){let r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Ti.crossVectors(i,an),Ti.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ti.crossVectors(i,an)),Ti.normalize(),Da.crossVectors(an,Ti),r[0]=Ti.x,r[4]=Da.x,r[8]=an.x,r[1]=Ti.y,r[5]=Da.y,r[9]=an.y,r[2]=Ti.z,r[6]=Da.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],v=i[3],w=i[7],b=i[11],R=i[15],M=r[0],C=r[4],_=r[8],A=r[12],T=r[1],k=r[5],D=r[9],F=r[13],H=r[2],N=r[6],X=r[10],$=r[14],K=r[3],it=r[7],I=r[11],lt=r[15];return s[0]=o*M+a*T+l*H+c*K,s[4]=o*C+a*k+l*N+c*it,s[8]=o*_+a*D+l*X+c*I,s[12]=o*A+a*F+l*$+c*lt,s[1]=h*M+u*T+d*H+f*K,s[5]=h*C+u*k+d*N+f*it,s[9]=h*_+u*D+d*X+f*I,s[13]=h*A+u*F+d*$+f*lt,s[2]=g*M+y*T+m*H+p*K,s[6]=g*C+y*k+m*N+p*it,s[10]=g*_+y*D+m*X+p*I,s[14]=g*A+y*F+m*$+p*lt,s[3]=v*M+w*T+b*H+R*K,s[7]=v*C+w*k+b*N+R*it,s[11]=v*_+w*D+b*X+R*I,s[15]=v*A+w*F+b*$+R*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],v=l*f-c*d,w=a*f-c*u,b=a*d-l*u,R=o*f-c*h,M=o*d-l*h,C=o*u-a*h;return e*(y*v-m*w+p*b)-i*(g*v-m*R+p*M)+r*(g*w-y*R+p*C)-s*(g*b-y*M+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=e*a-i*o,w=e*l-r*o,b=e*c-s*o,R=i*l-r*a,M=i*c-s*a,C=r*c-s*l,_=h*y-u*g,A=h*m-d*g,T=h*p-f*g,k=u*m-d*y,D=u*p-f*y,F=d*p-f*m,H=v*F-w*D+b*k+R*T-M*A+C*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/H;return t[0]=(a*F-l*D+c*k)*N,t[1]=(r*D-i*F-s*k)*N,t[2]=(y*C-m*M+p*R)*N,t[3]=(d*M-u*C-f*R)*N,t[4]=(l*T-o*F-c*A)*N,t[5]=(e*F-r*T+s*A)*N,t[6]=(m*b-g*C-p*w)*N,t[7]=(h*C-d*b+f*w)*N,t[8]=(o*D-a*T+c*_)*N,t[9]=(i*T-e*D-s*_)*N,t[10]=(g*M-y*b+p*v)*N,t[11]=(u*b-h*M-f*v)*N,t[12]=(a*A-o*k-l*_)*N,t[13]=(e*k-i*A+r*_)*N,t[14]=(y*w-g*R-m*v)*N,t[15]=(h*R-u*w+d*v)*N,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,y=o*h,m=o*u,p=a*u,v=l*c,w=l*h,b=l*u,R=i.x,M=i.y,C=i.z;return r[0]=(1-(y+p))*R,r[1]=(f+b)*R,r[2]=(g-w)*R,r[3]=0,r[4]=(f-b)*M,r[5]=(1-(d+p))*M,r[6]=(m+v)*M,r[7]=0,r[8]=(g+w)*C,r[9]=(m-v)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=zr.set(r[0],r[1],r[2]).length(),a=zr.set(r[4],r[5],r[6]).length(),l=zr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),En.copy(this);let c=1/o,h=1/a,u=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,r,s,o,a=Rn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),f=(i+r)/(i-r),g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===Rn)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Qr)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Rn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-r),d=-(e+t)/(e-t),f=-(i+r)/(i-r),g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===Rn)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Qr)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Nl.prototype.isMatrix4=!0;var ce=Nl,zr=new V,En=new ce,_M=new V(0,0,0),vM=new V(1,1,1),Ti=new V,Da=new V,an=new V,Yg=new ce,Zg=new Xn,ai=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yg,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zg.setFromEuler(this),this.setFromQuaternion(Zg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bM=0,Jg=new V,Vr=new Xn,ti=new ce,La=new V,js=new V,SM=new V,MM=new Xn,Kg=new V(1,0,0),jg=new V(0,1,0),Qg=new V(0,0,1),tx={type:"added"},wM={type:"removed"},Hr={type:"childadded",child:null},$h={type:"childremoved",child:null},Ue=class n extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new ai,i=new Xn,r=new V(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ot}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vr.setFromAxisAngle(t,e),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(t,e){return Vr.setFromAxisAngle(t,e),this.quaternion.premultiply(Vr),this}rotateX(t){return this.rotateOnAxis(Kg,t)}rotateY(t){return this.rotateOnAxis(jg,t)}rotateZ(t){return this.rotateOnAxis(Qg,t)}translateOnAxis(t,e){return Jg.copy(t).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kg,t)}translateY(t){return this.translateOnAxis(jg,t)}translateZ(t){return this.translateOnAxis(Qg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?La.copy(t):La.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(js,La,this.up):ti.lookAt(La,js,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ti),this.quaternion.premultiply(Vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tx),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wM),$h.child=t,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tx),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,SM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,MM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};Ue.DEFAULT_UP=new V(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},EM={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Yh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Bt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=Xd(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Yh(o,s,t+1/3),this.g=Yh(o,s,t),this.b=Yh(o,s,t-1/3)}return Zt.colorSpaceToWorking(this,r),this}setStyle(t,e=Je){function i(s){s!==void 0&&parseFloat(s)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let i=Jx[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Zt.workingToColorSpace(Xe.copy(this),t),Math.round(Jt(Xe.r*255,0,255))*65536+Math.round(Jt(Xe.g*255,0,255))*256+Math.round(Jt(Xe.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Xe.copy(this),e);let i=Xe.r,r=Xe.g,s=Xe.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Je){Zt.workingToColorSpace(Xe.copy(this),t);let e=Xe.r,i=Xe.g,r=Xe.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Fa);let i=ro(Ai.h,Fa.h,e),r=ro(Ai.s,Fa.s,e),s=ro(Ai.l,Fa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Bt;Bt.NAMES=Jx;var ss=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var uo=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Tn=new V,ei=new V,Zh=new V,ni=new V,Gr=new V,Wr=new V,ex=new V,Jh=new V,Kh=new V,jh=new V,Qh=new he,td=new he,ed=new he,ki=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Tn.subVectors(t,e),r.cross(Tn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Tn.subVectors(r,e),ei.subVectors(i,e),Zh.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(ei),l=Tn.dot(Zh),c=ei.dot(ei),h=ei.dot(Zh),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return Qh.setScalar(0),td.setScalar(0),ed.setScalar(0),Qh.fromBufferAttribute(t,e),td.fromBufferAttribute(t,i),ed.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Qh,s.x),o.addScaledVector(td,s.y),o.addScaledVector(ed,s.z),o}static isFrontFacing(t,e,i,r){return Tn.subVectors(i,e),ei.subVectors(t,e),Tn.cross(ei).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Tn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,o,a;Gr.subVectors(r,i),Wr.subVectors(s,i),Jh.subVectors(t,i);let l=Gr.dot(Jh),c=Wr.dot(Jh);if(l<=0&&c<=0)return e.copy(i);Kh.subVectors(t,r);let h=Gr.dot(Kh),u=Wr.dot(Kh);if(h>=0&&u<=h)return e.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Gr,o);jh.subVectors(t,s);let f=Gr.dot(jh),g=Wr.dot(jh);if(g>=0&&f<=g)return e.copy(s);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Wr,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ex.subVectors(s,r),a=(u-h)/(u-h+(f-g)),e.copy(r).addScaledVector(ex,a);let p=1/(m+y+d);return o=y*p,a=d*p,e.copy(i).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Li=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Na.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(t.matrixWorld),this.union(Na)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Ba.subVectors(this.max,Qs),Xr.subVectors(t.a,Qs),qr.subVectors(t.b,Qs),$r.subVectors(t.c,Qs),Ri.subVectors(qr,Xr),Ci.subVectors($r,qr),or.subVectors(Xr,$r);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-or.z,or.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,or.z,0,-or.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-or.y,or.x,0];return!nd(e,Xr,qr,$r,Ba)||(e=[1,0,0,0,1,0,0,0,1],!nd(e,Xr,qr,$r,Ba))?!1:(Oa.crossVectors(Ri,Ci),e=[Oa.x,Oa.y,Oa.z],nd(e,Xr,qr,$r,Ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new V,new V,new V,new V,new V,new V,new V,new V],An=new V,Na=new Li,Xr=new V,qr=new V,$r=new V,Ri=new V,Ci=new V,or=new V,Qs=new V,Ba=new V,Oa=new V,ar=new V;function nd(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ar.fromArray(n,s);let a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=t.dot(ar),c=e.dot(ar),h=i.dot(ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var we=new V,Ua=new Xt,TM=0,cn=class extends Wn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xd,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ua.fromBufferAttribute(this,e),Ua.applyMatrix3(t),this.setXY(e,Ua.x,Ua.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xd&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var ho=class extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var fo=class extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var be=class extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}},AM=new Li,to=new V,id=new V,pr=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):AM.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;to.subVectors(t,this.center);let e=to.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(to,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(to.copy(t.center).add(id)),this.expandByPoint(to.copy(t.center).sub(id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},RM=0,_n=new ce,rd=new Ue,Yr=new V,ln=new Li,eo=new Li,Fe=new V,Ke=class n extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jS(t)?fo:ho)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,i){return _n.makeTranslation(t,e,i),this.applyMatrix4(_n),this}scale(t,e,i){return _n.makeScale(t,e,i),this.applyMatrix4(_n),this}lookAt(t){return rd.lookAt(t),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(ln.min,eo.min),ln.expandByPoint(Fe),Fe.addVectors(ln.max,eo.max),ln.expandByPoint(Fe)):(ln.expandByPoint(eo.min),ln.expandByPoint(eo.max))}ln.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Fe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Fe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(t,c),Fe.add(Yr)),r=Math.max(r,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new V,l[_]=new V;let c=new V,h=new V,u=new V,d=new Xt,f=new Xt,g=new Xt,y=new V,m=new V;function p(_,A,T){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,T),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,T),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(k),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(k),a[_].add(y),a[A].add(y),a[T].add(y),l[_].add(m),l[A].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,A=v.length;_<A;++_){let T=v[_],k=T.start,D=T.count;for(let F=k,H=k+D;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let w=new V,b=new V,R=new V,M=new V;function C(_){R.fromBufferAttribute(r,_),M.copy(R);let A=a[_];w.copy(A),w.sub(R.multiplyScalar(R.dot(A))).normalize(),b.crossVectors(M,A);let k=b.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,k)}for(let _=0,A=v.length;_<A;++_){let T=v[_],k=T.start,D=T.count;for(let F=k,H=k+D;F<H;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,h=new V,u=new V;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new cn(d,h,u)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var CM=0,li=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=dr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nl&&(i.blendSrc=this.blendSrc),this.blendDst!==il&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ri=new V,sd=new V,za=new V,Ii=new V,od=new V,Va=new V,ad=new V,os=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){sd.copy(t).add(e).multiplyScalar(.5),za.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(sd);let s=t.distanceTo(e)*.5,o=-this.direction.dot(za),a=Ii.dot(this.direction),l=-Ii.dot(za),c=Ii.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(sd).addScaledVector(za,d),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,i,r,s){od.subVectors(e,t),Va.subVectors(i,t),ad.crossVectors(od,Va);let o=this.direction.dot(ad),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);let l=a*this.direction.dot(Va.crossVectors(Ii,Va));if(l<0)return null;let c=a*this.direction.dot(od.cross(Ii));if(c<0||l+c>o)return null;let h=-a*Ii.dot(ad);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mr=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nx=new ce,lr=new os,Ha=new pr,ix=new V,Ga=new V,Wa=new V,Xa=new V,ld=new V,qa=new V,rx=new V,$a=new V,Be=class extends Ue{constructor(t=new Ke,e=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(ld.fromBufferAttribute(u,t),o?qa.addScaledVector(ld,h):qa.addScaledVector(ld.sub(e),h))}e.add(qa)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),lr.copy(t.ray).recast(t.near),!(Ha.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Ha,ix)===null||lr.origin.distanceToSquared(ix)>(t.far-t.near)**2))&&(nx.copy(s).invert(),lr.copy(t.ray).applyMatrix4(nx),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,R=w;b<R;b+=3){let M=a.getX(b),C=a.getX(b+1),_=a.getX(b+2);r=Ya(this,p,t,i,c,h,u,M,C,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);r=Ya(this,o,t,i,c,h,u,v,w,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,R=w;b<R;b+=3){let M=b,C=b+1,_=b+2;r=Ya(this,p,t,i,c,h,u,M,C,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,w=m+1,b=m+2;r=Ya(this,o,t,i,c,h,u,v,w,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function IM(n,t,e,i,r,s,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===oi,a),l===null)return null;$a.copy(a),$a.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo($a);return c<e.near||c>e.far?null:{distance:c,point:$a.clone(),object:n}}function Ya(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ga),n.getVertexPosition(l,Wa),n.getVertexPosition(c,Xa);let h=IM(n,t,e,i,Ga,Wa,Xa,rx);if(h){let u=new V;ki.getBarycoord(rx,Ga,Wa,Xa,u),r&&(h.uv=ki.getInterpolatedAttribute(r,a,l,c,u,new Xt)),s&&(h.uv1=ki.getInterpolatedAttribute(s,a,l,c,u,new Xt)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,l,c,u,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new V,materialIndex:0};ki.getNormal(Ga,Wa,Xa,d.normal),h.face=d,h.barycoord=u}return h}var xl=class extends en{constructor(t=null,e=1,i=1,r,s,o,a,l,c=Ne,h=Ne,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cd=new V,PM=new V,kM=new Ot,zn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=cd.subVectors(i,e).cross(PM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(cd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||kM.getNormalMatrix(t),r=this.coplanarPoint(cd).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new pr,DM=new Xt(.5,.5),Za=new V,as=class{constructor(t=new zn,e=new zn,i=new zn,r=new zn,s=new zn,o=new zn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Rn,i=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],y=s[9],m=s[10],p=s[11],v=s[12],w=s[13],b=s[14],R=s[15];if(r[0].setComponents(c-o,f-h,p-g,R-v).normalize(),r[1].setComponents(c+o,f+h,p+g,R+v).normalize(),r[2].setComponents(c+a,f+u,p+y,R+w).normalize(),r[3].setComponents(c-a,f-u,p-y,R-w).normalize(),i)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,f-d,p-m,R-b).normalize();else if(r[4].setComponents(c-l,f-d,p-m,R-b).normalize(),e===Rn)r[5].setComponents(c+l,f+d,p+m,R+b).normalize();else if(e===Qr)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);let e=DM.distanceTo(t.center);return cr.radius=.7071067811865476+e,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Za.x=r.normal.x>0?t.max.x:t.min.x,Za.y=r.normal.y>0?t.max.y:t.min.y,Za.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ls=class extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},yl=new V,_l=new V,sx=new ce,no=new os,Ja=new pr,ud=new V,ox=new V,cs=class extends Ue{constructor(t=new Ke,e=new ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)yl.fromBufferAttribute(e,r-1),_l.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=yl.distanceTo(_l);t.setAttribute("lineDistance",new be(i,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,t.ray.intersectsSphere(Ja)===!1)return;sx.copy(r).invert(),no.copy(t.ray).applyMatrix4(sx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),v=h.getX(y+1),w=Ka(this,t,no,l,p,v,y);w&&e.push(w)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Ka(this,t,no,l,y,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=Ka(this,t,no,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=Ka(this,t,no,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ka(n,t,e,i,r,s,o){let a=n.geometry.attributes.position;if(yl.fromBufferAttribute(a,r),_l.fromBufferAttribute(a,s),e.distanceSqToSegment(yl,_l,ud,ox)>i)return;ud.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ud);if(!(c<t.near||c>t.far))return{distance:c,point:ox.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var po=class extends en{constructor(t=[],e=zi,i,r,s,o,a,l,c,h){super(t,e,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ci=class extends en{constructor(t,e,i=In,r,s,o,a=Ne,l=Ne,c,h=Gn,u=1){if(h!==Gn&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vl=class extends ci{constructor(t,e=In,i=zi,r,s,o=Ne,a=Ne,l,c=Gn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mo=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fi=class n extends Ke{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2));function g(y,m,p,v,w,b,R,M,C,_,A){let T=b/C,k=R/_,D=b/2,F=R/2,H=M/2,N=C+1,X=_+1,$=0,K=0,it=new V;for(let I=0;I<X;I++){let lt=I*k-F;for(let gt=0;gt<N;gt++){let P=gt*T-D;it[y]=P*v,it[m]=lt*w,it[p]=H,c.push(it.x,it.y,it.z),it[y]=0,it[m]=0,it[p]=M>0?1:-1,h.push(it.x,it.y,it.z),u.push(gt/C),u.push(1-I/_),$+=1}}for(let I=0;I<_;I++)for(let lt=0;lt<C;lt++){let gt=d+lt+N*I,P=d+lt+N*(I+1),$t=d+(lt+1)+N*(I+1),Gt=d+(lt+1)+N*I;l.push(gt,P,Gt),l.push(P,$t,Gt),K+=6}a.addGroup(f,K,A),f+=K,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var go=class n extends Ke{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new V,h=new Xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*r;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},us=class n extends Ke{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;v(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(f,2));function v(){let b=new V,R=new V,M=0,C=(e-t)/i;for(let _=0;_<=s;_++){let A=[],T=_/s,k=T*(e-t)+t;for(let D=0;D<=r;D++){let F=D/r,H=F*l+a,N=Math.sin(H),X=Math.cos(H);R.x=k*N,R.y=-T*i+m,R.z=k*X,u.push(R.x,R.y,R.z),b.set(N,C,X).normalize(),d.push(b.x,b.y,b.z),f.push(F,1-T),A.push(g++)}y.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){let T=y[A][_],k=y[A+1][_],D=y[A+1][_+1],F=y[A][_+1];(t>0||A!==0)&&(h.push(T,k,F),M+=3),(e>0||A!==s-1)&&(h.push(k,D,F),M+=3)}c.addGroup(p,M,0),p+=M}function w(b){let R=g,M=new Xt,C=new V,_=0,A=b===!0?t:e,T=b===!0?1:-1;for(let D=1;D<=r;D++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;let k=g;for(let D=0;D<=r;D++){let H=D/r*l+a,N=Math.cos(H),X=Math.sin(H);C.x=A*X,C.y=m*T,C.z=A*N,u.push(C.x,C.y,C.z),d.push(0,T,0),M.x=N*.5+.5,M.y=X*.5*T+.5,f.push(M.x,M.y),g++}for(let D=0;D<r;D++){let F=R+D,H=k+D;b===!0?h.push(H,H+1,F):h.push(H+1,H,F),_+=3}c.addGroup(p,_,b===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xo=class n extends us{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var gr=class n extends Ke{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*d-o;for(let w=0;w<c;w++){let b=w*u-s;g.push(b,-v,0),y.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let w=v+c*p,b=v+c*(p+1),R=v+1+c*(p+1),M=v+1+c*p;f.push(w,b,M),f.push(b,R,M)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(y,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function _r(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(ax(r))r.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(ax(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function qe(n){let t={};for(let e=0;e<n.length;e++){let i=_r(n[e]);for(let r in i)t[r]=i[r]}return t}function ax(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function LM(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Kx={clone:_r,merge:qe},FM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FM,this.fragmentShader=NM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=LM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Bt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new he().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ot().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ce().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},bl=class extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xr=class extends li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Sl=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ml=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ja(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var Ni=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=e[++i],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wl=class extends Ni{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case pd:s=t,a=2*e-i;break;case md:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pd:o=t,l=2*i-e;break;case md:o=1,l=i+r[1]-r[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(r-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let R=0;R!==a;++R)s[R]=p*o[h+R]+v*o[c+R]+w*o[l+R]+b*o[u+R];return s}},El=class extends Ni{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},Tl=class extends Ni{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Al=class extends Ni{interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(r-e),y=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*y+o[l+m]*g;return s}let d=a*2,f=t-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],p=f*d+g*2,v=u[p],w=u[p+1],b=t*d+g*2,R=h[b],M=h[b+1],C=(i-e)/(r-e),_,A,T,k,D;for(let F=0;F<8;F++){_=C*C,A=_*C,T=1-C,k=T*T,D=k*T;let N=D*e+3*k*C*v+3*T*_*R+A*r-i;if(Math.abs(N)<1e-10)break;let X=3*k*(v-e)+6*T*C*(R-v)+3*_*(r-R);if(Math.abs(X)<1e-10)break;C=C-N/X,C=Math.max(0,Math.min(1,C))}s[g]=D*y+3*k*C*w+3*T*_*M+A*m}return s}},dn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ja(e,this.TimeBufferType),this.values=ja(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ja(t.times,Array),values:ja(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Al(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case so:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case el:e=this.InterpolantFactoryMethodSmooth;break;case dd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Lt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return el;case this.InterpolantFactoryMethodBezier:return dd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Nt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&QS(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===el,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=fl;var Bi=class extends dn{constructor(t,e,i){super(t,e,i)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=so;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends dn{constructor(t,e,i,r){super(t,e,i,r)}};Rl.prototype.ValueTypeName="color";var Cl=class extends dn{constructor(t,e,i,r){super(t,e,i,r)}};Cl.prototype.ValueTypeName="number";var Il=class extends Ni{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)Xn.slerpFlat(s,0,o,c-a,o,c,l);return s}},yo=class extends dn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends dn{constructor(t,e,i){super(t,e,i)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=so;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends dn{constructor(t,e,i,r){super(t,e,i,r)}};Pl.prototype.ValueTypeName="vector";var kl=class{constructor(t,e,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jx=new kl,Dl=class{constructor(t){this.manager=t!==void 0?t:jx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var _o=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},vo=class extends _o{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},hd=new ce,lx=new V,cx=new V,yd=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;lx.setFromMatrixPosition(t.matrixWorld),e.position.copy(lx),cx.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cx),e.updateMatrixWorld(),hd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Qr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qa=new V,tl=new Xn,Un=new V,bo=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qa,tl,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,tl,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Qa,tl,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,tl,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new V,ux=new Xt,hx=new Xt,tn=class extends bo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,ux,hx),e.subVectors(hx,ux)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(io*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ui=class extends bo{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_d=class extends yd{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},So=class extends _o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new _d}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zr=-90,Jr=1,Ll=class extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(Zr,Jr,t,e);r.layers=this.layers,this.add(r);let s=new tn(Zr,Jr,t,e);s.layers=this.layers,this.add(s);let o=new tn(Zr,Jr,t,e);o.layers=this.layers,this.add(o);let a=new tn(Zr,Jr,t,e);a.layers=this.layers,this.add(a);let l=new tn(Zr,Jr,t,e);l.layers=this.layers,this.add(l);let c=new tn(Zr,Jr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Fl=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var $d="\\[\\]\\.:\\/",BM=new RegExp("["+$d+"]","g"),Yd="[^"+$d+"]",OM="[^"+$d.replace("\\.","")+"]",UM=/((?:WC+[\/:])*)/.source.replace("WC",Yd),zM=/(WCOD+)?/.source.replace("WCOD",OM),VM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yd),HM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yd),GM=new RegExp("^"+UM+zM+VM+HM+"$"),WM=["material","materials","bones","map"],vd=class{constructor(t,e,i){let r=i||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(BM,"")}static parseTrackName(t){let e=GM.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);WM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=vd;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var WN=new Float32Array(1);var dx=new ce,Mo=class{constructor(t,e,i=0,r=1/0){this.ray=new os(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dx),this}intersectObject(t,e=!0,i=[]){return bd(t,this,i,e),i.sort(fx),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)bd(t[r],this,i,e);return i.sort(fx),i}};function fx(n,t){return n.distance-t.distance}function bd(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)bd(s[o],t,e,!0)}}var tf=class tf{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};tf.prototype.isMatrix2=!0;var Sd=tf;function Zd(n,t,e,i){let r=XM(i);switch(e){case zd:return n*t;case Hd:return n*t/r.components*r.byteLength;case Gl:return n*t/r.components*r.byteLength;case Gi:return n*t*2/r.components*r.byteLength;case Wl:return n*t*2/r.components*r.byteLength;case Vd:return n*t*3/r.components*r.byteLength;case bn:return n*t*4/r.components*r.byteLength;case Xl:return n*t*4/r.components*r.byteLength;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Co:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:case Zl:return Math.max(n,16)*Math.max(t,8)/4;case ql:case Yl:return Math.max(n,8)*Math.max(t,8)/2;case Jl:case Kl:case Ql:case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jl:case Po:case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case gc:case xc:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _c:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ko:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function XM(n){switch(n){case nn:case Nd:return{byteLength:1,components:1};case ds:case Bd:case $n:return{byteLength:2,components:1};case Vl:case Hl:return{byteLength:2,components:4};case In:case zl:case Pn:return{byteLength:4,components:1};case Od:case Ud:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window!="undefined"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function b0(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function $M(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var YM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ew=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ow=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_w=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ww="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ew=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ow=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ww=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$w=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Kw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,YE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_T=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:YM,alphahash_pars_fragment:ZM,alphamap_fragment:JM,alphamap_pars_fragment:KM,alphatest_fragment:jM,alphatest_pars_fragment:QM,aomap_fragment:tw,aomap_pars_fragment:ew,batching_pars_vertex:nw,batching_vertex:iw,begin_vertex:rw,beginnormal_vertex:sw,bsdfs:ow,iridescence_fragment:aw,bumpmap_pars_fragment:lw,clipping_planes_fragment:cw,clipping_planes_pars_fragment:uw,clipping_planes_pars_vertex:hw,clipping_planes_vertex:dw,color_fragment:fw,color_pars_fragment:pw,color_pars_vertex:mw,color_vertex:gw,common:xw,cube_uv_reflection_fragment:yw,defaultnormal_vertex:_w,displacementmap_pars_vertex:vw,displacementmap_vertex:bw,emissivemap_fragment:Sw,emissivemap_pars_fragment:Mw,colorspace_fragment:ww,colorspace_pars_fragment:Ew,envmap_fragment:Tw,envmap_common_pars_fragment:Aw,envmap_pars_fragment:Rw,envmap_pars_vertex:Cw,envmap_physical_pars_fragment:zw,envmap_vertex:Iw,fog_vertex:Pw,fog_pars_vertex:kw,fog_fragment:Dw,fog_pars_fragment:Lw,gradientmap_pars_fragment:Fw,lightmap_pars_fragment:Nw,lights_lambert_fragment:Bw,lights_lambert_pars_fragment:Ow,lights_pars_begin:Uw,lights_toon_fragment:Vw,lights_toon_pars_fragment:Hw,lights_phong_fragment:Gw,lights_phong_pars_fragment:Ww,lights_physical_fragment:Xw,lights_physical_pars_fragment:qw,lights_fragment_begin:$w,lights_fragment_maps:Yw,lights_fragment_end:Zw,lightprobes_pars_fragment:Jw,logdepthbuf_fragment:Kw,logdepthbuf_pars_fragment:jw,logdepthbuf_pars_vertex:Qw,logdepthbuf_vertex:tE,map_fragment:eE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:rE,metalnessmap_fragment:sE,metalnessmap_pars_fragment:oE,morphinstance_vertex:aE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:hE,normal_fragment_begin:dE,normal_fragment_maps:fE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:_E,clearcoat_pars_fragment:vE,iridescence_pars_fragment:bE,opaque_fragment:SE,packing:ME,premultiplied_alpha_fragment:wE,project_vertex:EE,dithering_fragment:TE,dithering_pars_fragment:AE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:PE,shadowmap_vertex:kE,shadowmask_pars_fragment:DE,skinbase_vertex:LE,skinning_pars_vertex:FE,skinning_vertex:NE,skinnormal_vertex:BE,specularmap_fragment:OE,specularmap_pars_fragment:UE,tonemapping_fragment:zE,tonemapping_pars_fragment:VE,transmission_fragment:HE,transmission_pars_fragment:GE,uv_pars_fragment:WE,uv_pars_vertex:XE,uv_vertex:qE,worldpos_vertex:$E,background_vert:YE,background_frag:ZE,backgroundCube_vert:JE,backgroundCube_frag:KE,cube_vert:jE,cube_frag:QE,depth_vert:tT,depth_frag:eT,distance_vert:nT,distance_frag:iT,equirect_vert:rT,equirect_frag:sT,linedashed_vert:oT,linedashed_frag:aT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:hT,meshmatcap_vert:dT,meshmatcap_frag:fT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:xT,meshphysical_vert:yT,meshphysical_frag:_T,meshtoon_vert:vT,meshtoon_frag:bT,points_vert:ST,points_frag:MT,shadow_vert:wT,shadow_frag:ET,sprite_vert:TT,sprite_frag:AT},pt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Zn={basic:{uniforms:qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:qe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:qe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:qe([pt.points,pt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:qe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:qe([pt.common,pt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:qe([pt.sprite,pt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:qe([pt.common,pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:qe([pt.lights,pt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Zn.physical={uniforms:qe([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Tc={r:0,b:0,g:0},RT=new ce,S0=new Ot;S0.set(-1,0,0,0,1,0,0,0,1);function CT(n,t,e,i,r,s){let o=new Bt(0),a=r===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let b=v.backgroundBlurriness>0;w=t.get(w,b)}return w}function g(v){let w=!1,b=f(v);b===null?m(o,a):b&&b.isColor&&(m(b,1),w=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,w){let b=f(w);b&&(b.isCubeTexture||b.mapping===Eo)?(c===void 0&&(c=new Be(new Fi(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:_r(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(S0),c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==te,(h!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Be(new gr(2,2),new hn({name:"BackgroundMaterial",uniforms:_r(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(b.colorSpace)!==te,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(Tc,qd(n)),e.buffers.color.setClear(Tc.r,Tc.g,Tc.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:y,dispose:p}}function IT(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(k,D,F,H,N){let X=!1,$=u(k,H,F,D);s!==$&&(s=$,c(s.object)),X=f(k,H,F,N),X&&g(k,H,F,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(k,D,F,H),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function h(k){return n.deleteVertexArray(k)}function u(k,D,F,H){let N=H.wireframe===!0,X=i[D.id];X===void 0&&(X={},i[D.id]=X);let $=k.isInstancedMesh===!0?k.id:0,K=X[$];K===void 0&&(K={},X[$]=K);let it=K[F.id];it===void 0&&(it={},K[F.id]=it);let I=it[N];return I===void 0&&(I=d(l()),it[N]=I),I}function d(k){let D=[],F=[],H=[];for(let N=0;N<e;N++)D[N]=0,F[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:H,object:k,attributes:{},index:null}}function f(k,D,F,H){let N=s.attributes,X=D.attributes,$=0,K=F.getAttributes();for(let it in K)if(K[it].location>=0){let lt=N[it],gt=X[it];if(gt===void 0&&(it==="instanceMatrix"&&k.instanceMatrix&&(gt=k.instanceMatrix),it==="instanceColor"&&k.instanceColor&&(gt=k.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;$++}return s.attributesNum!==$||s.index!==H}function g(k,D,F,H){let N={},X=D.attributes,$=0,K=F.getAttributes();for(let it in K)if(K[it].location>=0){let lt=X[it];lt===void 0&&(it==="instanceMatrix"&&k.instanceMatrix&&(lt=k.instanceMatrix),it==="instanceColor"&&k.instanceColor&&(lt=k.instanceColor));let gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),N[it]=gt,$++}s.attributes=N,s.attributesNum=$,s.index=H}function y(){let k=s.newAttributes;for(let D=0,F=k.length;D<F;D++)k[D]=0}function m(k){p(k,0)}function p(k,D){let F=s.newAttributes,H=s.enabledAttributes,N=s.attributeDivisors;F[k]=1,H[k]===0&&(n.enableVertexAttribArray(k),H[k]=1),N[k]!==D&&(n.vertexAttribDivisor(k,D),N[k]=D)}function v(){let k=s.newAttributes,D=s.enabledAttributes;for(let F=0,H=D.length;F<H;F++)D[F]!==k[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function w(k,D,F,H,N,X,$){$===!0?n.vertexAttribIPointer(k,D,F,N,X):n.vertexAttribPointer(k,D,F,H,N,X)}function b(k,D,F,H){y();let N=H.attributes,X=F.getAttributes(),$=D.defaultAttributeValues;for(let K in X){let it=X[K];if(it.location>=0){let I=N[K];if(I===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(I=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(I=k.instanceColor)),I!==void 0){let lt=I.normalized,gt=I.itemSize,P=t.get(I);if(P===void 0)continue;let $t=P.buffer,Gt=P.type,Q=P.bytesPerElement,ct=Gt===n.INT||Gt===n.UNSIGNED_INT||I.gpuType===zl;if(I.isInterleavedBufferAttribute){let et=I.data,kt=et.stride,Dt=I.offset;if(et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<it.locationSize;Tt++)p(it.location+Tt,et.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<it.locationSize;Tt++)m(it.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let Tt=0;Tt<it.locationSize;Tt++)w(it.location+Tt,gt/it.locationSize,Gt,lt,kt*Q,(Dt+gt/it.locationSize*Tt)*Q,ct)}else{if(I.isInstancedBufferAttribute){for(let et=0;et<it.locationSize;et++)p(it.location+et,I.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let et=0;et<it.locationSize;et++)m(it.location+et);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let et=0;et<it.locationSize;et++)w(it.location+et,gt/it.locationSize,Gt,lt,gt*Q,gt/it.locationSize*et*Q,ct)}}else if($!==void 0){let lt=$[K];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(it.location,lt);break;case 3:n.vertexAttrib3fv(it.location,lt);break;case 4:n.vertexAttrib4fv(it.location,lt);break;default:n.vertexAttrib1fv(it.location,lt)}}}}v()}function R(){A();for(let k in i){let D=i[k];for(let F in D){let H=D[F];for(let N in H){let X=H[N];for(let $ in X)h(X[$].object),delete X[$];delete H[N]}}delete i[k]}}function M(k){if(i[k.id]===void 0)return;let D=i[k.id];for(let F in D){let H=D[F];for(let N in H){let X=H[N];for(let $ in X)h(X[$].object),delete X[$];delete H[N]}}delete i[k.id]}function C(k){for(let D in i){let F=i[D];for(let H in F){let N=F[H];if(N[k.id]===void 0)continue;let X=N[k.id];for(let $ in X)h(X[$].object),delete X[$];delete N[k.id]}}}function _(k){for(let D in i){let F=i[D],H=k.isInstancedMesh===!0?k.id:0,N=F[H];if(N!==void 0){for(let X in N){let $=N[X];for(let K in $)h($[K].object),delete $[K];delete N[X]}delete F[H],Object.keys(F).length===0&&delete i[D]}}}function A(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function PT(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function kT(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==bn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let _=C===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Pn&&!_)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:b,maxSamples:R,samples:M}}function DT(n){let t=this,e=null,i=0,r=!1,s=!1,o=new zn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let v=s?0:i,w=v*4,b=p.clippingState||null;l.value=b,b=h(g,d,w,f);for(let R=0;R!==w;++R)b[R]=e[R];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=f;w!==y;++w,b+=4)o.copy(u[w]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Wi=4,Qx=[.125,.215,.35,.446,.526,.582],vr=20,LT=256,Do=new Ui,t0=new Bt,ef=null,nf=0,rf=0,sf=!1,FT=new V,Rc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){let{size:o=256,position:a=FT}=s;ef=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ef,nf,rf),this._renderer.xr.enabled=sf,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ef=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:$n,format:bn,colorSpace:oo,depthBuffer:!1},r=e0(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NT(s)),this._blurMaterial=OT(s,t,e),this._ggxMaterial=BT(s,t,e)}return r}_compileMaterial(t){let e=new Be(new Ke,t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,i,r,s){let l=new tn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(t0),u.toneMapping=Cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new Fi,new mr({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(t0),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));let R=this._cubeSize;ms(r,b*R,w>2?R:0,R,R),u.setRenderTarget(r),p&&u.render(y,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===zi||t.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ms(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Do)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Wi?i-g+Wi:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ms(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(a,Do),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ms(t,m,p,3*y,2*y),r.setRenderTarget(t),r.render(a,Do)}_blur(t,e,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[r];u.material=c;let d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*vr-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):vr;m>vr&&Lt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);let p=[],v=0;for(let C=0;C<vr;++C){let _=C/y,A=Math.exp(-_*_/2);p.push(A),C===0?v+=A:C<m&&(v+=2*A)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;let b=this._sizeLods[r],R=3*b*(r>w-Wi?r-w+Wi:0),M=4*(this._cubeSize-b);ms(e,R,M,3*b,2*b),l.setRenderTarget(e),l.render(u,Do)}};function NT(n){let t=[],e=[],i=[],r=n,s=n-Wi+1+Qx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Wi?l=Qx[o-n+Wi-1]:o===0&&(l=0),e.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*f),w=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let M=0;M<f;M++){let C=M%3*2/3-1,_=M>2?0:-1,A=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];v.set(A,y*g*M),w.set(d,m*g*M);let T=[M,M,M,M,M,M];b.set(T,p*g*M)}let R=new Ke;R.setAttribute("position",new cn(v,y)),R.setAttribute("uv",new cn(w,m)),R.setAttribute("faceIndex",new cn(b,p)),i.push(new Be(R,null)),r>Wi&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function e0(n,t,e){let i=new un(n,t,e);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function BT(n,t,e){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function OT(n,t,e){let i=new Float32Array(vr),r=new V(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function n0(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function i0(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cc=class extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new po(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:qn});s.uniforms.tEquirect.value=e;let o=new Be(r,s),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Oe),new Ll(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}};function UT(n){let t=new WeakMap,e=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Bl||f===Ol)if(t.has(d)){let g=t.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Cc(g.height);return y.fromEquirectangularTexture(n,d),t.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===Bl||f===Ol,y=f===zi||f===yr;if(g||y){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Rc(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new Rc(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Bl?d.mapping=zi:f===Ol&&(d.mapping=yr),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function zT(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&hr("WebGLRenderer: "+i+" extension not supported."),r}}}function VT(n,t,e,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let v=f.array;y=f.version;for(let w=0,b=v.length;w<b;w+=3){let R=v[w+0],M=v[w+1],C=v[w+2];d.push(R,M,M,C,C,R)}}else{let v=g.array;y=g.version;for(let w=0,b=v.length/3-1;w<b;w+=3){let R=w+0,M=w+1,C=w+2;d.push(R,M,M,C,C,R)}}let m=new(g.count>=65535?fo:ho)(d,1);m.version=y;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function HT(n,t,e){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,s,u*o),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,s,u*o,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];e.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function GT(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:Nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function WT(n,t,e){let i=new WeakMap,r=new he;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let A=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let b=a.attributes.position.count*w,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let M=new Float32Array(b*R*4*u),C=new co(M,b,R,u);C.type=Pn,C.needsUpdate=!0;let _=w*4;for(let T=0;T<u;T++){let k=m[T],D=p[T],F=v[T],H=b*R*4*T;for(let N=0;N<k.count;N++){let X=N*_;f===!0&&(r.fromBufferAttribute(k,N),M[H+X+0]=r.x,M[H+X+1]=r.y,M[H+X+2]=r.z,M[H+X+3]=0),g===!0&&(r.fromBufferAttribute(D,N),M[H+X+4]=r.x,M[H+X+5]=r.y,M[H+X+6]=r.z,M[H+X+7]=0),y===!0&&(r.fromBufferAttribute(F,N),M[H+X+8]=r.x,M[H+X+9]=r.y,M[H+X+10]=r.z,M[H+X+11]=F.itemSize===4?r.w:1)}}d={count:u,texture:C,size:new Xt(b,R)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function XT(n,t,e,i,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var qT={[Rd]:"LINEAR_TONE_MAPPING",[Cd]:"REINHARD_TONE_MAPPING",[Id]:"CINEON_TONE_MAPPING",[Pd]:"ACES_FILMIC_TONE_MAPPING",[Dd]:"AGX_TONE_MAPPING",[Ld]:"NEUTRAL_TONE_MAPPING",[kd]:"CUSTOM_TONE_MAPPING"};function $T(n,t,e,i,r,s){let o=new un(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ci(t,e):void 0}),a=new un(t,e,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new Ke;l.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new be([0,2,0,0,2,0],2));let c=new bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Be(l,c),u=new Ui(-1,1,1,-1,0,1),d=null,f=null,g=!1,y,m=null,p=[],v=!1;this.setSize=function(w,b){o.setSize(w,b),a.setSize(w,b);for(let R=0;R<p.length;R++){let M=p[R];M.setSize&&M.setSize(w,b)}},this.setEffects=function(w){p=w,v=p.length>0&&p[0].isRenderPass===!0;let b=o.width,R=o.height;for(let M=0;M<p.length;M++){let C=p[M];C.setSize&&C.setSize(b,R)}},this.begin=function(w,b){if(g||w.toneMapping===Cn&&p.length===0)return!1;if(m=b,b!==null){let R=b.width,M=b.height;(o.width!==R||o.height!==M)&&this.setSize(R,M)}return v===!1&&w.setRenderTarget(o),y=w.toneMapping,w.toneMapping=Cn,!0},this.hasRenderPass=function(){return v},this.end=function(w,b){w.toneMapping=y,g=!0;let R=o,M=a;for(let C=0;C<p.length;C++){let _=p[C];if(_.enabled!==!1&&(_.render(w,M,R,b),_.needsSwap!==!1)){let A=R;R=M,M=A}}if(d!==w.outputColorSpace||f!==w.toneMapping){d=w.outputColorSpace,f=w.toneMapping,c.defines={},Zt.getTransfer(d)===te&&(c.defines.SRGB_TRANSFER="");let C=qT[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=R.texture,w.setRenderTarget(m),w.render(h,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var M0=new en,lf=new ci(1,1),w0=new co,E0=new gl,T0=new po,r0=[],s0=[],o0=new Float32Array(16),a0=new Float32Array(9),l0=new Float32Array(4);function xs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=r0[r];if(s===void 0&&(s=new Float32Array(r),r0[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ce(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function kc(n,t){let e=s0[t];e===void 0&&(e=new Int32Array(t),s0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function YT(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ZT(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function JT(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function KT(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function jT(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,i))return;l0.set(i),n.uniformMatrix2fv(this.addr,!1,l0),Ie(e,i)}}function QT(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,i))return;a0.set(i),n.uniformMatrix3fv(this.addr,!1,a0),Ie(e,i)}}function tA(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,i))return;o0.set(i),n.uniformMatrix4fv(this.addr,!1,o0),Ie(e,i)}}function eA(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function nA(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function iA(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function rA(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function sA(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function oA(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function aA(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function lA(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function cA(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lf.compareFunction=e.isReversedDepthBuffer()?wc:Mc,s=lf):s=M0,e.setTexture2D(t||s,r)}function uA(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||E0,r)}function hA(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||T0,r)}function dA(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||w0,r)}function fA(n){switch(n){case 5126:return YT;case 35664:return ZT;case 35665:return JT;case 35666:return KT;case 35674:return jT;case 35675:return QT;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return rA;case 5125:return sA;case 36294:return oA;case 36295:return aA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return dA}}function pA(n,t){n.uniform1fv(this.addr,t)}function mA(n,t){let e=xs(t,this.size,2);n.uniform2fv(this.addr,e)}function gA(n,t){let e=xs(t,this.size,3);n.uniform3fv(this.addr,e)}function xA(n,t){let e=xs(t,this.size,4);n.uniform4fv(this.addr,e)}function yA(n,t){let e=xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function _A(n,t){let e=xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function vA(n,t){let e=xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function bA(n,t){n.uniform1iv(this.addr,t)}function SA(n,t){n.uniform2iv(this.addr,t)}function MA(n,t){n.uniform3iv(this.addr,t)}function wA(n,t){n.uniform4iv(this.addr,t)}function EA(n,t){n.uniform1uiv(this.addr,t)}function TA(n,t){n.uniform2uiv(this.addr,t)}function AA(n,t){n.uniform3uiv(this.addr,t)}function RA(n,t){n.uniform4uiv(this.addr,t)}function CA(n,t,e){let i=this.cache,r=t.length,s=kc(e,r);Ce(i,s)||(n.uniform1iv(this.addr,s),Ie(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=lf:o=M0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function IA(n,t,e){let i=this.cache,r=t.length,s=kc(e,r);Ce(i,s)||(n.uniform1iv(this.addr,s),Ie(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||E0,s[o])}function PA(n,t,e){let i=this.cache,r=t.length,s=kc(e,r);Ce(i,s)||(n.uniform1iv(this.addr,s),Ie(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||T0,s[o])}function kA(n,t,e){let i=this.cache,r=t.length,s=kc(e,r);Ce(i,s)||(n.uniform1iv(this.addr,s),Ie(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||w0,s[o])}function DA(n){switch(n){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return xA;case 35674:return yA;case 35675:return _A;case 35676:return vA;case 5124:case 35670:return bA;case 35667:case 35671:return SA;case 35668:case 35672:return MA;case 35669:case 35673:return wA;case 5125:return EA;case 36294:return TA;case 36295:return AA;case 36296:return RA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return kA}}var cf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fA(e.type)}},uf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=DA(e.type)}},hf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],i)}}},of=/(\w+)(\])?(\[|\.)?/g;function c0(n,t){n.seq.push(t),n.map[t.id]=t}function LA(n,t,e){let i=n.name,r=i.length;for(of.lastIndex=0;;){let s=of.exec(i),o=of.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){c0(e,c===void 0?new cf(a,n,t):new uf(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new hf(a),c0(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);LA(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function u0(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var FA=37297,NA=0;function BA(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var h0=new Ot;function OA(n){Zt._getMatrix(h0,Zt.workingColorSpace,n);let t=`mat3( ${h0.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case ao:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function d0(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+BA(n.getShaderSource(t),a)}else return s}function UA(n,t){let e=OA(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var zA={[Rd]:"Linear",[Cd]:"Reinhard",[Id]:"Cineon",[Pd]:"ACESFilmic",[Dd]:"AgX",[Ld]:"Neutral",[kd]:"Custom"};function VA(n,t){let e=zA[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ac=new V;function HA(){Zt.getLuminanceCoefficients(Ac);let n=Ac.x.toFixed(4),t=Ac.y.toFixed(4),e=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function WA(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function XA(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Fo(n){return n!==""}function f0(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(n){return n.replace(qA,YA)}var $A=new Map;function YA(n,t){let e=Ht[t];if(e===void 0){let i=$A.get(t);if(i!==void 0)e=Ht[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return df(e)}var ZA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(n){return n.replace(ZA,JA)}function JA(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function g0(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var KA={[wo]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"};function jA(n){return KA[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var QA={[zi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};function t1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":QA[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var e1={[yr]:"ENVMAP_MODE_REFRACTION"};function n1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":e1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var i1={[Ad]:"ENVMAP_BLENDING_MULTIPLY",[Fx]:"ENVMAP_BLENDING_MIX",[Nx]:"ENVMAP_BLENDING_ADD"};function r1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":i1[n.combine]||"ENVMAP_BLENDING_NONE"}function s1(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function o1(n,t,e,i){let r=n.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jA(e),c=t1(e),h=n1(e),u=r1(e),d=s1(e),f=GA(e),g=WA(s),y=r.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fo).join(`
`),p.length>0&&(p+=`
`)):(m=[g0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),p=[g0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Cn?VA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,UA("linearToOutputTexel",e.outputColorSpace),HA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fo).join(`
`)),o=df(o),o=f0(o,e),o=p0(o,e),a=df(a),a=f0(a,e),a=p0(a,e),o=m0(o),a=m0(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=v+m+o,b=v+p+a,R=u0(r,r.VERTEX_SHADER,w),M=u0(r,r.FRAGMENT_SHADER,b);r.attachShader(y,R),r.attachShader(y,M),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(k){if(n.debug.checkShaderErrors){let D=r.getProgramInfoLog(y)||"",F=r.getShaderInfoLog(R)||"",H=r.getShaderInfoLog(M)||"",N=D.trim(),X=F.trim(),$=H.trim(),K=!0,it=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,R,M);else{let I=d0(r,R,"vertex"),lt=d0(r,M,"fragment");Nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+N+`
`+I+`
`+lt)}else N!==""?Lt("WebGLProgram: Program Info Log:",N):(X===""||$==="")&&(it=!1);it&&(k.diagnostics={runnable:K,programLog:N,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(R),r.deleteShader(M),_=new gs(r,y),A=XA(r,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(y,FA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=NA++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=M,this}var a1=0,ff=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new pf(t),e.set(t,i)),i}},pf=class{constructor(t){this.id=a1++,this.code=t,this.usedTimes=0}};function l1(n){return n===Gi||n===Po||n===ko}function c1(n,t,e,i,r,s){let o=new is,a=new ff,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,A,T,k,D,F){let H=k.fog,N=D.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?k.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=t.get(_.envMap||X,$),it=K&&K.mapping===Eo?K.image.height:null,I=f[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Lt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let lt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,gt=lt!==void 0?lt.length:0,P=0;N.morphAttributes.position!==void 0&&(P=1),N.morphAttributes.normal!==void 0&&(P=2),N.morphAttributes.color!==void 0&&(P=3);let $t,Gt,Q,ct;if(I){let Mt=Zn[I];$t=Mt.vertexShader,Gt=Mt.fragmentShader}else{$t=_.vertexShader,Gt=_.fragmentShader;let Mt=a.getVertexShaderStage(_),pe=a.getFragmentShaderStage(_);a.update(_,Mt,pe),Q=Mt.id,ct=pe.id}let et=n.getRenderTarget(),kt=n.state.buffers.depth.getReversed(),Dt=D.isInstancedMesh===!0,Tt=D.isBatchedMesh===!0,ne=!!_.map,Vt=!!_.matcap,ee=!!K,Kt=!!_.aoMap,Yt=!!_.lightMap,de=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,xe=!!_.displacementMap,Se=!!_.emissiveMap,ue=!!_.metalnessMap,fe=!!_.roughnessMap,O=_.anisotropy>0,ze=_.clearcoat>0,Qt=_.dispersion>0,S=_.iridescence>0,x=_.sheen>0,L=_.transmission>0,U=O&&!!_.anisotropyMap,G=ze&&!!_.clearcoatMap,rt=ze&&!!_.clearcoatNormalMap,at=ze&&!!_.clearcoatRoughnessMap,Z=S&&!!_.iridescenceMap,J=S&&!!_.iridescenceThicknessMap,ut=x&&!!_.sheenColorMap,_t=x&&!!_.sheenRoughnessMap,ht=!!_.specularMap,st=!!_.specularColorMap,Pt=!!_.specularIntensityMap,Ft=L&&!!_.transmissionMap,Ut=L&&!!_.thicknessMap,B=!!_.gradientMap,dt=!!_.alphaMap,tt=_.alphaTest>0,ft=!!_.alphaHash,yt=!!_.extensions,nt=Cn;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(nt=n.toneMapping);let At={shaderID:I,shaderType:_.type,shaderName:_.name,vertexShader:$t,fragmentShader:Gt,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&D._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&D.instanceColor!==null,instancingMorph:Dt&&D.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ne,matcap:Vt,envMap:ee,envMapMode:ee&&K.mapping,envMapCubeUVHeight:it,aoMap:Kt,lightMap:Yt,bumpMap:de,normalMap:ge,displacementMap:xe,emissiveMap:Se,normalMapObjectSpace:ge&&_.normalMapType===Ux,normalMapTangentSpace:ge&&_.normalMapType===Sc,packedNormalMap:ge&&_.normalMapType===Sc&&l1(_.normalMap.format),metalnessMap:ue,roughnessMap:fe,anisotropy:O,anisotropyMap:U,clearcoat:ze,clearcoatMap:G,clearcoatNormalMap:rt,clearcoatRoughnessMap:at,dispersion:Qt,iridescence:S,iridescenceMap:Z,iridescenceThicknessMap:J,sheen:x,sheenColorMap:ut,sheenRoughnessMap:_t,specularMap:ht,specularColorMap:st,specularIntensityMap:Pt,transmission:L,transmissionMap:Ft,thicknessMap:Ut,gradientMap:B,opaque:_.transparent===!1&&_.blending===dr&&_.alphaToCoverage===!1,alphaMap:dt,alphaTest:tt,alphaHash:ft,combine:_.combine,mapUv:ne&&g(_.map.channel),aoMapUv:Kt&&g(_.aoMap.channel),lightMapUv:Yt&&g(_.lightMap.channel),bumpMapUv:de&&g(_.bumpMap.channel),normalMapUv:ge&&g(_.normalMap.channel),displacementMapUv:xe&&g(_.displacementMap.channel),emissiveMapUv:Se&&g(_.emissiveMap.channel),metalnessMapUv:ue&&g(_.metalnessMap.channel),roughnessMapUv:fe&&g(_.roughnessMap.channel),anisotropyMapUv:U&&g(_.anisotropyMap.channel),clearcoatMapUv:G&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(_.sheenRoughnessMap.channel),specularMapUv:ht&&g(_.specularMap.channel),specularColorMapUv:st&&g(_.specularColorMap.channel),specularIntensityMapUv:Pt&&g(_.specularIntensityMap.channel),transmissionMapUv:Ft&&g(_.transmissionMap.channel),thicknessMapUv:Ut&&g(_.thicknessMap.channel),alphaMapUv:dt&&g(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ge||O),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(ne||dt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:kt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:P,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:ne&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===te,decodeVideoTextureEmissive:Se&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:yt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&_.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)A.push(T),A.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(p(A,_),v(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function v(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){let A=f[_.type],T;if(A){let k=Zn[A];T=Kx.clone(k.uniforms)}else T=_.uniforms;return T}function b(_,A){let T=h.get(A);return T!==void 0?++T.usedTimes:(T=new o1(n,A,_,r),c.push(T),h.set(A,T)),T}function R(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:R,releaseShaderCache:M,programs:c,dispose:C}}function u1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function h1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function x0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function y0(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,y,m,p){let v=n[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},n[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=o(d),v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=m,v.group=p),t++,v}function l(d,f,g,y,m,p){let v=a(d,f,g,y,m,p);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):e.push(v)}function c(d,f,g,y,m,p){let v=a(d,f,g,y,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):e.unshift(v)}function h(d,f,g){e.length>1&&e.sort(d||h1),i.length>1&&i.sort(f||x0),r.length>1&&r.sort(f||x0),g&&(e.reverse(),i.reverse(),r.reverse())}function u(){for(let d=t,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function d1(){let n=new WeakMap;function t(i,r){let s=n.get(i),o;return s===void 0?(o=new y0,n.set(i,[o])):r>=s.length?(o=new y0,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function f1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Bt};break;case"SpotLight":e={position:new V,direction:new V,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function p1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var m1=0;function g1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function x1(n){let t=new f1,e=p1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let r=new V,s=new ce,o=new ce;function a(c){let h=0,u=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,v=0,w=0,b=0,R=0,M=0,C=0;c.sort(g1);for(let A=0,T=c.length;A<T;A++){let k=c[A],D=k.color,F=k.intensity,H=k.distance,N=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Gi?N=k.shadow.map.texture:N=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(k.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(k.sh.coefficients[X],F);C++}else if(k.isDirectionalLight){let X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let $=k.shadow,K=e.get(k);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=k.shadow.matrix,v++}i.directional[f]=X,f++}else if(k.isSpotLight){let X=t.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(D).multiplyScalar(F),X.distance=H,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,i.spot[y]=X;let $=k.shadow;if(k.map&&(i.spotLightMap[R]=k.map,R++,$.updateMatrices(k),k.castShadow&&M++),i.spotLightMatrix[y]=$.matrix,k.castShadow){let K=e.get(k);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=N,b++}y++}else if(k.isRectAreaLight){let X=t.get(k);X.color.copy(D).multiplyScalar(F),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),i.rectArea[m]=X,m++}else if(k.isPointLight){let X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),X.distance=k.distance,X.decay=k.decay,k.castShadow){let $=k.shadow,K=e.get(k);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=k.shadow.matrix,w++}i.point[g]=X,g++}else if(k.isHemisphereLight){let X=t.get(k);X.skyColor.copy(k.color).multiplyScalar(F),X.groundColor.copy(k.groundColor).multiplyScalar(F),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let _=i.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==v||_.numPointShadows!==w||_.numSpotShadows!==b||_.numSpotMaps!==R||_.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+R-M,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=C,_.directionalLength=f,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=v,_.numPointShadows=w,_.numSpotShadows=b,_.numSpotMaps=R,_.numLightProbes=C,i.version=m1++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let w=c[p];if(w.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(w.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let b=i.hemi[y];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function _0(n){let t=new x1(n),e=[],i=[],r=[];function s(d){u.camera=d,e.length=0,i.length=0,r.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function y1(n){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new _0(n),t.set(r,[a])):s>=o.length?(a=new _0(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b1=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],S1=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],v0=new ce,Lo=new V,af=new V;function M1(n,t,e){let i=new as,r=new Xt,s=new Xt,o=new he,a=new Sl,l=new Ml,c={},h=e.maxTextureSize,u={[oi]:je,[je]:oi,[vn]:vn},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:_1,fragmentShader:v1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ke;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let p=this.type;this.render=function(M,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===gx&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wo);let A=n.getRenderTarget(),T=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),D=n.state;D.setBlending(qn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==this.type;F&&C.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(N=>N.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,N=M.length;H<N;H++){let X=M[H],$=X.shadow;if($===void 0){Lt("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let K=$.getFrameExtents();r.multiply(K),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,$.mapSize.y=s.y));let it=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=it,$.map===null||F===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===hs){if(X.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new un(r.x,r.y,{format:Gi,type:$n,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new ci(r.x,r.y,Pn),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Gn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ne,$.map.depthTexture.magFilter=Ne}else X.isPointLight?($.map=new Cc(r.x),$.map.depthTexture=new vl(r.x,In)):($.map=new un(r.x,r.y),$.map.depthTexture=new ci(r.x,r.y,In)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Gn,this.type===wo?($.map.depthTexture.compareFunction=it?wc:Mc,$.map.depthTexture.minFilter=Oe,$.map.depthTexture.magFilter=Oe):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ne,$.map.depthTexture.magFilter=Ne);$.camera.updateProjectionMatrix()}let I=$.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<I;lt++){if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,lt),n.clear();else{lt===0&&(n.setRenderTarget($.map),n.clear());let gt=$.getViewport(lt);o.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),D.viewport(o)}if(X.isPointLight){let gt=$.camera,P=$.matrix,$t=X.distance||gt.far;$t!==gt.far&&(gt.far=$t,gt.updateProjectionMatrix()),Lo.setFromMatrixPosition(X.matrixWorld),gt.position.copy(Lo),af.copy(gt.position),af.add(b1[lt]),gt.up.copy(S1[lt]),gt.lookAt(af),gt.updateMatrixWorld(),P.makeTranslation(-Lo.x,-Lo.y,-Lo.z),v0.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(v0,gt.coordinateSystem,gt.reversedDepth)}else $.updateMatrices(X);i=$.getFrustum(),b(C,_,$.camera,X,this.type)}$.isPointLightShadow!==!0&&this.type===hs&&v($,_),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,T,k)};function v(M,C){let _=t.update(y);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new un(r.x,r.y,{format:Gi,type:$n})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(C,null,_,d,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(C,null,_,f,y,null)}function w(M,C,_,A){let T=null,k=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)T=k;else if(T=_.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=T.uuid,F=C.uuid,H=c[D];H===void 0&&(H={},c[D]=H);let N=H[F];N===void 0&&(N=T.clone(),H[F]=N,C.addEventListener("dispose",R)),T=N}if(T.visible=C.visible,T.wireframe=C.wireframe,A===hs?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let D=n.properties.get(T);D.light=_}return T}function b(M,C,_,A,T){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===hs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let F=t.update(M),H=M.material;if(Array.isArray(H)){let N=F.groups;for(let X=0,$=N.length;X<$;X++){let K=N[X],it=H[K.materialIndex];if(it&&it.visible){let I=w(M,it,A,T);M.onBeforeShadow(n,M,C,_,F,I,K),n.renderBufferDirect(_,null,F,I,M,K),M.onAfterShadow(n,M,C,_,F,I,K)}}}else if(H.visible){let N=w(M,H,A,T);M.onBeforeShadow(n,M,C,_,F,N,null),n.renderBufferDirect(_,null,F,N,M,null),M.onAfterShadow(n,M,C,_,F,N,null)}}let D=M.children;for(let F=0,H=D.length;F<H;F++)b(D[F],C,_,A,T)}function R(M){M.target.removeEventListener("dispose",R);for(let _ in c){let A=c[_],T=M.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}function w1(n,t){function e(){let B=!1,dt=new he,tt=null,ft=new he(0,0,0,0);return{setMask:function(yt){tt!==yt&&!B&&(n.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){B=yt},setClear:function(yt,nt,At,Mt,pe){pe===!0&&(yt*=Mt,nt*=Mt,At*=Mt),dt.set(yt,nt,At,Mt),ft.equals(dt)===!1&&(n.clearColor(yt,nt,At,Mt),ft.copy(dt))},reset:function(){B=!1,tt=null,ft.set(-1,0,0,0)}}}function i(){let B=!1,dt=!1,tt=null,ft=null,yt=null;return{setReversed:function(nt){if(dt!==nt){let At=t.get("EXT_clip_control");nt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),dt=nt;let Mt=yt;yt=null,this.setClear(Mt)}},getReversed:function(){return dt},setTest:function(nt){nt?et(n.DEPTH_TEST):kt(n.DEPTH_TEST)},setMask:function(nt){tt!==nt&&!B&&(n.depthMask(nt),tt=nt)},setFunc:function(nt){if(dt&&(nt=Zx[nt]),ft!==nt){switch(nt){case rl:n.depthFunc(n.NEVER);break;case sl:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case fr:n.depthFunc(n.LEQUAL);break;case al:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case cl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=nt}},setLocked:function(nt){B=nt},setClear:function(nt){yt!==nt&&(yt=nt,dt&&(nt=1-nt),n.clearDepth(nt))},reset:function(){B=!1,tt=null,ft=null,yt=null,dt=!1}}}function r(){let B=!1,dt=null,tt=null,ft=null,yt=null,nt=null,At=null,Mt=null,pe=null;return{setTest:function(oe){B||(oe?et(n.STENCIL_TEST):kt(n.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!B&&(n.stencilMask(oe),dt=oe)},setFunc:function(oe,Dn,Ln){(tt!==oe||ft!==Dn||yt!==Ln)&&(n.stencilFunc(oe,Dn,Ln),tt=oe,ft=Dn,yt=Ln)},setOp:function(oe,Dn,Ln){(nt!==oe||At!==Dn||Mt!==Ln)&&(n.stencilOp(oe,Dn,Ln),nt=oe,At=Dn,Mt=Ln)},setLocked:function(oe){B=oe},setClear:function(oe){pe!==oe&&(n.clearStencil(oe),pe=oe)},reset:function(){B=!1,dt=null,tt=null,ft=null,yt=null,nt=null,At=null,Mt=null,pe=null}}}let s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,v=null,w=null,b=null,R=null,M=null,C=null,_=new Bt(0,0,0),A=0,T=!1,k=null,D=null,F=null,H=null,N=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,K=0,it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(it)[1]),$=K>=1):it.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),$=K>=2);let I=null,lt={},gt=n.getParameter(n.SCISSOR_BOX),P=n.getParameter(n.VIEWPORT),$t=new he().fromArray(gt),Gt=new he().fromArray(P);function Q(B,dt,tt,ft){let yt=new Uint8Array(4),nt=n.createTexture();n.bindTexture(B,nt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<tt;At++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(dt+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return nt}let ct={};ct[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(n.DEPTH_TEST),o.setFunc(fr),de(!1),ge(Md),et(n.CULL_FACE),Kt(qn);function et(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function kt(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Dt(B,dt){return d[B]!==dt?(n.bindFramebuffer(B,dt),d[B]=dt,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=dt),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Tt(B,dt){let tt=g,ft=!1;if(B){tt=f.get(dt),tt===void 0&&(tt=[],f.set(dt,tt));let yt=B.textures;if(tt.length!==yt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,At=yt.length;nt<At;nt++)tt[nt]=n.COLOR_ATTACHMENT0+nt;tt.length=yt.length,ft=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,ft=!0);ft&&n.drawBuffers(tt)}function ne(B){return y!==B?(n.useProgram(B),y=B,!0):!1}let Vt={[Di]:n.FUNC_ADD,[yx]:n.FUNC_SUBTRACT,[_x]:n.FUNC_REVERSE_SUBTRACT};Vt[vx]=n.MIN,Vt[bx]=n.MAX;let ee={[Sx]:n.ZERO,[Mx]:n.ONE,[wx]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[Ix]:n.SRC_ALPHA_SATURATE,[Rx]:n.DST_COLOR,[Tx]:n.DST_ALPHA,[Ex]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[Cx]:n.ONE_MINUS_DST_COLOR,[Ax]:n.ONE_MINUS_DST_ALPHA,[Px]:n.CONSTANT_COLOR,[kx]:n.ONE_MINUS_CONSTANT_COLOR,[Dx]:n.CONSTANT_ALPHA,[Lx]:n.ONE_MINUS_CONSTANT_ALPHA};function Kt(B,dt,tt,ft,yt,nt,At,Mt,pe,oe){if(B===qn){m===!0&&(kt(n.BLEND),m=!1);return}if(m===!1&&(et(n.BLEND),m=!0),B!==xx){if(B!==p||oe!==T){if((v!==Di||R!==Di)&&(n.blendEquation(n.FUNC_ADD),v=Di,R=Di),oe)switch(B){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.ONE,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Td:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Nt("WebGLState: Invalid blending: ",B);break}else switch(B){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ed:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Td:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",B);break}w=null,b=null,M=null,C=null,_.set(0,0,0),A=0,p=B,T=oe}return}yt=yt||dt,nt=nt||tt,At=At||ft,(dt!==v||yt!==R)&&(n.blendEquationSeparate(Vt[dt],Vt[yt]),v=dt,R=yt),(tt!==w||ft!==b||nt!==M||At!==C)&&(n.blendFuncSeparate(ee[tt],ee[ft],ee[nt],ee[At]),w=tt,b=ft,M=nt,C=At),(Mt.equals(_)===!1||pe!==A)&&(n.blendColor(Mt.r,Mt.g,Mt.b,pe),_.copy(Mt),A=pe),p=B,T=!1}function Yt(B,dt){B.side===vn?kt(n.CULL_FACE):et(n.CULL_FACE);let tt=B.side===je;dt&&(tt=!tt),de(tt),B.blending===dr&&B.transparent===!1?Kt(qn):Kt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let ft=B.stencilWrite;a.setTest(ft),ft&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Se(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(B){k!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),k=B)}function ge(B){B!==px?(et(n.CULL_FACE),B!==D&&(B===Md?n.cullFace(n.BACK):B===mx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):kt(n.CULL_FACE),D=B}function xe(B){B!==F&&($&&n.lineWidth(B),F=B)}function Se(B,dt,tt){B?(et(n.POLYGON_OFFSET_FILL),(H!==dt||N!==tt)&&(H=dt,N=tt,o.getReversed()&&(dt=-dt),n.polygonOffset(dt,tt))):kt(n.POLYGON_OFFSET_FILL)}function ue(B){B?et(n.SCISSOR_TEST):kt(n.SCISSOR_TEST)}function fe(B){B===void 0&&(B=n.TEXTURE0+X-1),I!==B&&(n.activeTexture(B),I=B)}function O(B,dt,tt){tt===void 0&&(I===null?tt=n.TEXTURE0+X-1:tt=I);let ft=lt[tt];ft===void 0&&(ft={type:void 0,texture:void 0},lt[tt]=ft),(ft.type!==B||ft.texture!==dt)&&(I!==tt&&(n.activeTexture(tt),I=tt),n.bindTexture(B,dt||ct[B]),ft.type=B,ft.texture=dt)}function ze(){let B=lt[I];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Qt(){try{n.compressedTexImage2D(...arguments)}catch(B){Nt("WebGLState:",B)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(B){Nt("WebGLState:",B)}}function x(){try{n.texSubImage2D(...arguments)}catch(B){Nt("WebGLState:",B)}}function L(){try{n.texSubImage3D(...arguments)}catch(B){Nt("WebGLState:",B)}}function U(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Nt("WebGLState:",B)}}function G(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Nt("WebGLState:",B)}}function rt(){try{n.texStorage2D(...arguments)}catch(B){Nt("WebGLState:",B)}}function at(){try{n.texStorage3D(...arguments)}catch(B){Nt("WebGLState:",B)}}function Z(){try{n.texImage2D(...arguments)}catch(B){Nt("WebGLState:",B)}}function J(){try{n.texImage3D(...arguments)}catch(B){Nt("WebGLState:",B)}}function ut(B){return u[B]!==void 0?u[B]:n.getParameter(B)}function _t(B,dt){u[B]!==dt&&(n.pixelStorei(B,dt),u[B]=dt)}function ht(B){$t.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),$t.copy(B))}function st(B){Gt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Gt.copy(B))}function Pt(B,dt){let tt=c.get(dt);tt===void 0&&(tt=new WeakMap,c.set(dt,tt));let ft=tt.get(B);ft===void 0&&(ft=n.getUniformBlockIndex(dt,B.name),tt.set(B,ft))}function Ft(B,dt){let ft=c.get(dt).get(B);l.get(dt)!==ft&&(n.uniformBlockBinding(dt,ft,B.__bindingPointIndex),l.set(dt,ft))}function Ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},I=null,lt={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,v=null,w=null,b=null,R=null,M=null,C=null,_=new Bt(0,0,0),A=0,T=!1,k=null,D=null,F=null,H=null,N=null,$t.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:et,disable:kt,bindFramebuffer:Dt,drawBuffers:Tt,useProgram:ne,setBlending:Kt,setMaterial:Yt,setFlipSided:de,setCullFace:ge,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:ue,activeTexture:fe,bindTexture:O,unbindTexture:ze,compressedTexImage2D:Qt,compressedTexImage3D:S,texImage2D:Z,texImage3D:J,pixelStorei:_t,getParameter:ut,updateUBOMapping:Pt,uniformBlockBinding:Ft,texStorage2D:rt,texStorage3D:at,texSubImage2D:x,texSubImage3D:L,compressedTexSubImage2D:U,compressedTexSubImage3D:G,scissor:ht,viewport:st,reset:Ut}}function E1(n,t,e,i,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function y(S,x){return g?new OffscreenCanvas(S,x):lo("canvas")}function m(S,x,L){let U=1,G=Qt(S);if((G.width>L||G.height>L)&&(U=L/Math.max(G.width,G.height)),U<1)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap||typeof VideoFrame!="undefined"&&S instanceof VideoFrame){let rt=Math.floor(U*G.width),at=Math.floor(U*G.height);d===void 0&&(d=y(rt,at));let Z=x?y(rt,at):d;return Z.width=rt,Z.height=at,Z.getContext("2d").drawImage(S,0,0,rt,at),Lt("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+rt+"x"+at+")."),Z}else return"data"in S&&Lt("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),S;return S}function p(S){return S.generateMipmaps}function v(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,x,L,U,G,rt=!1){if(S!==null){if(n[S]!==void 0)return n[S];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let at;U&&(at=t.get("EXT_texture_norm16"),at||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===n.RED&&(L===n.FLOAT&&(Z=n.R32F),L===n.HALF_FLOAT&&(Z=n.R16F),L===n.UNSIGNED_BYTE&&(Z=n.R8),L===n.UNSIGNED_SHORT&&at&&(Z=at.R16_EXT),L===n.SHORT&&at&&(Z=at.R16_SNORM_EXT)),x===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.R8UI),L===n.UNSIGNED_SHORT&&(Z=n.R16UI),L===n.UNSIGNED_INT&&(Z=n.R32UI),L===n.BYTE&&(Z=n.R8I),L===n.SHORT&&(Z=n.R16I),L===n.INT&&(Z=n.R32I)),x===n.RG&&(L===n.FLOAT&&(Z=n.RG32F),L===n.HALF_FLOAT&&(Z=n.RG16F),L===n.UNSIGNED_BYTE&&(Z=n.RG8),L===n.UNSIGNED_SHORT&&at&&(Z=at.RG16_EXT),L===n.SHORT&&at&&(Z=at.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RG8UI),L===n.UNSIGNED_SHORT&&(Z=n.RG16UI),L===n.UNSIGNED_INT&&(Z=n.RG32UI),L===n.BYTE&&(Z=n.RG8I),L===n.SHORT&&(Z=n.RG16I),L===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),L===n.UNSIGNED_INT&&(Z=n.RGB32UI),L===n.BYTE&&(Z=n.RGB8I),L===n.SHORT&&(Z=n.RGB16I),L===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),L===n.UNSIGNED_INT&&(Z=n.RGBA32UI),L===n.BYTE&&(Z=n.RGBA8I),L===n.SHORT&&(Z=n.RGBA16I),L===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&(L===n.UNSIGNED_SHORT&&at&&(Z=at.RGB16_EXT),L===n.SHORT&&at&&(Z=at.RGB16_SNORM_EXT),L===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),x===n.RGBA){let J=rt?ao:Zt.getTransfer(G);L===n.FLOAT&&(Z=n.RGBA32F),L===n.HALF_FLOAT&&(Z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Z=J===te?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT&&at&&(Z=at.RGBA16_EXT),L===n.SHORT&&at&&(Z=at.RGBA16_SNORM_EXT),L===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function R(S,x){let L;return S?x===null||x===In||x===fs?L=n.DEPTH24_STENCIL8:x===Pn?L=n.DEPTH32F_STENCIL8:x===ds&&(L=n.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===In||x===fs?L=n.DEPTH_COMPONENT24:x===Pn?L=n.DEPTH_COMPONENT32F:x===ds&&(L=n.DEPTH_COMPONENT16),L}function M(S,x){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ne&&S.minFilter!==Oe?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function C(S){let x=S.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(S){let x=S.target;x.removeEventListener("dispose",_),k(x)}function A(S){let x=i.get(S);if(x.__webglInit===void 0)return;let L=S.source,U=f.get(L);if(U){let G=U[x.__cacheKey];G.usedTimes--,G.usedTimes===0&&T(S),Object.keys(U).length===0&&f.delete(L)}i.remove(S)}function T(S){let x=i.get(S);n.deleteTexture(x.__webglTexture);let L=S.source,U=f.get(L);delete U[x.__cacheKey],o.memory.textures--}function k(S){let x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(x.__webglFramebuffer[U]))for(let G=0;G<x.__webglFramebuffer[U].length;G++)n.deleteFramebuffer(x.__webglFramebuffer[U][G]);else n.deleteFramebuffer(x.__webglFramebuffer[U]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[U])}else{if(Array.isArray(x.__webglFramebuffer))for(let U=0;U<x.__webglFramebuffer.length;U++)n.deleteFramebuffer(x.__webglFramebuffer[U]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let U=0;U<x.__webglColorRenderbuffer.length;U++)x.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[U]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let L=S.textures;for(let U=0,G=L.length;U<G;U++){let rt=i.get(L[U]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(L[U])}i.remove(S)}let D=0;function F(){D=0}function H(){return D}function N(S){D=S}function X(){let S=D;return S>=r.maxTextures&&Lt("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),D+=1,S}function $(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function K(S,x){let L=i.get(S);if(S.isVideoTexture&&O(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&L.__version!==S.version){let U=S.image;if(U===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(L,S,x);return}}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+x)}function it(S,x){let L=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){kt(L,S,x);return}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+x)}function I(S,x){let L=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){kt(L,S,x);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+x)}function lt(S,x){let L=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&L.__version!==S.version){Dt(L,S,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+x)}let gt={[hl]:n.REPEAT,[Vn]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},P={[Ne]:n.NEAREST,[Bx]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[Oe]:n.LINEAR,[Ul]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},$t={[zx]:n.NEVER,[Xx]:n.ALWAYS,[Vx]:n.LESS,[Mc]:n.LEQUAL,[Hx]:n.EQUAL,[wc]:n.GEQUAL,[Gx]:n.GREATER,[Wx]:n.NOTEQUAL};function Gt(S,x){if(x.type===Pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Oe||x.magFilter===Ul||x.magFilter===To||x.magFilter===Vi||x.minFilter===Oe||x.minFilter===Ul||x.minFilter===To||x.minFilter===Vi)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,gt[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,gt[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,gt[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,P[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,P[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,$t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ne||x.minFilter!==To&&x.minFilter!==Vi||x.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Q(S,x){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",C));let U=x.source,G=f.get(U);G===void 0&&(G={},f.set(U,G));let rt=$(x);if(rt!==S.__cacheKey){G[rt]===void 0&&(G[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),G[rt].usedTimes++;let at=G[S.__cacheKey];at!==void 0&&(G[S.__cacheKey].usedTimes--,at.usedTimes===0&&T(x)),S.__cacheKey=rt,S.__webglTexture=G[rt].texture}return L}function ct(S,x,L){return Math.floor(Math.floor(S/L)/x)}function et(S,x,L,U){let rt=S.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,L,U,x.data);else{rt.sort((_t,ht)=>_t.start-ht.start);let at=0;for(let _t=1;_t<rt.length;_t++){let ht=rt[at],st=rt[_t],Pt=ht.start+ht.count,Ft=ct(st.start,x.width,4),Ut=ct(ht.start,x.width,4);st.start<=Pt+1&&Ft===Ut&&ct(st.start+st.count-1,x.width,4)===Ft?ht.count=Math.max(ht.count,st.start+st.count-ht.start):(++at,rt[at]=st)}rt.length=at+1;let Z=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let _t=0,ht=rt.length;_t<ht;_t++){let st=rt[_t],Pt=Math.floor(st.start/4),Ft=Math.ceil(st.count/4),Ut=Pt%x.width,B=Math.floor(Pt/x.width),dt=Ft,tt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,Ut,B,dt,tt,L,U,x.data)}S.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function kt(S,x,L){let U=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(U=n.TEXTURE_3D);let G=Q(S,x),rt=x.source;e.bindTexture(U,S.__webglTexture,n.TEXTURE0+L);let at=i.get(rt);if(rt.version!==at.__version||G===!0){if(e.activeTexture(n.TEXTURE0+L),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let tt=Zt.getPrimaries(Zt.workingColorSpace),ft=x.colorSpace===ui?null:Zt.getPrimaries(x.colorSpace),yt=x.colorSpace===ui||tt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let J=m(x.image,!1,r.maxTextureSize);J=ze(x,J);let ut=s.convert(x.format,x.colorSpace),_t=s.convert(x.type),ht=b(x.internalFormat,ut,_t,x.normalized,x.colorSpace,x.isVideoTexture);Gt(U,x);let st,Pt=x.mipmaps,Ft=x.isVideoTexture!==!0,Ut=at.__version===void 0||G===!0,B=rt.dataReady,dt=M(x,J);if(x.isDepthTexture)ht=R(x.format===Hi,x.type),Ut&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,ht,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,ht,J.width,J.height,0,ut,_t,null));else if(x.isDataTexture)if(Pt.length>0){Ft&&Ut&&e.texStorage2D(n.TEXTURE_2D,dt,ht,Pt[0].width,Pt[0].height);for(let tt=0,ft=Pt.length;tt<ft;tt++)st=Pt[tt],Ft?B&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,st.width,st.height,ut,_t,st.data):e.texImage2D(n.TEXTURE_2D,tt,ht,st.width,st.height,0,ut,_t,st.data);x.generateMipmaps=!1}else Ft?(Ut&&e.texStorage2D(n.TEXTURE_2D,dt,ht,J.width,J.height),B&&et(x,J,ut,_t)):e.texImage2D(n.TEXTURE_2D,0,ht,J.width,J.height,0,ut,_t,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,ht,Pt[0].width,Pt[0].height,J.depth);for(let tt=0,ft=Pt.length;tt<ft;tt++)if(st=Pt[tt],x.format!==bn)if(ut!==null)if(Ft){if(B)if(x.layerUpdates.size>0){let yt=Zd(st.width,st.height,x.format,x.type);for(let nt of x.layerUpdates){let At=st.data.subarray(nt*yt/st.data.BYTES_PER_ELEMENT,(nt+1)*yt/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,nt,st.width,st.height,1,ut,At)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,st.width,st.height,J.depth,ut,st.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,ht,st.width,st.height,J.depth,0,st.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,st.width,st.height,J.depth,ut,_t,st.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,ht,st.width,st.height,J.depth,0,ut,_t,st.data)}else{Ft&&Ut&&e.texStorage2D(n.TEXTURE_2D,dt,ht,Pt[0].width,Pt[0].height);for(let tt=0,ft=Pt.length;tt<ft;tt++)st=Pt[tt],x.format!==bn?ut!==null?Ft?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,st.width,st.height,ut,st.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,ht,st.width,st.height,0,st.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?B&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,st.width,st.height,ut,_t,st.data):e.texImage2D(n.TEXTURE_2D,tt,ht,st.width,st.height,0,ut,_t,st.data)}else if(x.isDataArrayTexture)if(Ft){if(Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,ht,J.width,J.height,J.depth),B)if(x.layerUpdates.size>0){let tt=Zd(J.width,J.height,x.format,x.type);for(let ft of x.layerUpdates){let yt=J.data.subarray(ft*tt/J.data.BYTES_PER_ELEMENT,(ft+1)*tt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,J.width,J.height,1,ut,_t,yt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,_t,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ht,J.width,J.height,J.depth,0,ut,_t,J.data);else if(x.isData3DTexture)Ft?(Ut&&e.texStorage3D(n.TEXTURE_3D,dt,ht,J.width,J.height,J.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,_t,J.data)):e.texImage3D(n.TEXTURE_3D,0,ht,J.width,J.height,J.depth,0,ut,_t,J.data);else if(x.isFramebufferTexture){if(Ut)if(Ft)e.texStorage2D(n.TEXTURE_2D,dt,ht,J.width,J.height);else{let tt=J.width,ft=J.height;for(let yt=0;yt<dt;yt++)e.texImage2D(n.TEXTURE_2D,yt,ht,tt,ft,0,ut,_t,null),tt>>=1,ft>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let tt=n.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),J.parentNode!==tt){tt.appendChild(J),u.add(x),tt.onpaint=ft=>{let yt=ft.changedElements;for(let nt of u)yt.includes(nt.image)&&(nt.needsUpdate=!0)},tt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let yt=n.RGBA,nt=n.RGBA,At=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,yt,nt,At,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Ft&&Ut){let tt=Qt(Pt[0]);e.texStorage2D(n.TEXTURE_2D,dt,ht,tt.width,tt.height)}for(let tt=0,ft=Pt.length;tt<ft;tt++)st=Pt[tt],Ft?B&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ut,_t,st):e.texImage2D(n.TEXTURE_2D,tt,ht,ut,_t,st);x.generateMipmaps=!1}else if(Ft){if(Ut){let tt=Qt(J);e.texStorage2D(n.TEXTURE_2D,dt,ht,tt.width,tt.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,_t,J)}else e.texImage2D(n.TEXTURE_2D,0,ht,ut,_t,J);p(x)&&v(U),at.__version=rt.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Dt(S,x,L){if(x.image.length!==6)return;let U=Q(S,x),G=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);let rt=i.get(G);if(G.version!==rt.__version||U===!0){e.activeTexture(n.TEXTURE0+L);let at=Zt.getPrimaries(Zt.workingColorSpace),Z=x.colorSpace===ui?null:Zt.getPrimaries(x.colorSpace),J=x.colorSpace===ui||at===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ut=x.isCompressedTexture||x.image[0].isCompressedTexture,_t=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let nt=0;nt<6;nt++)!ut&&!_t?ht[nt]=m(x.image[nt],!0,r.maxCubemapSize):ht[nt]=_t?x.image[nt].image:x.image[nt],ht[nt]=ze(x,ht[nt]);let st=ht[0],Pt=s.convert(x.format,x.colorSpace),Ft=s.convert(x.type),Ut=b(x.internalFormat,Pt,Ft,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,dt=rt.__version===void 0||U===!0,tt=G.dataReady,ft=M(x,st);Gt(n.TEXTURE_CUBE_MAP,x);let yt;if(ut){B&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ut,st.width,st.height);for(let nt=0;nt<6;nt++){yt=ht[nt].mipmaps;for(let At=0;At<yt.length;At++){let Mt=yt[At];x.format!==bn?Pt!==null?B?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,Mt.width,Mt.height,Pt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Ut,Mt.width,Mt.height,0,Mt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,Mt.width,Mt.height,Pt,Ft,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Ut,Mt.width,Mt.height,0,Pt,Ft,Mt.data)}}}else{if(yt=x.mipmaps,B&&dt){yt.length>0&&ft++;let nt=Qt(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ut,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(_t){B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ht[nt].width,ht[nt].height,Pt,Ft,ht[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ut,ht[nt].width,ht[nt].height,0,Pt,Ft,ht[nt].data);for(let At=0;At<yt.length;At++){let pe=yt[At].image[nt].image;B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,pe.width,pe.height,Pt,Ft,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Ut,pe.width,pe.height,0,Pt,Ft,pe.data)}}else{B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Pt,Ft,ht[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ut,Pt,Ft,ht[nt]);for(let At=0;At<yt.length;At++){let Mt=yt[At];B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,Pt,Ft,Mt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Ut,Pt,Ft,Mt.image[nt])}}}p(x)&&v(n.TEXTURE_CUBE_MAP),rt.__version=G.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Tt(S,x,L,U,G,rt){let at=s.convert(L.format,L.colorSpace),Z=s.convert(L.type),J=b(L.internalFormat,at,Z,L.normalized,L.colorSpace),ut=i.get(x),_t=i.get(L);if(_t.__renderTarget=x,!ut.__hasExternalTextures){let ht=Math.max(1,x.width>>rt),st=Math.max(1,x.height>>rt);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?e.texImage3D(G,rt,J,ht,st,x.depth,0,at,Z,null):e.texImage2D(G,rt,J,ht,st,0,at,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,G,_t.__webglTexture,0,ue(x)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,G,_t.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(S,x,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){let U=x.depthTexture,G=U&&U.isDepthTexture?U.type:null,rt=R(x.stencilBuffer,G),at=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(x),rt,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(x),rt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,rt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,S)}else{let U=x.textures;for(let G=0;G<U.length;G++){let rt=U[G],at=s.convert(rt.format,rt.colorSpace),Z=s.convert(rt.type),J=b(rt.internalFormat,at,Z,rt.normalized,rt.colorSpace);fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(x),J,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(x),J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(S,x,L){let U=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=i.get(x.depthTexture);if(G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),U){if(G.__webglInit===void 0&&(G.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),G.__webglTexture===void 0){G.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,x.depthTexture);let ut=s.convert(x.depthTexture.format),_t=s.convert(x.depthTexture.type),ht;x.depthTexture.format===Gn?ht=n.DEPTH_COMPONENT24:x.depthTexture.format===Hi&&(ht=n.DEPTH24_STENCIL8);for(let st=0;st<6;st++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ht,x.width,x.height,0,ut,_t,null)}}else K(x.depthTexture,0);let rt=G.__webglTexture,at=ue(x),Z=U?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,J=x.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gn)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Z,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,J,Z,rt,0);else if(x.depthTexture.format===Hi)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Z,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,J,Z,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(S){let x=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){let U=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),U){let G=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,U.removeEventListener("dispose",G)};U.addEventListener("dispose",G),x.__depthDisposeCallback=G}x.__boundDepthTexture=U}if(S.depthTexture&&!x.__autoAllocateDepthBuffer)if(L)for(let U=0;U<6;U++)Vt(x.__webglFramebuffer[U],S,U);else{let U=S.texture.mipmaps;U&&U.length>0?Vt(x.__webglFramebuffer[0],S,0):Vt(x.__webglFramebuffer,S,0)}else if(L){x.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[U]),x.__webglDepthbuffer[U]===void 0)x.__webglDepthbuffer[U]=n.createRenderbuffer(),ne(x.__webglDepthbuffer[U],S,!1);else{let G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,rt)}}else{let U=S.texture.mipmaps;if(U&&U.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ne(x.__webglDepthbuffer,S,!1);else{let G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(S,x,L){let U=i.get(S);x!==void 0&&Tt(U.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ee(S)}function Yt(S){let x=S.texture,L=i.get(S),U=i.get(x);S.addEventListener("dispose",_);let G=S.textures,rt=S.isWebGLCubeRenderTarget===!0,at=G.length>1;if(at||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=x.version,o.memory.textures++),rt){L.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[Z]=[];for(let J=0;J<x.mipmaps.length;J++)L.__webglFramebuffer[Z][J]=n.createFramebuffer()}else L.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)L.__webglFramebuffer[Z]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(at)for(let Z=0,J=G.length;Z<J;Z++){let ut=i.get(G[Z]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&fe(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Z=0;Z<G.length;Z++){let J=G[Z];L.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[Z]);let ut=s.convert(J.format,J.colorSpace),_t=s.convert(J.type),ht=b(J.internalFormat,ut,_t,J.normalized,J.colorSpace,S.isXRRenderTarget===!0),st=ue(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,st,ht,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,L.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(L.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Tt(L.__webglFramebuffer[Z][J],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else Tt(L.__webglFramebuffer[Z],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(x)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Z=0,J=G.length;Z<J;Z++){let ut=G[Z],_t=i.get(ut),ht=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ht=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,_t.__webglTexture),Gt(ht,ut),Tt(L.__webglFramebuffer,S,ut,n.COLOR_ATTACHMENT0+Z,ht,0),p(ut)&&v(ht)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Z=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,U.__webglTexture),Gt(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Tt(L.__webglFramebuffer[J],S,x,n.COLOR_ATTACHMENT0,Z,J);else Tt(L.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,Z,0);p(x)&&v(Z),e.unbindTexture()}S.depthBuffer&&ee(S)}function de(S){let x=S.textures;for(let L=0,U=x.length;L<U;L++){let G=x[L];if(p(G)){let rt=w(S),at=i.get(G).__webglTexture;e.bindTexture(rt,at),v(rt),e.unbindTexture()}}}let ge=[],xe=[];function Se(S){if(S.samples>0){if(fe(S)===!1){let x=S.textures,L=S.width,U=S.height,G=n.COLOR_BUFFER_BIT,rt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(S),Z=x.length>1;if(Z)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let J=S.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[ut]);let _t=i.get(x[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_t,0)}n.blitFramebuffer(0,0,L,U,0,0,L,U,G,n.NEAREST),l===!0&&(ge.length=0,xe.length=0,ge.push(n.COLOR_ATTACHMENT0+ut),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ge.push(rt),xe.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,at.__webglColorRenderbuffer[ut]);let _t=i.get(x[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,_t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ue(S){return Math.min(r.maxSamples,S.samples)}function fe(S){let x=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(S){let x=o.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function ze(S,x){let L=S.colorSpace,U=S.format,G=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==oo&&L!==ui&&(Zt.getTransfer(L)===te?(U!==bn||G!==nn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",L)),x}function Qt(S){return typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame!="undefined"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.getTextureUnits=H,this.setTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=it,this.setTexture3D=I,this.setTextureCube=lt,this.rebindTextures=Kt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function T1(n,t){function e(i,r=ui){let s,o=Zt.getTransfer(r);if(i===nn)return n.UNSIGNED_BYTE;if(i===Vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nd)return n.BYTE;if(i===Bd)return n.SHORT;if(i===ds)return n.UNSIGNED_SHORT;if(i===zl)return n.INT;if(i===In)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===$n)return n.HALF_FLOAT;if(i===zd)return n.ALPHA;if(i===Vd)return n.RGB;if(i===bn)return n.RGBA;if(i===Gn)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===Hd)return n.RED;if(i===Gl)return n.RED_INTEGER;if(i===Gi)return n.RG;if(i===Wl)return n.RG_INTEGER;if(i===Xl)return n.RGBA_INTEGER;if(i===Ao||i===Ro||i===Co||i===Io)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===$l||i===Yl||i===Zl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Kl||i===jl||i===Ql||i===tc||i===Po||i===ec)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jl||i===Kl)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ql)return s.COMPRESSED_R11_EAC;if(i===tc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Po)return s.COMPRESSED_RG11_EAC;if(i===ec)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gc||i===xc||i===yc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===gc)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===vc||i===ko||i===bc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===_c)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new hn({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gf=class extends Wn{constructor(t,e){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new mf,p={},v=e.getContextAttributes(),w=null,b=null,R=[],M=[],C=new Xt,_=null,A=new tn;A.viewport=new he;let T=new tn;T.viewport=new he;let k=[A,T],D=new Fl,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ct=R[Q];return ct===void 0&&(ct=new rs,R[Q]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Q){let ct=R[Q];return ct===void 0&&(ct=new rs,R[Q]=ct),ct.getGripSpace()},this.getHand=function(Q){let ct=R[Q];return ct===void 0&&(ct=new rs,R[Q]=ct),ct.getHandSpace()};function N(Q){let ct=M.indexOf(Q.inputSource);if(ct===-1)return;let et=R[ct];et!==void 0&&(et.update(Q.inputSource,Q.frame,c||o),et.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let Q=0;Q<R.length;Q++){let ct=M[Q];ct!==null&&(M[Q]=null,R[Q].disconnect(ct))}F=null,H=null,m.reset();for(let Q in p)delete p[Q];t.setRenderTarget(w),f=null,d=null,u=null,r=null,b=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,kt=null,Dt=null;v.depth&&(Dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=v.stencil?Hi:Gn,kt=v.stencil?fs:In);let Tt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Tt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new un(d.textureWidth,d.textureHeight,{format:bn,type:nn,depthTexture:new ci(d.textureWidth,d.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let et={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new un(f.framebufferWidth,f.framebufferHeight,{format:bn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Gt.setContext(r),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Q){for(let ct=0;ct<Q.removed.length;ct++){let et=Q.removed[ct],kt=M.indexOf(et);kt>=0&&(M[kt]=null,R[kt].disconnect(et))}for(let ct=0;ct<Q.added.length;ct++){let et=Q.added[ct],kt=M.indexOf(et);if(kt===-1){for(let Tt=0;Tt<R.length;Tt++)if(Tt>=M.length){M.push(et),kt=Tt;break}else if(M[Tt]===null){M[Tt]=et,kt=Tt;break}if(kt===-1)break}let Dt=R[kt];Dt&&Dt.connect(et)}}let K=new V,it=new V;function I(Q,ct,et){K.setFromMatrixPosition(ct.matrixWorld),it.setFromMatrixPosition(et.matrixWorld);let kt=K.distanceTo(it),Dt=ct.projectionMatrix.elements,Tt=et.projectionMatrix.elements,ne=Dt[14]/(Dt[10]-1),Vt=Dt[14]/(Dt[10]+1),ee=(Dt[9]+1)/Dt[5],Kt=(Dt[9]-1)/Dt[5],Yt=(Dt[8]-1)/Dt[0],de=(Tt[8]+1)/Tt[0],ge=ne*Yt,xe=ne*de,Se=kt/(-Yt+de),ue=Se*-Yt;if(ct.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ue),Q.translateZ(Se),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Dt[10]===-1)Q.projectionMatrix.copy(ct.projectionMatrix),Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let fe=ne+Se,O=Vt+Se,ze=ge-ue,Qt=xe+(kt-ue),S=ee*Vt/O*fe,x=Kt*Vt/O*fe;Q.projectionMatrix.makePerspective(ze,Qt,S,x,fe,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function lt(Q,ct){ct===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ct.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ct=Q.near,et=Q.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(et=m.depthFar)),D.near=T.near=A.near=ct,D.far=T.far=A.far=et,(F!==D.near||H!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,H=D.far),D.layers.mask=Q.layers.mask|6,A.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let kt=Q.parent,Dt=D.cameras;lt(D,kt);for(let Tt=0;Tt<Dt.length;Tt++)lt(Dt[Tt],kt);Dt.length===2?I(D,A,T):D.projectionMatrix.copy(A.projectionMatrix),gt(Q,D,kt)};function gt(Q,ct,et){et===null?Q.matrix.copy(ct.matrixWorld):(Q.matrix.copy(et.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ct.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ct.projectionMatrix),Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=es*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Q){return p[Q]};let P=null;function $t(Q,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){let et=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let kt=!1;et.length!==D.cameras.length&&(D.cameras.length=0,kt=!0);for(let Vt=0;Vt<et.length;Vt++){let ee=et[Vt],Kt=null;if(f!==null)Kt=f.getViewport(ee);else{let de=u.getViewSubImage(d,ee);Kt=de.viewport,Vt===0&&(t.setRenderTargetTextures(b,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(b))}let Yt=k[Vt];Yt===void 0&&(Yt=new tn,Yt.layers.enable(Vt),Yt.viewport=new he,k[Vt]=Yt),Yt.matrix.fromArray(ee.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(ee.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Vt===0&&(D.matrix.copy(Yt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),kt===!0&&D.cameras.push(Yt)}let Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let Vt=u.getDepthInformation(et[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,r.renderState)}if(Dt&&Dt.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let Vt=0;Vt<et.length;Vt++){let ee=et[Vt].camera;if(ee){let Kt=p[ee];Kt||(Kt=new mo,p[ee]=Kt);let Yt=u.getCameraImage(ee);Kt.sourceTexture=Yt}}}}for(let et=0;et<R.length;et++){let kt=M[et],Dt=R[et];kt!==null&&Dt!==void 0&&Dt.update(kt,ct,c||o)}P&&P(Q,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}let Gt=new b0;Gt.setAnimationLoop($t),this.setAnimationLoop=function(Q){P=Q},this.dispose=function(){}}},C1=new ce,A0=new Ot;A0.set(-1,0,0,0,1,0,0,0,1);function I1(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,w,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),w=v.envMap,b=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(A0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function P1(n,t,e,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,R){let M=R.program;i.uniformBlockBinding(b,M)}function c(b,R){let M=r[b.id];M===void 0&&(m(b),M=h(b),r[b.id]=M,b.addEventListener("dispose",v));let C=R.program;i.updateUBOMapping(b,C);let _=t.render.frame;s[b.id]!==_&&(d(b),s[b.id]=_)}function h(b){let R=u();b.__bindingPointIndex=R;let M=n.createBuffer(),C=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let R=r[b.id],M=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let _=0,A=M.length;_<A;_++){let T=M[_];if(Array.isArray(T))for(let k=0,D=T.length;k<D;k++)f(T[k],_,k,C);else f(T,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,R,M,C){if(y(b,R,M,C)===!0){let _=b.__offset,A=b.value;if(Array.isArray(A)){let T=0;for(let k=0;k<A.length;k++){let D=A[k],F=p(D);g(D,b.__data,T),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(T+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function g(b,R,M){typeof b=="number"||typeof b=="boolean"?R[0]=b:b.isMatrix3?(R[0]=b.elements[0],R[1]=b.elements[1],R[2]=b.elements[2],R[3]=0,R[4]=b.elements[3],R[5]=b.elements[4],R[6]=b.elements[5],R[7]=0,R[8]=b.elements[6],R[9]=b.elements[7],R[10]=b.elements[8],R[11]=0):ArrayBuffer.isView(b)?R.set(new b.constructor(b.buffer,b.byteOffset,R.length)):b.toArray(R,M)}function y(b,R,M,C){let _=b.value,A=R+"_"+M;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{let T=C[A];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function m(b){let R=b.uniforms,M=0,C=16;for(let A=0,T=R.length;A<T;A++){let k=Array.isArray(R[A])?R[A]:[R[A]];for(let D=0,F=k.length;D<F;D++){let H=k[D],N=Array.isArray(H.value)?H.value:[H.value];for(let X=0,$=N.length;X<$;X++){let K=N[X],it=p(K),I=M%C,lt=I%it.boundary,gt=I+lt;M+=lt,gt!==0&&C-gt<it.storage&&(M+=C-gt),H.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=it.storage}}}let _=M%C;return _>0&&(M+=C-_),b.__size=M,b.__cache={},this}function p(b){let R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(R.boundary=16,R.storage=b.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",b),R}function v(b){let R=b.target;R.removeEventListener("dispose",v);let M=o.indexOf(R.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function w(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:w}}var k1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function D1(){return Yn===null&&(Yn=new xl(k1,16,16,Gi,$n),Yn.name="DFG_LUT",Yn.minFilter=Oe,Yn.magFilter=Oe,Yn.wrapS=Vn,Yn.wrapT=Vn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Ic=class{constructor(t={}){let{canvas:e=qx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=nn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=f,m=new Set([Xl,Wl,Gl]),p=new Set([nn,In,ds,fs,Vl,Hl]),v=new Uint32Array(4),w=new Int32Array(4),b=new V,R=null,M=null,C=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,k=!1,D=null,F=null,H=null,N=null;this._outputColorSpace=Je;let X=0,$=0,K=null,it=-1,I=null,lt=new he,gt=new he,P=null,$t=new Bt(0),Gt=0,Q=e.width,ct=e.height,et=1,kt=null,Dt=null,Tt=new he(0,0,Q,ct),ne=new he(0,0,Q,ct),Vt=!1,ee=new as,Kt=!1,Yt=!1,de=new ce,ge=new V,xe=new he,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function fe(){return K===null?et:1}let O=i;function ze(E,z){return e.getContext(E,z)}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",Dn,!1),O===null){let z="webgl2";if(O=ze(z,E),O===null)throw ze(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Nt("WebGLRenderer: "+E.message),E}let Qt,S,x,L,U,G,rt,at,Z,J,ut,_t,ht,st,Pt,Ft,Ut,B,dt,tt,ft,yt,nt;function At(){Qt=new zT(O),Qt.init(),ft=new T1(O,Qt),S=new kT(O,Qt,t,ft),x=new w1(O,Qt),S.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),F=O.createFramebuffer(),H=O.createFramebuffer(),N=O.createFramebuffer(),L=new GT(O),U=new u1,G=new E1(O,Qt,x,U,S,ft,L),rt=new UT(T),at=new $M(O),yt=new IT(O,at),Z=new VT(O,at,L,yt),J=new XT(O,Z,at,yt,L),B=new WT(O,S,G),Pt=new DT(U),ut=new c1(T,rt,Qt,S,yt,Pt),_t=new I1(T,U),ht=new d1,st=new y1(Qt),Ut=new CT(T,rt,x,J,g,l),Ft=new M1(T,J,S),nt=new P1(O,L,S,x),dt=new PT(O,Qt,L),tt=new HT(O,Qt,L),L.programs=ut.programs,T.capabilities=S,T.extensions=Qt,T.properties=U,T.renderLists=ht,T.shadowMap=Ft,T.state=x,T.info=L}At(),y!==nn&&(A=new $T(y,e.width,e.height,a,r,s));let Mt=new gf(T,O);this.xr=Mt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(Q,ct,!1))},this.getSize=function(E){return E.set(Q,ct)},this.setSize=function(E,z,Y=!0){if(Mt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,ct=z,e.width=Math.floor(E*et),e.height=Math.floor(z*et),Y===!0&&(e.style.width=E+"px",e.style.height=z+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(Q*et,ct*et).floor()},this.setDrawingBufferSize=function(E,z,Y){Q=E,ct=z,et=Y,e.width=Math.floor(E*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(y===nn){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(lt)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,z,Y,W){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,z,Y,W),x.viewport(lt.copy(Tt).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,z,Y,W){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,z,Y,W),x.scissor(gt.copy(ne).multiplyScalar(et).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(E){x.setScissorTest(Vt=E)},this.setOpaqueSort=function(E){kt=E},this.setTransparentSort=function(E){Dt=E},this.getClearColor=function(E){return E.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Y=!0){let W=0;if(E){let q=!1;if(K!==null){let xt=K.texture.format;q=m.has(xt)}if(q){let xt=K.texture.type,St=p.has(xt),mt=Ut.getClearColor(),wt=Ut.getClearAlpha(),Rt=mt.r,zt=mt.g,Wt=mt.b;St?(v[0]=Rt,v[1]=zt,v[2]=Wt,v[3]=wt,O.clearBufferuiv(O.COLOR,0,v)):(w[0]=Rt,w[1]=zt,w[2]=Wt,w[3]=wt,O.clearBufferiv(O.COLOR,0,w))}else W|=O.COLOR_BUFFER_BIT}z&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),Ut.dispose(),ht.dispose(),st.dispose(),U.dispose(),rt.dispose(),J.dispose(),yt.dispose(),nt.dispose(),ut.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Wf),Mt.removeEventListener("sessionend",Xf),qi.stop()};function pe(E){E.preventDefault(),Wd("WebGLRenderer: Context Lost."),k=!0}function oe(){Wd("WebGLRenderer: Context Restored."),k=!1;let E=L.autoReset,z=Ft.enabled,Y=Ft.autoUpdate,W=Ft.needsUpdate,q=Ft.type;At(),L.autoReset=E,Ft.enabled=z,Ft.autoUpdate=Y,Ft.needsUpdate=W,Ft.type=q}function Dn(E){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ln(E){let z=E.target;z.removeEventListener("dispose",Ln),ly(z)}function ly(E){cy(E),U.remove(E)}function cy(E){let z=U.get(E).programs;z!==void 0&&(z.forEach(function(Y){ut.releaseProgram(Y)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Y,W,q,xt){z===null&&(z=Se);let St=q.isMesh&&q.matrixWorld.determinantAffine()<0,mt=dy(E,z,Y,W,q);x.setMaterial(W,St);let wt=Y.index,Rt=1;if(W.wireframe===!0){if(wt=Z.getWireframeAttribute(Y),wt===void 0)return;Rt=2}let zt=Y.drawRange,Wt=Y.attributes.position,It=zt.start*Rt,ie=(zt.start+zt.count)*Rt;xt!==null&&(It=Math.max(It,xt.start*Rt),ie=Math.min(ie,(xt.start+xt.count)*Rt)),wt!==null?(It=Math.max(It,0),ie=Math.min(ie,wt.count)):Wt!=null&&(It=Math.max(It,0),ie=Math.min(ie,Wt.count));let ye=ie-It;if(ye<0||ye===1/0)return;yt.setup(q,W,mt,Y,wt);let me,re=dt;if(wt!==null&&(me=at.get(wt),re=tt,re.setIndex(me)),q.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*fe()),re.setMode(O.LINES)):re.setMode(O.TRIANGLES);else if(q.isLine){let Ve=W.linewidth;Ve===void 0&&(Ve=1),x.setLineWidth(Ve*fe()),q.isLineSegments?re.setMode(O.LINES):q.isLineLoop?re.setMode(O.LINE_LOOP):re.setMode(O.LINE_STRIP)}else q.isPoints?re.setMode(O.POINTS):q.isSprite&&re.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))re.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ve=q._multiDrawStarts,vt=q._multiDrawCounts,rn=q._multiDrawCount,jt=wt?at.get(wt).bytesPerElement:1,gn=U.get(W).currentProgram.getUniforms();for(let Fn=0;Fn<rn;Fn++)gn.setValue(O,"_gl_DrawID",Fn),re.render(Ve[Fn]/jt,vt[Fn])}else if(q.isInstancedMesh)re.renderInstances(It,ye,q.count);else if(Y.isInstancedBufferGeometry){let Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,vt=Math.min(Y.instanceCount,Ve);re.renderInstances(It,ye,vt)}else re.render(It,ye)};function Gf(E,z,Y){E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=je,E.needsUpdate=!0,Wo(E,z,Y),E.side=oi,E.needsUpdate=!0,Wo(E,z,Y),E.side=vn):Wo(E,z,Y)}this.compile=function(E,z,Y=null){Y===null&&(Y=E),M=st.get(Y),M.init(z),_.push(M),Y.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),E!==Y&&E.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights();let W=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let xt=q.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){let mt=xt[St];Gf(mt,Y,q),W.add(mt)}else Gf(xt,Y,q),W.add(xt)}),M=_.pop(),W},this.compileAsync=function(E,z,Y=null){let W=this.compile(E,z,Y);return new Promise(q=>{function xt(){if(W.forEach(function(St){U.get(St).currentProgram.isReady()&&W.delete(St)}),W.size===0){q(E);return}setTimeout(xt,10)}Qt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let $c=null;function uy(E){$c&&$c(E)}function Wf(){qi.stop()}function Xf(){qi.start()}let qi=new b0;qi.setAnimationLoop(uy),typeof self!="undefined"&&qi.setContext(self),this.setAnimationLoop=function(E){$c=E,Mt.setAnimationLoop(E),E===null?qi.stop():qi.start()},Mt.addEventListener("sessionstart",Wf),Mt.addEventListener("sessionend",Xf),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;D!==null&&D.renderStart(E,z);let Y=Mt.enabled===!0&&Mt.isPresenting===!0,W=A!==null&&(K===null||Y)&&A.begin(T,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(z),z=Mt.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,z,K),M=st.get(E,_.length),M.init(z),M.state.textureUnits=G.getTextureUnits(),_.push(M),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee.setFromProjectionMatrix(de,Rn,z.reversedDepth),Yt=this.localClippingEnabled,Kt=Pt.init(this.clippingPlanes,Yt),R=ht.get(E,C.length),R.init(),C.push(R),Mt.enabled===!0&&Mt.isPresenting===!0){let St=T.xr.getDepthSensingMesh();St!==null&&Yc(St,z,-1/0,T.sortObjects)}Yc(E,z,0,T.sortObjects),R.finish(),T.sortObjects===!0&&R.sort(kt,Dt,z.reversedDepth),ue=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ue&&Ut.addToRenderList(R,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Pt.beginShadows();let q=M.state.shadowsArray;if(Ft.render(q,E,z),Kt===!0&&Pt.endShadows(),(W&&A.hasRenderPass())===!1){let St=R.opaque,mt=R.transmissive;if(M.setupLights(),z.isArrayCamera){let wt=z.cameras;if(mt.length>0)for(let Rt=0,zt=wt.length;Rt<zt;Rt++){let Wt=wt[Rt];$f(St,mt,E,Wt)}ue&&Ut.render(E);for(let Rt=0,zt=wt.length;Rt<zt;Rt++){let Wt=wt[Rt];qf(R,E,Wt,Wt.viewport)}}else mt.length>0&&$f(St,mt,E,z),ue&&Ut.render(E),qf(R,E,z)}K!==null&&$===0&&(G.updateMultisampleRenderTarget(K),G.updateRenderTargetMipmap(K)),W&&A.end(T),E.isScene===!0&&E.onAfterRender(T,E,z),yt.resetDefaultState(),it=-1,I=null,_.pop(),_.length>0?(M=_[_.length-1],G.setTextureUnits(M.state.textureUnits),Kt===!0&&Pt.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,D!==null&&D.renderEnd()};function Yc(E,z,Y,W){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){W&&xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);let St=J.update(E),mt=E.material;mt.visible&&R.push(E,St,mt,Y,xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ee.intersectsObject(E))){let St=J.update(E),mt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),xe.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),xe.copy(St.boundingSphere.center)),xe.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(mt)){let wt=St.groups;for(let Rt=0,zt=wt.length;Rt<zt;Rt++){let Wt=wt[Rt],It=mt[Wt.materialIndex];It&&It.visible&&R.push(E,St,It,Y,xe.z,Wt)}}else mt.visible&&R.push(E,St,mt,Y,xe.z,null)}}let xt=E.children;for(let St=0,mt=xt.length;St<mt;St++)Yc(xt[St],z,Y,W)}function qf(E,z,Y,W){let{opaque:q,transmissive:xt,transparent:St}=E;M.setupLightsView(Y),Kt===!0&&Pt.setGlobalState(T.clippingPlanes,Y),W&&x.viewport(lt.copy(W)),q.length>0&&Go(q,z,Y),xt.length>0&&Go(xt,z,Y),St.length>0&&Go(St,z,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function $f(E,z,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){let It=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new un(1,1,{generateMipmaps:!0,type:It?$n:nn,minFilter:Vi,samples:Math.max(4,S.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let xt=M.state.transmissionRenderTarget[W.id],St=W.viewport||lt;xt.setSize(St.z*T.transmissionResolutionScale,St.w*T.transmissionResolutionScale);let mt=T.getRenderTarget(),wt=T.getActiveCubeFace(),Rt=T.getActiveMipmapLevel();T.setRenderTarget(xt),T.getClearColor($t),Gt=T.getClearAlpha(),Gt<1&&T.setClearColor(16777215,.5),T.clear(),ue&&Ut.render(Y);let zt=T.toneMapping;T.toneMapping=Cn;let Wt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),M.setupLightsView(W),Kt===!0&&Pt.setGlobalState(T.clippingPlanes,W),Go(E,Y,W),G.updateMultisampleRenderTarget(xt),G.updateRenderTargetMipmap(xt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ie=0,ye=z.length;ie<ye;ie++){let me=z[ie],{object:re,geometry:Ve,material:vt,group:rn}=me;if(vt.side===vn&&re.layers.test(W.layers)){let jt=vt.side;vt.side=je,vt.needsUpdate=!0,Yf(re,Y,W,Ve,vt,rn),vt.side=jt,vt.needsUpdate=!0,It=!0}}It===!0&&(G.updateMultisampleRenderTarget(xt),G.updateRenderTargetMipmap(xt))}T.setRenderTarget(mt,wt,Rt),T.setClearColor($t,Gt),Wt!==void 0&&(W.viewport=Wt),T.toneMapping=zt}function Go(E,z,Y){let W=z.isScene===!0?z.overrideMaterial:null;for(let q=0,xt=E.length;q<xt;q++){let St=E[q],{object:mt,geometry:wt,group:Rt}=St,zt=St.material;zt.allowOverride===!0&&W!==null&&(zt=W),mt.layers.test(Y.layers)&&Yf(mt,z,Y,wt,zt,Rt)}}function Yf(E,z,Y,W,q,xt){E.onBeforeRender(T,z,Y,W,q,xt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(T,z,Y,W,E,xt),q.transparent===!0&&q.side===vn&&q.forceSinglePass===!1?(q.side=je,q.needsUpdate=!0,T.renderBufferDirect(Y,z,W,q,E,xt),q.side=oi,q.needsUpdate=!0,T.renderBufferDirect(Y,z,W,q,E,xt),q.side=vn):T.renderBufferDirect(Y,z,W,q,E,xt),E.onAfterRender(T,z,Y,W,q,xt)}function Wo(E,z,Y){z.isScene!==!0&&(z=Se);let W=U.get(E),q=M.state.lights,xt=M.state.shadowsArray,St=q.state.version,mt=ut.getParameters(E,q.state,xt,z,Y,M.state.lightProbeGridArray),wt=ut.getProgramCacheKey(mt),Rt=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;let zt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=rt.get(E.envMap||W.environment,zt),W.envMapRotation=W.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",Ln),Rt=new Map,W.programs=Rt);let Wt=Rt.get(wt);if(Wt!==void 0){if(W.currentProgram===Wt&&W.lightsStateVersion===St)return Jf(E,mt),Wt}else mt.uniforms=ut.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,Y,mt),E.onBeforeCompile(mt,T),Wt=ut.acquireProgram(mt,wt),Rt.set(wt,Wt),W.uniforms=mt.uniforms;let It=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=Pt.uniform),Jf(E,mt),W.needsLights=py(E),W.lightsStateVersion=St,W.needsLights&&(It.ambientLightColor.value=q.state.ambient,It.lightProbe.value=q.state.probe,It.directionalLights.value=q.state.directional,It.directionalLightShadows.value=q.state.directionalShadow,It.spotLights.value=q.state.spot,It.spotLightShadows.value=q.state.spotShadow,It.rectAreaLights.value=q.state.rectArea,It.ltc_1.value=q.state.rectAreaLTC1,It.ltc_2.value=q.state.rectAreaLTC2,It.pointLights.value=q.state.point,It.pointLightShadows.value=q.state.pointShadow,It.hemisphereLights.value=q.state.hemi,It.directionalShadowMatrix.value=q.state.directionalShadowMatrix,It.spotLightMatrix.value=q.state.spotLightMatrix,It.spotLightMap.value=q.state.spotLightMap,It.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=M.state.lightProbeGridArray.length>0,W.currentProgram=Wt,W.uniformsList=null,Wt}function Zf(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=gs.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Jf(E,z){let Y=U.get(E);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function hy(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;b.setFromMatrixPosition(z.matrixWorld);for(let Y=0,W=E.length;Y<W;Y++){let q=E[Y];if(q.texture!==null&&q.boundingBox.containsPoint(b))return q}return null}function dy(E,z,Y,W,q){z.isScene!==!0&&(z=Se),G.resetTextureUnits();let xt=z.fog,St=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,mt=K===null?T.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Zt.workingColorSpace,wt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Rt=rt.get(W.envMap||St,wt),zt=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!Y.morphAttributes.position,ie=!!Y.morphAttributes.normal,ye=!!Y.morphAttributes.color,me=Cn;W.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(me=T.toneMapping);let re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ve=re!==void 0?re.length:0,vt=U.get(W),rn=M.state.lights;if(Kt===!0&&(Yt===!0||E!==I)){let ae=E===I&&W.id===it;Pt.setState(W,E,ae)}let jt=!1;W.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==rn.state.version||vt.outputColorSpace!==mt||q.isBatchedMesh&&vt.batching===!1||!q.isBatchedMesh&&vt.batching===!0||q.isBatchedMesh&&vt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&vt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&vt.instancing===!1||!q.isInstancedMesh&&vt.instancing===!0||q.isSkinnedMesh&&vt.skinning===!1||!q.isSkinnedMesh&&vt.skinning===!0||q.isInstancedMesh&&vt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&vt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&vt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&vt.instancingMorph===!1&&q.morphTexture!==null||vt.envMap!==Rt||W.fog===!0&&vt.fog!==xt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Pt.numPlanes||vt.numIntersection!==Pt.numIntersection)||vt.vertexAlphas!==zt||vt.vertexTangents!==Wt||vt.morphTargets!==It||vt.morphNormals!==ie||vt.morphColors!==ye||vt.toneMapping!==me||vt.morphTargetsCount!==Ve||!!vt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(jt=!0):(jt=!0,vt.__version=W.version);let gn=vt.currentProgram;jt===!0&&(gn=Wo(W,z,q),D&&W.isNodeMaterial&&D.onUpdateProgram(W,gn,vt));let Fn=!1,fi=!1,Er=!1,se=gn.getUniforms(),_e=vt.uniforms;if(x.useProgram(gn.program)&&(Fn=!0,fi=!0,Er=!0),W.id!==it&&(it=W.id,fi=!0),vt.needsLights){let ae=hy(M.state.lightProbeGridArray,q);vt.lightProbeGrid!==ae&&(vt.lightProbeGrid=ae,fi=!0)}if(Fn||I!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),se.setValue(O,"projectionMatrix",E.projectionMatrix),se.setValue(O,"viewMatrix",E.matrixWorldInverse);let mi=se.map.cameraPosition;mi!==void 0&&mi.setValue(O,ge.setFromMatrixPosition(E.matrixWorld)),S.logarithmicDepthBuffer&&se.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&se.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,fi=!0,Er=!0)}if(vt.needsLights&&(rn.state.directionalShadowMap.length>0&&se.setValue(O,"directionalShadowMap",rn.state.directionalShadowMap,G),rn.state.spotShadowMap.length>0&&se.setValue(O,"spotShadowMap",rn.state.spotShadowMap,G),rn.state.pointShadowMap.length>0&&se.setValue(O,"pointShadowMap",rn.state.pointShadowMap,G)),q.isSkinnedMesh){se.setOptional(O,q,"bindMatrix"),se.setOptional(O,q,"bindMatrixInverse");let ae=q.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),se.setValue(O,"boneTexture",ae.boneTexture,G))}q.isBatchedMesh&&(se.setOptional(O,q,"batchingTexture"),se.setValue(O,"batchingTexture",q._matricesTexture,G),se.setOptional(O,q,"batchingIdTexture"),se.setValue(O,"batchingIdTexture",q._indirectTexture,G),se.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&se.setValue(O,"batchingColorTexture",q._colorsTexture,G));let pi=Y.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&B.update(q,Y,gn),(fi||vt.receiveShadow!==q.receiveShadow)&&(vt.receiveShadow=q.receiveShadow,se.setValue(O,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(_e.envMapIntensity.value=z.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=D1()),fi){if(se.setValue(O,"toneMappingExposure",T.toneMappingExposure),vt.needsLights&&fy(_e,Er),xt&&W.fog===!0&&_t.refreshFogUniforms(_e,xt),_t.refreshMaterialUniforms(_e,W,et,ct,M.state.transmissionRenderTarget[E.id]),vt.needsLights&&vt.lightProbeGrid){let ae=vt.lightProbeGrid;_e.probesSH.value=ae.texture,_e.probesMin.value.copy(ae.boundingBox.min),_e.probesMax.value.copy(ae.boundingBox.max),_e.probesResolution.value.copy(ae.resolution)}gs.upload(O,Zf(vt),_e,G)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(gs.upload(O,Zf(vt),_e,G),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&se.setValue(O,"center",q.center),se.setValue(O,"modelViewMatrix",q.modelViewMatrix),se.setValue(O,"normalMatrix",q.normalMatrix),se.setValue(O,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let ae=W.uniformsGroups;for(let mi=0,Tr=ae.length;mi<Tr;mi++){let Kf=ae[mi];nt.update(Kf,gn),nt.bind(Kf,gn)}}return gn}function fy(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function py(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,z,Y){let W=U.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),U.get(E.texture).__webglTexture=z,U.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let Y=U.get(E);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Y=0){K=E,X=z,$=Y;let W=null,q=!1,xt=!1;if(E){let mt=U.get(E);if(mt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,mt.__webglFramebuffer),lt.copy(E.viewport),gt.copy(E.scissor),P=E.scissorTest,x.viewport(lt),x.scissor(gt),x.setScissorTest(P),it=-1;return}else if(mt.__webglFramebuffer===void 0)G.setupRenderTarget(E);else if(mt.__hasExternalTextures)G.rebindTextures(E,U.get(E.texture).__webglTexture,U.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let zt=E.depthTexture;if(mt.__boundDepthTexture!==zt){if(zt!==null&&U.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(E)}}let wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(xt=!0);let Rt=U.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[z])?W=Rt[z][Y]:W=Rt[z],q=!0):E.samples>0&&G.useMultisampledRTT(E)===!1?W=U.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?W=Rt[Y]:W=Rt,lt.copy(E.viewport),gt.copy(E.scissor),P=E.scissorTest}else lt.copy(Tt).multiplyScalar(et).floor(),gt.copy(ne).multiplyScalar(et).floor(),P=Vt;if(Y!==0&&(W=F),x.bindFramebuffer(O.FRAMEBUFFER,W)&&x.drawBuffers(E,W),x.viewport(lt),x.scissor(gt),x.setScissorTest(P),q){let mt=U.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,mt.__webglTexture,Y)}else if(xt){let mt=z;for(let wt=0;wt<E.textures.length;wt++){let Rt=U.get(E.textures[wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+wt,Rt.__webglTexture,Y,mt)}}else if(E!==null&&Y!==0){let mt=U.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mt.__webglTexture,Y)}it=-1},this.readRenderTargetPixels=function(E,z,Y,W,q,xt,St,mt=0){if(!(E&&E.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=U.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){x.bindFramebuffer(O.FRAMEBUFFER,wt);try{let Rt=E.textures[mt],zt=Rt.format,Wt=Rt.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt),!S.textureFormatReadable(zt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable(Wt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-W&&Y>=0&&Y<=E.height-q&&O.readPixels(z,Y,W,q,ft.convert(zt),ft.convert(Wt),xt)}finally{let Rt=K!==null?U.get(K).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,z,Y,W,q,xt,St,mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=U.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt)if(z>=0&&z<=E.width-W&&Y>=0&&Y<=E.height-q){x.bindFramebuffer(O.FRAMEBUFFER,wt);let Rt=E.textures[mt],zt=Rt.format,Wt=Rt.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt),!S.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.bufferData(O.PIXEL_PACK_BUFFER,xt.byteLength,O.STREAM_READ),O.readPixels(z,Y,W,q,ft.convert(zt),ft.convert(Wt),0);let ie=K!==null?U.get(K).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,ie);let ye=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Yx(O,ye,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xt),O.deleteBuffer(It),O.deleteSync(ye),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Y=0){let W=Math.pow(2,-Y),q=Math.floor(E.image.width*W),xt=Math.floor(E.image.height*W),St=z!==null?z.x:0,mt=z!==null?z.y:0;G.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,St,mt,q,xt),x.unbindTexture()},this.copyTextureToTexture=function(E,z,Y=null,W=null,q=0,xt=0){let St,mt,wt,Rt,zt,Wt,It,ie,ye,me=E.isCompressedTexture?E.mipmaps[xt]:E.image;if(Y!==null)St=Y.max.x-Y.min.x,mt=Y.max.y-Y.min.y,wt=Y.isBox3?Y.max.z-Y.min.z:1,Rt=Y.min.x,zt=Y.min.y,Wt=Y.isBox3?Y.min.z:0;else{let _e=Math.pow(2,-q);St=Math.floor(me.width*_e),mt=Math.floor(me.height*_e),E.isDataArrayTexture?wt=me.depth:E.isData3DTexture?wt=Math.floor(me.depth*_e):wt=1,Rt=0,zt=0,Wt=0}W!==null?(It=W.x,ie=W.y,ye=W.z):(It=0,ie=0,ye=0);let re=ft.convert(z.format),Ve=ft.convert(z.type),vt;z.isData3DTexture?(G.setTexture3D(z,0),vt=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(G.setTexture2DArray(z,0),vt=O.TEXTURE_2D_ARRAY):(G.setTexture2D(z,0),vt=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let rn=x.getParameter(O.UNPACK_ROW_LENGTH),jt=x.getParameter(O.UNPACK_IMAGE_HEIGHT),gn=x.getParameter(O.UNPACK_SKIP_PIXELS),Fn=x.getParameter(O.UNPACK_SKIP_ROWS),fi=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,me.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Rt),x.pixelStorei(O.UNPACK_SKIP_ROWS,zt),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Wt);let Er=E.isDataArrayTexture||E.isData3DTexture,se=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let _e=U.get(E),pi=U.get(z),ae=U.get(_e.__renderTarget),mi=U.get(pi.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,ae.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Tr=0;Tr<wt;Tr++)Er&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,U.get(E).__webglTexture,q,Wt+Tr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,U.get(z).__webglTexture,xt,ye+Tr)),O.blitFramebuffer(Rt,zt,St,mt,It,ie,St,mt,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||U.has(E)){let _e=U.get(E),pi=U.get(z);x.bindFramebuffer(O.READ_FRAMEBUFFER,H),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let ae=0;ae<wt;ae++)Er?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_e.__webglTexture,q,Wt+ae):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_e.__webglTexture,q),se?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pi.__webglTexture,xt,ye+ae):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pi.__webglTexture,xt),q!==0?O.blitFramebuffer(Rt,zt,St,mt,It,ie,St,mt,O.COLOR_BUFFER_BIT,O.NEAREST):se?O.copyTexSubImage3D(vt,xt,It,ie,ye+ae,Rt,zt,St,mt):O.copyTexSubImage2D(vt,xt,It,ie,Rt,zt,St,mt);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else se?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(vt,xt,It,ie,ye,St,mt,wt,re,Ve,me.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(vt,xt,It,ie,ye,St,mt,wt,re,me.data):O.texSubImage3D(vt,xt,It,ie,ye,St,mt,wt,re,Ve,me):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xt,It,ie,St,mt,re,Ve,me.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xt,It,ie,me.width,me.height,re,me.data):O.texSubImage2D(O.TEXTURE_2D,xt,It,ie,St,mt,re,Ve,me);x.pixelStorei(O.UNPACK_ROW_LENGTH,rn),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,jt),x.pixelStorei(O.UNPACK_SKIP_PIXELS,gn),x.pixelStorei(O.UNPACK_SKIP_ROWS,Fn),x.pixelStorei(O.UNPACK_SKIP_IMAGES,fi),xt===0&&z.generateMipmaps&&O.generateMipmap(vt),x.unbindTexture()},this.initRenderTarget=function(E){U.get(E).__webglFramebuffer===void 0&&G.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?G.setTextureCube(E,0):E.isData3DTexture?G.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?G.setTexture2DArray(E,0):G.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){X=0,$=0,K=null,x.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var F1={labels:!0,roads:!0,fog:!0,terrainHeight:1,lightIntensity:1},Lc=[7694025,4955018,13802058,12150667,5671355,9139112];function N1(n){return n<.85?"far":n<1.75?"medium":"near"}function Dc(n){return!Number.isFinite(n)||n<=0?{unlocked:!1,height:0,intensity:0}:{unlocked:!0,height:Math.min(20,3.5+Math.log2(1+n)*2.6),intensity:Math.min(1,.35+Math.log10(1+n)*.3)}}var Fc=class{constructor(t,e,i){this.root=t;this.data=e;this.callbacks=i;bt(this,"scene",new uo);bt(this,"camera",new Ui(-100,100,100,-100,.1,1200));bt(this,"renderer");bt(this,"raycaster",new Mo);bt(this,"pointer",new Xt);bt(this,"target",new V(0,0,0));bt(this,"buildingMeshes",[]);bt(this,"buildingGroups",[]);bt(this,"roadLines",[]);bt(this,"nodeLabels",new Map);bt(this,"fieldLabels",new Map);bt(this,"resizeObserver");bt(this,"terrain");bt(this,"roadsGroup",new Hn);bt(this,"labelsLayer");bt(this,"ambient",new vo(14604799,5398607,1.25));bt(this,"sun",new So(16774359,2.1));bt(this,"animationFrame",0);bt(this,"options",{...F1});bt(this,"dragging",!1);bt(this,"moved",!1);bt(this,"dragX",0);bt(this,"dragY",0);bt(this,"hoveredConceptId",null);bt(this,"onPointerDown",t=>{this.dragging=!0,this.moved=!1,this.dragX=t.clientX,this.dragY=t.clientY,this.renderer.domElement.setPointerCapture(t.pointerId)});bt(this,"onPointerMove",t=>{if(this.dragging){let r=t.clientX-this.dragX,s=t.clientY-this.dragY;Math.abs(r)+Math.abs(s)>2&&(this.moved=!0);let o=.62/this.camera.zoom;this.camera.position.x-=r*o,this.camera.position.z+=s*o,this.target.x-=r*o,this.target.z+=s*o,this.camera.lookAt(this.target),this.dragX=t.clientX,this.dragY=t.clientY;return}let e=this.pick(t),i=e==null?void 0:e.object.userData.conceptId;(i!=null?i:null)!==this.hoveredConceptId?(this.hoveredConceptId=i!=null?i:null,this.callbacks.onHover(this.hoveredConceptId,this.hoveredConceptId?{x:t.clientX,y:t.clientY}:null)):this.hoveredConceptId&&this.callbacks.onHover(this.hoveredConceptId,{x:t.clientX,y:t.clientY})});bt(this,"onPointerUp",t=>{var e;if(this.dragging&&(this.dragging=!1,this.renderer.domElement.releasePointerCapture(t.pointerId),!this.moved)){let i=(e=this.pick(t))==null?void 0:e.object.userData.conceptId;typeof i=="string"&&this.callbacks.onSelect(i)}});bt(this,"onWheel",t=>{t.preventDefault();let e=Math.exp(-t.deltaY*.0012);this.camera.zoom=Ec.clamp(this.camera.zoom*e,.42,3.2),this.camera.updateProjectionMatrix()});bt(this,"animate",()=>{this.animationFrame=requestAnimationFrame(this.animate),this.updateLabels(),this.renderer.render(this.scene,this.camera)});this.root.classList.add("mrt-world-canvas-root"),this.renderer=new Ic({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Je,this.renderer.domElement.classList.add("mrt-world-canvas"),this.root.appendChild(this.renderer.domElement),this.labelsLayer=yf(this.root,"mrt-world-label-layer"),this.scene.background=new Bt(O1(t,"--background-primary","#17161d")),this.scene.fog=new ss(this.scene.background,.0027),this.camera.position.set(185,155,185),this.camera.zoom=1,this.camera.lookAt(this.target),this.camera.updateProjectionMatrix(),this.scene.add(this.ambient,this.sun,this.roadsGroup),this.sun.position.set(-120,210,90),this.terrain=this.createTerrain(e.layout.fields),this.scene.add(this.terrain),this.createRoads(e.revision.links,e.layout.nodes),this.createBuildings(e.layout.nodes),this.createFieldLabels(e.layout.fields),this.bindInteractions(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.animate()}setOptions(t){this.options={...this.options,...t},this.roadsGroup.visible=this.options.roads,this.scene.fog=this.options.fog?new ss(this.scene.background,.0027):null,this.ambient.intensity=1.25*this.options.lightIntensity,this.sun.intensity=2.1*this.options.lightIntensity,this.updateTerrainHeight(),this.updateLabels()}resetCamera(){this.target.set(0,0,0),this.camera.position.set(185,155,185),this.camera.zoom=1,this.camera.lookAt(this.target),this.camera.updateProjectionMatrix()}getCameraState(){return{position:[this.camera.position.x,this.camera.position.y,this.camera.position.z],target:[this.target.x,this.target.y,this.target.z],zoom:this.camera.zoom}}setCameraState(t){this.camera.position.set(...t.position),this.target.set(...t.target),this.camera.zoom=Ec.clamp(t.zoom,.42,3.2),this.camera.lookAt(this.target),this.camera.updateProjectionMatrix()}sampleCanvasPixels(t=32){this.renderer.render(this.scene,this.camera);let e=this.renderer.getContext(),i=e.drawingBufferWidth,r=e.drawingBufferHeight,s=new Uint8Array(i*r*4);e.readPixels(0,0,i,r,e.RGBA,e.UNSIGNED_BYTE,s);let o=new Set,a=0;for(let l=0;l<s.length;l+=4*t)o.add(`${s[l]},${s[l+1]},${s[l+2]}`),s[l+3]>0&&(a+=1);return{colors:o.size,opaque:a}}dispose(){cancelAnimationFrame(this.animationFrame),this.resizeObserver.disconnect(),this.renderer.domElement.removeEventListener("pointermove",this.onPointerMove),this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.removeEventListener("pointerup",this.onPointerUp),this.renderer.domElement.removeEventListener("wheel",this.onWheel),this.scene.traverse(t=>{if(t instanceof Be||t instanceof cs){t.geometry.dispose();let e=Array.isArray(t.material)?t.material:[t.material];for(let i of e)i.dispose()}}),this.renderer.dispose(),this.root.replaceChildren()}createTerrain(t){let e=new gr(430,360,64,54);e.rotateX(-Math.PI/2);let i=e.attributes.position,r=[];for(let o=0;o<i.count;o+=1){let a=i.getX(o),l=i.getZ(o),{height:c,color:h}=B1(a,l,t);i.setY(o,c),r.push(h.r,h.g,h.b)}e.setAttribute("color",new be(r,3)),e.computeVertexNormals(),e.userData.baseHeights=Array.from({length:i.count},(o,a)=>i.getY(a));let s=new xr({vertexColors:!0,roughness:.92,metalness:.02,side:vn});return new Be(e,s)}createBuildings(t){var i,r,s,o;let e=new Map(this.data.layout.fields.map((a,l)=>[a.id,l]));for(let a of t){let l=this.data.revision.concepts.find(w=>w.id===a.id),c=Dc((i=this.data.scores[a.id])!=null?i:0);if(!l||!c.unlocked)continue;let h=new Bt((o=Lc[(s=e.get((r=a.attributeId)!=null?r:""))!=null?s:0])!=null?o:Lc[0]);h.lerp(new Bt(16777215),.1+c.intensity*.08);let u=new Hn;u.position.set(a.x,a.z*this.options.terrainHeight,a.y),u.userData.layoutHeight=a.z;let d=4.2+xf(a.id)%4*.45,f=xf(a.id)%3===0?new us(d*.72,d,c.height,6):new Fi(d,c.height,d),g=new xr({color:h,roughness:.72,metalness:.08}),y=new Be(f,g);y.position.y=c.height/2,y.userData.conceptId=a.id,u.add(y);let m=new Be(new xo(d*.78,Math.max(2,c.height*.22),xf(a.id)%3===0?6:4),new xr({color:h.clone().offsetHSL(.02,.04,-.13),roughness:.8}));m.position.y=c.height+Math.max(1,c.height*.11),m.rotation.y=Math.PI/4,m.userData.conceptId=a.id,u.add(m);let p=new Be(new go(d*.8,20),new mr({color:1512223,transparent:!0,opacity:.2,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.05,u.add(p),this.scene.add(u),this.buildingGroups.push(u),this.buildingMeshes.push(y,m);let v=yf(this.labelsLayer,"mrt-world-node-label",l.label);this.nodeLabels.set(a.id,v)}}createRoads(t,e){var s,o;let i=new Map(e.map(a=>[a.id,a])),r=new ls({color:9274009,transparent:!0,opacity:.38});for(let a of t){let l=i.get(a.sourceConceptId),c=i.get(a.targetConceptId);if(!l||!c||!Dc((s=this.data.scores[l.id])!=null?s:0).unlocked||!Dc((o=this.data.scores[c.id])!=null?o:0).unlocked)continue;let h=[new V(l.x,l.z*this.options.terrainHeight+.15,l.y),new V(c.x,c.z*this.options.terrainHeight+.15,c.y)],u=new cs(new Ke().setFromPoints(h),r.clone());u.userData.source=l,u.userData.target=c,this.roadsGroup.add(u),this.roadLines.push(u)}}createFieldLabels(t){for(let e of t)this.fieldLabels.set(e.id,yf(this.labelsLayer,"mrt-world-field-label",e.label))}bindInteractions(){this.renderer.domElement.addEventListener("pointermove",this.onPointerMove),this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.addEventListener("pointerup",this.onPointerUp),this.renderer.domElement.addEventListener("wheel",this.onWheel,{passive:!1})}pick(t){var i;let e=this.renderer.domElement.getBoundingClientRect();return this.pointer.set((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera),(i=this.raycaster.intersectObjects(this.buildingMeshes,!1)[0])!=null?i:null}resize(){let t=Math.max(1,this.root.clientWidth),e=Math.max(1,this.root.clientHeight),i=250,r=i*t/e;this.camera.left=-r/2,this.camera.right=r/2,this.camera.top=i/2,this.camera.bottom=-i/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}updateLabels(){var e;let t=N1(this.camera.zoom);for(let i of this.data.layout.fields){let r=this.fieldLabels.get(i.id);r&&(r.hidden=!(this.options.labels&&t!=="near"),R0(r,new V(i.x,1,i.y),this.camera,this.root))}for(let i of this.data.layout.nodes){let r=this.nodeLabels.get(i.id);r&&(r.hidden=!(this.options.labels&&t==="near"),R0(r,new V(i.x,i.z*this.options.terrainHeight+Dc((e=this.data.scores[i.id])!=null?e:0).height+3,i.y),this.camera,this.root))}}updateTerrainHeight(){var i;let t=this.terrain.geometry.attributes.position,e=this.terrain.geometry.userData.baseHeights;for(let r=0;r<t.count;r+=1)t.setY(r,e[r]*this.options.terrainHeight);t.needsUpdate=!0,this.terrain.geometry.computeVertexNormals();for(let r of this.buildingGroups)r.position.y=Number((i=r.userData.layoutHeight)!=null?i:0)*this.options.terrainHeight;for(let r of this.roadLines){let s=r.userData.source,o=r.userData.target;r.geometry.setFromPoints([new V(s.x,s.z*this.options.terrainHeight+.15,s.y),new V(o.x,o.z*this.options.terrainHeight+.15,o.y)])}}};function B1(n,t,e){if(e.length===0)return{height:0,color:new Bt(6445680)};let i=0,r=0,s=new Bt(0);return e.forEach((o,a)=>{let l=n-o.x,c=t-o.y,h=Math.exp(-(l*l+c*c)/(2*o.radius*o.radius));i+=h,r+=h*(8+a%3*2),s.add(new Bt(Lc[a%Lc.length]).multiplyScalar(h))}),i>0&&s.multiplyScalar(1/i),s.lerp(new Bt(5661019),.22),{height:r,color:s}}function R0(n,t,e,i){let r=t.clone().project(e);n.style.transform=`translate(-50%, -50%) translate(${(r.x*.5+.5)*i.clientWidth}px, ${(-r.y*.5+.5)*i.clientHeight}px)`}function O1(n,t,e){return getComputedStyle(n).getPropertyValue(t).trim()||e}function xf(n){let t=0;for(let e=0;e<n.length;e+=1)t=Math.imul(31,t)+n.charCodeAt(e)|0;return Math.abs(t)}function yf(n,t,e){let i=document.createElement("div");return i.className=t,e!==void 0&&(i.textContent=e),n.appendChild(i),i}var I0=require("node:child_process"),P0=require("node:fs/promises"),fn=require("node:path");async function _f(n){let t=B0([n.configuredRunnerRoot,(0,fn.join)(n.vaultRoot,"readmark-map-runner"),n.localAppData?(0,fn.join)(n.localAppData,"ReadMark","runner"):void 0]),e=await z1(n.configuredNodePath,n.pathValue);if(!e)return null;for(let i of t){let r=(0,fn.resolve)(i),s=(0,fn.join)(r,"dist","cli.js");if(await O0(s))return{root:r,cliPath:s,nodePath:e}}return null}async function k0(n,t){return Nc(n,["configure","--stdin"],t)}async function vf(n){return await Nc(n,["doctor","--json"])}async function D0(n){return Nc(n,["probe","--json"])}async function L0(n,t){return Nc(n,["confirm",t])}function F0(n,t,e){let i=N0(n,["run",t,"--events=jsonl"]),r=!1,s=null,o="";i.stdout.setEncoding("utf8"),i.stderr.setEncoding("utf8"),i.stdout.on("data",c=>{var u;o+=c;let h=o.split(/\r?\n/);o=(u=h.pop())!=null?u:"";for(let d of h)try{C0(d,e)}catch(f){s=f instanceof Error?f:new Error("Runner returned an invalid event"),i.kill();break}});let a="";return i.stderr.on("data",c=>{a+=c}),{completion:new Promise((c,h)=>{i.once("error",h),i.once("close",u=>{if(o.trim()&&!s)try{C0(o,e)}catch(d){s=d instanceof Error?d:new Error("Runner returned an invalid event")}s?h(s):r?h(new Error("Runner process cancelled")):u===0?c():h(new Error(U0(a,u)))})}),cancel(){i.exitCode===null&&!i.killed&&(r=!0,i.kill())}}}async function Nc(n,t,e){let i=N0(n,t),r="",s="";i.stdout.setEncoding("utf8"),i.stderr.setEncoding("utf8"),i.stdout.on("data",l=>{r+=l}),i.stderr.on("data",l=>{s+=l}),e===void 0?i.stdin.end():i.stdin.end(`${JSON.stringify(e)}
`,"utf8");let o=await U1(i);if(o!==0)throw new Error(U0(s,o));let a=JSON.parse(r.trim());if(!z0(a))throw new Error("Runner returned invalid JSON");return a}function N0(n,t){return(0,I0.spawn)(n.nodePath,[n.cliPath,...t],{cwd:n.root,shell:!1,windowsHide:!0,stdio:["pipe","pipe","pipe"]})}function U1(n){return new Promise((t,e)=>{n.once("error",e),n.once("close",t)})}function C0(n,t){if(!n.trim())return;let e;try{e=JSON.parse(n)}catch(r){throw new Error("Runner returned invalid JSONL event data")}let i=V1(e);if(!i)throw new Error("Runner returned an invalid event");t(i)}async function z1(n,t=(e=>(e=process.env.PATH)!=null?e:"")()){let i=B0([n,...t.split(fn.delimiter).flatMap(r=>r?[(0,fn.join)(r,"node.exe"),(0,fn.join)(r,"node")]:[]),(0,fn.basename)(process.execPath).toLowerCase().startsWith("node")?process.execPath:void 0]);for(let r of i)if(await O0(r))return(0,fn.resolve)(r);return null}function B0(n){return[...new Set(n.map(t=>t==null?void 0:t.trim()).filter(t=>!!t))]}async function O0(n){try{return await(0,P0.access)(n),!0}catch(t){return!1}}function U0(n,t){var i;return((i=n.trim().split(/\r?\n/).at(-1))==null?void 0:i.trim())||`Runner exited with code ${t!=null?t:"unknown"}`}function V1(n){if(!z0(n))return null;let t=typeof n.event=="string"?n.event:n.type;return t==="started"?{event:t,...typeof n.taskId=="string"?{taskId:n.taskId}:{}}:t==="stage"&&typeof n.stage=="string"&&["started","completed","reused"].includes(String(n.state))?{event:t,stage:n.stage,state:n.state}:t==="awaiting_confirmation"?{event:t,attributes:Array.isArray(n.attributes)?n.attributes:[]}:t==="completed"&&typeof n.revisionPath=="string"?{event:t,revisionPath:n.revisionPath}:t==="error"&&typeof n.message=="string"?{event:t,message:n.message}:null}function z0(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}var _s="readmark-view",vs="readmark-map-view",Uc="readmark-icon",H1=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4.2c0-1.05-.8-1.9-1.8-1.9s-1.8.85-1.8 1.9H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
  <path d="M16 3v7.25l1.7-1.7L21 11.85" />
  <path d="M7.5 13h4.25" />
  <path d="M7.5 15.7H13.8" />
</svg>`,bf=".obsidian/plugins/readmark",Q0=5*6e4,Sr=3e4,Cf=6,G1=6e4,V0=3e3,W1=1.5,X1=15,q1=6e4,H0=180,$1=3e3,Y1=1e4,ty=1e4,zc=160,Z1=12,J1=.72,Sf=.65,Xc={idleThresholdMs:6e4,timingTickMs:500,summaryFolder:"Reading Summaries",dailyGoalMinutes:30,detectHighlights:!0,detectBolds:!0,detectComments:!0,detectFootnotes:!0,detectCommentaries:!0,detectCallouts:!0,readingMapLabsEnabled:!1,readingMapRunnerRoot:"",readingMapNodePath:"",readingMapWeights:{...wi},readingMapHistoricalBold:!1,readingMapHistoricalCallout:!1,colors:Rr()},Oz={schemaVersion:2,settings:{...Xc,readingMapWeights:{...wi},colors:Rr()},books:[],lastLoadedAt:null},G0={highlight:"\u9AD8\u4EAE",bold:"\u52A0\u7C97",annotation:"\u6279\u6CE8",commentary:"\u70B9\u8BC4",callout:"\u6807\u6CE8"},K1={info:"\u4FE1\u606F",emphasis:"\u91CD\u70B9",success:"\u6210\u529F",warning:"\u8B66\u793A",danger:"\u5371\u9669",neutral:"\u4E2D\u6027"},Vc=class extends j.Plugin{constructor(){super(...arguments);bt(this,"data",J0());bt(this,"statusBarEl");bt(this,"records",new Map);bt(this,"dirtyRecords",new Set);bt(this,"unreadableRecords",new Set);bt(this,"progressSamples",new Map);bt(this,"currentBookId",null);bt(this,"activeMarkdownBookId",null);bt(this,"activeSessionId",null);bt(this,"restoreInProgressBookIds",new Set);bt(this,"restoreEntryInFlightKeys",new Set);bt(this,"lastAutomaticRestoreEntryKey",null);bt(this,"restoreSettlingUntilByBookId",new Map);bt(this,"trackingPaused",!1);bt(this,"lastActivityAt",Date.now());bt(this,"lastTickAt",Date.now());bt(this,"lastFlushAt",Date.now());bt(this,"lastRenderAt",Date.now());bt(this,"tickBusy",!1);bt(this,"contentScanTimer",null);bt(this,"saveQueue",new Es);bt(this,"readingMapStateQueue",new Es);bt(this,"activeReadingMapJob",null);bt(this,"readingMapScoringContexts",new Map);bt(this,"readingMapUnavailableBookIds",new Set)}async onload(){await this.loadPluginData(),this.data.lastLoadedAt=new Date().toISOString(),(0,j.addIcon)(Uc,H1),this.statusBarEl=this.addStatusBarItem(),this.statusBarEl.setText("ReadMark loaded"),this.registerView(_s,e=>new bs(e,this)),this.registerView(vs,e=>new Hc(e,this)),this.addSettingTab(new Df(this.app,this)),this.addRibbonIcon(Uc,"\u6253\u5F00 ReadMark",()=>void this.activateView()),this.addCommand({id:"open-reading-tracker",name:"\u6253\u5F00 ReadMark",callback:()=>void this.activateView()}),this.addCommand({id:"add-current-file-to-bookshelf",name:"\u5C06\u5F53\u524D\u6587\u4EF6\u52A0\u5165\u4E66\u67B6",callback:()=>void this.addCurrentFileToBookshelf()}),this.addCommand({id:"add-book-by-local-path",name:"\u901A\u8FC7\u672C\u5730\u8DEF\u5F84\u6DFB\u52A0\u4E66\u672C",callback:()=>this.openPathModal()}),this.addCommand({id:"continue-last-book",name:"\u7EE7\u7EED\u9605\u8BFB\u4E0A\u4E00\u672C\u4E66",callback:()=>void this.continueLastBook()}),this.addCommand({id:"pause-resume-reading-tracking",name:"\u6682\u505C\u6216\u7EE7\u7EED\u81EA\u52A8\u8BA1\u65F6",callback:()=>void this.toggleTracking()}),this.addCommand({id:"open-reading-map",name:"\u6253\u5F00\u4E66\u672C\u4E16\u754C",callback:()=>void this.activateReadingMapView()}),this.addCommand({id:"export-current-book-reading-map-task",name:"\u5BFC\u51FA\u5F53\u524D\u4E66\u672C\u7684\u4E66\u672C\u4E16\u754C\u4EFB\u52A1",callback:()=>void this.exportCurrentBookReadingMapTask()}),this.addCommand({id:"import-reading-map-revision",name:"\u5BFC\u5165\u4E66\u672C\u4E16\u754C\u7ED3\u679C",callback:()=>this.openReadingMapImportModal()}),this.registerEvent(this.app.workspace.on("file-open",()=>void this.handleActiveFile())),this.registerEvent(this.app.workspace.on("active-leaf-change",()=>void this.handleActiveFile())),this.registerEvent(this.app.workspace.on("layout-change",()=>void this.handleActiveFile())),this.registerEvent(this.app.workspace.on("editor-change",()=>{this.markActivity(),this.scheduleContentScan()})),this.registerDomEvent(window,"focus",()=>this.markActivity()),this.registerDomEvent(window,"blur",()=>void this.endActiveSession()),this.registerDomEvent(document,"wheel",()=>this.markActivity(),{passive:!0}),this.registerDomEvent(document,"keydown",()=>this.markActivity()),this.registerDomEvent(document,"click",()=>this.markActivity()),this.registerDomEvent(document,"touchstart",()=>this.markActivity(),{passive:!0}),this.registerInterval(window.setInterval(()=>void this.tick(),this.data.settings.timingTickMs)),await this.normalizeStoredRecords(),await this.handleActiveFile(),await this.saveData(this.data),this.updateStatusBar()}async onunload(){this.contentScanTimer!==null&&window.clearTimeout(this.contentScanTimer),await this.interruptActiveReadingMapJob(),await this.endActiveSession(),await this.flushDirtyRecords(),this.app.workspace.detachLeavesOfType(vs)}async loadPluginData(){var i,r,s,o,a;let e=await this.loadData();if((e==null?void 0:e.schemaVersion)===2){let l=typeof((i=e.settings)==null?void 0:i.readingMapRunnerWorkspace)=="string"?e.settings.readingMapRunnerWorkspace:"";this.data={schemaVersion:2,settings:{...Xc,...e.settings,readingMapRunnerRoot:typeof((r=e.settings)==null?void 0:r.readingMapRunnerRoot)=="string"?e.settings.readingMapRunnerRoot:"",readingMapRunnerWorkspace:l||void 0,readingMapNodePath:typeof((s=e.settings)==null?void 0:s.readingMapNodePath)=="string"?e.settings.readingMapNodePath:"",readingMapWeights:qs((o=e.settings)==null?void 0:o.readingMapWeights),colors:op((a=e.settings)==null?void 0:a.colors)},books:Array.isArray(e.books)?e.books.map(Z0):[],lastLoadedAt:typeof e.lastLoadedAt=="string"?e.lastLoadedAt:null};return}this.data=J0()}async savePluginData(){await this.saveQueue.enqueue(async()=>{this.data.books=this.data.books.map(Z0),await this.saveData(this.data),await this.renderViews(),this.updateStatusBar()})}async activateView(){var e,i,r,s;try{let o=this.app.workspace.getLeavesOfType(_s)[0];o||(o=(i=(e=this.app.workspace.getRightLeaf(!1))!=null?e:this.app.workspace.getRightLeaf(!0))!=null?i:this.app.workspace.getLeaf(!0),await o.setViewState({type:_s,active:!0})),(s=(r=this.app.workspace.rightSplit)==null?void 0:r.expand)==null||s.call(r),this.app.workspace.revealLeaf(o)}catch(o){console.error("Failed to open ReadMark view",o),new j.Notice("\u65E0\u6CD5\u6253\u5F00 ReadMark\uFF0C\u8BF7\u67E5\u770B\u5F00\u53D1\u8005\u63A7\u5236\u53F0\u3002")}}async activateReadingMapView(){try{let e=this.app.workspace.getLeavesOfType(vs)[0];e||(e=this.app.workspace.getLeaf("tab"),await e.setViewState({type:vs,active:!0})),this.app.workspace.revealLeaf(e)}catch(e){console.error("Failed to open Reading Map view",e),new j.Notice("\u65E0\u6CD5\u6253\u5F00\u4E66\u672C\u4E16\u754C\uFF0C\u8BF7\u67E5\u770B\u5F00\u53D1\u8005\u63A7\u5236\u53F0\u3002")}}get readingMapStorageRoot(){let e=this.vaultBasePath;return e?(0,kn.join)(e,bf,"maps"):null}getReadingMapBook(){var e;return(e=this.getActiveMarkdownBook())!=null?e:this.getLockedCurrentBook()}async getReadingMapMarkdown(e){if(e.vaultPath){let r=this.app.vault.getAbstractFileByPath(e.vaultPath);if(!(r instanceof j.TFile))throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u5F53\u524D\u4E66\u672C\u7684 Markdown \u6E90\u6587\u4EF6\u3002");return this.app.vault.cachedRead(r)}let i=pn(e.absolutePath);if(!(0,kn.isAbsolute)(i))throw new Error("Current book does not have an absolute local path.");return(0,j0.readFile)(i,"utf8")}async detectReadingMapRunner(){let e=this.vaultBasePath;return e?_f({vaultRoot:e,configuredRunnerRoot:this.trackerSettings.readingMapRunnerRoot,configuredNodePath:this.trackerSettings.readingMapNodePath,localAppData:process.env.LOCALAPPDATA,pathValue:process.env.PATH}):null}async getReadingMapRunnerDoctor(){let e=await this.detectReadingMapRunner();return e?{installation:e,doctor:await vf(e)}:null}openReadingMapSetup(e){new If(this.app,this,e).open()}async configureReadingMapRunner(e){var a;let i=e.runnerRoot.trim(),r=e.nodePath.trim();if(!(0,kn.isAbsolute)(i)||r&&!(0,kn.isAbsolute)(r))return new j.Notice("Runner \u5B89\u88C5\u76EE\u5F55\u548C\u81EA\u5B9A\u4E49 Node \u8DEF\u5F84\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002"),!1;let s=this.vaultBasePath;if(!s)return!1;let o=await _f({vaultRoot:s,configuredRunnerRoot:i,configuredNodePath:r,localAppData:process.env.LOCALAPPDATA,pathValue:process.env.PATH});if(!o||o.root.toLowerCase()!==pn(i).toLowerCase())return new j.Notice("\u6CA1\u6709\u5728\u8BE5\u76EE\u5F55\u627E\u5230 Runner \u7684 dist/cli.js \u6216\u53EF\u7528 Node\u3002"),!1;try{let l=await vf(o);return!e.apiKey.trim()&&!l.apiKeyConfigured?(new j.Notice("\u8BF7\u8F93\u5165 MiniMax API Key\u3002"),!1):(await k0(o,{provider:"minimax",...e.apiKey.trim()?{apiKey:e.apiKey.trim()}:{},baseUrl:"https://api.minimax.io",model:"MiniMax-M3",taskWorkspace:Gs((a=this.trackerSettings.readingMapRunnerWorkspace)!=null?a:"")?this.trackerSettings.readingMapRunnerWorkspace:"./workspace"}),this.trackerSettings.readingMapRunnerRoot=o.root,this.trackerSettings.readingMapNodePath=r,this.trackerSettings.readingMapRunnerWorkspace=void 0,await this.savePluginData(),new j.Notice("Runner \u5DF2\u914D\u7F6E\u3002"),!0)}catch(l){return console.error("Failed to configure Reading Map Runner",l),new j.Notice(l instanceof Error?l.message:"Runner \u914D\u7F6E\u5931\u8D25\u3002"),!1}}async probeReadingMapRunner(){try{let e=await this.getReadingMapRunnerDoctor();if(!(e!=null&&e.doctor.apiKeyConfigured)){this.openReadingMapSetup();return}let i=await D0(e.installation);new j.Notice(i.ok===!0?"MiniMax-M3 \u8FDE\u63A5\u6B63\u5E38\u3002":"MiniMax \u8FDE\u63A5\u6D4B\u8BD5\u5931\u8D25\u3002")}catch(e){console.error("Reading Map Runner probe failed",e),new j.Notice(e instanceof Error?e.message:"MiniMax \u8FDE\u63A5\u6D4B\u8BD5\u5931\u8D25\u3002")}}async generateOrUpdateBookWorld(e=!1){var l;if(this.trackerSettings.readingMapLabsEnabled||(this.trackerSettings.readingMapLabsEnabled=!0,await this.savePluginData()),this.activeReadingMapJob){new j.Notice("\u5DF2\u6709\u4E66\u672C\u4E16\u754C\u4EFB\u52A1\u6B63\u5728\u8FD0\u884C\u3002");return}let i=this.getReadingMapBook(),r=this.readingMapStorageRoot;if(!i||!r){new j.Notice("\u8BF7\u5148\u6253\u5F00\u6216\u9501\u5B9A\u5F53\u524D\u4E66\u672C\u3002");return}let s;try{s=await this.getReadingMapRunnerDoctor()}catch(c){console.error("Reading Map Runner doctor failed",c),s=null}if(!(s!=null&&s.doctor.apiKeyConfigured)){this.openReadingMapSetup(()=>void this.generateOrUpdateBookWorld(e));return}let o=await Ta(r,i.id),a=!e&&((o==null?void 0:o.runnerState)==="interrupted"||(o==null?void 0:o.runnerState)==="failed"||(o==null?void 0:o.runnerState)==="awaiting-confirmation")&&(l=o.runnerTaskDirectory)!=null?l:"";try{a||(a=(await Eh({workspacePath:s.doctor.taskWorkspace,bookId:i.id,markdown:await this.getReadingMapMarkdown(i)})).taskDirectory),await this.runReadingMapTask(i,s.installation,s.doctor,a)}catch(c){let h=c instanceof Error?c.message:"\u4E66\u672C\u4E16\u754C\u4EFB\u52A1\u542F\u52A8\u5931\u8D25\u3002";console.error("Failed to start Reading Map task",c),await this.writeReadingMapRunnerStatus(i,"failed",a,"\u542F\u52A8",h),new j.Notice(h)}}async runReadingMapTask(e,i,r,s){let o=null,a=null,l=null,c=F0(i,s,u=>{u.event==="stage"?(this.activeReadingMapJob&&(this.activeReadingMapJob.stage=u.stage),this.writeReadingMapRunnerStatus(e,"running",s,u.stage,null)):u.event==="awaiting_confirmation"?o=u.attributes:u.event==="completed"?a=u.revisionPath:u.event==="error"&&(l=u.message),this.renderReadingMapViews()}),h={bookId:e.id,taskDirectory:s,stage:"\u51C6\u5907",process:c,cancelled:!1};this.activeReadingMapJob=h,await this.writeReadingMapRunnerStatus(e,"running",s,"\u51C6\u5907",null),await this.renderReadingMapViews();try{if(await c.completion,this.activeReadingMapJob=null,o){await this.writeReadingMapRunnerStatus(e,"awaiting-confirmation",s,"\u5C5E\u6027\u786E\u8BA4",null),new Pf(this.app,o,async()=>{await L0(i,s),await this.runReadingMapTask(e,i,r,s)}).open();return}if(!a)throw new Error(l||"Runner \u672A\u8FD4\u56DE\u8BED\u4E49\u7248\u672C\u8DEF\u5F84\u3002");await this.inspectReadingMapImport(a,!1,r.taskWorkspace,e),await this.writeReadingMapRunnerStatus(e,"complete",s,"\u5B8C\u6210",null)}catch(u){if(this.activeReadingMapJob=null,h.cancelled)await this.writeReadingMapRunnerStatus(e,"interrupted",s,h.stage,"\u4EFB\u52A1\u5DF2\u4E2D\u65AD\uFF0C\u53EF\u4ECE checkpoint \u7EE7\u7EED\u3002");else{let d=l||(u instanceof Error?u.message:"Runner \u8FD0\u884C\u5931\u8D25\u3002");await this.writeReadingMapRunnerStatus(e,"failed",s,h.stage,d),new j.Notice(d)}}await this.renderReadingMapViews()}async cancelActiveReadingMapJob(){let e=this.activeReadingMapJob;e&&(e.cancelled=!0,e.process.cancel())}async interruptActiveReadingMapJob(){var e;await this.cancelActiveReadingMapJob();try{await((e=this.activeReadingMapJob)==null?void 0:e.process.completion)}catch(i){}}async writeReadingMapRunnerStatus(e,i,r,s,o){await this.readingMapStateQueue.enqueue(async()=>{var c,h,u;let a=this.readingMapStorageRoot;if(!a)return;let l=await Ta(a,e.id);await Ch(a,{protocolVersion:1,bookId:e.id,status:i==="failed"?"error":i==="complete"&&(l!=null&&l.revisionId)?"current":"building",revisionId:(c=l==null?void 0:l.revisionId)!=null?c:null,taskId:(h=l==null?void 0:l.taskId)!=null?h:(0,kn.basename)(r),sourceFingerprint:(u=l==null?void 0:l.sourceFingerprint)!=null?u:null,message:o,runnerTaskDirectory:r,runnerStage:s,runnerState:i,updatedAt:new Date().toISOString()})})}async exportCurrentBookReadingMapTask(){if(!this.trackerSettings.readingMapLabsEnabled){new j.Notice("Labs \u9ED8\u8BA4\u5173\u95ED\u3002\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u542F\u7528\u4E66\u672C\u4E16\u754C\u3002");return}let e=await this.getReadingMapRunnerDoctor(),i=e==null?void 0:e.doctor.taskWorkspace;if(!i||!Gs(i)){new j.Notice("\u8BF7\u5148\u914D\u7F6E Runner \u5B89\u88C5\u76EE\u5F55\u3002");return}let r=this.getReadingMapBook();if(!r){new j.Notice("\u8BF7\u5148\u6253\u5F00\u6216\u9501\u5B9A\u5F53\u524D\u4E66\u672C\u3002");return}try{let s=await Eh({workspacePath:i,bookId:r.id,markdown:await this.getReadingMapMarkdown(r)});new j.Notice(`\u5DF2\u5BFC\u51FA\u4E66\u672C\u4E16\u754C\u4EFB\u52A1\uFF1A${s.taskDirectory}`),await this.renderReadingMapViews()}catch(s){console.error("Failed to export Reading Map task",s),new j.Notice(s instanceof Error?s.message:"\u5BFC\u51FA\u4E66\u672C\u4E16\u754C\u4EFB\u52A1\u5931\u8D25\u3002")}}openReadingMapImportModal(){new Wc(this.app,{title:"\u5BFC\u5165\u4E66\u672C\u4E16\u754C\u7ED3\u679C",initialPath:"",submitLabel:"\u68C0\u67E5\u7ED3\u679C",placeholder:"C:\\runner-workspace\\task-...\\semantic-revision.json",onSubmit:async e=>this.inspectReadingMapImport(e)}).open()}async inspectReadingMapImport(e,i=!0,r,s){var u;if(!this.trackerSettings.readingMapLabsEnabled){new j.Notice("Labs \u9ED8\u8BA4\u5173\u95ED\u3002\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u542F\u7528\u4E66\u672C\u4E16\u754C\u3002");return}let o=r!=null?r:(u=await this.getReadingMapRunnerDoctor())==null?void 0:u.doctor.taskWorkspace,a=this.readingMapStorageRoot,l=s!=null?s:this.getReadingMapBook();if(!o||!Gs(o)||!a||!l){new j.Notice("\u9700\u8981\u5F53\u524D\u4E66\u672C\u3001Runner \u7EDD\u5BF9\u5DE5\u4F5C\u533A\u8DEF\u5F84\u548C\u672C\u5730\u5E93\u6587\u4EF6\u7CFB\u7EDF\u3002");return}let c;try{c=await this.getReadingMapMarkdown(l)}catch(d){let f=d instanceof Error?d.message:"\u65E0\u6CD5\u8BFB\u53D6\u5F53\u524D\u4E66\u672C\u7684 Markdown \u6E90\u6587\u4EF6\u3002";console.error("Failed to read Reading Map source",d);try{await this.recordReadingMapImportStatus(a,l.id,"error",f,{status:"error",taskId:null,bookId:l.id,message:f})}catch(g){console.error("Failed to record Reading Map source error",g)}new j.Notice(f),await this.renderReadingMapViews();return}let h=await tg({workspacePath:o,selectedRevisionPath:e,currentMarkdown:c});if(h.status==="ready"&&h.task.bookId!==l.id){await this.recordReadingMapImportStatus(a,l.id,"error","\u6240\u9009\u7ED3\u679C\u4E0D\u5C5E\u4E8E\u5F53\u524D\u4E66\u672C\u3002",h),new j.Notice("\u6240\u9009\u7ED3\u679C\u4E0D\u5C5E\u4E8E\u5F53\u524D\u4E66\u672C\u3002");return}if(h.status==="ready"){if(i){new kf(this.app,h,()=>void this.inspectReadingMapImport(e,!1,o,l)).open();return}await og(a,h.revision),this.readingMapScoringContexts.delete(l.id),this.readingMapUnavailableBookIds.delete(l.id),new j.Notice("\u4E66\u672C\u4E16\u754C\u7ED3\u679C\u5DF2\u5BFC\u5165\u3002"),await this.renderReadingMapViews();return}await this.recordReadingMapImportStatus(a,l.id,h.status,h.message,h),new j.Notice(h.message),await this.renderReadingMapViews()}async recordReadingMapImportStatus(e,i,r,s,o){let a=o.status==="ready"?o.task.taskId:o.taskId,l=o.status==="ready"?o.revision.sourceFingerprint:null;await Ch(e,{protocolVersion:1,bookId:i,status:r,revisionId:null,taskId:a,sourceFingerprint:l,message:s,updatedAt:new Date().toISOString()})}async deleteCurrentBookMapData(){let e=this.readingMapStorageRoot,i=this.getReadingMapBook();if(!(!e||!i)){try{await hg(e,i.id),this.readingMapScoringContexts.delete(i.id),this.readingMapUnavailableBookIds.add(i.id),new j.Notice("\u5DF2\u5220\u9664\u5F53\u524D\u4E66\u672C\u7684\u4E66\u672C\u4E16\u754C\u6570\u636E\u3002")}catch(r){let s=r instanceof Error?r.message:"\u5220\u9664\u4E66\u672C\u4E16\u754C\u6570\u636E\u5931\u8D25\u3002";console.error("Failed to delete Reading Map data",r);try{await this.recordReadingMapImportStatus(e,i.id,"error",s,{status:"error",taskId:null,bookId:i.id,message:s})}catch(o){console.error("Failed to record Reading Map deletion error",o)}new j.Notice(s)}await this.renderReadingMapViews()}}async renderReadingMapViews(){for(let e of this.app.workspace.getLeavesOfType(vs))e.view instanceof Hc&&await e.view.render()}async getReadingMapScoringContext(e,i){let r=this.readingMapScoringContexts.get(e.id);if(r)return r;if(this.readingMapUnavailableBookIds.has(e.id))return null;let s=this.readingMapStorageRoot;if(!s)return null;let a=(await ag(s,e.id))[0];if(!a)return this.readingMapUnavailableBookIds.add(e.id),null;let l=i!=null?i:await this.getReadingMapMarkdown(e),c=Hs(l,e.id);if(c.sourceFingerprint!==a.revision.sourceFingerprint)return null;let h=await lg(s,e.id);h.weights=qs(this.trackerSettings.readingMapWeights),h.historicalImport={bold:this.trackerSettings.readingMapHistoricalBold,callout:this.trackerSettings.readingMapHistoricalCallout};let u={revision:a.revision,snapshot:c,activity:h,tracker:new Ea(2500,h.exposures)};return this.readingMapScoringContexts.set(e.id,u),u}async observeReadingMapExposure(e,i,r,s){var h;let o=this.readingMapStorageRoot;if(!o)return;let a=await this.getReadingMapScoringContext(e,i);if(!a)return;let l=ig(a.snapshot,r),c=a.tracker.observe((h=l==null?void 0:l.id)!=null?h:null,s);c&&(a.activity.exposures.push(c),await this.readingMapStateQueue.enqueue(()=>cg(o,e.id,a.activity)),await this.renderReadingMapViews())}async getBookWorldScores(e){let i=await this.getReadingMapScoringContext(e);if(!i||!i.activity.mapImportedAt)return null;let r=await this.getRecord(e);return ng({revision:i.revision,snapshot:i.snapshot,exposures:i.activity.exposures,excerpts:r.excerpts.map(s=>({id:s.id,type:s.type,position:s.position,capturedAt:s.capturedAt})),weights:qs(this.trackerSettings.readingMapWeights),mapImportedAt:i.activity.mapImportedAt,historicalImport:{bold:this.trackerSettings.readingMapHistoricalBold,callout:this.trackerSettings.readingMapHistoricalCallout}})}async getBookWorldRenderBundle(e){var l;let i=this.readingMapStorageRoot,r=await this.getReadingMapScoringContext(e),s=await this.getBookWorldScores(e);if(!i||!r||!s)return null;let o=await ug(i,e.id),a;return(o==null?void 0:o.revisionId)===r.revision.id?a=o:(a=Hh(r.revision,(l=o==null?void 0:o.nodes)!=null?l:[]),await this.readingMapStateQueue.enqueue(()=>Ih(i,e.id,a))),{scores:s,rendererData:{revision:r.revision,snapshot:r.snapshot,layout:a,scores:s.concepts}}}async openBookWorldEvidence(e,i){if(!e.vaultPath){new j.Notice("\u8BE5\u4E66\u4E0D\u5728\u5F53\u524D Vault \u4E2D\uFF0C\u65E0\u6CD5\u6253\u5F00\u76F8\u90BB\u539F\u6587\u89C6\u56FE\u3002");return}let r=await this.getReadingMapScoringContext(e),s=r==null?void 0:r.snapshot.sourceUnits.find(c=>c.id===i),o=this.app.vault.getAbstractFileByPath(e.vaultPath);if(!s||!(o instanceof j.TFile))return;await this.app.workspace.getLeaf("split","vertical").openFile(o,{active:!0});let l=await Lf(this.app,e.vaultPath);l&&(await Ff(l),Bo(l,s.startOffset))}async updateReadingMapScoringSettings(e={}){this.trackerSettings.readingMapWeights=qs({...this.trackerSettings.readingMapWeights,...e}),this.readingMapScoringContexts.clear(),await this.savePluginData(),await this.renderReadingMapViews()}get trackerSettings(){return this.data.settings}applyColorVariables(e){for(let[i,r]of Object.entries(ap(this.trackerSettings.colors)))e.style.setProperty(i,r)}get vaultBasePath(){let e=this.app.vault.adapter;if(e instanceof j.FileSystemAdapter)return pn(e.getBasePath());let i=e;return i.getBasePath?pn(i.getBasePath()):null}getReadableLeaf(){return this.app.workspace.getMostRecentLeaf(this.app.workspace.rootSplit)}getReadableMarkdownView(){var i,r;let e=(r=(i=this.getReadableLeaf())==null?void 0:i.view)!=null?r:null;return e instanceof j.MarkdownView?e:null}getActiveMarkdownView(){return this.getReadableMarkdownView()}getActiveMarkdownFile(){var r;let e=this.getReadableMarkdownView(),i=(r=e==null?void 0:e.file)!=null?r:null;return i instanceof j.TFile&&i.extension==="md"?i:null}getMarkdownFileForUserAction(){let e=this.getActiveMarkdownFile();if(e)return e;let i=this.app.workspace.getActiveFile();return i instanceof j.TFile&&i.extension==="md"?i:null}getActiveWorkspaceContext(){var r,s;let e=(s=(r=this.getReadableLeaf())==null?void 0:r.view)!=null?s:null;if(e instanceof bs)return{kind:"reading-tracker"};if(e instanceof j.MarkdownView){let o=e.file;if(!(o instanceof j.TFile)||o.extension!=="md")return{kind:"non-file"};let a=this.absolutePathForVaultPath(o.path),l=a?this.findBookByAbsolutePath(a):null;return l?{kind:"tracked-book",book:l,file:o,view:e}:{kind:"untracked-markdown",file:o,view:e}}let i=e==null?void 0:e.file;return i instanceof j.TFile?{kind:"other-file",file:i}:{kind:"non-file"}}absolutePathForVaultPath(e){let i=this.vaultBasePath;return i?pn(`${i}\\${e.replace(/\//g,"\\")}`):null}vaultPathForAbsolutePath(e){let i=this.vaultBasePath;if(!i)return null;let r=pn(e),s=ys(i),o=ys(r);return o===s||!o.startsWith(`${s}\\`)?null:(0,j.normalizePath)(r.slice(i.length+1).replace(/\\/g,"/"))}statusForBook(e){let i=pn(e.absolutePath),r=this.vaultPathForAbsolutePath(i),s=!!r;return{exists:s&&r?this.app.vault.getAbstractFileByPath(r)instanceof j.TFile:!1,inVault:s,vaultPath:r}}findBookByAbsolutePath(e){var r;let i=ys(e);return(r=this.data.books.find(s=>ys(s.absolutePath)===i))!=null?r:null}getCurrentBookIndex(){let e=this.getActiveMarkdownFile();if(!e)return null;let i=this.absolutePathForVaultPath(e.path);return i?this.findBookByAbsolutePath(i):null}getLockedCurrentBook(){var e;return this.currentBookId&&(e=this.data.books.find(i=>i.id===this.currentBookId))!=null?e:null}getActiveMarkdownBook(){var e;return this.activeMarkdownBookId&&(e=this.data.books.find(i=>i.id===this.activeMarkdownBookId))!=null?e:null}async addCurrentFileToBookshelf(){let e=this.getMarkdownFileForUserAction();if(!e){new j.Notice("\u8BF7\u5148\u6253\u5F00\u4E00\u4EFD Markdown \u6587\u4EF6\u3002");return}let i=this.absolutePathForVaultPath(e.path);if(!i){new j.Notice("\u5F53\u524D\u5E93\u6CA1\u6709\u66B4\u9732\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u8DEF\u5F84\u3002");return}await this.addBookByPath(i,{scanMode:"baseline"})}openPathModal(e){var i;new Wc(this.app,{title:e?"\u4FEE\u6539\u4E66\u672C\u672C\u5730\u8DEF\u5F84":"\u901A\u8FC7\u672C\u5730\u8DEF\u5F84\u6DFB\u52A0\u4E66\u672C",initialPath:(i=e==null?void 0:e.absolutePath)!=null?i:"",submitLabel:e?"\u4FDD\u5B58\u8DEF\u5F84":"\u6DFB\u52A0\u4E66\u672C",onSubmit:async r=>{e?await this.rebindBook(e.id,r):await this.addBookByPath(r,{scanMode:"baseline"})}}).open()}async addBookByPath(e,i){let r=pn(e);if(!r.toLowerCase().endsWith(".md")){new j.Notice("\u53EA\u80FD\u8DDF\u8E2A Markdown \u6587\u4EF6\u3002");return}if(this.findBookByAbsolutePath(r)){new j.Notice("\u8FD9\u672C\u4E66\u5DF2\u7ECF\u5728\u4E66\u67B6\u4E2D\u3002");return}let o=new Date().toISOString(),a=this.statusForBook({id:"",absolutePath:r,vaultPath:null,title:"",addedAt:o,updatedAt:o,lastOpenedAt:null}),l={id:Vo(),absolutePath:r,vaultPath:a.vaultPath,title:Uf(r),addedAt:o,updatedAt:o,lastOpenedAt:null};this.data.books.push(l),await this.savePluginData();let c=Nf(l);this.records.set(l.id,c),this.markRecordDirty(l.id),a.exists&&a.inVault?await this.scanBook(l,i.scanMode):await this.flushDirtyRecords(),await this.handleActiveFile(),new j.Notice(`\u5DF2\u52A0\u5165\u4E66\u67B6\uFF1A${l.title}`)}async rebindBook(e,i){let r=this.data.books.find(c=>c.id===e);if(!r)return;let s=pn(i);if(!s.toLowerCase().endsWith(".md")){new j.Notice("\u53EA\u80FD\u8DDF\u8E2A Markdown \u6587\u4EF6\u3002");return}if(this.data.books.find(c=>c.id!==e&&ys(c.absolutePath)===ys(s))){new j.Notice("\u53E6\u4E00\u672C\u6587\u6863\u5DF2\u7ECF\u7ED1\u5B9A\u4E86\u8FD9\u4E2A\u8DEF\u5F84\u3002");return}let a=this.statusForBook({...r,absolutePath:s});r.absolutePath=s,r.vaultPath=a.vaultPath,r.title=Uf(s),r.updatedAt=new Date().toISOString();let l=await this.getRecord(r);l.absolutePath=r.absolutePath,l.vaultPath=r.vaultPath,l.title=r.title,this.markRecordDirty(r.id),await this.savePluginData(),a.exists&&a.inVault?await this.scanBook(r,"capture"):await this.flushDirtyRecords(),await this.handleActiveFile(),new j.Notice(`\u5DF2\u66F4\u65B0\u4E66\u672C\u8DEF\u5F84\uFF1A${r.title}`)}async removeBook(e){let i=this.data.books.find(r=>r.id===e);this.data.books=this.data.books.filter(r=>r.id!==e),this.records.delete(e),this.dirtyRecords.delete(e),await this.savePluginData(),await this.renderViews(),i&&new j.Notice(`\u5DF2\u4ECE\u4E66\u67B6\u79FB\u9664\uFF1A${i.title}`)}async continueLastBook(){let e=[...this.data.books].filter(i=>i.lastOpenedAt).sort((i,r)=>String(r.lastOpenedAt).localeCompare(String(i.lastOpenedAt)));for(let i of e)if(await this.continueBook(i))return;new j.Notice("\u6CA1\u6709\u53EF\u7EE7\u7EED\u9605\u8BFB\u7684\u4E66\u672C\u3002")}async openBook(e){let i=this.statusForBook(e);if(!i.exists)return new j.Notice(`\u4E66\u672C\u7F3A\u5931\uFF1A${e.absolutePath}`),!1;if(!i.vaultPath)return new j.Notice("\u8FD9\u672C\u4E66\u4E0D\u5728\u5F53\u524D Obsidian \u5E93\u4E2D\uFF0C\u65E0\u6CD5\u76F4\u63A5\u6253\u5F00\u3002"),!1;let r=this.app.vault.getAbstractFileByPath(i.vaultPath);return r instanceof j.TFile?(await this.app.workspace.getLeaf(!0).openFile(r),!0):(new j.Notice(`\u5E93\u5185\u6587\u4EF6\u4E0D\u5B58\u5728\uFF1A${i.vaultPath}`),!1)}async continueBook(e){let i=await this.getRecord(e),r=null;this.restoreInProgressBookIds.add(e.id),this.markRestoreOpening(e.id);try{if(!await this.openBook(e))return!1;r=await Lf(this.app,e.vaultPath),r&&await this.restoreBookPosition(r,i)}finally{this.restoreInProgressBookIds.delete(e.id),this.markRestoreSettling(e.id)}return r&&await this.captureProgress(),!0}async toggleTracking(){this.trackingPaused=!this.trackingPaused,this.trackingPaused?await this.endActiveSession():this.markActivity(),this.updateStatusBar(),await this.renderViews(),new j.Notice(this.trackingPaused?"\u81EA\u52A8\u8BA1\u65F6\u5DF2\u6682\u505C":"\u81EA\u52A8\u8BA1\u65F6\u5DF2\u7EE7\u7EED")}markActivity(){this.lastActivityAt=Date.now()}async handleActiveFile(){let e=this.getActiveWorkspaceContext();if(e.kind==="reading-tracker"){this.updateStatusBar(),await this.refreshViews();return}if(e.kind==="non-file"||e.kind==="untracked-markdown"||e.kind==="other-file"){this.activeMarkdownBookId&&await this.endActiveSession(),this.activeMarkdownBookId=null,this.lastAutomaticRestoreEntryKey=null,this.updateStatusBar(),await this.renderViews();return}let i=e.book,r=this.activeMarkdownBookId!==i.id||this.currentBookId!==i.id,s=this.statusForBook(i);if(!s.exists||!s.inVault){r&&await this.endActiveSession(),this.activeMarkdownBookId=null,this.lastAutomaticRestoreEntryKey=null,this.updateStatusBar(),await this.renderViews();return}let o=eR(i,s.vaultPath),a=this.restoreEntryInFlightKeys.has(o),l=r&&this.lastAutomaticRestoreEntryKey!==o&&!this.restoreInProgressBookIds.has(i.id)&&!a;l?(this.restoreEntryInFlightKeys.add(o),this.markRestoreOpening(i.id)):a&&this.markRestoreOpening(i.id),r&&this.lastAutomaticRestoreEntryKey!==o&&(this.lastAutomaticRestoreEntryKey=o),r&&await this.endActiveSession();let c=i.vaultPath!==s.vaultPath;(r||c)&&(i.lastOpenedAt=new Date().toISOString(),i.vaultPath=s.vaultPath),this.currentBookId=i.id,this.activeMarkdownBookId=i.id,r&&this.markActivity(),l&&this.restoreInProgressBookIds.add(i.id);try{if((r||c)&&(await this.savePluginData(),await this.scanBook(i,"baseline")),l){let h=await this.getRecord(i);await this.restoreBookPosition(e.view,h)}}finally{l&&(this.restoreInProgressBookIds.delete(i.id),this.restoreEntryInFlightKeys.delete(o),this.markRestoreSettling(i.id))}await this.captureProgress(),this.updateStatusBar(),r?await this.renderViews():await this.refreshViews()}async tick(){if(!this.tickBusy){this.tickBusy=!0;try{let e=Date.now(),i=Math.max(0,e-this.lastTickAt);if(this.lastTickAt=e,!this.canAccumulate(e)||!this.currentBookId){await this.endActiveSession(),this.updateStatusBar(),await this.refreshViews();return}let r=this.data.books.find(a=>a.id===this.currentBookId);if(!r)return;let s=await this.getRecord(r),o=this.getOrStartSession(s);o.durationMs+=i,o.endedAt=new Date(e).toISOString(),s.totalReadMs+=i,this.markRecordDirty(s.id),await this.captureProgress(),e-this.lastFlushAt>5e3&&(await this.flushDirtyRecords(),this.lastFlushAt=e),this.updateStatusBar(),e-this.lastRenderAt>1e3&&(this.lastRenderAt=e,await this.refreshViews())}finally{this.tickBusy=!1}}}canAccumulate(e){if(this.trackingPaused||!this.currentBookId)return!1;let i=this.getActiveWorkspaceContext();return!(document.hidden||!document.hasFocus()||e-this.lastActivityAt>this.trackerSettings.idleThresholdMs||i.kind!=="tracked-book"||i.book.id!==this.currentBookId||this.activeMarkdownBookId!==this.currentBookId)}getOrStartSession(e){if(this.activeSessionId){let o=e.sessions.find(a=>a.id===this.activeSessionId);if(o)return o}let i=new Date().toISOString(),r=NR(e,new Date(i));if(r)return this.activeSessionId=r.id,r;let s={id:Vo(),startedAt:i,endedAt:i,durationMs:0};return e.sessions.push(s),this.activeSessionId=s.id,s}async endActiveSession(){if(!this.activeSessionId||!this.currentBookId){this.activeSessionId=null;return}let e=this.data.books.find(s=>s.id===this.currentBookId);if(!e){this.activeSessionId=null;return}let i=await this.getRecord(e),r=i.sessions.find(s=>s.id===this.activeSessionId);r&&(r.endedAt=new Date().toISOString(),Y0(i)&&this.markRecordDirty(i.id),this.markRecordDirty(i.id)),this.activeSessionId=null,await this.flushDirtyRecords()}scheduleContentScan(){let e=this.activeMarkdownBookId?this.data.books.find(i=>i.id===this.activeMarkdownBookId):null;e&&(this.contentScanTimer!==null&&window.clearTimeout(this.contentScanTimer),this.contentScanTimer=window.setTimeout(()=>{this.contentScanTimer=null,this.scanBook(e,"baseline")},500))}async scanBook(e,i){var m;let r=this.statusForBook(e);if(!r.exists||!r.inVault||!r.vaultPath)return;let s=this.app.vault.getAbstractFileByPath(r.vaultPath);if(!(s instanceof j.TFile))return;let o=this.getActiveMarkdownView(),a=((m=o==null?void 0:o.file)==null?void 0:m.path)===r.vaultPath?o.editor.getValue():await this.app.vault.cachedRead(s),l=lR(a,this.trackerSettings),c=await this.getRecord(e),h=i==="baseline"&&!c.hasScannedContent,u=rp(c.hasScannedCallouts,this.trackerSettings.detectCallouts),d=new Date().toISOString(),f=!1;c.absolutePath=e.absolutePath,c.vaultPath=r.vaultPath,c.title=e.title;let g=new Set;for(let p of l){let v=uR(c.excerpts.filter(w=>!g.has(w.id)),p);v?(g.add(v.id),(v.text!==p.text||v.commentaryText!==p.commentaryText||v.calloutType!==p.calloutType||v.calloutTitle!==p.calloutTitle||v.calloutFold!==p.calloutFold||v.position!==p.position||v.contextBefore!==p.contextBefore||v.contextAfter!==p.contextAfter)&&(v.text=p.text,v.commentaryText=p.commentaryText,v.calloutType=p.calloutType,v.calloutTitle=p.calloutTitle,v.calloutFold=p.calloutFold,v.position=p.position,v.line=p.line,v.contextBefore=p.contextBefore,v.contextAfter=p.contextAfter,v.updatedAt=d,f=!0)):(c.excerpts.push({id:Vo(),type:p.type,sourceSyntax:p.sourceSyntax,text:p.text,commentaryText:p.commentaryText,calloutType:p.calloutType,calloutTitle:p.calloutTitle,calloutFold:p.calloutFold,capturedAt:d,updatedAt:d,baseline:p.type==="callout"?u.baseline:h,position:p.position,line:p.line,contextBefore:p.contextBefore,contextAfter:p.contextAfter}),g.add(c.excerpts[c.excerpts.length-1].id),f=!0)}let y=c.excerpts.length;c.excerpts=c.excerpts.filter(p=>BR(p,this.trackerSettings)?g.has(p.id):!0),c.excerpts.length!==y&&(f=!0),c.hasScannedContent||(c.hasScannedContent=!0,f=!0),u.markScanned&&(c.hasScannedCallouts=!0,f=!0),f&&(Bc(c),this.markRecordDirty(c.id),await this.flushDirtyRecords(),await this.renderViews(),this.updateStatusBar())}async captureProgress(){var d;if(!this.activeMarkdownBookId)return;let e=this.getActiveWorkspaceContext();if(e.kind!=="tracked-book"||e.book.id!==this.activeMarkdownBookId)return;let i=e.book;if(!i.vaultPath)return;let r=Date.now();if(this.isRestoreSettling(i.id,r))return;let s=e.view,o=sR(s);if(!o)return;let a=o.progressPercent,l=await this.getRecord(i);if(vR(l,o,r))return;let c=!this.restoreInProgressBookIds.has(i.id)&&this.canAccumulate(r),h=null;if(c){let f=pR(s,a);h=(d=f==null?void 0:f.offset)!=null?d:Math.round(s.editor.getValue().length*Ee(a,0,100)/100);let g=yR(s,o,f);_R(l,g,r)&&this.markRecordDirty(l.id),f&&xR(l.lastReadingAnchor,f)&&(l.lastReadingAnchor=f,this.markRecordDirty(l.id))}h!==null&&await this.observeReadingMapExposure(i,s.editor.getValue(),h,r);let u=this.recordProgressSample(l.id,a,r);u!==null&&(Math.abs(l.lastStableProgressPercent-u)>=.25||!l.lastStableProgressAt)&&(l.lastStableProgressPercent=u,l.lastStableProgressAt=new Date().toISOString(),this.markRecordDirty(l.id)),Math.abs(l.progressPercent-a)>=.25&&(l.progressPercent=a,this.markRecordDirty(l.id))}async restoreBookPosition(e,i){this.markRestoreOpening(i.id);try{await Ff(e),await Ss(60);let r=e.editor.getValue(),s=bR(r,"source",i);if(s.kind==="anchor"&&Bo(e,s.offset))return await Ss(120),Bo(e,s.offset),this.recordProgressSample(i.id,s.progressPercent,Date.now()),!0;let o=rR(r,s.progressPercent);return Bo(e,o)?(await Ss(120),Bo(e,o),this.recordProgressSample(i.id,s.progressPercent,Date.now()),!0):await iR(e,s)?(this.recordProgressSample(i.id,s.progressPercent,Date.now()),!0):!1}finally{this.markRestoreSettling(i.id)}}markRestoreOpening(e){this.restoreSettlingUntilByBookId.set(e,Date.now()+Y1)}markRestoreSettling(e){this.restoreSettlingUntilByBookId.set(e,Date.now()+$1)}isRestoreSettling(e,i){let r=this.restoreSettlingUntilByBookId.get(e);return r?i>=r?(this.restoreSettlingUntilByBookId.delete(e),!1):!0:!1}recordProgressSample(e,i,r){var u;let s=(u=this.progressSamples.get(e))!=null?u:[];s.push({at:r,progress:i});let o=s.filter(d=>r-d.at<=G1);this.progressSamples.set(e,o);let a=o.filter(d=>r-d.at<=V0);if(a.length<2||a[a.length-1].at-a[0].at<V0)return null;let c=Math.min(...a.map(d=>d.progress));return Math.max(...a.map(d=>d.progress))-c>W1?null:a[a.length-1].progress}async getRecord(e){let i=this.records.get(e.id);if(i)return i;let r=this.recordPath(e.id),s=null,o=!1;if(await this.app.vault.adapter.exists(r))try{let a=JSON.parse(await this.app.vault.adapter.read(r)),l=CR(a,e);s=l.record,o=l.changed}catch(a){console.error("Failed to read book record",r,a),this.unreadableRecords.add(e.id)}return s||(s=Nf(e)),s.absolutePath=e.absolutePath,s.vaultPath=e.vaultPath,s.title=e.title,Y0(s)&&(o=!0),Bc(s),this.records.set(e.id,s),o&&!this.unreadableRecords.has(e.id)&&this.markRecordDirty(e.id),s}async normalizeStoredRecords(){for(let e of this.data.books)await this.getRecord(e);await this.flushDirtyRecords()}markRecordDirty(e){this.dirtyRecords.add(e)}async flushDirtyRecords(){if(this.dirtyRecords.size===0)return;await this.ensureVaultFolder(`${bf}/books`);let e=Array.from(this.dirtyRecords);this.dirtyRecords.clear();for(let i of e){if(this.unreadableRecords.has(i))continue;let r=this.records.get(i);r&&(Bc(r),await this.app.vault.adapter.write(this.recordPath(i),JSON.stringify(r,null,2)))}}recordPath(e){return(0,j.normalizePath)(`${bf}/books/${e}.json`)}async ensureVaultFolder(e){let r=qR(e).split("/").filter(Boolean),s="";for(let o of r)s=s?`${s}/${o}`:o,await this.app.vault.adapter.exists(s)||await this.app.vault.adapter.mkdir(s)}updateStatusBar(){if(!this.statusBarEl)return;let e=this.getTrackingState();if(e==="paused"){this.statusBarEl.setText("\u9605\u8BFB\u7EDF\u8BA1\u5DF2\u6682\u505C");return}if(e==="idle"){this.statusBarEl.setText("\u9605\u8BFB\u7EDF\u8BA1\u7A7A\u95F2");return}let i=this.data.books.find(o=>o.id===this.currentBookId),r=i?this.records.get(i.id):null;if(!i||!r){this.statusBarEl.setText("\u9605\u8BFB\u7EDF\u8BA1\u8F7D\u5165\u4E2D");return}let s=Xi(r,br()).reduce((o,a)=>o+a.durationMs,0);this.statusBarEl.setText(`${ey(e)} \xB7 ${i.title} \xB7 \u4ECA\u65E5 ${Pe(s)} \xB7 \u7D2F\u8BA1 ${Pe(r.totalReadMs)}`)}getTrackingState(){return this.trackingPaused?"paused":this.currentBookId?this.canAccumulate(Date.now())?"tracking":"locked":"idle"}async renderViews(){for(let e of this.app.workspace.getLeavesOfType(_s))e.view instanceof bs&&await e.view.render();await this.renderReadingMapViews()}async refreshViews(){for(let e of this.app.workspace.getLeavesOfType(_s))e.view instanceof bs&&await e.view.refreshDynamic();await this.renderReadingMapViews()}async todayGoalProgress(){let e=br(),i=0,r=[];for(let s of this.data.books){let o=await this.getRecord(s);r.push(o),i+=Xi(o,e).reduce((a,l)=>a+l.durationMs,0)}return{readMs:i,goalMs:this.trackerSettings.dailyGoalMinutes*6e4,streak:Of(r)}}},bs=class extends j.ItemView{constructor(e,i){super(e);this.plugin=i;bt(this,"activeSection","current");bt(this,"statsScope","today")}getViewType(){return _s}getDisplayText(){return"ReadMark"}getIcon(){return Uc}async onOpen(){await this.render()}async render(){this.contentEl.empty(),this.contentEl.addClass("mrt-view"),this.plugin.applyColorVariables(this.contentEl),this.renderToolbar(this.contentEl),this.renderMainNav(this.contentEl),this.activeSection==="current"?await this.renderCurrentBookSection(this.contentEl):this.activeSection==="bookshelf"?await this.renderBookshelfSection(this.contentEl):await this.renderStatsSection(this.contentEl)}async refreshDynamic(){var a;let e=this.plugin.getTrackingState();if(this.contentEl.querySelectorAll("[data-mrt-tracking-state]").forEach(l=>{l.setText(ey(e)),l.toggleClass("is-tracking",e==="tracking"),l.toggleClass("is-locked",e==="locked"),l.toggleClass("is-paused",e==="paused"),l.toggleClass("is-idle",e==="idle")}),this.activeSection==="stats"){await this.refreshStatsDynamic();return}if(this.activeSection!=="current")return;let i=(a=this.plugin.getActiveMarkdownBook())!=null?a:this.plugin.getLockedCurrentBook();if(!i)return;let r=await this.plugin.getRecord(i),s=Xi(r,br()).reduce((l,c)=>l+c.durationMs,0);this.updateDynamicText("today",Pe(s)),this.updateDynamicText("total",Pe(r.totalReadMs)),this.updateDynamicText("progress",hi(r.progressPercent)),this.updateDynamicText("excerpts",String(Tf(r))),this.updateDynamicText("progress-label",`\u9605\u8BFB\u8FDB\u5EA6 \xB7 ${hi(r.progressPercent)}`);let o=this.contentEl.querySelector("[data-mrt-dynamic='progress-fill']");o&&(o.style.width=`${Ee(r.progressPercent,0,100)}%`)}async refreshStatsDynamic(){if(this.statsScope==="today"){let i=await this.getBookPairs(),r=this.getTodayStatsValues(i);this.updateStatsValues(r);return}if(this.statsScope==="book"){let i=await this.getCurrentBookPair();if(!i)return;this.updateStatsValues(this.getCurrentBookStatsValues(i));return}let e=await this.getBookPairs();this.updateStatsValues(this.getAllStatsValues(e))}updateStatsValues(e){for(let[i,r]of Object.entries(e))this.updateDynamicText(i,r)}updateDynamicText(e,i){this.contentEl.querySelectorAll(`[data-mrt-dynamic='${e}']`).forEach(r=>r.setText(i))}renderToolbar(e){let r=e.createDiv({cls:"mrt-app-header"}).createDiv({cls:"mrt-title-row"}),s=r.createSpan({cls:"mrt-title-icon"});(0,j.setIcon)(s,Uc),this.plugin.getTrackingState()==="tracking"&&s.addClass("is-tracking"),r.createEl("h3",{text:"ReadMark",cls:"mrt-heading"})}renderMainNav(e){let i=e.createDiv({cls:"mrt-segmented mrt-section"});this.addMainSegment(i,"current","\u5F53\u524D\u4E66\u672C"),this.addMainSegment(i,"bookshelf","\u4E66\u67B6"),this.addMainSegment(i,"stats","\u7EDF\u8BA1")}addMainSegment(e,i,r){e.createEl("button",{text:r,cls:i===this.activeSection?"mrt-segment is-active":"mrt-segment"}).addEventListener("click",()=>{this.activeSection=i,this.render()})}addStatsSegment(e,i,r){e.createEl("button",{text:r,cls:i===this.statsScope?"mrt-segment is-active":"mrt-segment"}).addEventListener("click",()=>{this.statsScope=i,this.render()})}async renderCurrentBookSection(e){let i=e.createDiv({cls:"mrt-panel mrt-current-section"});i.createEl("h4",{text:"\u5F53\u524D\u4E66\u672C",cls:"mrt-heading"});let r=this.plugin.getActiveMarkdownFile(),s=r?this.plugin.absolutePathForVaultPath(r.path):null,o=s?this.plugin.findBookByAbsolutePath(s):null,a=o!=null?o:r?null:this.plugin.getLockedCurrentBook();if(!a){i.createDiv({text:r?"\u8FD9\u4EFD\u6587\u4EF6\u8FD8\u4E0D\u5728\u4E66\u67B6\u4E2D\u3002":"\u8FD8\u6CA1\u6709\u9501\u5B9A\u5F53\u524D\u4E66\u672C\u3002\u8BF7\u5148\u6253\u5F00\u4E66\u67B6\u4E2D\u7684 Markdown\u3002",cls:"mrt-empty"}),r&&i.createDiv({text:r.path,cls:"mrt-path"}),i.createDiv({cls:"mrt-actions"}).createEl("button",{text:"\u52A0\u5165\u5F53\u524D\u6587\u4EF6"}).addEventListener("click",()=>void this.plugin.addCurrentFileToBookshelf());return}let l=await this.plugin.getRecord(a),c=i.createDiv({cls:"mrt-current-hero"}),h=c.createDiv({cls:"mrt-hero-top"});h.createDiv({text:a.title,cls:"mrt-title"});let u=this.plugin.getTrackingState();if(h.createDiv({cls:"mrt-status-pill",attr:{"data-mrt-tracking-state":u}}).createSpan({text:j1(u),cls:"mrt-status-label"}),c.createDiv({text:Oo(a),cls:"mrt-path"}),r&&!o&&c.createDiv({cls:"mrt-metrics"}).createSpan({text:"\u5F53\u524D\u6D3B\u52A8\u6587\u4EF6\u672A\u52A0\u5165\u4E66\u67B6",cls:"mrt-pill mrt-pill-warning"}),this.renderMetricGrid(i,[["\u4ECA\u65E5",Pe(Xi(l,br()).reduce((f,g)=>f+g.durationMs,0)),"today"],["\u603B\u65F6\u957F",Pe(l.totalReadMs),"total"],["\u8FDB\u5EA6",hi(l.progressPercent),"progress"],["\u6458\u5F55",String(Tf(l)),"excerpts"]]),this.renderProgressBar(i,l.progressPercent,"\u9605\u8BFB\u8FDB\u5EA6","progress"),this.renderExcerptTypeChart(i,Bf(l)),this.plugin.trackerSettings.readingMapLabsEnabled){let f=i.createDiv({cls:"mrt-reading-map-entry"});f.createDiv({text:"\u4E66\u672C\u4E16\u754C",cls:"mrt-module-title"}),f.createDiv({text:"\u5BFC\u51FA\u4EFB\u52A1\u3001\u5BFC\u5165\u5DF2\u9A8C\u8BC1\u7ED3\u679C\u4E0E\u67E5\u770B\u5F53\u524D\u72B6\u6001\u3002",cls:"mrt-muted"}),f.createDiv({cls:"mrt-actions"}).createEl("button",{text:"\u6253\u5F00\u4E66\u672C\u4E16\u754C"}).addEventListener("click",()=>void this.plugin.activateReadingMapView())}this.renderExcerptFeed(i,a,l,"\u672C\u4E66\u5168\u90E8\u6458\u5F55")}async renderBookshelfSection(e){let i=e.createDiv({cls:"mrt-panel"});if(i.createEl("h4",{text:"\u4E66\u67B6",cls:"mrt-heading"}),this.plugin.data.books.length===0){i.createDiv({text:"\u8FD8\u6CA1\u6709\u4E66\u76EE\u3002\u4F60\u53EF\u4EE5\u52A0\u5165\u5F53\u524D Markdown \u6587\u4EF6\uFF0C\u6216\u8005\u7C98\u8D34\u672C\u5730\u7EDD\u5BF9\u8DEF\u5F84\u3002",cls:"mrt-empty"});let s=i.createDiv({cls:"mrt-actions"});s.createEl("button",{text:"\u52A0\u5165\u5F53\u524D\u6587\u4EF6"}).addEventListener("click",()=>void this.plugin.addCurrentFileToBookshelf()),s.createEl("button",{text:"\u6DFB\u52A0\u672C\u5730\u8DEF\u5F84"}).addEventListener("click",()=>this.plugin.openPathModal());return}await this.renderRecent(e);for(let s of this.plugin.data.books){let o=this.plugin.statusForBook(s),a=await this.plugin.getRecord(s),l=i.createDiv({cls:"mrt-card"});l.createDiv({text:s.title,cls:"mrt-title"}),l.createDiv({text:Oo(s),cls:"mrt-path"});let c=l.createDiv({cls:"mrt-metrics"});c.createSpan({text:o.exists?"\u53EF\u7528":"\u7F3A\u5931",cls:o.exists?"mrt-pill":"mrt-pill mrt-pill-error"}),c.createSpan({text:o.inVault?"\u5E93\u5185":"\u5E93\u5916",cls:"mrt-pill"}),c.createSpan({text:`${Tf(a)} \u6458\u5F55`,cls:"mrt-pill"}),c.createSpan({text:"",cls:"mrt-pill is-duration"}).createSpan({text:Pe(a.totalReadMs),cls:"mrt-pill-duration-value"});let u=l.createDiv({cls:"mrt-actions"});u.createEl("button",{text:"\u6253\u5F00"}).addEventListener("click",()=>void this.plugin.continueBook(s)),u.createEl("button",{text:"\u6539\u8DEF\u5F84"}).addEventListener("click",()=>this.plugin.openPathModal(s)),u.createEl("button",{text:"\u79FB\u9664"}).addEventListener("click",()=>void this.plugin.removeBook(s.id))}let r=i.createDiv({cls:"mrt-actions"});r.createEl("button",{text:"\u52A0\u5165\u5F53\u524D\u6587\u4EF6"}).addEventListener("click",()=>void this.plugin.addCurrentFileToBookshelf()),r.createEl("button",{text:"\u6DFB\u52A0\u672C\u5730\u8DEF\u5F84"}).addEventListener("click",()=>this.plugin.openPathModal())}async renderRecent(e){let i=e.createDiv({cls:"mrt-section"});i.createEl("h4",{text:"\u7EE7\u7EED\u9605\u8BFB",cls:"mrt-heading"});let r=[...this.plugin.data.books].filter(s=>s.lastOpenedAt).sort((s,o)=>String(o.lastOpenedAt).localeCompare(String(s.lastOpenedAt))).slice(0,3);if(r.length===0){i.createDiv({text:"\u6682\u65E0\u6700\u8FD1\u9605\u8BFB\u7684\u4E66\u76EE\u3002",cls:"mrt-muted"});return}for(let s of r){let o=await this.plugin.getRecord(s),a=i.createDiv({cls:"mrt-card mrt-clickable"});a.createDiv({text:s.title,cls:"mrt-title"}),a.createDiv({text:Oo(s),cls:"mrt-path"});let l=a.createDiv({cls:"mrt-metrics"});l.createSpan({text:hi(o.progressPercent),cls:"mrt-pill"}),l.createSpan({text:Pe(o.totalReadMs),cls:"mrt-pill"}),a.addEventListener("click",()=>void this.plugin.continueBook(s))}}async renderStatsSection(e){let i=e.createDiv({cls:"mrt-panel"});i.createEl("h4",{text:"\u7EDF\u8BA1",cls:"mrt-heading"});let r=i.createDiv({cls:"mrt-segmented"});this.addStatsSegment(r,"today","\u5F53\u5929"),this.addStatsSegment(r,"book","\u5F53\u524D\u4E66"),this.addStatsSegment(r,"all","\u5168\u90E8"),this.statsScope==="today"?await this.renderTodayStats(i):this.statsScope==="book"?await this.renderCurrentBookStats(i):await this.renderAllStats(i)}async renderTodayStats(e){let i=await this.getBookPairs(),r=br(),s=i.map(d=>d.record),o=s.reduce((d,f)=>d+Xi(f,r).reduce((g,y)=>g+y.durationMs,0),0),a=s.reduce((d,f)=>d+Af(f,r).length,0),l=s.flatMap(d=>d.excerpts.filter(f=>!f.baseline&&wr(f.capturedAt,r))),c=s.filter(d=>Xi(d,r).length>0).length,h=this.plugin.trackerSettings.dailyGoalMinutes*6e4,u=e.createDiv({cls:"mrt-stat-grid"});this.renderDurationCard(u,"\u9605\u8BFB\u65F6\u957F/\u76EE\u6807\u65F6\u957F",Pe(o),Pe(h)),this.renderSimpleCard(u,"\u9605\u8BFB\u65F6\u6BB5",String(a),"stats-today-sessions"),this.renderSimpleCard(u,"\u4E66\u76EE",String(c),"stats-today-books"),this.renderSimpleCard(u,"\u6458\u5F55",String(l.length),"stats-today-excerpts"),this.renderProgressBar(e,h===0?100:o/h*100,"\u4ECA\u65E5\u76EE\u6807","stats-today-goal"),this.renderHourlyChart(e,s,r),this.renderTodayExcerpts(e,i)}renderSimpleCard(e,i,r,s){let o=e.createDiv({cls:"mrt-stat-card"}),a=o.createDiv({text:r,cls:"mrt-stat-value"});s&&a.setAttr("data-mrt-dynamic",s),o.createDiv({text:i,cls:"mrt-stat-label"})}renderDurationCard(e,i,r,s){let o=e.createDiv({cls:"mrt-stat-card mrt-stat-card-duration"}),a=o.createDiv({cls:"mrt-stat-value"});a.createSpan({text:r,cls:"mrt-stat-value-line"}),a.createSpan({text:"/",cls:"mrt-stat-value-sep"}),a.createSpan({text:s,cls:"mrt-stat-value-line"}),o.createDiv({text:i,cls:"mrt-stat-label"})}getTodayStatsValues(e){let i=br(),r=e.map(u=>u.record),s=r.reduce((u,d)=>u+Xi(d,i).reduce((f,g)=>f+g.durationMs,0),0),o=r.reduce((u,d)=>u+Af(d,i).length,0),a=r.flatMap(u=>u.excerpts.filter(d=>!d.baseline&&wr(d.capturedAt,i))),l=r.filter(u=>Xi(u,i).length>0).length,c=this.plugin.trackerSettings.dailyGoalMinutes*6e4,h=c===0?100:s/c*100;return this.updateProgressDynamic("stats-today-goal",h),{"stats-today-sessions":String(o),"stats-today-books":String(l),"stats-today-excerpts":String(a.length)}}getCurrentBookStatsValues(e){let{record:i}=e,r=new Set(i.sessions.filter(s=>s.durationMs>=Sr).map(s=>mn(new Date(s.startedAt))));return this.updateProgressDynamic("stats-book-progress",i.progressPercent),{"stats-book-total":Pe(i.totalReadMs),"stats-book-progress":hi(i.progressPercent),"stats-book-progress-label":`\u9605\u8BFB\u8FDB\u5EA6 \xB7 ${hi(i.progressPercent)}`,"stats-book-sessions":String(Oc(i).length),"stats-book-days":String(r.size)}}getAllStatsValues(e){let i=e.map(a=>a.record),r=i.reduce((a,l)=>a+l.totalReadMs,0),s=new Set(i.flatMap(a=>a.sessions.filter(l=>l.durationMs>=Sr).map(l=>mn(new Date(l.startedAt))))),o=Of(i);return{"stats-all-total":Pe(r),"stats-all-books":String(e.length),"stats-all-days":`${s.size}/${o}`}}updateProgressDynamic(e,i){var o,a;let r=this.contentEl.querySelector(`[data-mrt-dynamic='${e}-label']`);r&&r.setText(`${(a=(o=r.textContent)==null?void 0:o.split(" \xB7 ")[0])!=null?a:"\u8FDB\u5EA6"} \xB7 ${hi(i)}`);let s=this.contentEl.querySelector(`[data-mrt-dynamic='${e}-fill']`);s&&(s.style.width=`${Ee(i,0,100)}%`)}async renderCurrentBookStats(e){let i=await this.getCurrentBookPair();if(!i){e.createDiv({text:"\u5F53\u524D\u6587\u4EF6\u8FD8\u4E0D\u662F\u4E66\u67B6\u4E2D\u7684\u4E66\u76EE\u3002",cls:"mrt-muted"}),e.createEl("button",{text:"\u52A0\u5165\u5F53\u524D\u6587\u4EF6"}).addEventListener("click",()=>void this.plugin.addCurrentFileToBookshelf());return}let{book:r,record:s}=i;e.createDiv({text:r.title,cls:"mrt-title"}),e.createDiv({text:Oo(r),cls:"mrt-path"});let o=new Set(s.sessions.filter(a=>a.durationMs>=Sr).map(a=>mn(new Date(a.startedAt))));this.renderMetricGrid(e,[["\u603B\u65F6\u957F",Pe(s.totalReadMs),"stats-book-total"],["\u8FDB\u5EA6",hi(s.progressPercent),"stats-book-progress"],["\u9605\u8BFB\u65F6\u6BB5",String(Oc(s).length),"stats-book-sessions"],["\u6D3B\u8DC3\u5929\u6570",String(o.size),"stats-book-days"]]),this.renderProgressBar(e,s.progressPercent,"\u9605\u8BFB\u8FDB\u5EA6","stats-book-progress"),this.renderExcerptTypeChart(e,Bf(s)),this.renderRecentSessions(e,s)}async renderAllStats(e){let i=await this.getBookPairs(),r=i.map(l=>l.record),s=r.reduce((l,c)=>l+c.totalReadMs,0),o=new Set(r.flatMap(l=>l.sessions.filter(c=>c.durationMs>=Sr).map(c=>mn(new Date(c.startedAt))))),a=Of(r);this.renderMetricGrid(e,[["\u603B\u65F6\u957F",Pe(s),"stats-all-total"],["\u4E66\u76EE",String(i.length),"stats-all-books"],["\u6D3B\u8DC3\u5929\u6570/\u8FDE\u7EED\u5929\u6570",`${o.size}/${a}`,"stats-all-days"]]),this.renderExcerptTypeChart(e,LR(r)),this.renderMonthHeatmap(e,r)}async getBookPairs(){let e=[];for(let i of this.plugin.data.books)e.push({book:i,record:await this.plugin.getRecord(i),status:this.plugin.statusForBook(i)});return e}async getCurrentBookPair(){let e=this.plugin.getActiveMarkdownFile(),i=e?this.plugin.absolutePathForVaultPath(e.path):null,r=i?this.plugin.findBookByAbsolutePath(i):null;if(e&&!r)return null;let s=r!=null?r:this.plugin.getLockedCurrentBook();return s?{book:s,record:await this.plugin.getRecord(s),status:this.plugin.statusForBook(s)}:null}renderMetricGrid(e,i){let r=e.createDiv({cls:"mrt-stat-grid"});for(let[s,o,a]of i){let l=r.createDiv({cls:"mrt-stat-card"}),c=l.createDiv({text:o,cls:"mrt-stat-value"});a&&c.setAttr("data-mrt-dynamic",a),l.createDiv({text:s,cls:"mrt-stat-label"})}}renderProgressBar(e,i,r,s){let o=e.createDiv({cls:"mrt-progress-wrap"}),a=o.createDiv({text:`${r} \xB7 ${hi(i)}`,cls:"mrt-module-title"});s&&a.setAttr("data-mrt-dynamic",`${s}-label`);let c=o.createDiv({cls:"mrt-progress-track"}).createDiv({cls:"mrt-progress-fill"});s&&c.setAttr("data-mrt-dynamic",`${s}-fill`),c.style.width=`${Ee(i,0,100)}%`}renderExcerptTypeChart(e,i){let r=i.reduce((c,h)=>c+h.value,0),s=e.createDiv({cls:"mrt-type-card"});s.createDiv({text:"\u6458\u5F55\u7C7B\u578B",cls:"mrt-module-title"});let o=s.createDiv({cls:"mrt-type-body"}),a=o.createDiv({cls:r>0?"mrt-donut":"mrt-donut is-empty"});a.style.background=sy(i),a.createDiv({text:String(r),cls:"mrt-donut-center"});let l=o.createDiv({cls:"mrt-type-list"});for(let[c,h]of i.entries()){let u=l.createDiv({cls:"mrt-type-row"});u.createSpan({cls:`mrt-type-dot ${h.type?`type-${h.type}`:`type-${c}`}`}),u.createSpan({text:h.label,cls:"mrt-type-name"}),u.createSpan({text:String(h.value),cls:"mrt-type-count"})}}renderHourlyChart(e,i,r){let s=UR(i,r),o=Math.max(1,...s),a=e.createDiv({cls:"mrt-chart mrt-hourly-chart",attr:{"data-mrt-chart":"hourly"}});a.createDiv({text:"\u4ECA\u65E5\u65F6\u6BB5\u5206\u5E03",cls:"mrt-module-title"});let l=Math.max(...s);a.createDiv({text:l>0?`\u5CF0\u503C ${Pe(l)}/\u5C0F\u65F6`:"\u4ECA\u65E5\u6682\u65E0\u9605\u8BFB\u65F6\u6BB5",cls:"mrt-chart-meta"});let c=zR(s,o);a.appendChild(c),HR(c,s);let h=a.createDiv({cls:"mrt-hour-tooltip"});GR(a,c,h,s);let u=a.createDiv({cls:"mrt-hour-axis"});for(let d of["0","6","12","18","24"])u.createSpan({text:d})}renderMonthHeatmap(e,i){let r=WR(),s=r.map(u=>{let d=i.flatMap(g=>Af(g,u.key));return{ms:d.reduce((g,y)=>g+y.durationMs,0),sessions:d.length}}),o=Math.max(1,...s.map(u=>u.ms)),a=e.createDiv({cls:"mrt-chart"});a.createDiv({text:"\u672C\u6708\u70ED\u529B\u56FE",cls:"mrt-module-title"});let l=a.createDiv({cls:"mrt-month-weekdays"});for(let u of["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"])l.createSpan({text:u});let c=a.createDiv({cls:"mrt-month-heatmap"}),h=c.createDiv({cls:"mrt-month-tooltip"});for(let u=0;u<r[0].weekdayOffset;u+=1)c.createDiv({cls:"mrt-month-pad"});r.forEach((u,d)=>{let f=s[d],g=f.ms===0?0:Math.max(1,Math.ceil(f.ms/o*4)),y=c.createDiv({cls:`mrt-month-cell level-${g}`});y.createSpan({text:String(u.day),cls:"mrt-month-day"}),y.setAttr("title",`${u.key}: ${Pe(f.ms)}`),y.setAttr("data-day",u.key),y.setAttr("data-ms",String(f.ms)),y.setAttr("data-sessions",String(f.sessions));let m=()=>{let v=f.ms===0?"\u65E0\u9605\u8BFB":Pe(f.ms);h.setText(`${u.key} \xB7 ${f.sessions} \u6BB5 \xB7 ${v}`);let w=y.getBoundingClientRect(),b=c.getBoundingClientRect();h.style.left=`${w.left-b.left+w.width/2}px`,h.style.top=`${w.top-b.top-4}px`,h.addClass("is-visible")},p=()=>h.removeClass("is-visible");y.addEventListener("mouseenter",m),y.addEventListener("mouseleave",p)})}renderRecentSessions(e,i){let r=e.createEl("details",{cls:"mrt-details",attr:{open:"true"}});r.createEl("summary",{text:"\u6700\u8FD1\u9605\u8BFB\u65F6\u6BB5"});let s=Oc(i).sort((o,a)=>a.startedAt.localeCompare(o.startedAt)).slice(0,8);if(s.length===0){r.createDiv({text:"\u6682\u65E0\u9605\u8BFB\u65F6\u6BB5\u3002",cls:"mrt-muted"});return}for(let o of s){let a=r.createDiv({cls:"mrt-record-row"});a.createDiv({text:`${mn(new Date(o.startedAt))} ${Rf(o.startedAt)}`,cls:"mrt-record-time"}),a.createDiv({text:Pe(o.durationMs),cls:"mrt-record-duration"})}}renderExcerptFeed(e,i,r,s){let o=e.createDiv({cls:"mrt-excerpt-feed"});o.createDiv({text:s,cls:"mrt-subheading"});let a=[...r.excerpts].filter(l=>sp(l.type,l.baseline)).sort((l,c)=>c.capturedAt.localeCompare(l.capturedAt));if(a.length===0){let l=o.createDiv({cls:"mrt-empty mrt-empty-card"});l.createDiv({text:"\u8FD8\u6CA1\u6709\u65B0\u7684\u6458\u5F55\u3002"}),l.createDiv({text:"\u5728\u4E66\u4E2D\u4F7F\u7528 ==\u9AD8\u4EAE==\u3001**\u52A0\u7C97**\u3001%%\u6279\u6CE8%%\u3001\u70B9\u8BC4\u6216 > [!NOTE] \u6807\u6CE8\u5757\u540E\uFF0C\u8FD9\u91CC\u4F1A\u51FA\u73B0\u53EF\u56DE\u8DF3\u7684\u6458\u5F55\u5361\u7247\u3002",cls:"mrt-muted"});return}for(let l of a){let c=o.createDiv({cls:"mrt-excerpt mrt-clickable"});this.renderExcerptMeta(c,l,`${mn(new Date(l.capturedAt))} ${Rf(l.capturedAt)}`),this.renderExcerptBody(c,l),c.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),this.jumpToExcerpt(i,l)})}}async renderTodayExcerpts(e,i){let r=e.createEl("details",{cls:"mrt-details"});r.createEl("summary",{text:"\u4ECA\u65E5\u6458\u5F55"});let s=br(),o=!1;for(let a of i){let l=a.record.excerpts.filter(c=>!c.baseline&&wr(c.capturedAt,s));if(l.length!==0){o=!0,r.createDiv({text:a.book.title,cls:"mrt-subheading"});for(let c of l){let h=r.createDiv({cls:"mrt-excerpt mrt-clickable"});this.renderExcerptMeta(h,c,Rf(c.capturedAt)),this.renderExcerptBody(h,c),h.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this.jumpToExcerpt(a.book,c)})}}}o||r.createDiv({text:"\u4ECA\u5929\u8FD8\u6CA1\u6709\u6355\u6349\u5230\u6458\u5F55\u3002",cls:"mrt-muted"})}renderExcerptBody(e,i){var s;if(i.type==="callout"){let o=jc(i.calloutType),a=e.createDiv({cls:`mrt-callout-content tone-${o}`});i.calloutTitle&&a.createDiv({text:i.calloutTitle,cls:"mrt-callout-title"}),i.text&&a.createDiv({text:i.text,cls:"mrt-callout-text"});return}if(i.type!=="commentary"){e.createDiv({text:i.text,cls:`mrt-excerpt-text type-${i.type}`});return}let r=e.createDiv({cls:"mrt-excerpt-commentary"});r.createDiv({text:i.text,cls:"mrt-excerpt-text mrt-excerpt-source type-commentary-source"}),r.createDiv({text:(s=i.commentaryText)!=null?s:"",cls:"mrt-excerpt-text mrt-excerpt-comment type-commentary-comment"})}renderExcerptMeta(e,i,r){if(i.type!=="callout"){e.createDiv({text:`${tR(i.type)} \xB7 ${r}`,cls:"mrt-excerpt-type"});return}let s=jc(i.calloutType),o=e.createDiv({cls:"mrt-excerpt-type mrt-callout-meta"});o.createSpan({text:"\u6807\u6CE8 \xB7"}),o.createSpan({text:(i.calloutType||"callout").toUpperCase(),cls:`mrt-callout-badge tone-${s}`}),o.createSpan({text:`\xB7 ${r}`})}async jumpToExcerpt(e,i){var r,s;try{if(!await this.plugin.openBook(e))return;let o=await Lf(this.app,e.vaultPath);if(!o){new j.Notice("\u5DF2\u6253\u5F00\u4E66\u672C\uFF0C\u4F46\u7F16\u8F91\u5668\u5C1A\u672A\u5C31\u7EEA\u3002");return}await Ff(o),await Ss(60);let a=(s=(r=o.editor)==null?void 0:r.getValue)==null?void 0:s.call(r);if(typeof a!="string"){new j.Notice("\u5DF2\u6253\u5F00\u4E66\u672C\uFF0C\u4F46\u5F53\u524D\u89C6\u56FE\u65E0\u6CD5\u5B9A\u4F4D\u6458\u5F55\u3002");return}let l=dR(a,i);if(l<0||l>a.length){new j.Notice("\u5DF2\u6253\u5F00\u4E66\u672C\uFF0C\u4F46\u6CA1\u6709\u627E\u5230\u8FD9\u6761\u6458\u5F55\u7684\u539F\u6587\u3002");return}let c=o.editor.offsetToPos(l);o.editor.setCursor(c);try{o.editor.scrollIntoView({from:c,to:c},!0)}catch(h){console.warn("Failed to scroll to excerpt",h)}}catch(o){console.error("Failed to jump to excerpt",o),new j.Notice("\u5B9A\u4F4D\u6458\u5F55\u5931\u8D25\uFF0C\u4F46\u63D2\u4EF6\u5DF2\u907F\u514D\u4E2D\u65AD\u3002")}}},Hc=class extends j.ItemView{constructor(e,i){super(e);this.plugin=i;bt(this,"renderer",null);bt(this,"rendererOptions",{labels:!0,roads:!0,fog:!0,terrainHeight:1,lightIntensity:1});bt(this,"cameraState",null)}getViewType(){return vs}getDisplayText(){return"\u4E66\u672C\u4E16\u754C"}getIcon(){return"map"}async onOpen(){await this.render()}async onClose(){var e;(e=this.renderer)==null||e.dispose(),this.renderer=null}async render(){var d;if(this.renderer&&(this.cameraState=this.renderer.getCameraState()),(d=this.renderer)==null||d.dispose(),this.renderer=null,this.contentEl.empty(),this.contentEl.addClass("mrt-map-view"),this.plugin.applyColorVariables(this.contentEl),this.contentEl.createEl("h2",{text:"\u4E66\u672C\u4E16\u754C",cls:"mrt-map-title"}),!this.plugin.trackerSettings.readingMapLabsEnabled){this.contentEl.createDiv({text:"\u4E66\u672C\u4E16\u754C\u5C1A\u672A\u542F\u7528",cls:"mrt-map-status"}),this.contentEl.createEl("button",{text:"\u542F\u7528\u5E76\u914D\u7F6E",cls:"mod-cta"}).addEventListener("click",()=>{this.plugin.trackerSettings.readingMapLabsEnabled=!0,this.plugin.savePluginData().then(()=>this.plugin.openReadingMapSetup(()=>void this.render()))});return}let e=this.plugin.getReadingMapBook();if(!e){this.contentEl.createDiv({text:"\u8BF7\u5148\u6253\u5F00\u6216\u9501\u5B9A\u5F53\u524D\u4E66\u672C\u3002",cls:"mrt-map-status"});return}let i=this.plugin.readingMapStorageRoot,r=i?await Ta(i,e.id):null,s=r!=null&&r.revisionId?await this.plugin.getBookWorldRenderBundle(e):null;if(s){this.renderWorld(e,s);return}let o=await this.plugin.getReadingMapRunnerDoctor().catch(()=>null);if(!(o!=null&&o.doctor.apiKeyConfigured)){this.contentEl.createDiv({text:"Runner \u5C1A\u672A\u914D\u7F6E",cls:"mrt-map-status mrt-pill-warning"}),this.contentEl.createEl("button",{text:"\u914D\u7F6E Runner",cls:"mod-cta"}).addEventListener("click",()=>this.plugin.openReadingMapSetup(()=>void this.render()));return}this.contentEl.createDiv({text:e.title,cls:"mrt-map-book-title"}),this.contentEl.createDiv({text:Oo(e),cls:"mrt-path"}),this.contentEl.createDiv({cls:`mrt-map-status ${r?`is-${r.status}`:"is-empty"}`}).setText(r?Q1(r.status,r.message,r.runnerStage,r.runnerState):"\u5C1A\u65E0\u4E66\u672C\u4E16\u754C\u7ED3\u679C\u3002");let l=r!=null&&r.revisionId?await this.plugin.getBookWorldScores(e):null;if(l){let f=this.contentEl.createDiv({cls:"mrt-map-score-grid"});Mf(f,"\u4E16\u754C\u79EF\u5206",No(l.totalScore)),Mf(f,"\u5DF2\u8BFB\u8BED\u53E5",String(l.input.exposures.length)),Mf(f,"\u5DF2\u89E3\u9501\u89C2\u5FF5",String(Object.values(l.concepts).filter(g=>g>0).length))}let c=this.contentEl.createDiv({cls:"mrt-actions mrt-map-actions"});if((r==null?void 0:r.runnerState)==="running")c.createEl("button",{text:"\u53D6\u6D88",cls:"mod-warning"}).addEventListener("click",()=>void this.plugin.cancelActiveReadingMapJob());else{let f=(r==null?void 0:r.runnerState)==="interrupted"||(r==null?void 0:r.runnerState)==="awaiting-confirmation"?"\u7EE7\u7EED\u751F\u6210":(r==null?void 0:r.runnerState)==="failed"?"\u91CD\u8BD5":r!=null&&r.revisionId?"\u66F4\u65B0\u4E66\u672C\u4E16\u754C":"\u751F\u6210\u4E66\u672C\u4E16\u754C";c.createEl("button",{text:f,cls:"mod-cta"}).addEventListener("click",()=>void this.plugin.generateOrUpdateBookWorld((r==null?void 0:r.runnerState)!=="interrupted"&&(r==null?void 0:r.runnerState)!=="failed"&&(r==null?void 0:r.runnerState)!=="awaiting-confirmation"))}let h=this.contentEl.createEl("details",{cls:"mrt-map-advanced"});h.createEl("summary",{text:"\u9AD8\u7EA7\u64CD\u4F5C"});let u=h.createDiv({cls:"mrt-actions mrt-map-actions"});u.createEl("button",{text:"\u5BFC\u51FA\u4EFB\u52A1"}).addEventListener("click",()=>void this.plugin.exportCurrentBookReadingMapTask()),u.createEl("button",{text:"\u5BFC\u5165\u7ED3\u679C"}).addEventListener("click",()=>this.plugin.openReadingMapImportModal()),r&&u.createEl("button",{text:"\u5220\u9664\u5730\u56FE"}).addEventListener("click",()=>new Gc(this.app,()=>void this.plugin.deleteCurrentBookMapData()).open())}renderWorld(e,i){var y;this.contentEl.empty(),this.contentEl.removeClass("mrt-map-view"),this.contentEl.addClass("mrt-world-view");let r=this.contentEl.createDiv({cls:"mrt-world-shell"}),s=r.createDiv({cls:"mrt-world-canvas-host"}),o=r.createDiv({cls:"mrt-world-hover-card"});o.hide();let a=r.createDiv({cls:"mrt-world-detail-panel"});a.hide();let l=r.createDiv({cls:"mrt-world-controls"}),c=l.createDiv({cls:"mrt-world-control-header"}),h=c.createDiv();h.createDiv({text:e.title,cls:"mrt-world-control-title"}),h.createDiv({text:`${No(i.scores.totalScore)} \u5206 \xB7 ${i.scores.input.exposures.length} \u53E5`,cls:"mrt-world-control-meta"});let u=c.createEl("button",{cls:"clickable-icon",attr:{"aria-label":"\u91CD\u7F6E\u955C\u5934"}});(0,j.setIcon)(u,"focus"),u.addEventListener("click",()=>{var m;return(m=this.renderer)==null?void 0:m.resetCamera()}),this.addWorldToggle(l,"\u6807\u7B7E","labels"),this.addWorldToggle(l,"\u9053\u8DEF","roads"),this.addWorldToggle(l,"\u96FE","fog"),this.addWorldSlider(l,"\u5730\u5F62","terrainHeight",0,1.8,.1),this.addWorldSlider(l,"\u5149\u7167","lightIntensity",.35,1.7,.05),l.createDiv({cls:"mrt-world-control-actions"}).createEl("button",{text:"\u66F4\u65B0\u4E16\u754C"}).addEventListener("click",()=>void this.plugin.generateOrUpdateBookWorld(!0));let f=l.createEl("details",{cls:"mrt-map-advanced"});f.createEl("summary",{text:"\u7BA1\u7406"});let g=f.createDiv({cls:"mrt-world-control-actions"});g.createEl("button",{text:"\u91CD\u65B0\u5E03\u5C40"}).addEventListener("click",()=>void this.resetWorldLayout(e)),g.createEl("button",{text:"\u5220\u9664\u5730\u56FE"}).addEventListener("click",()=>new Gc(this.app,()=>void this.plugin.deleteCurrentBookMapData()).open());try{this.renderer=new Fc(s,i.rendererData,{onHover:(m,p)=>this.renderWorldHover(o,i,m,p),onSelect:m=>this.renderWorldDetail(a,e,i,m)}),this.renderer.setOptions(this.rendererOptions),this.cameraState&&this.renderer.setCameraState(this.cameraState)}catch(m){console.error("Book World WebGL renderer failed",m),s.empty(),s.createDiv({text:"\u5F53\u524D\u73AF\u5883\u65E0\u6CD5\u4F7F\u7528 WebGL\uFF0C\u5DF2\u5207\u6362\u4E3A\u89C2\u5FF5\u5217\u8868\u3002",cls:"mrt-map-status mrt-pill-warning"});for(let p of i.rendererData.revision.concepts.filter(v=>{var w;return((w=i.rendererData.scores[v.id])!=null?w:0)>0})){let v=s.createDiv({cls:"mrt-world-fallback-row"});v.createSpan({text:p.label}),v.createSpan({text:No((y=i.rendererData.scores[p.id])!=null?y:0),cls:"mrt-muted"})}}}addWorldToggle(e,i,r){let s=e.createEl("label",{cls:"mrt-world-control-row"});s.createSpan({text:i});let o=s.createEl("input",{type:"checkbox"});o.checked=this.rendererOptions[r],o.addEventListener("change",()=>{var a;this.rendererOptions[r]=o.checked,(a=this.renderer)==null||a.setOptions({[r]:o.checked})})}addWorldSlider(e,i,r,s,o,a){let l=e.createEl("label",{cls:"mrt-world-control-row"});l.createSpan({text:i});let c=l.createEl("input",{type:"range"});c.min=String(s),c.max=String(o),c.step=String(a),c.value=String(this.rendererOptions[r]),c.addEventListener("input",()=>{var h;this.rendererOptions[r]=Number(c.value),(h=this.renderer)==null||h.setOptions({[r]:Number(c.value)})})}renderWorldHover(e,i,r,s){var c,h;if(!r||!s){e.hide();return}let o=i.rendererData.revision.concepts.find(u=>u.id===r);if(!o)return;e.empty(),e.createDiv({text:o.label,cls:"mrt-world-hover-title"}),e.createDiv({text:`${No((c=i.rendererData.scores[o.id])!=null?c:0)} \u5206`,cls:"mrt-world-hover-score"});let a=((h=o.attributeIds)!=null?h:[]).map(u=>{var d;return(d=i.rendererData.revision.attributes.find(f=>f.id===u))==null?void 0:d.name}).filter(Boolean);a.length&&e.createDiv({text:a.join(" \xB7 "),cls:"mrt-world-hover-attributes"});for(let u of o.evidence.slice(0,3)){let d=i.rendererData.snapshot.sourceUnits.find(f=>f.id===u.sourceId);d&&e.createDiv({text:d.text,cls:"mrt-world-hover-evidence"})}let l=this.contentEl.getBoundingClientRect();e.style.left=`${Math.min(l.width-300,Math.max(12,s.x-l.left+16))}px`,e.style.top=`${Math.min(l.height-220,Math.max(12,s.y-l.top+16))}px`,e.show()}renderWorldDetail(e,i,r,s){var h;let o=r.rendererData.revision.concepts.find(u=>u.id===s);if(!o)return;e.empty();let a=e.createEl("button",{cls:"clickable-icon mrt-world-detail-close",attr:{"aria-label":"\u5173\u95ED"}});(0,j.setIcon)(a,"x"),a.addEventListener("click",()=>e.hide()),e.createEl("h3",{text:o.label}),e.createDiv({text:`${No((h=r.rendererData.scores[o.id])!=null?h:0)} \u5206`,cls:"mrt-world-hover-score"});let l=e.createDiv({cls:"mrt-world-detail-evidence"});for(let u of o.evidence){let d=r.rendererData.snapshot.sourceUnits.find(g=>g.id===u.sourceId);if(!d)continue;l.createEl("button",{text:d.text,cls:"mrt-world-evidence-button"}).addEventListener("click",()=>void this.plugin.openBookWorldEvidence(i,d.id))}let c=r.rendererData.revision.links.filter(u=>u.sourceConceptId===s||u.targetConceptId===s);if(c.length){e.createEl("h4",{text:"\u5173\u7CFB"});for(let u of c){let d=u.sourceConceptId===s?u.targetConceptId:u.sourceConceptId,f=r.rendererData.revision.concepts.find(g=>g.id===d);f&&e.createDiv({text:`${u.relation} \xB7 ${f.label}`,cls:"mrt-world-relation"})}}e.show()}async resetWorldLayout(e){let i=this.plugin.readingMapStorageRoot,r=await this.plugin.getBookWorldRenderBundle(e);if(!i||!r)return;let s=Hh(r.rendererData.revision,[]);await Ih(i,e.id,s),await this.render()}},If=class extends j.Modal{constructor(e,i,r){super(e);this.plugin=i;this.onConfigured=r}onOpen(){this.contentEl.empty(),this.contentEl.createEl("h2",{text:"\u914D\u7F6E\u4E66\u672C\u4E16\u754C Runner"});let i=this.plugin.trackerSettings.readingMapRunnerRoot||(this.plugin.vaultBasePath?(0,kn.join)(this.plugin.vaultBasePath,"readmark-map-runner"):""),r=this.plugin.trackerSettings.readingMapNodePath,s="";new j.Setting(this.contentEl).setName("Runner \u5B89\u88C5\u76EE\u5F55").addText(a=>a.setValue(i).setPlaceholder("D:\\Projects\\readmark-map-runner").onChange(l=>{i=l})),new j.Setting(this.contentEl).setName("MiniMax API Key").setDesc("\u660E\u6587\u5199\u5165 Runner \u672C\u5730 config.json\uFF0CReadMark \u4E0D\u4FDD\u5B58\u3002").addText(a=>{a.inputEl.type="password",a.setPlaceholder("\u5DF2\u914D\u7F6E\u65F6\u53EF\u7559\u7A7A").onChange(l=>{s=l})});let o=this.contentEl.createEl("details",{cls:"mrt-map-advanced"});o.createEl("summary",{text:"\u9AD8\u7EA7\u8BBE\u7F6E"}),new j.Setting(o).setName("Node \u8DEF\u5F84").setDesc("\u901A\u5E38\u81EA\u52A8\u63A2\u6D4B\uFF0C\u65E0\u9700\u586B\u5199\u3002").addText(a=>a.setValue(r).setPlaceholder("D:\\nodejs\\node.exe").onChange(l=>{r=l})),new j.Setting(this.contentEl).addButton(a=>a.setButtonText("\u4FDD\u5B58").setCta().onClick(async()=>{var l;await this.plugin.configureReadingMapRunner({runnerRoot:i,nodePath:r,apiKey:s})&&(this.close(),(l=this.onConfigured)==null||l.call(this))})).addButton(a=>a.setButtonText("\u53D6\u6D88").onClick(()=>this.close()))}},Pf=class extends j.Modal{constructor(e,i,r){super(e);this.attributes=i;this.onConfirm=r}onOpen(){var i,r;this.contentEl.empty(),this.contentEl.createEl("h2",{text:"\u786E\u8BA4\u4E16\u754C\u5C5E\u6027"});let e=this.contentEl.createDiv({cls:"mrt-map-attribute-list"});for(let s of this.attributes){let o=typeof s=="object"&&s!==null?s:{},a=e.createDiv({cls:"mrt-map-attribute-card"});a.createDiv({text:String((r=(i=o.name)!=null?i:o.id)!=null?r:"\u672A\u547D\u540D\u5C5E\u6027"),cls:"mrt-module-title"}),o.value&&a.createDiv({text:String(o.value),cls:"mrt-muted"})}new j.Setting(this.contentEl).addButton(s=>s.setButtonText("\u786E\u8BA4\u5E76\u7EE7\u7EED").setCta().onClick(async()=>{this.close(),await this.onConfirm()})).addButton(s=>s.setButtonText("\u6682\u4E0D\u751F\u6210").onClick(()=>this.close()))}},kf=class extends j.Modal{constructor(e,i,r){super(e);this.inspection=i;this.onImport=r}onOpen(){this.contentEl.empty(),this.contentEl.createEl("h2",{text:"\u5BFC\u5165\u4E66\u672C\u4E16\u754C\u7ED3\u679C"});let e=this.contentEl.createDiv({cls:"mrt-map-import-summary"});e.createDiv({text:`\u5C5E\u6027 ${this.inspection.summary.attributes}`}),e.createDiv({text:`\u6982\u5FF5 ${this.inspection.summary.concepts}`}),e.createDiv({text:`\u5173\u7CFB ${this.inspection.summary.links+this.inspection.summary.edges}`}),e.createDiv({text:`\u8B66\u544A ${this.inspection.summary.warnings}`}),new j.Setting(this.contentEl).addButton(i=>i.setButtonText("\u5BFC\u5165").setCta().onClick(()=>{this.close(),this.onImport()})).addButton(i=>i.setButtonText("\u53D6\u6D88").onClick(()=>this.close()))}},Gc=class extends j.Modal{constructor(e,i){super(e);this.onDelete=i}onOpen(){this.contentEl.empty(),this.contentEl.createEl("h2",{text:"\u5220\u9664\u4E66\u672C\u4E16\u754C\u6570\u636E"}),this.contentEl.createDiv({text:"\u53EA\u5220\u9664\u5F53\u524D\u4E66\u672C\u7684 maps \u6570\u636E\uFF0C\u4E0D\u4F1A\u4FEE\u6539\u9605\u8BFB\u8FDB\u5EA6\u3001\u9605\u8BFB\u65F6\u6BB5\u6216\u6458\u5F55\u3002",cls:"mrt-muted"}),new j.Setting(this.contentEl).addButton(e=>e.setButtonText("\u5220\u9664").setWarning().onClick(()=>{this.close(),this.onDelete()})).addButton(e=>e.setButtonText("\u53D6\u6D88").onClick(()=>this.close()))}},Wc=class extends j.Modal{constructor(e,i){super(e);this.options=i}onOpen(){var r;let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:this.options.title});let i=e.createEl("textarea",{cls:"mrt-modal-textarea"});i.value=this.options.initialPath,i.placeholder=(r=this.options.placeholder)!=null?r:"C:\\path\\to\\book.md",i.focus(),new j.Setting(e).addButton(s=>s.setButtonText(this.options.submitLabel).setCta().onClick(async()=>{await this.options.onSubmit(i.value),this.close()})).addButton(s=>s.setButtonText("\u53D6\u6D88").onClick(()=>this.close()))}},Df=class extends j.PluginSettingTab{constructor(e,i){super(e,i);this.plugin=i}renderReadingMapLabsSettings(e){e.createEl("h3",{text:"\u4E66\u672C\u4E16\u754C Labs"}),new j.Setting(e).setName("\u542F\u7528 Labs").setDesc("\u9ED8\u8BA4\u5173\u95ED\u3002\u542F\u7528\u540E\u53EF\u5728\u4E2D\u592E\u89C6\u56FE\u4E00\u952E\u751F\u6210\u4E66\u672C\u4E16\u754C\u3002").addToggle(s=>s.setValue(this.plugin.trackerSettings.readingMapLabsEnabled).onChange(async o=>{this.plugin.trackerSettings.readingMapLabsEnabled=o,await this.plugin.savePluginData(),this.display()})),new j.Setting(e).setName("Runner \u5B89\u88C5\u76EE\u5F55").setDesc("\u81EA\u52A8\u63A2\u6D4B\u5F53\u524D\u5E93\u6839\u76EE\u5F55\u4E0B\u7684 readmark-map-runner\u3002").addText(s=>s.setPlaceholder("D:\\Projects\\readmark-map-runner").setValue(this.plugin.trackerSettings.readingMapRunnerRoot).onChange(async o=>{let a=o.trim();a&&!(0,kn.isAbsolute)(a)||(this.plugin.trackerSettings.readingMapRunnerRoot=a,await this.plugin.savePluginData())})).addButton(s=>s.setButtonText("\u914D\u7F6E").onClick(()=>this.plugin.openReadingMapSetup(()=>this.display()))),new j.Setting(e).setName("MiniMax \u8FDE\u63A5").setDesc("\u4F7F\u7528 Runner \u672C\u5730 config.json \u4E2D\u7684 MiniMax-M3 \u914D\u7F6E\u3002").addButton(s=>s.setButtonText("\u6D4B\u8BD5\u8FDE\u63A5").onClick(()=>void this.plugin.probeReadingMapRunner()));let i=e.createEl("details",{cls:"mrt-map-advanced"});i.createEl("summary",{text:"\u9AD8\u7EA7 Node \u8BBE\u7F6E"}),new j.Setting(i).setName("Node \u8DEF\u5F84").setDesc("PATH \u63A2\u6D4B\u5931\u8D25\u65F6\u518D\u586B\u5199\u7EDD\u5BF9\u8DEF\u5F84\u3002").addText(s=>s.setPlaceholder("D:\\nodejs\\node.exe").setValue(this.plugin.trackerSettings.readingMapNodePath).onChange(async o=>{let a=o.trim();a&&!(0,kn.isAbsolute)(a)||(this.plugin.trackerSettings.readingMapNodePath=a,await this.plugin.savePluginData())})),e.createEl("h4",{text:"\u4E16\u754C\u79EF\u5206",cls:"mrt-color-group-title"});let r=[["reading","\u8BFB\u8FC7"],["bold","\u52A0\u7C97"],["highlight","\u9AD8\u4EAE"],["annotation","\u6279\u6CE8"],["callout","\u6807\u6CE8"],["commentary","\u70B9\u8BC4"]];for(let[s,o]of r)new j.Setting(e).setName(o).addText(a=>{a.inputEl.type="number",a.inputEl.min="0.1",a.inputEl.step="0.5",a.setValue(String(this.plugin.trackerSettings.readingMapWeights[s])).onChange(async l=>{let c=Number(l);Number.isFinite(c)&&c>0&&await this.plugin.updateReadingMapScoringSettings({[s]:c})})});new j.Setting(e).setName("\u5BFC\u5165\u5386\u53F2\u52A0\u7C97").addToggle(s=>s.setValue(this.plugin.trackerSettings.readingMapHistoricalBold).onChange(async o=>{this.plugin.trackerSettings.readingMapHistoricalBold=o,await this.plugin.updateReadingMapScoringSettings()})),new j.Setting(e).setName("\u5BFC\u5165\u5386\u53F2\u6807\u6CE8\u5757").addToggle(s=>s.setValue(this.plugin.trackerSettings.readingMapHistoricalCallout).onChange(async o=>{this.plugin.trackerSettings.readingMapHistoricalCallout=o,await this.plugin.updateReadingMapScoringSettings()}))}renderColorSettings(e){e.createEl("h3",{text:"\u6458\u5F55\u914D\u8272"}),new j.Setting(e).setName("\u6062\u590D\u9ED8\u8BA4\u914D\u8272").addButton(r=>r.setButtonText("\u5168\u90E8\u91CD\u7F6E").onClick(async()=>{this.plugin.trackerSettings.colors=Rr(),await this.plugin.savePluginData(),this.display()}));let i=e.createDiv({cls:"mrt-color-preview"});this.plugin.applyColorVariables(i),this.renderColorPreview(i),e.createEl("h4",{text:"\u6458\u5F55\u7C7B\u578B",cls:"mrt-color-group-title"});for(let r of Xo)this.addColorSetting(e,G0[r],()=>this.plugin.trackerSettings.colors.excerpts[r],s=>{this.plugin.trackerSettings.colors.excerpts[r]=s},Ts.excerpts[r],i);e.createEl("h4",{text:"\u6807\u6CE8\u8BED\u4E49",cls:"mrt-color-group-title"});for(let r of Qc)this.addColorSetting(e,K1[r],()=>this.plugin.trackerSettings.colors.callouts[r],s=>{this.plugin.trackerSettings.colors.callouts[r]=s},Ts.callouts[r],i)}renderColorPreview(e){let i=e.createDiv({cls:"mrt-color-preview-chart"}),r=i.createDiv({cls:"mrt-donut mrt-color-preview-donut"});r.style.background=sy(Xo.map(c=>({label:G0[c],value:1,type:c}))),r.createDiv({text:"5",cls:"mrt-donut-center"}),i.createDiv({text:"\u6458\u5F55\u7C7B\u578B",cls:"mrt-module-title"});let s=e.createDiv({cls:"mrt-color-preview-card mrt-excerpt-text type-bold"});s.createDiv({text:"\u52A0\u7C97\u6458\u5F55",cls:"mrt-color-preview-label"}),s.createDiv({text:"\u989C\u8272\u4F1A\u540C\u6B65\u7528\u4E8E\u5361\u7247\u5F3A\u8C03\u7EBF\u4E0E\u7EDF\u8BA1\u56FE\u3002"});let o=e.createDiv({cls:"mrt-color-preview-card"});o.createDiv({cls:"mrt-callout-meta"}).createSpan({text:"WARNING",cls:"mrt-callout-badge tone-warning"});let l=o.createDiv({cls:"mrt-callout-content tone-warning"});l.createDiv({text:"\u8B66\u793A\u6807\u6CE8",cls:"mrt-callout-title"}),l.createDiv({text:"\u8BED\u4E49\u8272\u72EC\u7ACB\u63A7\u5236\u5FBD\u6807\u4E0E\u5F3A\u8C03\u7EBF\u3002",cls:"mrt-callout-text"})}addColorSetting(e,i,r,s,o,a){let l,c,h=async u=>{let d=Ar(u);d&&(s(d),l.setValue(d),c.setValue(d),this.plugin.applyColorVariables(a),await this.plugin.savePluginData())};new j.Setting(e).setName(i).addColorPicker(u=>{l=u,u.setValue(r()).onChange(d=>void h(d))}).addText(u=>{c=u,u.setValue(r()).setPlaceholder("#rrggbb"),u.inputEl.addClass("mrt-color-hex-input"),u.onChange(d=>{Ar(d)&&h(d)}),u.inputEl.addEventListener("blur",()=>{let d=Ar(u.getValue());d?d!==r()&&h(d):u.setValue(r())})}).addExtraButton(u=>u.setIcon("rotate-ccw").setTooltip(`\u91CD\u7F6E${i}\u989C\u8272`).onClick(()=>void h(o)))}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"ReadMark"}),this.renderReadingMapLabsSettings(e),this.renderColorSettings(e),e.createEl("h3",{text:"\u81EA\u52A8\u8BA1\u65F6"}),new j.Setting(e).setName("\u65E0\u64CD\u4F5C\u505C\u6B62\u8BA1\u65F6").setDesc("\u4E2D\u592E\u9605\u8BFB\u533A\u4ECD\u663E\u793A\u5F53\u524D\u4E66\u672C\uFF0C\u4F46\u8D85\u8FC7\u8FD9\u4E2A\u79D2\u6570\u6CA1\u6709\u6EDA\u52A8\u3001\u70B9\u51FB\u6216\u952E\u76D8\u6D3B\u52A8\u65F6\uFF0C\u505C\u6B62\u7D2F\u52A0\u9605\u8BFB\u65F6\u957F\u3002").addText(i=>i.setValue(String(Math.round(this.plugin.trackerSettings.idleThresholdMs/1e3))).onChange(async r=>{let s=Number(r);Number.isFinite(s)&&s>0&&(this.plugin.trackerSettings.idleThresholdMs=s*1e3,await this.plugin.savePluginData())})),new j.Setting(e).setName("\u8BA1\u65F6\u7CBE\u5EA6").setDesc("\u81EA\u52A8\u8BA1\u65F6\u7684\u5237\u65B0\u95F4\u9694\uFF0C\u63A8\u8350 0.5 \u79D2\u3002\u4FEE\u6539\u540E\u9700\u8981\u91CD\u8F7D\u63D2\u4EF6\u624D\u4F1A\u5B8C\u5168\u751F\u6548\u3002").addText(i=>i.setValue(String(this.plugin.trackerSettings.timingTickMs/1e3)).onChange(async r=>{let s=Number(r);Number.isFinite(s)&&s>=.25&&(this.plugin.trackerSettings.timingTickMs=s*1e3,await this.plugin.savePluginData(),new j.Notice("\u8BF7\u91CD\u8F7D\u63D2\u4EF6\u4EE5\u5E94\u7528\u65B0\u7684\u8BA1\u65F6\u7CBE\u5EA6\u3002"))})),new j.Setting(e).setName("\u6BCF\u65E5\u76EE\u6807").setDesc("\u5355\u4F4D\u4E3A\u5206\u949F\uFF0C\u53EA\u7528\u4E8E\u672C\u5730\u7EDF\u8BA1\u5C55\u793A\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u8BA1\u65F6\u3002").addText(i=>i.setValue(String(this.plugin.trackerSettings.dailyGoalMinutes)).onChange(async r=>{let s=Number(r);Number.isFinite(s)&&s>=0&&(this.plugin.trackerSettings.dailyGoalMinutes=s,await this.plugin.savePluginData())})),new j.Setting(e).setName(this.plugin.trackingPaused?"\u7EE7\u7EED\u81EA\u52A8\u8BA1\u65F6":"\u6682\u505C\u81EA\u52A8\u8BA1\u65F6").setDesc("\u8FD9\u662F\u4E34\u65F6\u63A7\u5236\u3002\u65E5\u5E38\u9605\u8BFB\u4E0D\u9700\u8981\u624B\u52A8\u5F00\u59CB\uFF1B\u53EA\u6709\u4E2D\u592E\u9605\u8BFB\u533A\u6B63\u5728\u663E\u793A\u5F53\u524D\u4E66\u672C Markdown \u65F6\uFF0C\u63D2\u4EF6\u624D\u4F1A\u81EA\u52A8\u8BA1\u65F6\u3002").addButton(i=>i.setButtonText(this.plugin.trackingPaused?"\u7EE7\u7EED":"\u6682\u505C").onClick(()=>void this.plugin.toggleTracking().then(()=>this.display()))),e.createEl("h3",{text:"\u6458\u8981\u5BFC\u51FA"}),new j.Setting(e).setName("\u6BCF\u65E5\u6458\u8981\u6587\u4EF6\u5939").setDesc("\u5E93\u5185\u76F8\u5BF9\u8DEF\u5F84\u3002\u751F\u6210\u7684\u4ECA\u65E5\u9605\u8BFB\u6458\u8981\u4F1A\u5199\u5165\u8FD9\u91CC\u3002").addText(i=>i.setValue(this.plugin.trackerSettings.summaryFolder).onChange(async r=>{this.plugin.trackerSettings.summaryFolder=r||Xc.summaryFolder,await this.plugin.savePluginData()})),e.createEl("h3",{text:"\u6458\u5F55\u8BC6\u522B"}),new j.Setting(e).setName("\u8BC6\u522B Markdown \u9AD8\u4EAE").setDesc("\u8BC6\u522B ==\u9AD8\u4EAE== \u5E76\u4FDD\u5B58\u4E3A\u6458\u5F55\u3002").addToggle(i=>i.setValue(this.plugin.trackerSettings.detectHighlights).onChange(async r=>{this.plugin.trackerSettings.detectHighlights=r,await this.plugin.savePluginData()})),new j.Setting(e).setName("\u8BC6\u522B Markdown \u52A0\u7C97").setDesc("\u8BC6\u522B **\u52A0\u7C97** \u5E76\u4FDD\u5B58\u4E3A\u6458\u5F55\u3002").addToggle(i=>i.setValue(this.plugin.trackerSettings.detectBolds).onChange(async r=>{this.plugin.trackerSettings.detectBolds=r,await this.plugin.savePluginData()})),new j.Setting(e).setName("\u8BC6\u522B Obsidian \u6279\u6CE8").setDesc("\u8BC6\u522B %%\u6279\u6CE8%% \u5E76\u4FDD\u5B58\u4E3A\u6458\u5F55\u3002").addToggle(i=>i.setValue(this.plugin.trackerSettings.detectComments).onChange(async r=>{this.plugin.trackerSettings.detectComments=r,await this.plugin.savePluginData()})),new j.Setting(e).setName("\u8BC6\u522B\u70B9\u8BC4\u6458\u5F55").setDesc("\u8BC6\u522B ==\u91CD\u70B9==%%\u70B9\u8BC4%% \u6216 **\u91CD\u70B9**%%\u70B9\u8BC4%%\uFF0C\u5E76\u4F5C\u4E3A\u4E00\u6761\u70B9\u8BC4\u6458\u5F55\u7EDF\u8BA1\u3002").addToggle(i=>i.setValue(this.plugin.trackerSettings.detectCommentaries).onChange(async r=>{this.plugin.trackerSettings.detectCommentaries=r,await this.plugin.savePluginData()})),new j.Setting(e).setName("\u8BC6\u522B Obsidian \u6807\u6CE8\u5757").setDesc("\u8BC6\u522B > [!NOTE]\u3001> [!IMPORTANT]\u3001> [!WARNING] \u53CA\u81EA\u5B9A\u4E49\u7C7B\u578B\uFF0C\u5E76\u5C06\u6BCF\u4E2A\u5B8C\u6574\u6807\u6CE8\u5757\u4FDD\u5B58\u4E3A\u4E00\u6761\u6458\u5F55\u3002").addToggle(i=>i.setValue(this.plugin.trackerSettings.detectCallouts).onChange(async r=>{this.plugin.trackerSettings.detectCallouts=r,await this.plugin.savePluginData()})),new j.Setting(e).setName("\u8BC6\u522B\u811A\u6CE8\u6279\u6CE8").setDesc("\u8BC6\u522B [^id]: \u5F62\u5F0F\u7684\u811A\u6CE8\u5B9A\u4E49\u5E76\u4FDD\u5B58\u4E3A\u6279\u6CE8\u6458\u5F55\u3002").addToggle(i=>i.setValue(this.plugin.trackerSettings.detectFootnotes).onChange(async r=>{this.plugin.trackerSettings.detectFootnotes=r,await this.plugin.savePluginData()})),e.createEl("h3",{text:"\u4E66\u67B6\u7ED1\u5B9A"}),e.createDiv({text:"\u672C\u5730\u8DEF\u5F84\u662F\u4E66\u672C\u8EAB\u4EFD\uFF1B\u5E93\u5185\u8DEF\u5F84\u53EA\u662F Obsidian \u80FD\u6253\u5F00\u5B83\u65F6\u6D3E\u751F\u51FA\u7684\u8DEF\u5F84\u3002\u6539\u8DEF\u5F84\u5C31\u662F\u624B\u52A8\u6062\u590D\u540C\u4E00\u672C\u4E66\u7684\u9605\u8BFB\u65F6\u6BB5\u548C\u6458\u5F55\u5FEB\u7167\u3002",cls:"setting-item-description"}),new j.Setting(e).setName("\u52A0\u5165\u5F53\u524D\u6587\u4EF6").setDesc("\u628A\u5F53\u524D\u6253\u5F00\u7684 Markdown \u6587\u4EF6\u52A0\u5165\u4E66\u67B6\u3002").addButton(i=>i.setButtonText("\u52A0\u5165").onClick(()=>void this.plugin.addCurrentFileToBookshelf())),new j.Setting(e).setName("\u6DFB\u52A0\u672C\u5730\u8DEF\u5F84").setDesc("\u7C98\u8D34\u4E00\u4E2A Markdown \u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002").addButton(i=>i.setButtonText("\u6DFB\u52A0").onClick(()=>this.plugin.openPathModal()));for(let i of this.plugin.data.books){let r=this.plugin.statusForBook(i);new j.Setting(e).setName(i.title).setDesc(`${r.exists?"\u53EF\u7528":"\u7F3A\u5931"} \xB7 ${i.absolutePath}`).addButton(s=>s.setButtonText("\u6539\u8DEF\u5F84").onClick(()=>this.plugin.openPathModal(i))).addButton(s=>s.setButtonText("\u79FB\u9664").onClick(()=>void this.plugin.removeBook(i.id).then(()=>this.display())))}}};function ey(n){return n==="tracking"?"\u6B63\u5728\u81EA\u52A8\u8BA1\u65F6":n==="locked"?"\u5DF2\u9501\u5B9A":n==="paused"?"\u5DF2\u6682\u505C":"\u7A7A\u95F2"}function j1(n){return n==="tracking"?"\u8BA1\u65F6\u4E2D":n==="locked"?"\u5DF2\u9501\u5B9A":n==="paused"?"\u5DF2\u6682\u505C":"\u7A7A\u95F2"}function Q1(n,t,e,i){return i==="awaiting-confirmation"?"\u7B49\u5F85\u786E\u8BA4\u4E16\u754C\u5C5E\u6027":i==="interrupted"?t!=null?t:"\u751F\u6210\u5DF2\u4E2D\u65AD\uFF0C\u53EF\u7EE7\u7EED\u3002":n==="building"?e?`\u751F\u6210\u4E2D \xB7 ${e}`:"\u751F\u6210\u4E2D":n==="current"?"\u5F53\u524D\u7ED3\u679C\u5DF2\u9A8C\u8BC1\u3002":n==="stale"?t!=null?t:"\u7ED3\u679C\u5DF2\u8FC7\u671F\uFF1A\u5F53\u524D Markdown \u4E0E\u5BFC\u51FA\u6E90\u4E0D\u4E00\u81F4\u3002":t!=null?t:"\u7ED3\u679C\u65E0\u6CD5\u5BFC\u5165\u3002"}function Mf(n,t,e){let i=n.createDiv({cls:"mrt-map-score-item"});i.createDiv({text:e,cls:"mrt-map-score-value"}),i.createDiv({text:t,cls:"mrt-map-score-label"})}function No(n){return Number.isInteger(n)?String(n):n.toFixed(1)}function tR(n){return n==="highlight"?"\u9AD8\u4EAE":n==="bold"?"\u52A0\u7C97":n==="commentary"?"\u70B9\u8BC4":n==="callout"?"\u6807\u6CE8":"\u6279\u6CE8"}function Oo(n){return n.vaultPath?n.vaultPath:nR(n.absolutePath)}function eR(n,t){var e;return`${n.id}:${(e=t!=null?t:n.vaultPath)!=null?e:""}`}function nR(n){let t=pn(n),e=t.split("\\").filter(Boolean);return e.length<=3?t:`${e[0]}\\...\\${e.slice(-2).join("\\")}`}function Ss(n){return new Promise(t=>window.setTimeout(t,n))}async function iR(n,t,e=8){for(let i=0;i<e;i+=1){await Ss(80);let r=t.candidate,s=r==null?void 0:r.nativeScroll;if(Number.isFinite(s)&&aR(n,Number(s)))return!0;let o=oy(n.containerEl);if(!o)continue;let a=o.scrollHeight-o.clientHeight;if(!(a<=0))return Number.isFinite(r==null?void 0:r.scrollTop)?(o.scrollTop=Ee(Number(r==null?void 0:r.scrollTop),0,a),!0):(o.scrollTop=Ee(t.progressPercent,0,100)/100*a,!0)}return!1}function Bo(n,t){try{let e=n.editor.getValue().length,i=Ee(Math.round(t),0,Math.max(0,e)),r=n.editor.offsetToPos(i);return n.editor.setCursor(r),n.editor.scrollIntoView({from:r,to:r},!0),!0}catch(e){return console.warn("Failed to restore editor position",e),!1}}function rR(n,t){var r;if(!n)return 0;let e=Math.round(Ee(t,0,100)/100*n.length),i=ny(n,e);return(r=i==null?void 0:i.start)!=null?r:Ee(e,0,n.length)}function sR(n){let t=oR(n),e=oy(n.containerEl);if(!e)return t===null?null:{progressPercent:0,nativeScroll:t,scrollTop:null,scrollMax:null};let i=e.scrollHeight-e.clientHeight;return i<=0?t===null?null:{progressPercent:0,nativeScroll:t,scrollTop:e.scrollTop,scrollMax:i}:{progressPercent:Ee(e.scrollTop/i*100,0,100),nativeScroll:t,scrollTop:e.scrollTop,scrollMax:i}}function oR(n){var e;let t=n.currentMode;try{let i=(e=t==null?void 0:t.getScroll)==null?void 0:e.call(t);return Number.isFinite(i)?Number(i):null}catch(i){return console.warn("Failed to read native Markdown scroll",i),null}}function aR(n,t){let e=n.currentMode;if(!Number.isFinite(t)||typeof(e==null?void 0:e.applyScroll)!="function")return!1;try{return e.applyScroll(t),!0}catch(i){return console.warn("Failed to apply native Markdown scroll",i),!1}}async function Lf(n,t,e=12){var i,r;for(let s=0;s<e;s+=1){let o=n.workspace.getActiveViewOfType(j.MarkdownView);if(o&&(!t||((i=o.file)==null?void 0:i.path)===t))return o;for(let a of n.workspace.getLeavesOfType("markdown"))if(a.view instanceof j.MarkdownView&&(!t||((r=a.view.file)==null?void 0:r.path)===t))return a.view;await Ss(50)}return null}async function Ff(n){var e;let t=n;((e=t.getMode)==null?void 0:e.call(t))!=="source"&&(!t.getState||!t.setState||await t.setState({...t.getState(),mode:"source"},{history:!1}))}function lR(n,t){var s;let e=[],i=hR(n),r=[];if(t.detectCommentaries&&(W0(n,/==([\s\S]*?)==/g,"highlight-commentary",e,i,r),W0(n,/\*\*([\s\S]*?)\*\*/g,"bold-commentary",e,i,r)),t.detectHighlights&&wf(n,/==([\s\S]*?)==/g,"highlight","markdown-highlight",1,e,i,r),t.detectBolds&&wf(n,/\*\*([\s\S]*?)\*\*/g,"bold","markdown-bold",1,e,i,r),t.detectComments&&wf(n,/%%([\s\S]*?)%%/g,"annotation","obsidian-comment",1,e,i,r),t.detectFootnotes){let o=/^\[\^([^\]]+)\]:\s*(.+)$/gm,a;for(;(a=o.exec(n))!==null;){let l=(s=a[2])==null?void 0:s.trim();l&&!Ho(a.index,o.lastIndex,i)&&e.push(zf(n,a.index,l,"annotation","footnote-definition"))}}if(t.detectCallouts)for(let o of Jc(n))e.push({type:"callout",sourceSyntax:"obsidian-callout",text:o.text,calloutType:o.calloutType,calloutTitle:o.calloutTitle,calloutFold:o.calloutFold,position:o.position,line:o.line,contextBefore:ke(n.slice(Math.max(0,o.position-120),o.position)),contextAfter:ke(n.slice(o.end,o.end+120))});return e.sort((o,a)=>o.position-a.position)}function W0(n,t,e,i,r,s){var a;let o;for(;(o=t.exec(n))!==null;){let l=o.index,c=t.lastIndex;if(Ho(l,c,r))continue;let h=cR(n,c);if(!h||Ho(l,h.end,r))continue;let u=(a=o[1])==null?void 0:a.trim(),d=h.text.trim();!u||!d||(i.push(zf(n,l,u,"commentary",e,d)),s.push({start:l,end:h.end}))}}function cR(n,t){var r;let e=n.slice(t),i=new RegExp(`^[ \\t\\r\\n]{0,${X1}}%%([\\s\\S]*?)%%`).exec(e);return i?{text:(r=i[1])!=null?r:"",end:t+i[0].length}:null}function wf(n,t,e,i,r,s,o,a){var c;let l;for(;(l=t.exec(n))!==null;){if(Ho(l.index,t.lastIndex,o)||Ho(l.index,t.lastIndex,a))continue;let h=(c=l[r])==null?void 0:c.trim();h&&s.push(zf(n,l.index,h,e,i))}}function zf(n,t,e,i,r,s){return{type:i,sourceSyntax:r,text:e,commentaryText:s,position:t,line:n.slice(0,t).split(/\r?\n/).length,contextBefore:ke(n.slice(Math.max(0,t-120),t)),contextAfter:ke(n.slice(t+e.length,t+e.length+120))}}function uR(n,t){var i;let e=null;for(let r of n){if(r.type!==t.type||r.sourceSyntax!==t.sourceSyntax)continue;let s=ke(X0(r))===ke(q0(t)),o=Math.abs(r.position-t.position)<=1e3,a=Math.max(di(r.contextBefore,t.contextBefore),di(r.contextAfter,t.contextAfter)),l=di(X0(r),q0(t)),c=s?1:l*.75+a*.25,h=r.type==="callout"&&r.position===t.position,u=r.type==="callout"&&o&&a>=.75;(h||u||s&&o||o&&l>=.7||a>=.75&&l>=.7)&&(!e||c>e.score)&&(e={excerpt:r,score:c})}return(i=e==null?void 0:e.excerpt)!=null?i:null}function hR(n){let t=[...Kc(n)];return Ef(n,/^[ \t]{0,3}```[\s\S]*?^[ \t]{0,3}```[^\n]*(?:\n|$)/gm,t),Ef(n,/^[ \t]{0,3}~~~[\s\S]*?^[ \t]{0,3}~~~[^\n]*(?:\n|$)/gm,t),Ef(n,/`+[^`\n]*`+/g,t),t.sort((e,i)=>e.start-i.start)}function Ef(n,t,e){let i;for(;(i=t.exec(n))!==null;)e.push({start:i.index,end:t.lastIndex})}function Ho(n,t,e){return e.some(i=>n<i.end&&t>i.start)}function X0(n){var t,e,i;return n.type==="callout"?`${(t=n.calloutType)!=null?t:""}
${(e=n.calloutTitle)!=null?e:""}
${n.text}`:n.type==="commentary"?`${n.text}
${(i=n.commentaryText)!=null?i:""}`:n.text}function q0(n){var t,e,i;return n.type==="callout"?`${(t=n.calloutType)!=null?t:""}
${(e=n.calloutTitle)!=null?e:""}
${n.text}`:n.type==="commentary"?`${n.text}
${(i=n.commentaryText)!=null?i:""}`:n.text}function dR(n,t){if(t.type==="callout")return np(n,{position:t.position,calloutType:t.calloutType,calloutTitle:t.calloutTitle,text:t.text});let e=n.indexOf(t.text);if(e>=0)return e;let i=n.split(/\r?\n/),r=0,s={index:-1,score:0};for(let o of i){let a=di(o,t.text);a>s.score&&(s={index:r,score:a}),r+=o.length+1}return s.score>=.7?s.index:-1}function fR(n){var t;return((t=n.getMode)==null?void 0:t.call(n))==="preview"?"preview":"source"}function pR(n,t){let e=mR(n);if(!e)return null;try{let i=e.scrollDOM.getBoundingClientRect();if(i.width<=0||i.height<=0)return null;let r=i.left+Ee(i.width*.35,24,Math.max(24,i.width-24)),s=i.top+i.height/2,o=e.posAtCoords({x:r,y:s},!1),a=gR(e),l=Number.isFinite(o)?Number(o):a;return l===null?null:MR(n.editor.getValue(),l,t)}catch(i){return console.warn("Failed to capture reading anchor",i),null}}function mR(n){let t=n.editor.cm;return!t||typeof t.posAtCoords!="function"||!t.scrollDOM||typeof t.scrollDOM.getBoundingClientRect!="function"?null:t}function gR(n){let t=n.visibleRanges;if(!t||t.length===0)return null;let e=t[0],i=t[t.length-1];return!Number.isFinite(e.from)||!Number.isFinite(i.to)?null:Math.round((e.from+i.to)/2)}function xR(n,t){if(!n)return!0;let e=Date.parse(n.capturedAt),i=Date.parse(t.capturedAt);return Number.isFinite(e)&&Number.isFinite(i)&&i<e?!1:ke(n.paragraphText)!==ke(t.paragraphText)||Math.abs(n.offset-t.offset)>=8||Math.abs(n.progressPercent-t.progressPercent)>=.1}function yR(n,t,e){var i,r,s;return{capturedAt:new Date().toISOString(),mode:fR(n),progressPercent:ay(t.progressPercent),nativeScroll:(i=t.nativeScroll)!=null?i:void 0,scrollTop:(r=t.scrollTop)!=null?r:void 0,scrollMax:(s=t.scrollMax)!=null?s:void 0,anchor:e}}function _R(n,t,e=Date.now()){let i=JSON.stringify(n.restoreCandidates.map(s=>{var o,a;return[s.capturedAt,s.mode,s.progressPercent,(a=(o=s.anchor)==null?void 0:o.offset)!=null?a:null]}));n.restoreCandidates=Vf([...n.restoreCandidates,t],e);let r=JSON.stringify(n.restoreCandidates.map(s=>{var o,a;return[s.capturedAt,s.mode,s.progressPercent,(a=(o=s.anchor)==null?void 0:o.offset)!=null?a:null]}));return i!==r}function vR(n,t,e){if(t.scrollMax!==null&&t.scrollMax<=0)return!0;let i=t.progressPercent;if(!(i<=.01||i>=99.99))return!1;let s=[...n.restoreCandidates].reverse().find(a=>a.progressPercent>.25&&a.progressPercent<99.75);if(!s)return!1;let o=Date.parse(s.capturedAt);return Number.isFinite(o)&&e-o<=ty}function Vf(n,t){let e=n.map(IR).filter(Boolean);if(e.length===0)return[];let i=e.sort((s,o)=>Date.parse(s.capturedAt)-Date.parse(o.capturedAt)),r=t!=null?t:Math.max(...i.map(s=>Date.parse(s.capturedAt)).filter(Number.isFinite));return Number.isFinite(r)?i.filter(s=>{let o=Date.parse(s.capturedAt);return Number.isFinite(o)&&r-o<=q1}).slice(-H0):i.slice(-H0)}function bR(n,t,e){var s;let i=Vf(e.restoreCandidates).filter((o,a,l)=>!SR(o,l)).reverse(),r=(s=i.find(o=>Number.isFinite(o.progressPercent)))!=null?s:null;if(t==="source"){for(let a of i){if(!a.anchor)continue;let l=$0(n,a.anchor);if(l!==null)return{kind:"anchor",offset:l,progressPercent:a.progressPercent,candidate:a}}let o=qc(e.lastReadingAnchor);if(o){let a=$0(n,o);if(a!==null)return{kind:"anchor",offset:a,progressPercent:o.progressPercent,candidate:null}}}return r?{kind:"percent",progressPercent:Ee(r.progressPercent,0,100),candidate:r}:{kind:"percent",progressPercent:FR(e),candidate:null}}function SR(n,t){let e=n.progressPercent;if(e>.01&&e<99.99)return!1;let i=Date.parse(n.capturedAt);return Number.isFinite(i)?t.some(r=>{if(r===n||r.progressPercent<=.25||r.progressPercent>=99.75)return!1;let s=Date.parse(r.capturedAt);return Number.isFinite(s)&&Math.abs(i-s)<=ty}):!1}function MR(n,t,e,i=new Date().toISOString()){let r=ny(n,t);return r?{capturedAt:i,progressPercent:Ee(e,0,100),offset:r.start,line:r.line,paragraphText:r.text,contextBefore:r.contextBefore,contextAfter:r.contextAfter}:null}function $0(n,t){var h;let e=qc(t);if(!e)return null;let r=ke(e.paragraphText).length>=Z1,s=!!ke(e.contextBefore)||!!ke(e.contextAfter),o=ER(n,e.paragraphText,e.offset);if(o!==null&&(r||s&&wR(n,o,e)>=Sf))return o;let a=TR(n),l=Hf(n).length,c=null;for(let u of a){let d=di(u.text,e.paragraphText),f=s?Math.max(di(u.contextBefore,e.contextBefore),di(u.contextAfter,e.contextAfter)):0,g=1-Math.min(Math.abs(u.start-e.offset)/Math.max(n.length,1),1),y=1-Math.min(Math.abs(u.line-e.line)/Math.max(l,1),1),m=d*.78+f*.17+Math.max(g,y)*.05;(r?d>=J1||s&&d>=.55&&f>=Sf:s&&f>=Sf)&&(!c||m>c.score)&&(c={candidate:u,score:m})}return(h=c==null?void 0:c.candidate.start)!=null?h:null}function wR(n,t,e){let i=ke(n.slice(Math.max(0,t-zc),t)),r=t+e.paragraphText.length,s=ke(n.slice(r,r+zc));return Math.max(di(i,e.contextBefore),di(s,e.contextAfter))}function ER(n,t,e){var s;if(!t)return null;let i=0,r=null;for(;i<=n.length;){let o=n.indexOf(t,i);if(o<0)break;let a=Math.abs(o-e);(!r||a<r.distance)&&(r={offset:o,distance:a}),i=o+Math.max(1,t.length)}return(s=r==null?void 0:r.offset)!=null?s:null}function ny(n,t){let e=Hf(n);if(e.length===0)return null;let i=RR(e,AR(e,Ee(Math.round(t),0,n.length)));if(i===null)return null;let r=i;for(;r>0&&e[r-1].text.trim()!=="";)r-=1;let s=i;for(;s<e.length-1&&e[s+1].text.trim()!=="";)s+=1;return iy(n,e,r,s)}function TR(n){let t=Hf(n),e=[],i=0;for(;i<t.length;){if(t[i].text.trim()===""){i+=1;continue}let r=i;for(;i<t.length-1&&t[i+1].text.trim()!=="";)i+=1;let s=iy(n,t,r,i);s&&e.push(s),i+=1}return e}function iy(n,t,e,i){let r=t[e].start,s=t[i].end,o=n.slice(r,s).trim();return ke(o)?{start:r,end:s,line:e+1,text:o,contextBefore:ke(n.slice(Math.max(0,r-zc),r)),contextAfter:ke(n.slice(s,s+zc))}:null}function Hf(n){let t=[],e=0;for(;e<=n.length;){let i=n.indexOf(`
`,e);if(i<0){t.push({text:n.slice(e),start:e,end:n.length});break}let r=i>e&&n.charAt(i-1)==="\r"?i-1:i;t.push({text:n.slice(e,r),start:e,end:r}),e=i+1}return t}function AR(n,t){for(let e=0;e<n.length;e+=1){let i=e<n.length-1?n[e+1].start:Number.POSITIVE_INFINITY;if(t>=n[e].start&&t<i)return e}return Math.max(0,n.length-1)}function RR(n,t){for(let e=0;e<n.length;e+=1){let i=t+e;if(i<n.length&&n[i].text.trim()!=="")return i;let r=t-e;if(e>0&&r>=0&&n[r].text.trim()!=="")return r}return null}function Nf(n){return{schemaVersion:Cf,id:n.id,absolutePath:n.absolutePath,vaultPath:n.vaultPath,title:n.title,progressPercent:0,totalReadMs:0,hasScannedContent:!1,hasScannedCallouts:!1,sessions:[],excerpts:[],lastStableProgressPercent:0,lastStableProgressAt:null,lastReadingAnchor:null,restoreCandidates:[],cachedCounts:{highlights:0,bolds:0,annotations:0,commentaries:0,callouts:0}}}function CR(n,t){let e=n&&typeof n=="object"?n:{},i=Nf(t),r=qc(e.lastReadingAnchor),s=Array.isArray(e.restoreCandidates)?Vf(e.restoreCandidates):[],o={...i,...e,schemaVersion:Cf,absolutePath:t.absolutePath,vaultPath:t.vaultPath,title:t.title,progressPercent:Number.isFinite(e.progressPercent)?Number(e.progressPercent):i.progressPercent,totalReadMs:Number.isFinite(e.totalReadMs)?Number(e.totalReadMs):i.totalReadMs,hasScannedContent:typeof e.hasScannedContent=="boolean"?e.hasScannedContent:i.hasScannedContent,hasScannedCallouts:typeof e.hasScannedCallouts=="boolean"?e.hasScannedCallouts:i.hasScannedCallouts,sessions:Array.isArray(e.sessions)?e.sessions:[],excerpts:Array.isArray(e.excerpts)?e.excerpts.map(PR).filter(Boolean):[],lastStableProgressPercent:Number.isFinite(e.lastStableProgressPercent)?Number(e.lastStableProgressPercent):Number.isFinite(e.progressPercent)?Number(e.progressPercent):0,lastStableProgressAt:typeof e.lastStableProgressAt=="string"?e.lastStableProgressAt:null,lastReadingAnchor:r,restoreCandidates:s};Bc(o);let a=e.schemaVersion!==Cf||!e.cachedCounts||e.lastReadingAnchor===void 0||e.restoreCandidates===void 0||Array.isArray(e.restoreCandidates)&&e.restoreCandidates.length!==s.length||e.lastReadingAnchor!==void 0&&e.lastReadingAnchor!==null&&!r||e.lastStableProgressPercent===void 0||e.hasScannedCallouts===void 0||o.excerpts.some(l=>l.type==="commentary"&&l.commentaryText===void 0);return{record:o,changed:a}}function qc(n){if(!n||typeof n!="object")return null;let t=n;return typeof t.paragraphText!="string"||!ke(t.paragraphText)?null:{capturedAt:typeof t.capturedAt=="string"?t.capturedAt:new Date().toISOString(),progressPercent:Number.isFinite(t.progressPercent)?Ee(Number(t.progressPercent),0,100):0,offset:Number.isFinite(t.offset)?Math.max(0,Math.round(Number(t.offset))):0,line:Number.isFinite(t.line)?Math.max(1,Math.round(Number(t.line))):1,paragraphText:t.paragraphText,contextBefore:typeof t.contextBefore=="string"?t.contextBefore:"",contextAfter:typeof t.contextAfter=="string"?t.contextAfter:""}}function IR(n){if(!n||typeof n!="object")return null;let t=n;return typeof t.capturedAt!="string"||!Number.isFinite(Date.parse(t.capturedAt))||!Number.isFinite(t.progressPercent)?null:{capturedAt:t.capturedAt,mode:t.mode==="preview"?"preview":"source",progressPercent:ay(Ee(Number(t.progressPercent),0,100)),nativeScroll:Number.isFinite(t.nativeScroll)?Number(t.nativeScroll):void 0,scrollTop:Number.isFinite(t.scrollTop)?Number(t.scrollTop):void 0,scrollMax:Number.isFinite(t.scrollMax)?Math.max(0,Number(t.scrollMax)):void 0,anchor:qc(t.anchor)}}function PR(n){if(!n||typeof n!="object")return null;let t=n;if(typeof t.text!="string"||typeof t.sourceSyntax!="string")return null;let e=kR(t.type,t.sourceSyntax);return{id:typeof t.id=="string"?t.id:Vo(),type:e,sourceSyntax:DR(t.sourceSyntax),text:t.text,commentaryText:typeof t.commentaryText=="string"?t.commentaryText:void 0,calloutType:typeof t.calloutType=="string"?t.calloutType.toLowerCase():void 0,calloutTitle:typeof t.calloutTitle=="string"&&t.calloutTitle.trim()?t.calloutTitle.trim():void 0,calloutFold:t.calloutFold==="expanded"||t.calloutFold==="collapsed"?t.calloutFold:t.calloutFold==="none"?"none":void 0,capturedAt:typeof t.capturedAt=="string"?t.capturedAt:new Date().toISOString(),updatedAt:typeof t.updatedAt=="string"?t.updatedAt:new Date().toISOString(),baseline:typeof t.baseline=="boolean"?t.baseline:!1,position:Number.isFinite(t.position)?Number(t.position):0,line:Number.isFinite(t.line)?Number(t.line):1,contextBefore:typeof t.contextBefore=="string"?t.contextBefore:"",contextAfter:typeof t.contextAfter=="string"?t.contextAfter:""}}function kR(n,t){return n==="highlight"||n==="bold"||n==="annotation"||n==="commentary"||n==="callout"?n:t==="obsidian-callout"?"callout":t==="markdown-bold"?"bold":t==="highlight-commentary"||t==="bold-commentary"?"commentary":t==="obsidian-comment"||t==="footnote-definition"?"annotation":"highlight"}function DR(n){return n==="markdown-highlight"||n==="markdown-bold"||n==="obsidian-comment"||n==="footnote-definition"||n==="highlight-commentary"||n==="bold-commentary"||n==="obsidian-callout"?n:"markdown-highlight"}function Bc(n){n.cachedCounts={highlights:n.excerpts.filter(t=>t.type==="highlight").length,bolds:n.excerpts.filter(t=>t.type==="bold").length,annotations:n.excerpts.filter(t=>t.type==="annotation").length,commentaries:n.excerpts.filter(t=>t.type==="commentary").length,callouts:n.excerpts.filter(t=>t.type==="callout").length}}function Tf(n){return Bf(n).reduce((t,e)=>t+e.value,0)}function Bf(n){return[{label:"\u9AD8\u4EAE",value:n.cachedCounts.highlights,type:"highlight"},{label:"\u52A0\u7C97",value:n.cachedCounts.bolds,type:"bold"},{label:"\u6279\u6CE8",value:n.cachedCounts.annotations,type:"annotation"},{label:"\u70B9\u8BC4",value:n.cachedCounts.commentaries,type:"commentary"},{label:"\u6807\u6CE8",value:n.cachedCounts.callouts,type:"callout"}]}function LR(n){return[{label:"\u9AD8\u4EAE",value:n.reduce((t,e)=>t+e.cachedCounts.highlights,0),type:"highlight"},{label:"\u52A0\u7C97",value:n.reduce((t,e)=>t+e.cachedCounts.bolds,0),type:"bold"},{label:"\u6279\u6CE8",value:n.reduce((t,e)=>t+e.cachedCounts.annotations,0),type:"annotation"},{label:"\u70B9\u8BC4",value:n.reduce((t,e)=>t+e.cachedCounts.commentaries,0),type:"commentary"},{label:"\u6807\u6CE8",value:n.reduce((t,e)=>t+e.cachedCounts.callouts,0),type:"callout"}]}function FR(n){return Number.isFinite(n.lastStableProgressPercent)?n.lastStableProgressPercent:n.progressPercent}function NR(n,t){let e=mn(t),r=n.sessions.filter(o=>wr(o.startedAt,e)).sort((o,a)=>Mr(a)-Mr(o))[0];if(!r)return null;let s=t.getTime()-Mr(r);return s>=0&&s<=Q0?r:null}function Y0(n){let t=JSON.stringify(n.sessions.map(a=>[a.id,a.startedAt,a.endedAt,a.durationMs])),e=[...n.sessions].filter(a=>Number.isFinite(a.durationMs)&&a.durationMs>0).sort((a,l)=>new Date(a.startedAt).getTime()-new Date(l.startedAt).getTime()),i=[];for(let a of e){let l=i[i.length-1];if(l&&wr(l.startedAt,mn(new Date(a.startedAt)))&&ry(a)-Mr(l)<=Q0){l.durationMs+=a.durationMs,l.endedAt=new Date(Math.max(Mr(l),Mr(a))).toISOString();continue}i.push({...a})}let r=i.filter(a=>a.durationMs>=Sr),s=r.reduce((a,l)=>a+l.durationMs,0),o=t!==JSON.stringify(r.map(a=>[a.id,a.startedAt,a.endedAt,a.durationMs]))||n.totalReadMs!==s;return o&&(n.sessions=r,n.totalReadMs=s),o}function ry(n){return new Date(n.startedAt).getTime()}function Mr(n){var t;return new Date((t=n.endedAt)!=null?t:n.startedAt).getTime()}function BR(n,t){return n.sourceSyntax==="markdown-highlight"?t.detectHighlights:n.sourceSyntax==="markdown-bold"?t.detectBolds:n.sourceSyntax==="obsidian-comment"?t.detectComments:n.sourceSyntax==="footnote-definition"?t.detectFootnotes:n.sourceSyntax==="highlight-commentary"||n.sourceSyntax==="bold-commentary"?t.detectCommentaries:n.sourceSyntax==="obsidian-callout"?t.detectCallouts:!1}function sy(n){let t=n.reduce((r,s)=>r+s.value,0);if(t<=0)return"conic-gradient(var(--background-modifier-hover) 0% 100%)";let e=0,i=[];for(let[r,s]of n.entries()){if(s.value<=0)continue;let o=e+s.value/t*100;i.push(`${OR(s.type,r)} ${e}% ${o}%`),e=o}return`conic-gradient(${i.join(", ")})`}function OR(n,t=0){return n==="highlight"?"var(--mrt-color-highlight)":n==="bold"?"var(--mrt-color-bold)":n==="annotation"?"var(--mrt-color-annotation)":n==="commentary"?"var(--mrt-color-commentary)":n==="callout"?"var(--mrt-color-callout)":["var(--mrt-color-highlight)","var(--mrt-color-bold)","var(--mrt-color-annotation)","var(--mrt-color-commentary)","var(--mrt-color-callout)"][t%5]}function UR(n,t){let e=Array.from({length:24},()=>0),i=XR(t),r=i+1440*6e4;for(let s of n)for(let o of s.sessions){if(o.durationMs<=0)continue;let a=ry(o),l=Mr(o);if(l<=a&&(l=a+o.durationMs),l<=i||a>=r)continue;let c=Math.max(1,l-a),h=o.durationMs/c;for(let u=0;u<24;u+=1){let d=i+u*60*6e4,f=d+60*6e4,g=Math.max(0,Math.min(l,f)-Math.max(a,d));g>0&&(e[u]+=g*h)}}return e}function zR(n,t){let e=Uo("svg");zo(e,{viewBox:"0 0 100 58",preserveAspectRatio:"none",class:"mrt-hour-svg",role:"img","aria-label":"\u4ECA\u65E5 0 \u5230 24 \u5C0F\u65F6\u9605\u8BFB\u5206\u5E03"});for(let u of[14,30,46]){let d=Uo("line");zo(d,{x1:"0",y1:String(u),x2:"100",y2:String(u),class:"mrt-hour-grid"}),e.appendChild(d)}let i=52,s=i-8,o=n.map((u,d)=>({x:d/23*100,y:i-Ee(u/t,0,1)*s})),a=VR(o),l=`${a} L ${o[o.length-1].x.toFixed(2)} ${i} L ${o[0].x.toFixed(2)} ${i} Z`,c=Uo("path");zo(c,{d:l,class:"mrt-hour-area"}),e.appendChild(c);let h=Uo("path");return zo(h,{d:a,class:"mrt-hour-line"}),e.appendChild(h),e}function Uo(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function zo(n,t){for(let[e,i]of Object.entries(t))n.setAttribute(e,i)}function VR(n){var e,i;if(n.length===0)return"";let t=`M ${n[0].x.toFixed(2)} ${n[0].y.toFixed(2)}`;for(let r=0;r<n.length-1;r+=1){let s=(e=n[r-1])!=null?e:n[r],o=n[r],a=n[r+1],l=(i=n[r+2])!=null?i:a,c=o.x+(a.x-s.x)/6,h=o.y+(a.y-s.y)/6,u=a.x-(l.x-o.x)/6,d=a.y-(l.y-o.y)/6;t+=` C ${c.toFixed(2)} ${h.toFixed(2)}, ${u.toFixed(2)} ${d.toFixed(2)}, ${a.x.toFixed(2)} ${a.y.toFixed(2)}`}return t}function HR(n,t){for(let s=0;s<24;s+=1){let o=s/23*100,a=100/23,l=Uo("rect");zo(l,{x:(o-a/2).toFixed(2),y:String(8),width:a.toFixed(2),height:String(44),class:"mrt-hour-hotzone","data-hour":String(s)}),n.appendChild(l)}}function GR(n,t,e,i){let r=i.length,s=(a,l)=>{var g;let c=(g=i[l])!=null?g:0;e.setText(`${String(l).padStart(2,"0")}:00 \xB7 ${Pe(c)}`);let h=n.getBoundingClientRect(),u=t.getBoundingClientRect(),d=a-h.left,f=u.top-h.top-4;e.style.left=`${d}px`,e.style.top=`${f}px`,e.addClass("is-visible")},o=()=>e.removeClass("is-visible");t.addEventListener("mousemove",a=>{let l=t.getBoundingClientRect(),c=Ee((a.clientX-l.left)/l.width,0,1),h=Math.min(r-1,Math.max(0,Math.round(c*(r-1))));s(a.clientX,h)}),t.addEventListener("mouseleave",o)}function WR(){let n=new Date,t=n.getFullYear(),e=n.getMonth(),i=new Date(t,e,1),r=new Date(t,e+1,0).getDate(),s=(i.getDay()+6)%7,o=[];for(let a=1;a<=r;a+=1)o.push({key:mn(new Date(t,e,a)),day:a,weekdayOffset:s});return o}function XR(n){let[t,e,i]=n.split("-").map(Number);return new Date(t,e-1,i).getTime()}function Z0(n){var e;let t=pn(n.absolutePath);return{id:n.id||Vo(),absolutePath:t,vaultPath:n.vaultPath?(0,j.normalizePath)(n.vaultPath):null,title:n.title||Uf(t),addedAt:n.addedAt||new Date().toISOString(),updatedAt:n.updatedAt||new Date().toISOString(),lastOpenedAt:(e=n.lastOpenedAt)!=null?e:null}}function J0(){return{schemaVersion:2,settings:{...Xc,readingMapWeights:{...wi},colors:Rr()},books:[],lastLoadedAt:null}}function oy(n){var t,e;return(e=(t=n.querySelector(".cm-scroller"))!=null?t:n.querySelector(".markdown-preview-view"))!=null?e:n.querySelector(".workspace-leaf-content")}function Xi(n,t){return n.sessions.filter(e=>wr(e.startedAt,t))}function Oc(n){return n.sessions.filter(t=>t.durationMs>=Sr)}function Af(n,t){return Oc(n).filter(e=>wr(e.startedAt,t))}function Of(n){let t=new Set;for(let r of n)for(let s of r.sessions)s.durationMs>=Sr&&t.add(mn(new Date(s.startedAt)));let e=0,i=new Date;for(;t.has(mn(i));)e+=1,i.setDate(i.getDate()-1);return e}function pn(n){return n.trim().replace(/^["']|["']$/g,"").replace(/\//g,"\\").replace(/\\+/g,"\\").replace(/\\$/g,"")}function ys(n){return pn(n).toLowerCase()}function Uf(n){var e;let t=pn(n);return((e=t.split("\\").pop())!=null?e:t).replace(/\.md$/i,"")}function qR(n){return(0,j.normalizePath)((n||"").trim()).replace(/^\/+|\/+$/g,"")}function Vo(){return crypto.randomUUID?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function br(){return mn(new Date)}function mn(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function wr(n,t){return!!n&&mn(new Date(n))===t}function Rf(n){return new Date(n).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function Pe(n){let t=Math.max(0,Math.floor(n/1e3)),e=Math.floor(t/3600),i=Math.floor(t%3600/60),r=t%60;return e>0&&i>0?`${e}h ${i}m`:e>0?`${e}h`:i>0&&r>0?`${i}m ${r}s`:i>0?`${i}m`:`${r}s`}function hi(n){return`${Math.round(Ee(n,0,100))}%`}function Ee(n,t,e){return Math.min(e,Math.max(t,n))}function ay(n){return Math.round(Ee(n,0,100)*1e4)/1e4}function ke(n){return n.replace(/\s+/g," ").trim()}function di(n,t){let e=ke(n).toLowerCase(),i=ke(t).toLowerCase();if(e===i)return 1;if(!e||!i)return 0;if(e.includes(i)||i.includes(e))return Math.min(e.length,i.length)/Math.max(e.length,i.length);let r=K0(e),s=K0(i),o=0;for(let a of r)s.has(a)&&(o+=1);return r.size+s.size===0?0:2*o/(r.size+s.size)}function K0(n){let t=new Set;if(n.length<2)return t.add(n),t;for(let e=0;e<n.length-1;e+=1)t.add(n.slice(e,e+2));return t}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
