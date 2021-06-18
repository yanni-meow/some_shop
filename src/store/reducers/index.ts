import { combineReducers } from 'redux';
// import { loginReducer } from './loginReducer';
// import { reportsReducer } from './reportsReducer';
import { catalogReducer } from './catalogReducer';

export const rootReducer = combineReducers({
  catalogReducer
  // loginReducer,
  // reportsReducer,
});

export type rootState = ReturnType<typeof rootReducer>

