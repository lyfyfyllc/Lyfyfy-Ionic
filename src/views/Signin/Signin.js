import PageLog from '@/views/Signin/PageLog.vue'
import SigninEmail from '@/views/Signin/SigninEmail.vue'
import SigninPassword from '@/views/Signin/SigninPassword.vue'

export default {
  components: {
    PageLog,
    SigninEmail,
    SigninPassword,
  },
  data() {
    return {
      SigninSession: 'email',
    }
  },
  methods: {
    page_log(msg, el) {

      this.$store.commit('setLogMsg', msg)
      this.$store.commit('setSigninError')
      el.style.borderColor = "red"
      setTimeout(() => {
        this.$store.commit('sunsetSigninError')
        el.style.borderColor = "rgba(108, 92, 231, .8)"
      }, 4000)

    },
    toggleSigninSession() {
      if (this.SigninSession === 'email') {

        this.SigninSession = ''
        setTimeout(() => { this.SigninSession = 'password' }, 200)

      } else if (this.SigninSession === 'password') {

        this.SigninSession = ''
        setTimeout(() => { this.SigninSession = 'email' }, 200)

      }
    },
    reset() {

      window.sessionStorage.setItem('sessionEmail', '')
      window.sessionStorage.setItem('sessionPassword', '')

      this.SigninSession = ''
      setTimeout(() => { this.SigninSession = 'email' }, 200)

    }
  },
  mounted() {

  },
  beforeCreate() {

    // document.body.className = 'signin'
    window.sessionStorage.setItem('sessionEmail', '')
    window.sessionStorage.setItem('sessionPassword', '')

  },
  beforeUnmount() {

    window.sessionStorage.setItem('sessionEmail', '')
    window.sessionStorage.setItem('sessionPassword', '')

  },
}
