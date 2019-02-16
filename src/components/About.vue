<template>
  <div>
    <header>
      <img src="../../static/emoji-crown.png" alt="crown emoji" />
    </header>
    <h1>『キンプリラッシュ』<br />並び替えミニゲーム<br />練習アプリ</h1>
    <p>
      このアプリは『
      <a href="https://prism-rush.com/">KING OF PRISM プリズムラッシュ！LIVE</a>
      』の「ならびかえ」ミニゲームの練習をするためのアプリです。
    </p>
    <p>
      <router-link to="/game">
        <button class="button is-success">
          <b-icon icon="star"></b-icon>
          <span>ゲームをやってみる！</span>
        </button>
      </router-link>
    </p>
  </div>
</template>

<script>
import BIcon from 'buefy/src/components/icon/Icon';

export default {
  name: 'About',
  components: { BIcon },
};
</script>

<style scoped>
header {
  padding: 60px;
  margin-bottom: 1em;
}
</style>
