import CategoryList from '@/components/admin/CategoryList.vue';
import CategoryEditor from '@/components/admin/CategoryEditor.vue';

import { changeAktuelleSeite, aktuellesObjekt, editorModus } from './adminState.js'

import { 
  kategorieSpeichernNeu as saveNeu, 
  kategorieSpeichernBearbeiten as saveBearbeiten 
} from './adminData.js'

export function kategorieBearbeiten(kategorie) {
  editorModus.value = "bearbeiten"
  aktuellesObjekt.value = { ...kategorie }
  changeAktuelleSeite('kategorieneditor')
}

export function wechsleZuKategorieListe() {
  changeAktuelleSeite('kategorienliste')
}

export function wechsleZuKategorieEditor() {
  editorModus.value = "neu"
  aktuellesObjekt.value = { id: -1, name: "" }
  changeAktuelleSeite('kategorieneditor')
}

export async function kategorieSpeichernNeu(kategorie) {
  await fetch('http://localhost:3000/api/kategorien', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(kategorie)
  })

  await loadData()
  changeAktuelleSeite('kategorienliste')
}

export async function kategorieSpeichernBearbeiten(kategorie) {
  await fetch(`http://localhost:3000/api/kategorien/${kategorie.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(kategorie)
  })

  await loadData()
  changeAktuelleSeite('kategorienliste')
}

export const categoryComponents = {
  CategoryList,
  CategoryEditor
}
