<script setup>
import {onMounted} from 'vue';

const props = defineProps({
    card: {
        type: Object,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
        required: false
    }
})


function getURL(src) {
    return new URL(src, import.meta.url).href
}

</script>


<template>
    <div :class="['SlideCard', $style.SlideCard, { [$style['_active']]: props.active }]"
        :style="{ backgroundImage: `url(${props.card.img})` }">
        <!-- :style="{ backgroundImage: `url(${getURL(props.card.img)})` }"> -->
        <span :class="$style.subtitle">{{ props.card.header_text }}</span>
        <span :class="$style.title">{{ props.card.h3_text }}</span>
        <span :class="$style.text">{{ props.card.small_text }}</span>
        <button :class="$style.btn">{{ props.card.button_text }}</button>
        <div :class="{ [$style['blur']]: !props.active }" />
    </div>
</template>

<style lang="scss" module>
.blur {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: $blur-z-index;
    backdrop-filter: blur(0.4rem);
}

.SlideCard {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 35.3rem;
    height: 46rem;
    background-color: $sliderBlack;
    opacity: 0.5;
    transition: transform 0.6s ease-in-out;
    cursor: pointer;
    border-radius: 0.8rem;
    background-repeat: no-repeat;
    background-position: bottom right;
    z-index: $swiper-z-index;

    &:global(.swiper-slide) {
        transform: translateY(10rem);
    }
}

.SlideCard._active {
    opacity: 1;
    transform: translateY(0);
}

.subtitle {
    @include text(p);
    color: white;
    margin: 3rem 0rem 0rem 3rem;
    max-width: 30.3rem;

}

.title {
    color: white;
    @include text(h3);
    margin: 0.2rem 3rem 0rem 3rem;
    max-width: 27.3rem;
}

.text {
    color: white;
    margin: 1.6rem 3rem 0rem 3rem;
    @include text(body2);
    max-width: 27.3rem;
}

.btn {
    width: 22.4rem;
    height: 5.4rem;
    color: $white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: $green;
    border-radius: 1.2rem;
    box-shadow: 0 0.8rem 1.6rem 0 rgba(75, 72, 241, 0.19);
    @include text(button);
    margin: 3.2rem 3rem 0rem 3rem;
}
</style>
