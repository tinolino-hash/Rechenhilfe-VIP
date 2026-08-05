import { ref } from 'vue'

const adminPin = '2811'   // hier kannst du deinen Code setzen
const adminFreigeschaltet = ref(false)

export function useAdmin() {
  const checkPin = (eingabe) => {
    if (eingabe === adminPin) {
      adminFreigeschaltet.value = true
      return true
    }
    return false
  }

  return {
    adminFreigeschaltet,
    checkPin
  }
}
