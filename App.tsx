import { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { theme } from "./src/global/styles/theme";
import { Router } from "./src/routers/Router";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
