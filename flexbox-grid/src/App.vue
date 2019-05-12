<template>
  <div id="app">
     <router-link to="/">Home</router-link> |
      <router-link to="/Grid">Grid</router-link> |
      <router-link to="/CssLayouts">CSS old aproach vs Grid</router-link> |
      <router-link to="/Flexbox">Flexbox</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
