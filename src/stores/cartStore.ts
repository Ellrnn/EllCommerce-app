import { create } from "zustand";
import { Product } from "../services/productService";

type CartProduct = Product & {
  quantity: number;
};

type CartState = {
  products: CartProduct[];
};

export const useCartStore = create<CartState>((set) => {
  return { products: [] };
});
