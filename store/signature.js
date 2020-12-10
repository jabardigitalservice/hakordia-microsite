import { removeEmpty } from '@/utils/removeEmptyObj'
import { TipeSignature } from '@/constraints/typeSignature'

// state
export const state = () => ({
  totalSignatures: 0,
  leaders: [],
  leadersOpd: [],
  mayor: [],
  public: [],
  signatureType: 0,
})

// getters
export const getters = {
  totalSignatures: (state) => state.totalSignatures,
  leaders: (state) => state.leaders,
  leadersOpd: (state) => state.leadersOpd,
  mayor: (state) => state.mayor,
  public: (state) => state.public,
  signatureType: (state) => state.signatureType,
}

// mutations
export const mutations = {
  FETCH_TOTAL_SUCCESS(state, data) {
    state.totalSignatures = data
  },

  FETCH_TOTAL_FAILURE(state) {
    state.totalSignatures = 0
  },

  FETCH_LEADERS_SUCCESS(state, data) {
    state.leaders = data
  },

  FETCH_LEADERS_OPD_SUCCESS(state, data) {
    state.leadersOpd = data
  },

  FETCH_LEADERS_MAYOR_SUCCESS(state, data) {
    state.mayor = data
  },

  FETCH_LEADERS_PUBLIC_SUCCESS(state, data) {
    state.public = data
  },

  FETCH_LEADERS_FAILURE(state) {
    state.leaders = []
  },
  SELECTED_TYPE(state, index) {
    state.signatureType = index
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
  async addSignature({ commit }, body) {
    try {
      const { data } = await this.$axios.post('/signatures', body)

      return data
    } catch (e) {
      return null
    }
  },
  async fetchSignature({ commit }, params) {
    try {
      const dataParams = removeEmpty(params)
      const { data } = await this.$axios.get('/signatures', {
        params: dataParams,
      })

      // add item isVisible
      const items =
        data.data.length > 0
          ? data.data.map((i) => ({ ...i, isVisible: false }))
          : []

      const type = params.type
      switch (type) {
        // insert into state leader
        case TipeSignature.LEADER:
          commit('FETCH_LEADERS_SUCCESS', items)
          break

        // insert into state leader OPD
        case TipeSignature.LEADEROPD:
          commit('FETCH_LEADERS_OPD_SUCCESS', items)
          break

        // insert into state mayor
        case TipeSignature.MAYOR:
          commit('FETCH_LEADERS_MAYOR_SUCCESS', items)
          break

        // insert into state public
        case TipeSignature.PUBLIC:
          commit('FETCH_LEADERS_PUBLIC_SUCCESS', items)
          break

        default:
          break
      }
    } catch (e) {
      commit('FETCH_TOTAL_FAILURE')
    }
  },
  selectedSignatureType({ commit }, index) {
    commit('SELECTED_TYPE', index)
  },
}
