<template>
  <div>
    <p class="statistics">
      あなたの成績: {{ successCount }}/{{ totalCount }} ＝ 成功率
      {{ successRate }} %
    </p>

    <p v-if="results.length > 0">
      <button class="button copy" @click="copyResult">
        <b-icon icon="clipboard" />
        <span>成績をコピーする</span>
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
    copyText() {
      return `あなたは ${
        this.successCount
      } 個のスタァ🌟を手に入れました！ 成功率は ${this.successRate} % (${
        this.successCount
      }/${this.totalCount}) です！\n${this.resultsEmoji}\n\n${
        document.title
      }\n#キンプリラッシュやってみたアプリ\nhttps://skrm.ch/kinpri-rush-minigame-simulator/`;
    },

    resultsEmoji() {
      return this.results.map(result => (result ? '🌟' : '🌌'))
        .join('');
    },
  },
  methods: {
    copyResult() {
      navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.clipboard.writeText(this.copyText);
        }
      });
    },
  },
};
</script>
