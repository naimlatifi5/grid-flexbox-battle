<template>
  <div id="app">
     <router-link to="/">Home</router-link> |
      <router-link to="/Grid">Grid</router-link> |
      <router-link to="/CssLayouts">CSS old aproach vs Grid</router-link> |
      <router-link to="/challenge1">Grid-Challenge#1</router-link> |
      <router-link to="/challenge2">Grid-Challenge#2</router-link> |
      <router-link to="/Flexbox">Flexbox</router-link> |
      <router-link to="/flexbox-challenge1">Flexbox-Challenge1</router-link> |
      <router-link to="/flexbox-challenge2">Flexbox-Challenge2</router-link> |
      <router-link to="/main">Main challenge</router-link>
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
img {
  //width: 100%;
  width: 600px;
}

  .bg-container {
      position: relative;
      min-height: 18rem;
      color: #5d5d5d;
      border: .5rem solid red;
      border-radius: .2rem;
      background-color: back;
      max-width: 500px;
      margin: 0 auto;
      width: 100%;
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

      &--7 {
        background-color: fuchsia;
      }
      &--8 {
        background-color: goldenrod;
      }
      &--9 {
        background-color: cornflowerblue;
      }
    }

    .button {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &.button-primary {
      color: #fff;
      background-color: #337ab7;
      border-color: #2e6da4;
    }
}
</style>
