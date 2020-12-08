<template>
  <div class="pb-8">
    <!-- leader -->
    <div class="py-4">
      <Signature :is-leader="true" :title="leader" />
    </div>

    <!-- leader mayor -->
    <div class="py-4">
      <Signature :title="mayor" />
    </div>

    <!-- leader OPD -->
    <div class="py-4">
      <Signature :title="leaderOpd" />
    </div>

    <!-- button -->
    <button
      class="flex items-center mx-auto text-green-800 border-green-800 border font-bold focus:outline-none rounded py-2 px-4"
    >
      <img class="mr-2" src="/icons/reload.svg" alt="reload" />
      Muat Petisi lainnya ...
    </button>
  </div>
</template>

<script>
import Signature from './Signature'
export default {
  components: { Signature },
  data() {
    return {
      leader: 'Pimpinan Provinsi Jawa Barat',
      mayor: 'Walikota dan Bupati  Provinsi Jawa Barat',
      leaderOpd:
        'Pimpinan & Staff Seluruh Organisasi Perangkat Daerah Kotakab Se-Jabar',
    }
  },
}
</script>
