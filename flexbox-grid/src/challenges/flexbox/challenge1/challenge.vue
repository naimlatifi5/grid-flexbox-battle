<template>
  <div class="challenge1-wrapper">
    <p>By using flexbox center vertically and horizontally as in the image below</p>
    <img src="./challenge1.png" alt="challenge1" />
    <div class="bg-container flexbox-center">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et consectetur nisl. Sed bibendum sem vitae nisi pretium, nec cursus tortor facilisis. Maecenas eu porta metus. Ut quis sem sapien. Sed quis vehicula dui.ate at lorem.</p>
      <button class="button button-primary">Login</button>
    </div>
  </div>
</template>

<style lang="scss">

 .flexbox-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
}

</style>
