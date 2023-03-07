import { defineStore } from 'pinia'
import BookApi from '../api/bookApi'

const bookStore = defineStore('bookStore', {
  state: ({
    books: {},
    booksLoaded: false,

    filter: {
      subject: '',
      title: '',
      author: ''
    }

  }),

  getters: {},

  actions: {

    async listBooks(force=false) {
      if (force || !this.booksLoaded) {
        this.books = {}

        let books = await BookApi.listBooks(this.filter)
        books.forEach((book) => {
          this.books['SK'] = book
        })

        this.booksLoaded = true
      }
    },

    async getBook(bookSK, useCache=true) {
      let cacheExists = bookSK in this.books

      if (cacheExists && useCache) {
        return this.books[bookSK]
      } else {
        let book = await BookApi.getBook(bookSK)
        this.books[book.SK] = book
        return book
      }
    },

    async createBook(bookObj) {
      let book = await BookApi.createBook(bookObj)
      this.books[book.SK] = book
      return book
    },

    async updateBook(bookObj) {
      let book = await BookApi.updateBook(bookObj)
      this.books[book.SK] = book
      return book
    },

    async deleteBook(bookSK) {
      await BookApi.deleteBook(bookSK)
      delete this.books[bookSK]

    },
    
  }
})