const initialState = { id: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, id: action.payload };
    default:
      return state;
  }
}

export default userReducer;