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

<style>
header {
  padding: 20px 0;
  height: 260px;
}

h1 {
  font-size: 30px;
}

p {
  margin: 2em;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  padding: 0 2em;
  height: 100vh;

  /* wallpaper */
  background-color: #fcfcfc;
  background-image: url('../static/rainbow-star-wallpaper.jpg');
  background-size: 100% 240px;
  background-repeat: no-repeat;
}
</style>
