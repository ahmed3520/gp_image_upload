import axios from "axios";

const getInstance = () => {
    return axios.create({
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  export {getInstance}