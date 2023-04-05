<template>

<LPageContent>

  <div class="flex flex-col gap-2 items-center w-1/4 mx-0 my-4">
      
      <LFieldHeader title="Авторизація" :title-big="true"/>

      <!-- Input fields -->
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

      </div>

      <!-- Login btn -->
      <LButton class="btn-primary self-center w-1/2" 
        title="Авторизуватись"
        @click="loginUser()"
      />

      <div class="divider select-none">Або</div>

      <!-- Other btns -->
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
import { useUserStore } from "../../store/userStore";

// Components
import LPageContent from '../../components/layout/LPageContent.vue'
import LInputField  from '../../components/controls/LInputField.vue'
import LButton      from '../../components/controls/buttons/LButton.vue'
import LFieldHeader from '../../components/controls/LFieldHeader.vue';

// Toast
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

/*
  Login
*/

const loginData = ref({
  username: '',
  password: '',
});

const loginUser = () => {
  const cognitoUser = userStore.createCognitoUser(loginData.value.username)

  const authenticationDetails = new AuthenticationDetails({
    Username: loginData.value.username,
    Password: loginData.value.password,
  });

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: async (result) => {
      userStore.userSession = result

      cognitoUser.getUserAttributes((error, attributes) => {
        if (error) {
          userStore.userSession = null
          userStore.userAttributes = null
          return
        }
        userStore.userAttributes = attributes
        router.push({ name: "Home" });
      })
    },
    onFailure: (error) => {
      createToast({ title: 'Виникла помилка!', description: error.message || JSON.stringify(error) }, {type: 'warning', position: 'bottom-right'})
    },
  });
};

/*
  Store
*/

const userStore = useUserStore()

/*
  Navigation
*/

const router = useRouter()

const navigateToRegistration = () => {
  router.push({ name: "Registration" })
}

const navigateToForgotPassword = () => {
  router.push({ name: "ForgotPassword" });
};

</script>

<style scoped>

</style>