<template>
  <h1>reactive的使用</h1>
  <h3>{{user.name}}</h3>
  <h3>{{user.age}}</h3>
  <h3>性别: {{user.gender}}</h3>
  <button @click="updateUser">更新user</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
  name: "App",
  // 函数的入口
  setup() {
    const obj = {
      name: '0',
      age: 1,
    };
    // 对象的响应式 1.接收一个普通对象，然后返回该对象的响应式代理对象
    const user = reactive(<any>obj);
    // const updateUser = () => {
    //   user.name = 'XXX';
    //   user.age = 10;
    //   user.gender = '女';
    // };
    function updateUser() {
      user.name = 'XXX';
      user.age = 10;
      // 通过代理对象新增和删除值，被代理的的对象属性值也会跟着改变
      user.gender = '女';
      delete user.name
    }
    // console.log('user', user);
    return {
      user,
      updateUser
    };
  },
});
</script>
