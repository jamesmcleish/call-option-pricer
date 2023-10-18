<template>
  <div id="app" class="initial">
    <router-view></router-view>
  </div>
</template>

<script>
import router from './index.js'
import 'tailwindcss/tailwind.css'

export default {
  name: 'App',
  created(){
    this.$router = router;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding:0;
}
</style>
