<template>

  <footer class="FT_main_container">
    <div class="FT_container">

      <div class="FT_tabs_main_container">
        <div class="FT_tabs_container">
          <div v-if="checkPosts()" @click="$router.push('/videos')" class="FT_videos_tab_container">
            <button class="FT_videos_tab_btn FT_tab_btn"><i class="fas fa-video"></i></button>
            <!-- <h3>videos</h3> -->
          </div>
          <div v-if="checkVideos()" @click="$router.push('/posts')" class="FT_posts_tab_container">
            <button class="FT_posts_tab_btn FT_tab_btn"><i class="fas fa-clipboard"></i></button>
            <!-- <h3>posts</h3> -->
          </div>
          <!-- <div v-if="contentFooter" @click="$router.push(`/${ contentFooter }`)" class="FT_home_tab_container">
            <button class="FT_home_tab_btn FT_tab_btn"><i class="fas fa-home"></i></button>
            <h3>home</h3>
          </div> -->
          <div @click="$store.commit('toggleFilter')" class="FT_search_tab_container">
            <button class="FT_search_tab_btn FT_tab_btn"><i class="fas fa-search"></i></button>
            <!-- <h3>search</h3> -->
          </div>
          <div @click="$store.commit('toggleOptions')" class="FT_options_tab_container">
            <button data-action="" class="FT_options_tab_btn FT_tab_btn"><i class="fas fa-ellipsis-v"></i></button>
            <!-- <h3>menu</h3> -->
          </div>
          <!-- <div class="FT_account_tab_container">
            <button v-if="$store.state.isActiveUserLoggedIn" @click="$router.push(`/profile/${ $store.state.clientSideID }/videos`)" class="FT_account_btn FT_tab_btn"><i class="fas fa-user-circle"></i></button>
            <button v-else @click="nav('/signin')" class="FT_account_btn FT_tab_btn"><i class="fas fa-sign-in-alt"></i></button>
          </div> -->
        </div>
      </div>

    </div>
  </footer>

</template>

<style src="./Footer.css"></style>

<script src="./Footer.js"></script>
