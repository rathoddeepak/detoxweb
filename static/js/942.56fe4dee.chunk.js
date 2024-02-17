"use strict";(self.webpackChunkdetoxweb=self.webpackChunkdetoxweb||[]).push([[942,161],{1933:(t,e,i)=>{i.d(e,{R:()=>h});var s=i(5684);class h{constructor(t){this.Da=t}Cb(){(0,s.i)(this.da)&&this.Pe()}sa(){(0,s.c)(this.da)&&window.cancelAnimationFrame(this.da),this.da=void 0}Pe(){this.da=window.requestAnimationFrame((()=>{(0,s.i)(this.da)||(this.Da(),this.Pe())}))}}},4161:(t,e,i)=>{i.d(e,{getVimeoVideoInfo:()=>n,resolveVimeoVideoId:()=>r});const s=/(?:https:\/\/)?(?:player\.)?vimeo(?:\.com)?\/(?:video\/)?(\d+)(?:\?hash=(.*))?/,h=new Map,a=new Map;function r(t){const e=t.match(s);return{videoId:null===e||void 0===e?void 0:e[1],hash:null===e||void 0===e?void 0:e[2]}}async function n(t,e){if(h.has(t))return h.get(t);if(a.has(t))return a.get(t);const i="https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/".concat(t),s=window.fetch(i,{mode:"cors",signal:e.signal}).then((t=>t.json())).then((e=>{var i,s,a;const r=null===e||void 0===e||null===(i=e.thumbnail_url)||void 0===i||null===(i=i.match(/vimeocdn.com\/video\/(.*)?_/))||void 0===i?void 0:i[1],n=r?"https://i.vimeocdn.com/video/".concat(r,"_1920x1080.webp"):"",o={title:null!==(s=null===e||void 0===e?void 0:e.title)&&void 0!==s?s:"",duration:null!==(a=null===e||void 0===e?void 0:e.duration)&&void 0!==a?a:0,poster:n,pro:"basic"!==e.account_type};return h.set(t,o),o})).finally((()=>a.delete(t)));return a.set(t,s),s}},8942:(t,e,i)=>{i.r(e),i.d(e,{VimeoProvider:()=>c});var s=i(5684),h=i(7707),a=i(1933),r=i(1757),n=i(4161);i(5043);const o=["bufferend","bufferstart","durationchange","ended","enterpictureinpicture","error","fullscreenchange","leavepictureinpicture","loaded","playProgress","loadProgress","pause","play","playbackratechange","qualitychange","seeked","seeking","timeupdate","volumechange","waiting"];class c extends r.E{constructor(t,e){super(t),this.b=e,this.$$PROVIDER_TYPE="VIMEO",this.scope=(0,s.h)(),this.Ga=0,this.Ha=new h.T(0,0),this.Ib=new h.T(0,0),this.F=null,this.H=null,this.sd=null,this.O=(0,s.s)(""),this.pc=(0,s.s)(!1),this.td=null,this.W=null,this.fh=null,this.Ea=new a.R(this.cd.bind(this)),this.Xk=null,this.cookies=!1,this.title=!0,this.byline=!0,this.portrait=!0,this.color="00ADEF",this.Mm=!1}get c(){return this.b.delegate.c}get type(){return"vimeo"}get currentSrc(){return this.W}get videoId(){return this.O()}get hash(){return this.td}get isPro(){return this.pc()}preconnect(){(0,h.p)(this.fb())}setup(){super.setup(),(0,s.g)(this.ld.bind(this)),(0,s.g)(this.gh.bind(this)),(0,s.g)(this.hh.bind(this)),this.c("provider-setup",this)}destroy(){this.I(),this.q("destroy")}async play(){const{paused:t}=this.b.$state;return this.F||(this.F=(0,r.t)((()=>{if(this.F=null,t())return"Timed out."})),this.q("play")),this.F.promise}async pause(){const{paused:t}=this.b.$state;return this.H||(this.H=(0,r.t)((()=>{if(this.H=null,!t())return"Timed out."})),this.q("pause")),this.H.promise}setMuted(t){this.q("setMuted",t)}setCurrentTime(t){this.q("seekTo",t),this.c("seeking",t)}setVolume(t){this.q("setVolume",t),this.q("setMuted",(0,s.p)(this.b.$state.muted))}setPlaybackRate(t){this.q("setPlaybackRate",t)}async loadSource(t){if(!(0,s.j)(t.src))return this.W=null,this.td=null,void this.O.set("");const{videoId:e,hash:i}=(0,n.resolveVimeoVideoId)(t.src);this.O.set(null!==e&&void 0!==e?e:""),this.td=null!==i&&void 0!==i?i:null,this.W=t}ld(){this.I();const t=this.O();t?(this.db.set("".concat(this.fb(),"/video/").concat(t)),this.c("load-start")):this.db.set("")}gh(){const t=this.O();if(!t)return;const e=(0,s.k)(),i=new AbortController;return this.sd=e,(0,n.getVimeoVideoInfo)(t,i).then((t=>{e.resolve(t)})).catch((t=>{e.reject()})),()=>{e.reject(),i.abort()}}hh(){const t=this.pc(),{$state:e,qualities:i}=this.b;if(e.canSetPlaybackRate.set(t),i[h.L.Nc](!t),t)return(0,s.l)(i,"change",(()=>{var t;if(i.auto)return;const e=null===(t=i.selected)||void 0===t?void 0:t.id;e&&this.q("setQuality",e)}))}fb(){return"https://player.vimeo.com"}Ue(){const{$iosControls:t}=this.b,{keyDisabled:e}=this.b.$props,{controls:i,playsInline:s}=this.b.$state,h=i()||t();return{title:this.title,byline:this.byline,color:this.color,portrait:this.portrait,controls:h,h:this.hash,keyboard:h&&!e(),transparent:!0,playsinline:s(),dnt:!this.cookies}}cd(){this.q("getCurrentTime")}Fb(t,e){if(this.Mm&&0===t)return;const{realCurrentTime:i,realDuration:s,paused:h,bufferedEnd:a}=this.b.$state;if(i()===t)return;const r=i(),n={currentTime:t,played:this.Ek(t)};this.c("time-update",n,e),Math.abs(r-t)>1.5&&(this.c("seeking",t,e),!h()&&a()<t&&this.c("waiting",void 0,e)),s()-t<.01&&(this.c("end",void 0,e),this.Mm=!0,setTimeout((()=>{this.Mm=!1}),500))}Ek(t){return this.Ga>=t?this.Ha:this.Ha=new h.T(0,this.Ga=t)}cb(t,e){this.c("seeked",t,e)}rd(t){var e;const i=this.O();null===(e=this.sd)||void 0===e||e.promise.then((e=>{if(!e)return;const{title:i,poster:s,duration:h,pro:a}=e;this.pc.set(a),this.c("title-change",i,t),this.c("poster-change",s,t),this.c("duration-change",h,t),this.nd(h,t)})).catch((()=>{i===this.O()&&(this.q("getVideoTitle"),this.q("getDuration"))}))}nd(t,e){const{$iosControls:i}=this.b,{controls:s}=this.b.$state,a=s()||i();this.Ib=new h.T(0,t);const r={buffered:new h.T(0,0),seekable:this.Ib,duration:t};this.b.delegate.kc(r,e),a||this.q("_hideOverlay"),this.q("getQualities"),this.q("getChapters")}ih(t,e,i){switch(t){case"getVideoTitle":const t=e;this.c("title-change",t,i);break;case"getDuration":const h=e;this.b.$state.canPlay()?this.c("duration-change",h,i):this.nd(h,i);break;case"getCurrentTime":this.Fb(e,i);break;case"getBuffered":(0,s.m)(e)&&e.length&&this.Ze(e[e.length-1][1],i);break;case"setMuted":this.bb((0,s.p)(this.b.$state.volume),e,i);break;case"getChapters":this.ol(e);break;case"getQualities":this.qc(e,i)}}jh(){for(const t of o)this.q("addEventListener",t)}Ba(t){var e;this.Ea.sa(),this.c("pause",void 0,t),null===(e=this.H)||void 0===e||e.resolve(),this.H=null}yb(t){var e;this.Ea.Cb(),this.c("play",void 0,t),null===(e=this.F)||void 0===e||e.resolve(),this.F=null}kh(t){const{paused:e}=this.b.$state;e()||this.c("playing",void 0,t)}Ze(t,e){const i={buffered:new h.T(0,t),seekable:this.Ib};this.c("progress",i,e)}lh(t){this.c("waiting",void 0,t)}mh(t){const{paused:e}=this.b.$state;e()||this.c("playing",void 0,t)}ed(t){const{paused:e}=this.b.$state;e()&&this.c("play",void 0,t),this.c("waiting",void 0,t)}bb(t,e,i){const s={volume:t,muted:e};this.c("volume-change",s,i)}ol(t){if(this.cl(),!t.length)return;const e=new h.b({kind:"chapters",default:!0}),{realDuration:i}=this.b.$state;for(let h=0;h<t.length;h++){var s;const a=t[h],r=t[h+1];e.addCue(new window.VTTCue(a.startTime,null!==(s=null===r||void 0===r?void 0:r.startTime)&&void 0!==s?s:i(),a.title))}this.Xk=e,this.b.textTracks.add(e)}cl(){this.Xk&&(this.b.textTracks.remove(this.Xk),this.Xk=null)}qc(t,e){this.b.qualities[h.Q._a]=t.some((t=>"auto"===t.id))?()=>{this.q("setQuality","auto")}:void 0;for(const i of t){if("auto"===i.id)continue;const t=+i.id.slice(0,-1);isNaN(t)||this.b.qualities[h.L.pa]({id:i.id,width:t*(16/9),height:t,codec:"avc1,h.264",bitrate:-1},e)}this.gb(t.find((t=>t.active)),e)}gb(){let{id:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;if(!t)return;const i="auto"===t,s=this.b.qualities.toArray().find((e=>e.id===t));i?(this.b.qualities[h.Q.Za](i,e),this.b.qualities[h.L.qa](void 0,!0,e)):this.b.qualities[h.L.qa](s,!0,e)}nh(t,e,i){switch(t){case"ready":this.jh();break;case"loaded":this.rd(i);break;case"play":this.yb(i);break;case"playProgress":this.kh(i);break;case"pause":this.Ba(i);break;case"loadProgress":this.Ze(e.seconds,i);break;case"waiting":this.ed(i);break;case"bufferstart":this.lh(i);break;case"bufferend":this.mh(i);break;case"volumechange":this.bb(e.volume,(0,s.p)(this.b.$state.muted),i);break;case"durationchange":this.Ib=new h.T(0,e.duration),this.c("duration-change",e.duration,i);break;case"playbackratechange":this.c("rate-change",e.playbackRate,i);break;case"qualitychange":this.gb(e,i);break;case"fullscreenchange":this.c("fullscreen-change",e.fullscreen,i);break;case"enterpictureinpicture":this.c("picture-in-picture-change",!0,i);break;case"leavepictureinpicture":this.c("picture-in-picture-change",!1,i);break;case"ended":this.c("end",void 0,i);break;case"error":this.V(e,i);break;case"seek":case"seeked":this.cb(e.seconds,i)}}V(t,e){var i;("setPlaybackRate"===t.method&&this.pc.set(!1),"play"!==t.method)||(null===(i=this.F)||void 0===i||i.reject(t.message))}jd(t,e){t.event?this.nh(t.event,t.data,e):t.method&&this.ih(t.method,t.value,e)}mc(){}q(t,e){return this.hd({method:t,value:e})}I(){this.Ea.sa(),this.Ga=0,this.Ha=new h.T(0,0),this.Ib=new h.T(0,0),this.F=null,this.H=null,this.sd=null,this.fh=null,this.pc.set(!1),this.cl()}}},1757:(t,e,i)=>{i.d(e,{E:()=>r,t:()=>a});var s=i(5684),h=i(7707);function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;const i=(0,s.k)();return setTimeout((()=>{const e=t();e&&i.reject(e)}),e),i}class r{constructor(t){this.eb=t,this.db=(0,s.s)(""),this.referrerPolicy=null,t.setAttribute("frameBorder","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),null!==this.referrerPolicy&&t.setAttribute("referrerpolicy",this.referrerPolicy)}get iframe(){return this.eb}setup(){(0,s.l)(window,"message",this.Mg.bind(this)),(0,s.l)(this.eb,"load",this.mc.bind(this)),(0,s.g)(this.gd.bind(this))}gd(){const t=this.db();if(!t.length)return void this.eb.setAttribute("src","");const e=(0,s.p)((()=>this.Ue()));this.eb.setAttribute("src",(0,h.c)(t,e))}hd(t,e){var i;h.I||null===(i=this.eb.contentWindow)||void 0===i||i.postMessage(JSON.stringify(t),null!==e&&void 0!==e?e:"*")}Mg(t){var e;const i=this.fb();if((null===t.source||t.source===(null===(e=this.eb)||void 0===e?void 0:e.contentWindow))&&(!(0,s.j)(i)||i===t.origin)){try{const e=JSON.parse(t.data);return void(e&&this.jd(e,t))}catch(h){}t.data&&this.jd(t.data,t)}}}}}]);
//# sourceMappingURL=942.56fe4dee.chunk.js.map