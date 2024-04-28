import { c as create_ssr_component, v as validate_component } from './ssr-BDbnMkiA.js';
import { F as ForgetPassword } from './ForgetPassword-CfkOhjVr.js';
import { S as SupportImage } from './SupportImage-BTVsDf2j.js';

const css = {
  code: ".background.svelte-1m3uvws{display:none}.content.svelte-1m3uvws{margin:auto;padding:40px 25px}@media(min-width: 768px){.content.svelte-1m3uvws{width:60%;padding:85px 50px}.background.svelte-1m3uvws{display:none;width:40%}}@media(min-width: 1200px){.content.svelte-1m3uvws{width:30%;padding:30px 50px}.background.svelte-1m3uvws{display:block;width:70%}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import ForgetPassword from \\"$lib/components/ForgetPassword.svelte\\";\\n    import SupportImage from \\"$lib/components/SupportImage.svelte\\";\\n\\n    export let form;\\n    export let data;\\n\\n    const email = \\"yuvaraj@cn.com\\";\\n<\/script>   \\n\\n<section>\\n    <div class=\\"container flex flex_row\\">\\n        <div class=\\"background\\">\\n            <SupportImage title=\\"Quick, convenient, secure\\" content=\\"Unlock the door to your digital world with the key of OTP.\\" imageLink=\\"/images/images/background-signup.png\\"/>\\n        </div>  \\n        <div class=\\"content flex flex_col\\">\\n            <div class=\\"social_login w-100\\">\\n                <h2 class=\\"uppercase text_center\\">Sign By OTP</h2>\\n            </div>\\n\\n            <div class=\\"email_login w-100\\">\\n                <ForgetPassword {email} {form} {data}/>\\n            </div>\\n        </div>\\n    </div>\\n</section>\\n\\n<style>\\n    .background {\\n        display: none;\\n    }\\n\\n    .content {\\n        margin: auto;\\n        padding: 40px 25px;\\n    }\\n\\n    .back {\\n        margin: 30px auto;\\n        color: #925778;\\n    }\\n\\n\\n    @media (min-width: 768px) {\\n        .content {\\n            width: 60%;\\n            padding: 85px 50px;\\n        }\\n\\n        .background {\\n            display: none;\\n            width: 40%;\\n        }\\n    }\\n\\n    @media (min-width: 1200px) {\\n        .content {\\n            width: 30%;\\n            padding: 30px 50px;\\n        }\\n\\n        .background {\\n            display: block;\\n            width: 70%;\\n        }\\n    }\\n\\n</style>"],"names":[],"mappings":"AA4BI,0BAAY,CACR,OAAO,CAAE,IACb,CAEA,uBAAS,CACL,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAClB,CAQA,MAAO,YAAY,KAAK,CAAE,CACtB,uBAAS,CACL,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CAAC,IAClB,CAEA,0BAAY,CACR,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,GACX,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,uBAAS,CACL,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CAAC,IAClB,CAEA,0BAAY,CACR,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,GACX,CACJ"}'
};
const email = "yuvaraj@cn.com";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div class="container flex flex_row"><div class="background svelte-1m3uvws">${validate_component(SupportImage, "SupportImage").$$render(
    $$result,
    {
      title: "Quick, convenient, secure",
      content: "Unlock the door to your digital world with the key of OTP.",
      imageLink: "/images/images/background-signup.png"
    },
    {},
    {}
  )}</div> <div class="content flex flex_col svelte-1m3uvws"><div class="social_login w-100" data-svelte-h="svelte-p60u45"><h2 class="uppercase text_center">Sign By OTP</h2></div> <div class="email_login w-100">${validate_component(ForgetPassword, "ForgetPassword").$$render($$result, { email, form, data }, {}, {})}</div></div></div> </section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D881cFA4.js.map
