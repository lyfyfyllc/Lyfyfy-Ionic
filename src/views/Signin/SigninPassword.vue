<template>
  <!-- PASSWORD -->
  <div class="LY_SI_password_container">
    <div class="LY_password_input_container">
      <form class="" action="" method="post">
        <input type="text" hidden autocomplete="username">
        <input ref="LY_password_input" class="LY_password_input LY_input" type="password" name="LY_password" v-model="sessionPassword" placeholder="Your Password" autocomplete="new-password" required>
      </form>
    </div>
    <div class="LY_SI_password_info LY_SI_info">
      <p>Make sure this is kept secret in a cold dark area!</p>
      <div class="LY_SI_exit_container">
        <button @click="nav('')" class="LY_SI_home_btn" name="button">Go Home</button>
        <button class="LY_SI_create_btn" name="button" title="Sign In"><i class="fas fa-user-plus"></i></button>
        <button class="LY_SI_info_btn" name="button" title="Why?"><i class="fas fa-info-circle"></i></button>
        <button @click="reset" class="LY_SI_restart_btn" name="button">Restart</button>
      </div>
    </div>
    <div class="LY_SI_password_actions LY_SI_btns">
      <div class="LY_SI_password_nxt_container">
        <button @click="toggleSigninSession" class="LY_SI_password_back_btn" name="button"><i class="fas fa-arrow-circle-left"></i></button>
        <button @click="validatePassword" class="LY_SI_password_nxt_btn" name="button"><i class="fas fa-arrow-circle-right"></i></button>
      </div>
    </div>
  </div>

  <div class="LY_SI_info_card_container">
    <div class="LY_SI_info_card">
      <div class="LY_SI_info_card_header">
        <h2>Password Information</h2>
      </div>
      <div class="LY_SI_info_card_body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
    </div>
  </div>
  <!-- PASSWORD -->

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
        sessionPassword: ''
      }
    },
    methods: {
      validatePassword() {
        if (this.sessionPassword.length) {

          let formData = new FormData()

          formData.append('action', 'sign_in_data')
          formData.append('signin_session', 'password')
          formData.append('password', this.sessionPassword)
          formData.append('email', window.sessionStorage.getItem('sessionEmail'))

          fetch(`https://api.lyfyfy.com/FrontController/controller.php`, {
            method: "POST",
            body: formData
          })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.$store.commit('setAuthenticateUser', data)
            } else if (data.error) {
              this.page_log(data.errorMsg, this.$refs.LY_password_input)
            }
          })

        }

        else if (!this.sessionPassword.value) this.page_log("you forgot the password friend!!", this.$refs.LY_password_input)
      },
      nav(where) {
        window.location.href = `${ window.location.protocol }//${ window.location.host }/${ where }`
      }
    }
  }
</script>
