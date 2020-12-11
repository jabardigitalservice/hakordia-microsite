<template>
  <div>
    <div class="text-left font-roboto">
      <img
        class="pb-4"
        :src="signature.signature_url"
        alt="ttd"
        @error="setAltImg"
      />
      <h3 class="text-13 font-bold text-gray-9000">
        {{ `${signature.first_name} ${signature.last_name || ''}` || '-' }}
      </h3>
      <span class="text-12 text-gray-700">
        {{ signature.occupation_name || '-' }}</span
      >

      <div class="flex py-3 text-biruabu-800 font-medium text-13">
        <img class="mr-2" src="/icons/comment.svg" alt="icon comment" />
        <span>Aspirasi</span>
      </div>

      <!-- content -->
      <div class="text-12 text-gray-800 leading-relaxed">
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
[data-popover='detailleader'],
[data-popover='detailpublic'],
[data-popover='detailmobile'] {
  background: white;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.12);
  padding: 1rem;
  border-radius: 0.75rem;
  margin-top: 1rem;
  width: 24rem !important;
}

.vue-popover.dropdown-position-top:before {
  left: calc(20% - 6px);
}
</style>
