<script setup>
import ProductButton from '@/components/ProductButton.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['add']);
</script>

<template>
  <section class="product-grid">
    <h2>{{ title }}</h2>

    <div class="grid">
      <ProductButton 
        v-for="item in products"
        :key="item.id"
        :product="item"
        @add="$emit('add', item)"
      />
    </div>
  </section>
</template>

<style scoped>
.product-grid {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px; /* Platz für NavigationBar */
}

h2 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  font-weight: 600;
}

/* Mobile Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  touch-action: manipulation;
  user-select: none;
}

/* Sehr kleine Displays */
@media (max-width: 360px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
