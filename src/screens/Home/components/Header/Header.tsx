import S from "./styles";

import { ShoppingCartIcon } from "../../../../../assets/icons/ShoppingCartIcon";
import { useCartStore } from "../../../../stores/cartStore";

type HeaderProps = {
  onCartButtonPress: () => void;
};

export function Header(props: HeaderProps) {
  const { products } = useCartStore();

  return (
    <S.Header>
      <S.TextWrapper>
        <S.Text type="primary">ELL</S.Text>
        <S.Text type="secondary">Commerce</S.Text>
      </S.TextWrapper>
      <S.CartButton activeOpacity={0.7} onPress={props.onCartButtonPress}>
        <ShoppingCartIcon width={16} height={16} />
        <S.TextCart>{products.length}</S.TextCart>
      </S.CartButton>
    </S.Header>
  );
}
