export default {
  data() {
    return {

    }
  },
  methods: {
    insertTextHTML(e) {
      if (e.keyCode == 9) {
        e.preventDefault()
        document.execCommand("insertHTML", false, "&emsp;")
      } else if (e.keyCode == 13) {
        e.preventDefault()
        document.execCommand("insertLineBreak")
      }
    },
  },
}
