// state
export const state = () => ({
  isDetected: false,
})

// getters
export const getters = {
  isDetected: (state) => state.isDetected,
}

// mutations
export const mutations = {
  SET_DETECT(state, data) {
    state.isDetected = data
  },
}

// actions
export const actions = {
  setDetect({ commit }, data) {
    commit('SET_DETECT', data)
  },
}
