import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./drawer/AppNavigator";

export function Router() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
