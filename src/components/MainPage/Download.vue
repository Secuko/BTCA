<script setup>
import constants from '../constants/download.json'
import Icon from '../common/Icon.vue';

</script>


<template>
    <section class="download">
        <div class="container">
            <div class="section-content-wrapper">
                <div class="content">
                    <div class="content__h2">
                        <h2>{{ constants.H2_TEXT }}</h2>
                    </div>
                    <div class="content__p">
                        <p>
                            {{ constants.SMALL_TEXT }}
                        </p>
                    </div>
                    <div class="links">
                        <a v-for="(item, technologieIndex) in constants.TECHNOLOGIES" :key="technologieIndex" href="">
                            <Icon class="tech_icon" :iconHeight="`${item.height}`" :iconWidth="`${item.width}`"
                                :iconName="`${item.src}`" :spritePath="constants.SPRITE_PATH"
                                :iconColor="`${item.color}`" />
                        </a>
                    </div>
                    <button class="download-button">
                        <Icon :iconHeight="'2.0rem'" :iconWidth="'1.6rem'" :iconName="constants.ICON_APPLE"
                            :spritePath="constants.SPRITE_PATH" :iconColor="constants.APPLE_ICON_COLOR" />

                        <span>{{ constants.BUTTON_TEXT }}</span>
                    </button>
                </div>
                <div class="image">
                    <img src="../../assets/images/ipad_iphone.png" alt="ipad_iphone">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.download {
    width: 100%;
    background-size: cover;
    background-image: url('../../assets/images/download-background.png');
}

.apple-icon {
    fill: #8886FF;
}

.section-content-wrapper {
    position: relative;
    height: 61.1rem;
    padding: 12.7rem 8.5rem;
}

.content {
    display: flex;
    flex-direction: column;
    width: 42rem;
}

.content__h2 {
    @include text(h2);
    background: linear-gradient(91.92deg, $white 29.24%, rgba(176, 250, 255, 0) 131.64%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.content__p {
    margin-top: 1.6rem;
    @include text(p);
    color: $white;
    width: 100%;
}

.links {
    margin-top: 4.0rem;
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
}

.download-button {
    margin-top: 3.2rem;
    width: 22.6rem;
    height: 5.2rem;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    background: $blue26;
    color: $downloadButtonText;
    @include text(button);

    &:hover {
        transition: border 0.5s ease-in-out;
        border: 0.1rem solid $white;
        cursor: pointer;
    }
}

.button-icon {
    width: 1.6rem;
    height: 2rem;
}

.image {
    position: absolute;
    right: 8.1rem;
    top: 8.4rem;
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
