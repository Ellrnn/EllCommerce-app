import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen } from "../../screens/Home/HomeScreen";
import { CustomDrawerContent } from "./components/CustomDrawerContent";

export type AppDrawerParamList = {
  Home: undefined;
};

const AppDrawer = createDrawerNavigator<AppDrawerParamList>();

export function AppNavigator() {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        swipeEnabled: false,
        drawerPosition: "right",
        drawerStyle: { width: "85%" },
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </AppDrawer.Navigator>
  );
}
