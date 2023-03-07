import { defineStore } from 'pinia'

const bookStore = defineStore('bookStore', {
  state: ({

    bookFilter: {
      subject: '',
      title: '',
      author: ''
    }

  }),

  getters: {

  },

  actions: {

  }
})