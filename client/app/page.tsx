"use client";
import Products from "@/components/common/products";
import Header from "@/components/header";
import Nav from "@/components/nav";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import nav1 from "@/public/img-nav/nav1.svg";
import nav2 from "@/public/img-nav/nav2.svg";
import nav3 from "@/public/img-nav/nav3.svg";
import nav4 from "@/public/img-nav/nav4.svg";
import n from "./main.module.css";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Nav />
      <nav>
        <section className={n.navbar}>
          <article className="flex flex-col items-center">
            <Image src={nav1} alt="" />
            <span>GIAO HÀNG TOÀN QUỐC</span>
            <span>
              <i>Miễn phí vẫn chuyển các đơn hàng trên 2.000.000VNĐ</i>
            </span>
          </article>
          <article className="flex flex-col items-center">
            <Image src={nav2} alt="" />
            <span>HỖ TRỢ ONLINE 24/24</span>
            <span>
              <i>Luôn hỗ trợ khách hàng 24/24 tất cả các ngày trong tuần</i>
            </span>
          </article>
          <article className="flex flex-col items-center">
            <Image src={nav3} alt="" />
            <span>ĐỔI HÀNG DỄ DÀNG</span>
            <span>
              <i>
                Miến phí đổi trả trong vòng 30 ngày đầu tiên cho tất cả các mặt
                hàng
              </i>
            </span>
          </article>
          <article className="flex flex-col items-center">
            <Image src={nav4} alt="" />
            <span>QUÀ TẶNG HẤP DẪN</span>
            <span>
              <i>Chương trình khuyễn mãi cực lớn và hấp dẫn hàng tháng</i>
            </span>
          </article>
        </section>
      </nav>
      <div className="mt-6 mx-8">
        <Products />
      </div>
    </main>
  );
}
