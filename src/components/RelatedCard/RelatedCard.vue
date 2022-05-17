<template>

  <div class="RC_container">

    <div class="RC_video_container">
      <div class="RC_image_container">
        <div class="RC_video_duration_container">
          <div class="RC_video_duration">
            <h3>{{ getMediaTime(video.duration) }}</h3>
          </div>
        </div>
        <div v-if="video.categories.includes('mature')" class="RC_mature_icon">
          <h3><i class="fab fa-markdown"></i></h3>
        </div>
        <img @click="$router.push(`/video?v=${ video.video_id }`)" :data-video_id="video.video_id" class="RC_poster" :src="getObjectKey(video.thumbnail_file)">
      </div>

    </div>

    <div class="RC_info_container">

      <div class="RC_info">
        <div class="RC_title">
          <p @click="$router.push(`/video?v=${ video.video_id }`)" :data-video_id="video.video_id" title="video.title">{{ video.title }}</p>
        </div>
        <div class="RC_username">
          <span @click="$router.push(`/profile/${ video.video_user_id }`)" :data-user_id="video.video_user_id" class="_RC_username_"><i class="fas fa-user-circle"></i>{{ video.__USERNAME__ }}</span>
        </div>
        <div class="RC_content_data">
          <span>{{ video.views }} views</span>
          <span style="margin: 0 1em"><i class="fas fa-circle"></i></span>
          <span>{{ dateDifference(video.diff) }}</span>
        </div>
      </div>

    </div>

    <div class="RC_options_container">
      <div class="RC_buttons">
        <div class="RC_caption_btn_container">
          <button class="RC_queue_btn" name="queue_video" title="Play Next"><i class="fas fa-play-circle"></i></button>
        </div>
        <div class="RC_watch_later_container">
          <button :data-rendered_content_id="video.video_id" class="RC_watch_later_btn" name="watch_later" title="Watch Later"><i class="fas fa-clock"></i></button>
        </div>
        <div class="RC_add_to_playlist_container">
          <button :data-rendered_content_id="video.video_id" class="RC_add_to_playlist_btn" name="save_to_playlist" title="Save To Playlist"><i class="fas fa-plus-circle"></i></button>
        </div>
        <div class="RC_report_container">
          <button :data-rendered_content_id="video.video_id" class="RC_report_btn" name="report" title="Report"><i class="fas fa-flag"></i></button>
        </div>
      </div>
    </div>

  </div>

</template>

<style src="./RelatedCard.css"></style>

<script src="./RelatedCard.js" charset="utf-8"></script>
