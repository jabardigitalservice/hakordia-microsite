<template>
  <div class="font-roboto mx-24 pb-6">
    <div class="flex justify-between pb-3 border-b border-gray-300">
      <div class="text-21 text-gray-800">{{ title }}</div>
      <div><img src="/icons/chevron.svg" alt="icon arrow" /></div>
    </div>
    <div class="mt-4 italic text-14 text-gray-700">
      Klik pada nama untuk melihat detail
    </div>

    <!-- leader -->
    <template v-if="leaders.length">
      <div class="mx-0 lg:mx-16 grid grid-cols-4">
        <div
          v-for="(data, index) in leaders"
          :key="index"
          :class="[
            index === 0
              ? 'col-start-2'
              : index === 1
              ? 'col-start-3'
              : index === 2
              ? 'col-start-1'
              : '',
          ]"
          class="col-span-1"
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    ...mapGetters('signature', {
      leaders: 'leaders',
    }),
  },
}
</script>
