<template>

    <div class="CVS_media_container" ref="CVS_media_container" :style="`max-height: ${ maxHeight }em`">
      <div class="CVS_video_container_background" ref="CVS_video_container_background" :style="`max-height: ${ maxHeight }em`">
        <!-- <img class="CVS_image" src="/Logo.png"> -->
      </div>
      <div @contextmenu.prevent="" class="CVS_video_container" :style="`max-height: ${ maxHeight }em`" ref="CVS_video_container">

        <video
          ref="CVS_video" @play="play" @playing="play" @timeupdate="timeUpdate" @waiting="waiting"
          @ended="ended" v-if="video.thumbnail_file" class="CVS_video" preload="metadata"
          :poster="get_object_key(video.thumbnail_file)" :style="`max-height: ${ maxHeight }em; height: ${ maxHeight }em`">
          <source :src="get_object_key(video.video_file)">
        </video>
        <div v-else>
          <div class="CVS_unloaded_video_container">
            <div class="CVS_unloaded_video">
              <h3>Sorry We're Having Issues Pulling Up This Video... :(</h3>
            </div>
          </div>
        </div>

        <!--  -->
        <div ref="CVS_video_info_container" :style="showControls ? `transform: translateY(0)`: `transform: translateY(-20em)`" class="CVS_video_info_container">
          <div ref="CVS_video_info" class="CVS_video_info">
            <div class="CVS_video_duration_container">
              <button class="CVS_time_display">{{ CVS_currentTimeDisplay }} / {{ CVS_videoDurationDisplay }}</button>
            </div>
            <div class="CVS_header_toggle_container">
              <button class="CVS_header_toggle"><i style="padding: 0 .3em;" class="fas fa-arrows-alt-v"></i></button>
            </div>
            <div class="CVS_video_rewind_container">
              <button @click="$refs.CVS_video.currentTime -= 5" class="CVS_rewind"><i class="fas fa-backward"></i></button>
            </div>
            <div class="CVS_video_forward_container">
              <button @click="$refs.CVS_video.currentTime += 5" class="CVS_forward"><i class="fas fa-forward"></i></button>
            </div>
            <div class="CVS_current_playback_container">
              <button class="CVS_current_playback_speed">1x</button>
            </div>
            <div class="CVS_video_mute_container">
              <button v-if="!toggleMuteBtn" @click="toggleMute" class="CVS_mute"><i class="fas fa-volume-mute"></i></button>
              <button v-else @click="toggleMute" class="CVS_un_mute"><i class="fas fa-volume-up"></i></button>
            </div>
            <div class="CVS_video_settings_container">
              <div class="CVS_settings_btn">
                <button @click="toggleSettings" class="CVS_settings"><i class="fas fa-cog"></i></button>
              </div>
            </div>
            <div class="CVS_fullscreen_container">
              <button @click="toggleFullscreen($refs.CVS_video_container)" class="CVS_fullscreen"><i class="fas fa-compress"></i></button>
            </div>
          </div>
        </div>
        <!--  -->

        <!--  -->
        <div @click.self="videoOverlayClick" @contextmenu.self="openContextMenu" :style="`max-height: ${ maxHeight }em; ${ showControls ? 'opacity: 1': 'opacity: 0' }`" ref="CVS_video_overlay" class="CVS_video_overlay">
          <div class="CVS_video_rewind_container_mb">
            <button @click="$refs.CVS_video.currentTime -= 5" class="CVS_rewind_mb mobileui"><i class="fas fa-backward"></i></button>
          </div>
          <div v-if="showControls" class="CVS_NF_play_btns">
            <button v-if="buffering" class="CVS_buffer"><i class="fas fa-spinner"></i></button>
            <button v-else-if="paused" @click="play" ref="CVS_play" class="CVS_play"><i class="fas fa-play"></i></button>
            <button v-else @click="pause" ref="CVS_pause" class="CVS_pause"><i class="fas fa-pause"></i></button>
          </div>
          <div class="CVS_video_forward_container_mb">
            <button @click="$refs.CVS_video.currentTime += 5" class="CVS_forward_mb mobileui"><i class="fas fa-forward"></i></button>
          </div>
        </div>
        <!--  -->

        <div v-show="showHoverTime" :style="`left: ${ hoverPos }px`" class="CVS_hover_time_display_container">
          <div class="CVS_hover_time_display_main">
            <canvas ref="CVS_hover_time_frame" class="CVS_hover_time_frame" width="142" height="80"></canvas>
            <h3 ref="CVS_hover_time_display" class="CVS_hover_time_display">{{ CVS_hoverTimeDisplay }}</h3>
          </div>
        </div>

        <!--  -->
        <div ref="CVS_settings_container" :style="showSettings ? `transform: translateY(0);` : `transform: translateY(-200%)`" class="CVS_settings_container">
          <div class="CVS_settings_controls">
            <div class="CVS_playback_rate_container">
              <button class="CVS_playback_rate_display" name="button"><i class="fas fa-tachometer-alt"></i> Speed</button>
            </div>
            <div class="CVS_loop_container">
              <button class="CVS_loop" name="button"><i class="fas fa-infinity"></i> Loop</button>
            </div>
            <div class="CVS_restart_container">
              <button @click="$refs.CVS_video.currentTime = 0" class="CVS_restart" name="button"><i class="fas fa-undo"></i> Restart</button>
            </div>
            <div class="CVS_reload_container">
              <button @click="$refs.CVS_video.load()" class="CVS_reload" name="button"><i class="fas fa-spinner"></i> Reload</button>
            </div>
            <div class="CVS_download_container">
              <button class="CVS_download" name="button"><i class="fas fa-download"></i> Download Video</button>
            </div>
            <div class="CVS_report_container">
              <button class="CVS_report" name="button"><i class="far fa-flag"></i> Report Video</button>
            </div>
            <div class="CVS_close_container">
              <button @click="showSettings = false" class="CVS_close" name="button"><i class="fas fa-times-circle"></i> Close Menu</button>
            </div>
          </div>
        </div>

        <div ref="CVS_playback_rate" class="CVS_playback_rate">
          <div class="CVS_settings_return"><i class="fas fa-long-arrow-alt-left"></i></div>
          <div class="CVS_playback_rate_speeds">
            <div class="CVS_playback_slowed">
              <button class="CVS_playback">0.25</button>
              <button class="CVS_playback">0.50</button>
              <button class="CVS_playback">0.75</button>
              <button class="CVS_playback">1</button>
            </div>
            <div class="CVS_playback_speed_up">
              <button class="CVS_playback">1.25</button>
              <button class="CVS_playback">1.50</button>
              <button class="CVS_playback">1.75</button>
              <button class="CVS_playback">2</button>
            </div>
          </div>
        </div>
        <!--  -->

        <div @mouseenter="showHoverTime = true" @mouseleave="showHoverTime = false" ref="CVS_main_controls_container" :style="showControls ? `transform: translateY(0)` : `transform: translateY(20em)`" class="CVS_main_controls_container">
          <div class="CVS_controls_container">
            <div class="CVS_time_bar">

              <div ref="range_slider" class="range_slider">
                <div :style="`left: ${ curr_time - (thumb_size / 2) }px`" ref="range_slider_thumb" class="range_slider_thumb"></div>
                <div ref="range_slider_track" class="range_slider_track"></div>
                <div :style="`width: ${ curr_time }px`" ref="range_progress_bar" class="range_progress_bar"></div>
              </div>

            </div>
          </div>
        </div>

        <div v-if="showContextMenu" :style="`top: ${ contextTop };left: ${ contextLeft };`" ref="CVS_context_menu_container" class="CVS_context_menu_container">
          <div class="CVS_context_menu">
            <div class="CVS_loop_container">
              <button class="CVS_loop_CM" name="button"><i class="fas fa-infinity"></i> Loop</button>
            </div>
            <div class="CVS_copy_url_container">
              <button class="CVS_copy_url" name="button"><i class="fas fa-copy"></i> Copy Url</button>
            </div>
            <div class="CVS_copy_embed_code_container">
              <button class="CVS_copy_embed_code" name="button"><i class="fas fa-code"></i> Copy Embed Code</button>
            </div>
            <div class="CVS_download_container">
              <button class="CVS_download_CM" name="button"><i class="fas fa-download"></i> Download Video</button>
            </div>
            <div class="CVS_restart_container">
              <button class="CVS_restart_video" name="button"><i class="fas fa-undo"></i> Restart</button>
            </div>
            <div class="CVS_reload_video_container">
              <button class="CVS_reload_video" name="button"><i class="fas fa-spinner"></i> Reload Video</button>
            </div>
            <div class="CVS_report_container">
              <button class="CVS_report_CM" name="button"><i class="far fa-flag"></i> Report Video</button>
            </div>
          </div>
        </div>

      </div>

      <!--  -->

      <!--  -->

    </div>

</template>

<script src="./MediaPlayer.js" charset="utf-8"></script>

<style src="./MediaPlayer.css"></style>
