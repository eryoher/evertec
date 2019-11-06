import Axios from "axios";
import NProgress from "nprogress";
// import getAppConfiguration from "lib/AppConfiguration";
import { showLoader, hideLoader, userSignOut, showMessage } from "actions";

export default function configureAxios(store) {
  // const config = getAppConfiguration();//TODO jfarina grab from store
  const config = {
    _apiURL: 'http://localhost:1337/190.210.181.180:2082',
    apiURL: 'https://ceogestiondev.agminen.com/api'
  };

  Axios.defaults.baseURL = config.apiURL;
  Axios.defaults.timeout = 30000;

  Axios.interceptors.request.use(
    config => {
      //Before request is sent

      NProgress.start();

      store.dispatch(showLoader());

      return config;
    },
    function (error) {
      //Request error

      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  Axios.interceptors.response.use(
    response => {
      //Response

      store.dispatch(hideLoader());

      setTimeout(() => {
        NProgress.done();
      }, 1000);

      return response;
    },
    function (error) {
      //Response error

      store.dispatch(hideLoader());

      setTimeout(() => {
        NProgress.done();
      }, 1000);

      if (window.loggingOut) {
        // logout request failed, possibly had an old token. Ignore the error and proceed.
        delete window.loggingOut;
      } else if (error.response && error.response.status === 401) {
        store.dispatch(userSignOut());
      } else if (error.response && error.response.status === 404) {
        store.dispatch(
          showMessage({
            type: "error",
            message: "Error 404",
            description: "The required resource was not found"
          })
        );
      } else if (error.response && error.response.status === 403) {
        store.dispatch(
          showMessage({
            type: "error",
            message: "Error",
            description: "You are not authorized to access the resource"
          })
        );
      } else if (error && error.code && error.code === "ECONNABORTED") {
        store.dispatch(
          showMessage({
            type: "error",
            message: "Error",
            description: "Timeout error"
          })
        );
      } else if (
        !error.response &&
        error.request &&
        error.request.status === 0
      ) {
        store.dispatch(
          showMessage({
            type: "error",
            message: "Error",
            description: "Network error"
          })
        );
      } else if (
        error.response &&
        error.response.request.responseType === "arraybuffer" &&
        error.response.data.toString() === "[object ArrayBuffer]"
      ) {
        // only enters when the error response is of arraybuffer type
        store.dispatch(
          showMessage({
            type: "error",
            message: "Error",
            description: JSON.parse(
              Buffer.from(error.response.data).toString("utf8")
            )
          })
        );
      } else {
        const data = error.response ? error.response.data : error.data;
        const message = data
          ? data.message || data.toString()
          : "Error communicating with server";

        store.dispatch(
          showMessage({
            type: "error",
            message: "Error",
            description: message
          })
        );
      }

      return Promise.reject(error);
    }
  );

  //Set initial token from store when loading a direct URL
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("token");
    if (token) {
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }
}
