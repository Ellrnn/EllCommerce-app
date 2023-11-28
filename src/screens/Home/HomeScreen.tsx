import { StatusBar } from "expo-status-bar";
import { DrawerScreenProps } from "@react-navigation/drawer";

import S from "./styles";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Body } from "./components/Body/Body";
import { AppDrawerParamList } from "../../routers/drawer/AppNavigator";

type Props = DrawerScreenProps<AppDrawerParamList, "Home">;

export function HomeScreen(props: Props) {
  function handleCartPress() {
    props.navigation.openDrawer();
  }

  return (
    <>
      <StatusBar style="light" />
      <S.Container edges={["top"]}>
        <Header onCartButtonPress={handleCartPress} />
        <Body />
        <Footer />
      </S.Container>
    </>
  );
}
