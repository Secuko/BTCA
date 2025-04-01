<script setup>
import Swiper from 'swiper';
import constants from '../constants/main.json';
import SliderCard from '../common/SliderCard.vue';
import Icon from '../common/Icon.vue';
import { computed, onBeforeMount, onMounted, ref } from 'vue';

//variables
let activeIndex = ref(0)
let slider = ref(null)
const swiperEl = ref()
const swiperSpeedMs = 700

onBeforeMount(()=>{
    activeIndex.value = centralIndex.value;
})

//hooks
onMounted(() => {
    initSwiper();
})

//methods
function initSwiper() {
    slider = new Swiper(swiperEl.value, {
        slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: true,
        initialSlide: centralIndex.value,
    });
    slider?.on('slideChange', swiper => {
        activeIndex.value = slider.activeIndex;
    });
}

function clickNextSlide() {
    slider.slideNext(swiperSpeedMs);
}

function clickPrevSlide() {
    slider.slidePrev(swiperSpeedMs);
}

function clickCard(index) {
    if (activeIndex.value < index) {
        slider.slideNext(swiperSpeedMs);
    } else if(activeIndex.value > index) {
        slider.slidePrev(swiperSpeedMs);
    }
}

//computed
const isEnd = computed(() => {
    return activeIndex.value === constants.SLIDER_DATA.length - 1;
})

const centralIndex = computed(()=>{
    return Math.round(constants.SLIDER_DATA.length/2) - 1;
})

const isStart = computed(() => {
    return activeIndex.value === 0;
})
</script>


<template>
    <main class="main">
        <section class="container">
            <img src="/assets/images/earth.png" alt="earth" class="earth-image">
            <img src="/assets/images/coins.png" alt="coins" class="coins-image">
            <div class="main-text-wrapper">
                <div class="main-text">
                    <div class="main-text__h1-wrapper">
                        <h1>{{ constants.H1_TEXT }}</h1>
                    </div>
                    <div class="main-text__p-wrapper">
                        <p>{{ constants.SMALL_TEXT }}</p>
                    </div>
                </div>
            </div>
            <div ref="swiperEl" class="swiper">
                <div class="swiper-wrapper">
                    <SliderCard :key="index" v-for="(card, index) in constants.SLIDER_DATA" :card="card"
                        class="swiper-slide" :active="activeIndex=== index" @click="clickCard(index)" />
                </div>
            </div>
            <div class="navigation">
                <button class="navigation__btn" :class="{ 'disabled': isStart }" @click="clickPrevSlide">
                    <!-- <img src="../../assets/icons/common/left_arrow.svg" /> -->
                    <Icon class="button-arrow left-arrow" :iconHeight="'2.4rem'" :iconWidth="'2.4rem'"
                        :iconName="constants.ICON_ARROW" :spritePath="constants.SPRITE_PATH" />
                </button>
                <button class="navigation__btn" :class="{ 'disabled': isEnd }" @click="clickNextSlide">
                    <Icon class="button-arrow" :iconHeight="'2.4rem'" :iconWidth="'2.4rem'"
                        :iconName="constants.ICON_ARROW" :spritePath="constants.SPRITE_PATH" />
                </button>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.swiper {
    width: 100%;
    height: 60rem;
    overflow: hidden;
}

.swiper-wrapper {
    display: flex;
    flex-direction: row;
}

.button-arrow {
    fill: $white
}

.left-arrow {
    rotate: 180deg;
}

.navigation {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 0 2rem;
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
}

.navigation__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: $white;
    cursor: pointer;
    border: 0.1rem solid rgba($white, 0.11);
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    --icon-fill-color: $white;

    &:hover {
        border: 0.1rem solid rgba($white, 0.8);
        --icon-fill-color: red;

        .button-arrow {
            fill: var(--icon-fill-color);
        }
    }
}


.navigation__btn.disabled {
    cursor: not-allowed;
    opacity: .5;
    transition: all .3s ease-in-out;

    &:hover {
        border: 0.1rem solid rgba($white, 0.11);
    }
}



.main {
    position: relative;
    background-image: url('/assets/images/main-background.png');
    background-size: cover;
    height: 124rem;
    display: flex;
}

.earth-image,
.coins-image {
    background-repeat: no-repeat;
    position: absolute;
}

.earth-image {
    z-index: $earth-z-index;
    right: 0;
    top: -6.8rem;
}

.coins-image {
    z-index: $coins-z-index;
    right: 17.7rem;
    top: 17.7rem
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 20.7rem;
}

.main-text-wrapper {
    width: 100%;
}

.main-text {
    height: 23.4rem;
    width: 69.8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 21.5rem;
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
    backdrop-filter: blur(0);
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
    backdrop-filter: blur(0.1rem);
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
