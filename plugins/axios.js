// import { BASE_URL } from '~/contrants/endPoint'

export default function ({ $axios, app }) {
  // Request interceptor
  $axios.interceptors.request.use((request) => {
    request.baseURL = process.env.baseApi

    // const token = store.getters['auth/token']

    // if (token) {
    //   request.headers.common.Authorization = `Bearer ${token}`
    // }

    return request
  })

  // Response interceptor
  $axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response || {}

      if (status >= 500) {
        this.$toast.error('Terjadi Kesalahan')
      }

      this.$toast.error('Terjadi Kesalahan')

      return Promise.reject(error)
    }
  )
}
