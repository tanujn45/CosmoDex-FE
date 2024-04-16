import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/navigation/BottomNavigation";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  useEffect(() => {
    async function prepare() {
      // Wait for fonts to load
      if (fontsLoaded) {
        // As soon as fonts are loaded, hide the splash screen
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
