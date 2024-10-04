import { IUser } from "../../types/userInterfaces";
import { UserActions, UserActionTypes } from "../action-types/userActionType";

const initialState: IUser = {
    user: {
        isAuth: false,
        name: "",
        email: "",
        firstName: '',
        lastName: '',
        id: 0,
        creditBalance: 0,
        phone: 0
    },
    userHistory: [],
    bookmarksData: [],
    isAuthProcessing: false,
    languageList: [],
    selectedLanguage: {
        id: "1",
        label: 'English',
        lang: 'en'
    },
    selectedTab: {
        roleId: 1,
        type: 'Course',
        roleType: 'learn',
    },

    sendOtpLoader: false,
    setPaymentLinkLoader: false,
    isEmailUnsubscribed: false,
    emailUnSubscribe: {
        email: "",
        token: ""
    },
    isVerifyAuthValue: 0,
};

export default function userReducer(state = initialState, action: UserActionTypes): IUser {
    switch (action.type) {
        case UserActions.SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
            };
       
      
        default:
            return state;
    }
}
