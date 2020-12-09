<template>
  <!-- mobile version -->
  <div>
    <div
      v-for="(data, index) in signatures"
      :key="index"
      class="block lg:hidden"
    >
      <div class="max-w-md text-center">
        <img :src="data.signature_url" alt="ttd" />
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
}
</script>
