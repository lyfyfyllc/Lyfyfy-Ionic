<template>
  <div data-video_id="video.video_id" :class="FCCurrent ? `FC_current FC_container` : `FC_container`">

    <div data-video_id="video.video_id" class="FC_container_background">

      <div v-if="video.categories.includes('Mature')" class="FC_mature_icon">
        <h3><i class="fab fa-markdown"></i></h3>
      </div>

      <div class="FC_video_container">
        <img v-if="video.thumbnail_file" data-video_id="video.video_id" class="FC_poster" :src="getObjectKey(video.thumbnail_file)">
        <img v-else data-video_id="video.video_id" class="FC_poster" src="/lyfyfy/defaults/lyfyfy_logo.png">


        <div class="FC_video_duration_container">
          <div class="FC_video_duration">
            <h3>{{ getMediaTime(video.duration) }}</h3>
          </div>
        </div>
      </div>

      <div class="FC_info_container">

        <div class="FC_info">
          <div @click="$router.push(`/playlist?list=${ playlistID }&v=${ video.video_id }`)" class="FC_title">
            <p data-video_id="video.video_id" :title="video.title">{{ video.title }}</p>
          </div>
          <div class="FC_username">
            <span @click="$router.push(`/profile/${ video.video_user_id }/playlists`)" data-user_id="video.video_user_id" class="_FC_username_"><i class="fas fa-user-circle"></i> {{ video.__USERNAME__.substring(0, 30) }}</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style src="./FeedCard.css"></style>

<script src="./FeedCard.js" charset="utf-8"></script>
