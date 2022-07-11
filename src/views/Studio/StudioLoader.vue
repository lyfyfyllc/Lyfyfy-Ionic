<template>
  <div class="ST_loader_main_container">
    <div class="ST_loader_container">
      <div class="ST_loader_response_container">
        <div class="ST_loader_response">
          <h3 class="">Checking File Properties...</h3>
        </div>
        <div class="ST_loader_bar_container">
          <div class="ST_loader_bar">
            <div class="ST_loader_progress"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .ST_loader_main_container {
    color: #fff;
    width: 100%;
    z-index: 520;
    height: 100vh;
    position: fixed;
      top: 0;
      left: 0;
    background: rgba(0, 0, 0, 0.5);
    background: rgba(25, 42, 86, 0.5);
  }

  .ST_loader_container {
    text-align: center;
  }

  .ST_loader_response_container {
    position: relative;
      top: 50vh;
    transform: translateY(-50%);
  }

  .ST_loader_bar_container {
    width: 90%;
    height: 10px;
    margin: auto;
    max-width: 90%;
    overflow-x: hidden;
    border-radius: 10em;
    background: rgba(44, 44, 84, 1);
  }

  .ST_loader_progress {
    width: 30%;
    height: 10px;
    position: relative;
    border-radius: 10em;
    animation-duration: 2s;
    animation-name: progress;
    background: rgba(112, 111, 211, 1);
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }

  @keyframes progress {
    0% { left: -100%; }
    25% { left: 10%; }
    50% { left: 50%; }
    75% { left: 90%; }
    100% { left: 120%; }
  }
</style>

<script>
  export default {
    props: [
      'text',
    ],
    data() {
      return {

      }
    }
  }
</script>
