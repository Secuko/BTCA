<script>
import constants from '../constants/main.json';
export default {

    data() {
        return {
            BUTTON_DATA: [
                {
                    src: "../../assets/icons/common/left_arrow.svg",
                    action: () => { console.log("left-click") },
                    alt: 'left_arrow',
                },
                {
                    src: "../../assets/icons/common/right_arrow.svg",
                    action: () => { console.log("right-click") },
                    alt: 'right_arrow',
                }
            ],

        };
    },
    computed: {
        constants() {
            return constants;
        }
    }
}

</script>

<template>
    <main class="container main">
        <img src="../../assets/images/earth.png" alt="earth" class="earth-image">
        <img src="../../assets/images/coins.png" alt="coins" class="coins-image">
        <div class="main-text">
            <div class="main-text__h1-wrapper">
                <h1>{{ constants.H1_TEXT }}</h1>
            </div>
            <div class="main-text__p-wrapper">
                <p>{{ constants.SMALL_TEXT }}</p>
            </div>
        </div>
        <div class="slider">
            <div class="slider__items">
                <div class="slider-item " v-for="(item, index) in constants.SLIDER_DATA" :key="index">
                    <div class="blur-layer"></div>
                    <div class="item-body">
                        <p class="item-body__header-text">
                            {{ item.header_text }}
                        </p>
                        <h3 class="item-body__h3-text">
                            {{ item.h3_text }}
                        </h3>
                        <p class="item-body__small-text">
                            {{ item.small_text }}
                        </p>
                        <button class="item-button">
                            <span class="item-button_text">
                                {{ item.button_text }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="slider__buttons">
                <button class="slider-button">
                    <!-- <img class="slider-button__icon" :src="(index === 0) ? '../../assets/icons/common/left_arrow.svg' : '../../assets/icons/common/right_arrow.svg'" :alt="item.alt"> -->
                    <img class="slider-button__icon" src="../../assets/icons/common/left_arrow.svg" alt="left">
                </button>
                <button class="slider-button">
                    <img class="slider-button__icon" src="../../assets/icons/common/right_arrow.svg" alt="right">
                </button>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main {
    position: relative;
    background-image: url('../../assets/images/main-background.png');
    height: 124rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.earth-image,
.coins-image {
    background-repeat: no-repeat;
    position: absolute;
}

.earth-image {
    z-index: 10;
    right: 0;
    top: -6.8rem
}

.coins-image {
    z-index: 100;
    right: 17.7rem;
    top: 17.7rem
}

.main-text {
    height: 23.4rem;
    width: 69.8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    position: absolute;
    left: 16.5rem;
    top: 20.7rem;
}

.main-text__h1-wrapper {
    width: 100%;
}

.main-text__p-wrapper {
    width: 56.7rem;
}

h1 {
    @include text(h1);

    background: linear-gradient(91.92deg, $white 29.24%, rgba(176, 250, 255, 0) 131.64%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    /* для поддержки в Safari */
}

p {
    @include text(p);
    color: $white;
}

.slider {
    width: 100%;
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.slider__items {
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
    position: absolute;
    bottom: 6.4rem;
}

.slider-item {
    width: 35.3rem;
    height: 46rem;
    background: $sliderBlack;
    border-radius: 0.8rem;
    position: relative;
}

.item-body {
    padding: 3rem 5rem 0rem 3rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.center-item {
    backdrop-filter: blur(0px);
    position: absolute;
    bottom: 12.4rem;
}

.item-body__header-text,
.item-body__h3-text,
.item-body__small-text,
.item-button_text {
    color: $white;
}

.item-body__header-text {
    @include text(p);
    margin-bottom: 0.2rem;
}

.item-body__h3-text {
    @include text(h3);
    margin-bottom: 1.6rem;
}

.item-body__small-text {
    @include text(body2);
    margin-bottom: 3.2rem;
}

.item-button_text {
    @include text(button);
}

.item-button {
    display: block;
    align-content: center;
    height: 5.4rem;
    width: 22.4rem;
    background: $green;
    border-radius: 1.2rem;
}

.blur-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    backdrop-filter: blur(1px);
}

.slider__buttons {
    position: absolute;
    bottom: 2.1rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
}

.slider-button {
    background: $buttonBlack;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 0.1rem solid rgba($white, 0.11);

    &:hover {
        border: 0.1rem solid $white;
    }
}
</style>
