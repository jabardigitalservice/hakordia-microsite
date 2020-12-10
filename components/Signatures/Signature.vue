<template>
  <div class="font-roboto mx-6 lg:mx-24 pb-6">
    <template v-if="title !== ''">
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
    </template>
    <div class="mt-4 italic text-14 text-gray-700">
      Klik pada nama untuk melihat detail
    </div>

    <!-- loading -->
    <template v-if="isLoading">
      <div class="h-64 flex items-center justify-center">
        <Loading :loading="true" />
      </div>
    </template>

    <template v-else-if="!isLoading && signatures.length === 0">
      <EmptyData title="Data Tidak Ditemukan" />
    </template>

    <!-- leader -->
    <template v-if="isLeader && !isLoading && signatures.length > 0">
      <!-- mobile version -->
      <SiganatureMobile :signatures="signatures" />

      <!-- desktop version -->
      <div class="hidden lg:grid mx-0 lg:mx-16 grid-cols-4">
        <div
          v-for="(data, index) in signatures"
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
          class="col-span-1 mx-auto"
        >
          <div
            class="max-w-md text-center cursor-pointer"
            @click="data.isVisible = !data.isVisible"
          >
            <!-- detail signature -->
            <!-- <template v-if="data.isVisible">
              <DetailSignature :signature="data" />
            </template> -->

            <img :src="data.signature_url" alt="ttd" @error="setAltImg" />
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
    <template v-if="isGeneral && !isLoading && signatures.length > 0">
      <!-- mobile version -->
      <SiganatureMobile :signatures="signatures" />

      <div class="hidden lg:grid mx-0 lg:mx-16 grid-cols-4">
        <div
          v-for="(data, index) in signatures"
          :key="index"
          :class="{ 'mt-10': index % 2 === 0, 'mt-0': index % 2 !== 0 }"
          class="col-span-1 mx-auto"
        >
          <div class="max-w-md text-center">
            <img :src="data.signature_url" alt="ttd" @error="setAltImg" />
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
// import DetailSignature from './DetailSignature'
import Loading from '@/components/Loading'
import EmptyData from '@/components/EmptyData'
import SiganatureMobile from './SiganatureMobile'
export default {
  components: { SiganatureMobile, Loading, EmptyData },
  props: {
    isLeader: {
      type: Boolean,
      default: () => false,
    },
    isGeneral: {
      type: Boolean,
      default: () => false,
    },
    isLoading: {
      type: Boolean,
      default: () => false,
    },
    signatures: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: () => '',
    },
  },
  // data() {
  //   return {
  //     items: [],
  //   }
  // },
  methods: {
    setAltImg(event) {
      event.target.src = require('static/images/hakordia-2.png')
    },
    openDetail(data) {
      // console.log('open detail')
    },
  },
}
</script>
