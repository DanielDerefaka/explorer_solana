import React from "react";

import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/global/mode-toogle";
import MagicButton from "../MagicButton";

const Navbar = () => {
  return (
    <div className="p-4 fixed top-0 left-0 right-0 z-10 flex items-center justify-between">
      <aside className="flex items-center gap-2">
        <Image src={"/Solana_logo.png"} alt="image" width={40} height={40} />
        <span className="text-xl font-bold ">Sol explorer.</span>
      </aside>

      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%]  translate-y-[-50%] ">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}> Overview </Link>
          <Link href={"#"}> Transaction </Link>
          <Link href={"#"}> Blocks </Link>
          <Link href={"#"}> Accounts </Link>
          <Link href={"#"}> NFTs </Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#39b245_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Connnect
          </span>
        </button>

        {/* <UserButton afterSignOutUrl="/"/>  */}
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navbar;
