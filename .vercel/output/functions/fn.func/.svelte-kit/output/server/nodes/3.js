import * as server from '../entries/pages/login/password/forgetpassword/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/password/forgetpassword/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/password/forgetpassword/+page.server.js";
export const imports = ["_app/immutable/nodes/3.od6e4SFh.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DdLBidz5.js","_app/immutable/chunks/SocialMediaLogin.CTV3pEeD.js","_app/immutable/chunks/ForgetPassword.BN1UI8W2.js","_app/immutable/chunks/SupportImage.C29YCQFt.js"];
export const stylesheets = ["_app/immutable/assets/3.Dwiafn-9.css","_app/immutable/assets/SocialMediaLogin.mYcpglji.css","_app/immutable/assets/ForgetPassword.CLgGNyrU.css","_app/immutable/assets/SupportImage.BoGWj7Qb.css"];
export const fonts = [];
