import{s as z,n as j}from"./scheduler.DUa3pFyD.js";import{S as G,i as J,e as o,s as _,t as H,c,b as w,h as g,f as N,d as P,g as b,j as t,a as K,k as n,l as Q}from"./index.DdLBidz5.js";function W(C){let l,e,s,x,r,a,E,y,I,L,p,R="Please enter the OTP below to sign in.",S,u,D,v,U='<div class="align_space svelte-1hnigtk"><span class="rest_time"></span> <span class="fget_pass hidden svelte-1hnigtk">Resend OTP?</span></div>',M,h,A='<img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow"/> <span>Verify OTP</span>',q,f,F="Back",B,T,V=`const restDiv = document.querySelector(".rest_time");
        const restBtn = document.querySelector(".fget_pass");

        let initialCount = 5;
    
        let dispCount = setInterval(count, 1000);
    
        function count() {
            if (initialCount < 0) {
                // Enable the button after 45 seconds
                restDiv.classList.add("hidden");
                restBtn.classList.remove("hidden");
            } else {
                // Update the countdown timer
                restDiv.textContent = "Time Remaining: " + initialCount + " seconds";
            }
            initialCount = initialCount - 1;
        }`;return{c(){l=o("section"),e=o("form"),s=o("input"),x=_(),r=o("div"),a=o("p"),E=H("An email with the OTP has been sent to "),y=H(C[0]),I=H("."),L=_(),p=o("p"),p.textContent=R,S=_(),u=o("input"),D=_(),v=o("div"),v.innerHTML=U,M=_(),h=o("button"),h.innerHTML=A,q=_(),f=o("a"),f.textContent=F,B=_(),T=o("script"),T.textContent=V,this.h()},l(d){l=c(d,"SECTION",{});var m=w(l);e=c(m,"FORM",{action:!0,class:!0});var i=w(e);s=c(i,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0,autocomplete:!0}),x=g(i),r=c(i,"DIV",{class:!0});var k=w(r);a=c(k,"P",{class:!0});var O=w(a);E=N(O,"An email with the OTP has been sent to "),y=N(O,C[0]),I=N(O,"."),O.forEach(P),L=g(k),p=c(k,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-o48r1e"&&(p.textContent=R),k.forEach(P),S=g(i),u=c(i,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0,autocomplete:!0}),D=g(i),v=c(i,"DIV",{class:!0,"data-svelte-h":!0}),b(v)!=="svelte-116kxrz"&&(v.innerHTML=U),M=g(i),h=c(i,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),b(h)!=="svelte-89qlxi"&&(h.innerHTML=A),q=g(i),f=c(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),b(f)!=="svelte-13l665y"&&(f.textContent=F),i.forEach(P),B=g(m),T=c(m,"SCRIPT",{"data-svelte-h":!0}),b(T)!=="svelte-hn1mle"&&(T.textContent=V),m.forEach(P),this.h()},h(){t(s,"type","email"),t(s,"name","email"),t(s,"id","email"),t(s,"class","inp"),t(s,"placeholder","Enter your email"),s.value=C[0],t(s,"autocomplete","off"),s.disabled=!0,t(a,"class","svelte-1hnigtk"),t(p,"class","svelte-1hnigtk"),t(r,"class","otp_desc svelte-1hnigtk"),t(u,"type","number"),t(u,"name","otp"),t(u,"id","otp"),t(u,"class","inp"),t(u,"placeholder","Enter OTP"),t(u,"autocomplete","off"),t(v,"class","forgetpassword flex"),t(h,"type","submit"),t(h,"class","log_btn svelte-1hnigtk"),t(f,"href","/login/signin"),t(f,"class","flex flex_center center_text svelte-1hnigtk"),t(e,"action",""),t(e,"class","email_form")},m(d,m){K(d,l,m),n(l,e),n(e,s),n(e,x),n(e,r),n(r,a),n(a,E),n(a,y),n(a,I),n(r,L),n(r,p),n(e,S),n(e,u),n(e,D),n(e,v),n(e,M),n(e,h),n(e,q),n(e,f),n(l,B),n(l,T)},p(d,[m]){m&1&&s.value!==d[0]&&(s.value=d[0]),m&1&&Q(y,d[0])},i:j,o:j,d(d){d&&P(l)}}}function X(C,l,e){let{email:s}=l,{form:x}=l,{data:r}=l;return C.$$set=a=>{"email"in a&&e(0,s=a.email),"form"in a&&e(1,x=a.form),"data"in a&&e(2,r=a.data)},[s,x,r]}class $ extends G{constructor(l){super(),J(this,l,X,W,z,{email:0,form:1,data:2})}}export{$ as F};
