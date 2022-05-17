import FetchGet from '@/Functions/FetchGet'
import Filter from '@/components/Filter/Filter.vue'
import Footer from '@/components/Footer/Footer.vue'
import Options from '@/components/Options/Options.vue'
import HeaderComp from '@/components/Header/Header.vue'
import FeedCard from '@/components/FeedCard/FeedCard.vue'
import PostCard from '@/components/PostCard/PostCard.vue'
import SidebarComp from '@/components/Sidebar/Sidebar.vue'
import MediaCard from '@/components/MediaCard/MediaCard.vue'
import PlaylistCard from '@/components/PlaylistCard/PlaylistCard.vue'
import ProfileNavigation from '@/components/Profile/ProfileNavigation.vue'
import ProfileInformation from '@/components/Profile/ProfileInformation.vue'
import ProfileNavigationEx from '@/components/Profile/ProfileNavigationEx.vue'


export default {
  name: 'Home',
  components: {
    Filter,
    Footer,
    Options,
    FeedCard,
    PostCard,
    MediaCard,
    HeaderComp,
    SidebarComp,
    PlaylistCard,
    ProfileNavigation,
    ProfileInformation,
    ProfileNavigationEx,
  },
  data() {
    return {
      sessions: [
        'posts',
        'videos',
        'playlists',
      ],
      userSessions: [
        'likes',
        'later',
        'follows',
        'history',
        'dislikes',
        'playlist',
        'bookmarks',
        'notifications',
      ],
      profileData: '',
      errorMsg: false,
      isLoading: false,
      maxxedOut: false,
      feedCardData: '',
      postCardData: '',
      mediaCardData: '',
      playlistCardData: '',
      playlistVideoIDs: '',
      playlistThumbnails: '',
      playlistVideoCount: '',
      currentSession: false,
      currentUserSession: false,
      fetchGet: new FetchGet(
        this.$store.state.MainServer,
        this.$store.state.apiToken
      )
    }
  },
  watch: {
    $route(to, from) {

      if (to.name !== "Session" && to.name !== "ProfileSession") return
      if (typeof this.$route.params.session !== 'undefined') this.checkSession(this.$route.params.session)
      else if (typeof this.$route.params.userSession !== 'undefined') this.fetchFeedCardData(this.$route.params.userSession)
      else this.fetchMediaCardData()

    }
  },
  methods: {
    checkUserSession() {

    },
    checkSession(sess) {

      for (var i = 0; i < this.sessions.length; i++) {
        if (this.sessions[i] === sess) {
          this.currentSession = sess
          break
        }
      }

      if (this.currentSession) {
        if (sess === 'posts') this.fetchPostCardData()
        else if (sess === 'videos') this.fetchMediaCardData()
        else if (sess === 'playlists') this.fetchPlaylistData()
      } else return -1

    },
    async fetchMediaCardData() {
      this.isLoading = true
       this.fetchGet.getJSON(`/user/${ this.$route.params.uid }/videos`, (data) => {
        this.isLoading = false
        this.mediaCardData = data._videos_
      })
    },
    async fetchPostCardData() {
      this.isLoading = true
      this.fetchGet.getJSON(`/user/${ this.$route.params.uid }/posts`, (data) => {
        this.isLoading = false
        this.postCardData = data.posts
      })
    },
    async fetchFeedCardData(feed, session = "videos") {

      this.errorMsg = false
      this.isLoading = true
      this.currentSession = false
      this.currentUserSession = session

      let request = `/users/${ this.$route.params.uid }/getUserEngagement?session=${ session }&feed=${ feed }`

      if (this.$route.params.userSession == "playlist")
        request = `/users/${ this.$route.params.uid }/getUserEngagement?session=videos&feed=playlist&list=${ this.$route.query.list }`

      this.fetchGet.getJSON(request, (data) => {
        this.isLoading = false
        this.feedCardData = data
      })

    },
    async fetchPlaylistData() {
      this.isLoading = true
      this.fetchGet.getJSON(`/playlists/getPlaylists?uid=${ this.$route.params.uid }`, (data) => {
        this.isLoading = false

        if (data.errorMsg !== false) this.errorMsg = data.errorMsg

        this.playlistCardData = data.playlists
        this.playlistVideoIDs = data.playlist_video_ids
        this.playlistThumbnails = data.playlist_thumbnails
        this.playlistVideoCount = data.playlist_video_count

      })
    },
  },
  mounted() {
    // this.fetchMediaCardData()
  },
  created() {

    this.fetchGet.getJSON(`/users/${ this.$route.params.uid }`, (data) => {
      this.profileData = data
    })

    if (typeof this.$route.params.session !== 'undefined') {
      this.checkSession(this.$route.params.session)
    } else if (typeof this.$route.params.userSession !== 'undefined') {
      this.fetchFeedCardData(this.$route.params.userSession)
    } else this.fetchMediaCardData()

  },
  beforeCreate() {
    document.body.className = 'main'
  },
}
