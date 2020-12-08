<template>
  <div
    class="py-10 lg:px-24 flex items-center justify-center lg:justify-between flex-col-reverse lg:flex-row"
  >
    <div>
      <h2 class="text-37 font-bold font-lora leading-52">
        Komitmenmu Sangat Dibutuhkan
      </h2>
      <div class="font-normal text-gray-800 pr-0 lg:pr-10">
        Dalam mewujudkan Jawa Barat bebas korupsi dengan turut ikut
        menandatangani petisi online untuk
        <span>Jabar Juara Tanpa Korupsi.</span>
      </div>

      <!-- button -->
      <router-link
        class="text-white mt-6 bg-green-700 font-bold focus:outline-none rounded-md py-4 px-8"
        tag="button"
        to="/formCommitment"
      >
        Berikan Komitmenmu Sekarang
      </router-link>
    </div>
    <div>
      <img class="pb-4 lg:pb-0" src="/images/image-work.png" alt="image work" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
