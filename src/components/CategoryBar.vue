<script setup>
defineProps({
  kategorien: {
    type: Array,
    required: true
  },
  aktiveKategorie: {
    type: String,
    required: true
  }
});

const emit = defineEmits(["select"]);
</script>

<template>
  <div class="category-bar">
    <button
      v-for="kategorie in kategorien"
      :key="kategorie.id"
      class="category-button"
      :class="{ active: kategorie.name === aktiveKategorie }"
      @click="emit('select', kategorie.name)"
    >
      {{ kategorie.name }}
    </button>
  </div>
</template>

<style>
.category-bar {
  display: flex;
  gap: 8px;
  padding: 8px 4px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  background: #f4f4f4;
  position: sticky;
  top: 0;
  z-index: 10;
}

/* Scrollbar unsichtbar machen */
.category-bar::-webkit-scrollbar {
  display: none;
}

.category-button {
  flex: 0 0 auto;
  background: #2d6cdf;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  transition: background-color 0.2s ease;
}

.category-button:hover {
  background: #1e56b3;
}

.category-button.active {
  background-color: #174a9c;
}
</style>
