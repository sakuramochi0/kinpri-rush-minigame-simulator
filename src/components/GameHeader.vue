<template>
  <header>
    <!-- 戻るボタン -->
    <router-link to="/">
      <b-icon
        icon="arrow-left-bold-circle-outline"
        class="back-icon"
        size="is-large"
      ></b-icon>
    </router-link>

    <!-- トップ絵文字 -->
    <template v-if="isFinished && isCollect">
      <img src="../../static/emoji-party-popper.png" alt="emoji-party-popper" />
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

    <!-- ゲーム結果の絵文字 -->
    <div class="star-box">
      <!-- 20 回以下の場合-->
      <div v-if="results.length <= 20">
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

      <!-- 20 回より多い場合-->
      <div v-else>
        <p>
          <img
            src="../../static/emoji-growing-star.png"
            alt="growing star emoji"
          />
          × {{ successCount }}
          <img
            src="../../static/emoji-milky-way.png"
            alt="growing star emoji"
          />
          × {{ failedCount }}
        </p>
        <span
          v-for="(result, i) in results.slice(-10)"
          :key="i"
          :style="`opacity: ${0.2 * (i + 1)}`"
        >
          <template v-if="result"
            ><img
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
    </div>
  </header>
</template>

<script>
import BIcon from 'buefy/src/components/icon/Icon';

export default {
  name: 'game-header',
  components: { BIcon },
  props: {
    failedCount: { type: Number },
    isCollect: { type: Boolean },
    isFinished: { type: Boolean },
    results: { type: Array },
    successCount: { type: Number },
  },
};
</script>

<style scoped>
.back-icon {
  position: absolute;
  top: 5px;
  left: 5px;
  color: #b3e5fc;
}

.star-box {
  width: 300px;
  margin: auto;
  color: whitesmoke;
}

.star-box img {
  height: 30px;
}
</style>
