export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.942fbfdb.js","app":"_app/immutable/entry/app.56e4b06d.js","imports":["_app/immutable/entry/start.942fbfdb.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/singletons.4695da44.js","_app/immutable/chunks/index.3fb55e4e.js","_app/immutable/entry/app.56e4b06d.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/index.2dc85c41.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
