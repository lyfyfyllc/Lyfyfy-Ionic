<template>
  <div ref="LY_page_log_container" class="LY_page_log_container">
    <div ref="LY_page_log" class="LY_page_log">
      <!-- ENTER ERROR / SUCCESS MESSAGE HERE -->
      {{ $store.state.logMsg }}
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {
        msg: 'OH, NO!',
      }
    }
  }
</script>
