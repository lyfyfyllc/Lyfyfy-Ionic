<template>
  <div class="ST_post_media_main_container">
    <div class="ST_post_media_container">

      <div class="ST_post_media_header_container ST_headers_container">
        <h3 class="ST_post_media_header ST_headers">Choose An Image Or Gif</h3>
      </div>

      <div class="ST_post_media_select_container ST_action_container">
        <input @input="handleInput" type="file" name="" value="" hidden ref="ST_post_media_select">
        <div @click="activeFileSelect" class="ST_post_media_select_btn">
          <section v-if="mediaInfo" class="ST_post_media_img_container">
            <img class="ST_post_media_img" :src="studioTracker.post.mediaURL" ref="ST_post_media_img">
          </section>
          <section v-else class="ST_post_media_icon">
            <i class="fas fa-camera-retro"></i>
            <h3>{{ mediaInfo.name || studioTracker.post.postMedia || "Choose An Image" }}</h3>
          </section>
        </div>
      </div>

      <div class="ST_post_media_action_container ST_action_container">
        <div class="ST_post_image_container">
          <button @click="addPostMedia(mediaInfo, true, mediaURL)" class="ST_post_image_btn ST_action_btn"><i class="fas fa-camera"></i> Add Photo</button>
        </div>
        <div class="ST_post_noImage_container">
          <button @click="addPostMedia(mediaInfo, false, mediaURL)" class="ST_post_noImage_btn ST_action_btn"><i class="fas fa-tint-slash"></i> No Image</button>
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
    background: #000;
  }

  .ST_post_media_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ST_post_media_select_btn {
    /* width: 50%; */
    color: #fff;
    height: 10em;
    /* font-size: 2em; */
    max-width: 50%;
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
      width: 80%;
      max-width: 80%;
    }
  }
</style>

<script>
  export default {
    props: [
      'studioData',
      'addPostMedia',
      'studioTracker',
    ],
    data() {
      return {
        mediaURL: false,
        mediaInfo: false
      }
    },
    methods: {
      appendImgFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = (e) => {
          this.$refs.ST_post_media_img.src = e.target.result
        }
      },
      activeFileSelect() {
        this.$refs.ST_post_media_select.click()
      },
      handleInput(e) {
        this.mediaInfo = e.target.files[0]

        let reader = new FileReader()
        reader.readAsDataURL(this.mediaInfo)

        reader.onload = (e) => {
          this.mediaURL = e.target.result
          this.$refs.ST_post_media_img.src = e.target.result
        }
      }
    },
    mounted() {
      if (this.studioTracker.post.postMedia) {
        this.mediaInfo = this.studioData.get('postMedia')
        this.mediaURL = this.studioTracker.post.mediaURL
      }
    }
  }
</script>
