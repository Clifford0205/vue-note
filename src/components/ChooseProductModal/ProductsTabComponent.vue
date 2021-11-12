<template>
  <ul class="product-list-area">
    <Product
      v-for="(product, index) in dataList"
      :key="index"
      :product="product"
      v-model="chooseArray"
    />
    <!-- <Product
      v-for="(product, index) in dataList"
      :key="index"
      :product="product"
      :value="value"
      @input="emitModalChooseArray"
    /> -->
  </ul>
</template>

<script>
import Product from './Product';

export default {
  name: 'ProductsTabComponent',
  components: {
    Product
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    tab: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dataList: [
        {
          id: `${this.$props.tab.type}1`,
          name: `${this.$props.tab.type}測測`,
          type: `${this.$props.tab.type}`,
          img:
            'https://s3-dolfan.twjoin.app/media_staging/8cf3ae39-0189-4535-9251-6fa92556d827/image_0SIFYQrUkKNP4C6iOQpv.jpg'
        },
        {
          id: `${this.$props.tab.type}2`,
          name: `${this.$props.tab.type}測測2`,
          type: `${this.$props.tab.type}`,
          img:
            'https://s3-dolfan.twjoin.app/media_staging/8cf3ae39-0189-4535-9251-6fa92556d827/image_0SIFYQrUkKNP4C6iOQpv.jpg'
        },
        {
          id: `${this.$props.tab.type}3`,
          name: `${this.$props.tab.type}測測3`,
          type: `${this.$props.tab.type}`,
          img:
            'https://s3-dolfan.twjoin.app/media_staging/8cf3ae39-0189-4535-9251-6fa92556d827/image_0SIFYQrUkKNP4C6iOQpv.jpg'
        }
      ]
    };
  },
  computed: {
    chooseArray: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },

  methods: {
    emitModalChooseArray(value) {
      this.$emit('input', value);
    }
  }
};
</script>
