"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

const sanity = createClient({
  projectId: "rgfbd8fd",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const ProductCards: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetching Products
  const fetchProducts = async () => {
    try {
      const query = `
            *[_type == "product"]{
            _id,
            name,
            price,
            description,
            discountPercentage,
            "imageUrl": image.asset->url,
            isFeaturedProduct,
            stockLevel,
            category
            }
            `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("error fetching products:", error);
    }
  };

  // ADD TO CART 
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to Cart`);
  };

  // TRUNCATE DESCRIPTION IF ITS TOO LONG 
  const truncateDescription = (description: string) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  // SEARCH BAR 
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-10">
      {/*SEARCH BAR */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or category..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-200"
        />
      </div>
      
      <h2 className="text-center text-slate-800 mt-4 mb-2">
        Products from API Data
      </h2>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-[#fefae0] shadow-sm rounded-10 gap-4 hover:shadow-gray-700 transition-shadow-lg duration-500 p-10"
          >

            {/* PRODUCT IMAGE */}
            <Image
              src={product.imageUrl}
              alt={product.name || "Product image"}
              height={300}
              width={300}
              className="w-full h-48 object-cover rounded-md"
            />
            
            <div className="relative p-4 bg-white shadow-md rounded-md flex flex-col">
            {/* PRODUCT DETAILS */} 
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-slate-800">
                {truncateDescription(product.description)}
              </p>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              <p className="text-sm text-gray-500">Stock Level: {product.stockLevel}</p>
              {product.isFeaturedProduct && (
              <p className="text-sm text-yellow-500 font-bold">🌟 Featured Product</p>
              )}

              {/* PRICE AND DISCOUNT */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>

              {/* ADD TO CART */}
              <button
                className="w-full bg-[#a3b18a] text-white py-2 rounded-md hover:bg-[#3a5a40]"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* CART SUMMARY */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shado-lg">
        <h2 className="text-lg font-black text-red-800">Cart summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4 ">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >

                {/* CART ITEM DETAILS */}
                <div>
                  <p className="font-md text-slate-900">{item.name}</p>
                  <p className="text-sm text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <Image
                  src={item.imageUrl}
                  alt={item.name || "Product image"}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your cart is empty, add products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
