"use client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";

export default function AddCart({
  name,
  id,
  image,
  unit_amount,
  quantity,
}: AddCartType) {
  const cartStore = useCartStore();

  return (
    <div>
      <button
        onClick={() =>
          cartStore.addProduct({ id, name, quantity, unit_amount, image })
        }
        className="my-12 text-white py-2 px-6 font-medium rounded-md bg-[#1c4e4e]"
      >
        Add to cart
      </button>
    </div>
  );
}
