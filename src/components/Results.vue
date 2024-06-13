<template>
  <div>
    <p class="statistics">
      あなたの成績: {{ successCount }}/{{ totalCount }} ＝ 成功率
      {{ successRate }} %
    </p>

    <p>
      <button class="button share" @click="shareResult">
        <b-icon icon="share" />
        <span>成績を共有する</span>
      </button>
    </p>
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
    shareText() {
      return `あなたは ${
        this.successCount
      } 個のスタァ🌟を手に入れました！ 成功率は ${this.successRate} % (${
        this.successCount
      }/${this.totalCount}) です！\n${this.resultsEmoji}\n\n${
        document.title
      }\n#キンプリラッシュやってみたアプリ`;
    },

    resultsEmoji() {
      return this.results.map(result => (result ? '🌟' : '🌌'))
        .join('');
    },
  },
  methods: {
    shareResult() {
      navigator.share({
        title: 'キンプリラッシュやってみたアプリ',
        url: 'https://skrm.ch/kinpri-rush-minigame-simulator/',
        text: this.shareText,
      });
    },
  },
};
</script>

<style scoped></style>
