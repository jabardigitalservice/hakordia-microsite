<template>
  <div class="pl-6 pt-4 lg:pl-24 lg:pt-10 w-full lg:w-7/12">
    <BackButton text="Kembali Ke Beranda" />

    <div class="mt-6">
      <h2 class="text-37 font-medium font-roboto text-gray-900">
        Masukkan Data Anda dibawah ini.
      </h2>
      <div class="text-gray-800">
        Untuk dapat ikut berpartisipasi dalam petisi online Hakordia, kami
        membutuhkan beberapa informasi Anda untuk kebutuhan pendataan. Harap
        mengisikan informasi dibawah ini selengkap-lengkapnya.
      </div>
    </div>

    <div class="my-8 flex">
      <div class="section-step">1</div>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'
export default {
  components: { BackButton },
}
</script>

<style lang="postcss" scoped>
.section-step {
  @apply h-4 w-4 p-4 rounded-full flex items-center justify-center text-white bg-green-700;
}
</style>
