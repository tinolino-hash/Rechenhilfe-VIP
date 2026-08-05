<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const items = [
  { name: 'rechenhilfe', label: 'Rechenhilfe', route: '/', item: '💰' },
  { name: 'admin', label: 'Admin', route: '/admin', item: '✏️' }
]

function go(path) {
  router.push(path)
}
</script>

<template>
  <nav class="nav-bar">
    <button
      v-for="item in items"
      :key="item.name"
      class="nav-item"
      :class="{ active: item.route === route.path }"
      @click="go(item.route)"
    >
      <span class="icon">{{ item.item }}</span>
      <span class="label">{{ item.label }}</span>
    </button>
  </nav>
</template>

<style scoped>
.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-top: 1px solid #ddd;
}

.nav-item {
  flex: 1;
  text-align: center;
  background: none;
  border: none;
  padding: 6px 0;
  font-size: 14px;
  color: #555;
}

.nav-item .icon {
  display: block;
  font-size: 20px;
  line-height: 20px;
}

.nav-item.active {
  color: #007aff;
  font-weight: 600;
}
</style>
