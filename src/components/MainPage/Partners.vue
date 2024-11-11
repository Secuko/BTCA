<script>
import constants from '../constants/partners.json'
export default {
    computed: {
        constants() {
            return constants;
        }
    }

}

</script>

<template>
    <section class="content-wrapper">
        <div class="text-block">
            <h2 class="text-block__h2">
                {{ constants.H2_TEXT }}
            </h2>
            <p class="text-block__text">
                {{ constants.SMALL_TEXT }}
            </p>
            <div class="swap-field">

            </div>
        </div>
        <div class="animation-block">

        </div>
        <div class="bg-text">
            <span>{{ constants.BG_TEXT }}</span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.content-wrapper {
    position:relative;
    padding-top: 16.8rem;
    height: 61.7rem;
}

.text-block{
    display: flex;
    flex-direction: column;
}

.text-block__h2{
    @include text(h2);
    background: linear-gradient(91.92deg, $white 29.24%, rgba(176, 250, 255, 0) 131.64%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.text-block__text{
    @include text(p);
    color: $white;
}
</style>
