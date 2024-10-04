

import { api } from "../../../api-config/api";
import { IOtpVerify, IPhoneNumber, IResetPassword, IUnSubscribeMail, IUserLogin, IUserSignup } from "../../../types/userInterfaces";

export const getUserApi = async () => {
    return await api.get(`profile`);
};

export const userSignupApi = async (data : IUserSignup) => {
    return await api.post(`signup`, data);
};

export const userLogoutApi = async () => {
    return await api.post(`logout`, {});
};

export const isUserAuthApi = async () => { 
    await api.get(`create-device`); // send request for device id creation
    return await api.get(`is-login-verify`);

};
export const getUserhistoryDataApi = async () => {
    return await api.get(`anylearn/request-history`);
};
export const getUserBookmarkDataApi = async () => {
    return await api.get(`anylearn/bookmarks`);
};
 
export const isLogoutApi = async () => {
    return await api.get(`is-logout`);
};
 
export const getUserSelectedLanguageApi = async () =>{
    return await api.get('languages');
}
 
export const userLoginApi = async (data : IUserLogin) => {
    return await api.post(`login`, data);
};
 
export const sendOtpApi = async (data : IPhoneNumber) => {
    const phoneObj = {
        phone: data.phone
    }
    return await api.post(`send-otp`, phoneObj);
};
export const verifyOtpApi = async (otp : IOtpVerify) => {
    return await api.post(`verify-otp`, otp);
};
export const getPaymentLinkApi = async (id : number) => {
    return await api.post(`stripe/payment-link`, id);
};
export const forgotPasswordApi = async (data : string) => {
    return await api.post(`forgot-password`, {
        email : data
    });
};

export const resetPasswordApi = async (data : IResetPassword) => {
    return await api.post(`reset-password`, data);
};

export const unSubscribeMailApi = async (data : IUnSubscribeMail) => {
    return await api.post(`unsubscribe-email`, data);
};