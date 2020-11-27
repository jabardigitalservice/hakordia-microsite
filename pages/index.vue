<template>
  <div class="container mx-auto">
    <h2 class="text-center text-4xl p-4">Hakordia</h2>
    <div class="border border-gray-600">
      <client-only>
        <VueSignaturePad ref="signaturePad" width="100%" height="500px" />
      </client-only>
    </div>
    <div class="text-center p-4">
      <button @click="save">Save</button>
      <button @click="clear">Clear</button>
      <button @click="undo">Undo</button>
    </div>
  </div>
</template>

<script>
// import VueSignaturePad from 'vue-signature-pad'
export default {
  // components: VueSignaturePad,
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    clear() {
      this.$refs.signaturePad.clearSignature()
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      console.log(isEmpty)
      console.log(data)
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
