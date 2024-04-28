import { c as create_ssr_component, e as escape } from "./ssr.js";
/* empty css                                               */
const css = {
  code: '.social_media_container.svelte-1qyiqdw{gap:1.5rem}.seperator.svelte-1qyiqdw{margin:2.5rem auto;position:relative}.seperator.svelte-1qyiqdw::after{content:"";position:absolute;right:10px;height:2.5px;background:#999;width:35%;top:.6125rem}.seperator.svelte-1qyiqdw::before{content:"";position:absolute;left:10px;height:2.5px;background:#999;width:35%;top:.6125rem}',
  map: '{"version":3,"file":"SocialMediaLogin.svelte","sources":["SocialMediaLogin.svelte"],"sourcesContent":["<script>\\n    export let title;\\n<\/script>\\n\\n<section>\\n    <div class=\\"social_media_container flex flex_col\\">\\n        <h2 class=\\"uppercase text_center\\">{title}</h2>\\n        <button>\\n            <span><img src=\\"/images/icons/google.svg\\" alt=\\"google-icon\\"></span>\\n            <span>Google</span>\\n        </button>\\n        <button>\\n            <span><img src=\\"/images/icons/facebook.svg\\" alt=\\"fb-icon\\"></span>\\n            <span>Facebook</span>\\n        </button>\\n    </div>\\n\\n    <div class=\\"text_center seperator\\"><h4> ( OR ) </h4></div>\\n</section>\\n\\n<style>\\n\\n    .social_media_container {\\n        gap: 1.5rem;\\n    }\\n\\n    .seperator {\\n        margin: 2.5rem auto;\\n        position: relative;\\n    }\\n\\n    .seperator::after {\\n        content: \\"\\";\\n        position: absolute;\\n        right: 10px;\\n        height: 2.5px;\\n        background: #999;\\n        width: 35%;\\n        top: .6125rem;\\n    }\\n\\n    .seperator::before {\\n        content: \\"\\";\\n        position: absolute;\\n        left: 10px;\\n        height: 2.5px;\\n        background: #999;\\n        width: 35%;\\n        top: .6125rem;\\n    }\\n\\n</style>"],"names":[],"mappings":"AAsBI,sCAAwB,CACpB,GAAG,CAAE,MACT,CAEA,yBAAW,CACP,MAAM,CAAE,MAAM,CAAC,IAAI,CACnB,QAAQ,CAAE,QACd,CAEA,yBAAU,OAAQ,CACd,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,GAAG,CACV,GAAG,CAAE,QACT,CAEA,yBAAU,QAAS,CACf,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,GAAG,CACV,GAAG,CAAE,QACT"}'
};
const SocialMediaLogin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<section><div class="social_media_container flex flex_col svelte-1qyiqdw"><h2 class="uppercase text_center">${escape(title)}</h2> <button data-svelte-h="svelte-p6kht0"><span><img src="/images/icons/google.svg" alt="google-icon"></span> <span>Google</span></button> <button data-svelte-h="svelte-1tsqsij"><span><img src="/images/icons/facebook.svg" alt="fb-icon"></span> <span>Facebook</span></button></div> <div class="text_center seperator svelte-1qyiqdw" data-svelte-h="svelte-wqaoq8"><h4>( OR )</h4></div> </section>`;
});
export {
  SocialMediaLogin as S
};
