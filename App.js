import StackNavigation from "./navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import AuthState from "./context/auth/state";

const App = () => {
  return (
    <NavigationContainer>
      <AuthState>
        <StackNavigation />
      </AuthState>
    </NavigationContainer>
  );
};

export default App;
