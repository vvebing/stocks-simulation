(this["webpackJsonpstocks-simulation"]=this["webpackJsonpstocks-simulation"]||[]).push([[4],{128:function(t,e,n){},151:function(t,e,n){"use strict";n.r(e);n(121);var a=n(109),r=n(15),s=n(0),c=n.n(s),o=n(18),i=n.n(o),l=(n(128),n(90)),u=function(t){t&&t instanceof Function&&n.e(16).then(n.bind(null,485)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)("div",{id:"app",children:Object(r.jsx)(s.Suspense,{fallback:Object(r.jsx)(a.a,{size:"large",delay:100}),children:Object(r.jsx)(l.c,{})})})}),document.getElementById("root")),u()},54:function(t){t.exports=JSON.parse('{"A":[9.6,10.7,8.5,10,11.1,9.5,10.4,11.8,9.8,12.3,10,7.9,9.2,10.6,12.4,10.2,13.4,10.7,13.5,16.1,14.1,16.4,15.3,18],"B":[9.6,10.7,8.5,10,12.1,10.2,12.5,10.7,9,10.9,8.9,10.6,8.8,10.7,12.9,10.8,12.6,9.9,11.5,13.5,11.3,13.6,11.8,14],"C":[9.6,10.7,8.5,10,11.8,9.9,11.2,9.8,8.3,10,7.4,9.7,10.4,12.6,9.2,11.7,9.5,7.7,10.8,9.1,11.1,9,11.4,10],"D":[9.6,10.7,8.5,10,8.3,10.4,8.6,10.2,7.5,10.4,8.8,11.1,9.6,10.8,9.4,11,9,7.3,8.8,6.1,9,6.7,8.6,6],"E":[9.6,10.7,8.5,10,8.6,10.2,7.9,9.6,10.8,8.2,7.1,9.3,6.3,8.2,5.5,8,6.2,4.9,3.1,5.6,3.3,5.7,4.4,2]}')},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return T})),n.d(e,"c",(function(){return z})),n.d(e,"b",(function(){return F}));n(150);var a=n(111),r=(n(117),n(69)),s=(n(65),n(27)),c=(n(138),n(112)),o=n(46),i=n(43),l=n(38),u=n.n(l),d=(n(115),n(56)),b=n(64),h=n(15),f=(n(118),n(83)),j=(n(119),n(81)),x=n(96),g=n(97),p=n(104),O=n(101),v=n(0),m=n(33),k=n.n(m),w=n(54),y=Object(v.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(10)]).then(n.bind(null,152))})),I=Object(v.lazy)((function(){return Promise.all([n.e(1),n.e(13)]).then(n.bind(null,153))})),S=Object(v.lazy)((function(){return Promise.all([n.e(1),n.e(14)]).then(n.bind(null,154))})),P=Object(v.lazy)((function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,157))})),D=Object(v.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(12)]).then(n.bind(null,155))})),C=Object(v.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(8),n.e(15)]).then(n.bind(null,158))})),N=Object(v.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(11)]).then(n.bind(null,156))})),T={A:"\u7532",B:"\u4e59",C:"\u4e19",D:"\u4e01",E:"\u620a"},A="981107",z=function(t){Object(p.a)(n,t);var e=Object(O.a)(n);function n(t){var a;return Object(x.a)(this,n),(a=e.call(this,t)).login=function(t){var e=t.uuid,n=t.groupID;k.a.setItem("userInfo",{uuid:e,groupID:n},(function(){a.setState({uuid:e,groupID:n})}))},a.closeModal=function(){k.a.setItem("noticed",!0,(function(){a.setState({noticed:!0,showNotice:!1})}))},a.clearUserInfo=function(){j.a.confirm({okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"\u662f\u5426\u6e05\u9664\u7528\u6237\u6570\u636e\uff1f",content:[Object(h.jsx)("p",{children:"\u6e05\u9664\u7528\u6237\u6570\u636e\u540e\u4e5f\u5c06\u4f1a\u6e05\u9664\u5b9e\u9a8c\u6570\u636e\uff01\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01"},"text"),Object(h.jsxs)("p",{children:["\u8bf7\u4e3b\u8bd5\u8f93\u5165\u5bc6\u7801\uff1a",Object(h.jsx)(f.a.Password,{onChange:function(t){a.clearPassword=t.target.value}})]},"password")],onOk:function(){var t=Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.clearPassword===A){t.next=3;break}return d.b.warning("\u4e3b\u8bd5\u6743\u9650\u624d\u80fd\u6e05\u9664\u7528\u6237\u6570\u636e\uff01"),t.abrupt("return");case 3:return a.clearPassword="",t.next=6,k.a.clear();case 6:a.setState({uuid:"",groupID:"",noticed:!1,showNotice:!0,trades:[],status:0,totalProfit:0});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()})},a.clearDashboard=function(){j.a.confirm({okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"\u662f\u5426\u6e05\u9664\u5b9e\u9a8c\u6570\u636e",content:[Object(h.jsx)("p",{children:"\u6e05\u9664\u5b9e\u9a8c\u6570\u636e\u540e\uff0c\u60a8\u9700\u8981\u91cd\u65b0\u64cd\u4f5c\uff01\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01"},"text"),Object(h.jsxs)("p",{children:["\u8bf7\u4e3b\u8bd5\u8f93\u5165\u5bc6\u7801\uff1a",Object(h.jsx)(f.a.Password,{onChange:function(t){a.clearPassword=t.target.value}})]},"password")],onOk:function(){var t=Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.clearPassword===A){t.next=3;break}return d.b.warning("\u4e3b\u8bd5\u6743\u9650\u624d\u80fd\u6e05\u9664\u5b9e\u9a8c\u6570\u636e\uff01"),t.abrupt("return");case 3:return a.clearPassword="",t.next=6,k.a.removeItem("trades");case 6:a.setState({trades:[],status:0,totalProfit:0});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()})},a.openNotice=function(){a.setState({showNotice:!0})},a.goBack=Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(-1!==a.state.status){t.next=7;break}return t.next=4,k.a.removeItem("trades");case 4:a.setState({error:!1,trades:[],status:0}),t.next=8;break;case 7:window.location.reload();case 8:case"end":return t.stop()}}),t)}))),a.handleStart=function(t){a.setState((function(e){return{trades:[].concat(Object(i.a)(e.trades),[{stock:t,buy:[300],sell:[0],mood:[]}]),status:1}}),(function(){var t=a.state.trades;k.a.setItem("trades",t)}))},a.handleNext=function(){var t=L(a.state.trades);a.setState({status:2,totalProfit:t})},a.handleTrade=function(t,e){var n=a.state.trades,r=n[n.length-1];if(r){var s=r.buy,c=r.sell,l=r.mood;if(s.length!==c.length)return a.setState({status:-1});if(s.length>=20)l.length<4?a.setState({status:2}):a.setState({status:3});else{var u={};"buy"===t?(u.buy=[].concat(Object(i.a)(s),[e]),u.sell=[].concat(Object(i.a)(c),[0])):"sell"===t?(u.buy=[].concat(Object(i.a)(s),[0]),u.sell=[].concat(Object(i.a)(c),[e])):(u.buy=[].concat(Object(i.a)(s),[0]),u.sell=[].concat(Object(i.a)(c),[0]));var d=n.slice();d.splice(-1,1,Object(o.a)(Object(o.a)({},r),u)),a.setState({trades:d},(function(){k.a.setItem("trades",d)}))}}else a.setState({status:0})},a.onQuestionSubmit=function(t){var e=a.state.trades,n=e[e.length-1];if(!n)return a.setState({status:-1});var r=e.slice();r.splice(-1,1,Object(o.a)(Object(o.a)({},n),{},{mood:t})),a.setState({trades:r,status:r.length>=5?3:0},(function(){k.a.setItem("trades",r)}))},a.saveTextAsFile=function(){var t=a.state,e=t.uuid,n=t.groupID;!function(t,e,n){var a=JSON.stringify(t),r=new Blob([a],{type:"text/plain"}),s=document.createElement("a");s.download="stocks-simulation-".concat(e,"-").concat(n,".txt"),s.innerHTML="Download File",null!==window.webkitURL?s.href=window.webkitURL.createObjectURL(r):(s.href=window.URL.createObjectURL(r),s.onclick=function(t){document.body.removeChild(t.target)},s.style.display="none",document.body.appendChild(s));s.click()}({uuid:e,groupID:n,trades:t.trades},e,n)},a.state={loading:!0,uuid:"",groupID:"",noticed:!1,showNotice:!1,trades:[],status:0,error:!1,totalProfit:0},a.clearPassword="",a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(u.a.mark((function t(){var e,n,a,r,s,c,i,l,d,b,h,f,j;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.getItem("userInfo");case 3:if(t.t1=e=t.sent,t.t0=null!==t.t1,!t.t0){t.next=7;break}t.t0=void 0!==e;case 7:if(!t.t0){t.next=11;break}t.t2=e,t.next=12;break;case 11:t.t2={};case 12:return r=t.t2,s=r.uuid,c=void 0===s?"":s,i=r.groupID,l=void 0===i?"":i,t.next=19,k.a.getItem("noticed");case 19:if(t.t4=n=t.sent,t.t3=null!==t.t4,!t.t3){t.next=23;break}t.t3=void 0!==n;case 23:if(!t.t3){t.next=27;break}t.t5=n,t.next=28;break;case 27:t.t5=!1;case 28:if(d=t.t5,b={uuid:c,groupID:l,noticed:d,showNotice:!d,loading:!1},c&&l){t.next=32;break}return t.abrupt("return",this.setState(b));case 32:return t.next=34,k.a.getItem("trades");case 34:if(t.t7=a=t.sent,t.t6=null!==t.t7,!t.t6){t.next=38;break}t.t6=void 0!==a;case 38:if(!t.t6){t.next=42;break}t.t8=a,t.next=43;break;case 42:t.t8=[];case 43:h=t.t8,f=L(h),j=B(h),this.setState(Object(o.a)(Object(o.a)({},b),{},{trades:h,status:j,totalProfit:f})),t.next=52;break;case 49:t.prev=49,t.t9=t.catch(0),this.setState({error:!0,loading:!1});case 52:case"end":return t.stop()}}),t,this,[[0,49]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.error,o=t.uuid,i=t.groupID,l=t.noticed,u=t.showNotice,d=t.trades,b=t.status,f=t.totalProfit;if(e)return Object(h.jsx)("div",{id:"skeleton",children:Object(h.jsx)(c.a,{active:!0})});if(n||-1===b)return Object(h.jsx)(I,{status:b,goBack:this.goBack});if(!o||!i)return Object(h.jsx)(y,{login:this.login});var j="",x=null;switch(b){case 0:j="\u5373\u5c06\u5f00\u59cb\u7b2c".concat(d.length+1,"\u8f6e\u5b9e\u9a8c"),x=Object(h.jsx)(C,{trades:d,groupID:i,handleStart:this.handleStart});break;case 1:j="\u6b63\u5728\u8fdb\u884c\u7b2c".concat(d.length,"\u8f6e\u5b9e\u9a8c"),x=Object(h.jsx)(D,{trades:d,handleTrade:this.handleTrade,handleNext:this.handleNext});break;case 2:j="\u5df2\u7ed3\u675f\u7b2c".concat(d.length,"\u8f6e\u5b9e\u9a8c"),x=Object(h.jsx)(N,{groupID:i,onQuestionSubmit:this.onQuestionSubmit});break;case 3:j="\u6240\u6709\u5b9e\u9a8c\u5df2\u7ed3\u675f",x=Object(h.jsx)(S,{totalProfit:f,saveTextAsFile:this.saveTextAsFile})}return Object(h.jsxs)("div",{id:"main",children:[Object(h.jsx)(a.a,{backIcon:!1,title:"\u80a1\u7968\u6a21\u62df\u4ea4\u6613\u5b9e\u9a8c",subTitle:j,extra:[Object(h.jsx)(s.a,{type:"link",onClick:this.openNotice,children:"\u5b9e\u9a8c\u987b\u77e5"},"notice"),Object(h.jsx)(s.a,{danger:!0,type:"primary",onClick:this.clearUserInfo,children:"\u6e05\u9664\u7528\u6237\u6570\u636e"},"userInfo"),Object(h.jsx)(s.a,{danger:!0,onClick:this.clearDashboard,children:"\u6e05\u9664\u5b9e\u9a8c\u6570\u636e"},"trades")],children:Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)(r.b,{size:"small",column:2,children:[Object(h.jsx)(r.b.Item,{label:"\u88ab\u8bd5\u7f16\u53f7",children:o}),Object(h.jsx)("br",{}),Object(h.jsx)(r.b.Item,{label:"\u5206\u7ec4\u7f16\u53f7",children:i})]})})}),x,Object(h.jsx)(P,{noticed:l,visible:u,onCancel:this.closeModal})]})}}]),n}(v.PureComponent);function B(t){var e=t[t.length-1],n=e||{},a=n.buy,r=void 0===a?[]:a,s=n.sell,c=void 0===s?[]:s,o=n.mood,i=void 0===o?[]:o;return e?r.length>=20||c.length>=20?i.length<4?2:t.length>=5?3:0:r.length<20&&r.length===c.length&&0===i.length?1:-1:0}function F(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.stock,a=t.buy,r=t.sell;if(!n||!Array.isArray(a)||!Array.isArray(r)||e&&(a.length<20||r.length<20))return{};for(var s=0,c=0,o=0,i=0,l=0,u=0;u<a.length;u+=1)s+=a[u]*w[n][u+3],r[u]===l&&0!==l?(c=0,o=0):(c+=a[u]*w[n][u+3],o+=a[u]),l+=a[u]-r[u],i+=r[u]*w[n][u+3];var d=5e3+i-s,b=o<=0?0:c/o,h=l*w[n][a.length+3],f=d+h,j=f-5e3,x=Math.floor(d/w[n][a.length+3]);return{averageCost:b,position:l,totalProfit:j,balance:d,marketValue:h,totalAsset:f,maxBuy:x}}function L(t){for(var e=0,n=0;n<t.length;n+=1){var a=F(t[n],!0).totalProfit;e+=void 0===a?0:a}return+e.toFixed(2)}}},[[151,5,7]]]);
//# sourceMappingURL=main.8c2aeac8.chunk.js.map