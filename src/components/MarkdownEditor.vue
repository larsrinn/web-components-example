<template>
  <div id="editor" :class="$style.editor">
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
.editor {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
