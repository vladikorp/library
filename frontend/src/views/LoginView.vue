<template>
  <div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { AuthenticationDetails } from "amazon-cognito-identity-js";
import { useUserStore } from "@/store/authStore";

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
  const cognitoUser = authStore.createCognitoUser(loginData.value.username)

  const authenticationDetails = new AuthenticationDetails({
    Username: loginData.value.username,
    Password: loginData.value.password,
  });

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: async (result) => {
      authStore.userSession = result

      cognitoUser.getUserAttributes((error, attributes) => {
        if (error) {
          authStore.userSession = null
          authStore.userAttributes = null
          return
        }
        authStore.userAttributes = attributes
        router.push({ name: "Dashboard" });
      })
    },
    onFailure: (error) => {
      createToast({ title: 'Виникла помилка!', description: error.message || JSON.stringify(error) }, {type: 'danger', position: 'top-center'})
    },
  });
};



</script>

<style scoped>

</style>