export default {
  props: [
    'currentPage',
  ],
  data() {
    return {
      contentFooter: false,
    }
  },
  methods: {
    nav(where) {
      window.location.href = where
    },
    checkPosts() {
      if (this.$route.params.homeSession === "posts") return true
      else if (this.$route.name === "Session") return true
      else if (this.$route.name === "Video") return true
      else return false
    },
    checkVideos() {
      if (this.$route.params.homeSession === "videos") return true
      else if (!this.$route.params.homeSession &&
        (this.$route.name === "Home" || this.$route.name === "HomeSession")) return true
      else if (this.$route.name === "Post") return true
      else return false
    }
  },
  created() {

    if (this.currentPage) {

      this.contentFooter = this.currentPage

    }

  },
  mounted() {

  },
  unmounted() {

    this.contentFooter = false

  },
}
