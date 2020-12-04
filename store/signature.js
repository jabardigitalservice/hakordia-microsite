// import { getTotal } from '@/api/signature'

// state
export const state = () => ({
  totalSignatures: 0,
})

// getters
export const getters = {
  totalSignatures: (state) => state.totalSignatures,
}

// mutations
export const mutations = {
  FETCH_TOTAL_SUCCESS(state, data) {
    state.totalSignatures = data
  },

  FETCH_TOTAL_FAILURE(state) {
    state.totalSignatures = 0
  },
}

// actions
export const actions = {
  async fetchTotal({ commit }) {
    try {
      const { data } = await this.$axios.get('/signatures/stats')

      commit('FETCH_TOTAL_SUCCESS', data.signatures_count)
    } catch (e) {
      commit('FETCH_TOTAL_FAILURE')
    }
  },
}
