import { StyleSheet, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./Screens/LoadingScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    SemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <HomeScreen />;
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
