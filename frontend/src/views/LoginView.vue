<template>

  <LPageContent>

    <div class="flex flex-col items-center gap-4">

      <div>
        
      </div>

      <LInputField
        title="Користувач"
        v-model:text="loginData.username"
      />

      <LInputField
        title="Пароль"
        v-model:text="loginData.password"
        :is-password="true"
      />

      <LButton class="btn-primary`" 
        title="Авторизуватись"
        @click="loginUser()"
      />

      <div class="divider select-none">Або</div>

      <div class="flex flex-col flex-wrap">
        <LButton class="btn-ghost" @click="navigateToRegistration" title="Зареєструватися"/>
        <LButton class="btn-ghost" @click="navigateToForgotPassword" title="Відновити пароль?" />
      </div>


    </div>

  </LPageContent>


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