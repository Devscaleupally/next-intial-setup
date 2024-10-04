

import { api } from "../../../api-config/api";
import {  IUserLogin } from "../../../types/userInterfaces";

export const getUserApi = async () => {
    return await api.get(`profile`);
};

export const userLoginApi = async (data : IUserLogin|any) => {
    return await api.post(`login`, data);
};
 
