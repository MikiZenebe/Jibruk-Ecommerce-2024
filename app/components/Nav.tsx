"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { useCartStore } from "@/store";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function Nav({ user }: Session) {
  const cartStore = useCartStore();

  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-[#1c4e4e]">Jibruk</h1>
      </Link>

      <ul className="flex items-center gap-6">
        {/* Toggle the cart */}
        <li
          onClick={() => cartStore.toggleCart()}
          className="flex items-center text-3xl relative cursor-pointer"
        >
          <ShoppingBagIcon className="h-6 w-6 " />
          <span className="bg-[#1c4e4e] text-white text-sm font-bold w-5 h-5 rounded-full absolute left-3 bottom-3 flex items-center justify-center">
            {cartStore.cart.length}
          </span>
        </li>
        {!user && (
          <div>
            <li className="bg-[#1c4e4e] text-white py-1 px-4 rounded-md">
              <button onClick={() => signIn()}>Sign in</button>
            </li>
          </div>
        )}

        {user && (
          <>
            <li>
              <Image
                src={user?.image as string}
                alt={user?.name as string}
                width={30}
                height={30}
                className="rounded-full"
              />
            </li>
          </>
        )}
      </ul>

      {cartStore.isOpen && <Cart />}
    </nav>
  );
}
