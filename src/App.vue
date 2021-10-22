<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from './components/MainLayout.vue';

@Component({
  components: {
    MainLayout,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
html,
body {
  margin: 0;
  height: 100%;
  background: #f1f1f1;
}
ul,
li {
  text-indent: 0;
  list-style-type: none;
}
a {
  color: inherit;
  text-decoration: inherit;
}

#app {
  position: relative;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: $primaryColor;
  background: $bgColor;
}
@media (max-width: 480px) {
  #app {
    width: 100vw;
    min-height: 100vh;
    // height: 100%;
  }
}
@media (min-width: 481px) {
  body {
    overflow: hidden;
  }
  #app {
    overflow-y: auto;
    max-width: 400px;
    width: 400px;
    margin: 24px auto;
    height: calc(100% - 48px);
    border-radius: 5px;
    box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 10%);
  }
}
</style>
