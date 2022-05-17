<template>


  <div @contextmenu.prevent="" ref="CVS_media_container" class="CVS_media_container">
    <div class="CVS_video_container">

      <video @ended="play" @timeupdate="timeUpdate" ref="CVS_video" class="CVS_video" autoplay preload="metadata">
        <source :src="get_object_key(post.media_file)" type="video/mp4">
      </video>

      <!--  -->
      <div class="CVS_video_info_container">
        <div class="CVS_video_info">
          <div class="CVS_video_duration_container">
            <button class="CVS_time_display">{{ CVS_currentTimeDisplay }} / {{ CVS_videoDurationDisplay }}</button>
          </div>
          <!-- <div class="CVS_header_toggle_container">
            <button class="CVS_header_toggle"><i style="padding: 0 .3em;" class="fas fa-arrows-alt-v"></i></button>
          </div> -->
          <div class="CVS_current_playback_container">
            <button class="CVS_current_playback_speed">1x</button>
          </div>
          <div class="CVS_video_mute_container">
            <button class="CVS_mute"><i class="fas fa-volume-mute"></i></button>
            <button class="CVS_un_mute"><i class="fas fa-volume-up"></i></button>
          </div>
          <div class="CVS_video_settings_container">
            <div class="CVS_settings_btn">
              <button class="CVS_settings"><i class="fas fa-cog"></i></button>
            </div>
          </div>
          <div class="CVS_fullscreen_container">
            <button class="CVS_fullscreen"><i class="fas fa-compress"></i></button>
          </div>
        </div>
      </div>
      <!--  -->

      <!--  -->
      <div @click.self="togglePlay" ref="CVS_video_overlay" class="CVS_video_overlay">
        <!-- <div class="CVS_NF_play_btns">
          <button class="CVS_play" name="button"><i class="fas fa-play"></i></button>
          <button class="CVS_pause" name="button"><i class="fas fa-pause"></i></button>
        </div> -->
      </div>
      <!--  -->

      <div class="CVS_hover_time_display_container">
        <div class="CVS_hover_time_display_main">
          <h3 class="CVS_hover_time_display">0:00</h3>
        </div>
      </div>

      <!-- <div class="CVS_settings_container">
        <div class="CVS_settings_controls">
          <div class="CVS_playback_rate_container">
            <button class="CVS_playback_rate_display" name="button"><i class="fas fa-tachometer-alt"></i> Speed</button>
          </div>
          <div class="CVS_loop_container">
            <button class="CVS_loop" name="button"><i class="fas fa-infinity"></i> Loop</button>
          </div>
          <div class="CVS_restart_container">
            <button class="CVS_restart" name="button"><i class="fas fa-undo"></i> Restart</button>
          </div>
          <div class="CVS_reload_container">
            <button class="CVS_reload" name="button"><i class="fas fa-spinner"></i> Reload</button>
          </div>
          <div class="CVS_close_container">
            <button class="CVS_close" name="button"><i class="fas fa-times-circle"></i> Close Menu</button>
          </div>
        </div>
      </div>

      <div class="CVS_playback_rate">
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
      </div> -->

      <div ref="CVS_main_controls_container" class="CVS_main_controls_container">
        <div class="CVS_controls_container">
          <div class="CVS_time_bar">

            <div ref="range_slider" class="range_slider">
              <!-- <div :style="`left: ${ curr_time - (thumb_size / 2) }px`" ref="range_slider_thumb" class="range_slider_thumb"></div> -->
              <div ref="range_slider_track" class="range_slider_track"></div>
              <div :style="`width: ${ curr_time }px`" ref="range_progress_bar" class="range_progress_bar"></div>
            </div>

          </div>
        </div>
      </div>

      <!-- <div class="CVS_context_menu_container">
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
          <div class="CVS_restart_video_container">
            <button class="CVS_restart_video" name="button"><i class="fas fa-undo"></i> Restart Video</button>
          </div>
          <div class="CVS_reload_video_container">
            <button class="CVS_reload_video" name="button"><i class="fas fa-spinner"></i> Reload Video</button>
          </div>
        </div>
      </div> -->

    </div>

    <!--  -->

    <!--  -->

  </div>

</template>

<script src="./PostMediaPlayer.js" charset="utf-8"></script>

<style scoped src="./PostMediaPlayer.css"></style>
