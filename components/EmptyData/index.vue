<template>
  <div class="flex flex-col mx-auto items-center py-4">
    <img src="/images/empty.png" alt="empty" />
    <h2 class="font-roboto font-bold pt-4 text-gray-800">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
}
</script>
