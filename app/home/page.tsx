"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Home() {
  const pathName = usePathname();
  console.log("giá trị pathName", pathName);

  return (
    <div>
      Trang chủ
      <Link
        className={pathName == "/home/news" ? "active" : ""}
        href="/home/news"
      >
        News
      </Link>
      <Link
        className={pathName == "/home/contact" ? "active" : ""}
        href="/home/contact"
      >
        Contact
      </Link>
    </div>
  );
}
