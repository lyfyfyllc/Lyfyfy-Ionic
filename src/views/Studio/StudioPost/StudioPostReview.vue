<template>
  <div class="ST_post_review_main_container">
    <div class="ST_post_review_container">

      <div class="ST_headers_container">
        <h3 class="ST_headers">Let's Wrap This Up</h3>
      </div>

      <div v-if="studioTracker.post.text" class="ST_post_review_text_container">
        <h3 class="ST_post_review_text" v-html="studioTracker.post.postText"></h3>
      </div>

      <div v-if="studioTracker.post.media && studioTracker.post.mediaURL" class="ST_post_review_img_container">
        <img class="ST_post_review_img" :src="studioTracker.post.mediaURL" alt="An image probably">
      </div>
      <div v-else-if="studioTracker.post.postMedia" class="ST_post_review_vid_container">
        <h3 class="ST_post_review_vid_container">{{ studioTracker.post.postMedia }}</h3>
      </div>

      <div class="ST_post_review_categories_container">
        <div v-for="cats in studioTracker.post.categories"
        class="ST_post_review_category_container" key="cats">
          <button class="ST_post_review_category">{{ cats }}</button>
        </div>
      </div>

      <div class="ST_post_mature_contianer">
        <div class="ST_post_mature_tag_container">
          <h3>Is This Content Mature?</h3>
        </div>
        <div class="ST_post_mature_actions">
          <button :style="maturityLevel === 'yes' ? 'background: rgba(162, 155, 254, 1); color: #fff': ''"
          @click="maturityLevel = 'yes'" class="ST_post_mature_yes">Yes</button>
          <button :style="maturityLevel === 'no' ? 'background: rgba(162, 155, 254, 1); color: #fff': ''"
          @click="maturityLevel = 'no'" class="ST_post_mature_no">No</button>
        </div>
      </div>

      <div class="ST_post_upload_container">
        <div class="ST_post_upload_tag_container">
          <h3>Everything Look Good?</h3>
        </div>
        <div class="ST_post_upload_action_container">
          <button @click="uploadPost(maturityLevel)" :style="!maturityLevel ? 'opacity: 0.4': ''"
          :disabled="!maturityLevel" class="ST_post_upload_btn">Upload!</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
  .ST_post_review_main_container {
    width: 100%;
  }

  .ST_post_review_container {
    width: 50%;
    margin: auto;
  }

  .ST_post_review_container div {
    margin: 1em auto;
  }

  .ST_post_review_text_container {
    width: 100%;
    border-radius: 1em;
    background: rgba(19, 15, 64, 0.6);
  }

  .ST_post_review_text {
    color: #eee;
    padding: 1em;
    font-size: 16px;
    text-align: left;
    font-family: 'Varela Round', sans-serif;
  }

  .ST_post_review_img_container {
    width: 100%;
  }

  .ST_post_review_img {
    width: 100%;
    max-height: 50vh;
    border-radius: 1em;
    object-fit: contain;
    background: rgba(19, 15, 64, 0.6);
  }

  .ST_post_review_vid_container {
    color: #fff;
    padding: 1em;
    border-radius: 1em;
    background: rgba(19, 15, 64, 0.6);
  }

  .ST_post_review_categories_container {
    color: #eee;
    /* padding: 5px; */
    display: flex;
    flex-wrap: wrap;
    border-radius: 1em;
    background: rgba(19, 15, 64, 0.6);
  }

  .ST_post_review_categories_container button {
    width: 100px;
    padding: 5px;
    border-radius: 7px;
  }

  .ST_post_mature_tag_container h3,
  .ST_post_upload_tag_container h3 {
    color: #eee;
    padding: 1em;
    font-size: 16px;
    border-radius: 10em;
    background: rgba(19, 15, 64, 1);
    font-family: 'Varela Round', sans-serif;
  }

  .ST_post_mature_actions button {
    width: 100px;
    padding: 1em;
    border-radius: 10em;
  }

  .ST_post_upload_btn {
    width: 50%;
    color: #eee;
    padding: 1em;
    border-radius: 10em;
    background: rgba(162, 155, 254, 1);
    font-family: 'Varela Round', sans-serif;
  }

  @media only screen and (max-width: 600px) {
    .ST_post_review_container {
      width: 95%;
    }
  }
</style>

<script>
  export default {
    props: [
      'studioData',
      'uploadPost',
      'studioTracker',
    ],
    data() {
      return {
        maturityLevel: false,
      }
    },
    methods: {

    }
  }
</script>
