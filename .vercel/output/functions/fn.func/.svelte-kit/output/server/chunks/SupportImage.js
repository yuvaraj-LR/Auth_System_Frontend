import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const css = {
  code: ".background_img.svelte-19tpd2j{position:relative}.bg_img.svelte-19tpd2j{position:absolute;left:0;width:100%;height:100vh;box-shadow:rgba(28, 28, 36, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset}.background_content.svelte-19tpd2j{position:relative;height:100vh;max-width:500px;width:100%;margin:auto}.bg_content.svelte-19tpd2j{padding:1rem;gap:2rem}",
  map: '{"version":3,"file":"SupportImage.svelte","sources":["SupportImage.svelte"],"sourcesContent":["<script>\\n    export let title;\\n    export let content;\\n    export let imageLink;\\n<\/script>\\n\\n<section>\\n    <div class=\\"background_img\\">\\n        <img src={imageLink} alt=\\"signin-background\\" class=\\"bg_img\\">\\n    </div>\\n\\n    <div class=\\"background_content flex flex_col flex_center white-color\\">\\n        <div class=\\"bg_content flex flex_col\\">\\n            <h1 class=\\"uppercase\\">{title}</h1>\\n            <h3 class=\\"p-5\\">{content}</h3>\\n        </div>\\n    </div>\\n</section>\\n\\n<style>\\n    .background_img {\\n        position: relative;\\n    }\\n\\n    .bg_img {\\n        position: absolute;\\n        left: 0;\\n        width: 100%;\\n        height: 100vh;\\n        box-shadow: rgba(28, 28, 36, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\\n    }\\n\\n    .background_content {\\n        position: relative;\\n        height: 100vh;\\n        max-width: 500px;\\n        width: 100%;\\n        margin: auto;\\n    }\\n\\n    .bg_content {\\n        padding: 1rem;\\n        gap: 2rem;\\n    }\\n\\n</style>"],"names":[],"mappings":"AAoBI,8BAAgB,CACZ,QAAQ,CAAE,QACd,CAEA,sBAAQ,CACJ,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,KAC7I,CAEA,kCAAoB,CAChB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CAEA,0BAAY,CACR,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACT"}'
};
const SupportImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { content } = $$props;
  let { imageLink } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.imageLink === void 0 && $$bindings.imageLink && imageLink !== void 0)
    $$bindings.imageLink(imageLink);
  $$result.css.add(css);
  return `<section><div class="background_img svelte-19tpd2j"><img${add_attribute("src", imageLink, 0)} alt="signin-background" class="bg_img svelte-19tpd2j"></div> <div class="background_content flex flex_col flex_center white-color svelte-19tpd2j"><div class="bg_content flex flex_col svelte-19tpd2j"><h1 class="uppercase">${escape(title)}</h1> <h3 class="p-5">${escape(content)}</h3></div></div> </section>`;
});
export {
  SupportImage as S
};
