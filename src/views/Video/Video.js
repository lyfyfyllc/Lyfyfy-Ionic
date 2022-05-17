import Reply from '@/components/Reply/Reply.vue'
import Filter from '@/components/Filter/Filter.vue'
import Footer from '@/components/Footer/Footer.vue'
import Options from '@/components/Options/Options.vue'
import HeaderComp from '@/components/Header/Header.vue'
import Comments from '@/components/Comments/Comments.vue'
import SidebarComp from '@/components/Sidebar/Sidebar.vue'
import MediaInfo from '@/components/MediaInfo/MediaInfo.vue'
import MediaPlayer from '@/components/MediaPlayer/MediaPlayer.vue'
import RelatedCard from '@/components/RelatedCard/RelatedCard.vue'
import MediaDescription from '@/components/MediaDescription/MediaDescription.vue'

import FetchGet from '@/Functions/FetchGet'
import getObjectKey from '@/Functions/getObjectKey'

export default {
  components: {
    Reply,
    Filter,
    Footer,
    Options,
    Comments,
    MediaInfo,
    HeaderComp,
    MediaPlayer,
    RelatedCard,
    SidebarComp,
    MediaDescription,
  },
  data() {
    return {
      commentCount: 0,
      isLoading: false,
      videoData: false,
      commentsData: '',
      videoComponent: '',
      tabStickyPosition: 0,
      fetchGet: new FetchGet(
        this.$store.state.MainServer,
        this.$store.state.apiToken
      )
    }
  },
  watch: {
    $route: function(to, from) {
      if (to.name !== "Video") return

      window.scrollTo(0, 0)
      this.isLoading = true
      this.videoComponent = false
      this.fetchVideoPageData()
    },
  },
  methods: {
    getObjectKey,
    changeVideoRoute(id) {
      this.fetchVideoPageData(id)
      this.videoComponent = false
      this.$router.push(`/video?v=${ id }`)
    },
    fetchVideoPageData(id = false) {
      this.isLoading = true
      this.fetchGet.getJSON(`/videos/getVideo?v=${ id || this.$route.query.v }`, (data) => {
        this.videoData = data
        this.isLoading = false
      })
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
    window.scrollTo(0, 0)
    
    document.body.onscroll = () => {
      if (this.videoComponent)
        this.tabStickyPosition = document.querySelector('.CVS_video_container').clientHeight
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
  unmounted() {

  },
}
