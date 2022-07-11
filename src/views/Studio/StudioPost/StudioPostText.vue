<template>
  <div class="ST_post_text_main_container">
    <div class="ST_post_text_container">

      <div class="ST_post_text_header_container ST_headers_container">
        <h3 class="ST_post_text_header ST_headers">So What's On Your Mind Champ...</h3>
      </div>

      <div class="ST_post_text_tag_container ST_tag_container">
        <p class="ST_post_char_limit ST_tag">Character Limit: {{ currCharCount }} / 1000</p>
      </div>

      <div class="ST_post_textarea_container">
        <div :style="'background: ' + themeColor_2" class="ST_post_textarea" placeholder="Hey!!!" spellcheck="false" contenteditable="true" ref="ST_post_textarea" v-html="studioTracker.post.postText"></div>
      </div>

      <div class="ST_post_text_action_container ST_action_container">
        <div class="ST_post_text_finish_container">
          <button :disabled="!textContent" @click="addPostText($refs.ST_post_textarea.innerText, true, $refs.ST_post_textarea.innerHTML)" class="ST_post_text_finish_btn ST_action_btn"><i class="fas fa-long-arrow-alt-right"></i> Add Comment</button>
        </div>
        <div class="ST_post_no_text_container">
          <button @click="addPostText($refs.ST_post_textarea.innerText, false, $refs.ST_post_textarea.innerHTML)" class="ST_post_no_text ST_action_btn"><i class="fas fa-comment-slash"></i> No Comment</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
  .ST_post_text_header_container {
    margin: 1em auto;
  }
  .ST_post_textarea_container {
    margin: 1em auto;
  }

  .ST_post_textarea_container {
    width: 60%;
    margin: auto;
    max-height: 50vh;
    overflow-y: scroll;

    scrollbar-width: none;
  }

  .ST_post_textarea {
    color: #eee;
    width: 100%;
    padding: 1em;
    font-size: 1.6em;
    text-align: left;
    border-radius: 8px;
    word-wrap: break-word;
    background: rgba(48, 51, 107, 0.7);
    font-family: 'Varela Round', sans-serif;
    border-bottom: solid 3px rgba(71, 71, 135, 1);
  }

  .ST_post_text_action_container {
    /* display: flex; */
  }

  .ST_post_text_finish_btn {
    /* color: #fff; */
  }

  .ST_post_no_text {

  }

  @media only screen and (max-width: 600px) {
    .ST_post_textarea_container {
      width: 95%;
      max-height: 40vh;
    }

    .ST_post_textarea {
      border-radius: 5px;
    }

    .ST_post_text_action_container {
      display: block;
    }
  }
</style>

<script>
  export default {
    props: [
      'studioData',
      'addPostText',
      'themeColor_1',
      'themeColor_2',
      'studioTracker',
    ],
    data() {
      return {
        charLimit: 1000,
        currCharCount: 0,
        textContent: false
      }
    },
    methods: {

    },
    mounted() {
      this.$refs.ST_post_textarea.focus()
      let selection = window.getSelection()
      selection.collapseToEnd()

      this.$refs.ST_post_textarea.addEventListener('keydown', (e) => {
        if (e.keyCode == 9) {
          e.preventDefault()
          document.execCommand('insertHTML', '', '&emsp;')
        } else if (e.keyCode == 13) {
          e.preventDefault()
          document.execCommand('insertLineBreak')
        }
      })

      this.currCharCount = this.$refs.ST_post_textarea.innerText.length

      this.$refs.ST_post_textarea.addEventListener('input', (e) => {
        this.currCharCount = e.target.innerText.length
        if (e.target.textContent.trim().length >= 3) this.textContent = true
        else this.textContent = false
      })
    }
  }
</script>
