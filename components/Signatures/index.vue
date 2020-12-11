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

    <!-- load more -->
    <template v-if="isLoadMore">
      <Loading :loading="isLoadMore" />
    </template>

    <!-- button -->
    <template v-if="isShowMore">
      <button
        class="flex items-center mx-auto text-green-800 border-green-800 border font-bold focus:outline-none rounded py-2 px-4"
        @click="loadMore"
      >
        <img class="mr-2" src="/icons/reload.svg" alt="reload" />
        <span>Muat Petisi lainnya ...</span>
      </button>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '@/components/Loading'
import { TipeSignature } from '@/constraints/typeSignature'
import Signature from './Signature'
export default {
  components: { Signature, Loading },
  data() {
    return {
      TipeSignature,
      isLoading: false,
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

      // mayor
      loadingMayors: false,
      lastPageMayor: null,
      currentPageMayor: null,

      // OPD
      loadingLeadersOpd: false,
      lastPageOpd: null,
      currentPageOpd: null,

      // public
      loadingPublic: false,
      lastPagePublic: null,
      currentPagePublic: null,
      isLoadMore: false,
    }
  },
  computed: {
    ...mapGetters('signature', {
      leaders: 'leaders',

      // mayor
      mayors: 'mayor',
      mayorMeta: 'mayorMeta',

      // getter leaders OPD
      leadersOpd: 'leadersOpd',
      leadersOpdMeta: 'leadersOpdMeta',

      // public
      publics: 'public',
      publicMeta: 'publicMeta',
      signatureType: 'signatureType', // value 0 leaders, mayor, OPD & 1 public
    }),
    isShowMore() {
      let isShow
      switch (this.signatureType) {
        case 0:
          if (
            this.currentPageMayor === this.lastPageMayor ||
            this.currentPageOpd === this.lastPageOpd
          ) {
            isShow = false
          } else {
            isShow = true
          }
          break

        case 1:
          if (this.currentPagePublic === this.lastPagePublic) {
            isShow = false
          } else {
            isShow = true
          }
          break

        default:
          isShow = false
          break
      }

      return isShow
    },
  },
  watch: {
    signatureType: {
      handler(value) {
        this.params.page = this.params.page !== null ? 1 : null
        if (value === 0) {
          this.fetchLeaders()
        } else if (value === 1) {
          this.fetchPublics()
        }
      },
      immediate: true,
    },
    mayors: {
      handler(value) {
        if (typeof value === 'object') {
          this.params.page = this.mayorMeta?.current_page
          // for show load more
          this.currentPageMayor = this.mayorMeta?.current_page
          this.lastPageMayor = this.mayorMeta?.last_page
        }
      },
      immediate: true,
    },
    leadersOpd: {
      handler(value) {
        if (typeof value === 'object') {
          this.params.page = this.leadersOpdMeta?.current_page
          // for show load more
          this.currentPageOpd = this.leadersOpdMeta?.current_page
          this.lastPageOpd = this.leadersOpdMeta?.last_page
        }
      },
      immediate: true,
    },
    publics: {
      handler(value) {
        if (typeof value === 'object') {
          this.params.page = this.publicMeta?.current_page
          // for show load more
          this.currentPagePublic = this.publicMeta?.current_page
          this.lastPagePublic = this.publicMeta?.last_page
        }
      },
      immediate: true,
    },
  },
  methods: {
    async fetchSignature(params) {
      this.isLoading = true
      switch (params.type) {
        case TipeSignature.LEADER:
          this.loadingLeaders = true
          await this.$store.dispatch('signature/fetchSignature', params)
          this.loadingLeaders = false
          break

        case TipeSignature.INSPEKTORATOPD:
          if (!this.isLoadMore) {
            this.loadingLeadersOpd = true
          }
          await this.$store.dispatch('signature/fetchSignature', params)
          this.loadingLeadersOpd = false
          break

        case TipeSignature.MAYOR:
          if (!this.isLoadMore) {
            this.loadingMayors = true
          }
          await this.$store.dispatch('signature/fetchSignature', params)
          this.loadingMayors = false
          break

        case TipeSignature.PUBLIC:
          if (!this.isLoadMore) {
            this.loadingPublic = true
          }
          await this.$store.dispatch('signature/fetchSignature', params)
          this.loadingPublic = false
          break

        default:
          await this.$store.dispatch('signature/fetchSignature', params)
          break
      }

      this.isLoading = false
    },
    fetchLeaders() {
      const paramsLeader = {
        ...this.params,
        type: TipeSignature.LEADER,
      }

      const paramsOpd = {
        ...this.params,
        type: TipeSignature.INSPEKTORATOPD,
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
    async loadMore() {
      this.isLoadMore = true

      // load more OPD & Mayor
      if (this.signatureType === 0) {
        const paramsOpd = {
          ...this.params,
          page: this.params.page + 1,
          type: TipeSignature.INSPEKTORATOPD,
        }

        const paramsMayor = {
          ...this.params,
          page: this.params.page + 1,
          type: TipeSignature.MAYOR,
        }

        // fetch OPD & Mayor
        await Promise.all([
          this.fetchSignature(paramsOpd),
          this.fetchSignature(paramsMayor),
        ])

        this.isLoadMore = false
        return
      }

      // public
      const paramsPublic = {
        ...this.params,
        page: this.params.page + 1,
        type: TipeSignature.PUBLIC,
      }

      // fetch puclics
      await this.fetchSignature(paramsPublic)

      this.isLoadMore = false
    },
  },
}
</script>
