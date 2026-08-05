import { ref } from 'vue';

// Gegeben-Betrag
const gegeben = ref(0);

export function useRechenhilfe() {
  return { gegeben }
}