<template>
  <div>
    <!-- section header -->
    <Header :total-signatures="totalSignatures" />

    <!-- section komitmen -->
    <Commitment :total-signatures="totalSignatures" />

    <!-- section signatures -->
    <Signatures />

    <!-- CampaignCommitment -->
    <CampaignCommitment />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header'
import Commitment from '@/components/Commitment'
import Signatures from '@/components/Signatures'
import CampaignCommitment from '@/components/CampaignCommitment'
import { TipeSignature } from '@/constraints/typeSignature'

export default {
  components: { Header, Commitment, Signatures, CampaignCommitment },
  data() {
    return {
      TipeSignature,
      isLeader: false,
      imageSignature: null,
      params: {
        type: null,
        search: null,
        page: null,
      },
    }
  },
  computed: {
    ...mapGetters('signature', {
      totalSignatures: 'totalSignatures',
    }),
  },
  mounted() {
    this.getTotalSignature()
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
  methods: {
    async getTotalSignature() {
      // Fetch auth
      await this.$store.dispatch('signature/fetchTotal')
    },
    async fetchSignature(params) {
      await this.$store.dispatch('signature/fetchSignature', params)
    },
  },
}
</script>
