<script>

import constants from '../constants/header.json'
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
    <header class="container header">
        <svg class="logo-icon" width="4.2rem" height="4.2rem">
            <use :href="`${getURL(constants.SPRITE_PATH)}#${constants.ICON_LOGO}`"></use>
        </svg>
        <nav class="menu">
            <div :class="['menu__element', { 'menu__element-bold': element.isBold }]"
                v-for="(element, index) in constants.HEADER_MENU" :key="index">
                <a>{{ element.name }}</a>
            </div>
        </nav>
        <div class="user-data">
            <div class="user-data__language">
                <!-- <img src="../../assets/icons/header/language.svg" alt="language"> -->
                <!-- <use :href="`${getURL(constants.SPRITE_PATH)}#icon-android`"></use> -->
                <svg class="language-icon" width="1.5rem" height="1.6rem">
                    <use :href="`${getURL(constants.SPRITE_PATH)}#${constants.ICON_LANGUAGE}`"></use>
                </svg>
                <span>{{ constants.LANGUAGE }}</span>
            </div>
            <div class="user-data__score">
                <svg class="coin-icon" width="2.0rem" height="2.0rem">
                    <use :href="`${getURL(constants.SPRITE_PATH)}#${constants.ICON_COIN}`"></use>
                </svg>
                <span>{{ constants.NUMBER }}</span>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: row;
    height: 6.8rem;
    align-items: center;
    background: linear-gradient(267.43deg, rgba(0, 255, 163, 0.12) 36.58%, rgba(31, 26, 255, 0.2) 80.91%);
    box-shadow: 0rem 0.4rem 4rem 0rem #0000000D;
}

.menu {
    display: flex;
    flex-direction: row;
    width: 56.8rem;
    height: 1.9rem;
    justify-content: space-between;
    align-items: center;
    margin-left: 3.7rem;
    z-index: $header-menu-z-index;
}

.menu__element,
.menu__element-bold {
    @include text(menu);
}

.menu__element {
    color: rgba($white, 0.42);
}

.menu__element-bold {
    color: $white;
    font-weight: bold;
}

.user-data {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-left: 39.1rem;
    z-index: $header-user-data-z-index;
}

.user-data__language,
.user-data__score {
    border: 0.05rem solid linear-gradient(180deg, rgba($white, 0.7) 0%, rgba(225, 225, 225, 0.252) 100%);
    border-radius: 0.8rem;
    height: 3.3rem;
    background-color: rgba($white, 0.15);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.user-data__language {
    width: 7.6rem;

    &:hover {
        cursor: pointer;
        background: #000;
    }
}

//нужно убрать по идее
.user-data__score {
    width: 10.6rem;
}

.user-data__language img,
span,
.user-data__score img,
span {
    display: inline-block;
}

.user-data__language img {
    margin-left: 1rem;
}

.user-data__language span {
    @include text(menu);
    color: $white;
    margin-left: 0.6rem;
}

.user-data__language img,
span {
    display: inline-block;
}

.user-data__score img {
    margin-left: 0.9rem;
}

.user-data__score span {
    @include text(caption);
    color: $white;
    margin-left: 0.9rem;
    margin-right: 1rem;
}

a {
    &:hover {
        cursor: pointer;
        color: $white;
    }
}
</style>
