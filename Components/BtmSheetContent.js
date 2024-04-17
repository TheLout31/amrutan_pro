import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const BtmSheetContent = () => {
  return (
    <View>
      <View style={{ width: 110, height: 24, flexDirection: "row" }}>
        <Ionicons name="time" size={24} color="black" />
        <Text
          style={{
            marginLeft: 5,
            fontFamily: "Nunito",
            fontWeight: "700",
            color: "#3A643B",
          }}
        >
          18 min left
        </Text>
      </View>

      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontFamily: "Nunito",
            fontWeight: "700",
            color: "#3A643B",
            fontSize: 15,
          }}
        >
          Amrutam Skinkey Malt
        </Text>
        <Text
          style={{
            fontFamily: "Nunito",
            color: "#A0A0A0",
            fontSize: 14,
          }}
        >
          Skin Care Routine
        </Text>
      </View>

      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontFamily: "Nunito",
            fontWeight: "700",
            color: "black",
            fontSize: 15,
          }}
        >
          Usage Quantity
          <Text
            style={{
              fontFamily: "Nunito",
              color: "#A0A0A0",
              fontSize: 15,
            }}
          >
            : 1 tbs
          </Text>
        </Text>
        <View
          style={{
            width: 105,
            height: 26,
            marginTop: 15,

            flexDirection: "row",
          }}
        >
          <View style={{ backgroundColor: "#E4FFE4", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "SemiBold",
                color: "black",
                fontSize: 15,
              }}
            >
              Beforemeal
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Nunito",
              color: "#A0A0A0",
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            8:00 am
          </Text>
          <Text
            style={{
              fontFamily: "Nunito",
              color: "#A0A0A0",
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            9:00 pm
          </Text>
        </View>

        {/* BOTTON 1 */}

        <TouchableOpacity
          onPress={() => alert("Functionality not added")}
          style={{
            width: "100%",
            height: 56,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3A643B",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "SemiBold",
              color: "white",
              fontSize: 18,
            }}
          >
            Mark as Complete
          </Text>
        </TouchableOpacity>

        {/* BOTTON 2 */}

        <TouchableOpacity
          onPress={() => alert("Functionality not added")}
          style={{
            width: "100%",
            height: 56,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#3A643B",
            backgroundColor: "white",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Nunito",
              color: "#3A643B",
              fontSize: 18,
            }}
          >
            Snooze for 10min
          </Text>
        </TouchableOpacity>

        {/* BOTTON 3 */}

        <TouchableOpacity
          onPress={() => alert("Functionality not added")}
          style={{
            width: "100%",
            height: 56,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "white",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Nunito",
              color: "#3A643B",
              fontSize: 18,
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BtmSheetContent;
