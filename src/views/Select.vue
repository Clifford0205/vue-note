<template>
  <div>
    <select name="" id="" v-model="select1Value">
      <option
        v-for="(item, index) in select1Data"
        :value="item.id"
        :key="index"
      >
        {{ item.text }}
      </option>
    </select>

    <Select2
      v-model="selec2tValue"
      :options="select2Data"
      :settings="mySetting"
    ></Select2>
  </div>
</template>

<script>
// import ChildrenComponent from '@/components/sync/ChildrenComponent';
export default {
  components: {},
  data() {
    return {
      select1Value: '3',
      select1Data: [
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
      ],
      selec2tValue: '2',
      select2Data: [
        {
          id: 1,
          text: '披薩'
        },
        {
          id: 2,
          text: '漢堡'
        },
        {
          id: 3,
          text: '牛肉麵'
        }
      ],
      mySetting: {
        minimumResultsForSearch: -1,
        width: '100px',
        placeholder: '請選擇文章分類'
      }
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
