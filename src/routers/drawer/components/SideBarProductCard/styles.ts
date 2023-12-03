import styled, { css } from "styled-components/native";

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  align-items: center;
  gap: 12px;
`;

const CloseIconButton = styled.TouchableOpacity`
  position: absolute;
  right: 14px;
`;

const CloseIconText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.regular};
    font-size: 36px;
  `}
`;

const Image = styled.Image`
  height: 100px;
  width: 100%;
  margin-top: 20px;
`;

const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
    font-family: ${theme.font.regular};
    font-size: 16px;
  `}
`;

const CounterAndPriceWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Counter = styled.View`
  border: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
`;

const CountText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.regular};
    font-size: 22px;
  `}
`;

const CounterButton = styled.TouchableOpacity`
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const Price = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 6px;
  padding: 12px 10px;
  align-items: center;
  justify-content: center;
`;

const TextPrice = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.bold};
    font-size: 15px;
  `}
`;

export default {
  Container,
  Image,
  Name,
  CounterAndPriceWrapper,
  Counter,
  CountText,
  CounterButton,
  Price,
  TextPrice,
  CloseIconText,
  CloseIconButton,
};
