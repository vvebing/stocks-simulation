(this["webpackJsonpstocks-simulation"]=this["webpackJsonpstocks-simulation"]||[]).push([[12],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));n(395);var a=n(501),i=n(15),l=(n(214),n(223)),r=(n(215),n(224)),c=(n(75),n(29)),s=(n(124),n(64)),o=(n(125),n(81)),b=(n(232),n(92)),d=n(96),u=n(97),h=n(109),j=n(107),x=n(0),p=n(182),m=n.n(p),y=(n(458),n(479),n(480),n(491),n(51)),O=n(89),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).getOption=function(){if(a.myChart){var e=a.props.trades,t=e[e.length-1];if(t){var n=t.buy,i=t.stock,l={grid:{left:"0",right:"10px",top:"35px",bottom:"0",containLabel:!0},title:{text:"".concat(O.a[i],"\u80a1\u7968\u8d70\u52bf")},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{width:1.5,type:"dashed"}}},xAxis:{boundaryGap:!1,data:Array(22).fill("").map((function(e,t){return"Point ".concat(t)}))},yAxis:{showMinLabel:!1,showMaxLabel:!1,min:function(e){return parseInt(e.min-1,10)},max:function(e){return parseInt(e.max+2,10)}},series:[{name:"\u80a1\u7968\u4ef7\u683c",type:"line",data:y[i].slice(3,n.length+4),markPoint:{data:[{type:"min",name:"\u6700\u4f4e\u503c"},{type:"max",name:"\u6700\u9ad8\u503c"}]}}]};a.myChart.setOption(l)}}},a.onBuyInputChange=function(e){a.setState({buyValue:+e})},a.onBuyBtnMax=function(){a.setState((function(e){return{buyValue:e.maxBuy}}))},a.onSellInputChange=function(e){a.setState({sellValue:+e})},a.onSellBtnMax=function(){a.setState((function(e){return{sellValue:e.position}}))},a.onBuyBtnClick=function(){var e=a.state,t=e.buyValue,n=e.maxBuy;return t?t>n?(a.setState({buyValue:n}),b.b.warning("\u73b0\u91d1\u4f59\u989d\u6700\u591a\u53ea\u80fd\u8d2d\u4e70".concat(n,"\u80a1\uff01"))):void a.tradeConfirm("buy",t,"\u4e70\u5165".concat(t,"\u80a1")):b.b.warning("\u4e70\u5165\u6570\u91cf\u9700\u5927\u4e8e\u96f6\uff01")},a.onSellBtnClick=function(){var e=a.state,t=e.sellValue,n=e.position;return t?t>n?(a.setState({sellValue:n}),b.b.warning("\u5f53\u524d\u6301\u4ed3\u6700\u591a\u53ea\u80fd\u5356\u51fa".concat(n,"\u80a1\uff01"))):void a.tradeConfirm("sell",t,"\u5356\u51fa".concat(t,"\u80a1")):b.b.warning("\u5356\u51fa\u6570\u91cf\u9700\u5927\u4e8e\u96f6\uff01")},a.onKeepBtnClick=function(){a.tradeConfirm("",0,"\u7ee7\u7eed\u6301\u6709")},a.tradeConfirm=function(e,t,n){var i=a.props,l=i.trades,r=i.handleTrade,c=l[l.length-1];if(c.buy.length>=20)return a.setState({over:!0});o.a.confirm({centered:!0,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"".concat(n).concat(O.a[c.stock],"\u80a1\u7968"),content:"\u662f\u5426\u786e\u8ba4\u8be5\u64cd\u4f5c\uff1f",onOk:function(){a.setState({buyValue:0,sellValue:0,next:!0}),r(e,t)}})},a.toggleNext=function(){var e=a.props.trades,t=e[e.length-1];a.setState({next:!1,over:t.buy.length>=20})},a.inputFormatter=function(e){return parseInt(e,10)};var i=e.trades,l=i[i.length-1]||{},r=Object(O.b)(l),c=r.averageCost,s=void 0===c?0:c,u=r.position,h=void 0===u?0:u,j=r.totalProfit,p=void 0===j?0:j,m=r.balance,f=void 0===m?0:m,v=r.marketValue,g=void 0===v?0:v,k=r.totalAsset,C=void 0===k?0:k,B=r.maxBuy,I=void 0===B?0:B,V=(y[l.stock][l.buy.length+3]-s)*h;return a.state={over:l.buy&&l.buy.length>=20,buyValue:0,sellValue:0,averageCost:s.toFixed(4),position:h,currentProfit:V.toFixed(4),totalProfit:p.toFixed(4),balance:f.toFixed(4),marketValue:g.toFixed(4),totalAsset:C.toFixed(4),maxBuy:I,trades:i,next:!1},a.lineRef=Object(x.createRef)(),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.state.over||(this.myChart=m.a.getInstanceByDom(this.lineRef.current),void 0===this.myChart&&(this.myChart=m.a.init(this.lineRef.current)),this.getOption())}},{key:"componentDidUpdate",value:function(e){this.props.trades!==e.trades&&this.getOption()}},{key:"componentWillUnmount",value:function(){this.myChart&&this.myChart.dispose(),this.myChart=null}},{key:"render",value:function(){var e,t=this.props,n=t.trades,o=t.handleNext,b=this.state,d=b.over,u=b.next,h=b.buyValue,j=b.sellValue,x=b.averageCost,p=b.position,m=b.currentProfit,O=b.totalProfit,f=b.balance,v=b.marketValue,g=b.totalAsset,k=null!==(e=n[n.length-1])&&void 0!==e?e:{},C=k.stock,B=k.buy;return d?Object(i.jsxs)("div",{id:"dashboard",children:[Object(i.jsx)("h2",{children:"\u672c\u8f6e\u4ea4\u6613\u4efb\u52a1\u7ed3\u675f\u3002"}),Object(i.jsxs)(s.b,{bordered:!0,column:1,children:[Object(i.jsx)(s.b.Item,{label:"\u6210\u672c",children:+x}),Object(i.jsx)(s.b.Item,{label:"\u6301\u4ed3",children:p}),Object(i.jsx)(s.b.Item,{label:"\u603b\u76c8\u4e8f",children:+O}),Object(i.jsx)(s.b.Item,{label:"\u73b0\u91d1\u4f59\u989d",children:+f}),Object(i.jsx)(s.b.Item,{label:"\u80a1\u7968\u5e02\u503c",children:+v}),Object(i.jsx)(s.b.Item,{label:"\u603b\u8d44\u4ea7",children:+g})]}),Object(i.jsx)("h2",{children:"\u60a8\u5728\u672c\u8f6e\u4ea4\u6613\u4efb\u52a1\u7684\u7d2f\u8ba1\u76c8\u4e8f\u4e3a\uff1a".concat(+O,"\u91d1\u5e01\u3002")}),Object(i.jsx)(c.a,{type:"primary",onClick:o,children:"\u70b9\u51fb\u7ee7\u7eed"})]}):Object(i.jsxs)("div",{id:"dashboard",children:[Object(i.jsx)("div",{className:"chart",ref:this.lineRef}),Object(i.jsxs)("div",{className:"data",children:[Object(i.jsx)("div",{className:"describe",children:Object(i.jsxs)(s.b,{bordered:!0,column:1,title:"\u8d44\u4ea7\u914d\u7f6e",children:[Object(i.jsx)(s.b.Item,{label:"\u5f53\u524d\u80a1\u4ef7",children:y[C][B.length+3]}),Object(i.jsx)(s.b.Item,{label:"\u6210\u672c",children:+x}),Object(i.jsx)(s.b.Item,{label:"\u6301\u4ed3",children:p}),Object(i.jsx)(s.b.Item,{label:"\u5f53\u524d\u76c8\u4e8f",children:+m}),Object(i.jsx)(s.b.Item,{label:"\u603b\u76c8\u4e8f",children:+O}),Object(i.jsx)(s.b.Item,{label:"\u73b0\u91d1\u4f59\u989d",children:+f}),Object(i.jsx)(s.b.Item,{label:"\u80a1\u7968\u5e02\u503c",children:+v}),Object(i.jsx)(s.b.Item,{label:"\u603b\u8d44\u4ea7",children:+g})]})}),Object(i.jsx)("div",{className:"option",children:u?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.a,{justify:"center",children:Object(i.jsx)(r.a,{className:"input-label",children:k.buy.length>=20?"\u672c\u8f6e\u4ea4\u6613\u4efb\u52a1\u7ed3\u675f\uff0c\u70b9\u51fb\u786e\u8ba4\u67e5\u770b\u672c\u8f6e\u4ea4\u6613\u4fe1\u606f\u3002":"\u672c\u671f\u4ea4\u6613\u7ed3\u675f\uff0c\u8bf7\u70b9\u51fb\u786e\u8ba4\u8fdb\u5165\u4e0b\u4e00\u4e2a\u4ea4\u6613\u671f\uff01"})}),Object(i.jsx)(l.a,{justify:"center",children:Object(i.jsx)(r.a,{span:12,children:Object(i.jsx)(c.a,{type:"primary",size:"large",block:!0,onClick:this.toggleNext,children:"\u786e\u8ba4"})})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(l.a,{justify:"space-around",children:[Object(i.jsx)(r.a,{span:6,className:"input-label",children:"\u4e70\u5165\u80a1\u7968\u6570\u91cf"}),Object(i.jsx)(r.a,{span:6,children:Object(i.jsx)(a.a,{precision:0,value:h,formatter:this.inputFormatter,onChange:this.onBuyInputChange})}),Object(i.jsx)(r.a,{span:5,children:Object(i.jsx)(c.a,{type:"link",block:!0,onClick:this.onBuyBtnMax,children:"\u6700\u5927\u503c"})}),Object(i.jsx)(r.a,{span:4,children:Object(i.jsx)(c.a,{type:"primary",block:!0,onClick:this.onBuyBtnClick,children:"\u4e70\u5165"})})]}),Object(i.jsxs)(l.a,{justify:"space-around",children:[Object(i.jsx)(r.a,{span:6,className:"input-label",children:"\u5356\u51fa\u80a1\u7968\u6570\u91cf"}),Object(i.jsx)(r.a,{span:6,children:Object(i.jsx)(a.a,{precision:0,value:j,formatter:this.inputFormatter,onChange:this.onSellInputChange})}),Object(i.jsx)(r.a,{span:5,children:Object(i.jsx)(c.a,{type:"link",block:!0,onClick:this.onSellBtnMax,children:"\u6700\u5927\u503c"})}),Object(i.jsx)(r.a,{span:4,children:Object(i.jsx)(c.a,{type:"primary",danger:!0,block:!0,onClick:this.onSellBtnClick,children:"\u5356\u51fa"})})]}),Object(i.jsx)(l.a,{justify:"center",children:Object(i.jsx)(r.a,{span:12,children:Object(i.jsx)(c.a,{type:"primary",block:!0,onClick:this.onKeepBtnClick,children:"\u7ee7\u7eed\u6301\u6709"})})})]})})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.trades;if(t.trades!==n){var a=n[n.length-1],i=Object(O.b)(a),l=i.averageCost,r=void 0===l?0:l,c=i.position,s=void 0===c?0:c,o=i.totalProfit,b=void 0===o?0:o,d=i.balance,u=void 0===d?0:d,h=i.marketValue,j=void 0===h?0:h,x=i.totalAsset,p=void 0===x?0:x,m=i.maxBuy,f=void 0===m?0:m,v=(y[a.stock][a.buy.length+3]-r)*s;return{averageCost:r.toFixed(4),position:s,currentProfit:v.toFixed(4),totalProfit:b.toFixed(4),balance:u.toFixed(4),marketValue:j.toFixed(4),totalAsset:p.toFixed(4),maxBuy:f,trades:n}}return null}}]),n}(x.PureComponent)}}]);
//# sourceMappingURL=12.60781c33.chunk.js.map