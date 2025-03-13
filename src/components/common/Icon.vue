<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';

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
        required: false,
        default: 'white'
    },
    hoverEffect: {
        type: Boolean,
        required: false,
        default: true
    }
})

const isActivated = ref(false)

function activateIcon() {
    isActivated.value = true
}

function deactivateIcon(){
    isActivated.value = false;
}

</script>

<template>
    <svg class="svg" @mouseenter="activateIcon()" @mouseleave="deactivateIcon()"
    :class="[{'colorWhite' : (isActivated && props.hoverEffect)}]"
        :style="{ width: props.iconWidth, height: props.iconHeight, color: props.iconColor }">
        <use :href="`${getURL(props.spritePath)}#${props.iconName}`" />
    </svg>
</template>

<style lang="scss" scoped>
.colorWhite {
    color: white !important;
}
</style>

<!--
<template>
    <svg class="svg" @mouseenter="activateIcon()" @mouseleave="deactivateIcon()"
        :style="{ width: props.iconWidth, height: props.iconHeight, '--icon-color': props.iconColor }">
        <use :href="`${getURL(props.spritePath)}#${props.iconName}`" />
    </svg>
</template>

<style lang="scss" scoped>
.svg {
    color: var(--icon-color, $white);
    cursor: pointer;
    transition: color 0.4s ease-in-out;

    &:hover {
        color: var(--hover-effect, $white);
    }

    &[style*="--hover-effect: false"] {
        &:hover {
            color: var(--icon-color, $white);
        }
    }
}
</style> -->
