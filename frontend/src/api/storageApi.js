import libraryApi from "./base/libraryApi";

class StorageApi {
  constructor() {
    // constructor here
  }

  async getUploadUrl(filename) {
    return await libraryApi.get("/storage/uploadUrl", {
      params: {
        filename: filename
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
}

export default new StorageApi()