import{S as B,i as O,s as P,e as y,k as V,c as x,a as $,d as m,m as A,b as c,F as T,g as C,G as w,H as q,I as H,J as fe,t as R,h as G,K as Y,L as z,M as F,w as D,x as L,y as I,q as d,N as X,O as ue,P as j,o as k,Q as ne,R as ce,B as N,n as U,p as S,T as oe,u as me,U as pe,V as ve,W as _e,X as de,l as J,v as ge,Y as he}from"../chunks/vendor-2246c9f4.js";import{c as $e,B as be}from"../chunks/Button-3c45f53a.js";import"../chunks/ArrowIcon-f88b7e47.js";function ke(o){let e,a,r,t,n,s,l,u;return{c(){e=y("button"),a=y("span"),r=V(),t=y("span"),n=V(),s=y("span"),this.h()},l(f){e=x(f,"BUTTON",{class:!0,type:!0});var i=$(e);a=x(i,"SPAN",{class:!0}),$(a).forEach(m),r=A(i),t=x(i,"SPAN",{class:!0}),$(t).forEach(m),n=A(i),s=x(i,"SPAN",{class:!0}),$(s).forEach(m),i.forEach(m),this.h()},h(){c(a,"class","bg-dark h-3px w-full opacity-100 transform transition-transform top-0 left-0 duration-200 block absolute svelte-ngxni8"),c(t,"class","bg-dark h-3px w-full opacity-100 transform transition top-7px left-0 duration-200 block absolute svelte-ngxni8"),c(s,"class","bg-dark h-3px w-full opacity-100 transform transition-transform top-14px left-0 duration-200 block absolute svelte-ngxni8"),c(e,"class","ml-auto outline-transparent h-17px transition w-6 duration-500 relative sm:hidden svelte-ngxni8"),c(e,"type","button"),T(e,"open",o[0])},m(f,i){C(f,e,i),w(e,a),w(e,r),w(e,t),w(e,n),w(e,s),l||(u=q(e,"click",o[1]),l=!0)},p(f,[i]){i&1&&T(e,"open",f[0])},i:H,o:H,d(f){f&&m(e),l=!1,u()}}}function we(o,e,a){let{active:r=!1}=e;function t(n){fe.call(this,o,n)}return o.$$set=n=>{"active"in n&&a(0,r=n.active)},[r,t]}class ye extends B{constructor(e){super();O(this,e,we,ke,P,{active:0})}}function xe(o){let e,a,r,t,n,s,l,u;return{c(){e=y("a"),a=R("Portfolio"),r=V(),t=y("a"),n=R("About Us"),s=V(),l=y("a"),u=R("Contact"),this.h()},l(f){e=x(f,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var i=$(e);a=G(i,"Portfolio"),i.forEach(m),r=A(f),t=x(f,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var p=$(t);n=G(p,"About Us"),p.forEach(m),s=A(f),l=x(f,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var h=$(l);u=G(h,"Contact"),h.forEach(m),this.h()},h(){c(e,"href","portfolio"),c(e,"sveltekit:prefetch",""),c(e,"class","hover:text-dark focus:text-dark  svelte-1rlncv6"),T(e,"active",o[0].pathname==="/portfolio"),c(t,"href","about"),c(t,"sveltekit:prefetch",""),c(t,"class","hover:text-dark focus:text-dark svelte-1rlncv6"),T(t,"active",o[0].pathname==="/about"),c(l,"href","contact"),c(l,"sveltekit:prefetch",""),c(l,"class","hover:text-dark focus:text-dark svelte-1rlncv6"),T(l,"active",o[0].pathname==="/contact")},m(f,i){C(f,e,i),w(e,a),C(f,r,i),C(f,t,i),w(t,n),C(f,s,i),C(f,l,i),w(l,u)},p(f,[i]){i&1&&T(e,"active",f[0].pathname==="/portfolio"),i&1&&T(t,"active",f[0].pathname==="/about"),i&1&&T(l,"active",f[0].pathname==="/contact")},i:H,o:H,d(f){f&&m(e),f&&m(r),f&&m(t),f&&m(s),f&&m(l)}}}function Ce(o,e,a){let{url:r=""}=e;return o.$$set=t=>{"url"in t&&a(0,r=t.url)},[r]}class Z extends B{constructor(e){super();O(this,e,Ce,xe,P,{url:0})}}function Ee(o){let e,a,r;return{c(){e=y("a"),a=Y("svg"),r=Y("path"),this.h()},l(t){e=x(t,"A",{href:!0,class:!0});var n=$(e);a=z(n,"svg",{viewBox:!0,fill:!0,xmlns:!0,class:!0});var s=$(a);r=z(s,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),$(r).forEach(m),s.forEach(m),n.forEach(m),this.h()},h(){c(r,"fill-rule","evenodd"),c(r,"clip-rule","evenodd"),c(r,"d","M78.9955 26.3927V39.2694H69.4978V39.0692C69.2125 39.1741 68.9119 39.275 68.596 39.3721C67.2337 39.7907 65.7992 40 64.2923 40C62.4963 40 60.7954 39.6765 59.1896 39.0297C57.5838 38.3828 56.1645 37.4886 54.9316 36.347C53.6987 35.2055 52.7284 33.8851 52.0206 32.3858C51.3129 30.8866 50.959 29.2922 50.959 27.6027C50.959 26.2442 51.2028 24.9221 51.6905 23.6364C51.0841 23.4648 50.5206 23.379 50 23.379C49.1933 23.379 48.4284 23.5883 47.7055 24.0068C46.9825 24.4254 46.4003 24.9695 45.9589 25.6392C45.5175 26.309 45.2968 27.0319 45.2968 27.8082V39.2694H40H35.7991H29.1781L26.9178 33.0137H13.0822L10.8219 39.2694H0L15.3425 1.59814H24.6575L35.7991 28.9546V15.8904H45.2968V19.1781C46.2709 17.9147 47.4087 16.9292 48.71 16.2214C50.0114 15.5137 51.3546 15.1598 52.7397 15.1598C53.6377 15.1598 54.589 15.312 55.5936 15.6164C56.519 15.8968 57.2958 16.2547 57.9241 16.6901C58.2595 16.5145 58.6053 16.3507 58.9613 16.1986C60.5823 15.5061 62.3441 15.1598 64.2467 15.1598C65.7383 15.1598 67.1842 15.3653 68.5846 15.7762C68.9058 15.8705 69.2102 15.9692 69.4978 16.0723V0H78.9955V18.0822C80.0762 17.1537 81.2977 16.4346 82.6599 15.9247C84.0222 15.4148 85.4034 15.1598 86.8037 15.1598C88.5846 15.1598 90.1789 15.5632 91.5868 16.3699C92.9948 17.1766 94.1097 18.2686 94.9316 19.6461C95.7535 21.0236 96.1645 22.5875 96.1645 24.3379V39.2694H86.6667V26.3927C86.6667 25.2207 86.3167 24.2808 85.6165 23.5731C84.9164 22.8653 83.9879 22.5114 82.8311 22.5114C82.0701 22.5114 81.4004 22.6712 80.822 22.9909C80.2436 23.3105 79.7946 23.7595 79.475 24.3379C79.1553 24.9163 78.9955 25.6012 78.9955 26.3927ZM69.4978 22.0548V33.105L68.7215 31.5068C68.4324 31.7047 68.0328 31.8835 67.5229 32.0434C67.013 32.2032 66.4537 32.2831 65.8448 32.2831C64.8555 32.2831 63.9955 32.0662 63.2649 31.6324C62.5343 31.1986 61.975 30.624 61.5868 29.9086C61.1987 29.1933 61.0046 28.417 61.0046 27.5799C61.0046 26.9102 61.1683 26.21 61.4955 25.4794C61.8228 24.7488 62.3403 24.1324 63.048 23.6301C63.7558 23.1278 64.6728 22.8767 65.7992 22.8767C66.9864 22.8767 67.9605 23.1354 68.7215 23.6529L69.4978 22.0548ZM16.5068 24.2009L20 15.2511L23.4931 24.2009H16.5068Z"),c(r,"fill","currentColor"),c(a,"viewBox","0 0 97 40"),c(a,"fill","none"),c(a,"xmlns","http://www.w3.org/2000/svg"),c(a,"class","h-32px w-77px xl:w-97px xl:h-40px  svelte-14pdfso"),c(e,"href","/"),c(e,"class","svelte-14pdfso")},m(t,n){C(t,e,n),w(e,a),w(a,r)},p:H,i:H,o:H,d(t){t&&m(e)}}}class ie extends B{constructor(e){super();O(this,e,null,Ee,P,{})}}function K(o){let e,a,r,t,n,s,l,u,f;return r=new Z({props:{url:o[0]}}),{c(){e=y("div"),a=y("nav"),D(r.$$.fragment),this.h()},l(i){e=x(i,"DIV",{class:!0});var p=$(e);a=x(p,"NAV",{after:!0,class:!0});var h=$(a);L(r.$$.fragment,h),h.forEach(m),p.forEach(m),this.h()},h(){c(a,"after","transition -bottom-2 block absolute content-DEFAULT w-6 h-1px bg-dark left-0 transition transform translate-x-$position"),c(a,"class",t=(o[3]?"after:opacity-0":"")+" flex sm:flex-row sm:gap-x-12 sm:relative <sm:flex-col <sm:gap-y-8 lg:gap-x-14 svelte-113ksc7"),c(e,"class","font-bold bg-grey-95 top-full min-w-343px p-12 right-0 z-10 absolute svelte-113ksc7")},m(i,p){C(i,e,p),w(e,a),I(r,a,null),l=!0,u||(f=q(e,"click",o[7]),u=!0)},p(i,p){o=i;const h={};p&1&&(h.url=o[0]),r.$set(h),(!l||p&8&&t!==(t=(o[3]?"after:opacity-0":"")+" flex sm:flex-row sm:gap-x-12 sm:relative <sm:flex-col <sm:gap-y-8 lg:gap-x-14 svelte-113ksc7"))&&c(a,"class",t)},i(i){l||(d(r.$$.fragment,i),F(()=>{s&&s.end(1),n=X(e,j,{x:500,duration:300,easing:ue}),n.start()}),l=!0)},o(i){k(r.$$.fragment,i),n&&n.invalidate(),s=ne(e,j,{x:500,duration:300,easing:ce}),l=!1},d(i){i&&m(e),N(r),i&&s&&s.end(),u=!1,f()}}}function Q(o){let e,a,r,t,n;return r=new Z({props:{url:o[0]}}),{c(){e=y("div"),a=y("nav"),D(r.$$.fragment),this.h()},l(s){e=x(s,"DIV",{class:!0});var l=$(e);a=x(l,"NAV",{after:!0,class:!0});var u=$(a);L(r.$$.fragment,u),u.forEach(m),l.forEach(m),this.h()},h(){c(a,"after","transition -bottom-2 block absolute content-DEFAULT w-6 h-1px bg-dark left-0 transition transform translate-x-$position"),c(a,"class",t=(o[3]?"after:opacity-0":"")+" flex sm:flex-row sm:gap-x-12 sm:relative <sm:flex-col <sm:gap-y-8 lg:gap-x-14 svelte-113ksc7"),c(e,"class","font-bold ml-19 text-15px text-grey-53 lg:ml-23 svelte-113ksc7")},m(s,l){C(s,e,l),w(e,a),I(r,a,null),n=!0},p(s,l){const u={};l&1&&(u.url=s[0]),r.$set(u),(!n||l&8&&t!==(t=(s[3]?"after:opacity-0":"")+" flex sm:flex-row sm:gap-x-12 sm:relative <sm:flex-col <sm:gap-y-8 lg:gap-x-14 svelte-113ksc7"))&&c(a,"class",t)},i(s){n||(d(r.$$.fragment,s),n=!0)},o(s){k(r.$$.fragment,s),n=!1},d(s){s&&m(e),N(r)}}}function Ve(o){let e=!1,a=()=>{e=!1},r,t,n,s,l,u,f,i,p,h,E,M;F(o[8]),n=new ie({}),l=new ye({props:{active:o[4]}}),l.$on("click",o[7]);let v=o[2]&&o[4]&&K(o),g=!o[2]&&Q(o);return{c(){t=y("div"),D(n.$$.fragment),s=V(),D(l.$$.fragment),u=V(),v&&v.c(),f=V(),g&&g.c(),this.h()},l(_){t=x(_,"DIV",{style:!0,class:!0});var b=$(t);L(n.$$.fragment,b),s=A(b),L(l.$$.fragment,b),u=A(b),v&&v.l(b),f=A(b),g&&g.l(b),b.forEach(m),this.h()},h(){c(t,"style",i=o[2]?`padding: ${o[5]}px`:""),c(t,"class","bg-white flex py-14 items-center header-wrapper sticky sm:container sm:mx-auto <sm:p-8 <sm:relative svelte-113ksc7")},m(_,b){C(_,t,b),I(n,t,null),w(t,s),I(l,t,null),w(t,u),v&&v.m(t,null),w(t,f),g&&g.m(t,null),h=!0,E||(M=q(window,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(a,100),o[8]()}),E=!0)},p(_,[b]){b&2&&!e&&(e=!0,clearTimeout(r),scrollTo(window.pageXOffset,_[1]),r=setTimeout(a,100));const W={};b&16&&(W.active=_[4]),l.$set(W),_[2]&&_[4]?v?(v.p(_,b),b&20&&d(v,1)):(v=K(_),v.c(),d(v,1),v.m(t,f)):v&&(U(),k(v,1,1,()=>{v=null}),S()),_[2]?g&&(U(),k(g,1,1,()=>{g=null}),S()):g?(g.p(_,b),b&4&&d(g,1)):(g=Q(_),g.c(),d(g,1),g.m(t,null)),(!h||b&36&&i!==(i=_[2]?`padding: ${_[5]}px`:""))&&c(t,"style",i)},i(_){h||(d(n.$$.fragment,_),d(l.$$.fragment,_),d(v),d(g),p||F(()=>{p=X(t,oe,{}),p.start()}),h=!0)},o(_){k(n.$$.fragment,_),k(l.$$.fragment,_),k(v),k(g),h=!1},d(_){_&&m(t),N(n),N(l),v&&v.d(),g&&g.d(),E=!1,M()}}}const ee=96,te=32,le=16;function Ae(o,e,a){let r,t,n,s=H,l=()=>(s(),s=pe(r,v=>a(2,n=v)),r);o.$$.on_destroy.push(()=>s());let{url:u=""}=e,f,i=!1;me(()=>{const v=document.querySelector("a.active");if(v){const{offsetLeft:g,clientWidth:_}=v,b=g+_/2-12+"px";v.parentElement.style.setProperty("--position",b),a(3,f=!1)}else a(3,f=!0)});let p;const h=te/le/ee,E=()=>a(4,i=!i);function M(){a(1,p=window.pageYOffset)}return o.$$set=v=>{"url"in v&&a(0,u=v.url)},o.$$.update=()=>{o.$$.dirty&6&&a(5,t=n&&p<=ee?te-p*h:le)},l(a(6,r=$e("sm"))),[u,p,n,f,i,t,r,E,M]}class He extends B{constructor(e){super();O(this,e,Ae,Ve,P,{url:0})}}function De(o){let e,a,r,t,n,s,l,u,f,i;return t=new ie({}),l=new Z({}),f=new be({props:{buttonText:"See Our Portfolio"}}),{c(){e=y("footer"),a=y("div"),r=y("div"),D(t.$$.fragment),n=V(),s=y("div"),D(l.$$.fragment),u=V(),D(f.$$.fragment),this.h()},l(p){e=x(p,"FOOTER",{class:!0});var h=$(e);a=x(h,"DIV",{class:!0});var E=$(a);r=x(E,"DIV",{class:!0});var M=$(r);L(t.$$.fragment,M),M.forEach(m),n=A(E),s=x(E,"DIV",{class:!0});var v=$(s);L(l.$$.fragment,v),v.forEach(m),u=A(E),L(f.$$.fragment,E),E.forEach(m),h.forEach(m),this.h()},h(){c(r,"class","bg-dark flex h-30 text-white w-30 items-center justify-center xl:w-50 xl:h-50  svelte-m1ss1a"),c(s,"class","flex flex-col font-bold text-center text-grey-53 gap-y-8 md:flex-row md:gap-y-0 md:gap-x-8 md:mr-auto md:gap-x-14  svelte-m1ss1a"),c(a,"class","bg-no-repeat flex flex-col pb-12 gap-y-8 items-center footer-bg md:flex-row md:pb-0 md:gap-y-0 md:gap-x-8  svelte-m1ss1a"),c(e,"class","mt-18 sm:mt-50 lg:container lg:mx-auto svelte-m1ss1a")},m(p,h){C(p,e,h),w(e,a),w(a,r),I(t,r,null),w(a,n),w(a,s),I(l,s,null),w(a,u),I(f,a,null),i=!0},p:H,i(p){i||(d(t.$$.fragment,p),d(l.$$.fragment,p),d(f.$$.fragment,p),i=!0)},o(p){k(t.$$.fragment,p),k(l.$$.fragment,p),k(f.$$.fragment,p),i=!1},d(p){p&&m(e),N(t),N(l),N(f)}}}class Le extends B{constructor(e){super();O(this,e,null,De,P,{})}}function se(o){let e,a;return e=new He({props:{url:o[0]}}),{c(){D(e.$$.fragment)},l(r){L(e.$$.fragment,r)},m(r,t){I(e,r,t),a=!0},p(r,t){const n={};t&1&&(n.url=r[0]),e.$set(n)},i(r){a||(d(e.$$.fragment,r),a=!0)},o(r){k(e.$$.fragment,r),a=!1},d(r){N(e,r)}}}function ae(o){let e,a=o[0],r,t,n,s=re(o);return t=new Le({}),{c(){e=y("div"),s.c(),r=V(),D(t.$$.fragment),this.h()},l(l){e=x(l,"DIV",{class:!0});var u=$(e);s.l(u),u.forEach(m),r=A(l),L(t.$$.fragment,l),this.h()},h(){c(e,"class","min-h-min-100vh w-full grid grid-rows-1 grid-cols-1 anim-container svelte-sfupja")},m(l,u){C(l,e,u),s.m(e,null),C(l,r,u),I(t,l,u),n=!0},p(l,u){u&1&&P(a,a=l[0])?(U(),k(s,1,1,H),S(),s=re(l),s.c(),d(s),s.m(e,null)):s.p(l,u)},i(l){n||(d(s),d(t.$$.fragment,l),n=!0)},o(l){k(s),k(t.$$.fragment,l),n=!1},d(l){l&&m(e),s.d(l),l&&m(r),N(t,l)}}}function re(o){let e,a,r,t;const n=o[3].default,s=he(n,o,o[2],null);return{c(){e=y("div"),s&&s.c(),this.h()},l(l){e=x(l,"DIV",{class:!0});var u=$(e);s&&s.l(u),u.forEach(m),this.h()},h(){c(e,"class","svelte-sfupja")},m(l,u){C(l,e,u),s&&s.m(e,null),t=!0},p(l,u){s&&s.p&&(!t||u&4)&&ve(s,n,l,l[2],t?de(n,l[2],u,null):_e(l[2]),null)},i(l){t||(d(s,l),F(()=>{r&&r.end(1),a=X(e,j,{y:10,duration:500,delay:1e3,opacity:0}),a.start()}),t=!0)},o(l){k(s,l),a&&a.invalidate(),r=ne(e,oe,{duration:500}),t=!1},d(l){l&&m(e),s&&s.d(l),l&&r&&r.end()}}}function Ie(o){let e,a,r,t=o[1]&&se(o),n=o[1]&&ae(o);return{c(){t&&t.c(),e=V(),n&&n.c(),a=J()},l(s){t&&t.l(s),e=A(s),n&&n.l(s),a=J()},m(s,l){t&&t.m(s,l),C(s,e,l),n&&n.m(s,l),C(s,a,l),r=!0},p(s,[l]){s[1]?t?(t.p(s,l),l&2&&d(t,1)):(t=se(s),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(U(),k(t,1,1,()=>{t=null}),S()),s[1]?n?(n.p(s,l),l&2&&d(n,1)):(n=ae(s),n.c(),d(n,1),n.m(a.parentNode,a)):n&&(U(),k(n,1,1,()=>{n=null}),S())},i(s){r||(d(t),d(n),r=!0)},o(s){k(t),k(n),r=!1},d(s){t&&t.d(s),s&&m(e),n&&n.d(s),s&&m(a)}}}const Be=async({url:o})=>({props:{url:o}});function Ne(o,e,a){let{$$slots:r={},$$scope:t}=e,n=!1;ge(()=>a(1,n=!0));let{url:s=""}=e;return o.$$set=l=>{"url"in l&&a(0,s=l.url),"$$scope"in l&&a(2,t=l.$$scope)},[s,n,t,r]}class Oe extends B{constructor(e){super();O(this,e,Ne,Ie,P,{url:0})}}export{Oe as default,Be as load};
