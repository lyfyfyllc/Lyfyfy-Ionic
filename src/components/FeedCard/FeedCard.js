import getObjectKey from '@/Functions/getObjectKey'
import getMediaTime from '@/Functions/getMediaTime'

export default {
  props: [
    'video',
    'playlistID',
  ],
  data() {
    return {
      FCCurrent: false,
    }
  },
  watch: {
    '$route.query.v': function(to, from) {
      if (this.video.video_id === this.$route.query.v) this.FCCurrent = true
      else this.FCCurrent = false
    }
  },
  methods: {
    getObjectKey,
    getMediaTime,
  },
  mounted() {

    if (this.video.video_id === this.$route.query.v) this.FCCurrent = true
    else this.FCCurrent = false

  }
}
