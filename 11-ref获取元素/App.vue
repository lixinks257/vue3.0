<template>
  <h3>REF获取元素</h3>
  <h2>App</h2>
  <input type="text" ref="inputRef" />---
  <!-- <input type="text" ref="inputRef" /> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
export default defineComponent({
  name: "name",
  setup() {
    const inputRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });
    watchEffect(() => {
      console.log("inputRef", inputRef.value);
    });

    return {
      inputRef,
    };
  },
});
</script>

<style scoped></style>
