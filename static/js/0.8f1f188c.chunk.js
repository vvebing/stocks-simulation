(this["webpackJsonpstocks-simulation"]=this["webpackJsonpstocks-simulation"]||[]).push([[0],{195:function(t,e,c){"use strict";c(30),c(319)},261:function(t,e,c){"use strict";var a=c(0),r=Object(a.createContext)({});e.a=r},262:function(t,e,c){"use strict";var a=c(3),r=c(1),n=c(11),o=c(0),s=c(4),i=c.n(s),l=c(261),f=c(36),u=function(t,e){var c={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(c[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(c[a[r]]=t[a[r]])}return c};var b=["xs","sm","md","lg","xl","xxl"],p=o.forwardRef((function(t,e){var c,s=o.useContext(f.b),p=s.getPrefixCls,O=s.direction,j=o.useContext(l.a),d=j.gutter,m=j.wrap,y=t.prefixCls,v=t.span,g=t.order,h=t.offset,x=t.push,w=t.pull,C=t.className,P=t.children,E=t.flex,N=t.style,A=u(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),R=p("col",y),k={};b.forEach((function(e){var c,o={},s=t[e];"number"===typeof s?o.span=s:"object"===Object(n.a)(s)&&(o=s||{}),delete A[e],k=Object(r.a)(Object(r.a)({},k),(c={},Object(a.a)(c,"".concat(R,"-").concat(e,"-").concat(o.span),void 0!==o.span),Object(a.a)(c,"".concat(R,"-").concat(e,"-order-").concat(o.order),o.order||0===o.order),Object(a.a)(c,"".concat(R,"-").concat(e,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(a.a)(c,"".concat(R,"-").concat(e,"-push-").concat(o.push),o.push||0===o.push),Object(a.a)(c,"".concat(R,"-").concat(e,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(a.a)(c,"".concat(R,"-rtl"),"rtl"===O),c))}));var S=i()(R,(c={},Object(a.a)(c,"".concat(R,"-").concat(v),void 0!==v),Object(a.a)(c,"".concat(R,"-order-").concat(g),g),Object(a.a)(c,"".concat(R,"-offset-").concat(h),h),Object(a.a)(c,"".concat(R,"-push-").concat(x),x),Object(a.a)(c,"".concat(R,"-pull-").concat(w),w),c),C,k),B=Object(r.a)({},N);return d&&(B=Object(r.a)(Object(r.a)(Object(r.a)({},d[0]>0?{paddingLeft:d[0]/2,paddingRight:d[0]/2}:{}),d[1]>0?{paddingTop:d[1]/2,paddingBottom:d[1]/2}:{}),B)),E&&(B.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(E),"auto"!==E||!1!==m||B.minWidth||(B.minWidth=0)),o.createElement("div",Object(r.a)({},A,{style:B,className:S,ref:e}),P)}));p.displayName="Col",e.a=p},319:function(t,e,c){},386:function(t,e,c){"use strict";var a=c(1),r=c(3),n=c(11),o=c(5),s=c(0),i=c(4),l=c.n(i),f=c(36),u=c(261),b=c(31),p=c(34),O=function(t,e){var c={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(c[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(c[a[r]]=t[a[r]])}return c},j=(Object(b.a)("top","middle","bottom","stretch"),Object(b.a)("start","end","center","space-around","space-between"),s.forwardRef((function(t,e){var c,i=t.prefixCls,b=t.justify,j=t.align,d=t.className,m=t.style,y=t.children,v=t.gutter,g=void 0===v?0:v,h=t.wrap,x=O(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=s.useContext(f.b),C=w.getPrefixCls,P=w.direction,E=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),N=Object(o.a)(E,2),A=N[0],R=N[1],k=s.useRef(g);s.useEffect((function(){var t=p.a.subscribe((function(t){var e=k.current||0;(!Array.isArray(e)&&"object"===Object(n.a)(e)||Array.isArray(e)&&("object"===Object(n.a)(e[0])||"object"===Object(n.a)(e[1])))&&R(t)}));return function(){return p.a.unsubscribe(t)}}),[]);var S=C("row",i),B=function(){var t=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(e,c){if("object"===Object(n.a)(e))for(var a=0;a<p.b.length;a++){var r=p.b[a];if(A[r]&&void 0!==e[r]){t[c]=e[r];break}}else t[c]=e||0})),t}(),I=l()(S,(c={},Object(r.a)(c,"".concat(S,"-no-wrap"),!1===h),Object(r.a)(c,"".concat(S,"-").concat(b),b),Object(r.a)(c,"".concat(S,"-").concat(j),j),Object(r.a)(c,"".concat(S,"-rtl"),"rtl"===P),c),d),J=Object(a.a)(Object(a.a)(Object(a.a)({},B[0]>0?{marginLeft:B[0]/-2,marginRight:B[0]/-2}:{}),B[1]>0?{marginTop:B[1]/-2,marginBottom:B[1]/2}:{}),m);return s.createElement(u.a.Provider,{value:{gutter:B,wrap:h}},s.createElement("div",Object(a.a)({},x,{className:I,style:J,ref:e}),y))})));j.displayName="Row",e.a=j}}]);
//# sourceMappingURL=0.8f1f188c.chunk.js.map