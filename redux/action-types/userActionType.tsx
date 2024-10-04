export interface UserActionTypes {
    type: UserActions;
    payload?: unknown
}
export enum UserActions {
    RESET_ALL_DATA = "RESET_ALL_DATA",
    USER_LOGOUT = "USER_LOGOUT",
    USER_LOGIN = "USER_LOGIN",
    GET_USER = "GET_USER",
    SET_USER_DATA = "SET_USER_DATA",
}