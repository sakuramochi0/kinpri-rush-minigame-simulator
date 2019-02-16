<template>
  <div id="game">
    <p>スタァを応援しよう！</p>
    <p>ターゲット: {{ $route.params.message }}</p>
    <p>ターゲット: {{ message }}</p>
    <button class="button is-primary" @click="popCharacter">
      select one!
    </button>
    <p class="tapped-characters">
      <span v-for="char in tappedCharacters" :key="char">
        {{ char }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: {},
  data() {
    return {
      message: [],
      tappedCharacters: [],
    };
  },
  beforeMount() {
    this.message = [...this.$route.params.message];
  },
  computed: {},
  methods: {
    popCharacter() {
      const index = Math.floor(Math.random() * this.message.length);
      const tappedCharacter = this.message.splice(index, 1)[0];
      this.tappedCharacters.push(tappedCharacter);
    },
  },
};
</script>

<style scoped>
#game p {
  margin: 2em;
}
</style>
