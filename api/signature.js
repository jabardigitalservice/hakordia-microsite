export async function getTotal() {
  return await this.$axios.get('/signatures/stats')
}
