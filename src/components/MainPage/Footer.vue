<script>
import constants from '../constants/footer.json'
import Icon from '../UI/Icon.vue';
export default {
    computed: {
        constants() {
            return constants;
        },
        sprite() {
            return sprite;
        }
    },
    components: {
        Icon
    }
}

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="content-wrapper">
                <div class="links">
                    <div class="links__site-links">
                        <div class="links-column" v-for="(column, columnIndex) in constants.LINKS" key="columnIndex"
                            :style="{ marginRight: `${column.MARGIN_RIGHT}` }">
                            <h4 class="links-column__header">
                                {{ column.HEADER_NAME }}
                            </h4>
                            <ul class="links-column__list">
                                <li class="link" v-for="(link, linkIndex) in column.LINKS" key="linkIndex">
                                    <a href="">{{ link.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="links__other-info">
                        <div class="other-info">

                            <div class="other-info__technologies">
                                <a v-for="(item, technologieIndex) in constants.TECHNOLOGIES" :key="technologieIndex"
                                    href="">
                                    <Icon class="tech_icon" :iconHeight="`${item.height}`" :iconWidth="`${item.width}`"
                                        :iconName="`${item.src}`" :spritePath="constants.SPRITE_PATH" :iconColor="`${item.color}`" />
                                </a>
                            </div>
                            <div class="other-info__aside-text">
                                <p>{{ constants.ASIDE_TEXT }}</p>
                            </div>
                            <div class="other-info__resourses-links">
                                <a v-for="(item, socialIndex) in constants.SOCIAL_LINKS" :key="socialIndex" href="">
                                    <Icon :iconHeight="'3.2rem'" :iconWidth="'3.2rem'" :iconName="`${item.src}`"
                                        :spritePath="constants.SPRITE_PATH" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="break-line" />
                <div class="copyrights">
                    <span class="copyrights__text">
                        {{ constants.COPYRIGHT }}
                    </span>
                    <span class="copyrights__text">
                        {{ constants.CREATED_BY }}
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: $sliderBlack;
    width: 100%;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    height: 41.6rem;
    align-items: start;
    padding-top: 4.4rem;
    background: $sliderBlack;
    padding: 4.4rem 8.5rem 0rem 8.5rem;
}

.links {
    display: flex;
    flex-direction: row;
    justify-content: start;
}

.links__site-links {
    display: flex;
    flex-direction: row;
    justify-content: start;
}

.links-column {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 3.2rem
}

.links-column__header {
    @include text(caption);
    color: $white;
}

.links-column__list {
    display: flex;
    flex-direction: column;
    gap: 1.8rem
}

.link {
    @include text(footerLink);
    color: $grey
}

.links__other-info {
    display: flex;
    flex-direction: column;

}

.other-info__technologies {
    display: flex;
    flex-direction: row;
    gap: 1.4rem;
    margin-left: 0.4rem;
}

.other-info__resourses-links {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-left: 0.5rem;
    margin-top: 14.2rem;
}

.other-info__aside-text {
    @include text(footerText);
    color: $grey;
    width: 29.1rem;
    height: 7.6rem;
    margin-top: 2.9rem;
}

.break-line {
    height: 0.1rem;
    width: 100%;
    background: $breakLine;
    margin: 1.2rem 0rem 1.6rem 0rem;

}

.copyrights {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.copyrights__text {
    @include text(copyrights);
    color: $grey
}

a:hover {
    color: $white
}
</style>
