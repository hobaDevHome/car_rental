"use client ";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const NabBar = () => {
  return (
    <div className="flex items-center justify-between p-3 shadow-lg">
      <Image src="/logo.png" alt="" width={80} height={100} />
      <div className="hidden md:flex gap-5">
        <h2 className="navBar-link">Home</h2>
        <h2 className="navBar-link">History</h2>
        <h2 className="navBar-link">Contact Us</h2>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NabBar;
