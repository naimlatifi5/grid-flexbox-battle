<template>
  <div class="grid">
    <h3>Welcome to grid template here</h3>
    <div class="container">
      <div class="box box--1">1</div>

      <div class="box box--2">2</div>

      <div class="box box--3">3</div>

      <div class="box box--4">4</div>

      <div class="box box--5">5</div>

      <div class="box box--6">6</div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .grid {
    .container {
      background-color: bisque;
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      // turning an element to grid container
      display: grid;
      // the two rows are 150px and 150px

      //grid-template-rows: 150px 150px;
      //grid-template-columns: 150px 150px 150px;

      // if you do not need to specify within px every column we can use repeat
      //grid-template-rows: repeat(2, 150px);
      //grid-template-columns: repeat(3, 150px);

      // we can use fr fraction unit like with flex-shring for filling the content on avaiable space

      grid-template-rows: repeat(2, 150px);
      //grid-template-columns: 1fr 2fr 1fr;

      // we can also use percentage for box column width

      // grid-template-columns: 50% 1fr 1fr;

      // we can use repeat together with fraction unit
      grid-template-columns: repeat(3, 2fr);
      // setting the gap between the rows and columns
      grid-row-gap: 30px;
      grid-column-gap: 30px;

    }
    .box {
      padding: 20px;
      color: white;

      &--1 {
        background-color: aqua;
        // position items
        grid-row-start: 2;
        grid-row-end: 2;
        grid-column-start: 3;
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
        grid-row: 1 / 2; // 1 grid start 2 - grid end
        grid-column:  2 / 3 ;
      }

      &--6 {
        background-color:olivedrab;
      }
    }
  }
</style>
