

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8ea00766.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/index.2dc85c41.js","_app/immutable/chunks/singletons.ce0d52e6.js","_app/immutable/chunks/index.3fb55e4e.js"];
export const stylesheets = [];
export const fonts = [];
