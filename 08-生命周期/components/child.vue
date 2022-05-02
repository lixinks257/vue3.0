<template>
  <h2>Child子组件</h2>
  <h3>msg:{{ msg }}</h3>
  <button @click="update">更新</button>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  ref,
} from "vue";
export default defineComponent({
  name: "child",
  beforeCreate() {
    console.log("beforeCreate()");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    console.log("mounted");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  // 2.0 beforeDestroy -> onBeforeUnmount
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  // 2.0 destroyed->unmounted
  unmounted() {
    console.log("unmounted");
  },
  // 3.0生命周期函数全部放到组合api里面了
  // 3.0生命周期函数全部要快于2.0生命周期函数
  setup() {
    const msg = ref("abc");
    const update = () => {
      msg.value += "---";
    };
    onBeforeMount(() => {
      console.log("--onBeforeMount");
    });

    onMounted(() => {
      console.log("--onMounted");
    });

    onBeforeUpdate(() => {
      console.log("--onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("--onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("--onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("--onUnmounted");
    });
    
    return {
      update,
      msg,
    };
  },
});
</script>
<style scoped></style>
