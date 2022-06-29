<template>
  <div class="ST_Main_Container">
    <div class="ST_Container">

      <StudioSideBar :showStudioSidebar="showStudioSidebar" :toggleStudioSidebar="toggleStudioSidebar"
      :studioTracker="studioTracker" :endSession="endSession" :changeSession="changeSession"
      :closeSidebar="closeSidebar" :studioRestart="studioRestart" />

      <div class="ST_header_main_container">
        <div class="ST_header_container">

          <div class="ST_home_container">
            <button @click="changeSession('')" class="ST_home_btn"><i class="fas fa-cloud"></i> LYFYFY STUDIO</button>
          </div>

        </div>
      </div>

      <div class="ST_body_main_container">
        <div class="ST_body_container"
        :style="studioSession === 'categories' || studioSession === 'postReview' ? 'top: 0; transform: none;' : 'top: 50%; transform: translateY(-50%);'">

          <StudioStart v-if="!studioSession" :changeSession="changeSession" />

          <StudioType v-else-if="studioSession === 'type'" :addType="addType" :changeSession="changeSession" />

          <StudioPostText v-else-if="studioSession === 'postText'"
          :addPostText="addPostText" :changeSession="changeSession"
          :displayPageLog="displayPageLog" :studioTracker="studioTracker" />

          <StudioPostMedia v-else-if="studioSession === 'postMedia'"
          :changeSession="changeSession" :studioTracker="studioTracker"
          :displayPageLog="displayPageLog" :addPostMedia="addPostMedia"
          :studioData="studioData" />

          <StudioCategories v-else-if="studioSession === 'categories'"
          :addCategories="addCategories" :displayPageLog="displayPageLog" />

          <StudioPostReview v-else-if="studioSession === 'postReview'"
          :studioData="studioData" :studioTracker="studioTracker" />

        </div>
      </div>

    </div>
  </div>

  <StudioFooter :studioRestart="studioRestart" :toggleStudioSidebar="toggleStudioSidebar"
  :navForward="navForward" :navBack="navBack" :studioSession="studioSession"
  :studioTracker="studioTracker" />

  <StudioPageLog :showPageLog="showPageLog" :pageLogMessage="pageLogMessage" />

</template>

<style src="./Studio.css"></style>

<script src="./Studio.js"></script>
