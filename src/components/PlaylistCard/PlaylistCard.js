import getObjectKey from '@/Functions/getObjectKey.js'

export default {
  props: [
    'playlist',
    'playlistVideoIDs',
    'playlistThumbnails',
    'playlistVideoCount',
  ],
  data() {
    return {

    }
  },
  methods: {
    getObjectKey,
  }
}
