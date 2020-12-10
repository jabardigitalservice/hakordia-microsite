<template>
  <!-- mobile version -->
  <div>
    <div
      v-for="(data, index) in signatures"
      :key="index"
      class="block lg:hidden my-2"
    >
      <div class="max-w-md text-center">
        <img
          class="mx-auto"
          :src="data.signature_url"
          alt="ttd"
          @error="setAltImg"
        />
        <h3 class="text-14 font-bold text-gray-9000">
          {{ `${data.first_name} ${data.last_name || ''}` || '-' }}
        </h3>
        <span class="text-13 text-gray-700">
          {{ data.occupation_name || '-' }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    signatures: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setAltImg(event) {
      event.target.src = require('static/images/hakordia-2.png')
    },
  },
}
</script>
