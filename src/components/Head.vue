<template>
  <div class="header-wrap">
    <input
      type="text"
      v-model="todoItem"
      placeholder="输入待完成任务，按回车键添加"
      @keyup.enter="add"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { Todo } from "@/types/todo";
export default defineComponent({
  name: "Head",
  // props: {
  //   addToPlan: {
  //     type: Function,
  //     required: true,
  //   },
  // },
  setup(props, { emit }) {
    const todoItem = ref("");
    const add = () => {
      const text = todoItem.value;
      if (!text.trim()) return;
      const todo: Todo = {
        id: Date.now(),
        title: text.trim(),
        isCompleted: false,
      };
      // // setup中不能直接调用props中的内容
      // // 因此此处用到setup的props参数
      emit("addToPlan", todo);
      // props.addToPlan(todo);
      todoItem.value = "";
    };
    return {
      todoItem,
      add,
    };
  },
});
</script>

<style scoped>
.header-wrap input {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid lightblue;
  box-shadow: 1px 1px 1px rgba(153, 90, 90, 0.2);
}
</style>
