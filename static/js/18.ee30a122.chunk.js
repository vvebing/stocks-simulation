(this["webpackJsonpstocks-simulation"]=this["webpackJsonpstocks-simulation"]||[]).push([[18],{158:function(e,c,t){"use strict";t.r(c);t(114);var a=t(66),j=t(14),r=(t(251),t(306)),b=(t(179),t(184)),n=(t(180),t(185)),l=(t(490),t(486)),s=(t(191),t(199)),i=(t(218),t(237)),d=(t(65),t(27)),x=(t(491),t(487)),h=(t(113),t(48)),O=t(177),o=t(0),k=t(87),u=["\u51c6\u5907","\u8bf4\u660e","\u9009\u80a1","\u786e\u8ba4"];c.default=function(e){var c=e.trades,t=e.groupID,p=e.handleStart,y=Object(o.useState)(),T=Object(O.a)(y,2),m=T[0],P=T[1],g=Object(o.useState)(0),f=Object(O.a)(g,2),I=f[0],v=f[1],S=Object(o.useState)(60),C=Object(O.a)(S,2),w=C[0],J=C[1],M=Object(o.useState)(!0),D=Object(O.a)(M,2),E=D[0],N=D[1];Object(k.d)((function(){w>0?J(w-1):N(!1)}),E?1e3:null);var q=function(){if(I>=1&&void 0===m){if(10!==t)return 1!==I&&v(1),h.b.warning("\u8bf7\u9009\u62e9\u4e00\u652f\u80a1\u7968");var e=[];k.a.forEach((function(t,a){-1===c.findIndex((function(e){return+e.select===a}))&&e.push(a)})),P(e[Math.floor(Math.random()*e.length)])}if(I>=3)return p(m);I<u.length-1&&v(I+1),N(!1)};return Object(j.jsxs)("div",{id:"preparation",children:[Object(j.jsx)(x.a,{current:I,children:u.map((function(e){return Object(j.jsx)(x.a.Step,{title:e},e)}))}),0===I?Object(j.jsx)(i.a,{title:"\u7b2c".concat(c.length+1,"\u8f6e\u5b9e\u9a8c\u5373\u5c06\u5f00\u59cb"),subTitle:"\u5982\u679c\u60a8\u5df2\u51c6\u5907\u5c31\u7eea\uff0c\u8bf7\u70b9\u51fb\u5f00\u59cb\uff01",extra:[Object(j.jsx)(d.a,{type:"primary",disabled:E,onClick:q,children:E?"\u5efa\u8bae\u4f11\u606f".concat(w,"\u79d2\u540e\u5f00\u59cb"):"\u5f00\u59cb"},"countdown"),E&&Object(j.jsx)(d.a,{type:"link",onClick:q,children:"\u51c6\u5907\u5c31\u7eea\uff0c\u7acb\u5373\u5f00\u59cb"},"start")]}):1===I||2===I?Object(j.jsxs)("div",{id:"step",children:[Object(j.jsx)(b.a,{justify:"space-around",children:k.a.map((function(e,a){var r=-1===c.findIndex((function(e){return e.select===a}));return Object(j.jsx)(n.a,{span:3,children:Object(j.jsx)(l.a,{hoverable:!0,title:"".concat(e,"\u80a1\u7968"),onClick:function(){return 1===I&&10!==t&&r&&P(a)},children:Object(j.jsx)(s.a,{checked:m===a,disabled:2===I||!r||10===t})})},a)}))}),Object(j.jsx)("div",{className:"introduce",children:1===I?10===t?Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(r.a.Paragraph,{children:["\u73b0\u5728\u8fdb\u5165\u8d44\u4ea7\u5206\u914d\u9636\u6bb5",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"Point0"}),"\u3002\u5e02\u573a\u4e0a\u6709\u201c\u7532\u3001\u4e59\u3001\u4e19\u3001\u4e01\u3001\u620a\u3001\u5df1\u3001\u5e9a\u3001\u8f9b\u201d\u516b\u53ea\u80a1\u7968\uff0c\u8fd9\u516b\u53ea\u80a1\u7968\u5f53\u524d\u80a1\u4ef7\u5747\u4e3a",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\uff0c\u4f46\u662f\u540e\u671f\u7684\u4e0a\u6da8\u6982\u7387\u53ef\u80fd\u4e0d\u540c\u3002"]}),Object(j.jsxs)(r.a.Paragraph,{children:["\u60a8\u5c06\u8fdb\u884c\u4e94\u8f6e\u4ea4\u6613\uff0c\u6bcf\u8f6e\u53ea\u5bf9\u4e00\u652f\u80a1\u7968\u8fdb\u884c\u4e70\u5356\uff0c\u5e76\u4e14\u5fc5\u987b\u5728",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"Point0"}),"\u901a\u8fc7\u81ea\u5df1\u8d2d\u4e70\u6216\u8005\u63a5\u53d7\u4ed6\u4eba\u8d60\u9001\u5f97\u5230",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\u80a1\u80a1\u7968\u540e\uff0c\u624d\u80fd\u8fdb\u5165\u4ea4\u6613\u5e02\u573a\u8fdb\u884c\u4ea4\u6613\u3002"]}),Object(j.jsxs)(r.a.Paragraph,{children:["\u60a8\u73b0\u5728\u62e5\u6709",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"2000"}),"\u91d1\u5e01\u7684\u73b0\u91d1\u3002\u53e6\u5916\uff0c\u6295\u8d44\u987e\u95ee\u60a8\u9009\u62e9\u4e00\u652f\u80a1\u7968\uff0c\u5e76",Object(j.jsx)("b",{children:"\u8d60\u9001"}),Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\u80a1\u8be5\u80a1\u7968\u7ed9\u60a8\u3002"]})]}):20===t?Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(r.a.Paragraph,{children:["\u73b0\u5728\u8fdb\u5165\u8d44\u4ea7\u5206\u914d\u9636\u6bb5",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"Point0"}),"\u3002\u5e02\u573a\u4e0a\u6709\u201c\u7532\u3001\u4e59\u3001\u4e19\u3001\u4e01\u3001\u620a\u3001\u5df1\u3001\u5e9a\u3001\u8f9b\u201d\u516b\u53ea\u80a1\u7968\uff0c\u8fd9\u516b\u53ea\u80a1\u7968\u5f53\u524d\u80a1\u4ef7\u5747\u4e3a",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\uff0c\u4f46\u662f\u540e\u671f\u7684\u4e0a\u6da8\u6982\u7387\u53ef\u80fd\u4e0d\u540c\u3002"]}),Object(j.jsxs)(r.a.Paragraph,{children:["\u60a8\u5c06\u8fdb\u884c\u4e94\u8f6e\u4ea4\u6613\uff0c\u6bcf\u8f6e\u53ea\u5bf9\u4e00\u652f\u80a1\u7968\u8fdb\u884c\u4e70\u5356\uff0c\u5e76\u4e14\u5fc5\u987b\u5728",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"Point0"}),"\u901a\u8fc7\u81ea\u5df1\u8d2d\u4e70\u6216\u8005\u63a5\u53d7\u4ed6\u4eba\u8d60\u9001\u5f97\u5230",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\u80a1\u80a1\u7968\u540e\uff0c\u624d\u80fd\u8fdb\u5165\u4ea4\u6613\u5e02\u573a\u8fdb\u884c\u4ea4\u6613\u3002"]}),Object(j.jsxs)(r.a.Paragraph,{children:["\u60a8\u73b0\u5728\u62e5\u6709",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"5000"}),"\u91d1\u5e01\u7684\u73b0\u91d1\u4f5c\u4e3a\u672c\u91d1\u3002\u80a1\u7968\u7684\u6240\u6709\u4ea4\u6613\u90fd\u7531\u60a8\u672c\u4eba\u72ec\u7acb\u4f5c\u51fa\uff0c\u76c8\u4e8f\u7531\u60a8\u672c\u4eba\u627f\u62c5\uff0c\u73b0\u5728\u60a8\u9700\u8981",Object(j.jsx)("b",{children:"\u81ea\u5df1\u9009\u62e9"}),"\u4e00\u652f\u80a1\u7968\u5e76\u4e70\u5165",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\u80a1\u3002"]}),Object(j.jsx)(r.a.Paragraph,{children:"\u8bf7\u95ee\u60a8\u9009\u62e9\u8d2d\u5165\u54ea\u652f\u80a1\u7968\uff1f"})]}):30===t&&Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(r.a.Paragraph,{children:["\u73b0\u5728\u8fdb\u5165\u8d44\u4ea7\u5206\u914d\u9636\u6bb5",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"Point0"}),"\u3002\u5e02\u573a\u4e0a\u6709\u201c\u7532\u3001\u4e59\u3001\u4e19\u3001\u4e01\u3001\u620a\u3001\u5df1\u3001\u5e9a\u3001\u8f9b\u201d\u516b\u53ea\u80a1\u7968\uff0c\u8fd9\u516b\u53ea\u80a1\u7968\u5f53\u524d\u80a1\u4ef7\u5747\u4e3a",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"10"}),"\u91d1\u5e01\uff0c\u4f46\u662f\u540e\u671f\u7684\u4e0a\u6da8\u6982\u7387\u53ef\u80fd\u4e0d\u540c\u3002"]}),Object(j.jsxs)(r.a.Paragraph,{children:["\u60a8\u5c06\u8fdb\u884c\u4e94\u8f6e\u4ea4\u6613\uff0c\u6bcf\u8f6e\u53ea\u5bf9\u4e00\u652f\u80a1\u7968\u8fdb\u884c\u4e70\u5356\uff0c\u5e76\u4e14\u5fc5\u987b\u5728",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"Point0"}),"\u901a\u8fc7\u81ea\u5df1\u8d2d\u4e70\u6216\u8005\u63a5\u53d7\u4ed6\u4eba\u8d60\u9001\u5f97\u5230",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\u80a1\u80a1\u7968\u540e\uff0c\u624d\u80fd\u8fdb\u5165\u4ea4\u6613\u5e02\u573a\u8fdb\u884c\u4ea4\u6613\u3002"]}),Object(j.jsxs)(r.a.Paragraph,{children:["\u60a8\u73b0\u5728\u62e5\u6709",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"5000"}),"\u91d1\u5e01\u7684\u73b0\u91d1\u4f5c\u4e3a\u672c\u91d1\u3002\u6295\u8d44\u987e\u95ee\u8003\u5bdf\u5e02\u573a\u884c\u60c5\u4e0e\u80a1\u7968\u5386\u53f2\u8d70\u5411\u540e\uff0c\u8ba4\u4e3a\u5728\u8fd9\u516b\u652f\u80a1\u7968\u4e2d\uff0c\u201c\u7532\u3001\u4e59\u3001\u4e19\u3001\u4e01\u3001\u620a\u201d\u7684\u4e0a\u6da8\u6982\u7387\u8f83\u5927\uff0c\u63a8\u8350\u60a8\u4e70\u5165\u3002\u73b0\u5728\u60a8\u9700\u8981\u9009\u62e9\u4e00\u652f\u80a1\u7968\u5e76\u4e70\u5165",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\u80a1\uff0c\u8bf7\u60a8\u5728",Object(j.jsx)("b",{children:"\u53c2\u8003\u6295\u8d44\u987e\u95ee\u7684\u5efa\u8bae\u540e\u81ea\u884c\u4f5c\u51fa\u9009\u62e9"}),"\u3002"]}),Object(j.jsx)(r.a.Paragraph,{children:"\u8bf7\u95ee\u60a8\u9009\u62e9\u8d2d\u5165\u54ea\u652f\u80a1\u7968\uff1f"})]}):10===t?Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(r.a.Paragraph,{children:["\u6295\u8d44\u987e\u95ee\u9009\u62e9\u4e86",k.a[m],"\u80a1\u7968\uff0c\u5e76",Object(j.jsxs)("b",{children:["\u8d60\u9001\u60a8",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\u80a1",k.a[m],"\u80a1\u7968"]}),"\uff0c\u5373\u76ee\u524d\u60a8\u62e5\u6709\u4ef7\u503c",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"5000"}),"\u91d1\u5e01\u7684\u603b\u8d44\u4ea7\uff08\u73b0\u91d1\uff1a2000\uff0c\u80a1\u7968\uff1a300 \xd7 10 = 3000\uff09\u3002"]}),Object(j.jsx)(r.a.Paragraph,{children:"\u540e\u7eed\u80a1\u7968\u7684\u6240\u6709\u4ea4\u6613\u51b3\u7b56\u90fd\u7531\u60a8\u672c\u4eba\u72ec\u7acb\u4f5c\u51fa\uff0c\u76c8\u4e8f\u7531\u60a8\u672c\u4eba\u627f\u62c5\u3002"})]}):20===t?Object(j.jsx)(r.a,{children:Object(j.jsxs)(r.a.Paragraph,{children:[Object(j.jsxs)("b",{children:["\u60a8\u81ea\u884c\u9009\u62e9\u5e76\u8d2d\u5165\u4e86",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\u80a1",k.a[m],"\u80a1\u7968"]}),"\uff0c\u5373\u76ee\u524d\u60a8\u62e5\u6709\u4ef7\u503c",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"5000"}),"\u91d1\u5e01\u7684\u603b\u8d44\u4ea7\uff08\u73b0\u91d1\uff1a2000\uff0c\u80a1\u7968\uff1a300 \xd7 10 = 3000\uff09\u3002"]})}):30===t&&Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(r.a.Paragraph,{children:[Object(j.jsxs)("b",{children:["\u60a8\u5728\u6295\u8d44\u987e\u95ee\u7684\u5efa\u8bae\u4e0b\uff0c\u9009\u62e9\u5e76\u8d2d\u5165\u4e86",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\u80a1",k.a[m],"\u80a1\u7968"]}),"\uff0c\u5373\u76ee\u524d\u60a8\u62e5\u6709\u4ef7\u503c",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"5000"}),"\u91d1\u5e01\u7684\u603b\u8d44\u4ea7\uff08\u73b0\u91d1\uff1a2000\uff0c\u80a1\u7968\uff1a300 \xd7 10 = 3000\uff09\u3002"]}),Object(j.jsx)(r.a.Paragraph,{children:"\u540e\u7eed\u80a1\u7968\u7684\u6240\u6709\u4ea4\u6613\u51b3\u7b56\u90fd\u7531\u60a8\u672c\u4eba\u72ec\u7acb\u4f5c\u51fa\uff0c\u76c8\u4e8f\u7531\u60a8\u672c\u4eba\u627f\u62c5\u3002"})]})}),1===I?Object(j.jsxs)(a.b,{bordered:!0,column:1,title:"\u8d44\u4ea7\u914d\u7f6e",children:[Object(j.jsx)(a.b.Item,{label:"\u5f53\u524d\u80a1\u4ef7",children:"10"}),Object(j.jsx)(a.b.Item,{label:"\u6210\u672c",children:"0"}),Object(j.jsx)(a.b.Item,{label:"\u6301\u4ed3",children:"0"}),Object(j.jsx)(a.b.Item,{label:"\u5f53\u524d\u76c8\u4e8f",children:"0"}),Object(j.jsx)(a.b.Item,{label:"\u603b\u76c8\u4e8f",children:"0"}),Object(j.jsx)(a.b.Item,{label:"\u73b0\u91d1\u4f59\u989d",children:10===t?2e3:5e3}),Object(j.jsx)(a.b.Item,{label:"\u603b\u8d44\u4ea7",children:10===t?2e3:5e3})]}):Object(j.jsxs)(a.b,{bordered:!0,column:1,title:"\u8d44\u4ea7\u914d\u7f6e",children:[Object(j.jsx)(a.b.Item,{label:"\u5f53\u524d\u80a1\u4ef7",children:"10.0"}),Object(j.jsx)(a.b.Item,{label:"\u6210\u672c",children:"10.0"}),Object(j.jsx)(a.b.Item,{label:"\u6301\u4ed3",children:"300"}),Object(j.jsx)(a.b.Item,{label:"\u5f53\u524d\u76c8\u4e8f",children:"0"}),Object(j.jsx)(a.b.Item,{label:"\u603b\u76c8\u4e8f",children:"0"}),Object(j.jsx)(a.b.Item,{label:"\u73b0\u91d1\u4f59\u989d",children:"2000"}),Object(j.jsx)(a.b.Item,{label:"\u80a1\u7968\u5e02\u503c",children:"3000"}),Object(j.jsx)(a.b.Item,{label:"\u603b\u8d44\u4ea7",children:"5000"})]})]}):Object(j.jsx)("div",{id:"step",children:Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(r.a.Title,{level:5,children:["\u63a5\u4e0b\u6765\uff0c\u8fdb\u5165\u80a1\u7968\u4ea4\u6613\u73af\u8282\u3002\u60a8\u6301\u6709\u7684\u80a1\u7968\u4e3a",k.a[m],"\uff0c\u6301\u6709\u6570\u91cf\u4e3a",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"300"}),"\uff0c\u4ee5\u53ca\u73b0\u91d1\u91d1\u5e01",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"2000"}),"\u3002\u63a5\u4e0b\u6765\u60a8\u8fd8\u6709",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"20"}),"\u6b21\u4ea4\u6613\u7684\u673a\u4f1a\uff08",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"Point 1"}),"\uff5e",Object(j.jsx)(r.a.Text,{keyboard:!0,children:"Point 20"}),"\uff09\u3002"]}),Object(j.jsx)(r.a.Title,{level:5,children:"\u70b9\u51fb\u786e\u8ba4\u8fdb\u5165\u6b63\u5f0f\u4ea4\u6613\u4efb\u52a1\u3002"})]})}),Object(j.jsxs)(b.a,{justify:"center",children:[Object(j.jsx)(n.a,{span:4,children:Object(j.jsx)(d.a,{type:"primary",onClick:q,children:I<u.length-1?"\u4e0b\u4e00\u6b65":"\u786e\u8ba4"})}),Object(j.jsx)(n.a,{span:4,children:Object(j.jsx)(d.a,{disabled:0===I,onClick:function(){I>0&&v(I-1)},children:"\u4e0a\u4e00\u6b65"})})]})]})}}}]);
//# sourceMappingURL=18.ee30a122.chunk.js.map