<template>
  <h2>APP父级组件1</h2>
  <h3>{{ msg }}</h3>
  <button @click="msg += '---'">CHANGE</button>
  <hr />
  <child :msg="msg" :msg2="'cba'" @xx="xx"></child>
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
    console.log("THIS", this);
    let msg = ref("2222");
    const xx = (val: string) => {
      msg.value += val;
    };
    return { msg, xx };
  },
});
</script>

<style scoped></style>
