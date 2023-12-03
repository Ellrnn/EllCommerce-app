import { View } from "react-native";

import S from "./styles";
import { ShoppingBagIcon } from "../../../assets/icons/ShoppingBagIcon";
import { type Product } from "../../services/productService";

type ProductCardProps = {
  product: Product;
  onBuyButtonPress: (product: Product) => void;
};

export function ProductCard({ onBuyButtonPress, product }: ProductCardProps) {
  return (
    <View>
      <S.Container
        style={{
          shadowOffset: { width: 0, height: 1 },
        }}
      >
        <S.Image source={{ uri: product.photo }} resizeMode="contain" />
        <S.NameAndPriceWrapper>
          <S.Name>{product.name}</S.Name>
          <S.PriceWrapper>
            <S.Price>R${Number(product.price)}</S.Price>
          </S.PriceWrapper>
        </S.NameAndPriceWrapper>
        <S.Description>{product.description}</S.Description>
      </S.Container>
      <S.BuyButton
        activeOpacity={0.7}
        onPress={() => onBuyButtonPress(product)}
      >
        <ShoppingBagIcon />
        <S.BuyButtonText>COMPRAR</S.BuyButtonText>
      </S.BuyButton>
    </View>
  );
}
