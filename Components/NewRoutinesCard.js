import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";

const NewRoutinesCard = ({
  img,
  title,
  duration,
  progressText,
  
}) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <View style={styles.imgCont}>
        <Image
          source={img}
          style={styles.image}
          resizeMode="cover" // Adjust as needed
        />
      </View>

      <View style={styles.title}>
        <Text style={styles.titleTXT}>{title}</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.subTXT}>{duration} weeks</Text>
      </View>
      
    </TouchableOpacity>
  );
};

export default NewRoutinesCard;

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    width: 161,
    height: 259,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    padding: 10,
    marginRight: 18,
  },

  imgCont: {
    height: 144,
    width: 144,
    marginBottom: 5,
  },

  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },

  title: {
    width: 144,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  titleTXT: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SemiBold",
    marginBottom: 10,
    marginRight: 10,
  },

  subTXT: {
    fontSize: 14,
    fontWeight: "600",
    color: "#A0A0A0",
    fontFamily: "Nunito",
  },

  progressText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#A0A0A0",
    fontFamily: "Nunito",
  },

  PBcontainer: {
    width: "100%",
    height: 10,
    backgroundColor: "white", // White background color
    borderRadius: 10,
    overflow: "hidden", // Clip the progress bar within the container
  },
  progressBar: {
    height: 10,
    borderRadius: 10,
  },
});
