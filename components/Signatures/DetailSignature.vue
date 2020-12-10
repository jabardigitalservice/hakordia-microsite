<template>
  <div>
    <div class="text-left roun">
      <img :src="signature.signature_url" alt="ttd" @error="setAltImg" />
      <h3 class="text-13 font-bold text-gray-9000">
        {{ `${signature.first_name} ${signature.last_name || ''}` || '-' }}
      </h3>
      <span class="text-12 text-gray-700">
        {{ signature.occupation_name || '-' }}</span
      >

      <div class="flex py-3 font-roboto text-biruabu-800 font-normal text-13">
        <img class="mr-2" src="/icons/comment.svg" alt="icon comment" />
        <span>Aspirasi</span>
      </div>

      <!-- content -->
      <div class="text-12 text-gray-800 font-roboto">
        {{ signature.content || '-' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    signature: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    setAltImg(event) {
      event.target.src = require('static/images/hakordia-2.png')
    },
  },
}
</script>

<style>
[data-popover='foo'] {
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  /* color: #f9f9f9; */

  /* font-size: 12px;
  line-height: 1.5; */
  padding: 1.25rem;
  border-radius: 0.5rem;
}
</style>
