<script setup>

import { kategorienState } from './modules/adminData.js'

const emit = defineEmits(["neu", "bearbeiten"])

</script>

<template>

<button class="new-category-button" @click="emit('neu')">
    + Neue Kategorie
</button>

<div    
    v-for="kategorie in kategorienState"
    :key="kategorie.id"
    class="category-row"
>
    <div class=".category-info">
        <div class="category-name">
            {{ kategorie.name }}
        </div>

        <div class="category-details">
            {{ kategorie.id }}
        </div>
    </div>

    <button class="edit-button"
    @click="$emit('bearbeiten', kategorie)">
        ✎
    </button>

</div>

</template>

<style>

.category-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 14px 16px;

    border-bottom: 1px solid black;
}

.category-info {
    flex: 1;
}

.category-name {
    font-size: 1.1rem;
    font-weight: 550;
}

.category-details {
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

.new-category-button {
    min-height: 50px;
    background-color: rgb(64, 159, 222);
}

</style>