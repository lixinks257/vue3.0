<template>
  <!--
        此处样式我使用css hover来做
        视频中老师用到的两个方法 @mouseenter @mouseleave分别为鼠标进入和离开的回调
    -->
  <li class="todo-item">
    <div>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ todoitem.title }}</span>
    </div>
    <button class="delBtn" @click="del(index)">删除</button>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject, watch } from 'vue'
// 引入接口
import { Todo } from '@/types/todo'
export default defineComponent({
  name: 'ListItem',
  props: {
    todoitem: {
      //函数返回的是Todo类型
      type: Object as () => Todo,
      required: true
    },
    index: {
      type: Number
    }
  },
  setup(props, con) {
    console.log('props', props, con)
    // // 当复选框选中时，所选事件下标索引将添加到selectedItemList中
    // let selectedItemList = reactive([]);
    // if (window.sessionStorage.getItem("selectedItemList")) {
    //   selectedItemList = JSON.parse(
    //     window.sessionStorage.getItem("selectedItemList") + ""
    //   );
    //   selectedItemList.push();
    // }
    const delTodo = inject('delTodo')
    const edit = inject('edit')
    const updateState = inject('updateState')
    const del = (index: number) => {
      if (window.confirm('确认删除吗？')) {
        if (typeof delTodo === 'function') delTodo(index)
      }
    }
    // const updateState = (index: number) => {
    //   if (window.confirm("确认删除吗？")) {
    //     if (typeof delTodo === "function") delTodo(index);
    //   }
    // };
    // const isCompleted = computed(() => {
    //   return props.todoitem.isCompleted;
    // });
    const isCompleted = computed({
      get() {
        return props.todoitem.isCompleted
      },
      set(val) {
        if (typeof updateState === 'function') updateState(props.todoitem, val)
      }
    })
    // const isCompleted = computed({
    //   get() {
    //     return props.todoitem.isCompleted;
    //   },
    //   set(val) {
    //     if (typeof updateState === "function") updateState(props.todoitem, val);
    //   },
    // });
    return {
      isCompleted,
      del
    }
  }
})
</script>

<style scoped>
.todo-item {
  border: 1px solid lightblue;
  list-style: none;
  width: 100%;
  padding: 5px;
  margin-left: -40px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.delBtn {
  background-color: #e95b47;
  color: #fff;
  border-radius: 5px;
  border: none;
  display: none;
}
.todo-item:hover {
  color: lightcoral;
  background-color: rgba(137, 190, 78, 0.3);
}
.todo-item:hover .delBtn {
  display: block;
}
</style>
