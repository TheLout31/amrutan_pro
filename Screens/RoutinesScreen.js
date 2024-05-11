import React, { useState, useEffect } from "react";
import ProgressCard from "../Components/ProgressCard";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import NewRoutinesCard from "../Components/NewRoutinesCard";

const RoutinesScreen = () => {
  let [Filter, setFilter] = useState("me");
  let [Data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await fetch(
        `https://amrutam-quiz-api.azurewebsites.net/routines?filter=${Filter}`
      );
      let data = await res.json();
      setData(data.routines);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
  }, [Filter]);
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

      <View
        style={{
          width: 440,
          height: 35,
          top: 10,
          marginBottom: 20,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E4FFE4",
            alignItems: "center",
            height: 35,
            borderRadius: 20,
            padding: 5,
          }}
          onPress={() => setFilter("")}
        >
          <Text
            style={{
              fontFamily: "SemiBold",
              color: "black",
              fontSize: 15,
            }}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: "#A0A0A0",
            alignItems: "center",
            height: 35,
            borderRadius: 20,
            padding: 5,
          }}
          onPress={() => setFilter("doctor")}
        >
          <Text
            style={{
              fontFamily: "SemiBold",
              color: "#A0A0A0",
              fontSize: 15,
            }}
          >
            Created by Dr.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: "#A0A0A0",
            alignItems: "center",
            height: 35,
            borderRadius: 20,
            padding: 5,
          }}
          onPress={() => setFilter("me")}
        >
          <Text
            style={{
              fontFamily: "SemiBold",
              color: "#A0A0A0",
              fontSize: 15,
            }}
          >
            Created by me
          </Text>
        </TouchableOpacity>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#A0A0A0",
            alignItems: "center",
            height: 35,
            borderRadius: 20,
            padding: 5,
          }}
        >
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
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {Data.map((item) => (
          <NewRoutinesCard
            // img={require("../assets/mountain.jpg")}
            img={{ uri: item.image }}
            title={item.title}
            duration={item.duration}
            progressText={item.creater}
          />
        ))}
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
