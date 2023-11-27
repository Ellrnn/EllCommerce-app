import styled, { css } from "styled-components/native";
import { Text as NativeText } from "react-native";

const Footer = styled.View`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  align-items: center;
`;

const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.regular};
    font-size: 12px;
  `}
`;

export default { Footer, Text };
