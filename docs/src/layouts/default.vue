<template>
  <div class="docs-page">
    <div class="content-wrapper">
      <app-header />
      <app-navbar />
      <Nuxt />
      <app-footer />
    </div>
  </div>
</template>
<script>
import '../../../dist/light-icon.css'
import AppFooter from '@/components/common/AppFooter.vue'
import AppHeader from '@/components/common/AppHeader.vue'
import AppNavbar from '@/components/common/AppNavbar.vue'

export default {
  components: { AppFooter, AppHeader, AppNavbar },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #566d79;
}

a {
  color: #566d79;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.docs-page {
  background: #f5f8fa;
  padding: 100px 0 0;
}
.content-wrapper {
  max-width: 1180px;
  margin: auto;
  padding: 30px;
}
</style>
