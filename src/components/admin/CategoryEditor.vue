<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  mode: { type: String, default: "neu" },
  initialKategorie: {
    type: Object,
    default: () => ({ id: -1, name: "" })
  }
})

const emit = defineEmits(["neu", "neuSpeichern", "bearbeitenSpeichern"])

const successMessage = ref("")
const gespeicherteKategorie = ref(null)

const kategorie = reactive({ ...props.initialKategorie })

function neuSpeichern() {
  emit("neuSpeichern", { ...kategorie })
  successMessage.value = "Kategorie erfolgreich gespeichert!"
  gespeicherteKategorie.value = { ...kategorie }
  reset()
}

function bearbeitenSpeichern() {
  emit("bearbeitenSpeichern", { ...kategorie })
  successMessage.value = "Kategorie erfolgreich bearbeitet!"
  gespeicherteKategorie.value = { ...kategorie }
  reset()
}

function reset() {
  kategorie.id = -1
  kategorie.name = ""
}
</script>

<template>
  <div class="category-editor">

    <div class="editor-header">
      <h2>
        {{ mode === 'neu' ? 'Neue Kategorie' : 'Kategorie bearbeiten' }}
      </h2>

      <button @click="emit('neu')">
        ← Zurück zur Kategorienliste
      </button>
    </div>

    <div v-if="successMessage" class="success-box">
      <p>{{ successMessage }}</p>

      <div v-if="gespeicherteKategorie">
        <p><strong>Name:</strong> {{ gespeicherteKategorie.name }}</p>
        <p><strong>ID:</strong> {{ gespeicherteKategorie.id }}</p>
      </div>
    </div>

    <div class="form-group">
      <label>Kategorienname</label>
      <input v-model="kategorie.name" type="text">
    </div>

    <div class="form-group">
      <label>Kategorie-ID</label>
      <input v-model="kategorie.id" type="number" step="1">
    </div>

    <div class="button-row">
      <button 
        v-if="mode === 'neu'" 
        @click="neuSpeichern"
      >
        Speichern
      </button>

      <button 
        v-else 
        @click="bearbeitenSpeichern"
      >
        Änderungen speichern
      </button>

      <button>Abbrechen</button>
    </div>

  </div>
</template>

<style scoped>

.category-editor {
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