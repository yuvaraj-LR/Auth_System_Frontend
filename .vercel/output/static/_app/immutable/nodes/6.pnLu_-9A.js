import{s as C,n as y}from"../chunks/scheduler.DUa3pFyD.js";import{S as B,i as M,e as d,c as p,g as O,a as N,d as o,o as I,s as T,b as f,p as S,h as V,j as u,k as c,q as b,m as L,n as z,r as k}from"../chunks/index.DdLBidz5.js";import{S as H}from"../chunks/SocialMediaLogin.CTV3pEeD.js";import{S as j}from"../chunks/SupportImage.C29YCQFt.js";function F($){let e,n=`<form action="" class="email_form"><input type="email" name="email" id="email" class="inp" placeholder="Enter your Email" autocomplete="off"/> <div class="password svelte-1xnhz7f"><input type="password" name="password" id="password" class="inp" placeholder="Enter password"/> <img src="/images/icons/eye-close-icon.svg" id="close-eye" alt="closed-eye" class="close_icon svelte-1xnhz7f" width="25" onclick="openPassword(1)"/> <img src="/images/icons/eye-open-icon.svg" id="open-eye" alt="open-eye" class="close_icon hidden svelte-1xnhz7f" width="25" onclick="openPassword(2)"/></div> <div class="forgetpassword"><a href="/login/password/signbyotp" class="fget_pass svelte-1xnhz7f">Sign via OTP?</a> <a href="/login/password/forgetpassword" class="fget_pass margin_pass svelte-1xnhz7f">Forget Password?</a></div> <button type="submit" class="log_btn svelte-1xnhz7f"><span>Sign In</span> <img src="/images/icons/arrow-right-long-solid-right.svg" alt="right-arrow"/></button> <p class="signin text_center svelte-1xnhz7f"><span>Start Now! Sign up here.</span> <span><a href="/login/signup" class="uppercase ternary_txt svelte-1xnhz7f">Sign up?</a></span></p></form> <script>function openPassword(choice) {
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
        }<\/script>`;return{c(){e=d("section"),e.innerHTML=n},l(s){e=p(s,"SECTION",{"data-svelte-h":!0}),O(e)!=="svelte-1ywffb6"&&(e.innerHTML=n)},m(s,a){N(s,e,a)},p:y,i:y,o:y,d(s){s&&o(e)}}}class W extends B{constructor(e){super(),M(this,e,null,F,C,{})}}function A($){let e,n,s,a,i,x,m,r,E,g,l,h;return i=new H({props:{title:"Sign In"}}),r=new W({}),l=new j({props:{title:"Welcome back!!!",content:"Enter a world where are limitless.      Login now to continue your adventure.",imageLink:"/images/images/background-login.png"}}),{c(){e=d("section"),n=d("div"),s=d("div"),a=d("div"),I(i.$$.fragment),x=T(),m=d("div"),I(r.$$.fragment),E=T(),g=d("div"),I(l.$$.fragment),this.h()},l(t){e=p(t,"SECTION",{});var v=f(e);n=p(v,"DIV",{class:!0});var _=f(n);s=p(_,"DIV",{class:!0});var w=f(s);a=p(w,"DIV",{class:!0});var q=f(a);S(i.$$.fragment,q),q.forEach(o),x=V(w),m=p(w,"DIV",{class:!0});var P=f(m);S(r.$$.fragment,P),P.forEach(o),w.forEach(o),E=V(_),g=p(_,"DIV",{class:!0});var D=f(g);S(l.$$.fragment,D),D.forEach(o),_.forEach(o),v.forEach(o),this.h()},h(){u(a,"class","social_login w-100"),u(m,"class","email_login w-100"),u(s,"class","content flex flex_col flex_space_between svelte-q27q0u"),u(g,"class","background svelte-q27q0u"),u(n,"class","container flex flex_row")},m(t,v){N(t,e,v),c(e,n),c(n,s),c(s,a),b(i,a,null),c(s,x),c(s,m),b(r,m,null),c(n,E),c(n,g),b(l,g,null),h=!0},p:y,i(t){h||(L(i.$$.fragment,t),L(r.$$.fragment,t),L(l.$$.fragment,t),h=!0)},o(t){z(i.$$.fragment,t),z(r.$$.fragment,t),z(l.$$.fragment,t),h=!1},d(t){t&&o(e),k(i),k(r),k(l)}}}class R extends B{constructor(e){super(),M(this,e,null,A,C,{})}}export{R as component};