import S from "./styles";

import { useProducts } from "../../../../hooks/useProducts";
import { ProductCard } from "../../../../components/ProductCard/ProductCard";

export function Body() {
  const { data: productList } = useProducts();

  return (
    <S.Body
      contentContainerStyle={{ gap: 16, padding: 36 }}
      showsVerticalScrollIndicator={false}
    >
      {productList?.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </S.Body>
  );
}
