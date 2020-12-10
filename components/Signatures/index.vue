<template>
  <div class="pb-8">
    <template v-if="signatureType === 0">
      <!-- leader -->
      <div class="py-4">
        <Signature
          :is-leader="true"
          :is-loading="loadingLeaders"
          :title="leader"
          :signatures="leaders"
        />
      </div>

      <!-- leader mayor -->
      <div class="py-4">
        <Signature
          :is-general="true"
          :is-loading="loadingMayors"
          :title="mayor"
          :signatures="mayors"
        />
      </div>

      <!-- leader OPD -->
      <div class="py-4">
        <Signature
          :is-general="true"
          :is-loading="loadingLeadersOpd"
          :title="leaderOpd"
          :signatures="leadersOpd"
        />
      </div>
    </template>

    <template v-if="signatureType === 1">
      <!-- public -->
      <div class="py-4">
        <Signature
          :is-general="true"
          :is-loading="loadingPublic"
          :signatures="publics"
        />
      </div>
    </template>

    <!-- button -->
    <button
      v-if="
        !loadingLeaders ||
        !loadingMayors ||
        !loadingLeadersOpd ||
        !loadingPublic
      "
      class="flex items-center mx-auto text-green-800 border-green-800 border font-bold focus:outline-none rounded py-2 px-4"
    >
      <img class="mr-2" src="/icons/reload.svg" alt="reload" />
      Muat Petisi lainnya ...
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { TipeSignature } from '@/constraints/typeSignature'
import Signature from './Signature'
export default {
  components: { Signature },
  data() {
    return {
      TipeSignature,
      leader: 'Pimpinan Provinsi Jawa Barat',
      mayor: 'Walikota dan Bupati  Provinsi Jawa Barat',
      leaderOpd:
        'Pimpinan & Staff Seluruh Organisasi Perangkat Daerah Kotakab Se-Jabar',
      params: {
        type: null,
        search: null,
        page: null,
      },
      loadingLeaders: false,
      loadingMayors: false,
      loadingLeadersOpd: false,
      loadingPublic: false,
    }
  },
  computed: {
    ...mapGetters('signature', {
      leaders: 'leaders',
      mayors: 'mayor',
      leadersOpd: 'leadersOpd',
      publics: 'public',
      signatureType: 'signatureType', // value 0 leaders, mayor, OPD & 1 public
    }),
  },
  watch: {
    signatureType: {
      handler(value) {
        if (value === 0) {
          this.fetchLeaders()
        } else if (value === 1) {
          this.fetchPublics()
        }
      },
      immediate: true,
    },
    leaders: {
      handler(value) {
        if (value.length === 0) {
          this.loadingLeaders = true
        } else {
          this.loadingLeaders = false
        }
      },
      immediate: true,
    },
    mayors: {
      handler(value) {
        if (value.length === 0) {
          this.loadingMayors = true
        } else {
          this.loadingMayors = false
        }
      },
      immediate: true,
    },
    leadersOpd: {
      handler(value) {
        if (value.length === 0) {
          this.loadingLeadersOpd = true
        } else {
          this.loadingLeadersOpd = false
        }
      },
      immediate: true,
    },
    publics: {
      handler(value) {
        if (value.length === 0) {
          this.loadingPublic = true
        } else {
          this.loadingPublic = false
        }
      },
      immediate: true,
    },
  },
  methods: {
    async fetchSignature(params) {
      await this.$store.dispatch('signature/fetchSignature', params)
    },
    fetchLeaders() {
      const paramsLeader = {
        ...this.params,
        type: TipeSignature.LEADER,
      }

      const paramsOpd = {
        ...this.params,
        type: TipeSignature.LEADEROPD,
      }

      const paramsMayor = {
        ...this.params,
        type: TipeSignature.MAYOR,
      }

      // fetch leader
      this.fetchSignature(paramsLeader)

      // fetch leader OPD
      this.fetchSignature(paramsOpd)

      // fetch leader OPD
      this.fetchSignature(paramsMayor)
    },
    fetchPublics() {
      const paramsPublic = {
        ...this.params,
        type: TipeSignature.PUBLIC,
      }

      // fetch puclics
      this.fetchSignature(paramsPublic)
    },
  },
}
</script>
