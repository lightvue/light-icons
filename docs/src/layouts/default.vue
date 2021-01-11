<template>
  <div class="wrapper">
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>
<script>
import "../../../dist/light-icon.css";
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';

export default {
  components: { AppFooter, AppHeader },

}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.wrapper {
    background:#F5F8FA ;
    padding:100px 0 ;
}
</style>
