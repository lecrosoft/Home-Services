import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Headings from "../../Components/Headings";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(function () {
    getSlider();
  }, []);
  const getSlider = () => {
    GlobalApi.getSlider().then((res) => {
      console.log();
      setSlider(res?.sliders);
    });
  };

  const renderSeparator = () => {
    return <View style={{ width: 10 }} />; // Adjust the width according to your gap preference
  };

  return (
    <View>
      <Headings text={"Offers For You"} hasViewAll={false} />
      <FlatList
        horizontal={true}
        showHorizontalScrollIndicator={false}
        data={slider}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: (width * 2) / 3,
              height: height / 6,
            }}
          >
            <Image
              source={{ uri: item?.image?.url }}
              style={{ flex: 1, height: "auto", borderRadius: 20 }}
            />
          </View>
        )}
        ItemSeparatorComponent={renderSeparator}
        // keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageSlider: {
    width: 270,
    height: 150,
    borderRadius: 20,

    // objectFit: "contain",
  },
});
