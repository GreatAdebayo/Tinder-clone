import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

//context
import authContext from "../context/auth/context";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { token, signOut, user } = useContext(authContext);

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between relative px-5`}>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
        >
          <Image
            source={require("../assets/download.jpeg")}
            style={tw`h-10 w-10 rounded-full`}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/logo.png")}
            style={tw`h-14 w-14 rounded-full`}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("chat");
          }}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
      {/* EndHeader */}

      {/* Card */}
      
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
