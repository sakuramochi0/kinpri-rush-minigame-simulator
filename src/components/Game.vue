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
      <div
        :class="{ 'tapped-char': true, 'question-mark': !tappedCharacters[i] }"
        v-for="i in [0, 1, 2, 3, 4]"
        :key="i"
      >
        {{ tappedCharacters[i] || '？' }}
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

<!--suppress CssUnusedSymbol -->
<style scoped>
#game {
  color: #9b864d;
  text-shadow: rgb(255, 255, 255) 3px 0 0,
    rgb(255, 255, 255) 2.83487px 0.981584px 0,
    rgb(255, 255, 255) 2.35766px 1.85511px 0,
    rgb(255, 255, 255) 1.62091px 2.52441px 0,
    rgb(255, 255, 255) 0.705713px 2.91581px 0,
    rgb(255, 255, 255) -0.287171px 2.98622px 0,
    rgb(255, 255, 255) -1.24844px 2.72789px 0,
    rgb(255, 255, 255) -2.07227px 2.16926px 0,
    rgb(255, 255, 255) -2.66798px 1.37182px 0,
    rgb(255, 255, 255) -2.96998px 0.42336px 0,
    rgb(255, 255, 255) -2.94502px -0.571704px 0,
    rgb(255, 255, 255) -2.59586px -1.50383px 0,
    rgb(255, 255, 255) -1.96093px -2.27041px 0,
    rgb(255, 255, 255) -1.11013px -2.78704px 0,
    rgb(255, 255, 255) -0.137119px -2.99686px 0,
    rgb(255, 255, 255) 0.850987px -2.87677px 0,
    rgb(255, 255, 255) 1.74541px -2.43999px 0,
    rgb(255, 255, 255) 2.44769px -1.73459px 0,
    rgb(255, 255, 255) 2.88051px -0.838247px 0;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  color: #f0fdff;
  text-shadow: rgb(41, 184, 237) 3px 0 0,
    rgb(41, 184, 237) 2.83487px 0.981584px 0,
    rgb(41, 184, 237) 2.35766px 1.85511px 0,
    rgb(41, 184, 237) 1.62091px 2.52441px 0,
    rgb(41, 184, 237) 0.705713px 2.91581px 0,
    rgb(41, 184, 237) -0.287171px 2.98622px 0,
    rgb(41, 184, 237) -1.24844px 2.72789px 0,
    rgb(41, 184, 237) -2.07227px 2.16926px 0,
    rgb(41, 184, 237) -2.66798px 1.37182px 0,
    rgb(41, 184, 237) -2.96998px 0.42336px 0,
    rgb(41, 184, 237) -2.94502px -0.571704px 0,
    rgb(41, 184, 237) -2.59586px -1.50383px 0,
    rgb(41, 184, 237) -1.96093px -2.27041px 0,
    rgb(41, 184, 237) -1.11013px -2.78704px 0,
    rgb(41, 184, 237) -0.137119px -2.99686px 0,
    rgb(41, 184, 237) 0.850987px -2.87677px 0,
    rgb(41, 184, 237) 1.74541px -2.43999px 0,
    rgb(41, 184, 237) 2.44769px -1.73459px 0,
    rgb(41, 184, 237) 2.88051px -0.838247px 0;
}

.tapped-char-box {
  display: inline-flex;
  margin-bottom: 1em;
}

.tapped-char {
  border: solid 2px lightgray;
  margin: 1px;
  padding: 0;
  width: 60px;
  height: 60px;
  font-size: 40px;
  font-weight: bold;
}

.tapped-char.question-mark {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: none;
}
</style>
