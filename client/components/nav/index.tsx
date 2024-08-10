"use client";
import Image from "next/image";
import banner1 from "@/public/banner/Slider ở trang chủ 1-1.png";
import banner2 from "@/public/banner/Slider ở trang chủ 2-1.png";
import { useEffect, useState } from "react";

const images = [banner1, banner2];

export default function Nav() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Image
        src={images[currentImage]}
        alt="banner"
        className="h-full w-full"
        objectFit="cover"
      />
    </div>
  );
}
