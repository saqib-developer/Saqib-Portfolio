import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="bg-violet-950 font-sans">
      <nav className="flex justify-around">
        <a href="/">
          <Image src={"/img/saqib-img-4.png"} alt="Saqib Image" className="rounded-full" width={50} height={50} />
        </a>
        <ul className="flex justify-around align-middle w-64">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
