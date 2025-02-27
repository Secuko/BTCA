<script setup>
import InputField from '../Inputs/inputField.vue';
import Select from '../Inputs/select.vue';
import Icon from '../UI/Icon.vue';
import constants from '../constants/inputForm.json'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

let selectedIndex = ref(null)
let cardSrc = ref(null)
let information = ref(null)
let currentInfoIndex = ref(null)
const INTERVAL_MS = 5000
let intervalId = null
let loaderValue = ref(null)
const NAME_REGEX = /^[А-ЯЁ][а-яё]+(?:-[А-ЯЁ][а-яё]+)?\s[А-ЯЁ][а-яё]+(?:-[А-ЯЁ][а-яё]+)?(?:\s[А-ЯЁ][а-яё]+(?:-[А-ЯЁ][а-яё]+)?)?$/;
const PHONE_REGEX = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/
const DATE_REGEX = /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.(19[2-9]\d|200\d|201[0-2])$/

const validationSchema = toTypedSchema(
    z.object({
        email: z.string({ required_error: '' }).email(constants.EMAIL_REQUIRED_ERROR),
        name: z.string({ required_error: constants.NAME_REQUIRED_ERROR }).min(3, constants.NAME_REQUIRED_ERROR).regex(NAME_REGEX, constants.NAME_REQUIRED_ERROR),
        phone: z.string({ required_error: constants.PHONE_ERROR }).regex(PHONE_REGEX, constants.PHONE_ERROR),
        date: z.string({ required_error: constants.DATE_ERROR }).regex(DATE_REGEX, constants.DATE_AGE_ERROR).length(10, constants.DATE_ERROR)
    }),
);

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
                        <form action="" class="form">
                            <Select @changeCard="changeCurrentInfoIndex" />
                            <InputField :schema="validationSchema" :labelText="constants.NAME_LABEL_TEXT"
                                :placeholder="constants.NAME_PLACEHOLDER_TEXT" :fieldName="'name'"
                                :width="constants.LONG_WIDTH" />
                            <div class="double-fields-wrapper">
                                <InputField :schema="validationSchema" :labelText="constants.PHONE_LABEL_TEXT"
                                    :placeholder="constants.PHONE_PLACEHOLDER_TEXT" :fieldName="'phone'"
                                    :width="constants.SHORT_WIDTH" />
                                <InputField :schema="validationSchema" :labelText="constants.EMAIL_LABEL_TEXT"
                                    :placeholder="constants.EMAIL_PLACEHOLDER_TEXT" :fieldName="'email'"
                                    :width="constants.SHORT_WIDTH" />
                            </div>
                            <InputField :schema="validationSchema" :labelText="constants.DATE_LABEL_TEXT"
                                :placeholder="constants.DATE_PLACEHOLDER_TEXT" :fieldName="'date'"
                                :width="constants.LONG_WIDTH" />

                            <div class="h3-wrapper">
                                <h3>
                                    Выберите дизайн карты
                                </h3>
                            </div>
                        </form>
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

.double-fields-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
