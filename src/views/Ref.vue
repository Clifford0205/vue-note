<template>
  <div>
    <button @click="handleClick">點擊我觸發</button>
    <ChildrenComponent ref="forMyTest" />
    <p>使用 ref 觸發子元件的函式</p>
    <p>範例來自 sat 講師頁面 MeTeacher</p>
  </div>
</template>

<script>
import ChildrenComponent from '@/components/ref/ChildrenComponent';

export default {
  components: {
    ChildrenComponent
  },
  data() {
    return {
      theStatus: false,
      theObject: {
        objStatus: false
      }
    };
  },
  methods: {
    handleClick() {
      this.$refs.forMyTest.testFunction();
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  margin-bottom: 10px;
  color: red;
}
</style>
