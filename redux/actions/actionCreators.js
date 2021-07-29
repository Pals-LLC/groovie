import * as types from './actionTypes';

const updateUser = (userID) => ({
  type: types.UPDATE_USER,
  payload: userID
});

export { updateUser };
