(this["webpackJsonpwebpage-react"]=this["webpackJsonpwebpage-react"]||[]).push([[0],{1:function(e,c,n){e.exports={container:"Main_container__1DBl6",main:"Main_main__d0wD2",about:"Main_about__3Dqfa",proejct:"Main_proejct__1Vl3L",footer:"Main_footer__NOVdn",license:"Main_license__Gs3rv",title:"Main_title__PONBW",description:"Main_description__2EaHq",code:"Main_code__CVNU0",grid:"Main_grid__PbqP6",card:"Main_card__N9sa1",logo:"Main_logo__Nqnmz"}},17:function(e,c,n){},2:function(e,c,n){e.exports={header_wrapper:"Header_header_wrapper__3OSDd",transparent:"Header_transparent__2RU75",logo:"Header_logo__2ins2",nav:"Header_nav__36ub7",menu:"Header_menu__Y5boZ",list:"Header_list__3podu",eachslide:"Header_eachslide__3xOka"}},20:function(e,c,n){},21:function(e,c,n){"use strict";n.r(c);var a=n(3),t=n.n(a),s=n(6),i=n.n(s),r=(n(17),n(7)),d=n(8),l=n(12),j=n(11),o=n(2),b=n.n(o),p=n(0),h=function(){var e={background:"#E8E8E8",borderRadius:"5px",padding:"0.75rem",fontSize:"1.1rem",fontFamily:"Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace"},c={fontSize:"18px",padding:"27px 20px 23px",display:"inline"};return Object(p.jsx)("div",{className:b.a.header_wrapper,children:Object(p.jsxs)("div",{className:b.a.transparent,children:[Object(p.jsx)("p",{className:(b.a.description,b.a.logo),children:Object(p.jsx)("a",{href:"/webpage",children:Object(p.jsx)("code",{style:e,children:"title"})})}),Object(p.jsx)("nav",{className:b.a.nav,children:Object(p.jsx)("div",{className:b.a.menu,children:Object(p.jsxs)("ul",{className:b.a.list,children:[Object(p.jsx)("li",{style:c,children:Object(p.jsx)("a",{href:"#abt",children:Object(p.jsx)("code",{style:e,children:"page"})})}),Object(p.jsx)("li",{style:c,children:Object(p.jsx)("a",{href:"#pjt",children:Object(p.jsx)("code",{style:e,children:"page"})})})]})})})]})})},x=n(1),O=n.n(x),_=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"page"}),Object(p.jsx)("div",{className:O.a.project,children:Object(p.jsxs)("div",{className:O.a.grid,children:[Object(p.jsxs)("a",{href:"#",className:O.a.card,children:[Object(p.jsx)("h3",{children:"element 1\u2192"}),Object(p.jsx)("p",{children:"description element 1"})]}),Object(p.jsxs)("a",{href:"#",className:O.a.card,children:[Object(p.jsx)("h3",{children:"element 2\u2192"}),Object(p.jsx)("p",{children:"description element 2"})]}),Object(p.jsxs)("a",{href:"#",className:O.a.card,children:[Object(p.jsx)("h3",{children:"element 3\u2192"}),Object(p.jsx)("p",{children:"description element 3"})]}),Object(p.jsxs)("a",{href:"#",className:O.a.card,children:[Object(p.jsx)("h3",{children:"element 4\u2192"}),Object(p.jsx)("p",{children:"description element 4"})]})]})})]})},m=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"page"}),Object(p.jsx)("div",{className:O.a.project,children:Object(p.jsxs)("div",{className:O.a.grid,children:[Object(p.jsxs)("a",{href:"#",className:O.a.card,children:[Object(p.jsx)("h3",{children:"element"}),Object(p.jsx)("p",{})]}),Object(p.jsxs)("a",{href:"#",className:O.a.card,children:[Object(p.jsx)("h3",{children:"element"}),Object(p.jsx)("p",{})]}),Object(p.jsxs)("a",{href:"#",className:O.a.card,children:[Object(p.jsx)("h3",{children:"element"}),Object(p.jsx)("p",{})]}),Object(p.jsxs)("a",{href:"#",className:O.a.card,children:[Object(p.jsx)("h3",{children:"element"}),Object(p.jsx)("p",{})]})]})})]})},u=n(5),g=n(9),f=(n(19),function(){var e=["https://windows10spotlight.com/wp-content/uploads/2021/01/803e74362a4a8ae509ce88d42315543b-1024x576.jpg","https://windows10spotlight.com/wp-content/uploads/2018/12/42b0b141e2c9c77d089ee36500742059-768x432.jpg","https://windows10spotlight.com/wp-content/uploads/2021/02/cd299d67cbde360875570b7d13694c02-1024x576.jpg","https://windows10spotlight.com/wp-content/uploads/2021/01/ddbbb8678ce025c6fb5d9b3c0c03fc2b-1024x576.jpg","https://windows10spotlight.com/wp-content/uploads/2021/01/6b160ca222cc8440c424758bac186b7b-1024x576.jpg"];return Object(p.jsx)("div",{children:Object(p.jsx)(g.Slide,Object(u.a)(Object(u.a)({},{easing:"linear",arrows:!1,duration:4e3}),{},{children:e.map((function(c,n){return Object(p.jsx)("div",{className:b.a.eachslide,children:Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e[n],")")},children:Object(p.jsx)("span",{style:{display:"none"},children:"value"})})})}))}))})}),v=n(10);n(20);function N(){console.log("snapped")}var w=function(e){Object(l.a)(n,e);var c=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=c.call.apply(c,[this].concat(s))).container=t.a.createRef(),e}return Object(d.a)(n,[{key:"bindScrollSnap",value:function(){var e=this.container.current;new v.a(e,{snapDestinationY:"100%"}).bind(N)}},{key:"componentDidMount",value:function(){this.bindScrollSnap()}},{key:"render",value:function(){return Object(p.jsxs)("div",{id:"container",ref:this.container,children:[Object(p.jsx)(h,{}),Object(p.jsx)(f,{}),Object(p.jsx)("div",{className:"page first-page",id:"pjt",children:Object(p.jsx)(_,{className1:"page first-page",className2:"hint"})}),Object(p.jsx)("div",{className:"page second-page",id:"abt",children:Object(p.jsx)(m,{className:"page second-page"})})]})}}]),n}(t.a.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(c){var n=c.getCLS,a=c.getFID,t=c.getFCP,s=c.getLCP,i=c.getTTFB;n(e),a(e),t(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(w,{}),document.getElementById("root")),M()}},[[21,1,2]]]);
//# sourceMappingURL=main.2a7106a1.chunk.js.map