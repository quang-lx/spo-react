(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[5],{612:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var r=a(6),n=a(0),s=a(1),o=a(7),c=a.n(o),i=a(26),l=a(141),d=a(61),u=a(45),b=a(63),m=a(35),p=a(64),f=a(71),y=a(57),j="ui-layout",g={start:"ui-layout__start",main:"ui-layout__main",end:"ui-layout__end",gap:"ui-layout__gap",reducedStart:"ui-layout--reduced__start",reducedMain:"ui-layout--reduced__main",reducedEnd:"ui-layout--reduced__end"},h=function(){var e=function e(t){var a=Object(u.c)(),r=Object(b.a)(e.displayName,a.telemetry),s=r.setStart,o=r.setEnd;s();var i=t.reducing,l=t.disappearing,d=t.renderStartArea,h=t.renderMainArea,O=t.renderEndArea,v=t.renderGap,S=t.alignItems,C=t.debug,N=t.gap,E=t.justifyItems,_=t.main,P=t.mainSize,k=t.end,M=t.endSize,T=t.start,A=t.startSize,w=t.vertical,I=t.className,R=t.design,z=t.styles,F=t.variables,Z=Object(m.a)(t),B=Object(p.a)(e.handledProps,t),W=Object(f.a)(t.accessibility,{debugName:e.displayName,rtl:a.rtl}),x=Object(y.a)(e.displayName,{className:j,mapPropsToStyles:function(){return{alignItems:S,debug:C,gap:N,justifyItems:E,hasMain:!!_,mainSize:P,hasEnd:!!k,endSize:M,hasStart:!!T,startSize:A,vertical:w}},mapPropsToInlineStyles:function(){return{className:I,design:R,styles:z,variables:F}},rtl:a.rtl}).classes,H=d(Object.assign({},t,{classes:x})),D=h(Object.assign({},t,{classes:x})),G=O(Object.assign({},t,{classes:x}));if(!H&&!D&&!G)return o(),n.createElement(Z,W("root",Object.assign({className:x.root},B)));var J=1===[H,D,G].filter(Boolean).length;if(l&&J)return o(),T||_||k;if(i&&J){var K=c()(x.root,H&&g.reducedStart,D&&g.reducedMain,G&&g.reducedEnd);return o(),n.createElement(Z,W("root",Object.assign({className:K},B)),T||_||k)}return o(),n.createElement(Z,W("root",Object.assign({className:x.root},B)),H,H&&D&&v(Object.assign({},t,{classes:x})),D,(H||D)&&G&&v(Object.assign({},t,{classes:x})),G)};return e.displayName="Layout",e.propTypes=Object.assign({},i.a.createCommon({accessibility:!1,children:!1,content:!1}),{debug:s.bool,renderStartArea:s.func,renderMainArea:s.func,renderEndArea:s.func,renderGap:s.func,rootCSS:s.object,start:s.any,startCSS:s.object,startSize:s.string,main:s.any,mainCSS:s.object,mainSize:s.string,end:s.any,endCSS:s.object,endSize:s.string,justifyItems:s.any,alignItems:s.any,gap:s.string,reducing:s.bool,disappearing:s.bool,vertical:s.bool}),e.defaultProps={startSize:"auto",mainSize:"1fr",endSize:"auto",renderStartArea:function(e){var t=e.start,a=e.classes;return t&&n.createElement("div",Object(r.a)({className:c()(g.start,a.start)},l.a.getAttributes({forElements:[t]})),t)},renderMainArea:function(e){var t=e.main,a=e.classes;return t&&n.createElement("div",Object(r.a)({className:c()(g.main,a.main)},l.a.getAttributes({forElements:[t]})),t)},renderEndArea:function(e){var t=e.end,a=e.classes;return t&&n.createElement("div",Object(r.a)({className:c()(g.end,a.end)},l.a.getAttributes({forElements:[t]})),t)},renderGap:function(e){var t=e.gap,a=e.classes;return t&&n.createElement("span",{className:c()(g.gap,a.gap)})}},e.handledProps=Object.keys(e.propTypes),e.create=Object(d.b)({Component:e}),e}()},634:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var r=a(6),n=a(45),s=a(63),o=a(64),c=a(57),i=a(0),l=a(1),d=a(7),u=a.n(d),b=a(585),m=a(141),p=a(26),f=a(61),y=a(612),j="ui-itemlayout",g={header:"ui-itemlayout__header",headerMedia:"ui-itemlayout__headerMedia",main:"ui-itemlayout__main",content:"ui-itemlayout__content",contentMedia:"ui-itemlayout__contentMedia",media:"ui-itemlayout__media",endMedia:"ui-itemlayout__endMedia"},h=function(){var e=function e(t){var a=Object(n.c)(),l=Object(s.a)(e.displayName,a.telemetry),d=l.setStart,p=l.setEnd;d();var f=t.as,h=t.debug,O=t.endMedia,v=t.media,S=t.renderMainArea,C=t.rootCSS,N=t.mediaCSS,E=t.endMediaCSS,_=t.className,P=t.design,k=t.styles,M=t.variables,T=Object(o.a)(e.handledProps,t),A=Object(c.a)(e.displayName,{className:j,mapPropsToInlineStyles:function(){return{className:_,design:P,styles:k,variables:M}},rtl:a.rtl}),w=A.classes,I=A.styles,R=v,z=S(t,w),F=O,Z=u()(g.media,w.media),B=u()(g.endMedia,w.endMedia),W=i.createElement(y.a,Object(r.a)({as:f,className:w.root,styles:I.root,rootCSS:C,alignItems:"center",gap:Object(b.a)(8),debug:h,reducing:!0,start:R&&i.createElement("span",{style:N,className:Z},m.a.createFor({element:R})),main:z,end:F&&i.createElement("span",{style:E,className:B},m.a.createFor({element:F}))},T));return p(),W};return e.displayName="ItemLayout",e.propTypes=Object.assign({},p.a.createCommon({accessibility:!1,children:!1,content:!1}),{contentMedia:l.any,content:l.any,debug:l.bool,header:l.any,endMedia:l.any,headerMedia:l.any,media:l.any,renderContentArea:l.func,renderHeaderArea:l.func,renderMainArea:l.func,rootCSS:l.object,mediaCSS:l.object,headerCSS:l.object,headerMediaCSS:l.object,contentCSS:l.object,contentMediaCSS:l.object,endMediaCSS:l.object}),e.defaultProps={renderMainArea:function(e,t){var a=e.renderHeaderArea,r=e.renderContentArea,n=a(e,t),s=r(e,t);return i.createElement("div",{className:g.main,style:{gridTemplateRows:"1fr 1fr"}},n,s)},renderHeaderArea:function(e,t){var a=e.debug,r=e.header,n=e.headerMedia,s=e.headerCSS,o=e.headerMediaCSS,c=u()(g.header,t.header),l=u()(g.headerMedia,t.headerMedia);return r||n?i.createElement(y.a,{className:c,alignItems:"end",gap:Object(b.a)(8),debug:a,main:m.a.createFor({element:r}),rootCSS:s,end:n&&i.createElement("span",{style:o,className:l},m.a.createFor({element:n}))}):null},renderContentArea:function(e,t){var a=e.debug,r=e.content,n=e.contentMedia,s=e.contentCSS,o=e.contentMediaCSS,c=u()(g.content,t.content),l=u()(g.contentMedia,t.contentMedia);return r||n?i.createElement(y.a,{className:c,alignItems:"start",gap:Object(b.a)(8),debug:a,rootCSS:s,main:m.a.createFor({element:r}),end:n&&i.createElement("span",{style:o,className:l},m.a.createFor({element:n}))}):null}},e.handledProps=Object.keys(e.propTypes),e.create=Object(f.b)({Component:e,mappedProp:"content"}),e}()},637:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,"a",(function(){return r}))},662:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(){return{attributes:{root:{role:"gridcell"}}}}},663:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(23),n=a(28),s=a(8),o=function(){var e;return{attributes:{root:(e={role:"gridcell"},e[r.b]=!0,e)},focusZone:{props:{direction:n.a.bidirectional}},keyActions:{root:{focusCell:{keyCombinations:[{keyCode:s.d.Escape}]}}}}}},670:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var r=a(5),n=a.n(r),s=a(19),o=a.n(s),c=function(){return{attributes:{root:{role:"cell"}}}},i=function(){return{attributes:{root:{role:"columnheader"}}}},l=function(e){return{attributes:{root:{role:"row"}},childBehaviors:{cell:e.header?i:c}}},d=function(){return{attributes:{root:{role:"table"}},childBehaviors:{row:l}}},u=a(45),b=a(63),m=a(35),p=a(64),f=a(71),y=a(57),j=a(560),g=a(3),h=a(1),O=a(0),v=a(62),S=a(61),C=a(26),N=a(455),E=a(10),_="ui-table__cell",P={content:"ui-table__cell__content"},k=function(){var e=O.forwardRef((function(t,a){var r=Object(u.c)(),s=Object(b.a)(e.displayName,r.telemetry),o=s.setStart,c=s.setEnd;o();var i=O.useRef(),l=t.children,d=t.content,j=t.truncateContent,g=t.className,h=t.design,S=t.styles,C=t.variables,k=Object(v.a)(l),M=Object(m.a)(t),T=Object(p.a)(e.handledProps,t),A=Object(f.a)(t.accessibility,{debugName:e.displayName,actionHandlers:{focusCell:function(e){e.preventDefault(),i.current.focus()},performClick:function(e){e.currentTarget===e.target&&(n()(t,"onClick",e,t),e.preventDefault())}},rtl:r.rtl}),w=Object(y.a)(e.displayName,{className:_,mapPropsToStyles:function(){return{truncateContent:j}},mapPropsToInlineStyles:function(){return{className:g,design:h,styles:S,variables:C}},rtl:r.rtl}),I=w.classes,R=w.styles,z=O.createElement(N.a,{innerRef:i},A.unstable_wrapWithFocusZone(O.createElement(M,A("root",Object.assign({className:I.root,ref:a},T)),k?l:E.a.create(d,{defaultProps:function(){return{className:P.content,styles:R.content}}}))));return c(),z}));return e.displayName="TableCell",e.propTypes=Object.assign({},C.a.createCommon({content:!1}),{content:g.i([g.g(["children"]),h.oneOfType([h.arrayOf(g.m),g.m])]),truncateContent:h.bool}),e.handledProps=Object.keys(e.propTypes),e.defaultProps={accessibility:c},e.create=Object(S.b)({Component:e,mappedProp:"content"}),e}(),M=function(){var e=O.forwardRef((function(t,a){var r=Object(u.c)(),s=Object(b.a)(e.displayName,r.telemetry),c=s.setStart,i=s.setEnd;c();var l=O.useRef(),d=t.className,g=t.design,h=t.styles,S=t.items,C=t.header,E=t.compact,_=t.children,P=t.accessibility,M=t.variables,T=t.selected,A=Object(v.a)(_),w=Object(m.a)(t),I=Object(p.a)(e.handledProps,t),R=Object(f.a)(P,{debugName:e.displayName,actionHandlers:{unsetRowTabbable:function(e){l.current.setAttribute("tabindex","-1")},performClick:function(e){e.currentTarget===e.target&&(n()(t,"onClick",e,t),e.preventDefault())}},mapPropsToBehavior:function(){return{selected:T,header:C}},rtl:r.rtl}),z=Object(y.a)(e.displayName,{className:"ui-table__row",mapPropsToStyles:function(){return{header:C,compact:E}},mapPropsToInlineStyles:function(){return{className:d,design:g,styles:h,variables:M}},rtl:r.rtl}).classes,F=O.createElement(N.a,{innerRef:l},R.unstable_wrapWithFocusZone(O.createElement(w,R("root",Object.assign({className:z.root,ref:a},I)),A&&_,!A&&o()(S,(function(e){return k.create(e,{defaultProps:function(){return R("cell",{})},overrideProps:function(e){return{variables:Object(j.a)(M,e.variables)}}})})))));return i(),F}));return e.displayName="TableRow",e.propTypes=Object.assign({},C.a.createCommon({content:!1}),{items:g.d,header:h.bool,compact:h.bool,selected:h.bool}),e.handledProps=Object.keys(e.propTypes),e.defaultProps={accessibility:l},e.create=Object(S.b)({Component:e,mappedArrayProp:"items"}),e}(),T="ui-table",A={header:"ui-table__header"},w=function(){var e=O.forwardRef((function(t,a){var r=Object(u.c)(),s=Object(b.a)(e.displayName,r.telemetry),c=s.setStart,i=s.setEnd;c();var l=t.children,d=t.rows,g=t.header,h=t.compact,S=t.accessibility,C=t.className,N=t.design,E=t.styles,_=t.variables,P=Object(v.a)(l),k=Object(m.a)(t),w=Object(p.a)(e.handledProps,t),I=Object(f.a)(S,{debugName:e.displayName,rtl:r.rtl}),R=Object(y.a)(e.displayName,{className:T,mapPropsToInlineStyles:function(){return{className:C,design:N,styles:E,variables:_}},rtl:r.rtl}).classes,z=I.unstable_wrapWithFocusZone(O.createElement(k,I("root",Object.assign({className:R.root,ref:a},w)),P&&l,!P&&M.create(g,{defaultProps:function(){return I("row",{header:!0,compact:h,className:A.header})},overrideProps:function(e){return{variables:Object(j.a)(_,e.variables)}}}),!P&&o()(d,(function(e){return M.create(e,{defaultProps:function(){return I("row",{compact:h,onClick:function(t,a){n()(e,"onClick",t,a)}})},overrideProps:function(e){return{variables:Object(j.a)(_,e.variables)}}})}))));return i(),z}));return e.displayName="Table",e.Cell=k,e.Row=M,e.create=Object(S.b)({Component:e}),e.propTypes=Object.assign({},C.a.createCommon({content:!1}),{header:g.j,rows:g.d,compact:h.bool}),e.handledProps=Object.keys(e.propTypes),e.defaultProps={accessibility:d},e}()},672:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(8),n=a(28),s=a(23),o=function(){var e;return{attributes:{root:(e={role:"gridcell"},e[s.b]=!0,e)}}},c=function(){var e;return{attributes:{root:(e={role:"columnheader"},e[s.b]=!0,e)},keyActions:{root:{performClick:{keyCombinations:[{keyCode:r.d.Enter},{keyCode:r.b}]}}}}},i=function(e){return e.header?function(e){var t;return{attributes:{root:(t={},t[s.b]=!0,t.role="row",t)},focusZone:{props:{direction:n.a.horizontal,shouldFocusInnerElementWhenReceivedFocus:!0,shouldResetActiveElementWhenTabFromZone:!0}},keyActions:{root:{unsetRowTabbable:{keyCombinations:[{keyCode:r.d.Tab,shiftKey:!0}]}}},childBehaviors:{cell:c}}}():function(e){var t;return{attributes:{root:(t={},t[s.b]=!0,t.role="row",t["aria-selected"]=e.selected,t)},focusZone:{props:{shouldEnterInnerZone:function(e){return Object(r.c)(e)===r.d.Enter},direction:n.a.horizontal}},keyActions:{root:{unsetRowTabbable:{keyCombinations:[{keyCode:r.d.Tab,shiftKey:!0}]},performClick:{keyCombinations:[{keyCode:r.d.Enter},{keyCode:r.b}]}}},childBehaviors:{cell:o}}}(e)},l=function(){return{attributes:{root:{role:"grid"}},focusZone:{props:{shouldEnterInnerZone:function(e){return Object(r.c)(e)===r.d.ArrowRight},direction:n.a.vertical,shouldResetActiveElementWhenTabFromZone:!0}},keyActions:{root:{focus:{keyCombinations:[{keyCode:r.d.Escape}]}}},childBehaviors:{row:i}}}}}]);
//# sourceMappingURL=5.15aebe45.chunk.js.map