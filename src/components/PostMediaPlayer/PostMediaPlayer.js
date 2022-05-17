import getMediaTime from '@/Functions/getMediaTime.js'

export default {
  props: [
    'post'
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
        this.$refs.CVS_video_overlay.style.opacity = 0

      }).catch(err => { /*  */ });

    },
    toggleSettings() {
      this.showSettings = !this.showSettings
    },
    pause() {
      this.paused = true
      this.$refs.CVS_video.pause()
      this.$refs.CVS_video_overlay.style.opacity = 1
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

      this.curr_time = e.layerX
      // this.curr_time = e.pageX - this.$refs.CVS_media_container.offsetLeft - this.$refs.range_slider.offsetLeft
      this.CVS_currentTimeDisplay = this.getMediaTime((this.curr_time * this.video_duration) / this.CVS_width)

      if (this.curr_time < 0 || this.curr_time > this.CVS_width) return this.stopPosition()

    },
    stopPosition() {
      if (this.curr_time < 0) return this.curr_time = 0
      if (this.curr_time > this.CVS_width) return this.curr_time = this.CVS_width
    },
    hoverFrameLeftPosition() {
      this.hoverPos = this.hoverCurrPos - Math.floor(this.hoverTimeFrameWidth / 3)

      if (this.hoverPos < this.$refs.range_slider.offsetLeft) this.hoverPos = this.$refs.range_slider.offsetLeft

      if (this.hoverPos + (this.hoverTimeFrameWidth - this.$refs.range_slider.offsetLeft) > this.CVS_width)
        this.hoverPos = (this.CVS_width + this.$refs.range_slider.offsetLeft) - this.hoverTimeFrameWidth
    },
    togglePlay() {
      if (this.$refs.CVS_video.paused) {
        this.play()
        this.$refs.CVS_video_overlay.style.opacity = 0
      } else {
        this.pause()
        this.$refs.CVS_video_overlay.style.opacity = 1
      }
    }
  },
  mounted() {

    // this.play()
    this.file_type = this.post.type
    this.content_id = this.post.post_id
    this.video_duration = Number(this.post.duration)
    // this.thumbnail_file = this.video.thumbnail_file
    // this.frames_directory = this.get_object_key(`${ this.video.frames_directory }`)
    // this.audio_frame = this.get_object_key(`${ this.video.thumbnail_directory }/${ this.video.video_id }_thumbnail_2.jpg`)

    // this.hoverTimeFrameWidth = this.$refs.CVS_hover_time_frame.width
    // this.CVS_hoverTimeDisplayWidth = this.$refs.CVS_hover_time_display.offsetWidth
    // this.CVS_hover_time_frame_context_2d = this.$refs.CVS_hover_time_frame.getContext("2d")
    this.CVS_width = this.$refs.range_slider.offsetWidth

    // this.frames = Math.floor(this.video_duration / this.get_rate())
    // this.frames_directory = this.frames_directory.replace("/tmp", '')
    this.CVS_currentTimeDisplay = this.getMediaTime(this.current_time)
    this.CVS_videoDurationDisplay = this.getMediaTime(this.video_duration)

    this.CVS_currentTime = this.getMediaTime(this.current_time) + " / " + this.getMediaTime(this.video_duration)

    // if (this.file_type === "video") this.get_all_frames()

    // this.qof = new Image();
    // if (this.file_type != 'video') this.qof.src = this.audio_frame;

    window.onresize = (e) => {

      this.CVS_width = this.$refs.range_slider.offsetWidth
      this.curr_time = (this.$refs.CVS_video.currentTime * 100) / this.video_duration

      this.curr_time = (this.CVS_width * this.curr_time) / 100

      this.showContextMenu = false

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

        // this.calcHoverTimeDisplay(e)
      }

    }

    document.body.ontouchmove = (e) => {

      if (e.target === this.$refs.range_slider || e.target.parentNode === this.$refs.range_slider) {
        if (this.updatingTime) this.sliderHandleAction(e.touches[0])

        // this.calcHoverTimeDisplay(e.touches[0])
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
    document.body.onmouseup = null
    document.body.ontouchend = null
    document.body.ontouchmove = null
    document.body.onmousedown = null
    document.body.onmousemove = null
    document.body.ontouchstart = null

  },
}
