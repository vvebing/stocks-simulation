(this["webpackJsonpstocks-simulation"]=this["webpackJsonpstocks-simulation"]||[]).push([[18],{160:function(e,t,c){"use strict";c.r(t);c(114);var a=c(66),r=c(14),j=(c(251),c(306)),b=(c(179),c(184)),n=(c(180),c(185)),s=(c(490),c(486)),i=(c(191),c(199)),l=(c(218),c(237)),d=(c(65),c(27)),x=(c(491),c(487)),h=(c(113),c(48)),O=c(177),o=c(0),T=c.p+"static/media/Thumbnail.0ba02919.jpg",k=c(87),p=["\u51c6\u5907","\u8bf4\u660e","\u9009\u80a1","\u786e\u8ba4"];t.default=function(e){var t=e.trades,c=e.groupID,u=e.handleStart,y=Object(o.useState)(),g=Object(O.a)(y,2),m=g[0],P=g[1],f=Object(o.useState)(0),I=Object(O.a)(f,2),v=I[0],S=I[1],C=Object(o.useState)(60),w=Object(O.a)(C,2),J=w[0],M=w[1],D=Object(o.useState)(!0),N=Object(O.a)(D,2),q=N[0],z=N[1];Object(k.d)((function(){J>0?M(J-1):z(!1)}),q?1e3:null);var A=function(){if(v>=1&&!m){if(10!==c)return 1!==v&&S(1),h.b.warning("\u8bf7\u9009\u62e9\u4e00\u652f\u80a1\u7968");var e=Object.keys(k.a).filter((function(e){return-1===t.findIndex((function(t){return t.stock===e}))}));P(e[Math.floor(Math.random()*e.length)])}if(v>=3)return u(m);v<p.length-1&&S(v+1),z(!1)};return Object(r.jsxs)("div",{id:"preparation",children:[Object(r.jsx)(x.a,{current:v,children:p.map((function(e){return Object(r.jsx)(x.a.Step,{title:e},e)}))}),0===v?Object(r.jsx)(l.a,{title:"\u7b2c".concat(t.length+1,"\u8f6e\u5b9e\u9a8c\u5373\u5c06\u5f00\u59cb"),subTitle:"\u5982\u679c\u60a8\u5df2\u51c6\u5907\u5c31\u7eea\uff0c\u8bf7\u70b9\u51fb\u5f00\u59cb\uff01",extra:[Object(r.jsx)(d.a,{type:"primary",disabled:q,onClick:A,children:q?"\u5efa\u8bae\u4f11\u606f".concat(J,"\u79d2\u540e\u5f00\u59cb"):"\u5f00\u59cb"},"countdown"),q&&Object(r.jsx)(d.a,{type:"link",onClick:A,children:"\u51c6\u5907\u5c31\u7eea\uff0c\u7acb\u5373\u5f00\u59cb"},"start")]}):1===v||2===v?Object(r.jsxs)("div",{id:"step",children:[Object(r.jsx)(b.a,{justify:"space-around",children:Object.entries(k.a).slice(0,-1).map((function(e){var a=Object(O.a)(e,2),j=a[0],b=a[1],l=-1===t.findIndex((function(e){return e.stock===j}));return Object(r.jsx)(n.a,{span:4,children:Object(r.jsx)(s.a,{hoverable:!0,cover:Object(r.jsx)("img",{alt:"Thumbnail",src:T}),onClick:function(){return 1===v&&10!==c&&l&&P(j)},children:Object(r.jsx)(i.a,{checked:m===j,disabled:2===v||!l||10===c,children:"".concat(b,"\u80a1\u7968")})})},j)}))}),Object(r.jsx)("div",{className:"introduce",children:1===v?10===c?Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(j.a.Paragraph,{children:["\u73b0\u5728\u8fdb\u5165\u8d44\u4ea7\u5206\u914d\u9636\u6bb5",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point0"}),"\u3002\u5e02\u573a\u4e0a\u6709\u201c\u7532\u3001\u4e59\u3001\u4e19\u3001\u4e01\u3001\u620a\u201d\u4e94\u53ea\u80a1\u7968\uff0c\u8fd9\u4e94\u53ea\u80a1\u7968\u5728",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point0"}),"\u524d\u671f\u8d70\u52bf\u76f8\u4f3c\uff0c\u5f53\u524d\u80a1\u4ef7\u5747\u4e3a",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\uff0c\u4f46\u662f\u540e\u671f\u7684\u4e0a\u6da8\u6982\u7387\u53ef\u80fd\u4e0d\u540c\u3002"]}),Object(r.jsxs)(j.a.Paragraph,{children:["\u60a8\u53ea\u80fd",Object(r.jsx)(j.a.Text,{strong:!0,children:"\u9009\u62e9\u5176\u4e2d\u4e00\u79cd"}),"\u8fdb\u884c\u4ea4\u6613\uff0c\u5e76\u4e14\u5fc5\u987b\u5728",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point0"}),Object(r.jsxs)(j.a.Text,{strong:!0,children:["\u8d2d\u4e70",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"300"}),"\u80a1"]}),"\u540e\uff0c\u624d\u80fd\u8fdb\u5165\u4ea4\u6613\u5e02\u573a\u8fdb\u884c\u4ea4\u6613\u3002"]}),Object(r.jsx)(j.a.Paragraph,{children:Object(r.jsxs)(j.a.Text,{strong:!0,children:["\u60a8\u73b0\u5728\u62e5\u6709",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"5000"}),"\u4e2a\u865a\u62df\u91d1\u5e01\u4f5c\u4e3a\u6295\u8d44\u672c\u91d1\u3002"]})})]}):20===c?Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(j.a.Paragraph,{children:["\u73b0\u5728\u8fdb\u5165\u8d44\u4ea7\u5206\u914d\u9636\u6bb5",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point0"}),"\u3002\u5e02\u573a\u4e0a\u6709\u201c\u7532\u3001\u4e59\u3001\u4e19\u3001\u4e01\u3001\u620a\u201d\u4e94\u53ea\u80a1\u7968\uff0c\u8fd9\u4e94\u53ea\u80a1\u7968\u5728",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point0"}),"\u524d\u671f\u8d70\u52bf\u76f8\u4f3c\uff0c\u5f53\u524d\u80a1\u4ef7\u5747\u4e3a",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\uff0c\u4f46\u662f\u540e\u671f\u7684\u4e0a\u6da8\u6982\u7387\u53ef\u80fd\u4e0d\u540c\u3002"]}),Object(r.jsxs)(j.a.Paragraph,{children:["\u60a8\u53ea\u80fd",Object(r.jsx)(j.a.Text,{strong:!0,children:"\u9009\u62e9\u5176\u4e2d\u4e00\u79cd"}),"\u8fdb\u884c\u4ea4\u6613\uff0c\u5e76\u4e14\u5fc5\u987b\u5728",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point0"}),Object(r.jsxs)(j.a.Text,{strong:!0,children:["\u8d2d\u4e70",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"300"}),"\u80a1"]}),"\u540e\uff0c\u624d\u80fd\u8fdb\u5165\u4ea4\u6613\u5e02\u573a\u8fdb\u884c\u4ea4\u6613\u3002"]}),Object(r.jsxs)(j.a.Paragraph,{children:["\u60a8\u73b0\u5728\u62e5\u6709",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"5000"}),"\u4e2a\u865a\u62df\u91d1\u5e01\u4f5c\u4e3a\u6295\u8d44\u672c\u91d1\uff0c",Object(r.jsxs)("b",{children:["\u80a1\u7968\u7684\u6240\u6709\u4ea4\u6613\u7b56\u7565",Object(r.jsx)(j.a.Text,{strong:!0,children:"\u7531\u60a8\u672c\u4eba\u72ec\u7acb\u4f5c\u51fa"})]}),"\uff0c\u76c8\u4e8f\u7531\u60a8\u672c\u4eba\u627f\u62c5\u3002"]}),Object(r.jsxs)(j.a.Paragraph,{children:["\u5f53\u524d\u80a1\u4ef7\u5747\u4e3a",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\uff0c\u8bf7\u95ee\u60a8\u9009\u62e9\u8d2d\u5165",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"300"}),"\u80a1\u7684\u54ea\u53ea\u80a1\u7968\uff1f"]})]}):30===c&&Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(j.a.Paragraph,{children:["\u73b0\u5728\u8fdb\u5165\u8d44\u4ea7\u5206\u914d\u9636\u6bb5",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point0"}),"\u3002",Object(r.jsx)(j.a.Text,{strong:!0,children:"\u6295\u8d44\u987e\u95ee\u8003\u5bdf\u5e02\u573a\u884c\u60c5\u4e0e\u8be5\u80a1\u7968\u5386\u53f2\u8d70\u5411\u540e\uff0c\u8ba4\u4e3a\u5e02\u573a\u4e0a\u201c\u7532\u3001\u4e59\u3001\u4e19\u3001\u4e01\u3001\u620a\u201d\u8fd9\u4e94\u53ea\u80a1\u7968\u80a1\u7968\u4e0a\u6da8\u6982\u7387\u8f83\u5927\uff0c\u5efa\u8bae\u60a8\u4e70\u5165\u3002"})]}),Object(r.jsxs)(j.a.Paragraph,{children:["\u8fd9\u4e94\u53ea\u80a1\u7968\u5728",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point0"}),"\u524d\u671f\u8d70\u52bf\u76f8\u4f3c\uff0c\u5f53\u524d\u80a1\u4ef7\u5747\u4e3a",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\uff0c\u4f46\u662f\u540e\u671f\u7684\u4e0a\u6da8\u6982\u7387\u53ef\u80fd\u4e0d\u540c\u3002"]}),Object(r.jsxs)(j.a.Paragraph,{children:["\u60a8\u53ea\u80fd",Object(r.jsx)(j.a.Text,{strong:!0,children:"\u9009\u62e9\u5176\u4e2d\u4e00\u79cd"}),"\u8fdb\u884c\u4ea4\u6613\uff0c\u5e76\u4e14\u5fc5\u987b\u5728",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point0"}),Object(r.jsxs)(j.a.Text,{strong:!0,children:["\u8d2d\u4e70",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"300"}),"\u80a1"]}),"\u540e\uff0c\u624d\u80fd\u8fdb\u5165\u4ea4\u6613\u5e02\u573a\u8fdb\u884c\u4ea4\u6613\u3002"]}),Object(r.jsxs)(j.a.Paragraph,{children:["\u60a8\u73b0\u5728\u62e5\u6709",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"5000"}),"\u4e2a\u865a\u62df\u91d1\u5e01\u4f5c\u4e3a\u6295\u8d44\u672c\u91d1\uff0c\u5f53\u524d\u80a1\u4ef7\u5747\u4e3a",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\uff0c\u8bf7\u60a8\u5728",Object(r.jsxs)("b",{children:[Object(r.jsx)(j.a.Text,{strong:!0,children:"\u53c2\u8003\u6295\u8d44\u987e\u95ee\u7684\u5efa\u8bae"}),"\u540e\uff0c",Object(r.jsx)(j.a.Text,{strong:!0,children:"\u81ea\u884c\u4f5c\u51fa\u6295\u8d44\u51b3\u7b56"})]}),"\uff0c\u76c8\u4e8f\u7531\u60a8\u672c\u4eba\u627f\u62c5\u3002"]}),Object(r.jsxs)(j.a.Paragraph,{children:["\u8bf7\u95ee\u60a8\u9009\u62e9\u8d2d\u5165",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"300"}),"\u80a1\u7684\u54ea\u53ea\u80a1\u7968\uff1f"]})]}):10===c?Object(r.jsxs)(j.a,{children:[Object(r.jsx)(j.a.Paragraph,{children:Object(r.jsxs)(j.a.Text,{strong:!0,children:[Object(r.jsx)("b",{children:"\u6295\u8d44\u987e\u95ee\u8003\u5bdf\u5e02\u573a\u884c\u60c5\u4e0e\u8be5\u80a1\u7968\u5386\u53f2\u8d70\u5411\u540e"}),"\uff0c",Object(r.jsxs)(j.a.Text,{mark:!0,children:["\u5e2e\u60a8\u8d2d\u5165",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"300"}),"\u80a1",k.a[m],"\u80a1\u7968"]}),"\uff0c\u4e70\u5165\u4ef7\u4e3a",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01"]})}),Object(r.jsx)(j.a.Paragraph,{children:"\u4e70\u5165\u540e\uff0c\u80a1\u7968\u7684\u5176\u4ed6\u6240\u6709\u4ea4\u6613\u51b3\u7b56\u7531\u60a8\u672c\u4eba\u72ec\u7acb\u4f5c\u51fa\uff0c\u76c8\u4e8f\u7531\u60a8\u672c\u4eba\u627f\u62c5\u3002"})]}):20===c?Object(r.jsxs)(j.a,{children:[Object(r.jsx)(j.a.Paragraph,{children:Object(r.jsxs)(j.a.Text,{strong:!0,children:[Object(r.jsx)("b",{children:"\u60a8\u81ea\u884c\u9009\u62e9\u8d2d\u5165"}),Object(r.jsx)(j.a.Text,{keyboard:!0,children:"300"}),"\u80a1",k.a[m],"\u80a1\u7968\uff0c\u4e70\u5165\u4ef7\u4e3a",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\u3002"]})}),Object(r.jsx)(j.a.Paragraph,{children:"\u73b0\u5728\uff0c\u60a8\u7684\u8d44\u4ea7\u5206\u914d\u60c5\u51b5\u5982\u4e0b\u8868\uff1a"})]}):30===c&&Object(r.jsxs)(j.a,{children:[Object(r.jsx)(j.a.Paragraph,{children:Object(r.jsxs)(j.a.Text,{strong:!0,children:["\u60a8",Object(r.jsx)("b",{children:"\u5728\u6295\u8d44\u987e\u95ee\u7684\u5efa\u8bae\u4e0b\uff0c\u81ea\u884c\u9009\u62e9\u8d2d\u5165"}),Object(r.jsx)(j.a.Text,{keyboard:!0,children:"300"}),"\u80a1",k.a[m],"\u80a1\u7968\uff0c\u4e70\u5165\u4ef7\u4e3a",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\u3002"]})}),Object(r.jsx)(j.a.Paragraph,{children:"\u73b0\u5728\uff0c\u60a8\u7684\u8d44\u4ea7\u5206\u914d\u60c5\u51b5\u5982\u4e0b\u8868\uff1a"})]})}),1===v?Object(r.jsxs)(a.b,{bordered:!0,column:1,title:"\u8d44\u4ea7\u914d\u7f6e",children:[Object(r.jsx)(a.b.Item,{label:"\u5f53\u524d\u80a1\u4ef7",children:"10"}),Object(r.jsx)(a.b.Item,{label:"\u6210\u672c",children:"0"}),Object(r.jsx)(a.b.Item,{label:"\u6301\u4ed3",children:"0"}),Object(r.jsx)(a.b.Item,{label:"\u5f53\u524d\u76c8\u4e8f",children:"0"}),Object(r.jsx)(a.b.Item,{label:"\u603b\u76c8\u4e8f",children:"0"}),Object(r.jsx)(a.b.Item,{label:"\u73b0\u91d1\u4f59\u989d",children:"5000"}),Object(r.jsx)(a.b.Item,{label:"\u603b\u8d44\u4ea7",children:"5000"})]}):Object(r.jsxs)(a.b,{bordered:!0,column:1,title:"\u8d44\u4ea7\u914d\u7f6e",children:[Object(r.jsx)(a.b.Item,{label:"\u5f53\u524d\u80a1\u4ef7",children:"10.0"}),Object(r.jsx)(a.b.Item,{label:"\u6210\u672c",children:"10.0"}),Object(r.jsx)(a.b.Item,{label:"\u6301\u4ed3",children:"300"}),Object(r.jsx)(a.b.Item,{label:"\u5f53\u524d\u76c8\u4e8f",children:"0"}),Object(r.jsx)(a.b.Item,{label:"\u603b\u76c8\u4e8f",children:"0"}),Object(r.jsx)(a.b.Item,{label:"\u73b0\u91d1\u4f59\u989d",children:"2000"}),Object(r.jsx)(a.b.Item,{label:"\u80a1\u7968\u5e02\u503c",children:"3000"}),Object(r.jsx)(a.b.Item,{label:"\u603b\u8d44\u4ea7",children:"5000"})]})]}):Object(r.jsx)("div",{id:"step",children:Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(j.a.Title,{level:5,children:["\u63a5\u4e0b\u6765\uff0c\u8fdb\u5165\u80a1\u7968\u4ea4\u6613\u73af\u8282\u3002\u60a8\u9009\u62e9\u7684\u80a1\u7968\u4e3a",k.a[m],"\uff0c\u6301\u6709\u6570\u91cf\u4e3a",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"300"}),"\uff0c\u4ee5\u53ca\u73b0\u91d1\u91d1\u5e01",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"2000"}),"\u3002\u63a5\u4e0b\u6765\u60a8\u8fd8\u6709",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"20"}),"\u6b21\u4ea4\u6613\u7684\u673a\u4f1a\uff08",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point 1"}),"\uff5e",Object(r.jsx)(j.a.Text,{keyboard:!0,children:"Point 20"}),"\uff09\u3002"]}),Object(r.jsx)(j.a.Title,{level:5,children:"\u70b9\u51fb\u786e\u8ba4\u8fdb\u5165\u6b63\u5f0f\u4ea4\u6613\u4efb\u52a1\u3002"})]})}),Object(r.jsxs)(b.a,{justify:"center",children:[Object(r.jsx)(n.a,{span:4,children:Object(r.jsx)(d.a,{type:"primary",onClick:A,children:v<p.length-1?"\u4e0b\u4e00\u6b65":"\u786e\u8ba4"})}),Object(r.jsx)(n.a,{span:4,children:Object(r.jsx)(d.a,{disabled:0===v,onClick:function(){v>0&&S(v-1)},children:"\u4e0a\u4e00\u6b65"})})]})]})}}}]);
//# sourceMappingURL=18.469b70bd.chunk.js.map