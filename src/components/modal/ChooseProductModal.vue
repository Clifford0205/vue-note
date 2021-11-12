<template>
  <b-modal
    id="choose-product-modal"
    ref="my-modal"
    hide-header
    hide-footer
    modal-class="modal-style choose-product-modal radius"
  >
    <div class="content">
      <div class="content__header">
        <p class="mx-auto">選擇商品</p>
        <button class="close-btn" @click="hideModal">
          X
        </button>
      </div>

      <div class="content__main">
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab
            v-for="(tab, index) in tabs"
            :key="index"
            :title="tab.name"
            @click="tab.initial = true"
          >
            <ProductsTabComponent
              v-model="chooseArray"
              :tab="tab"
              v-if="tab.initial"
            />
            <!-- <div v-if="tab.initial">
              {{ tab.name }}
            </div> -->
          </b-tab>
        </b-tabs>
      </div>

      <div class="button-btn-area row-btn">
        <button type="button" class="radius-btn" @click="setChooseProduct">
          確定
        </button>
      </div>
    </div>
  </b-modal>
</template>

<script>
import ProductsTabComponent from './../ChooseProductModal/ProductsTabComponent';

import { mapGetters } from 'vuex';

export default {
  name: 'ChooseProductModal',
  components: {
    ProductsTabComponent
  },
  props: {
    chooseArrayFromPost: {
      type: Array,
      default: () => []
    },
    productArrFromPost: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tabIndex: 0,
      tabs: [
        { name: '語音鬧鐘', type: 'clock', initial: true },
        { name: '轉蛋', type: 'egg', initial: false },
        { name: '貼圖', type: 'sticker', initial: false },
        { name: '周邊', type: 'merch', initial: false }
      ],
      chooseArray: [],
      productArr: []
    };
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    fanClubId() {
      return this.$route.params.fanClubId;
    }
  },
  // created() {
  //   this.fetchInitalPage();
  // },
  methods: {
    initialData() {
      this.chooseArray = this.chooseArrayFromPost;
      this.productArr = this.productArrFromPost;
    },
    showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal() {
      this.$refs['my-modal'].hide();
    },

    setChooseProduct() {
      this.$emit('setChooseProduct', this.productArr, this.chooseArray);
      // this.$emit('setChooseProduct');
      this.hideModal();
    }
  }
};
</script>
