import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const css = {
  code: ".log_btn.svelte-1hnigtk{border:1px solid hsl(193, 100%, 19%)}.fget_pass.svelte-1hnigtk{color:#925778;display:flex;justify-content:flex-end;margin:0 0 45px}.fget_pass.svelte-1hnigtk:hover{text-decoration:underline;cursor:pointer}p.svelte-1hnigtk{font-size:15px}.otp_desc.svelte-1hnigtk{margin:5px;color:#00B4AE}.center_text.svelte-1hnigtk{margin:15px}.align_space.svelte-1hnigtk{display:flex;justify-content:space-between}@media(min-width: 768px){}",
  map: '{"version":3,"file":"ForgetPassword.svelte","sources":["ForgetPassword.svelte"],"sourcesContent":["<script>\\n    export let email;\\n\\n    export let form;\\n    export let data;\\n\\n<\/script>\\n\\n<section>\\n    <form action=\\"\\" class=\\"email_form\\">\\n        <input type=\\"email\\" name=\\"email\\" id=\\"email\\" class=\\"inp\\" placeholder=\\"Enter your email\\" value={email} autocomplete=\\"off\\" disabled />\\n        <div class=\\"otp_desc\\">\\n            <p>An email with the OTP has been sent to {email}.</p>\\n            <p>Please enter the OTP below to sign in.</p>\\n        </div>\\n        <input type=\\"number\\" name=\\"otp\\" id=\\"otp\\" class=\\"inp\\" placeholder=\\"Enter OTP\\" autocomplete=\\"off\\">\\n\\n        <div class=\\"forgetpassword flex\\">\\n            <div class=\\"align_space\\">\\n                <span class=\\"rest_time\\"></span>\\n                <span class=\\"fget_pass hidden\\">Resend OTP?</span>\\n            </div>\\n        </div>\\n\\n        <button type=\\"submit\\" class=\\"log_btn\\">\\n            <img src=\\"/images/icons/arrow-right-long-solid-left.svg\\" alt=\\"right-arrow\\">\\n            <span>Verify OTP</span>\\n        </button>\\n\\n        <a href=\\"/login/signin\\" class=\\"flex flex_center center_text\\">Back</a>\\n\\n    </form>\\n    <script>\\n        const restDiv = document.querySelector(\\".rest_time\\");\\n        const restBtn = document.querySelector(\\".fget_pass\\");\\n\\n        let initialCount = 5;\\n    \\n        let dispCount = setInterval(count, 1000);\\n    \\n        function count() {\\n            if (initialCount < 0) {\\n                // Enable the button after 45 seconds\\n                restDiv.classList.add(\\"hidden\\");\\n                restBtn.classList.remove(\\"hidden\\");\\n            } else {\\n                // Update the countdown timer\\n                restDiv.textContent = \\"Time Remaining: \\" + initialCount + \\" seconds\\";\\n            }\\n            initialCount = initialCount - 1;\\n        }\\n    <\/script>\\n</section>\\n\\n<style>\\n\\n    .log_btn {\\n        border: 1px solid hsl(193, 100%, 19%);\\n    }\\n\\n    .fget_pass {\\n        color: #925778;\\n        display: flex;\\n        justify-content: flex-end;\\n        margin: 0 0 45px;\\n    }\\n\\n    .fget_pass:hover {\\n        text-decoration: underline;\\n        cursor: pointer;\\n    }\\n\\n    p {\\n        font-size: 15px;\\n    }\\n\\n    .otp_desc {\\n        margin: 5px;\\n        color: #00B4AE;\\n    }\\n\\n    .center_text {\\n        margin: 15px;\\n    }\\n\\n    .align_space {\\n        display: flex;\\n        justify-content: space-between;\\n    }\\n\\n    @media(min-width: 768px) {\\n    }\\n\\n</style>"],"names":[],"mappings":"AAwDI,uBAAS,CACL,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CACxC,CAEA,yBAAW,CACP,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QAAQ,CACzB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,IAChB,CAEA,yBAAU,MAAO,CACb,eAAe,CAAE,SAAS,CAC1B,MAAM,CAAE,OACZ,CAEA,gBAAE,CACE,SAAS,CAAE,IACf,CAEA,wBAAU,CACN,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,OACX,CAEA,2BAAa,CACT,MAAM,CAAE,IACZ,CAEA,2BAAa,CACT,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACrB,CAEA,MAAM,YAAY,KAAK,CAAE,CACzB"}'
};
const ForgetPassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email } = $$props;
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><form action="" class="email_form"><input type="email" name="email" id="email" class="inp" placeholder="Enter your email"${add_attribute("value", email, 0)} autocomplete="off" disabled> <div class="otp_desc svelte-1hnigtk"><p class="svelte-1hnigtk">An email with the OTP has been sent to ${escape(email)}.</p> <p class="svelte-1hnigtk" data-svelte-h="svelte-o48r1e">Please enter the OTP below to sign in.</p></div> <input type="number" name="otp" id="otp" class="inp" placeholder="Enter OTP" autocomplete="off"> <div class="forgetpassword flex" data-svelte-h="svelte-116kxrz"><div class="align_space svelte-1hnigtk"><span class="rest_time"></span> <span class="fget_pass hidden svelte-1hnigtk">Resend OTP?</span></div></div> <button type="submit" class="log_btn svelte-1hnigtk" data-svelte-h="svelte-89qlxi"><img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow"> <span>Verify OTP</span></button> <a href="/login/signin" class="flex flex_center center_text svelte-1hnigtk" data-svelte-h="svelte-13l665y">Back</a></form> <script data-svelte-h="svelte-hn1mle">const restDiv = document.querySelector(".rest_time");
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
        }<\/script> </section>`;
});
export {
  ForgetPassword as F
};
