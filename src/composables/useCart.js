import { ref } from 'vue'

const items = ref([])

export function useCart() {
  return { items }
}

