<template>
  <div class="challenge2">
    <p>With use of flexbox create cards layout as in the image below</p>
    <img src="./challenge2.png" alt="challenge2">

    <hr>
    <div class="cards">
      <article class="cards__card cards--1">
        <img src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 1</h3>
          <p>Lo enas eu porta metus. Ut quis sem sapien. Sed quis vehicula dui. Nullam vitae finibus ipsum. Donec sit amet risus id augue luctus rutrum venenatis eget libero..</p>
          <button class="button button-primary">Read more...</button>
        </div>
      </article>

      <article class="cards__card cards--2">
        <img src="https://images.unsplash.com/photo-1444877466744-dc2f2af2b931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et consectetur nisl. Sed bibendum sem vitae nisi  o..</p>
          <button class="button button-primary">Read more...</button>
        </div>
      </article>

      <article class="cards__card cards--3">
        <img src="https://images.unsplash.com/photo-1553531888-a5892402adce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 3</h3>
          <p> lLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem , consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
          <button class="button button-primary">Read more...</button>
        </div>
      </article>

      <article class="cards__card cards--4">
        <img src="https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 4</h3>
          <p> lib adipiscing elit. Suspendisse et c Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et c Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et c</p>
          <button class="button button-primary">Read more...</button>
        </div>
      </article>

       <article class="cards__card cards--5">
        <img src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 5</h3>
          <p> libero.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et c Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, con met, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <button class="button button-primary">Read more...</button>
        </div>
      </article>

       <article class="cards__card cards--6">
        <img src="https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 6</h3>
          <p> libero.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et c Lorem ipsum dolor si elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class="button button-primary">Read more...</button>
        </div>
      </article>

      <article class="cards__card cards--7">
        <img src="https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 7</h3>
          <p> libero.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et c Lorem ipsum dolor si elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. libero.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et c Lorem ipsum dolor si elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class="button button-primary">Read more...</button>
        </div>
      </article>

         <article class="cards__card cards--8">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60" alt="Sample photo">
        <div class="cards__content">
          <h3>Heading Card 8</h3>
          <p> libero.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et c Lorem ipsum dolor si elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. libero.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et c Lorem ipsum dolor si elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class="button button-primary">Read more...</button>
        </div>
      </article>

     </div>
  </div>
</template>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
   img {
     max-width: 100%;
   }
  &__card {
  flex: 0 0 300px;
  margin: 10px;
  border: 1px solid #ebe7e7;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.1);
  }

  &__content {
    padding: 0 30px 30px 30px;
  }

  &--1 {
    order: 3;
  }

  &--2 {
    order: 2

  }

  &--3 {
    order: 5;

  }

  &--4 {
    order: 1;
  }

  &--5 {
    order: 4;
  }

  &--6 {
    order: 7;
  }

  &--7 {
    order: 6;
  }

   &--8 {
    order: 8;
  }

}

</style>
