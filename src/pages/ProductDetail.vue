<template>
  <div
    v-if="product"
    class="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto pb-8"
  >
    <div>
      <img :src="product.image" class="w-full shadow border-lg" />
    </div>
    <div class="flex flex-col justify-between gap-3">
      <div>
        <h3 class="text-2xl">
          {{ product.name }}
        </h3>
        <span class="text-gray-500">{{
          $n(product.price, "currency", "id-ID")
        }}</span>
      </div>
      <div>
        <p class="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quasi veniam nulla aspernatur ex nemo optio eum, itaque iure eligendi
          molestiae tenetur quidem nostrum, consequuntur aperiam fuga labore
          hic? Ad!
        </p>
      </div>
      <div class="flex gap-4 flex-col justify-content">
        <div v-if="itemInCart">item in cart</div>
        <div class="flex justify-center mt-2">
          <a
            href="javascript:void(0)"
            @click="itemAmount > 0 ? itemAmount-- : null"
            class="mr-4 text-xl px-2 rounded-full h-8 w-8 hover:bg-indigo-50 border border-indigo-500 pointer text-indigo-500 font-light disabled text-center"
            :class="{
              'cursor-not-allowed text-gray-500 border-gray-500': !itemAmount,
            }"
          >
            -
          </a>
          <span class="text-xl">{{ itemAmount }}</span>
          <a
            href="javascript:void(0)"
            @click="itemAmount++"
            class="ml-4 text-xl px-2 rounded-full h-8 w-8 hover:bg-indigo-50 border border-indigo-500 pointer text-indigo-500 font-light text-center"
            >+</a
          >
        </div>
        <button
          @click="addToCart"
          class="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white hover:text-gray-100 rounded-full shadow w-full sm:w-auto text-lg"
        >
          <i class="fas fa-shopping-cart mr-3"></i>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  <not-found v-else />
</template>
<script>
import ProductList from "../components/products/ProductList.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import NotFound from "./NotFound.vue";

export default {
  components: { ProductList, NotFound },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const productSlug = route.params.slug;

    const itemAmount = ref(1);
    const product = computed(() =>
      store.getters["product/getProductBySlug"](productSlug)
    );

    const itemInCart = computed(() => {
      console.log(store.state["cart"].productItems);
      return store.state["cart"].productItems.find(
        (item) => item.productId === product.id
      );
    });
    console.log(itemInCart.value);

    onMounted(() => {
      if (product.value) {
        document.title = product.value.name;
      } else {
        store.dispatch("nav/disableNav");
      }
    });

    return {
      itemAmount,
      productSlug,
      product,
      itemInCart,
      addToCart: () => {
        store.dispatch("cart/addToCart", {
          productId: product.value.id,
          itemAmount: itemAmount.value,
        });
        router.push({ name: "products" });
      },
    };
  },
};
</script>