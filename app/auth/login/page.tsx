"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const checkLogin = true;
  const router = useRouter();

  const loginUser = () => {
    if (checkLogin) {
      router.push("/home");
    }
  };
  return (
    <div>
      Trang đăng nhập
      <button onClick={loginUser}>Login</button>
    </div>
  );
}
