<template>
  <div :style="$store.state.showPageLog ? 'transform: translateY(0)' : 'transform: translateY(100vh)'" class="AM_main_container">
    <div class="AM_container">
      <div class="AM_close_container">
        <button @click="$store.state.showPageLog = false" class="AM_close_btn"><i class="fas fa-times"></i> close</button>
      </div>
      <div class="AM_message">{{ $store.state.pageLogMessage }}</div>
      <div class="AM_link_container">
        <button @click="$store.state.showPageLog = false, $router.push($store.state.pageLogHref)"
          class="AM_link_btn">{{ $store.state.pageLogLink }}</button>
      </div>
    </div>
  </div>
</template>

<style>
  .AM_main_container {
    color: #fff;
    z-index: 530;
    position: fixed;
      left: 2em;
      bottom: 1em;
    transition: .4s;
    font-size: 1.6em;
    border-radius: 1em;
    text-align: center;
    transform: translateY(100vh);
    background: rgba(25, 42, 86, 1);
  }

  .AM_container {
    width: 100%;
    position: relative;
    /* display: flex; */
  }

  .AM_message {
    padding: 1em;
    font-style: italic;
    letter-spacing: 1px;
  }

  .AM_link_container {
    /* width: 20%; */
  }

  .AM_link_btn {
    padding: 1em;
    font-size: 1.2em;
    background: none;
    text-transform: uppercase;
    color: rgba(162, 155, 254, 1);
  }

  .AM_close_container {
    width: 100%;
    padding: 1em;
    text-align: right;
    position: relative;
  }

  .AM_close_btn {
    color: #fff;
    width: 100%;
    background: none;
    font-size: 1.2em;
    padding: 0.8em 0;
    font-weight: bold;
    border-radius: 0.5em;
    background: rgba(162, 155, 254, 1);
  }

  .AM_close_btn i {
    margin-right: 1em;
  }

  .AM_link_btn:hover,
  .AM_close_btn:hover {
    opacity: 0.8;
    color: rgba(255, 204, 204, 1);
  }

  @media only screen and (max-width: 750px) {
    .AM_main_container {
      left: 0;
      bottom: 0;
      width: 100%;
      border-radius: 0;
    }
  }
</style>
