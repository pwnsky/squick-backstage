import axios, { AxiosResponse }  from 'axios'

var baseUrl = "";

if (import.meta.env.VITE_APP_IS_DEV == "true") {
    baseUrl = import.meta.env.VITE_APP_DEV_SERVER_URL_BASE
} else {
    baseUrl = import.meta.env.VITE_APP_RELEASE_SERVER_URL_BASE
}

axios.defaults.withCredentials = true;

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
    return Promise.reject(error)
  },
)

function httpGet(uri : string, callback : any, err_callback : any) {
    axios.get<any>(baseUrl + uri)
    .then((response: AxiosResponse<any>) => {
        callback(response);
    })
    .catch((error) => {
        err_callback(error)
        
    });
}

function httpPost(uri : string, data : any, callback : any, err_callback : any) {
    axios.post<any>(baseUrl + uri, data)
    .then((response: AxiosResponse<any>) => {
        callback(response);
    })
    .catch((error) => {
        err_callback(error)
    });
}

export { httpGet, httpPost }
