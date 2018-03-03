<template>
  <div id="editor">
    <h3 :class="$style.red">Markdown Editor</h3>
    <textarea v-model="input"></textarea>
    <vue-markdown :source="input"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'MarkdownEditor',
  data () {
    return {
      input: '# Hello'
    }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style module>
.red {
  color: red;
}
</style>
