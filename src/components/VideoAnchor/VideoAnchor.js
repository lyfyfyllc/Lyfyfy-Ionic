import MediaInfo from '@/components/MediaInfo/MediaInfo.vue'
import MediaPlayer from '@/components/MediaPlayer/MediaPlayer.vue'
import FetchGet from '@/Functions/FetchGet.js'

export default {
  props: [
    'videoID',
    'toggleVideoAnchor',
  ],
  components: {
    MediaInfo,
    MediaPlayer,
  },
  data() {
    return {
      isLoading: false,
      videoData: false,
      tabStickyPosition: 0,
      fetchGet: new FetchGet(
        this.$store.state.MainServer,
        this.$store.state.apiToken
      )
    }
  },
  methods: {
    fetchVideoPageData(id = false) {
      this.isLoading = true
      this.fetchGet.getJSON(`/videos/getVideo?v=${ id || this.$route.query.v }`, (data) => {
        this.videoData = data
        this.isLoading = false
      })
    },
  },
  created() {
    this.fetchVideoPageData(this.videoID)
  },
  mounted() {

  },
}
