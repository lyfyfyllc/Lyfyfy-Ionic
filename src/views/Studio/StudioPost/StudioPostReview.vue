<template>
  <div class="ST_post_review_main_container">
    <div class="ST_post_review_container">

      <div class="ST_headers_container">
        <h3 class="ST_headers">Let's Wrap This Up</h3>
      </div>

      <div v-if="studioTracker.post.text" class="ST_post_review_text_container">
        <h3 class="ST_post_review_text" v-html="studioTracker.post.postText"></h3>
      </div>

      <div v-if="studioTracker.post.media" class="ST_post_review_img_container">
        <img class="ST_post_review_img" :src="studioTracker.post.mediaURL" alt="An image probably">
      </div>

      <div class="ST_post_review_categories_container">
        <div v-for="cats in studioTracker.categories" class="ST_post_review_category_container" key="cats">
          <button class="ST_post_review_category">{{ cats }}</button>
        </div>
      </div>

      <div class="ST_post_mature_contianer">
        <div class="ST_post_mature_tag">
          <h3>Is This Content Mature?</h3>
        </div>
        <div class="ST_post_mature_actions">
          <button class="ST_post_mature_yes">Yes</button>
          <button class="ST_post_mature_no">No</button>
        </div>
      </div>

      <div class="ST_post_upload_container">
        <div class="ST_post_upload_tag_container">
          <h3>Everything Look Good?</h3>
        </div>
        <div class="ST_post_upload_action_container">
          <button class="ST_post_upload_btn">Upload!</button>
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

  .ST_post_review_text_container {
    width: 100%;
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
    background: rgba(19, 15, 64, 1);
  }

  .ST_post_mature_actions {
  }

  @media only screen and (max-width: 600px) {
    .ST_post_review_container {
      width: 100%;
    }
  }
</style>

<script>
  export default {
    props: [
      'studioData',
      'studioTracker',
    ],
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
