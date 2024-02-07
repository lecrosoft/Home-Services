import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function HomeHeader() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.profileParentContainer}>
        <View style={styles.container}>
          <View style={styles.prfileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.imageStyle} />
            <View>
              <Text style={{ color: Colors.WHITE, fontFamily: "outfit" }}>
                Welcome,
              </Text>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 20,
                  fontFamily: "outfit-bold",
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={24} color={Colors.WHITE} />
        </View>

        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search..."
            style={styles.textInput}
          ></TextInput>
          <FontAwesome
            name="search"
            size={24}
            color={Colors.PRIMARY}
            style={{
              backgroundColor: Colors.WHITE,
              padding: 10,
              borderRadius: 8,
            }}
          />
        </View>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  prfileContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  imageStyle: {
    height: 45,
    width: 45,
    borderRadius: 99,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    paddingHorizontal: 16,
    padding: 7,
    width: "85%",
    fontSize: 16,
    fontFamily: "outfit",
  },
  profileParentContainer: {
    display: "flex",
    flexDirection: "column",

    backgroundColor: Colors.PRIMARY,
    padding: 20,
    paddingTop: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
