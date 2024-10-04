import { combineReducers } from 'redux';
import { Reducer } from 'redux';
import { AppState } from './type'; 

import userReducer from './reducers/userReducer';

const appReducers: Reducer<AppState> = combineReducers({
   user: userReducer,
});

// for reseting root reducer on logout
const rootReducer = (state: any, action: any) => {
   if (action.type === 'RESET_ALL_DATA') {
      const { featured } = state;
      const { myLearning } = state;
      const updatedLearning = {
         languageList : myLearning.languageList
      }
      state = { featured, updatedLearning };
      return appReducers(state, action);
   }
   return appReducers(state, action)
}

export default rootReducer;