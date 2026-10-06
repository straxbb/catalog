"use client";

import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  inStock: boolean;
  img: string;
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="hover:border-violet-400/50 transition overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>

          <CardFooter className="flex flex-col gap-3">
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-bold text-white">{product.price} ₽</span>
              <Badge
                className={
                  product.inStock
                    ? "border-green-400/30 bg-green-500/10 text-green-300"
                    : "border-red-400/30 bg-red-500/10 text-red-300"
                }
              >
                {product.inStock ? "В наличии" : "Нет"}
              </Badge>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium py-2 rounded-xl transition">
              <ShoppingCart className="h-4 w-4" />
              В корзину
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}