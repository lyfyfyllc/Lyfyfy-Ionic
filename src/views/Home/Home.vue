<template>

  <HeaderComp />

  <SidebarComp
   v-if="$store.state.showSidebar" />

 <Options
   v-if="$store.state.showOptions" />

 <Filter v-if="$store.state.showFilter" />

  <div class="HP_main_container">
    <div class="HP_container">

      <div class="HP_AD_front_page_banner_container">
        <div class="HP_AD_front_page_banner">
          <!-- ADS -->
          <h1>Want Your AD Here!!</h1>
          <h1>Click Me!</h1>
        </div>
      </div>

      <div class="HP_content_main_container">
        <div v-if="isLoading">
          <div class="HP_loading_container">
            <h3 :style="`width: ${ setScale }%`" class="HP_loader"></h3>
          </div>
        </div>
        <div v-else class="HP_content_container" ref="HP_content_container">
          <div v-if="homeSession === 'videos' || !homeSession" class="MC_main_container">
            <MediaCard v-for="mediaCard in mediaCardData" :key="mediaCard.video_id" :video="mediaCard" />
            <div class="MC_show_more_container">
          		<button
              :disabled="maxxedOut"
              @click="loadMediaCardData(`restrictions=${ $store.state.restrictions }&page_num=${ pageNum++ }&apiToken=${ $store.state.apiToken }`)"
              :class="!maxxedOut ? 'MC_show_more_btn': 'MC_show_more_btn_disabled'">SHOW MORE VIDEOS <i class="fas fa-arrow-circle-right"></i></button>
          	</div>
          </div>
          <div v-else-if="homeSession === 'posts'" class="PC_container">
            <PostCard v-for="postCard in postCardData" :key="postCard.post_id" :postText="postCard.postText" :post="postCard.post" />
            <div class="PC_show_more_container">
              <button class="PC_show_more_btn">SHOW MORE POSTS <i class="fas fa-arrow-circle-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer :currentPage="`${ homeSession }`" />

</template>

<script src='./Home.js'></script>

<style src="./Home.css"></style>
