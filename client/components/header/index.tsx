"use client";
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import avatar from "../../public/avatar-1.png";
import Link from "next/link";

const categories = [
  { id: 1, name: "Tôm" },
  { id: 2, name: "Cua" },
  { id: 3, name: "Ghẹ" },
  { id: 4, name: "Cá" },
  { id: 5, name: "Mực" },
];

export default function Header() {
  return (
    <div className="w-full bg-black h-[60px]">
      <div className="flex items-center justify-between px-8">
        <div className="w-[60px] block h-[60px]">
          <Image
            src={avatar.src}
            alt="logo web"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <nav>
          <ul className="flex text-white items-center gap-4">
            <li>
              <Link href={"/"}>Trang chủ</Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/${category.id}`} className=" hover:text-sky-600">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center border bg-white w-[245px] rounded">
            <input
              type="text"
              name="search"
              id="search"
              className="outline-none py-1 pl-2"
              placeholder="Tìm kiếm..."
            />
            <FaSearch className="size-[18px] bg-white" />
          </div>
          <IoCart className="size-[24px] text-white" />
          <FaUser className="size-[18px] text-white" />
        </div>
      </div>
    </div>
  );
}
