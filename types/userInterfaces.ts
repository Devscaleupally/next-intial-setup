export interface IUser {
  user: IUserProfile |any;
  userHistory: IUserHistory[];
  bookmarksData: IUserBookmarks[];
  isAuthProcessing: boolean;
  isVerifyAuthValue: number;
  languageList: ILanguageList[];
  selectedLanguage: ISelectedLanguage;
  selectedTab: ISelectedTab;
  otpStatus: IOtpStatus |any;
  sendOtpLoader: boolean;
  setPaymentLinkLoader: boolean;
  isEmailUnsubscribed : any;
  emailUnSubscribe :{
    email : "",
    token :""
  }
}
export interface IUserLoginScope {
  scope: string;
}
export interface IUserProfile {
  isAuth: boolean;
  id: number;
  name: string;
  email: string;
  email_verified?: boolean;
  creditBalance: number;
  phone: number;
  firstName: string;
  lastName: string;
  accessToken?: string;
  subscribed?: string;
  subscription?: {
    last4?: string;
    billing_start_date: string;
    billing_end_date: string;
    next_billing_start_date: string;
    next_billing_end_date: string;
    status: string;
    cancelled_at: string;
    cancel: string;
  };
}

export interface IUserSignup {
  captcha: string;
  firstName: string;
  lastName: string;
  userName ?:string;
  email: string;
  password: string;
  scope: string;
  confirmPassword: string;
}

export interface IUserLogin {
  email: string;
  scope ?: string;
  password?: string;
  social_auth_token ?: string;
  registration_type ? : string;
}

export interface IUserLoginObj {
  email: string;
  scope ?: string;
  password?: string;
  social_auth_token ?: string;
  registration_type ? : string;

}

export interface IResetPassword {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}

export interface IUserHistory {
  dateRange: string;
  data: IUserHistoryData[];
}
export interface IUserHistoryData {
  id: number;
  userInput: string;
  slug?: string;
  date: string;
  type: string;
}
export interface IUserBookmarks {
  dateRange: string;
  data: IUserBookmarksData[];
}
export interface IUserBookmarksData {
  id: number;
  courseTitle: string;
  date: string;
  topicName: string;
}

export interface ILanguageList {
  full_name: string;
  label: string;
  slug: string;
  value: number;
  childs : ILanguageList[]
}

export interface ISelectedLanguage {
  id: string;
  label: string;
  lang : string;
}
export interface ISelectedLanguage {
  id: string;
  label: string;
}
export interface IUnSubscribeMail {
  email: string;
  token: string;
  frequency :string;
}
export interface ISelectedTab {
  roleId: number;
  type: string;
  roleType: string;
}

export interface IPhoneNumber {
  phone: number;
}
export interface IOtpStatus {
  phone: number;
  otpStatus: boolean;
}
export interface IOtpVerify {
  phone: number;
  otp: string;
  scope?: string;
}
