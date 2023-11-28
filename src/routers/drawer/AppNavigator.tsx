import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen } from "../../screens/Home/HomeScreen";

export type AppDrawerParamList = {
  Home: undefined;
};

const AppDrawer = createDrawerNavigator<AppDrawerParamList>();

export function AppNavigator() {
  return (
    <AppDrawer.Navigator
      initialRouteName="Home"
      screenOptions={{ swipeEnabled: false, drawerPosition: "right" }}
    >
      <AppDrawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </AppDrawer.Navigator>
  );
}
