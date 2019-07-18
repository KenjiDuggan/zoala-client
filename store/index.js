const cookieparser = process.server ? require('cookie') : undefined

export const state = () => ({
  token: null
});

export const mutations = {
  setAuth(state, token) {
    state.token = token
  }
}

export const actions = {
        asyncData ({ commit }, { req }) {
        let token = token
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            token = JSON.parse(parsed.token)
          } catch (err) {
            console.log(err);
          }
        }
        commit('setAuth', token)
      }
    }


export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}
