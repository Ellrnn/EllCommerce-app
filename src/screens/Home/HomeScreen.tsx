import { StatusBar } from "expo-status-bar";

import S from "./styles";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Body } from "./components/Body/Body";

export function HomeScreen() {
  return (
    <>
      <StatusBar style="light" />
      <S.Container edges={["top"]}>
        <Header />
        <Body />
        <Footer />
      </S.Container>
    </>
  );
}
