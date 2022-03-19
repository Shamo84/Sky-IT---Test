import updateUsersReducer from './users';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  users: updateUsersReducer,
});

export default allReducers;
export type State = ReturnType<typeof allReducers>;
