<template>
  <div>
    <button @click="handleMinus">
      -
    </button>

    <span>This is component in children counter: {{ counter }}</span>

    <button @click="handlePlus">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      myCounter: 0
    };
  },
  methods: {
    handlePlus() {
      this.$emit('counter-update', this.counter + 1);
    },

    handleMinus() {
      this.$emit('counter-update', this.counter - 1);
    }
  }
};
</script>
