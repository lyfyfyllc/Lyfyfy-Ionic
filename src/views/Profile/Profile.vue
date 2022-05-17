<template>

  <HeaderComp />

  <SidebarComp
   v-if="$store.state.showSidebar" />

   <Options
     v-if="$store.state.showOptions" />

   <Filter v-if="$store.state.showFilter" />

  <ProfileNavigationEx v-if="$store.state.isActiveUserLoggedIn && $store.state.clientSideID === $route.params.uid" />
  <ProfileNavigation v-else />

  <div class="UP_main_container">

    <div class="UP_container">

      <ProfileInformation v-if="profileData" :user="profileData" />

      <div class="UP_main_content_container">
        <div class="UP_main_content">


          <div class="UP_body_container">
            <div class="UP_body">

              <div class="fake_data">

              </div>

              <div v-if="isLoading">
                <div class="">
                  <h3>Loading...</h3>
                </div>
              </div>
              <div v-else class="UP_content_container">
                <div v-if="currentSession === 'videos'" class="MC_main_container">
                  <MediaCard v-for="mediaCard in mediaCardData" :key="mediaCard.video_id" :video="mediaCard" />
                  <div class="MC_show_more_container">
                		<button
                    :disabled="maxxedOut"
                    @click="loadMediaCardData(`restrictions=${ $store.state.restrictions }&page_num=${ pageNum++ }&apiToken=${ $store.state.apiToken }`)"
                    :class="!maxxedOut ? 'MC_show_more_btn': 'MC_show_more_btn_disabled'">SHOW MORE VIDEOS <i class="fas fa-arrow-circle-right"></i></button>
                	</div>
                </div>
                <div v-if="currentSession === 'posts'" class="PC_container">
                  <PostCard v-for="postCard in postCardData" :key="postCard.post_id" :postText="postCard.postText" :post="postCard.post" />
                  <div class="PC_show_more_container">
                    <button class="PC_show_more_btn">SHOW MORE POSTS <i class="fas fa-arrow-circle-right"></i></button>
                  </div>
                </div>
                <div class="PL_main_container">
                  <PlaylistCard v-if="currentSession === 'playlists'" v-for="(playlistCard, k) in playlistCardData" :key="playlistCard.playlist_id" :playlistThumbnails="playlistThumbnails[k]" :playlistVideoCount="playlistVideoCount[k]" :playlistVideoIDs="playlistVideoIDs[k]" :playlist="playlistCard" />
                  <div v-if="errorMsg" class="PL_no_content">
                    <p class="PL_error">{{ errorMsg }}</p>
                  </div>
                </div>
                <div v-if="!currentSession" class="UP_feed_info_main_container">
                  <div class="UP_feed_info_container">
                    <div class="UP_feed_info">
                      <div class="UP_feed_header">
                        <div class="">
                          <h1 v-if="feedCardData.feed.toLowerCase() === 'later'">Your Watch {{ feedCardData.feed }}</h1>
                          <h1 v-else>Your {{ feedCardData.feed }}</h1>
                        </div>
                        <div class="UP_play_all_container">
                          <button class="UP_play_all_btn" @click="$router.push(`/playlist?list=${ feedCardData.playlist_id }&v=${ feedCardData.content[0].video_id }`)" name="button"><i class="fas fa-play-circle"></i> Play All</button>
                        </div>
                      </div>
                        <div class="UP_like_content_session_container">
                          <div class="UP_like_video_session">
                              <button v-if="currentUserSession === 'videos'" class="UP_like_video_btn UP_current_session" name="button"><i class="fas fa-video"></i> Videos</button>
                              <button v-else class="UP_like_video_btn" name="button"><i class="fas fa-video"></i> Videos</button>
                          </div>
                          <div class="UP_like_post_session">
                              <button v-if="currentUserSession === 'posts'" class="UP_like_post_btn UP_current_session" name="button"><i class="fas fa-sticky-note"></i> Posts</button>
                              <button v-else class="UP_like_post_btn" name="button"><i class="fas fa-sticky-note"></i> Posts</button>
                          </div>
                        </div>
                      <div class="UP_content_session_feed">
                        <div v-if="feedCardData.content.length >= 1" class="FC_main_container">
                          <FeedCard v-if="userSessions.includes($route.params.userSession)" v-for="feedCard in feedCardData.content" :video="feedCard" :playlistID="feedCardData.playlist_id" :key="feedCard.video_id" />
                        </div>
                        <div v-else class="FC_no_content_container">
                          <p class="FC_no_content">Sorry There's No Content For You To Enjoy...</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  </div>
</template>

<style src="./Profile.css"></style>

<script src="./Profile.js" charset="utf-8"></script>
