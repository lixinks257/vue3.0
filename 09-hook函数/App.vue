<template>
  <h2>hook函数</h2>
  <h3>x: {{ x }}, y: {{ y }}</h3>

  <h2 v-if="loading">LOADING...</h2>
  <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>
  <!-- <ul v-else>
    <li>id: {{ result.id }}</li>
    <li>name: {{ result.name }}</li>
    <li>distance: {{ result.distance }}</li>
  </ul> -->
  <ul v-for="p in result" :key="p.id">
    <li>id: {{ p.id }}</li>
    <li>name: {{ p.name }}</li>
    <li>distance: {{ p.distance }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
// import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";
interface AddressResult {
  id: string;
  name: string;
  distance: string;
}
interface PrdResult {
  id: string;
  name: string;
  distance: string;
}
export default defineComponent({
  name: "name",
  setup() {
    // 1.使用Vue3的组合API封装的可复用的功能函数
    // 2.自定义hook的作用类似于vue2中的mixin技术
    // 3.自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
    // const { loading, result, errorMsg } = useRequest<AddressResult>("/address.json");
    // 使用接口定义对象
    const { loading, result, errorMsg } = useRequest<PrdResult[]>("/products.json");
    // const { loading, result, errorMsg } = useRequest("/products.json");
    console.log("XXX", result);

    // const { x, y } = useMousePosition();
    // return {
    //   x,
    //   y,
    // };

    watch(result, () => {
      if (result.value) {
        console.log(result.value.length); // 有提示
      }
    });

    return {
      loading,
      result,
      errorMsg,
    };
  },
});
</script>

<style scoped></style>
