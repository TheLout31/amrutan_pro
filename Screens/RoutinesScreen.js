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
          height: 21,
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
    marginBottom: 10,
    marginRight: 10,
  },
});
