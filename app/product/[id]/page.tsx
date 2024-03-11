import Image from "next/image";
import React from "react";
import { SearchParamTypes } from "@/types/SearchParamsTypes";
import formatPrice from "@/util/priceFormat";
import AddCart from "./AddCart";

export default function ProductDetail({ searchParams }: SearchParamTypes) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap:12 md:gap-24 p-1  text-gray-700">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={400}
        height={400}
        className="object-cover w-full md:w-80 h-auto"
      />
      <div className="font-medium text-gray-700">
        <h1 className="text-2xl py-2">{searchParams.name}</h1>
        <p className="py-2">{searchParams.description}</p>
        <p className="py-2">{searchParams.features}</p>
        <div className="flex gap-2">
          <p className="font-bold text-[#1c4e4e]">
            {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
          </p>
        </div>

        <AddCart {...searchParams} />
      </div>
    </div>
  );
}
