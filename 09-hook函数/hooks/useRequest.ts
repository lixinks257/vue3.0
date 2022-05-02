import { ref } from 'vue'
import axios from 'axios'
export default function useRequest<T>(url: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const errorMsg = ref(null)
  axios
    .get(url)
    .then((res) => {
    //   console.log('res,', res)
      result.value = res.data
      loading.value = false
    })
    .catch((e) => {
      loading.value = false
      errorMsg.value = e.message || '未知错误'
    })
  return {
    result,
    loading,
    errorMsg
  }
}
