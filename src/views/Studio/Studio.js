import StudioType from './StudioType.vue'
import StudioStart from './StudioStart.vue'
import StudioFooter from './StudioFooter.vue'
import StudioPageLog from './StudioPageLog.vue'
import StudioSideBar from './StudioSideBar.vue'
import StudioCategories from './StudioCategories.vue'
import StudioPostText from './StudioPost/StudioPostText.vue'
import StudioPostMedia from './StudioPost/StudioPostMedia.vue'
import StudioPostReview from './StudioPost/StudioPostReview.vue'

export default {
  components: {
    StudioType,
    StudioStart,
    StudioFooter,
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
      pageLogMessage: '',
      showPageLog: false,
      showStudioSidebar: false,
      studioData: new FormData(),
      postSessions: ['postText', 'postMedia', 'categories', 'postReview'],
      videoSessions: ['videoMedia', 'videoThumbnail', 'videoTitle', 'videoDescription', 'categories', 'videoReview']
    }
  },
  methods: {
    navForward() {
      let x = 0;
      if (this.studioTracker.type === 'post') {
        for (let i = 0; i < this.postSessions.length; i++) {
          if (this.studioSession === this.postSessions[i]) x = i
        }

        if (++x > this.postSessions.length) return x = this.postSessions.length - 1

        this.changeSession(this.postSessions[x])
      }
    },
    navBack() {

    },
    displayPageLog(msg) {
      this.pageLogMessage = msg
      this.showPageLog = true
      setTimeout(() => {
        this.showPageLog = false
      }, 5000)
    },
    toggleStudioSidebar() {
      this.showStudioSidebar = !this.showStudioSidebar
    },
    closeSidebar() {
      this.showStudioSidebar = false
    },
    changeSession(session) {
      this.studioSession = session
    },
    endSession() {
      this.studioTracker = {}
      this.studioData = new FormData
      this.toggleStudioSidebar()
      this.$router.push('/')
    },
    studioRestart() {
      this.closeSidebar()
      this.studioTracker = {}
      this.studioData = new FormData
      this.studioSession = false
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
      else if (type === 'video') this.changeSession('videoUpload')
    },
    addPostText(postText, text) {
      if ((!postText || typeof postText !== 'string') && text) {
        this.displayPageLog("Woah you forgot the text there friend...")
      } else {
        this.studioTracker.post.text = text
        this.studioTracker.post.postText = postText
        this.studioData.append('postText', postText)
        this.changeSession('postMedia')
      }
    },
    addPostMedia(postMedia, media, url) {
      if (!postMedia && media) {
        this.displayPageLog("Well I mean an actual image would be cool...")
      } else {
        this.studioTracker.post.media = media
        this.studioTracker.post.mediaURL = url
        this.studioTracker.post.postMedia = postMedia.name
        this.studioData.append('postMedia', postMedia, postMedia.name)
        this.changeSession('categories')
      }
    },
    addCategories(cats) {
      if (cats.length < 1) {
        this.displayPageLog("Come on pick a category...please...")
      } else {
        this.studioData.append('categories', cats)
        this.studioTracker.categories = cats
        this.studioTracker.category = true
        if (this.studioTracker.type === "post") {
          this.changeSession('postReview')
        }
      }
    }
  }
}
