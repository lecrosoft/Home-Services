import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import HomeHeader from "./HomeHeader";
import Slider from "./Slider";
import Category from "./Category";
import Colors from "../../Utils/Colors";
import BusinessList from "./BusinessList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <HomeHeader />
      <View style={{ padding: 20 }}>
        <Slider />
        <Category />
        <BusinessList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
});
