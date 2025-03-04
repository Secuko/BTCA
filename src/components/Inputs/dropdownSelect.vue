<script setup>
import { useForm } from 'vee-validate';
import { onMounted, onUnmounted, ref, computed } from 'vue';
import constants from '../constants/inputForm.json'
import Icon from '../UI/Icon.vue';

const props = defineProps({
    labelText: String,
})

const isMenuOpen = ref(false)
const selectForm = ref(null)
const openedForm = ref(null)
const selectedIndexes = ref([])


const selectItem = (index) => {
    if (selectedIndexes.value.includes(index)) {
        selectedIndexes.value.splice(selectedIndexes.value.indexOf(index), 1)
    } else if (selectedIndexes.value.length <= 3) {
        selectedIndexes.value.push(index)
    }
}

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
})

const handleClickOutside = (event) => {
    const select = selectForm.value;
    const form = openedForm.value
    if (!isMenuOpen.value && (select && select.contains(event.target))) {
        isMenuOpen.value = true
    } else if (isMenuOpen.value && (form && !form.contains(event.target))) {
        isMenuOpen.value = false;
    }
}

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
})

function checkItemIsActive(index) {
    return selectedIndexes.value.includes(index)
}

</script>

<template>
    <div class="select-form">
        <div :class="['input-field']" ref="selectForm">
            <label :class="['label']"> {{ props.labelText }}</label>
            <div :class="['mark']">
                <Icon :iconHeight="'1.6rem'" :iconWidth="'1.6rem'" :iconName="constants.ICON_ARROW"
                    :spritePath="constants.SPRITE_PATH" :iconColor="'#0000008a'" :hoverEffect="false" />
            </div>
        </div>
        <div :class="['select-form_menu']" v-if="isMenuOpen" ref="openedForm">
            <div :class="['menu-item']" v-for="(item, index) in constants.SELECT_ITEMS" :key="index">
                <div class="select-icon" @click="selectItem(index)">
                    <Icon :class="[{ 'invisible': !checkItemIsActive(index) }]" :iconHeight="'2.0rem'" :iconWidth="'2.0rem'"
                        :iconName="constants.SELECT_CHECK_ICON" :spritePath="constants.SPRITE_PATH"
                        :iconColor="'#333333'" :hoverEffect="false"/>
                </div>
                <div class="service-icon">
                    <Icon :iconHeight="`${item.height}`" :iconWidth="`${item.width}`" :iconName="`${item.icon}`"
                        :spritePath="constants.SPRITE_PATH" :hoverEffect="false"/>
                </div>
                <h4 class="service-text">
                    {{ item.text }}
                </h4>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.input-wrapper input:focus+.label,
.input-wrapper input:not(:placeholder-shown)+.label {
    height: 50%;
    font-size: 1.4rem;
}

.select-form {
    height: 10rem;
    position: relative;
}

.invisible{
    display: none;
}

.select-form_menu {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.4rem 0.6rem;
    margin: 0.4rem 0.0rem;
}

.service-icon,
.select-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.service-icon {
    height: 2.8rem;
    width: 2.8rem;
    margin-right: 1.0rem;
    background-color: $grey;
}

.select-icon {
    height: 2.4rem;
    width: 2.4rem;
    margin-right: 1.0rem;
    background-color: $greyLigth;
    border-radius: 0.6rem;
}

.service_text {
    @include text(selectText);
    width: 100%;
    height: 2.4rem;
    color: black;
}

.menu-item {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 4.4rem;
    width: 100%;
    padding: 0.6rem 1.0rem;
    border-radius: 0.4rem;

    &:hover {
        background-color: $grey;
    }
}


.input-field {
    height: 5.6rem;
    padding: 0.6rem 1.6rem;
    background-color: white;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
}

.label {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: $white;
    font-size: 1.6rem;
    transition: all 0.3s ease;
    cursor: pointer;
    user-select: none;
}

.mark {
    width: 4.4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.select-form_menu {
    top: 6rem;
    position: absolute;
    z-index: 10000;
    width: 100%;
    height: 40rem;
    background-color: white;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
}
</style>
