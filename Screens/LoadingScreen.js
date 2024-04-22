import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const LoadingScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Home");
  }, 3000);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/logo.jpg")}
          style={styles.image}
          resizeMode="cover" // Adjust as needed
        />
      </View>
      <Text style={styles.mainText}>Amrutam.</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#3A643B",
  },

  mainText: {
    fontFamily: "SemiBold",
    color: "white",
    fontSize: 35,
  },

  imgContainer: {
    width: 80,
    height: 80,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
