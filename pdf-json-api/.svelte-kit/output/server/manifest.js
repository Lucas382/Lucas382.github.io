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
<<<<<<< HEAD
<<<<<<< HEAD
		client: {"start":"_app/immutable/entry/start.d96e7969.js","app":"_app/immutable/entry/app.0da73e6c.js","imports":["_app/immutable/entry/start.d96e7969.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/singletons.94f6e696.js","_app/immutable/chunks/index.3fb55e4e.js","_app/immutable/entry/app.0da73e6c.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/index.2dc85c41.js"],"stylesheets":[],"fonts":[]},
=======
		client: {"start":"_app/immutable/entry/start.fda114e7.js","app":"_app/immutable/entry/app.0e74821c.js","imports":["_app/immutable/entry/start.fda114e7.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/singletons.0553a591.js","_app/immutable/chunks/index.3fb55e4e.js","_app/immutable/entry/app.0e74821c.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/index.2dc85c41.js"],"stylesheets":[],"fonts":[]},
>>>>>>> parent of 8d6270b (....)
=======
		client: {"start":"_app/immutable/entry/start.fda114e7.js","app":"_app/immutable/entry/app.0e74821c.js","imports":["_app/immutable/entry/start.fda114e7.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/singletons.0553a591.js","_app/immutable/chunks/index.3fb55e4e.js","_app/immutable/entry/app.0e74821c.js","_app/immutable/chunks/scheduler.02d168ce.js","_app/immutable/chunks/index.2dc85c41.js"],"stylesheets":[],"fonts":[]},
>>>>>>> parent of 8d6270b (....)
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
