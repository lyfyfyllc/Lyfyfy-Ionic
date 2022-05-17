<template>

  <HeaderComp />

  <SidebarComp
   v-if="$store.state.showSidebar" />

   <Options
     v-if="$store.state.showOptions" />

    <div class="WP_stripe_transaction_main_container">
      <div class="WP_stripe_transaction_container">
        <!-- ENTER THE MAIN FRAME -->
      </div>
    </div>

      <div class="WP_main_page_container">

        <div class="WP_page_container">

          <div class="WP_related_content_container">

            <div class="WP_MediaPlayer">
              <div v-if="isLoading" class="">
                <h3>Loading...</h3>
              </div>
              <div v-else class="">
                <MediaPlayer v-if="videoData._video_" :video="videoData._video_" :changePlaylistRoute="changePlaylistRoute" />
              </div>
            </div>

            <div class="WP_MediaWrapper">
              <div class="WP_MediaInfo">
                <MediaInfo v-if="videoData" :info="videoData" />
              </div>

              <!--  -->
              <div class="WP_NR_content_container">
                <div class="other_content_container">

                  <div class="WP_playlist_main_container">
                  <div class="WP_playlist_container">

                    <div class="WP_playlist_header_container">
                      <div class="WP_playlist_name_container">
                        <p v-if="videoData.playlist_name" class="WP_playlist_name">{{ videoData.playlist_name.playlist_name }}</p>
                        <!-- <p class="WP_playlist_name">My Playlist Name</p> -->
                      </div>
                      <div class="WP_playlist_buttons_container">
                        <button class="WP_playlist_loop_btn" title="Repeat"><i class="fas fa-infinity"></i></button>
                        <!-- <button class="WP_playlist_shuffle_btn" title="Shuffle"><i class="fas fa-random"></i></button> -->
                      </div>
                    </div>
                    <div class="WP_now_playing_container">
                      <p class="WP_now_playing">Now Playing {{ currentVideo + 1 }} out Of {{ playlist.length }}</p>
                    </div>
                    <div class="WP_playlist_body_container">
                      <div class="WP_playlist_feed_container">
                        <FeedCard v-for="video in playlist" :video="video" :playlistID="videoData.playlist_id" :key="video.video_id" />
                      </div>
                    </div>

                  </div>
                </div>

                </div>
              </div>

            </div>
            <!--  -->

              <div class="WP_ad_banner_main_container">
                <div class="WP_ad_banner_container">
                  <h1>Want Your AD Here!! Click Me!</h1>
                </div>
              </div>
              <div class="WP_content_aside_main_container">
                <div class="WP_content_aside_container">

                  <div :style="`top: ${ tabStickyPosition }px;`" class="WP_content_tab_main_container">
                    <div class="WP_content_tab_container">

                      <div class="WP_content_description_tab_container WP_content_tab">
                        <button @click="toggleDescription" class="WP_content_description_tab"><i class="fas fa-info-circle"></i> <span>Description</span></button>
                      </div>
                      <div class="WP_content_comment_tab_container WP_content_tab">
                        <button @click="toggleComments" class="WP_content_comment_tab"><i class="fas fa-comments"></i> <span>Comments</span></button>
                      </div>
                      <div class="WP_content_related_tab_container WP_content_tab">
                        <button @click="toggleRelated" class="WP_content_related_tab"><i class="fas fa-video"></i> <span>Related</span></button>
                      </div>

                    </div>
                  </div>

                  <div class="WP_content_main_container">
                    <div class="WP_content_container">

                      <!-- REQUIRE IN CONTENT -->
                      <MediaDescription v-if="videoData._video_ && videoComponent === 'description'" :description="videoData" :toggleDescription="toggleDescription" />

                      <div v-if="videoData._video_ && videoComponent === 'comments'" class="CM_main_comments_container">
                        <div class="CM_comments_header_container">
                          <div class="CM_comments_header">
                            <div class="CM_info_container">
                              <h2 class="CM_comment_count">{{ commentCount.comments }} <i class="fas fa-comments"></i> Comments</h2>
                            </div>
                            <div class="CM_reply_btn_container">
                              <button class="CM_reply_btn" name="reply_btn" title="Reply"><i class="fas fa-comment"></i></button>
                            </div>
                          </div>
                        </div>
                        <Comment v-for="comment in commentsData" :comment="comment.commentInfo" :diff="comment.diff" :commentText="comment.comment_text" :key="comment.comment_id" />
                        <div class="CM_show_more_container">
                          <button class="CM_show_more_btn" name="button">SHOW MORE COMMENTS <i class="fas fa-arrow-circle-right"></i></button>
                        </div>
                      </div>

                      <div v-if="videoData._video_ && videoComponent === 'related'" class="RC_main_container">
                        <RelatedCard v-for="video in videoData._RC_videos_" :video="video" :key="video.video_id" :get_object_key="get_object_key" />
                        <div class="RC_more_videos_container">
                          <button class="RC_more_videos_btn">SHOW MORE VIDEOS</button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <!-- INJECT REPLY -->
            </div>
          </div>
        <!-- WP_page_container -->

      </div>
      <!-- WP_main_page_container -->




</template>

<script src="./Playlist.js" charset="utf-8"></script>

<style src="./Playlist.css"></style>
