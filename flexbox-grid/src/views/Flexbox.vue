<template>
    <div class="flexbox">
      <h1>Flex container</h1>
    <div class="bg-container">
      <div class="flexbox-container1">
      <div class="box-color box-color--1 a">A</div>
      <div class="box-color box-color--2 b">B</div>
      <div class="box-color box-color--3 c">C</div>
      <div class="box-color box-color--4 d">D</div>
      <div class="box-color box-color--4 d">E</div>
      <div class="box-color box-color--5 d">F</div>
    </div>
    </div>
    <h3>Flex direction- row column</h3>
    <div class="bg-container">
      <div class="flexbox-container2">
        <div class="box-color box-color--1 a">A</div>
        <div class="box-color box-color--2 b">B</div>
        <div class="box-color box-color--3 c">C</div>
        <div class="box-color box-color--4 d">D</div>
        <div class="box-color box-color--4 d">E</div>
        <div class="box-color box-color--5 d">F</div>
      </div>

       <div class="flexbox-container2 flexbox-container2--reverse">
        <div class="box-color box-color--1 a">A</div>
        <div class="box-color box-color--2 b">B</div>
        <div class="box-color box-color--3 c">C</div>
        <div class="box-color box-color--4 d">D</div>
        <div class="box-color box-color--4 d">E</div>
        <div class="box-color box-color--5 d">F</div>
      </div>

      <div class="flexbox-container2 flexbox-container2--column-direction">
        <div class="box-color box-color--1 a">A</div>
        <div class="box-color box-color--2 b">B</div>
        <div class="box-color box-color--3 c">C</div>
        <div class="box-color box-color--4 d">D</div>
        <div class="box-color box-color--4 d">E</div>
        <div class="box-color box-color--5 d">F</div>
      </div>

      <div class="flexbox-container2 flexbox-container2--column-direction-reverse">
        <div class="box-color box-color--1 a">A</div>
        <div class="box-color box-color--2 b">B</div>
        <div class="box-color box-color--3 c">C</div>
        <div class="box-color box-color--4 d">D</div>
        <div class="box-color box-color--4 d">E</div>
        <div class="box-color box-color--5 d">F</div>
      </div>
    </div>

    <h3>Flex wrap</h3>
    <div class="bg-container">
      <div class="flexbox-container3 flexbox-container3--wrap">
      <div class="box-color box-color--1 a">1</div>
      <div class="box-color box-color--2 b">2</div>
      <div class="box-color box-color--3 c">3</div>
      <div class="box-color box-color--4 d">4</div>
      <div class="box-color box-color--4 d">5</div>
      <div class="box-color box-color--5 d">6</div>

      <div class="box-color box-color--2 b">7</div>
      <div class="box-color box-color--3 c">8</div>
      <div class="box-color box-color--4 d">9</div>
      <div class="box-color box-color--4 d">10</div>
      <div class="box-color box-color--5 d">11</div>

      <div class="box-color box-color--2 b">12</div>
      <div class="box-color box-color--3 c">13</div>
      <div class="box-color box-color--4 d">14</div>
      <div class="box-color box-color--4 d">15</div>
      <div class="box-color box-color--5 d">16</div>

      <div class="box-color box-color--2 b">17</div>
      <div class="box-color box-color--3 c">18</div>
      <div class="box-color box-color--4 d">19</div>
      <div class="box-color box-color--4 d">20</div>
      <div class="box-color box-color--5 d">21</div>
      </div>
    </div>

     <h3>justify content</h3>
    <div class="bg-container">
      <div class="flexbox-container4 flexbox-container4--justify-content flex-start">
        <div class="box-color box-color--1 a">1</div>
        <div class="box-color box-color--2 b">2</div>
        <div class="box-color box-color--3 c">3</div>
        <div class="box-color box-color--4 d">4</div>
        <div class="box-color box-color--4 d">5</div>
        <div class="box-color box-color--5 d">6</div>
      </div>

      <div class="flexbox-container4 flexbox-container4--justify-content flex-end">
        <div class="box-color box-color--1 a">1</div>
        <div class="box-color box-color--2 b">2</div>
        <div class="box-color box-color--3 c">3</div>
        <div class="box-color box-color--4 d">4</div>
        <div class="box-color box-color--4 d">5</div>
        <div class="box-color box-color--5 d">6</div>
      </div>

        <div class="flexbox-container4 flexbox-container4--justify-content flex-center">
          <div class="box-color box-color--1 a">1</div>
          <div class="box-color box-color--2 b">2</div>
          <div class="box-color box-color--3 c">3</div>
          <div class="box-color box-color--4 d">4</div>
          <div class="box-color box-color--4 d">5</div>
          <div class="box-color box-color--5 d">6</div>
        </div>

        <div class="flexbox-container4 flexbox-container4--justify-content space-between">
          <div class="box-color box-color--1 a">1</div>
          <div class="box-color box-color--2 b">2</div>
          <div class="box-color box-color--3 c">3</div>
          <div class="box-color box-color--4 d">4</div>
          <div class="box-color box-color--4 d">5</div>
          <div class="box-color box-color--5 d">6</div>
        </div>

        <div class="flexbox-container4 flexbox-container4--justify-content space-around">
          <div class="box-color box-color--1 a">1</div>
          <div class="box-color box-color--2 b">2</div>
          <div class="box-color box-color--3 c">3</div>
          <div class="box-color box-color--4 d">4</div>
          <div class="box-color box-color--4 d">5</div>
          <div class="box-color box-color--5 d">6</div>
        </div>

        <div class="flexbox-container4 flexbox-container4--justify-content space-evenly">
          <div class="box-color box-color--1 a">1</div>
          <div class="box-color box-color--2 b">2</div>
          <div class="box-color box-color--3 c">3</div>
          <div class="box-color box-color--4 d">4</div>
          <div class="box-color box-color--4 d">5</div>
          <div class="box-color box-color--5 d">6</div>
        </div>
    </div>
    <h3>Align items</h3>
    <div class="bg-container">
       <div class="flexbox-container5 flexbox-container5--align-items">
          <div class="box-color box-color--1 a item-height">1</div>
          <div class="box-color box-color--2 b item-height">2</div>
          <div class="box-color box-color--3 c item-height">3</div>
          <div class="box-color box-color--4 d item-height">4</div>
          <div class="box-color box-color--4 d item-height">5</div>
          <div class="box-color box-color--5 d item-height">6</div>
        </div>

        <div class="flexbox-container5 flexbox-container5--align-items align-flex-start">
          <div class="box-color box-color--1 a">1</div>
          <div class="box-color box-color--2 b">2</div>
          <div class="box-color box-color--3 c">3</div>
          <div class="box-color box-color--4 d">4</div>
          <div class="box-color box-color--4 d">5</div>
          <div class="box-color box-color--5 d">6</div>
        </div>

        <div class="flexbox-container5 flexbox-container5--align-items align-flex-end">
          <div class="box-color box-color--1 a">1</div>
          <div class="box-color box-color--2 b">2</div>
          <div class="box-color box-color--3 c">3</div>
          <div class="box-color box-color--4 d">4</div>
          <div class="box-color box-color--4 d">5</div>
          <div class="box-color box-color--5 d">6</div>
        </div>

        <div class="flexbox-container5 flexbox-container5--align-items align-center">
          <div class="box-color box-color--1 a">1</div>
          <div class="box-color box-color--2 b">2</div>
          <div class="box-color box-color--3 c">3</div>
          <div class="box-color box-color--4 d">4</div>
          <div class="box-color box-color--4 d">5</div>
          <div class="box-color box-color--5 d">6</div>
        </div>
    </div>

    <hr>
    <h1>Flex items</h1>
      <h3>Flex order</h3>
      <div class="bg-container">
       <div class="flexbox-items">
          <div class="box-color box-color--1 a position--1">1</div>
          <div class="box-color box-color--2 b  position--2" >2</div>
          <div class="box-color box-color--3 c position--3">3</div>
          <div class="box-color box-color--4 d position--4">4</div>
          <div class="box-color box-color--4 d position--5">5</div>
        </div>
      </div>
      <h3>Flex grow</h3>
      <div class="bg-container">
       <div class="flexbox-items1">
          <div class="box-color box-color--1 a item1">1</div>
          <div class="box-color box-color--2 b item2" >2</div>
          <div class="box-color box-color--3 c item3">3</div>
          <div class="box-color box-color--4 d item4">4</div>
          <div class="box-color box-color--4 d item5">5</div>
        </div>

         <div class="flexbox-items2">
          <div class="box-color box-color--1 a item1">1</div>
          <div class="box-color box-color--2 b item2" >2</div>
          <div class="box-color box-color--3 c item3">3</div>
          <div class="box-color box-color--4 d item4">4</div>
          <div class="box-color box-color--4 d item5">5</div>
        </div>
      </div>

      <h3>Flex shrink</h3>
      <div class="bg-container">
        <h4>flex grow example </h4>
       <div class="flexbox-items3">
          <div class="box-color box-color--1 a">A</div>
          <div class="box-color box-color--2 b" >B</div>
        </div>
           <h4>flex shrink</h4>
         <div class="flexbox-items4">
          <div class="box-color box-color--1 a">A</div>
          <div class="box-color box-color--2 b" >B</div>
          <div class="box-color box-color--3 c">C</div>
          <div class="box-color box-color--4 d" >D</div>
          <div class="box-color box-color--5 e" >E</div>
        </div>
      </div>

      <h3>Flex - a shorthand for flex-grow flex-basis and flex-shrink combined</h3>
      <div class="bg-container">
        <h4>flex: 1 0 100px </h4>
       <div class="flexbox-items5">
          <div class="box-color box-color--1 a"> A hello</div>
          <div class="box-color box-color--2 b" >B</div>
          <div class="box-color box-color--3 b" >C</div>
          <div class="box-color box-color--4 b" >D</div>
          <div class="box-color box-color--5 b" >E</div>
        </div>

        <h4>flex: 0 1 100px </h4>
        <div class="flexbox-items6">
          <div class="box-color box-color--1 a">A</div>
          <div class="box-color box-color--2 b" >B</div>
          <div class="box-color box-color--3 b" >C</div>
          <div class="box-color box-color--4 b" >D</div>
          <div class="box-color box-color--5 b" >E</div>
        </div>
         <h4>flex: 0 1 auto </h4>
        <div class="flexbox-items7">
          <div class="box-color box-color--1 a">A</div>
          <div class="box-color box-color--2 b" >B</div>
          <div class="box-color box-color--3 b" >C</div>
          <div class="box-color box-color--4 b" >D</div>
          <div class="box-color box-color--5 b" >E</div>
        </div>
      </div>

     <h3>Align self</h3>
      <div class="bg-container">
       <div class="flexbox-items8">
          <div class="box-color box-color--1 a item1">1</div>
          <div class="box-color box-color--2 b item2" >2</div>
          <div class="box-color box-color--3 c item3">3</div>
          <div class="box-color box-color--4 d item4">4</div>
          <div class="box-color box-color--4 d item5">5</div>
        </div>
      </div>
  </div>

</template>

<style lang="scss">
.flexbox-container1 {
  display: flex;
}

.flexbox-container2 {
  display: flex;
  // default property if not sepcified,and it is ltr left to right
  flex-direction: row;
  // we can also have row reverse property
  &--reverse {
    // it start from right to left rtl
    flex-direction: row-reverse;
  }

  &--column-direction {
    display: inline-flex;
    flex-direction: column;
  }

  &--column-direction-reverse {
    flex-direction: column-reverse;
    display: inline-flex;
  }

}

.flexbox-container3 {
  display: flex;

  &--wrap {
    flex-wrap: wrap;
  }
}

.flexbox-container4 {

  display: flex;

  &--justify-content {
    // distribute items in the main axis, default value
    justify-content: flex-start;
  }
  &.flex-end {
    // items are lain from the end of the flex
    justify-content: flex-end;
  }

  &.flex-center {
    margin-top: 50px;
    justify-content: center;
  }

  &.space-between {
    margin-top: 20px;
    // items have an equal space between each other but not the first and last one from the container
    justify-content: space-between;
  }

  &.space-around {
    margin-top: 30px;
    // items have equal amount of space between each other, and the first and last element have the half space amount between the two items
    justify-content: space-around;
  }

  &.space-evenly {
    margin-top: 40px;
    // items are distributed evenly and there is equal amount of space
    justify-content: space-evenly;
  }

}

.flexbox-container5 {
  display: flex;
 // how items are lain in the cross axis , default stretch
  &--align-items {
    // items takes the entire space in the  cross axis
     align-items: stretch;
  }

  .item-height {
    height: 200px;
  }

  &.align-flex-start {
    margin-top: 40px;
    align-items: flex-start
  }

  &.align-flex-end {
    margin-top: 40px;
    align-items: flex-end;
  }

  &.align-center {
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
  }
}

.flexbox-items {
  display: flex;
  flex-direction: row;
  // zero is the default value in the order
  .position {
    &--1 {
      order: 2
    }
    &--2 {
      order: 3;
    }
    &--3{
      order: 1;
    }
    &--4 {
      order: 4;
    }
    &--5 {
      order: 0
    }
  }
}

.flexbox-items1 {
  display: flex;
  flex-direction: row;

  .item1,
  .item2,
  .item3,
  .item4,
  .item5 {
    // ability for flex items to grow
    flex-grow: 1;
  }
}
.flexbox-items2 {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  .item1,
  .item3,
  .item4,
  .item5 {
    flex-grow: 1 /* default 0 */
  }
  .item2 {
    // when all flex items are set to 1 it will have equal size whereas if one item has grow 2 the child would take place
    // twice as much as space as others
    flex-grow: 2;
  }
}

.flexbox-items3 {
  display: flex;
  flex-direction: row;
  .a {
    // when having flex-grow:1 to the first element
    // the element A will grow to take available space
    // A is taking 1/3 of available space
    flex-grow: 1
  }
  .b {
    // adding to B as well it will bring a total flex-grow value to 3. B is taking 2/3 of available space
    flex-grow: 2;
  }
}

.flexbox-items4 {
  display: flex;
  .a,
  .b,
  .c,
  .d,
  .e{
    // it sets the main size of the items
    flex-basis: 400px;
  }
  .a,
  .b,
  .c {
    flex-shrink: 1;
  }
  .d,
  .e {
    // the width of D and E is less than others
    flex-shrink: 2;
  }
}

.flexbox-items5 {
  display: flex;
  // flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  .a,
  .b,
  .c,
  .d,
  .e {
    flex: 1 0 78px; // flex-grow of 1, flex-shrink of 0 and flex-basis of 200px the element will be at minimum of 100px wide but will allow to grow, in this case flex-basis is the minimum width
    padding: 30px;
  }
}

.flexbox-items6 {
  margin-top: 30px;
  display: flex;

  .a,
  .b,
  .c,
  .d,
  .e {
    flex: 0 1 78px; // flex shrink 1 and flex grow is set to 0 where we will have an element to be larger at 100px but it is allow to be smaller, this behaves like a max-width property in this case flex-basis is max-width to 100px
    //  to demostrate we add some padding
    padding: 30px;

  }
}

.flexbox-items7 {
  margin-top: 20px;
  display: flex;
  .a,
  .b,
  .c,
  .d,
  .e {
    // this is great if we do not want to specify the element min and max width
    flex: 1 0 auto;
  }
}

.flexbox-items8 {
  display: flex;
  height: 500px;

  .item1 {
    // it is possible to override align-items value for specific flex item
    align-self: flex-start;
  }
  .item2 {
    align-self: center;
  }
  .item3 {
    align-self: flex-end;
  }

  .item4 {
    align-self: baseline;
  }
  .item5 {
    align-self: stretch;
  }
}
</style>
