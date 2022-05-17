<template>
  <div @click.self="$store.commit('toggleFilter')" class="FL_main_container">
    <div class="FL_container" ref="FL_container">
      <div class="FL_search_container">
        <button @click="$store.commit('toggleFilter')" class="FL_close_btn" name="button"><i class="fas fa-times-circle"></i></button>
        <input class="FL_search" type="search" ref="FL_search" placeholder="Search Videos...">
        <button class="FL_search_btn" ref="FL_search_btn"><i class="fas fa-search"></i></button>
      </div>
      <!-- <div @mouseenter="scrollAlphas" @mouseleave="removeScroll" class="FL_letter_container" ref="FL_letter_container">
        <h3 v-for="letter in letters" @click="scrollView(letter)" class="FL_letter">{{ letter }}</h3>
      </div> -->
      <div class="FL_category_container">
        <div v-for="category in categories" class="">
          <h3 v-if="category.length === 1" class="FL_alpha_category" :id="'alpha-' + category">{{ category }}</h3>
          <h3 v-else @click="selectCategory(this, category)" :id="category" class="FL_category">{{ category }}</h3>
        </div>
      </div>
      <div class="FL_selected_category_container" v-if="selected.length">
        <div @mouseenter="scrollSelected" @mouseleave="removeScroll" v-show="selected.length" class="FL_selected_categories_container" ref="FL_selected_categories_container">
          <h3 @click="removeCategory(this, cat)" class="FL_selected_category" v-for="cat in selected">{{ cat }}</h3>
        </div>
        <div class="FL_search_category_btn_container">
          <button class="FL_search_category_btn" ref="FL_search_btn"><i class="fas fa-search"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Filter.css"></style>

<script src="./Filter.js"></script>
