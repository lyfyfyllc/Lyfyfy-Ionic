export default {
  name: 'HeaderComp',
  props: [
    'toggleSidebar'
  ],
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    nav(where) {
      window.location.href = `${ window.location.protocol }//${ window.location.host }/${ where }`
    },
    toggleHomeContent(session) {
      if (session === "videos") {
        this.$router.push('/videos')
        this.$store.commit('setHomeSession', 'videos')
      } else if (session === "posts") {
        this.$router.push('/posts')
        this.$store.commit('setHomeSession', 'posts')
      }
    }
  },

}
