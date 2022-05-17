import getMediaTime from '@/Functions/getMediaTime.js'
import getObjectKey from '@/Functions/getObjectKey.js'
import dateDifference from '@/Functions/dateDifference.js'

export default {
  props: [
    'post',
    'postText',
  ],
  data() {
    return {

    }
  },
  methods: {
    getObjectKey,
    getMediaTime,
    dateDifference,
  }
}
