<template>
  <h2>Child子组件</h2>
  <h3>msg :{{ msg }}</h3>
  <h3>msg2 :{{ $attrs.msg2 }}</h3>
  <!-- <h4>{{ dd.a }}</h4> -->
  <!-- <h4>{{ b }}</h4> -->
  <h3>m: {{ m }}</h3>
  <h3>n: {{ n }}</h3>
  <button @click="btn3">btn3</button>
  <slot name="xx"></slot>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "child",
  props: ["msg"],
  beforeCreate() {
    console.log("beforeCreate-----");
  },
  /// 1.setup在beforeCreate之前执行了，且只执行一次，
  // 2.由此推测出，当前组件还没创建出来，，组件的实例对象this不能用，this是undefined,composition API也不能用
  // 3.setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据
  // 4.返回对象中的属性和方法会合并成为组件对象的属性和方法
  // 5.一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
  // 6.setup(props, context) / setup(props, {attrs, slots, emit})
  // 7.props: 包含props配置声明且传入了的所有属性的对象
  // 8.attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
  // 9.slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
  // 10.emit: 用来分发自定义事件的函数, 相当于 this.$emit
  setup(props, { attrs, emit, slots }) {
    const obj: any = { a: 1 };
    let b: any = ref(1);
    const dd = reactive(obj);
    console.log("SETUP执行了", this);
    b = attrs.msg;
    console.log(dd.a);
    const m = ref(2);
    const n = ref(3);
    console.log("slots", slots);
    // console.log("props", props.msg);
    // const test = props.msg;
    console.log("context", attrs);
    obj.a = attrs.msg;
    // const a = ref(2);
    const bt1 = () => {
      console.log("btn1");
    };
    const btn3 = () => {
      emit("xx", "kkk");
      m.value += 2;
      n.value += 2;
    };
    return { bt1, dd, b, btn3, m, n };
  },
  data() {
    return {
      a: 1,
    };
  },
  mounted() {
    console.log("this", this);
  },
  methods: {
    msg2() {
      console.log("msg2");
    },
  },
});
</script>
<style scoped></style>
