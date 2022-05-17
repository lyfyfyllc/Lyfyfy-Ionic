<template>
  <div class="LY_SI_main_container">
      <div ref="LY_SI_container" class="LY_SI_container">
        <div class="LY_SI_body_container">

          <div class="LY_SI_header_container">
            <h1>Welcome Back To Lyfyfy!!</h1>
            <h3>Let's Continue To Take Back Our Freedom Of Speech!!</h3>
            <h3>Please Sign In!</h3>
          </div>

          <div class="LY_SI_body" ref="LY_SI_body">
            <!-- PROCESS -->
            <div class="LY_SI_body_process" ref="LY_SI_body_process">
              <transition appear name="slide">
                <div v-if="SigninSession === 'email'">
                  <SigninEmail :toggleSigninSession="toggleSigninSession"
                               :page_log="page_log" :reset="reset" />
                </div>
              </transition>
              <transition name="slide">
                <div v-if="SigninSession === 'password'">
                  <SigninPassword :toggleSigninSession="toggleSigninSession"
                                  :page_log="page_log" :reset="reset" />
                </div>
              </transition>
            </div>
          <!-- PROCESS -->
        </div>
      </div>
    </div>
  </div>

  <input class="LY_SI_hidden_home" type="text" name="LY" value="home" hidden>
  <input class="LY_SI_hidden_review" type="text" name="LY" value="review" hidden>

  <transition appear name="page_log">
    <div v-show="$store.state.SigninError" class="">
      <PageLog />
    </div>
  </transition>
  <!-- <div ref="LY_page_log_container" class="LY_page_log_container">
    <div ref="LY_page_log" class="LY_page_log">
      error moving on..
    </div>
  </div> -->
</template>

<!-- <style src="../../styles/reset.css"></style> -->
<style scoped src="./Signin.css"></style>

<script src="./Signin.js" charset="utf-8"></script>
