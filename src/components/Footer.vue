<template>
  <div class="todo-footer">
    <div>
      <label><input type="checkbox" v-model="isCheckAll" /></label>
      <span class="todo-tag">已完成 {{ count }} /全部 {{ todos.length }}</span>
    </div>
    <button class="btn btn-danger" @click="clearCompleted">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
    clearCompleted: {
      type: Function,
      required: true,
    },
  },
  setup(props, { emit }) {
    // const count = ref("1");
    const count = computed(() => {
      // 对象属性求和
      return props.todos.reduce((pre: number, curr: Todo) => {
        console.log("a", pre, curr);
        return pre + (curr.isCompleted ? 1 : 0);
      }, 0);
    });
    // console.log("count", count);
    const isCheckAll = computed({
      get() {
        return count.value > 0 && count.value === props.todos.length;
      },
      set(val) {
        emit("isCheckAll", val);
      },
    });
    // const clear = () => {
    //   props.clearCompleted(true);
    //   // emit("clearCompleted", true);
    // };
    return {
      count,
      isCheckAll,
    };
  },
});
</script>

<style scoped>
.todo-footer {
  display: flex;
  justify-content: space-between;
}
.btn-danger {
  color: #fff;
  background-color: #e95b47;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
}
.todo-tag {
  margin-left: 15px;
}
</style>
