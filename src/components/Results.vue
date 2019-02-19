<template>
  <div>
    <p class="statistics">
      あなたの成績: {{ successCount }}/{{ totalCount }} ＝ 成功率
      {{ successRate }} %
    </p>

    <social-sharing
      v-if="totalCount > 0"
      :title="tweetText"
      url="https://sakuramochi0.github.io/kinpri-rush-minigame-simulator/"
      hashtags="キンプリラッシュやってみたアプリ"
      inline-template
    >
      <p>
        <network network="twitter">
          <button class="button twitter">
            <b-icon icon="twitter" />
            <span>成績をツイートする</span>
          </button>
        </network>
      </p>
    </social-sharing>
  </div>
</template>

<script>
import BIcon from 'buefy/src/components/icon/Icon';

export default {
  name: 'results',
  components: { BIcon },
  props: {
    successCount: { type: Number },
    successRate: { type: Number },
    totalCount: { type: Number },
    results: { type: Array },
  },
  computed: {
    tweetText() {
      return `あなたは ${
        this.successCount
      } 個のスタァ🌟を手に入れました！ 成功率は ${this.successRate} % (${
        this.successCount
      }/${this.totalCount}) です！\n${this.resultsEmoji}\n\n${document.title}`;
    },

    resultsEmoji() {
      return this.results.map(result => (result ? '🌟' : '🌌')).join('');
    },
  },
};
</script>

<style scoped></style>
