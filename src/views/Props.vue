<template>
  <div>
    <ChildrenComponent :theStatus="theStatus" />
    <ChildrenComponent2 :theObject="theObject" />

    <p>
      在 JavaScript 中物件和陣列是引用類型，指向同一個記憶體空間，如果 props
      是一個物件或陣列，在子組件內部改變它會影響父組件的狀態。
    </p>

    <a
      href="https://jeremysu0131.github.io/Vue-js-%E7%88%B6%E5%AD%90%E7%B5%84%E4%BB%B6%E6%BA%9D%E9%80%9A-Props/"
    >
      資料來源
    </a>
  </div>
</template>

<script>
import ChildrenComponent from '@/components/props/ChildrenComponent';
import ChildrenComponent2 from '@/components/props/ChildrenComponent2';
export default {
  components: {
    ChildrenComponent,
    ChildrenComponent2
  },
  data() {
    return {
      theStatus: false,
      theObject: {
        objStatus: false
      }
    };
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
