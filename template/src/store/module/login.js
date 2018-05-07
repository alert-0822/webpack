import api from 'api/index.js'
// import S from 'storejs'
const state = {
	token: null
}
const getters = {
	token: state => state.token
}
const actions = {
	// 登录
	getToken({
		commit,
		state
	}, cb) {
		// api._getToken().then((data) => {
		// 	setTimeout(() => {
		// 		// S.set('token', data.token)
		// 		commit('updateToken', data.token)
		// 		cb.success()
		// 	}, 2000)
		// }).catch((error) => {
		// 	cb.error()
		// })
	},
	delToken({ // 登出
		commit,
		state
	}, cb) {
		// S.set('token', null)
		commit('clearToken')
		cb.success()
	}
}
const mutations = {
	updateToken(state, token) {
		state.token = token
	},
	clearToken(state) {
		state.token = null
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}