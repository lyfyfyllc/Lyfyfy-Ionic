<template>

  <div class="RP_background_screen">
    <div class="RP_main_container">
      <div class="RP_container">
        <div class="RP_editor_container">
          <div @keydown="insertTextHTML" class="RP_editor" contenteditable="true" spellcheck="false"></div>
        </div>
        <div class="RP_btns_container">
          <div class="RP_empty_space"></div>
          <div class="RP_btns">
            <div class="RP_cancel_btn_container">
              <button @click="$store.commit('toggleReply')" class="RP_cancel_btn" name="button">Cancel</button>
            </div>
            <div class="RP_comment_btn_container">
              <button class="RP_comment_btn" name="button">Comment!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style src="./Reply.css"></style>

<script src="./Reply.js"></script>
