import { defineStore } from 'pinia'
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import { useLocalStorage } from '@vueuse/core';

const env = import.meta.env

export const useUserStore = defineStore('userStore', {
  state: () => ({

    userSession: null,
    userAttributes: null,
    userAttributesMap: null,
    userPool: new CognitoUserPool({
      UserPoolId: env.VITE_APP_COGNITO_USER_POOL_ID,
      ClientId: env.VITE_APP_COGNITO_CLIENT_ID
    })

  }),

  getters: {

    accessToken() {
      if (this.userSession) {
        return this.userSession.accessToken.jwtToken
      }
    },

    idToken() {
      if (this.userSession) {
        return this.userSession.idToken.jwtToken
      }
    },

    refreshToken() {
      if (this.userSession) {
        return this.userSession.refreshToken.token
      }
    },

  },

  actions: {

    isSessionValid() {
      if (this.userSession === null) {
        let cognitoUser = this.userPool.getCurrentUser();

        if (cognitoUser === null) {
          return false
        }

        return cognitoUser.getSession((error, session) => {
          if (error) {
            this.userSession = null
            return false
          }
          this.userSession = session

          return cognitoUser.getUserAttributes((error, attributes) => {
            if (error) {
              this.userSession = null
              this.userAttributes = null
              return false
            }
            this.userAttributes = attributes
            this.userAttributesMap = Object.fromEntries(attributes.map(x => [x.getName(), x.getValue()]));
          })
        })
      }

      var isValid = this.userSession.isValid()
      if (!isValid) {
        this.userSession = null
        this.userAttributes = null
      }

      return isValid
    },

    signOut() {
      const cognitoUser = this.userPool.getCurrentUser()
      if (cognitoUser) {
        cognitoUser.signOut()
      }
    },

    createCognitoUser(username) {
      return new CognitoUser({
        Username: username,
        Pool: this.userPool,
      })
    }

  }
})
