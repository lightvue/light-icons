<template>
  <div class="code-wrap">
    <code-prism :lang="lang">
      <slot></slot>
    </code-prism>
    <copy-button :text="getMarkup"></copy-button>
  </div>
</template>
<script>
import CodePrism from './CodePrism.vue'
import CopyButton from './CopyButton.vue'
export default {
  name: 'DocCode',
  components: {
    CodePrism,
    CopyButton,
  },
  props: {
    lang: {
      type: String,
      default: 'html',
    },
  },
  methods: {
    getMarkup() {
      return this.$el.querySelector('pre').innerText
    },
  },
}
</script>

<style>
.code-wrap {
  position: relative;
  border-bottom: 1px solid #edf2f6;
  border-left: 4px solid #607b89;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
