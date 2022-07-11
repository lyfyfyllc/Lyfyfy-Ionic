<template>
  <div class="ST_categories_main_container">
    <div class="ST_categories_container">

      <div v-if="selectedCategories.length >= 1" :style="'background:' + themeColor_2" class="ST_selected_categories_container">
        <!-- <div v-for="cat in selectedCategories" class="ST_selected_category_container" key="cat"> -->
          <button v-for="cat in selectedCategories" @click="addCategory($refs[cat][0], cat)" key="cat" class="ST_selected_category">{{ cat }}</button>
        <!-- </div> -->
      </div>

      <div class="ST_categories_header_container ST_headers_container">
        <h3 class="ST_categories_header ST_headers">Now Pick Some Categories...</h3>
      </div>

      <div class="ST_categories_list_container ST_action_container">
        <div v-for="cats in categories" class="ST_categories" :key="cats.category">
          <button @click="addCategory($event.target, cats.category)" class="ST_category ST_action_btn" :ref="cats.category">{{ cats.category }}</button>
        </div>
      </div>

      <div v-if="selectedCategories.length >= 1" class="ST_categories_finish_container">
        <button @click="addCategories(selectedCategories)" :style="'background:' + themeColor_1" class="ST_category ST_categories_finish"><i class="fas fa-check-circle"></i></button>
      </div>

    </div>
  </div>
</template>

<style>
  .ST_categories_header_container {
    padding-top: 1em;
  }

  .ST_selected_categories_container {
    width: 100%;
    z-index: 10;
    display: flex;
    max-width: 100%;
    position: sticky;
      top: 0;
    overflow-x: scroll;
    text-align: center;
    background: rgba(71, 71, 135, 1);

    scrollbar-width: none;
  }

  .ST_selected_category_container {
    text-align: center;
  }

  .ST_selected_category {
    margin: 5px auto;
    padding: 1em 2em;
    border-radius: 100em;
    text-transform: uppercase;
  }

  .ST_categories_finish_container {
    width: 100%;
    background: #000;
    position: sticky;
      bottom: 0;
  }

  .ST_categories_finish {
    color: #eee;
    width: 100%;
    padding: 10px;
    font-size: 30px;
    background: rgba(64, 64, 122, 1);
  }
</style>

<script>
  import Categories from '@/Functions/Categories.js'

  export default {
    props: [
      'getColor',
      'themeColor_1',
      'themeColor_2',
      'addCategories',
      'studioTracker',
      'displayPageLog',
    ],
    data() {
      return {
        categories: Categories(),
        selectedCategories: [],
      }
    },
    methods: {
      addCategory(el, cat) {
        let newArr = []
        if (!this.selectedCategories.includes(cat)) {
          if (this.selectedCategories.length === 5) {
            this.displayPageLog("You only get 5 of these, so choose wisely...")
            return
          }
          this.selectedCategories.push(cat)
          el.style.color = "#eee"
          el.style.background = "rgba(112, 111, 211,1.0)"
        } else {
          el.style.color = ""
          el.style.background = ""
          this.selectedCategories.filter((category) => {
            if (cat !== category) newArr.push(category)
          })
          this.selectedCategories = newArr
        }
      }
    },
    created() {
      let cats = this.studioTracker[this.studioTracker.type].categories
      if (cats) this.selectedCategories = cats
    }
  }
</script>
