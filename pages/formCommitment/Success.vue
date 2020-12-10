<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="font-roboto text-center text-37 text-gray-900 font-medium pb-6">
      Terima kasih karena telah berpartisipasi dalam petisi ini.
    </h2>

    <!-- <div class="font-normal text-gray-800 text-justify">
      Sekarang Anda juga bisa melaporkan tindak pidana korupsi disekitar Anda,
      dengan mengklik tombol di bawah ini.
    </div> -->

    <div class="py-8">
      <img src="/images/form_commitment.png" alt="form_commitment" />
    </div>

    <div class="pb-8">
      <router-link
        class="flex items-center border font-bold text-green-800 border-green-800 focus:outline-none rounded py-2 px-4"
        tag="button"
        to="/"
      >
        Kembali Ke Beranda
      </router-link>
    </div>

    <div>
      <div class="pb-4 text-14 text-gray-800">
        atau Kamu dapat membagikan petisi ini ke kerabat melalui
      </div>
      <div class="flex justify-center">
        <ShareSocial />
      </div>
    </div>
  </div>
</template>

<script>
import ShareSocial from '@/components/ShareSocial'
export default {
  components: { ShareSocial },
}
</script>

<style></style>
