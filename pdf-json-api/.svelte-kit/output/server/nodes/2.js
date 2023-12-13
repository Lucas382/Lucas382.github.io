

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6c54cf8d.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/index.2dc85c41.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.c51c8bf3.js","_app/immutable/chunks/index.3fb55e4e.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
