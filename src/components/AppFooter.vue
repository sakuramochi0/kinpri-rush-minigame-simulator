<template>
  <div id="app-footer">
    <hr />
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
  name: 'AppFooter',
  components: { BIcon },
};
</script>

<style scoped>
#app-footer {
  margin-bottom: 1.5rem;
}
</style>
