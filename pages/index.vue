<template>
  <div>
    <!-- section header -->
    <Header :total-signatures="totalSignatures" />

    <!-- section komitmen -->
    <Commitment :total-signatures="totalSignatures" />

    <!-- section signatures -->
    <Signatures />

    <!-- <client-only>
      <div class="container mx-auto px-4">
        <h2 class="text-center text-4xl p-4">Hakordia</h2>

        <div class="border border-gray-600">
          <VueSignaturePad ref="signaturePad" width="100%" height="100" />
        </div>
        <div class="text-center p-4">
          <button @click="save">Save</button>
          <button @click="clear">Clear</button>
          <button @click="undo">Undo</button>
          <button @click="openCamera">Open</button>
        </div>

        <div>
          <input type="file" accept="image/*" capture="camera" />
        </div>
      </div>
    </client-only> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header'
import Commitment from '@/components/Commitment'
import Signatures from '@/components/Signatures'
import { TipeSignature } from '@/constraints/typeSignature'

export default {
  components: { Header, Commitment, Signatures },
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
