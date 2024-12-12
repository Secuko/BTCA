<script setup>
import { onMounted, ref } from 'vue';
import constants from '../constants/inputForm.json'

const emit = defineEmits(['changeCard'])

let selectedIndex = ref(null)

onMounted(() => {
    if (constants.CARDS.length !== 0) {
        selectedIndex.value = 0
    }
})

function selectCard(index) {
    selectedIndex.value = index
    emit('changeCard', { newValue: index });
}

</script>

<template>
    <div class="select-wrapper">
        <div :class="['card', { 'active': index == selectedIndex }]" v-for="(card, index) in constants.CARDS"
            :key="index" @click="selectCard(index)">
            <img :src="`${card.src}`" :alt="`${card.alt}`" class="card__image">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.select-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
}

.card {
    border-radius: 0.6rem;
    overflow: hidden;
    width: 12.2rem;
    height: 7.67rem;
    border: 0.3rem solid transparent;
    transition: border .5s;
    cursor: pointer;
}

.active {
    border: 0.3rem solid yellow;
}
</style>
