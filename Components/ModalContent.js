import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ModalContent = ({ press }) => {
  return (
    <View style={{ width: 328 }}>
      <Pressable
        onPress={press}
        style={{
          width: "100%",
          height: 39,
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Ionicons
          name="close-circle-outline"
          size={39}
          color={"#3A643B"}
        ></Ionicons>
      </Pressable>

      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => alert("Functionality not added")}
      >
        <Text style={styles.btnText}>Create New Routine</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 10, marginBottom: 10, left: 10, width: 280 }}>
        <Text
          style={styles.subText}
        >{`\u25AA  Your own personalization routine`}</Text>
        <Text style={styles.subText}>{`\u25AA  Add upto 7 reminders`}</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Nunito", color: "#646665", fontSize: 17 }}>
          OR
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => alert("Functionality not added")}
        style={styles.secBtn}
      >
        <Text
          style={{
            fontFamily: "Nunito",
            color: "#3A643B",
            fontSize: 18,
          }}
        >
          Import From Templates
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 10, marginBottom: 10, left: 10, width: 280 }}>
        <Text
          style={styles.subText}
        >{`\u25AA  Multiple Templtes created by us`}</Text>
        <Text
          style={styles.subText}
        >{`\u25AA  Customize according to your need`}</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Nunito",
            color: "#646665",
            fontSize: 17,
            textDecorationLine: "underline",
          }}
        >
          View sample templates
        </Text>
      </View>
    </View>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  btnStyle: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3A643B",
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },

  btnText: {
    fontFamily: "SemiBold",
    color: "white",
    fontSize: 18,
  },

  subText: {
    fontFamily: "Nunito",
    color: "#646665",
    fontSize: 15,
  },

  secBtn: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3A643B",
    backgroundColor: "white",
    marginTop: 15,
  },
});
