import StudioType from './StudioType.vue'
import StudioStart from './StudioStart.vue'
import StudioLoader from './StudioLoader.vue'
import StudioFooter from './StudioFooter.vue'
import StudioPageLog from './StudioPageLog.vue'
import StudioSideBar from './StudioSideBar.vue'
import StudioCategories from './StudioCategories.vue'
import StudioPostText from './StudioPost/StudioPostText.vue'
import StudioPostMedia from './StudioPost/StudioPostMedia.vue'
import StudioPostReview from './StudioPost/StudioPostReview.vue'

import FetchGet from '@/Functions/FetchGet.js'

export default {
  components: {
    StudioType,
    StudioStart,
    StudioFooter,
    StudioLoader,
    StudioPageLog,
    StudioSideBar,
    StudioPostText,
    StudioPostMedia,
    StudioPostReview,
    StudioCategories,
  },
  data() {
    return {
      studioTracker: {},
      studioSession: '',
      showLoader: false,
      pageLogMessage: '',
      showPageLog: false,
      themeColor_1: false,
      themeColor_2: false,
      showStudioSidebar: false,
      studioData: new FormData(),
      fetchGet: new FetchGet(
        this.$store.state.MainServer,
        this.$store.state.apiToken
      ),
      postSessions: [
        'start',
        'type',
        'postText',
        'postMedia',
        'categories',
        'postReview'
      ],
      videoSessions: [
        'start',
        'type',
        'videoMedia',
        'videoThumbnail',
        'videoTitle',
        'videoDescription',
        'categories',
        'videoReview'
      ]
    }
  },
  methods: {
    closePageLog() { this.showPageLog = false },
    endSession() { window.location.href = '/' },
    closeSidebar() { this.showStudioSidebar = false },
    toggleLoader() { this.showLoader = !this.showLoader },
    changeSession(session) { this.studioSession = session },
    toggleStudioSidebar() { this.showStudioSidebar = !this.showStudioSidebar },

    displayPageLog(msg) {
      this.pageLogMessage = msg
      this.showPageLog = true
    },
    studioRestart() {
      this.closeSidebar()
      this.studioTracker = {}
      this.studioData = new FormData()
      this.studioSession = "start"
    },
    addType(type) {
      this.studioTracker = {}

      for (const key of this.studioData.keys()) {
        this.studioData.delete(key)
      }

      this.studioTracker[type] = {}
      this.studioTracker.type = type
      this.studioData = new FormData()
      this.studioData.append(type, type)
      if (type === 'post') this.changeSession('postText')
      else if (type === 'video') this.changeSession('videoMedia')
    },
    addPostText(postText, text, val) {
      if ((!postText || typeof postText !== 'string') && text) {
        this.displayPageLog("Woah you forgot the text there friend...")
      } else if (postText.trim().length < 3 && text) {
        this.displayPageLog("Let's get in at least 3 characters...")
      } else {
        this.studioTracker.post.text = text
        this.studioTracker.post.postText = val
        this.studioData.append('postText', encodeURIComponent(postText))
        this.changeSession('postMedia')
      }
    },
    addPostMedia(postMedia, media, url = false) {
      if (!postMedia && media) {
        this.displayPageLog("Well I mean an actual image would be cool...")
      } else if (!this.studioTracker.post.postText && !media) {
        this.displayPageLog("We at least need an image or some text friend...")
      } else {
        this.studioTracker.post.media = media
        if (postMedia && media) {
          this.studioTracker.post.mediaURL = url
          this.studioTracker.post.postMedia = postMedia.name
          this.studioData.append('postMedia', postMedia, postMedia.name)
        }
        this.changeSession('categories')
      }
    },
    addCategories(cats) {
      if (cats.length < 1) {
        this.displayPageLog("Come on pick a category...please...")
      } else {
        this.studioData.append('categories', cats)
        this.studioTracker.post.categories = cats
        this.studioTracker.post.category = true
        if (this.studioTracker.type === "post") {
          this.changeSession('postReview')
        }
      }
    },
    uploadPost(maturityLevel) {
      this.toggleLoader()
      this.studioData.append('maturityLevel', maturityLevel)
      this.studioData.append('apiKey', this.$store.state.apiKey)
      this.studioData.append('clientSideID', this.$store.state.clientSideID)
      this.studioData.set('postText', this.studioData.get('postText').replaceAll("\n", "<br>"))
      this.fetchGet.sendData(this.$store.state.clientSideID, '/studio/posts', this.studioData, (r) => {
        this.toggleLoader()
        if (r.errorCode) this.displayPageLog(r.errorMsg)
        if (r.successCode) window.location.href = r.successMsg
      })
    },
    changeBackgroundColor() {
      this.themeColor_1 = this.getColor()
      this.themeColor_2 = this.getColor()

      document.body.querySelector('.ST_sidebar_container').style.background = this.themeColor_2
      document.body.style.background = `linear-gradient(to bottom right, ${ this.themeColor_1 }, ${ this.themeColor_2 })`

    },
    getColor(alpha = false) {
      let rgbColors = { r: 0, g: 0, b: 0, }

      for (var clr in rgbColors) {
        rgbColors[clr] = Math.floor(Math.random() * 255)
      }

      if (!alpha) alpha = 1

      return `rgba(${ rgbColors.r }, ${ rgbColors.g }, ${ rgbColors.b }, ${ alpha })`
    }
  },
  mounted() {
    document.body.style.background = "linear-gradient(to bottom right, rgba(64, 64, 122, 1), rgba(44, 44, 84, 1))"
  }
}
