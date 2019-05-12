<template>
<div>
  <div class="css-layout-old-approach">
     <strong>Problem solving with floats and display table</strong>
     <div class="container bg-container">
       <aside>
         aside
       </aside>
       <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem sem, facilisis nec odio et, tristique ultricies ligula. Nullam molestie, mi mollis semper semper, turpis quam mattis odio, eu ullamcorper ipsum ante eu neque. Aliquam venenatis sagittis enim non congue. Praesent dictum, quam id condimentum accumsan, sem elit tincidunt orci, at eleifend tortor lacus eu nisi. Mauris venenatis volutpat consequat. Sed placerat non dolor quis ultricies. Cras non ante vel quam aliquam efficitur mollis nec nibh. Fusce leo lacus, luctus nec nunc tincidunt, aliquet elementum dui. Integer leo neque, facilisis et rhoncus in, ultricies non justo. Etiam eleifend risus mi, ut ultricies velit congue ut. Nunc quis eleifend eros, non iaculis nisl.</p>
       </main>
     </div>
  </div>
    <div class="bg-container">
     <div class="grid-container">
      <aside>
         Solving with Grid
       </aside>
       <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem sem, facilisis nec odio et, tristique ultricies ligula. Nullam molestie, mi mollis semper semper, turpis quam mattis odio, eu ullamcorper ipsum ante eu neque. Aliquam venenatis sagittis enim non congue. Praesent dictum, quam id condimentum accumsan, sem elit tincidunt orci, at eleifend tortor lacus eu nisi. Mauris venenatis volutpat consequat. Sed placerat non dolor quis ultricies. Cras non ante vel quam aliquam efficitur mollis nec nibh. Fusce leo lacus, luctus nec nunc tincidunt, aliquet elementum dui. Integer leo neque, facilisis et rhoncus in, ultricies non justo. Etiam eleifend risus mi, ut ultricies velit congue ut. Nunc quis eleifend eros, non iaculis nisl.</p>
       </main>
     </div>
     </div>

     </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
aside {
  background-color: grey;
  padding: 20px;
}
main {
  padding: 20px;
  background-color: chocolate;
}

.bg-container {
      position: relative;
      min-height: 30em;
      color: black;
      border: .5rem solid #f7f7f9;
      border-radius: .2rem;
      background-color: #fff;
      max-width: 900px;
      margin: 0 auto;
      width: 100%;
      margin-top: 100px;
  }

.css-layout-old-approach {

  .container {
    display: table;
  }
  // the problem is that the aside and main does not have the same height
  // to solve this we can use the hack of display: table property
  aside {

    width: 40%;
   // float: left;
   display: table-cell;
  }
  main {
    padding: 20px;
    background-color: chocolate;
    width: 60%;
    //float: left;
    // yeah it works but
    display: table-cell;
  }
  }

  // css grid
  // we do not need to define the main and aside width
  .grid-container {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-column-gap: 1px;
  }
</style>
