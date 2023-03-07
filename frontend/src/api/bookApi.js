import libraryApi from "./base/libraryApi";

class BookApi {
  constructor() {
    // constructor here
  }

  async listBooks(filter) {
    return await libraryApi.get("/book/list", {
      params: {
        // set query params here
      }
    })
    .then((response) => {
      return response.data.books
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async getBook(bookSK) {
    return await libraryApi.get("/book", {
      params: {
        // set query params here
      }
    })
    .then((response) => {
      return response.data.books
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async createBook(bookObj) {
    return await libraryApi.post("/book", {
      // body here
    })
    .then((response) => {
      return response.data.book
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async updateBook(bookObj) {
    return await libraryApi.put("/book", {
      // body here
    })
    .then((response) => {
      return response.data.book
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async deleteBook(bookSK) {
    return await libraryApi.delete("/book", {
      data: {
        // book sk here
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export default new BookApi()