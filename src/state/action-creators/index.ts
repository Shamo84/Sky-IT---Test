import { Dispatch } from 'redux';
import { Action } from '../actions';

export const updateUsers = (list: any[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: 'UPDATE',
      payload: list,
    });
  };
};
