import React from "react";
import ProgressCard from "../Components/ProgressCard";
import { View, Text, StyleSheet } from "react-native";

const RoutinesScreen = () => {
  return (
    <View style={styles.MainContainer}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          fontFamily: "SemiBold",
          marginBottom: 10,
        }}
      >
        My Routine
      </Text>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <ProgressCard
          img={require("../assets/mountain.jpg")}
          title="Focus & Work"
          tltReminder="3 Reminder Items"
          progressText="40% Finished"
          progress={0.4}
        />
        <ProgressCard
          img={require("../assets/skincare.jpg")}
          title="Skin Care"
          tltReminder="1 Reminder Items"
          progressText="70% Finished"
          progress={0.7}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: 342,
          // backgroundColor:'yellow',
          padding: 5,
        }}
      >
        <Text style={styles.titleTXT}>Explore</Text>
        <Text
          style={{
            color: "#3A643B",
            fontFamily: "SemiBold",
            fontWeight: "600",
          }}
        >
          More
        </Text>
      </View>

      <View style={{ width: 440, height: 35, top: 10, flexDirection:'row', justifyContent:'space-around',}}>
        <View style={{ backgroundColor: "#E4FFE4", alignItems: "center", height:35 , borderRadius:20, padding:5}}>
          <Text
            style={{
              fontFamily: "SemiBold",
              color: "black",
              fontSize: 15,
            }}
          >
            All
          </Text>
        </View>

        <View style={{ borderWidth:0.5,borderColor:'#A0A0A0',alignItems: "center", height:35 , borderRadius:20, padding:5}}>
          <Text
            style={{
              fontFamily: "SemiBold",
              color: "#A0A0A0",
              fontSize: 15,
            }}
          >
            Created by Dr.
          </Text>
        </View>

        <View style={{  borderWidth:0.5,borderColor:'#A0A0A0',alignItems: "center", height:35 , borderRadius:20, padding:5}}>
          <Text
            style={{
              fontFamily: "SemiBold",
              color: "#A0A0A0",
              fontSize: 15,
            }}
          >
            Created by me
          </Text>
        </View>

        <View style={{  borderWidth:0.5,borderColor:'#A0A0A0',alignItems: "center", height:35 , borderRadius:20, padding:5}}>
          <Text
            style={{
              fontFamily: "SemiBold",
              color: "#A0A0A0",
              fontSize: 15,
            }}
          >
            Imported
          </Text>
        </View>

      </View>
    </View>
  );
};

export default RoutinesScreen;

const styles = StyleSheet.create({
  MainContainer: {
    left: 24,
  },
  titleTXT: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SemiBold",
    // marginBottom: 10,
    // marginRight: 10,
  },
});
