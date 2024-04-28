import { c as create_ssr_component, v as validate_component } from './ssr-BDbnMkiA.js';
import { S as SocialMediaLogin } from './SocialMediaLogin-BJTp4RpE.js';
import { S as SupportImage } from './SupportImage-BTVsDf2j.js';

const css$1 = {
  code: ".password.svelte-qgiohf{position:relative}.close_icon.svelte-qgiohf{position:absolute;right:15px;top:20px}.close_icon.svelte-qgiohf:hover{cursor:pointer}.signin.svelte-qgiohf{margin:15px auto}.log_btn.svelte-qgiohf{border:1px solid #004B60}.uppercase.svelte-qgiohf:hover{text-decoration:underline}@media(min-width: 768px){}",
  map: '{"version":3,"file":"Signup.svelte","sources":["Signup.svelte"],"sourcesContent":["<script>\\n<\/script>\\n\\n<section>\\n    <form action=\\"\\" class=\\"email_form\\">\\n        <input type=\\"text\\" name=\\"name\\" id=\\"name\\" class=\\"inp\\" placeholder=\\"Enter your name\\" autocomplete=\\"off\\">\\n        <input type=\\"email\\" name=\\"email\\" id=\\"email\\" class=\\"inp\\" placeholder=\\"Enter your email\\" autocomplete=\\"off\\">\\n        <input type=\\"text\\" name=\\"number\\" id=\\"number\\" class=\\"inp\\" placeholder=\\"Enter your number\\" autocomplete=\\"off\\">\\n        <div class=\\"password\\">\\n            <input type=\\"password\\" name=\\"password\\" id=\\"password\\" class=\\"password_inp\\" placeholder=\\"Enter password\\">\\n            <img src=\\"/images/icons/eye-close-icon.svg\\" id=\\"close-eye\\" alt=\\"closed-eye\\" class=\\"close_icon\\" width=\\"25\\" onclick=\\"openPassword(1)\\">\\n            <img src=\\"/images/icons/eye-open-icon.svg\\" id=\\"open-eye\\" alt=\\"open-eye\\" class=\\"close_icon hidden\\" width=\\"25\\" onclick=\\"openPassword(2)\\">\\n        </div>\\n\\n        <button type=\\"submit\\" class=\\"log_btn\\">\\n            <img src=\\"/images/icons/arrow-right-long-solid-left.svg\\" alt=\\"right-arrow\\">\\n            <span>Sign Up</span>\\n        </button>\\n\\n        <p class=\\"signin text_center\\">\\n            <span>Familiar face? Sign in here. </span>\\n            <span><a href=\\"/login/signin\\" class=\\"uppercase ternary_txt\\">Sign in?</a></span>\\n        </p>\\n    </form>\\n    <script>\\n        function openPassword(choice) {\\n            const closeEyeIcon = document.getElementById(\\"close-eye\\");\\n            const openEyeIcon = document.getElementById(\\"open-eye\\");\\n            const passwordInput = document.getElementById(\\"password\\");\\n\\n            if(choice == 1) {\\n                closeEyeIcon.classList.add(\\"hidden\\");\\n                openEyeIcon.classList.remove(\\"hidden\\");\\n                passwordInput.type = \\"text\\";\\n            } else {\\n                closeEyeIcon.classList.remove(\\"hidden\\");\\n                openEyeIcon.classList.add(\\"hidden\\");\\n                passwordInput.type = \\"password\\";\\n            }\\n        }\\n    <\/script>\\n</section>\\n\\n<style>\\n\\n    .password {\\n        position: relative;\\n    }\\n\\n    .close_icon {\\n        position: absolute;\\n        right: 15px;\\n        top: 20px;\\n    }\\n\\n    .close_icon:hover {\\n        cursor: pointer;\\n    }\\n\\n    .signin {\\n        margin: 15px auto;\\n    }\\n\\n    .log_btn {\\n        border: 1px solid #004B60;\\n    }\\n\\n    .uppercase:hover {\\n        text-decoration: underline;\\n    }\\n\\n    @media(min-width: 768px) {\\n    }\\n\\n</style>"],"names":[],"mappings":"AA6CI,uBAAU,CACN,QAAQ,CAAE,QACd,CAEA,yBAAY,CACR,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IACT,CAEA,yBAAW,MAAO,CACd,MAAM,CAAE,OACZ,CAEA,qBAAQ,CACJ,MAAM,CAAE,IAAI,CAAC,IACjB,CAEA,sBAAS,CACL,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACtB,CAEA,wBAAU,MAAO,CACb,eAAe,CAAE,SACrB,CAEA,MAAM,YAAY,KAAK,CAAE,CACzB"}'
};
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section data-svelte-h="svelte-rihhag"><form action="" class="email_form"><input type="text" name="name" id="name" class="inp" placeholder="Enter your name" autocomplete="off"> <input type="email" name="email" id="email" class="inp" placeholder="Enter your email" autocomplete="off"> <input type="text" name="number" id="number" class="inp" placeholder="Enter your number" autocomplete="off"> <div class="password svelte-qgiohf"><input type="password" name="password" id="password" class="password_inp" placeholder="Enter password"> <img src="/images/icons/eye-close-icon.svg" id="close-eye" alt="closed-eye" class="close_icon svelte-qgiohf" width="25" onclick="openPassword(1)"> <img src="/images/icons/eye-open-icon.svg" id="open-eye" alt="open-eye" class="close_icon hidden svelte-qgiohf" width="25" onclick="openPassword(2)"></div> <button type="submit" class="log_btn svelte-qgiohf"><img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow"> <span>Sign Up</span></button> <p class="signin text_center svelte-qgiohf"><span>Familiar face? Sign in here.</span> <span><a href="/login/signin" class="uppercase ternary_txt svelte-qgiohf">Sign in?</a></span></p></form> <script>function openPassword(choice) {
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
        }<\/script> </section>`;
});
const css = {
  code: ".background.svelte-13gu04r{display:none}.content.svelte-13gu04r{margin:auto;padding:40px 25px}@media(min-width: 768px){.content.svelte-13gu04r{width:60%;padding:85px 50px}.background.svelte-13gu04r{display:none;width:40%}}@media(min-width: 1200px){.content.svelte-13gu04r{width:30%;padding:30px 50px}.background.svelte-13gu04r{display:block;width:70%}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import SocialMediaLogin from \\"$lib/components/SocialMediaLogin.svelte\\";\\n    import Signup from \\"$lib/components/Signup.svelte\\";\\n    import SupportImage from \\"$lib/components/SupportImage.svelte\\";\\n<\/script>   \\n\\n<section>\\n    <div class=\\"container flex flex_row\\">\\n        <div class=\\"background\\">\\n            <SupportImage title=\\"Ready to take the first step!!!\\" content=\\"Sign up now and let's make magic happen together!\\" imageLink=\\"/images/images/background-signup.png\\"/>\\n        </div>  \\n        <div class=\\"content flex flex_col flex_space_between\\">\\n            <div class=\\"social_login w-100\\">\\n                <SocialMediaLogin title=\\"Sign Up\\" />\\n            </div>\\n\\n            <div class=\\"email_login w-100\\">\\n                <Signup />\\n            </div>\\n        </div>\\n    </div>\\n</section>\\n\\n<style>\\n    .background {\\n        display: none;\\n    }\\n\\n    .content {\\n        margin: auto;\\n        padding: 40px 25px;\\n    }\\n\\n\\n    @media (min-width: 768px) {\\n        .content {\\n            width: 60%;\\n            padding: 85px 50px;\\n        }\\n\\n        .background {\\n            display: none;\\n            width: 40%;\\n        }\\n    }\\n\\n    @media (min-width: 1200px) {\\n        .content {\\n            width: 30%;\\n            padding: 30px 50px;\\n        }\\n\\n        .background {\\n            display: block;\\n            width: 70%;\\n        }\\n    }\\n\\n</style>"],"names":[],"mappings":"AAwBI,0BAAY,CACR,OAAO,CAAE,IACb,CAEA,uBAAS,CACL,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAClB,CAGA,MAAO,YAAY,KAAK,CAAE,CACtB,uBAAS,CACL,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CAAC,IAClB,CAEA,0BAAY,CACR,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,GACX,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,uBAAS,CACL,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CAAC,IAClB,CAEA,0BAAY,CACR,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,GACX,CACJ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><div class="container flex flex_row"><div class="background svelte-13gu04r">${validate_component(SupportImage, "SupportImage").$$render(
    $$result,
    {
      title: "Ready to take the first step!!!",
      content: "Sign up now and let's make magic happen together!",
      imageLink: "/images/images/background-signup.png"
    },
    {},
    {}
  )}</div> <div class="content flex flex_col flex_space_between svelte-13gu04r"><div class="social_login w-100">${validate_component(SocialMediaLogin, "SocialMediaLogin").$$render($$result, { title: "Sign Up" }, {}, {})}</div> <div class="email_login w-100">${validate_component(Signup, "Signup").$$render($$result, {}, {}, {})}</div></div></div> </section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D8VYto3E.js.map
