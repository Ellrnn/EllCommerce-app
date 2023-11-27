import S from "./styles";

import { ShoppingCartIcon } from "../../../../../assets/icons/ShoppingCartIcon";

export function Header() {
  return (
    <S.Header>
      <S.TextWrapper>
        <S.Text type="primary">ELL</S.Text>
        <S.Text type="secondary">Commerce</S.Text>
      </S.TextWrapper>
      <S.CartButton activeOpacity={0.7}>
        <ShoppingCartIcon width={16} height={16} />
        <S.TextCart>0</S.TextCart>
      </S.CartButton>
    </S.Header>
  );
}
