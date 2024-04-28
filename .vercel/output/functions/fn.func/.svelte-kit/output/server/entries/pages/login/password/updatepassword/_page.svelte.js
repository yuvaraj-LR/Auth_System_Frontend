import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
/* empty css                                                                   */
import { S as SupportImage } from "../../../../../chunks/SupportImage.js";
const css$1 = {
  code: ".log_btn.svelte-1y7dojl{border:1px solid hsl(193, 100%, 19%)}.password.svelte-1y7dojl{position:relative}.close_icon.svelte-1y7dojl{position:absolute;right:15px;top:20px}.close_icon.svelte-1y7dojl:hover{cursor:pointer}.flex.svelte-1y7dojl{margin:20px auto;color:#00B4AE}@media(min-width: 768px){}",
  map: '{"version":3,"file":"UpdatePassword.svelte","sources":["UpdatePassword.svelte"],"sourcesContent":["<script>\\n    export let email;\\n\\n    export let form;\\n    export let data;\\n\\n    console.log(email, \\"email...\\");\\n<\/script>\\n\\n<section>\\n    <form action=\\"\\" class=\\"email_form\\">\\n        <input type=\\"email\\" name=\\"email\\" id=\\"email\\" class=\\"inp\\" placeholder=\\"Enter your email\\" value={email} autocomplete=\\"off\\" disabled />\\n        \\n        <div class=\\"password\\">\\n            <input type=\\"password\\" name=\\"old-password\\" id=\\"old-password\\" class=\\"inp\\" placeholder=\\"Old Password\\" autocomplete=\\"off\\">\\n            <img src=\\"/images/icons/eye-close-icon.svg\\" id=\\"close-eye\\" alt=\\"closed-eye\\" class=\\"close_icon\\" width=\\"25\\" onclick=\\"openPassword(1)\\">\\n            <img src=\\"/images/icons/eye-open-icon.svg\\" id=\\"open-eye\\" alt=\\"open-eye\\" class=\\"close_icon hidden\\" width=\\"25\\" onclick=\\"openPassword(2)\\">\\n        </div>\\n\\n        <div class=\\"password\\">\\n            <input type=\\"password\\" name=\\"new-password\\" id=\\"new-password\\" class=\\"inp\\" placeholder=\\"New Password\\" autocomplete=\\"off\\">\\n\\n            <img src=\\"/images/icons/eye-close-icon.svg\\" id=\\"close-eye-new\\" alt=\\"closed-eye\\" class=\\"close_icon\\" width=\\"25\\" onclick=\\"openConfirmPassword(1)\\">\\n            <img src=\\"/images/icons/eye-open-icon.svg\\" id=\\"open-eye-conf\\" alt=\\"open-eye\\" class=\\"close_icon hidden\\" width=\\"25\\" onclick=\\"openConfirmPassword(2)\\">\\n    \\n            <input type=\\"password\\" name=\\"confirm-password\\" id=\\"confirm-password\\" class=\\"inp\\" placeholder=\\"Confirm Password\\" autocomplete=\\"off\\">\\n        </div>\\n\\n        <button type=\\"submit\\" class=\\"log_btn\\">\\n            <img src=\\"/images/icons/arrow-right-long-solid-left.svg\\" alt=\\"right-arrow\\">\\n            <span>Change Password</span>\\n        </button>\\n\\n        <a href=\\"/\\" class=\\"flex flex_center\\">Back</a>\\n    </form>\\n    <script>\\n        function openPassword(choice) {\\n            const closeEyeIcon = document.getElementById(\\"close-eye\\");\\n            const openEyeIcon = document.getElementById(\\"open-eye\\");\\n            const passwordInput = document.getElementById(\\"old-password\\");\\n\\n            if(choice == 1) {\\n                closeEyeIcon.classList.add(\\"hidden\\");\\n                openEyeIcon.classList.remove(\\"hidden\\");\\n                passwordInput.type = \\"text\\";\\n            } else if (choice == 2) {\\n                closeEyeIcon.classList.remove(\\"hidden\\");\\n                openEyeIcon.classList.add(\\"hidden\\");\\n                passwordInput.type = \\"password\\";\\n            } \\n        }\\n\\n        function openConfirmPassword(choice) {\\n            const closeEyeIconNew = document.getElementById(\\"close-eye-new\\");\\n            const openEyeIconNew = document.getElementById(\\"open-eye-conf\\");\\n            const newPasswordInput = document.getElementById(\\"new-password\\");\\n            const confirmPasswordInput = document.getElementById(\\"confirm-password\\");\\n\\n            if (choice == 1) {\\n                closeEyeIconNew.classList.add(\\"hidden\\");\\n                openEyeIconNew.classList.remove(\\"hidden\\");\\n                newPasswordInput.type = \\"text\\";\\n                confirmPasswordInput.type = \\"text\\";\\n            } else {\\n                closeEyeIconNew.classList.remove(\\"hidden\\");\\n                openEyeIconNew.classList.add(\\"hidden\\");\\n                newPasswordInput.type = \\"password\\";\\n                confirmPasswordInput.type = \\"password\\";\\n            }\\n        }\\n    <\/script>\\n</section>\\n\\n<style>\\n\\n    .log_btn {\\n        border: 1px solid hsl(193, 100%, 19%);\\n    }\\n\\n    .password {\\n        position: relative;\\n    }\\n\\n    .close_icon {\\n        position: absolute;\\n        right: 15px;\\n        top: 20px;\\n    }\\n\\n    .close_icon:hover {\\n        cursor: pointer;\\n    }\\n\\n    .flex {\\n        margin: 20px auto;\\n        color: #00B4AE;\\n    }\\n\\n    @media(min-width: 768px) {\\n    }\\n\\n</style>"],"names":[],"mappings":"AA2EI,uBAAS,CACL,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CACxC,CAEA,wBAAU,CACN,QAAQ,CAAE,QACd,CAEA,0BAAY,CACR,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IACT,CAEA,0BAAW,MAAO,CACd,MAAM,CAAE,OACZ,CAEA,oBAAM,CACF,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,KAAK,CAAE,OACX,CAEA,MAAM,YAAY,KAAK,CAAE,CACzB"}'
};
const UpdatePassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email: email2 } = $$props;
  let { form } = $$props;
  let { data } = $$props;
  console.log(email2, "email...");
  if ($$props.email === void 0 && $$bindings.email && email2 !== void 0)
    $$bindings.email(email2);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<section><form action="" class="email_form"><input type="email" name="email" id="email" class="inp" placeholder="Enter your email"${add_attribute("value", email2, 0)} autocomplete="off" disabled> <div class="password svelte-1y7dojl" data-svelte-h="svelte-1bx1uph"><input type="password" name="old-password" id="old-password" class="inp" placeholder="Old Password" autocomplete="off"> <img src="/images/icons/eye-close-icon.svg" id="close-eye" alt="closed-eye" class="close_icon svelte-1y7dojl" width="25" onclick="openPassword(1)"> <img src="/images/icons/eye-open-icon.svg" id="open-eye" alt="open-eye" class="close_icon hidden svelte-1y7dojl" width="25" onclick="openPassword(2)"></div> <div class="password svelte-1y7dojl" data-svelte-h="svelte-1tjzalj"><input type="password" name="new-password" id="new-password" class="inp" placeholder="New Password" autocomplete="off"> <img src="/images/icons/eye-close-icon.svg" id="close-eye-new" alt="closed-eye" class="close_icon svelte-1y7dojl" width="25" onclick="openConfirmPassword(1)"> <img src="/images/icons/eye-open-icon.svg" id="open-eye-conf" alt="open-eye" class="close_icon hidden svelte-1y7dojl" width="25" onclick="openConfirmPassword(2)"> <input type="password" name="confirm-password" id="confirm-password" class="inp" placeholder="Confirm Password" autocomplete="off"></div> <button type="submit" class="log_btn svelte-1y7dojl" data-svelte-h="svelte-1n0m59l"><img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow"> <span>Change Password</span></button> <a href="/" class="flex flex_center svelte-1y7dojl" data-svelte-h="svelte-jzgvld">Back</a></form> <script data-svelte-h="svelte-2wea82">function openPassword(choice) {
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
        }<\/script> </section>`;
});
const css = {
  code: ".background.svelte-mekjar{display:none}.content.svelte-mekjar{margin:auto;padding:40px 25px}@media(min-width: 768px){.content.svelte-mekjar{width:60%;padding:85px 50px}.background.svelte-mekjar{display:none;width:40%}}@media(min-width: 1200px){.content.svelte-mekjar{width:30%;padding:85px 50px}.background.svelte-mekjar{display:block;width:70%}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import SocialMediaLogin from \\"$lib/components/SocialMediaLogin.svelte\\";\\n    import UpdatePassword from \\"$lib/components/UpdatePassword.svelte\\";\\n    import SupportImage from \\"$lib/components/SupportImage.svelte\\";\\n\\n    export let form;\\n    export let data;\\n\\n    let email = \\"yuvaraj@cn.com\\";\\n\\n<\/script>   \\n\\n<section>\\n    <div class=\\"container flex flex_row\\">\\n        <div class=\\"background\\">\\n            <SupportImage title=\\"Strengthen, Renew, Secure!!!\\" content=\\"Update your password for enhanced data protection.\\" imageLink=\\"/images/images/background-login.png\\"/>\\n        </div>  \\n        <div class=\\"content flex flex_col \\">\\n            <div class=\\"social_login w-100\\">\\n                <h2 class=\\"uppercase text_center\\">Update Password</h2>\\n            </div>\\n\\n            <div class=\\"email_login w-100\\">\\n                <UpdatePassword {email} {form} {data}/>\\n            </div>\\n        </div>\\n    </div>\\n</section>\\n\\n<style>\\n    .background {\\n        display: none;\\n    }\\n\\n    .content {\\n        margin: auto;\\n        padding: 40px 25px;\\n    }\\n\\n\\n    @media (min-width: 768px) {\\n        .content {\\n            width: 60%;\\n            padding: 85px 50px;\\n        }\\n\\n        .background {\\n            display: none;\\n            width: 40%;\\n        }\\n    }\\n\\n    @media (min-width: 1200px) {\\n        .content {\\n            width: 30%;\\n            padding: 85px 50px;\\n        }\\n\\n        .background {\\n            display: block;\\n            width: 70%;\\n        }\\n    }\\n\\n</style>"],"names":[],"mappings":"AA8BI,yBAAY,CACR,OAAO,CAAE,IACb,CAEA,sBAAS,CACL,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAClB,CAGA,MAAO,YAAY,KAAK,CAAE,CACtB,sBAAS,CACL,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CAAC,IAClB,CAEA,yBAAY,CACR,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,GACX,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,sBAAS,CACL,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CAAC,IAClB,CAEA,yBAAY,CACR,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,GACX,CACJ"}'
};
let email = "yuvaraj@cn.com";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div class="container flex flex_row"><div class="background svelte-mekjar">${validate_component(SupportImage, "SupportImage").$$render(
    $$result,
    {
      title: "Strengthen, Renew, Secure!!!",
      content: "Update your password for enhanced data protection.",
      imageLink: "/images/images/background-login.png"
    },
    {},
    {}
  )}</div> <div class="content flex flex_col  svelte-mekjar"><div class="social_login w-100" data-svelte-h="svelte-tv1vis"><h2 class="uppercase text_center">Update Password</h2></div> <div class="email_login w-100">${validate_component(UpdatePassword, "UpdatePassword").$$render($$result, { email, form, data }, {}, {})}</div></div></div> </section>`;
});
export {
  Page as default
};
