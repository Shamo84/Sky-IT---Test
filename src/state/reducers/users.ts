import { Action } from '../actions';

const updateUsersReducer = (action: Action, state: any[] = []) => {
  switch (action?.type) {
    case 'UPDATE':
      return action.payload;
    default:
      return state;
  }
};

export default updateUsersReducer;
