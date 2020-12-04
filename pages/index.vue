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
export default {
  components: { Header, Commitment, Signatures },
  data() {
    return {
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
    openCamera() {
      const constraints = (window.constraints = {
        audio: false,
        video: {
          facingMode: {
            exact: 'environment',
          },
        },
      })

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream
        })
        .catch((_) => {
          // console.log('browser didnt support')
        })
    },
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    clear() {
      this.$refs.signaturePad.clearSignature()
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()

      if (!isEmpty) {
        this.imageSignature = data
      }
      // console.log(isEmpty)
      // console.log(data)
    },
  },
}
</script>
