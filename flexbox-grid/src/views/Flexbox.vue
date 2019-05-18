<template>
    <div class="flexbox">
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
    <h2>Flex direction- row column</h2>
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

    <h2>Flex wrap</h2>
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

     <h2>justify content</h2>
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
    <h2>Align items</h2>
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
</style>
