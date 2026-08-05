<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['add']);
</script>

<template>
  <button 
    class="product-button"
    @click="emit('add')"
  >
    <span class="name">{{ product.name }}</span>
    <span class="price">{{ product.preis.toFixed(2) }} €</span>
  </button>
</template>

<style scoped>
.product-button {
  width: 100%;
  min-height: 85px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 14px;

  background-color: white;
  border: 2px solid #d9d9d9;
  border-radius: 14px;

  cursor: pointer;
  user-select: none;
  touch-action: manipulation;

  transition: background-color 0.15s ease, transform 0.1s ease;
}

.product-button:hover {
  background-color: #f7f7f7;
}

.product-button:active {
  transform: scale(0.97);
}

.name {
  font-size: 1.1rem;
  font-weight: 500;
  flex: 1;
  padding-right: 10px;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}
</style>
