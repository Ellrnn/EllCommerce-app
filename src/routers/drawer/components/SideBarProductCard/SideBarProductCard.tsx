import { PipeIcon } from "../../../../../assets/icons/PipeIcon";
import { useCartStore, type CartProduct } from "../../../../stores/cartStore";
import S from "./styles";

type SideBarProductCardProps = {
  product: CartProduct;
};

export function SideBarProductCard({ product }: SideBarProductCardProps) {
  const { addProduct, removeProduct, deleteProduct } = useCartStore();

  return (
    <S.Container>
      <S.CloseIconButton onPress={() => deleteProduct(product)} hitSlop={4}>
        <S.CloseIconText>X</S.CloseIconText>
      </S.CloseIconButton>
      <S.Image source={{ uri: product.photo }} resizeMode="contain" />
      <S.Name>{product.name}</S.Name>
      <S.CounterAndPriceWrapper>
        <S.Counter>
          <S.CounterButton onPress={() => removeProduct(product)}>
            <S.CountText>-</S.CountText>
          </S.CounterButton>

          <PipeIcon style={{ marginRight: 8 }} />
          <S.CountText>{product.quantity}</S.CountText>
          <PipeIcon style={{ marginLeft: 8 }} />

          <S.CounterButton onPress={() => addProduct(product)}>
            <S.CountText>+</S.CountText>
          </S.CounterButton>
        </S.Counter>
        <S.Price>
          <S.TextPrice>R${Number(product.price)}</S.TextPrice>
        </S.Price>
      </S.CounterAndPriceWrapper>
    </S.Container>
  );
}
