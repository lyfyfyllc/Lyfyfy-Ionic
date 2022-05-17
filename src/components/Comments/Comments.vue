<template>

  <div class="CM_comments_container">

    <!-- <div class="CM_close_comments_container">
      <div class="CM_close_comments">
        <div class="CM_close_btn">
          <h2><i class="fas fa-times-circle"></i></h2>
        </div>
      </div>
    </div> -->

    <div :data-rendered_comment_id="comment.comment_id" class="CM_comment">
      <div class="CM_main_content">
        <div class="CM_header">
          <div :data-comment_user_id="comment.comment_user_id" class="CM_profile_img">
            <img v-if="comment.comment_user_icon" :src="comment.comment_user_icon">
            <div v-else @click="$router.push(`/profile/${ comment.comment_user_id }/videos`)" :data-rendered_comment_id="comment.comment_id" class="CM_default_profile_pic"><p>{{ comment.username[0].toUpperCase() }}</p></div>
          </div>
          <div class="CM_profile_name">
            <p @click="$router.push(`/profile/${ comment.comment_user_id }/videos`)" :data-comment_user_id="comment.comment_user_id" :data-rendered_comment_id="comment.comment_id">{{ comment.username.substr(0, 30) }}</p>
            <h4>{{ diff }}</h4>
          </div>
        </div>
        <div class="CM_content">
          <p v-html="commentText"></p>
        </div>
        <div class="hr"></div>
        <div class="CM_comment_replies_container">
          <!-- REMOVE CONTAINER // INSERT COMMENT REPLIES RIGHT HERE // REMOVE CONTAINER -->
        </div>
        <div class="CM_approval_container">
          <div class="CM_like_container">
            <button class="CM_like_btn" name="button"><i class="fas fa-heart"></i> 0</button>
          </div>
          <div class="CM_dislike_container">
            <button class="CM_dislike_btn" name="button"><i class="fas fa-heart-broken"></i> 0</button>
          </div>

          <div class="CM_comment_reply">
            <button :data-rendered_comment_id="comment.comment_id" class="CM_comment_reply_btn" name="CM_comment_reply" title="Reply"><i class="fas fa-comment-medical"></i></button>
          </div>
          <!-- <div class="CM_menu_btn_container">
            <button class="CM_menu_btn" name="button"><i class="fas fa-ellipsis-v"></i></button>
          </div> -->
          <div v-if="$store.state.clientSideID === comment.comment_user_id" class="CM_menu_edit_container">
            <button :data-rendered_comment_id="comment.comment_id" class="CM_menu_edit"><i class="fas fa-pen"></i></button>
          </div>
          <div v-if="$store.state.clientSideID === comment.comment_user_id" class="CM_menu_remove_container">
            <button :data-rendered_comment_id="comment.comment_id" class="CM_menu_remove"><i class="fas fa-trash"></i></button>
          </div>
          <div v-if="$store.state.clientSideID !== comment.comment_user_id" class="CM_menu_report_container">
            <button :data-rendered_comment_id="comment.comment_id" class="CM_menu_report"><i class="fas fa-flag"></i></button>
          </div>
        </div>
      </div>
      <!-- <div class="CM_options">
        <div class="CM_menu_container">
          <div class="CM_menu">
            <?php if ($session_xp->get_client_side_id() == $comment['comment_user_id'] && $session_xp->get_secure_username() == $comment['comment_username']) { ?>
              <div data-rendered_comment_id="<?php echo $comment['comment_id']; ?>" class="CM_menu_edit">Edit</div>
              <div data-rendered_comment_id="<?php echo $comment['comment_id']; ?>" class="CM_menu_remove">Remove</div>
            <?php } else { ?>
              <div data-rendered_comment_id="<?php echo $comment['comment_id']; ?>" class="CM_menu_report">Report</div>
            <?php } ?>
          </div>
        </div>
      </div> -->
    </div>

    <div class="CM_remove_confirmation_main_container">
      <div class="CM_remove_confirmation_container">
        <div class="CM_remove_confirmation">
          <p>Are You Sure You Want To Delete This Comment?</p>
        </div>
        <button class="CM_remove_confirmation_yes_btn" name="button">Of Course!!</button>
        <button class="CM_remove_confirmation_no_btn" name="button">Nah Fam!!</button>
      </div>
    </div>

  </div>

</template>

<style src="./Comments.css"></style>

<script src="./Comments.js" charset="utf-8"></script>
