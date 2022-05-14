import { useReducer } from "react";
import authReducer from "./reducers";
import AuthContext from "./context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SIGNIN, SIGNOUT } from "./actions";

const AuthState = ({ children }) => {
  const initialState = {
    token: async () => {
      await AsyncStorage.getItem("@Auth_key");
    },
    isAuthenticated: false,
    user: { name: "Greatest", image: "../../assets/download.jpeg" },
    appReady: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const persitLogin = async () => {
    let token = await AsyncStorage.getItem("@Auth_key");
    if (token !== null) {
      dispatch({
        type: SIGNIN,
        payload: "edbjdggdgywgeywee",
      });
    }
  };

  const signIn = async (value = "edbjdggdgywgeywee") => {
    try {
      await AsyncStorage.setItem("@Auth_key", value);
      dispatch({
        type: SIGNIN,
        payload: "edbjdggdgywgeywee",
      });
    } catch (error) {
      console.log(error);
      // Error saving data
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("@Auth_key");
      dispatch({
        type: SIGNOUT,
      });
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        signIn,
        persitLogin,
        token: state.token,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
