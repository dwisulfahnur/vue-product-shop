<template>
  <!--a href="javascript:void(0)" class="text-gray-400 hover:text-gray-500">
    <div class="h-10 w-10">
      <i class="fas fa-shopping-cart"></i>
      <span
        v-if="cartItemAmount > 0"
        class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"
      >
        {{ cartItemAmount }}
      </span>
    </div>
  </a-->
  <button
    @click="goToCart"
    class="py-4 px-1 relative border-2 border-transparent rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
    aria-label="Cart"
  >
    <svg
      class="h-6 w-6"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
    </svg>
    <span
      class="absolute inset-0 object-right-top -mr-6"
      v-if="cartItemAmount > 0"
    >
      <div
        class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white"
      >
        {{ cartItemAmount }}
      </div>
    </span>
  </button>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup(props) {
    const router = useRouter();
    const store = useStore();
    return {
      cartItemAmount: computed(() => store.state["cart"].productItems.length),
      cartItems: computed(() => store.state["cart"].productItems),
      goToCart: () => router.push({ name: "cart" }),
    };
  },
};
</script>