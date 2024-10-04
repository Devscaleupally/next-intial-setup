import { IUserLogin, IUserProfile } from "../../types/userInterfaces"
import { UserActions, UserActionTypes } from "../action-types/userActionType"

export const userLogin = (payload: IUserLogin): UserActionTypes => ({
    type: UserActions.USER_LOGIN,
    payload
})


export const setUserData = (payload: IUserProfile): UserActionTypes => ({
    type: UserActions.SET_USER_DATA,
    payload
})

export const getUserData = (): UserActionTypes => ({
    type: UserActions.GET_USER,
})

