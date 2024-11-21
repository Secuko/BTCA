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
        }
    },
    methods: {
        getURL(src) {
            return new URL(src, import.meta.url).href
        },
    },
}
</script>

<template>
    <svg class="svg" :width="iconWidth" :height="iconHeight">
        <use :href="`${getURL(spritePath)}#${iconName}`" />
    </svg>
</template>

<style>
.svg {
    fill: #5653FF;
}
</style>
