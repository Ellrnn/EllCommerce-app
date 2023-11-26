import styled, { css } from "styled-components/native";

const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    padding: 16px;
    gap: 24px;
    shadow-color: ${theme.colors.black};
    shadow-opacity: 0.3;
    shadow-radius: 8px;
    elevation: 2;
  `}
`;

const Image = styled.Image`
  height: 160px;
  width: auto;
  border-radius: 8px;
`;

const NameAndPriceWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.regular};
    font-size: 16px;
    flex: 1;
  `};
`;

const PriceWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 6px 12px;
  align-items: center;
  justify-content: center;
`;

const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.bold};
    font-size: 16px;
  `};
`;

const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.light};
    font-size: 12px;
  `};
`;

const BuyButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
`;

const BuyButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.semiBold};
    font-size: 14px;
  `};
`;

export default {
  Container,
  Image,
  NameAndPriceWrapper,
  Name,
  PriceWrapper,
  Price,
  Description,
  BuyButton,
  BuyButtonText,
};
