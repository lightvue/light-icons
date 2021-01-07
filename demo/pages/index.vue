<template>
  <div class="wrapper">
      <app-header/>
        <documentation />
        <logo-display />
          <div class="container">
              <div class="get-started">

              </div>
          </div>
      </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import Documentation from '../components/Documentation.vue'
import LogoDisplay from '../components/LogoDisplay.vue'
export default {
  components: {
    AppHeader,
    Documentation,
    LogoDisplay
    }
    }
</script>

<style>
.wrapper {
    background:#F5F8FA ;
    padding:100px 0 ;
}
</style>