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

.grid {
  display: grid;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid grey;
  color: white;

  &__header {
    background-color: $header;
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
  }

  &__content {
    background-color: $content;
  }

  &__slider {
   background-color: $slider;
 }
  &__footer {
   background-color: $footer;
 }

}

</style>
