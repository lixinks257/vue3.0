<template>
  <h2>计算属性和监听</h2>
  firstName: <input v-model="user.firstName" /><br />
  lastName: <input v-model="user.lastName" /><br />
  fullName1: <input v-model="fullName1" /><br />
  fullName2: <input v-model="fullName2" /><br />
  fullName3: <input v-model="fullName3" /><br />
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, ref, watchEffect } from "vue";
export default defineComponent({
  name: "name",
  setup() {
    const user = reactive({
      firstName: "A",
      lastName: "B",
    });
    // 只有getter的计算属性(计算属性的函数中如果只传入一个回调函数，表示的是get)
    const fullName1 = computed(() => {
      console.log("fullName1");
      return user.firstName + "_" + user.lastName;
    });
    //  computed返回是是ref对象
    console.log("fullName1", fullName1);
    // 有getter与setter的计算属性(计算属性里面是一个对象)
    const fullName2 = computed({
      get() {
        console.log("get");
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        console.log("set", val);
        const names = val.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });
    let fullName3 = ref("");
    // 与watch配置功能一致
    // 监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
    // 默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
    // 通过配置deep为true, 来指定深度监视
    watch(
      user,
      ({ firstName, lastName }) => {
        // console.log("fullName3", firstName, lastName);
        fullName3.value = `${firstName}_${lastName}`;
        // return user.firstName + "_" + user.lastName;
      },
      {
        immediate: true, //immediate为true, 来指定初始时立即执行第一次
        deep: true, // deep为true, 来指定深度监视
      }
    );
    // watchEffect: 监视所有回调中使用的数据
    // 不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
    // 默认初始时就会执行第一次, 从而可以收集需要监视的数据
    // 监视数据发生变化时回调
    // watchEffect(() => {
    //   // 立即执行
    //   fullName3.value = `${user.firstName}_${user.lastName}`;
    // });

    // 监听fullName3改变firstName,lastName

    // watch(
    //   fullName3,
    //   (val) => {
    //     console.log('val--', val);
    //     const name = val.split("_");
    //     user.firstName = name[0];
    //     user.lastName = name[1];
    //   },
    //   {
    //     immediate: true, //immediate为true, 来指定初始时立即执行第一次
    //     deep: true, // deep为true, 来指定深度监视ƒ
    //   }
    // );
    // watchEffect(() => {
    //   console.log("fullName3", fullName3);
    //   const name = fullName3.value.split("_");
    //   user.firstName = name[0];
    //   user.lastName = name[1];
    // });

    //watch多个数据:
    //使用数组来指定
    //如果是ref对象, 直接指定
    //如果是reactive对象中的属性,  必须通过函数来指定
    watch([() => user.firstName, () => user.lastName, fullName3], (values) => {
      console.log("watch多组数据values----", values);
    });
    return { user, fullName1, fullName2, fullName3 };
  },
});
</script>

<style scoped></style>
