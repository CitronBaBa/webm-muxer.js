
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in g)g.hasOwnProperty(m)&&(k[m]=g[m]);var ba=[],ca="./this.program";function da(a,b){throw b;}var ea="object"===typeof window,n="function"===typeof importScripts,fa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,u="",ha,ka,la,x,y;
if(fa)u=n?require("path").dirname(u)+"/":__dirname+"/",ha=function(a,b){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);return x.readFileSync(a,b?null:"utf8")},la=function(a){a=ha(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||B("Assertion failed: undefined");return a},ka=function(a,b,c){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);x.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),
"undefined"!==typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof C))throw a;}),process.on("unhandledRejection",B),da=function(a,b){if(noExitRuntime||0<D)throw process.exitCode=a,b;process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(ea||n)n?u=self.location.href:"undefined"!==typeof document&&document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",ha=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},n&&(la=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ka=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ma=g.print||console.log.bind(console),F=g.printErr||console.warn.bind(console);
for(m in k)k.hasOwnProperty(m)&&(g[m]=k[m]);k=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(da=g.quit);var G;g.wasmBinary&&(G=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!1;"object"!==typeof WebAssembly&&B("no native wasm support detected");var na,H=!1,oa,sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|l:(e&7)<<18|f<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function ua(a){return a?ta(va,a,void 0):""}
function wa(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var f=0;f<a.length;++f){var l=a.charCodeAt(f);if(55296<=l&&57343>=l){var r=a.charCodeAt(++f);l=65536+((l&1023)<<10)|r&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function xa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ya(a){var b=xa(a)+1,c=za(b);wa(a,I,c,b);return c}var Aa,I,va,Ga,J,Ha=[],Ia=[],Ja=[],Ka=[],La=[],D=0;function Ma(){var a=g.preRun.shift();Ha.unshift(a)}var K=0,Na=null,Oa=null;g.preloadedImages={};g.preloadedAudios={};
function B(a){if(g.onAbort)g.onAbort(a);F(a);H=!0;oa=1;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Pa(){return L.startsWith("data:application/octet-stream;base64,")}var L;L="webm-muxer.wasm";if(!Pa()){var Qa=L;L=g.locateFile?g.locateFile(Qa,u):u+Qa}function Ra(){var a=L;try{if(a==L&&G)return new Uint8Array(G);if(la)return la(a);throw"both async and sync fetching of the wasm failed";}catch(b){B(b)}}
function Sa(){if(!G&&(ea||n)){if("function"===typeof fetch&&!L.startsWith("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ra()});if(ka)return new Promise(function(a,b){ka(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ra()})}var M,Ta;
function Ua(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.ka;"number"===typeof c?void 0===b.ba?Va.call(null,c):Wa.apply(null,[c,b.ba]):c(void 0===b.ba?null:b.ba)}}}function Ya(a){this.W=a-16;this.Ra=function(b){J[this.W+4>>2]=b};this.Oa=function(b){J[this.W+8>>2]=b};this.Pa=function(){J[this.W>>2]=0};this.Na=function(){I[this.W+12>>0]=0};this.Qa=function(){I[this.W+13>>0]=0};this.Ha=function(b,c){this.Ra(b);this.Oa(c);this.Pa();this.Na();this.Qa()}}var Za=0;
function $a(a,b){for(var c=0,d=a.length-1;0<=d;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function ab(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=$a(a.split("/").filter(function(d){return!!d}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function bb(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function cb(a){if("/"===a)return"/";a=ab(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}
function db(){if("object"===typeof crypto&&"function"===typeof crypto.getRandomValues){var a=new Uint8Array(1);return function(){crypto.getRandomValues(a);return a[0]}}if(fa)try{var b=require("crypto");return function(){return b.randomBytes(1)[0]}}catch(c){}return function(){B("randomDevice")}}
function eb(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=$a(a.split("/").filter(function(d){return!!d}),!b).join("/");return(b?"/":"")+a||"."}var fb=[];function gb(a,b){fb[a]={input:[],output:[],V:b};hb(a,ib)}
var ib={open:function(a){var b=fb[a.node.rdev];if(!b)throw new N(43);a.tty=b;a.seekable=!1},close:function(a){a.tty.V.flush(a.tty)},flush:function(a){a.tty.V.flush(a.tty)},read:function(a,b,c,d){if(!a.tty||!a.tty.V.xa)throw new N(60);for(var e=0,f=0;f<d;f++){try{var l=a.tty.V.xa(a.tty)}catch(r){throw new N(29);}if(void 0===l&&0===e)throw new N(6);if(null===l||void 0===l)break;e++;b[c+f]=l}e&&(a.node.timestamp=Date.now());return e},write:function(a,b,c,d){if(!a.tty||!a.tty.V.na)throw new N(60);try{for(var e=
0;e<d;e++)a.tty.V.na(a.tty,b[c+e])}catch(f){throw new N(29);}d&&(a.node.timestamp=Date.now());return e}},kb={xa:function(a){if(!a.input.length){var b=null;if(fa){var c=Buffer.alloc(256),d=0;try{d=x.readSync(process.stdin.fd,c,0,256,null)}catch(e){if(e.toString().includes("EOF"))d=0;else throw e;}0<d?b=c.slice(0,d).toString("utf-8"):b=null}else"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==
b&&(b+="\n"));if(!b)return null;a.input=jb(b,!0)}return a.input.shift()},na:function(a,b){null===b||10===b?(ma(ta(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(ma(ta(a.output,0)),a.output=[])}},lb={na:function(a,b){null===b||10===b?(F(ta(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(F(ta(a.output,0)),a.output=[])}},O={O:null,S:function(){return O.createNode(null,"/",16895,0)},createNode:function(a,
b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new N(63);O.O||(O.O={dir:{node:{T:O.K.T,P:O.K.P,lookup:O.K.lookup,da:O.K.da,rename:O.K.rename,unlink:O.K.unlink,rmdir:O.K.rmdir,readdir:O.K.readdir,symlink:O.K.symlink},stream:{U:O.L.U}},file:{node:{T:O.K.T,P:O.K.P},stream:{U:O.L.U,read:O.L.read,write:O.L.write,sa:O.L.sa,ya:O.L.ya,Aa:O.L.Aa}},link:{node:{T:O.K.T,P:O.K.P,readlink:O.K.readlink},stream:{}},ta:{node:{T:O.K.T,P:O.K.P},stream:mb}});c=nb(a,b,c,d);16384===(c.mode&61440)?(c.K=O.O.dir.node,
c.L=O.O.dir.stream,c.J={}):32768===(c.mode&61440)?(c.K=O.O.file.node,c.L=O.O.file.stream,c.M=0,c.J=null):40960===(c.mode&61440)?(c.K=O.O.link.node,c.L=O.O.link.stream):8192===(c.mode&61440)&&(c.K=O.O.ta.node,c.L=O.O.ta.stream);c.timestamp=Date.now();a&&(a.J[b]=c,a.timestamp=c.timestamp);return c},Za:function(a){return a.J?a.J.subarray?a.J.subarray(0,a.M):new Uint8Array(a.J):new Uint8Array(0)},ua:function(a,b){var c=a.J?a.J.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,
256)),c=a.J,a.J=new Uint8Array(b),0<a.M&&a.J.set(c.subarray(0,a.M),0))},La:function(a,b){if(a.M!=b)if(0==b)a.J=null,a.M=0;else{var c=a.J;a.J=new Uint8Array(b);c&&a.J.set(c.subarray(0,Math.min(b,a.M)));a.M=b}},K:{T:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;16384===(a.mode&61440)?b.size=4096:32768===(a.mode&61440)?b.size=a.M:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);
b.ctime=new Date(a.timestamp);b.Ga=4096;b.blocks=Math.ceil(b.size/b.Ga);return b},P:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&O.La(a,b.size)},lookup:function(){throw ob[44];},da:function(a,b,c,d){return O.createNode(a,b,c,d)},rename:function(a,b,c){if(16384===(a.mode&61440)){try{var d=pb(b,c)}catch(f){}if(d)for(var e in d.J)throw new N(55);}delete a.parent.J[a.name];a.parent.timestamp=Date.now();a.name=c;b.J[c]=a;b.timestamp=a.parent.timestamp;
a.parent=b},unlink:function(a,b){delete a.J[b];a.timestamp=Date.now()},rmdir:function(a,b){var c=pb(a,b),d;for(d in c.J)throw new N(55);delete a.J[b];a.timestamp=Date.now()},readdir:function(a){var b=[".",".."],c;for(c in a.J)a.J.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=O.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new N(28);return a.link}},L:{read:function(a,b,c,d,e){var f=a.node.J;if(e>=a.node.M)return 0;a=Math.min(a.node.M-
e,d);if(8<a&&f.subarray)b.set(f.subarray(e,e+a),c);else for(d=0;d<a;d++)b[c+d]=f[e+d];return a},write:function(a,b,c,d,e,f){if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.J||a.J.subarray)){if(f)return a.J=b.subarray(c,c+d),a.M=d;if(0===a.M&&0===e)return a.J=b.slice(c,c+d),a.M=d;if(e+d<=a.M)return a.J.set(b.subarray(c,c+d),e),d}O.ua(a,e+d);if(a.J.subarray&&b.subarray)a.J.set(b.subarray(c,c+d),e);else for(f=0;f<d;f++)a.J[e+f]=b[c+f];a.M=Math.max(a.M,e+d);return d},U:function(a,b,
c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.M);if(0>b)throw new N(28);return b},sa:function(a,b,c){O.ua(a.node,b+c);a.node.M=Math.max(a.node.M,b+c)},ya:function(a,b,c,d,e,f){if(0!==b)throw new N(28);if(32768!==(a.node.mode&61440))throw new N(43);a=a.node.J;if(f&2||a.buffer!==Aa){if(0<d||d+c<a.length)a.subarray?a=a.subarray(d,d+c):a=Array.prototype.slice.call(a,d,d+c);d=!0;B();c=void 0;if(!c)throw new N(48);I.set(a,c)}else d=!1,c=a.byteOffset;return{W:c,Ya:d}},Aa:function(a,
b,c,d,e){if(32768!==(a.node.mode&61440))throw new N(43);if(e&2)return 0;O.L.write(a,b,0,d,c,!1);return 0}}},qb=null,rb={},P=[],sb=1,tb=null,ub=!0,vb={},N=null,ob={};
function Q(a,b){a=eb("/",a);b=b||{};if(!a)return{path:"",node:null};var c={wa:!0,oa:0},d;for(d in c)void 0===b[d]&&(b[d]=c[d]);if(8<b.oa)throw new N(32);a=$a(a.split("/").filter(function(l){return!!l}),!1);var e=qb;c="/";for(d=0;d<a.length;d++){var f=d===a.length-1;if(f&&b.parent)break;e=pb(e,a[d]);c=ab(c+"/"+a[d]);e.ea&&(!f||f&&b.wa)&&(e=e.ea.root);if(!f||b.va)for(f=0;40960===(e.mode&61440);)if(e=wb(c),c=eb(bb(c),e),e=Q(c,{oa:b.oa}).node,40<f++)throw new N(32);}return{path:c,node:e}}
function xb(a){for(var b;;){if(a===a.parent)return a=a.S.za,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function yb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%tb.length}function pb(a,b){var c;if(c=(c=zb(a,"x"))?c:a.K.lookup?0:2)throw new N(c,a);for(c=tb[yb(a.id,b)];c;c=c.Ka){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.K.lookup(a,b)}
function nb(a,b,c,d){a=new Ab(a,b,c,d);b=yb(a.parent.id,a.name);a.Ka=tb[b];return tb[b]=a}var Bb={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090};function Cb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function zb(a,b){if(ub)return 0;if(!b.includes("r")||a.mode&292){if(b.includes("w")&&!(a.mode&146)||b.includes("x")&&!(a.mode&73))return 2}else return 2;return 0}function Db(a,b){try{return pb(a,b),20}catch(c){}return zb(a,"wx")}
function Eb(a){var b=4096;for(a=a||0;a<=b;a++)if(!P[a])return a;throw new N(33);}function Fb(a,b){Gb||(Gb=function(){},Gb.prototype={});var c=new Gb,d;for(d in a)c[d]=a[d];a=c;b=Eb(b);a.fd=b;return P[b]=a}var mb={open:function(a){a.L=rb[a.node.rdev].L;a.L.open&&a.L.open(a)},U:function(){throw new N(70);}};function hb(a,b){rb[a]={L:b}}
function Hb(a,b){var c="/"===b,d=!b;if(c&&qb)throw new N(10);if(!c&&!d){var e=Q(b,{wa:!1});b=e.path;e=e.node;if(e.ea)throw new N(10);if(16384!==(e.mode&61440))throw new N(54);}b={type:a,ab:{},za:b,Ja:[]};a=a.S(b);a.S=b;b.root=a;c?qb=a:e&&(e.ea=b,e.S&&e.S.Ja.push(b))}function Ib(a,b,c){var d=Q(a,{parent:!0}).node;a=cb(a);if(!a||"."===a||".."===a)throw new N(28);var e=Db(d,a);if(e)throw new N(e);if(!d.K.da)throw new N(63);return d.K.da(d,a,b,c)}function R(a){return Ib(a,16895,0)}
function Jb(a,b,c){"undefined"===typeof c&&(c=b,b=438);Ib(a,b|8192,c)}function Kb(a,b){if(!eb(a))throw new N(44);var c=Q(b,{parent:!0}).node;if(!c)throw new N(44);b=cb(b);var d=Db(c,b);if(d)throw new N(d);if(!c.K.symlink)throw new N(63);c.K.symlink(c,b,a)}function wb(a){a=Q(a).node;if(!a)throw new N(44);if(!a.K.readlink)throw new N(28);return eb(xb(a.parent),a.K.readlink(a))}
function Lb(a,b,c,d){if(""===a)throw new N(44);if("string"===typeof b){var e=Bb[b];if("undefined"===typeof e)throw Error("Unknown file open mode: "+b);b=e}c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;if("object"===typeof a)var f=a;else{a=ab(a);try{f=Q(a,{va:!(b&131072)}).node}catch(l){}}e=!1;if(b&64)if(f){if(b&128)throw new N(20);}else f=Ib(a,c,0),e=!0;if(!f)throw new N(44);8192===(f.mode&61440)&&(b&=-513);if(b&65536&&16384!==(f.mode&61440))throw new N(54);if(!e&&(c=f?40960===(f.mode&61440)?
32:16384===(f.mode&61440)&&("r"!==Cb(b)||b&512)?31:zb(f,Cb(b)):44))throw new N(c);if(b&512){c=f;c="string"===typeof c?Q(c,{va:!0}).node:c;if(!c.K.P)throw new N(63);if(16384===(c.mode&61440))throw new N(31);if(32768!==(c.mode&61440))throw new N(28);if(e=zb(c,"w"))throw new N(e);c.K.P(c,{size:0,timestamp:Date.now()})}b&=-131713;d=Fb({node:f,path:xb(f),flags:b,seekable:!0,position:0,L:f.L,Wa:[],error:!1},d);d.L.open&&d.L.open(d);!g.logReadFiles||b&1||(Mb||(Mb={}),a in Mb||(Mb[a]=1,F("FS.trackingDelegate error on read file: "+
a)));try{vb.onOpenFile&&(f=0,1!==(b&2097155)&&(f|=1),0!==(b&2097155)&&(f|=2),vb.onOpenFile(a,f))}catch(l){F("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+l.message)}return d}function Nb(a){if(null===a.fd)throw new N(8);a.la&&(a.la=null);try{a.L.close&&a.L.close(a)}catch(b){throw b;}finally{P[a.fd]=null}a.fd=null}function Ob(a,b,c){if(null===a.fd)throw new N(8);if(!a.seekable||!a.L.U)throw new N(70);if(0!=c&&1!=c&&2!=c)throw new N(28);a.position=a.L.U(a,b,c);a.Wa=[]}
function Pb(){N||(N=function(a,b){this.node=b;this.Ma=function(c){this.R=c};this.Ma(a);this.message="FS error"},N.prototype=Error(),N.prototype.constructor=N,[44].forEach(function(a){ob[a]=new N(a);ob[a].stack="<generic error, no stack>"}))}var Qb;function Rb(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Tb(a,b,c){a=ab("/dev/"+a);var d=Rb(!!b,!!c);Ub||(Ub=64);var e=Ub++<<8|0;hb(e,{open:function(f){f.seekable=!1},close:function(){c&&c.buffer&&c.buffer.length&&c(10)},read:function(f,l,r,w){for(var t=0,v=0;v<w;v++){try{var z=b()}catch(E){throw new N(29);}if(void 0===z&&0===t)throw new N(6);if(null===z||void 0===z)break;t++;l[r+v]=z}t&&(f.node.timestamp=Date.now());return t},write:function(f,l,r,w){for(var t=0;t<w;t++)try{c(l[r+t])}catch(v){throw new N(29);}w&&(f.node.timestamp=Date.now());return t}});
Jb(a,d,e)}var Ub,S={},Gb,Mb,Vb=void 0;function T(){Vb+=4;return J[Vb-4>>2]}function U(a){a=P[a];if(!a)throw new N(8);return a}var Wb={};function Xb(){if(!Yb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in Wb)void 0===Wb[b]?delete a[b]:a[b]=Wb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Yb=c}return Yb}var Yb;
function Zb(a){return 0===a%4&&(0!==a%100||0===a%400)}function $b(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var ac=[31,29,31,30,31,30,31,31,30,31,30,31],bc=[31,28,31,30,31,30,31,31,30,31,30,31];function cc(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Zb(a.getFullYear())?ac:bc)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function dc(a,b,c,d){function e(h,p,q){for(h="number"===typeof h?h.toString():h||"";h.length<p;)h=q[0]+h;return h}function f(h,p){return e(h,p,"0")}function l(h,p){function q(Sb){return 0>Sb?-1:0<Sb?1:0}var A;0===(A=q(h.getFullYear()-p.getFullYear()))&&0===(A=q(h.getMonth()-p.getMonth()))&&(A=q(h.getDate()-p.getDate()));return A}function r(h){switch(h.getDay()){case 0:return new Date(h.getFullYear()-1,11,29);case 1:return h;case 2:return new Date(h.getFullYear(),0,3);case 3:return new Date(h.getFullYear(),
0,2);case 4:return new Date(h.getFullYear(),0,1);case 5:return new Date(h.getFullYear()-1,11,31);case 6:return new Date(h.getFullYear()-1,11,30)}}function w(h){h=cc(new Date(h.N+1900,0,1),h.ha);var p=new Date(h.getFullYear()+1,0,4),q=r(new Date(h.getFullYear(),0,4));p=r(p);return 0>=l(q,h)?0>=l(p,h)?h.getFullYear()+1:h.getFullYear():h.getFullYear()-1}var t=J[d+40>>2];d={Ua:J[d>>2],Ta:J[d+4>>2],fa:J[d+8>>2],$:J[d+12>>2],X:J[d+16>>2],N:J[d+20>>2],ga:J[d+24>>2],ha:J[d+28>>2],bb:J[d+32>>2],Sa:J[d+36>>
2],Va:t?ua(t):""};c=ua(c);t={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var v in t)c=c.replace(new RegExp(v,"g"),t[v]);var z="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
E="January February March April May June July August September October November December".split(" ");t={"%a":function(h){return z[h.ga].substring(0,3)},"%A":function(h){return z[h.ga]},"%b":function(h){return E[h.X].substring(0,3)},"%B":function(h){return E[h.X]},"%C":function(h){return f((h.N+1900)/100|0,2)},"%d":function(h){return f(h.$,2)},"%e":function(h){return e(h.$,2," ")},"%g":function(h){return w(h).toString().substring(2)},"%G":function(h){return w(h)},"%H":function(h){return f(h.fa,2)},
"%I":function(h){h=h.fa;0==h?h=12:12<h&&(h-=12);return f(h,2)},"%j":function(h){return f(h.$+$b(Zb(h.N+1900)?ac:bc,h.X-1),3)},"%m":function(h){return f(h.X+1,2)},"%M":function(h){return f(h.Ta,2)},"%n":function(){return"\n"},"%p":function(h){return 0<=h.fa&&12>h.fa?"AM":"PM"},"%S":function(h){return f(h.Ua,2)},"%t":function(){return"\t"},"%u":function(h){return h.ga||7},"%U":function(h){var p=new Date(h.N+1900,0,1),q=0===p.getDay()?p:cc(p,7-p.getDay());h=new Date(h.N+1900,h.X,h.$);return 0>l(q,h)?
f(Math.ceil((31-q.getDate()+($b(Zb(h.getFullYear())?ac:bc,h.getMonth()-1)-31)+h.getDate())/7),2):0===l(q,p)?"01":"00"},"%V":function(h){var p=new Date(h.N+1901,0,4),q=r(new Date(h.N+1900,0,4));p=r(p);var A=cc(new Date(h.N+1900,0,1),h.ha);return 0>l(A,q)?"53":0>=l(p,A)?"01":f(Math.ceil((q.getFullYear()<h.N+1900?h.ha+32-q.getDate():h.ha+1-q.getDate())/7),2)},"%w":function(h){return h.ga},"%W":function(h){var p=new Date(h.N,0,1),q=1===p.getDay()?p:cc(p,0===p.getDay()?1:7-p.getDay()+1);h=new Date(h.N+
1900,h.X,h.$);return 0>l(q,h)?f(Math.ceil((31-q.getDate()+($b(Zb(h.getFullYear())?ac:bc,h.getMonth()-1)-31)+h.getDate())/7),2):0===l(q,p)?"01":"00"},"%y":function(h){return(h.N+1900).toString().substring(2)},"%Y":function(h){return h.N+1900},"%z":function(h){h=h.Sa;var p=0<=h;h=Math.abs(h)/60;return(p?"+":"-")+String("0000"+(h/60*100+h%60)).slice(-4)},"%Z":function(h){return h.Va},"%%":function(){return"%"}};for(v in t)c.includes(v)&&(c=c.replace(new RegExp(v,"g"),t[v](d)));v=jb(c,!1);if(v.length>
b)return 0;I.set(v,a);return v.length-1}function ec(a){try{a()}catch(b){B(b)}}var V=0,W=null,fc=0,gc=[],hc={},ic={},jc=0,kc=null,lc=[],mc=[];function nc(a){var b={},c;for(c in a)(function(d){var e=a[d];b[d]="function"===typeof e?function(){gc.push(d);try{return e.apply(null,arguments)}finally{H||(gc.pop()===d||B("Assertion failed: undefined"),W&&1===V&&0===gc.length&&(D+=1,V=0,ec(g._asyncify_stop_unwind),"undefined"!==typeof Fibers&&Fibers.cb(),kc&&(kc(),kc=null)))}}:e})(c);return b}
function oc(){var a=pc(4108),b=a+12;J[a>>2]=b;J[a+4>>2]=b+4096;b=gc[0];var c=hc[b];void 0===c&&(c=jc++,hc[b]=c,ic[c]=b);J[a+8>>2]=c;return a}function qc(){var a=g.asm[ic[J[W+8>>2]]];--D;return a()}
function rc(a){if(!H){if(0===V){var b=!1,c=!1;a(function(d){if(!H&&(fc=d||0,b=!0,c)){V=2;ec(function(){g._asyncify_start_rewind(W)});"undefined"!==typeof X&&X.ma.ka&&X.ma.resume();var e=qc();W||(d=lc,lc=[],d.forEach(function(f){f(e)}))}});c=!0;b||(V=1,W=oc(),ec(function(){g._asyncify_start_unwind(W)}),"undefined"!==typeof X&&X.ma.ka&&X.ma.pause())}else 2===V?(V=0,ec(g._asyncify_stop_rewind),sc(W),W=null,mc.forEach(function(d){a:if(!H){try{d()}catch(e){if(e instanceof C)break a;if("unwind"!==e)throw e&&
"object"===typeof e&&e.stack&&F("exception thrown: "+[e,e.stack]),e;}if(!(noExitRuntime||0<D))try{tc(oa)}catch(e){if(!(e instanceof C))throw e;}}})):B("invalid state: "+V);return fc}}function Ab(a,b,c,d){a||(a=this);this.parent=a;this.S=a.S;this.ea=null;this.id=sb++;this.name=b;this.mode=c;this.K={};this.L={};this.rdev=d}
Object.defineProperties(Ab.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}}});Pb();tb=Array(4096);Hb(O,"/");R("/tmp");R("/home");R("/home/web_user");
(function(){R("/dev");hb(259,{read:function(){return 0},write:function(b,c,d,e){return e}});Jb("/dev/null",259);gb(1280,kb);gb(1536,lb);Jb("/dev/tty",1280);Jb("/dev/tty1",1536);var a=db();Tb("random",a);Tb("urandom",a);R("/dev/shm");R("/dev/shm/tmp")})();
(function(){R("/proc");var a=R("/proc/self");R("/proc/self/fd");Hb({S:function(){var b=nb(a,"fd",16895,73);b.K={lookup:function(c,d){var e=P[+d];if(!e)throw new N(8);c={parent:null,S:{za:"fake"},K:{readlink:function(){return e.path}}};return c.parent=c}};return b}},"/proc/self/fd")})();var X;function jb(a,b){var c=Array(xa(a)+1);a=wa(a,c,0,c.length);b&&(c.length=a);return c}
var vc={i:function(a){return pc(a+16)+16},a:function(a,b){Ka.unshift({ka:a,ba:b})},h:function(a,b,c){(new Ya(a)).Ha(b,c);Za++;throw a;},c:function(a,b,c){Vb=c;try{var d=U(a);switch(b){case 0:var e=T();return 0>e?-28:Lb(d.path,d.flags,0,e).fd;case 1:case 2:return 0;case 3:return d.flags;case 4:return e=T(),d.flags|=e,0;case 12:return e=T(),Ga[e+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-28;case 9:return J[uc()>>2]=28,-1;default:return-28}}catch(f){return"undefined"!==typeof S&&f instanceof
N||B(f),-f.R}},s:function(a,b,c){Vb=c;try{var d=U(a);switch(b){case 21509:case 21505:return d.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return d.tty?0:-59;case 21519:if(!d.tty)return-59;var e=T();return J[e>>2]=0;case 21520:return d.tty?-28:-59;case 21531:a=e=T();if(!d.L.Ia)throw new N(59);return d.L.Ia(d,b,a);case 21523:return d.tty?0:-59;case 21524:return d.tty?0:-59;default:B("bad ioctl syscall "+b)}}catch(f){return"undefined"!==typeof S&&f instanceof N||B(f),
-f.R}},g:function(a,b,c){Vb=c;try{var d=ua(a),e=c?T():0;return Lb(d,b,e).fd}catch(f){return"undefined"!==typeof S&&f instanceof N||B(f),-f.R}},f:function(){B()},l:function(a){self.Fa=!0;self.Ea=a;self.qa();return a},m:function(a,b,c){va.copyWithin(a,b,b+c)},b:function(a,b){self.Da||(self.Z=[],self.aa=null,self.ia=null,self.ja=null,self.ra=function(){if(0<self.Z.length){var c=self.Z.shift();let d=-1;c.length<=self.ja&&(d=c.length,va.set(c,self.ia));c=self.aa;self.aa=null;self.ia=null;self.ja=null;
c(d)}},self.qa=function(){!self.Fa||self.Y&&!self.Ca||self.postMessage({type:"exit",code:self.Ba||self.Ea})},self.onmessage=async function(c){const d=c.data;switch(d.type){case "start":self.pa=d.muxed_metadata;d.webm_destination?(c=(await import(d.webm_destination)).WebMDestination,self.Y=new c,delete d.webm_destination,self.Y.addEventListener("message",function(e){e=e.detail;switch(e.type){case "ready":this.start(d);break;case "exit":self.Ca=!0;self.Ba=e.code;self.qa();break;default:self.postMessage(e,
e.transfer)}})):self.postMessage({type:"start-stream"});break;case "end":if(self.Y&&self.Y.end(d),0<self.Z.length&&0===self.Z[0].length)break;case "stream-data":self.Z.push(new Uint8Array(d.data)),self.aa&&self.ra()}},self.postMessage({type:"ready"}),self.Da=!0);return rc(c=>{if(0>=b)return c(0);self.aa=c;self.ia=a;self.ja=b;self.ra()})},n:function(){B("OOM")},t:function(a,b){a=va.slice(a,a+b).buffer;self.Xa?self.Y.$a(a,self.pa):self.postMessage(Object.assign({type:"muxed-data",data:a},self.pa),[a]);
return b},p:function(a,b){try{var c=0;Xb().forEach(function(d,e){var f=b+c;e=J[a+4*e>>2]=f;for(f=0;f<d.length;++f)I[e++>>0]=d.charCodeAt(f);I[e>>0]=0;c+=d.length+1});return 0}catch(d){return"undefined"!==typeof S&&d instanceof N||B(d),d.R}},q:function(a,b){try{var c=Xb();J[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});J[b>>2]=d;return 0}catch(e){return"undefined"!==typeof S&&e instanceof N||B(e),e.R}},e:function(a){try{var b=U(a);Nb(b);return 0}catch(c){return"undefined"!==typeof S&&
c instanceof N||B(c),c.R}},r:function(a,b,c,d){try{a:{for(var e=U(a),f=a=0;f<c;f++){var l=J[b+(8*f+4)>>2],r=e,w=J[b+8*f>>2],t=l,v=void 0,z=I;if(0>t||0>v)throw new N(28);if(null===r.fd)throw new N(8);if(1===(r.flags&2097155))throw new N(8);if(16384===(r.node.mode&61440))throw new N(31);if(!r.L.read)throw new N(28);var E="undefined"!==typeof v;if(!E)v=r.position;else if(!r.seekable)throw new N(70);var h=r.L.read(r,z,w,t,v);E||(r.position+=h);var p=h;if(0>p){var q=-1;break a}a+=p;if(p<l)break}q=a}J[d>>
2]=q;return 0}catch(A){return"undefined"!==typeof S&&A instanceof N||B(A),A.R}},k:function(a,b,c,d,e){try{var f=U(a);a=4294967296*c+(b>>>0);if(-9007199254740992>=a||9007199254740992<=a)return-61;Ob(f,a,d);Ta=[f.position>>>0,(M=f.position,1<=+Math.abs(M)?0<M?(Math.min(+Math.floor(M/4294967296),4294967295)|0)>>>0:~~+Math.ceil((M-+(~~M>>>0))/4294967296)>>>0:0)];J[e>>2]=Ta[0];J[e+4>>2]=Ta[1];f.la&&0===a&&0===d&&(f.la=null);return 0}catch(l){return"undefined"!==typeof S&&l instanceof N||B(l),l.R}},d:function(a,
b,c,d){try{a:{for(var e=U(a),f=a=0;f<c;f++){var l=e,r=J[b+8*f>>2],w=J[b+(8*f+4)>>2],t=void 0,v=I;if(0>w||0>t)throw new N(28);if(null===l.fd)throw new N(8);if(0===(l.flags&2097155))throw new N(8);if(16384===(l.node.mode&61440))throw new N(31);if(!l.L.write)throw new N(28);l.seekable&&l.flags&1024&&Ob(l,0,2);var z="undefined"!==typeof t;if(!z)t=l.position;else if(!l.seekable)throw new N(70);var E=l.L.write(l,v,r,w,t,void 0);z||(l.position+=E);try{if(l.path&&vb.onWriteToFile)vb.onWriteToFile(l.path)}catch(q){F("FS.trackingDelegate['onWriteToFile']('"+
l.path+"') threw an exception: "+q.message)}var h=E;if(0>h){var p=-1;break a}a+=h}p=a}J[d>>2]=p;return 0}catch(q){return"undefined"!==typeof S&&q instanceof N||B(q),q.R}},o:function(a,b,c,d){return dc(a,b,c,d)},j:function(a){var b=Date.now()/1E3|0;a&&(J[a>>2]=b);return b}};
(function(){function a(f){f=f.exports;f=nc(f);g.asm=f;na=g.asm.u;Aa=f=na.buffer;g.HEAP8=I=new Int8Array(f);g.HEAP16=Ga=new Int16Array(f);g.HEAP32=J=new Int32Array(f);g.HEAPU8=va=new Uint8Array(f);g.HEAPU16=new Uint16Array(f);g.HEAPU32=new Uint32Array(f);g.HEAPF32=new Float32Array(f);g.HEAPF64=new Float64Array(f);Ia.unshift(g.asm.v);K--;g.monitorRunDependencies&&g.monitorRunDependencies(K);0==K&&(null!==Na&&(clearInterval(Na),Na=null),Oa&&(f=Oa,Oa=null,f()))}function b(f){a(f.instance)}function c(f){return Sa().then(function(l){return WebAssembly.instantiate(l,
d)}).then(f,function(l){F("failed to asynchronously prepare wasm: "+l);B(l)})}var d={a:vc};K++;g.monitorRunDependencies&&g.monitorRunDependencies(K);if(g.instantiateWasm)try{var e=g.instantiateWasm(d,a);return e=nc(e)}catch(f){return F("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return G||"function"!==typeof WebAssembly.instantiateStreaming||Pa()||L.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,
d).then(b,function(l){F("wasm streaming compile failed: "+l);F("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.v).apply(null,arguments)};g._main=function(){return(g._main=g.asm.w).apply(null,arguments)};var uc=g.___errno_location=function(){return(uc=g.___errno_location=g.asm.y).apply(null,arguments)};g._fflush=function(){return(g._fflush=g.asm.z).apply(null,arguments)};
var sc=g._free=function(){return(sc=g._free=g.asm.A).apply(null,arguments)},pc=g._malloc=function(){return(pc=g._malloc=g.asm.B).apply(null,arguments)},za=g.stackAlloc=function(){return(za=g.stackAlloc=g.asm.C).apply(null,arguments)},Wa=g.dynCall_vi=function(){return(Wa=g.dynCall_vi=g.asm.D).apply(null,arguments)},Va=g.dynCall_v=function(){return(Va=g.dynCall_v=g.asm.E).apply(null,arguments)};g._asyncify_start_unwind=function(){return(g._asyncify_start_unwind=g.asm.F).apply(null,arguments)};
g._asyncify_stop_unwind=function(){return(g._asyncify_stop_unwind=g.asm.G).apply(null,arguments)};g._asyncify_start_rewind=function(){return(g._asyncify_start_rewind=g.asm.H).apply(null,arguments)};g._asyncify_stop_rewind=function(){return(g._asyncify_stop_rewind=g.asm.I).apply(null,arguments)};var wc;function C(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Oa=function xc(){wc||yc();wc||(Oa=xc)};
function yc(a){function b(){if(!wc&&(wc=!0,g.calledRun=!0,!H)){g.noFSInit||Qb||(Qb=!0,Pb(),g.stdin=g.stdin,g.stdout=g.stdout,g.stderr=g.stderr,g.stdin?Tb("stdin",g.stdin):Kb("/dev/tty","/dev/stdin"),g.stdout?Tb("stdout",null,g.stdout):Kb("/dev/tty","/dev/stdout"),g.stderr?Tb("stderr",null,g.stderr):Kb("/dev/tty1","/dev/stderr"),Lb("/dev/stdin",0),Lb("/dev/stdout",1),Lb("/dev/stderr",1));ub=!1;Ua(Ia);Ua(Ja);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(zc){var c=a,d=g._main;c=c||[];var e=c.length+
1,f=za(4*(e+1));J[f>>2]=ya(ca);for(var l=1;l<e;l++)J[(f>>2)+l]=ya(c[l-1]);J[(f>>2)+e]=0;try{var r=d(e,f);tc(r)}catch(w){w instanceof C||"unwind"==w||((c=w)&&"object"===typeof w&&w.stack&&(c=[w,w.stack]),F("exception thrown: "+c),da(1,w))}finally{}}if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;)c=g.postRun.shift(),La.unshift(c);Ua(La)}}a=a||ba;if(!(0<K)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ma();Ua(Ha);0<K||(g.setStatus?
(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=yc;function tc(a){oa=a;if(!(noExitRuntime||0<D)){Ua(Ka);Qb=!1;var b=g._fflush;b&&b(0);for(b=0;b<P.length;b++){var c=P[b];c&&Nb(c)}if(g.onExit)g.onExit(a);H=!0}da(a,new C(a))}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var zc=!0;g.noInitialRun&&(zc=!1);yc();
