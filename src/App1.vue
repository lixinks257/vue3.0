<template>
  <div class="todo-wrap">
    <h2>2022:todoList</h2>
    <Header @addToPlan="addToPlan"></Header>
    <List :todos="todos"></List>
    <Footer :todos="todos" @isCheckAll="isCheckAll" :clearCompleted="clearCompleted" />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, toRefs, watch, onMounted } from "vue";
import Header from "./components/Head.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { saveTodos, readTodos } from "./utils/localStorageUtils";
import { Todo } from "@/types/todo.ts";
// interface Todo {
//   id: number;
//   title: string;
//   isCompleted: boolean;
// }
// import { saveTodos, readTodos } from "@/utils/localStorageUtils";

export default defineComponent({
  name: "App",
  setup() {
    // const state = reactive<{ todos: Todo[] }>({
    //   todos: [
    //     { id: 1, title: "22", isCompleted: false },
    //     { id: 2, title: "111", isCompleted: true },
    //     { id: 3, title: "333", isCompleted: false },
    //   ],
    // });
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    });
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos();
      }, 1000);
    });
    watch(() => state.todos, saveTodos, { deep: true });
    const addToPlan = (val: Todo) => {
      console.log("addToPlan", val);
      state.todos.unshift(val);
    };
    // 删除子项
    const delTodo = (index: number) => {
      console.log("indx", index);
      state.todos.splice(index, 1);
    };
    // 更新勾选子项状态
    const updateState = (todo: Todo, val: boolean) => {
      todo.isCompleted = val;
    };
    // 全部勾选
    const isCheckAll = (val: boolean) => {
      console.log("isCheckAll", val);
      state.todos.forEach((item: Todo) => {
        item.isCompleted = val;
      });
      // todo.isCompleted = val;
    };
    const clearCompleted = () => {
      state.todos = state.todos.filter((item) => {
        return !item.isCompleted;
      });
    };
    provide("delTodo", delTodo);
    provide("updateState", updateState);

    return {
      ...toRefs(state),
      addToPlan,
      delTodo,
      isCheckAll,
      clearCompleted,
    };
  },
  components: {
    Header,
    List,
    Footer,
  },
});
</script>

<style>
.todo-wrap {
  width: 500px;
  margin: 0 auto;
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 20px;
}
.todo-wrap h2 {
  text-align: center;
}
</style>
