<template>
  <div @click="closePageLog" :style="showPageLog ? 'transform: translateY(0)' : 'transform: translateY(20em)'" class="ST_page_log_main_container">
    <div class="ST_page_log_container">

      <div class="ST_page_log_message_container">
        <h3 class="ST_page_log_message">{{ pageLogMessage }}</h3>
      </div>

    </div>
  </div>
</template>

<style>
  .ST_page_log_main_container {
    cursor: pointer;
    transition: .4s;
    position: fixed;
      bottom: 0;
      left: 50%;
  }

  .ST_page_log_message_container {
    padding: 2em;
    transform: translateX(-50%);
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    background: rgba(52, 73, 94,1.0);
  }

  .ST_page_log_message {
    color: #eee;
    font-size: 20px;
    font-family: 'Varela Round', sans-serif;
  }

  @media only screen and (max-width: 600px) {
    .ST_page_log_main_container {
      width: 100%;
    }
  }
</style>

<script>
  export default {
    props: [
      'showPageLog',
      'closePageLog',
      'pageLogMessage',
    ],
    data() {
      return {

      }
    }
  }
</script>
