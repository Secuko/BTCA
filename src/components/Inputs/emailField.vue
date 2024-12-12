<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

const { errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string().min(1).email(),
    }),
  ),
});

const [email, emailAttrs] = defineField('email');

</script>

<template>
    <input v-model="email" v-bind="emailAttrs" placeholder="Электронная почта"/>
    <div>{{ errors.email }}</div>
</template>


<style lang="scss" scoped>
input {
    height: 5.6rem;
    width: 25.8rem;
    padding: 0.6rem 1.6rem;
    background-color: gray;
    border-radius: 1.2rem;
}

input :active{
    border: 1px solid black
}

</style>
