
const cookieparser = process.server ? require('cookieparser') : undefined

import Vuex from 'vuex'

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
  muscle(state) {
    return state.muscle
  },
  email(state) {
    return state.email
  },
  username(state) {
    return state.username
  },
  auth(state) {
    return state.auth
  }
};

export const state = () => ({
  auth: null,
  email: null,
  username: null,
  password: null,
  muscle: null,
  token: null,
});

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
      }
    }
    commit('setAuth', auth)
  },
  setUsername({ commit }, username) {
    commit('setUsername', username)
  },
  setEmail({ commit }, email) {
    commit('setEmail', email)
  },
  setMuscle({ commit }, muscle) {
    commit('setMuscle', muscle)
  },
  setAuth({ commit }, auth) {
    commit('setAuth', auth)
  }
};


export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
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
};
