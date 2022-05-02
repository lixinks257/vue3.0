<template>
  <h2>APP父级组件1</h2>
  <h3>{{ msg }}</h3>
  <button @click="isShow = !isShow">更新</button>
  <hr />
  <child v-if="isShow"></child>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import child from "./components/child.vue";
export default defineComponent({
  name: "name",
  components: {
    child,
  },
  setup() {
    let isShow = ref(true);
    return { isShow };
  },
});
</script>

<style scoped></style>
