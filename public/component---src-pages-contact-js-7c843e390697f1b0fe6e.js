(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(E,S,e){"use strict";e.r(S);var h=e(0),t=e.n(h),n=e(163),I=e.n(n),a=e(162),i=e.n(a),o=e(167),r=e(166),A=e(171),l=(e(26),e(320),e(8)),v=e.n(l),x=(e(79),e(59),e(38),e(321),e(164),e(1)),L=e.n(x),c=e(161),s=c.c.form.withConfig({displayName:"ContactForm__Form",componentId:"sc-1nlvewd-0"})(["max-width:",";margin:0 auto;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;input,textarea{font-family:inherit;font-size:inherit;border:none;outline:none;background:",";color:",";border-radius:2px;padding:1em;&::-webkit-input-placeholder{color:gray;}&::-moz-placeholder{color:gray;}&:-ms-input-placeholder{color:gray;}&:-moz-placeholder{color:gray;}&:required{box-shadow:none;}&:focus{outline:none;}}&::before{content:'';background:black;height:100%;width:100%;position:fixed;top:0;left:0;z-index:1;transition:0.2s all;opacity:",";visibility:",";}"],function(E){return E.theme.sizes.maxWidthCentered},function(E){return E.theme.colors.tertiary},function(E){return E.theme.colors.base},function(E){return E.overlay?".8":"0"},function(E){return E.overlay?"visible":"hidden"}),m=c.c.input.withConfig({displayName:"ContactForm__Name",componentId:"sc-1nlvewd-1"})(["margin:0 0 1em 0;width:100%;@media (min-width:","){width:49%;}"],function(E){return E.theme.responsive.small}),u=c.c.input.withConfig({displayName:"ContactForm__Email",componentId:"sc-1nlvewd-2"})(["margin:0 0 1em 0;width:100%;@media (min-width:","){width:49%;}"],function(E){return E.theme.responsive.small}),d=c.c.textarea.withConfig({displayName:"ContactForm__Message",componentId:"sc-1nlvewd-3"})(["width:100%;margin:0 0 1em 0;line-height:1.6;min-height:250px;resize:vertical;"]),p=c.c.input.withConfig({displayName:"ContactForm__Submit",componentId:"sc-1nlvewd-4"})(["background:"," !important;color:white !important;cursor:pointer;transition:0.2s;&:hover{background:"," !important;}"],function(E){return E.theme.colors.base},function(E){return E.theme.colors.highlight}),g=c.c.div.withConfig({displayName:"ContactForm__Modal",componentId:"sc-1nlvewd-5"})(["background:white;padding:2em;border-radius:2px;position:fixed;min-width:75%;top:50%;left:50%;transform:translate(-50%,-50%);margin:0 auto;z-index:99;display:flex;flex-flow:column;align-items:flex-start;transition:0.2s all;opacity:",";visibility:",";@media screen and (min-width:","){min-width:inherit;max-width:400px;}p{line-height:1.6;margin:0 0 2em 0;}"],function(E){return E.visible?"1":"0"},function(E){return E.visible?"visible":"hidden"},function(E){return E.theme.responsive.small}),f=c.c.div.withConfig({displayName:"ContactForm__Button",componentId:"sc-1nlvewd-6"})(["background:",";font-size:1em;display:inline-block;margin:0 auto;border:none;outline:none;cursor:pointer;color:white;padding:1em;border-radius:2px;text-decoration:none;transition:0.2s;z-index:99;&:focus{outline:none;}&:hover{background:",";}"],function(E){return E.theme.colors.base},function(E){return E.theme.colors.highlight}),b=function(E){return Object.keys(E).map(function(S){return encodeURIComponent(S)+"="+encodeURIComponent(E[S])}).join("&")},w=function(E){function S(S){var e;return(e=E.call(this,S)||this).handleInputChange=function(E){var S,h=E.target,t=h.value,n=h.name;e.setState(((S={})[n]=t,S))},e.handleSubmit=function(E){fetch("/?no-cache=1",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b(Object.assign({"form-name":"contact"},e.state))}).then(e.handleSuccess).catch(function(E){return alert(E)}),E.preventDefault()},e.handleSuccess=function(){e.setState({name:"",email:"",message:"",showModal:!0})},e.closeModal=function(){e.setState({showModal:!1})},e.state={name:"",email:"",message:"",showModal:!1},e}return v()(S,E),S.prototype.render=function(){return t.a.createElement(s,{name:"contact",onSubmit:this.handleSubmit,"data-netlify":"true","data-netlify-honeypot":"bot",overlay:this.state.showModal,onClick:this.closeModal},t.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),t.a.createElement("p",{hidden:!0},t.a.createElement("label",null,"Don’t fill this out:"," ",t.a.createElement("input",{name:"bot",onChange:this.handleInputChange}))),t.a.createElement(m,{name:"name",type:"text",placeholder:"Full Name",value:this.state.name,onChange:this.handleInputChange,required:!0}),t.a.createElement(u,{name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleInputChange,required:!0}),t.a.createElement(d,{name:"message",type:"text",placeholder:"Message",value:this.state.message,onChange:this.handleInputChange,required:!0}),t.a.createElement(p,{name:"submit",type:"submit",value:"Send"}),t.a.createElement(g,{visible:this.state.showModal},t.a.createElement("p",null,"Thank you for reaching out. I will get back to you as soon as possible."),t.a.createElement(f,{onClick:this.closeModal},"Okay")))},S}(t.a.Component);w.propTypes={data:L.a.object};var y=w,C=e(170);S.default=function(E){E.data;var S={title:"Contact - "+i.a.siteTitle};return t.a.createElement(o.a,null,t.a.createElement(I.a,null,t.a.createElement("title",null,"Contact - "+i.a.siteTitle)),t.a.createElement(C.a,{postNode:S,pagePath:"contact",customTitle:!0}),t.a.createElement(r.a,null,t.a.createElement(A.a,null,"Contact"),t.a.createElement(y,null)))}},162:function(E,S){E.exports={siteTitle:"GCN",siteTitleAlt:"GCN Gatsby Starter",publisher:"Publisher named GCN",siteDescription:"A starter template to build amazing static websites with Gatsby, Contentful and Netlify",siteUrl:"https://gcn.netlify.com",postsPerHomePage:7,postsPerPage:6,author:"GCN User",authorUrl:"https://gcn.netlify.com/about/",userTwitter:"@twitter",shortTitle:"GCN App",shareImage:"/logos/share.jpg",shareImageWidth:900,shareImageHeight:600,siteLogo:"/logos/logo-512.png",backgroundColor:"#e9e9e9",themeColor:"#121212",copyright:"Copyright © 2018 GCN User"}},165:function(E,S){E.exports="data:image/vnd.microsoft.icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAKBEAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},166:function(E,S,e){"use strict";var h=e(0),t=e.n(h),n=e(161).c.section.withConfig({displayName:"Container__Wrapper",componentId:"sc-18g01lm-0"})(["margin:0 auto auto;width:100%;max-width:",";padding:3em 1.5em 2em;flex-grow:1;"],function(E){return E.theme.sizes.maxWidth});S.a=function(E){return t.a.createElement(n,null,E.children)}},167:function(E,S,e){"use strict";var h=e(0),t=e.n(h),n=e(161),I=e(163),a=e.n(I),i=e(165),o=e.n(i),r=e(172),A=e.n(r);function l(){var E=A()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n  \twidth: 100%;\n  \theight: auto;\n  }\n\n  button,\n  input {\n    font-family: inherit;\n    font-size: inherit;\n    background: none;\n    border: none;\n    outline: none;\n    appearance: none;\n    border-radius: 0;\n    resize: none;\n    &:focus {\n      outline: none;\n    }\n    &:invalid {\n      box-shadow: none;\n    }\n  }\n']);return l=function(){return E},E}var v=Object(n.b)(l()),x={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}},L=e(162),c=e.n(L),s=e(56),m=n.c.header.withConfig({displayName:"Menu__Header",componentId:"wkpo2c-0"})(["background:",";width:100%;padding:1.5em 0;"],function(E){return E.theme.colors.base}),u=n.c.nav.withConfig({displayName:"Menu__Nav",componentId:"wkpo2c-1"})(["width:100%;max-width:",";margin:0 auto;padding:0 1.5em;ul{display:flex;justify-content:space-between;}li{display:inline-block;margin-left:1em;&:first-child{position:relative;margin:0;flex-basis:100%;}}a{text-decoration:none;color:DarkGray;font-weight:600;transition:all 0.2s;border-bottom:2px solid ",";&:hover{color:white;}}"],function(E){return E.theme.sizes.maxWidth},function(E){return E.theme.colors.base}),d={color:"white"},p=function(){return t.a.createElement(m,null,t.a.createElement(u,null,t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement(s.Link,{to:"/",activeStyle:d},"Home")),t.a.createElement("li",null,t.a.createElement(s.Link,{to:"/about/",activeStyle:d},"About")),t.a.createElement("li",null,t.a.createElement(s.Link,{to:"/contact/",activeStyle:d},"Contact")))))},g=(e(164),n.c.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-1n6n1ir-0"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;margin:0 auto;max-width:",";"],function(E){return E.theme.sizes.maxWidth})),f=n.c.ul.withConfig({displayName:"Footer__List",componentId:"sc-1n6n1ir-1"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;width:100%;border-top:1px solid ",";padding:1em 0 2em;margin:0 1.5em;"],function(E){return E.theme.colors.secondary}),b=n.c.li.withConfig({displayName:"Footer__Item",componentId:"sc-1n6n1ir-2"})(["display:inline-block;padding:0.25em 0;width:100%;@media screen and (min-width:","){width:auto;}a{font-weight:600;transition:all 0.2s;color:",";&:hover{color:",";}&:visited{color:",";}}"],function(E){return E.theme.responsive.small},function(E){return E.theme.colors.base},function(E){return E.theme.colors.highlight},function(E){return E.theme.colors.base}),w=function(){return t.a.createElement(g,null,t.a.createElement(f,null,t.a.createElement(b,null,t.a.createElement("a",{href:"https://www.contentful.com/",rel:"nofollow noopener noreferrer",target:"_blank"},t.a.createElement("img",{src:"https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",style:{width:"100px"},alt:"Powered by Contentful"}))),t.a.createElement(b,null,t.a.createElement("a",{href:"https://github.com/ryanwiemer/gatsby-starter-gcn",target:"_blank",rel:"noopener noreferrer"},"gatsby-starter-gcn")," ","by"," ",t.a.createElement("a",{href:"https://github.com/ryanwiemer",target:"_blank",rel:"noopener noreferrer"},"@ryanwiemer"))))};S.a=function(E){var S=E.children;return t.a.createElement("div",{className:"siteRoot"},t.a.createElement(a.a,null,t.a.createElement("title",null,c.a.siteTitle),t.a.createElement("meta",{charSet:"utf-8"}),t.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.a.createElement("link",{rel:"icon",href:o.a})),t.a.createElement(n.a,{theme:x},t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"siteContent"},t.a.createElement(p,null),S),t.a.createElement(w,null))),t.a.createElement(v,null))}},170:function(E,S,e){"use strict";var h=e(8),t=e.n(h),n=e(0),I=e.n(n),a=e(163),i=e.n(a),o=e(162),r=e.n(o),A=function(E){function S(){return E.apply(this,arguments)||this}return t()(S,E),S.prototype.render=function(){var E,S,e,h,t,n,a=this.props,o=a.postNode,A=a.pagePath,l=a.postSEO,v=a.pageSEO,x=a.customTitle;E=r.a.siteTitle,S=r.a.siteDescription,e=r.a.siteUrl+r.a.shareImage,h=r.a.shareImageWidth,t=r.a.shareImageHeight,n=r.a.siteUrl,x&&(E=o.title,n=r.a.siteUrl+"/"+A+"/"),(l||v)&&(E=o.title,S=null===o.metaDescription?o.body.childMarkdownRemark.excerpt:o.metaDescription.internal.content,n=r.a.siteUrl+"/"+A+"/"),l&&(e="https:"+o.heroImage.ogimg.src,h=o.heroImage.ogimg.width,t=o.heroImage.ogimg.height);var L=[{"@context":"http://schema.org","@type":"WebSite",url:r.a.siteUrl,name:r.a.siteTitle,alternateName:r.a.siteTitleAlt?r.a.siteTitleAlt:""}];return l&&L.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r.a.siteUrl,name:r.a.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":n,name:E}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:n,name:E,alternateName:r.a.siteTitleAlt?r.a.siteTitleAlt:"",headline:E,image:{"@type":"ImageObject",url:e,width:h,height:t},author:{"@type":"Person",name:r.a.author,url:r.a.authorUrl},publisher:{"@type":"Organization",name:r.a.publisher,url:r.a.siteUrl},datePublished:o.publishDateISO,mainEntityOfPage:n}),v&&L.push({"@context":"http://schema.org","@type":"WebPage",url:n,name:E}),I.a.createElement(i.a,null,I.a.createElement("meta",{name:"image",content:e}),I.a.createElement("meta",{name:"description",content:S}),I.a.createElement("script",{type:"application/ld+json"},JSON.stringify(L)),I.a.createElement("meta",{property:"og:title",content:E}),l?I.a.createElement("meta",{property:"og:type",content:"article"}):null,I.a.createElement("meta",{property:"og:url",content:n}),I.a.createElement("meta",{property:"og:image",content:e}),I.a.createElement("meta",{property:"og:image:width",content:h}),I.a.createElement("meta",{property:"og:image:height",content:t}),I.a.createElement("meta",{property:"og:description",content:S}),I.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),I.a.createElement("meta",{name:"twitter:creator",content:r.a.userTwitter?r.a.userTwitter:""}),I.a.createElement("meta",{name:"twitter:title",content:E}),I.a.createElement("meta",{name:"twitter:image",content:e}),I.a.createElement("meta",{name:"twitter:description",content:S}))},S}(n.Component);S.a=A},171:function(E,S,e){"use strict";e(164);var h=e(0),t=e.n(h),n=e(161).c.h1.withConfig({displayName:"PageTitle__Title",componentId:"sc-9e4mtp-0"})(["font-size:",";text-transform:capitalize;font-weight:600;text-align:center;margin:0 0 3rem 0;margin:",";line-height:1.2;span{margin:0 0 0 0.25em;}a{transition:all 0.2s;color:",";&:hover{color:",";}}"],function(E){return E.small?"2em":"3em"},function(E){return E.small?"1rem 0 4rem 0":"0 0 3rem 0"},function(E){return E.theme.colors.base},function(E){return E.theme.colors.highlight});S.a=function(E){return t.a.createElement(n,{small:E.small},E.children)}},320:function(E,S,e){var h=e(27).f,t=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in t||e(21)&&h(t,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(E){return""}}})},321:function(E,S,e){var h=e(28),t=e(37);e(322)("keys",function(){return function(E){return t(h(E))}})},322:function(E,S,e){var h=e(12),t=e(20),n=e(19);E.exports=function(E,S){var e=(t.Object||{})[E]||Object[E],I={};I[E]=S(e),h(h.S+h.F*n(function(){e(1)}),"Object",I)}}}]);
//# sourceMappingURL=component---src-pages-contact-js-7c843e390697f1b0fe6e.js.map