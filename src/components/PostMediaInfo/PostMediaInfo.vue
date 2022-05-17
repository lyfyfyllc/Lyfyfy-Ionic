<template>

  <div class="MP_media_info_container">
    <div class="MP_btns_container">
      <div class="MP_btns_info">
        <div class="" style="display: flex;">
          <div class="MP_profile">
            <div class="MP_profile_pic_container">
              <div v-if="!post.user_profile_img" @click="$router.push(`/profile/${ post.post_user_id }/posts`)" class="MP_default_profile_pic"><p>{{ post.username[0].toUpperCase() }}</p></div>
              <img v-else class="MP_profile_pic" :src="getObjectKey(post.user_profile_img)">
            </div>
          </div>
          <div class="MP_user_info">
            <p @click="$router.push(`/profile/${ post.post_user_id }/posts`)" class="MP_username">{{ post.username }}</p>
            <p v-if="postData.followers.followers && postData.followers.followers === '1'" class="MP_followers">{{ postData.followers.followers }} follower</p>
            <p v-else class="MP_followers">{{ postData.followers.followers }} followers</p>
          </div>
        </div>
        <div class="MP_post_info">
          <div class="MP_post_info_box">
            <h3><i class="far fa-circle"></i></h3>
            <h3 class="MP_date_info">{{ dateDifference(post.diff) }}</h3>
          </div>
        </div>
      </div>
      <div class="hr"></div>
      <div class="MP_btns">
        <div class="MP_bookmark_container">
          <button class="MP_bookmark_btn MP_btn" name="bookmark" title="Bookmark"><i class="fas fa-bookmark"></i></button>
        </div>
        <div v-if="postData.liked.liked" class="MP_like_container">
          <button style="color: rgba(248, 165, 194, 1);" class="MP_like_btn MP_liked_btn" title="Like">
            <i class="fas fa-heart"></i>
          </button>
          <span style="color: rgba(248, 165, 194, 1);" class="MP_like_count">{{ postData.likes.likes }}</span>
        </div>
        <div v-else class="MP_like_container">
          <button class="MP_like_btn MP_btn" name="like" title="Like">
            <i class="fas fa-heart"></i>
          </button>
          <span class="MP_like_count">{{ postData.likes.likes }}</span>
        </div>
        <div v-if="postData.disliked.disliked" class="MP_dislike_container">
          <button style='color: rgba(248, 165, 194, 1);' class='MP_dislike_btn MP_disliked_btn' title='Dislike'>
            <i class='fas fa-heart-broken'></i>
          </button>
          <span style="color: rgba(248, 165, 194, 1);" class="MP_dislike_count">{{ postData.dislikes.dislikes }}</span>
        </div>
        <div v-else class="MP_dislike_container">
          <button class="MP_dislike_btn MP_btn" name="dislike" title="Dislike">
            <i class="fas fa-heart-broken"></i>
          </button>
          <span class="MP_dislike_count">{{ postData.dislikes.dislikes }}</span>
        </div>
        <div class="MP_report_container">
          <button class="MP_report_btn MP_btn" name="report" title="Report">
            <i class="fas fa-flag"></i>
          </button>
        </div>
        <div v-if="$store.state.isActiveUserLoggedIn && $store.state.clientSideID === post.post_user_id" class="MP_edit_container">
          <button class="MP_edit_btn" name="edit" title="Edit"><i class="fas fa-hammer"></i></button>
        </div>
      </div>
      <div class="hr"></div>
    </div>
  </div>

  <div class="MP_support_buttons">
    <div class="MP_support_container">
      <button class="MP_support_btn other_btn" name="donate" title="Donate">
        DONATE <i class="fas fa-hand-holding-usd"></i>
      </button>
    </div>
    <div v-if="postData.following.following" class="MP_follow_container">
      <button class="MP_following_btn" name="follow" title="Unfollow">
        FOLLOWING <i class="fas fa-hand-holding-heart"></i>
      </button>
    </div>
    <div v-else class="MP_follow_container">
      <button class="MP_follow_btn" name="follow" title="Follow">
        FOLLOW <i class="fas fa-hand-holding-heart"></i>
      </button>
    </div>
    <div class="MP_logo_container">
      <img src="/LyfyfyLogoLite.png">
    </div>
  </div>

</template>

<style src="./PostMediaInfo.css"></style>

<script src="./PostMediaInfo.js"></script>
