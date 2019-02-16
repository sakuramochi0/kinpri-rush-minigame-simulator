<template>
  <div id="game">
    <router-link to="/">
      <b-icon
        icon="arrow-left-bold-circle-outline"
        class="back-icon"
        size="is-large"
      ></b-icon>
    </router-link>
    <header>
      <img :src="`../../static/${emojiFilename}`" :alt="emojiFilename" />

      <!-- ゲーム結果 -->
      <div class="star-box">
        <span v-for="(result, i) in results" :key="i">
          <img
            v-if="result"
            src="../../static/emoji-growing-star.png"
            alt="growing star emoji"
          />
          <img
            v-else
            src="../../static/emoji-milky-way.png"
            alt="growing star emoji"
          />
        </span>
      </div>
    </header>
    <h1>スタァを応援しよう！</h1>

    <!-- タップした文字 -->
    <div class="tapped-char-box">
      <div class="tapped-char" v-for="i in [0, 1, 2, 3, 4]" :key="i">
        {{ tappedCharacters[i] }}
      </div>
    </div>

    <!-- 選択肢 -->
    <div class="select-characters">
      <div class="columns first-column">
        <div
          class="character-button-box column"
          v-for="(char, i) in message.slice(0, 2)"
          :key="`char-${i}`"
          :id="`char-${i}`"
          @click="tapCharacter(char, i)"
        >
          <span class="character-button">
            {{ char }}
          </span>
        </div>
      </div>

      <!-- 選択肢2 -->
      <div class="columns second-column">
        <div
          class="character-button-box column"
          v-for="(char, i) in message.slice(2)"
          :key="`char-${i + 2}`"
          :id="`char-${i + 2}`"
          @click="tapCharacter(char, i + 2)"
        >
          <span class="character-button">
            {{ char }}
          </span>
        </div>
      </div>
    </div>

    <!-- 次の練習ボタン -->
    <p>
      <button
        v-if="isCollect"
        class="button is-success"
        v-show="isFinished"
        @click="nextChallenge"
      >
        <b-icon icon="star"></b-icon>
        <span>Next Challenge !!</span>
      </button>
      <button
        v-else
        class="button is-danger"
        v-show="isFinished"
        @click="nextChallenge"
      >
        <b-icon icon="fire"></b-icon>
        <span>Next Challenge !!</span>
      </button>
    </p>

    <!-- 成績 -->
    <p>
      あなたの成績: {{ successCount }}/{{ totalCount }} ＝ 成功率
      {{ successRate }} %
    </p>
  </div>
</template>

<script>
import BIcon from 'buefy/src/components/icon/Icon';

export default {
  name: 'Game',
  components: { BIcon },
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

    totalCount() {
      return this.results.length;
    },

    successRate() {
      if (this.totalCount === 0) {
        return 0;
      }
      return Math.floor((this.successCount / this.totalCount) * 100);
    },

    emojiFilename() {
      if (!this.isFinished) {
        return 'emoji-ice-skate.png';
      }

      if (this.isCollect) {
        return 'emoji-party-popper.png';
      }

      return 'emoji-face-with-cold-sweat.png';
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
.back-icon {
  position: absolute;
  top: 5px;
  left: 5px;
  color: lightgray;
}

.star-box {
  width: 300px;
  margin: auto;
}

.star-box img {
  height: 30px;
}

h1 {
  font-size: 25px;
}

h1 {
  margin: 1em;
}

p {
  margin: 2em;
}

.tapped-char-box {
  display: inline-flex;
  height: 100px;
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

.select-characters {
  max-width: 350px;
}

.character-button-box {
  display: inline-flex;
}

.character-button {
  width: 60px;
  height: 60px;
  margin: 0.25em;
  border: solid gold 3px;
  border-radius: 2em;

  /* font */
  text-align: center;
  font-size: 40px;
  color: darkgoldenrod;
  font-weight: bold;
}
</style>
