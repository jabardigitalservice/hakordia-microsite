<template>
  <div class="font-roboto mx-6 lg:mx-24 pb-6">
    <div
      class="flex justify-between place-items-auto pb-3 border-b border-gray-300"
    >
      <div class="text-base lg:text-21 text-gray-800 font-medium">
        {{ title }}
      </div>
      <div class="w-10 h-10">
        <img src="/icons/chevron.svg" alt="icon arrow" />
      </div>
    </div>
    <div class="mt-4 italic text-14 text-gray-700">
      Klik pada nama untuk melihat detail
    </div>

    <!-- leader -->
    <template v-if="isLeader && leaders.length">
      <!-- mobile version -->
      <SiganatureMobile :signatures="leaders" />

      <!-- desktop version -->
      <div class="hidden lg:grid mx-0 lg:mx-16 grid-cols-4">
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
            index % 2 === 0 ? 'mt-10' : '',
            index === 0 ? '-mt-1' : '',
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

    <!-- normal -->
    <template v-else>
      <div class="hidden lg:grid mx-0 lg:mx-16 grid-cols-4">
        <div
          v-for="(data, index) in [0, 1, 2, 3, 4, 5, 6, 8]"
          :key="index"
          :class="{ 'mt-10': index % 2 === 0, 'mt-0': index % 2 !== 0 }"
          class="col-span-1"
        >
          <div class="max-w-md text-center">
            <img
              :src="'https://storage.googleapis.com/hakordia-store/prod/gen/ttd-example.png'"
              alt="ttd"
            />
            <h3 class="text-14 font-bold text-gray-9000">
              {{ data }}
            </h3>
            <span class="text-13 text-gray-700"> dummy {{ data }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SiganatureMobile from './SiganatureMobile'
export default {
  components: { SiganatureMobile },
  props: {
    isLeader: {
      type: Boolean,
      default: () => false,
    },
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
