<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<!--suppress CssUnusedSymbol -->
<style>
header {
  padding: 20px 0;
  height: 260px;
}

h1 {
  font-size: 28px;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1em;
}

a {
  color: #0074d9;
}

body {
  height: 100dvh;
}

#app {
  font-family: 'Hiragino Maru Gothic Pro', 'Avenir', Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: white;

  padding: 0 2em;
  height: 100%;

  /* wallpaper */
  background-color: black;
  background-image: url('../static/rainbow-star-wallpaper.jpg');
  background-size: 100% 240px;
  background-repeat: no-repeat;
}

.button.copy,
.button.copy:hover {
  color: white;
  font-size: 16px;
  padding: 0 16px;
  background-color: #82c5ff;
}
</style>
