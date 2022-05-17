<template>

  <div @click.self="$router.push(`/profile/${ $route.params.uid }/feed/playlist?list=${ playlist.playlist_id }`)" class="PL_container">
    <div class="PL_media_container">
      <img v-if="playlistThumbnails" @click="$router.push(`/profile/${ $route.params.uid }/feed/playlist?list=${ playlist.playlist_id }`)" class="PL_container_thumbnail" :src="getObjectKey(playlistThumbnails.thumbnail_file)">
      <img v-else @click="$router.push(`/profile/${ $route.params.uid }/feed/playlist?list=${ playlist.playlist_id }`)" class="PL_container_thumbnail" src="/LyfyfyLogoLite.png">
    </div>
    <div class="PL_view_container">
      <div class="PL_info_container">
        <button @click="$router.push(`/profile/${ $route.params.uid }/feed/playlist?list=${ playlist.playlist_id }`)" class="PL_name_btn">{{ playlist.playlist_name }}</button>
        <p v-if="playlistVideoCount.num === 1" class="PL_video_count">{{ playlistVideoCount.num }} Video</p>
        <p v-else class="PL_video_count">{{ playlistVideoCount.num }} Videos</p>
      </div>
      <div v-if="playlistVideoCount.num >= 1">
        <div class="PL_play_all_container">
          <button @click="$router.push(`/playlist?list=${ playlist.playlist_id }&v=${ playlistVideoIDs }`)" class="PL_play_all_btn">Play All</button>
        </div>
        <div class="PL_view_list_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/feed/playlist?list=${ playlist.playlist_id }`)" class="PL_view_list_btn">View Playlist</button>
        </div>
      </div>
      <div v-else>
        <p class="PL_no_content">Empty Playlist...</p>
      </div>
    </div>
  </div>

    <!-- <div class="PL_no_content">
      <p>There Have No Playlists Here Yet!</p>
    </div> -->

</template>

<style src="./PlaylistCard.css"></style>

<script src="./PlaylistCard.js" charset="utf-8"></script>
