<template>
  <h2>shallowReactive和shallowRef的区别</h2>
  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>
  <button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, reactive, shallowReactive, ref, shallowRef } from "vue";
export default defineComponent({
  name: "name",
  setup() {
    /* 
    shallowReactive与shallowRef
      shallowReactive: 只处理了对象内最外层属性的响应式(也就是浅响应式)
      shallowRef: 只处理了value的响应式, 不进行对象的reactive处理
    总结:
      reactive与ref实现的是深度响应式, 而shallowReactive与shallowRef是浅响应式
      什么时候用浅响应式呢?
        一般情况下使用ref和reactive即可,
        如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
        如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
    */
    const m1 = reactive({ a: 1, b: { c: 2 } });
    const m2 = shallowReactive({ a: 1, b: { c: 2 } });
    const m3 = ref({ a: 1, b: { c: 2 } });
    const m4 = shallowRef({ a: 1, b: { c: 2 } });
    console.log("m4", m4, m3);
    const update = () => {
      //   m1.a += 2;
      //   m1.b.c += 2;
      m2.b.c += 2;
      //   m2.a += 2;
      //   m3.value.b.c += 2;
      //   m3.value.a += 2;
      //   m4.value.a += 2;
      //   m4.value.b.c += 2;
    };
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>

<style scoped></style>
