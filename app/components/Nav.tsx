"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Nav({ user }: Session) {
  return (
    <nav className="flex justify-between items-center py-8">
      <h1 className="font-bold text-[#1c4e4e]">Jibruk</h1>

      <ul className="flex items-center gap-6">
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
                width={45}
                height={45}
                className="rounded-full"
              />
            </li>

            <li>Dashboard</li>
          </>
        )}
      </ul>
    </nav>
  );
}
