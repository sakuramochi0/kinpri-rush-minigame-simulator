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
      <template v-if="isFinished && isCollect">
        <img
          src="../../static/emoji-party-popper.png"
          alt="emoji-party-popper"
        />
      </template>
      <template v-else-if="isFinished && !isCollect">
        <img
          src="../../static/emoji-face-with-cold-sweat.png"
          alt="emoji-face-with-cold-sweat"
        />
      </template>
      <template v-else>
        <img src="../../static/emoji-ice-skate.png" alt="emoji-ice-skate" />
      </template>

      <!-- ゲーム結果 -->
      <div class="star-box">
        <span v-for="(result, i) in results" :key="i">
          <template v-if="result">
            <img
              src="../../static/emoji-growing-star.png"
              alt="growing star emoji"
            />
          </template>
          <template v-else>
            <img
              src="../../static/emoji-milky-way.png"
              alt="growing star emoji"
            />
          </template>
        </span>
      </div>
    </header>

    <!-- 成績 -->
    <p class="statistics">
      あなたの成績: {{ successCount }}/{{ totalCount }} ＝ 成功率
      {{ successRate }} %
    </p>

    <!-- タップした文字 -->
    <div class="tapped-char-box">
      <div class="tapped-char" v-for="i in [0, 1, 2, 3, 4]" :key="i">
        {{ tappedCharacters[i] }}
      </div>
    </div>

    <!-- 選択肢 -->
    <div class="select-characters">
      <div class="columns first-column">
        <!-- >= tablet の場合に上の行が左に寄るのを防ぐために挿入 -->
        <div class="column is-hidden-mobile"></div>

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

        <!-- >= tablet の場合に上の行が左に寄るのを防ぐために挿入 -->
        <div class="column is-hidden-mobile"></div>
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

    <h1 v-show="!isFinished">想いを叫ぼう！</h1>

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

    <hr />

    <social-sharing
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

    tweetText() {
      return `あなたは ${
        this.successCount
      } 個のスタァ🌟を手に入れました！ 成功率は ${this.successRate} % です！\n${
        this.resultsEmoji
      }\n\n${document.title}`;
    },

    resultsEmoji() {
      return this.results.map(result => (result ? '🌟' : '🌌')).join('');
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

.select-characters {
  max-width: 350px;
  margin: 0 auto 1em;
}

.select-characters .columns {
  margin-bottom: 0;
}

.character-button-box {
  display: inline-flex;
  padding: 0.5em;
}

.character-button {
  width: 62px;
  height: 62px;
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
