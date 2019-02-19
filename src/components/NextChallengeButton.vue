<template>
  <p>
    <button
      v-if="isCollect"
      class="button is-success"
      v-show="isFinished"
      @click="$emit('next-challenge')"
    >
      <b-icon icon="star"></b-icon>
      <span>Next Challenge !!</span>
    </button>
    <button
      v-else
      class="button is-danger"
      v-show="isFinished"
      @click="$emit('next-challenge')"
    >
      <b-icon icon="fire"></b-icon>
      <span>Next Challenge !!</span>
    </button>
  </p>
</template>

<script>
import BIcon from 'buefy/src/components/icon/Icon';

export default {
  name: 'next-challenge-button',
  components: { BIcon },
  props: {
    isCollect: { type: Boolean },
    isFinished: { type: Boolean },
  },
};
</script>

<style scoped></style>
