let endpoints = {
	//SSO
	LOGIN: '/sso/verifyuser',
	UPDATE_PROFILE: '/sso/userprofile',
	GET_REQUESTS: '/'
}

let API_BOOK = {
	LOGIN_API: {
		url: endpoints.LOGIN,
		method: 'POST',
		data: null
	}
}

export default API_BOOK


