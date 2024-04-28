const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/icons/arrow-right-long-solid-left.svg","images/icons/arrow-right-long-solid-right.svg","images/icons/eye-close-icon.svg","images/icons/eye-open-icon.svg","images/icons/facebook.svg","images/icons/google.svg","images/images/background-login.png","images/images/background-signup.png","images/images/background.jpg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.C8pYu3VJ.js","app":"_app/immutable/entry/app.BqJ54KnT.js","imports":["_app/immutable/entry/start.C8pYu3VJ.js","_app/immutable/chunks/entry.DN3uTyYf.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/entry/app.BqJ54KnT.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DdLBidz5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CfbQUett.js')),
			__memo(() => import('./chunks/1-D1SKFS0u.js')),
			__memo(() => import('./chunks/2-DTFeQR7W.js')),
			__memo(() => import('./chunks/3-CX8JYpLA.js')),
			__memo(() => import('./chunks/4-BPEPi9Lj.js')),
			__memo(() => import('./chunks/5-DdQnLkPj.js')),
			__memo(() => import('./chunks/6-DAxhX8Nx.js')),
			__memo(() => import('./chunks/7-phJxKgj2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login/password/forgetpassword",
				pattern: /^\/login\/password\/forgetpassword\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login/password/signbyotp",
				pattern: /^\/login\/password\/signbyotp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login/password/updatepassword",
				pattern: /^\/login\/password\/updatepassword\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/login/signin",
				pattern: /^\/login\/signin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login/signup",
				pattern: /^\/login\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
