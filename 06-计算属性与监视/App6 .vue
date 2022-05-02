<template>
  <h2>ref-reactive的细节问题</h2>
  <p>m1: {{ m1 }}</p>
  <p>m2: {{ m2 }}</p>
  <p>m3: {{ m3 }}</p>
  <button @click="update">保存</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "name",
  setup() {
    // ref和reactive是vue3的composition api中2个最重要的响应式api
    // ref用来处理基本数据类型，reactive用来处理对象（递归深度响应式）
    // 如果用ref对象\数组，内部会自动将对象\数组转换为reactive的代理对象
    // ref内部：通过给value属性添加getter/setter来实现对数据的劫持
    // reactive内部：通过使用proxy来实现对对象内部所有属性的劫持，并通过Reflect操作对象内部数据
    // ref的数据操作：在js中要.value，在模板中不需要
    const m1 = ref("bac");
    const m2 = reactive({
      x: 1,
      y: {
        z: "abc",
      },
    });
    const m3 = ref({
      a1: 2,
      a2: {
        a3: "abc",
      },
    });
    console.log(m1, m2, m3);
    const update = () => {
      console.log("xxx");
      m1.value += "m1";
      m2.x = 3;
      m3.value.a1 = 5;
    };
    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>

<style scoped></style>
