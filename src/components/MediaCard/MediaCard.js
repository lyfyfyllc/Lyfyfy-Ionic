import getMediaTime from '@/Functions/getMediaTime.js'
import dateDifference from '@/Functions/dateDifference.js'
import VideoAnchor from '@/components/VideoAnchor/VideoAnchor.vue'

export default {
  props: [
    'video'
  ],
  components: {
    VideoAnchor
  },
  data() {
    return {
      showCaption: false,
      showVideoAnchor: false,
    }
  },
  methods: {
    getMediaTime,
    dateDifference,
    addToWatchLater() {

      if (!this.$store.state.isActiveUserLoggedIn) {
        this.$store.commit('ativatePageLog', {
          link: 'signin',
          msg: "You Should Totally Signin For That...",
          href: '/signin'
        })

        return
      }


    },
    toggleVideoAnchor() {
      this.showVideoAnchor = !this.showVideoAnchor
    },
    get_object_key(data) {
      data = data.replace("https://lyfyfy.nyc3.digitaloceanspaces.com/", '')
      let key = data.replace("//", '/')

      return `https://lyfyfy.nyc3.digitaloceanspaces.com/${ key }`;
    },
    toggleCaption() {
      this.showCaption = !this.showCaption

      if (!this.showCaption) this.$refs.MC_caption_container.style.transform = "translateY(20em)"
      else this.$refs.MC_caption_container.style.transform = "translateY(0)"
    }
  }
}
