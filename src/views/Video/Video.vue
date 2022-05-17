<template>

  <HeaderComp />

  <SidebarComp
   v-if="$store.state.showSidebar" />

   <Options
     v-if="$store.state.showOptions" />

   <Filter v-if="$store.state.showFilter" />

    <div class="WP_stripe_transaction_main_container">
      <div class="WP_stripe_transaction_container">
        <!-- ENTER THE MAIN FRAME -->
      </div>
    </div>

      <div class="WP_main_page_container">

        <div class="WP_page_container">

          <div class="WP_related_content_container">

            <div v-if="isLoading" class="WP_MedaiPlayler_loading_container">
              <h3 class="WP_MedaiPlayler_loader">Loading...</h3>
            </div>
            <div v-else class="WP_MediaPlayer">
              <MediaPlayer v-if="videoData._video_" :video="videoData._video_" />
            </div>

            <div class="WP_MediaWrapper">
              <div class="WP_MediaInfo">
                <MediaInfo v-if="videoData" :info="videoData" />
              </div>

              <!--  -->
              <div class="WP_NR_content_container">
                <div class="other_content_container">

                  <div style="display: none;" class="WP_queue_main_container">
                    <div class="WP_queue_header">
                      <div class="WP_queue_header_tag">
                        <h2>Queue</h2>
                      </div>
                      <div class="WP_queue_clear_container">
                        <button class="WP_queue_clear_btn" name="button"><i class="fas fa-times-circle"></i></button>
                      </div>
                    </div>
                    <div class="WP_queue_container">
                      <!-- INJECT -->
                    </div>
                  </div>

                  <div class="CC_recommendations_container">
                    <!-- INJECT -->
                  </div>

                </div>
              </div>

            </div>
            <!--  -->

              <div class="WP_ad_banner_main_container">
                <div class="WP_ad_banner_container">
                  <h1>Want Your AD Here!!</h1>
                  <h1>Click Me!</h1>
                </div>
              </div>
              <div class="WP_content_aside_main_container">
                <div class="WP_content_aside_container">

                  <div :style="`top: ${ tabStickyPosition - 1 }px;`" class="WP_content_tab_main_container">
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

                </div>
              </div>
              <!-- INJECT REPLY -->
            </div>
          </div>
        <!-- WP_page_container -->

        <Reply v-if="$store.state.showReply" />

        <Footer :currentPage="'videos'" />

        <div :style="videoComponent ? `transform: translateY(0)`: `transform: translateY(100vh)`" class="WP_content_main_container">
          <div class="WP_content_container">

            <div class="WP_close_content_container">
              <button @click="videoComponent = ''" class="WP_close_content_btn">Close</button>
            </div>
            <!-- REQUIRE IN CONTENT -->
            <MediaDescription v-if="videoData._video_ && videoComponent === 'description'" :description="videoData" :toggleDescription="toggleDescription" />

            <div v-if="videoData._video_ && videoComponent === 'comments'" class="CM_main_comments_container">
              <div class="CM_comments_header_container">
                <div class="CM_comments_header">
                  <div class="CM_info_container">
                    <h2 class="CM_comment_count">{{ commentCount.comments }} <i class="fas fa-comments"></i> Comments</h2>
                  </div>
                  <div class="CM_reply_btn_container">
                    <button @click="$store.commit('toggleReply')" class="CM_reply_btn" name="reply_btn" title="Reply"><i class="fas fa-comment"></i></button>
                  </div>
                </div>
              </div>
              <Comments v-for="comment in commentsData" :comment="comment.commentInfo" :diff="comment.diff" :commentText="comment.comment_text" :key="comment.comment_id" />
              <div class="CM_show_more_container">
                <button class="CM_show_more_btn" name="button">SHOW MORE COMMENTS <i class="fas fa-arrow-circle-right"></i></button>
              </div>
            </div>

            <div v-if="videoData._video_ && videoComponent === 'related'" class="RC_main_container">
              <RelatedCard v-for="video in videoData._RC_videos_" :video="video" :key="video.video_id" />
              <div class="RC_more_videos_container">
                <button class="RC_more_videos_btn">SHOW MORE VIDEOS</button>
              </div>
            </div>

          </div>
        </div>

      </div>
      <!-- WP_main_page_container -->




</template>

<script src="./Video.js" charset="utf-8"></script>

<style src="./Video.css"></style>
