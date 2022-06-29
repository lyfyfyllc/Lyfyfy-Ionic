<template>
  <div :style="showStudioSidebar ? 'transform: translateY(0)' : 'transform: translateY(100vh)'" class="ST_sidebar_main_container">
    <div class="ST_sidebar_container">

      <div class="ST_sidebar_close_container">
        <button @click="toggleStudioSidebar" class="ST_sidebar_close_btn"><i class="fas fa-times"></i> Close</button>
      </div>

      <div class="ST_sidebar_info_container">
        <button class="ST_sidebar_info_btn"><i class="fas fa-info"></i> Guidelines</button>
      </div>

      <div class="ST_sidebar_type_container">
        <button @click="changeSession('type'), toggleStudioSidebar()" class="ST_sidebar_type"><i class="fas fa-random"></i> Type</button>
      </div>

      <div v-if="studioTracker.type === 'post'" class="ST_sidebar_post_container">
        <div class="ST_sidebar_postText_container">
          <button @click="changeSession('postText'), toggleStudioSidebar()" class="ST_sidebar_postText"><i class="fas fa-pencil-alt"></i> Post</button>
        </div>
        <div class="ST_sidebar_postMedia_container">
          <button @click="changeSession('postMedia'), toggleStudioSidebar()" class="ST_sidebar_postMedia"><i class="fas fa-image"></i> Image</button>
        </div>
        <div class="ST_sidebar_categories_container">
          <button @click="changeSession('categories'), toggleStudioSidebar()" class="ST_sidebar_categories"><i class="fas fa-filter"></i> Categories</button>
        </div>
        <div class="ST_sidebar_upload_container">
          <button @click="changeSession('postReview'), toggleStudioSidebar()" class="ST_sidebar_upload"><i class="fas fa-download"></i> Upload</button>
        </div>
      </div>

      <div v-if="studioTracker.type === 'video'" class="ST_sidebar_video_container">
        <div class="ST_sidebar_videoFile_container">
          <button class="ST_sidebar_videoFile"><i class="fas fa-video"></i> Video</button>
        </div>
        <div class="ST_sidebar_videoThumbnail_container">
          <button class="ST_sidebar_videoThumbnail"><i class="fas fa-image"></i> Thumbnail</button>
        </div>
        <div class="ST_sidebar_videoInfo_container">
          <button class="ST_sidebar_videoInfo"><i class="fas fa-pencil-alt"></i> Info</button>
        </div>
        <div class="ST_sidebar_videoCategories_container">
          <button @click="changeSession('categories'), toggleStudioSidebar()" class="ST_sidebar_categories"><i class="fas fa-filter"></i> Categories</button>
        </div>
      </div>

      <div class="ST_sidebar_exit_container">
        <button @click="endSession" class="ST_sidebar_exit"><i class="fas fa-long-arrow-alt-left"></i> Exit Studio</button>
      </div>

      <div class="ST_sidebar_restart_container">
        <button @click="studioRestart" class="ST_sidebar_restart_btn"><i class="fas fa-undo-alt"></i>Restart Session</button>
      </div>

    </div>
  </div>
</template>

<style>
  .ST_sidebar_main_container {
    width: 100vw;
    z-index: 510;
    transition: .4s;
    position: fixed;
      bottom: 0;
  }

  .ST_sidebar_container {
    width: 50%;
    margin: auto;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    background: rgba(71, 71, 135, 1);
  }

  .ST_sidebar_container div button {
    color: #eee;
    width: 100%;
    background: none;
    padding: 1em 3em;
    text-align: left;
    font-size: 1.6em;
    font-family: 'Varela Round', sans-serif;
  }

  .ST_sidebar_container div .ST_sidebar_close_btn {
    text-align: center;
  }

  .ST_sidebar_container div button:hover {
    color: rgba(162, 155, 254, 1);
  }

  .ST_sidebar_container div button i {
    margin-right: 1em;
  }

  @media only screen and (max-width: 600px) {
    .ST_sidebar_container {
      width: 100%;
    }
  }
</style>

<script>
  export default {
    props: [
      'endSession',
      'closeSidebar',
      'studioTracker',
      'changeSession',
      'studioRestart',
      'showStudioSidebar',
      'toggleStudioSidebar',
    ],
    data() {
      return {

      }
    }
  }
</script>
