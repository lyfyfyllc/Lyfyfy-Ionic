<template>
  <div class="LY_SI_email_container">
    <div class="LY_email_input_container">
      <input ref="LY_email_input" class="LY_email_input LY_input" v-model="sessionEmail" type="email" placeholder="Your Email">
    </div>
    <div class="LY_SI_email_info LY_SI_info">
      <p>Please forgive me you have to remind me who you are again?</p>
      <div class="LY_SI_exit_container">
        <button @click="nav('')" class="LY_SI_home_btn">Go Home</button>
        <button class="LY_SI_create_btn" title="Create Profile"><i class="fas fa-user-plus"></i></button>
        <button class="LY_SI_info_btn" title="Why?"><i class="fas fa-info-circle"></i></button>
        <button @click="reset" class="LY_SI_restart_btn">Restart</button>
      </div>
    </div>
    <div class="LY_SI_email_actions LY_SI_btns">
      <div class="LY_SI_email_nxt_container">
        <button @click="validateEmail" class="LY_SI_email_nxt_btn"><i class="fas fa-arrow-circle-right"></i></button>
      </div>
    </div>
  </div>

  <div class="LY_SI_info_card_container">
    <div class="LY_SI_info_card">
      <div class="LY_SI_info_card_header">
        <h2>Email Information</h2>
      </div>
      <div class="LY_SI_info_card_body">
        <p>
          Information about a your email, blah blah blah.
      </p>
      </div>
    </div>
  </div>
</template>

<style src="./Signin.css"></style>

<script>
  export default {
    props: [
      'reset',
      'page_log',
      'toggleSigninSession',
    ],
    data() {
      return {
        sessionEmail: ''
      }
    },
    methods: {
      validateEmail() {
        if (!this.sessionEmail) return this.page_log("oohh...don't recognize this email...", this.$refs.LY_email_input);
        if (!this.testEmail()) return this.page_log("woah, woah!! somethings wrong here i can feel it...", this.$refs.LY_email_input)

        let formData = new FormData()

        formData.append('action', 'sign_in_data')
        formData.append('signin_session', 'email')
        formData.append('email', this.sessionEmail)

        fetch('https://api.lyfyfy.com/FrontController/controller.php', {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {

          if (data.error) {
            this.page_log(data.errorMsg, this.$refs.LY_email_input)
          } else if (data.success) {
            window.sessionStorage.setItem('sessionEmail', this.sessionEmail)
            this.toggleSigninSession()
          }


        })


      },
      testEmail() {
        let re = /\S+@\S+\.\S+/;

        if (this.sessionEmail.includes(" ")) return false;
        else return re.test(this.sessionEmail);
      },
      nav(where) {
        window.location.href = `${ window.location.protocol }//${ window.location.host }/${ where }`
      }
    },
    mounted() {
      if (sessionStorage.getItem('sessionEmail')) this.sessionEmail = sessionStorage.getItem('sessionEmail')
    },
  }
</script>
