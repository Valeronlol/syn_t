(window.webpackJsonpsyn_t=window.webpackJsonpsyn_t||[]).push([[2],{116:function(e,t,n){e.exports=n(210)},121:function(e,t,n){},122:function(e,t,n){},181:function(e,t,n){var a={"./instagram":[113,0],"./instagram.js":[113,0],"./youtube":[114,1],"./youtube.js":[114,1]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return n.e(t[1]).then(function(){return n(r)})}r.keys=function(){return Object.keys(a)},r.id=181,e.exports=r},210:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(4),o=n.n(c),i=(n(121),n(47)),u=n(77),s=(n(122),n(213)),l=n(214),d=function(e){var t=e.onSearch,n=e.sources,a=e.onSourceChange;return r.a.createElement("div",{className:"search-container"},r.a.createElement(s.a.Search,{placeholder:"input search text",onSearch:function(e){return t(e)},style:{width:300}}),n.length>0&&r.a.createElement(l.a,{defaultValue:n[0],style:{width:120},onChange:a},n.map(function(e,t){return r.a.createElement(l.a.Option,{key:t,value:e},e)})))},p=n(38),m=n(212),f=n(215),h=r.a.createElement(p.a,{className:"app-empty-description",description:r.a.createElement("span",null,"No data fetched yet, press search to find something.")}),v=function(e){var t=e.blocks,c=e.currentSource;return r.a.createElement("div",{className:"renderer-container"},r.a.createElement(f.a,{type:"flex",justify:"space-around",align:"middle"},t.length>0?t.map(function(e,t){var o=r.a.lazy(function(){return n(181)("./".concat(c))});return r.a.createElement(a.Suspense,{key:t,fallback:r.a.createElement(m.a,null)},r.a.createElement(o,e))}):h))},g=function(){return r.a.createElement("div",{className:"spin-container"},r.a.createElement(m.a,{size:"large"}))},y=n(111),E=n.n(y),b=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},w=n(112),j=n.n(w),k="".concat("https","://pixabay.com/api/"),D=j.a.create({baseURL:"https://content.googleapis.com/youtube/v3"});D.interceptors.response.use(function(e){return e.data?e.data:e});var O=D,S=function(e){var t=e.q,n=e.maxResults,a=void 0===n?20:n,r=e.type,c=void 0===r?"video":r;return O.get("/search",{params:{part:"snippet",type:c,q:t,maxResults:a,key:"AIzaSyD8R_uDDj9lf1wEmLGF6f7f3bYKzMjxsFo"}})},z=function(e){var t=e.q;return O.get(k,{params:{key:"13277981-5b107df2ee968cd1b9a72a461",q:t,image_type:"photo"}})},_={youtube:{fetchData:function(){return S.apply(void 0,arguments).then(function(e){return e.items.map(function(e){var t=e.id,n=e.snippet;return{id:t.videoId,snippet:n}})})}},instagram:{fetchData:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=E()(t,"[0].q","");return b(a)?Promise.resolve([{originalUrl:a,previewURL:a,id:"direct_image_".concat(Date.now())}]):z.apply(void 0,t).then(function(e){return e.hits.map(function(e){return{originalUrl:e.largeImageURL,previewURL:e.previewURL,id:e.id.toString()}})})}}},x=_,R=Object.keys(_),U={renderData:[],searchQuery:"",loading:!1,source:R[0]};o.a.render(r.a.createElement(function(){var e=Object(a.useState)(U),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"app-container"},r.a.createElement(d,{onSearch:function(e){c(Object(i.a)({},n,{loading:!0})),(0,x[n.source].fetchData)({q:e}).then(function(e){return c(Object(i.a)({},n,{renderData:e,loading:!1}))}).catch(function(){return c(Object(i.a)({},n,{loading:!1}))})},sources:R,onSourceChange:function(e){return c(Object(i.a)({},U,{source:e}))}}),n.loading?r.a.createElement(g,null):r.a.createElement(v,{blocks:n.renderData,currentSource:n.source}))},null),document.getElementById("root"))}},[[116,3,4]]]);
//# sourceMappingURL=main.c1819b45.chunk.js.map