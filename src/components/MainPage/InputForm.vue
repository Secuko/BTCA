<script setup>
import EmailField from '../Inputs/emailField.vue';
import NameField from '../Inputs/nameField.vue';
import Select from '../Inputs/select.vue';
import Icon from '../UI/Icon.vue';
import constants from '../constants/inputForm.json'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';

let selectedIndex = ref(null)
let cardSrc = ref(null)
let information = ref(null)
let currentInfoIndex = ref(null)
const INTERVAL_MS = 5000
let intervalId = null
let loaderValue = ref(null)

onBeforeMount(() => {
    if (constants.INFO_FIELD.length !== 0) {
        information.value = constants.INFO_FIELD
        currentInfoIndex.value = 0

        intervalId = setInterval(() => {
            changeInfoMessage()
        }, INTERVAL_MS)
    }
})

onMounted(() => {
    if (constants.CARDS.length !== 0) {
        selectedIndex.value = 0
        cardSrc.value = constants.CARDS[selectedIndex.value].src
    }
})

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
})

function changeInfoMessage() {
    if (currentInfoIndex.value !== (constants.INFO_FIELD.length - 1)) {
        currentInfoIndex.value += 1
    } else {
        currentInfoIndex.value = 0
    }
}

function printValue(value) {
    console.log(value)
}

const changeCurrentInfoIndex = (data) => {
    selectedIndex.value = data.newValue;
    cardSrc.value = constants.CARDS[selectedIndex.value].src;
};


</script>

<template>
    <section class="container">
        <div class="cardCreatingBlock">
            <div class="inputFormsWrapper">
                <div class="cardPreview">
                    <div class="preview-image-wrapper">
                        <img :src="cardSrc" alt="card" class="card-image">
                    </div>
                    <div class="information-message">
                        <div class="icon-wrapper">
                            <Icon :iconHeight="'3.2rem'" :iconWidth="'3.2rem'"
                                :iconName="information[currentInfoIndex].name" :spritePath="constants.SPRITE_PATH" />
                        </div>
                        <div class="information-message__text">
                            <h4 class="message_header">
                                {{ information[currentInfoIndex].head }}
                            </h4>
                            <p class="message_text">
                                {{ information[currentInfoIndex].text }}
                            </p>
                        </div>
                    </div>
                </div>
                <form class="cardForm">
                    <div class="inside">
                        <div class="form">
                            <Select @changeCard="changeCurrentInfoIndex" />
                            <NameField/>
                            <EmailField />
                            <div class="h3-wrapper">
                                <h3>
                                    Выберите дизайн карты
                                </h3>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.cardCreatingBlock {
    padding: 0 3.5rem;
    width: 100%;
    padding: 5rem 0rem;
    display: flex;
    justify-content: center;
}

.inputFormsWrapper {
    width: 112.8rem;
    height: 87.5rem;
    border-radius: 2.4rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: $blue15;
}

.cardPreview {
    padding: 3.5rem 2.4rem 5.2rem 3.6rem;
    flex: 39%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 4.0rem
}

.cardForm {
    padding: 3.5rem 6.8rem 5.2rem 6.8rem;
    flex: 61%;
    border-radius: 2.4rem;
}

.form {
    width: 100%;
}

.inside {
    height: 100%;
    width: 100%;
    background-color: transparent;
}

.h3-wrapper {
    display: flex;
}

h3 {
    @include text(h3CardForm);
    color: $buttonBlack
}

.information-message {
    width: 36rem;
    padding: 1.6rem;
    border-radius: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: grey;
    animation: animation1 1s ease-in;
    gap: 1.6rem
}

@keyframes animation1 {
    from {
        opacity: 0%;
    }

    to {
        opacity: 100%;
    }
}

.information-message__text {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

.message_header {
    @include text(captionInfoHeader);
    color: $buttonBlack;
}

.message_text {
    @include text(captionInfoText);
    color: $buttonBlack;
}

.icon-wrapper {
    height: 4.0rem;
    width: 4.0rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-image {
    width: 27.2rem;
    height: 17.2rem;
}
</style>
