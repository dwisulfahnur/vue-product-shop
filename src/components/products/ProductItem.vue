<template>
  <li
    class="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200"
  >
    <div class="flex-1 flex flex-col p-0">
      <div
        :style="{ backgroundImage: 'url(' + image + ')' }"
        class="h-32 bg-cover bg-no-repeat bg-center"
      ></div>
      <!-- <img class="w-full flex-shrink-0 mx-auto" :src="image" alt="" /> -->
      <div class="p-4 flex flex-col gap-2">
        <h3 class="text-gray-900 text-sm font-medium">{{ name }}</h3>
        <dl class="flex-grow flex flex-col justify-between">
          <dt class="sr-only">{{ name }}</dt>
          <dd class="text-gray-500 text-sm">
            {{ $n(price, "currency", "id-ID") }}
          </dd>
        </dl>
      </div>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="-ml-px w-0 flex-1 flex">
          <a
            @click="addToCart"
            href="javascript:void(0)"
            class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
          >
            <i class="fas fa-shopping-cart"></i>
            <span class="ml-3">Add to Cart</span>
            <span class="ml-1" v-if="cartItem"> ({{ cartItem.itemAmount }})</span>
          </a>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  props: {
    id: Number,
    name: String,
    image: String,
    price: Number,
  },
  setup(props) {
    const store = useStore();
    return {
      cartItem: computed(() =>
        store.state["cart"].productItems.find((i) => i.productId === props.id)
      ),
      addToCart: () =>
        store.dispatch("cart/addToCart", {
          productId: props.id,
          itemAmount: 1,
        }),
    };
  },
};
</script>