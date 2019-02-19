<template>
  <div id="game">
    <game-header
      :failed-count="failedCount"
      :is-collect="isCollect"
      :is-finished="isFinished"
      :results="results"
      :success-count="successCount"
    />

    <!-- タップした文字 -->
    <div class="tapped-char-box">
      <div class="tapped-char" v-for="i in [0, 1, 2, 3, 4]" :key="i">
        {{ tappedCharacters[i] }}
      </div>
    </div>

    <!-- 選択肢 -->
    <select-characters :message="message" @tap-character="tapCharacter" />

    <h1 v-show="!isFinished">想いを叫ぼう！</h1>

    <!-- 次の練習ボタン -->
    <next-challenge-button
      :is-collect="isCollect"
      :is-finished="isFinished"
      @next-challenge="nextChallenge"
    />

    <hr />

    <!-- 成績 -->
    <results
      :success-count="successCount"
      :success-rate="successRate"
      :total-count="totalCount"
      :results="results"
    />
  </div>
</template>

<script>
import GameHeader from '@/components/GameHeader';
import SelectCharacters from '@/components/SelectCharacters';
import NextChallengeButton from '@/components/NextChallengeButton';
import Results from '@/components/Results';

export default {
  name: 'Game',
  components: { Results, NextChallengeButton, SelectCharacters, GameHeader },
  props: {},

  data() {
    return {
      defaultMessage: 'やってみた',
      answer: '',
      message: [],
      tappedCharacters: [],
      results: [],
    };
  },

  beforeMount() {
    this.answer = this.defaultMessage;
    this.message = this.shuffleArray([...this.defaultMessage]);
  },

  computed: {
    isFinished() {
      return this.answer.length === this.tappedCharacters.length;
    },

    isCollect() {
      return this.tappedCharacters.join('') === this.answer;
    },

    successCount() {
      return this.results.filter(result => result).length;
    },

    failedCount() {
      return this.totalCount - this.successCount;
    },

    totalCount() {
      return this.results.length;
    },

    successRate() {
      if (this.totalCount === 0) {
        return 0;
      }
      return Math.floor((this.successCount / this.totalCount) * 100);
    },
  },

  methods: {
    shuffleArray(array) {
      const shuffledCharacters = [];
      for (let i = 0, len = array.length; i < len; i += 1) {
        const index = Math.floor(Math.random() * array.length);
        const selectedChar = array.splice(index, 1)[0];
        shuffledCharacters.push(selectedChar);
      }
      return shuffledCharacters;
    },

    tapCharacter(char, key) {
      this.tappedCharacters.push(char);
      const el = document.querySelector(`#char-${key}`);
      el.style.visibility = 'hidden';
    },

    nextChallenge() {
      // Save current result
      this.results.push(!!this.isCollect);

      // Prepare a new message
      this.answer = ['こっちみて', 'あいしてる', 'ありがとう'][
        Math.floor(Math.random() * 3)
      ];
      this.message = this.shuffleArray([...this.answer]);
      this.tappedCharacters = [];
      document
        .querySelectorAll('.character-button-box')
        .forEach(el => el.setAttribute('style', ''));
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 40px;
  font-weight: bold;
}

.tapped-char-box {
  display: inline-flex;
  margin-bottom: 1em;
}

.tapped-char {
  border: solid 2px lightgray;
  margin: 5px;
  padding: 5px;
  width: 50px;
  height: 50px;
  font-size: 27px;
  font-weight: bold;
}
</style>
