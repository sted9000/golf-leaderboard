(function(e){function n(n){for(var r,s,i=n[0],l=n[1],u=n[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={app:0},a=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var c=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"11b7":function(e,n,t){e.exports=t.p+"img/fartexcup.e756205e.png"},"47fc":function(e,n,t){"use strict";t("a9f2")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-main",[t("Logo"),t("Content")],1)],1)},a=[],s=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("img",{attrs:{src:t("11b7")}})])}],l={name:"Logo.vue"},u=l,c=(t("a819"),t("2877")),p=Object(c["a"])(u,s,i,!1,null,"3f425bd1",null),f=p.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[e._m(0),t("div",{staticClass:"leaderboard"},[t("h1",[e._v("Leaderboard")]),t("v-simple-table",{attrs:{dense:!0,dark:!1}},[t("tbody",[t("tr",e._l(e.labels,(function(n){return t("th",{key:n},[e._v(" "+e._s(n)+" ")])})),0),e._l(e.players,(function(n){return t("tr",{key:n},[t("td",[e._v(e._s(n.twRank))]),t("td",[e._v(e._s(n.lwRank))]),t("td",[e._v(e._s(n.name))]),t("td",[e._v(e._s(n.events))]),t("td",[e._v(e._s(n.points))]),t("td",[e._v(e._s(n.wins))]),t("td",[e._v(e._s(n.ctPin))]),t("td",[e._v(e._s(n.lDrives))]),t("td",[e._v(e._s(n.pointBehind))])])}))],2)])],1)])},v=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"intro"},[t("p",[e._v(" The FartExCup, sponsored by (you guessed it!) FartEx, is home to some of the most mediocre golfers in Philadelphia and is hosted on only the most convenient courses around. In our ongoing efforts to promote equity, diversity, and inclusion at FartEx, all golfers must be male and Jewish (or can pass as a Jew). The prizes are modest but the glory is eternal. ")])])}],_={name:"Content",props:{msg:String},data:function(){return{labels:["This Week's Rank","Last Week's Rank","Player's Name","Events Played","Points","Wins","Closest to Pin","Longest Drive","Points Behind"],players:[{twRank:"1",lwRank:"3",name:"Josh",events:"3",points:"45",wins:"1",ctPin:"3",lDrives:"2",pointBehind:"-"},{twRank:"1",lwRank:"3",name:"Ted",events:"3",points:"45",wins:"1",ctPin:"3",lDrives:"2",pointBehind:"10"},{twRank:"1",lwRank:"3",name:"Ryan",events:"3",points:"45",wins:"1",ctPin:"3",lDrives:"2",pointBehind:"20"},{twRank:"1",lwRank:"3",name:"Rico",events:"3",points:"45",wins:"1",ctPin:"3",lDrives:"2",pointBehind:"22"}]}}},h=_,m=(t("47fc"),t("6544")),b=t.n(m),y=t("1f4f"),w=Object(c["a"])(h,d,v,!1,null,"79e1554a",null),g=w.exports;b()(w,{VSimpleTable:y["a"]});var k={name:"App",components:{Content:g,Logo:f},data:function(){return{}}},P=k,x=t("7496"),O=t("f6c4"),R=Object(c["a"])(P,o,a,!1,null,null,null),j=R.exports;b()(R,{VApp:x["a"],VMain:O["a"]});var E=t("f309");r["a"].use(E["a"]);var C=new E["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:C,render:function(e){return e(j)}}).$mount("#app")},"57b7":function(e,n,t){},a819:function(e,n,t){"use strict";t("57b7")},a9f2:function(e,n,t){}});
//# sourceMappingURL=app.63699a05.js.map