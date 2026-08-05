<script setup>
import { useCart } from '@/composables/useCart'
import { useRechenhilfe } from '@/composables/useRechenhilfe'
import { computed } from 'vue';

const { items } = useCart();
const { gegeben } = useRechenhilfe();

defineProps ({
  onPlus: Function,
  onMinus: Function,
  onNeueBestellung: Function
});

const gesamtpreis = computed(() =>
  items.value.reduce((summe, artikel) => summe + artikel.preis * artikel.anzahl, 0)
);

const rueckgeld = computed(() => {
  return gegeben.value - gesamtpreis.value;
});
</script>

<template>
  <aside class="cart">
    <h2>Warenkorb</h2>

    <div class="cart-header">
      <button class="neue-bestellung" @click="onNeueBestellung">
        Neue Bestellung
      </button>
    </div>

    <div v-if="items.length == 0" class="empty">
      Der Warenkorb ist leer.
    </div>

    <ul v-else>
      <li v-for="artikel in items" :key="artikel.id">
        <div class="controls">
          <button class="btn" @click="onMinus(artikel)">−</button>
          <span class="anzahl">{{ artikel.anzahl }}</span>
          <button class="btn" @click="onPlus(artikel)">+</button>

          <span class="artikelname">{{ artikel.name }}</span>
          <span class="preis">
            {{ (artikel.preis * artikel.anzahl).toFixed(2) }} €
          </span>
        </div>
      </li>
    </ul>

    <div class="total">
      Gesamt: {{ gesamtpreis.toFixed(2) }} €
    </div>

    <div class="gegeben">
      Gegeben:
      <input
        type="number"
        inputmode="decimal"
        v-model="gegeben"
        placeholder="0.00"
        class="gegeben-input"
      />
    </div>

    <div class="rueckgeld">
      Rückgeld: {{ rueckgeld.toFixed(2) }} €
    </div>
  </aside>
</template>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  width: 95%;
  align-self: center;
  padding-bottom: 20px;
}

/* Sticky Header */
.cart-header {
  position: sticky;
  top: 0;
  background: #f4f4f4;
  z-index: 10;
  padding-bottom: 10px;
}

/* Neue Bestellung Button */
button.neue-bestellung {
  width: 100%;
  padding: 15px;
  font-size: 1.3rem;
  font-weight: bold;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

/* Controls */
.controls {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  font-size: 1.4rem;
  border: none;
}

.anzahl {
  font-size: 1.3rem;
  width: 32px;
  text-align: center;
}

.artikelname {
  flex: 1;
  margin-left: 10px;
  font-size: 1.2rem;
}

.preis {
  font-size: 1.2rem;
  font-weight: bold;
}

/* Gesamtpreis */
.total {
  margin-top: 15px;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: right;
}

/* Gegeben */
.gegeben {
  margin-top: 15px;
  font-size: 1.3rem;
  text-align: right;
}

.gegeben-input {
  width: 160px;
  padding: 8px;
  font-size: 1.3rem;
  margin-left: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

/* Rückgeld */
.rueckgeld {
  margin-top: 10px;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: right;
}
</style>
