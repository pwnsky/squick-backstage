import axios, { AxiosResponse }  from 'axios'

var baseUrl = "";

if (import.meta.env.VITE_APP_IS_DEV == "true") {
    baseUrl = import.meta.env.VITE_APP_DEV_SERVER_URL_BASE
} else {
    baseUrl = import.meta.env.VITE_APP_RELEASE_SERVER_URL_BASE
}

axios.interceptors.request.use(
  function (config) {
    // Reuqested before
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

// Response before
axios.interceptors.response.use(
  function (response) {
    // do here
    return response
  },
  function (error) {
    // error

    return Promise.reject(error)
  },
)

function httpGet(uri : string, callback : any) {
    axios.get<any>(baseUrl + uri)
    .then((response: AxiosResponse<any>) => {
        console.log(response.data);
        callback(response);
    })
    .catch((error) => {
        console.error(error);
    });
}

export { httpGet }
