(this["webpackJsonprich-text-editor-survey"]=this["webpackJsonprich-text-editor-survey"]||[]).push([[0],{104:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(20),c=n.n(a),u=(n(104),n(46)),i=n(18),l=n(9),p=n(95),s=n(5),y=n(237),f=n(238),d=n(236),m=n(234),h=n(65),b=n.n(h);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v=b.a.get("slateJs-demo"),g=JSON.parse(v),O=s.n.fromJSON(g||{document:{nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",text:"A line of text in a paragraph."}]}]}}),E=function(e){var t=e.type,n=e.key;return{onKeyDown:function(e,r,o){if(!e.metaKey||e.key!==n)return o();e.preventDefault(),r.toggleMark(t)}}},j=function(e){return{renderMark:function(t,n,r){return t.mark.type===e.type?e.component(t):r()}}},w=function(e){return[E(e),j(e)]},B=[].concat(Object(l.a)(w({type:"bold",key:"b",component:function(e){return o.a.createElement("strong",e.attribute,e.children)}})),Object(l.a)(w({type:"strikethrough",key:"s",component:function(e){return o.a.createElement("s",e.attribute,e.children)}})),Object(l.a)(w({type:"underline",key:"u",component:function(e){return o.a.createElement("u",e.attribute,e.children)}})),Object(l.a)(w({type:"italic",key:"i",component:function(e){return o.a.createElement("i",e.attribute,e.children)}})),Object(l.a)(w({type:"highlight",key:"h",component:function(e){return o.a.createElement("span",Object.assign({},e.attribute,{style:{background:"gold"}}),e.children)}}))),D=function(e){var t=e.type,n=e.key;return{onKeyDown:function(e,r,o){if(!e.ctrlKey||e.key!==n)return o();e.preventDefault();var a=r.value.blocks.some((function(e){return e.type===t}));r.setBlocks({type:a?"paragraph":t})}}},M=function(e){var t=e.type,n=e.component;return{renderBlock:function(e,r,o){return e.node.type===t?n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)):o()}}},P=function(e){var t=e.type,n=e.key,r=e.component;return[D({type:t,key:n}),M({type:t,component:r})]},S=[].concat(Object(l.a)(P({type:"code",key:"c",component:function(e){return o.a.createElement("pre",e.attribute,o.a.createElement("code",null,e.children))}})),Object(l.a)(P({type:"header1",key:"1",component:function(e){return o.a.createElement("h1",e.attribute,e.children)}})),Object(l.a)(P({type:"header2",key:"2",component:function(e){return o.a.createElement("h2",e.attribute,e.children)}})),Object(l.a)(P({type:"header3",key:"3",component:function(e){return o.a.createElement("h3",e.attribute,e.children)}})),Object(l.a)(P({type:"header4",key:"4",component:function(e){return o.a.createElement("h4",e.attribute,e.children)}})),Object(l.a)(P({type:"header5",key:"5",component:function(e){return o.a.createElement("h5",e.attribute,e.children)}})),Object(l.a)(P({type:"header6",key:"6",component:function(e){return o.a.createElement("h6",e.attribute,e.children)}})),Object(l.a)(P({type:"quotation",key:"q",component:function(e){return o.a.createElement("blockquote",e.attribute,e.children)}}))),J={renderBlock:function(e,t,n){return e.isFocused?o.a.createElement("div",{style:{backgroundColor:"rgba(0,0,0,.05)"}},n()):n()}},q=Object(m.a)({container:{display:"flex",justifyContent:"space-between"}}),x=function(e){var t=e.editor,n=q();return o.a.createElement(y.a,{className:n.container,p:2},o.a.createElement("div",null,o.a.createElement(f.a,{onMouseDown:function(e){e.preventDefault(),t.toggleMark({type:"bold"})},color:t.isBoldActive()?"secondary":"default"},"bold"),o.a.createElement(f.a,{onMouseDown:function(e){e.preventDefault(),t.toggleMark({type:"italic"})},color:t.isItalicActive()?"secondary":"default"},"italic"),o.a.createElement(f.a,{onMouseDown:function(e){e.preventDefault(),t.toggleMark({type:"strikethrough"})},color:t.isStrikethroughActive()?"secondary":"default"},"strike")),o.a.createElement("div",null,o.a.createElement(f.a,{onMouseDown:function(e){e.preventDefault(),t.setBlocks({type:"paragraph"})},color:t.isParagraphBlock()?"secondary":"default"},"paragraph"),o.a.createElement(f.a,{onMouseDown:function(e){e.preventDefault(),t.isQuotationBlock()?t.setBlocks({type:"paragraph"}):t.setBlocks({type:"quotation"})},color:t.isQuotationBlock()?"secondary":"default"},"quote"),o.a.createElement(f.a,{onMouseDown:function(e){e.preventDefault(),t.isCodeBlock()?t.setBlocks({type:"paragraph"}):t.setBlocks({type:"code"})},color:t.isCodeBlock()?"secondary":"default"},"code")))},A=[{renderEditor:function(e,t,n){return o.a.createElement("div",null,o.a.createElement(x,{editor:t}),o.a.createElement(d.a,null),o.a.createElement(y.a,{p:2},n()),o.a.createElement(d.a,null))}}].concat([{queries:{isBoldActive:function(e){return e.value.activeMarks.some((function(e){return"bold"===e.type}))},isItalicActive:function(e){return e.value.activeMarks.some((function(e){return"italic"===e.type}))},isStrikethroughActive:function(e){return e.value.activeMarks.some((function(e){return"strikethrough"===e.type}))},isCodeBlock:function(e){return e.value.blocks.some((function(e){return"code"===e.type}))},isParagraphBlock:function(e){return e.value.blocks.some((function(e){return"paragraph"===e.type}))},isQuotationBlock:function(e){return e.value.blocks.some((function(e){return"quotation"===e.type}))}}}],[J],Object(l.a)(B),Object(l.a)(S)),C=function(e){var t=o.a.useState(O),n=Object(u.a)(t,2),r=n[0],a=n[1];return o.a.createElement(p.a,{onChange:function(e){var t=JSON.stringify(e.value.toJSON());b.a.set("slateJs-demo",t),a(e.value)},value:r,plugins:A,autoFocus:!0,placeholder:"Type something here..."})};var N=function(){return o.a.createElement(C,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e,t,n){e.exports=n(220)}},[[99,1,2]]]);
//# sourceMappingURL=main.4c5cdc5d.chunk.js.map