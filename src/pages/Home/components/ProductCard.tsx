import React from "react";
import { ShoppingCart, Star, StarOff } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  imageDark?: string;
  discount?: string;
  rating: number;
  reviews: number;
  tags?: string[];
  features?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="rounded-lg bg-white p-6 hover:shadow-sm hover:cursor-pointer">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full"
            src={product.image}
            alt={product.name}
          />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          {product.discount && (
            <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
              {product.discount}
            </span>
          )}
        </div>
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
        >
          {product.name}
        </a>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) =>
              i < Math.round(product.rating) ? (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                />
              ) : (
                <StarOff key={i} className="h-4 w-4 text-gray-300" />
              )
            )}
          </div>
          <p className="text-sm font-medium text-gray-900">
            {product.rating.toFixed(1)}
          </p>
          <p className="text-sm font-medium text-gray-500">
            ({product.reviews})
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900">
            ${product.price.toLocaleString()}
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
