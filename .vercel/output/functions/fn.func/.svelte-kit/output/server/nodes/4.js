import * as server from '../entries/pages/login/password/signbyotp/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/password/signbyotp/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/password/signbyotp/+page.server.js";
export const imports = ["_app/immutable/nodes/4.CFg50Mt3.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DdLBidz5.js","_app/immutable/chunks/ForgetPassword.BN1UI8W2.js","_app/immutable/chunks/SupportImage.C29YCQFt.js"];
export const stylesheets = ["_app/immutable/assets/4.CW0T7e9H.css","_app/immutable/assets/ForgetPassword.CLgGNyrU.css","_app/immutable/assets/SupportImage.BoGWj7Qb.css"];
export const fonts = [];
