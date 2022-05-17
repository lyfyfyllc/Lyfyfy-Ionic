<template>

  <div class="UP_navigation_main_container">
    <div class="UP_navigation_container">

      <div class="UP_navigation_tab">
        <div class="UP_nav_container UP_video_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/videos`)" class="UP_video_btn" title="Videos"><i class="fas fa-video"></i> videos</button>
        </div>
        <div class="UP_nav_container UP_post_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/posts`)" class="UP_post_btn" title="Posts"><i class="fas fa-clipboard"></i> posts</button>
        </div>
        <div class="UP_nav_container UP_playlist_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/playlists`)" class="UP_playlist_btn" title="Playlists"><i class="far fa-list-alt"></i> playlists</button>
        </div>
        <div class="UP_nav_container UP_search_container">
          <button class="UP_search_btn" title="Search"><i class="fas fa-search"></i> search</button>
        </div>
        <div v-if="$store.state.isActiveUserLoggedIn && $store.state.clientSideID === $route.params.uid">
          <div class="UP_nav_container UP_options_container">
            <button class="UP_options_btn" title="More"><i class="fas fa-ellipsis-v"></i></button>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
