<script setup>

import { reactive, ref } from 'vue'

//console.log("ArticleEditor geladen")

const emit = defineEmits(["neu", "neuSpeichern"])

// Erfolgsmeldung
const successMessage = ref("")

// Gespeicherte Daten zur Anzeige
const gespeicherterArtikel = ref(null)

const artikel = reactive({
    name: "",
    preis: 0,
    kategorie: "",
    id: 0
})

function neuSpeichern() {
    //Test Button-Funktionalität
    //console.log("Speichern geklickt")
    // reactive: Input-Aufnahme und -Ablage
    emit("neuSpeichern", { ...artikel})

    // Erfolgsmeldung setzen
    successMessage.value = "Artikel erfolgreich gespeichert!"

    // Daten zur Anzeige speichern
    gespeicherterArtikel.value = { ...artikel }

    //Felder zurücksetzen
    artikel.name = ""
    artikel.preis = 0
    artikel.kategorie = ""
    artikel.id = 0
}

</script>

<template>

    <div class="article-editor">

        <div class="editor-header">
        <h2>Neuer Artikel</h2>

        <button @click="emit('neu')">
            <- Zurück zur Artikelliste
        </button>
        </div>

        <div v-if="successMessage" class="success-box">
            <p>{{ successMessage }}</p>

            <div v-if="gespeicherterArtikel">
                <p><strong>Name:</strong> {{ gespeicherterArtikel.name }}</p>
                <p><strong>Preis:</strong> {{ gespeicherterArtikel.preis }} €</p>
                <p><strong>Kategorie:</strong> {{ gespeicherterArtikel.kategorie }}</p>
                <p><strong>ID:</strong> {{ gespeicherterArtikel.id }}</p>
            </div>
        </div>

        <div class="form-group">
            <label>Artikelname</label>
            <input  
                v-model="artikel.name"
                type="text"
            >
        </div>

        <div class="form-group">
            <label>Preis (€)</label>
            <input  
                v-model="artikel.preis"
                type="number"
                step="0.01"
            >
        </div>

        <div class="form-group">
            <label>Kategorie</label>
            <input  
                v-model="artikel.kategorie"
                type="text"
            >
        </div>

        <div class="form-group">
            <label>Artikel-ID</label>
            <input  
                v-model="artikel.id"
                type="number"
                step="1"
            >
        </div>

    <div class="button-row">

        <button type="button" @click="neuSpeichern">
            Speichern
        </button>

        <button>
            Abbrechen
        </button>

    </div>

    </div>

</template>

<style scoped>

.article-editor {
    padding: 16px;
}

.editor-header {
    margin-bottom: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;

    margin-bottom: 30px;
}

label {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 1.2rem;
}

input {
    font-size: 1rem;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #bbb;
}

.button-row {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 24px;
}

.success-box {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 16px;
    background: #e8ffe8;
    border: 1px solid #8bc48b;
    border-radius: 4px;
}

</style>