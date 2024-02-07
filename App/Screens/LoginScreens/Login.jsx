import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../../assets/icon.png")}
        style={styles.LoginImage}
      ></Image>

      <View style={styles.SubComponent}>
        <Text
          style={{ color: Colors.WHITE, fontSize: 27, textAlign: "center" }}
        >
          Let's Find{" "}
          <Text style={{ fontWeight: "bold" }}>Professional Cleaning</Text> and
          Repair Services For You
        </Text>
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 17,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Best App to find services near you which deliver you a professional
          service
        </Text>

        <TouchableOpacity style={styles.Button} onPress={onPress}>
          <Text style={{ textAlign: "center", color: Colors.PRIMARY }}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  LoginImage: {
    height: 450,
    width: 230,
    borderColor: Colors.BLACK,
    borderWidth: 4,
    borderRadius: 20,
    marginTop: 70,
  },
  SubComponent: {
    height: "70%",
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    padding: 20,
  },
  Button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 20,
  },
});
