import { SIGNIN, SIGNOUT } from "./actions";

const authReducers = (state, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducers;
