export default {
  data() {
    return {

    }
  },
  methods: {
    signout() {
      window.localStorage.setItem('apiKey', '')
      window.localStorage.setItem('username', '')
      window.localStorage.setItem('clientSideID', '')

      window.location.reload()
    }
  }
}
