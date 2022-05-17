import Filter from '@/components/Filter/Filter.vue'
import Footer from '@/components/Footer/Footer.vue'
import Options from '@/components/Options/Options.vue'
import HeaderComp from '@/components/Header/Header.vue'
import PostCard from '@/components/PostCard/PostCard.vue'
import SidebarComp from '@/components/Sidebar/Sidebar.vue'
import MediaCard from '@/components/MediaCard/MediaCard.vue'
import FetchGet from '@/Functions/FetchGet.js'

export default {
  name: 'Home',
  components: {
    Filter,
    Footer,
    Options,
    PostCard,
    MediaCard,
    HeaderComp,
    SidebarComp
  },
  watch: {
    '$route.params.homeSession': function(to, from) {
       this.homeSession = this.$route.params.homeSession
       if (this.$route.params.homeSession === "videos") this.fetchMediaCardData()
       else if (this.$route.params.homeSession === "posts") this.fetchPostCardData()
       else this.fetchMediaCardData()
   },
  },
  methods: {
    scaleLoader() {
      setInterval(() => {
        if (this.setScale >= 100) this.setScale = 0
        else this.setScale += 10
      }, 300)
    },
    async fetchMediaCardData(req = false) {
      this.isLoading = true

      if (!req) req = `page_num=1`
      this.fetchGet.getJSON(`/videos/getVideos?restrictions=${ this.$store.state.restrictions }&${ req }`, (data) => {
        this.isLoading = false
        this.mediaCardData = data._videos_
      })
    },
    async loadMediaCardData(req = false) {
      if (!req) req = `page_num=${ this.pageNum++ }`
      this.fetchGet.getJSON(`/videos/getVideos?restrictions=${ this.$store.state.restrictions }&${ req }`, (data) => {
        if (this.pageNum > this.maxPages) this.maxxedOut = true
        this.mediaCardData = [...this.mediaCardData, ...data._videos_]
      })
    },
    async fetchPostCardData(req = false) {
      this.isLoading = true
      this.fetchGet.getJSON(`/posts`, (data) => {
        this.isLoading = false
        this.postCardData = data.posts
      })
    },
  },
  data() {
    return {
      pageNum: 2,
      maxPages: 0,
      setScale: 0,
      contentCount: 0,
      homeSession: '',
      isLoading: false,
      postCardData: '',
      maxxedOut: false,
      mediaCardData: '',
      fetchGet: new FetchGet(
        this.$store.state.MainServer,
        this.$store.state.apiToken
      )
    }
  },
  mounted() {

    this.scaleLoader()

    if (this.homeSession === "videos") this.fetchMediaCardData()
    else if (this.homeSession === "posts") this.fetchPostCardData()
    else this.fetchMediaCardData()

  },
  created() {

    this.fetchGet.getJSON(`/videos/getCurrentCount`, (r) => {
      this.maxPages = Math.ceil(r.currentCount / 12)
    })

    this.homeSession = this.$route.params.homeSession

  },
  beforeCreate() {
    // document.body.className = 'main'
  }
}
