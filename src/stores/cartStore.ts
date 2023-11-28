import { create } from "zustand";

import { Product } from "../services/productService";

type CartProduct = Product & {
  quantity: number;
};

type CartState = {
  /**Lista de produtos que estão no carrinho */
  products: CartProduct[];
  /**Função que adiciona 1 produto ao carrinho */
  addProduct: (product: Product) => void;
};

export const useCartStore = create<CartState>((setCartState) => {
  // Initial value of cart store
  return {
    products: [],

    addProduct: (novoProduto) => {
      setCartState((antigoEstadoDoCarrinho) => {
        return {
          products: [
            ...antigoEstadoDoCarrinho.products,
            { quantity: 1, ...novoProduto },
          ],
        };
      });
    },
  };
});
