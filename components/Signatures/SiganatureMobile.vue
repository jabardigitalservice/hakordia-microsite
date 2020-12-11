<template>
  <!-- mobile version -->
  <div>
    <button
      v-for="(data, index) in signatures"
      :key="index"
      v-popover:detailmobile.top
      class="block mx-auto lg:hidden my-2 focus:outline-none"
      @click="currentDetail = index"
    >
      <div class="w-full text-center">
        <!-- detail signature -->
        <template v-if="currentDetail === index">
          <popover name="detailmobile" transition="show-from-left">
            <DetailSignature :signature="data" />
          </popover>
        </template>
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
    </button>
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
  data() {
    return {
      currentDetail: null,
    }
  },
  methods: {
    setAltImg(event) {
      event.target.src = require('static/images/hakordia-2.png')
    },
  },
}
</script>
