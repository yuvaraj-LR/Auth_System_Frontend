import * as server from '../entries/pages/login/signin/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/signin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/signin/+page.server.js";
export const imports = ["_app/immutable/nodes/6.pnLu_-9A.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DdLBidz5.js","_app/immutable/chunks/SocialMediaLogin.CTV3pEeD.js","_app/immutable/chunks/SupportImage.C29YCQFt.js"];
export const stylesheets = ["_app/immutable/assets/6.pA0Phdg6.css","_app/immutable/assets/SocialMediaLogin.mYcpglji.css","_app/immutable/assets/SupportImage.BoGWj7Qb.css"];
export const fonts = [];
