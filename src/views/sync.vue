<template>
  <div>
    <p>
      This is Component in Parent
      <span style="color: red;">{{ counter }}</span>
    </p>

    <ChildrenComponent :counter.sync="counter" />

    <br />
    <br />
    <ul class="">
      <li>
        1.在 Parent Component 中，我們捨棄了 v-on:counter-update 事件監聽
      </li>
      <li>
        2.在 Children Component中，我們改為使用 update:counter 作為更新的事件。
      </li>

      <li>
        語法糖:counter.sync 其實是 v-bind="counter" v-on:update:counter="counter
        = $event" 的縮寫。 意即，真正的 code 其實是長這樣 所以這也就是為什麼 Vue
        會說這只是個修飾符的原因。
      </li>
    </ul>

    <p>
      <a
        href="https://medium.com/%E4%B8%80%E5%80%8B%E5%B0%8F%E5%B0%8F%E5%B7%A5%E7%A8%8B%E5%B8%AB%E7%9A%84%E9%9A%A8%E6%89%8B%E7%AD%86%E8%A8%98/vue-%E4%BD%BF%E7%94%A8-props-async-%E5%90%8C%E6%AD%A5%E7%88%B6%E5%AD%90%E7%B5%84%E5%BB%BA%E4%B9%8B%E9%96%93%E7%9A%84%E5%82%B3%E5%80%BC-f7b1d3007836"
        target="_blank"
      >
        資料來源
      </a>
    </p>
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
      counter: 0
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
