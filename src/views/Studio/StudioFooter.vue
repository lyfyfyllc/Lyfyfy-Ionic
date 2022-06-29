<template>
  <div class="ST_footer_main_container">
    <div class="ST_footer_container">

      <div class="ST_footer_actions_container">
        <div class="ST_footer_back_container">
          <button @click="navBack" class="ST_footer_back_btn"><i class="fas fa-long-arrow-alt-left"></i></button>
        </div>
        <div class="ST_footer_menu_container">
          <button @click="toggleStudioSidebar" class="ST_footer_menu_btn"><i class="fas fa-bars"></i></button>
        </div>
        <div class="ST_footer_forward_container">
          <button @click="navForward" class="ST_footer_forward_btn"><i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
  .ST_footer_main_container {
    width: 100%;
    position: sticky;
      bottom: 0;
    text-align: center;
    background: rgba(44, 44, 84, 1);
    border-top: solid 2px rgba(71, 71, 135, 1);
  }

  .ST_footer_container {
    width: 50%;
    margin: auto;
  }

  .ST_footer_actions_container {
    display: flex;
    padding: 1em 0;
  }

  .ST_footer_actions_container div {
    width: 40px;
    height: 40px;
    margin: auto;
  }

  .ST_footer_actions_container div button {
    width: 100%;
    height: 100%;
    font-size: 1.6em;
    border-radius: 50%;
  }

  @media only screen and (max-width: 600px) {
    .ST_footer_container {
      width: 100%;
    }
  }
</style>

<script>
  export default {
    props: [
      'navBack',
      'navForward',
      'studioRestart',
      'studioSession',
      'studioTracker',
      'toggleStudioSidebar',
    ],
    data() {
      return {

      }
    }
  }
</script>
