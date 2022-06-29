<template>
  <div class="ST_categories_main_container">
    <div class="ST_categories_container">

      <div v-if="selectedCategories.length >= 1" class="ST_categories_finish_container">
        <button @click="addCategories(selectedCategories)" class="ST_category ST_categories_finish"><i class="fas fa-check-circle"></i></button>
      </div>
      <div v-if="selectedCategories.length >= 1" class="ST_selected_categories_container">
        <div v-for="cat in selectedCategories" class="ST_selected_category_container" key="cat">
          <button @click="addCategory($refs[cat][0], cat)" class="ST_selected_category">{{ cat }}</button>
        </div>
      </div>

      <div class="ST_categories_header_container ST_headers_container">
        <h3 class="ST_categories_header ST_headers">Now Pick Some Categories...</h3>
      </div>

      <div class="ST_categories_list_container ST_action_container">
        <div v-for="cats in categories" class="ST_categories" :key="cats.category">
          <button @click="addCategory($event.target, cats.category)" class="ST_category ST_action_btn" :ref="cats.category">{{ cats.category }}</button>
        </div>
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
    display: flex;
    max-width: 100%;
    position: sticky;
      top: 54px;
    overflow-x: scroll;
    background: rgba(64, 64, 122, 1);

    scrollbar-width: none;
  }

  .ST_selected_category_container {
    text-align: center;
  }

  .ST_selected_category {
    margin: 5px;
    padding: 1em 2em;
    border-radius: 100em;
    text-transform: uppercase;
  }

  .ST_categories_finish_container {
    width: 100%;
    background: #000;
    position: sticky;
      top: 0;
  }

  .ST_categories_finish {
    color: #eee;
    width: 100%;
    padding: 10px;
    font-size: 30px;
    background: rgba(162, 155, 254, 1);
  }
</style>

<script>
  import Categories from '@/Functions/Categories.js'

  export default {
    props: [
      'addCategories',
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
    }
  }
</script>
