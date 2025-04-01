<script setup lang="ts">
import { useForm } from 'vee-validate';
import { onMounted, onUnmounted, ref, computed } from 'vue';
import constants from '../constants/inputForm.json'
import Icon from '../common/Icon.vue';

interface Props {
  fieldName: string;
  schema: Record<string, any>;
  width?: string;
  labelText?: string;
  placeholder?: string;
}

const props = defineProps < Props > ();

const isInputVisible = ref < boolean > (false);
const inputForm = ref < HTMLElement | null > (null);
const inputField = ref < HTMLInputElement | null > (null);
const inputIsNotFocused = ref < boolean | null > (null);
const isError = ref < boolean | null > (null);
const phoneStartValue = '+7 (';
const phoneNumberEnd: Ref<string> = ref(phoneStartValue);
const dateEnd: Ref<string> = ref('');


const { values, errors, defineField } = useForm({
  validationSchema: props.schema,
});

// const changeInputVisibility = (value: boolean) => {
//   isInputVisible.value = value
// }

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
})

const [field] = defineField < string > (props.fieldName);

const checkErrows = () => {
}

const handleClickOutside = (event: MouseEvent) => {
  const input = inputForm.value;
  if (input && !input.contains(event.target)) {
    phoneNumberEnd.value = ""
    if (field.value == phoneStartValue) field.value = undefined;
    inputIsNotFocused.value = true;
    // console.log(errors.value.email)
    if (errors.value[props.fieldName] != null) {
      isError.value = true
    }
  }
}

const formatPhone = () => {
  let formatted = phoneStartValue
  if (field.value == undefined) field.value = formatted;
  let numbers = field.value.replace(/\D/g, ""); // убираю символы кроме цифр
  if (numbers.startsWith("7")) {
    numbers = numbers.substring(1); // убираю префикс
  }

  if (numbers.length > 0) formatted += numbers.substring(0, 3);
  if (numbers.length >= 4) formatted += ") " + numbers.substring(3, 6);
  if (numbers.length >= 7) formatted += "-" + numbers.substring(6, 8);
  if (numbers.length >= 9) formatted += "-" + numbers.substring(8, 10);

  phoneNumberEnd.value = formatted + props.placeholder.substring(formatted.length);
  field.value = formatted
};

const formatDate = () => {
  let formatted = ""
  if (field.value == undefined) field.value = formatted;
  let numbers = field.value.replace(/\D/g, "");

  if (numbers.length > 0) formatted += numbers.substring(0, 2);
  if (numbers.length > 2) formatted += "." + numbers.substring(2, 4);
  if (numbers.length >= 5) formatted += "." + numbers.substring(4);
  dateEnd.value = formatted + props.placeholder.substring(formatted.length);
  field.value = formatted
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
    <div :class="['input-field', { 'errorBackligth': isError }]" :style="{ width: props.width }" ref="inputForm">
      <div class="input-wrapper">
        <template v-if="fieldName == 'phone'">
          <div>{{ phoneNumberEnd }}</div>
          <input type="text" :id="`input-${fieldName}`" v-model="field" @input="formatPhone"
            :placeholder="props.placeholder" @focus="formatPhone(); changeBackligth()" maxlength="18" />
        </template>
        <template v-else-if="fieldName == 'date'">
          <div>{{ dateEnd }}</div>
          <input type="text" :id="`input-${fieldName}`" v-model="field" @input="formatDate"
            :placeholder="props.placeholder" @focus="formatDate(); changeBackligth()" maxlength="10" />
        </template>
        <input v-else type="text" :id="`input-${fieldName}`" ref="inputField" :placeholder="props.placeholder"
          @input="checkErrows" @focus="changeBackligth" v-model="field" />
        <label :for="`input-${fieldName}`" :class="['label', { 'errorBackligth': isError }]"> {{ props.labelText }}
        </label>
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
.input-wrapper input:focus+.label,
.input-wrapper input:not(:placeholder-shown)+.label {
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
  z-index: 1000;
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
  user-select: none;
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
  z-index: 100;
}

.input-wrapper div {
  position: absolute;
  bottom: 1px;
  left: 0;
  height: 50%;
  font-size: 1.6rem;
  border: none;
  outline: none;
  color: rgb(158, 158, 158)
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
