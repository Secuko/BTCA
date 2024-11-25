<script>
import constants from '../constants/instructions.json'

export default {
    computed: {
        constants() {
            return constants;
        }
    },
    methods: {
        getURL(src) {
            return new URL(src, import.meta.url).href
        }
    }

}


</script>


<template>
    <div class="container custom-style">
        <div class="text-block">
            <div class="text-block__h2">
                <h2>{{ constants.H2_TEXT_1 }}</h2>
            </div>
            <div class="text-block__text">
                <p>{{ constants.SMALL_TEXT_1 }}</p>
            </div>
        </div>
        <div class="instructions">
            <div class="instruction" v-for="(item, index) in constants.INSTRUCTIONS" :key="index"
                :style="{ backgroundImage: `url(${getURL(item.src)})`, alt: `${item.alt}` }">
                <div class="instruction__header">
                    <span class="step_index"> {{ item.step_index }}</span>
                    <span class="step">{{ item.step }}</span>
                    <div class="separated-line"></div>
                </div>
                <div class="instruction__h3">
                    <h3>{{ item.text }}</h3>
                </div>
            </div>
        </div>
        <form class="subsribe-banner">
            <div class="subsribe-banner__h2">
                <h2>{{ constants.H2_TEXT_2 }}</h2>
            </div>
            <div class="subsribe-banner__text">
                <p>{{ constants.SMALL_TEXT_2 }}</p>
            </div>
            <div class="input-field">
                <input type="email" name="email" id="email" required :placeholder="constants.EMAIL_PLACEHOLDER">
                <button class="subscribe-button">
                    <span>{{ constants.BUTTON_TEXT }}</span>
                </button>
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped>
.container.custom-style {
    background: $mainBg;
    position: relative;
    height: 107.3rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 12.8rem;
}

.text-block {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1.6rem;
    max-width: 54.3rem;
}

.text-block__h2 {
    @include text(h2);
    background: linear-gradient(91.92deg, $white 29.24%, rgba(176, 250, 255, 0) 131.64%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.text-block__text {
    @include text(p);
    color: $white;
    text-align: center;
}

.instructions {
    margin-top: 4.9rem;
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
}

.instruction {
    height: 25.7rem;
    width: 36.5rem;
    border-radius: 0.8rem;
    background: $sliderBlack;
    padding-top: 3rem;
    padding-left: 2.8rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.instruction__header {
    display: flex;
    align-items: center;
    /* Выравнивание элементов по вертикали по центру */
}

.step_index {
    @include text(caption);
    color: $white;
    margin-left: 0.5rem;
    margin-right: 0.7rem;
}

.step {
    @include text(p);
    color: rgba($color: $white, $alpha: 0.8);
    width: 3.3rem;
    margin-right: 2.8rem;
}

.separated-line {
    flex-grow: 1;
    height: 0.1rem;
    background: rgba($color: $white, $alpha: 0.1);
}

.instruction__h3 {
    @include text(h3);
    color: $white;
    white-space: pre-line;
}

.subsribe-banner {
    padding-top: 7.5rem;
    padding-left: 5.4rem;
    margin-top: 3.2rem;
    width: 114rem;
    height: 40.2rem;
    border-radius: 2.8rem;
    background: url('../../assets/images/banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.subsribe-banner__h2 {
    @include text(h2);
    background: linear-gradient(91.92deg, $white 29.24%, rgba(176, 250, 255, 0) 131.64%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    margin-bottom: 1.6rem;
}

.subsribe-banner__text {
    @include text(p);
    color: rgba($color: $white, $alpha: 0.8);
    white-space: pre-line;
    margin-bottom: 3.2rem;
}


.subscribe-button {
    box-shadow: 0 0.4rem 1.6rem 0 #00FFA342;
    background: $subscribeButton;
    border-radius: 6.6rem;
    height: 4.9rem;
    width: 16.8rem;

    &:hover{
        border: 0.1rem solid $white;
    }
}

.subscribe-button span {
    @include text(button);
    color: $white;
}

.input-field {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 66.1rem;
    height: 6.4rem;
    background: #FFFFFF1A;
    padding: 0rem 1.2rem 0rem 3.1rem;
    border-radius: 1.4rem;
    border: 0.1rem solid;
    backdrop-filter: blur(0.4rem);
    box-shadow: 0 0.4rem 4.1rem 0rem #00000021;
    border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(0, 0, 0, 0) 100%);
}

input{
    @include text(body2);
    color: $white;
    width: 40.0rem;
}

h3,
h2,
p {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
}
</style>
