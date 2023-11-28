import S from "./styles";

import { useProducts } from "../../../../hooks/useProducts";
import { ProductCard } from "../../../../components/ProductCard/ProductCard";
import { useCartStore } from "../../../../stores/cartStore";

export function Body() {
  const { data: productList } = useProducts();
  const { addProduct } = useCartStore();

  return (
    <S.Body
      contentContainerStyle={{ gap: 16, padding: 36 }}
      showsVerticalScrollIndicator={false}
    >
      {productList?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onBuyButtonPress={addProduct}
          />
        );
      })}
    </S.Body>
  );
}
