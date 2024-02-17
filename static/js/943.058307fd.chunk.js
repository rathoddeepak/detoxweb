"use strict";(self.webpackChunkdetoxweb=self.webpackChunkdetoxweb||[]).push([[943,953],{1933:(t,i,s)=>{s.d(i,{R:()=>a});var e=s(5684);class a{constructor(t){this.Da=t}Cb(){(0,e.i)(this.da)&&this.Pe()}sa(){(0,e.c)(this.da)&&window.cancelAnimationFrame(this.da),this.da=void 0}Pe(){this.da=window.requestAnimationFrame((()=>{(0,e.i)(this.da)||(this.Da(),this.Pe())}))}}},466:(t,i,s)=>{s.d(i,{H:()=>c});var e=s(5684),a=s(7707),h=s(1933);class r{constructor(t,i){this.i=t,this.b=i,this.ta=(0,e.v)(),this.Db=!1,this.ad=!1,this.bd=!1,this.Ea=new h.R(this.cd.bind(this)),this.Re=void 0,this.Eg=void 0,this.qg(),(0,e.g)(this.rg.bind(this)),(0,e.w)(this.dd.bind(this))}get a(){return this.i.media}get c(){return this.b.delegate.c}dd(){this.ad=!1,this.bd=!1,this.Ea.sa(),this.ta.empty()}cd(){const t=this.a.currentTime;this.b.$state.realCurrentTime()!==t&&this.ab(t)}qg(){this.u("loadstart",this.Fa),this.u("abort",this.Qe),this.u("emptied",this.sg),this.u("error",this.V),this.u("volumechange",this.bb)}tg(){this.ad||(this.ta.add(this.u("loadeddata",this.ug),this.u("loadedmetadata",this.vg),this.u("canplay",this.ic),this.u("canplaythrough",this.wg),this.u("durationchange",this.xg),this.u("play",this.yb),this.u("progress",this.jc),this.u("stalled",this.yg),this.u("suspend",this.zg),this.u("ratechange",this.Cg)),this.ad=!0)}Ag(){this.bd||(this.ta.add(this.u("pause",this.Ba),this.u("playing",this.Bg),this.u("seeked",this.cb),this.u("seeking",this.Dg),this.u("ended",this.Eb),this.u("waiting",this.ed)),this.bd=!0)}u(t,i){return(0,e.l)(this.a,t,i.bind(this))}Fg(t){}ab(t,i){const s={currentTime:Math.min(t,this.b.$state.seekableEnd()),played:this.a.played};this.c("time-update",s,i)}Fa(t){3!==this.a.networkState?(this.tg(),this.c("load-start",void 0,t)):this.Qe(t)}Qe(t){this.c("abort",void 0,t)}sg(){this.c("emptied",void 0,event)}ug(t){this.c("loaded-data",void 0,t)}vg(t){this.Ag(),this.c("loaded-metadata",void 0,t),a.k&&(0,a.m)(this.b.$state.source())&&this.b.delegate.kc(this.fd(),t)}fd(){return{provider:(0,e.p)(this.b.$provider),duration:this.a.duration,buffered:this.a.buffered,seekable:this.a.seekable}}yb(t){this.b.$state.canPlay&&this.c("play",void 0,t)}Ba(t){(1!==this.a.readyState||this.Db)&&(this.Db=!1,this.Ea.sa(),this.c("pause",void 0,t))}ic(t){this.b.delegate.kc(this.fd(),t)}wg(t){this.b.$state.started()||this.c("can-play-through",this.fd(),t)}Bg(t){this.Db=!1,this.c("playing",void 0,t),this.Ea.Cb()}yg(t){this.c("stalled",void 0,t),this.a.readyState<3&&(this.Db=!0,this.c("waiting",void 0,t))}ed(t){this.a.readyState<3&&(this.Db=!0,this.c("waiting",void 0,t))}Eb(t){if(this.Ea.sa(),this.ab(this.a.duration,t),this.c("end",void 0,t),this.b.$state.loop()){(0,e.x)(this.a.controls)&&(this.a.controls=!1)}}rg(){this.b.$state.paused()&&(0,e.l)(this.a,"timeupdate",this.Fb.bind(this))}Fb(t){this.ab(this.a.currentTime,t)}xg(t){this.b.$state.ended()&&this.ab(this.a.duration,t),this.c("duration-change",this.a.duration,t)}bb(t){const i={volume:this.a.volume,muted:this.a.muted};this.c("volume-change",i,t)}cb(t){this.ab(this.a.currentTime,t),this.c("seeked",this.a.currentTime,t),Math.trunc(this.a.currentTime)===Math.trunc(this.a.duration)&&(0,a.n)(this.a.duration)>(0,a.n)(this.a.currentTime)&&(this.ab(this.a.duration,t),this.a.ended||this.b.player.dispatch(new e.D("media-play-request",{trigger:t})))}Dg(t){this.c("seeking",this.a.currentTime,t)}jc(t){const i={buffered:this.a.buffered,seekable:this.a.seekable};this.c("progress",i,t)}zg(t){this.c("suspend",void 0,t)}Cg(t){this.c("rate-change",this.a.playbackRate,t)}V(t){const i=this.a.error;if(!i)return;const s={message:i.message,code:i.code,mediaError:i};this.c("error",s,t)}}class n{constructor(t,i){this.i=t,this.b=i,this.Gb.onaddtrack=this.Gg.bind(this),this.Gb.onremovetrack=this.Hg.bind(this),this.Gb.onchange=this.Ig.bind(this),(0,e.l)(this.b.audioTracks,"change",this.Jg.bind(this))}get Gb(){return this.i.media.audioTracks}Gg(t){const i=t.track;if(""===i.label)return;const s={id:i.id.toString(),label:i.label,language:i.language,kind:i.kind,selected:!1};this.b.audioTracks[a.L.pa](s,t),i.enabled&&(s.selected=!0)}Hg(t){const i=this.b.audioTracks.getById(t.track.id);i&&this.b.audioTracks[a.L.Zb](i,t)}Ig(t){let i=this.Se();if(!i)return;const s=this.b.audioTracks.getById(i.id);s&&this.b.audioTracks[a.L.qa](s,!0,t)}Se(){return Array.from(this.Gb).find((t=>t.enabled))}Jg(t){const{current:i}=t.detail;if(!i)return;const s=this.Gb.getTrackById(i.id);if(s){const t=this.Se();t&&(t.enabled=!1),s.enabled=!0}}}class c{constructor(t,i){this.a=t,this.b=i,this.scope=(0,e.h)(),this.W=null}setup(){new r(this,this.b),"audioTracks"in this.media&&new n(this,this.b),(0,e.w)((()=>{this.a.setAttribute("src",""),this.a.load()}))}get type(){return""}get media(){return this.a}get currentSrc(){return this.W}setPlaybackRate(t){this.a.playbackRate=t}async play(){return this.a.play()}async pause(){return this.a.pause()}setMuted(t){this.a.muted=t}setVolume(t){this.a.volume=t}setCurrentTime(t){this.a.currentTime=t}setPlaysInline(t){(0,e.t)(this.a,"playsinline",t)}async loadSource(t,i){let{src:s,type:h}=t;this.a.preload=i||"",(0,a.o)(s)?this.a.srcObject=s:(this.a.srcObject=null,this.a.src=(0,e.j)(s)?this.nl(s):window.URL.createObjectURL(s)),this.a.load(),this.W={src:s,type:h}}nl(t){const{clipStartTime:i,clipEndTime:s}=this.b.$state,e=i(),a=s();return e>0&&a>0?"".concat(t,"#t=").concat(e,",").concat(a):e>0?"".concat(t,"#t=").concat(e):a>0?"".concat(t,"#t=0,").concat(a):t}}},2943:(t,i,s)=>{s.r(i),s.d(i,{HLSProvider:()=>d});var e=s(5684),a=s(7707),h=s(6953),r=s(1933);s(5043);class n{constructor(t,i){this.m=t,this.b=i,this.g=null,this.od=null,this.pd={},this.qd=new Set,this.Lk=-1}get instance(){return this.g}setup(t){const{streamType:i}=this.b.$state,s=(0,e.p)(i).includes("live"),h=(0,e.p)(i).includes("ll-");this.g=new t({lowLatencyMode:h,backBufferLength:h?4:s?8:void 0,renderTextTracksNatively:!1,...this.pd});const r=this.Tg.bind(this);for(const e of Object.values(t.Events))this.g.on(e,r);this.g.on(t.Events.ERROR,this.V.bind(this));for(const e of this.qd)e(this.g);this.b.player.dispatch("hls-instance",{detail:this.g}),this.g.attachMedia(this.m),this.g.on(t.Events.FRAG_LOADING,this.Pk.bind(this)),this.g.on(t.Events.AUDIO_TRACK_SWITCHED,this.Ug.bind(this)),this.g.on(t.Events.LEVEL_SWITCHED,this.Vg.bind(this)),this.g.on(t.Events.LEVEL_LOADED,this.Wg.bind(this)),this.g.on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,this.Xg.bind(this)),this.g.on(t.Events.CUES_PARSED,this.Yg.bind(this)),this.b.qualities[a.Q._a]=this.Zg.bind(this),(0,e.l)(this.b.qualities,"change",this.gb.bind(this)),(0,e.l)(this.b.audioTracks,"change",this._g.bind(this)),this.od=(0,e.g)(this.$g.bind(this))}$g(){if(!this.b.$state.live())return;const t=new r.R(this.ah.bind(this));return t.Cb(),t.sa.bind(t)}ah(){var t,i;this.b.$state.liveSyncPosition.set(null!==(t=null===(i=this.g)||void 0===i?void 0:i.liveSyncPosition)&&void 0!==t?t:1/0)}Tg(t,i){var s,a;null===(s=this.b.player)||void 0===s||s.dispatch(new e.D((a=t,(0,e.q)(a)),{detail:i}))}Xg(t,i){const s=new e.D(t,{detail:i});let h=-1;for(let e=0;e<i.tracks.length;e++){var r;const t=i.tracks[e],n=null!==(r=t.subtitleTrack)&&void 0!==r?r:t.closedCaptions,c=new a.b({id:"hls-".concat(t.kind).concat(e),src:null===n||void 0===n?void 0:n.url,label:t.label,language:null===n||void 0===n?void 0:n.lang,kind:t.kind,default:t.default});c[a.i.N]=2,c[a.i.Va]=()=>{"showing"===c.mode?(this.g.subtitleTrack=e,h=e):h===e&&(this.g.subtitleTrack=-1,h=-1)},this.b.textTracks.add(c,s)}}Yg(t,i){const s=this.b.textTracks.getById("hls-".concat(i.track));if(!s)return;const a=new e.D(t,{detail:i});for(const e of i.cues)e.positionAlign="auto",s.addCue(e,a)}Ug(t,i){const s=this.b.audioTracks[i.id];if(s){const h=new e.D(t,{detail:i});this.b.audioTracks[a.L.qa](s,!0,h)}}Vg(t,i){const s=this.b.qualities[i.level];if(s){const h=new e.D(t,{detail:i});this.b.qualities[a.L.qa](s,!0,h)}}Wg(t,i){if(this.b.$state.canPlay())return;const{type:s,live:h,totalduration:r,targetduration:n}=i.details,c=new e.D(t,{detail:i});this.b.delegate.c("stream-type-change",h?"EVENT"===s&&Number.isFinite(r)&&n>=10?"live:dvr":"live":"on-demand",c),this.b.delegate.c("duration-change",r,c);const d=this.g.media;-1===this.g.currentLevel&&this.b.qualities[a.Q.Za](!0,c);for(const e of this.g.audioTracks){const t={id:e.id.toString(),label:e.name,language:e.lang||"",kind:"main"};this.b.audioTracks[a.L.pa](t,c)}for(const e of this.g.levels){var o,l;const t={id:null!==(o=null===(l=e.id)||void 0===l?void 0:l.toString())&&void 0!==o?o:e.height+"p",width:e.width,height:e.height,codec:e.codecSet,bitrate:e.bitrate};this.b.qualities[a.L.pa](t,c)}d.dispatchEvent(new e.D("canplay",{trigger:c}))}V(t,i){var s;if(i.fatal)switch(i.type){case"networkError":this.Qk(i.error);break;case"mediaError":null===(s=this.g)||void 0===s||s.recoverMediaError();break;default:this.Ok(i.error)}}Pk(){this.Lk>=0&&this.Mk()}Qk(t){var i;this.Mk(),null===(i=this.g)||void 0===i||i.startLoad(),this.Lk=window.setTimeout((()=>{this.Lk=-1,this.Ok(t)}),5e3)}Mk(){clearTimeout(this.Lk),this.Lk=-1}Ok(t){var i;null===(i=this.g)||void 0===i||i.destroy(),this.g=null,this.b.delegate.c("error",{message:t.message,code:1,error:t})}Zg(){this.g&&(this.g.currentLevel=-1)}gb(){const{qualities:t}=this.b;this.g&&!t.auto&&(this.g[t.switch+"Level"]=t.selectedIndex,a.d&&(this.m.currentTime=this.m.currentTime))}_g(){const{audioTracks:t}=this.b;this.g&&this.g.audioTrack!==t.selectedIndex&&(this.g.audioTrack=t.selectedIndex)}Rk(t){var i;(0,e.j)(t.src)&&(this.Mk(),null===(i=this.g)||void 0===i||i.loadSource(t.src))}bh(){var t,i;this.Mk(),this.b&&(this.b.qualities[a.Q._a]=void 0),null===(t=this.g)||void 0===t||t.destroy(),this.g=null,null===(i=this.od)||void 0===i||i.call(this),this.od=null}}class c{constructor(t,i,s){this.X=t,this.b=i,this.Da=s,this.ch()}async ch(){const t={onLoadStart:this.Fa.bind(this),onLoaded:this.rd.bind(this),onLoadError:this.dh.bind(this)};let i=await async function(t){var i;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(0,e.j)(t))return;null===(i=s.onLoadStart)||void 0===i||i.call(s);try{var h;if(await(0,a.h)(t),!(0,e.r)(window.Hls))throw Error("");const i=window.Hls;return null===(h=s.onLoaded)||void 0===h||h.call(s,i),i}catch(n){var r;null===(r=s.onLoadError)||void 0===r||r.call(s,n)}return}(this.X,t);if((0,e.i)(i)&&!(0,e.j)(this.X)&&(i=await async function(t){var i;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((0,e.i)(t))return;if(null===(i=s.onLoadStart)||void 0===i||i.call(s),t.prototype&&t.prototype!==Function){var a;return null===(a=s.onLoaded)||void 0===a||a.call(s,t),t}try{var h;const i=null===(h=await t())||void 0===h?void 0:h.default;if(!i||!i.isSupported)throw Error("");var r;return null===(r=s.onLoaded)||void 0===r||r.call(s,i),i}catch(c){var n;null===(n=s.onLoadError)||void 0===n||n.call(s,c)}return}(this.X,t)),!i)return null;if(!i.isSupported()){const t="[vidstack] `hls.js` is not supported in this environment";return this.b.player.dispatch(new e.D("hls-unsupported")),this.b.delegate.c("error",{message:t,code:4}),null}return i}Fa(){this.b.player.dispatch(new e.D("hls-lib-load-start"))}rd(t){this.b.player.dispatch(new e.D("hls-lib-loaded",{detail:t})),this.Da(t)}dh(t){const i=(0,a.g)(t);this.b.player.dispatch(new e.D("hls-lib-load-error",{detail:i})),this.b.delegate.c("error",{message:i.message,code:4,error:i})}}class d extends h.VideoProvider{constructor(){super(...arguments),this.$$PROVIDER_TYPE="HLS",this.Ye=null,this.d=new n(this.video,this.b),this.Hb="".concat("https://cdn.jsdelivr.net","/npm/hls.js@^1.5.0/dist/hls",".min.js")}get ctor(){return this.Ye}get instance(){return this.d.instance}get type(){return"hls"}get canLiveSync(){return!0}get config(){return this.d.pd}set config(t){this.d.pd=t}get library(){return this.Hb}set library(t){this.Hb=t}preconnect(){(0,e.j)(this.Hb)&&(0,a.p)(this.Hb)}setup(){super.setup(),new c(this.Hb,this.b,(t=>{this.Ye=t,this.d.setup(t),this.b.delegate.c("provider-setup",this);const i=(0,e.p)(this.b.$state.source);i&&this.loadSource(i)}))}async loadSource(t,i){(0,e.j)(t.src)&&(this.a.preload=i||"",this.Ym(t),this.d.Rk(t),this.W=t)}Ym(t){const i=this.video.querySelector("source[data-vds]"),s=null!==i&&void 0!==i?i:document.createElement("source");(0,e.t)(s,"src",t.src),(0,e.t)(s,"type","application/x-mpegurl"),(0,e.t)(s,"data-vds",""),i||this.video.append(s)}onInstance(t){const i=this.d.instance;return i&&t(i),this.d.qd.add(t),()=>this.d.qd.delete(t)}destroy(){this.d.bh()}}d.supported=(0,a.j)()},6953:(t,i,s)=>{s.r(i),s.d(i,{VideoProvider:()=>g});var e=s(5684),a=s(7707),h=s(466);s(5043);class r{constructor(t,i){this.m=t,this.b=i,t.textTracks.onaddtrack=this.Xc.bind(this),(0,e.w)(this.dd.bind(this))}Xc(t){const i=t.track;if(!i||function(t,i){return Array.from(t.children).find((t=>t.track===i))}(this.m,i))return;const s=new a.b({id:i.id,kind:i.kind,label:i.label,language:i.language,type:"vtt"});s[a.i.U]={track:i},s[a.i.N]=2,s[a.i.ue]=!0;let e=0;const h=t=>{if(i.cues)for(let a=e;a<i.cues.length;a++)s.addCue(i.cues[a],t),e++};h(t),i.oncuechange=h,this.b.textTracks.add(s,t),s.setMode(i.mode,t)}dd(){this.m.textTracks.onaddtrack=null;for(const i of this.b.textTracks){var t;const s=null===(t=i[a.i.U])||void 0===t?void 0:t.track;null!==s&&void 0!==s&&s.oncuechange&&(s.oncuechange=null)}}}class n{constructor(t,i){this.m=t,this.a=i,this.C=(t,i)=>{this.a.delegate.c("picture-in-picture-change",t,i)},(0,e.l)(this.m,"enterpictureinpicture",this.Kg.bind(this)),(0,e.l)(this.m,"leavepictureinpicture",this.Lg.bind(this))}get active(){return document.pictureInPictureElement===this.m}get supported(){return(0,a.w)(this.m)}async enter(){return this.m.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}Kg(t){this.C(!0,t)}Lg(t){this.C(!1,t)}}class c{constructor(t,i){this.m=t,this.a=i,this.J="inline",(0,e.l)(this.m,"webkitpresentationmodechanged",this.Va.bind(this))}get Te(){return(0,a.x)(this.m)}async lc(t){this.J!==t&&this.m.webkitSetPresentationMode(t)}Va(t){var i;const s=this.J;this.J=this.m.webkitPresentationMode,null===(i=this.a.player)||void 0===i||i.dispatch(new e.D("video-presentation-change",{detail:this.J,trigger:t})),["fullscreen","picture-in-picture"].forEach((i=>{this.J!==i&&s!==i||this.a.delegate.c("".concat(i,"-change"),this.J===i,t)}))}}class d{constructor(t){this.ga=t}get active(){return"fullscreen"===this.ga.J}get supported(){return this.ga.Te}async enter(){this.ga.lc("fullscreen")}async exit(){this.ga.lc("inline")}}class o{constructor(t){this.ga=t}get active(){return"picture-in-picture"===this.ga.J}get supported(){return this.ga.Te}async enter(){this.ga.lc("picture-in-picture")}async exit(){this.ga.lc("inline")}}class l{constructor(t,i){this.m=t,this.b=i,this.Te=(0,e.s)(!1),this.mk()}get supported(){return this.Te()}mk(){!a.I&&this.m.remote&&this.Pl&&(this.m.remote.watchAvailability((t=>{this.Te.set(t)})).catch((()=>{this.Te.set(!1)})),(0,e.g)(this.Sm.bind(this)))}Sm(){if(!this.Te())return;const t=["connecting","connect","disconnect"],i=this.Sg.bind(this);i(),(0,e.l)(this.m,"playing",i);for(const s of t)(0,e.l)(this.m.remote,s,i)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return"airplay"===this.wb&&this.m.webkitShowPlaybackTargetPicker?this.m.webkitShowPlaybackTargetPicker():this.m.remote.prompt()}Sg(t){const i=this.m.remote.state;if(i===this.nc)return;const s={type:this.wb,state:i};this.b.delegate.c("remote-playback-change",s,t),this.nc=i}}class u extends l{constructor(){super(...arguments),this.wb="airplay"}get Pl(){return"WebKitPlaybackTargetAvailabilityEvent"in window}}class g extends h.H{constructor(t,i){super(t,i),this.$$PROVIDER_TYPE="VIDEO",(0,e.G)((()=>{if(this.airPlay=new u(t,i),(0,a.x)(t)){const s=new c(t,i);this.fullscreen=new d(s),this.pictureInPicture=new o(s)}else(0,a.w)(t)&&(this.pictureInPicture=new n(t,i))}),this.scope)}get type(){return"video"}setup(){super.setup(),(0,a.y)(this.video)&&new r(this.video,this.b),this.b.textRenderers.Ge(this.video),(0,e.w)((()=>{this.b.textRenderers.Ge(null)})),"video"===this.type&&this.b.delegate.c("provider-setup",this)}get video(){return this.a}}}}]);
//# sourceMappingURL=943.058307fd.chunk.js.map