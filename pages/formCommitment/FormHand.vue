<template>
  <div class="lg:pr-8">
    <Notification />
    <div>
      <Imagedetected :is-hand-detected="isHandDetected" />
    </div>
  </div>
</template>

<script>
import Notification from '@/components/Notification'
import Imagedetected from '@/components/Imagedetected'
export default {
  comments: { Notification, Imagedetected },
  props: {
    isHandDetected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
