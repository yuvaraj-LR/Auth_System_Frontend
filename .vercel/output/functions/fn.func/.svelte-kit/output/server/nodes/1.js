

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BTPrE8Jc.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DdLBidz5.js","_app/immutable/chunks/entry.DgTaO3f6.js"];
export const stylesheets = [];
export const fonts = [];
