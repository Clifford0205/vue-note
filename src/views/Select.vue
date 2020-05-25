<template>
  <div>
    <select name="" id="">
      <option v-for="(item, index) in selectData" :value="item.id" :key="index">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
import ChildrenComponent from '@/components/sync/ChildrenComponent';
export default {
  components: {
    ChildrenComponent
  },
  data() {
    return {
      selectData: [
        {
          id: 1,
          text: '狗'
        },
        {
          id: 2,
          text: '豬'
        },
        {
          id: 3,
          text: '雞'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    text-align: left;
    margin-bottom: 10px;
    color: red;
  }
}
</style>
