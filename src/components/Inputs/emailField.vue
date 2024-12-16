<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { onMounted, onUnmounted, ref, computed } from 'vue';
import constants from '../constants/inputForm.json'
import Icon from '../UI/Icon.vue';

const emailError = "Проверьте адрес электронной почты"
let isInputVisible = ref(false)
const inputForm = ref(null)
const inputField = ref(null)
const inputIsNotFocused = ref(null)
const isError = ref(null)

const { values, errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string({ required_error: '' }).email(emailError),
    }),
  ),
});

const changeInputVisibility = (value) => {
  isInputVisible.value = value
}

onMounted(() => {
  addClickListener()
  // console.log(email.value)
})

const [email, emailAttrs] = defineField('email');

const addClickListener = () => {
  document.addEventListener("click", handleClickOutside);
}

const checkErrows = () => {
  // console.log(email.value)
  // console.log(errors.value)
  // if (email.value == "") {
  //   errors.value.email = ""
  // }
  // console.log(errors.value.email)
}

const handleClickOutside = (event) => {
  const input = inputForm.value;
  if (input && !input.contains(event.target)) {
    if (!email.value && email != "") {
      changeInputVisibility(false)
    }
    inputIsNotFocused.value = true;
    // console.log(errors.value.email)
    if (errors.value.email != null) {
      isError.value = true
    }
  }
}

const focusInput = () => {
  if (inputField.value) {
    // console.log(inputField)
    //не понимаю как фокусировать поле
    inputField.value.focus();
  }
};

const isIconHidden = computed(() => {
  return (isError.value || (errors.value.email !== undefined) || (email.value === undefined))
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
  <form action="" class="input-form">
    <div :class="['input-field', { 'errorBackligth': isError }]" ref="inputForm"
      @click="changeInputVisibility(true), focusInput()">
      <div class="input-wrapper">
        <div :class="['placeholder', { 'fullView': isInputVisible }]">
          <span :class="['placeholder__text', { 'smallText': isInputVisible, 'bigText': !isInputVisible }]">
            {{ constants.EMAIL_TEXT }}
          </span>
        </div>
        <input ref="inputField" v-model="email" v-bind="emailAttrs" :placeholder="constants.EMAIL_PLACEHOLDER"
          @input="checkErrows" @focus="changeBackligth" :class="['input', { 'isHidden': !isInputVisible }]" />
      </div>
      <div :class="['mark', { 'hidden': isIconHidden }]">
        <Icon :iconHeight="'1.6rem'" :iconWidth="'1.6rem'" :iconName="constants.ICON_CHECKED"
          :spritePath="constants.SPRITE_PATH" :iconColor="'#00aa00'" :hoverEffect="false" />
      </div>
    </div>
    <div class="error-text" v-if="inputIsNotFocused">{{ errors.email }}</div>
  </form>
</template>


<style lang="scss" scoped>
.input-form {
  height: 10rem;
}

.input-field {
  height: 5.6rem;
  width: 25.8rem;
  padding: 0.6rem 1.6rem;
  background-color: white;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: row;
  cursor: text;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
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

.input-field.errorBackligth {
  background-color: rgb(250, 175, 175);
}

.placeholder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex: 1;
}

.placeholder__text {
  color: $buttonBlack;
  transition: font-size 0.3s ease
}

.placeholder__text.smallText {
  @include text(placeholderTextSmall)
}

.placeholder__text.bigText {
  @include text(placeholderTextBig)
}

.error-text {
  @include text(errorText);
  color: red;
}

.input {
  flex: 1;
}

.input.isHidden {
  display: none;
}
</style>
