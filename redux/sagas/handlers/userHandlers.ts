import Router from "next/router";
import { call, delay, put, takeLatest } from "redux-saga/effects";

import {
  getUserApi,
  userLoginApi,
} from "../requests/userRequests";
import {  IUserProfile } from "../../../types/userInterfaces";
import {
  setUserData,
} from "../../actions/userActions";
import { toast } from "react-toastify";
import { api } from "../../../api-config/api";
import { UserActions, UserActionTypes } from "../../action-types/userActionType";

function* getUserHandler() {
  yield delay(1000)
  try {
    const { data } = yield call(getUserApi);
    if (data.status) {
      if (data?.data) {
        // set user
        // yield localStorage.setItem("userId", data?.data?.id);
        // let userData: IUserProfile = {
        //   isAuth: true,
        //   id: data?.data?.id,
        //   name: data?.data?.name,
        //   email: data?.data?.email,
        //   creditBalance: data?.data?.creditBalance,
        //   firstName: data?.data?.firstName,
        //   lastName: data?.data?.lastName,
        //   phone: data?.data?.phone,
        //   subscribed: data?.data?.subscribed,
        //   subscription: data?.data?.subscription,
        
        // };
        // yield put(setUserData(userData));
      }
    }
  } catch (error: any) {
    // toast.error(error?.response?.data?.message ?? "Sorry. We encountered an error. Please try again.", {
    //   position: toast.POSITION.TOP_RIGHT
    // })
  } finally {
    // yield put(setLearningLoader(false));
  }
}


function* userLoginHandler(action: UserActionTypes) {
  try {
    const { data } = yield call(userLoginApi, action.payload);
      if (data?.data) {
        Cookies.set("access_token1", data?.data?.accessToken);
        // set user
        yield localStorage.setItem("accessToken", data?.data?.accessToken);
        yield localStorage.setItem("userId", data?.data?.id);
        yield localStorage.setItem("userAuth", "true");

        yield (api.defaults.headers.common = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        });

        let userData: IUserProfile = {
          isAuth: true,
          id: data?.data?.id,
          name: data?.data?.name,
          email: data?.data?.email,
          creditBalance: data?.data?.creditBalance,
          firstName: data?.data?.firstName,
          lastName: data?.data?.lastName,
          phone: data?.data?.phone,
          accessToken: data?.data?.accessToken,
          subscribed: data?.data?.subscribed,
        };
        yield put(setUserData(userData));
        toast.success("You’re logged in now.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        if(window.location?.pathname?.includes("/login") || window.location?.pathname?.includes("/signup"))
          {
           Router.push(`${action.payload.scope??"/"}?auth=${encryptID(data.data?.accessToken)}`);
      }
        yield put(setShowLogInModal(false))
      } else {
        toast.error(data?.message, {
          position: toast.POSITION.TOP_RIGHT
      })
      }
    
  } catch (error: any) {
    toast.error(
      error?.response?.data?.message ??
        "Sorry. We encountered an error. Please try again.",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  } finally {
    // loader here
 
  }
}


// accountHandler Sagas
export default function* userSaga() {
  yield takeLatest(UserActions.USER_LOGIN, userLoginHandler);
  yield takeLatest(UserActions.GET_USER, getUserHandler);
}
