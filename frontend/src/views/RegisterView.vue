<template>

  <LPageContent>
  
      <div class="flex flex-col gap-2 items-center w-1/4 mx-0 my-4">
        
        <LFieldHeader title="Реєстрація" :title-big="true"/>
  
        <!-- Inputs -->
        <div class="flex flex-col content-center w-full">
          
          <LInputField
            title="Користувач"
            placeholder="Ім'я користувача"
            v-model:text="registerData.username"
          />

          <LInputField
            title="Email"
            placeholder="Email"
            v-model:text="registerData.email"
          />
  
          <LInputField
            title="Придумайте пароль"          
            placeholder="Пароль" 
            v-model:text="registerData.password"
            :is-password="true"
          /> 

          <LInputField
            title="Продублюйте пароль"          
            placeholder="Продублюйте пароль" 
            v-model:text="registerData.passwordCopy"
            :is-password="true"
          /> 

        </div>

        <!-- Register btn -->
        <LButton class="btn-primary self-center w-1/2" 
          title="Зареєструватись"
          @click="createAccount()"
        />
  
        <div class="divider select-none">Або</div>
  
        <!-- Other btns -->
        <div class="flex flex-col flex-wrap my-2">
          <LButton class="btn-ghost" @click="navigateToLogin" title="Авторизуватись"/>
          <LButton class="btn-ghost" @click="navigateToForgotPassword" title="Відновити пароль?" />
        </div>
  
      </div>

  </LPageContent>
  
</template>
  
<script setup>

// Vue imports
import { ref } from "vue";
import { useRouter } from "vue-router";

// Functional imports
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { useUserStore } from "../store/userStore";

// Components
import LPageContent from '../components/layout/LPageContent.vue'
import LInputField  from '../components/controls/LInputField.vue'
import LButton      from '../components/controls/buttons/LButton.vue'
import LFieldHeader from '../components/controls/LFieldHeader.vue';

// Toast
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

/*
  Registration
*/

const registerData = ref({
  email: "",
  username: "",
  password: "",
  passwordCopy: "",
});

const createAccount = () => {
  if (!isEqual(registerData.value.password, registerData.value.passwordCopy)) {
    createToast({ title: 'Паролі не співпадають!', description: 'Впевніться у правильності введених даних.'}, {type: 'danger', position: 'top-center'})
    return
  }

  const userAttributes = [];
  userAttributes.push(
    new CognitoUserAttribute({
      Name: "email",
      Value: registerData.value.email,
    })
  );

  userStore.userPool.signUp(
    registerData.value.username,
    registerData.value.password,
    ы,
    null,
    (error) => {
      if (error) {
        createToast({ title: 'Виникла помилка!', description: error.message || JSON.stringify(error) }, {type: 'danger', position: 'top-center'})
        return;
      }

      createToast({ title: 'Обліковий запис успішно створено!', description: 'Вам було надіслано лист підтвердження на пошту.'}, {type: 'success', position: 'top-center'})
      router.push({ name: "Login" });
    }
  );
};

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

const navigateToForgotPassword = () => {
  router.push({ name: "ForgotPassword" });
};

</script>

<style scoped>

</style>