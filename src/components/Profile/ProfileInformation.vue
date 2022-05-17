<template>
  <div class="UP_profile_info_container">

  <div class="UP_profile_header_container">
    <img class="UP_icon" src="/LyfyfyLogoLite.png">
    <p>{{ user.username.username }}</p>
  </div>

  <div class="UP_profile_data_container">

    <div class="UP_profile_data">
      <div class="UP_profile_data_wrapper">
        <div><i class="fas fa-circle"></i></div>
        <p>Joined {{ dateDifference(user.joined.joined) }}</p>
      </div>
      <div class="UP_profile_data_wrapper">
        <div><i class="fas fa-circle"></i></div>
        <p>{{ user.video_count['count'] }} Videos</p>
      </div>
      <div class="UP_profile_data_wrapper">
        <div><i class="fas fa-circle"></i></div>
        <p>{{ user.post_count['count'] }} Posts</p>
      </div>
      <div class="UP_profile_data_wrapper">
        <div><i class="fas fa-circle"></i></div>
        <p>{{ user.followers['count'] }} Followers</p>
      </div>
    </div>

    <div class="UP_support_container">
      <div class="UP_donate_container">
        <button class="UP_donate_btn" name="button">DONATE <i class="fas fa-hand-holding-usd"></i></button>
      </div>
      <div class="UP_follow_container">
        <button class="UP_follow_btn" name="button">FOLLOW <i class="fas fa-hand-holding-heart"></i></button>
      </div>
    </div>

  </div>

</div>
</template>

<script>
  import dateDifference from '@/Functions/dateDifference.js'

  export default {
    props: [ 'user' ],
    data() {
      return {

      }
    },
    methods: {
      dateDifference,
    }
  }
</script>
