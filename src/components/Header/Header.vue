<template>

  <header class="HD_main_container">
    <div class="HD_container">
      <nav class="HD_nav_container">
        <div class="HD_nav">
          <div class="HD_home_container">
            <button @click="$router.push('/')" class="HD_home_btn" name="home" title="Home"><img class="HD_logo" src="/LyfyfyLogoLite.png"></button>
          </div>
          <div class="HD_menu_container">
            <button @click="$store.commit('toggleSidebar')" ref="HD_menu_btn" class="HD_menu_btn" name="menu" title="Sidebar"><i class="fas fa-bars"></i></button>
          </div>
          <div class="HD_search_wrapper">
            <div class="HD_main_search_container">
              <aside class="HD_search_container">
                <input class="HD_search" type="search" name="main_search" placeholder="Search Videos..." spellcheck="false">
              </aside>
              <aside class="HD_search_btn_container">
                <button class="HD_search_btn" name="main_search_btn"><i class="fas fa-search"></i></button>
              </aside>
            </div>
          </div>
          <div v-if="$store.state.isActiveUserLoggedIn" class="HD_profile_container">
            <button @click="$router.push(`/profile/${ $store.state.clientSideID }/videos`)" class="HD_profile_btn HD_account_btn" :title="$store.state.username">{{ $store.state.username.substr(0, 1).toUpperCase() }}</button>
          </div>
          <div v-else class="HD_enter_container">
            <button @click="nav(`signin`)" data-href="/signin" class="HD_enter_btn HD_account_btn" title="Enter"><i class="fas fa-user-circle"></i></button>
          </div>
          <div class="HD_homeSession_container">
            <button v-if="$route.params.homeSession === 'videos' || !$route.params.homeSession" @click="toggleHomeContent('posts')" class="HD_posts_btn" title="posts"><i class="fas fa-clipboard"></i></button>
            <button v-if="$route.params.homeSession === 'posts'" @click="toggleHomeContent('videos')" class="HD_videos_btn" title="videos"><i class="fas fa-video"></i></button>
          </div>
          <div class="HD_options_container">
            <button @click="$store.commit('toggleOptions')" class="HD_options_btn" title="Menu"><i class="fas fa-ellipsis-v"></i></button>
          </div>
        </div>
      </nav>
    </div>
  </header>

</template>

<script src="./Header.js"></script>

<style src="./Header.css"></style>
