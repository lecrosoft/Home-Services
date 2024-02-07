import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Headings from "../../Components/Headings";
import GlobalApi from "../../Utils/GlobalApi";
import Businesses from "./Businesses";

export default function BusinessList() {
  const [businessList, setBusinessList] = useState([]);
  useEffect(function () {
    getBusinesses();
  }, []);

  const getBusinesses = function () {
    GlobalApi.getBusiness().then((res) => {
      console.log(res);
      setBusinessList(res.businessLists);
    });
  };
  return (
    <View>
      <Headings text={"Latest Business"} hasViewAll={true} />
      <FlatList
        horizontal={true}
        data={businessList}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginRight: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <Businesses business={item} />
          </View>
        )}
      />
    </View>
  );
}
