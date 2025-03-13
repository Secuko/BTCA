<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import constants from '../constants/inputForm.json'

const activeIndex = ref(null)

const changeIndex = (index) => activeIndex.value = index


</script>

<template>
    <div class="radio-form">
        <div :class="['radio-item', { 'active': (activeIndex == index) }, { 'deactive': (activeIndex !== index) }]" v-for="(item, index) in constants.RADIO"
            :key="index" @click="changeIndex(index)">
            <p class="radio-item_text">{{ item.text }}</p>
            <div class="radio-item_input-wrapper">
                <input type="radio" class="radio-input" name="non_resident" :value="`${item.value}`"
                    :checked="activeIndex === index" @change="changeIndex(index)">
                <span class="custom-radio"></span>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.radio-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 5.6rem;
}

.radio-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    border-radius: 1.2rem;
    padding: 0.8rem 1.6rem;
    margin: -0.1rem;
    width: 26rem;
    background-color: $white
}

.radio-item_input-wrapper {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1.2rem;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: relative;
}

.radio-input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.custom-radio {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: 2px solid $mainBg;
    background-color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
}

/* Внутренняя заливка при выборе */
.radio-item.active .custom-radio {
    border-color: blue;
    background-color: blue;
}

.radio-item .custom-radio::after {
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    background-color: white;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease-out;
  }

.radio-item.active .custom-radio::after {
    transform: scale(1);
    opacity: 1;
}

.deactive {
    cursor: pointer;
}

p {
    @include text(captionInfoHeader);
    color: $buttonBlack
}
</style>
