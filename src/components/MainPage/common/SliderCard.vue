<script>
export default {
    name: 'SliderCard',
    props: {
        card: {
            type: Object,
            required: true,
        },
        active: {
            type: Boolean,
            default: false,
            required: false
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

    <div :class="['SlideCard', $style.SlideCard, { [$style['_active']]: active }]"
        :style="{ backgroundImage: `url(${getURL(card.img)})` }">
        <span :class="$style.subtitle">{{ card.header_text }}</span>
        <span :class="$style.title">{{ card.h3_text }}</span>
        <span :class="$style.text">{{ card.small_text }}</span>
        <button :class="$style.btn">{{ card.button_text }}</button>
        <div :class="{ [$style['blur']]: !active }" />
    </div>

</template>

<style lang="scss" module>
.blur {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: $blur-z-index;
    backdrop-filter: blur(4px);
}

.SlideCard {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 35.3rem;
    height: 46rem;
    background-color: $sliderBlack;
    opacity: 0.5;
    transition: all .3s ease-in-out;
    cursor: pointer;
    border-radius: 0.8rem;
    background-repeat: no-repeat;
    background-position: bottom right;
    z-index: $swiper-z-index;

    &:global(.swiper-slide) {
        transform: translateY(100px);
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
    box-shadow: 0px 8px 16px 0px rgba(75, 72, 241, 0.19);
    @include text(button);
    margin: 3.2rem 3rem 0rem 3rem;
}
</style>
