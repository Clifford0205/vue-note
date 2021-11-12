<template>
  <div class="about">
    <h1 @click="handleShowModal">Show CheckBox Modal</h1>
    <ChooseProductModal ref="choose-product-modal" />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import ChooseProductModal from '@/components/modal/ChooseProductModal.vue';
export default {
  name: 'CheckBox',
  components: {
    ChooseProductModal
  },
  data() {
    return {};
  },
  methods: {
    handleShowModal() {
      this.$refs['choose-product-modal'].showModal();
    }
  }
};
</script>
