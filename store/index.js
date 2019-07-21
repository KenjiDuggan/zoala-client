// const cookieparser = process.server ? require('cookie') : undefined

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
  email(state) {
    return state.email
  },
  username(state) {
    return state.username
  },
  token(state)  {
    return state.token
  }
}

export const state = () => ({
  email: null,
  username: null,
  password: null,
  token: null,
  muscle: null
})

export const actions = {
  setAuth({ commit }, { token }) {
    // if (process.server) {
    //   if (res.headers.cookie) {
    //     const parsed = cookieparser.parse(res.headers.cookie)
    //     try {
    //       token = JSON.parse(parsed.token)
    //     } catch (err) {
    //     }
    //   }
    // }
    commit('setAuth', token)
  },
  setUsername({ commit }, username) {
    commit('setUsername', username)
  },
  setEmail({ commit }, email) {
    commit('setEmail', email)
  },
  setMuscle({ commit }, muscle) {
    commit('setMuscle', muscle)
  }
}

export const mutations = {
  setAuth(state, token) {
    state.token = token
  },
  setUsername(state, username) {
    state.username = username
  },
  setEmail(state, email) {
    state.email = email
  },
  setMuscle(state, muscle) {
    state.muscle = muscle
  }
}
