<template>

  <LPageContent>
  
    <div class="flex flex-col gap-2 items-center w-1/4 mx-0 my-4">
        
      <LFieldHeader title="Відновлення паролю" :title-big="true"/>
  
      <!-- Send email section -->
      <div v-if="!displayConfirmation" class="flex flex-col gap-2 w-full">

        <LInputField
          title="Користувач"
          placeholder="Введіть ім'я користувача"
          v-model:text="forgotPasswordData.username"
        />

        <LButton class="btn-outline btn-primary self-center w-1/2"
          title="Надіслати"
          @click="sendEmail()"
        >
          <EnvelopeIcon class="w-6 h-6"/>
        </LButton>
        
      </div>

      <!-- Confirmation section -->
      <div v-if="displayConfirmation" class="flex flex-col gap-2 w-full">

        <LInputField
          title="Код підтвердження"
          placeholder="Введіть код підтвердження" 
          v-model:text="forgotPasswordData.confirmCode"
        />

        <LInputField
          title="Придумайте пароль"
          placeholder="Введіть новий пароль" 
          v-model:text="forgotPasswordData.password"
          :is-password="true"
        /> 

        <LInputField
          title="Продублюйте пароль"          
          placeholder="Введіть новий пароль повторно" 
          v-model:text="forgotPasswordData.passwordCopy"
          :is-password="true"
        /> 

        <LButton class="btn-outline btn-primary self-center w-1/2"
          title="Відновити"
          @click="confirmPassword()"
        />

      </div>
  
      <div class="divider select-none">Або</div>

      <div class="flex flex-col flex-wrap">
        <LButton class="btn-ghost" @click="navigateToLogin" title="Авторизуватись"/>
        <LButton class="btn-ghost" @click="navigateToRegistration" title="Зареєструватись"/>
      </div>
  
    </div>

  </LPageContent>
  
  
</template>
  
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useUserStore } from "../../store/userStore";
import isEqual from "lodash.isequal";

// Components
import LPageContent from '../../components/layout/LPageContent.vue'
import LInputField  from '../../components/controls/LInputField.vue'
import LButton      from '../../components/controls/buttons/LButton.vue'
import LFieldHeader from '../../components/controls/LFieldHeader.vue';

// Toast
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

import { EnvelopeIcon } from '@heroicons/vue/24/outline';


/*
  Forgot Password
*/

const forgotPasswordData = ref({
  username: '',
  confirmCode: '',
  password: '',
  passwordCopy: ''
})

const displayConfirmation = ref(false)

const sendEmail = () => {
  const cognitoUser = userStore.createCognitoUser(forgotPasswordData.value.username)
  
  cognitoUser.forgotPassword({
    onSuccess: () => {
      // successfully initiated reset password request
      createToast({ title: 'Перевірте пошту :)', description: 'Вам було надіслано код підтвердження.'}, {type: 'info', position: 'bottom-right'})
      displayConfirmation.value = true
    },
    onFailure: (error) => {
      createToast({ title: 'Виникла помилка!', description: error.message || JSON.stringify(error) }, {type: 'warning', position: 'bottom-right'})
      console.log(error)
    }
  })
}

const confirmPassword = () => {
  if (!isEqual(forgotPasswordData.value.password, forgotPasswordData.value.passwordCopy)) {
    createToast({ title: 'Паролі не співпадають!', description: 'Впевніться у правильності введених даних.'}, {type: 'warning', position: 'bottom-right'})
    return
  }
  const cognitoUser = userStore.createCognitoUser(forgotPasswordData.value.username)

  cognitoUser.confirmPassword(forgotPasswordData.value.confirmCode, forgotPasswordData.value.password, {
    onSuccess: () => {
      createToast({ title: 'Пароль успішно підтверджено!', description: 'Вітаємо! Спробуйте авторизуватись :)'}, {type: 'info', position: 'bottom-right'})
      navigateToLogin()
    },
    onFailure: (error) => {
      createToast({ title: 'На жаль, ой ай!', description: error.message || JSON.stringify(error) }, {type: 'danger', position: 'bottom-right'})
    },
  })
}

/*
  Store
*/

const userStore = useUserStore()

/*
  Navigation
*/

const router = useRouter()

const navigateToLogin = () => {
  router.push({ name: "Login" })
}
  
const navigateToRegistration = () => {
  router.push({ name: "Registration" })
}

</script>

<style scoped>

</style>