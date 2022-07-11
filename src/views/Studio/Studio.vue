<template>
  <div class="ST_Main_Container">
    <div class="ST_Container">

      <StudioSideBar :showStudioSidebar="showStudioSidebar" :toggleStudioSidebar="toggleStudioSidebar"
      :studioTracker="studioTracker" :endSession="endSession" :changeSession="changeSession"
      :closeSidebar="closeSidebar" :studioRestart="studioRestart" />

      <div class="ST_header_main_container">
        <div class="ST_header_container">

          <div class="ST_home_container">
            <button @click="changeBackgroundColor()" class="ST_home_btn"><i class="fas fa-cloud"></i> LYFYFY STUDIO</button>
          </div>

        </div>
      </div>

      <div class="ST_body_main_container">
        <div class="ST_body_container"
        :style="studioSession === 'categories' || studioSession === 'postReview' ? 'top: 0; transform: none;' : 'top: 50%; transform: translateY(-50%);'">

          <StudioStart v-if="!studioSession || studioSession === 'start'" :changeSession="changeSession" />

          <StudioType v-else-if="studioSession === 'type'" :addType="addType"
          :changeSession="changeSession" :studioTracker="studioTracker" />

          <!-- USE INNERHTML UPON REVISIT -->
          <StudioPostText v-else-if="studioSession === 'postText'"
          :addPostText="addPostText" :changeSession="changeSession"
          :displayPageLog="displayPageLog" :studioTracker="studioTracker"
          :themeColor_1="themeColor_1" :themeColor_2="themeColor_2"
          :studioData="studioData" />

          <StudioPostMedia v-else-if="studioSession === 'postMedia'"
          :changeSession="changeSession" :studioTracker="studioTracker"
          :displayPageLog="displayPageLog" :addPostMedia="addPostMedia"
          :studioData="studioData" :studioSession="studioSession"
          :themeColor_1="themeColor_1" :themeColor_2="themeColor_2"
          :toggleLoader="toggleLoader" />

          <StudioCategories v-else-if="studioSession === 'categories'"
          :addCategories="addCategories" :displayPageLog="displayPageLog"
          :studioTracker="studioTracker" :getColor="getColor"
          :themeColor_1="themeColor_1" :themeColor_2="themeColor_2" />

          <StudioPostReview v-else-if="studioSession === 'postReview'"
          :studioData="studioData" :studioTracker="studioTracker"
          :studioSession="studioSession" :displayPageLog="displayPageLog"
          :uploadPost="uploadPost" />

        </div>
      </div>

    </div>
  </div>

  <StudioLoader v-if="showLoader" />

  <StudioFooter :studioRestart="studioRestart" :toggleStudioSidebar="toggleStudioSidebar"
  :changeSession="changeSession" :studioSession="studioSession" :videoSessions="videoSessions"
  :studioTracker="studioTracker" :postSessions="postSessions" />

  <StudioPageLog :showPageLog="showPageLog" :pageLogMessage="pageLogMessage"
  :closePageLog="closePageLog" />

</template>

<style src="./Studio.css"></style>

<script src="./Studio.js"></script>
