(this["webpackJsonpstocks-simulation"]=this["webpackJsonpstocks-simulation"]||[]).push([[12,13],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));n(252);var a=n(307),i=n(14),r=(n(179),n(184)),l=(n(180),n(185)),c=(n(65),n(27)),s=(n(114),n(66)),o=n(39),b=(n(117),n(69)),u=(n(113),n(48)),d=n(92),j=n(93),h=n(97),p=n(95),x=n(0),y=n(168),m=n.n(y),O=(n(292),n(300),n(301),n(305),n(34)),f=n(87),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).getOption=function(){if(a.myChart){var e=a.props,t=e.trades,n=e.trials,i=void 0===n?21:n,r=t[t.length-1];if(r){var l=r.buy,c=r.stock,s=a.state.next,o={grid:{left:"0",right:"10px",top:"35px",bottom:"0",containLabel:!0},title:{text:"".concat(f.a[c],"\u80a1\u7968\u8d70\u52bf")},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{width:1.5,type:"dashed"}}},xAxis:{boundaryGap:!1,data:Array(i+1).fill("").map((function(e,t){return"Point ".concat(t)}))},yAxis:{showMinLabel:!1,showMaxLabel:!1,min:function(e){return parseInt(e.min-1,10)},max:function(e){return parseInt(e.max+2,10)}},series:[{name:"\u80a1\u7968\u4ef7\u683c",type:"line",data:O[c].slice(3,l.length+(s&&l.length?3:4)),markPoint:{data:[{type:"min",name:"\u6700\u4f4e\u503c"},{type:"max",name:"\u6700\u9ad8\u503c"}]}}]};a.myChart.setOption(o)}}},a.onBuyInputChange=function(e){a.setState({buyValue:+e})},a.onBuyBtnMax=function(){a.setState((function(e){return{buyValue:e.maxBuy}}))},a.onSellInputChange=function(e){a.setState({sellValue:+e})},a.onSellBtnMax=function(){a.setState((function(e){return{sellValue:e.position}}))},a.onBuyBtnClick=function(){var e=a.state,t=e.buyValue,n=e.maxBuy;return t?t>n?(a.setState({buyValue:n}),u.b.warning("\u73b0\u91d1\u4f59\u989d\u6700\u591a\u53ea\u80fd\u8d2d\u4e70".concat(n,"\u80a1\uff01"))):void a.tradeConfirm("buy",t,"\u4e70\u5165".concat(t,"\u80a1")):u.b.warning("\u4e70\u5165\u6570\u91cf\u9700\u5927\u4e8e\u96f6\uff01")},a.onSellBtnClick=function(){var e=a.state,t=e.sellValue,n=e.position;return t?t>n?(a.setState({sellValue:n}),u.b.warning("\u5f53\u524d\u6301\u4ed3\u6700\u591a\u53ea\u80fd\u5356\u51fa".concat(n,"\u80a1\uff01"))):void a.tradeConfirm("sell",t,"\u5356\u51fa".concat(t,"\u80a1")):u.b.warning("\u5356\u51fa\u6570\u91cf\u9700\u5927\u4e8e\u96f6\uff01")},a.onKeepBtnClick=function(){a.tradeConfirm("",0,"\u7ee7\u7eed\u6301\u6709")},a.tradeConfirm=function(e,t,n){var i=a.props,r=i.trades,l=i.trials,c=void 0===l?21:l,s=i.handleTrade,o=r[r.length-1];if(o.buy.length>=c)return a.setState({over:!0});b.a.confirm({centered:!0,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"".concat(n).concat(f.a[o.stock],"\u80a1\u7968"),content:"\u662f\u5426\u786e\u8ba4\u8be5\u64cd\u4f5c\uff1f",onOk:function(){a.setState({buyValue:0,sellValue:0,next:!0}),s(e,t)}})},a.toggleNext=function(){var e=a.props,t=e.trades,n=e.trials,i=void 0===n?21:n,r=e.principal,l=void 0===r?5e3:r,c=t[t.length-1].buy.length>=i;a.setState(Object(o.a)({over:c,next:!1},g(t,l,!c)))},a.inputFormatter=function(e){return parseInt(e,10)||0};var i=e.trades,r=e.principal,l=void 0===r?5e3:r,c=e.trials,s=void 0===c?21:c,j=i[i.length-1]||{};return a.state=Object(o.a)({over:j.buy&&j.buy.length>=s,buyValue:0,sellValue:0,trades:i,next:!0},g(i,l,!1)),a.lineRef=Object(x.createRef)(),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.state.over||(this.myChart=m.a.getInstanceByDom(this.lineRef.current),void 0===this.myChart&&(this.myChart=m.a.init(this.lineRef.current)),this.getOption())}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.trades,a=this.state.next;n===e.trades&&a===t.next||this.getOption()}},{key:"componentWillUnmount",value:function(){this.myChart&&this.myChart.dispose(),this.myChart=null}},{key:"render",value:function(){var e,t=this.props,n=t.trades,o=t.trials,b=void 0===o?21:o,u=t.handleNext,d=this.state,j=d.over,h=d.next,p=d.buyValue,x=d.sellValue,y=d.averageCost,m=d.position,f=d.currentProfit,v=d.totalProfit,g=d.balance,k=d.marketValue,C=d.totalAsset,I=null!==(e=n[n.length-1])&&void 0!==e?e:{},S=I.stock,B=I.buy;return j?Object(i.jsxs)("div",{id:"dashboard",children:[Object(i.jsx)("h2",{children:"\u672c\u8f6e\u4ea4\u6613\u4efb\u52a1\u7ed3\u675f\u3002"}),Object(i.jsxs)(s.b,{bordered:!0,column:1,children:[Object(i.jsx)(s.b.Item,{label:"\u6210\u672c",children:+y}),Object(i.jsx)(s.b.Item,{label:"\u6301\u4ed3",children:m}),Object(i.jsx)(s.b.Item,{label:"\u603b\u76c8\u4e8f",children:+v}),Object(i.jsx)(s.b.Item,{label:"\u73b0\u91d1\u4f59\u989d",children:+g}),Object(i.jsx)(s.b.Item,{label:"\u80a1\u7968\u5e02\u503c",children:+k}),Object(i.jsx)(s.b.Item,{label:"\u603b\u8d44\u4ea7",children:+C})]}),Object(i.jsx)("h2",{children:"\u60a8\u5728\u672c\u8f6e\u4ea4\u6613\u4efb\u52a1\u7684\u7d2f\u8ba1\u76c8\u4e8f\u4e3a\uff1a".concat(+v,"\u91d1\u5e01\u3002")}),Object(i.jsx)(c.a,{type:"primary",onClick:u,children:"\u70b9\u51fb\u7ee7\u7eed"})]}):Object(i.jsxs)("div",{id:"dashboard",children:[Object(i.jsx)("div",{className:"chart",ref:this.lineRef}),Object(i.jsxs)("div",{className:"data",children:[Object(i.jsx)("div",{className:"describe",children:Object(i.jsxs)(s.b,{bordered:!0,column:1,title:"\u8d44\u4ea7\u914d\u7f6e",children:[Object(i.jsx)(s.b.Item,{label:"\u5f53\u524d\u80a1\u4ef7",children:O[S][B.length+(h?2:3)]}),Object(i.jsx)(s.b.Item,{label:"\u6210\u672c",children:+y}),Object(i.jsx)(s.b.Item,{label:"\u6301\u4ed3",children:m}),Object(i.jsx)(s.b.Item,{label:"\u5f53\u524d\u76c8\u4e8f",children:+f}),Object(i.jsx)(s.b.Item,{label:"\u603b\u76c8\u4e8f",children:+v}),Object(i.jsx)(s.b.Item,{label:"\u73b0\u91d1\u4f59\u989d",children:+g}),Object(i.jsx)(s.b.Item,{label:"\u80a1\u7968\u5e02\u503c",children:+k}),Object(i.jsx)(s.b.Item,{label:"\u603b\u8d44\u4ea7",children:+C})]})}),Object(i.jsx)("div",{className:"option",children:h?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{justify:"center",children:Object(i.jsx)(l.a,{className:"input-label",children:I.buy.length>=b?"\u672c\u8f6e\u4ea4\u6613\u4efb\u52a1\u7ed3\u675f\uff0c\u70b9\u51fb\u786e\u8ba4\u67e5\u770b\u672c\u8f6e\u4ea4\u6613\u4fe1\u606f\u3002":"\u672c\u671f\u4ea4\u6613\u7ed3\u675f\uff0c\u8bf7\u70b9\u51fb\u786e\u8ba4\u8fdb\u5165\u4e0b\u4e00\u4e2a\u4ea4\u6613\u671f\uff01"})}),Object(i.jsx)(r.a,{justify:"center",children:Object(i.jsx)(l.a,{span:12,children:Object(i.jsx)(c.a,{type:"primary",size:"large",block:!0,onClick:this.toggleNext,children:"\u786e\u8ba4"})})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(r.a,{justify:"space-between",children:[Object(i.jsx)(l.a,{span:6,className:"input-label",children:"\u4e70\u5165\u80a1\u7968\u6570\u91cf"}),Object(i.jsx)(l.a,{span:4,children:Object(i.jsx)(a.a,{min:0,step:1,precision:0,value:p,formatter:this.inputFormatter,onChange:this.onBuyInputChange})}),Object(i.jsx)(l.a,{span:5,children:Object(i.jsx)(c.a,{type:"link",block:!0,onClick:this.onBuyBtnMax,children:"\u6700\u5927\u503c"})}),Object(i.jsx)(l.a,{span:6,children:Object(i.jsx)(c.a,{type:"primary",block:!0,onClick:this.onBuyBtnClick,children:"\u4e70\u5165"})})]}),Object(i.jsxs)(r.a,{justify:"space-between",children:[Object(i.jsx)(l.a,{span:6,className:"input-label",children:"\u5356\u51fa\u80a1\u7968\u6570\u91cf"}),Object(i.jsx)(l.a,{span:4,children:Object(i.jsx)(a.a,{min:0,step:1,precision:0,value:x,formatter:this.inputFormatter,onChange:this.onSellInputChange})}),Object(i.jsx)(l.a,{span:5,children:Object(i.jsx)(c.a,{type:"link",block:!0,onClick:this.onSellBtnMax,children:"\u6700\u5927\u503c"})}),Object(i.jsx)(l.a,{span:6,children:Object(i.jsx)(c.a,{type:"primary",danger:!0,block:!0,onClick:this.onSellBtnClick,children:"\u5356\u51fa"})})]}),Object(i.jsx)(r.a,{justify:"end",children:Object(i.jsx)(l.a,{span:6,children:Object(i.jsx)(c.a,{block:!0,className:"keep-btn",onClick:this.onKeepBtnClick,children:"\u6301\u4ed3\u4e0d\u53d8"})})})]})})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.trades,a=e.principal,i=void 0===a?5e3:a;return t.trades!==n?Object(o.a)(Object(o.a)({},g(n,i,!1)),{},{trades:n}):null}}]),n}(x.PureComponent);function g(e,t,n){var a=e[e.length-1],i=Object(f.b)(a,t,n),r=i.averageCost,l=void 0===r?0:r,c=i.position,s=void 0===c?0:c,o=i.totalProfit,b=void 0===o?0:o,u=i.balance,d=void 0===u?0:u,j=i.marketValue,h=void 0===j?0:j,p=i.totalAsset,x=void 0===p?0:p,y=i.maxBuy,m=void 0===y?0:y,v=(O[a.stock][a.buy.length+(n?3:2)]-l)*s;return{averageCost:l.toFixed(4),position:s,currentProfit:v.toFixed(4),totalProfit:b.toFixed(4),balance:d.toFixed(4),marketValue:h.toFixed(4),totalAsset:x.toFixed(4),maxBuy:m}}},157:function(e,t,n){"use strict";n.r(t);var a=n(14),i=n(39),r=n(45),l=n(177),c=n(0),s=n(152);t.default=function(e){var t=e.handlePracticeNext,n=Object(c.useState)({stock:"Practice",buy:[],sell:[]}),o=Object(l.a)(n,2),b=o[0],u=o[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"\u9996\u5148\u8fdb\u5165\u7ec3\u4e60\u73af\u8282\u3002\u8be5\u73af\u8282\u7684\u6536\u76ca\u4e0d\u8ba1\u5165\u6700\u7ec8\u7d2f\u8ba1\u6536\u76ca\uff0c\u4ec5\u4e3a\u719f\u6089\u64cd\u4f5c\u6240\u7528\u3002\u8bf7\u6839\u636e\u5c4f\u5e55\u5448\u73b0\u7684\u4fe1\u606f\uff0c\u72ec\u7acb\u4f5c\u51fa\u4ea4\u6613\u51b3\u7b56\u3002"}),Object(a.jsx)(s.default,{trials:9,principal:1e3,trades:[b],handleNext:function(){var e=b.buy,n=b.sell;t({buy:e,sell:n})},handleTrade:function(e,n){var a=b.buy,l=b.sell;a.length>=9&&t({buy:a,sell:l});var c={};"buy"===e?(c.buy=[].concat(Object(r.a)(a),[n]),c.sell=[].concat(Object(r.a)(l),[0])):"sell"===e?(c.buy=[].concat(Object(r.a)(a),[0]),c.sell=[].concat(Object(r.a)(l),[n])):(c.buy=[].concat(Object(r.a)(a),[0]),c.sell=[].concat(Object(r.a)(l),[0])),u(Object(i.a)(Object(i.a)({},b),c))}})]})}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(88);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(s){i=!0,r=s}finally{try{a||null==c.return||c.return()}finally{if(i)throw r}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=12.ab619429.chunk.js.map