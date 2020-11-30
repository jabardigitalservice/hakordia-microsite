<template>
  <client-only>
    <div class="container mx-auto">
      <h2 class="text-center text-4xl p-4">Hakordia</h2>
      <div class="border border-gray-600">
        <client-only>
          <VueSignaturePad ref="signaturePad" width="100%" height="500px" />
        </client-only>
      </div>
      <div class="text-center p-4">
        <button @click="save">Save</button>
        <button @click="clear">Clear</button>
        <button @click="undo">Undo</button>
      </div>

      <div class="mb10">
        <div id="updatenote" class="updatenote mt10">loading model ..</div>
      </div>
      <video
        id="myvideo"
        class="videobox canvasbox hidden"
        autoplay="autoplay"
      ></video>

      <canvas id="canvas" class="border canvasbox"></canvas>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      isVideo: false,
      model: null,
      modelParams: {
        flipHorizontal: true, // flip e.g for video
        imageScaleFactor: 0.7, // reduce input image size for gains in speed.
        maxNumBoxes: 20, // maximum number of boxes to detect
        iouThreshold: 0.5, // ioU threshold for non-max suppression
        scoreThreshold: 0.79, // confidence threshold for predictions.
      },
    }
  },
  mounted() {
    // Load the model.
    this.$handTrack.load(this.modelParams).then((lmodel) => {
      // detect objects in the image.
      this.model = lmodel
      // console.log('Loaded Model!')
      // updateNote.textContent = 'Loaded Model!'
      // trackButton.disabled = false
      this.startVideo()
    })
  },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    clear() {
      this.$refs.signaturePad.clearSignature()
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      console.log(isEmpty)
      console.log(data)
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
        // console.log('Predictions: ', predictions)
        this.model.renderPredictions(predictions, canvas, context, video)
        if (this.isVideo) {
          requestAnimationFrame(this.runDetection)
        }
      })
    },
  },
}
</script>

<style>
body {
  padding: 20px;
}

.p20 {
  padding: 20px;
}

.canvasbox {
  border-radius: 3px;
  margin-right: 10px;
  width: 450px;
  height: 338px;
  /* border-bottom: 3px solid #0063FF; */
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 #00000030;
  background: #333;
}

.mb10 {
  margin-bottom: 10px;
}

.mt10 {
  margin-top: 10px;
}

.updatenote {
  padding: 10px;
  background: rgb(245, 147, 20);
  color: white;
  display: inline;
}
</style>
