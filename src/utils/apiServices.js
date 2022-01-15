import axios from "axios";

export const apiServices = {
  post(resources, payload = {}) {
    return new Promise((resolve) => {
      axios
        .post(resources, payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  },
  get(resources,payload) {
    return new Promise((resolve) => {
      axios
        .get(resources, payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  },
};
