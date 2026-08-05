<script setup>
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="layout">
    <router-view />
    <NavigationBar />
  </div>
</template>

<style>
@import './styles/fullwidth.css';

.layout {
  display: grid;
  width: 100%;
  justify-content: space-between;
  gap: 15px;
  padding: 20px;
  align-items: stretch;
}

.navigationBar {
  padding-bottom: 56px; /* Platz für die Bottom-Navigation */
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
    padding: 10px;
    gap: 10px;
  }
}
</style>
