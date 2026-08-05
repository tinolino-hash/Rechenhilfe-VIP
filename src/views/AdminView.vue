<script setup>
import { ref } from 'vue'
import { useAdmin } from '@/composables/useAdmin.js'

import { aktuelleSeite, 
    changeAktuelleSeite , 
    aktuellesObjekt, 
    editorModus } 
  from '@/components/admin/modules/adminState.js'

import {
  wechsleZuArtikelEditor,
  wechsleZuArtikelListe,
  artikelSpeichern,
  artikelBearbeiten,
  articleComponents
} from '@/components/admin/modules/articles.js'

const { ArticleList, ArticleEditor } = articleComponents

import {
  wechsleZuKategorieEditor,
  wechsleZuKategorieListe,
  kategorieSpeichernNeu,
  kategorieSpeichernBearbeiten,
  kategorieBearbeiten,
  categoryComponents
} from '@/components/admin/modules/categories.js'

const { CategoryList, CategoryEditor } = categoryComponents

// Admin Login
const pin = ref('')
const { adminFreigeschaltet, checkPin } = useAdmin()

const login = () => {
  if (!checkPin(pin.value)) {
    alert("Falscher Code!")
    pin.value = ''
  }
}
</script>

<template>
  <!-- Admin Login -->
  <div v-if="!adminFreigeschaltet" class="admin-login">
    <h1>Adminbereich</h1>

    <input 
      type="password" 
      v-model="pin" 
      placeholder="Admin-Code eingeben"
    />

    <button @click="login">Login</button>
  </div>

  <!-- Admin-Bereich erst sichtbar nach Login -->
  <div v-if="adminFreigeschaltet" class="admin">
    <h1>Adminbereich</h1>

    <button @click="changeAktuelleSeite('artikelliste')">
      <p>Artikel</p>
    </button>

    <button @click="changeAktuelleSeite('kategorienliste')">
      <p>Kategorien</p>
    </button>
  </div>

  <div class="view" v-if="adminFreigeschaltet">
    <!-- Artikel -->
    <ArticleList
        v-if="aktuelleSeite === 'artikelliste'"
        @neu="wechsleZuArtikelEditor"
        @bearbeiten="artikelBearbeiten"
    />

    <ArticleEditor
        v-if="aktuelleSeite === 'artikeleditor'"
        :artikel="aktuellesObjekt"
        @speichern="artikelSpeichern"
        @neu="wechsleZuArtikelListe"
    />

    <!-- Kategorien -->
    <CategoryList
        v-if="aktuelleSeite === 'kategorienliste'"
        @neu="wechsleZuKategorieEditor"
        @bearbeiten="kategorieBearbeiten"
    />

    <CategoryEditor
        v-if="aktuelleSeite === 'kategorieneditor'"
        :mode="editorModus"
        :initialKategorie="aktuellesObjekt"
        @neuSpeichern="kategorieSpeichernNeu"
        @bearbeitenSpeichern="kategorieSpeichernBearbeiten"
        @neu="wechsleZuKategorieListe"
    />
    
  </div>
</template>

<style scoped>
.admin {
  padding: 20px;
}

.view {
  margin-bottom: 80px; /* Platz für NavigationBar */
}
</style>
