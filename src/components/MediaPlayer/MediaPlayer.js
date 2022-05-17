import getMediaTime from '@/Functions/getMediaTime.js'

export default {
  props: [
    'video',
    'changePlaylistRoute',
  ],
  data() {
    return {
      frames: '',
      paused: true,
      CVS_width: '',
      curr_time: '',
      contextTop: 0,
      file_type: '',
      content_id: '',
      contextLeft: 0,
      thumb_size: 15,
      audio_frame: '',
      hoverCurrPos: 0,
      buffering: false,
      maxHeight: false,
      qof: new Image(),
      CVS_time_update: 0,
      thumbnail_file: '',
      video_duration: '',
      CVS_currentTime: '',
      showControls: true,
      updatingTime: false,
      showSettings: false,
      showHoverTime: false,
      toggleMuteBtn: false,
      frames_directory: '',
      index_y: 0,
      index_x: 0,
      hoverPos: 0,
      sprite_width: 0,
      sprite_height: 0,
      frames_per_row: 0,
      frames_per_col: 0,
      isFullScreen: false,
      hoverTimeFrameWidth: 0,
      showContextMenu: false,
      CVS_hoverTimeDisplay: '',
      CVS_currentTimeDisplay: '',
      CVS_videoDurationDisplay: '',
      CVS_hoverTimeDisplayWidth: 0,
      extracted_frames: new Image(),
      CVS_hover_time_frame_context_2d: '',
    }
  },
  watch: {

  },
  methods: {
    getMediaTime,
    get_object_key(data) {
      data = data.replace("https://lyfyfy.nyc3.digitaloceanspaces.com/", '')
      let key = data.replace("//", '/')

      return `https://lyfyfy.nyc3.digitaloceanspaces.com/${ key }`
    },
    get_rate(duration = false) {

      let k = 0

      for (let i = 0; i <= this.video_duration; i += 300) {
        k++
      }

      return k

    },
    open_fullscreen(elem) {

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }

    },
    close_fullscreen() {

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }

    },
    toggleFullscreen(elem) {

      if (this.isFullScreen) {
        this.close_fullscreen()
      } else if (!this.isFullScreen) {
        this.open_fullscreen(elem)
      }

    },
    detectEscapeKey() {
      if (!this.isFullScreen) {
        this.isFullScreen = true
      } else this.isFullScreen = false
    },
    timeUpdate() {

      if (this.updatingTime) return

      try {

        this.curr_time = ((this.$refs.CVS_video.currentTime * 100) / this.video_duration)
        this.curr_time = ((this.CVS_width * this.curr_time) / 100)
        if (this.updatingTime === false) {
          this.CVS_currentTimeDisplay = this.getMediaTime(this.$refs.CVS_video.currentTime)
          // this.CVS_currentTime = this.get_media_time(this.$refs.CVS_video.currentTime)
        }

      } catch (e) { /* TYPE ERROR CVS_video UNMOUNTED */ }

    },
    play() {

      this.$refs.CVS_video.play().then(() => {

        this.paused = false
        this.buffering = false

      }).catch(err => { /*  */ });

    },
    toggleSettings() {
      this.showSettings = !this.showSettings
    },
    pause() {
      this.paused = true
      this.$refs.CVS_video.pause();
    },
    ended() {
      this.paused = true
      this.$refs.CVS_video.pause();

      if (this.$route.name === "Playlist" && this.$refs.CVS_video.ended) this.changePlaylistRoute()
    },
    waiting(e) {
      this.buffering = true
    },
    videoOverlayClick(e) { // toggleControls()
      this.showSettings = false
      this.showContextMenu = false
      this.showControls = !this.showControls
    },
    openContextMenu(e) {
      this.showContextMenu = true
      this.contextTop = e.layerY + 'px'
      this.contextLeft = e.layerX + 'px'
    },
    toggleMute() {
      this.toggleMuteBtn = !this.toggleMuteBtn
      this.$refs.CVS_video.muted = !this.$refs.CVS_video.muted
    },
    sliderHandleAction(e) {

      this.updatingTime = true

      if (this.isFullScreen)
        this.curr_time = e.pageX - this.$refs.range_slider.offsetLeft
      else
        this.curr_time = e.pageX - this.$refs.CVS_media_container.offsetLeft - this.$refs.range_slider.offsetLeft

      this.CVS_currentTimeDisplay = this.getMediaTime((this.curr_time * this.video_duration) / this.CVS_width)

      if (this.curr_time < 0 || this.curr_time > this.CVS_width) return this.stopPosition()

    },
    stopPosition() {
      if (this.curr_time < 0) return this.curr_time = 0
      if (this.curr_time > this.CVS_width) return this.curr_time = this.CVS_width
    },
    calcHoverTimeDisplay(e) {

      let holder = 0

      if (this.isFullScreen)
        this.hoverCurrPos = e.pageX - this.$refs.range_slider.offsetLeft
      else
        this.hoverCurrPos = e.pageX - this.$refs.CVS_media_container.offsetLeft - this.$refs.range_slider.offsetLeft

      holder = (this.hoverCurrPos * this.video_duration) / this.CVS_width

      this.hoverFrameLeftPosition()

      this.CVS_hoverTimeDisplay = this.getMediaTime(holder)
      let new_frame = Math.round((holder * this.frames) / this.video_duration)

      if (this.thumbnail_file && this.file_type != 'video') this.qof.src = this.audio_frame
      else this.qof.src = "/LyfyfyLogoLite.png"

      if (this.file_type != "video") this.CVS_hover_time_frame_context_2d.drawImage(this.qof, 0, 0)
      else if (this.file_type != "video") this.CVS_hover_time_frame_context_2d.drawImage(this.qof, 0, 0)
      else this.get_frame(new_frame, this.video_duration)

    },
    get_frame(num, duration = false) {

      let row = 0, col = 0

      row = Math.floor(num / 10)
      col = (num - (row * 10)) + 1
      if (col < 0) col = 0

      this.index_y = row * this.$refs.CVS_hover_time_frame.height
      this.index_x = col * this.$refs.CVS_hover_time_frame.width

      this.CVS_hover_time_frame_context_2d.drawImage(
        this.extracted_frames, this.index_x, this.index_y,
        this.$refs.CVS_hover_time_frame.width, this.$refs.CVS_hover_time_frame.height,
        0, 0, this.$refs.CVS_hover_time_frame.width, this.$refs.CVS_hover_time_frame.height)

    },
    get_all_frames(duration = false) {

      this.extracted_frames.src = this.get_object_key(`${ this.video.thumbnail_directory }/sprite_${ this.content_id }.jpg`);

      this.extracted_frames.addEventListener('load', (e) => {
        this.sprite_width = this.extracted_frames.width
        this.sprite_height = this.extracted_frames.height
        this.frames_per_row = this.sprite_width / this.$refs.CVS_hover_time_frame.width
        this.frames_per_col = Math.ceil(this.frames / this.frames_per_row)
      });

    },
    hoverFrameLeftPosition() {
      this.hoverPos = this.hoverCurrPos - Math.floor(this.hoverTimeFrameWidth / 3)

      if (this.hoverPos < this.$refs.range_slider.offsetLeft) this.hoverPos = this.$refs.range_slider.offsetLeft

      if (this.hoverPos + (this.hoverTimeFrameWidth - this.$refs.range_slider.offsetLeft) > this.CVS_width)
        this.hoverPos = (this.CVS_width + this.$refs.range_slider.offsetLeft) - this.hoverTimeFrameWidth

    },
    calcMaxVideoHeight() {

      let pageWidth, contentWidth, $page, $content = 0

      if (this.isFullScreen) $content = 1
      else if (window.innerWidth <= 700) $content = 1
      else $content = 0.75

      if (this.isFullScreen) $page = 1
      else if (window.innerWidth <= 500) $page = 1
      else if (window.innerWidth <= 700) $page = 0.95
      else $page = 0.8

      pageWidth = Math.floor(window.innerWidth * $page)
      contentWidth = Math.floor(pageWidth * $content)

      if (this.isFullScreen && screen.orientation.type.includes('portrait')) this.maxHeight = window.innerHeight
      else this.maxHeight = Math.floor( ((contentWidth * 9) / 16) / 10 )

    },
  },
  created() {

    this.calcMaxVideoHeight()

  },
  mounted() {

    this.play()

    // this.$refs.CVS_video_overlay.style.height = this.$refs.CVS_video.clientHeight

    this.file_type = this.video.file_type
    this.content_id = this.video.video_id
    this.video_duration = this.video.duration
    this.thumbnail_file = this.video.thumbnail_file
    this.frames_directory = this.get_object_key(`${ this.video.frames_directory }`)
    this.audio_frame = this.get_object_key(`${ this.video.thumbnail_directory }/${ this.video.video_id }_thumbnail_2.jpg`)

    this.hoverTimeFrameWidth = this.$refs.CVS_hover_time_frame.width
    this.CVS_hoverTimeDisplayWidth = this.$refs.CVS_hover_time_display.offsetWidth
    this.CVS_hover_time_frame_context_2d = this.$refs.CVS_hover_time_frame.getContext("2d")
    this.CVS_width = this.$refs.range_slider.offsetWidth

    this.frames = Math.floor(this.video_duration / this.get_rate())
    this.frames_directory = this.frames_directory.replace("/tmp", '')

    this.CVS_currentTimeDisplay = this.getMediaTime(this.current_time)
    this.CVS_videoDurationDisplay = this.getMediaTime(this.video_duration)

    this.CVS_currentTime = this.getMediaTime(this.current_time) + " / " + this.getMediaTime(this.video_duration)

    if (this.file_type === "video") this.get_all_frames()

    this.qof = new Image();
    if (this.file_type != 'video') this.qof.src = this.audio_frame;

    window.onresize = (e) => {

      this.CVS_width = this.$refs.range_slider.offsetWidth
      this.curr_time = (this.$refs.CVS_video.currentTime * 100) / this.video_duration

      this.curr_time = (this.CVS_width * this.curr_time) / 100

      this.showContextMenu = false

      setTimeout(() => {
        this.calcMaxVideoHeight()
      }, 100)


    }

    window.onkeydown = (e) => {

      if (this.$store.getters.checkComponentStateActive) return

      if (e.key == 'p' || e.key == 'q' || e.key == 'z' || e.keyCode == 32) {

        e.preventDefault()

        if (this.$refs.CVS_video.paused) this.play()
        else this.pause()

      } else if (e.keyCode == 32) {

        e.preventDefault()
        e.stopPropagation()

      } else if (e.key == 'f') {

        this.toggleFullscreen(this.$refs.CVS_video_container)

      }

      else if (e.key == 'ArrowLeft') this.$refs.CVS_video.currentTime -= 5
      else if (e.key == 'ArrowRight') this.$refs.CVS_video.currentTime += 5
      else if (e.key == 'm') this.mute()

      else if (e.keyCode >= 48 && e.keyCode <= 57) {

        let percentage = ((Number(e.keyCode) - 48) * 10)
        this.$refs.CVS_video.currentTime = ((percentage * this.video_duration) / 100)

      }

    }

    window.screen.orientation.addEventListener('change', (e) => {

    })

    document.addEventListener('fullscreenchange', (e) => {

      this.detectEscapeKey()

    })

    document.body.onmouseenter = (e) => {

      if (e.target === this.$refs.range_slider || e.target.parentNode === this.$refs.range_slider) {
        this.sliderHandleAction(e)
      }

    }

    document.body.onmousedown = (e) => {

      if (e.target === this.$refs.range_slider || e.target.parentNode === this.$refs.range_slider) {
        this.sliderHandleAction(e)
      }

    }

    document.body.ontouchstart = (e) => {

      if (e.target === this.$refs.range_slider || e.target.parentNode === this.$refs.range_slider) {
        this.showHoverTime = true
        this.sliderHandleAction(e.touches[0])
      }

    }

    document.body.onmousemove = (e) => {

      if (e.target === this.$refs.range_slider || e.target.parentNode === this.$refs.range_slider) {
        if (this.updatingTime) this.sliderHandleAction(e)

        this.calcHoverTimeDisplay(e)
      }

    }

    document.body.ontouchmove = (e) => {

      if (e.target === this.$refs.range_slider || e.target.parentNode === this.$refs.range_slider) {
        if (this.updatingTime) this.sliderHandleAction(e.touches[0])

        this.calcHoverTimeDisplay(e.touches[0])
      }

    }

    document.body.onmouseup = (e) => {
      if (this.updatingTime) this.$refs.CVS_video.currentTime = (this.curr_time * this.video_duration) / this.CVS_width
      this.updatingTime = false
    }

    document.body.ontouchend = (e) => {
      if (this.updatingTime) this.$refs.CVS_video.currentTime = (this.curr_time * this.video_duration) / this.CVS_width
      this.updatingTime = false
      this.showHoverTime = false
    }

  },
  unmounted() {

    window.onresize = null
    window.onkeydown = null
    document.body.onmouseup = null
    document.body.ontouchend = null
    document.body.ontouchmove = null
    document.body.onmousedown = null
    document.body.onmousemove = null
    document.body.onmouseenter = null
    document.body.ontouchstart = null

  },
}
