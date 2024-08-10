import { IoCart } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import ghe_1 from "@/public/product/ghe-1.png";

import product from "./product.module.css";
export default function Product(props: { name: string }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className={product.product_fisrt}>
        <Link href="">
          <Image src={ghe_1} alt="product image" className="object-cover" />
          <span className="text-black">Ruốc cá thu</span>
          <span>175g</span>
          <span>109,000đ</span>
        </Link>
        <div className={product.hover_car}>
          <IoCart />
        </div>
      </div>

      <div className={product.product_fisrt}>
        <Link href="">
          <Image src={ghe_1} alt="product image" className="object-cover" />
          <span className="text-black">Ruốc cá thu</span>
          <span>175g</span>
          <span>109,000đ</span>
        </Link>
        <div className={product.hover_car}>
          <IoCart />
        </div>
      </div>

      <div className={product.product_fisrt}>
        <Link href="">
          <Image src={ghe_1} alt="product image" className="object-cover" />
          <span className="text-black">Ruốc cá thu</span>
          <span>175g</span>
          <span>109,000đ</span>
        </Link>
        <div className={product.hover_car}>
          <IoCart />
        </div>
      </div>

      <div className={product.product_fisrt}>
        <Link href="">
          <Image src={ghe_1} alt="product image" className="object-cover" />
          <span className="text-black">Ruốc cá thu</span>
          <span>175g</span>
          <span>109,000đ</span>
        </Link>
        <div className={product.hover_car}>
          <IoCart />
        </div>
      </div>
    </div>
  );
}
