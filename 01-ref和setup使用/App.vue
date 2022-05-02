<template>
  <!-- vue2中html模板中必须要有一队根标签，vue3没有跟标签 -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <h1>{{ num }}</h1>
  <button @click="update">update</button>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
// defineComponent函数,定义一个组件
import { defineComponent, ref } from "vue";
// import HelloWorld from './components/HelloWorld.vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  name: "App",
  //
  setup() {
    // 1.定义一个基本属性,2.返回一个对象，3.不需要在模板中使用value的形式
    let num = ref(1);
    console.log("xxx", num);
    function update() {
      num.value++;
    }
    return {
      num,
      update,
    };
  },
  // components: {
  //   HelloWorld
  // }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
