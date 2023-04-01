<template>

<PageContent>

    <div class="flex flex-col items-center pt-[24px] pb-[18px] w-1/4">
      
      <div class="text-2xl font-bold pb-[16px]">
        Авторизація
      </div>

      <div class="flex flex-col w-full">
        
        <LInputField
          title="Користувач"
          placeholder="Ім'я користувача"
          v-model:text="loginData.username"
        />

        <LInputField
          title="Пароль"          
          placeholder="Пароль користувача" 
          v-model:text="loginData.password"
          :is-password="true"
        /> 

        <LButton class="w-[230px] m-auto mt-[16px] rounded-md h-10" 
          title="Авторизуватись"
          @click="loginUser()"
        />
      </div>

      

      

      <div class="divider select-none">Або</div>

      <div class="flex flex-col flex-wrap">
        <LButton class="btn-ghost" @click="navigateToRegistration" title="Зареєструватися"/>
        <LButton class="btn-ghost" @click="navigateToForgotPassword" title="Відновити пароль?" />
      </div>


    </div>
  </PageContent>


</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { AuthenticationDetails } from "amazon-cognito-identity-js";
import { useUserStore } from "../store/userStore";

// Components
import LPageContent from '../components/layout/PageContent.vue'
import LInputField  from '../components/controls/LInputField.vue'
import LButton      from '../components/controls/LButton.vue'

// Toast
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import PageContent from "../components/layout/PageContent.vue";

const userStore = useUserStore()

const router = useRouter()

const navigateToRegistration = () => {
  router.push({ name: "Registration" })
}

const navigateToForgotPassword = () => {
  router.push({ name: "ForgotPassword" });
};

const loginData = ref({
  username: '',
  password: '',
});

const loginUser = () => {
  return null
}

// const loginUser = () => {
//   const cognitoUser = userStore.createCognitoUser(loginData.value.username)

//   const authenticationDetails = new AuthenticationDetails({
//     Username: loginData.value.username,
//     Password: loginData.value.password,
//   });

//   cognitoUser.authenticateUser(authenticationDetails, {
//     onSuccess: async (result) => {
//       userStore.userSession = result

//       cognitoUser.getUserAttributes((error, attributes) => {
//         if (error) {
//           userStore.userSession = null
//           userStore.userAttributes = null
//           return
//         }
//         userStore.userAttributes = attributes
//         router.push({ name: "Dashboard" });
//       })
//     },
//     onFailure: (error) => {
//       createToast({ title: 'Виникла помилка!', description: error.message || JSON.stringify(error) }, {type: 'danger', position: 'top-center'})
//     },
//   });
// };



</script>

<style scoped>

</style>