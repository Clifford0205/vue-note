<template>
  <div>
    <h1>這台是我的電腦</h1>
    <!-- <ChildrenComponent :info="myInfo" v-slot="mySlot"> -->
    <!-- 未指定的內容對應默認插槽 -->
    <!-- 請注意插槽的縮寫語法不能和具名插槽混用，因為它會導致作用域不明確： -->
    <ChildrenComponent :info="myInfo">
      <template v-slot:default="mySlot">
        <h2>電腦名稱: {{ mySlot.info.name }}</h2>
        <h3>價格: {{ mySlot.info.price }}</h3>
        <h4>材質: {{ mySlot.info.material }}</h4>
      </template>

      <template v-slot:other="mySlot">
        <div>{{ mySlot.info.location }}</div>
      </template>
    </ChildrenComponent>
  </div>
</template>

<script>
// 資料來源:https://cloud.tencent.com/developer/article/1408212

import ChildrenComponent from '@/components/Slot/ChildrenComponent';
export default {
  components: {
    ChildrenComponent
  },
  data() {
    return {
      myInfo: {
        name: '超級電腦',
        price: '999',
        material: '不鏽鋼',
        location: '7-11'
      }
    };
  },
  methods: {}
};
</script>
