
import Cookie from 'cookie'
import Cookies from 'js-cookie'
const cookieparser = process.server ? require('cookieparser') : undefined

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
  token(state) {
    return state.token
  },
  dailies(state) {
    return state.dailies
  },
  ongoings(state) {
    return state.ongoings
  },
  urgents(state) {
    return state.urgents
  },
  healths(state) {
    return state.healths
  },
  muscle(state) {
    return state.muscle
  },
  muscleid(state) {
    return state.muscleid
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
  reason(state) {
    return state.reason
  }
}

export const state = () => ({
  auth: null,
  email: null,
  username: null,
  password: null,
  goal: null,
  muscle: null,
  muscleid: null,
  cardio: null,
  sleep: null,
  food: null,
  token: null,
  map: null,
  reason: null,
  dailies: null,
  ongoings: null,
  urgents: null,
  healths: null
})

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      console.log(req.headers.cookie) // eslint-disable-line
      try {
        const token = this.$store.state.token
        if (process.browser) {
          if (token) {
            Cookie.set('ccmsToken', token, { expires: 3 })
          } else {
            Cookies.remove('ccmsToken')
          }
        } else {
          const params = {
            domain: '/'
          }
          if (!token) {
            const date = new Date()
            const expires = date.setDate(date.getDate() + 1)
            params.expires = new Date(expires)
          }
        }
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
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  setGoal({ commit }, goal) {
    commit('setGoal', goal)
  },
  setMuscle({ commit }, muscle) {
    commit('setMuscle', muscle)
  },
  setMuscleId({ commit }, muscleid) {
    commit('setMuscleId', muscleid)
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
    state.auth.loggedIn = auth
  },
  setUsername(state, username) {
    state.username = username
  },
  setEmail(state, email) {
    state.email = email
  },
  setToken(state, token) {
    state.token = token
  },
  setDailies(state, dailies) {
    state.dailies = dailies
  },
  setOngoings(state, ongoings) {
    state.ongoings = ongoings
  },
  setUrgents(state, urgents) {
    state.urgents = urgents
  },
  setHealths(state, healths) {
    state.healths = healths
  },
  setReason(state, reason) {
    state.reason = reason
  },
  setGoal(state, goal) {
    state.goal = goal
  },
  setMuscle(state, muscle) {
    state.muscle = muscle
  },
  setMuscleId(state, muscleid) {
    state.muscleid = muscleid
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
