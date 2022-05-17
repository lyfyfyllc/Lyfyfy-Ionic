<template>

  <div @click.self="toggleVideoAnchor" class="VA_main_container">
    <div @click.self="toggleVideoAnchor" class="VA_container">

      <div v-if="!isLoading" class="VA_MediaWrapper">
        <div class="VA_MedaiPlayer">
          <MediaPlayer v-if="videoData._video_" :video="videoData._video_" />
        </div>
        <div class="VA_MediaInfo">
          <MediaInfo v-if="videoData" :info="videoData" />
        </div>
        <div class="MC_anchor_actions_container">
          <div class="MC_close_anchor_container">
            <button @click="toggleVideoAnchor" class="MC_close_anchor_btn"><i class="fas fa-unlink"></i> UNHOOK</button>
          </div>
          <div class="MC_visit_container">
            <button @click="$router.push(`/video?v=${ videoID }`)" class="MC_visit_btn"><i class="fas fa-link"></i> VISIT</button>
          </div>
        </div>
      </div>
      <div v-else class="VA_loading_container">
        <h3 class="VA_loader">Loading...</h3>
      </div>

    </div>
  </div>

</template>

<style src="./VideoAnchor.css"></style>

<script src="./VideoAnchor.js"></script>
