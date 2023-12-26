import Image from "next/image";
import formatPrice from "@/util/priceFormat";

export default function Product({ name, image, prices }) {
  return (
    <div>
      <Image src={image} alt={name} width={400} height={400} />
      <h1>{name}</h1>
      {formatPrice(prices)}
    </div>
  );
}
