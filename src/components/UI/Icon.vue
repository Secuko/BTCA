<script setup>
// export default {
//     computed: {
//         dynamicStyles() {
//             return {
//                 '--icon-color': this.iconColor,
//             };
//         }
//     },
// }

function getURL(src) {
    return new URL(src, import.meta.url).href
}

const props = defineProps({
    spritePath: String,
    iconName: String,
    iconWidth: String,
    iconHeight: String,
    iconColor: {
        type: String,
        required: false
    },
    hoverEffect: {
        type: Boolean,
        required: false,
        default: true
    }
})

</script>

<template>
    <svg class="svg"
        :style="{ width: props.iconWidth, height: props.iconHeight, '--icon-color': props.iconColor, '--hover-effect': props.hoverEffect }">
        <use :href="`${getURL(props.spritePath)}#${props.iconName}`" />
    </svg>
</template>

<style lang="scss" scoped>
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
