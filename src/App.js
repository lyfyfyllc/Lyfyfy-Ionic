import PageLog from '@/components/PageLog/PageLog.vue'

export default {
  name: 'App',
  components: {
    PageLog,
  },
  data() {
    return {
      mainPages: [],
      showSidebar: false,
    }
  },
  watch: {

  },
  methods: {
    navigate(path) {
      this.$router.push(path)
    }
  },
  created() {
    this.$store.commit('getAuthUser')
  },
  mounted() {
  },
}
