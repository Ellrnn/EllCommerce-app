import styled, { css } from "styled-components/native";
import { Text as NativeText } from "react-native";

const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue[500]};
  align-items: center;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const TextWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
  gap: 8px;
`;

type TextType = {
  type: "primary" | "secondary";
};
const Text = styled(NativeText)<TextType>`
  ${({ theme, type }) => css`
    color: ${theme.colors.white};
    font-size: ${type === "primary" ? "32px" : "16px"};
    font-family: ${type === "primary" ? theme.font.semiBold : theme.font.light};
  `}
`;

const CartButton = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding: 8px 16px;
`;

const TextCart = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.bold};
  `}
`;

export default {
  Header,
  Text,
  TextWrapper,
  CartButton,
  TextCart,
};
