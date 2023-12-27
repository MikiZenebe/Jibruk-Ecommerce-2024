import Image from "next/image";
import formatPrice from "@/util/priceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";

export default function Product({
  name,
  image,
  unit_amount,
  description,
  metadata,
  id,
}: ProductType) {
  const { features } = metadata;
  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, description, features, id },
      }}
    >
      {" "}
      <div className="text-gray-700">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="w-full h-72 object-cover rounded-lg"
        />

        <div>
          <h1 className="font-medium py-2">{name}</h1>
          <h2 className="text-sm text-[#1c4e4e]">
            {unit_amount && formatPrice(unit_amount)}
          </h2>
        </div>
      </div>
    </Link>
  );
}
