<template>
  <div>
    <div class="bg-gray-100">
      <div class="text-center pt-6">
        <div class="font-roboto text-gray-900 font-medium leading-79 text-46">
          Komitmen Kami Terhadap Anti-Korupsi
        </div>
        <div class="font-roboto text-21 text-gray-700">
          Telah terkumpul
          <span class="font-bold text-red-600 text-21">120.525 Ribu</span>
          petisi dan tanda tangan
        </div>

        <div class="pt-12">
          <div class="mx-24">
            <div class="w-full my-5">
              <div class="px-4 rounded-t-md">
                <ul class="flex font-roboto">
                  <li
                    v-for="(item, index) in items"
                    :key="index"
                    :class="[
                      stepSelected === index
                        ? 'text-green-700 border-green-700 border-t-2 border-l-2 border-r-2 bg-white min-mb-2'
                        : 'text-gray-600',
                    ]"
                    class="cursor-pointer py-2 px-6 font-bold rounded-t-md"
                    @click="stepSelected = index"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="border-t-2 border-green-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- form input -->
    <div class="py-12">
      <div
        class="flex max-w-lg mx-auto bg-white items-center border p-2 rounded-md"
      >
        <svg
          class="lg:ml-2 ml-0"
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8901 16.8296L12.6613 11.6007C13.653 10.3764 14.25 8.81977 14.25 7.12503C14.25 3.19631 11.0537 0 7.12499 0C3.19627 0 0 3.19631 0 7.12503C0 11.0537 3.19631 14.2501 7.12503 14.2501C8.81977 14.2501 10.3764 13.653 11.6007 12.6613L16.8296 17.8902C16.9761 18.0366 17.2135 18.0366 17.36 17.8902L17.8902 17.3599C18.0366 17.2135 18.0366 16.976 17.8901 16.8296ZM7.12503 12.75C4.02322 12.75 1.50001 10.2268 1.50001 7.12503C1.50001 4.02322 4.02322 1.50001 7.12503 1.50001C10.2268 1.50001 12.75 4.02322 12.75 7.12503C12.75 10.2268 10.2268 12.75 7.12503 12.75Z"
            fill="#C4C4C4"
          />
        </svg>

        <input
          class="appearance-none text-sm lg:text-base bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Masukkan Nama"
        />

        <button
          class="bg-green-700 py-1 px-5 cus-m-1 text-white shadow hover:bg-green-900 rounded"
          style="margin: -1px -1px -1px 0px"
        >
          <span class="hidden lg:block font-bold">Cari</span>
          <svg
            class="block lg:hidden"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9023 14.9597L11.2545 10.3118C12.136 9.22342 12.6667 7.8398 12.6667 6.33336C12.6667 2.84116 9.82552 0 6.33333 0C2.84113 0 0 2.84116 0 6.33336C0 9.82555 2.84116 12.6667 6.33336 12.6667C7.8398 12.6667 9.22342 12.136 10.3118 11.2545L14.9597 15.9024C15.0899 16.0325 15.3009 16.0325 15.4311 15.9024L15.9024 15.4311C16.0325 15.3009 16.0325 15.0898 15.9023 14.9597ZM6.33336 11.3334C3.5762 11.3334 1.33335 9.09052 1.33335 6.33336C1.33335 3.5762 3.5762 1.33335 6.33336 1.33335C9.09052 1.33335 11.3334 3.5762 11.3334 6.33336C11.3334 9.09052 9.09052 11.3334 6.33336 11.3334Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepSelected: 0,
      items: [
        'Pimpinan Provinsi Jawa Barat',
        'Pimpinan & Staff Organisasi Perangkat Daerah Kotakab SeJabar',
        'Masyarakat',
      ],
    }
  },
}
</script>

<style scoped>
.min-mb-2 {
  margin-bottom: -2px;
}
</style>
