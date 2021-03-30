<template>
  <navigation />
  <div class="container mx-auto px-6 sm:px-0 min-h-screen pt-10">
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation },
};
</script>
<style lang="scss" scoped>
.min-h-screen {
  min-height: calc(100vh - 90px);
}
</style>>
