// 引入createApp函数，创建的对应的应用，产生应用的实例对象
import { createApp } from 'vue'
// 引入app组件（所有组件的父级组件）
// import App from './App.vue'
import App from './App1.vue'
// import App from './App2.vue'
// import App from './App4.vue'
// import App from './App.vue'
// 创建app应用返回对应的实例对象，调用mount方法进行挂载
createApp(App).mount('#app')
