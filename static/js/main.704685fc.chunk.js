(this["webpackJsonpstocks-simulation"]=this["webpackJsonpstocks-simulation"]||[]).push([[5],{128:function(t,e,n){},151:function(t,e,n){"use strict";n.r(e);n(121);var a=n(109),r=n(14),c=n(0),s=n.n(c),i=n(18),o=n.n(i),l=(n(128),n(87)),u=function(t){t&&t instanceof Function&&n.e(19).then(n.bind(null,492)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)("div",{id:"app",children:Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(a.a,{size:"large",delay:100}),children:Object(r.jsx)(l.c,{})})})}),document.getElementById("root")),u()},34:function(t){t.exports=JSON.parse('{"Practice":[5,5,5,5,6,3,2,5,8,7,4,8],"A":[9.6,10.7,8.5,10,11.1,9.5,10.4,11.8,9.8,12.3,10,7.9,9.2,10.6,12.4,10.2,13.4,10.7,13.5,16.1,14.1,16.4,15.3,18],"B":[9.6,10.7,8.5,10,12.1,10.2,12.5,10.7,9,10.9,8.9,10.6,8.8,10.7,12.9,10.8,12.6,9.9,11.5,13.5,11.3,13.6,11.8,14],"C":[9.6,10.7,8.5,10,11.8,9.9,11.2,9.8,8.3,10,7.4,9.7,10.4,12.6,9.2,11.7,9.5,7.7,10.8,9.1,11.1,9,11.4,10],"D":[9.6,10.7,8.5,10,8.3,10.4,8.6,10.2,7.5,10.4,8.8,11.1,9.6,10.8,9.4,11,9,7.3,8.8,6.1,9,6.7,8.6,6],"E":[9.6,10.7,8.5,10,8.6,10.2,7.9,9.6,10.8,8.2,7.1,9.3,6.3,8.2,5.5,8,6.2,4.9,3.1,5.6,3.3,5.7,4.4,2]}')},87:function(t,e,n){"use strict";n.d(e,"a",(function(){return A})),n.d(e,"c",(function(){return B})),n.d(e,"b",(function(){return R})),n.d(e,"d",(function(){return J}));n(150);var a=n(111),r=(n(114),n(66)),c=(n(65),n(27)),s=(n(138),n(112)),i=n(39),o=n(45),l=n(35),u=n.n(l),d=(n(113),n(48)),b=n(57),f=n(14),h=(n(119),n(76)),j=(n(117),n(69)),x=n(92),p=n(93),v=n(97),g=n(95),O=n(0),k=n(31),m=n.n(k),P=n(34),w=Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,153))})),y=Object(O.lazy)((function(){return Promise.all([n.e(2),n.e(14)]).then(n.bind(null,154))})),S=Object(O.lazy)((function(){return Promise.all([n.e(2),n.e(15)]).then(n.bind(null,155))})),I=Object(O.lazy)((function(){return Promise.all([n.e(4),n.e(9),n.e(16)]).then(n.bind(null,156))})),T=Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(12)]).then(n.bind(null,157))})),F=Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(13)]).then(n.bind(null,152))})),D=Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(8),n.e(18)]).then(n.bind(null,160))})),C=Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,158))})),N=Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,159))})),A={A:"\u7532",B:"\u4e59",C:"\u4e19",D:"\u4e01",E:"\u620a",Practice:""},z="981107",B=function(t){Object(v.a)(n,t);var e=Object(g.a)(n);function n(t){var a;return Object(x.a)(this,n),(a=e.call(this,t)).login=function(t){var e=t.uuid,n=t.groupID;m.a.setItem("userInfo",{uuid:e,groupID:n},(function(){a.setState({uuid:e,groupID:n})}))},a.closeModal=function(){m.a.setItem("noticed",!0,(function(){a.setState({noticed:!0,showNotice:!1})}))},a.clearUserInfo=function(){j.a.confirm({okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"\u662f\u5426\u6e05\u9664\u7528\u6237\u6570\u636e\uff1f",content:[Object(f.jsx)("p",{children:"\u6e05\u9664\u7528\u6237\u6570\u636e\u540e\u4e5f\u5c06\u4f1a\u6e05\u9664\u5b9e\u9a8c\u6570\u636e\uff01\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01"},"text"),Object(f.jsxs)("p",{children:["\u8bf7\u4e3b\u8bd5\u8f93\u5165\u5bc6\u7801\uff1a",Object(f.jsx)(h.a.Password,{onChange:function(t){a.clearPassword=t.target.value}})]},"password")],onOk:function(){var t=Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.clearPassword===z){t.next=3;break}return d.b.warning("\u4e3b\u8bd5\u6743\u9650\u624d\u80fd\u6e05\u9664\u7528\u6237\u6570\u636e\uff01"),t.abrupt("return");case 3:return a.clearPassword="",t.next=6,m.a.clear();case 6:a.setState({uuid:"",groupID:"",noticed:!1,showNotice:!0,trades:[],status:0,practice:{},totalProfit:0});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()})},a.clearDashboard=function(){j.a.confirm({okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"\u662f\u5426\u6e05\u9664\u5b9e\u9a8c\u6570\u636e",content:[Object(f.jsx)("p",{children:"\u6e05\u9664\u5b9e\u9a8c\u6570\u636e\u540e\uff0c\u60a8\u9700\u8981\u91cd\u65b0\u64cd\u4f5c\uff01\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01"},"text"),Object(f.jsxs)("p",{children:["\u8bf7\u4e3b\u8bd5\u8f93\u5165\u5bc6\u7801\uff1a",Object(f.jsx)(h.a.Password,{onChange:function(t){a.clearPassword=t.target.value}})]},"password")],onOk:function(){var t=Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.clearPassword===z){t.next=3;break}return d.b.warning("\u4e3b\u8bd5\u6743\u9650\u624d\u80fd\u6e05\u9664\u5b9e\u9a8c\u6570\u636e\uff01"),t.abrupt("return");case 3:return a.clearPassword="",t.next=6,m.a.removeItem("trades");case 6:a.setState({trades:[],status:0,totalProfit:0});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()})},a.openNotice=function(){a.setState({showNotice:!0})},a.goBack=Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(-1!==a.state.status){t.next=7;break}return t.next=4,m.a.removeItem("trades");case 4:a.setState({error:!1,trades:[],status:0}),t.next=8;break;case 7:window.location.reload();case 8:case"end":return t.stop()}}),t)}))),a.handleStart=function(t){a.setState((function(e){return{trades:[].concat(Object(o.a)(e.trades),[{stock:t,buy:[300],sell:[0],mood:[]}]),status:1}}),(function(){var t=a.state.trades;m.a.setItem("trades",t)}))},a.handleNext=function(){var t=M(a.state.trades);a.setState({status:2,totalProfit:t})},a.handleTrade=function(t,e){var n=a.state.trades,r=n[n.length-1];if(r){var c=r.buy,s=r.sell,l=r.mood;if(c.length!==s.length)return a.setState({status:-1});if(c.length>=21)l.length<4?a.setState({status:2}):a.setState({status:3});else{var u={};"buy"===t?(u.buy=[].concat(Object(o.a)(c),[e]),u.sell=[].concat(Object(o.a)(s),[0])):"sell"===t?(u.buy=[].concat(Object(o.a)(c),[0]),u.sell=[].concat(Object(o.a)(s),[e])):(u.buy=[].concat(Object(o.a)(c),[0]),u.sell=[].concat(Object(o.a)(s),[0]));var d=n.slice();d.splice(-1,1,Object(i.a)(Object(i.a)({},r),u)),a.setState({trades:d},(function(){m.a.setItem("trades",d)}))}}else a.setState({status:0})},a.onQuestionSubmit=function(t){var e=a.state.trades,n=e[e.length-1];if(!n)return a.setState({status:-1});var r=e.slice();r.splice(-1,1,Object(i.a)(Object(i.a)({},n),{},{mood:t})),a.setState({trades:r,status:r.length>=5?3:0},(function(){m.a.setItem("trades",r)}))},a.saveTextAsFile=function(){j.a.confirm({okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"\u5bfc\u51fa\u5b9e\u9a8c\u6570\u636e",content:[Object(f.jsx)("p",{children:"\u4e3a\u907f\u514d\u5b9e\u9a8c\u6570\u636e\u4e22\u5931\uff0c\u8bf7\u5728\u5bfc\u51fa\u5b9e\u9a8c\u6570\u636e\u540e\u53d1\u9001\u5230\u4e3b\u8bd5\u90ae\u7bb1\uff01"},"text"),Object(f.jsxs)("p",{children:["\u8bf7\u4e3b\u8bd5\u8f93\u5165\u5bc6\u7801\uff1a",Object(f.jsx)(h.a.Password,{onChange:function(t){a.clearPassword=t.target.value}})]},"password")],onOk:function(){var t=Object(b.a)(u.a.mark((function t(){var e,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.clearPassword===z){t.next=3;break}return d.b.warning("\u4e3b\u8bd5\u6743\u9650\u624d\u80fd\u5bfc\u51fa\u5b9e\u9a8c\u6570\u636e\uff01"),t.abrupt("return");case 3:a.clearPassword="",e=a.state,n=e.uuid,r=e.groupID,E(U(e.trades,n,r),n,r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()})},a.handlePracticeNext=function(t){a.setState((function(e){return{practice:Object(i.a)(Object(i.a)({},e.practice),t)}}),(function(){var t=a.state.practice;m.a.setItem("practice",t)}))},a.state={loading:!0,uuid:"",groupID:"",noticed:!1,showNotice:!1,practice:{},trades:[],status:0,error:!1,totalProfit:0},a.clearPassword="",a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(u.a.mark((function t(){var e,n,a,r,c,s,o,l,d,b,f,h,j,x,p;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.getItem("userInfo");case 3:if(t.t1=e=t.sent,t.t0=null!==t.t1,!t.t0){t.next=7;break}t.t0=void 0!==e;case 7:if(!t.t0){t.next=11;break}t.t2=e,t.next=12;break;case 11:t.t2={};case 12:return c=t.t2,s=c.uuid,o=void 0===s?"":s,l=c.groupID,d=void 0===l?"":l,t.next=19,m.a.getItem("noticed");case 19:if(t.t4=n=t.sent,t.t3=null!==t.t4,!t.t3){t.next=23;break}t.t3=void 0!==n;case 23:if(!t.t3){t.next=27;break}t.t5=n,t.next=28;break;case 27:t.t5=!1;case 28:if(b=t.t5,f={uuid:o,groupID:d,noticed:b,showNotice:!b,loading:!1},o&&d){t.next=32;break}return t.abrupt("return",this.setState(f));case 32:return t.next=34,m.a.getItem("practice");case 34:if(t.t7=a=t.sent,t.t6=null!==t.t7,!t.t6){t.next=38;break}t.t6=void 0!==a;case 38:if(!t.t6){t.next=42;break}t.t8=a,t.next=43;break;case 42:t.t8={};case 43:if(h=t.t8,f.practice=h,h.buy&&h.sell&&h.test){t.next=47;break}return t.abrupt("return",this.setState(f));case 47:return t.next=49,m.a.getItem("trades");case 49:if(t.t10=r=t.sent,t.t9=null!==t.t10,!t.t9){t.next=53;break}t.t9=void 0!==r;case 53:if(!t.t9){t.next=57;break}t.t11=r,t.next=58;break;case 57:t.t11=[];case 58:j=t.t11,x=M(j),p=L(j),this.setState(Object(i.a)(Object(i.a)({},f),{},{trades:j,status:p,totalProfit:x})),t.next=67;break;case 64:t.prev=64,t.t12=t.catch(0),this.setState({error:!0,loading:!1});case 67:case"end":return t.stop()}}),t,this,[[0,64]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.error,i=t.uuid,o=t.groupID,l=t.noticed,u=t.showNotice,d=t.trades,b=t.status,h=t.practice,j=t.totalProfit;if(e)return Object(f.jsx)("div",{id:"skeleton",children:Object(f.jsx)(s.a,{active:!0})});if(n||-1===b)return Object(f.jsx)(y,{status:b,goBack:this.goBack});if(!i||!o)return Object(f.jsx)(w,{login:this.login});var x="",p=null,v=b;if(h.buy&&h.sell)if(h.test)switch(v){case 0:x="\u5373\u5c06\u5f00\u59cb\u7b2c".concat(d.length+1,"\u8f6e\u5b9e\u9a8c"),p=Object(f.jsx)(D,{trades:d,groupID:o,handleStart:this.handleStart});break;case 1:x="\u6b63\u5728\u8fdb\u884c\u7b2c".concat(d.length,"\u8f6e\u5b9e\u9a8c"),p=Object(f.jsx)(F,{trades:d,handleTrade:this.handleTrade,handleNext:this.handleNext});break;case 2:x="\u5df2\u7ed3\u675f\u7b2c".concat(d.length,"\u8f6e\u5b9e\u9a8c"),p=Object(f.jsx)(N,{trades:d,groupID:o,onQuestionSubmit:this.onQuestionSubmit});break;case 3:x="\u6240\u6709\u5b9e\u9a8c\u5df2\u7ed3\u675f",p=Object(f.jsx)(S,{totalProfit:j,saveTextAsFile:this.saveTextAsFile})}else x="\u7ec3\u4e60\u6d4b\u9a8c",p=Object(f.jsx)(C,{handlePracticeNext:this.handlePracticeNext});else x="\u7ec3\u4e60\u64cd\u4f5c",p=Object(f.jsx)(T,{handlePracticeNext:this.handlePracticeNext});return Object(f.jsxs)("div",{id:"main",children:[Object(f.jsx)(a.a,{backIcon:!1,title:"\u80a1\u7968\u6a21\u62df\u4ea4\u6613\u5b9e\u9a8c",subTitle:x,extra:[Object(f.jsx)(c.a,{type:"link",onClick:this.openNotice,children:"\u5b9e\u9a8c\u987b\u77e5"},"notice"),Object(f.jsx)(c.a,{danger:!0,type:"primary",onClick:this.clearUserInfo,children:"\u6e05\u9664\u7528\u6237\u6570\u636e"},"userInfo"),Object(f.jsx)(c.a,{danger:!0,onClick:this.clearDashboard,children:"\u6e05\u9664\u5b9e\u9a8c\u6570\u636e"},"trades")],children:Object(f.jsx)("div",{className:"content",children:Object(f.jsxs)(r.b,{size:"small",column:2,children:[Object(f.jsx)(r.b.Item,{label:"\u88ab\u8bd5\u7f16\u53f7",children:i}),Object(f.jsx)("br",{}),Object(f.jsx)(r.b.Item,{label:"\u5206\u7ec4\u7f16\u53f7",children:o})]})})}),p,Object(f.jsx)(I,{noticed:l,visible:u,onCancel:this.closeModal})]})}}]),n}(O.PureComponent);function L(t){var e=t[t.length-1],n=e||{},a=n.buy,r=void 0===a?[]:a,c=n.sell,s=void 0===c?[]:c,i=n.mood,o=void 0===i?[]:i;return e?r.length>=21||s.length>=21?o.length<4?2:t.length>=5?3:0:r.length<21&&r.length===s.length&&0===o.length?1:-1:0}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=t.stock,c=t.buy,s=t.sell;if(!r||!Array.isArray(c)||!Array.isArray(s)||a&&(c.length<21||s.length<21))return{};for(var i=0,o=0,l=0,u=0,d=0,b=0;b<c.length;b+=1)i+=c[b]*P[r][b+3],s[b]===d&&0!==d?(o=0,l=0):(o+=c[b]*P[r][b+3],l+=c[b]),d+=c[b]-s[b],u+=s[b]*P[r][b+3];var f=e+u-i,h=l<=0?0:o/l,j=d*P[r][c.length+(n?3:2)],x=f+j,p=x-e,v=Math.floor(f/P[r][c.length+(n?3:2)]);return{averageCost:h,position:d,totalProfit:p,balance:f,marketValue:j,totalAsset:x,maxBuy:v}}function M(t){for(var e=0,n=0;n<t.length;n+=1){var a=R(t[n],5e3,!1,!0).totalProfit;e+=void 0===a?0:a}return+e.toFixed(2)}function U(t,e,n){for(var a=[],r=0;r<t.length;r+=1){for(var c=[],s=t[r],i=s.buy,o=s.sell,l=s.mood,u=s.stock,d={buy:[300],sell:[0],stock:u},b=void 0,f=0,h=0,j=0,x=0,p=0,v=300,g=10,O=0,k=0,m=[],w=1;w<i.length;w+=1){d.sell.push(o[w]),d.buy.push(i[w]);var y=R(d),S=y.averageCost,I=y.position,T=y.totalProfit,F=y.marketValue,D=0,C=0,N=0,A=0,z=(P[u][w+3]-g)*v,B=(P[u][w+3]-g)*o[w];P[u][w+3]>g?(D=z,N=B):P[u][w+3]<g&&(C=z,A=B),x+=D+N,p+=C+A,O+=N,k+=A,g=S,v=I;var L={Trial:w,Buy:i[w],Sell:o[w],"Current Stock Price":P[u][w+3],"Weighted Average Purchase Price":+S.toFixed(4),Position:I,"Current Profit":+((P[u][w+3]-S)*I).toFixed(4),"Total Profit":+T.toFixed(4),"Market Value":+F.toFixed(4),"Paper Gain":+D.toFixed(4),"Paper Lose":+C.toFixed(4),"Realized Gain":+N.toFixed(4),"Realized Lose":+A.toFixed(4)};if(o[w]>0){var M=P[u][w+3]-S;m.push(M),L["The Diff Of SP-WAPP"]=+M.toFixed(4),w>0&&(o[w]>o[w-1]?h+=o[w]:o[w]<o[w-1]&&(j+=o[w]))}c.push(L),void 0===b&&(f+=o[w])>=300&&(b=w)}var U=0===x?0:O/x,E=0===p?0:k/p;a.push({Round:r+1,"The Average Of SP-WAPP":+(m.reduce((function(t,e){return t+e}),0)/m.length).toFixed(4),Alpha:+((h-j)/(h+j)).toFixed(4),"Total Profit":+c[c.length-1]["Total Profit"].toFixed(4),"Trial While Sold 300 Shares":b,"Sell After Rise":h,"Sell After Fall":j,Trials:c,DE:+(U-E).toFixed(4),Stock:u,Mood:l})}return{"User ID":e,Trades:a,"Group ID":n,"Total Profit":a.reduce((function(t,e){return t+e["Total Profit"]}),0)}}function E(t,e,n){var a=JSON.stringify(t),r=new Blob([a],{type:"text/plain"}),c=document.createElement("a");c.download="stocks-simulation-".concat(e,"-").concat(n,".json"),c.innerHTML="Download File",null!==window.webkitURL?c.href=window.webkitURL.createObjectURL(r):(c.href=window.URL.createObjectURL(r),c.onclick=function(t){document.body.removeChild(t.target)},c.style.display="none",document.body.appendChild(c)),c.click()}function J(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=Object(O.useRef)();Object(O.useEffect)((function(){n.current=t})),Object(O.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){return clearInterval(t)}}}),[e])}}},[[151,6,7]]]);
//# sourceMappingURL=main.704685fc.chunk.js.map