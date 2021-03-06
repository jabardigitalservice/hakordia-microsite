<template>
  <div class="w-full py-6">
    <template v-if="isLoadModel">
      <div class="flex justify-center h-64">
        <img src="/icons/loading.svg" alt="loading" />
      </div>
    </template>

    <template v-else>
      <div>
        <div
          v-if="isCameraOpen"
          v-show="!isLoading"
          class="rounded-md"
          :class="{ flash: isShotPhoto }"
        >
          <div class="camera-shutter" :class="{ flash: isShotPhoto }"></div>

          <video
            v-show="!isPhotoTaken"
            ref="camera"
            class="w-full video object-fill rounded-t-2xl"
            :width="450"
            :height="337.5"
            autoplay
          ></video>

          <canvas
            v-show="isPhotoTaken"
            id="photoTaken"
            ref="canvas"
            :width="450"
            :height="337.5"
            class="w-full video object-fill rounded-t-2xl"
          ></canvas>
          <template v-if="!isPhotoTaken">
            <button
              type="button"
              class="flex w-full bg-gray-200 justify-center items-center rounded-b-2xl"
              @click="takePhoto"
            >
              <img src="/icons/camera.svg" alt="camera icon" />
              <div class="ml-2 py-5 text-green-800 font-bold">Ambil Gambar</div>
            </button>
          </template>

          <template v-else>
            <div
              class="flex w-full lg:w-1/2 mt-6 rounded-md bg-black py-3 px-2"
            >
              <div class="text-white">{{ getMessage }}</div>
              <div class="mx-auto">
                <button
                  class="text-green-600 font-bold px-4"
                  type="button"
                  @click="takePhoto"
                >
                  Ulangi Ambil Gambar
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoadModel: true,
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
    }
  },
  computed: {
    getMessage() {
      return 'Gambar Tangan diambil.'
    },
  },
  mounted() {
    this.isLoadModel = false
    this.toggleCamera()
  },
  beforeDestroy() {
    this.stopCameraStream()
  },
  methods: {
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false
        this.isPhotoTaken = false
        this.isShotPhoto = false
        this.stopCameraStream()
      } else {
        this.isCameraOpen = true
        this.createCameraElement()
      }
    },

    createCameraElement() {
      this.isLoading = true

      const constraints = (window.constraints = {
        audio: false,
        video: true,
      })

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false
          this.$refs.camera.srcObject = stream
        })
        .catch((_) => {
          this.isLoading = false
          alert("May the browser didn't support or there is some errors.")
        })
    },

    stopCameraStream() {
      const tracks = this.$refs.camera.srcObject.getTracks()

      tracks.forEach((track) => {
        track.stop()
      })
    },

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true

        const FLASH_TIMEOUT = 50

        setTimeout(() => {
          this.isShotPhoto = false
        }, FLASH_TIMEOUT)
      }

      this.isPhotoTaken = !this.isPhotoTaken

      const canvas = document.getElementById('photoTaken')
      const context = canvas.getContext('2d')
      canvas.width = this.$refs.camera.width
      canvas.height = this.$refs.camera.height
      context.drawImage(
        this.$refs.camera,
        0,
        0,
        this.$refs.camera.width,
        this.$refs.camera.height
      )
    },

    downloadImage() {
      const download = document.getElementById('downloadPhoto')
      const canvas = document
        .getElementById('photoTaken')
        .toDataURL('image/jpeg')
        .replace('image/jpeg', 'image/octet-stream')
      download.setAttribute('href', canvas)
    },
  },
}
</script>

<style>
.video {
  height: 30rem;
}
.web-camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 500px;
}
.web-camera-container .camera-button {
  margin-bottom: 2rem;
}
.web-camera-container .camera-box .camera-shutter {
  opacity: 0;
  width: 450px;
  height: 337.5px;
  background-color: #fff;
  position: absolute;
}
.web-camera-container .camera-box .camera-shutter.flash {
  opacity: 1;
}
.web-camera-container .camera-shoot {
  margin: 1rem 0;
}
.web-camera-container .camera-shoot button {
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
.web-camera-container .camera-shoot button img {
  height: 35px;
  object-fit: cover;
}
.web-camera-container .camera-loading {
  overflow: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
  min-height: 150px;
  margin: 3rem 0 0 -1.2rem;
}
.web-camera-container .camera-loading ul {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 999999;
  margin: 0;
}
.web-camera-container .camera-loading .loader-circle {
  display: block;
  height: 14px;
  margin: 0 auto;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  position: absolute;
  width: 100%;
  padding: 0;
}
.web-camera-container .camera-loading .loader-circle li {
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  line-height: 10px;
  padding: 0;
  position: relative;
  margin: 0 0 0 4px;
  background: #999;
  animation: preload 1s infinite;
  top: -50%;
  border-radius: 100%;
}
.web-camera-container .camera-loading .loader-circle li:nth-child(2) {
  animation-delay: 0.2s;
}
.web-camera-container .camera-loading .loader-circle li:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes preload {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
