import { ref } from 'vue'

export const aktuelleSeite = ref(null)
export const aktuellesObjekt = ref(null)

export const editorModus = ref("neu")

export function changeAktuelleSeite(seite) {
  aktuelleSeite.value = seite
}

export function bearbeiten(objekt, zielSeite) {
  aktuellesObjekt.value = objekt
  aktuelleSeite.value = zielSeite
}