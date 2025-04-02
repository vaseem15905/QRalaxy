import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full  text-white p-4 flex items-center">
      {/* Logo on the left */}
      <div className="ml-4">
        <Image src="/fullLogo.png" alt="Logo" width={200} height={80} />
      </div>
    </nav>
  );
}
