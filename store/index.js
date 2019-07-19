// const cookieparser = process.server ? require('cookie') : undefined

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}

export const state = () => ({
  email: null,
  token: null
})

export const mutations = {
  setAuth(state, token) {
    state.token = token
  }
}

// export const actions = {
//   asyncData({ commit }, { token }) {
//     if (process.server) {
//       if (res.headers.cookie) {
//         const parsed = cookieparser.parse(res.headers.cookie)
//         try {
//           token = JSON.parse(parsed.token)
//         } catch (err) {
//         }
//       }
//     }
//     commit('setAuth', token)
//   }
// }
