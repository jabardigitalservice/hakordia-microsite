<template>
  <div class="relative flex justify-between w-full mb-8">
    <!-- left side content -->
    <div class="px-6 pt-4 lg:px-24 lg:pt-10">
      <div>
        <div class="font-lora text-gray-900">
          <div>
            <!-- on mobile -->
            <div class="block lg:hidden">
              <img
                class="mx-auto"
                src="/images/logo_hakordia_jabar.png"
                alt="logo_hakordia_jabar"
              />
            </div>
            <div class="text-34 font-bold pb-1">Kawal Jawa Barat Untuk</div>
            <div class="text-36 font-bold leading-52">
              Terus Maju Lawan Korupsi
            </div>
            <div class="text-36 font-bold leading-52">dengan</div>
          </div>
        </div>
      </div>

      <!-- statistics deskstop -->
      <div class="hidden lg:flex mt-16 mb-12">
        <div
          class="font-roboto text-130 font-bold leading-32 text-red-600 mr-5"
        >
          {{ totalSignatures.toLocaleString('id') }}
        </div>
        <div class="font-roboto text-32 text-red-600 font-medium leading-none">
          Petisi <br />
          Online
        </div>
      </div>

      <!-- statistics mobile -->
      <div
        class="flex flex-col lg:hidden items-center font-roboto text-red-600 my-10 lg:mt-16 lg:mb-12"
      >
        <div class="text-75 font-bold mr-5">
          {{ totalSignatures.toLocaleString('id') }}
        </div>
        <div class="flex flex-col text-32 font-medium leading-none">
          <!-- <div class="text-75 font-bold">Ribu</div> -->
          <div>Petisi Online</div>
        </div>
      </div>

      <div class="font-lato text-gray-800 leading-26 mb-6">
        Wujudkan Jawa Barat bebas korupsi dengan ikut menandatangani <br />
        petisi online untuk mewujudkan
        <span class="font-bold">Jawa Barat Juara Tanpa Korupsi.</span>
      </div>

      <div class="mb-3 flex justify-center lg:block">
        <router-link
          class="bg-green-700 py-4 px-8 text-18 font-bold text-white mb-4 shadow hover:bg-green-900 rounded-md"
          tag="button"
          to="/formCommitment"
          >Berikan Komitmenmu Sekarang</router-link
        >
      </div>

      <div class="mb-12 lg:mb-20 flex flex-col items-center lg:block">
        <div class="mb-2 text-14 text-gray-800">
          atau Kamu juga dapat berbagi melalui
        </div>
        <div class="flex relative flex-col items-center lg:items-start">
          <ShareSocial />

          <div
            class="lg:w-screen flex lg:absolute justify-center mt-16 pr-4 lg:pr-32 items-center"
          >
            <img src="/icons/mouse_scroll.svg" alt="icon mouse scroll" />
            <span class="pl-3 text-14 text-gray-800"
              >Scroll untuk lihat semua petisi</span
            >
          </div>
        </div>
      </div>
    </div>

    <div
      class="hidden lg:block relative z-30 -mt-24 bg-heading bg-no-repeat bg-right-top"
    >
      <div class="flex justify-end">
        <img
          class="mt-24 mr-56"
          src="/images/foto_gubWagub.png"
          alt="foto_gubWagub"
        />
        <img
          class="absolute right-0 mr-20"
          style="top: 50%"
          src="/images/logo_hakordia_jabar.png"
          alt="logo_hakordia_jabar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShareSocial from '@/components/ShareSocial'
export default {
  components: { ShareSocial },
  props: {
    totalSignatures: {
      type: Number,
      default: 0,
    },
  },
}
</script>
