<template>
  <div class="footer">
    <div class="footer__row">
      Licensed under MIT. (Yes it's free and
      <a href="https://github.com/lightvue/light-icons">open-sourced</a>)
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
  margin: 0 auto;
  color: #566d79;
  font: 14px/1.5 roboto, arial, \5b8b\4f53, sans-serif;
}
.footer__row {
  text-align: center;
  padding: 90px 0 10px 0;
  a {
    color: #696969;
  }
}
</style>
