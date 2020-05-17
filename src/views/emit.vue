<template>
  <div>
    <p>
      This is Component in Parent
      <span style="color: red;">{{ counter }}</span>
    </p>

    <ChildrenComponent :counter="counter" @counter-update="updateCounter" />

    <p>
      然而這有著顯著的缺點：我們在父組件中難以一眼看出此 props 是被雙向綁定的。
    </p>

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
import ChildrenComponent from '@/components/emit/ChildrenComponent';
export default {
  components: {
    ChildrenComponent
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    updateCounter(val) {
      this.counter = val;
    }
  }
};
</script>
