import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function Businesses({ business }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: business.images[0].url }}
          style={styles.imageStyle}
        />
      </View>

      <View>
        <Text>{business.name}</Text>
        <Text>{business.contactPerson}</Text>
        <Text>{business.category.name}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imageStyle: {
    height: height / 6,
    width: width / 2,
    borderRadius: 20,
  },
  container: {
    backgroundColor: Colors.WHITE,
    padding: 10,
  },
});
