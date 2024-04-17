
import { StyleSheet, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { useFonts } from "expo-font";


export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    SemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <HomeScreen />;
  }
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
