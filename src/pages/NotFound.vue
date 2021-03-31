<template>
  <div
    class="flex justify-center items-center align-middle min-h-screen text-center"
  >
    <div>
      <h1 class="text-4xl text-gray-700 mb-2">Not Found</h1>
      <span class="text-lg text-gray-700"
        >Back to
        <router-link to="/" class="text-indigo-500">Home</router-link></span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>