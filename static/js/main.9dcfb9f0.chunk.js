(this.webpackJsonpmarkdown_previewer=this.webpackJsonpmarkdown_previewer||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t.n(i),o=t(5),r=t.n(o),s=(t(10),t(4)),c=(t(11),t(2)),d=t.n(c),l=t(0);var h=function(e){var n=e.text,t=e.max;d.a.setOptions({breaks:!0});var i=t?"none":"block";return Object(l.jsxs)("div",{id:"preview_div",style:{display:i},children:[Object(l.jsx)("h3",{children:"Preview"}),Object(l.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:d()(n)}})]})};var u=function(e){var n=e.get,t=e.set,i=e.max,a=e.setMax,o=i?"100%":"35%";return Object(l.jsxs)("div",{id:"editor_div",style:{width:o},children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h3",{}),Object(l.jsx)("h3",{children:"Editor"}),Object(l.jsx)("img",{src:"/images/icons/".concat(i?"min":"max",".png"),alt:"maximize",onClick:function(e){a(!i)}})]}),Object(l.jsx)("textarea",{name:"editor",id:"editor",className:"editor ".concat(i?"editor-max":"editor-min"),value:n,onChange:function(e){t(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){t("")},children:"clear"})]})},b=(d()("**strong** _em_"),d.a.parseInline("**strong** _em_"),"\n# Welcome to shaysel's React Markdown Previewer!\n## Shaysel's Editor\n\n\n\n".concat("```","\n// this is multi-line code:\nHeres some code, '<div></div>', between 2 backticks.\n\n<code>function anotherExample(firstLine, lastLine) {}}</code>\n","```","\n\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\n\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nHere's a link to [my github for more projects](https://github.com/shaytamir).\n\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n\n\n- And of course there are lists.\n- Some are bulleted.\n- With different indentation levels.\n- That look like this.\nI think you should use an `<addr>` element here instead.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\nOh and not forgeting quotes:\n> Dorothy followed her through many of the beautiful rooms in her castle.\n\n![Markdown Logo](/images/earth.png)\n"));var m=function(){var e=Object(i.useState)("loading.. .."),n=Object(s.a)(e,2),t=n[0],a=n[1],o=Object(i.useState)(!1),r=Object(s.a)(o,2),c=r[0],d=r[1];return Object(i.useEffect)((function(){a(b)}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{get:t,set:function(e){a(e)},max:c,setMax:function(e){d(e)}}),Object(l.jsx)(h,{text:t,max:c})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.9dcfb9f0.chunk.js.map