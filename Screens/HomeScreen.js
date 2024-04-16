import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import RoutinesCard from "../Components/RoutinesCard";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          top: 20,
        }}
      >
        <Image
          source={require("../assets/Group_Text.png")}
          style={styles.imageText}
        ></Image>

        <Image
          source={require("../assets/headicon.png")}
          style={styles.imageIcon}
        ></Image>
        {/* <View style={{flexDirection:'row'}}>
          <Ionicons name="close-circle" size={40} color="black" />
          <Ionicons name="person-circle" size={40} color="black" />
        </View> */}
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Group.png")}
          style={styles.image}
          resizeMode="cover" // Adjust as needed
        />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={24}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput style={styles.input} placeholderTextColor="gray" />
      </View>

      <View style={styles.greenContainer}>
        <View>
          <Text style={styles.contTxt}>You have taken 5000 steps today</Text>
          <Text style={styles.contsubTxt}>Check out your Health Activity</Text>
          <View style={styles.contBtn}>
            <Text style={{ fontSize: 16, color: "#3A643B" }}>My Health</Text>
            <Ionicons name="chevron-forward" size={20}></Ionicons>
          </View>
        </View>

        {/* <View style={{backgroundColor:'white',flex:2}}>
          <Image
            source={require("../assets/counter.png")}
            style={styles.counterimage}
          />
        </View> */}
      </View>

      <View style={{ width: 278, height: 45, left: 28, marginBottom: 30 }}>
        <Text
          style={{ fontSize: 16, fontWeight: "700", fontFamily: "SemiBold" }}
        >
          Today's Routines
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "#A0A0A0",
            fontFamily: "Nunito",
          }}
        >
          You have 4 Routines remaining for the day
        </Text>
      </View>

      <RoutinesCard
        img={require("../assets/DrinkingWater.jpg")}
        Title="Drinking Water"
        sub="Consumable"
        Time="9:30"
      />

      <View
        style={{
          height: 0.6,
          width: "90%",
          backgroundColor: "#A0A0A0",
          left: 16,
        }}
      >
        <Text></Text>
      </View>
      <RoutinesCard
        img={require("../assets/saloon.jpg")}
        Title="Amuratan Kuntal Hair Care"
        sub="Consumable"
        Time="9:30"
      />

      <View
        style={{
          height: 0.6,
          width: "90%",
          backgroundColor: "#A0A0A0",
          left: 16,
        }}
      >
        <Text></Text>
      </View>

      <TouchableOpacity
      onPress={()=>{
        alert("Pressed")
      }}
        style={{
          width: 350,
          height: 19,
          left: 26,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "#A0A0A0",
            fontFamily: "Nunito",
          }}
        >
          More Routines (2)
        </Text>
        <Ionicons name="chevron-down" size={20} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // adjust as needed
  },
  imageContainer: {
    height: "30%", // Take 30% of the screen's   height
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    marginBottom: 20, // Ensure image is above other content
  },
  image: {
    width: "105%", // Adjust width as needed
    height: "100%", // Adjust height as needed
  },

  imageText: {
    zIndex: 1,
  },
  imageIcon: {
    zIndex: 1,
    marginLeft: 60,
  },

  searchContainer: {
    height: 52,
    width: 350,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginTop: 280,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },

  greenContainer: {
    flexDirection: "row",
    width: 350,
    height: 200,
    backgroundColor: "#3A643B",
    borderRadius: 24,
    marginTop: 20,
    marginBottom: 20,
    left: 24,
    padding: 8,
    justifyContent: "space-evenly",
  },

  contBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 132,
    height: 36,
    borderRadius: 12,
    fontWeight: "900",
    fontFamily: "Nunito",
    flexDirection: "row",
  },

  contTxt: {
    fontSize: 28,
    color: "white",
    fontFamily: "SemiBold",
    fontWeight: "600",
  },

  contsubTxt: {
    fontFamily: "Nunito",
    fontSize: 14,
    color: "white",
    marginBottom: 15,
    fontWeight: "300",
  },

  counterimage: {
    width: 60,
    height: 45,
  },
});
