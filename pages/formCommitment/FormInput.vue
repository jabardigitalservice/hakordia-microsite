<template>
  <div>
    <!-- check token -->
    <!-- <template v-if="!token"> -->
    <!-- section 1 -->
    <div class="flex flex-col lg:flex-row justify-between lg:pb-3">
      <!-- firt name -->
      <div class="w-full lg:w-1/2">
        <ValidationProvider
          v-slot="{ errors }"
          name="firt_name"
          rules="required"
        >
          <div class="md:flex mb-5">
            <div class="md:w-full pr-0 lg:pr-8">
              <label
                class="block tracking-wide text-15 text-grey-darker text-gray-800 font-bold mb-2"
              >
                Nama Depan
                <span class="font-normal">(wajib diisi)</span>
              </label>
              <input
                v-model="form.first_name"
                class="appearance-none block w-full text-grey-darker border focus:outline-none focus:border-green-800 border-gray-500 rounded py-2 px-4"
                placeholder="Masukkan Nama Depan"
              />
              <p class="text-red-500 text-xs italic mt-1">
                {{ errors[0] }}
              </p>
            </div>
          </div>
        </ValidationProvider>
      </div>

      <!-- last name -->
      <div class="w-full lg:w-1/2">
        <div class="md:flex mb-5">
          <div class="md:w-full pr-0 lg:pr-8">
            <label
              class="block tracking-wide text-15 text-grey-darker text-gray-800 font-bold mb-2"
            >
              Nama Belakang
            </label>
            <input
              v-model="form.last_name"
              class="appearance-none block w-full text-grey-darker border focus:outline-none focus:border-green-800 border-gray-500 rounded py-2 px-4"
              placeholder="Masukkan Nama Belakang"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- section 2 -->
    <div class="flex flex-col lg:flex-row justify-between lg:pb-3">
      <!-- Profesi -->
      <div class="w-full lg:w-1/2">
        <div class="md:flex mb-5">
          <div class="md:w-full pr-0 lg:pr-8">
            <label
              class="block tracking-wide text-15 text-grey-darker text-gray-800 font-bold mb-2"
            >
              Profesi
            </label>
            <input
              v-model="form.occupation_name"
              class="appearance-none block w-full text-grey-darker border focus:outline-none focus:border-green-800 border-gray-500 rounded py-2 px-4"
              placeholder="Masukkan Nama Profesi"
            />
          </div>
        </div>
      </div>

      <!-- Instansi -->
      <div class="w-full lg:w-1/2">
        <div class="md:flex mb-5">
          <div class="md:w-full pr-0 lg:pr-8">
            <label
              class="block tracking-wide text-15 text-grey-darker text-gray-800 font-bold mb-2"
            >
              Instansi
            </label>
            <input
              v-model="form.workplace_name"
              class="appearance-none block w-full text-grey-darker border focus:outline-none focus:border-green-800 border-gray-500 rounded py-2 px-4"
              placeholder="Masukkan Nama Instansi"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- section 1 -->
    <div class="flex flex-col lg:flex-row justify-between lg:pb-3">
      <!-- email -->
      <div class="w-full lg:w-1/2">
        <ValidationProvider v-slot="{ errors }" name="email" rules="email">
          <div class="md:flex mb-5">
            <div class="md:w-full pr-0 lg:pr-8">
              <label
                class="block tracking-wide text-15 text-grey-darker text-gray-800 font-bold mb-2"
              >
                Email
              </label>
              <input
                v-model="form.email"
                type="email"
                class="appearance-none block w-full text-grey-darker border focus:outline-none focus:border-green-800 border-gray-500 rounded py-2 px-4"
                placeholder="Masukkan Email"
              />
              <p class="text-red-500 text-xs italic mt-1">
                {{ errors[0] }}
              </p>
            </div>
          </div>
        </ValidationProvider>
      </div>
    </div>
    <!-- </template> -->

    <!-- section 3 -->
    <div class="flex flex-col lg:flex-row justify-between lg:pb-3">
      <!-- signature -->
      <div class="w-full">
        <div class="mb-5">
          <div class="pr-0 lg:pr-8">
            <label
              class="block tracking-wide text-15 text-grey-darker text-gray-800 font-bold mb-2"
            >
              Tanda Tangan
              <span class="font-normal">(wajib diisi)</span>
            </label>
            <div
              class="border mb-4 focus:outline-none focus:border-green-800 border-gray-500 rounded"
            >
              <client-only>
                <div class="relative">
                  <VueSignaturePad ref="signaturePad" height="270px" />
                  <div
                    class="absolute top-0 w-full flex justify-center py-3 text-gray-600"
                  >
                    Tanda Tangan Disini
                  </div>
                </div>
              </client-only>
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                class="border font-bold focus:outline-none text-green-800 border-green-800 rounded py-2 px-4"
                @click="clear"
              >
                Hapus Tanda Tangan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- section 4 -->
    <div class="flex flex-col lg:flex-row justify-between lg:pb-3">
      <!-- aspirasi -->
      <div class="w-full">
        <ValidationProvider
          v-slot="{ errors }"
          name="content"
          rules="minmax:2,1250"
        >
          <div class="md:flex mb-5">
            <div class="md:w-full pr-0 lg:pr-8">
              <label
                class="block tracking-wide text-15 text-grey-darker text-gray-800 font-bold mb-2"
              >
                Aspirasi
              </label>
              <textarea
                v-model="form.content"
                rows="4"
                class="appearance-none block w-full text-grey-darker border focus:outline-none focus:border-green-800 border-gray-500 rounded py-2 px-4"
                placeholder="Masukkan Aspirasi"
              />
              <p class="text-red-500 text-xs italic mt-1">
                {{ errors[0] }}
              </p>
            </div>
          </div>
        </ValidationProvider>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: { ValidationProvider },
  props: {
    token: {
      type: String,
      default: () => null,
    },
    form: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    saveSignature() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()

      if (isEmpty) {
        this.$toast.error('Silahkan Isi Tanda Tangan')
        return false
      }

      this.form.signature = data
      return true
    },
    clear() {
      this.$refs.signaturePad.clearSignature()
    },
  },
}
</script>

<style scoped>
.h-300 {
  height: 18.75rem;
}
</style>
