<template>
  <div>
    <h2>Your challenge</h2>
    <p>With use of grid create the layout as in image below</p>
    <img src="./grid-challenge.png" width="450" height="350"/>
    <hr>
    <div class="grid-challenge">
      <strong>Your solution here...</strong>
      <div class="grid">
        <div class="grid__header">
          Header
        </div>
         <div class="grid__box1">
          Box1
        </div>
         <div class="grid__box2">
          Box2
        </div>
         <div class="grid__box3">
          Box3
        </div>
        <div class="grid__sidebar">
          sidebar
        </div>

        <div class="grid__content">
          content
        </div>
         <div class="grid__slider">
          slider
        </div>
        <div class="grid__footer">
          footer
        </div>

      </div>
    </div>
  </div>
  </template>
<style lang="scss">
 $header: #BB285C;
 $box1: #2E1572;
 $box2: #FF8350;
 $box3: #8B51F5;
 $content: #AA671C;
 $sidebar: #FFD782;
 $slider: #1364F6;
 $footer: #C4BA38;

// Method 1 with number columns
// .grid {
//   display: grid;
//   max-width: 900px;
//   margin: 0 auto;
//   border: 1px solid grey;
//   color: white;
//   grid-template-rows: 100px 130px 300px 100px 250px;
//   grid-template-columns: repeat(3, 1fr) 200px;
//   grid-gap: 30px;

//   &__header {
//     background-color: $header;
//     // we can use span or -1 to cover the whole column width
//     grid-column: 1 / span 4;
//     //grid-column: 1 / -1;
//   }

//   &__box1 {
//     background-color: $box1;
//   }

//   &__box2 {
//     background-color: $box2;
//   }

//   &__box3 {
//     background-color: $box3;
//   }
//   &__sidebar {
//     background-color: $sidebar;
//     grid-column: 4 / 5;
//     grid-row: 2 / 5
//   }

//   &__content {
//     background-color: $content;
//     grid-column: 1 / 4
//   }

//   &__slider {
//    background-color: $slider;
//    grid-column: 1 / 4;
//  }
//   &__footer {
//    background-color: $footer;
//    grid-column: 1 / -1
//  }

// }

// Method 2 with names lanes
.grid {
  display: grid;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid grey;
  color: white;
  grid-template-rows: [header-start] 100px [header-end box-start] 130px [box-end content-start] 300px [content-end slider-start] 100px [sidebar-end footer-start] 250px [footer-end];
  // we repeat 3 column to take the size and the rest 1rf end of grid with 200px
  grid-template-columns: repeat(3, [col-start] 1fr [col-end]) 200px [grid-end];
  grid-gap: 30px;

  &__header {
    background-color: $header;
    // we can use span or -1 to cover the whole column width
    grid-column: col-start  / grid-end;
    //grid-column: 1 / -1;
  }

  &__box1 {
    background-color: $box1;
  }

  &__box2 {
    background-color: $box2;
  }

  &__box3 {
    background-color: $box3;
  }
  &__sidebar {
    background-color: $sidebar;
    grid-column: col-end 3 / grid-end;
    grid-row: box-start / footer-start
  }

  &__content {
    background-color: $content;
    grid-column: col-start 1 / col-end 3
  }

  &__slider {
   background-color: $slider;
   grid-column: col-start 1 / col-end 3;
 }
  &__footer {
   background-color: $footer;
   grid-column: col-start 1 / grid-end

 }
}

</style>
