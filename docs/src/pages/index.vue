<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
      <installation />
      <template #icons> 
    <icons />
      </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '../collections/docs-card/DocsPageLayout.vue'
import Icons from '../examples/Icons'
import Installation from '../examples/Installation'

export default {
  components: { DocsPageLayout, Installation, Icons,},
}
</script>

<style></style>
