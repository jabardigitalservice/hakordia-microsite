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

export default {
  components: { Header, Commitment, Signatures, CampaignCommitment },
  data() {
    return {
      isLeader: false,
      imageSignature: null,
    }
  },
  computed: {
    ...mapGetters('signature', {
      totalSignatures: 'totalSignatures',
    }),
  },
  mounted() {
    this.getTotalSignature()
  },
  methods: {
    async getTotalSignature() {
      // Fetch auth
      await this.$store.dispatch('signature/fetchTotal')
    },
  },
}
</script>
