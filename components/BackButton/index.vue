<template>
  <button class="flex items-center" @click="backButton">
    <img class="mr-2" src="/icons/back_arrow.svg" alt="back arrow" />
    <span class="text-green-700 font-bold">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    customClick: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    backButton() {
      if (this.customClick === true) {
        return this.$emit('handleClick')
      }

      this.$router.back()
    },
  },
}
</script>
