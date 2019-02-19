<template>
  <div id="about">
    <header>
      <img src="../../static/emoji-crown.png" alt="crown emoji" />
    </header>
    <h1>『キンプリラッシュ』<br />並び替えミニゲーム<br />練習アプリ</h1>
    <p>
      『
      <a href="https://prism-rush.com/">KING OF PRISM プリズムラッシュ！LIVE</a>
      』の「ならびかえ」ミニゲームの練習をするアプリです。
    </p>
    <p>
      <router-link to="/game">
        <button class="button is-success">
          <b-icon icon="star"></b-icon>
          <span>ゲームをやってみる！</span>
        </button>
      </router-link>
    </p>

    <hr />

    <p>
      作者:
      <a href="https://twitter.com/skrmch_rhythpri/">
        <b-icon icon="twitter"></b-icon>
        さくらもち (@skrmch_rhythpri)
      </a>
    </p>

    <p>
      書いたコード:
      <a href="https://github.com/sakuramochi0/kinpri-rush-minigame-simulator">
        <b-icon icon="note"></b-icon>
        GitHub
      </a>
    </p>

    <p>
      壁紙:
      <a href="https://pixabay.com/photo-755962/">Pixabay by Osckar</a>
    </p>

    <app-footer />
  </div>
</template>

<script>
import BIcon from 'buefy/src/components/icon/Icon';

import AppFooter from '@/components/AppFooter';

export default {
  name: 'About',
  components: { BIcon, AppFooter },
};
</script>

<style scoped>
header {
  padding: 60px;
  margin-bottom: 1em;
}
</style>
