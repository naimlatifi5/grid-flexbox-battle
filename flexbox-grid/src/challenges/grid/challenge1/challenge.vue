<template>
  <div class="challenge1">
    <img src="./challenge1.png" alt="challenge1"/>
    <div class="bg-container">
      <div class="grid-container">
      <div class="box-color box-color--1 a">A</div>
      <div class="box-color box-color--2 b">B</div>
      <div class="box-color box-color--3 c">C</div>
      <div class="box-color box-color--4 d">D</div>
      <div class="box-color box-color--4 d">E</div>
      <div class="box-color box-color--5 d">F</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  // challenge1
.grid-container {
  display: grid;
  grid-template-rows:100px 100px;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
}

</style>
