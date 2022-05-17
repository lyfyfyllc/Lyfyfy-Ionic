import Reply from '@/components/Reply/Reply.vue'
import Filter from '@/components/Filter/Filter.vue'
import Footer from '@/components/Footer/Footer.vue'
import Options from '@/components/Options/Options.vue'
import HeaderComp from '@/components/Header/Header.vue'
import Comments from '@/components/Comments/Comments.vue'
import SidebarComp from '@/components/Sidebar/Sidebar.vue'
import PostMediaInfo from '@/components/PostMediaInfo/PostMediaInfo.vue'
import PostMediaPlayer from '@/components/PostMediaPlayer/PostMediaPlayer.vue'
import getObjectKey from '@/Functions/getObjectKey.js'
import FetchGet from '@/Functions/FetchGet.js'

export default {
  props: [
  ],
  components: {
    Reply,
    Filter,
    Footer,
    Options,
    Comments,
    HeaderComp,
    SidebarComp,
    PostMediaInfo,
    PostMediaPlayer,
  },
  data() {
    return {
      post: '',
      postData: '',
      isLoading: '',
      commentCount: 0,
      commentsData: [],
      showFullImage: false,
      fetchGet: new FetchGet(
        this.$store.state.MainServer,
        this.$store.state.apiToken
      ),
    }
  },
  watch: {

  },
  methods: {
    getObjectKey,
    toggleFullImage() {
      this.showFullImage = !this.showFullImage
    },
    async fetchPostPageData(id = false) {
      this.isLoading = true
      this.fetchGet.getJSON(`/posts/getPost?p=${ id || this.$route.query.p }&clientSideID=${ this.$store.state.clientSideID }`, (data) => {
        this.postData = data
        this.post = data._post_
        this.isLoading = false
        this.fetchComments()
      })
    },
    async fetchComments() {
      this.fetchGet.getJSON(`/comments/getComments?get_content_id=${ this.postData.get_content_id }&content_user_id=${ this.post.post_user_id }&session=posts`, (data) => {
        this.commentsData = data.user_comments
        this.commentCount = data.comments_count
      })
    }
  },
  created() {
    this.fetchPostPageData()
  },
  beforeCreate() {
    // document.body.className = 'main'
  },
}
