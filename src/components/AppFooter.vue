<!--:description="`あなたは ${successCount} 個のスタァ🌟を手に入れました！\n成功率は ${successRate} % です。`"-->

<template>
  <div id="app-footer">
    <hr />
    <social-sharing
      :title="title"
      url="https://sakuramochi0.github.io/kinpri-rush-minigame-simulator/"
      hashtags="キンプリラッシュやってみたアプリ"
      inline-template
      :is-results-given="isResultsGiven"
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
  props: ['successCount', 'successRate'],
  computed: {
    isResultsGiven() {
      // noinspection JSValidateTypes
      return this.successCount !== undefined && this.successRate !== undefined;
    },

    title() {
      const commonText =
        '⛸ キンプリラッシュやってみたアプリ | kinpri-rush-minigame-simulator';

      if (this.isResultsGiven) {
        return `あなたは ${
          this.successCount
        } 個のスタァ🌟を手に入れました！ 成功率は ${
          this.successRate
        } % です！\n\n${commonText}`;
      }

      return commonText;
    },
  },
};
</script>

<style scoped>
#app-footer {
  margin-bottom: 1.5rem;
}
</style>
