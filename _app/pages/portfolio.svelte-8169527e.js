import{S as D,i as E,s as B,e as g,w as V,k as T,c as _,a as h,x as q,m as P,d as c,g as v,y as A,G as k,I as M,q as d,M as N,o as y,a2 as b,P as w,B as j,Y as F,b as $,p as G,$ as H,n as J}from"../chunks/vendor-b8c3736d.js";import{T as C}from"../chunks/Tile-c04ffdc8.js";const x=[{name:"Seraph Station",date:"September 2019",image:"/portfolio/portfolio-1.png"},{name:"Eebox Building",date:"August 2017",image:"/portfolio/portfolio-2.png"},{name:"Federal II Tower",date:"March 2017",image:"/portfolio/portfolio-3.png"},{name:"Project Del Sol",date:"January 2016",image:"/portfolio/portfolio-4.png"},{name:"Le Prototype",date:"October 2015",image:"/portfolio/portfolio-5.png"},{name:"228B Tower",date:"April 2015",image:"/portfolio/portfolio-6.png"},{name:"Grand Edelweiss Hotel",date:"December 2013",image:"/portfolio/portfolio-7.png"},{name:"Netcry Tower",date:"August 2012",image:"/portfolio/portfolio-8.png"},{name:"Hypers",date:"January 2012",image:"/portfolio/portfolio-9.png"},{name:"SXIV Tower",date:"March 2011",image:"/portfolio/portfolio-10.png"},{name:"Trinity Bank Tower",date:"September 2010",image:"/portfolio/portfolio-11.png"},{name:"Project Paramour",date:"February 2008",image:"/portfolio/portfolio-12.png"}];function I(f,a,r){const l=f.slice();return l[0]=a[r].name,l[1]=a[r].date,l[2]=a[r].image,l[4]=r,l}function S(f){let a,r,l,i,s;return r=new C({props:{tileName:f[0],tileDate:f[1],tileImage:f[2],tileNumbers:!1}}),{c(){a=g("div"),V(r.$$.fragment),l=T()},l(e){a=_(e,"DIV",{});var p=h(a);q(r.$$.fragment,p),l=P(p),p.forEach(c)},m(e,p){v(e,a,p),A(r,a,null),k(a,l),s=!0},p:M,i(e){s||(d(r.$$.fragment,e),N(()=>{i||(i=b(a,w,{y:100,opacity:0,duration:500,delay:(f[4]+1)*150},!0)),i.run(1)}),s=!0)},o(e){y(r.$$.fragment,e),i||(i=b(a,w,{y:100,opacity:0,duration:500,delay:(f[4]+1)*150},!1)),i.run(0),s=!1},d(e){e&&c(a),j(r),e&&i&&i.end()}}}function L(f){let a,r,l,i,s=x,e=[];for(let o=0;o<s.length;o+=1)e[o]=S(I(f,s,o));const p=o=>y(e[o],1,1,()=>{e[o]=null});return{c(){a=T(),r=g("div"),l=g("div");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){F('[data-svelte="svelte-faixpc"]',document.head).forEach(c),a=P(o),r=_(o,"DIV",{class:!0});var t=h(r);l=_(t,"DIV",{class:!0});var m=h(l);for(let u=0;u<e.length;u+=1)e[u].l(m);m.forEach(c),t.forEach(c),this.h()},h(){document.title="Portfolio",$(l,"class","grid gap-7 lg:auto-rows-fr lg:gap-8 lg:grid-cols-3 svelte-efm3n9"),$(r,"class","container mx-auto <sm:flex <sm:flex-col <sm:px-8 svelte-efm3n9")},m(o,n){v(o,a,n),v(o,r,n),k(r,l);for(let t=0;t<e.length;t+=1)e[t].m(l,null);i=!0},p(o,[n]){if(n&0){s=x;let t;for(t=0;t<s.length;t+=1){const m=I(o,s,t);e[t]?(e[t].p(m,n),d(e[t],1)):(e[t]=S(m),e[t].c(),d(e[t],1),e[t].m(l,null))}for(J(),t=s.length;t<e.length;t+=1)p(t);G()}},i(o){if(!i){for(let n=0;n<s.length;n+=1)d(e[n]);i=!0}},o(o){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)y(e[n]);i=!1},d(o){o&&c(a),o&&c(r),H(e,o)}}}class Y extends D{constructor(a){super();E(this,a,null,L,B,{})}}export{Y as default};
