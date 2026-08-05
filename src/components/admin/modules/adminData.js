import { ref } from 'vue'

// Backend‑URL (Render)
const API = 'https://rechenhilfe-backend.onrender.com'

// Reaktive Kopien der Daten
export const produkteState = ref([])
export const kategorienState = ref([])

export async function loadData() {
  try {
    produkteState.value = await fetch(`${API}/api/produkte`).then(r => r.json())
    kategorienState.value = await fetch(`${API}/api/kategorien`).then(r => r.json())
  } catch (err) {
    console.error('Fehler beim Laden der Daten:', err)
  }
}

// Artikel speichern (neu)
export async function artikelSpeichernNeu(artikel) {
  const response = await fetch(`${API}/api/produkte`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(artikel)
  })

  const saved = await response.json()
  produkteState.value.push(saved)
}


// Artikel bearbeiten
export async function artikelSpeichernBearbeiten(artikel) {
  const response = await fetch(`${API}/api/produkte/${artikel.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(artikel)
  })

  const updated = await response.json()

  const index = produkteState.value.findIndex(p => p.id === artikel.id)
  if (index !== -1) produkteState.value[index] = updated
}


// Kategorie speichern (neu)
export async function kategorieSpeichernNeu(kategorie) {
  const response = await fetch(`${API}/api/kategorien`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(kategorie)
  })

  const saved = await response.json()
  kategorienState.value.push(saved)
}


// Kategorie bearbeiten
export async function kategorieSpeichernBearbeiten(kategorie) {
  const response = await fetch(`${API}/api/kategorien/${kategorie.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(kategorie)
  })

  const updated = await response.json()

  const index = kategorienState.value.findIndex(k => k.id === kategorie.id)
  if (index !== -1) kategorienState.value[index] = updated
}
