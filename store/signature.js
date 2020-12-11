import { removeEmpty } from '@/utils/removeEmptyObj'
import { renameKey } from '@/utils/renameKey'
import { TipeSignature } from '@/constraints/typeSignature'

// state
export const state = () => ({
  totalSignatures: 0,
  leaders: [],
  leadersOpd: {},
  mayor: {},
  public: {},
  signatureType: 0,
})

// getters
export const getters = {
  totalSignatures: (state) => state.totalSignatures,
  leaders: (state) => state.leaders,
  // OPD
  leadersOpd: (state) => state.leadersOpd?.data,
  leadersOpdMeta: (state) => state.leadersOpd?.meta,
  // mayor
  mayor: (state) => state.mayor?.data,
  mayorMeta: (state) => state.mayor?.meta,
  // public
  public: (state) => state.public?.data,
  publicMeta: (state) => state.public?.meta,
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
      // rename recaptcha key
      const dataBody = renameKey(body, 'recaptcha', 'g-recaptcha-response')

      const { data } = await this.$axios.post('/signatures', dataBody)

      return data
    } catch (e) {
      return null
    }
  },
  async fetchSignature({ commit, getters }, params) {
    try {
      const dataParams = removeEmpty(params)
      const { data } = await this.$axios.get('/signatures', {
        params: dataParams,
      })

      // console.log(data)

      // add item isVisible
      // const items =
      //   data.data.length > 0
      //     ? data.data.map((i) => ({ ...i, isVisible: false }))
      //     : []

      const dataLeadersOpd = getters.leadersOpd ? getters.leadersOpd : []
      const dataMayor = getters.mayor ? getters.mayor : []
      const dataPublic = getters.public ? getters.public : []

      const type = params.type
      switch (type) {
        // insert into state leader
        case TipeSignature.LEADER:
          commit('FETCH_LEADERS_SUCCESS', data.data)
          break

        // insert into state leader OPD
        case TipeSignature.LEADEROPD:
          // concat
          if (dataLeadersOpd.length > 0 && params.page > 1) {
            data.data = dataLeadersOpd.concat(data.data)
          }

          // console.log(data.data)

          commit('FETCH_LEADERS_OPD_SUCCESS', data)
          break

        // insert into state mayor
        case TipeSignature.MAYOR:
          // concat
          if (dataMayor.length > 0 && params.page > 1) {
            data.data = dataMayor.concat(data.data)
          }

          commit('FETCH_LEADERS_MAYOR_SUCCESS', data)
          break

        // insert into state public
        case TipeSignature.PUBLIC:
          // concat
          if (dataPublic.length > 0 && params.page > 1) {
            data.data = dataPublic.concat(data.data)
          }
          commit('FETCH_LEADERS_PUBLIC_SUCCESS', data)
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
