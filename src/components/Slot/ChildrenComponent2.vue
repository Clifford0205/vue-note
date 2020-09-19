<template>
  <div>
    <slot :info="info"></slot>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      required: true
    }
  },
  data() {
    return {
      // info: {
      //   name: '電腦',
      //   price: '20,000',
      //   material: '不鏽鋼'
      // }
    };
  },
  components: {},
  created() {},
  computed: {}
};
</script>

<style scoped>
h1 {
  text-align: center;
}
form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
#useful-links ul {
  padding: 0;
  list-style: none;
}
#useful-links li {
  display: inline-block;
  margin-right: 10px;
}
form > div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}
#form-header {
  background: #ddd;
  border: 1px solid #bbb;
}
</style>
