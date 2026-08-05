<script>
export default {
  name: "BottomSheet",
  data() {
    return {
      expanded: false,
      startY: 0
    }
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded
    },
    handleTouchMove(e) {
      const deltaY = this.startY - e.touches[0].clientY
      if (deltaY > 80) this.expanded = true
      if (deltaY < -80) this.expanded = false
    }
  }
}
</script>

<template>
  <div
    class="bottom-sheet"
    :class="{ expanded }"
  >
    <div class="sheet-header" @click="toggle">
      <div 
        class="handle"
        @touchstart="startY = $event.touches[0].clientY"
        @touchmove="handleTouchMove"
      >
        <div class="sheet-status">🛒</div>
      </div>
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.bottom-sheet {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: 60px; /* besser sichtbar */
  background: #f4f4f4;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  transition: height 0.25s ease;
  overflow: hidden;
  z-index: 9999;
}

/* Expanded-Modus */
.bottom-sheet.expanded {
  height: calc(100vh - 56px); /* NavigationBar bleibt sichtbar */
  overflow-y: auto;
}

/* Header */
.sheet-header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

/* Handle */
.handle {
  width: 40px;
  height: 40px;
  background: #2d61bb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sheet-status {
  font-size: 22px;
  line-height: 1;
}

/* Inhalt */
.content {
  padding: 12px;
}
</style>
