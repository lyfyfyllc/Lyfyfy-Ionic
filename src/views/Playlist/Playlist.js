import Reply from '@/components/Reply/Reply.vue'
import Footer from '@/components/Footer/Footer.vue'
import Options from '@/components/Options/Options.vue'
import HeaderComp from '@/components/Header/Header.vue'
import Comments from '@/components/Comments/Comments.vue'
import FeedCard from '@/components/FeedCard/FeedCard.vue'
import SidebarComp from '@/components/Sidebar/Sidebar.vue'
import MediaInfo from '@/components/MediaInfo/MediaInfo.vue'
import MediaPlayer from '@/components/MediaPlayer/MediaPlayer.vue'
import RelatedCard from '@/components/RelatedCard/RelatedCard.vue'
import MediaDescription from '@/components/MediaDescription/MediaDescription.vue'
import FetchGet from '@/Functions/FetchGet.js'

export default {
  name: 'Playlist',
  components: {
    Reply,
    Footer,
    Options,
    Comments,
    FeedCard,
    MediaInfo,
    HeaderComp,
    MediaPlayer,
    RelatedCard,
    SidebarComp,
    MediaDescription,
  },
  data() {
    return {
      playlist: '',
      nextVideo: 0,
      commentCount: 0,
      currentVideo: 0,
      isLoading: false,
      videoData: false,
      commentsData: '',
      videoComponent: '',
      showPlaylist: true,
      tabStickyPosition: 0,
      fetchGet: new FetchGet(
        this.$store.state.MainServer,
        this.$store.state.apiToken
      )
    }
  },
  watch: {
    '$route.query.v': function(to, from) {
      if (typeof to !== "string") return
      window.scrollTo(0, 0)
      this.isLoading = true
      if (this.playlist.length === 1) this.nextVideo = 1
      // else if (this.currentVideo === this.playlist.length - 1) this.nextVideo = 0
      else this.changePlaylistRoute(to)
    }
  },
  methods: {
    findVideoIndex() {
      this.playlist.forEach((list, x) => {
        if (list.playlist_video_id === this.$route.query.v) {
          this.currentVideo = x
        }
      })

      this.nextVideo = this.currentVideo + 1
      if (this.nextVideo === this.playlist.length) this.nextVideo = 0
    },
    changePlaylistRoute(id = false) {
      // if (this.currentVideo + 1 === this.playlist.length) this.currentVideo = 0
      this.findVideoIndex()
      this.$router.push(`/playlist?list=${ this.$route.query.list }&v=${ id || this.playlist[this.nextVideo].playlist_video_id }`)
      .then(() => {
        this.fetchVideoPageData(id)
        this.videoComponent = false
      })
    },
    fetchVideoPageData(id = false) {
      this.isLoading = true
      this.fetchGet.getJSON(`/playlist?list=${ this.$route.query.list }&v=${ id || this.$route.query.v }`, (data) => {
        this.videoData = data
        this.isLoading = false
        this.playlist = data.playlist
        this.findVideoIndex()
        // console.log(this.currentVideo);
      })
    },
    get_object_key(data) {
      data = data.replace("https://lyfyfy.nyc3.digitaloceanspaces.com/", '')
      let key = data.replace("//", '/')

      return `https://lyfyfy.nyc3.digitaloceanspaces.com/${ key }`
    },
    fetchComments() {
      this.fetchGet.getJSON(`/comments/getComments?get_content_id=${ this.videoData.get_content_id }&content_user_id=${ this.videoData._video_.video_user_id }&session=videos`, (data) => {
        this.commentsData = data.user_comments
        this.commentCount = data.comments_count
      })
    },
    toggleDescription() {
      if (this.videoComponent === 'description') this.videoComponent = ''
      else this.videoComponent = 'description'
    },
    toggleComments() {
      if (this.videoComponent === 'comments') this.videoComponent = ''
      else {
        this.videoComponent = 'comments'
        this.fetchComments()
      }
    },
    toggleRelated() {
      if (this.videoComponent === 'related') this.videoComponent = ''
      else this.videoComponent = 'related'
    },
  },
  mounted() {
    document.body.onscroll = () => {
      if (this.videoComponent)
        this.tabStickyPosition = document.querySelector('.CVS_video_container').clientHeight + 50
    }
  },
   beforeUnmount() {
     document.body.onscroll = null
  },
  created() {
    this.fetchVideoPageData()
  },
  beforeCreate() {
    // document.body.className = 'main'
  },
}
