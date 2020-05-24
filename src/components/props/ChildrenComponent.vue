<template>
  <div>
    <button @click="toggleProps">
      Change
    </button>
    <div class="" v-if="theStatus">狀態true</div>

    <div class="" v-if="!theStatus">狀態false</div>
  </div>
</template>

<script>
export default {
  props: {
    theStatus: {
      type: Boolean
    }
  },
  data() {
    return {
      myCounter: 0
    };
  },
  methods: {
    toggleProps() {
      this.theStatus = !this.theStatus;
    }
  }
};
</script>
