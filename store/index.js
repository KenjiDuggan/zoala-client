/* disable-eslint */

import axios from 'axios'

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}

export const state = {
  workout: {},
  workouts: []
}

export const mutations = {
  setWorkout: (state, workouts) => {
    state.workouts = workouts
  },
  setCurrentWorkout: (state, workout) => {
    state.workout = workout
  }
}

export const actions = {
  async GET_WORKOUTS({ commit }) {
    const { data } = await axios.get(`workouts`)
    commit('setWorkout', data)
  },
  async GETWORKOUT({ commit, store }, id) {
    const { data } = await axios.get(`posts/${id}`)
    commit('setCurrentWorkout', data)
  }
}
