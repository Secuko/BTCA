<script>
export default {
    props: {
        spritePath: {
            type: String,
            required: true,
        },
        iconName: {
            type: String,
            required: true,
        },
        iconWidth: {
            type: String,
            required: true,
        },
        iconHeight: {
            type: String,
            required: true,
        },
        iconColor: {
            type: String,
            required: false,
        },
        hoverEffect: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    methods: {
        getURL(src) {
            return new URL(src, import.meta.url).href
        },
    },
    computed: {
        dynamicStyles() {
            return {
                '--icon-color': this.iconColor,
            };
        }
    },
}
</script>

<template>
    <svg class="svg"
        :style="{ width: iconWidth, height: iconHeight, '--icon-color': iconColor, '--hover-effect': hoverEffect }">
        <use :href="`${getURL(spritePath)}#${iconName}`" />
    </svg>
</template>

<style lang="scss">
.svg {
    color: var(--icon-color, $white);
    cursor: pointer;
    transition: .4s ease-in-out;

    &:hover {
        color: $white;
        pointer-events: calc(var(--hover-enabled, 1) * 1); // Если hover запрещён, отключаем pointer-events
    }

    &[style*="--hover-effect: 0"] {
        &:hover {
            color: var(--icon-color, $white);
        }
    }
}
</style>
