import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.DOEHW6qS.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DdLBidz5.js"];
export const stylesheets = ["_app/immutable/assets/0.DqTbnN3g.css"];
export const fonts = [];
