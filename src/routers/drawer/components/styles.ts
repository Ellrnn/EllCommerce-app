import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  flex: 1;
`;

const Header = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    color: ${theme.colors.white};
    font-size: 27px;
    flex: 1;
  `}
`;

const Body = styled.ScrollView``;

const Footer = styled.View``;

const TotalWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Total = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    color: ${theme.colors.white};
    font-size: 28px;
  `}
`;

const ChekoutButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  align-items: center;
  padding: 24px;
`;

export default {
  Container,
  Header,
  Text,
  Body,
  Footer,
  TotalWrapper,
  Total,
  ChekoutButton,
};
