<template>
  <div class="select-characters">
    <div class="columns first-column">
      <!-- >= tablet の場合に上の行が左に寄るのを防ぐために挿入 -->
      <div class="column is-hidden-mobile"></div>

      <div
        class="character-button-box column"
        v-for="(char, i) in message.slice(0, 2)"
        :key="`char-${i}`"
        :id="`char-${i}`"
        @click="$emit('tap-character', char, i)"
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
        @click="$emit('tap-character', char, i + 2)"
      >
        <span class="character-button">
          {{ char }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select-characters',
  props: {
    message: { type: Array },
  },
};
</script>

<style scoped>
.star-box img {
  height: 30px;
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
