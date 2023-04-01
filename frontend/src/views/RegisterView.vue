<template>

  <PageContent>
  
      <div class="flex flex-col items-center pt-[24px] pb-[18px] w-1/4">
        
        <div class="text-2xl font-bold pb-[16px]">
          Регістрація
        </div>
  
        <div class="flex flex-col w-full">
          
          <LInputField
            title="Користувач"
            placeholder="Ім'я користувача"
            v-model:text="loginData.username"
          />

          <LInputField
            title="Email"
            placeholder="Email"
            v-model:text="loginData.username"
          />
  
          <LInputField
            title="Придумайте пароль"          
            placeholder="Пароль" 
            v-model:text="loginData.password"
            :is-password="true"
          /> 

          <LInputField
            title="Продублюйте пароль"          
            placeholder="Продублюйте пароль" 
            v-model:text="loginData.password"
            :is-password="true"
          /> 
  
          <LButton class="w-[230px] m-auto mt-[16px] rounded-md h-10" 
            title="Зареєструватись"
            @click="loginUser()"
          />
        </div>
  
        
  
        
  
        <div class="divider select-none">Або</div>
  
        <div class="flex flex-col flex-wrap">
          <LButton class="btn-ghost" @click="navigateToLogin" title="Авторизуватися"/>
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
  
  const navigateToLogin = () => {
    router.push({ name: "Login" })
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