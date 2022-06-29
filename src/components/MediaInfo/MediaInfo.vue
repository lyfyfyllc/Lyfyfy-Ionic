<template>
  <div class="MP_media_info_container">
    <div class="MP_media_info">
      <div class="MP_media_title">
        <p>{{ info._video_.title }}</p>
      </div>
    </div>

    <div class="MP_btns_container">
      <div class="MP_btns_info">
        <div :id="info._video_.video_user_id" class="MP_profile">
          <div class="MP_profile_pic_container">
            <button @click="$router.push(`/profile/${ info._video_.video_user_id }/videos`)" v-if="!info._video_.user_profile_img" class="MP_default_profile_pic">{{ info._video_.__USERNAME__[0].toUpperCase() }}</button>
            <img @click="$router.push(`/profile/${ info._video_.video_user_id }/videos`)" v-else class="MP_profile_pic" :src="info._video_.user_profile_img">
          </div>
          <div class="MP_user_info">
            <p v-if="info._video_.__USERNAME__.length > 30" @click="$router.push(`/profile/${ info._video_.video_user_id }/videos`)" class="MP_username">{{ info._video_.__USERNAME__.substr(0, 30) }}...</p>
            <p v-else @click="$router.push(`/profile/${ info._video_.video_user_id }/videos`)" class="MP_username">{{ info._video_.__USERNAME__ }}</p>
            <p v-if="info.followers.followers == 1" class="MP_followers">{{ info.followers.followers }} follower</p>
            <p v-else class="MP_followers">{{ info.followers.followers }} followers</p>
          </div>
        </div>
        <div class="MP_video_info">
          <div class="MP_video_info_box">
            <p v-if="info.views.views == 1" class="MP_views_info">{{ info.views.views }} view</p>
            <p v-else class="MP_views_info">{{ info.views.views }} views</p>
            <p><i class="far fa-circle"></i></p>
            <p class="MP_date_info">{{ info.diff }}</p>
          </div>
        </div>
      </div>
      <div class="hr"></div>
      <div class="MP_btns">
        <div class="MP_watch_later_container">
          <button class="MP_watch_later_btn MP_btn" name="watch_later" title="Watch Later">
            <i class="fas fa-clock"></i>
          </button>
        </div>
        <div class="MP_add_to_playlist_container">
          <button class="MP_add_to_playlist_btn MP_btn" name="save_to_playlist" title="Save To Playlist">
            <i class="fas fa-plus-circle"></i>
          </button>
        </div>
        <div class="MP_download_container">
          <a class="MP_download_btn MP_btn" title="Download">
            <i class="fas fa-arrow-alt-circle-down"></i>
          </a>
        </div>
        <div class="MP_like_container">
          <button v-if="info.liked" style="color: rgba(248, 165, 194, 1);" class="MP_like_btn MP_liked_btn" title="Like">
            <i class="fas fa-heart"></i>
          </button>
          <span v-if="info.liked" style="color: rgba(248, 165, 194, 1);" class="MP_like_count">{{ info.likes.likes }}</span>
          <button v-if="!info.liked" class="MP_like_btn MP_btn" name="like" title="Like">
            <i class="fas fa-heart"></i>
          </button>
          <span v-if="!info.liked" class="MP_like_count">{{ info.likes.likes }}</span>
        </div>
        <div class="MP_dislike_container">
          <button v-if="info.disliked" style="color: rgba(248, 165, 194, 1);" class='MP_dislike_btn MP_disliked_btn' title='Dislike'>
            <i class='fas fa-heart-broken'></i>
          </button>
          <span v-if="info.disliked" style="color: rgba(248, 165, 194, 1);" class="MP_dislike_count">{{ info.dislikes.dislikes }}</span>
          <button v-if="!info.disliked" class="MP_dislike_btn MP_btn" name="dislike" title="Dislike">
            <i class="fas fa-heart-broken"></i>
          </button>
          <span v-if="!info.disliked" class="MP_dislike_count">{{ info.dislikes.dislikes }}</span>
        </div>
        <div class="MP_report_container">
          <button class="MP_report_btn MP_btn" name="report" title="Report">
            <i class="fas fa-flag"></i>
          </button>
        </div>
        <!-- CHECK ACTIVE SESSION -->
          <div v-if="info.CLIENT_SIDE_ID == info._video_.video_user_id" class="MP_edit_container">
            <button class="MP_edit_btn" name="edit" title="Edit"><i class="fas fa-hammer"></i></button>
          </div>
        <!-- CHECK ACTIVE SESSION -->
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
    <div class="MP_follow_container">
      <button v-if="info.following" class="MP_following_btn" name="follow" title="Unfollow">
        FOLLOWING <i class="fas fa-hand-holding-heart"></i>
      </button>
      <button v-else class="MP_follow_btn" name="follow" title="Follow">
        FOLLOW <i class="fas fa-hand-holding-heart"></i>
      </button>
    </div>
    <div v-if="info._video_.categories.includes('mature')" style="background: #f78fb3; border-color: #f78fb3;" class="MP_logo_container">
      <img style="background: #f78fb3; border-color: #f78fb3;" src="/LyfyfyLogoLite.png">
    </div>
    <div v-else class="MP_logo_container">
      <img src="/LyfyfyLogoLite.png">
    </div>
  </div>

</template>

<style src="./MediaInfo.css"></style>

<script src="./MediaInfo.js" charset="utf-8"></script>
