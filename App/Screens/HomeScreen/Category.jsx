import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Headings from "../../Components/Headings";
import Colors from "../../Utils/Colors";

export default function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(function () {
    getCategory();
  }, []);
  const getCategory = () => {
    GlobalApi.getCategories().then((res) => {
      console.log(res);
      setCategories(res?.categories);
    });
  };
  return (
    <View>
      <Headings text={"Categories"} hasViewAll={true} />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.categoryImage}
                source={{ uri: item?.icon?.url }}
              />
            </View>
            <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
              {item?.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryImage: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
