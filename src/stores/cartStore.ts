import { create } from "zustand";

import { type Product } from "../services/productService";

export type CartProduct = Product & {
  quantity: number;
};

type CartState = {
  /**Lista de produtos que estão no carrinho */
  products: CartProduct[];

  /**Quantidade de produtos no carrinho, independente de produtos repetidos*/
  productCount: number;

  /**Soma total do carrinho */
  totalPrice: number;

  /**Função que adiciona 1 produto ao carrinho */
  addProduct: (product: Product) => void;

  removeProduct: (product: CartProduct) => void;

  deleteProduct: (product: CartProduct) => void;
};

export const useCartStore = create<CartState>((alterarEstadoDoCarrinho) => {
  // Initial value of cart store
  return {
    products: [],
    productCount: 0,
    totalPrice: 0,

    addProduct(produtoQueVaiSerAdicionadoAoCarrinho) {
      return alterarEstadoDoCarrinho((carrinhoAntigo) => {
        const carrinhoAlterado: Partial<CartState> = {};
        let novaListaDeProdutos: CartProduct[] = [];

        const novoProdutoJaEstaNaListaDeProdutosDoCarrinhoAntigo =
          carrinhoAntigo.products.some((product) => {
            return product.id === produtoQueVaiSerAdicionadoAoCarrinho.id;
          });

        if (novoProdutoJaEstaNaListaDeProdutosDoCarrinhoAntigo) {
          novaListaDeProdutos = carrinhoAntigo.products.map((product) => {
            if (product.id === produtoQueVaiSerAdicionadoAoCarrinho.id) {
              product.quantity = product.quantity + 1;
            }

            return product;
          });
        } else {
          const novoProduto = {
            ...produtoQueVaiSerAdicionadoAoCarrinho,
            quantity: 1,
          };

          novaListaDeProdutos = [...carrinhoAntigo.products, novoProduto];
        }

        carrinhoAlterado.products = novaListaDeProdutos;
        carrinhoAlterado.productCount = carrinhoAntigo.productCount + 1;
        carrinhoAlterado.totalPrice =
          carrinhoAntigo.totalPrice +
          Number(produtoQueVaiSerAdicionadoAoCarrinho.price);

        return carrinhoAlterado;
      });
    },
    removeProduct(produtoQueVaiSerRemovidoDoCarrinho) {
      return alterarEstadoDoCarrinho((carrinhoAntigo) => {
        const carrinhoAlterado: Partial<CartState> = {};
        let novaListaDeProdutos: CartProduct[] = [];

        if (produtoQueVaiSerRemovidoDoCarrinho.quantity > 1) {
          novaListaDeProdutos = carrinhoAntigo.products.map((product) => {
            if (product.id === produtoQueVaiSerRemovidoDoCarrinho.id) {
              product.quantity = product.quantity - 1;
            }
            return product;
          });
        } else {
          novaListaDeProdutos = carrinhoAntigo.products.filter((product) => {
            return product.id !== produtoQueVaiSerRemovidoDoCarrinho.id;
          });
        }

        carrinhoAlterado.products = novaListaDeProdutos;
        carrinhoAlterado.productCount = carrinhoAntigo.productCount - 1;
        carrinhoAlterado.totalPrice =
          carrinhoAntigo.totalPrice - produtoQueVaiSerRemovidoDoCarrinho.price;

        return carrinhoAlterado;
      });
    },
    deleteProduct(produtoQueVaiSerDeletado) {
      return alterarEstadoDoCarrinho((carrinhoAntigo) => {
        const carrinhoAlterado: Partial<CartState> = {};
        let novaListaDeProdutos: CartProduct[] = [];

        novaListaDeProdutos = carrinhoAntigo.products.filter((product) => {
          return product.id !== produtoQueVaiSerDeletado.id;
        });

        carrinhoAlterado.products = novaListaDeProdutos;

        carrinhoAlterado.productCount =
          carrinhoAntigo.productCount - produtoQueVaiSerDeletado.quantity;

        carrinhoAlterado.totalPrice =
          carrinhoAntigo.totalPrice -
          produtoQueVaiSerDeletado.price * produtoQueVaiSerDeletado.quantity;

        return carrinhoAlterado;
      });
    },
  };
});
