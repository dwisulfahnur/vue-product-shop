<template>
  <div>
    {{ productId }}
  </div>
</template>
<script>
import ProductList from "../components/products/ProductList.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  components: { ProductList },
  setup(props) {
    const route = useRoute();
    const productId = route.params.id;
    return { productId };
  },
};
</script>