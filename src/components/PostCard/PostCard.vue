<template>
  <!-- <div class="PC_container"> -->

    <div class="PC_content_container">
      <div class="PC_content">
        <div class="PC_profile_information">
          <div class="PC_header_container">
            <div class="PC_profile_picture_container">
              <img @click="$router.push(`/profile/${ post.post_user_id }/posts`)" v-if="post.profile_pic" class="PC_profile_picture PC_profile" src="<?php echo $post['profile_pic']; ?>">
              <div @click="$router.push(`/profile/${ post.post_user_id }/posts`)" v-else class="PC_default_profile_picture PC_profile"><h1>{{ post.__USERNAME__[0].toUpperCase() }}</h1></div>
            </div>
            <div v-if="post.categories.includes('mature')" class="PC_mature_container">
              <button class="PC_mature" name="mature" title="This Content Has Been Deemed Mature"><i class="fab fa-markdown"></i></button>
            </div>
          </div>
          <div class="PC_info_container">
            <div class="PC_username_container">
              <h3 @click="$router.push(`/profile/${ post.post_user_id }/posts`)" class="PC_username">{{ post.__USERNAME__.substr(0, 30) }}</h3>
            </div>
            <div class="PC_date_container">
              <h4 class="PC_date">{{ dateDifference(post.diff) }}</h4>
            </div>
          </div>
        </div>
        <div @click="$router.push(`/post?p=${ post.post_id }`)" class="PC_object">
          <div class="PC_text_container">
            <p v-if="post.media_file" class="PC_text" v-html="postText"></p>
            <p v-else class="PC_text text_only" v-html="postText"></p>
          </div>
          <div v-if="post.media_file" class="PC_media_container">
            <img v-if="post.type === 'gif' || post.type === 'image'" class="PC_media" :src="getObjectKey(post.media_file)">
            <video v-else-if="post.type === 'audio' || post.type === 'video'" class="PC_media" :src="getObjectKey(post.media_file)"></video>
          </div>
        </div>
      </div>
      <div class="PC_buttons_container">

        <div class="PC_bookmark_container">
          <button class="PC_bookmark_btn" name="bookmark" title="Bookmark"><i class="fas fa-bookmark"></i></button>
        </div>

        <div class="PC_report_container">
          <button class="PC_report_btn PC_report" name="report" title="Report"><i class="fas fa-flag"></i></button>
        </div>

        <div class="PC_anchor_container">
          <button class="PC_anchor_btn" title="Anchor This Content To The Page"><i class="fas fa-anchor"></i></button>
        </div>

      </div>
    </div>

  <!-- </div> -->
</template>

<style src="./PostCard.css"></style>

<script src="./PostCard.js" charset="utf-8"></script>
