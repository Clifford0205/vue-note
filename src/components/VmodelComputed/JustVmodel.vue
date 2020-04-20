<template>
  <div>
    <input type="text" v-model="currentMsg" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  computed: {
    currentMsg: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>
