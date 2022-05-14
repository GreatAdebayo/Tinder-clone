import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import authContext from "../context/auth/context";
import AppLoading from "expo-app-loading";

//Screens
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [appReady, setAppReady] = useState(false);
  const { isAuthenticated, persitLogin } = useContext(authContext);

  if (!appReady) {
    return (
      <AppLoading
        startAsync={persitLogin}
        onFinish={() => {
          setAppReady(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="chat"
            component={ChatScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
