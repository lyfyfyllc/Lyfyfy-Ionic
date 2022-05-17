<template>
  <div class="MD_main_container">
    <div class="MD_container">

      <!-- <div class="MD_header_container">
        <div class="MD_header_tag">
          <h1>Video Information</h1>
        </div>
        <div class="MD_close_container">
          <button @click="toggleDescription" class="MD_close_btn"><i class="fas fa-times-circle"></i></button>
        </div>
      </div> -->

      <div class="MD_main_content">
        <div class="MD_header_tag">
          <h4>Description</h4>
        </div>
        <div class="MD_content">
          <p>{{ description.description }}</p>
        </div>

        <div class="MD_sub_content">
          <div class="MD_categories_container">
            <div class="MD_header_tag">
              <h4>Categories</h4>
            </div>
            <div class="MD_categories">
              <p>{{ description._video_.categories }}</p>
            </div>
          </div>
          <div class="MD_licenses_container">
            <div class="MD_header_tag">
              <h4>Licenses</h4>
            </div>
            <div class="MD_licenses">
              <p>Licenses</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style src="./MediaDescription.css"></style>

<script src="./MediaDescription.js" charset="utf-8"></script>
