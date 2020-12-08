<template>
  <div
    :class="[!isSuccess ? 'lg:w-7/12' : 'lg:w-full']"
    class="px-6 py-6 pt-4 lg:pl-24 lg:pt-10 w-full"
  >
    <!-- section form commitment -->
    <template v-if="!isSuccess">
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

      <div class="my-8 flex items-center font-roboto font-medium">
        <div class="flex items-center justify-center">
          <div class="section-step text-white bg-green-700">
            <div v-if="step === 1">1</div>
            <div v-else>
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.73587 6.58581L2.72838 3.65163C2.6616 3.58541 2.58205 3.53273 2.49431 3.49663C2.40658 3.46053 2.31239 3.44171 2.21717 3.44127C2.12195 3.44083 2.02758 3.45877 1.9395 3.49405C1.85141 3.52934 1.77136 3.58127 1.70393 3.64687L0.208723 5.10801C0.0741227 5.24149 -0.000905663 5.42149 8.25236e-06 5.60873C0.000922168 5.79598 0.0777038 5.97527 0.213601 6.10749L4.8724 10.6504C5.09909 10.8721 5.40625 10.9977 5.72726 11C6.04827 11.0022 6.35724 10.8809 6.58713 10.6623L7.23351 10.0316L14.8071 2.64263C14.9347 2.51033 15.0039 2.33441 14.9998 2.15279C14.9957 1.97116 14.9186 1.79839 14.7852 1.67171L13.2875 0.210564C13.158 0.0797892 12.9808 0.00417856 12.7944 0.000168043C12.6081 -0.00384247 12.4276 0.0640706 12.2923 0.189146L5.73587 6.58581Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div class="mx-2 text-green-900">Form Data Diri</div>
        </div>
        <div
          :class="[step === 1 ? 'border-gray-300' : 'border-green-700']"
          class="w-24 h-1 border-t-2 mt-1 mx-2"
        ></div>
        <div class="flex items-center justify-center">
          <div
            :class="[
              step === 1
                ? 'text-gray-600 bg-gray-200'
                : 'text-white bg-green-700',
            ]"
            class="section-step"
          >
            2
          </div>
          <div
            :class="[step === 1 ? 'text-gray-700' : 'text-green-900']"
            class="mx-2"
          >
            Foto Tangan
          </div>
        </div>
      </div>

      <ValidationObserver v-slot="{ invalid }">
        <form>
          <!-- section form input -->
          <template v-if="step === 1">
            <FormInput ref="formInput" :form="form" />
          </template>

          <template v-else-if="step === 2">
            <FormHand />
          </template>

          <div
            :class="[step === 1 ? 'justify-end' : 'justify-between']"
            class="flex flex-col lg:flex-row items-center lg:items-end"
          >
            <template v-if="step === 2">
              <recaptcha
                class="pb-6 lg:pb-0"
                @error="onError"
                @success="onSuccess"
                @expired="onExpired"
              />
            </template>

            <!-- section button -->
            <div class="flex h-13 justify-end lg:pb-3 lg:pr-8">
              <button
                v-if="step === 2"
                type="button"
                class="flex items-center border text-green-800 border-green-800 mx-6 font-bold focus:outline-none rounded py-2 px-4"
                @click="goBack"
              >
                <svg
                  class="mr-2 fill-current"
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.45427 0.236935L0.214861 5.47634C0.165855 5.53241 0.125492 5.59548 0.0951031 5.66346L0.0501938 5.72334C0.0190767 5.81489 0.00388695 5.91109 0.00528461 6.00777C-0.00176188 6.06994 -0.00176188 6.13271 0.00528462 6.19489L0.00528462 6.29219C0.0326173 6.34057 0.0652529 6.38576 0.102588 6.42692L0.169952 6.53919L5.40936 11.7786C5.47894 11.8488 5.56172 11.9044 5.65293 11.9424C5.74414 11.9804 5.84197 12 5.94078 12C6.03959 12 6.13742 11.9804 6.22863 11.9424C6.31984 11.9044 6.40263 11.8488 6.47221 11.7786C6.54236 11.709 6.59805 11.6262 6.63605 11.535C6.67405 11.4438 6.69361 11.346 6.69361 11.2472C6.69361 11.1484 6.67405 11.0505 6.63605 10.9593C6.59805 10.8681 6.54236 10.7853 6.47221 10.7157L2.53517 6.75625L13.8448 6.75625C14.0433 6.75625 14.2337 6.67739 14.3741 6.53703C14.5144 6.39666 14.5933 6.20628 14.5933 6.00777C14.5933 5.80926 14.5144 5.61887 14.3741 5.47851C14.2337 5.33814 14.0433 5.25928 13.8448 5.25928L2.56511 5.25928L6.54706 1.29979C6.61721 1.2302 6.6729 1.14742 6.7109 1.05621C6.7489 0.965001 6.76846 0.867169 6.76846 0.76836C6.76846 0.669551 6.7489 0.57172 6.7109 0.480509C6.6729 0.389299 6.61721 0.306517 6.54706 0.236935C6.47705 0.162153 6.39243 0.102538 6.29844 0.0617826C6.20446 0.0210273 6.1031 -2.66775e-07 6.00066 -2.62297e-07C5.89822 -2.57819e-07 5.79687 0.0210273 5.70288 0.0617826C5.6089 0.102538 5.52428 0.162153 5.45427 0.236935Z"
                  />
                </svg>
                Kembali
              </button>

              <button
                type="button"
                :disabled="invalid"
                :class="[
                  step === 1 && invalid
                    ? 'text-gray-400 border-gray-400 pointer-events-none'
                    : step === 2 &&
                      (isDetected === false || isRecaptchaValid === false)
                    ? 'text-gray-400 border-gray-400 pointer-events-none'
                    : 'text-green-800 border-green-800',
                ]"
                class="flex items-center border font-bold focus:outline-none rounded py-2 px-4"
                @click="submitForm"
              >
                Lanjut
                <svg
                  class="ml-2 fill-current"
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13903 11.7631L14.3784 6.52366C14.4274 6.46759 14.4678 6.40452 14.4982 6.33654L14.5431 6.27666C14.5742 6.18511 14.5894 6.08891 14.588 5.99223C14.5951 5.93006 14.5951 5.86729 14.588 5.80511L14.588 5.70781C14.5607 5.65943 14.528 5.61424 14.4907 5.57308L14.4233 5.46081L9.18394 0.221401C9.11436 0.151246 9.03158 0.0955634 8.94037 0.0575637C8.84916 0.0195641 8.75133 -2.55361e-07 8.65252 -2.5968e-07C8.55371 -2.63999e-07 8.45588 0.019564 8.36467 0.0575637C8.27346 0.0955634 8.19067 0.151246 8.12109 0.221401C8.05094 0.290982 7.99525 0.373766 7.95725 0.464976C7.91925 0.556186 7.89969 0.654017 7.89969 0.752826C7.89969 0.851635 7.91925 0.949467 7.95725 1.04068C7.99525 1.13189 8.05094 1.21467 8.12109 1.28425L12.0581 5.24375L0.748497 5.24375C0.549986 5.24375 0.359605 5.3226 0.219236 5.46297C0.0788677 5.60334 1.02372e-05 5.79372 1.02285e-05 5.99223C1.02198e-05 6.19074 0.0788676 6.38112 0.219236 6.52149C0.359605 6.66186 0.549986 6.74072 0.748497 6.74072L12.0282 6.74072L8.04624 10.7002C7.97609 10.7698 7.9204 10.8526 7.8824 10.9438C7.8444 11.035 7.82484 11.1328 7.82484 11.2316C7.82484 11.3304 7.8444 11.4283 7.8824 11.5195C7.9204 11.6107 7.97609 11.6935 8.04624 11.7631C8.11625 11.8378 8.20087 11.8975 8.29486 11.9382C8.38884 11.979 8.49019 12 8.59264 12C8.69508 12 8.79643 11.979 8.89041 11.9382C8.9844 11.8975 9.06902 11.8378 9.13903 11.7631Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </template>

    <!-- section success -->
    <template v-else>
      <Success />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver } from 'vee-validate'
import BackButton from '@/components/BackButton'
import FormInput from './FormInput'
import FormHand from './FormHand'
import Success from './Success'
export default {
  components: { ValidationObserver, BackButton, FormInput, FormHand, Success },
  data() {
    return {
      step: 1,
      isSuccess: false,
      isRecaptchaValid: false,
      form: {
        first_name: '',
        last_name: '',
        occupation_name: '',
        workplace_name: '',
        email: '',
        signature: '',
        content: '',
      },
    }
  },
  computed: {
    ...mapGetters('handDetection', {
      isDetected: 'isDetected',
    }),
  },
  methods: {
    async submitForm() {
      if (this.step === 1) {
        // save signature
        this.$refs.formInput.saveSignature()
        return (this.step = this.step + 1)
      }

      // submit form
      try {
        await this.$recaptcha.getResponse()

        // post form to API
        const data = await this.$store.dispatch(
          'signature/addSignature',
          this.form
        )

        if (!data) {
          return this.$toast.error('Terjadi Kesalahan')
        }

        this.isSuccess = true
        await this.$recaptcha.reset()
      } catch (error) {
        this.$toast.error('Silahkan Selesaikan Captcha')
      }
    },
    goBack() {
      this.step = this.step - 1
    },
    // recaptcha
    onSuccess(token) {
      this.isRecaptchaValid = true
    },
    onError(_) {
      this.isRecaptchaValid = false
    },
    onExpired() {
      this.isRecaptchaValid = false
    },
  },
}
</script>

<style lang="postcss" scoped>
.section-step {
  @apply h-4 w-4 p-4 rounded-full flex items-center justify-center;
}
.h-13 {
  height: 3.3rem;
}
</style>
