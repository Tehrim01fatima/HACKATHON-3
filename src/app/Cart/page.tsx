"use client";
import React, { useEffect, useState } from "react";
import { Products } from "../../../types/products";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../Actions/action";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1)
      handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your order has been successfully processed",
          "success"
        );
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center lg:text-left">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white shadow rounded-lg mb-4"
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${Number(item.price).toFixed(2)}</p>                  <div className="flex justify-center md:justify-start items-center gap-2 mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="bg-gray-300 text-gray-700 px-3 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border rounded">
                      {item.inventory}
                    </span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="bg-gray-300 text-gray-700 px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total Price:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
