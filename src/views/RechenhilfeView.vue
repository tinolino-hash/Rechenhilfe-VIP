<script setup>
import ProductGrid from '@/components/ProductGrid.vue'
import CategoryBar from '@/components/CategoryBar.vue'
import { ref, computed } from 'vue'
import Cart from '@/components/Cart.vue'

import { produkteState, kategorienState } from '@/components/admin/modules/adminData.js'

import { useCart } from '@/composables/useCart'
import { useRechenhilfe } from '@/composables/useRechenhilfe'

import BottomSheet from '@/utilities/BottomSheet.vue'

// Warenkorb & Rechenhilfe
const { items } = useCart()
const { gegeben } = useRechenhilfe()

const aktiveKategorie = ref("Alle")
const letzteBestellung = ref([])

// Artikel filtern nach Kategorie
const gefilterteArtikel = computed(() => {
  if (aktiveKategorie.value === "Alle") {
    return produkteState.value
  }
  return produkteState.value.filter(
    artikel => artikel.kategorie === aktiveKategorie.value
  )
})

// Artikel hinzufügen
function artikelHinzufuegen(artikel) {
  const vorhanden = items.value.find(item => item.id === artikel.id)

  if (vorhanden) {
    vorhanden.anzahl++
  } else {
    items.value.push(structuredClone({ ...artikel, anzahl: 1 }))
  }
}

// Anzahl ändern
function anzahlErhoehen(artikel) {
  artikel.anzahl++
}

function anzahlVerringern(artikel) {
  artikel.anzahl--
  if (artikel.anzahl <= 0) {
    items.value = items.value.filter(item => item.id !== artikel.id)
  }
}

// Neue Bestellung
function neueBestellung() {
  if (items.value.length === 0) return
  if (!confirm("Neue Bestellung beginnen?")) return

  letzteBestellung.value = items.value.map(a => ({ ...a }))
  items.value = []
  gegeben.value = 0
}
</script>

<template>
  <div class="layout">

    <!-- Warenkorb als Top-Sheet -->
    <BottomSheet>
      <Cart 
        :items="items"
        :onPlus="anzahlErhoehen"
        :onMinus="anzahlVerringern"
        :onNeueBestellung="neueBestellung"
      />
    </BottomSheet>

    <!-- Inhalt -->
    <div class="products">
      <CategoryBar 
        class="category-bar"
        :kategorien="kategorienState"
        :aktive-kategorie="aktiveKategorie"
        @select="aktiveKategorie = $event"
      />

      <ProductGrid 
        :title="aktiveKategorie"
        :products="gefilterteArtikel"
        @add="artikelHinzufuegen"
      />
    </div>

  </div>
</template>

<style>
/* Layout als Spalte */
.layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* Inhalt */
.products {
  flex: 1;
  padding: 10px 10px 90px; /* Platz für NavigationBar + BottomSheet */
}

/* Kategorie-Bar sticky */
.category-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #f4f4f4;
  padding-bottom: 8px;
}

/* Mobile */
@media (max-width: 768px) {
  .products {
    padding: 8px 8px 100px;
  }
}
</style>
