(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{196:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(5),s=t.n(c),l=(t(98),t(7)),i=t(8),o=t(11),d=t(10),m=(t(99),t(34)),u=t.n(m),h=t(52),p=(t(56),t(29)),v=t(41),E=t.n(v),f=(t(36),t(22)),b=(t(44),t(2)),y=(t(66),t(24)),g=(t(67),t(18)),j=(t(45),t(14)),k=(t(197),t(91)),N=t(35),O=t.n(N),x=k.a.Text,w=function(e){var a=e.data;return a?n.a.createElement("div",{className:"card-group"},n.a.createElement(j.a,{justify:"center"},n.a.createElement(x,{className:"txt",type:"secondary"},"Last Updated on: \xa0\xa0 ",new Date(a.lastupdatedtime).toDateString()),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(j.a,{gutter:12,justify:"center"},n.a.createElement(b.a,{xs:10,md:3,className:"confirmed meta-item"},n.a.createElement(y.a,{title:"Confirmed Cases",placement:"left"},n.a.createElement(g.a,{size:"small",bordered:!1},n.a.createElement("h4",{className:"title"},"Confirmed Cases"),0!==a.deltaconfirmed&&n.a.createElement("p",null,"[+",a.deltaconfirmed,"]"),n.a.createElement("p",null,n.a.createElement(O.a,{start:0,end:parseInt(a.confirmed),duration:1.5,separator:","}))))),n.a.createElement(b.a,{xs:10,md:3,className:"active meta-item"},n.a.createElement(y.a,{title:"Active Cases",placement:"bottom"},n.a.createElement(g.a,{size:"small",bordered:!1},n.a.createElement("h4",{className:"title"},"Active"),n.a.createElement("p",null,n.a.createElement(O.a,{start:0,end:parseInt(a.active),duration:1.5,separator:","}))))),n.a.createElement(b.a,{xs:10,md:3,className:"recovered meta-item"},n.a.createElement(y.a,{title:"Total Recovered",placement:"bottom"},n.a.createElement(g.a,{size:"small",bordered:!1},n.a.createElement("h4",{className:"title"},"Recovered"),0!==a.deltarecovered&&n.a.createElement("p",null,"[+",a.deltarecovered,"]"),n.a.createElement("p",null,n.a.createElement(O.a,{start:0,end:parseInt(a.recovered),duration:1.5,separator:","}))))),n.a.createElement(b.a,{xs:10,md:3,className:"deaths meta-item"},n.a.createElement(y.a,{title:"Total Deaths",placement:"right"},n.a.createElement(g.a,{size:"small",bordered:!1},n.a.createElement("h4",{className:"title"},"Deceased"),0!==a.deltadeaths&&n.a.createElement("p",null,"[+",a.deltadeaths,"]"),n.a.createElement("p",null,n.a.createElement(O.a,{start:0,end:parseInt(a.deaths),duration:1.5,separator:","}))))))):n.a.createElement(f.a,{size:"large"})},C={"Andaman and Nicobar Islands":397e3,"Andhra Pradesh":52221e3,"Arunachal Pradesh":1504e3,Assam:34293e3,Bihar:11952e4,Chandigarh:1179e3,Chhattisgarh:28724e3,"Dadra and Nagar Haveli and Daman and Diu":959e3,Delhi:19814e3,Goa:154e4,Gujarat:67936e3,Haryana:28672e3,"Himachal Pradesh":73e5,"Jammu and Kashmir":13203e3,Jharkhand:37403e3,Karnataka:65798e3,Kerala:35125e3,Ladakh:293e3,Lakshadweep:68e3,"Madhya Pradesh":82232e3,Maharashtra:122153e3,Manipur:3103e3,Meghalaya:3224e3,Mizoram:1192e3,Nagaland:215e4,Odisha:43671e3,Puducherry:1504e3,Punjab:29859e3,Rajasthan:77264e3,Sikkim:664e3,"Tamil Nadu":75695e3,Telangana:3722e4,Tripura:3992e3,"Uttar Pradesh":224979e3,Uttarakhand:11141e3,"West Bengal":96906e3,Total:13329e5,WorldWide:7713468100},D=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,a=C[e.state];console.log(a);var t=e.confirmed,r=e.active,c=e.deaths,s=t/a*1e6,l=e.recovered/t*100,i=r/t*100,o=c/t*100;return n.a.createElement("div",{className:"card-group"},n.a.createElement("h2",{className:"txt"},e.state," Population: ",function(e){var a=new Intl.NumberFormat("en-IN");return isNaN(e)?"-":a.format(e)}(a)),n.a.createElement(j.a,{gutter:12,justify:"center"},n.a.createElement(b.a,{xs:10,md:3,className:"confirmed meta-item"},n.a.createElement(g.a,{size:"small",bordered:!1},n.a.createElement("h4",{className:"title"},"Confirmed Per Million"),n.a.createElement("p",{className:"content"},Math.round(s)," out of every 1 million people in ",e.state," have tested positive for the virus."))),n.a.createElement(b.a,{xs:10,md:3,className:"active meta-item"},n.a.createElement(g.a,{size:"small",bordered:!1},n.a.createElement("h4",{className:"title"},"Active"),n.a.createElement("p",{className:"content"},"For every 100 confirmed cases, ",i.toFixed(0)," are currently infected."))),n.a.createElement(b.a,{xs:10,md:3,className:"recovered meta-item"},n.a.createElement(g.a,{size:"small",bordered:!1},n.a.createElement("h4",{className:"title"},"Recovery Rate"),n.a.createElement("p",{className:"content"},"For every 100 confirmed cases, ",Math.round(l.toFixed(0))," have recovered from the virus."))),n.a.createElement(b.a,{xs:10,md:3,className:"deaths meta-item"},n.a.createElement(g.a,{size:"small",bordered:!1},n.a.createElement("h4",{className:"title"},"Mortality Rate"),n.a.createElement("p",{className:"content"},"For every 100 confirmed cases, ",Math.round(o.toFixed(0))," have unfortunately passed away from the virus.")))))}}]),t}(n.a.Component),z=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;return e?n.a.createElement("div",null,n.a.createElement("div",{className:"txt"},e.statenotes),n.a.createElement(w,{data:e}),n.a.createElement(D,{data:e})):n.a.createElement(f.a,{size:"large"})}}]),t}(n.a.Component),I=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;return e?(console.log(e),n.a.createElement("div",null,n.a.createElement(w,{data:e}),n.a.createElement(D,{data:e}))):n.a.createElement(f.a,{size:"large"})}}]),t}(n.a.Component),M=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;return e?n.a.createElement("div",null,n.a.createElement(w,{data:e}),n.a.createElement(D,{data:e})):n.a.createElement(f.a,{size:"large"})}}]),t}(n.a.Component),P=p.a.TabPane,W=function(){var e=Object(h.a)(u.a.mark((function e(a){var t,r,n,c,s,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="",r={active:0,confirmed:0,deaths:0,deltaconfirmed:0,deltadeaths:0,deltarecovered:0,lastupdatedtime:"",recovered:0,state:"",statecode:"",statenotes:""},e.t0=parseInt(a),e.next=1===e.t0?5:2===e.t0?18:3===e.t0?31:47;break;case 5:return t="https://api.covid19india.org/data.json",e.prev=6,e.next=9,E.a.get(t);case 9:n=e.sent,n.data.statewise.map((function(e){return"dl"===e.statecode.toLowerCase()&&(r=e),r})),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("error in getting data for City");case 17:return e.abrupt("break",48);case 18:return t="https://api.covid19india.org/data.json",e.prev=19,e.next=22,E.a.get(t);case 22:c=e.sent,s=c.data,r=s.statewise[0],e.next=30;break;case 27:e.prev=27,e.t2=e.catch(19),console.log("error in getting data for Country");case 30:return e.abrupt("break",48);case 31:return t="https://covid19.mathdro.id/api",e.prev=32,e.next=35,E.a.get(t);case 35:l=e.sent,i=l.data,Object.keys(r).map((function(e){return void 0!==i[e]&&(r[e]=i[e].value),r})),r.active=r.confirmed-r.recovered-r.deaths,r.lastupdatedtime=i.lastUpdate,r.state="WorldWide",e.next=46;break;case 43:e.prev=43,e.t3=e.catch(32),console.log("error in getting data for Global");case 46:case 47:return e.abrupt("break",48);case 48:return e.abrupt("return",r);case 49:case"end":return e.stop()}}),e,null,[[6,14],[19,27],[32,43]])})));return function(a){return e.apply(this,arguments)}}(),A=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={},e}return Object(i.a)(t,[{key:"setData",value:function(e){this.setState({data:e})}},{key:"fetchRenderedData",value:function(){var e=Object(h.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setData(void 0),e.next=3,W(a);case 3:t=e.sent,this.setData(t);case 5:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchRenderedData(1)}},{key:"render",value:function(){var e=this,a=this.state.data;return n.a.createElement(p.a,{className:"main-tabs",tabBarGutter:50,defaultActiveKey:"1",onChange:function(a){return e.fetchRenderedData(a)},size:"large",destroyInactiveTabPane:"false",animated:!1},n.a.createElement(P,{tab:"Delhi",key:"1"},n.a.createElement(z,{area:"Delhi",data:a})),n.a.createElement(P,{tab:"India",key:"2"},n.a.createElement(I,{area:"India",data:a})),n.a.createElement(P,{tab:"WorldWide",key:"3"},n.a.createElement(M,{area:"WorldWide",data:a})))}}]),t}(n.a.Component),R=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(A,null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,a,t){e.exports=t(196)},98:function(e,a,t){},99:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.61e29564.chunk.js.map