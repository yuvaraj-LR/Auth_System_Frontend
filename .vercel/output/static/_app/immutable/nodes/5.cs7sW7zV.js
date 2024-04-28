import{s as O,n as b}from"../chunks/scheduler.DUa3pFyD.js";import{S as U,i as R,e as m,s as P,c as p,b as C,h as L,g as k,d as _,j as o,a as q,k as a,o as B,p as M,q as S,m as H,n as D,r as V}from"../chunks/index.DdLBidz5.js";/* empty css                                                               */import{S as z}from"../chunks/SupportImage.C29YCQFt.js";function A(h){let n,e,t,c,s,l='<input type="password" name="old-password" id="old-password" class="inp" placeholder="Old Password" autocomplete="off"/> <img src="/images/icons/eye-close-icon.svg" id="close-eye" alt="closed-eye" class="close_icon svelte-1y7dojl" width="25" onclick="openPassword(1)"/> <img src="/images/icons/eye-open-icon.svg" id="open-eye" alt="open-eye" class="close_icon hidden svelte-1y7dojl" width="25" onclick="openPassword(2)"/>',u,v,j='<input type="password" name="new-password" id="new-password" class="inp" placeholder="New Password" autocomplete="off"/> <img src="/images/icons/eye-close-icon.svg" id="close-eye-new" alt="closed-eye" class="close_icon svelte-1y7dojl" width="25" onclick="openConfirmPassword(1)"/> <img src="/images/icons/eye-open-icon.svg" id="open-eye-conf" alt="open-eye" class="close_icon hidden svelte-1y7dojl" width="25" onclick="openConfirmPassword(2)"/> <input type="password" name="confirm-password" id="confirm-password" class="inp" placeholder="Confirm Password" autocomplete="off"/>',y,r,x='<img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow"/> <span>Change Password</span>',i,d,f="Back",T,w,N=`function openPassword(choice) {
            const closeEyeIcon = document.getElementById("close-eye");
            const openEyeIcon = document.getElementById("open-eye");
            const passwordInput = document.getElementById("old-password");

            if(choice == 1) {
                closeEyeIcon.classList.add("hidden");
                openEyeIcon.classList.remove("hidden");
                passwordInput.type = "text";
            } else if (choice == 2) {
                closeEyeIcon.classList.remove("hidden");
                openEyeIcon.classList.add("hidden");
                passwordInput.type = "password";
            } 
        }

        function openConfirmPassword(choice) {
            const closeEyeIconNew = document.getElementById("close-eye-new");
            const openEyeIconNew = document.getElementById("open-eye-conf");
            const newPasswordInput = document.getElementById("new-password");
            const confirmPasswordInput = document.getElementById("confirm-password");

            if (choice == 1) {
                closeEyeIconNew.classList.add("hidden");
                openEyeIconNew.classList.remove("hidden");
                newPasswordInput.type = "text";
                confirmPasswordInput.type = "text";
            } else {
                closeEyeIconNew.classList.remove("hidden");
                openEyeIconNew.classList.add("hidden");
                newPasswordInput.type = "password";
                confirmPasswordInput.type = "password";
            }
        }`;return{c(){n=m("section"),e=m("form"),t=m("input"),c=P(),s=m("div"),s.innerHTML=l,u=P(),v=m("div"),v.innerHTML=j,y=P(),r=m("button"),r.innerHTML=x,i=P(),d=m("a"),d.textContent=f,T=P(),w=m("script"),w.textContent=N,this.h()},l(I){n=p(I,"SECTION",{});var E=C(n);e=p(E,"FORM",{action:!0,class:!0});var g=C(e);t=p(g,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0,autocomplete:!0}),c=L(g),s=p(g,"DIV",{class:!0,"data-svelte-h":!0}),k(s)!=="svelte-1bx1uph"&&(s.innerHTML=l),u=L(g),v=p(g,"DIV",{class:!0,"data-svelte-h":!0}),k(v)!=="svelte-1tjzalj"&&(v.innerHTML=j),y=L(g),r=p(g,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),k(r)!=="svelte-1n0m59l"&&(r.innerHTML=x),i=L(g),d=p(g,"A",{href:!0,class:!0,"data-svelte-h":!0}),k(d)!=="svelte-jzgvld"&&(d.textContent=f),g.forEach(_),T=L(E),w=p(E,"SCRIPT",{"data-svelte-h":!0}),k(w)!=="svelte-2wea82"&&(w.textContent=N),E.forEach(_),this.h()},h(){o(t,"type","email"),o(t,"name","email"),o(t,"id","email"),o(t,"class","inp"),o(t,"placeholder","Enter your email"),t.value=h[0],o(t,"autocomplete","off"),t.disabled=!0,o(s,"class","password svelte-1y7dojl"),o(v,"class","password svelte-1y7dojl"),o(r,"type","submit"),o(r,"class","log_btn svelte-1y7dojl"),o(d,"href","/"),o(d,"class","flex flex_center svelte-1y7dojl"),o(e,"action",""),o(e,"class","email_form")},m(I,E){q(I,n,E),a(n,e),a(e,t),a(e,c),a(e,s),a(e,u),a(e,v),a(e,y),a(e,r),a(e,i),a(e,d),a(n,T),a(n,w)},p(I,[E]){E&1&&t.value!==I[0]&&(t.value=I[0])},i:b,o:b,d(I){I&&_(n)}}}function F(h,n,e){let{email:t}=n,{form:c}=n,{data:s}=n;return console.log(t,"email..."),h.$$set=l=>{"email"in l&&e(0,t=l.email),"form"in l&&e(1,c=l.form),"data"in l&&e(2,s=l.data)},[t,c,s]}class G extends U{constructor(n){super(),R(this,n,F,A,O,{email:0,form:1,data:2})}}function J(h){let n,e,t,c,s,l,u,v='<h2 class="uppercase text_center">Update Password</h2>',j,y,r,x;return c=new z({props:{title:"Strengthen, Renew, Secure!!!",content:"Update your password for enhanced data protection.",imageLink:"/images/images/background-login.png"}}),r=new G({props:{email:K,form:h[0],data:h[1]}}),{c(){n=m("section"),e=m("div"),t=m("div"),B(c.$$.fragment),s=P(),l=m("div"),u=m("div"),u.innerHTML=v,j=P(),y=m("div"),B(r.$$.fragment),this.h()},l(i){n=p(i,"SECTION",{});var d=C(n);e=p(d,"DIV",{class:!0});var f=C(e);t=p(f,"DIV",{class:!0});var T=C(t);M(c.$$.fragment,T),T.forEach(_),s=L(f),l=p(f,"DIV",{class:!0});var w=C(l);u=p(w,"DIV",{class:!0,"data-svelte-h":!0}),k(u)!=="svelte-tv1vis"&&(u.innerHTML=v),j=L(w),y=p(w,"DIV",{class:!0});var N=C(y);M(r.$$.fragment,N),N.forEach(_),w.forEach(_),f.forEach(_),d.forEach(_),this.h()},h(){o(t,"class","background svelte-mekjar"),o(u,"class","social_login w-100"),o(y,"class","email_login w-100"),o(l,"class","content flex flex_col  svelte-mekjar"),o(e,"class","container flex flex_row")},m(i,d){q(i,n,d),a(n,e),a(e,t),S(c,t,null),a(e,s),a(e,l),a(l,u),a(l,j),a(l,y),S(r,y,null),x=!0},p(i,[d]){const f={};d&1&&(f.form=i[0]),d&2&&(f.data=i[1]),r.$set(f)},i(i){x||(H(c.$$.fragment,i),H(r.$$.fragment,i),x=!0)},o(i){D(c.$$.fragment,i),D(r.$$.fragment,i),x=!1},d(i){i&&_(n),V(c),V(r)}}}let K="yuvaraj@cn.com";function Q(h,n,e){let{form:t}=n,{data:c}=n;return h.$$set=s=>{"form"in s&&e(0,t=s.form),"data"in s&&e(1,c=s.data)},[t,c]}class $ extends U{constructor(n){super(),R(this,n,Q,J,O,{form:0,data:1})}}export{$ as component};
