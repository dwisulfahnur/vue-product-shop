<template>
  <div class="text-center"></div>
  <div class="flex items-center align-middle justify-center">
    <ul
      class="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 grid grid-cols-2 sm:grid-cols-3 gap-6 mx-auto pb-8"
    >
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :image="product.image"
        :price="product.price"
      />
    </ul>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ProductItem from "./ProductItem.vue";

export default {
  name: "ProductList",
  components: { ProductItem },
  setup(props) {
    const store = useStore();
    return {
      products: computed(() => store.state["product"].products),
    };
  },
};
</script>