import { onMounted, ref, onUnmounted } from 'vue'
export default function useMousePosition () {
  const x = ref(0)
  const y = ref(0)
  const update = (e: MouseEvent) => {
    console.log('xxx', e)
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', update)
  })
  onUnmounted(() => {
    document.removeEventListener('click', update)
  })
  return {
    x,
    y
  }
}
