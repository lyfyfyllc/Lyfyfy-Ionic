<template>
  <div class="ST_start_main_container">
    <div class="ST_start_container">
      <div class="ST_start_header_container ST_headers_container">
        <h2 class="ST_start_header ST_headers">Welcome To Studio!</h2>
      </div>
      <div class="ST_start_action_container">
        <div class="ST_start_btn_container">
          <button :disabled="!$store.state.isActiveUserLoggedIn" @click="changeSession('type')" class="ST_start_btn"><i class="fas fa-long-arrow-alt-right"></i> Let's Get Started!</button>
        </div>
        <div class="ST_info_container">
          <button class="ST_info_btn"><i class="fas fa-info-circle"></i> Tell Me More!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .ST_start_main_container {

  }

  .ST_start_container {

  }

  .ST_start_action_container div {
    width: 20em;
    margin: 3em auto;
  }

  .ST_start_action_container div button {
    width: 100%;
    padding: 1em 0;
    border-radius: 100em;
    font-family: 'Varela Round', sans-serif;
  }

  .ST_start_action_container div button i {
    margin-right: 1em;
  }
</style>

<script>
  export default {
    props: [
      'changeSession',
    ],
    data() {
      return {

      }
    }
  }
</script>
