import { View, Text } from "react-native";

import S from "./styles";
import { ShoppingBagIcon } from "../../../assets/icons/ShoppingBagIcon";
import { type Product } from "../../services/productService";

type ProductCardProps = Product;

export function ProductCard({
  description,
  name,
  price,
  photo,
}: ProductCardProps) {
  return (
    <View>
      <S.Container
        style={{
          shadowOffset: { width: 0, height: 1 },
        }}
      >
        <S.Image source={{ uri: photo }} resizeMode="contain" />
        <S.NameAndPriceWrapper>
          <S.Name>{name}</S.Name>
          <S.PriceWrapper>
            <S.Price>{price}</S.Price>
          </S.PriceWrapper>
        </S.NameAndPriceWrapper>
        <S.Description>{description}</S.Description>
      </S.Container>
      <S.BuyButton activeOpacity={0.7} onPress={() => null}>
        <ShoppingBagIcon />
        <S.BuyButtonText>COMPRAR</S.BuyButtonText>
      </S.BuyButton>
    </View>
  );
}
