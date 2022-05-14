import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useContext } from "react";
import tw from "twrnc";

//Contexts
import authContext from "../context/auth/context";

const LoginScreen = () => {
  const { signIn } = useContext(authContext);

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        resizeMode="cover"
        style={tw`flex-1`}
        source={{
          uri: "https://tinder.com/static/tinder.png",
        }}
      >
        <TouchableOpacity
          style={[
            tw`absolute bottom-40 w-52 bg-white p-4 rounded-2xl`,
            {
              marginHorizontal: "25%",
            },
          ]}
          onPress={() => {
            signIn();
          }}
        >
          <Text style={tw`font-semibold text-center`}>
            Sign In & Get Swipping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
