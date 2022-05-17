<template>

  <div class="MC_container">
    <div class="MC_header">
      <div class="MC_title_container">
          <p @click="$router.push(`/video?v=${ video.video_id }`)" :id="video.video_id" class="MC_title" :title="video.title">{{ video.title }}</p>
      </div>
    </div>
    <div class="MC_media">
      <div @click="$router.push(`/video?v=${ video.video_id }`)" class="MC_image_container">
        <div class="MC_duration_container">
          <h3 class="MC_duration">{{ getMediaTime(video.duration) }}</h3>
        </div>
        <div v-if="video.categories.includes('Mature')" class="MC_mature_container">
          <div class="MC_mature">
            <i class="fab fa-markdown" title="This is Video Has Been Deemed Mature"></i>
          </div>
        </div>
        <div class="MC_media_screen_container">
          <div class="MC_media_screen"></div>
        </div>
        <div class="MC_play_container">
          <button class="MC_play_btn"><i class="fas fa-play"></i></button>
        </div>
        <aside class="MC_request_progress_container">
          <div class="MC_request_progress"></div>
        </aside>
        <div v-if="video.thumbnail_file" :data-rendered_content_id="video.video_id" :id="video.video_id" class="MC_image" :style="`background-image: url(${ get_object_key(video.thumbnail_file) }); height: 15em;`"></div>
        <!-- <img v-if="video.thumbnail_file" :data-rendered_content_id="video.video_id" :id="video.video_id" class="MC_image" :src="get_object_key(video.thumbnail_file)"> -->
        <!-- <img v-else :data-rendered_content_id="video.video_id" :id="video.video_id" class="MC_image" src="/LyfyfyLogoLite.png"> -->
      </div>
    </div>
    <div class="MC_information">
      <div class="MC_profile_link_container">
        <h3 v-if="video.__USERNAME__.length > 20" @click="$router.push(`/profile/${ video.video_user_id }/videos`)" class="MC_profile_link" :title="video.__USERNAME__">{{ video.__USERNAME__.substr(0, 20) }}...</h3>
        <h3 v-else @click="$router.push(`/profile/${ video.video_user_id }/videos`)" class="MC_profile_link" :title="video.__USERNAME__">{{ video.__USERNAME__ }}</h3>
      </div>
    </div>
    <div class="MC_buttons">
      <div class="MC_caption_btn_container">
        <button @click="toggleCaption" class="MC_caption_btn" name="information_card" title="Information Card"><i class="fas fa-info-circle"></i></button>
      </div>
      <div class="MC_watch_later_container">
        <button @click="addToWatchLater" class="MC_watch_later_btn" name="watch_later" title="Watch Later"><i class="fas fa-clock"></i></button>
      </div>
      <div class="MC_add_to_playlist_container">
        <button :data-rendered_content_id="video.video_id" class="MC_add_to_playlist_btn" name="save_to_playlist" title="Save To Playlist"><i class="fas fa-plus-circle"></i></button>
      </div>
      <div class="MC_anchor_container">
        <button @click="showVideoAnchor = !showVideoAnchor" :data-rendered_content_id="video.video_id" class="MC_anchor_btn" title="Anchor This Content To The Page"><i class="fas fa-anchor"></i></button>
      </div>
    </div>
    <div @click="toggleCaption" ref="MC_caption_container" class="MC_caption_container">
      <div class="MC_caption">
        <div class="MC_caption_title">
          <h3 :title="video.title">{{ video.title }}</h3>
        </div>
        <div class="MC_caption_user_name">
          <h4 v-if="video.__USERNAME__.length > 20" :title="video.__USERNAME__"><i class="fas fa-user"></i>{{ video.__USERNAME__.substr(0, 20) }}...</h4>
          <h4 v-else :title="video.__USERNAME__"><i class="fas fa-user"></i>{{ video.__USERNAME__ }}</h4>
        </div>
        <div class="MC_caption_date">
          <h4><i class="fas fa-clock"></i>{{ dateDifference(video.diff) }}</h4>
        </div>
        <div class="">
          <h4><i class="fas fa-eye"></i>{{ video.views }} views</h4>
        </div>
        <div class="MC_caption_categories">
          <h3><i class="fas fa-filter"></i>Categories</h3>
          <p>{{ video.categories }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showVideoAnchor" style="position: absolute;" class="MC_VA_container">
    <VideoAnchor :toggleVideoAnchor="toggleVideoAnchor" :videoID="video.video_id" />
  </div>

</template>

<style src="./MediaCard.css"></style>

<script src="./MediaCard.js" charset="utf-8"></script>
