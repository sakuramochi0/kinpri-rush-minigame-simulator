<template>
  <div>
    <h1>『キンプリラッシュ』<br />並び替えミニゲーム<br />練習アプリ</h1>
    <p>
      このアプリは『KING OF PRISM
      プリズムラッシュ！LIVE』の「ならびかえ」ミニゲームの練習をするためのアプリです。
    </p>
    <p>
      <router-link to="/game/やってみた">
        <button class="button is-success">ゲームをやってみる！</button>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
  h1  {
    font-size: 2em;
  }

  p {
    margin: 2em;
  }
</style>
