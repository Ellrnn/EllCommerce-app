import { api } from "./api/config";

export type Product = {
  id: number;
  photo: string;
  name: string;
  brand: string;
  description: string;
  price: number;
};

async function getProducts() {
  const response = await api.get<{ products: Product[]; count: number }>(
    "/products",
    {
      params: {
        page: 1,
        rows: 8,
        sortBy: "id",
        orderBy: "DESC",
      },
    }
  );

  return response.data.products;
}

export const productsService = { getProducts };
