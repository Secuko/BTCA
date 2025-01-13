<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { onMounted, onUnmounted, ref, computed } from 'vue';
import constants from '../constants/inputForm.json'
import Icon from '../UI/Icon.vue';

const props = defineProps({
  fieldName: String,
  schema: Object,
  width: String,
  labelText: String,
  placeholder: String,
})

let isInputVisible = ref(false)
const inputForm = ref(null)
const inputField = ref(null)
const inputIsNotFocused = ref(null)
const isError = ref(null)

const { values, errors, defineField } = useForm({
  validationSchema: props.schema,
});

const changeInputVisibility = (value) => {
  isInputVisible.value = value
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
})

const [field] = defineField(props.fieldName);

const checkErrows = () => {
}

const handleClickOutside = (event) => {
  const input = inputForm.value;
  if (input && !input.contains(event.target)) {
    if (!field.value && field != "") {
      changeInputVisibility(false)
    }
    inputIsNotFocused.value = true;
    // console.log(errors.value.email)
    if (errors.value[props.fieldName] != null) {
      isError.value = true
    }
  }
}

const isIconHidden = computed(() => {
  return (isError.value || (errors.value[props.fieldName] !== undefined) || (field.value === undefined))
})

const changeBackligth = () => {
  isError.value = false;
  inputIsNotFocused.value = false;
}

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
})

</script>

<template>
  <div class="input-form">
    <div :class="['input-field', { 'errorBackligth': isError }]" :style="{width: props.width}" ref="inputForm">
      <div class="input-wrapper">
        <input type="text" id="inputId" ref="inputField" :placeholder="props.placeholder" @input="checkErrows"
          @focus="changeBackligth" v-model="field" />
        <label for="inputId" :class="[ 'label', {'errorBackligth': isError }]"> {{ props.labelText }} </label>
      </div>
      <div :class="['mark', { 'hidden': isIconHidden }]">
        <Icon :iconHeight="'1.6rem'" :iconWidth="'1.6rem'" :iconName="constants.ICON_CHECKED"
          :spritePath="constants.SPRITE_PATH" :iconColor="'#00aa00'" :hoverEffect="false" />
      </div>
    </div>
    <div class="error-text" v-if="inputIsNotFocused">{{ errors[props.fieldName] }}</div>
  </div>
</template>


<style lang="scss" scoped>

.input-wrapper input:focus + .label,
.input-wrapper input:not(:placeholder-shown) + .label {
    height: 50%;
    font-size: 1.4rem;
}

.input-form {
  height: 10rem;
}

.input-field {
  height: 5.6rem;
  padding: 0.6rem 1.6rem;
  background-color: white;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: row;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: $white;
  font-size: 1.6rem;
  cursor: text;
  transition: all 0.3s ease;
}

.input-wrapper input {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: none;
}

.mark {
  width: 4.4rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mark.hidden {
  visibility: hidden
}

.errorBackligth {
  background-color: rgb(250, 175, 175);
}

.error-text {
  @include text(errorText);
  color: red;
}

.input {
  flex: 1;
}

</style>
