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

export const state = () => ({
  workouts: [],
  workout: {}
})

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
    await axios.get(`workouts`)
      .then(response => response.data)
      .then((workouts) => {
        commit('setWorkout', workouts)
      })
  },
  async GETWORKOUT({ commit }, id) {
    await axios.get(`posts/${id}`)
      .then(response => response.data)
      .then((workout) => {
        commit('setCurrentWorkout', workout)
      })
  }
}
