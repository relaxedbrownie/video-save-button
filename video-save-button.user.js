// ==UserScript==
// @name         동영상 저장 버튼
// @namespace    https://github.com/relaxedbrownie/video-save-button
// @version      3.3
// @description  동영상 화면을 탭하면 우측 상단에 2초간 저장 버튼을 표시 (떠 있을 때 탭하면 숨김). 한 번 눌러 불러오고, 다시 눌러 사진 앱/파일 앱에 저장. 버튼을 길게 누르면 진단 정보 표시. 일반 영상 파일과 HLS 스트리밍(.m3u8)을 지원
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @connect      *
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  // ---------- 변환 라이브러리 (mux.js 7.1.0) ----------
  // 스크립트 안에 포함: @require 다운로드 실패나 페이지의 AMD(define)·module 변수 영향을 받지 않음.
  // 아래 한 줄은 공식 배포 파일 그대로이며, 수정하지 않았음.
  // 출처: https://cdn.jsdelivr.net/npm/mux.js@7.1.0/dist/mux-mp4.min.js
  // 라이선스: Apache-2.0 (https://github.com/videojs/mux.js/blob/v7.1.0/LICENSE)
  // SHA-256: 4d00d911c3186ca8921b8710de24cf4c4ea854e47c59d3c5164779ba83a2805f
  const muxjs = (function () {
    const module = undefined, exports = undefined, define = undefined, require = undefined;
    const scope = { window: { BigInt: typeof BigInt === 'function' ? BigInt : undefined } };
    const globalThis = scope, self = scope;
/*! @name mux.js @version 7.1.0 @license Apache-2.0 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("global/window")):"function"==typeof define&&define.amd?define(["global/window"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).muxjs=e(t.window)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i,n,a,r,s,o,d,h,u,p,c,l,f,g,m,y,b,v,S,_,w,T,U,C,k,A,D,P,x,L,O,E,I,R,M,B,N,z,W,V,G=e(t),F=Math.pow(2,32),j={getUint64:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength);return i.getBigUint64?(e=i.getBigUint64(0))<Number.MAX_SAFE_INTEGER?Number(e):e:i.getUint32(0)*F+i.getUint32(4)},MAX_UINT32:F},Y=j.MAX_UINT32;!function(){var t;if(T={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],pasp:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(t in T)T.hasOwnProperty(t)&&(T[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);U=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),k=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),C=new Uint8Array([0,0,0,1]),A=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),D=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),P={video:A,audio:D},O=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),L=new Uint8Array([0,0,0,0,0,0,0,0]),E=new Uint8Array([0,0,0,0,0,0,0,0]),I=E,R=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),M=E,x=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),i=function(t){var e,i,n=[],a=0;for(e=1;e<arguments.length;e++)n.push(arguments[e]);for(e=n.length;e--;)a+=n[e].byteLength;for(i=new Uint8Array(a+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(t,4),e=0,a=8;e<n.length;e++)i.set(n[e],a),a+=n[e].byteLength;return i},n=function(){return i(T.dinf,i(T.dref,O))},a=function(t){return i(T.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,t.audioobjecttype<<3|t.samplingfrequencyindex>>>1,t.samplingfrequencyindex<<7|t.channelcount<<3,6,1,2]))},m=function(t){return i(T.hdlr,P[t])},g=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,t.duration>>>24&255,t.duration>>>16&255,t.duration>>>8&255,255&t.duration,85,196,0,0]);return t.samplerate&&(e[12]=t.samplerate>>>24&255,e[13]=t.samplerate>>>16&255,e[14]=t.samplerate>>>8&255,e[15]=255&t.samplerate),i(T.mdhd,e)},f=function(t){return i(T.mdia,g(t),m(t.type),o(t))},s=function(t){return i(T.mfhd,new Uint8Array([0,0,0,0,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t]))},o=function(t){return i(T.minf,"video"===t.type?i(T.vmhd,x):i(T.smhd,L),n(),b(t))},d=function(t,e){for(var n=[],a=e.length;a--;)n[a]=S(e[a]);return i.apply(null,[T.moof,s(t)].concat(n))},h=function(t){for(var e=t.length,n=[];e--;)n[e]=c(t[e]);return i.apply(null,[T.moov,p(4294967295)].concat(n).concat(u(t)))},u=function(t){for(var e=t.length,n=[];e--;)n[e]=_(t[e]);return i.apply(null,[T.mvex].concat(n))},p=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return i(T.mvhd,e)},y=function(t){var e,n,a=t.samples||[],r=new Uint8Array(4+a.length);for(n=0;n<a.length;n++)e=a[n].flags,r[n+4]=e.dependsOn<<4|e.isDependedOn<<2|e.hasRedundancy;return i(T.sdtp,r)},b=function(t){return i(T.stbl,v(t),i(T.stts,M),i(T.stsc,I),i(T.stsz,R),i(T.stco,E))},v=function(t){return i(T.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===t.type?B(t):N(t))},B=function(t){var e,n,a=t.sps||[],r=t.pps||[],s=[],o=[];for(e=0;e<a.length;e++)s.push((65280&a[e].byteLength)>>>8),s.push(255&a[e].byteLength),s=s.concat(Array.prototype.slice.call(a[e]));for(e=0;e<r.length;e++)o.push((65280&r[e].byteLength)>>>8),o.push(255&r[e].byteLength),o=o.concat(Array.prototype.slice.call(r[e]));if(n=[T.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&t.width)>>8,255&t.width,(65280&t.height)>>8,255&t.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),i(T.avcC,new Uint8Array([1,t.profileIdc,t.profileCompatibility,t.levelIdc,255].concat([a.length],s,[r.length],o))),i(T.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192]))],t.sarRatio){var d=t.sarRatio[0],h=t.sarRatio[1];n.push(i(T.pasp,new Uint8Array([(4278190080&d)>>24,(16711680&d)>>16,(65280&d)>>8,255&d,(4278190080&h)>>24,(16711680&h)>>16,(65280&h)>>8,255&h])))}return i.apply(null,n)},N=function(t){return i(T.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&t.channelcount)>>8,255&t.channelcount,(65280&t.samplesize)>>8,255&t.samplesize,0,0,0,0,(65280&t.samplerate)>>8,255&t.samplerate,0,0]),a(t))},l=function(t){var e=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,0,(4278190080&t.duration)>>24,(16711680&t.duration)>>16,(65280&t.duration)>>8,255&t.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&t.width)>>8,255&t.width,0,0,(65280&t.height)>>8,255&t.height,0,0]);return i(T.tkhd,e)},S=function(t){var e,n,a,r,s,o;return e=i(T.tfhd,new Uint8Array([0,0,0,58,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),s=Math.floor(t.baseMediaDecodeTime/Y),o=Math.floor(t.baseMediaDecodeTime%Y),n=i(T.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o>>>24&255,o>>>16&255,o>>>8&255,255&o])),92,"audio"===t.type?(a=w(t,92),i(T.traf,e,n,a)):(r=y(t),a=w(t,r.length+92),i(T.traf,e,n,a,r))},c=function(t){return t.duration=t.duration||4294967295,i(T.trak,l(t),f(t))},_=function(t){var e=new Uint8Array([0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return"video"!==t.type&&(e[e.length-1]=0),i(T.trex,e)},V=function(t,e){var i=0,n=0,a=0,r=0;return t.length&&(void 0!==t[0].duration&&(i=1),void 0!==t[0].size&&(n=2),void 0!==t[0].flags&&(a=4),void 0!==t[0].compositionTimeOffset&&(r=8)),[0,0,i|n|a|r,1,(4278190080&t.length)>>>24,(16711680&t.length)>>>16,(65280&t.length)>>>8,255&t.length,(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},W=function(t,e){var n,a,r,s,o,d;for(e+=20+16*(s=t.samples||[]).length,r=V(s,e),(a=new Uint8Array(r.length+16*s.length)).set(r),n=r.length,d=0;d<s.length;d++)o=s[d],a[n++]=(4278190080&o.duration)>>>24,a[n++]=(16711680&o.duration)>>>16,a[n++]=(65280&o.duration)>>>8,a[n++]=255&o.duration,a[n++]=(4278190080&o.size)>>>24,a[n++]=(16711680&o.size)>>>16,a[n++]=(65280&o.size)>>>8,a[n++]=255&o.size,a[n++]=o.flags.isLeading<<2|o.flags.dependsOn,a[n++]=o.flags.isDependedOn<<6|o.flags.hasRedundancy<<4|o.flags.paddingValue<<1|o.flags.isNonSyncSample,a[n++]=61440&o.flags.degradationPriority,a[n++]=15&o.flags.degradationPriority,a[n++]=(4278190080&o.compositionTimeOffset)>>>24,a[n++]=(16711680&o.compositionTimeOffset)>>>16,a[n++]=(65280&o.compositionTimeOffset)>>>8,a[n++]=255&o.compositionTimeOffset;return i(T.trun,a)},z=function(t,e){var n,a,r,s,o,d;for(e+=20+8*(s=t.samples||[]).length,r=V(s,e),(n=new Uint8Array(r.length+8*s.length)).set(r),a=r.length,d=0;d<s.length;d++)o=s[d],n[a++]=(4278190080&o.duration)>>>24,n[a++]=(16711680&o.duration)>>>16,n[a++]=(65280&o.duration)>>>8,n[a++]=255&o.duration,n[a++]=(4278190080&o.size)>>>24,n[a++]=(16711680&o.size)>>>16,n[a++]=(65280&o.size)>>>8,n[a++]=255&o.size;return i(T.trun,n)},w=function(t,e){return"audio"===t.type?z(t,e):W(t,e)};var X,q,H,$,Z,K,J,Q={ftyp:r=function(){return i(T.ftyp,U,C,U,k)},mdat:function(t){return i(T.mdat,t)},moof:d,moov:h,initSegment:function(t){var e,i=r(),n=h(t);return(e=new Uint8Array(i.byteLength+n.byteLength)).set(i),e.set(n,i.byteLength),e}},tt=function(t){return t>>>0},et=function(t){var e="";return e+=String.fromCharCode(t[0]),e+=String.fromCharCode(t[1]),e+=String.fromCharCode(t[2]),e+=String.fromCharCode(t[3])},it=tt,nt=function t(e,i){var n,a,r,s,o,d=[];if(!i.length)return null;for(n=0;n<e.byteLength;)a=it(e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3]),r=et(e.subarray(n+4,n+8)),s=a>1?n+a:e.byteLength,r===i[0]&&(1===i.length?d.push(e.subarray(n+8,s)):(o=t(e.subarray(n+8,s),i.slice(1))).length&&(d=d.concat(o))),n=s;return d},at=function(t){for(var e=0,i=String.fromCharCode(t[e]),n="";"\0"!==i;)n+=i,e++,i=String.fromCharCode(t[e]);return n+=i},rt=j.getUint64,st=function(t,e){var i="\0"!==e.scheme_id_uri,n=0===t&&ot(e.presentation_time_delta)&&i,a=1===t&&ot(e.presentation_time)&&i;return!(t>1)&&n||a},ot=function(t){return void 0!==t||null!==t},dt=function(t){var e,i,n,a,r,s,o,d=4,h=t[0];if(0===h)d+=(e=at(t.subarray(d))).length,d+=(i=at(t.subarray(d))).length,n=(u=new DataView(t.buffer)).getUint32(d),d+=4,r=u.getUint32(d),d+=4,s=u.getUint32(d),d+=4,o=u.getUint32(d),d+=4;else if(1===h){var u;n=(u=new DataView(t.buffer)).getUint32(d),d+=4,a=rt(t.subarray(d)),d+=8,s=u.getUint32(d),d+=4,o=u.getUint32(d),d+=4,d+=(e=at(t.subarray(d))).length,d+=(i=at(t.subarray(d))).length}var p={scheme_id_uri:e,value:i,timescale:n||1,presentation_time:a,presentation_time_delta:r,event_duration:s,id:o,message_data:new Uint8Array(t.subarray(d,t.byteLength))};return st(h,p)?p:void 0},ht=function(t,e,i,n){return t||0===t?t/e:n+i/e},ut=function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),trackId:i.getUint32(4)},a=1&n.flags[2],r=2&n.flags[2],s=8&n.flags[2],o=16&n.flags[2],d=32&n.flags[2],h=65536&n.flags[0],u=131072&n.flags[0];return e=8,a&&(e+=4,n.baseDataOffset=i.getUint32(12),e+=4),r&&(n.sampleDescriptionIndex=i.getUint32(e),e+=4),s&&(n.defaultSampleDuration=i.getUint32(e),e+=4),o&&(n.defaultSampleSize=i.getUint32(e),e+=4),d&&(n.defaultSampleFlags=i.getUint32(e)),h&&(n.durationIsEmpty=!0),!a&&u&&(n.baseDataOffsetIsMoof=!0),n},pt=function(t){return{isLeading:(12&t[0])>>>2,dependsOn:3&t[0],isDependedOn:(192&t[1])>>>6,hasRedundancy:(48&t[1])>>>4,paddingValue:(14&t[1])>>>1,isNonSyncSample:1&t[1],degradationPriority:t[2]<<8|t[3]}},ct=function(t){var e,i={version:t[0],flags:new Uint8Array(t.subarray(1,4)),samples:[]},n=new DataView(t.buffer,t.byteOffset,t.byteLength),a=1&i.flags[2],r=4&i.flags[2],s=1&i.flags[1],o=2&i.flags[1],d=4&i.flags[1],h=8&i.flags[1],u=n.getUint32(4),p=8;for(a&&(i.dataOffset=n.getInt32(p),p+=4),r&&u&&(e={flags:pt(t.subarray(p,p+4))},p+=4,s&&(e.duration=n.getUint32(p),p+=4),o&&(e.size=n.getUint32(p),p+=4),h&&(1===i.version?e.compositionTimeOffset=n.getInt32(p):e.compositionTimeOffset=n.getUint32(p),p+=4),i.samples.push(e),u--);u--;)e={},s&&(e.duration=n.getUint32(p),p+=4),o&&(e.size=n.getUint32(p),p+=4),d&&(e.flags=pt(t.subarray(p,p+4)),p+=4),h&&(1===i.version?e.compositionTimeOffset=n.getInt32(p):e.compositionTimeOffset=n.getUint32(p),p+=4),i.samples.push(e);return i},lt=tt,ft=j.getUint64,gt=function(t){var e={version:t[0],flags:new Uint8Array(t.subarray(1,4))};return 1===e.version?e.baseMediaDecodeTime=ft(t.subarray(4)):e.baseMediaDecodeTime=lt(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),e},mt=function(t,e,i){if(!t)return-1;for(var n=i;n<t.length;n++)if(t[n]===e)return n;return-1},yt=3,bt=function(t,e,i){var n,a="";for(n=e;n<i;n++)a+="%"+("00"+t[n].toString(16)).slice(-2);return a},vt=function(t,e,i){return decodeURIComponent(bt(t,e,i))},St=function(t,e,i){return unescape(bt(t,e,i))},_t=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},wt={APIC:function(t){var e,i,n=1;t.data[0]===yt&&((e=mt(t.data,0,n))<0||(t.mimeType=St(t.data,n,e),n=e+1,t.pictureType=t.data[n],n++,(i=mt(t.data,0,n))<0||(t.description=vt(t.data,n,i),n=i+1,"--\x3e"===t.mimeType?t.url=St(t.data,n,t.data.length):t.pictureData=t.data.subarray(n,t.data.length))))},"T*":function(t){t.data[0]===yt&&(t.value=vt(t.data,1,t.data.length).replace(/\0*$/,""),t.values=t.value.split("\0"))},TXXX:function(t){var e;t.data[0]===yt&&-1!==(e=mt(t.data,0,1))&&(t.description=vt(t.data,1,e),t.value=vt(t.data,e+1,t.data.length).replace(/\0*$/,""),t.data=t.value)},"W*":function(t){t.url=St(t.data,0,t.data.length).replace(/\0.*$/,"")},WXXX:function(t){var e;t.data[0]===yt&&-1!==(e=mt(t.data,0,1))&&(t.description=vt(t.data,1,e),t.url=St(t.data,e+1,t.data.length).replace(/\0.*$/,""))},PRIV:function(t){var e;for(e=0;e<t.data.length;e++)if(0===t.data[e]){t.owner=St(t.data,0,e);break}t.privateData=t.data.subarray(e+1),t.data=t.privateData}},Tt={parseId3Frames:function(t){var e,i=10,n=0,a=[];if(!(t.length<10||t[0]!=="I".charCodeAt(0)||t[1]!=="D".charCodeAt(0)||t[2]!=="3".charCodeAt(0))){n=_t(t.subarray(6,10)),n+=10,64&t[5]&&(i+=4,i+=_t(t.subarray(10,14)),n-=_t(t.subarray(16,20)));do{if((e=_t(t.subarray(i+4,i+8)))<1)break;var r={id:String.fromCharCode(t[i],t[i+1],t[i+2],t[i+3]),data:t.subarray(i+10,i+e+10)};r.key=r.id,wt[r.id]?wt[r.id](r):"T"===r.id[0]?wt["T*"](r):"W"===r.id[0]&&wt["W*"](r),a.push(r),i+=10,i+=e}while(i<n);return a}},parseSyncSafeInteger:_t,frameParsers:wt},Ut=tt,Ct=function(t){return("00"+t.toString(16)).slice(-2)},kt=j.getUint64,At=Tt.parseId3Frames;X=function(t){return nt(t,["moov","trak"]).reduce((function(t,e){var i,n,a,r,s;return(i=nt(e,["tkhd"])[0])?(n=i[0],r=Ut(i[a=0===n?12:20]<<24|i[a+1]<<16|i[a+2]<<8|i[a+3]),(s=nt(e,["mdia","mdhd"])[0])?(a=0===(n=s[0])?12:20,t[r]=Ut(s[a]<<24|s[a+1]<<16|s[a+2]<<8|s[a+3]),t):null):null}),{})},q=function(t,e){var i=nt(e,["moof","traf"]).reduce((function(e,i){var n,a,r=nt(i,["tfhd"])[0],s=Ut(r[4]<<24|r[5]<<16|r[6]<<8|r[7]),o=t[s]||9e4,d=nt(i,["tfdt"])[0],h=new DataView(d.buffer,d.byteOffset,d.byteLength);return"bigint"==typeof(n=1===d[0]?kt(d.subarray(4,12)):h.getUint32(4))?a=n/G.default.BigInt(o):"number"!=typeof n||isNaN(n)||(a=n/o),a<Number.MAX_SAFE_INTEGER&&(a=Number(a)),a<e&&(e=a),e}),1/0);return"bigint"==typeof i||isFinite(i)?i:0},H=function(t,e){var i,n=nt(e,["moof","traf"]),a=0,r=0;if(n&&n.length){var s=nt(n[0],["tfhd"])[0],o=nt(n[0],["trun"])[0],d=nt(n[0],["tfdt"])[0];if(s)i=ut(s).trackId;if(d)a=gt(d).baseMediaDecodeTime;if(o){var h=ct(o);h.samples&&h.samples.length&&(r=h.samples[0].compositionTimeOffset||0)}}var u=t[i]||9e4;"bigint"==typeof a&&(r=G.default.BigInt(r),u=G.default.BigInt(u));var p=(a+r)/u;return"bigint"==typeof p&&p<Number.MAX_SAFE_INTEGER&&(p=Number(p)),p},$=function(t){var e=nt(t,["moov","trak"]),i=[];return e.forEach((function(t){var e=nt(t,["mdia","hdlr"]),n=nt(t,["tkhd"]);e.forEach((function(t,e){var a,r,s=et(t.subarray(8,12)),o=n[e];"vide"===s&&(r=0===(a=new DataView(o.buffer,o.byteOffset,o.byteLength)).getUint8(0)?a.getUint32(12):a.getUint32(20),i.push(r))}))})),i},Z=function(t){var e=nt(t,["moov","trak"]),i=[];return e.forEach((function(t){var e,n,a={},r=nt(t,["tkhd"])[0];r&&(n=(e=new DataView(r.buffer,r.byteOffset,r.byteLength)).getUint8(0),a.id=0===n?e.getUint32(12):e.getUint32(20));var s=nt(t,["mdia","hdlr"])[0];if(s){var o=et(s.subarray(8,12));a.type="vide"===o?"video":"soun"===o?"audio":o}var d=nt(t,["mdia","minf","stbl","stsd"])[0];if(d){var h=d.subarray(8);a.codec=et(h.subarray(4,8));var u,p=nt(h,[a.codec])[0];p&&(/^[asm]vc[1-9]$/i.test(a.codec)?(u=p.subarray(78),"avcC"===et(u.subarray(4,8))&&u.length>11?(a.codec+=".",a.codec+=Ct(u[9]),a.codec+=Ct(u[10]),a.codec+=Ct(u[11])):a.codec="avc1.4d400d"):/^mp4[a,v]$/i.test(a.codec)?(u=p.subarray(28),"esds"===et(u.subarray(4,8))&&u.length>20&&0!==u[19]?(a.codec+="."+Ct(u[19]),a.codec+="."+Ct(u[20]>>>2&63).replace(/^0/,"")):a.codec="mp4a.40.2"):a.codec=a.codec.toLowerCase())}var c=nt(t,["mdia","mdhd"])[0];c&&(a.timescale=K(c)),i.push(a)})),i},J=function(t,e){return void 0===e&&(e=0),nt(t,["emsg"]).map((function(t){var i=dt(new Uint8Array(t)),n=At(i.message_data);return{cueTime:ht(i.presentation_time,i.timescale,i.presentation_time_delta,e),duration:ht(i.event_duration,i.timescale),frames:n}}))};var Dt={findBox:nt,parseType:et,timescale:X,startTime:q,compositionStartTime:H,videoTrackIds:$,tracks:Z,getTimescaleFromMediaHeader:K=function(t){var e=0===t[0]?12:20;return Ut(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])},getEmsgID3:J},Pt=function(){this.init=function(){var t={};this.on=function(e,i){t[e]||(t[e]=[]),t[e]=t[e].concat(i)},this.off=function(e,i){var n;return!!t[e]&&(n=t[e].indexOf(i),t[e]=t[e].slice(),t[e].splice(n,1),n>-1)},this.trigger=function(e){var i,n,a,r;if(i=t[e])if(2===arguments.length)for(a=i.length,n=0;n<a;++n)i[n].call(this,arguments[1]);else{for(r=[],n=arguments.length,n=1;n<arguments.length;++n)r.push(arguments[n]);for(a=i.length,n=0;n<a;++n)i[n].apply(this,r)}},this.dispose=function(){t={}}}};Pt.prototype.pipe=function(t){return this.on("data",(function(e){t.push(e)})),this.on("done",(function(e){t.flush(e)})),this.on("partialdone",(function(e){t.partialFlush(e)})),this.on("endedtimeline",(function(e){t.endTimeline(e)})),this.on("reset",(function(e){t.reset(e)})),t},Pt.prototype.push=function(t){this.trigger("data",t)},Pt.prototype.flush=function(t){this.trigger("done",t)},Pt.prototype.partialFlush=function(t){this.trigger("partialdone",t)},Pt.prototype.endTimeline=function(t){this.trigger("endedtimeline",t)},Pt.prototype.reset=function(t){this.trigger("reset",t)};var xt,Lt,Ot,Et,It,Rt,Mt,Bt,Nt=Pt,zt=function(t,e){var i={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0,isNonSyncSample:1}};return i.dataOffset=e,i.compositionTimeOffset=t.pts-t.dts,i.duration=t.duration,i.size=4*t.length,i.size+=t.byteLength,t.keyFrame&&(i.flags.dependsOn=2,i.flags.isNonSyncSample=0),i},Wt=function(t){var e,i,n=[],a=[];for(a.byteLength=0,a.nalCount=0,a.duration=0,n.byteLength=0,e=0;e<t.length;e++)"access_unit_delimiter_rbsp"===(i=t[e]).nalUnitType?(n.length&&(n.duration=i.dts-n.dts,a.byteLength+=n.byteLength,a.nalCount+=n.length,a.duration+=n.duration,a.push(n)),(n=[i]).byteLength=i.data.byteLength,n.pts=i.pts,n.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(n.keyFrame=!0),n.duration=i.dts-n.dts,n.byteLength+=i.data.byteLength,n.push(i));return a.length&&(!n.duration||n.duration<=0)&&(n.duration=a[a.length-1].duration),a.byteLength+=n.byteLength,a.nalCount+=n.length,a.duration+=n.duration,a.push(n),a},Vt=function(t){var e,i,n=[],a=[];for(n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=t[0].pts,n.dts=t[0].dts,a.byteLength=0,a.nalCount=0,a.duration=0,a.pts=t[0].pts,a.dts=t[0].dts,e=0;e<t.length;e++)(i=t[e]).keyFrame?(n.length&&(a.push(n),a.byteLength+=n.byteLength,a.nalCount+=n.nalCount,a.duration+=n.duration),(n=[i]).nalCount=i.length,n.byteLength=i.byteLength,n.pts=i.pts,n.dts=i.dts,n.duration=i.duration):(n.duration+=i.duration,n.nalCount+=i.length,n.byteLength+=i.byteLength,n.push(i));return a.length&&n.duration<=0&&(n.duration=a[a.length-1].duration),a.byteLength+=n.byteLength,a.nalCount+=n.nalCount,a.duration+=n.duration,a.push(n),a},Gt=function(t){var e;return!t[0][0].keyFrame&&t.length>1&&(e=t.shift(),t.byteLength-=e.byteLength,t.nalCount-=e.nalCount,t[0][0].dts=e.dts,t[0][0].pts=e.pts,t[0][0].duration+=e.duration),t},Ft=function(t,e){var i,n,a,r,s,o=e||0,d=[];for(i=0;i<t.length;i++)for(r=t[i],n=0;n<r.length;n++)s=r[n],o+=(a=zt(s,o)).size,d.push(a);return d},jt=function(t){var e,i,n,a,r,s,o=0,d=t.byteLength,h=t.nalCount,u=new Uint8Array(d+4*h),p=new DataView(u.buffer);for(e=0;e<t.length;e++)for(a=t[e],i=0;i<a.length;i++)for(r=a[i],n=0;n<r.length;n++)s=r[n],p.setUint32(o,s.data.byteLength),o+=4,u.set(s.data,o),o+=s.data.byteLength;return u},Yt=[33,16,5,32,164,27],Xt=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],qt=function(t){for(var e=[];t--;)e.push(0);return e},Ht=function(){if(!xt){var t={96e3:[Yt,[227,64],qt(154),[56]],88200:[Yt,[231],qt(170),[56]],64e3:[Yt,[248,192],qt(240),[56]],48e3:[Yt,[255,192],qt(268),[55,148,128],qt(54),[112]],44100:[Yt,[255,192],qt(268),[55,163,128],qt(84),[112]],32e3:[Yt,[255,192],qt(268),[55,234],qt(226),[112]],24e3:[Yt,[255,192],qt(268),[55,255,128],qt(268),[111,112],qt(126),[224]],16e3:[Yt,[255,192],qt(268),[55,255,128],qt(268),[111,255],qt(269),[223,108],qt(195),[1,192]],12e3:[Xt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,253,128],qt(259),[56]],11025:[Xt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,255,192],qt(268),[55,175,128],qt(108),[112]],8e3:[Xt,qt(268),[3,121,16],qt(47),[7]]};e=t,xt=Object.keys(e).reduce((function(t,i){return t[i]=new Uint8Array(e[i].reduce((function(t,e){return t.concat(e)}),[])),t}),{})}var e;return xt},$t=9e4;Rt=function(t,e){return Lt(It(t,e))},Mt=function(t,e){return Ot(Et(t),e)},Bt=function(t,e,i){return Et(i?t:t-e)};var Zt=$t,Kt=(Lt=function(t){return t*$t},Ot=function(t,e){return t*e},Et=function(t){return t/$t},It=function(t,e){return t/e},Rt),Jt=Mt,Qt=Bt,te=function(t,e,i,n){var a,r,s,o,d,h=0,u=0,p=0;if(e.length&&(a=Kt(t.baseMediaDecodeTime,t.samplerate),r=Math.ceil(Zt/(t.samplerate/1024)),i&&n&&(h=a-Math.max(i,n),p=(u=Math.floor(h/r))*r),!(u<1||p>Zt/2))){for((s=Ht()[t.samplerate])||(s=e[0].data),o=0;o<u;o++)d=e[0],e.splice(0,0,{data:s,dts:d.dts-r,pts:d.pts-r});return t.baseMediaDecodeTime-=Math.floor(Jt(p,t.samplerate)),p}},ee=function(t,e,i){return e.minSegmentDts>=i?t:(e.minSegmentDts=1/0,t.filter((function(t){return t.dts>=i&&(e.minSegmentDts=Math.min(e.minSegmentDts,t.dts),e.minSegmentPts=e.minSegmentDts,!0)})))},ie=function(t){var e,i,n=[];for(e=0;e<t.length;e++)i=t[e],n.push({size:i.data.byteLength,duration:1024});return n},ne=function(t){var e,i,n=0,a=new Uint8Array(function(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e].data.byteLength;return i}(t));for(e=0;e<t.length;e++)i=t[e],a.set(i.data,n),n+=i.data.byteLength;return a},ae=Zt,re=function(t){delete t.minSegmentDts,delete t.maxSegmentDts,delete t.minSegmentPts,delete t.maxSegmentPts},se=function(t,e){var i,n=t.minSegmentDts;return e||(n-=t.timelineStartInfo.dts),i=t.timelineStartInfo.baseMediaDecodeTime,i+=n,i=Math.max(0,i),"audio"===t.type&&(i*=t.samplerate/ae,i=Math.floor(i)),i},oe=function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts&&(t.timelineStartInfo.pts=e.pts),void 0===t.minSegmentPts?t.minSegmentPts=e.pts:t.minSegmentPts=Math.min(t.minSegmentPts,e.pts),void 0===t.maxSegmentPts?t.maxSegmentPts=e.pts:t.maxSegmentPts=Math.max(t.maxSegmentPts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts),void 0===t.minSegmentDts?t.minSegmentDts=e.dts:t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),void 0===t.maxSegmentDts?t.maxSegmentDts=e.dts:t.maxSegmentDts=Math.max(t.maxSegmentDts,e.dts))},de=function(t){for(var e=0,i={payloadType:-1,payloadSize:0},n=0,a=0;e<t.byteLength&&128!==t[e];){for(;255===t[e];)n+=255,e++;for(n+=t[e++];255===t[e];)a+=255,e++;if(a+=t[e++],!i.payload&&4===n){if("GA94"===String.fromCharCode(t[e+3],t[e+4],t[e+5],t[e+6])){i.payloadType=n,i.payloadSize=a,i.payload=t.subarray(e,e+a);break}i.payload=void 0}e+=a,n=0,a=0}return i},he=function(t){return 181!==t.payload[0]||49!=(t.payload[1]<<8|t.payload[2])||"GA94"!==String.fromCharCode(t.payload[3],t.payload[4],t.payload[5],t.payload[6])||3!==t.payload[7]?null:t.payload.subarray(8,t.payload.length-1)},ue=function(t,e){var i,n,a,r,s=[];if(!(64&e[0]))return s;for(n=31&e[0],i=0;i<n;i++)r={type:3&e[(a=3*i)+2],pts:t},4&e[a+2]&&(r.ccData=e[a+3]<<8|e[a+4],s.push(r));return s},pe=function(t){for(var e,i,n=t.byteLength,a=[],r=1;r<n-2;)0===t[r]&&0===t[r+1]&&3===t[r+2]?(a.push(r+2),r+=2):r++;if(0===a.length)return t;e=n-a.length,i=new Uint8Array(e);var s=0;for(r=0;r<e;s++,r++)s===a[0]&&(s++,a.shift()),i[r]=t[s];return i},ce=4,le=function t(e){e=e||{},t.prototype.init.call(this),this.parse708captions_="boolean"!=typeof e.parse708captions||e.parse708captions,this.captionPackets_=[],this.ccStreams_=[new Te(0,0),new Te(0,1),new Te(1,0),new Te(1,1)],this.parse708captions_&&(this.cc708Stream_=new be({captionServices:e.captionServices})),this.reset(),this.ccStreams_.forEach((function(t){t.on("data",this.trigger.bind(this,"data")),t.on("partialdone",this.trigger.bind(this,"partialdone")),t.on("done",this.trigger.bind(this,"done"))}),this),this.parse708captions_&&(this.cc708Stream_.on("data",this.trigger.bind(this,"data")),this.cc708Stream_.on("partialdone",this.trigger.bind(this,"partialdone")),this.cc708Stream_.on("done",this.trigger.bind(this,"done")))};(le.prototype=new Nt).push=function(t){var e,i,n;if("sei_rbsp"===t.nalUnitType&&(e=de(t.escapedRBSP)).payload&&e.payloadType===ce&&(i=he(e)))if(t.dts<this.latestDts_)this.ignoreNextEqualDts_=!0;else{if(t.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1));n=ue(t.pts,i),this.captionPackets_=this.captionPackets_.concat(n),this.latestDts_!==t.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=t.dts}},le.prototype.flushCCStreams=function(t){this.ccStreams_.forEach((function(e){return"flush"===t?e.flush():e.partialFlush()}),this)},le.prototype.flushStream=function(t){this.captionPackets_.length?(this.captionPackets_.forEach((function(t,e){t.presortIndex=e})),this.captionPackets_.sort((function(t,e){return t.pts===e.pts?t.presortIndex-e.presortIndex:t.pts-e.pts})),this.captionPackets_.forEach((function(t){t.type<2?this.dispatchCea608Packet(t):this.dispatchCea708Packet(t)}),this),this.captionPackets_.length=0,this.flushCCStreams(t)):this.flushCCStreams(t)},le.prototype.flush=function(){return this.flushStream("flush")},le.prototype.partialFlush=function(){return this.flushStream("partialFlush")},le.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach((function(t){t.reset()}))},le.prototype.dispatchCea608Packet=function(t){this.setsTextOrXDSActive(t)?this.activeCea608Channel_[t.type]=null:this.setsChannel1Active(t)?this.activeCea608Channel_[t.type]=0:this.setsChannel2Active(t)&&(this.activeCea608Channel_[t.type]=1),null!==this.activeCea608Channel_[t.type]&&this.ccStreams_[(t.type<<1)+this.activeCea608Channel_[t.type]].push(t)},le.prototype.setsChannel1Active=function(t){return 4096==(30720&t.ccData)},le.prototype.setsChannel2Active=function(t){return 6144==(30720&t.ccData)},le.prototype.setsTextOrXDSActive=function(t){return 256==(28928&t.ccData)||4138==(30974&t.ccData)||6186==(30974&t.ccData)},le.prototype.dispatchCea708Packet=function(t){this.parse708captions_&&this.cc708Stream_.push(t)};var fe={127:9834,4128:32,4129:160,4133:8230,4138:352,4140:338,4144:9608,4145:8216,4146:8217,4147:8220,4148:8221,4149:8226,4153:8482,4154:353,4156:339,4157:8480,4159:376,4214:8539,4215:8540,4216:8541,4217:8542,4218:9168,4219:9124,4220:9123,4221:9135,4222:9126,4223:9121,4256:12600},ge=function(t){return 32<=t&&t<=127||160<=t&&t<=255},me=function(t){this.windowNum=t,this.reset()};me.prototype.reset=function(){this.clearText(),this.pendingNewLine=!1,this.winAttr={},this.penAttr={},this.penLoc={},this.penColor={},this.visible=0,this.rowLock=0,this.columnLock=0,this.priority=0,this.relativePositioning=0,this.anchorVertical=0,this.anchorHorizontal=0,this.anchorPoint=0,this.rowCount=1,this.virtualRowCount=this.rowCount+1,this.columnCount=41,this.windowStyle=0,this.penStyle=0},me.prototype.getText=function(){return this.rows.join("\n")},me.prototype.clearText=function(){this.rows=[""],this.rowIdx=0},me.prototype.newLine=function(t){for(this.rows.length>=this.virtualRowCount&&"function"==typeof this.beforeRowOverflow&&this.beforeRowOverflow(t),this.rows.length>0&&(this.rows.push(""),this.rowIdx++);this.rows.length>this.virtualRowCount;)this.rows.shift(),this.rowIdx--},me.prototype.isEmpty=function(){return 0===this.rows.length||1===this.rows.length&&""===this.rows[0]},me.prototype.addText=function(t){this.rows[this.rowIdx]+=t},me.prototype.backspace=function(){if(!this.isEmpty()){var t=this.rows[this.rowIdx];this.rows[this.rowIdx]=t.substr(0,t.length-1)}};var ye=function(t,e,i){this.serviceNum=t,this.text="",this.currentWindow=new me(-1),this.windows=[],this.stream=i,"string"==typeof e&&this.createTextDecoder(e)};ye.prototype.init=function(t,e){this.startPts=t;for(var i=0;i<8;i++)this.windows[i]=new me(i),"function"==typeof e&&(this.windows[i].beforeRowOverflow=e)},ye.prototype.setCurrentWindow=function(t){this.currentWindow=this.windows[t]},ye.prototype.createTextDecoder=function(t){if("undefined"==typeof TextDecoder)this.stream.trigger("log",{level:"warn",message:"The `encoding` option is unsupported without TextDecoder support"});else try{this.textDecoder_=new TextDecoder(t)}catch(e){this.stream.trigger("log",{level:"warn",message:"TextDecoder could not be created with "+t+" encoding. "+e})}};var be=function t(e){e=e||{},t.prototype.init.call(this);var i,n=this,a=e.captionServices||{},r={};Object.keys(a).forEach((function(t){i=a[t],/^SERVICE/.test(t)&&(r[t]=i.encoding)})),this.serviceEncodings=r,this.current708Packet=null,this.services={},this.push=function(t){3===t.type?(n.new708Packet(),n.add708Bytes(t)):(null===n.current708Packet&&n.new708Packet(),n.add708Bytes(t))}};be.prototype=new Nt,be.prototype.new708Packet=function(){null!==this.current708Packet&&this.push708Packet(),this.current708Packet={data:[],ptsVals:[]}},be.prototype.add708Bytes=function(t){var e=t.ccData,i=e>>>8,n=255&e;this.current708Packet.ptsVals.push(t.pts),this.current708Packet.data.push(i),this.current708Packet.data.push(n)},be.prototype.push708Packet=function(){var t=this.current708Packet,e=t.data,i=null,n=null,a=0,r=e[a++];for(t.seq=r>>6,t.sizeCode=63&r;a<e.length;a++)n=31&(r=e[a++]),7===(i=r>>5)&&n>0&&(i=r=e[a++]),this.pushServiceBlock(i,a,n),n>0&&(a+=n-1)},be.prototype.pushServiceBlock=function(t,e,i){var n,a=e,r=this.current708Packet.data,s=this.services[t];for(s||(s=this.initService(t,a));a<e+i&&a<r.length;a++)n=r[a],ge(n)?a=this.handleText(a,s):24===n?a=this.multiByteCharacter(a,s):16===n?a=this.extendedCommands(a,s):128<=n&&n<=135?a=this.setCurrentWindow(a,s):152<=n&&n<=159?a=this.defineWindow(a,s):136===n?a=this.clearWindows(a,s):140===n?a=this.deleteWindows(a,s):137===n?a=this.displayWindows(a,s):138===n?a=this.hideWindows(a,s):139===n?a=this.toggleWindows(a,s):151===n?a=this.setWindowAttributes(a,s):144===n?a=this.setPenAttributes(a,s):145===n?a=this.setPenColor(a,s):146===n?a=this.setPenLocation(a,s):143===n?s=this.reset(a,s):8===n?s.currentWindow.backspace():12===n?s.currentWindow.clearText():13===n?s.currentWindow.pendingNewLine=!0:14===n?s.currentWindow.clearText():141===n&&a++},be.prototype.extendedCommands=function(t,e){var i=this.current708Packet.data[++t];return ge(i)&&(t=this.handleText(t,e,{isExtended:!0})),t},be.prototype.getPts=function(t){return this.current708Packet.ptsVals[Math.floor(t/2)]},be.prototype.initService=function(t,e){var i,n,a=this;return(i="SERVICE"+t)in this.serviceEncodings&&(n=this.serviceEncodings[i]),this.services[t]=new ye(t,n,a),this.services[t].init(this.getPts(e),(function(e){a.flushDisplayed(e,a.services[t])})),this.services[t]},be.prototype.handleText=function(t,e,i){var n,a,r,s,o=i&&i.isExtended,d=i&&i.isMultiByte,h=this.current708Packet.data,u=o?4096:0,p=h[t],c=h[t+1],l=e.currentWindow;if(d?(a=[p,c],t++):a=[p],e.textDecoder_&&!o)n=e.textDecoder_.decode(new Uint8Array(a));else if(d){var f=a.map((function(t){return("0"+(255&t).toString(16)).slice(-2)})).join("");n=String.fromCharCode(parseInt(f,16))}else s=fe[r=u|p]||r,n=4096&r&&r===s?"":String.fromCharCode(s);return l.pendingNewLine&&!l.isEmpty()&&l.newLine(this.getPts(t)),l.pendingNewLine=!1,l.addText(n),t},be.prototype.multiByteCharacter=function(t,e){var i=this.current708Packet.data,n=i[t+1],a=i[t+2];return ge(n)&&ge(a)&&(t=this.handleText(++t,e,{isMultiByte:!0})),t},be.prototype.setCurrentWindow=function(t,e){var i=7&this.current708Packet.data[t];return e.setCurrentWindow(i),t},be.prototype.defineWindow=function(t,e){var i=this.current708Packet.data,n=i[t],a=7&n;e.setCurrentWindow(a);var r=e.currentWindow;return n=i[++t],r.visible=(32&n)>>5,r.rowLock=(16&n)>>4,r.columnLock=(8&n)>>3,r.priority=7&n,n=i[++t],r.relativePositioning=(128&n)>>7,r.anchorVertical=127&n,n=i[++t],r.anchorHorizontal=n,n=i[++t],r.anchorPoint=(240&n)>>4,r.rowCount=15&n,n=i[++t],r.columnCount=63&n,n=i[++t],r.windowStyle=(56&n)>>3,r.penStyle=7&n,r.virtualRowCount=r.rowCount+1,t},be.prototype.setWindowAttributes=function(t,e){var i=this.current708Packet.data,n=i[t],a=e.currentWindow.winAttr;return n=i[++t],a.fillOpacity=(192&n)>>6,a.fillRed=(48&n)>>4,a.fillGreen=(12&n)>>2,a.fillBlue=3&n,n=i[++t],a.borderType=(192&n)>>6,a.borderRed=(48&n)>>4,a.borderGreen=(12&n)>>2,a.borderBlue=3&n,n=i[++t],a.borderType+=(128&n)>>5,a.wordWrap=(64&n)>>6,a.printDirection=(48&n)>>4,a.scrollDirection=(12&n)>>2,a.justify=3&n,n=i[++t],a.effectSpeed=(240&n)>>4,a.effectDirection=(12&n)>>2,a.displayEffect=3&n,t},be.prototype.flushDisplayed=function(t,e){for(var i=[],n=0;n<8;n++)e.windows[n].visible&&!e.windows[n].isEmpty()&&i.push(e.windows[n].getText());e.endPts=t,e.text=i.join("\n\n"),this.pushCaption(e),e.startPts=t},be.prototype.pushCaption=function(t){""!==t.text&&(this.trigger("data",{startPts:t.startPts,endPts:t.endPts,text:t.text,stream:"cc708_"+t.serviceNum}),t.text="",t.startPts=t.endPts)},be.prototype.displayWindows=function(t,e){var i=this.current708Packet.data[++t],n=this.getPts(t);this.flushDisplayed(n,e);for(var a=0;a<8;a++)i&1<<a&&(e.windows[a].visible=1);return t},be.prototype.hideWindows=function(t,e){var i=this.current708Packet.data[++t],n=this.getPts(t);this.flushDisplayed(n,e);for(var a=0;a<8;a++)i&1<<a&&(e.windows[a].visible=0);return t},be.prototype.toggleWindows=function(t,e){var i=this.current708Packet.data[++t],n=this.getPts(t);this.flushDisplayed(n,e);for(var a=0;a<8;a++)i&1<<a&&(e.windows[a].visible^=1);return t},be.prototype.clearWindows=function(t,e){var i=this.current708Packet.data[++t],n=this.getPts(t);this.flushDisplayed(n,e);for(var a=0;a<8;a++)i&1<<a&&e.windows[a].clearText();return t},be.prototype.deleteWindows=function(t,e){var i=this.current708Packet.data[++t],n=this.getPts(t);this.flushDisplayed(n,e);for(var a=0;a<8;a++)i&1<<a&&e.windows[a].reset();return t},be.prototype.setPenAttributes=function(t,e){var i=this.current708Packet.data,n=i[t],a=e.currentWindow.penAttr;return n=i[++t],a.textTag=(240&n)>>4,a.offset=(12&n)>>2,a.penSize=3&n,n=i[++t],a.italics=(128&n)>>7,a.underline=(64&n)>>6,a.edgeType=(56&n)>>3,a.fontStyle=7&n,t},be.prototype.setPenColor=function(t,e){var i=this.current708Packet.data,n=i[t],a=e.currentWindow.penColor;return n=i[++t],a.fgOpacity=(192&n)>>6,a.fgRed=(48&n)>>4,a.fgGreen=(12&n)>>2,a.fgBlue=3&n,n=i[++t],a.bgOpacity=(192&n)>>6,a.bgRed=(48&n)>>4,a.bgGreen=(12&n)>>2,a.bgBlue=3&n,n=i[++t],a.edgeRed=(48&n)>>4,a.edgeGreen=(12&n)>>2,a.edgeBlue=3&n,t},be.prototype.setPenLocation=function(t,e){var i=this.current708Packet.data,n=i[t],a=e.currentWindow.penLoc;return e.currentWindow.pendingNewLine=!0,n=i[++t],a.row=15&n,n=i[++t],a.column=63&n,t},be.prototype.reset=function(t,e){var i=this.getPts(t);return this.flushDisplayed(i,e),this.initService(e.serviceNum,t)};var ve={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},Se=function(t){return null===t?"":(t=ve[t]||t,String.fromCharCode(t))},_e=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],we=function(){for(var t=[],e=15;e--;)t.push({text:"",indent:0,offset:0});return t},Te=function t(e,i){t.prototype.init.call(this),this.field_=e||0,this.dataChannel_=i||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(t){var e,i,n,a,r;if((e=32639&t.ccData)!==this.lastControlCode_){if(4096==(61440&e)?this.lastControlCode_=e:e!==this.PADDING_&&(this.lastControlCode_=null),n=e>>>8,a=255&e,e!==this.PADDING_)if(e===this.RESUME_CAPTION_LOADING_)this.mode_="popOn";else if(e===this.END_OF_CAPTION_)this.mode_="popOn",this.clearFormatting(t.pts),this.flushDisplayed(t.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=t.pts;else if(e===this.ROLL_UP_2_ROWS_)this.rollUpRows_=2,this.setRollUp(t.pts);else if(e===this.ROLL_UP_3_ROWS_)this.rollUpRows_=3,this.setRollUp(t.pts);else if(e===this.ROLL_UP_4_ROWS_)this.rollUpRows_=4,this.setRollUp(t.pts);else if(e===this.CARRIAGE_RETURN_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),this.shiftRowsUp_(),this.startPts_=t.pts;else if(e===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[this.row_].text=this.nonDisplayed_[this.row_].text.slice(0,-1):this.displayed_[this.row_].text=this.displayed_[this.row_].text.slice(0,-1);else if(e===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(t.pts),this.displayed_=we();else if(e===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=we();else if(e===this.RESUME_DIRECT_CAPTIONING_)"paintOn"!==this.mode_&&(this.flushDisplayed(t.pts),this.displayed_=we()),this.mode_="paintOn",this.startPts_=t.pts;else if(this.isSpecialCharacter(n,a))r=Se((n=(3&n)<<8)|a),this[this.mode_](t.pts,r),this.column_++;else if(this.isExtCharacter(n,a))"popOn"===this.mode_?this.nonDisplayed_[this.row_].text=this.nonDisplayed_[this.row_].text.slice(0,-1):this.displayed_[this.row_].text=this.displayed_[this.row_].text.slice(0,-1),r=Se((n=(3&n)<<8)|a),this[this.mode_](t.pts,r),this.column_++;else if(this.isMidRowCode(n,a))this.clearFormatting(t.pts),this[this.mode_](t.pts," "),this.column_++,14==(14&a)&&this.addFormatting(t.pts,["i"]),1==(1&a)&&this.addFormatting(t.pts,["u"]);else if(this.isOffsetControlCode(n,a)){var s=3&a;this.nonDisplayed_[this.row_].offset=s,this.column_+=s}else if(this.isPAC(n,a)){var o=_e.indexOf(7968&e);if("rollUp"===this.mode_&&(o-this.rollUpRows_+1<0&&(o=this.rollUpRows_-1),this.setRollUp(t.pts,o)),o!==this.row_&&o>=0&&o<=14&&(this.clearFormatting(t.pts),this.row_=o),1&a&&-1===this.formatting_.indexOf("u")&&this.addFormatting(t.pts,["u"]),16==(16&e)){var d=(14&e)>>1;this.column_=4*d,this.nonDisplayed_[this.row_].indent+=d}this.isColorPAC(a)&&14==(14&a)&&this.addFormatting(t.pts,["i"])}else this.isNormalChar(n)&&(0===a&&(a=null),r=Se(n),r+=Se(a),this[this.mode_](t.pts,r),this.column_+=r.length)}else this.lastControlCode_=null}};Te.prototype=new Nt,Te.prototype.flushDisplayed=function(t){var e=this,i=function(t){e.trigger("log",{level:"warn",message:"Skipping a malformed 608 caption at index "+t+"."})},n=[];this.displayed_.forEach((function(t,e){if(t&&t.text&&t.text.length){try{t.text=t.text.trim()}catch(t){i(e)}t.text.length&&n.push({text:t.text,line:e+1,position:10+Math.min(70,10*t.indent)+2.5*t.offset})}else null==t&&i(e)})),n.length&&this.trigger("data",{startPts:this.startPts_,endPts:t,content:n,stream:this.name_})},Te.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=we(),this.nonDisplayed_=we(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.rollUpRows_=2,this.formatting_=[]},Te.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},Te.prototype.isSpecialCharacter=function(t,e){return t===this.EXT_&&e>=48&&e<=63},Te.prototype.isExtCharacter=function(t,e){return(t===this.EXT_+1||t===this.EXT_+2)&&e>=32&&e<=63},Te.prototype.isMidRowCode=function(t,e){return t===this.EXT_&&e>=32&&e<=47},Te.prototype.isOffsetControlCode=function(t,e){return t===this.OFFSET_&&e>=33&&e<=35},Te.prototype.isPAC=function(t,e){return t>=this.BASE_&&t<this.BASE_+8&&e>=64&&e<=127},Te.prototype.isColorPAC=function(t){return t>=64&&t<=79||t>=96&&t<=127},Te.prototype.isNormalChar=function(t){return t>=32&&t<=127},Te.prototype.setRollUp=function(t,e){if("rollUp"!==this.mode_&&(this.row_=14,this.mode_="rollUp",this.flushDisplayed(t),this.nonDisplayed_=we(),this.displayed_=we()),void 0!==e&&e!==this.row_)for(var i=0;i<this.rollUpRows_;i++)this.displayed_[e-i]=this.displayed_[this.row_-i],this.displayed_[this.row_-i]={text:"",indent:0,offset:0};void 0===e&&(e=this.row_),this.topRow_=e-this.rollUpRows_+1},Te.prototype.addFormatting=function(t,e){this.formatting_=this.formatting_.concat(e);var i=e.reduce((function(t,e){return t+"<"+e+">"}),"");this[this.mode_](t,i)},Te.prototype.clearFormatting=function(t){if(this.formatting_.length){var e=this.formatting_.reverse().reduce((function(t,e){return t+"</"+e+">"}),"");this.formatting_=[],this[this.mode_](t,e)}},Te.prototype.popOn=function(t,e){var i=this.nonDisplayed_[this.row_].text;i+=e,this.nonDisplayed_[this.row_].text=i},Te.prototype.rollUp=function(t,e){var i=this.displayed_[this.row_].text;i+=e,this.displayed_[this.row_].text=i},Te.prototype.shiftRowsUp_=function(){var t;for(t=0;t<this.topRow_;t++)this.displayed_[t]={text:"",indent:0,offset:0};for(t=this.row_+1;t<15;t++)this.displayed_[t]={text:"",indent:0,offset:0};for(t=this.topRow_;t<this.row_;t++)this.displayed_[t]=this.displayed_[t+1];this.displayed_[this.row_]={text:"",indent:0,offset:0}},Te.prototype.paintOn=function(t,e){var i=this.displayed_[this.row_].text;i+=e,this.displayed_[this.row_].text=i};var Ue={CaptionStream:le,Cea608Stream:Te,Cea708Stream:be},Ce={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},ke="shared",Ae=function(t,e){var i=1;for(t>e&&(i=-1);Math.abs(e-t)>4294967296;)t+=8589934592*i;return t},De=function t(e){var i,n;t.prototype.init.call(this),this.type_=e||ke,this.push=function(t){"metadata"!==t.type?this.type_!==ke&&t.type!==this.type_||(void 0===n&&(n=t.dts),t.dts=Ae(t.dts,n),t.pts=Ae(t.pts,n),i=t.dts,this.trigger("data",t)):this.trigger("data",t)},this.flush=function(){n=i,this.trigger("done")},this.endTimeline=function(){this.flush(),this.trigger("endedtimeline")},this.discontinuity=function(){n=void 0,i=void 0},this.reset=function(){this.discontinuity(),this.trigger("reset")}};De.prototype=new Nt;var Pe,xe=De;(Pe=function(t){var e,i={descriptor:t&&t.descriptor},n=0,a=[],r=0;if(Pe.prototype.init.call(this),this.dispatchType=Ce.METADATA_STREAM_TYPE.toString(16),i.descriptor)for(e=0;e<i.descriptor.length;e++)this.dispatchType+=("00"+i.descriptor[e].toString(16)).slice(-2);this.push=function(t){var e,i,s,o,d;if("timed-metadata"===t.type)if(t.dataAlignmentIndicator&&(r=0,a.length=0),0===a.length&&(t.data.length<10||t.data[0]!=="I".charCodeAt(0)||t.data[1]!=="D".charCodeAt(0)||t.data[2]!=="3".charCodeAt(0)))this.trigger("log",{level:"warn",message:"Skipping unrecognized metadata packet"});else if(a.push(t),r+=t.data.byteLength,1===a.length&&(n=Tt.parseSyncSafeInteger(t.data.subarray(6,10)),n+=10),!(r<n)){for(e={data:new Uint8Array(n),frames:[],pts:a[0].pts,dts:a[0].dts},d=0;d<n;)e.data.set(a[0].data.subarray(0,n-d),d),d+=a[0].data.byteLength,r-=a[0].data.byteLength,a.shift();i=10,64&e.data[5]&&(i+=4,i+=Tt.parseSyncSafeInteger(e.data.subarray(10,14)),n-=Tt.parseSyncSafeInteger(e.data.subarray(16,20)));do{if((s=Tt.parseSyncSafeInteger(e.data.subarray(i+4,i+8)))<1){this.trigger("log",{level:"warn",message:"Malformed ID3 frame encountered. Skipping remaining metadata parsing."});break}if((o={id:String.fromCharCode(e.data[i],e.data[i+1],e.data[i+2],e.data[i+3]),data:e.data.subarray(i+10,i+s+10)}).key=o.id,Tt.frameParsers[o.id]?Tt.frameParsers[o.id](o):"T"===o.id[0]?Tt.frameParsers["T*"](o):"W"===o.id[0]&&Tt.frameParsers["W*"](o),"com.apple.streaming.transportStreamTimestamp"===o.owner){var h=o.data,u=(1&h[3])<<30|h[4]<<22|h[5]<<14|h[6]<<6|h[7]>>>2;u*=4,u+=3&h[7],o.timeStamp=u,void 0===e.pts&&void 0===e.dts&&(e.pts=o.timeStamp,e.dts=o.timeStamp),this.trigger("timestamp",o)}e.frames.push(o),i+=10,i+=s}while(i<n);this.trigger("data",e)}}}).prototype=new Nt;var Le,Oe,Ee,Ie=Pe,Re=xe,Me=188;(Le=function(){var t=new Uint8Array(Me),e=0;Le.prototype.init.call(this),this.push=function(i){var n,a=0,r=Me;for(e?((n=new Uint8Array(i.byteLength+e)).set(t.subarray(0,e)),n.set(i,e),e=0):n=i;r<n.byteLength;)71!==n[a]||71!==n[r]?(a++,r++):(this.trigger("data",n.subarray(a,r)),a+=Me,r+=Me);a<n.byteLength&&(t.set(n.subarray(a),0),e=n.byteLength-a)},this.flush=function(){e===Me&&71===t[0]&&(this.trigger("data",t),e=0),this.trigger("done")},this.endTimeline=function(){this.flush(),this.trigger("endedtimeline")},this.reset=function(){e=0,this.trigger("reset")}}).prototype=new Nt,(Oe=function(){var t,e,i,n;Oe.prototype.init.call(this),n=this,this.packetsWaitingForPmt=[],this.programMapTable=void 0,t=function(t,n){var a=0;n.payloadUnitStartIndicator&&(a+=t[a]+1),"pat"===n.type?e(t.subarray(a),n):i(t.subarray(a),n)},e=function(t,e){e.section_number=t[7],e.last_section_number=t[8],n.pmtPid=(31&t[10])<<8|t[11],e.pmtPid=n.pmtPid},i=function(t,e){var i,a;if(1&t[5]){for(n.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&t[1])<<8|t[2])-4,a=12+((15&t[10])<<8|t[11]);a<i;){var r=t[a],s=(31&t[a+1])<<8|t[a+2];r===Ce.H264_STREAM_TYPE&&null===n.programMapTable.video?n.programMapTable.video=s:r===Ce.ADTS_STREAM_TYPE&&null===n.programMapTable.audio?n.programMapTable.audio=s:r===Ce.METADATA_STREAM_TYPE&&(n.programMapTable["timed-metadata"][s]=r),a+=5+((15&t[a+3])<<8|t[a+4])}e.programMapTable=n.programMapTable}},this.push=function(e){var i={},n=4;if(i.payloadUnitStartIndicator=!!(64&e[1]),i.pid=31&e[1],i.pid<<=8,i.pid|=e[2],(48&e[3])>>>4>1&&(n+=e[n]+1),0===i.pid)i.type="pat",t(e.subarray(n),i),this.trigger("data",i);else if(i.pid===this.pmtPid)for(i.type="pmt",t(e.subarray(n),i),this.trigger("data",i);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift());else void 0===this.programMapTable?this.packetsWaitingForPmt.push([e,n,i]):this.processPes_(e,n,i)},this.processPes_=function(t,e,i){i.pid===this.programMapTable.video?i.streamType=Ce.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=Ce.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=t.subarray(e),this.trigger("data",i)}}).prototype=new Nt,Oe.STREAM_TYPES={h264:27,adts:15},(Ee=function(){var t,e=this,i=!1,n={data:[],size:0},a={data:[],size:0},r={data:[],size:0},s=function(t,i,n){var a,r,s=new Uint8Array(t.size),o={type:i},d=0,h=0;if(t.data.length&&!(t.size<9)){for(o.trackId=t.data[0].pid,d=0;d<t.data.length;d++)r=t.data[d],s.set(r.data,h),h+=r.data.byteLength;var u,p,c,l;p=o,l=(u=s)[0]<<16|u[1]<<8|u[2],p.data=new Uint8Array,1===l&&(p.packetLength=6+(u[4]<<8|u[5]),p.dataAlignmentIndicator=0!=(4&u[6]),192&(c=u[7])&&(p.pts=(14&u[9])<<27|(255&u[10])<<20|(254&u[11])<<12|(255&u[12])<<5|(254&u[13])>>>3,p.pts*=4,p.pts+=(6&u[13])>>>1,p.dts=p.pts,64&c&&(p.dts=(14&u[14])<<27|(255&u[15])<<20|(254&u[16])<<12|(255&u[17])<<5|(254&u[18])>>>3,p.dts*=4,p.dts+=(6&u[18])>>>1)),p.data=u.subarray(9+u[8])),a="video"===i||o.packetLength<=t.size,(n||a)&&(t.size=0,t.data.length=0),a&&e.trigger("data",o)}};Ee.prototype.init.call(this),this.push=function(o){({pat:function(){},pes:function(){var t,e;switch(o.streamType){case Ce.H264_STREAM_TYPE:t=n,e="video";break;case Ce.ADTS_STREAM_TYPE:t=a,e="audio";break;case Ce.METADATA_STREAM_TYPE:t=r,e="timed-metadata";break;default:return}o.payloadUnitStartIndicator&&s(t,e,!0),t.data.push(o),t.size+=o.data.byteLength},pmt:function(){var n={type:"metadata",tracks:[]};null!==(t=o.programMapTable).video&&n.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+t.video,codec:"avc",type:"video"}),null!==t.audio&&n.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+t.audio,codec:"adts",type:"audio"}),i=!0,e.trigger("data",n)}})[o.type]()},this.reset=function(){n.size=0,n.data.length=0,a.size=0,a.data.length=0,this.trigger("reset")},this.flushStreams_=function(){s(n,"video"),s(a,"audio"),s(r,"timed-metadata")},this.flush=function(){if(!i&&t){var n={type:"metadata",tracks:[]};null!==t.video&&n.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+t.video,codec:"avc",type:"video"}),null!==t.audio&&n.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+t.audio,codec:"adts",type:"audio"}),e.trigger("data",n)}i=!1,this.flushStreams_(),this.trigger("done")}}).prototype=new Nt;var Be={PAT_PID:0,MP2T_PACKET_LENGTH:Me,TransportPacketStream:Le,TransportParseStream:Oe,ElementaryStream:Ee,TimestampRolloverStream:Re,CaptionStream:Ue.CaptionStream,Cea608Stream:Ue.Cea608Stream,Cea708Stream:Ue.Cea708Stream,MetadataStream:Ie};for(var Ne in Ce)Ce.hasOwnProperty(Ne)&&(Be[Ne]=Ce[Ne]);var ze,We=Be,Ve=Zt,Ge=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(ze=function(t){var e,i=0;ze.prototype.init.call(this),this.skipWarn_=function(t,e){this.trigger("log",{level:"warn",message:"adts skiping bytes "+t+" to "+e+" in frame "+i+" outside syncword"})},this.push=function(n){var a,r,s,o,d,h=0;if(t||(i=0),"audio"===n.type){var u;for(e&&e.length?(s=e,(e=new Uint8Array(s.byteLength+n.data.byteLength)).set(s),e.set(n.data,s.byteLength)):e=n.data;h+7<e.length;)if(255===e[h]&&240==(246&e[h+1])){if("number"==typeof u&&(this.skipWarn_(u,h),u=null),r=2*(1&~e[h+1]),a=(3&e[h+3])<<11|e[h+4]<<3|(224&e[h+5])>>5,d=(o=1024*(1+(3&e[h+6])))*Ve/Ge[(60&e[h+2])>>>2],e.byteLength-h<a)break;this.trigger("data",{pts:n.pts+i*d,dts:n.dts+i*d,sampleCount:o,audioobjecttype:1+(e[h+2]>>>6&3),channelcount:(1&e[h+2])<<2|(192&e[h+3])>>>6,samplerate:Ge[(60&e[h+2])>>>2],samplingfrequencyindex:(60&e[h+2])>>>2,samplesize:16,data:e.subarray(h+7+r,h+a)}),i++,h+=a}else"number"!=typeof u&&(u=h),h++;"number"==typeof u&&(this.skipWarn_(u,h),u=null),e=e.subarray(h)}},this.flush=function(){i=0,this.trigger("done")},this.reset=function(){e=void 0,this.trigger("reset")},this.endTimeline=function(){e=void 0,this.trigger("endedtimeline")}}).prototype=new Nt;var Fe,je,Ye,Xe=ze,qe=function(t){var e=t.byteLength,i=0,n=0;this.length=function(){return 8*e},this.bitsAvailable=function(){return 8*e+n},this.loadWord=function(){var a=t.byteLength-e,r=new Uint8Array(4),s=Math.min(4,e);if(0===s)throw new Error("no bytes available");r.set(t.subarray(a,a+s)),i=new DataView(r.buffer).getUint32(0),n=8*s,e-=s},this.skipBits=function(t){var a;n>t?(i<<=t,n-=t):(t-=n,t-=8*(a=Math.floor(t/8)),e-=a,this.loadWord(),i<<=t,n-=t)},this.readBits=function(t){var a=Math.min(n,t),r=i>>>32-a;return(n-=a)>0?i<<=a:e>0&&this.loadWord(),(a=t-a)>0?r<<a|this.readBits(a):r},this.skipLeadingZeros=function(){var t;for(t=0;t<n;++t)if(0!=(i&2147483648>>>t))return i<<=t,n-=t,t;return this.loadWord(),t+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var t=this.skipLeadingZeros();return this.readBits(t+1)-1},this.readExpGolomb=function(){var t=this.readUnsignedExpGolomb();return 1&t?1+t>>>1:-1*(t>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()};(je=function(){var t,e,i=0;je.prototype.init.call(this),this.push=function(n){var a;e?((a=new Uint8Array(e.byteLength+n.data.byteLength)).set(e),a.set(n.data,e.byteLength),e=a):e=n.data;for(var r=e.byteLength;i<r-3;i++)if(1===e[i+2]){t=i+5;break}for(;t<r;)switch(e[t]){case 0:if(0!==e[t-1]){t+=2;break}if(0!==e[t-2]){t++;break}i+3!==t-2&&this.trigger("data",e.subarray(i+3,t-2));do{t++}while(1!==e[t]&&t<r);i=t-2,t+=3;break;case 1:if(0!==e[t-1]||0!==e[t-2]){t+=3;break}this.trigger("data",e.subarray(i+3,t-2)),i=t-2,t+=3;break;default:t+=3}e=e.subarray(i),t-=i,i=0},this.reset=function(){e=null,i=0,this.trigger("reset")},this.flush=function(){e&&e.byteLength>3&&this.trigger("data",e.subarray(i+3)),e=null,i=0,this.trigger("done")},this.endTimeline=function(){this.flush(),this.trigger("endedtimeline")}}).prototype=new Nt,Ye={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(Fe=function(){var t,e,i,n,a,r,s,o=new je;Fe.prototype.init.call(this),t=this,this.push=function(t){"video"===t.type&&(e=t.trackId,i=t.pts,n=t.dts,o.push(t))},o.on("data",(function(s){var o={trackId:e,pts:i,dts:n,data:s,nalUnitTypeCode:31&s[0]};switch(o.nalUnitTypeCode){case 5:o.nalUnitType="slice_layer_without_partitioning_rbsp_idr";break;case 6:o.nalUnitType="sei_rbsp",o.escapedRBSP=a(s.subarray(1));break;case 7:o.nalUnitType="seq_parameter_set_rbsp",o.escapedRBSP=a(s.subarray(1)),o.config=r(o.escapedRBSP);break;case 8:o.nalUnitType="pic_parameter_set_rbsp";break;case 9:o.nalUnitType="access_unit_delimiter_rbsp"}t.trigger("data",o)})),o.on("done",(function(){t.trigger("done")})),o.on("partialdone",(function(){t.trigger("partialdone")})),o.on("reset",(function(){t.trigger("reset")})),o.on("endedtimeline",(function(){t.trigger("endedtimeline")})),this.flush=function(){o.flush()},this.partialFlush=function(){o.partialFlush()},this.reset=function(){o.reset()},this.endTimeline=function(){o.endTimeline()},s=function(t,e){var i,n=8,a=8;for(i=0;i<t;i++)0!==a&&(a=(n+e.readExpGolomb()+256)%256),n=0===a?n:a},a=function(t){for(var e,i,n=t.byteLength,a=[],r=1;r<n-2;)0===t[r]&&0===t[r+1]&&3===t[r+2]?(a.push(r+2),r+=2):r++;if(0===a.length)return t;e=n-a.length,i=new Uint8Array(e);var s=0;for(r=0;r<e;s++,r++)s===a[0]&&(s++,a.shift()),i[r]=t[s];return i},r=function(t){var e,i,n,a,r,o,d,h,u,p,c,l,f=0,g=0,m=0,y=0,b=[1,1];if(i=(e=new qe(t)).readUnsignedByte(),a=e.readUnsignedByte(),n=e.readUnsignedByte(),e.skipUnsignedExpGolomb(),Ye[i]&&(3===(r=e.readUnsignedExpGolomb())&&e.skipBits(1),e.skipUnsignedExpGolomb(),e.skipUnsignedExpGolomb(),e.skipBits(1),e.readBoolean()))for(c=3!==r?8:12,l=0;l<c;l++)e.readBoolean()&&s(l<6?16:64,e);if(e.skipUnsignedExpGolomb(),0===(o=e.readUnsignedExpGolomb()))e.readUnsignedExpGolomb();else if(1===o)for(e.skipBits(1),e.skipExpGolomb(),e.skipExpGolomb(),d=e.readUnsignedExpGolomb(),l=0;l<d;l++)e.skipExpGolomb();if(e.skipUnsignedExpGolomb(),e.skipBits(1),h=e.readUnsignedExpGolomb(),u=e.readUnsignedExpGolomb(),0===(p=e.readBits(1))&&e.skipBits(1),e.skipBits(1),e.readBoolean()&&(f=e.readUnsignedExpGolomb(),g=e.readUnsignedExpGolomb(),m=e.readUnsignedExpGolomb(),y=e.readUnsignedExpGolomb()),e.readBoolean()&&e.readBoolean()){switch(e.readUnsignedByte()){case 1:b=[1,1];break;case 2:b=[12,11];break;case 3:b=[10,11];break;case 4:b=[16,11];break;case 5:b=[40,33];break;case 6:b=[24,11];break;case 7:b=[20,11];break;case 8:b=[32,11];break;case 9:b=[80,33];break;case 10:b=[18,11];break;case 11:b=[15,11];break;case 12:b=[64,33];break;case 13:b=[160,99];break;case 14:b=[4,3];break;case 15:b=[3,2];break;case 16:b=[2,1];break;case 255:b=[e.readUnsignedByte()<<8|e.readUnsignedByte(),e.readUnsignedByte()<<8|e.readUnsignedByte()]}b&&(b[0],b[1])}return{profileIdc:i,levelIdc:n,profileCompatibility:a,width:16*(h+1)-2*f-2*g,height:(2-p)*(u+1)*16-2*m-2*y,sarRatio:b}}}).prototype=new Nt;var He,$e={H264Stream:Fe,NalByteStream:je},Ze=function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return i=i>=0?i:0,(16&t[e+5])>>4?i+20:i+10},Ke=function t(e,i){return e.length-i<10||e[i]!=="I".charCodeAt(0)||e[i+1]!=="D".charCodeAt(0)||e[i+2]!=="3".charCodeAt(0)?i:t(e,i+=Ze(e,i))},Je=function(t){var e=Ke(t,0);return t.length>=e+2&&255==(255&t[e])&&240==(240&t[e+1])&&16==(22&t[e+1])},Qe=Ze,ti=function(t,e){var i=(224&t[e+5])>>5,n=t[e+4]<<3;return 6144&t[e+3]|n|i};(He=function(){var t=new Uint8Array,e=0;He.prototype.init.call(this),this.setTimestamp=function(t){e=t},this.push=function(i){var n,a,r,s,o=0,d=0;for(t.length?(s=t.length,(t=new Uint8Array(i.byteLength+s)).set(t.subarray(0,s)),t.set(i,s)):t=i;t.length-d>=3;)if(t[d]!=="I".charCodeAt(0)||t[d+1]!=="D".charCodeAt(0)||t[d+2]!=="3".charCodeAt(0))if(255!=(255&t[d])||240!=(240&t[d+1]))d++;else{if(t.length-d<7)break;if(d+(o=ti(t,d))>t.length)break;r={type:"audio",data:t.subarray(d,d+o),pts:e,dts:e},this.trigger("data",r),d+=o}else{if(t.length-d<10)break;if(d+(o=Qe(t,d))>t.length)break;a={type:"timed-metadata",data:t.subarray(d,d+o)},this.trigger("data",a),d+=o}n=t.length-d,t=n>0?t.subarray(d):new Uint8Array},this.reset=function(){t=new Uint8Array,this.trigger("reset")},this.endTimeline=function(){t=new Uint8Array,this.trigger("endedtimeline")}}).prototype=new Nt;var ei,ii,ni,ai,ri=He,si=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],oi=["width","height","profileIdc","levelIdc","profileCompatibility","sarRatio"],di=$e.H264Stream,hi=Je,ui=Zt,pi=function(t,e){e.stream=t,this.trigger("log",e)},ci=function(t,e){for(var i=Object.keys(e),n=0;n<i.length;n++){var a=i[n];"headOfPipeline"!==a&&e[a].on&&e[a].on("log",pi.bind(t,a))}},li=function(t,e){var i;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0},fi=function(t,e,i,n,a,r){return{start:{dts:t,pts:t+(i-e)},end:{dts:t+(n-e),pts:t+(a-i)},prependedContentDuration:r,baseMediaDecodeTime:t}};(ii=function(t,e){var i,n=[],a=0,r=0,s=1/0;i=(e=e||{}).firstSequenceNumber||0,ii.prototype.init.call(this),this.push=function(e){oe(t,e),t&&si.forEach((function(i){t[i]=e[i]})),n.push(e)},this.setEarliestDts=function(t){a=t},this.setVideoBaseMediaDecodeTime=function(t){s=t},this.setAudioAppendStart=function(t){r=t},this.flush=function(){var o,d,h,u,p,c,l;0!==n.length?(o=ee(n,t,a),t.baseMediaDecodeTime=se(t,e.keepOriginalTimestamps),l=te(t,o,r,s),t.samples=ie(o),h=Q.mdat(ne(o)),n=[],d=Q.moof(i,[t]),u=new Uint8Array(d.byteLength+h.byteLength),i++,u.set(d),u.set(h,d.byteLength),re(t),p=Math.ceil(1024*ui/t.samplerate),o.length&&(c=o.length*p,this.trigger("segmentTimingInfo",fi(Kt(t.baseMediaDecodeTime,t.samplerate),o[0].dts,o[0].pts,o[0].dts+c,o[0].pts+c,l||0)),this.trigger("timingInfo",{start:o[0].pts,end:o[0].pts+c})),this.trigger("data",{track:t,boxes:u}),this.trigger("done","AudioSegmentStream")):this.trigger("done","AudioSegmentStream")},this.reset=function(){re(t),n=[],this.trigger("reset")}}).prototype=new Nt,(ei=function(t,e){var i,n,a,r=[],s=[];i=(e=e||{}).firstSequenceNumber||0,ei.prototype.init.call(this),delete t.minPTS,this.gopCache_=[],this.push=function(e){oe(t,e),"seq_parameter_set_rbsp"!==e.nalUnitType||n||(n=e.config,t.sps=[e.data],oi.forEach((function(e){t[e]=n[e]}),this)),"pic_parameter_set_rbsp"!==e.nalUnitType||a||(a=e.data,t.pps=[e.data]),r.push(e)},this.flush=function(){for(var n,a,o,d,h,u,p,c,l=0;r.length&&"access_unit_delimiter_rbsp"!==r[0].nalUnitType;)r.shift();if(0===r.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream");if(n=Wt(r),(o=Vt(n))[0][0].keyFrame||((a=this.getGopForFusion_(r[0],t))?(l=a.duration,o.unshift(a),o.byteLength+=a.byteLength,o.nalCount+=a.nalCount,o.pts=a.pts,o.dts=a.dts,o.duration+=a.duration):o=Gt(o)),s.length){var f;if(!(f=e.alignGopsAtEnd?this.alignGopsAtEnd_(o):this.alignGopsAtStart_(o)))return this.gopCache_.unshift({gop:o.pop(),pps:t.pps,sps:t.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),r=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream");re(t),o=f}oe(t,o),t.samples=Ft(o),h=Q.mdat(jt(o)),t.baseMediaDecodeTime=se(t,e.keepOriginalTimestamps),this.trigger("processedGopsInfo",o.map((function(t){return{pts:t.pts,dts:t.dts,byteLength:t.byteLength}}))),p=o[0],c=o[o.length-1],this.trigger("segmentTimingInfo",fi(t.baseMediaDecodeTime,p.dts,p.pts,c.dts+c.duration,c.pts+c.duration,l)),this.trigger("timingInfo",{start:o[0].pts,end:o[o.length-1].pts+o[o.length-1].duration}),this.gopCache_.unshift({gop:o.pop(),pps:t.pps,sps:t.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),r=[],this.trigger("baseMediaDecodeTime",t.baseMediaDecodeTime),this.trigger("timelineStartInfo",t.timelineStartInfo),d=Q.moof(i,[t]),u=new Uint8Array(d.byteLength+h.byteLength),i++,u.set(d),u.set(h,d.byteLength),this.trigger("data",{track:t,boxes:u}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.reset=function(){this.resetStream_(),r=[],this.gopCache_.length=0,s.length=0,this.trigger("reset")},this.resetStream_=function(){re(t),n=void 0,a=void 0},this.getGopForFusion_=function(e){var i,n,a,r,s,o=1/0;for(s=0;s<this.gopCache_.length;s++)a=(r=this.gopCache_[s]).gop,t.pps&&li(t.pps[0],r.pps[0])&&t.sps&&li(t.sps[0],r.sps[0])&&(a.dts<t.timelineStartInfo.dts||(i=e.dts-a.dts-a.duration)>=-1e4&&i<=45e3&&(!n||o>i)&&(n=r,o=i));return n?n.gop:null},this.alignGopsAtStart_=function(t){var e,i,n,a,r,o,d,h;for(r=t.byteLength,o=t.nalCount,d=t.duration,e=i=0;e<s.length&&i<t.length&&(n=s[e],a=t[i],n.pts!==a.pts);)a.pts>n.pts?e++:(i++,r-=a.byteLength,o-=a.nalCount,d-=a.duration);return 0===i?t:i===t.length?null:((h=t.slice(i)).byteLength=r,h.duration=d,h.nalCount=o,h.pts=h[0].pts,h.dts=h[0].dts,h)},this.alignGopsAtEnd_=function(t){var e,i,n,a,r,o,d;for(e=s.length-1,i=t.length-1,r=null,o=!1;e>=0&&i>=0;){if(n=s[e],a=t[i],n.pts===a.pts){o=!0;break}n.pts>a.pts?e--:(e===s.length-1&&(r=i),i--)}if(!o&&null===r)return null;if(0===(d=o?i:r))return t;var h=t.slice(d),u=h.reduce((function(t,e){return t.byteLength+=e.byteLength,t.duration+=e.duration,t.nalCount+=e.nalCount,t}),{byteLength:0,duration:0,nalCount:0});return h.byteLength=u.byteLength,h.duration=u.duration,h.nalCount=u.nalCount,h.pts=h[0].pts,h.dts=h[0].dts,h},this.alignGopsWith=function(t){s=t}}).prototype=new Nt,(ai=function(t,e){this.numberOfTracks=0,this.metadataStream=e,void 0!==(t=t||{}).remux?this.remuxTracks=!!t.remux:this.remuxTracks=!0,"boolean"==typeof t.keepOriginalTimestamps?this.keepOriginalTimestamps=t.keepOriginalTimestamps:this.keepOriginalTimestamps=!1,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,ai.prototype.init.call(this),this.push=function(t){return t.content||t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):(this.pendingTracks.push(t.track),this.pendingBytes+=t.boxes.byteLength,"video"===t.track.type&&(this.videoTrack=t.track,this.pendingBoxes.push(t.boxes)),void("audio"===t.track.type&&(this.audioTrack=t.track,this.pendingBoxes.unshift(t.boxes))))}}).prototype=new Nt,ai.prototype.flush=function(t){var e,i,n,a,r=0,s={captions:[],captionStreams:{},metadata:[],info:{}},o=0;if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==t&&"AudioSegmentStream"!==t)return;if(this.remuxTracks)return;if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}if(this.videoTrack?(o=this.videoTrack.timelineStartInfo.pts,oi.forEach((function(t){s.info[t]=this.videoTrack[t]}),this)):this.audioTrack&&(o=this.audioTrack.timelineStartInfo.pts,si.forEach((function(t){s.info[t]=this.audioTrack[t]}),this)),this.videoTrack||this.audioTrack){for(1===this.pendingTracks.length?s.type=this.pendingTracks[0].type:s.type="combined",this.emittedTracks+=this.pendingTracks.length,n=Q.initSegment(this.pendingTracks),s.initSegment=new Uint8Array(n.byteLength),s.initSegment.set(n),s.data=new Uint8Array(this.pendingBytes),a=0;a<this.pendingBoxes.length;a++)s.data.set(this.pendingBoxes[a],r),r+=this.pendingBoxes[a].byteLength;for(a=0;a<this.pendingCaptions.length;a++)(e=this.pendingCaptions[a]).startTime=Qt(e.startPts,o,this.keepOriginalTimestamps),e.endTime=Qt(e.endPts,o,this.keepOriginalTimestamps),s.captionStreams[e.stream]=!0,s.captions.push(e);for(a=0;a<this.pendingMetadata.length;a++)(i=this.pendingMetadata[a]).cueTime=Qt(i.pts,o,this.keepOriginalTimestamps),s.metadata.push(i);for(s.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",s),a=0;a<s.captions.length;a++)e=s.captions[a],this.trigger("caption",e);for(a=0;a<s.metadata.length;a++)i=s.metadata[a],this.trigger("id3Frame",i)}this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},ai.prototype.setRemux=function(t){this.remuxTracks=t},(ni=function(t){var e,i,n=this,a=!0;ni.prototype.init.call(this),t=t||{},this.baseMediaDecodeTime=t.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var a={};this.transmuxPipeline_=a,a.type="aac",a.metadataStream=new We.MetadataStream,a.aacStream=new ri,a.audioTimestampRolloverStream=new We.TimestampRolloverStream("audio"),a.timedMetadataTimestampRolloverStream=new We.TimestampRolloverStream("timed-metadata"),a.adtsStream=new Xe,a.coalesceStream=new ai(t,a.metadataStream),a.headOfPipeline=a.aacStream,a.aacStream.pipe(a.audioTimestampRolloverStream).pipe(a.adtsStream),a.aacStream.pipe(a.timedMetadataTimestampRolloverStream).pipe(a.metadataStream).pipe(a.coalesceStream),a.metadataStream.on("timestamp",(function(t){a.aacStream.setTimestamp(t.timeStamp)})),a.aacStream.on("data",(function(r){"timed-metadata"!==r.type&&"audio"!==r.type||a.audioSegmentStream||(i=i||{timelineStartInfo:{baseMediaDecodeTime:n.baseMediaDecodeTime},codec:"adts",type:"audio"},a.coalesceStream.numberOfTracks++,a.audioSegmentStream=new ii(i,t),a.audioSegmentStream.on("log",n.getLogTrigger_("audioSegmentStream")),a.audioSegmentStream.on("timingInfo",n.trigger.bind(n,"audioTimingInfo")),a.adtsStream.pipe(a.audioSegmentStream).pipe(a.coalesceStream),n.trigger("trackinfo",{hasAudio:!!i,hasVideo:!!e}))})),a.coalesceStream.on("data",this.trigger.bind(this,"data")),a.coalesceStream.on("done",this.trigger.bind(this,"done")),ci(this,a)},this.setupTsPipeline=function(){var a={};this.transmuxPipeline_=a,a.type="ts",a.metadataStream=new We.MetadataStream,a.packetStream=new We.TransportPacketStream,a.parseStream=new We.TransportParseStream,a.elementaryStream=new We.ElementaryStream,a.timestampRolloverStream=new We.TimestampRolloverStream,a.adtsStream=new Xe,a.h264Stream=new di,a.captionStream=new We.CaptionStream(t),a.coalesceStream=new ai(t,a.metadataStream),a.headOfPipeline=a.packetStream,a.packetStream.pipe(a.parseStream).pipe(a.elementaryStream).pipe(a.timestampRolloverStream),a.timestampRolloverStream.pipe(a.h264Stream),a.timestampRolloverStream.pipe(a.adtsStream),a.timestampRolloverStream.pipe(a.metadataStream).pipe(a.coalesceStream),a.h264Stream.pipe(a.captionStream).pipe(a.coalesceStream),a.elementaryStream.on("data",(function(r){var s;if("metadata"===r.type){for(s=r.tracks.length;s--;)e||"video"!==r.tracks[s].type?i||"audio"!==r.tracks[s].type||((i=r.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime):(e=r.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime;e&&!a.videoSegmentStream&&(a.coalesceStream.numberOfTracks++,a.videoSegmentStream=new ei(e,t),a.videoSegmentStream.on("log",n.getLogTrigger_("videoSegmentStream")),a.videoSegmentStream.on("timelineStartInfo",(function(e){i&&!t.keepOriginalTimestamps&&(i.timelineStartInfo=e,a.audioSegmentStream.setEarliestDts(e.dts-n.baseMediaDecodeTime))})),a.videoSegmentStream.on("processedGopsInfo",n.trigger.bind(n,"gopInfo")),a.videoSegmentStream.on("segmentTimingInfo",n.trigger.bind(n,"videoSegmentTimingInfo")),a.videoSegmentStream.on("baseMediaDecodeTime",(function(t){i&&a.audioSegmentStream.setVideoBaseMediaDecodeTime(t)})),a.videoSegmentStream.on("timingInfo",n.trigger.bind(n,"videoTimingInfo")),a.h264Stream.pipe(a.videoSegmentStream).pipe(a.coalesceStream)),i&&!a.audioSegmentStream&&(a.coalesceStream.numberOfTracks++,a.audioSegmentStream=new ii(i,t),a.audioSegmentStream.on("log",n.getLogTrigger_("audioSegmentStream")),a.audioSegmentStream.on("timingInfo",n.trigger.bind(n,"audioTimingInfo")),a.audioSegmentStream.on("segmentTimingInfo",n.trigger.bind(n,"audioSegmentTimingInfo")),a.adtsStream.pipe(a.audioSegmentStream).pipe(a.coalesceStream)),n.trigger("trackinfo",{hasAudio:!!i,hasVideo:!!e})}})),a.coalesceStream.on("data",this.trigger.bind(this,"data")),a.coalesceStream.on("id3Frame",(function(t){t.dispatchType=a.metadataStream.dispatchType,n.trigger("id3Frame",t)})),a.coalesceStream.on("caption",this.trigger.bind(this,"caption")),a.coalesceStream.on("done",this.trigger.bind(this,"done")),ci(this,a)},this.setBaseMediaDecodeTime=function(n){var a=this.transmuxPipeline_;t.keepOriginalTimestamps||(this.baseMediaDecodeTime=n),i&&(i.timelineStartInfo.dts=void 0,i.timelineStartInfo.pts=void 0,re(i),a.audioTimestampRolloverStream&&a.audioTimestampRolloverStream.discontinuity()),e&&(a.videoSegmentStream&&(a.videoSegmentStream.gopCache_=[]),e.timelineStartInfo.dts=void 0,e.timelineStartInfo.pts=void 0,re(e),a.captionStream.reset()),a.timestampRolloverStream&&a.timestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(t){i&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)},this.setRemux=function(e){var i=this.transmuxPipeline_;t.remux=e,i&&i.coalesceStream&&i.coalesceStream.setRemux(e)},this.alignGopsWith=function(t){e&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)},this.getLogTrigger_=function(t){var e=this;return function(i){i.stream=t,e.trigger("log",i)}},this.push=function(t){if(a){var e=hi(t);e&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():e||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),a=!1}this.transmuxPipeline_.headOfPipeline.push(t)},this.flush=function(){a=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.endTimeline=function(){this.transmuxPipeline_.headOfPipeline.endTimeline()},this.reset=function(){this.transmuxPipeline_.headOfPipeline&&this.transmuxPipeline_.headOfPipeline.reset()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new Nt;var gi,mi,yi={Transmuxer:ni,VideoSegmentStream:ei,AudioSegmentStream:ii,AUDIO_PROPERTIES:si,VIDEO_PROPERTIES:oi,generateSegmentTimingInfo:fi},bi=j.getUint64,vi=j.getUint64,Si=function(t){return new Date(1e3*t-20828448e5)},_i=function(t){var e,i,n=new DataView(t.buffer,t.byteOffset,t.byteLength),a=[];for(e=0;e+4<t.length;e+=i)if(i=n.getUint32(e),e+=4,i<=0)a.push("<span style='color:red;'>MALFORMED DATA</span>");else switch(31&t[e]){case 1:a.push("slice_layer_without_partitioning_rbsp");break;case 5:a.push("slice_layer_without_partitioning_rbsp_idr");break;case 6:a.push("sei_rbsp");break;case 7:a.push("seq_parameter_set_rbsp");break;case 8:a.push("pic_parameter_set_rbsp");break;case 9:a.push("access_unit_delimiter_rbsp");break;default:a.push("UNKNOWN NAL - "+t[e]&31)}return a},wi={avc1:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{dataReferenceIndex:e.getUint16(6),width:e.getUint16(24),height:e.getUint16(26),horizresolution:e.getUint16(28)+e.getUint16(30)/16,vertresolution:e.getUint16(32)+e.getUint16(34)/16,frameCount:e.getUint16(40),depth:e.getUint16(74),config:gi(t.subarray(78,t.byteLength))}},avcC:function(t){var e,i,n,a,r=new DataView(t.buffer,t.byteOffset,t.byteLength),s={configurationVersion:t[0],avcProfileIndication:t[1],profileCompatibility:t[2],avcLevelIndication:t[3],lengthSizeMinusOne:3&t[4],sps:[],pps:[]},o=31&t[5];for(n=6,a=0;a<o;a++)i=r.getUint16(n),n+=2,s.sps.push(new Uint8Array(t.subarray(n,n+i))),n+=i;for(e=t[n],n++,a=0;a<e;a++)i=r.getUint16(n),n+=2,s.pps.push(new Uint8Array(t.subarray(n,n+i))),n+=i;return s},btrt:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{bufferSizeDB:e.getUint32(0),maxBitrate:e.getUint32(4),avgBitrate:e.getUint32(8)}},edts:function(t){return{boxes:gi(t)}},elst:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:i.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),edits:[]},a=i.getUint32(4);for(e=8;a;a--)0===n.version?(n.edits.push({segmentDuration:i.getUint32(e),mediaTime:i.getInt32(e+4),mediaRate:i.getUint16(e+8)+i.getUint16(e+10)/65536}),e+=12):(n.edits.push({segmentDuration:vi(t.subarray(e)),mediaTime:vi(t.subarray(e+8)),mediaRate:i.getUint16(e+16)+i.getUint16(e+18)/65536}),e+=20);return n},esds:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),esId:t[6]<<8|t[7],streamPriority:31&t[8],decoderConfig:{objectProfileIndication:t[11],streamType:t[12]>>>2&63,bufferSize:t[13]<<16|t[14]<<8|t[15],maxBitrate:t[16]<<24|t[17]<<16|t[18]<<8|t[19],avgBitrate:t[20]<<24|t[21]<<16|t[22]<<8|t[23],decoderConfigDescriptor:{tag:t[24],length:t[25],audioObjectType:t[26]>>>3&31,samplingFrequencyIndex:(7&t[26])<<1|t[27]>>>7&1,channelConfiguration:t[27]>>>3&15}}}},ftyp:function(t){for(var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i={majorBrand:et(t.subarray(0,4)),minorVersion:e.getUint32(4),compatibleBrands:[]},n=8;n<t.byteLength;)i.compatibleBrands.push(et(t.subarray(n,n+4))),n+=4;return i},dinf:function(t){return{boxes:gi(t)}},dref:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),dataReferences:gi(t.subarray(8))}},hdlr:function(t){var e={version:new DataView(t.buffer,t.byteOffset,t.byteLength).getUint8(0),flags:new Uint8Array(t.subarray(1,4)),handlerType:et(t.subarray(8,12)),name:""},i=8;for(i=24;i<t.byteLength;i++){if(0===t[i]){i++;break}e.name+=String.fromCharCode(t[i])}return e.name=decodeURIComponent(escape(e.name)),e},mdat:function(t){return{byteLength:t.byteLength,nals:_i(t)}},mdhd:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n=4,a={version:i.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),language:""};return 1===a.version?(n+=4,a.creationTime=Si(i.getUint32(n)),n+=8,a.modificationTime=Si(i.getUint32(n)),n+=4,a.timescale=i.getUint32(n),n+=8,a.duration=i.getUint32(n)):(a.creationTime=Si(i.getUint32(n)),n+=4,a.modificationTime=Si(i.getUint32(n)),n+=4,a.timescale=i.getUint32(n),n+=4,a.duration=i.getUint32(n)),n+=4,e=i.getUint16(n),a.language+=String.fromCharCode(96+(e>>10)),a.language+=String.fromCharCode(96+((992&e)>>5)),a.language+=String.fromCharCode(96+(31&e)),a},mdia:function(t){return{boxes:gi(t)}},mfhd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),sequenceNumber:t[4]<<24|t[5]<<16|t[6]<<8|t[7]}},minf:function(t){return{boxes:gi(t)}},mp4a:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i={dataReferenceIndex:e.getUint16(6),channelcount:e.getUint16(16),samplesize:e.getUint16(18),samplerate:e.getUint16(24)+e.getUint16(26)/65536};return t.byteLength>28&&(i.streamDescriptor=gi(t.subarray(28))[0]),i},moof:function(t){return{boxes:gi(t)}},moov:function(t){return{boxes:gi(t)}},mvex:function(t){return{boxes:gi(t)}},mvhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i=4,n={version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4))};return 1===n.version?(i+=4,n.creationTime=Si(e.getUint32(i)),i+=8,n.modificationTime=Si(e.getUint32(i)),i+=4,n.timescale=e.getUint32(i),i+=8,n.duration=e.getUint32(i)):(n.creationTime=Si(e.getUint32(i)),i+=4,n.modificationTime=Si(e.getUint32(i)),i+=4,n.timescale=e.getUint32(i),i+=4,n.duration=e.getUint32(i)),i+=4,n.rate=e.getUint16(i)+e.getUint16(i+2)/16,i+=4,n.volume=e.getUint8(i)+e.getUint8(i+1)/8,i+=2,i+=2,i+=8,n.matrix=new Uint32Array(t.subarray(i,i+36)),i+=36,i+=24,n.nextTrackId=e.getUint32(i),n},pdin:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),rate:e.getUint32(4),initialDelay:e.getUint32(8)}},sdtp:function(t){var e,i={version:t[0],flags:new Uint8Array(t.subarray(1,4)),samples:[]};for(e=4;e<t.byteLength;e++)i.samples.push({dependsOn:(48&t[e])>>4,isDependedOn:(12&t[e])>>2,hasRedundancy:3&t[e]});return i},sidx:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i={version:t[0],flags:new Uint8Array(t.subarray(1,4)),references:[],referenceId:e.getUint32(4),timescale:e.getUint32(8)},n=12;0===i.version?(i.earliestPresentationTime=e.getUint32(n),i.firstOffset=e.getUint32(n+4),n+=8):(i.earliestPresentationTime=bi(t.subarray(n)),i.firstOffset=bi(t.subarray(n+8)),n+=16),n+=2;var a=e.getUint16(n);for(n+=2;a>0;n+=12,a--)i.references.push({referenceType:(128&t[n])>>>7,referencedSize:2147483647&e.getUint32(n),subsegmentDuration:e.getUint32(n+4),startsWithSap:!!(128&t[n+8]),sapType:(112&t[n+8])>>>4,sapDeltaTime:268435455&e.getUint32(n+8)});return i},smhd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),balance:t[4]+t[5]/256}},stbl:function(t){return{boxes:gi(t)}},ctts:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:i.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),compositionOffsets:[]},a=i.getUint32(4);for(e=8;a;e+=8,a--)n.compositionOffsets.push({sampleCount:i.getUint32(e),sampleOffset:i[0===n.version?"getUint32":"getInt32"](e+4)});return n},stss:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:i.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),syncSamples:[]},a=i.getUint32(4);for(e=8;a;e+=4,a--)n.syncSamples.push(i.getUint32(e));return n},stco:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),chunkOffsets:[]},a=i.getUint32(4);for(e=8;a;e+=4,a--)n.chunkOffsets.push(i.getUint32(e));return n},stsc:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n=i.getUint32(4),a={version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleToChunks:[]};for(e=8;n;e+=12,n--)a.sampleToChunks.push({firstChunk:i.getUint32(e),samplesPerChunk:i.getUint32(e+4),sampleDescriptionIndex:i.getUint32(e+8)});return a},stsd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleDescriptions:gi(t.subarray(8))}},stsz:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleSize:i.getUint32(4),entries:[]};for(e=12;e<t.byteLength;e+=4)n.entries.push(i.getUint32(e));return n},stts:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),timeToSamples:[]},a=i.getUint32(4);for(e=8;a;e+=8,a--)n.timeToSamples.push({sampleCount:i.getUint32(e),sampleDelta:i.getUint32(e+4)});return n},styp:function(t){return wi.ftyp(t)},tfdt:gt,tfhd:ut,tkhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i=4,n={version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4))};return 1===n.version?(i+=4,n.creationTime=Si(e.getUint32(i)),i+=8,n.modificationTime=Si(e.getUint32(i)),i+=4,n.trackId=e.getUint32(i),i+=4,i+=8,n.duration=e.getUint32(i)):(n.creationTime=Si(e.getUint32(i)),i+=4,n.modificationTime=Si(e.getUint32(i)),i+=4,n.trackId=e.getUint32(i),i+=4,i+=4,n.duration=e.getUint32(i)),i+=4,i+=8,n.layer=e.getUint16(i),i+=2,n.alternateGroup=e.getUint16(i),i+=2,n.volume=e.getUint8(i)+e.getUint8(i+1)/8,i+=2,i+=2,n.matrix=new Uint32Array(t.subarray(i,i+36)),i+=36,n.width=e.getUint16(i)+e.getUint16(i+2)/65536,i+=4,n.height=e.getUint16(i)+e.getUint16(i+2)/65536,n},traf:function(t){return{boxes:gi(t)}},trak:function(t){return{boxes:gi(t)}},trex:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),trackId:e.getUint32(4),defaultSampleDescriptionIndex:e.getUint32(8),defaultSampleDuration:e.getUint32(12),defaultSampleSize:e.getUint32(16),sampleDependsOn:3&t[20],sampleIsDependedOn:(192&t[21])>>6,sampleHasRedundancy:(48&t[21])>>4,samplePaddingValue:(14&t[21])>>1,sampleIsDifferenceSample:!!(1&t[21]),sampleDegradationPriority:e.getUint16(22)}},trun:ct,"url ":function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4))}},vmhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),graphicsmode:e.getUint16(4),opcolor:new Uint16Array([e.getUint16(6),e.getUint16(8),e.getUint16(10)])}}},Ti={inspect:gi=function(t){for(var e,i,n,a,r,s=0,o=[],d=new ArrayBuffer(t.length),h=new Uint8Array(d),u=0;u<t.length;++u)h[u]=t[u];for(e=new DataView(d);s<t.byteLength;)i=e.getUint32(s),n=et(t.subarray(s+4,s+8)),a=i>1?s+i:t.byteLength,(r=(wi[n]||function(t){return{data:t}})(t.subarray(s+8,a))).size=i,r.type=n,o.push(r),s=a;return o},textify:mi=function(t,e){var i;return e=e||0,i=new Array(2*e+1).join(" "),t.map((function(t,n){return i+t.type+"\n"+Object.keys(t).filter((function(t){return"type"!==t&&"boxes"!==t})).map((function(e){var n=i+"  "+e+": ",a=t[e];if(a instanceof Uint8Array||a instanceof Uint32Array){var r=Array.prototype.slice.call(new Uint8Array(a.buffer,a.byteOffset,a.byteLength)).map((function(t){return" "+("00"+t.toString(16)).slice(-2)})).join("").match(/.{1,24}/g);return r?1===r.length?n+"<"+r.join("").slice(1)+">":n+"<\n"+r.map((function(t){return i+"  "+t})).join("\n")+"\n"+i+"  >":n+"<>"}return n+JSON.stringify(a,null,2).split("\n").map((function(t,e){return 0===e?t:i+"  "+t})).join("\n")})).join("\n")+(t.boxes?"\n"+mi(t.boxes,e+1):"")})).join("\n")},parseType:et,findBox:nt,parseTraf:wi.traf,parseTfdt:wi.tfdt,parseHdlr:wi.hdlr,parseTfhd:wi.tfhd,parseTrun:wi.trun,parseSidx:wi.sidx},Ui=Ti.parseTrun,Ci=Dt.findBox,ki=function(t){var e=Ci(t,["moof","traf"]),i=Ci(t,["mdat"]),n=[];return i.forEach((function(t,i){var a=e[i];n.push({mdat:t,traf:a})})),n},Ai=function(t,e,i){var n=e,a=i.defaultSampleDuration||0,r=i.defaultSampleSize||0,s=i.trackId,o=[];return t.forEach((function(t){var e=Ui(t).samples;e.forEach((function(t){void 0===t.duration&&(t.duration=a),void 0===t.size&&(t.size=r),t.trackId=s,t.dts=n,void 0===t.compositionTimeOffset&&(t.compositionTimeOffset=0),"bigint"==typeof n?(t.pts=n+G.default.BigInt(t.compositionTimeOffset),n+=G.default.BigInt(t.duration)):(t.pts=n+t.compositionTimeOffset,n+=t.duration)})),o=o.concat(e)})),o},Di=pe,Pi=Ue.CaptionStream,xi=ki,Li=Ai,Oi=function(t,e){for(var i=t,n=0;n<e.length;n++){var a=e[n];if(i<a.size)return a;i-=a.size}return null},Ei=function(t,e){var i={};return xi(t).forEach((function(t){var n,a=t.mdat,r=t.traf,s=nt(r,["tfhd"]),o=ut(s[0]),d=o.trackId,h=nt(r,["tfdt"]),u=h.length>0?gt(h[0]).baseMediaDecodeTime:0,p=nt(r,["trun"]);e===d&&p.length>0&&(n=function(t,e,i){var n,a,r,s,o=new DataView(t.buffer,t.byteOffset,t.byteLength),d={logs:[],seiNals:[]};for(a=0;a+4<t.length;a+=r)if(r=o.getUint32(a),a+=4,!(r<=0))switch(31&t[a]){case 6:var h=t.subarray(a+1,a+1+r),u=Oi(a,e);if(n={nalUnitType:"sei_rbsp",size:r,data:h,escapedRBSP:Di(h),trackId:i},u)n.pts=u.pts,n.dts=u.dts,s=u;else{if(!s){d.logs.push({level:"warn",message:"We've encountered a nal unit without data at "+a+" for trackId "+i+". See mux.js#223."});break}n.pts=s.pts,n.dts=s.dts}d.seiNals.push(n)}return d}(a,Li(p,u,o),d),i[d]||(i[d]={seiNals:[],logs:[]}),i[d].seiNals=i[d].seiNals.concat(n.seiNals),i[d].logs=i[d].logs.concat(n.logs))})),i},Ii=Ti.parseTfdt,Ri=Dt.getTimescaleFromMediaHeader,Mi=Ai,Bi=ki;return{generator:Q,probe:Dt,Transmuxer:yi.Transmuxer,AudioSegmentStream:yi.AudioSegmentStream,VideoSegmentStream:yi.VideoSegmentStream,CaptionParser:function(){var t,e,i,n,a,r,s=!1;this.isInitialized=function(){return s},this.init=function(e){t=new Pi,s=!0,r=!!e&&e.isPartial,t.on("data",(function(t){t.startTime=t.startPts/n,t.endTime=t.endPts/n,a.captions.push(t),a.captionStreams[t.stream]=!0})),t.on("log",(function(t){a.logs.push(t)}))},this.isNewInit=function(t,e){return!(t&&0===t.length||e&&"object"==typeof e&&0===Object.keys(e).length)&&(i!==t[0]||n!==e[i])},this.parse=function(t,r,s){var o;if(!this.isInitialized())return null;if(!r||!s)return null;if(this.isNewInit(r,s))i=r[0],n=s[i];else if(null===i||!n)return e.push(t),null;for(;e.length>0;){var d=e.shift();this.parse(d,r,s)}return(o=function(t,e,i){if(null===e)return null;var n=Ei(t,e)[e]||{};return{seiNals:n.seiNals,logs:n.logs,timescale:i}}(t,i,n))&&o.logs&&(a.logs=a.logs.concat(o.logs)),null!==o&&o.seiNals?(this.pushNals(o.seiNals),this.flushStream(),a):a.logs.length?{logs:a.logs,captions:[],captionStreams:[]}:null},this.pushNals=function(e){if(!this.isInitialized()||!e||0===e.length)return null;e.forEach((function(e){t.push(e)}))},this.flushStream=function(){if(!this.isInitialized())return null;r?t.partialFlush():t.flush()},this.clearParsedCaptions=function(){a.captions=[],a.captionStreams={},a.logs=[]},this.resetCaptionStream=function(){if(!this.isInitialized())return null;t.reset()},this.clearAllCaptions=function(){this.clearParsedCaptions(),this.resetCaptionStream()},this.reset=function(){e=[],i=null,n=null,a?this.clearParsedCaptions():a={captions:[],captionStreams:{},logs:[]},this.resetCaptionStream()},this.reset()},WebVttParser:function(){var t=9e4;this.init=function(e){var i=nt(e,["moov","trak","mdia","mdhd"])[0];i&&(t=Ri(i))},this.parseSegment=function(e){var i=[],n=Bi(e),a=0;return n.forEach((function(e){var n=e.mdat,r=e.traf,s=nt(r,["tfdt"])[0],o=nt(r,["tfhd"])[0],d=nt(r,["trun"]);if(s){var h=Ii(s);a=h.baseMediaDecodeTime}if(d.length&&o){var u=Mi(d,a,o),p=0;u.forEach((function(e){var a=new TextDecoder("utf-8"),r=n.slice(p,p+e.size);nt(r,["vtte"])[0]?p+=e.size:(nt(r,["vttc"]).forEach((function(n){var r,s,o=nt(n,["payl"])[0],d=nt(n,["sttg"])[0],h=e.pts/t,u=(e.pts+e.duration)/t;if(o)try{r=a.decode(o)}catch(t){console.error(t)}if(d)try{s=a.decode(d)}catch(t){console.error(t)}e.duration&&r&&i.push({cueText:r,start:h,end:u,settings:s})})),p+=e.size)}))}})),i}}}}));
    return scope.muxjs;
  })();

  const VERSION = '3.3';
  const SHOW_MS = 2000;            // 버튼 표시 시간
  const LONG_PRESS_MS = 600;       // 버튼을 이만큼 누르고 있으면 진단 정보 표시
  const MIN_SIZE = 80;             // 이보다 작은 영상(px)은 무시
  const PARALLEL = 4;              // 동시 다운로드 수
  const CHUNK = 8 * 1024 * 1024;   // 일반 파일을 나눠 받는 크기 (wBlock은 요청당 25MB 제한)
  const TIMEOUT_MS = 120000;       // 요청 하나가 이보다 오래 걸리면 다시 받기
  const RETRY = 3;                 // 조각 다운로드 재시도 횟수 (백그라운드로 끊긴 경우는 제외)
  const BTN_ID = 'tm-vsb-btn';
  const DIAG_ID = 'tm-vsb-diag';
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const HLS_RE = /\.m3u8(\?|#|$)/i;
  const MAX_CANDIDATES = 8;        // 페이지에서 찾은 m3u8 중 확인해 볼 최대 개수

  // Material Icons 경로
  const ICON = {
    download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',                 // file_download
    check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',             // check
    block: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z', // block
  };

  // 스트리밍 목록(.m3u8) 주소를 나중에 찾을 수 있도록 요청 기록을 넉넉히 남김
  try { performance.setResourceTimingBufferSize(2000); } catch (_) {}

  const states = new WeakMap();    // video -> { src, file, busy, progress }
  let btn = null, iconPath = null, ringCircle = null;
  let current = null;              // 버튼이 붙어 있는 영상
  let hideTimer = null, errTimer = null;

  // ---------- 스타일 (PiP 버튼과 같은 모양) ----------
  const style = document.createElement('style');
  style.textContent = `
    #${BTN_ID}{
      position:absolute; z-index:2147483647;
      width:40px; height:40px; padding:0; margin:0; border:0; border-radius:50%;
      background:rgba(0,0,0,.55); color:#fff;
      display:flex; align-items:center; justify-content:center;
      opacity:0; visibility:hidden; transition:opacity .2s, visibility .2s, background-color .2s;
      -webkit-tap-highlight-color:transparent; touch-action:manipulation; cursor:pointer;
    }
    #${BTN_ID}.tm-show{ opacity:1; visibility:visible; }
    #${BTN_ID}.tm-err{ background:rgba(200,40,40,.75); }
    #${BTN_ID} .tm-icon{ width:24px; height:24px; fill:currentColor; pointer-events:none; }
    #${BTN_ID}.tm-busy .tm-icon{ opacity:.6; }
    #${BTN_ID} .tm-ring{
      position:absolute; top:0; left:0; width:40px; height:40px;
      pointer-events:none; transform:rotate(-90deg); display:none;
    }
    #${BTN_ID}.tm-busy .tm-ring{ display:block; }
    #${BTN_ID} .tm-ring circle{ fill:none; stroke:#fff; stroke-width:2.5; stroke-linecap:round; }
    #${BTN_ID}.tm-indet .tm-ring{ animation:tm-vsb-spin 1s linear infinite; }
    @keyframes tm-vsb-spin{ from{ transform:rotate(-90deg); } to{ transform:rotate(270deg); } }
    #${BTN_ID}{ -webkit-user-select:none; user-select:none; -webkit-touch-callout:none; }
    #${DIAG_ID}{
      position:fixed; left:12px; right:12px; bottom:12px; z-index:2147483647;
      max-height:60vh; display:flex; flex-direction:column;
      background:rgba(20,20,20,.94); color:#fff; border-radius:12px;
      box-shadow:0 4px 20px rgba(0,0,0,.4); text-align:left;
    }
    #${DIAG_ID} pre{
      margin:0; padding:12px 12px 4px; overflow:auto; white-space:pre-wrap; word-break:break-all;
      font:12px/1.5 ui-monospace, Menlo, monospace; color:#fff; background:none;
      -webkit-user-select:text; user-select:text;
    }
    #${DIAG_ID} div{ display:flex; gap:8px; justify-content:flex-end; padding:8px 12px 12px; }
    #${DIAG_ID} button{
      font:600 13px/1 -apple-system, system-ui, sans-serif; color:#fff;
      background:rgba(255,255,255,.18); border:0; border-radius:8px; padding:8px 14px; margin:0;
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  // ---------- 영상 주소 ----------
  function getSrc(v) {
    let s = v.currentSrc || v.src || '';
    if (!s) {
      const so = v.querySelector('source[src]');
      if (so) s = so.src;
    }
    return s;
  }

  // ---------- 스트리밍 목록(m3u8) 후보 찾기 ----------
  // 1) 페이지가 실제로 불러온 주소(최근 것부터)  2) 페이지 HTML·스크립트·JSON 안에 적힌 주소
  function m3u8InPage() {
    let text = '';
    try { text = document.documentElement.outerHTML; } catch (_) { return []; }
    if (text.length > 3e6) text = text.slice(0, 3e6);
    text = text.replace(/\\u002[fF]/g, '/').replace(/\\u0026/g, '&')
      .replace(/\\\//g, '/').replace(/&amp;/g, '&');
    const out = [];
    const re = /["'(=\s]((?:https?:)?\/\/?[^\s"'<>()\\]+?\.m3u8(?:\?[^\s"'<>()\\]*)?)/g;
    let m;
    while ((m = re.exec(text)) && out.length < 50) {
      try { out.push(new URL(m[1], location.href).href); } catch (_) {}
    }
    return out;
  }

  function hlsCandidates(exclude = '') {
    const list = [];
    try {
      const es = performance.getEntriesByType('resource');
      for (let i = es.length - 1; i >= 0; i--) if (HLS_RE.test(es[i].name)) list.push(es[i].name);
    } catch (_) {}
    list.push(...m3u8InPage());
    return [...new Set(list)].filter(u => u !== exclude && /^https?:/i.test(u)).slice(0, MAX_CANDIDATES);
  }

  // ---------- 진단 기록 ----------
  // 받기를 시도할 때마다 단계별 정보를 모아두고, 버튼을 길게 누르면 보여줌.
  // 주소는 토큰 노출을 막기 위해 도메인만 기록
  function newDiag() {
    const lines = [];
    return { lines, add: (k, v) => lines.push(`${k}: ${v}`), push: (...xs) => lines.push(...xs) };
  }
  const NO_DIAG = { lines: [], add() {}, push() {} };
  const hostOf = u => { try { return new URL(u).host || '?'; } catch (_) { return '?'; } };
  const mb = n => n >= 1048576 ? (n / 1048576).toFixed(1) + 'MB' : Math.max(1, Math.round(n / 1024)) + 'KB';
  const hex = a => Array.from(a, b => b.toString(16).padStart(2, '0')).join(' ');
  const ascii = (u, o, n) => String.fromCharCode(...u.subarray(o, o + n));

  // 실패한 단계 이름을 오류 메시지 앞에 붙임 (가장 안쪽 단계 하나만)
  function tagErr(name, e) {
    if (e && !e.vsbStep) {
      e.message = `${name} — ${e.message}`;
      e.vsbStep = true;
    }
    return e;
  }
  async function step(name, p) {
    try {
      return await p;
    } catch (e) {
      throw tagErr(name, e);
    }
  }
  const errText = e => e.message + (e.detail ? ` (${e.detail})` : '');

  function managerName() {
    try { return `${GM_info.scriptHandler || '?'} ${GM_info.version || ''}`.trim(); } catch (_) { return '알 수 없음'; }
  }

  function srcKind(src) {
    if (!src) return '없음';
    if (src.startsWith('blob:') || src.startsWith('mediasource:')) return 'blob (숨겨진 주소)';
    if (HLS_RE.test(src)) return 'HLS 목록(.m3u8)';
    if (/\.mpd(\?|#|$)/i.test(src)) return 'DASH(.mpd)';
    const m = src.split(/[?#]/)[0].match(/\.(\w{2,4})$/);
    return '일반 파일' + (m ? ` (.${m[1]})` : '');
  }

  const queryOf = u => { try { return new URL(u).search; } catch (_) { return ''; } };
  function queryKeys(u) {
    try {
      const k = [...new URL(u).searchParams.keys()];
      return k.length ? k.join(', ') : '없음';
    } catch (_) { return '?'; }
  }
  // 조각 주소의 생김새 (값은 빼고 형태만)
  function segShape(s) {
    let name = '?';
    try { name = decodeURIComponent(new URL(s.url).pathname.split('/').pop()).slice(0, 40); } catch (_) {}
    return `${s.rel ? '상대' : '절대'} 주소, 파일 ${name}, 쿼리 ${queryKeys(s.url)}`;
  }

  // 조각 앞부분으로 형식 판별 (이미지로 위장한 조각도 찾아냄)
  function findTsSync(u) {
    for (let i = 0; i + 376 < u.length; i++) {
      if (u[i] === 0x47 && u[i + 188] === 0x47 && u[i + 376] === 0x47) return i;
    }
    return -1;
  }

  function sniff(buf) {
    const u = new Uint8Array(buf, 0, Math.min(buf.byteLength, 8192));
    if (u[0] === 0x47 && (u.length < 189 || u[188] === 0x47)) return 'TS';
    const box = u.length >= 8 ? ascii(u, 4, 4) : '';
    if (['ftyp', 'styp', 'moof', 'sidx', 'moov', 'free'].includes(box)) return 'MP4 조각';
    if (ascii(u, 0, 3) === 'ID3') return '오디오 전용(ID3)';
    let kind = '알 수 없음 [' + hex(u.subarray(0, 8)) + ']';
    if (u[0] === 0x89 && ascii(u, 1, 3) === 'PNG') kind = 'PNG 이미지로 위장';
    else if (u[0] === 0xff && u[1] === 0xd8) kind = 'JPEG 이미지로 위장';
    else if (ascii(u, 0, 4) === 'GIF8') kind = 'GIF 이미지로 위장';
    const off = findTsSync(u);
    return off > 0 ? `${kind}, 실제 TS는 ${off}바이트 뒤부터` : kind;
  }

  // TS 조각 안의 트랙 종류 (PAT → PMT 해석)
  const TS_TYPES = {
    0x1b: 'H.264', 0x24: 'HEVC', 0x0f: 'AAC', 0x03: 'MP3', 0x04: 'MP3', 0x81: 'AC-3', 0x87: 'E-AC-3',
    0x15: 'ID3', 0x06: '기타', 0xdb: 'H.264(암호화)', 0xcf: 'AAC(암호화)', 0xc1: 'AC-3(암호화)', 0xc2: 'E-AC-3(암호화)',
  };
  // PAT → PMT를 읽어 트랙(PID·종류) 목록을 구함
  function tsInfo(u) {
    let pmtPid = -1;
    for (let o = 0; o + 188 <= u.length && o < 188 * 4000; o += 188) {
      if (u[o] !== 0x47) break;
      const pusi = u[o + 1] & 0x40;
      const pid = ((u[o + 1] & 0x1f) << 8) | u[o + 2];
      const afc = (u[o + 3] >> 4) & 3;
      let p = o + 4;
      if (afc & 2) p += 1 + u[p];
      if (!(afc & 1) || !pusi) continue;
      p += 1 + u[p];
      const secLen = ((u[p + 1] & 0x0f) << 8) | u[p + 2];
      const secEnd = Math.min(p + 3 + secLen - 4, o + 188);
      if (pid === 0 && pmtPid < 0) {
        for (let q = p + 8; q + 4 <= secEnd; q += 4) {
          if (((u[q] << 8) | u[q + 1]) !== 0) {
            pmtPid = ((u[q + 2] & 0x1f) << 8) | u[q + 3];
            break;
          }
        }
      } else if (pid === pmtPid) {
        const piLen = ((u[p + 10] & 0x0f) << 8) | u[p + 11];
        const streams = [];
        for (let q = p + 12 + piLen; q + 5 <= secEnd;) {
          streams.push({ type: u[q], pid: ((u[q + 1] & 0x1f) << 8) | u[q + 2] });
          q += 5 + (((u[q + 3] & 0x0f) << 8) | u[q + 4]);
        }
        return { pmtPid, streams };
      }
    }
    return null;
  }

  function tsStreams(buf) {
    const info = tsInfo(new Uint8Array(buf));
    return info ? info.streams.map(x => TS_TYPES[x.type] || '0x' + x.type.toString(16)) : null;
  }

  // ---------- TS 조각 정리 ----------
  // 1) 영상·소리 외 트랙(ID3 등)을 뺌: 변환 라이브러리가 모든 트랙의 시간값을 한 기준으로
  //    묶어서 처리하기 때문에, 엉뚱한 시간값을 가진 트랙이 섞이면 결과 길이가 망가질 수 있음
  // 2) 조각 사이 시간값이 끊기면(초기화·점프) 앞 조각에 이어지도록 보정
  const TS_AV = new Set([0x1b, 0x0f, 0x03, 0x04]);   // H.264, AAC, MP3
  const TS_WRAP = 2 ** 33;
  const rdTs = (u, o) => ((u[o] >> 1) & 7) * 2 ** 30 +
    ((u[o + 1] << 22) | ((u[o + 2] >> 1) << 15) | (u[o + 3] << 7) | (u[o + 4] >> 1));
  function wrTs(u, o, v) {
    const hi = Math.floor(v / 2 ** 30) & 7, lo = v % 2 ** 30;
    u[o] = (u[o] & 0xf0) | (hi << 1) | 1;
    u[o + 1] = (lo >> 22) & 0xff;
    u[o + 2] = (((lo >> 15) & 0x7f) << 1) | 1;
    u[o + 3] = (lo >> 7) & 0xff;
    u[o + 4] = ((lo & 0x7f) << 1) | 1;
  }

  // st: { prevEnd, fixed, dropped, log } — 조각을 차례로 넘기며 상태 유지. dur: 이 조각 길이(초)
  function cleanTs(buf, dur, st) {
    const u = new Uint8Array(buf);
    const info = tsInfo(u);
    if (!info) return u;
    const av = new Set(info.streams.filter(x => TS_AV.has(x.type)).map(x => x.pid));
    const keep = new Set([0, info.pmtPid, ...av]);
    const out = new Uint8Array(u.length);
    const marks = [];
    let n = 0, first = null, other = null;
    for (let o = 0; o + 188 <= u.length; o += 188) {
      if (u[o] !== 0x47) break;
      const pid = ((u[o + 1] & 0x1f) << 8) | u[o + 2];
      const pusi = u[o + 1] & 0x40;
      const afc = (u[o + 3] >> 4) & 3;
      let p = o + 4;
      if (afc & 2) p += 1 + u[p];
      const pes = pusi && (afc & 1) && p + 19 <= o + 188 && u[p] === 0 && u[p + 1] === 0 && u[p + 2] === 1;
      if (!keep.has(pid)) {
        if (pes && other === null && (u[p + 7] >> 6) & 2) other = rdTs(u, p + 9);
        st.dropped++;
        continue;
      }
      out.set(u.subarray(o, o + 188), n);
      if (pes && av.has(pid)) {
        const flags = u[p + 7] >> 6;
        if (flags & 2) {
          marks.push(n + p + 9 - o);
          let d = rdTs(u, p + 9);
          if (flags === 3) {
            marks.push(n + p + 14 - o);
            d = rdTs(u, p + 14);
          }
          if (first === null) first = d;
        }
      }
      n += 188;
    }
    if (first !== null) {
      let offset = 0;
      if (st.prevEnd != null) {
        // 앞 조각 끝 예상 위치와 비교 (33비트 되감김 고려), 3초 넘게 어긋나면 보정
        let diff = ((first - st.prevEnd) % TS_WRAP + TS_WRAP) % TS_WRAP;
        if (diff > TS_WRAP / 2) diff -= TS_WRAP;
        const tol = Math.min(3, Math.max(1, 0.5 * (st.prevDur || dur))) * 90000;
        if (Math.abs(diff) > tol) {
          offset = -diff;
          st.fixed++;
        }
      }
      if (offset) {
        for (const pos of marks) wrTs(out, pos, ((rdTs(out, pos) + offset) % TS_WRAP + TS_WRAP) % TS_WRAP);
      }
      const start = ((first + offset) % TS_WRAP + TS_WRAP) % TS_WRAP;
      st.prevEnd = (start + Math.round(dur * 90000)) % TS_WRAP;
      st.prevDur = dur;
      if (st.log.length < 3) {
        st.log.push(`${(first / 90000).toFixed(2)}s` + (other !== null ? `(ID3 ${(other / 90000).toFixed(2)}s)` : ''));
      }
    }
    return out.subarray(0, n);
  }

  // ---------- MP4 상자 읽기 ----------
  const u32 = (u, o) => u[o] * 2 ** 24 + (u[o + 1] << 16) + (u[o + 2] << 8) + u[o + 3];
  function* boxes(u, start, end) {
    let o = start;
    while (o + 8 <= end) {
      let size = u32(u, o), hdr = 8;
      const type = ascii(u, o + 4, 4);
      if (size === 1) {
        size = u32(u, o + 8) * 2 ** 32 + u32(u, o + 12);
        hdr = 16;
      } else if (size === 0) size = end - o;
      if (size < hdr || o + size > end) return;
      yield { type, start: o, body: o + hdr, end: o + size };
      o += size;
    }
  }
  const childBox = (u, b, type) => { for (const c of boxes(u, b.body, b.end)) if (c.type === type) return c; return null; };

  // MP4의 moov 상자 안에서 코덱·암호화 표시 찾기
  const MP4_CODECS = {
    avc1: 'H.264', avc3: 'H.264', hvc1: 'HEVC', hev1: 'HEVC', dvh1: 'Dolby Vision', av01: 'AV1', vp09: 'VP9',
    mp4a: 'AAC', 'ac-3': 'AC-3', 'ec-3': 'E-AC-3', Opus: 'Opus', encv: '암호화된 영상', enca: '암호화된 소리',
  };
  function mp4Info(buf) {
    const u = new Uint8Array(buf);
    const tops = [];
    let o = 0, moov = null;
    while (o + 8 <= u.length && tops.length < 50) {
      let size = u[o] * 2 ** 24 + (u[o + 1] << 16) + (u[o + 2] << 8) + u[o + 3];
      const type = ascii(u, o + 4, 4);
      if (!/^[A-Za-z0-9 -]{4}$/.test(type)) break;   // MP4 상자가 아님
      if (size === 1 && o + 16 <= u.length) size = Number(new DataView(u.buffer, u.byteOffset + o + 8, 8).getBigUint64(0));
      else if (size === 0) size = u.length - o;
      if (size < 8) break;
      tops.push(type);
      if (type === 'moov') {
        moov = u.subarray(o, Math.min(u.length, o + size));
        break;
      }
      o += size;
    }
    if (!moov) return { tops, codecs: [], drm: [] };
    const s = new TextDecoder('latin1').decode(moov);
    const codecs = [...new Set(Object.keys(MP4_CODECS).filter(k => s.includes(k)).map(k => MP4_CODECS[k]))];
    const drm = ['tenc', 'sinf', 'pssh'].filter(k => s.includes(k));
    const schm = s.indexOf('schm');
    if (schm >= 0) drm.push('방식 ' + s.substr(schm + 8, 4));
    return { tops, codecs, drm };
  }

  // ---------- 조각형 MP4 → 일반 MP4 ----------
  // 스트리밍을 그대로 합친 '조각형 MP4'는 전체 길이가 헤더에 '알 수 없음(최댓값)'으로 적혀 있어서,
  // 아이폰 사진·파일 앱이 27시간짜리로 읽거나 첫 조각만 재생하고 멈춤.
  // 그래서 조각들의 샘플 정보를 모아 일반 MP4 목차(moov)를 새로 만들고, 영상 데이터는 복사 없이 이어 붙임.
  const be32 = (d, o, n) => d.setUint32(o, n >>> 0);
  function mkBox(type, ...parts) {
    let len = 8;
    for (const x of parts) len += x.length;
    const out = new Uint8Array(len);
    new DataView(out.buffer).setUint32(0, len);
    for (let i = 0; i < 4; i++) out[4 + i] = type.charCodeAt(i);
    let o = 8;
    for (const x of parts) { out.set(x, o); o += x.length; }
    return out;
  }
  const mkFull = (type, v, flags, ...parts) =>
    mkBox(type, Uint8Array.of(v, (flags >> 16) & 255, (flags >> 8) & 255, flags & 255), ...parts);
  // [항목 수][항목들] 형태의 표
  function table(type, v, rows, width, write, prefix = null) {
    const head = prefix ? prefix.length : 0;
    const u = new Uint8Array(head + 4 + rows.length * width);
    const d = new DataView(u.buffer);
    if (prefix) u.set(prefix, 0);
    be32(d, head, rows.length);
    rows.forEach((r, i) => write(d, head + 4 + i * width, r));
    return mkFull(type, v, 0, u);
  }
  // 같은 값이 이어지면 [개수, 값]으로 묶음
  function runs(list) {
    const out = [];
    for (const x of list) {
      const last = out[out.length - 1];
      if (last && last[1] === x) last[0]++;
      else out.push([1, x]);
    }
    return out;
  }

  class Defrag {
    constructor(init) {
      this.init = init instanceof Uint8Array ? init : new Uint8Array(init);
      this.tracks = {};
      this.pieces = [];
      this.dataSize = 0;
      this.frags = 0;
      this.trex = {};
      const I = this.init;
      this.moov = [...boxes(I, 0, I.length)].find(b => b.type === 'moov');
      if (!this.moov) throw new Error('초기화 조각에 목차(moov)가 없음');
      const mvex = childBox(I, this.moov, 'mvex');
      if (mvex) {
        for (const b of boxes(I, mvex.body, mvex.end)) {
          if (b.type === 'trex') {
            const q = b.body + 4;
            this.trex[u32(I, q)] = { dur: u32(I, q + 8), size: u32(I, q + 12), flags: u32(I, q + 16) };
          }
        }
      }
    }

    track(id) {
      return this.tracks[id] || (this.tracks[id] = {
        durs: [], sizes: [], cts: [], sync: [], chunks: [], firstDt: null, total: 0,
        minComp: Infinity, maxEnd: 0,   // 표시 시간(디코드 시간 + 보정값)의 최소·최대 (트랙 시작 기준)
      });
    }

    // 조각 하나(moof+mdat 묶음). blob은 u와 같은 내용 (영상 데이터는 blob에서 잘라 씀)
    add(u, blob) {
      let pending = [];
      for (const top of boxes(u, 0, u.length)) {
        if (top.type === 'moof') {
          pending = [];
          let prevEnd = top.start, firstTraf = true;
          for (const traf of boxes(u, top.body, top.end)) {
            if (traf.type !== 'traf') continue;
            const tfhd = childBox(u, traf, 'tfhd');
            if (!tfhd) continue;
            const tf = u32(u, tfhd.body) & 0xffffff;
            const id = u32(u, tfhd.body + 4);
            if (tf & 1) throw new Error('지원하지 않는 조각 구조(base offset)');
            const tx = this.trex[id] || { dur: 0, size: 0, flags: 0 };
            let q = tfhd.body + 8 + (tf & 2 ? 4 : 0);
            let dDur = tx.dur, dSize = tx.size, dFlags = tx.flags;
            if (tf & 0x08) { dDur = u32(u, q); q += 4; }
            if (tf & 0x10) { dSize = u32(u, q); q += 4; }
            if (tf & 0x20) { dFlags = u32(u, q); q += 4; }
            const base = (tf & 0x20000) || firstTraf ? top.start : prevEnd;
            firstTraf = false;
            const t = this.track(id);
            const tfdt = childBox(u, traf, 'tfdt');
            if (tfdt && t.firstDt === null) {
              t.firstDt = u[tfdt.body] === 1 ? u32(u, tfdt.body + 4) * 2 ** 32 + u32(u, tfdt.body + 8) : u32(u, tfdt.body + 4);
            }
            let pos = base;
            for (const trun of boxes(u, traf.body, traf.end)) {
              if (trun.type !== 'trun') continue;
              const ver = u[trun.body];
              const rf = u32(u, trun.body) & 0xffffff;
              const n = u32(u, trun.body + 4);
              let p = trun.body + 8;
              if (rf & 1) { pos = base + (u32(u, p) | 0); p += 4; }
              let firstFlags = null;
              if (rf & 4) { firstFlags = u32(u, p); p += 4; }
              let bytes = 0;
              for (let k = 0; k < n; k++) {
                let dur = dDur, size = dSize, fl = k === 0 && firstFlags !== null ? firstFlags : dFlags, cto = 0;
                if (rf & 0x100) { dur = u32(u, p); p += 4; }
                if (rf & 0x200) { size = u32(u, p); p += 4; }
                if (rf & 0x400) { fl = u32(u, p); p += 4; }
                if (rf & 0x800) { cto = ver ? (u32(u, p) | 0) : u32(u, p); p += 4; }
                t.durs.push(dur);
                t.sizes.push(size);
                t.cts.push(cto);
                t.sync.push(!(fl & 0x10000));
                const comp = t.total + cto;
                if (comp < t.minComp) t.minComp = comp;
                if (comp + dur > t.maxEnd) t.maxEnd = comp + dur;
                t.total += dur;
                bytes += size;
              }
              if (n) pending.push({ t, abs: pos, n, bytes });
              pos += bytes;
            }
            prevEnd = pos;
          }
        } else if (top.type === 'mdat') {
          for (const r of pending) {
            if (r.abs < top.body || r.abs + r.bytes > top.end) throw new Error('조각 데이터 위치가 이상함');
            r.t.chunks.push({ off: this.dataSize + (r.abs - top.body), n: r.n });
          }
          pending = [];
          this.pieces.push(blob.slice(top.body, top.end));
          this.dataSize += top.end - top.body;
          this.frags++;
        }
      }
    }

    // 초기화 조각에 적힌 편집 목록(elst): 앞쪽 빈 구간(E, 전체 시간 단위)과 표시 시작 위치(M, 트랙 시간 단위)
    readEdit(trak, mts) {
      const I = this.init;
      const edts = childBox(I, trak, 'edts');
      const elst = edts && childBox(I, edts, 'elst');
      if (!elst) return null;
      const v = I[elst.body];
      const n = u32(I, elst.body + 4);
      let q = elst.body + 8, empty = 0;
      for (let k = 0; k < n && q < elst.end; k++) {
        const dur = v === 1 ? u32(I, q) * 2 ** 32 + u32(I, q + 4) : u32(I, q);
        const mt = v === 1 ? new DataView(I.buffer, I.byteOffset + q + 8, 8).getBigInt64(0) : (u32(I, q + 4) | 0);
        q += v === 1 ? 20 : 12;
        if (Number(mt) === -1) empty += dur;
        else return { E: empty / mts, M: Number(mt) };
      }
      return null;
    }

    // 트랙별 표시 시작·길이.
    // 표시 시각 = 표시 시간(디코드 시간 + 보정값) / 시간 단위 - O
    //   O: 편집 목록이 있으면 그 지시대로(소리 앞 무음 구간 자르기 등), 없으면 0
    lengths(mts) {
      const I = this.init, out = {};
      for (const trak of boxes(I, this.moov.body, this.moov.end)) {
        if (trak.type !== 'trak') continue;
        const tkhd = childBox(I, trak, 'tkhd'), mdia = childBox(I, trak, 'mdia');
        const mdhd = mdia && childBox(I, mdia, 'mdhd');
        if (!tkhd || !mdhd) continue;
        const id = u32(I, tkhd.body + 4 + (I[tkhd.body] === 1 ? 16 : 8));
        const ts = u32(I, mdhd.body + 4 + (I[mdhd.body] === 1 ? 16 : 8));
        const t = this.tracks[id];
        if (!t || !t.durs.length) continue;
        const dt0 = t.firstDt || 0;
        // 영상은 B프레임 때문에 첫 화면이 디코드 시작보다 늦게 표시됨 → 실제로 처음 보이는 표시 시간부터
        let P = dt0 + Math.max(0, t.minComp);
        const ed = this.readEdit(trak, mts);
        if (ed && ed.M > P) P = ed.M;
        if (P >= dt0 + t.maxEnd) P = dt0 + Math.max(0, t.minComp);   // 편집 목록이 이상하면 무시
        const O = ed ? ed.M / ts - ed.E : 0;
        out[id] = { ts, t, mediaTime: P - dt0, start: P / ts - O, len: (dt0 + t.maxEnd - P) / ts, edit: !!ed };
      }
      return out;
    }

    build() {
      const I = this.init, moov = this.moov;
      const mvhd = childBox(I, moov, 'mvhd');
      const mv1 = I[mvhd.body] === 1;
      const mts = u32(I, mvhd.body + 4 + (mv1 ? 16 : 8));
      const info = this.lengths(mts);
      const ids = Object.keys(info);
      if (!ids.length) throw new Error('샘플 정보 없음');
      const t0 = Math.min(...ids.map(id => info[id].start));
      const movieDur = Math.max(...ids.map(id => info[id].start - t0 + info[id].len));

      const copy = b => I.slice(b.start, b.end);
      // 버전 0/1에 맞춰 길이 칸 덮어쓰기
      const setDur = (bytes, box, off0, off1, value) => {
        const d = new DataView(bytes.buffer, bytes.byteOffset);
        const o = box.body - box.start + 4 + (I[box.body] === 1 ? off1 : off0);
        if (I[box.body] === 1) { be32(d, o, Math.floor(value / 2 ** 32)); be32(d, o + 4, value % 2 ** 32); }
        else be32(d, o, Math.min(value, 0xffffffff));
        return bytes;
      };

      const makeMoov = dataStart => {
        const traks = [];
        for (const trak of boxes(I, moov.body, moov.end)) {
          if (trak.type !== 'trak') continue;
          const tkhd = childBox(I, trak, 'tkhd'), mdia = childBox(I, trak, 'mdia');
          const mdhd = mdia && childBox(I, mdia, 'mdhd'), hdlr = mdia && childBox(I, mdia, 'hdlr');
          const minf = mdia && childBox(I, mdia, 'minf'), stbl = minf && childBox(I, minf, 'stbl');
          const stsd = stbl && childBox(I, stbl, 'stsd');
          if (!tkhd || !mdhd || !hdlr || !minf || !stsd) continue;
          const id = u32(I, tkhd.body + 4 + (I[tkhd.body] === 1 ? 16 : 8));
          const tr = info[id];
          if (!tr) continue;                         // 샘플이 없는 트랙은 뺌
          const t = tr.t;
          const isVideo = ascii(I, hdlr.body + 8, 4) === 'vide';

          const stts = table('stts', 0, runs(t.durs), 8, (d, o, r) => { be32(d, o, r[0]); be32(d, o + 4, r[1]); });
          const ctsRuns = runs(t.cts);
          const needCtts = ctsRuns.length > 1 || ctsRuns[0][1] !== 0;
          const neg = t.cts.some(x => x < 0);
          const ctts = needCtts ? table('ctts', neg ? 1 : 0, ctsRuns, 8, (d, o, r) => {
            be32(d, o, r[0]);
            if (neg) d.setInt32(o + 4, r[1]); else be32(d, o + 4, r[1]);
          }) : null;
          const syncList = [];
          t.sync.forEach((y, i) => { if (y) syncList.push(i + 1); });
          const stss = isVideo && syncList.length < t.sync.length ? table('stss', 0, syncList, 4, (d, o, r) => be32(d, o, r)) : null;
          const stszHead = new Uint8Array(4);                              // sample_size = 0 (개별 크기)
          const stsz = table('stsz', 0, t.sizes, 4, (d, o, r) => be32(d, o, r), stszHead);
          const stscRows = [];
          t.chunks.forEach((c, i) => {
            const last = stscRows[stscRows.length - 1];
            if (!last || last[1] !== c.n) stscRows.push([i + 1, c.n]);
          });
          const stsc = table('stsc', 0, stscRows, 12, (d, o, r) => { be32(d, o, r[0]); be32(d, o + 4, r[1]); be32(d, o + 8, 1); });
          const co64 = table('co64', 0, t.chunks, 8, (d, o, c) => {
            const v = dataStart + c.off;
            be32(d, o, Math.floor(v / 2 ** 32)); be32(d, o + 4, v % 2 ** 32);
          });
          const newStbl = mkBox('stbl', ...[copy(stsd), stts, ctts, stss, stsz, stsc, co64].filter(Boolean));

          const minfKids = [];
          for (const k of boxes(I, minf.body, minf.end)) if (k.type !== 'stbl') minfKids.push(copy(k));
          const newMinf = mkBox('minf', ...minfKids, newStbl);
          const newMdhd = setDur(copy(mdhd), mdhd, 12, 20, t.total);
          const newMdia = mkBox('mdia', newMdhd, copy(hdlr), newMinf);

          // 늦게 시작하는 트랙은 빈 구간을 앞에 둬서 영상·소리 싱크 유지,
          // 표시는 처음 보이는 화면·소리의 위치(mediaTime)부터 시작
          const trackMovieDur = Math.round(tr.len * mts);
          const delay = Math.round((tr.start - t0) * mts);
          const newTkhd = setDur(copy(tkhd), tkhd, 16, 24, delay + trackMovieDur);
          let edts = null;
          if (delay > 0 || tr.mediaTime > 0) {
            const rows = [];
            if (delay > 0) rows.push([delay, -1]);
            rows.push([trackMovieDur, tr.mediaTime]);
            edts = mkBox('edts', table('elst', 0, rows, 12, (d, o, r) => {
              be32(d, o, r[0]); d.setInt32(o + 4, r[1]); d.setUint32(o + 8, 0x00010000);
            }));
          }
          traks.push(mkBox('trak', ...[newTkhd, edts, newMdia].filter(Boolean)));
        }
        const newMvhd = setDur(copy(mvhd), mvhd, 12, 20, Math.round(movieDur * mts));
        return mkBox('moov', newMvhd, ...traks);
      };

      const enc = s => Uint8Array.from(s, c => c.charCodeAt(0));
      const ftyp = mkBox('ftyp', enc('isom'), Uint8Array.of(0, 0, 2, 0), enc('isomiso2avc1mp41'));
      const big = this.dataSize + 8 > 0xffffffff;
      const hdrLen = big ? 16 : 8;
      const size0 = makeMoov(0).length;
      const moovOut = makeMoov(ftyp.length + size0 + hdrLen);
      const mdatHdr = new Uint8Array(hdrLen);
      const d = new DataView(mdatHdr.buffer);
      if (big) {
        be32(d, 0, 1);
        mdatHdr.set(enc('mdat'), 4);
        const total = this.dataSize + 16;
        be32(d, 8, Math.floor(total / 2 ** 32)); be32(d, 12, total % 2 ** 32);
      } else {
        be32(d, 0, this.dataSize + 8);
        mdatHdr.set(enc('mdat'), 4);
      }
      return { parts: [ftyp, moovOut, mdatHdr, ...this.pieces], length: movieDur, tracks: ids.length };
    }
  }

  // ---------- 백그라운드 감지 (이어받기용) ----------
  // 페이지가 숨겨질 때마다(다른 탭, 홈 화면, 화면 잠금) 번호를 올려서,
  // 숨겨지기 전에 시작된 요청을 구분함
  let bgEpoch = 0;
  const visWaiters = [];
  const activeReqs = new Set();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      bgEpoch++;
      return;
    }
    // 돌아오면: 숨겨지기 전에 시작돼 멈춰 있을 수 있는 요청을 끊고 바로 다시 받게 함
    for (const req of activeReqs) {
      if (req.epoch !== bgEpoch) req.cancel();
    }
    visWaiters.splice(0).forEach(f => f());
  });

  const waitVisible = () => document.hidden ? new Promise(r => visWaiters.push(r)) : Promise.resolve();
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // 응답 내용 요약 (거절 사유·목록 대신 온 웹페이지 등). IP 주소는 가림
  function errDetail(type, body) {
    const parts = [];
    if (type) parts.push(String(type).split(';')[0].trim());
    try {
      if (body && body.byteLength != null) {
        parts.push(mb(body.byteLength));
        if (body.byteLength) {
          const raw = new TextDecoder().decode(body.slice(0, 4000));
          if (/[\x00-\x08\x0e-\x1a]/.test(raw.slice(0, 300))) {
            parts.push(sniff(body));                 // 글자가 아닌 내용 (위장된 목록 등)
          } else {
            const title = /<title[^>]*>([^<]*)/i.exec(raw);
            const t = (title ? title[1] : raw.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
              .replace(/<[^>]*>/g, ' '))
              .replace(/\s+/g, ' ').trim()
              .replace(/\b\d{1,3}(\.\d{1,3}){3}\b/g, 'x.x.x.x')
              .replace(/\b[0-9a-f]{1,4}(:[0-9a-f]{0,4}){2,7}\b/gi, 'x:x::x')
              .slice(0, 80);
            if (t) parts.push(`"${t}"`);
          }
        }
      }
    } catch (_) {}
    return parts.join(', ');
  }

  const looksHtml = r => /text\/html/i.test(r.type) ||
    /^\s*<(!doctype|html|head|body|\?xml)/i.test(decodeText(new Uint8Array(r.data, 0, Math.min(200, r.data.byteLength))));

  // ---------- 네트워크 ----------
  function gmGet(url, opt = {}) {
    return new Promise((resolve, reject) => {
      const headers = { Referer: location.href };
      if (opt.range) headers.Range = `bytes=${opt.range.start}-${opt.range.end}`;
      const req = { epoch: bgEpoch, handle: null, cancel: null };
      const finish = fn => arg => {
        activeReqs.delete(req);
        fn(arg);
      };
      const ok = finish(resolve), fail = finish(reject);
      req.cancel = () => {
        try { if (req.handle && req.handle.abort) req.handle.abort(); } catch (_) {}
        fail(new Error('재개를 위해 중단'));
      };
      activeReqs.add(req);

      // 페이지와 같은 경로로 요청 (Safari 일반 요청: 같은 IP·네트워크 경로, CORS 적용)
      if (opt.page) {
        if (typeof fetch !== 'function' || typeof AbortController !== 'function') {
          fail(new Error('페이지 요청을 쓸 수 없는 환경'));
          return;
        }
        const ac = new AbortController();
        req.handle = { abort: () => ac.abort() };
        const timer = setTimeout(() => ac.abort(), TIMEOUT_MS);
        fetch(url, { headers: opt.range ? { Range: headers.Range } : {}, signal: ac.signal, credentials: 'same-origin' })
          .then(async r => {
            clearTimeout(timer);
            if (!r.ok) {
              const e = new Error('HTTP ' + r.status);
              e.detail = errDetail(r.headers.get('content-type'), await r.arrayBuffer().catch(() => null));
              fail(e);
              return;
            }
            const h = [...r.headers].map(([k, v]) => `${k}: ${v}`).join('\r\n');
            ok({ data: await r.arrayBuffer(), type: r.headers.get('content-type') || '', url: r.url || url, status: r.status, headers: h });
          })
          .catch(e => {
            clearTimeout(timer);
            fail(new Error(e && e.name === 'AbortError' ? '중단됨' : '페이지 요청 실패 (CORS 차단 등)'));
          });
        return;
      }
      try {
        req.handle = GM_xmlhttpRequest({
        method: 'GET',
        url,
        headers,
        responseType: 'arraybuffer',
        timeout: TIMEOUT_MS,
        onload: r => {
          if (r.status < 200 || r.status >= 300 || !r.response) {
            const e = new Error('HTTP ' + r.status);
            const ct = /content-type:\s*([^\r\n]+)/i.exec(r.responseHeaders || '');
            e.detail = errDetail(ct && ct[1], r.response);
            fail(e);
            return;
          }
          const h = r.responseHeaders || '';
          const m = /content-type:\s*([^\r\n]+)/i.exec(h);
          ok({ data: r.response, type: m ? m[1].trim() : '', url: r.finalUrl || url, status: r.status, headers: h });
        },
        onerror: () => fail(new Error('네트워크 오류')),
        ontimeout: () => fail(new Error('시간 초과')),
        onabort: () => fail(new Error('중단됨')),
        });
      } catch (e) {
        fail(e instanceof Error ? e : new Error(String(e)));
      }
    });
  }

  // 실패하면 다시 받기. 백그라운드에 다녀오는 사이 끊긴 거면 횟수를 세지 않고,
  // 화면으로 돌아올 때까지 기다렸다가 그 조각부터 이어받음
  async function gmGetRetry(url, opt = {}) {
    const max = opt.retries != null ? opt.retries : RETRY;
    let tries = 0;
    for (;;) {
      // 화면이 숨겨진 동안에는 새 요청을 시작하지 않음
      // (숨겨진 동안 시작된 요청은 돌아왔을 때 멈춤 여부를 구분할 수 없음)
      await waitVisible();
      const epoch = bgEpoch;
      try {
        return await gmGet(url, opt);
      } catch (e) {
        if (document.hidden || epoch !== bgEpoch) {
          await waitVisible();
          await sleep(300);
          continue;
        }
        if (++tries > max) throw e;
        await sleep(1000 * tries);
      }
    }
  }

  // 여러 개를 동시에 받되, 하나라도 실패하면 전체 실패
  async function runPool(count, task, parallel = PARALLEL) {
    let next = 0, failed = null;
    const worker = async () => {
      while (!failed && next < count) {
        const i = next++;
        try {
          await task(i);
        } catch (e) {
          failed = e;
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(parallel, count) }, worker));
    if (failed) throw failed;
  }

  // ---------- 범위 나눠 받기 (검증 포함) ----------
  function parseContentRange(headers) {
    const m = /content-range:\s*bytes\s+(\d+)-(\d+)\/(\d+|\*)/i.exec(headers || '');
    return m ? { start: +m[1], end: +m[2], total: m[3] === '*' ? null : +m[3] } : null;
  }

  // url의 span(없으면 전체)을 CHUNK 단위로 나눠 받음.
  // 응답마다 요청한 위치·길이·전체 크기가 맞는지 확인하고, 서버가 범위를 무시하고
  // 전체를 보내면 필요한 부분만 잘라 씀.
  // raw: true면 조각을 ArrayBuffer로, 아니면 Blob으로 돌려줌
  async function fetchRanged(url, span, { onBytes = null, parallel = PARALLEL, raw = false, retries, page = false } = {}) {
    const start = span ? span.start : 0;
    const limit = span ? span.end : Infinity;
    if (!Number.isSafeInteger(start) || start < 0 || (span && (!Number.isSafeInteger(limit) || limit < start))) {
      throw new Error('잘못된 바이트 범위');
    }
    const firstEnd = Math.min(start + CHUNK - 1, limit);
    const first = await gmGetRetry(url, { range: { start, end: firstEnd }, retries, page });
    const wrap = buf => raw ? buf : new Blob([buf]);

    // 범위를 무시하고 전체를 보낸 경우
    if (first.status !== 206) {
      let body = first.data;
      if (span) {
        if (body.byteLength < span.end + 1) throw new Error('범위 응답 불일치');
        body = body.slice(span.start, span.end + 1);
      }
      if (onBytes) onBytes(body.byteLength, body.byteLength);
      return { first, pieces: [wrap(body)] };
    }

    const cr = parseContentRange(first.headers);
    if (!cr || cr.start !== start || cr.end < start || cr.end > firstEnd ||
        first.data.byteLength !== cr.end - cr.start + 1 ||
        (cr.total != null && (cr.total <= cr.end || (span && span.end >= cr.total)))) {
      throw new Error('범위 응답 불일치');
    }

    let end = limit;
    if (cr.total != null) end = Math.min(end, cr.total - 1);
    if (end === Infinity) {
      // 전체 크기를 알려주지 않는 서버: 나누지 않고 한 번에 받음
      const whole = await gmGetRetry(url, { page });
      if (onBytes) onBytes(whole.data.byteLength, whole.data.byteLength);
      return { first: whole, pieces: [wrap(whole.data)] };
    }

    const totalBytes = end - start + 1;
    const pieces = [wrap(first.data)];
    let loaded = first.data.byteLength;
    if (onBytes) onBytes(loaded, totalBytes);

    const ranges = [];
    for (let s = cr.end + 1; s <= end; s += CHUNK) {
      ranges.push({ start: s, end: Math.min(s + CHUNK - 1, end) });
    }
    await runPool(ranges.length, async i => {
      const rg = ranges[i];
      const r = await gmGetRetry(first.url, { range: rg, page });
      const c = parseContentRange(r.headers);
      if (r.status !== 206 || !c || c.start !== rg.start || c.end !== rg.end ||
          (cr.total != null && c.total !== cr.total) ||
          r.data.byteLength !== rg.end - rg.start + 1) {
        throw new Error('범위 응답 불일치');
      }
      pieces[i + 1] = wrap(r.data);
      loaded += r.data.byteLength;
      if (onBytes) onBytes(loaded, totalBytes);
    }, parallel);
    return { first, pieces };
  }

  // 조각 여러 개를 ArrayBuffer 하나로
  function joinBuffers(bufs) {
    if (bufs.length === 1) return bufs[0];
    const out = new Uint8Array(bufs.reduce((n, b) => n + b.byteLength, 0));
    let off = 0;
    for (const b of bufs) {
      out.set(new Uint8Array(b), off);
      off += b.byteLength;
    }
    return out.buffer;
  }

  const decodeText = buf => new TextDecoder().decode(buf).replace(/^﻿/, '');

  const looksPlaylist = text => /^\s*#EXTM3U/.test(text);
  function isPlaylist(res) {
    const head = new Uint8Array(res.data, 0, Math.min(64, res.data.byteLength));
    return looksPlaylist(decodeText(head));
  }

  // ---------- 파일 형식/이름 ----------
  function guessType(url, headerType) {
    if (headerType && headerType.startsWith('video/')) return headerType.split(';')[0].trim();
    const m = url.split(/[?#]/)[0].match(/\.(\w{2,4})$/);
    const ext = m ? m[1].toLowerCase() : '';
    return { mov: 'video/quicktime', webm: 'video/webm', m4v: 'video/x-m4v' }[ext] || 'video/mp4';
  }

  function cleanName(s) {
    return s.replace(/[\\/:*?"<>|\r\n\t]/g, '_').replace(/\s+/g, ' ').trim();
  }

  function makeName(url, type) {
    let base = '';
    try { base = decodeURIComponent(new URL(url).pathname.split('/').pop() || ''); } catch (_) {}
    base = cleanName(base);
    if (!base) base = 'video_' + Date.now();
    if (!/\.\w{2,4}$/.test(base)) {
      const ext = { 'video/quicktime': 'mov', 'video/webm': 'webm', 'video/x-m4v': 'm4v' }[type] || 'mp4';
      base += '.' + ext;
    }
    return base;
  }

  // 스트리밍 영상은 조각 파일 이름이 의미 없어서 페이지 제목으로 저장
  function titleName() {
    let t = cleanName(document.title || '').slice(0, 60);
    if (!t) t = 'video_' + Date.now();
    return t + '.mp4';
  }

  // ---------- HLS(.m3u8) 목록 해석 ----------
  function parseAttrs(s) {
    const o = {};
    const re = /([A-Z0-9-]+)=("[^"]*"|[^,]*)/g;
    let m;
    while ((m = re.exec(s))) o[m[1]] = m[2].replace(/^"|"$/g, '');
    return o;
  }

  const lines = text => text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  // 화질 목록에서 소리가 영상과 합쳐진 것 중 가장 높은 화질 선택
  function pickVariant(text, base, dg = NO_DIAG) {
    const ls = lines(text);
    const variants = [];
    const splitAudio = new Set();
    for (let i = 0; i < ls.length; i++) {
      const l = ls[i];
      if (l.startsWith('#EXT-X-MEDIA:')) {
        const a = parseAttrs(l.slice(13));
        if (a.TYPE === 'AUDIO' && a.URI) splitAudio.add(a['GROUP-ID']);
      } else if (l.startsWith('#EXT-X-STREAM-INF:')) {
        const a = parseAttrs(l.slice(18));
        if (ls[i + 1] && !ls[i + 1].startsWith('#')) {
          variants.push({
            bw: +a.BANDWIDTH || 0, audio: a.AUDIO, res: a.RESOLUTION || '?', codecs: a.CODECS || '?',
            url: new URL(ls[i + 1], base).href,
          });
          i++;
        }
      }
    }
    const usable = variants.filter(v => !(v.audio && splitAudio.has(v.audio)));
    dg.add('화질 목록', `${variants.length}개 (소리 분리형 ${variants.length - usable.length}개)`);
    if (!usable.length) {
      throw new Error(variants.length ? '소리가 분리된 스트리밍이라 지원 안 함' : '화질 목록 없음');
    }
    const best = usable.sort((a, b) => b.bw - a.bw)[0];
    dg.add('선택한 화질', `${best.res}, ${Math.round(best.bw / 1000)}kbps, 코덱 ${best.codecs}`);
    return best.url;
  }

  function parseRange(s, defStart) {
    const [n, o] = s.split('@');
    const start = o !== undefined ? +o : defStart;
    if (!Number.isSafeInteger(start) || start < 0 || !Number.isSafeInteger(+n) || +n <= 0) {
      throw new Error('잘못된 바이트 범위');
    }
    return { start, end: start + +n - 1 };
  }

  // 조각 목록 해석
  function parseMedia(text, base) {
    let seq = 0, key = null, map = null, pendingRange = null, ended = false;
    let lastUrl = null, lastEnd = 0, duration = 0, lastInf = 0;
    const segs = [];
    for (const l of lines(text)) {
      if (l.startsWith('#EXTINF:')) {
        lastInf = parseFloat(l.slice(8)) || 0;
        duration += lastInf;
      } else if (l.startsWith('#EXT-X-MEDIA-SEQUENCE:')) {
        seq = parseInt(l.slice(22), 10) || 0;
      } else if (l.startsWith('#EXT-X-KEY:')) {
        const a = parseAttrs(l.slice(11));
        key = a.METHOD === 'NONE' ? null
          : { method: a.METHOD, uri: a.URI ? new URL(a.URI, base).href : '', iv: a.IV || null };
      } else if (l.startsWith('#EXT-X-MAP:')) {
        const a = parseAttrs(l.slice(11));
        const next = { url: new URL(a.URI, base).href, range: a.BYTERANGE ? parseRange(a.BYTERANGE, 0) : null };
        if (map && (map.url !== next.url || JSON.stringify(map.range) !== JSON.stringify(next.range))) {
          throw new Error('초기화 조각이 바뀌는 스트리밍은 지원 안 함');
        }
        if (!map) {
          // 앞에 암호화 키가 있으면 초기화 조각도 암호화됨 (이때는 IV가 반드시 적혀 있어야 함)
          if (key && key.method === 'AES-128' && !key.iv) throw new Error('암호화된 초기화 조각에 IV가 없음');
          map = { ...next, key };
        }
      } else if (l.startsWith('#EXT-X-BYTERANGE:')) {
        pendingRange = l.slice(17);
      } else if (l === '#EXT-X-ENDLIST') {
        ended = true;
      } else if (!l.startsWith('#')) {
        const url = new URL(l, base).href;
        let range = null;
        if (pendingRange) {
          range = parseRange(pendingRange, url === lastUrl ? lastEnd : 0);
          lastEnd = range.end + 1;
        }
        lastUrl = url;
        segs.push({ url, range, key, seq: seq + segs.length, rel: !/^[a-z][a-z0-9+.-]*:/i.test(l), dur: lastInf });
        lastInf = 0;
        pendingRange = null;
      }
    }
    return { segs, map, ended, duration };
  }

  // ---------- AES-128 복호화 ----------
  function ivBytes(hex, seq) {
    const iv = new Uint8Array(16);
    if (hex) {
      const h = hex.replace(/^0x/i, '').padStart(32, '0');
      for (let i = 0; i < 16; i++) iv[i] = parseInt(h.substr(i * 2, 2), 16);
    } else {
      new DataView(iv.buffer).setUint32(12, seq);
    }
    return iv;
  }

  async function decrypt(data, key, seq, keyCache) {
    let k = keyCache.get(key.uri);
    if (!k) {
      k = step('암호 키', gmGetRetry(key.uri)).then(r => {
        if (r.data.byteLength !== 16) throw new Error(`암호 키 — 길이가 이상함(${r.data.byteLength}바이트)`);
        return crypto.subtle.importKey('raw', r.data, { name: 'AES-CBC' }, false, ['decrypt']);
      });
      keyCache.set(key.uri, k);
    }
    const ck = await k;
    try {
      return await crypto.subtle.decrypt({ name: 'AES-CBC', iv: ivBytes(key.iv, seq) }, ck, data);
    } catch (_) {
      throw new Error('복호화 실패 (키가 맞지 않음)');
    }
  }

  // ---------- TS 조각 → MP4 변환 ----------
  // 메모리를 아끼기 위해 조각을 하나씩 꺼내 변환하고, 변환한 원본은 바로 버림
  async function transmux(parts, dg = NO_DIAG, durs = []) {
    if (typeof muxjs === 'undefined') throw new Error('변환 라이브러리를 불러오지 못함');
    const t = new (muxjs.mp4 || muxjs).Transmuxer();
    let initInfo = null, df = null, dfErr = null;
    t.on('data', s => {
      if (!df && !dfErr) {
        initInfo = mp4Info(s.initSegment.buffer.slice(s.initSegment.byteOffset, s.initSegment.byteOffset + s.initSegment.byteLength));
        try { df = new Defrag(new Uint8Array(s.initSegment)); } catch (e) { dfErr = e; }
      }
      const blob = new Blob([s.data]);
      if (df) {
        try { df.add(s.data, blob); } catch (e) { dfErr = e; df = null; }
      }
    });
    const st = { prevEnd: null, fixed: 0, dropped: 0, log: [] };
    for (let i = 0; i < parts.length; i++) {
      const bytes = cleanTs(await parts[i].arrayBuffer(), durs[i] || 0, st);
      parts[i] = null;
      t.push(bytes);
      t.flush();
    }
    if (!initInfo) throw new Error('MP4 변환 실패');
    dg.add('조각 시간값(앞 3개)', st.log.join(', ') || '없음');
    dg.add('시간 보정', `${st.fixed}곳` + (st.dropped ? `, 영상·소리 외 트랙 ${st.dropped}패킷 제외` : ''));
    dg.add('변환 결과 트랙', initInfo.codecs.join(', ') || '없음');
    if (!initInfo.codecs.some(c => c === 'H.264')) throw new Error('MP4 변환 — 영상 트랙이 빠짐');
    return finishMp4(df, dfErr, durs.reduce((a, b) => a + b, 0), dg);
  }

  // 조각형 → 일반 MP4로 마무리하고 길이를 검사.
  // 재구성에 실패하면 아이폰에서 재생 안 되는 파일이 되므로 저장하지 않고 실패로 끝냄
  function finishMp4(df, dfErr, expected, dg) {
    if (!df) throw new Error(`MP4 재구성 실패 (${dfErr ? dfErr.message : '목차 없음'})`);
    const out = df.build();
    dg.add('저장 형식', `일반 MP4 (조각 ${df.frags}개 합침, 트랙 ${out.tracks}개)`);
    dg.add('결과 길이', `${Math.round(out.length)}초 (목록 ${Math.round(expected)}초)`);
    // 결과 길이가 목록 길이와 크게 다르면 망가진 파일이므로 저장하지 않음
    if (expected > 0 && Math.abs(out.length - expected) > Math.max(5, expected * 0.05)) {
      throw new Error(`MP4 변환 — 결과 길이 이상 (${Math.round(out.length)}초, 원래 ${Math.round(expected)}초)`);
    }
    return out.parts;
  }

  // 받기 전에 암호화(DRM)·변환 불가 형식을 걸러냄 (흰 화면 파일 방지)
  function checkMp4(info, dg, label) {
    dg.add(label, `상자 [${info.tops.join(' ')}], 코덱 ${info.codecs.join(', ') || '못 찾음'}` +
      (info.drm.length ? `, 암호화 표시 ${info.drm.join(', ')}` : ''));
    if (info.drm.length || info.codecs.some(c => c.startsWith('암호화'))) {
      throw new Error('DRM 보호 영상 (파일 안쪽 암호화)');
    }
  }

  function checkTs(buf, dg) {
    const st = tsStreams(buf);
    dg.add('TS 트랙', st ? st.join(', ') : '해석 못 함');
    if (!st) return;
    if (st.some(x => x.includes('암호화'))) throw new Error('DRM 보호 영상 (SAMPLE-AES)');
    if (!st.includes('H.264')) throw new Error(`변환 불가 영상 형식 (${st.join(', ')})`);
  }

  // ---------- 스트리밍 목록 받기 ----------
  // 기본(확장) 요청 → 페이지 요청 순서로 시도.
  // wBlock은 쿠키를 보내지 않아서, 로그인·보안 확인이 필요한 사이트는 목록 대신 웹페이지가 옴
  async function fetchPlaylistText(url, ctx) {
    const ways = ctx.page ? [true] : [false, true];
    let firstErr = null, lastErr = null;
    for (const page of ways) {
      try {
        const r = await gmGetRetry(url, { page, retries: ctx.retries });
        const text = decodeText(r.data);
        if (looksPlaylist(text)) {
          if (page && !ctx.page) {
            ctx.page = true;
            ctx.notes.push('목록 받기: "페이지 요청" 방식으로 성공 → 조각도 이 방식 우선');
          }
          return { text: text.replace(/^\s+/, ''), base: r.url };
        }
        lastErr = new Error('스트리밍 목록이 아님');
        lastErr.detail = errDetail(r.type, r.data);
      } catch (e) {
        lastErr = e;
      }
      ctx.notes.push(`목록 시도: ${page ? '페이지 요청' : '기본'} → ${errText(lastErr)}`);
      if (!firstErr) firstErr = lastErr;
    }
    throw firstErr;   // 기본 요청의 실패 이유가 더 쓸모 있음 (전체 시도는 진단에 기록됨)
  }

  // 목록을 받아 해석 (화질 목록이면 가장 높은 화질의 조각 목록으로 이동)
  async function loadPlaylist(url, ctx, text = null) {
    let base = url;
    if (text == null) ({ text, base } = await fetchPlaylistText(url, ctx));
    else if (!looksPlaylist(text)) throw new Error('스트리밍 목록이 아님');
    else text = text.replace(/^\s+/, '');
    if (text.includes('#EXT-X-STREAM-INF')) {
      const sub = newDiag();
      const vUrl = pickVariant(text, base, sub);
      ctx.notes.push(...sub.lines);
      ({ text, base } = await fetchPlaylistText(vUrl, ctx));
      if (text.includes('#EXT-X-STREAM-INF')) throw new Error('화질 목록이 이중으로 됨');
    }
    const pl = parseMedia(text, base);
    pl.base = base;
    if (!pl.ended) throw new Error('생방송은 저장 불가');
    if (!pl.segs.length) throw new Error('조각 없음');
    if (pl.segs.some(s => s.key && (s.key.method !== 'AES-128' || !/^https?:/i.test(s.key.uri)))) {
      throw new Error('DRM 보호 영상');
    }
    return pl;
  }

  // 후보를 모두 확인해서 받을 수 있는 것 중 가장 긴 영상을 고름
  // (광고·미리보기보다 본영상이 길다는 점을 이용 — 특정 사이트 주소에 의존하지 않음)
  async function pickBestHls(cands, dg) {
    if (!cands.length) throw new Error('스트리밍 목록을 찾지 못함');
    const results = await Promise.all(cands.map(async u => {
      const ctx = { page: false, notes: [], retries: 1 };
      try {
        return { u, ctx, pl: await loadPlaylist(u, ctx) };
      } catch (e) {
        return { u, ctx, err: e };
      }
    }));
    results.forEach((r, i) => dg.add(`후보 ${i + 1}`, `${hostOf(r.u)} → ` +
      (r.pl ? `${Math.round(r.pl.duration)}초, 조각 ${r.pl.segs.length}개` : '실패: ' + errText(r.err))));
    const ok = results.filter(r => r.pl);
    if (!ok.length) {
      if (results.length === 1) dg.push(...results[0].ctx.notes);
      throw results[0].err;
    }
    const best = ok.reduce((a, b) => (b.pl.duration > a.pl.duration ? b : a));
    if (results.length > 1) dg.add('선택', `후보 ${results.indexOf(best) + 1} (받을 수 있는 것 중 가장 긴 영상)`);
    return best;
  }

  // ---------- HLS 다운로드 ----------
  async function downloadHls(url, pl, ctx, onProgress, dg = NO_DIAG) {
    const { segs, map, duration, base } = pl;
    dg.add('목록 서버', hostOf(url));
    dg.push(...ctx.notes);
    const keys = [...new Set(segs.map(s => s.key ? s.key.method : '없음'))];
    dg.add('조각', `${segs.length}개, ${Math.round(duration)}초, 서버 ${hostOf(segs[0].url)}` +
      (map ? ', 초기화 조각 있음(fMP4)' : ''));
    dg.add('암호화(목록 표시)', keys.join(', '));

    const keyCache = new Map();
    const page0 = !!ctx.page;
    // fMP4면 초기화 조각부터 받아 암호화 여부 확인
    let initBuf = null;
    if (map) {
      initBuf = await step('초기화 조각', (async () => {
        let d = joinBuffers((await fetchRanged(map.url, map.range, { parallel: 1, raw: true, page: page0 })).pieces);
        if (map.key) d = await decrypt(d, map.key, 0, keyCache);
        return d;
      })());
      checkMp4(mp4Info(initBuf), dg, '초기화 조각');
    }

    // 첫 조각: 받히는 방식을 찾고 형식을 확인한 뒤, 같은 방식으로 나머지를 받음
    const listQuery = queryOf(base);
    dg.add('목록 주소 쿼리', queryKeys(base));
    dg.add('첫 조각 주소', segShape(segs[0]));
    const pageWay = segs[0].range ? { name: '페이지 요청', page: true } : { name: '페이지 요청', page: true, noRange: true };
    const ways = page0 ? [pageWay, { name: '기본' }] : [{ name: '기본' }];
    if (!segs[0].range) ways.push({ name: 'Range 없이', noRange: true });
    if (!page0) ways.push(pageWay);
    if (listQuery && !queryOf(segs[0].url)) {
      ways.push({ name: '목록 쿼리 붙임', addQuery: true });
      if (!segs[0].range) ways.push({ name: '목록 쿼리 붙임 + Range 없이', addQuery: true, noRange: true });
    }
    const getSeg = async (s, way, retries) => {
      const u = way.addQuery && !queryOf(s.url) ? s.url + listQuery : s.url;
      if (way.noRange) return (await gmGetRetry(u, { retries, page: !!way.page })).data;
      return joinBuffers((await fetchRanged(u, s.range, { parallel: 1, raw: true, retries, page: !!way.page })).pieces);
    };

    let way = null, firstData = null, lastErr = null;
    for (const w of ways) {
      try {
        firstData = await getSeg(segs[0], w, w === ways[0] ? undefined : 0);
        way = w;
        break;
      } catch (e) {
        lastErr = e;
        dg.add('첫 조각 시도', `${w.name} → ${errText(e)}`);
      }
    }
    if (!way) throw tagErr('조각', lastErr);
    if (way !== ways[0]) dg.add('첫 조각 받기', `"${way.name}" 방식으로 성공 → 나머지도 이 방식`);

    let data = firstData;
    if (segs[0].key) data = await step('조각', decrypt(data, segs[0].key, segs[0].seq, keyCache));
    const kind = sniff(data);
    dg.add('첫 조각 형식', `${kind}, ${mb(data.byteLength)}`);
    const isTs = kind === 'TS';
    if (isTs) checkTs(data, dg);
    else if (!map && kind === 'MP4 조각') checkMp4(mp4Info(data), dg, '첫 조각 내용');
    else if (!map) throw new Error(`알 수 없는 조각 형식 (${kind})`);

    // 나머지 조각 (동시에 여러 개, 순서는 유지). 받은 조각은 바로 Blob으로 넘겨
    // 스크립트가 쥐고 있는 메모리를 줄임
    const parts = new Array(segs.length);
    parts[0] = new Blob([data]);
    data = firstData = null;
    let done = 1;
    onProgress(done / segs.length * 0.95);
    await step('조각', runPool(segs.length - 1, async j => {
      const s = segs[j + 1];
      let d = await getSeg(s, way);
      if (s.key) d = await decrypt(d, s.key, s.seq, keyCache);
      parts[j + 1] = new Blob([d]);
      onProgress(++done / segs.length * 0.95);
    }));

    // 합치기: TS 조각은 MP4로 변환, fMP4 조각은 일반 MP4로 재구성
    const expected = segs.reduce((a, x) => a + x.dur, 0);
    let chunks;
    if (map) {
      let df = null, dfErr = null;
      try { df = new Defrag(new Uint8Array(initBuf)); } catch (e) { dfErr = e; }
      for (let i = 0; i < parts.length && df; i++) {
        try { df.add(new Uint8Array(await parts[i].arrayBuffer()), parts[i]); } catch (e) { dfErr = e; df = null; }
        parts[i] = null;
      }
      chunks = finishMp4(df, dfErr, expected, dg);
    } else if (isTs) {
      chunks = await transmux(parts, dg, segs.map(x => x.dur));
    } else {
      throw new Error(`알 수 없는 조각 형식 (${kind})`);
    }
    onProgress(1);
    return new File(chunks, titleName(), { type: 'video/mp4' });
  }

  // ---------- 영상 받기 (일반 파일 / 스트리밍 자동 판별) ----------
  async function fromCandidates(cands, onProgress, dg) {
    const best = await step('목록', pickBestHls(cands, dg));
    return downloadHls(best.u, best.pl, best.ctx, onProgress, dg);
  }

  async function fetchVideo(src, onProgress, dg = NO_DIAG) {
    // 영상 주소가 숨겨진 경우(blob:): 페이지가 불러온·적어둔 m3u8 중 본영상을 골라 받음
    if (src.startsWith('blob:') || src.startsWith('mediasource:')) {
      const cands = hlsCandidates();
      dg.add('찾은 m3u8 후보', `${cands.length}개`);
      return fromCandidates(cands, onProgress, dg);
    }
    if (/\.mpd(\?|#|$)/i.test(src)) {
      const cands = hlsCandidates();
      if (!cands.length) throw new Error('DASH 스트리밍은 지원 안 함');
      dg.add('DASH 대신 쓸 m3u8 후보', `${cands.length}개`);
      return fromCandidates(cands, onProgress, dg);
    }
    if (HLS_RE.test(src)) {
      const ctx = { page: false, notes: [] };
      let pl;
      try {
        pl = await loadPlaylist(src, ctx);
      } catch (e) {
        // 영상 주소의 목록이 안 되면 페이지 안의 다른 m3u8로 대신 시도
        dg.add('목록 서버', hostOf(src));
        dg.push(...ctx.notes);
        const cands = hlsCandidates(src);
        if (!cands.length) throw tagErr('목록', e);
        dg.add('영상 주소 목록 실패 → 다른 m3u8 후보', `${cands.length}개`);
        return fromCandidates(cands, onProgress, dg);
      }
      return downloadHls(src, pl, ctx, onProgress, dg);
    }
    return downloadFile(src, onProgress, dg);
  }

  // 일반 영상 파일: 8MB씩 나눠 받아 합침 (진행률 표시, 앱별 응답 크기 제한 회피)
  // 기본 요청이 막히거나 영상 대신 웹페이지가 오면 페이지 요청으로 다시 시도
  async function downloadFile(src, onProgress, dg = NO_DIAG) {
    dg.add('파일 서버', hostOf(src));
    let res = null, firstErr = null, usedPage = false;
    for (const page of [false, true]) {
      try {
        const r = await fetchRanged(src, null, {
          page, retries: page ? 1 : undefined,
          onBytes: (loaded, total) => onProgress(loaded / total),
        });
        if (!isPlaylist(r.first) && looksHtml(r.first)) {
          const e = new Error('영상 대신 웹페이지가 옴');
          e.detail = errDetail(r.first.type, r.first.data);
          throw e;
        }
        res = r;
        usedPage = page;
        if (page) dg.add('파일 받기', '"페이지 요청" 방식으로 성공');
        break;
      } catch (e) {
        if (!firstErr) firstErr = e;
        dg.add('파일 시도', `${page ? '페이지 요청' : '기본'} → ${errText(e)}`);
      }
    }
    if (!res) throw tagErr('파일', firstErr);
    const { first, pieces } = res;
    // 확장자가 없어도 내용이 스트리밍 목록이면 스트리밍으로 처리
    if (isPlaylist(first)) {
      const ctx = { page: usedPage, notes: [] };
      const pl = await step('목록', loadPlaylist(first.url, ctx, decodeText(first.data)));
      return downloadHls(first.url, pl, ctx, onProgress, dg);
    }

    const type = guessType(src, first.type);
    dg.add('파일 형식', `${first.type || '표시 없음'}, 앞부분 ${sniff(first.data)}`);
    const info = mp4Info(first.data);
    if (info.tops.includes('moov')) checkMp4(info, dg, '파일 내용');
    else if (info.tops.length) dg.add('파일 내용', `상자 [${info.tops.join(' ')}] (정보 상자가 뒤쪽에 있어 확인 생략)`);
    return new File(pieces, makeName(src, type), { type });
  }

  // ---------- 저장 (공유 시트 → '비디오 저장', 안 되면 파일 앱 다운로드) ----------
  async function save(file) {
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file] });
        return;
      } catch (e) {
        if (e.name === 'AbortError') return;   // 공유 시트를 닫음
      }
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 60000);
  }

  // ---------- 버튼 (Trusted Types 사이트 대비 innerHTML 없이 생성) ----------
  function createButton() {
    const b = document.createElement('button');
    b.id = BTN_ID;
    b.type = 'button';
    b.setAttribute('aria-label', '동영상 저장');

    const icon = document.createElementNS(SVG_NS, 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('class', 'tm-icon');
    iconPath = document.createElementNS(SVG_NS, 'path');
    icon.appendChild(iconPath);

    // 불러오는 중 진행률 링
    const ring = document.createElementNS(SVG_NS, 'svg');
    ring.setAttribute('viewBox', '0 0 40 40');
    ring.setAttribute('class', 'tm-ring');
    ringCircle = document.createElementNS(SVG_NS, 'circle');
    ringCircle.setAttribute('cx', '20');
    ringCircle.setAttribute('cy', '20');
    ringCircle.setAttribute('r', '18');
    ringCircle.setAttribute('pathLength', '100');
    ringCircle.setAttribute('stroke-dasharray', '0 100');
    ring.appendChild(ringCircle);

    b.appendChild(icon);
    b.appendChild(ring);

    // 버튼 탭이 플레이어(재생/일시정지, 링크 이동)로 전달되지 않게 막기
    ['pointerdown', 'pointerup', 'touchstart', 'touchend', 'mousedown', 'mouseup'].forEach(t =>
      b.addEventListener(t, e => e.stopPropagation()));
    // 길게 누르면 진단 정보, 짧게 누르면 원래 동작
    let lpTimer = null, lpFired = false;
    b.addEventListener('pointerdown', () => {
      lpFired = false;
      clearTimeout(hideTimer);              // 누르고 있는 동안 버튼이 사라지지 않게
      clearTimeout(lpTimer);
      lpTimer = setTimeout(() => {
        lpFired = true;
        showDiag(current);
      }, LONG_PRESS_MS);
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(t => b.addEventListener(t, () => {
      clearTimeout(lpTimer);
      if (!lpFired && btn.classList.contains('tm-show')) {
        clearTimeout(hideTimer);
        hideTimer = setTimeout(hideIfIdle, SHOW_MS);
      }
    }));
    b.addEventListener('contextmenu', e => e.preventDefault());
    b.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      if (lpFired) {
        lpFired = false;
        return;
      }
      onTap();
    });

    document.body.appendChild(b);
    return b;
  }

  // ---------- 진단 정보 창 ----------
  function diagText(v) {
    const st = v && states.get(v);
    const src = v ? getSrc(v) : '';
    const out = [
      `동영상 저장 진단 v${VERSION}`,
      `앱: ${managerName()}`,
      `페이지: ${location.host}`,
      `영상 주소: ${srcKind(src)} / ${hostOf(src)}`,
      '',
    ];
    if (st && st.diag) out.push(...st.diag.lines);
    else out.push('아직 받기 기록 없음 — 버튼을 짧게 눌러 받기를 먼저 시도한 뒤 다시 길게 누르세요');
    return out.join('\n');
  }

  function closeDiag() {
    const old = document.getElementById(DIAG_ID);
    if (old) old.remove();
  }

  function showDiag(v) {
    hide();
    closeDiag();
    const text = diagText(v);
    const box = document.createElement('section');
    box.id = DIAG_ID;
    const pre = document.createElement('pre');
    pre.textContent = text;
    const row = document.createElement('div');
    const copy = document.createElement('button');
    copy.type = 'button';
    copy.textContent = '복사';
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(text);
        copy.textContent = '복사됨';
      } catch (_) {
        copy.textContent = '복사 실패 — 글자를 길게 눌러 복사';
      }
    });
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = '닫기';
    close.addEventListener('click', closeDiag);
    row.appendChild(copy);
    row.appendChild(close);
    box.appendChild(pre);
    box.appendChild(row);
    // 진단 창 조작이 페이지로 전달되지 않게 막기
    ['pointerdown', 'pointerup', 'touchstart', 'touchend', 'mousedown', 'mouseup', 'click'].forEach(t =>
      box.addEventListener(t, e => e.stopPropagation()));
    document.body.appendChild(box);
  }

  function stateOf(v) {
    let st = states.get(v);
    if (!st) {
      st = { src: null, file: null, busy: false, progress: null };
      states.set(v, st);
    }
    return st;
  }

  // 아이콘: 기본 ↓ / 불러오는 중 ↓ + 진행률 링 / 준비 완료 ✓ / 불가·실패 ⦸(빨간 배경)
  function render() {
    if (!btn) return;
    const st = current && states.get(current);
    let d = ICON.download;
    let label = '동영상 저장';
    btn.classList.remove('tm-busy', 'tm-indet');

    if (errTimer) {
      d = ICON.block;
      label = '저장할 수 없는 영상';
    } else if (st && st.file) {
      d = ICON.check;
      label = '눌러서 저장';
    } else if (st && st.busy) {
      btn.classList.add('tm-busy');
      if (st.progress == null) {
        btn.classList.add('tm-indet');
        ringCircle.setAttribute('stroke-dasharray', '25 100');
      } else {
        ringCircle.setAttribute('stroke-dasharray', `${Math.max(2, st.progress * 100)} 100`);
      }
      label = '불러오는 중';
    }
    iconPath.setAttribute('d', d);
    btn.classList.toggle('tm-err', !!errTimer);
    btn.setAttribute('aria-label', label);
  }

  // ---------- 위치: 영상 안쪽 우측 상단 (PiP 버튼은 좌측 상단) ----------
  // 주소의 # 뒤는 무시 (재생 위치 표시 등으로 바뀌는 사이트가 있음)
  const pageUrl = () => location.origin + location.pathname + location.search;
  let shownUrl = '', followRaf = 0, lastFollow = 0;

  function place() {
    if (!btn || !current) return;
    if (!current.isConnected) {
      hide();
      current = null;
      return;
    }
    // 페이지가 바뀌면(유튜브처럼 새로고침 없이 이동하는 사이트 포함) 숨김
    if (pageUrl() !== shownUrl) {
      hide();
      return;
    }
    const r = current.getBoundingClientRect();
    // 영상이 숨겨지거나 다른 곳으로 옮겨지는 중이면 숨김
    if (r.width < MIN_SIZE || r.height < MIN_SIZE) {
      hide();
      return;
    }
    btn.style.top = (r.top + scrollY + 8) + 'px';
    btn.style.left = (r.right + scrollX - 40 - 8) + 'px';
  }

  // 버튼이 떠 있는 동안에만 매 화면마다 영상 위치를 따라감
  // (사이트가 탭 이후에 플레이어 크기·위치를 바꿔도 모서리에 붙어 있게).
  // 불러오는 중처럼 오래 떠 있을 때는 0.1초마다만 확인
  function followLoop(ts) {
    followRaf = 0;
    if (!btn || !btn.classList.contains('tm-show')) return;
    const st = current && states.get(current);
    if (!(st && st.busy) || ts - lastFollow >= 100) {
      lastFollow = ts;
      place();
    }
    if (btn.classList.contains('tm-show')) followRaf = requestAnimationFrame(followLoop);
  }

  function startFollow() {
    if (!followRaf && typeof requestAnimationFrame === 'function') followRaf = requestAnimationFrame(followLoop);
  }

  // ---------- 표시 / 숨김 ----------
  function show(v, ms = SHOW_MS) {
    if (!btn) btn = createButton();
    if (current !== v && errTimer) {
      clearTimeout(errTimer);
      errTimer = null;
    }
    current = v;

    // 영상 주소가 바뀌었으면 이전에 받아둔 파일 버림
    const st = stateOf(v);
    if (!st.busy && st.src && st.src !== getSrc(v)) {
      st.src = null;
      st.file = null;
    }

    shownUrl = pageUrl();
    render();
    btn.classList.add('tm-show');
    place();                                   // 표시할 수 없는 상태면 여기서 바로 숨김
    if (!btn.classList.contains('tm-show')) return;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideIfIdle, ms);
    startFollow();
  }

  // 불러오는 동안에는 숨기지 않음
  function hideIfIdle() {
    const st = current && states.get(current);
    if (st && st.busy) {
      hideTimer = setTimeout(hideIfIdle, 500);
      return;
    }
    hide();
  }

  function hide() {
    clearTimeout(hideTimer);
    if (btn) btn.classList.remove('tm-show');
    if (followRaf) {
      cancelAnimationFrame(followRaf);
      followRaf = 0;
    }
  }

  function showError(v) {
    clearTimeout(errTimer);
    errTimer = setTimeout(() => { errTimer = null; render(); }, SHOW_MS);
    show(v);
  }

  // ---------- 버튼 동작 ----------
  async function onTap() {
    const v = current;
    if (!v) return;
    const st = stateOf(v);
    if (st.busy) return;

    // 두 번째 탭: 저장
    if (st.file) {
      await save(st.file);
      if (current === v) show(v);
      return;
    }

    // 첫 번째 탭: 불러오기
    const src = getSrc(v);
    if (!src) {
      showError(v);
      return;
    }

    st.busy = true;
    st.progress = null;
    st.src = src;
    const dg = st.diag = newDiag();
    dg.add('시도 시각', new Date().toLocaleTimeString());
    show(v);

    let ok = false;
    try {
      st.file = await fetchVideo(src, p => {
        st.progress = p;
        if (current === v) render();
      }, dg);
      ok = true;
      dg.add('결과', `성공 — ${mb(st.file.size)}`);
    } catch (e) {
      console.warn('[동영상 저장]', e);
      dg.add('결과', '실패 — ' + (e && e.message ? e.message : e));
      st.src = null;
    }
    st.busy = false;
    st.progress = null;

    if (current !== v) return;
    if (ok) show(v, SHOW_MS * 2);
    else showError(v);
  }

  // ---------- 동영상 화면 탭 감지 ----------
  function videoAt(x, y) {
    const vids = document.querySelectorAll('video');
    for (let i = vids.length - 1; i >= 0; i--) {
      const r = vids[i].getBoundingClientRect();
      if (r.width >= MIN_SIZE && r.height >= MIN_SIZE &&
          x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
        return vids[i];
      }
    }
    return null;
  }

  // iOS Safari는 손가락을 떼는 순간 화면에 새 요소가 나타나면 그 탭을 '호버'로 보고
  // 페이지의 클릭을 취소함 → 플레이어 자체 버튼이 씹힘.
  // 그래서 손을 뗄 때는 기록만 하고, 페이지가 클릭을 받은 뒤에 버튼을 표시/숨김.
  let pendingTap = null, tapTimer = null;

  function handleTap() {
    clearTimeout(tapTimer);
    const v = pendingTap;
    pendingTap = null;
    if (!v) return;
    // 버튼이 떠 있는 영상을 다시 탭하면 숨기고, 아니면 표시
    if (v === current && btn && btn.classList.contains('tm-show')) hide();
    else show(v);
  }

  addEventListener('pointerup', e => {
    if (btn && btn.contains(e.target)) return;
    const diagBox = document.getElementById(DIAG_ID);
    if (diagBox && diagBox.contains(e.target)) return;
    const v = videoAt(e.clientX, e.clientY);
    if (!v) return;
    pendingTap = v;
    clearTimeout(tapTimer);
    // 페이지가 클릭 자체를 막아 click이 오지 않는 경우 대비 (Safari 감시 시간 이후)
    tapTimer = setTimeout(handleTap, 400);
  }, true);

  // 클릭이 페이지에 전달된 다음 처리
  addEventListener('click', () => {
    if (pendingTap) setTimeout(handleTap, 0);
  }, true);
})();
