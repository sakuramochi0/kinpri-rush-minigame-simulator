<template>
  <div id="app">
    <router-view />
    <social-sharing
      url="https://sakuramochi0.github.io/kinpri-rush-minigame-simulator/"
      title="⛸ キンプリラッシュやってみたアプリ | kinpri-rush-minigame-simulator"
      hashtags="キンプリラッシュやってみたアプリ"
      inline-template
    >
      <div>
        <network network="twitter">
          <button class="button twitter">
            <b-icon icon="twitter" />
            <span>ツイートする</span>
          </button>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
import BIcon from 'buefy/src/components/icon/Icon';

export default {
  name: 'App',
  components: { BIcon },
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

.button.twitter,
.button.twitter:hover {
  color: white;
  font-size: 16px;
  padding: 0 16px;
  background-color: #1da1f2;
}
</style>
