(this["webpackJsonpblog-writter"]=this["webpackJsonpblog-writter"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(2),r=n.n(a),c=n(4),l=n.n(c),s=(n(14),n(5)),o=n(6),u=n(8),d=n(7),j=n(1),b=(n(15),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).editor=null,i.state={html:null},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.editor=Object(j.init)({element:document.getElementById("editor"),onChange:function(e){return t.setState({html:e})},defaultParagraphSeparator:"p",defaultContent:"Contenu par d\xe9fault, changer ici !",actions:["bold","italic","underline","strikethrough","paragraph","quote","heading1","heading2","olist","ulist","code","line","link","image",{name:"justify full",icon:"J",title:"Justify text",result:function(){return Object(j.exec)("justifyFull")}},{name:"justify right",icon:"JR",title:"Justify text right",result:function(){return Object(j.exec)("justifyRight")}},{name:"justify left",icon:"JL",title:"Justify text left",result:function(){return Object(j.exec)("justifyLeft")}},{name:"indent text",icon:"I",title:"Indent text",result:function(){return Object(j.exec)("indent")}},{name:"outdent text",icon:"O",title:"Outdent text",result:function(){return Object(j.exec)("outdent")}}]})}},{key:"render",value:function(){return Object(i.jsxs)("div",{class:"container",children:[Object(i.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(i.jsx)("a",{class:"navbar-brand",href:"/",children:"FP"}),Object(i.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{class:"navbar-toggler-icon"})}),Object(i.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsx)("ul",{class:"navbar-nav mr-auto",children:Object(i.jsx)("li",{class:"nav-item active",children:Object(i.jsx)("span",{class:"nav-item",children:"Blog Writter"})})})})]}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h3",{children:"Editor:"}),Object(i.jsx)("div",{id:"editor",className:"pell"}),Object(i.jsx)("br",{}),Object(i.jsx)("h3",{children:"HTML Output:"}),Object(i.jsx)("div",{id:"html-output",children:this.state.html})]})})]})}}]),n}(a.Component)),h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),r(t),c(t)}))};n(16);l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.d8081b6a.chunk.js.map