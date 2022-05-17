import FetchGet from '@/Functions/FetchGet.js'
import Categories from '@/Functions/Categories.js'

export default {
  data() {
    return {
      catCopy: [],
      selected: [],
      htmlAlpha: '0',
      letters: false,
      htmlAlphaID: '0',
      categories: false,
      cats: this.Categories(),
      fetchGet: new FetchGet(
        this.$store.state.MainServer,
        this.$store.state.apiToken
      ),
    }
  },
  methods: {
    Categories,
    removeCategory(e, cat) {

      let newCats = []

      this.selected.filter((c) => {
        if (c !== cat) newCats.push(c)
      })
      this.selected = newCats

      if (!this.selected.length) this.$refs.FL_container.onwheel = null
    },
    selectCategory(e, cat) {

      if (this.selected.includes(cat)) {
        this.removeCategory(e, cat)
      } else {
        this.selected.unshift(cat)
      }
    },
    scrollView(ltr) {
      let l_Index = 0
      let c_Index = 0

      for (let i = 0; i < this.letters.length; i++) {
        if (this.letters[i].toUpperCase() === ltr.toUpperCase()) {
          l_Index = i
          break;
        }
      }

      for (let i = 0; i < this.catCopy.length; i++) {
        if (this.catCopy[i][0].toUpperCase() === ltr.toUpperCase()) {
          c_Index = i
          break
        }
      }
      
      let catSize = 83
      if (window.chrome) catSize = 83
      else if (window.mozInnerScreenX) catSize = 84

      this.$refs.FL_container.scrollTo(0, (50 * (l_Index)) + ((c_Index) * catSize))
    },
    getHTMLID(cat) {
      if (this.htmlAlphaID.toUpperCase() !== cat[0].toUpperCase()) {
        this.htmlAlphaID = cat[0].toUpperCase()
        return this.htmlAlphaID
      }
    },
    printHTMLALpha(cat) {
      if (this.htmlAlpha.toUpperCase() !== cat[0].toUpperCase()) {
        this.htmlAlpha = cat[0].toUpperCase()
        return this.htmlAlpha
      }
    },
    scrollAlphas(e) {
      let delta = 0
      this.$refs.FL_container.onwheel = () => { return false }

      this.$refs.FL_letter_container.onwheel = ex => {
        if (ex.deltaY > 0) delta = 40
        else if (ex.deltaY < 0) delta = -40
        this.$refs.FL_letter_container.scrollLeft += delta
      }
    },
    scrollSelected(e) {
      let delta = 0
      this.$refs.FL_container.onwheel = () => { return false }

      this.$refs.FL_selected_categories_container.onwheel = ex => {
        if (ex.deltaY > 0) delta = 40
        else if (ex.deltaY < 0) delta = -40
        this.$refs.FL_selected_categories_container.scrollLeft += delta
      }
    },
    removeScroll(e) {
      e.target.onwheel = null
      this.$refs.FL_container.onwheel = null
    }
  },
  created() {

    let hold = ''
    let ltrs = []
    let builtCats = []
    this.categories = false

    this.cats.forEach((cat, i) => {
      if (hold.toUpperCase() !== cat.category[0].toUpperCase()) {
        hold = cat.category[0].toUpperCase()
        ltrs.push(hold)
        builtCats.push(hold)
      }
      builtCats.push(cat.category)
      if (cat.category.length > 1) this.catCopy.push(cat.category)
    });

    this.letters = ltrs
    this.categories = builtCats

  }
}
