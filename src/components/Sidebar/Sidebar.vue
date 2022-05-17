<template>

  <div @click.self="$store.commit('toggleSidebar')" ref="SB_background_container" class="SB_background_container">

    <div ref="SB_main_container" class="SB_main_container">

      <div class="SB_container">

        <div @click="$store.commit('toggleSidebar')" class="SB_close_container">
          <button class="SB_close_btn"><i class="fas fa-times-circle"></i> Close</button>
        </div>

        <div class="SB_content_header_container">
          <div class="SB_content_header">

            <div v-if="$store.state.currentFile === 'profile' && false">
              <div class="SB_content_tab">
                <div data-profile_feed="videos" class="SB_profile_video_container SB_profile_content">
                  <button data-profile_feed="videos" @click="$router.push(`/profile/${ $store.state.clientSideID }/videos`)" class="SB_profile_video_btn SB_btn" name="button">
                    <i class="fas fa-film"></i>Videos
                  </button>
                </div>
                <div data-profile_feed="posts" class="SB_profile_post_container SB_profile_content">
                  <button data-profile_feed="posts" data-action_attribute="/users/<?php echo $user_profile['__USER_ID__']; ?>/posts" class="SB_profile_post_btn SB_btn" name="button">
                    <i class="fas fa-clipboard"></i>Posts
                  </button>
                </div>
                <div data-profile_feed="playlists" class="SB_profile_playlist_container SB_profile_content">
                  <button class="SB_profile_playlist_btn" name="button">
                    <i class="fas fa-list-ul"></i>Playlists
                  </button>
                </div>
              </div>
            </div>

            <div class="SB_search_container">
              <div class="SB_search_input_container">
                <input class="SB_search_input" type="search" placeholder="Search Videos...">
              </div>
              <div class="SB_search_btn_container">
                <button class="SB_search_btn" name="button"><i class="fas fa-search"></i></button>
              </div>
            </div>

            <div class="SB_content_header_tag">
              <h3>Recent Content</h3>
            </div>

            <div class="SB_content_tab">
              <div data-home_feed="videos" class="SB_video_container SB_home_content">
                <aside class="SB_radio">
                  <aside class="SB_select"></aside>
                </aside>
                <button @click="$router.push(`/videos`), $store.commit('toggleSidebar')" class="SB_video_tab videos SB_btn" title="Videos">
                  <i class="fas fa-video"></i>Videos
                </button>
              </div>
              <div @click="$router.push(`/posts`), $store.commit('toggleSidebar')" class="SB_post_container SB_home_content">
                <button data-home_feed="posts" data-action_attribute="/posts" class="SB_post_tab posts SB_btn" title="Posts">
                  <i class="fas fa-clipboard"></i>Posts
                </button>
              </div>
            </div>

            <div class="SB_content_header_tag">
              <h3>Just For You</h3>
            </div>

            <div class="SB_content">
              <aside v-if="!$store.state.isActiveUserLoggedIn">
                <div class="SB_signin_container">
                  <button @click="$router.push(`/signin`), $store.commit('toggleSidebar')" class="SB_signin_btn SB_btn" title="Signin">
                    <i class="fas fa-sign-in-alt"></i>Signin
                  </button>
                </div>
                <div class="SB_signup_container">
                  <button data-action_attribute="/signup" class="SB_signup_btn SB_btn" title="Signup">
                    <i class="fas fa-user-plus"></i>Signup
                  </button>
                </div>
              </aside>
              <aside v-else>
                <div class="SB_dashboard_container">
                  <button data-action_attribute="/dashboard?process=overview" class="SB_dashboard_btn SB_btn" name="button">
                    <i class="far fa-clipboard"></i>Dashboard
                  </button>
                </div>
                <div class="SB_donoboard_container">
                  <button class="SB_donoboard_btn SB_btn" name="button">
                    <i class="fas fa-hand-holding-usd"></i>DonoBoard
                  </button>
                </div>
                <div class="SB_user_videos_container">
                  <button @click="$router.push(`/profile/${ $store.state.clientSideID }/videos`), $store.commit('toggleSidebar')" class="SB_user_videos_btn SB_btn" title="My Videos">
                    <i class="fas fa-film"></i>My Videos
                  </button>
                </div>
                <div class="SB_user_posts_container">
                  <button @click="$router.push(`/profile/${ $store.state.clientSideID }/posts`), $store.commit('toggleSidebar')" class="SB_user_posts_btn SB_btn" title="My Posts">
                    <i class="fas fa-clipboard"></i>My Posts
                  </button>
                </div>
                <div class="SB_user_playlist_container">
                  <button @click="$router.push(`/profile/${ $store.state.clientSideID }/playlists`), $store.commit('toggleSidebar')" class="SB_user_playlist_btn SB_btn" title="My Playlists">
                    <i class="far fa-list-alt"></i>My Playlists
                  </button>
                </div>
                <div class="SB_user_like_container">
                  <button @click="$router.push(`/profile/${ $store.state.clientSideID }/feed/likes`), $store.commit('toggleSidebar')" class="SB_user_like_btn SB_btn" title="Liked Videos">
                    <i class="far fa-heart"></i>Likes
                  </button>
                </div>
                <div class="SB_user_dislike_container">
                  <button @click="$router.push(`/profile/${ $store.state.clientSideID }/feed/dislikes`), $store.commit('toggleSidebar')" class="SB_user_dislike_btn SB_btn" title="Disliked Videos">
                    <i class="fas fa-heart-broken"></i>Dislikes
                  </button>
                </div>
                <div class="SB_user_bookmark_container">
                  <button @click="$router.push(`/profile/${ $store.state.clientSideID }/feed/bokkmarks`), $store.commit('toggleSidebar')" class="SB_user_bookmark_btn SB_btn" title="Bookmarked Posts">
                    <i class="far fa-bookmark"></i>Bookmarks
                  </button>
                </div>
                <div class="SB_user_notification_container">
                  <button @click="$router.push(`/profile/${ $store.state.clientSideID }/feed/notifications`), $store.commit('toggleSidebar')" class="SB_user_notification_btn SB_btn" title="Notifications">
                    <i class="far fa-bell"></i>Notifications
                  </button>
                </div>
                <div class="SB_user_follow_container">
                  <button @click="$router.push(`/profile/${ $store.state.clientSideID }/feed/following`), $store.commit('toggleSidebar')" class="SB_user_follow_btn SB_btn" title="Following">
                    <i class="fas fa-hand-holding-heart"></i>Following
                  </button>
                </div>
                <div class="SB_user_watch_later_container">
                  <button @click="$router.push(`/profile/${ $store.state.clientSideID }/feed/later`), $store.commit('toggleSidebar')" class="SB_user_watch_later_btn SB_btn" title="Watch Later">
                    <i class="far fa-clock"></i>Watch Later
                  </button>
                </div>
              </aside>
              <div class="SB_user_history_container">
                <button @click="$router.push(`/profile/${ $store.state.clientSideID }/feed/history`), $store.commit('toggleSidebar')" class="SB_user_history_btn SB_btn" title="History">
                  <i class="fas fa-history"></i>History
                </button>
              </div>
              <div class="SB_restrictions_container">
                <button class="SB_restrictions_btn" title="Restrictions">
                  <i class="fas fa-exclamation-triangle"></i>Restrictions
                </button>
              </div>
            </div>

            <!-- <div class="hr"></div> -->

            <div class="SB_information_container">
              <div class="SB_information">

                <div class="SB_content_header_tag">
                  <h3>Links</h3>
                </div>

                <div class="SB_link_container">
                  <div class="SB_link">
                    <div class="SB_studio_container">
                      <button data-action_attribute="/studio" class="SB_studio_btn SB_btn" name="button"><i class="fas fa-cloud"></i>Studio</button>
                    </div>
                    <div class="SB_hall_of_fame_container">
                      <button class="SB_hall_of_fame_btn" title="Hall Of Fame"><i class="fas fa-crown"></i>HOF</button>
                    </div>
                    <div class="SB_donate_container">
                      <button data-action_attribute="/support/donate" class="SB_donate_btn SB_btn" name="button"><i class="fas fa-hand-holding-usd"></i>Donate</button>
                    </div>
                    <div class="SB_advertise_btn_container">
                      <button data-action_attribute="/support/advertise" class="SB_advertise_btn SB_btn" name="button"><i class="fab fa-adversal"></i>Advertise</button>
                    </div>
                    <div class="SB_support_container">
                      <button data-action_attribute="/support" class="SB_support_btn SB_btn" name="button"><i class="fas fa-question-circle"></i>Support</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- <div class="hr"></div> -->

          </div>
        </div>

      </div>
    </div>


  </div>

</template>

<script src="./Sidebar.js" charset="utf-8"></script>

<style src="./Sidebar.css"></style>
