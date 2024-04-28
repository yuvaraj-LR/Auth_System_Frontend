export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.DRVS7IUZ.js","app":"_app/immutable/entry/app.BjUgO6Ur.js","imports":["_app/immutable/entry/start.DRVS7IUZ.js","_app/immutable/chunks/entry.DgTaO3f6.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/entry/app.BjUgO6Ur.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DdLBidz5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js'))
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
