import ArticleList from '@/components/admin/ArticleList.vue';
import ArticleEditor from '@/components/admin/ArticleEditor.vue';

import { changeAktuelleSeite } from './adminState.js'
import { artikelSpeichernNeu, artikelSpeichernBearbeiten } from './adminData.js'
import { editorModus } from './adminState.js'

import { bearbeiten } from './adminState.js'

export function artikelBearbeiten(artikel) {
  bearbeiten(artikel, 'artikeleditor')
}

export function wechsleZuArtikelListe() {
  changeAktuelleSeite('artikelliste')
}

export function wechsleZuArtikelEditor() {
  changeAktuelleSeite('artikeleditor')
}

export async function artikelSpeichern(artikel) {
  if (editorModus.value === 'neu') {
    await fetch('http://localhost:3000/api/produkte', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(artikel)
    })
  } else {
    await fetch(`http://localhost:3000/api/produkte/${artikel.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(artikel)
    })
  }

  await loadData()
  changeAktuelleSeite('artikelliste')
}

export const articleComponents = {
  ArticleList,
  ArticleEditor
}