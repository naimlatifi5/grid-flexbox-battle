<template>
  <div class="challenge1">
    <img src="./challenge2.png" alt="challenge2" />
    <div class="bg-container">
      <div class="grid-container">
      <div class="box-color box-color--1 item1">1</div>
      <div class="box-color box-color--2 item2">2</div>
      <div class="box-color box-color--3 item3">3</div>
      <div class="box-color box-color--4 item4">4</div>
      <div class="box-color box-color--5 item5">5</div>
      <div class="box-color box-color--6 item6">6</div>
      <div class="box-color box-color--7 item7">7</div>
      <div class="box-color box-color--8 item8">8</div>
      <div class="box-color box-color--9 item9">9</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bg-container {
      position: relative;
      min-height: 18rem;
      color: #f0f0f3;
      border: .5rem solid #f7f7f9;
      border-radius: .2rem;
      background-color: #fff;
      max-width: 500px;
      margin: 0 auto;
      width: 100%;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 150px);
    grid-gap: 10px;

    .item1 {
       //grid-row-start:1;
       //grid-row-end: 3
       grid-row: 3 / 4;
    }
    .item3 {
      grid-row: 2 / 4;
      grid-column: 2 / 4;
    }

    .item5 {
      grid-row: 4 / 5;
      grid-column: 2 / 4;
    }
    .item9 {
      grid-row: 1 / 2;
      grid-column: 1 / span 2
    }
    .item7 {
      grid-column: 2 / -1
    }
    .item6 {
      grid-row: 4 / 6;
    }
    .item8 {
      grid-column: 1 / -1;
    }
  }

</style>
