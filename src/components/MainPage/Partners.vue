<script setup>
import constants from '../constants/partners.json'
import Icon from '../common/Icon.vue';

</script>

<template>
    <section class="container">
        <div class="content-wrapper">
            <div class="right-block">
                <div class="text-wrapper">
                    <h2 class="text-block__h2">
                        {{ constants.H2_TEXT }}
                    </h2>
                    <p class="text-block__text">
                        {{ constants.SMALL_TEXT }}
                    </p>
                </div>
                <div class="swap-field">
                    <div class="swap-field-right">
                        <div class="swap-field__tips">
                            <span>{{ constants.TIPS }}</span>
                        </div>
                        <div class="swap-field__text">
                            <span>{{ constants.PLACEHOLDER }}</span>
                        </div>
                    </div>
                    <div class="rotate-icon-wrapper">
                        <!-- <svg class="rotate-icon" width="3.7rem" height="3.7rem">
                            <use :href="`${getURL(constants.SPRITE_PATH)}#${constants.ICON_ROTATE}`"></use>
                        </svg> -->
                        <Icon :iconHeight="'3.7rem'" :iconWidth="'3.7rem'" :iconName="constants.ICON_ROTATE"
                            :spritePath="constants.SPRITE_PATH" />
                    </div>
                </div>
            </div>
            <div class="animation-block">

            </div>
            <div class="bg-text">
                <span>{{ constants.BG_TEXT }}</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.content-wrapper {
    position: relative;
    height: 61.7rem;
}

.right-block {
    position: absolute;
    width: 56.7rem;
    height: 28.1rem;
    top: 16.8rem;
    left: 8.5rem;
    display: flex;
    flex-direction: column;
    gap: 4.6rem;
}

.text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
}

.swap-field {
    width: 49.3rem;
    height: 7.2rem;
    background: $sliderBlack;
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.swap-field-right {
    display: flex;
    flex-direction: column;
}

.swap-field__tips {
    color: $white;
    @include text(tips);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 6.8rem;
    height: 2.6rem;
    border-radius: 3.7rem;
    background: $darkBlue;
}

.swap-field__text {
    color: $white;
    @include text(p);
}

.bg-text {
    position: absolute;
    @include text(bgText);
    background: linear-gradient(91.92deg, rgba($white, 0.05) 29.24%, rgba(176, 250, 255, 0) 131.64%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    left: -11.2rem;
    top: 9.6rem;
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
}
</style>
