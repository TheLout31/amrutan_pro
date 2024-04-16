import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const RoutinesCard = ({ img, Title, sub, Time }) => {
  function maxWord(str) {
    let length = str.length;

    if (length > 15) {
      let split = str.split("");
      let result = "";
      for (let i = 0; i < 15; i++) {
        result += split[i];
      }
      return result + "...";
    } else {
      return str;
    }
  }

  return (
    <View
      style={{
        width: 350,
        height: 74,
        left: 24,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 5,
        flexDirection: "row",
      }}
    >
      <View style={{ height: 50, width: 50, marginRight: 20 }}>
        <Image
          source={img}
          style={{ height: "100%", width: "100%", borderRadius: 8 }}
        ></Image>
      </View>

      <View style={{ marginRight: 50, width: 188, height: 50 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 5,fontFamily: "SemiBold", }}>
          {maxWord(Title)}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 10, fontWeight: "200",fontFamily: "Nunito", }}>{sub}</Text>
          <Text style={{ fontSize: 10, fontWeight: "500", marginLeft: 10,fontFamily: "Nunito", }}>
            {Time} AM
          </Text>
        </View>
      </View>

      <View>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
    </View>
  );
};

export default RoutinesCard;
