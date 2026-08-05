<script setup>

import { produkteState } from './modules/adminData.js'

const emit = defineEmits(["neu", "bearbeiten"])

</script>

<template>

<button class="new-article-button" @click="emit('neu')">
    + Neuer Artikel
</button>

<div    
    v-for="artikel in produkteState"
    :key="artikel.id"
    class="article-row"
>
    <div class="artikel.info">
        <div class="article-name">
            {{ artikel.name }}
        </div>

        <div class="article-details">
            {{ artikel.preis.toFixed(2) }} €
            -- {{ artikel.kategorie }}
        </div>
    </div>

    <button class="edit-button" @click="$emit('bearbeiten', artikel)">
        ✎
    </button>

</div>

</template>

<style>

.article-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 14px 16px;

    border-bottom: 1px solid black;
}

.article-info {
    flex: 1;
}

.article-name {
    font-size: 1.1rem;
    font-weight: 550;
}

.article-details {
    margin-top: 4px;
    color: blue;
    font-size: 0.9rem;
}

.edit-button {
    margin-left: 16px;

    min-width: 35px;
    min-height: 35px;

    border: none;
    border-radius: 4px;

    cursor: pointer;
}

.new-article-button {
    min-height: 50px;
    background-color: rgb(64, 159, 222);
}

</style>