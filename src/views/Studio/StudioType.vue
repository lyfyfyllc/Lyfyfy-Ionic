<template>
  <div class="ST_type_main_container">
    <div class="ST_type_container">
      <div class="ST_type_header_container ST_headers_container">
        <h3 class="ST_type_header ST_headers">Pick Your Poison</h3>
      </div>
      <div class="ST_type_action_container ST_action_container">
        <div class="ST_type_post_container">
          <button @click="addType('post')" class="ST_type_post_btn ST_action_btn"><i class="fas fa-clipboard"></i> Post</button>
        </div>
        <div class="ST_type_video_container">
          <button @click="addType('video')" class="ST_type_video_btn ST_action_btn"><i class="fas fa-video"></i> Video</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style>

</style>

<script>

  export default {
    props: [
      'addType',
      'changeSession',
    ],
    components: {
    },
    data() {
      return {

      }
    }
  }
</script>
