import{s as B,n as w}from"../chunks/scheduler.DUa3pFyD.js";import{S as M,i as H,e as p,c as d,g as O,a as N,d as i,o as x,s as P,b as u,p as S,h as T,j as f,k as l,q as b,m as k,n as q,r as L}from"../chunks/index.DdLBidz5.js";import{S as U}from"../chunks/SocialMediaLogin.CTV3pEeD.js";import{S as j}from"../chunks/SupportImage.C29YCQFt.js";function F($){let e,n=`<form action="" class="email_form"><input type="text" name="name" id="name" class="inp" placeholder="Enter your name" autocomplete="off"/> <input type="email" name="email" id="email" class="inp" placeholder="Enter your email" autocomplete="off"/> <input type="text" name="number" id="number" class="inp" placeholder="Enter your number" autocomplete="off"/> <div class="password svelte-qgiohf"><input type="password" name="password" id="password" class="password_inp" placeholder="Enter password"/> <img src="/images/icons/eye-close-icon.svg" id="close-eye" alt="closed-eye" class="close_icon svelte-qgiohf" width="25" onclick="openPassword(1)"/> <img src="/images/icons/eye-open-icon.svg" id="open-eye" alt="open-eye" class="close_icon hidden svelte-qgiohf" width="25" onclick="openPassword(2)"/></div> <button type="submit" class="log_btn svelte-qgiohf"><img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow"/> <span>Sign Up</span></button> <p class="signin text_center svelte-qgiohf"><span>Familiar face? Sign in here.</span> <span><a href="/login/signin" class="uppercase ternary_txt svelte-qgiohf">Sign in?</a></span></p></form> <script>function openPassword(choice) {
            const closeEyeIcon = document.getElementById("close-eye");
            const openEyeIcon = document.getElementById("open-eye");
            const passwordInput = document.getElementById("password");

            if(choice == 1) {
                closeEyeIcon.classList.add("hidden");
                openEyeIcon.classList.remove("hidden");
                passwordInput.type = "text";
            } else {
                closeEyeIcon.classList.remove("hidden");
                openEyeIcon.classList.add("hidden");
                passwordInput.type = "password";
            }
        }<\/script>`;return{c(){e=p("section"),e.innerHTML=n},l(t){e=d(t,"SECTION",{"data-svelte-h":!0}),O(e)!=="svelte-rihhag"&&(e.innerHTML=n)},m(t,a){N(t,e,a)},p:w,i:w,o:w,d(t){t&&i(e)}}}class R extends M{constructor(e){super(),H(this,e,null,F,B,{})}}function z($){let e,n,t,a,E,o,m,r,I,g,c,h;return a=new j({props:{title:"Ready to take the first step!!!",content:"Sign up now and let's make magic happen together!",imageLink:"/images/images/background-signup.png"}}),r=new U({props:{title:"Sign Up"}}),c=new R({}),{c(){e=p("section"),n=p("div"),t=p("div"),x(a.$$.fragment),E=P(),o=p("div"),m=p("div"),x(r.$$.fragment),I=P(),g=p("div"),x(c.$$.fragment),this.h()},l(s){e=d(s,"SECTION",{});var v=u(e);n=d(v,"DIV",{class:!0});var _=u(n);t=d(_,"DIV",{class:!0});var D=u(t);S(a.$$.fragment,D),D.forEach(i),E=T(_),o=d(_,"DIV",{class:!0});var y=u(o);m=d(y,"DIV",{class:!0});var V=u(m);S(r.$$.fragment,V),V.forEach(i),I=T(y),g=d(y,"DIV",{class:!0});var C=u(g);S(c.$$.fragment,C),C.forEach(i),y.forEach(i),_.forEach(i),v.forEach(i),this.h()},h(){f(t,"class","background svelte-13gu04r"),f(m,"class","social_login w-100"),f(g,"class","email_login w-100"),f(o,"class","content flex flex_col flex_space_between svelte-13gu04r"),f(n,"class","container flex flex_row")},m(s,v){N(s,e,v),l(e,n),l(n,t),b(a,t,null),l(n,E),l(n,o),l(o,m),b(r,m,null),l(o,I),l(o,g),b(c,g,null),h=!0},p:w,i(s){h||(k(a.$$.fragment,s),k(r.$$.fragment,s),k(c.$$.fragment,s),h=!0)},o(s){q(a.$$.fragment,s),q(r.$$.fragment,s),q(c.$$.fragment,s),h=!1},d(s){s&&i(e),L(a),L(r),L(c)}}}class Q extends M{constructor(e){super(),H(this,e,null,z,B,{})}}export{Q as component};