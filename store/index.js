
const cookieparser = process.server ? require('cookieparser') : undefined

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
  cardio(state) {
    return state.cardio
  },
  sleep(state) {
    return state.sleep
  },
  food(state) {
    return state.food
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
}

export const state = () => ({
  auth: null,
  email: null,
  username: null,
  password: null,
  goal: null,
  muscle: null,
  cardio: null,
  sleep: null,
  food: null,
  token: null,
  map: null
})

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
  setGoal({ commit }, goal) {
    commit('setGoal', goal)
  },
  setMuscle({ commit }, muscle) {
    commit('setMuscle', muscle)
  },
  setCardio({ commit }, cardio) {
    commit('setCardio', cardio)
  },
  setSleep({ commit }, sleep) {
    commit('setSleep', sleep)
  },
  setFood({ commit }, food) {
    commit('setSleep', food)
  },
  setAuth({ commit }, auth) {
    commit('setAuth', auth)
  }
}

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
  setGoal(state, goal) {
    state.goal = goal
  },
  setMuscle(state, muscle) {
    state.muscle = muscle
  },
  setCardio(state, cardio) {
    state.cardio = cardio
  },
  setSleep(state, sleep) {
    state.sleep = sleep
  },
  setFood(state, food) {
    state.food = food
  }
}
