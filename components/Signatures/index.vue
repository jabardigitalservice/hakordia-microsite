<template>
  <div>
    <!-- leader -->
    <div class="py-4">
      <Signature :title="leader" />
    </div>
  </div>
</template>

<script>
import Signature from './Signature'
export default {
  components: { Signature },
  data() {
    return {
      leader: 'Pimpinan Provinsi Jawa Barat',
      leaderOpd:
        'Pimpinan & Staff Seluruh Organisasi Perangkat Daerah Kotakab Se-Jabar',
      mayor: 'Walikota dan Bupati  Provinsi Jawa Barat',
    }
  },
}
</script>
