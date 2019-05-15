<template>
  <div id="app">
     <router-link to="/">Home</router-link> |
      <router-link to="/Grid">Grid</router-link> |
      <router-link to="/CssLayouts">CSS old aproach vs Grid</router-link> |
      <router-link to="/Flexbox">Flexbox</router-link> |
      <router-link to="/challenge1">Challenge#1</router-link> |
      <router-link to="/challenge2">Challenge#2</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box-color {

      color: white;
      padding: 10px;
      margin: 1px;

      &--1 {
        background-color: aqua;
      }

      &--2 {
        background-color:blue;
      }

      &--3 {
        background-color:brown;
      }

      &--4 {
        background-color:darkcyan;
      }

      &--4 {
        background-color:darkslategrey;
      }

      &--5 {
        background-color:hotpink;
      }

      &--6 {
        background-color:olivedrab;
      }
    }
</style>
