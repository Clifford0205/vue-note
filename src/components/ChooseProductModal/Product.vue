<template>
  <li class="product-row" @click="handleDisablied(product.name)">
    <input
      :id="`product-${product.id}`"
      v-model="chooseArray"
      type="checkbox"
      :value="product"
      class="hidden-checkbox"
      :disabled="
        value.length > 2 &&
          value.findIndex(item => item.name == product.name) == -1
      "
    />
    <label :for="`product-${product.id}`" class="product-item">
      <div class="img-container">
        <img :src="product.img" alt="兜粉" class="product-img" />
      </div>
      <div class="product-text">
        <p class="product-name">{{ product.name }}</p>
      </div>
    </label>
  </li>
</template>

<script>
export default {
  name: 'Product',
  props: {
    value: {
      type: Array,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    chooseArray: {
      get() {
        return this.value;
      },
      set(value) {
        if (this.value.length > 2 && this.value.length < value.length) {
          alert('最多只能選三樣');
          return;
        }

        this.$emit('input', value);
      }
    }
  },

  methods: {
    handleDisablied(name) {
      if (
        this.value.length > 2 &&
        this.value.findIndex(item => item.name == name) == -1
      ) {
        alert('最多選三項');
      } else {
        return;
      }
    }
  }
};
</script>
