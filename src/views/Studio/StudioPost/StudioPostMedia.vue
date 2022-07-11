<template>
  <div class="ST_post_media_main_container">
    <div class="ST_post_media_container">

      <div class="ST_post_media_header_container ST_headers_container">
        <h3 class="ST_post_media_header ST_headers">Choose An Image Or Gif</h3>
      </div>

      <div class="ST_post_media_select_container">
        <input @input="handleInput" type="file" hidden ref="ST_post_media_select">
        <div @click="activeFileSelect" class="ST_post_media_select_btn">
          <section v-if="mediaInfo && mediaURL" class="ST_post_media_img_container">
            <img @contextmenu.prevent="" v-show="mediaType === 'image'" class="ST_post_media_img" :src="mediaURL" ref="ST_post_media_img">
            <!-- <video @contextmenu.prevent="" v-show="mediaType === 'video'" class="ST_post_media_vid" :src="mediaURL" ref="ST_post_media_vid"></video> -->
          </section>
          <section v-else class="ST_post_media_icon">
            <i class="fas fa-camera-retro"></i>
            <h3>{{ mediaInfo.name || studioTracker.post.postMedia || "Choose An Image" }}</h3>
          </section>
        </div>
      </div>

      <div class="ST_post_media_action_container ST_action_container">
        <div class="ST_post_image_container">
          <button :disabled="!mediaAccept" @click="addPostMedia(mediaInfo, true, mediaURL)" class="ST_post_image_btn ST_action_btn"><i class="fas fa-camera"></i> Add Media</button>
        </div>
        <div class="ST_post_noImage_container">
          <button @click="addPostMedia(mediaInfo, false, mediaURL)" class="ST_post_noImage_btn ST_action_btn"><i class="fas fa-tint-slash"></i> No Media</button>
        </div>
      </div>

    </div>
  </div>

</template>

<style>
  .ST_post_media_select_container {
    /* margin-top: 2em; */
  }

  .ST_post_media_img_container {
    width: 100%;
    height: 100%;
    /* background: #000; */
  }

  .ST_post_media_img,
  .ST_post_media_vid {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .ST_post_media_select_btn {
    width: 30%;
    color: #fff;
    height: 20em;
    margin: 2em auto 0 auto;
    /* font-size: 2em; */
    /* max-width: 100%; */
    cursor: pointer;
    overflow: hidden;
    background: none;
    border-radius: 10px;
    word-break: keep-all;
    text-overflow: ellipsis;
    border: dashed 2px #fff;
  }

  .ST_post_media_select_btn .ST_post_media_icon {
    padding: 10px 2em;
    position: relative;
      top: 50%;
    transform: translateY(-50%);
  }

  .ST_post_media_select_btn section i {
    font-size: 2em;
  }

  @media only screen and (max-width: 600px) {
    .ST_post_media_select_btn {
      width: 95%;
      max-width: 95%;
    }
  }
</style>

<script>
  import FetchGet from '@/Functions/FetchGet.js'

  export default {
    props: [
      'studioData',
      'themeColor_1',
      'themeColor_2',
      'addPostMedia',
      'toggleLoader',
      'studioTracker',
      'studioSession',
      'displayPageLog',
    ],
    data() {
      return {
        mediaURL: false,
        mediaInfo: false,
        mediaType: false,
        mediaAccept: false,
        fetchGet: new FetchGet(
          this.$store.state.MainServer,
          this.$store.state.apiToken
        ),
        allow_extentions_img: [
          "gif", "tiff", "jpeg", "bmp",
          "jpg", "png", "svg", "mjpeg"
        ],
        allow_extentions_vid: [
          "mp4", "mp3", "flv", "mkv",
          "avi", "m4a", "mov", "wmv", "webm"
        ],
      }
    },
    watch: {
      themeColor_1() {

      },
      themeColor_2: function(newVal, oldVal) {
        if (this.studioSession === "postMedia" && this.mediaURL) {
          document.body.querySelector('.ST_post_media_select_btn').style.background = newVal
        }
      }
    },
    methods: {
      appendImgFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = (e) => {
          if (this.mediaType === "image") this.$refs.ST_post_media_img.src = e.target.result
          else if (this.mediaType === "video") this.$refs.ST_post_media_vid.src = e.target.result
          document.body.querySelector('.ST_post_media_select_btn').style.background = this.themeColor_2
        }
      },
      activeFileSelect() {
        this.$refs.ST_post_media_select.click()
      },
      handleInput(e) {
        this.toggleLoader()
        this.mediaInfo = e.target.files[0]

        if (this.detectMediaType(this.mediaInfo) !== 0) {
          this.displayPageLog("Oops! Looks Like We Don't take this kind around here...")
          return
        }

        if (this.mediaType === "image") {
          let img = document.createElement("img")
          img.src = URL.createObjectURL(this.mediaInfo)

          img.onload = (e) => {
            this.mediaURL = e.target.src
            document.body.querySelector('.ST_post_media_select_btn').style.background = this.themeColor_2
            URL.revokeObjectURL(e.target.src);
            this.toggleLoader()
            this.mediaAccept = true
          }
        } else if (this.mediaType === "video") {
          let vidForm = new FormData()
          vidForm.append('apiKey', this.$store.state.apiKey)
          vidForm.append('clientSideID', this.$store.state.clientSideID)
          vidForm.append('POST_MEDIA', this.mediaInfo, this.mediaInfo.name)
          this.fetchGet.sendData(this.$store.state.clientSideID, '/studio/posts/analyze', vidForm, (r) => {
            if (r.errorCode) {
              this.mediaAccept = false
              this.displayPageLog(r.errorMsg)
            } else if (r.successCode) this.mediaAccept = true

            this.toggleLoader()
            document.body.querySelector('.ST_post_media_select_btn').style.background = this.themeColor_2
          })
          // ONLY CHECK VIDEO ON SERVER SIDE
        }

      },
      detectMediaType(file) {
        let errors = this.checkMediaAttributes(file)

        if (errors !== 0) {
          if (errors === -1) return this.displayPageLog("Too Big Dawg! Max Size Is 2 GB...")
          else if (errors === -2) return this.displayPageLog("What No Extension...")
        }

        let fileSplit = file.name.split('.')
        let ext = fileSplit[fileSplit.length - 1]

        for (var i = 0; i < this.allow_extentions_img.length; i++) {
          if (this.allow_extentions_img[i] === ext) {
            this.mediaType = "image"
            break
          }
        }

        for (var i = 0; i < this.allow_extentions_vid.length; i++) {
          if (this.allow_extentions_vid[i] === ext) {
            this.mediaType = "video"
            break
          }
        }

        if (this.mediaType) return 0
        else return -1
      },
      checkMediaAttributes(file) {
        let size = file.size / 1000000
        if (Math.floor(size) > 2048) return -1
        if (!file.name.includes('.')) return -2

        return 0
      }
    },
    mounted() {
      if (this.studioTracker.post.postMedia) {
        this.mediaURL = this.studioTracker.post.mediaURL
        if (this.mediaURL) this.mediaType = "image"
        this.mediaInfo = this.studioData.get('postMedia')
        document.body.querySelector('.ST_post_media_select_btn').style.background = this.themeColor_2
      }
    }
  }
</script>
