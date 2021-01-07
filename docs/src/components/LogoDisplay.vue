<template>
  <div class="icons">
    <div class="search-container">
      <div class="search">
        <input placeholder="Search Icons" v-model="query" type="text" />
        <i class="light-icon-search search-icon"></i>
      </div>
    </div>
    <ul>
      <li v-for="iconName in filteredList" :key="iconName">
        <i :class="`light-icon-${iconName}`"></i>
        <p class="name">{{ iconName }}</p>
      </li>
    </ul>
    <div class="footer">
      Licensed under MIT. (Yes it's free and
      <a href="https://github.com/plug-ui">open-sourced</a>)
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiPath: '/light-icon_list.json',
      query: '',
      allIcons: [],
    }
  },
  computed: {
    filteredList: function () {
      return this.allIcons.filter( (val) => {
        return val.indexOf(this.query) !== -1
      })
    },
  },
  created() {
    if (this.apiPath) {
      this.fetchAPI()
    }
  },
  methods: {
    async fetchAPI() {
      fetch(`${this.apiPath}`)
        .then( _ => {
          return _.json()
        })
        .then( response => {
          this.allIcons = response
        })
    },
    async copy(text) {
      copyToClipboard(text)
        .then(() => {
          this.copied = true
          clearTimeout(this.timer)
          setTimeout(() => {
            this.copied = false
            this.timer = null
          }, 1000)
        })
        .catch(() => {})
    },
  },
}
</script>

<style scoped lang="scss">
.icons {
  max-width: 1190px;
  margin: 0 auto;
  color: #566d79;
  background-color: #f5f8fa;
  font: 12px/1.5 roboto, arial, \5b8b\4f53, sans-serif;
}
.icons ul {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}
.icons ul li {
  vertical-align: top;
  width: 150px;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  padding: 10px 0 10px 0;
  margin: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.icons ul li:hover {
  background-color: #607c8a;
  color: #fff;
}
i {
  font-size: 50px;
}
.name {
  margin: 0 0 10px 0 !important;
}
/* Search Bar */
input {
  outline: none;
  &:focus {
    outline: none;
  }
}
.search-container {
  position: relative;
  width: 400px;
  margin: auto;
  padding: 40px;
}
.focus .content-results {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.search i {
  position: absolute;
  right: 50px;
  font-size: 1.5rem;
  transition: all 0.25s ease;
  opacity: 0.5;
}
.search input {
  width: 100%;
  padding: 15px 40px 15px 20px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 20px;
  transition: all 0.25s ease;
}
.search input:focus {
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
}
.search input:focus ~ i {
  opacity: 1;
}
.footer {
  text-align: center;
  padding: 90px 0 10px 0;
  a {
    text-align: center;
    padding: 10px 0 90px 0;
    color: #696969;
  }
}
@media only screen and (max-width: 400px) {
  .search-container {
    position: relative;
    width: 250px;
  }
}
</style>
