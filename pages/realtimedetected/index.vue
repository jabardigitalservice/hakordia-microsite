<template>
  <div>
    <div v-if="isLoadModel" class="mb10">
      <div id="updatenote" class="updatenote mt10">loading model ..</div>
    </div>
    <video id="myvideo" class="max-w-6xl hidden" autoplay="autoplay"></video>
    <canvas id="canvas" class="border max-w-md mb-8"></canvas>

    <button @click="openCamera">Open</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVideo: false,
      isLoadModel: true,
      isDetected: false,
      model: null,
      modelParams: {
        flipHorizontal: true, // flip e.g for video
        maxNumBoxes: 20, // maximum number of boxes to detect
        iouThreshold: 0.5, // ioU threshold for non-max suppression
        scoreThreshold: 0.97, // confidence threshold for predictions.,
      },
    }
  },
  mounted() {
    this.isLoadModel = true
    // Load the model.
    this.$handTrack.load(this.modelParams).then((lmodel) => {
      // detect objects in the image.
      this.model = lmodel
      this.isLoadModel = false
      // console.log('Loaded Model!')
      // updateNote.textContent = 'Loaded Model!'
      // trackButton.disabled = false
      this.startVideo()
    })
  },
  destroyed() {
    this.model?.dispose()
    this.$handTrack.stopVideo()
  },
  methods: {
    openCamera() {
      const constraints = (window.constraints = {
        audio: false,
        video: {
          facingMode: {
            exact: 'environment',
          },
        },
      })

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream
        })
        .catch((_) => {
          // console.log('browser didnt support')
        })
    },
    startVideo() {
      const video = document.getElementById('myvideo')
      this.$handTrack.startVideo(video).then((status) => {
        if (status) {
          this.isVideo = true
          this.runDetection()
        } else {
          alert('Please enable video')
        }
      })
    },

    runDetection() {
      const video = document.getElementById('myvideo')
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')

      this.model.detect(video).then((predictions) => {
        this.model.renderPredictions(predictions, canvas, context, video)
        if (this.isVideo) {
          requestAnimationFrame(this.runDetection)
          if (predictions.length > 0) {
            this.isDetected = true
            setTimeout(() => this.authHand, 2000)
          }
        }
      })
    },
  },
  authHand() {
    if (this.isDetected) {
      // console.log('save')
    }

    this.isDetected = false
  },
}
</script>
