<template>
  <div>
    <button @click="toggleProps">
      Change
    </button>
    <div class="" v-if="theObject.objStatus">狀態true</div>

    <div class="" v-if="!theObject.objStatus">狀態false</div>
  </div>
</template>

<script>
export default {
  props: {
    theObject: {
      type: Object
    }
  },
  data() {
    return {
      myCounter: 0
    };
  },
  methods: {
    toggleProps() {
      this.theObject.objStatus = !this.theObject.objStatus;
    }
  }
};
</script>
