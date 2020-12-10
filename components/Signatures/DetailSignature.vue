<template>
  <div class="bg-white p-5 rounded-lg" style="left: 3rem">
    <div class="text-left">
      <img :src="signature.signature_url" alt="ttd" />
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
}
</script>
