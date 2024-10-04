import axios from "axios";
import { getCookie, setCookie } from "../helpers/common-helper";
import { nanoid } from "nanoid";
import { setUserData } from "../redux/actions/userActions";
import store from "../redux/store";
import BaseUrl from "./base-url"
import { toast } from "react-toastify";
import Router from "next/router";

let token: string|null;;
let deviceId: string;
token =""
deviceId =""
if (typeof window !== "undefined") {
  token = localStorage.getItem("accessToken");
  deviceId = getCookie("deviceId");
}

// initialize axios
export const api = axios.create({
  baseURL: BaseUrl,
  headers: {
    common: {
      Authorization: `Bearer ${token ?? ""}`,
      "Device-Id": `${deviceId}`, 
      Cookie1: `device_id=${deviceId};access_token=${token}`,
    },
  },
  withCredentials: true,
});

// // Add a request interceptor
// api.interceptors.request.use(
//     function (config) {
//         let devCookie = getCookie("deviceId");
//         if (devCookie === "") {
//             let deviceId = nanoid();
//             setCookie("deviceId", deviceId, "");
//             config.headers.set("Device-Id", `${devCookie}`)
//             config.headers.set("Cookie", `device_id=${deviceId};access_token=${token ?? ""}`)
//         } else {
//             config.headers.set("Device-Id", `${devCookie}`)
//             config.headers.set("Cookie", `device_id=${deviceId};access_token=${token ?? ""}`),
//         }
//         return config;
//     },
//     function (error) {
//       // Do something with request error
//       return Promise.reject(error);
//     }
//   );
api.interceptors.request.use(
  function (config) {
   
    const devCookie = getCookie("deviceId");
    if (devCookie === "") {
      const deviceId = nanoid();
      setCookie("deviceId", deviceId, "");
      config.headers["Device-Id"] = deviceId; // Use square brackets to set the header
      config.headers["Cookie1"] = `device_id=${deviceId};access_token=${token}`; // Use || for default value

      
    } else {
      config.headers["Device-Id"] = devCookie; // Use square brackets to set the header
      config.headers["Cookie1"] = `device_id=${devCookie};access_token=${token}`; // Use || for default value
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      // Handle 401 error here
      // Reset data in Redux and local storage
 
      toast.error(error?.response?.data?.message??"Your session is expired. Please log in to your account")
      localStorage.clear();
      Router.push("/")
      setCookie("Cookie1", "", "");
      store.reduxStore.dispatch(
        setUserData({
          isAuth: false,
          email: "",
          name: "",
          email_verified: false,
          firstName: "",
          lastName: "",
          id: 0,
          creditBalance: 0,
          phone: 0
        })
      );
    }
    return Promise.reject(error);
  }
);
