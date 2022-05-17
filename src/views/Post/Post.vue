<template>

  <HeaderComp />

  <SidebarComp
   v-if="$store.state.showSidebar" />

  <Filter v-if="$store.state.showFilter" />

  <Options v-if="$store.state.showOptions" />

  <div v-if="isLoading" class="postPageLoader">
    Loading...
  </div>
  <div v-else class="PP_post_main_container">

    <div @click="toggleFullImage" v-if="(post.type === 'gif' || post.type === 'image') && showFullImage" class="PP_img_container">
      <img class="PP_media_x" :src="getObjectKey(post.media_file)" />
    </div>

    <div class="PP_post_container">

      <div class="PP_content">

        <div class="PP_object_container">
          <div class="PP_text_container">
            <p v-html="postData.postContent"></p>
          </div>
          <div class="test" :content="post.post_content"></div>
          <div @click="toggleFullImage" class="PP_post_media">
            <img v-if="post.type === 'gif' || post.type === 'image'" class="PP_media" :src="getObjectKey(post.media_file)">
            <PostMediaPlayer v-else-if="post.type === 'audio' || post.type === 'video'" :post="post" />
          </div>
        </div>

        <div class="PP_media_info_container">
          <PostMediaInfo :postData="postData" :post="post" />
        </div>

        <div class="PP_ad_banner_main_container">
          <div class="PP_ad_container">
            <h1>Want Your AD Here!!</h1>
            <h1>Click Me!</h1>
          </div>
        </div>

        <div class="PP_comments_container">
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

      </div>

    </div>

    <Reply v-if="$store.state.showReply" />

    <Footer :currentPage="'posts'" />

  </div>
</template>

<style src="./Post.css"></style>

<script src="./Post.js" charset="utf-8"></script>
