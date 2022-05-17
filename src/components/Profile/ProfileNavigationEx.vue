<template>

  <div class="UP_navigation_main_container">
    <div class="UP_navigation_container" ref="UP_navigation_container">

      <div class="UP_navigation_tab">
        <div class="UP_nav_container UP_video_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/videos`)" class="UP_video_btn" title="Videos"><i class="fas fa-video"></i> videos</button>
        </div>
        <div class="UP_nav_container UP_post_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/posts`)" class="UP_post_btn" title="Posts"><i class="fas fa-sticky-note"></i> posts</button>
        </div>
        <div class="UP_nav_container UP_playlist_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/playlists`)" class="UP_playlist_btn" title="Playlists"><i class="far fa-list-alt"></i> playlists</button>
        </div>
        <div class="UP_nav_container UP_nav_like_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/feed/likes`)" class="UP_nav_like_btn" title="Likes">
            <i class="far fa-heart"></i> likes
          </button>
        </div>
        <div class="UP_nav_container UP_nav_dislike_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/feed/dislikes`)" class="UP_nav_dislike_btn" title="Dislikes">
            <i class="fas fa-heart-broken"></i> dislikes
          </button>
        </div>
        <div class="UP_nav_container UP_nav_bookmark_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/feed/bookmarks`)" class="UP_nav_bookmark_btn" title="Bookmarkes">
            <i class="far fa-bookmark"></i> bookmarks
          </button>
        </div>
        <div class="UP_nav_container UP_nav_notification_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/feed/notifications`)" class="UP_nav_notification_btn" title="Notifications">
            <i class="far fa-bell"></i> notifications
          </button>
        </div>
        <div class="UP_nav_container UP_nav_follow_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/feed/following`)" class="UP_nav_follow_btn" title="Following">
            <i class="fas fa-hand-holding-heart"></i> follows
          </button>
        </div>
        <div class="UP_nav_container UP_nav_watch_later_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/feed/later`)" class="UP_nav_watch_later_btn" title="Later">
            <i class="far fa-clock"></i> saved
          </button>
        </div>
        <div class="UP_nav_container UP_nav_history_container">
          <button @click="$router.push(`/profile/${ $route.params.uid }/feed/history`)" class="UP_nav_watch_later_btn" title="History">
            <i class="fas fa-history"></i> history
          </button>
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
        passiveScrolling: false
      }
    },
    methods: {

    },
    mounted() {

      window.addEventListener('wheel', (e) => {
        if (this.passiveScrolling) {
          e.preventDefault()
        }
      }, { passive: false })

      this.$refs.UP_navigation_container.addEventListener('mouseover', e => {
        this.passiveScrolling = true
        this.$refs.UP_navigation_container.onwheel = ev => {
          this.$refs.UP_navigation_container.scrollLeft += ((ev.wheelDeltaY / 3) * -1)
        }
      });

      this.$refs.UP_navigation_container.addEventListener('mouseleave', e => {
        this.passiveScrolling = false
        this.$refs.UP_navigation_container.onwheel = ev => { return false }
      });

    },
    unmounted() {

    }
  }
</script>
