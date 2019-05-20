<template>

  <div>
    <p>With use of grid create the layout as in image below</p>
    <img src="./mainChallenge.png" width="450" height="550"/>
    <hr>
    <div class="grid-challenge">
      <strong>Your solution here...</strong>
      <div class="grid">
        <div class="grid__header">
            <div>Home</div>
            <div>Search</div>
            <div>Logout</div>
        </div>
         <div class="grid__boxes cards">
           <article class="cards__card">
        <img src="https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 1</h3>
          <p>Lo enas eu porta metus. Ut quis sem sapien. Sed quis vehicula dui. Nullam vitae finibus ipsum. Donec sit amet risus id augue luctus rutrum venenatis eget libero..</p>

        </div>
      </article>

              <article class="cards__card">
        <img src="https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et consectetur nisl. Sed bibendum sem vitae nisi  o..</p>

        </div>
      </article>

        </div>
        <div class="grid__sidebar">
          <div class="grid__sidebar-main">Main element</div>
        </div>
        <div class="grid__content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et consectetur nisl. Sed bibendum sem vitae nisi pretium, nec cursus tortor facilisis. Maecenas eu porta metus.</p>
        </div>
        <div class="grid__footer">
          <div class="grid__footer-left">left column</div>
          <div class="grid__footer-right"> right column</div>
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
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid grey;
  color: white;

  &__header {
    background-color: $header;

  }

  img {
    max-width: 100%;
  }

  &__boxes {
    background-color: $box2;

  }

  &__sidebar {
    background-color: $sidebar;

  }

  &__content {
    background-color: $content;

  }

  &__sidebar-main {

 }
  &__footer {
   background-color: $footer;

 }

 &__footer-left,
 &__footer-right {
   padding: 10px;
   background-color: $header;
   margin-right: 1px;

 }

 .cards {

   img {
     max-width: 100%;
   }
  &__card {

    margin: 10px;
    border: 1px solid #ebe7e7;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.1);

  }

  &__content {
    padding: 0 30px 30px 30px;
  }
 }
}

</style>
