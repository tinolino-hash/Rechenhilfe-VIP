<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <input
        class="search-bar"
        type="text"
        placeholder="Artikel suchen..."
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        />
</template>

<style scoped>
.search-bar {
  width: 100%;
  padding: 16px;

  font-size: 1.2rem;

  border: 2px solid #cccccc;
  border-radius: 12px;

  margin-bottom: 20px;

  box-sizing: border-box;
}
</style>