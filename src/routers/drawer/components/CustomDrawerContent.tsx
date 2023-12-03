import { type DrawerContentComponentProps } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";

import { CloseCartIcon } from "../../../../assets/icons/CloseCartIcon";
import { SideBarProductCard } from "./SideBarProductCard/SideBarProductCard";
import S from "./styles";
import { useCartStore } from "../../../stores/cartStore";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { products, totalPrice } = useCartStore();

  return (
    <S.Container edges={["top"]}>
      <S.Header>
        <S.Text>Carrinho de compras</S.Text>
        <TouchableOpacity onPress={props.navigation.closeDrawer}>
          <CloseCartIcon />
        </TouchableOpacity>
      </S.Header>
      <S.Body
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 36, paddingTop: 8, gap: 16 }}
      >
        {products?.map((product) => {
          return <SideBarProductCard product={product} key={product.id} />;
        })}
      </S.Body>
      <S.Footer>
        <S.TotalWrapper>
          <S.Total>Total:</S.Total>
          <S.Total style={{ flex: 1, textAlign: "right" }}>
            R${totalPrice}
          </S.Total>
        </S.TotalWrapper>
        <S.ChekoutButton activeOpacity={0.7}>
          <S.Total>Finalizar Compra</S.Total>
        </S.ChekoutButton>
      </S.Footer>
    </S.Container>
  );
}
